// Génère les icônes PNG de l'app (icons/icon-*.png) à partir de icons/source.jpg.
// Usage : node tools/icones.mjs
import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); }
catch { ({ chromium } = require(join(execSync('npm root -g').toString().trim(), 'playwright'))); }

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const src = 'data:image/jpeg;base64,' + readFileSync(join(root, 'icons', 'source.jpg')).toString('base64');
const browser = await chromium.launch();
for (const t of [32, 180, 192, 512]) {
  const page = await browser.newPage({ viewport: { width: t, height: t } });
  await page.setContent(`<style>*{margin:0}img{display:block;width:${t}px;height:${t}px}</style><img src="${src}">`);
  await page.waitForFunction(() => document.images[0].complete);
  await page.screenshot({ path: join(root, 'icons', `icon-${t}.png`) });
  await page.close();
}
await browser.close();
console.log('OK : icons/icon-{32,180,192,512}.png');
