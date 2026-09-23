// Assemble src/template.html + src/data/*.js en une seule page HTML autonome.
//   dist/school-note.html  → source publiée comme artifact (sans <html>/<head>, ajoutés à la publication)
//   dist/school-note-imprimable.html et index.html → même page avec en-tête complet (navigateur, GitHub Pages)
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
// Icône de l'app (icons/, générées par tools/icones.mjs) : intégrée en data URI pour que la page reste autonome.
const png = t => 'data:image/png;base64,' + readFileSync(join(root, 'icons', `icon-${t}.png`)).toString('base64');
const icones = `<link rel="icon" type="image/png" sizes="32x32" href="${png(32)}">\n` +
  `<link rel="apple-touch-icon" sizes="180x180" href="${png(180)}">\n`;
const corps = template.replace('/*@@DATA@@*/', () => data);
const page = icones + corps;

mkdirSync(join(root, 'dist'), { recursive: true });
writeFileSync(join(root, 'dist', 'school-note.html'), page);
const complet = '<!doctype html>\n<html lang="fr-CA">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n<meta name="theme-color" content="#e8566b">\n<meta name="apple-mobile-web-app-title" content="Mes notes">\n<link rel="manifest" href="manifest.webmanifest">\n' + icones + '</head>\n<body>\n' + corps + '\n</body>\n</html>\n';
writeFileSync(join(root, 'dist', 'school-note-imprimable.html'), complet);
// index.html à la racine : page servie par GitHub Pages
writeFileSync(join(root, 'index.html'), complet);
console.log(`OK : dist/school-note.html (${(page.length / 1024).toFixed(0)} Ko)`);
