// Assemble src/template.html + src/data/*.js en une seule page HTML autonome.
//   dist/school-note.html  → source publiée comme artifact (sans <html>/<head>, ajoutés à la publication)
//   dist/school-note-imprimable.html → même page avec en-tête complet, à ouvrir dans un navigateur pour imprimer
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const dataDir = join(root, 'src', 'data');
const data = readdirSync(dataDir)
  .filter(f => f.endsWith('.js'))
  .sort()
  .map(f => `/* ---- ${f} ---- */\n` + readFileSync(join(dataDir, f), 'utf8'))
  .join('\n');
const template = readFileSync(join(root, 'src', 'template.html'), 'utf8');
if (!template.includes('/*@@DATA@@*/')) throw new Error('Marqueur /*@@DATA@@*/ absent du gabarit');
const page = template.replace('/*@@DATA@@*/', () => data);

mkdirSync(join(root, 'dist'), { recursive: true });
writeFileSync(join(root, 'dist', 'school-note.html'), page);
writeFileSync(
  join(root, 'dist', 'school-note-imprimable.html'),
  '<!doctype html>\n<html lang="fr-CA">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n</head>\n<body>\n' + page + '\n</body>\n</html>\n'
);
console.log(`OK : dist/school-note.html (${(page.length / 1024).toFixed(0)} Ko)`);
