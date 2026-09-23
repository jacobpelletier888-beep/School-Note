/* Mathématique CST — Optimisation (suite) */
Object.assign(DATA.feuilles['math-cst'], {

/* ============ 3. Fonction à optimiser ============ */
'fonction-optimiser': {
  bulle: 'fonction à optimiser',
  sous: 'Fonction à optimiser et droite baladeuse',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [
        'La **fonction à optimiser** (ou fonction objectif) est la règle de la quantité qu\'on veut rendre la plus grande possible (**maximiser**) ou la plus petite possible (**minimiser**).',
        'Forme : <b>Z = ax + by + c</b>',
      ] } ],
      [ { t: 'list', h: 'exemples', items: [
          'Profit : Z = 18x + 20y → à **maximiser**',
          'Coût : C = 4x + 7y + 50 → à **minimiser**',
          'Temps, distance, nombre de personnes, etc.',
        ] } ],
    ] },
    { t: 'box', h: 'le principe clé', f: 'Si une solution optimale existe, elle se trouve à un <b>sommet</b> du polygone de contraintes.' },
    { t: 'cols', c: [
      [ { t: 'list', h: 'méthode 1 : tableau des sommets', items: [
          'Trouver tous les sommets du polygone.',
          'Calculer la valeur de Z à chaque sommet.',
          'La plus grande valeur = **maximum** ; la plus petite = **minimum**.',
          'Le couple (x, y) qui la donne = la **solution optimale**.',
        ] },
        { t: 'list', h: 'méthode 2 : droite baladeuse', items: [
          'On trace des droites ax + by = k (k = valeur de Z). Elles sont toutes **parallèles**, de pente −{{a|b}}.',
          'On « promène » la droite parallèlement à elle-même sur le polygone.',
          'Le **dernier sommet** qu\'elle touche en s\'éloignant (Z grandit) donne le maximum. Le premier qu\'elle touche donne le minimum.',
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 250, h: 215, xmin: 0, xmax: 13, ymin: 0, ymax: 9, tick: 2, grille: 1,
            zones: [ { pts: [[0, 0], [10, 0], [6, 4], [0, 7]] } ],
            droites: [
              { a: [0, 3], b: [5, 0], cls: 'ln2', dash: true, lbl: 'Z = 15', at: [4.2, 1.1], pk: true },
              { a: [0, 6], b: [10, 0], cls: 'ln2', dash: true, lbl: 'Z = 30', at: [9.2, 1.4], pk: true },
              { a: [0, 7.6], b: [38 / 3, 0], cls: 'ln2', dash: true, lbl: 'Z = 38', at: [10, 2.6], pk: true },
            ],
            pts: [ { x: 6, y: 4, lbl: '(6, 4) max', dx: 6, dy: -6, pk: true }, { x: 10, y: 0 }, { x: 0, y: 7 }, { x: 0, y: 0 } ],
            alt: 'droites baladeuses parallèles sur le polygone', cap: 'Z = 3x + 5y : les droites baladeuses sont parallèles' },
        ] } ],
    ] },
    { t: 'tab', h: 'cas particuliers', full: true, lcol: true,
      head: ['Situation', 'Conséquence'],
      rows: [
        ['Deux sommets voisins donnent la même valeur optimale', 'la droite baladeuse est parallèle à un côté : **tous** les points de ce côté sont des solutions optimales'],
        ['Polygone **ouvert** (non borné), a et b positifs', 'il y a un minimum, mais **pas de maximum** (Z peut grandir sans fin)'],
        ['Variables entières et sommet optimal non entier', 'on teste les points entiers du polygone les plus proches de ce sommet'],
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Polygone de sommets (0, 0), (10, 0), (6, 4) et (0, 7). Maximiser Z = 3x + 5y.',
      s: [ 'Z(0, 0) = 3(0) + 5(0) = 0', 'Z(10, 0) = 3(10) + 5(0) = 30', 'Z(6, 4) = 3(6) + 5(4) = 18 + 20 = 38', 'Z(0, 7) = 3(0) + 5(7) = 35' ],
      r: 'maximum de 38 au sommet (6, 4) ; minimum de 0 en (0, 0)' },
    { t: 'ex', h: 'Exemple 2 —', q: 'Même polygone. Maximiser Z = x + 2y.',
      s: [ 'Z(0, 0) = 0', 'Z(10, 0) = 10', 'Z(6, 4) = 6 + 8 = 14', 'Z(0, 7) = 0 + 14 = 14' ],
      p: [ 'Deux sommets voisins donnent 14 : la droite baladeuse x + 2y = k est parallèle au côté x + 2y = 14. **Tous** les points du segment entre (0, 7) et (6, 4) sont optimaux.',
           'Points entiers de ce segment : (0, 7), (2, 6), (4, 5) et (6, 4).' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Polygone ouvert de sommets (0, 6), (3, 3) et (12, 0). Minimiser Z = 2x + 3y.',
      s: [ 'Z(0, 6) = 0 + 18 = 18', 'Z(3, 3) = 6 + 9 = 15', 'Z(12, 0) = 24 + 0 = 24' ],
      p: [ 'Minimum de 15 en (3, 3). Il n\'y a **pas de maximum** : le polygone s\'étend à l\'infini, donc Z peut devenir aussi grand qu\'on veut.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Évaluer Z à un point qui n\'est pas un sommet du polygone.',
          'Oublier un sommet (souvent (0, 0) ou un point sur un axe).',
          'Conclure qu\'il y a un maximum sur un polygone ouvert.',
          'Donner seulement la valeur de Z sans dire le couple (x, y), ou l\'inverse.',
        ] } ],
      [ { t: 'retenir', items: [
          'L\'optimum est toujours à un **sommet**.',
          'Tableau des sommets : on teste chaque sommet dans Z.',
          'Droite baladeuse : pente −{{a|b}}, toujours parallèle.',
          'Égalité entre 2 sommets voisins → tout le côté est optimal.',
        ] } ],
    ] },
  ],
},

/* ============ 4. Problème d'optimisation complet ============ */
'probleme-optimisation': {
  bulle: 'résoudre un problème',
  sous: 'Résoudre un problème d\'optimisation : la démarche complète',
  recto: [
    { t: 'txt', p: [
      'Un **problème d\'optimisation** demande de trouver la meilleure décision possible (le plus grand profit, le plus petit coût…) en respectant des **contraintes** (temps, budget, matériel…).',
    ] },
    { t: 'list', h: 'la démarche en 7 étapes', items: [
      '**1. Définir les variables** : « x : nombre de … », « y : nombre de … ». Toujours avec l\'unité.',
      '**2. Organiser les données** dans un tableau (une ligne par ressource, une colonne par variable).',
      '**3. Écrire le système de contraintes**, sans oublier la non-négativité (x ≥ 0, y ≥ 0).',
      '**4. Écrire la fonction à optimiser** et préciser : maximiser ou minimiser ?',
      '**5. Tracer le polygone de contraintes** dans le plan cartésien (bonne graduation !).',
      '**6. Trouver les sommets et évaluer la fonction** à chacun (tableau des sommets).',
      '**7. Répondre à la question** par une phrase complète, avec les unités.',
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'vocabulaire', items: [
          '**Solution optimale** : le couple (x, y) qui donne la meilleure valeur.',
          '**Valeur optimale** : la valeur de la fonction à ce couple.',
          '**Contrainte** : limite ou exigence du problème.',
          '**Région réalisable** : l\'ensemble des couples qui respectent toutes les contraintes.',
        ] } ],
      [ { t: 'list', h: 'trucs d\'examen', items: [
          'Relis la question : on cherche peut-être seulement x, seulement le profit, ou « combien de plus ».',
          'Choisis une échelle qui laisse voir tous les sommets.',
          'Vérifie chaque sommet dans **toutes** les contraintes.',
          'Des objets se comptent en **nombres entiers** : si le sommet optimal ne l\'est pas, teste les points entiers voisins dans le polygone.',
        ] } ],
    ] },
    { t: 'tab', h: 'modèle de tableau de données', full: true, lcol: true,
      head: ['Ressource', 'Produit A (x)', 'Produit B (y)', 'Limite'],
      rows: [
        ['Temps (h)', 'temps pour 1 A', 'temps pour 1 B', '≤ temps disponible'],
        ['Matériel', 'quantité pour 1 A', 'quantité pour 1 B', '≤ quantité disponible'],
        ['Profit ($)', 'profit par A', 'profit par B', 'à maximiser'],
      ],
      note: 'Chaque ligne « ressource » devient une contrainte ; la ligne profit (ou coût) devient la fonction à optimiser.' },
  ],
  verso: [
    { t: 'txt', h: 'Problème résolu', p: [
      'Une artisane tricote des **tuques** et des **foulards**. Une tuque demande 2 h de tricot et 1 pelote de laine ; un foulard, 3 h et 1 pelote. Elle dispose d\'au plus **60 h** et de **25 pelotes** par mois, et elle a une commande d\'**au moins 5 foulards**. Elle fait un profit de **18 $** par tuque et de **20 $** par foulard. Combien doit-elle en faire de chaque sorte pour maximiser son profit ?',
    ] },
    { t: 'cols', w: '1.1fr 1fr', c: [
      [ { t: 'ex', h: '1.', q: 'x : nombre de tuques · y : nombre de foulards' },
        { t: 'tab', h: '', head: ['2.', 'tuque (x)', 'foulard (y)', 'limite'], rows: [ ['heures', '2', '3', '≤ 60'], ['pelotes', '1', '1', '≤ 25'], ['profit', '18 $', '20 $', 'max.'] ] },
        { t: 'ex', h: '3.', q: 'Contraintes :',
          s: [ '2x + 3y ≤ 60 // heures', 'x + y ≤ 25 // pelotes', 'y ≥ 5 // commande', 'x ≥ 0 // non-négativité' ] },
        { t: 'ex', h: '4.', q: 'Maximiser le profit : <b>P = 18x + 20y</b>' },
        { t: 'ex', h: '6.', q: 'Sommet entre x + y = 25 et 2x + 3y = 60 :',
          s: [ 'x = 25 − y // on isole x', '2(25 − y) + 3y = 60 // substitution', '50 + y = 60', 'y = 10 et x = 15' ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 250, h: 230, xmin: 0, xmax: 27, ymin: 0, ymax: 22, tick: 5, ticky: 5, grille: 5, nx: 'x (tuques)', ny: 'y',
            zones: [ { pts: [[0, 5], [20, 5], [15, 10], [0, 20]] } ],
            droites: [
              { a: [0, 25], b: [25, 0], lbl: 'x + y = 25', at: [19.5, 8.4] },
              { a: [0, 20], b: [30, 0], cls: 'ln2', lbl: '2x + 3y = 60', at: [1, 21], pk: true },
              { a: [0, 5], b: [1, 5], cls: 'ln3', lbl: 'y = 5', at: [22.5, 5.8] },
            ],
            pts: [ { x: 0, y: 5, lbl: '(0, 5)', dx: 4, dy: 13 }, { x: 20, y: 5, lbl: '(20, 5)', dx: -10, dy: 14 }, { x: 15, y: 10, lbl: '(15, 10)', dx: 6, dy: -4 }, { x: 0, y: 20, lbl: '(0, 20)', dx: 5, dy: 13 } ],
            alt: 'polygone du problème des tuques et foulards', cap: '5. polygone de contraintes (fermé)' },
        ] } ],
    ] },
    { t: 'tab', h: '6. tableau des sommets', full: true,
      head: ['Sommet', '(0, 5)', '(20, 5)', '(15, 10)', '(0, 20)'],
      rows: [
        ['P = 18x + 20y', '0 + 100 = 100', '360 + 100 = 460', '270 + 200 = <b>470</b>', '0 + 400 = 400'],
      ] },
    { t: 'txt', h: '7. réponse', p: [
      'Elle doit tricoter **15 tuques et 10 foulards**, pour un profit maximal de **470 $**. (Vérif. : 2(15) + 3(10) = 60 h ✓ · 15 + 10 = 25 pelotes ✓ · 10 ≥ 5 ✓)',
    ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Mélanger les unités (heures et minutes) dans une même contrainte.',
          'Oublier une contrainte cachée dans le texte (« au moins 5 foulards »).',
          'Répondre « (15, 10) » sans phrase ni unités.',
        ] } ],
      [ { t: 'retenir', items: [
          'Variables → tableau → contraintes → fonction → polygone → sommets → réponse.',
          'La réponse est une phrase complète avec des unités.',
        ] } ],
    ] },
  ],
},

/* ============ 5. Modifier un scénario ============ */
scenarios: {
  bulle: 'modifier un scénario',
  sous: 'Analyser et modifier un scénario d\'optimisation',
  recto: [
    { t: 'txt', p: [
      'Une fois le problème résolu, on peut changer une donnée et voir si la **solution optimale** change. C\'est l\'analyse d\'un **scénario**. On compare toujours l\'**ancienne** et la **nouvelle** solution.',
    ] },
    { t: 'tab', h: 'ce qu\'on peut modifier', full: true, lcol: true,
      head: ['Modification', 'Ce qui change', 'Ce qu\'on refait'],
      rows: [
        ['un coefficient de la fonction à optimiser (ex. le profit d\'un article)', 'la **pente** de la droite baladeuse ; le polygone reste le même', 'recalculer Z aux mêmes sommets'],
        ['une contrainte (ajout, retrait, nouvelle limite)', 'la **forme** du polygone et ses sommets', 'retracer, trouver les nouveaux sommets, recalculer Z'],
        ['le but (maximiser ↔ minimiser)', 'le sommet recherché', 'relire le tableau des sommets'],
      ] },
    { t: 'cols', c: [
      [ { t: 'box', h: 'quand un sommet reste-t-il optimal ?', f: 'pente de la 1<sup>re</sup> droite ≤ pente de la droite baladeuse ≤ pente de la 2<sup>e</sup> droite', note: 'Les deux droites sont celles qui se croisent à ce sommet. À l\'égalité, il y a plusieurs solutions optimales (tout un côté).' } ],
      [ { t: 'list', h: 'vocabulaire', items: [
          '**Contrainte non essentielle** (redondante) : on peut l\'enlever sans changer le polygone.',
          '**Contrainte essentielle** : elle forme un côté du polygone.',
          '**Pente** de ax + by = k : −{{a|b}}.',
        ] } ],
    ] },
    { t: 'list', h: 'questions typiques', items: [
      '« Quel profit minimal faut-il par tuque pour que … devienne la solution optimale ? » → inéquation avec les pentes.',
      '« Si on ajoute la contrainte …, de combien le profit diminue-t-il ? » → nouveau polygone, puis différence.',
      '« Cette contrainte est-elle nécessaire ? » → vérifier si elle touche le polygone.',
      '« Proposer une modification pour que … » → plusieurs réponses possibles, il faut justifier.',
    ] },
  ],
  verso: [
    { t: 'txt', p: [ 'On repart du problème des tuques (x) et foulards (y) : 2x + 3y ≤ 60, x + y ≤ 25, y ≥ 5, x ≥ 0 ; P = 18x + 20y ; solution optimale (15, 10) pour 470 $.' ] },
    { t: 'ex', h: 'Exemple 1 —', q: 'Entre quelles valeurs le profit <i>a</i> par tuque peut-il varier pour que (15, 10) reste optimal ? (P = ax + 20y)',
      s: [
        'pentes au sommet (15, 10) : x + y = 25 → −1 et 2x + 3y = 60 → −{{2|3}}',
        'pente de la droite baladeuse : −{{a|20}}',
        '−1 ≤ −{{a|20}} ≤ −{{2|3}}',
        '20 ≥ a ≥ {{40|3}} // × (−20) : on inverse les symboles',
      ],
      r: 'entre 13,33 $ et 20 $ par tuque',
      p: [ 'Vérif. avec a = 25 $ : P(20, 5) = 600 > P(15, 10) = 575 → la solution change bien quand a > 20.' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Nouvelle contrainte : au plus 12 tuques (x ≤ 12). De combien le profit maximal diminue-t-il ?',
      s: [
        'x = 12 et 2x + 3y = 60 → 24 + 3y = 60 → y = 12 // nouveau sommet (12, 12)',
        'x = 12 et y = 5 // nouveau sommet (12, 5)',
        'P(0, 5) = 100 · P(12, 5) = 316 · P(12, 12) = 456 · P(0, 20) = 400',
        '470 − 456 = 14',
      ],
      r: '12 tuques et 12 foulards ; le profit baisse de 14 $' },
    { t: 'ex', h: 'Exemple 3 —', q: 'Elle a maintenant 30 pelotes (x + y ≤ 30). Nouvelle solution ?',
      s: [
        'sur y = 5 : 2x + 15 = 60 → x = 22,5 // x + y = 27,5 ≤ 30 : la contrainte des pelotes ne touche plus le polygone',
        'sommets : (0, 5), (22,5 ; 5), (0, 20) → P = 100, 505, 400',
        '(22,5 ; 5) n\'est pas entier → on teste les points entiers voisins',
        'P(22, 5) = 496 · P(21, 6) = 378 + 120 = 498 // (21, 6) : 2(21) + 3(6) = 60 ✓',
      ],
      r: '21 tuques et 6 foulards, pour 498 $',
      p: [ 'La contrainte « pelotes » est devenue **non essentielle**.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Inverser les symboles quand on multiplie une double inéquation par un négatif (on l\'oublie souvent !).',
          'Garder l\'ancien polygone après avoir ajouté une contrainte.',
          'Donner un nombre non entier de tuques ou de foulards.',
        ] } ],
      [ { t: 'retenir', items: [
          'Coefficient de Z modifié → mêmes sommets, nouveau calcul.',
          'Contrainte modifiée → nouveau polygone.',
          'Sommet optimal : pente baladeuse entre les 2 pentes.',
        ] } ],
    ] },
  ],
},

});
