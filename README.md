# Notes de sec 5

App web d'aide aux études pour le secondaire 5 au Québec : une feuille de notes recto verso (format lettre) par concept, dans un style « notes de cahier ».

## Structure

- `src/template.html` : style et code d'affichage (navigation, rendu des feuilles, impression).
- `src/data/00-matieres.js` : liste des matières et de leurs concepts.
- `src/data/1x-*.js` : contenu des feuilles, un fichier par section. Chaque feuille = `{ bulle, sous, recto: [blocs], verso: [blocs] }`.
- `build.mjs` : assemble tout en une seule page HTML autonome dans `dist/`.
- `tools/pdf.mjs` : génère `dist/pdf/<matière>.pdf`, toutes les feuilles d'une matière à la suite (2 pages par feuille).
- `tests/verif-pages.mjs` : vérifie avec Chromium que chaque feuille entre dans exactement 2 pages lettre.

## Commandes

```sh
node build.mjs                      # génère dist/school-note.html et dist/school-note-imprimable.html
node tests/verif-pages.mjs          # vérifie toutes les feuilles
node tests/verif-pages.mjs math-cst # vérifie une seule matière
node tools/pdf.mjs                  # régénère les PDF de toutes les matières
```

## Héberger avec GitHub Pages

`node build.mjs` génère aussi `index.html` à la racine du dépôt.
Dans Settings → Pages : Source « Deploy from a branch », branche `claude/sec5-study-app-quebec-rsj109`, dossier `/ (root)`, puis Save.

## Imprimer

Ouvrir `dist/school-note-imprimable.html` dans un navigateur, choisir une feuille, cliquer sur « Imprimer ».
Réglages : format Lettre, marges « Aucune », « Graphiques d'arrière-plan » coché.

Pour tout imprimer d'un coup : les PDF prêts à imprimer sont dans `dist/pdf/` (un par matière, recto verso).

## Avancement

- [x] Mathématique CST (Général + 20 concepts)
- [x] Mathématique TS (Général + 21 concepts)
- [x] Mathématique SN (Général + 25 concepts, dont plusieurs partagés avec TS et CST)
- [x] Français (Général + 27 concepts)
- [x] Anglais (Général + 25 concepts)
- [x] Chimie (Général + 28 concepts)
- [x] Physique (Général + 31 concepts)
- [x] Monde contemporain (Général + 14 feuilles)
- [x] Éducation financière (Général + 20 concepts)
