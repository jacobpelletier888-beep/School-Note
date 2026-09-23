/* Mathématique CST — secondaire 5 */
DATA.feuilles['math-cst'] = DATA.feuilles['math-cst'] || {};
Object.assign(DATA.feuilles['math-cst'], {

/* ============ 1. Inéquations ============ */
inequations: {
  bulle: 'inéquations',
  sous: 'Inéquations du 1er degré à deux variables',
  recto: [
    { t: 'cols', w: '1.15fr 1fr', c: [
      [ { t: 'txt', p: [
        'Une **inéquation du 1er degré à deux variables** est une inégalité entre deux expressions du 1er degré qui contiennent deux variables (souvent x et y).',
        'ex. 2x + 3y ≤ 12  ·  y > 4x − 1  ·  x ≥ 5',
      ] } ],
      [ { t: 'txt', p: [
        'Une **solution** est un couple (x, y) qui rend l\'inégalité vraie.',
        'L\'**ensemble-solution** est un **demi-plan** : toute une région du plan cartésien, pas juste une droite.',
      ] } ],
    ] },
    { t: 'tab', h: 'traduire les mots en symboles', full: true, lcol: true,
      head: ['Symbole', 'Se lit', 'Mots-clés dans un problème', 'Droite frontière'],
      rows: [
        ['<', 'plus petit que', 'moins de, inférieur à', 'pointillée'],
        ['≤', 'plus petit ou égal à', 'au plus, au maximum, ne dépasse pas, n\'excède pas', 'pleine'],
        ['>', 'plus grand que', 'plus de, supérieur à, dépasse', 'pointillée'],
        ['≥', 'plus grand ou égal à', 'au moins, au minimum, un minimum de', 'pleine'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'la droite frontière', items: [
          'On remplace le symbole par = : on obtient la droite qui sépare le plan en deux.',
          '**Pleine** si ≤ ou ≥ (les points de la droite font partie de la solution).',
          '**Pointillée** si < ou > (ils n\'en font pas partie).',
          'Pour la tracer : isoler y (forme y = ax + b) ou trouver les deux points à l\'origine.',
        ] } ],
      [ { t: 'list', h: 'quel demi-plan colorier ?', items: [
          'Après avoir isolé y : **y > …** ou **y ≥ …** → au-dessus de la droite.',
          '**y < …** ou **y ≤ …** → en dessous de la droite.',
          '**x > k** → à droite de la droite verticale x = k ; **x < k** → à gauche.',
          '**Point-test** : on remplace un point (souvent (0, 0)) dans l\'inéquation. Vrai → on colorie son côté. Faux → l\'autre côté.',
        ] } ],
    ] },
    { t: 'cols', w: '1.2fr 1fr', c: [
      [ { t: 'box', h: 'règle d\'or', f: 'multiplier ou diviser par un nombre <b>négatif</b> → on <b>inverse</b> le symbole', note: 'ex. −2y ≤ 8  devient  y ≥ −4' },
        { t: 'list', h: 'contraintes de non-négativité', items: [
          'Quand x et y représentent des quantités (objets, heures, personnes), on ajoute **x ≥ 0** et **y ≥ 0**.',
          'Si ce sont des objets entiers, seuls les points à coordonnées entières comptent.',
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 230, h: 190, xmin: -1, xmax: 6, ymin: -1, ymax: 5, tick: 1,
            zones: [ { pts: [[-1, 14 / 3], [6, 0], [6, -1], [-1, -1]] } ],
            droites: [ { a: [0, 4], b: [6, 0], lbl: 'y = −(2/3)x + 4', at: [2.2, 3.4] } ],
            pts: [ { x: 0, y: 0, lbl: '(0, 0) : vrai', dx: 5, dy: 13 } ],
            alt: 'demi-plan sous la droite 2x + 3y = 12', cap: '2x + 3y ≤ 12 : droite pleine, région en dessous' },
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Représenter l\'ensemble-solution de 3x − 2y > 6.',
      fig: { kind: 'plan', w: 210, h: 190, xmin: -2, xmax: 5, ymin: -4, ymax: 3, tick: 1,
        zones: [ { pts: [[-2, -6], [5, 4.5], [5, -4], [-2, -4]] } ],
        droites: [ { a: [0, -3], b: [2, 0], dash: true, lbl: 'y = 1,5x − 3', at: [0.2, 2.2] } ],
        pts: [ { x: 0, y: -3, lbl: '(0, −3)', dx: 6, dy: 4 }, { x: 2, y: 0, lbl: '(2, 0)', dx: 6, dy: 13 } ],
        alt: 'demi-plan sous une droite pointillée', cap: 'pointillée (>) et région en dessous' },
      s: [
        '3x − 2y > 6',
        '−2y > −3x + 6 // on soustrait 3x des deux côtés',
        'y < 1,5x − 3 // ÷ (−2) : on INVERSE le symbole',
        'ordonnée à l\'origine : b = −3',
        'abscisse à l\'origine : 0 = 1,5x − 3 → x = 2',
      ],
      p: [ 'Point-test (0, 0) : 3(0) − 2(0) = 0 > 6 ? **Faux** → (0, 0) n\'est pas dans la région. On colorie bien le côté en dessous.' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Une salle offre **au plus** 250 places. On vend des billets adultes (x) et étudiants (y). Il doit y avoir **au moins le double** de billets étudiants que de billets adultes. Les recettes doivent **dépasser** 3000 $ (adulte : 20 $, étudiant : 12 $). Traduire en inéquations.',
      s: [
        'x : nombre de billets adultes  ·  y : nombre de billets étudiants',
        'x + y ≤ 250 // « au plus » → ≤',
        'y ≥ 2x // étudiants ≥ 2 × adultes',
        '20x + 12y > 3000 // « dépasser » → >',
        'x ≥ 0 et y ≥ 0 // non-négativité',
      ],
      p: [ 'Vérification de y ≥ 2x : si on vend 10 billets adultes, il faut au moins 20 billets étudiants. 20 ≥ 2(10) ✓' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier d\'**inverser** le symbole en divisant par un négatif.',
          'Tracer une droite pleine pour < ou > (elle doit être pointillée).',
          'Écrire 2y ≥ x pour « au moins le double de billets étudiants que d\'adultes ». Vérifie toujours avec un exemple chiffré !',
          'Oublier x ≥ 0 et y ≥ 0 quand les variables sont des quantités.',
          'Colorier le mauvais côté : fais toujours le point-test.',
        ] } ],
      [ { t: 'retenir', items: [
          'Solution d\'une inéquation à 2 variables = **demi-plan**.',
          '≤, ≥ → trait plein · <, > → pointillé.',
          'Isoler y : « > » au-dessus, « < » en dessous.',
          'Négatif × ou ÷ → on inverse.',
          'Point-test (0, 0) pour valider.',
        ] } ],
    ] },
  ],
},

/* ============ 2. Systèmes et polygone de contraintes ============ */
systemes: {
  bulle: 'polygone de contraintes',
  sous: 'Systèmes d\'inéquations et polygone de contraintes',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [
        'Un **système d\'inéquations** est un ensemble de deux inéquations ou plus qui doivent être vraies **en même temps**.',
        'Son ensemble-solution est la région où **tous** les demi-plans se superposent.',
      ] } ],
      [ { t: 'txt', p: [
        'En optimisation, cette région s\'appelle le **polygone de contraintes** (ou région réalisable).',
        'Chaque point du polygone respecte toutes les contraintes du problème.',
      ] } ],
    ] },
    { t: 'cols', w: '1fr 1fr', c: [
      [ { t: 'list', h: 'vocabulaire', items: [
          '**Contrainte** : une condition du problème traduite en inéquation.',
          '**Sommet** : un coin du polygone, à l\'intersection de deux droites frontières.',
          '**Polygone fermé (borné)** : on peut l\'entourer complètement.',
          '**Polygone ouvert (non borné)** : il s\'étend à l\'infini dans une direction.',
          '**Sommet exclu** (point creux) : au moins une des deux droites est pointillée.',
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 240, h: 200, xmin: 0, xmax: 11, ymin: 0, ymax: 9, tick: 2, grille: 1,
            zones: [ { pts: [[0, 0], [10, 0], [6, 4], [0, 7]] } ],
            droites: [
              { a: [0, 10], b: [10, 0], lbl: 'x + y = 10', at: [7.9, 3.4] },
              { a: [0, 7], b: [14, 0], cls: 'ln2', lbl: 'x + 2y = 14', at: [0.6, 7.8], pk: true },
            ],
            pts: [ { x: 0, y: 0 }, { x: 10, y: 0, lbl: '(10, 0)', dx: -18, dy: -6 }, { x: 6, y: 4, lbl: '(6, 4)', dx: 6, dy: -4 }, { x: 0, y: 7, lbl: '(0, 7)', dx: 5, dy: 14 } ],
            alt: 'polygone de contraintes à quatre sommets', cap: 'polygone fermé à 4 sommets' },
        ] } ],
    ] },
    { t: 'list', h: 'démarche pour tracer le polygone', items: [
      '1. Définir les variables (x = …, y = …) avec leurs unités.',
      '2. Traduire chaque contrainte en inéquation, sans oublier x ≥ 0 et y ≥ 0.',
      '3. Tracer chaque droite frontière (pleine ou pointillée).',
      '4. Garder la région qui respecte **toutes** les inéquations (point-test pour chacune).',
      '5. Trouver les coordonnées de chaque sommet.',
    ] },
    { t: 'tab', h: 'trouver un sommet = résoudre un système d\'équations', full: true, lcol: true,
      head: ['Méthode', 'Quand l\'utiliser', 'Comment'],
      rows: [
        ['Comparaison', 'les deux équations sont déjà « y = … »', 'on pose les deux expressions égales'],
        ['Substitution', 'une variable est déjà isolée', 'on remplace cette variable dans l\'autre équation'],
        ['Réduction', 'équations sous la forme ax + by = c', 'on additionne ou soustrait les équations pour éliminer une variable'],
      ],
      note: 'Garde les coordonnées exactes (fractions) : n\'arrondis pas un sommet.' },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Trouver les sommets du polygone défini par : x ≥ 0, y ≥ 0, x + y ≤ 10 et x + 2y ≤ 14.',
      s: [
        'Sommet sur les axes : (0, 0)',
        'x + y = 10 avec y = 0 → (10, 0) // vérif. : 10 + 2(0) = 10 ≤ 14 ✓',
        'x + 2y = 14 avec x = 0 → (0, 7) // vérif. : 0 + 7 = 7 ≤ 10 ✓',
        'Intersection de x + 2y = 14 et x + y = 10 :',
        '(x + 2y) − (x + y) = 14 − 10 // réduction',
        'y = 4',
        'x + 4 = 10 → x = 6',
      ],
      r: 'sommets (0, 0), (10, 0), (6, 4) et (0, 7)' },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 2 —', q: 'Sommet formé par y = 2x et x + y = 12 (substitution).',
          s: [ 'x + 2x = 12', '3x = 12', 'x = 4', 'y = 2(4) = 8' ],
          r: '(4, 8)' } ],
      [ { t: 'ex', h: 'Exemple 3 —', q: 'Les points (0, 12) et (12, 0) sont-ils des sommets du polygone de l\'ex. 1 ?',
          p: [ '(0, 12) : 0 + 2(12) = 24 ≤ 14 ? **Non.** Il est à l\'extérieur.',
               '(12, 0) : 12 + 0 = 12 ≤ 10 ? **Non.**',
               'Ce sont des intersections de droites, mais pas des sommets du polygone.' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Polygone ouvert : x ≥ 0, y ≥ 0, x + y ≥ 6 et x + 3y ≥ 12.',
      fig: { kind: 'plan', w: 210, h: 170, xmin: 0, xmax: 13, ymin: 0, ymax: 8, tick: 3, grille: 1,
        zones: [ { pts: [[0, 8], [0, 6], [3, 3], [12, 0], [13, 0], [13, 8]] } ],
        droites: [ { a: [0, 6], b: [6, 0] }, { a: [0, 4], b: [12, 0], cls: 'ln2' } ],
        pts: [ { x: 0, y: 6, lbl: '(0, 6)', dx: 5, dy: -4 }, { x: 3, y: 3, lbl: '(3, 3)', dx: 5, dy: -5 }, { x: 12, y: 0, lbl: '(12, 0)', dx: -12, dy: -7 } ],
        alt: 'polygone non borné', cap: 'la région continue vers le haut et la droite' },
      s: [ 'x + 3y = 12 et x + y = 6', '2y = 6 // on soustrait les équations', 'y = 3 et x = 3' ],
      p: [ 'Sommets : (0, 6), (3, 3) et (12, 0). Le polygone est **ouvert** : il n\'a pas de limite vers le haut ni vers la droite.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Prendre une intersection de droites qui est **hors** du polygone pour un sommet. Vérifie-la dans toutes les contraintes.',
          'Oublier qu\'un sommet est **exclu** si une de ses deux droites est pointillée.',
          'Arrondir les coordonnées d\'un sommet.',
          'Oublier les axes (x ≥ 0, y ≥ 0) qui ferment souvent le polygone.',
        ] } ],
      [ { t: 'retenir', items: [
          'Polygone = région qui respecte **toutes** les contraintes.',
          'Sommet = intersection de 2 droites **qui respecte les autres contraintes**.',
          'Comparaison, substitution ou réduction pour le trouver.',
          'Fermé ou ouvert : à vérifier avant d\'optimiser.',
        ] } ],
    ] },
  ],
},

});
