/* Mathématique TS — Vecteurs et coniques */
(function () {
  const PI = Math.PI;
  const cosh = Math.cosh, sinh = Math.sinh;
  // région : intérieur du cercle x² + y² = 25 au-dessus de y = x + 1
  const arc = [];
  for (let t = Math.atan2(4, 3); t <= Math.atan2(-3, -4) + 2 * PI + 1e-9; t += 0.05) arc.push([5 * Math.cos(t), 5 * Math.sin(t)]);
  arc.push([-4, -3]);

Object.assign(DATA.feuilles['math-ts'], {

/* ============ 14. Vecteurs : notions de base ============ */
'vecteurs-base': {
  bulle: 'vecteurs',
  sous: 'Vecteurs : notions de base',
  recto: [
    { t: 'cols', w: '1.15fr 1fr', c: [
      [ { t: 'txt', p: [
          'Un **vecteur** est une grandeur qui a une **norme** (sa longueur), une **direction** (la droite qui le porte) et un **sens** (vers où pointe la flèche). On le note <b>u</b>⃗ ou <b>AB</b>⃗ (de A vers B).',
          'Un **scalaire**, lui, n\'est qu\'un nombre (ex. une masse, une température).',
        ] },
        { t: 'form', h: 'formules', items: [
          ['composantes de AB⃗', '(x<sub>2</sub> − x<sub>1</sub>, y<sub>2</sub> − y<sub>1</sub>)'],
          ['norme de u⃗ = (a, b)', '‖u⃗‖ = √(a<sup>2</sup> + b<sup>2</sup>)'],
          ['orientation θ', 'tan θ = {{b|a}}, puis ajuster selon le quadrant'],
          ['à partir de ‖u⃗‖ et θ', 'u⃗ = (‖u⃗‖ cos θ, ‖u⃗‖ sin θ)'],
        ], note: 'L\'orientation se mesure dans le sens antihoraire, à partir de l\'axe des x positifs (0° à 360°).' } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 230, h: 200, xmin: -1, xmax: 7, ymin: -1, ymax: 6, tick: 1,
            fleches: [ { a: [1, 1], b: [5, 4], lbl: 'AB⃗ = (4, 3)', at: [1.1, 3.4] } ],
            segs: [ { a: [1, 1], b: [5, 1], dash: true }, { a: [5, 1], b: [5, 4], dash: true } ],
            pts: [ { x: 1, y: 1, lbl: 'A(1, 1)', dx: -8, dy: 14 }, { x: 5, y: 4, lbl: 'B(5, 4)', dx: 4, dy: -6 } ],
            alt: 'vecteur AB et ses composantes', cap: '‖AB⃗‖ = √(4² + 3²) = 5' },
        ] } ],
    ] },
    { t: 'tab', h: 'vocabulaire', full: true, lcol: true,
      head: ['Vecteurs…', 'Définition'],
      rows: [
        ['**équipollents** (égaux)', 'même norme, même direction, même sens (mêmes composantes), peu importe où ils sont placés'],
        ['**opposés**', 'même norme, même direction, sens contraires : −u⃗ = (−a, −b)'],
        ['**colinéaires**', 'même direction (parallèles) : v⃗ = k u⃗'],
        ['**orthogonaux**', 'directions perpendiculaires'],
        ['**nul**', '0⃗ = (0, 0), norme 0'],
        ['**unitaire**', 'norme 1 : on l\'obtient avec {{u⃗|‖u⃗‖}}'],
      ] },
    { t: 'list', h: 'où on les utilise', items: [
      'Déplacements, vitesses, forces (en physique), translations en géométrie.',
      'Résultante de plusieurs forces : on additionne les vecteurs (feuille suivante).',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'A(−2, 3) et B(4, −5). Composantes, norme et orientation de AB⃗.',
      s: [ 'AB⃗ = (4 − (−2), −5 − 3) = (6, −8)', '‖AB⃗‖ = √(36 + 64) = √100 = 10', 'tan<sup>−1</sup>({{−8|6}}) ≈ −53,13° // calculatrice', 'le vecteur est dans Q4 → θ ≈ 360° − 53,13° = 306,87°' ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 2 —', q: '‖u⃗‖ = 12 et θ = 150°. Composantes ?',
          s: [ 'a = 12 cos 150° = −6√3 ≈ −10,39', 'b = 12 sin 150° = 6' ], r: 'u⃗ ≈ (−10,39 ; 6)' } ],
      [ { t: 'ex', h: 'Exemple 3 —', q: 'u⃗ = (2, −3) et v⃗ = (−6, 9) sont-ils colinéaires ?',
          s: [ '{{−6|2}} = −3 et {{9|−3}} = −3', 'v⃗ = −3u⃗' ], r: 'oui, de sens contraires' } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 4 —', q: 'Vecteur unitaire de u⃗ = (3, 4).',
          s: [ '‖u⃗‖ = 5', '{{u⃗|‖u⃗‖}} = ({{3|5}}, {{4|5}})' ] } ],
      [ { t: 'ex', h: 'Exemple 5 —', q: 'A(1, 2) et AB⃗ = (5, −1). Coordonnées de B ?',
          s: [ 'B = (1 + 5, 2 − 1) = (6, 1)' ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Faire A − B au lieu de B − A pour AB⃗ (on obtient l\'opposé).',
          'Se fier à la calculatrice pour l\'orientation : tan<sup>−1</sup> ne donne que des angles entre −90° et 90°.',
          'Confondre direction (la droite) et sens (la flèche).',
        ] } ],
      [ { t: 'retenir', items: [
          'AB⃗ = arrivée − départ.',
          'Norme = Pythagore.',
          'Orientation : dessine le vecteur pour trouver le bon quadrant.',
        ] } ],
    ] },
  ],
},

/* ============ 15. Opérations sur les vecteurs ============ */
'vecteurs-operations': {
  bulle: 'opérations sur les vecteurs',
  sous: 'Addition, soustraction et multiplication par un scalaire',
  recto: [
    { t: 'cols', w: '1.15fr 1fr', c: [
      [ { t: 'list', h: 'addition graphique', items: [
          '**Règle du triangle** (bout à bout) : on place l\'origine de v⃗ à l\'extrémité de u⃗. La somme va de l\'origine de u⃗ à l\'extrémité de v⃗.',
          '**Règle du parallélogramme** : u⃗ et v⃗ partent du même point ; la somme est la diagonale.',
          '**Relation de Chasles** : AB⃗ + BC⃗ = AC⃗.',
        ] },
        { t: 'form', h: 'avec les composantes', items: [
          ['somme', '(a, b) + (c, d) = (a + c, b + d)'],
          ['différence', 'u⃗ − v⃗ = u⃗ + (−v⃗)'],
          ['scalaire', 'k(a, b) = (ka, kb)'],
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 230, h: 210, xmin: -1, xmax: 6, ymin: -1, ymax: 6, tick: 1,
            fleches: [
              { a: [0, 0], b: [3, 1], lbl: 'u⃗', at: [1.8, 0.2] },
              { a: [0, 0], b: [1, 3], vert: true, lbl: 'v⃗', at: [0.1, 2.2] },
              { a: [3, 1], b: [4, 4], vert: true, dash: true },
              { a: [1, 3], b: [4, 4], dash: true },
              { a: [0, 0], b: [4, 4], pk: true, lbl: 'u⃗ + v⃗ = (4, 4)', at: [2.6, 4.9] },
            ],
            alt: 'règle du parallélogramme', cap: 'u⃗ = (3, 1), v⃗ = (1, 3) : la somme est la diagonale' },
        ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'multiplication par un scalaire k', items: [
          'La norme est multipliée par |k| : ‖ku⃗‖ = |k| ‖u⃗‖.',
          'k > 0 : même sens · k < 0 : sens contraire.',
          'ku⃗ est toujours **colinéaire** à u⃗.',
        ] } ],
      [ { t: 'list', h: 'propriétés', items: [
          'u⃗ + v⃗ = v⃗ + u⃗ (commutativité).',
          '(u⃗ + v⃗) + w⃗ = u⃗ + (v⃗ + w⃗) (associativité).',
          'k(u⃗ + v⃗) = ku⃗ + kv⃗ (distributivité).',
          '‖u⃗ + v⃗‖ ≤ ‖u⃗‖ + ‖v⃗‖ : on n\'additionne **pas** les normes.',
        ] } ],
    ] },
    { t: 'list', h: 'résultante de forces ou de déplacements', items: [
      '1. Décomposer chaque vecteur en composantes : (‖v⃗‖ cos θ, ‖v⃗‖ sin θ).',
      '2. Additionner les composantes en x, puis en y.',
      '3. Calculer la norme et l\'orientation de la résultante.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'u⃗ = (3, 1) et v⃗ = (−1, 4).',
      s: [ 'u⃗ + v⃗ = (2, 5)', 'u⃗ − v⃗ = (3 − (−1), 1 − 4) = (4, −3)', '2u⃗ − 3v⃗ = (6, 2) − (−3, 12) = (9, −10)', '‖u⃗ + v⃗‖ = √29 ≈ 5,39 // mais ‖u⃗‖ + ‖v⃗‖ = √10 + √17 ≈ 7,29' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Simplifier avec la relation de Chasles.',
      s: [ 'AB⃗ + BC⃗ + CD⃗ = AD⃗', 'AB⃗ − CB⃗ = AB⃗ + BC⃗ = AC⃗ // −CB⃗ = BC⃗', 'AB⃗ + BA⃗ = 0⃗' ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 3 —', q: 'Un kayak parcourt 8 km vers l\'est, puis 6 km vers le nord. Déplacement total ?',
          s: [ '(8, 0) + (0, 6) = (8, 6)', 'norme : √(64 + 36) = 10 km', 'θ = tan<sup>−1</sup>({{6|8}}) ≈ 36,87°' ] } ],
      [ { t: 'ex', h: 'Exemple 4 —', q: 'Forces de 20 N à 30° et de 10 N à 120°. Résultante ?',
          s: [ 'F⃗<sub>1</sub> = (20 cos 30°, 20 sin 30°) ≈ (17,32 ; 10)', 'F⃗<sub>2</sub> = (10 cos 120°, 10 sin 120°) ≈ (−5 ; 8,66)', 'R⃗ ≈ (12,32 ; 18,66)', '‖R⃗‖ = √500 ≈ 22,36 N · θ ≈ 56,6°' ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Additionner les normes au lieu des vecteurs.',
          'Soustraire : bien distribuer le signe sur les deux composantes.',
          'Oublier qu\'un k négatif inverse le sens.',
        ] } ],
      [ { t: 'retenir', items: [
          'On additionne composante par composante.',
          'Chasles : AB⃗ + BC⃗ = AC⃗.',
          'Forces : décomposer, additionner, recomposer.',
        ] } ],
    ] },
  ],
},

/* ============ 16. Produit scalaire ============ */
'produit-scalaire': {
  bulle: 'produit scalaire',
  sous: 'Produit scalaire et combinaison linéaire',
  recto: [
    { t: 'txt', p: [ 'Le **produit scalaire** de deux vecteurs donne un **nombre** (un scalaire), pas un vecteur. Il mesure à quel point les deux vecteurs « vont dans la même direction ».' ] },
    { t: 'cols', c: [
      [ { t: 'box', h: 'avec l\'angle θ entre les vecteurs', f: 'u⃗ · v⃗ = ‖u⃗‖ ‖v⃗‖ cos θ', note: '0° ≤ θ ≤ 180°' } ],
      [ { t: 'box', h: 'avec les composantes', f: '(a, b) · (c, d) = ac + bd' } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'ce que le signe veut dire', items: [
          'u⃗ · v⃗ > 0 : angle **aigu** (moins de 90°).',
          'u⃗ · v⃗ = 0 : vecteurs **orthogonaux** (90°).',
          'u⃗ · v⃗ < 0 : angle **obtus** (plus de 90°).',
        ] },
        { t: 'form', h: 'trouver l\'angle', items: [
          ['', 'cos θ = {{u⃗ · v⃗|‖u⃗‖ ‖v⃗‖}}'],
        ] } ],
      [ { t: 'list', h: 'propriétés', items: [
          'u⃗ · v⃗ = v⃗ · u⃗.',
          'u⃗ · (v⃗ + w⃗) = u⃗ · v⃗ + u⃗ · w⃗.',
          'u⃗ · u⃗ = ‖u⃗‖<sup>2</sup>.',
          'Colinéaires de même sens : u⃗ · v⃗ = ‖u⃗‖ ‖v⃗‖.',
          'En physique : travail W = F⃗ · d⃗.',
        ] } ],
    ] },
    { t: 'txt', h: 'combinaison linéaire', p: [
      'Un vecteur w⃗ est une **combinaison linéaire** de u⃗ et v⃗ s\'il existe deux scalaires a et b tels que **w⃗ = a u⃗ + b v⃗**.',
      'Si u⃗ et v⃗ ne sont **pas colinéaires**, ils forment une **base** du plan : tout vecteur du plan s\'écrit d\'une seule façon comme combinaison linéaire de u⃗ et v⃗.',
      'Base usuelle : i⃗ = (1, 0) et j⃗ = (0, 1). Ainsi, (a, b) = a i⃗ + b j⃗.',
      'Pour trouver a et b : on écrit l\'égalité composante par composante et on résout le **système d\'équations**.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'u⃗ = (3, 4) et v⃗ = (5, −2). Produit scalaire et angle.',
      s: [ 'u⃗ · v⃗ = 3(5) + 4(−2) = 15 − 8 = 7', '‖u⃗‖ = 5 · ‖v⃗‖ = √29', 'cos θ = {{7|5√29}} ≈ 0,260', 'θ ≈ 74,9°' ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 2 —', q: 'Valeur de k pour que (k, 3) ⟂ (2, −4).',
          s: [ '2k + 3(−4) = 0', '2k = 12 → k = 6' ] } ],
      [ { t: 'ex', h: 'Exemple 3 —', q: '‖u⃗‖ = 4, ‖v⃗‖ = 6 et θ = 60°.',
          s: [ 'u⃗ · v⃗ = 4 × 6 × cos 60°', '= 24 × {{1|2}} = 12' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Écrire w⃗ = (8, 2) comme combinaison linéaire de u⃗ = (1, 2) et v⃗ = (3, −1).',
      s: [ '(8, 2) = a(1, 2) + b(3, −1)', 'a + 3b = 8  et  2a − b = 2', 'b = 2a − 2 → a + 6a − 6 = 8 → a = 2', 'b = 2(2) − 2 = 2' ],
      r: 'w⃗ = 2u⃗ + 2v⃗',
      p: [ 'Vérif. : 2(1, 2) + 2(3, −1) = (2 + 6, 4 − 2) = (8, 2) ✓' ] },
    { t: 'ex', h: 'Exemple 5 —', q: 'Une force F⃗ = (10, 5) N déplace un objet de d⃗ = (4, 0) m. Travail ?',
      s: [ 'W = F⃗ · d⃗ = 10(4) + 5(0) = 40 J' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Donner un vecteur comme réponse d\'un produit scalaire : c\'est un **nombre**.',
          'Utiliser un angle qui n\'est pas celui **entre** les deux vecteurs (placés origine contre origine).',
          'Croire que u⃗ · v⃗ = 0 veut dire qu\'un des vecteurs est nul.',
        ] } ],
      [ { t: 'retenir', items: [
          'u⃗ · v⃗ = ac + bd = ‖u⃗‖‖v⃗‖ cos θ.',
          'Produit scalaire nul ⇔ orthogonaux.',
          'Combinaison linéaire → système d\'équations.',
        ] } ],
    ] },
  ],
},

/* ============ 17. Lieux géométriques et cercle ============ */
cercle: {
  bulle: 'le cercle',
  sous: 'Lieux géométriques et cercle',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', h: 'lieu géométrique', p: [
          'Un **lieu géométrique** est l\'ensemble de **tous** les points qui respectent une même condition, souvent une condition de **distance**.',
        ] },
        { t: 'list', items: [
          '**Médiatrice** d\'un segment AB : points à égale distance de A et de B.',
          '**Cercle** : points à une distance r d\'un centre.',
          '**Coniques** : ellipse, hyperbole et parabole sont aussi des lieux (feuilles suivantes).',
        ] },
        { t: 'box', h: 'distance entre deux points', f: 'd = √((x<sub>2</sub> − x<sub>1</sub>)<sup>2</sup> + (y<sub>2</sub> − y<sub>1</sub>)<sup>2</sup>)' } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 235, h: 235, xmin: -3, xmax: 9, ymin: -8, ymax: 4, tick: 2, ticky: 2,
            param: [ { px: t => 3 + 5 * Math.cos(t), py: t => -2 + 5 * Math.sin(t), t0: 0, t1: 2 * PI } ],
            segs: [ { a: [3, -2], b: [6, 2], dash: true } ],
            pts: [ { x: 3, y: -2, lbl: 'C(3, −2)', dx: -20, dy: 14 }, { x: 6, y: 2, lbl: '(6, 2)', dx: 4, dy: -4 } ],
            alt: 'cercle de centre 3, −2 et de rayon 5', cap: '(x − 3)² + (y + 2)² = 25' },
        ] } ],
    ] },
    { t: 'form', h: 'équations du cercle', items: [
      ['centre (0, 0), rayon r', 'x<sup>2</sup> + y<sup>2</sup> = r<sup>2</sup>'],
      ['centre (h, k), rayon r', '(x − h)<sup>2</sup> + (y − k)<sup>2</sup> = r<sup>2</sup>'],
      ['forme générale', 'x<sup>2</sup> + y<sup>2</sup> + Dx + Ey + F = 0 → on **complète le carré** pour trouver h, k et r'],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'régions', items: [
          '(x − h)<sup>2</sup> + (y − k)<sup>2</sup> **<** r<sup>2</sup> : **intérieur** du cercle.',
          '(x − h)<sup>2</sup> + (y − k)<sup>2</sup> **>** r<sup>2</sup> : **extérieur**.',
          '≤ ou ≥ : le cercle est inclus (trait plein).',
        ] } ],
      [ { t: 'list', h: 'tangente au cercle', items: [
          'Elle touche le cercle en un seul point.',
          'Elle est **perpendiculaire au rayon** en ce point : sa pente est l\'opposé de l\'inverse de celle du rayon.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 1 —', q: 'Centre (2, −3), passe par (5, 1). Équation ?',
          s: [ 'r<sup>2</sup> = (5 − 2)<sup>2</sup> + (1 + 3)<sup>2</sup> = 9 + 16 = 25' ], r: '(x − 2)<sup>2</sup> + (y + 3)<sup>2</sup> = 25' } ],
      [ { t: 'ex', h: 'Exemple 2 —', q: 'Le point (1, 1) est-il dans le cercle (x − 3)<sup>2</sup> + (y + 2)<sup>2</sup> = 25 ?',
          s: [ '(1 − 3)<sup>2</sup> + (1 + 2)<sup>2</sup> = 4 + 9 = 13', '13 < 25' ], r: 'oui, à l\'intérieur' } ],
    ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Trouver le centre et le rayon de x<sup>2</sup> + y<sup>2</sup> − 6x + 4y − 12 = 0.',
      s: [ '(x<sup>2</sup> − 6x + 9) + (y<sup>2</sup> + 4y + 4) = 12 + 9 + 4 // on complète les carrés', '(x − 3)<sup>2</sup> + (y + 2)<sup>2</sup> = 25' ],
      r: 'centre (3, −2), rayon 5' },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 4 —', q: 'Tangente à x<sup>2</sup> + y<sup>2</sup> = 25 au point (3, 4).',
          s: [ 'pente du rayon : {{4|3}} → pente de la tangente : −{{3|4}}', 'y − 4 = −{{3|4}}(x − 3)', 'y = −{{3|4}}x + {{25|4}}' ] } ],
      [ { t: 'ex', h: 'Exemple 5 —', q: 'Médiatrice de A(0, 0) et B(4, 2).',
          s: [ 'milieu : (2, 1) · pente de AB : {{1|2}}', 'pente perpendiculaire : −2', 'y = −2x + 5' ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Signes du centre : (x + 3)<sup>2</sup> veut dire h = −3.',
          'Donner r<sup>2</sup> comme rayon (25 → r = 5).',
          'Oublier d\'ajouter les mêmes nombres des deux côtés en complétant le carré.',
        ] } ],
      [ { t: 'retenir', items: [
          '(x − h)<sup>2</sup> + (y − k)<sup>2</sup> = r<sup>2</sup>.',
          'Compléter le carré pour la forme générale.',
          'Tangente ⟂ rayon.',
        ] } ],
    ] },
  ],
},

/* ============ 18. Ellipse ============ */
ellipse: {
  bulle: 'l\'ellipse',
  sous: 'L\'ellipse',
  recto: [
    { t: 'cols', w: '1fr 1.1fr', c: [
      [ { t: 'txt', p: [
          'L\'**ellipse** est le lieu des points dont la **somme** des distances à deux points fixes, les **foyers**, est constante.',
          'Cette somme est égale à la longueur du **grand axe**.',
        ] },
        { t: 'box', f: 'PF<sub>1</sub> + PF<sub>2</sub> = longueur du grand axe' } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 290, h: 190, xmin: -6.5, xmax: 6.5, ymin: -4, ymax: 4, tick: 1, ticky: 1,
            param: [ { px: t => 5 * Math.cos(t), py: t => 3 * Math.sin(t), t0: 0, t1: 2 * PI } ],
            segs: [ { a: [-4, 0], b: [3, 2.4], dash: true }, { a: [4, 0], b: [3, 2.4], dash: true } ],
            pts: [ { x: -4, y: 0, lbl: 'F₁', dx: -4, dy: 13, pk: true }, { x: 4, y: 0, lbl: 'F₂', dx: -4, dy: 13, pk: true }, { x: 3, y: 2.4, lbl: 'P', dx: 4, dy: -4 }, { x: 5, y: 0 }, { x: 0, y: 3 } ],
            alt: 'ellipse horizontale avec ses foyers', cap: 'x²/25 + y²/9 = 1 : PF₁ + PF₂ = 10' },
        ] } ],
    ] },
    { t: 'form', h: 'équation (centre à l\'origine)', items: [
      ['forme canonique', '{{x<sup>2</sup>|a<sup>2</sup>}} + {{y<sup>2</sup>|b<sup>2</sup>}} = 1'],
      ['sommets', '(±a, 0) et (0, ±b)'],
      ['centre (h, k)', '{{(x − h)<sup>2</sup>|a<sup>2</sup>}} + {{(y − k)<sup>2</sup>|b<sup>2</sup>}} = 1'],
    ], note: 'Ici, a est le demi-axe horizontal et b le demi-axe vertical. Certains manuels appellent toujours a le demi-grand axe : vérifie la notation de ta classe.' },
    { t: 'tab', h: 'où sont les foyers ?', full: true, lcol: true,
      head: ['Cas', 'Grand axe', 'Foyers', 'Relation'],
      rows: [
        ['a > b', 'horizontal, longueur 2a', '(±c, 0)', 'c<sup>2</sup> = a<sup>2</sup> − b<sup>2</sup>'],
        ['b > a', 'vertical, longueur 2b', '(0, ±c)', 'c<sup>2</sup> = b<sup>2</sup> − a<sup>2</sup>'],
        ['a = b', 'c\'est un cercle', 'au centre', 'c = 0'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'régions', items: [
          '{{x<sup>2</sup>|a<sup>2</sup>}} + {{y<sup>2</sup>|b<sup>2</sup>}} < 1 : intérieur ; > 1 : extérieur.',
        ] } ],
      [ { t: 'list', h: 'applications', items: [
          'Orbites des planètes (le Soleil est à un foyer), salles « à murmures », arches.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Analyser 9x<sup>2</sup> + 25y<sup>2</sup> = 225.',
      s: [ '{{x<sup>2</sup>|25}} + {{y<sup>2</sup>|9}} = 1 // ÷ 225', 'a = 5, b = 3 → grand axe horizontal', 'c<sup>2</sup> = 25 − 9 = 16 → c = 4', 'sommets (±5, 0) et (0, ±3) ; foyers (±4, 0) ; grand axe 10, petit axe 6' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Foyers (0, ±12), grand axe de 26. Équation ?',
      s: [ 'grand axe vertical : 2b = 26 → b = 13 ; c = 12', 'a<sup>2</sup> = b<sup>2</sup> − c<sup>2</sup> = 169 − 144 = 25' ],
      r: '{{x<sup>2</sup>|25}} + {{y<sup>2</sup>|169}} = 1' },
    { t: 'ex', h: 'Exemple 3 —', q: 'Centre (1, −2), demi-axe horizontal 4, demi-axe vertical 2.',
      s: [ '{{(x − 1)<sup>2</sup>|16}} + {{(y + 2)<sup>2</sup>|4}} = 1', 'c = √(16 − 4) = √12 = 2√3 ≈ 3,46', 'foyers (1 ± 2√3, −2)' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Une arche semi-elliptique a 20 m de large et 6 m de haut. Hauteur à 5 m du centre ?',
      s: [ '{{x<sup>2</sup>|100}} + {{y<sup>2</sup>|36}} = 1', 'y<sup>2</sup> = 36(1 − {{25|100}}) = 27', 'y = √27 ≈ 5,20 m' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier de diviser pour obtenir « = 1 ».',
          'Utiliser c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> (c\'est pour l\'hyperbole !).',
          'Mettre les foyers sur le petit axe.',
        ] } ],
      [ { t: 'retenir', items: [
          'Somme des distances = grand axe.',
          'Ellipse : c<sup>2</sup> = grand<sup>2</sup> − petit<sup>2</sup>.',
          'Foyers sur le grand axe.',
        ] } ],
    ] },
  ],
},

/* ============ 19. Hyperbole ============ */
hyperbole: {
  bulle: 'l\'hyperbole',
  sous: 'L\'hyperbole',
  recto: [
    { t: 'cols', w: '1fr 1.15fr', c: [
      [ { t: 'txt', p: [
          'L\'**hyperbole** est le lieu des points dont la **différence** (en valeur absolue) des distances aux deux foyers est constante.',
          'Elle a deux **branches** et deux **asymptotes** obliques qui se croisent au centre.',
        ] },
        { t: 'box', f: '|PF<sub>1</sub> − PF<sub>2</sub>| = distance entre les sommets' } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 300, h: 215, xmin: -8, xmax: 8, ymin: -6, ymax: 6, tick: 2, ticky: 2,
            param: [
              { px: t => 4 * cosh(t), py: t => 3 * sinh(t), t0: -1.8, t1: 1.8 },
              { px: t => -4 * cosh(t), py: t => 3 * sinh(t), t0: -1.8, t1: 1.8 },
            ],
            droites: [ { a: [0, 0], b: [4, 3], cls: 'ln2', dash: true, lbl: 'y = ¾x', at: [5.2, 5.3], pk: true }, { a: [0, 0], b: [4, -3], cls: 'ln2', dash: true } ],
            pts: [ { x: -5, y: 0, lbl: 'F₁', dx: -4, dy: 13, pk: true }, { x: 5, y: 0, lbl: 'F₂', dx: -4, dy: 13, pk: true }, { x: 4, y: 0, lbl: '(4, 0)', dx: -32, dy: -5 }, { x: -4, y: 0 } ],
            alt: 'hyperbole horizontale avec ses asymptotes', cap: 'x²/16 − y²/9 = 1 : foyers (±5, 0)' },
        ] } ],
    ] },
    { t: 'tab', h: 'les deux orientations (centre à l\'origine)', full: true, lcol: true,
      head: ['', 'Ouverte à gauche et à droite', 'Ouverte en haut et en bas'],
      rows: [
        ['équation', '{{x<sup>2</sup>|a<sup>2</sup>}} − {{y<sup>2</sup>|b<sup>2</sup>}} = 1', '{{x<sup>2</sup>|a<sup>2</sup>}} − {{y<sup>2</sup>|b<sup>2</sup>}} = −1'],
        ['sommets', '(±a, 0)', '(0, ±b)'],
        ['foyers', '(±c, 0)', '(0, ±c)'],
        ['constante', '2a', '2b'],
        ['relation', 'c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>', 'c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>'],
        ['asymptotes', 'y = ±{{b|a}}x', 'y = ±{{b|a}}x'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'esquisser', items: [
          'Tracer le **rectangle** de 2a sur 2b centré au centre.',
          'Ses diagonales prolongées sont les **asymptotes**.',
          'Placer les sommets et dessiner les branches qui s\'approchent des asymptotes.',
        ] } ],
      [ { t: 'list', h: 'centre (h, k)', items: [
          '{{(x − h)<sup>2</sup>|a<sup>2</sup>}} − {{(y − k)<sup>2</sup>|b<sup>2</sup>}} = ±1',
          'Asymptotes : y − k = ±{{b|a}}(x − h).',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Analyser 9x<sup>2</sup> − 16y<sup>2</sup> = 144.',
      s: [ '{{x<sup>2</sup>|16}} − {{y<sup>2</sup>|9}} = 1 // ÷ 144', 'a = 4, b = 3, c = √(16 + 9) = 5', 'sommets (±4, 0) · foyers (±5, 0)', 'asymptotes y = ±{{3|4}}x' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Sur cette hyperbole, le point P a une abscisse de 8. Vérifier la définition.',
      s: [ '{{64|16}} − {{y<sup>2</sup>|9}} = 1 → y<sup>2</sup> = 27 → P(8 ; 5,20)', 'PF<sub>2</sub> = √((8 − 5)<sup>2</sup> + 27) = √36 = 6', 'PF<sub>1</sub> = √((8 + 5)<sup>2</sup> + 27) = √196 = 14', '14 − 6 = 8 = 2a ✓' ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 3 —', q: 'Sommets (0, ±6), foyers (0, ±10). Équation ?',
          s: [ 'ouverte en haut et en bas : b = 6, c = 10', 'a<sup>2</sup> = c<sup>2</sup> − b<sup>2</sup> = 100 − 36 = 64' ],
          r: '{{x<sup>2</sup>|64}} − {{y<sup>2</sup>|36}} = −1' } ],
      [ { t: 'ex', h: 'Exemple 4 —', q: '{{(x − 2)<sup>2</sup>|9}} − {{(y + 1)<sup>2</sup>|16}} = 1',
          s: [ 'centre (2, −1) ; a = 3, b = 4, c = 5', 'sommets (−1, −1) et (5, −1)', 'foyers (−3, −1) et (7, −1)', 'asymptotes : y + 1 = ±{{4|3}}(x − 2)' ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Utiliser c<sup>2</sup> = a<sup>2</sup> − b<sup>2</sup> (c\'est pour l\'ellipse).',
          'Se tromper d\'orientation : regarde le signe du membre de droite (= 1 ou = −1).',
          'Oublier les asymptotes dans l\'esquisse.',
        ] } ],
      [ { t: 'retenir', items: [
          'Différence des distances = distance entre sommets.',
          'Hyperbole : c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>.',
          'Asymptotes : y = ±{{b|a}}x.',
        ] } ],
    ] },
  ],
},

/* ============ 20. Parabole ============ */
parabole: {
  bulle: 'la parabole',
  sous: 'La parabole comme conique',
  recto: [
    { t: 'cols', w: '1fr 1fr', c: [
      [ { t: 'txt', p: [
          'La **parabole** est le lieu des points situés à **égale distance** d\'un point fixe, le **foyer** F, et d\'une droite fixe, la **directrice** d.',
          'Le **sommet** est au milieu, entre le foyer et la directrice. c est la distance (avec son signe) du sommet au foyer.',
        ] },
        { t: 'box', f: 'distance (P, F) = distance (P, directrice)' } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 240, h: 200, xmin: -4.5, xmax: 4.5, ymin: -2, ymax: 5, tick: 1, ticky: 1,
            courbes: [ { fn: x => x * x / 4 } ],
            droites: [ { a: [0, -1], b: [1, -1], cls: 'ln2', dash: true, lbl: 'directrice y = −1', at: [-4.3, -1.6], pk: true } ],
            segs: [ { a: [2, 1], b: [0, 1], dash: true }, { a: [2, 1], b: [2, -1], dash: true } ],
            pts: [ { x: 0, y: 1, lbl: 'F(0, 1)', dx: -44, dy: -4, pk: true }, { x: 2, y: 1, lbl: 'P(2, 1)', dx: 5, dy: 3 }, { x: 0, y: 0 } ],
            alt: 'parabole x² = 4y, foyer et directrice', cap: 'x² = 4y : PF = 2 et distance à d = 2' },
        ] } ],
    ] },
    { t: 'tab', h: 'les formes canoniques (sommet (h, k))', full: true, lcol: true,
      head: ['Équation', 'Ouverture', 'Foyer', 'Directrice', 'Axe'],
      rows: [
        ['(x − h)<sup>2</sup> = 4c(y − k)', 'vers le haut si c > 0, vers le bas si c < 0', '(h, k + c)', 'y = k − c', 'x = h'],
        ['(y − k)<sup>2</sup> = 4c(x − h)', 'vers la droite si c > 0, vers la gauche si c < 0', '(h + c, k)', 'x = h − c', 'y = k'],
      ],
      note: 'Sommet à l\'origine : x<sup>2</sup> = 4cy ou y<sup>2</sup> = 4cx.' },
    { t: 'cols', c: [
      [ { t: 'list', h: 'lien avec y = a(x − h)<sup>2</sup> + k', items: [
          'On isole le carré : (x − h)<sup>2</sup> = {{1|a}}(y − k).',
          'Donc 4c = {{1|a}}, ou c = {{1|4a}}.',
        ] } ],
      [ { t: 'list', h: 'propriété de réflexion', items: [
          'Tout rayon parallèle à l\'axe se réfléchit vers le **foyer** : antennes paraboliques, fours solaires.',
          'À l\'inverse, une lumière au foyer sort en faisceau parallèle : phares d\'auto.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 1 —', q: 'x<sup>2</sup> = −12y',
          s: [ '4c = −12 → c = −3', 'ouverte vers le bas', 'foyer (0, −3) · directrice y = 3' ] } ],
      [ { t: 'ex', h: 'Exemple 2 —', q: 'Foyer (2, 5), directrice y = 1. Équation ?',
          s: [ 'sommet au milieu : (2, 3)', 'c = 5 − 3 = 2', '(x − 2)<sup>2</sup> = 8(y − 3)' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Analyser (y + 1)<sup>2</sup> = 8(x − 3).',
      s: [ 'sommet (3, −1) · 4c = 8 → c = 2', 'ouverte vers la droite', 'foyer (3 + 2, −1) = (5, −1)', 'directrice x = 3 − 2 = 1 · axe y = −1' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Une antenne parabolique a 2 m de diamètre et 0,25 m de profondeur. Où placer le récepteur ?',
      s: [ 'sommet à l\'origine : x<sup>2</sup> = 4cy', 'le bord (1 ; 0,25) est sur la parabole : 1 = 4c(0,25) = c', 'c = 1' ],
      r: 'au foyer, à 1 m du fond de l\'antenne' },
    { t: 'ex', h: 'Exemple 5 —', q: 'Foyer de y = 2(x − 1)<sup>2</sup> + 3 ?',
      s: [ '(x − 1)<sup>2</sup> = {{1|2}}(y − 3) → 4c = {{1|2}} → c = {{1|8}}', 'foyer (1 ; 3 + {{1|8}}) = (1 ; 3,125)' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Prendre 4c pour c (diviser par 4 !).',
          'Placer le foyer du mauvais côté : il est toujours **à l\'intérieur** de la courbe.',
          'Confondre (x − h)<sup>2</sup> (ouverte en haut ou en bas) et (y − k)<sup>2</sup> (à gauche ou à droite).',
        ] } ],
      [ { t: 'retenir', items: [
          'PF = distance à la directrice.',
          'Sommet au milieu de F et de d.',
          'c = {{1|4a}}.',
        ] } ],
    ] },
  ],
},

/* ============ 21. Systèmes avec coniques ============ */
'systemes-coniques': {
  bulle: 'systèmes et coniques',
  sous: 'Systèmes d\'équations et d\'inéquations avec des coniques',
  recto: [
    { t: 'cols', w: '1.15fr 1fr', c: [
      [ { t: 'txt', p: [
          'Résoudre un système avec une conique, c\'est trouver les **points d\'intersection** des courbes (ou la **région** commune pour des inéquations).',
        ] },
        { t: 'list', h: 'méthodes', items: [
          '**Substitution** : isoler une variable dans l\'équation de la droite (ou la plus simple), la remplacer dans l\'autre.',
          '**Réduction** : additionner ou soustraire les équations pour éliminer x<sup>2</sup> ou y<sup>2</sup> (deux coniques).',
          'On obtient souvent une équation du **2<sup>e</sup> degré** : factoriser ou utiliser la formule quadratique.',
          'Trouver l\'autre coordonnée de **chaque** solution, puis vérifier.',
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 230, h: 230, xmin: -6.5, xmax: 6.5, ymin: -6.5, ymax: 6.5, tick: 2, ticky: 2,
            zones: [ { pts: arc } ],
            param: [ { px: t => 5 * Math.cos(t), py: t => 5 * Math.sin(t), t0: 0, t1: 2 * PI } ],
            droites: [ { a: [0, 1], b: [1, 2], cls: 'ln2', lbl: 'y = x + 1', at: [3.2, 6], pk: true } ],
            pts: [ { x: 3, y: 4, lbl: '(3, 4)', dx: 5, dy: 3 }, { x: -4, y: -3, lbl: '(−4, −3)', dx: -12, dy: 15 } ],
            alt: 'cercle coupé par une droite', cap: 'région : x² + y² ≤ 25 et y ≥ x + 1' },
        ] } ],
    ] },
    { t: 'tab', h: 'combien de solutions ?', full: true, lcol: true,
      head: ['Situation', 'Nombre de points d\'intersection'],
      rows: [
        ['droite et conique', '0, 1 (droite **tangente**) ou 2'],
        ['deux coniques', 'de 0 à 4'],
      ],
      note: 'Avec une équation ax<sup>2</sup> + bx + c = 0, le discriminant Δ = b<sup>2</sup> − 4ac le dit d\'avance : Δ > 0 → 2 ; Δ = 0 → 1 ; Δ < 0 → 0.' },
    { t: 'list', h: 'système d\'inéquations', items: [
      'Tracer chaque courbe (trait plein pour ≤ ou ≥, pointillé pour < ou >).',
      'Pour chaque inéquation, utiliser un **point-test** pour savoir quel côté garder (intérieur ou extérieur, au-dessus ou au-dessous).',
      'La solution est la région commune à **toutes** les inéquations.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'x<sup>2</sup> + y<sup>2</sup> = 25 et y = x + 1.',
      s: [ 'x<sup>2</sup> + (x + 1)<sup>2</sup> = 25 // substitution', '2x<sup>2</sup> + 2x − 24 = 0 → x<sup>2</sup> + x − 12 = 0', '(x + 4)(x − 3) = 0 → x = 3 ou x = −4', 'y = 4 ou y = −3' ],
      r: '(3, 4) et (−4, −3)' },
    { t: 'ex', h: 'Exemple 2 —', q: 'Pour quelle valeur de k la droite y = x + k est-elle tangente à la parabole x<sup>2</sup> = 4y ?',
      s: [ 'x<sup>2</sup> = 4(x + k) → x<sup>2</sup> − 4x − 4k = 0', 'tangente ⇔ Δ = 0 : (−4)<sup>2</sup> − 4(1)(−4k) = 16 + 16k = 0', 'k = −1 → point de contact : x = 2, y = 1' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'x<sup>2</sup> + y<sup>2</sup> = 25 et x<sup>2</sup> − y<sup>2</sup> = 7.',
      s: [ '2x<sup>2</sup> = 32 // on additionne', 'x<sup>2</sup> = 16 → x = ±4', 'y<sup>2</sup> = 25 − 16 = 9 → y = ±3' ],
      r: '4 solutions : (4, 3), (4, −3), (−4, 3), (−4, −3)' },
    { t: 'ex', h: 'Exemple 4 —', q: 'Région x<sup>2</sup> + y<sup>2</sup> ≤ 25 et y ≥ x + 1 (graphique du recto).',
      p: [ 'Point-test (0, 2) : 0 + 4 = 4 ≤ 25 ✓ et 2 ≥ 0 + 1 ✓. La région est la partie du disque **au-dessus** de la droite, bornes comprises.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier la 2<sup>e</sup> solution d\'une équation du 2<sup>e</sup> degré.',
          'Avec y<sup>2</sup> = 9, oublier y = −3.',
          'Trouver x sans calculer le y qui va avec.',
        ] } ],
      [ { t: 'retenir', items: [
          'Substitution (droite) ou réduction (2 coniques).',
          'Discriminant → nombre de solutions.',
          'Inéquations : point-test pour chaque courbe.',
        ] } ],
    ] },
  ],
},

/* ============ GÉNÉRAL ============ */
general: {
  bulle: 'math TS : tout en 1',
  sous: 'Résumé de l\'année — Mathématique TS, secondaire 5',
  recto: [
    { t: 'cols', c: [
      [ { t: 'form', h: 'exponentielles et logarithmes', items: [
          ['exposants', 'a<sup>m</sup>a<sup>n</sup> = a<sup>m+n</sup> · a<sup>m/n</sup> = <sup>n</sup>√a<sup>m</sup>'],
          ['exponentielle', 'f(x) = a(c)<sup>b(x − h)</sup> + k ; asymptote y = k'],
          ['définition', 'log<sub>c</sub> x = y ⇔ c<sup>y</sup> = x'],
          ['lois', 'log mn = log m + log n · log {{m|n}} = log m − log n'],
          ['', 'log m<sup>n</sup> = n log m · log<sub>c</sub> x = {{log x|log c}}'],
          ['logarithmique', 'f(x) = a log<sub>c</sub>(b(x − h)) + k ; asymptote x = h'],
        ] } ],
      [ { t: 'list', h: 'fonctions', items: [
          '**Réciproque** : échanger x et y, isoler y ; symétrie par rapport à y = x ; dom ↔ ima.',
          '**Opérations** : domaine = intersection (sauf zéros du dénominateur).',
          '**Composition** : (g ∘ f)(x) = g(f(x)), f d\'abord.',
          '**Équations** exp : même base ou log · log : un seul log, forme exponentielle, **vérifier**.',
        ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'form', h: 'trigonométrie', items: [
          ['radian', 'π rad = 180° · L = rθ'],
          ['cercle', 'P(θ) = (cos θ, sin θ)'],
          ['sin et cos', 'f(x) = a sin(b(x − h)) + k ; p = {{2π||b|}}'],
          ['tangente', 'p = {{π||b|}} ; asymptotes à h + {{p|2}} + np'],
          ['sinus', 'solutions θ et π − θ (+ 2πn)'],
          ['cosinus', 'solutions ±θ (+ 2πn)'],
          ['Pythagore', 'sin<sup>2</sup> x + cos<sup>2</sup> x = 1 ; 1 + tan<sup>2</sup> x = sec<sup>2</sup> x'],
        ] } ],
      [ { t: 'form', h: 'vecteurs', items: [
          ['composantes', 'AB⃗ = (x<sub>2</sub> − x<sub>1</sub>, y<sub>2</sub> − y<sub>1</sub>)'],
          ['norme', '‖u⃗‖ = √(a<sup>2</sup> + b<sup>2</sup>)'],
          ['depuis ‖u⃗‖, θ', '(‖u⃗‖ cos θ, ‖u⃗‖ sin θ)'],
          ['Chasles', 'AB⃗ + BC⃗ = AC⃗'],
          ['produit scalaire', 'ac + bd = ‖u⃗‖‖v⃗‖ cos θ'],
          ['orthogonaux', 'u⃗ · v⃗ = 0'],
          ['comb. linéaire', 'w⃗ = a u⃗ + b v⃗ (système)'],
        ] } ],
    ] },
    { t: 'tab', h: 'coniques (centre ou sommet à l\'origine)', full: true, lcol: true,
      head: ['Conique', 'Équation', 'Définition (lieu)', 'Relation'],
      rows: [
        ['cercle', 'x<sup>2</sup> + y<sup>2</sup> = r<sup>2</sup>', 'distance r du centre', '—'],
        ['ellipse', '{{x<sup>2</sup>|a<sup>2</sup>}} + {{y<sup>2</sup>|b<sup>2</sup>}} = 1', 'somme des distances aux foyers = grand axe', 'c<sup>2</sup> = grand<sup>2</sup> − petit<sup>2</sup>'],
        ['hyperbole', '{{x<sup>2</sup>|a<sup>2</sup>}} − {{y<sup>2</sup>|b<sup>2</sup>}} = ±1', '|différence des distances| = constante', 'c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> ; y = ±{{b|a}}x'],
        ['parabole', 'x<sup>2</sup> = 4cy ou y<sup>2</sup> = 4cx', 'PF = distance à la directrice', 'c = {{1|4a}}'],
      ] },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exp. —', q: '3(2)<sup>x + 1</sup> − 5 = 43', s: [ '2<sup>x + 1</sup> = 16 → x = 3' ] },
        { t: 'ex', h: 'Log —', q: 'log<sub>2</sub> x + log<sub>2</sub>(x − 2) = 3', s: [ 'x<sup>2</sup> − 2x − 8 = 0 → x = 4 (−2 rejeté)' ] },
        { t: 'ex', h: 'Réciproque —', q: 'f(x) = 3x − 6', s: [ 'f<sup>−1</sup>(x) = {{x|3}} + 2' ] },
        { t: 'ex', h: 'Composition —', q: 'f(x) = 2x − 3, g(x) = x<sup>2</sup> + 1', s: [ '(g ∘ f)(x) = 4x<sup>2</sup> − 12x + 10' ] } ],
      [ { t: 'ex', h: 'Trigo —', q: '2 sin x − 1 = 0 sur [0, 2π]', s: [ 'x = {{π|6}} ou {{5π|6}}' ] },
        { t: 'ex', h: 'Sinusoïde —', q: 'max 7 en x = 2, min −1 en x = 5', s: [ 'f(x) = 4 cos({{π|3}}(x − 2)) + 3' ] },
        { t: 'ex', h: 'Vecteurs —', q: '(3, 4) · (5, −2)', s: [ '= 15 − 8 = 7 ; θ ≈ 74,9°' ] },
        { t: 'ex', h: 'Conique —', q: '9x<sup>2</sup> + 25y<sup>2</sup> = 225', s: [ 'a = 5, b = 3, c = 4 ; foyers (±4, 0)' ] } ],
    ] },
    { t: 'pieges', items: [
      'log(m + n) ≠ log m + log n ; vérifier les solutions des équations log (argument > 0).',
      'Période = {{2π|b}}, pas 2πb ; mettre b en évidence pour trouver h.',
      'Équations trigo : ne pas oublier la 2<sup>e</sup> solution et la période (ajoutée avant de diviser par b).',
      'Orientation d\'un vecteur : vérifier le quadrant, la calculatrice ne le fait pas.',
      'Ellipse : c<sup>2</sup> = grand<sup>2</sup> − petit<sup>2</sup> ; hyperbole : c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>.',
      'Calculatrice en radians pour la trigo, en degrés pour les angles des vecteurs.',
    ] },
    { t: 'retenir', items: [
      'Exp et log sont réciproques : on passe de l\'une à l\'autre avec c<sup>y</sup> = x ⇔ log<sub>c</sub> x = y.',
      'Paramètres a, b, h, k : même rôle pour toutes les fonctions.',
      'Trigo : cercle d\'abord, calculs ensuite.',
      'Vecteurs : on travaille composante par composante.',
      'Coniques : chaque conique est un lieu de points défini par des distances.',
    ] },
  ],
},

});
})();
