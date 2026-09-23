// Vérifie que chaque feuille entre dans ses 2 pages lettre (écran bureau + impression = 2 pages PDF).
// Usage : node tests/verif-pages.mjs [idMatière]
import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { existsSync, readFileSync, mkdirSync } from 'node:fs';
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
const liste = await page.evaluate(() => DATA.matieres.flatMap(m =>
  Object.keys(DATA.feuilles[m.id] || {}).map(c => [m.id, c])));
let erreurs = 0;
for (const [m, c] of liste) {
  if (seule && m !== seule) continue;
  await page.evaluate(h => { location.hash = h; }, `s-${m}~${c}`);
  await page.waitForSelector('.page[data-cote="verso"]');
  await page.evaluate(() => document.fonts.ready);
  const r = await page.evaluate(() => [...document.querySelectorAll('.page')].map(p => {
    const b = p.querySelector('.p-body');
    return { cote: p.dataset.cote, trop: b.scrollHeight - b.clientHeight, libre: b.clientHeight - [...b.children].reduce((s, e) => s + e.offsetHeight, 0) };
  }));
  await page.emulateMedia({ media: 'print' });
  const pdf = await page.pdf({ format: 'Letter', printBackground: true, preferCSSPageSize: true });
  await page.emulateMedia({ media: 'screen' });
  const pages = (pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
  const ko = r.some(x => x.trop > 0) || pages !== 2;
  if (ko) erreurs++;
  console.log(`${ko ? '✗' : '✓'} ${m}/${c}  ` + r.map(x => `${x.cote}: ${x.trop > 0 ? 'DÉBORDE de ' + x.trop + 'px' : 'libre ' + x.libre + 'px'}`).join(' | ') + `  pdf=${pages} p.`);
}
await browser.close();
if (erreurs) { console.error(`\n${erreurs} feuille(s) à corriger`); process.exit(1); }
console.log('\nToutes les feuilles entrent en 2 pages.');
