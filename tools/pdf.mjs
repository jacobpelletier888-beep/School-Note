// Génère un PDF par matière (toutes ses feuilles, recto verso) dans dist/pdf/.
// Usage : node tools/pdf.mjs [idMatière]
import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { existsSync, readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); }
catch { ({ chromium } = require(join(execSync('npm root -g').toString().trim(), 'playwright'))); }

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const url = pathToFileURL(join(root, 'dist', 'school-note-imprimable.html')).href;
const seule = process.argv[2];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 1000 } });
// Polices Google mises en cache (.cache/polices) : le test ne dépend pas d'un réseau instable.
const cache = join(root, '.cache', 'polices');
mkdirSync(cache, { recursive: true });
const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36';
await page.route(/fonts\.(googleapis|gstatic)\.com/, async route => {
  const u = route.request().url();
  const f = join(cache, createHash('sha1').update(u).digest('hex'));
  for (let i = 0; i < 4 && !existsSync(f); i++) {
    try { execSync(`curl -sSf -m 30 -A "${UA}" -o "${f}" "${u}"`); } catch { /* nouvel essai */ }
  }
  if (!existsSync(f)) return route.abort();
  await route.fulfill({ body: readFileSync(f), contentType: u.includes('googleapis') ? 'text/css' : 'font/woff2', headers: { 'access-control-allow-origin': '*' } });
});
await page.goto(url);
await page.evaluate(() => document.fonts.ready);
try {
  await page.waitForFunction(() => ['Patrick Hand', 'Fredoka'].every(n => [...document.fonts].some(f => f.family.includes(n) && f.status === 'loaded')), null, { timeout: 30000 });
} catch { console.error('Polices Google non chargées : mesure invalide.'); process.exit(2); }
const sortie = join(root, 'dist', 'pdf');
mkdirSync(sortie, { recursive: true });
const matieres = await page.evaluate(() => DATA.matieres.map(m => ({
  id: m.id,
  // Ordre de la liste : Général d'abord, puis les concepts.
  ids: ['general', ...m.sections.flatMap(s => s.concepts.map(c => c.id))].filter(c => (DATA.feuilles[m.id] || {})[c]),
})));
for (const m of matieres) {
  if (seule && m.id !== seule) continue;
  const pages = [];
  for (const c of m.ids) {
    await page.evaluate(h => { location.hash = h; }, `s-${m.id}~${c}`);
    await page.waitForSelector('.page[data-cote="verso"]');
    await page.evaluate(() => document.fonts.ready);
    pages.push(await page.evaluate(() => [...document.querySelectorAll('.page')].map(p => p.outerHTML).join('')));
  }
  await page.evaluate(html => {
    document.getElementById('app').innerHTML = html;
    const tout = document.querySelectorAll('.page');
    tout.forEach((p, i) => p.classList.toggle('last', i === tout.length - 1));
  }, pages.join(''));
  await page.emulateMedia({ media: 'print' });
  const pdf = await page.pdf({ format: 'Letter', printBackground: true, preferCSSPageSize: true });
  await page.emulateMedia({ media: 'screen' });
  const n = (pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
  writeFileSync(join(sortie, `${m.id}.pdf`), pdf);
  const ok = n === m.ids.length * 2;
  console.log(`${ok ? '✓' : '✗'} ${m.id}.pdf  ${m.ids.length} feuilles, ${n} pages, ${Math.round(pdf.length / 1024)} Ko`);
  if (!ok) process.exitCode = 1;
}
await browser.close();
