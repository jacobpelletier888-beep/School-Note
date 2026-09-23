/* Mathématique SN — secondaire 5
   Plusieurs notions sont communes avec TS (et le polygone de contraintes avec CST) :
   on réutilise ces feuilles telles quelles et on ajoute celles propres à SN. */
(function () {
  const TS = DATA.feuilles['math-ts'], CST = DATA.feuilles['math-cst'];

  // En SN, les formules de somme et d'angle double font partie du programme : on retire la note de prudence.
  const identites = JSON.parse(JSON.stringify(TS['identites-trigo']));
  identites.recto.forEach(b => (b.c || []).forEach(col => col.forEach(x => { if (x.h === 'angle double') delete x.note; })));

  DATA.feuilles['math-sn'] = {
    'operations-fonctions': TS['operations-fonctions'],
    reciproque: TS.reciproque,
    exposants: TS.exposants,
    exponentielle: TS.exponentielle,
    logarithmique: TS.logarithmique,
    'equations-exp-log': TS['equations-exp-log'],
    'systemes-inequations': CST.systemes,
    optimisation: {
      bulle: 'optimisation',
      sous: 'Optimisation : fonction à optimiser et solution optimale',
      recto: CST['fonction-optimiser'].recto,
      verso: CST['probleme-optimisation'].verso,
    },
    'cercle-trigo': TS['cercle-trigo'],
    'sinus-cosinus': TS['sinus-cosinus'],
    tangente: TS.tangente,
    'equations-trigo': TS['equations-trigo'],
    'identites-trigo': identites,
    'vecteurs-base': TS['vecteurs-base'],
    'vecteurs-operations': TS['vecteurs-operations'],
    'produit-scalaire': TS['produit-scalaire'],
    cercle: TS.cercle,
    ellipse: TS.ellipse,
    hyperbole: TS.hyperbole,
    parabole: TS.parabole,
    'systemes-coniques': TS['systemes-coniques'],
  };

Object.assign(DATA.feuilles['math-sn'], {

/* ============ 1. Valeur absolue ============ */
'valeur-absolue': {
  bulle: 'valeur absolue',
  sous: 'La fonction valeur absolue',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', h: 'la valeur absolue d\'un nombre', p: [
          'La **valeur absolue** de x, notée **|x|**, est sa **distance à 0** sur la droite numérique. Elle n\'est jamais négative.',
          '|x| = x si x ≥ 0   ·   |x| = −x si x < 0',
          'ex. |7| = 7 · |−7| = 7 · |0| = 0',
        ] },
        { t: 'list', h: 'propriétés', items: [
          '|a × b| = |a| × |b|   ·   |{{a|b}}| = <span class="fr"><span>|a|</span><span>|b|</span></span>',
          '|−a| = |a|   ·   √(x<sup>2</sup>) = |x|',
          '|a + b| ≤ |a| + |b| (on ne sépare **pas** une somme).',
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 240, h: 200, xmin: -5, xmax: 5, ymin: -1, ymax: 6, tick: 1, ticky: 1,
            courbes: [
              { fn: x => Math.abs(x), lbl: 'y = |x|', at: [2.8, 4.3] },
              { fn: x => 2 * Math.abs(x - 1) - 1, cls: 'ln2', lbl: 'y = 2|x − 1| − 1', at: [-4.8, 5.3], pk: true },
            ],
            pts: [ { x: 0, y: 0, lbl: '(0, 0)', dx: -34, dy: 13 }, { x: 1, y: -1, lbl: '(1, −1)', dx: 5, dy: 12, pk: true } ],
            alt: 'courbes en V de la valeur absolue', cap: 'le sommet (h, k) est la pointe du V' },
        ] } ],
    ] },
    { t: 'cols', w: '1.1fr 1fr', c: [
      [ { t: 'form', h: 'la fonction', items: [
          ['règle', 'f(x) = a|b(x − h)| + k'],
          ['forme simplifiée', 'f(x) = a|x − h| + k   (car |b(x − h)| = |b| × |x − h|)'],
          ['sommet', '(h, k) · axe de symétrie : x = h'],
          ['ouverture', 'vers le haut si a > 0 · vers le bas si a < 0'],
          ['pentes des branches', 'a à droite du sommet, −a à gauche (forme simplifiée)'],
          ['domaine · image', 'ℝ · [k, +∞[ si a > 0 ou ]−∞, k] si a < 0'],
        ] } ],
      [ { t: 'list', h: 'zéros', items: [
          'On résout a|x − h| + k = 0, donc |x − h| = −{{k|a}}.',
          '−{{k|a}} > 0 : **deux** zéros · = 0 : **un** (le sommet) · < 0 : **aucun**.',
        ] },
        { t: 'list', h: 'trouver la règle', items: [
          'Le sommet donne h et k.',
          'Un autre point donne a.',
        ] } ],
    ] },
    { t: 'tab', h: 'équations et inéquations (c > 0)', full: true, lcol: true,
      head: ['Forme', 'Devient', 'Sens géométrique'],
      rows: [
        ['|A| = c', 'A = c  **ou**  A = −c', 'deux points à distance c'],
        ['|A| < c', '−c < A < c', '« entre » : un seul intervalle'],
        ['|A| > c', 'A < −c  **ou**  A > c', '« à l\'extérieur » : deux intervalles'],
        ['|A| = c avec c < 0', 'aucune solution', 'une distance n\'est jamais négative'],
      ],
      note: 'Toujours isoler la valeur absolue avant de séparer en deux cas.' },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Analyser f(x) = −2|x − 3| + 4.',
      fig: { kind: 'plan', w: 210, h: 170, xmin: -1, xmax: 7, ymin: -3, ymax: 5, tick: 1, ticky: 1,
        courbes: [ { fn: x => -2 * Math.abs(x - 3) + 4 } ],
        pts: [ { x: 3, y: 4, lbl: '(3, 4)', dx: 5, dy: -3 }, { x: 1, y: 0, lbl: '(1, 0)', dx: -34, dy: -4 }, { x: 5, y: 0, lbl: '(5, 0)', dx: 5, dy: -4 }, { x: 0, y: -2, lbl: '(0, −2)', dx: 5, dy: 13 } ],
        alt: 'V inversé de sommet 3, 4' },
      s: [ 'sommet (3, 4) · ouverte vers le bas (a = −2)', 'image : ]−∞, 4]', 'zéros : |x − 3| = 2 → x − 3 = 2 ou x − 3 = −2', 'x = 5 ou x = 1', 'f(0) = −2|−3| + 4 = −2', 'croissante sur ]−∞, 3] ; décroissante sur [3, +∞[', 'f(x) ≥ 0 sur [1, 5]' ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 2 —', q: 'Sommet (−1, −3) ; passe par (1, 5). Règle ?',
          s: [ '5 = a|1 + 1| − 3', '2a = 8 → a = 4' ], r: 'f(x) = 4|x + 1| − 3' } ],
      [ { t: 'ex', h: 'Exemple 3 —', q: 'Simplifier f(x) = 2|−3(x − 1)| + 5.',
          s: [ '|−3(x − 1)| = 3|x − 1|', 'f(x) = 6|x − 1| + 5' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Résoudre 3|2x − 1| − 4 = 11.',
      s: [ '|2x − 1| = 5 // on isole', '2x − 1 = 5 → x = 3', '2x − 1 = −5 → x = −2' ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 5 —', q: '|x − 2| ≤ 3',
          s: [ '−3 ≤ x − 2 ≤ 3', '−1 ≤ x ≤ 5' ], r: '[−1, 5]' } ],
      [ { t: 'ex', h: 'Exemple 6 —', q: '2|x + 1| − 6 > 0',
          s: [ '|x + 1| > 3', 'x + 1 < −3 ou x + 1 > 3', 'x < −4 ou x > 2' ], r: ']−∞, −4[ ∪ ]2, +∞[' } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Écrire |x − 3| = x + 3 : on ne « retire » pas les barres comme des parenthèses.',
          'Oublier le 2<sup>e</sup> cas (A = −c).',
          'Inverser « entre » (<) et « à l\'extérieur » (>).',
        ] } ],
      [ { t: 'retenir', items: [
          '|x| = distance à 0.',
          'Sommet (h, k), pentes a et −a.',
          '< : entre · > : à l\'extérieur.',
        ] } ],
    ] },
  ],
},

/* ============ 2. Racine carrée ============ */
'racine-carree': {
  bulle: 'racine carrée',
  sous: 'La fonction racine carrée',
  recto: [
    { t: 'cols', w: '1.1fr 1fr', c: [
      [ { t: 'txt', h: 'fonction de base : f(x) = √x', p: [
          'C\'est la réciproque de la moitié droite de la parabole y = x<sup>2</sup>. Sa courbe est une **demi-parabole** couchée.',
        ] },
        { t: 'list', items: [
          'Domaine : [0, +∞[ · Image : [0, +∞[.',
          'Point de départ (sommet) : (0, 0).',
          'Points faciles : (1, 1), (4, 2), (9, 3).',
          'Croissante, mais de plus en plus lentement.',
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 240, h: 190, xmin: -5, xmax: 10, ymin: -4, ymax: 4, tick: 2, ticky: 1,
            courbes: [
              { fn: x => Math.sqrt(x), x0: 0, lbl: 'y = √x', at: [6.3, 3.2] },
              { fn: x => -Math.sqrt(-(x - 1)) + 2, x1: 1, cls: 'ln2', lbl: 'y = −√(−(x − 1)) + 2', at: [-4.8, -1.4], pk: true },
            ],
            pts: [ { x: 0, y: 0 }, { x: 4, y: 2, lbl: '(4, 2)', dx: 3, dy: 13 }, { x: 1, y: 2, lbl: '(1, 2)', dx: 5, dy: -4, pk: true } ],
            alt: 'deux courbes de racine carrée', cap: 'b < 0 : vers la gauche · a < 0 : vers le bas' },
        ] } ],
    ] },
    { t: 'form', h: 'forme transformée', items: [
      ['règle', 'f(x) = a√(b(x − h)) + k'],
      ['forme simplifiée', 'f(x) = a√(±(x − h)) + k   (on sort √|b| : √(4(x − 1)) = 2√(x − 1))'],
      ['sommet', '(h, k)'],
      ['domaine', '[h, +∞[ si b > 0 (vers la droite) · ]−∞, h] si b < 0 (vers la gauche)'],
      ['image', '[k, +∞[ si a > 0 (vers le haut) · ]−∞, k] si a < 0 (vers le bas)'],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'trouver la règle', items: [
          'Le sommet donne h et k.',
          'L\'orientation de la courbe donne le signe de b (dans la forme simplifiée, ±1).',
          'Un autre point donne a.',
        ] } ],
      [ { t: 'list', h: 'équations avec une racine', items: [
          '1. **Isoler** la racine.',
          '2. **Élever au carré** les deux membres.',
          '3. Résoudre.',
          '4. **Vérifier** dans l\'équation de départ : élever au carré peut créer de fausses solutions (solutions **étrangères**).',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Analyser f(x) = −2√(x + 3) + 4.',
      fig: { kind: 'plan', w: 210, h: 170, xmin: -4, xmax: 8, ymin: -3, ymax: 5, tick: 2, ticky: 1,
        courbes: [ { fn: x => -2 * Math.sqrt(x + 3) + 4, x0: -3 } ],
        pts: [ { x: -3, y: 4, lbl: '(−3, 4)', dx: 5, dy: -3 }, { x: 1, y: 0, lbl: '(1, 0)', dx: 4, dy: -5 } ], alt: 'courbe racine carrée décroissante' },
      s: [ 'sommet (−3, 4)', 'domaine [−3, +∞[ · image ]−∞, 4]', 'zéro : √(x + 3) = 2 → x + 3 = 4 → x = 1', 'f(0) = −2√3 + 4 ≈ 0,54', 'décroissante ; f(x) ≥ 0 sur [−3, 1]' ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 2 —', q: 'Sommet (2, 1), courbe vers la droite et vers le haut, passe par (6, 7).',
          s: [ 'f(x) = a√(x − 2) + 1', '7 = a√4 + 1 → 2a = 6 → a = 3' ], r: 'f(x) = 3√(x − 2) + 1' } ],
      [ { t: 'ex', h: 'Exemple 3 —', q: 'Forme simplifiée.',
          s: [ '3√(4(x − 1)) = 3 × 2√(x − 1) = 6√(x − 1)', '√(−9(x + 2)) = 3√(−(x + 2))' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Résoudre √(2x + 3) = x.',
      s: [ '2x + 3 = x<sup>2</sup> // au carré', 'x<sup>2</sup> − 2x − 3 = 0 → (x − 3)(x + 1) = 0', 'x = 3 : √9 = 3 ✓', 'x = −1 : √1 = 1 ≠ −1 ✗ // solution étrangère' ],
      r: 'x = 3' },
    { t: 'ex', h: 'Exemple 5 —', q: '√(x − 1) + 2 ≤ 5',
      s: [ 'domaine : x ≥ 1', '√(x − 1) ≤ 3 → x − 1 ≤ 9 → x ≤ 10' ], r: '[1, 10]' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Ne pas vérifier les solutions après avoir élevé au carré.',
          'Oublier le domaine (ce qui est sous la racine doit être ≥ 0).',
          '√(x + 9) ≠ √x + 3.',
        ] } ],
      [ { t: 'retenir', items: [
          'Sommet (h, k) = point de départ.',
          'Signe de b → gauche/droite ; signe de a → haut/bas.',
          'Isoler, élever au carré, vérifier.',
        ] } ],
    ] },
  ],
},

/* ============ 3. Rationnelle ============ */
rationnelle: {
  bulle: 'fonction rationnelle',
  sous: 'La fonction rationnelle',
  recto: [
    { t: 'cols', w: '1.1fr 1fr', c: [
      [ { t: 'txt', h: 'fonction de base : f(x) = {{1|x}}', p: [
          'Sa courbe est une **hyperbole** à deux branches. Elle modélise une **variation inverse** : quand x double, y est divisé par 2.',
        ] },
        { t: 'list', items: [
          'Asymptotes : **x = 0** (verticale) et **y = 0** (horizontale).',
          'Domaine : ℝ \\ {0} · Image : ℝ \\ {0}.',
          'Décroissante sur ]−∞, 0[ et sur ]0, +∞[.',
          'Symétrique par rapport au centre (0, 0).',
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 235, h: 210, xmin: -5, xmax: 5, ymin: -5, ymax: 5, tick: 1, ticky: 1,
            courbes: [ { fn: x => 1 / x, n: 1000, lbl: 'y = 1/x', at: [1.3, 3] } ],
            pts: [ { x: 1, y: 1, lbl: '(1, 1)', dx: 5, dy: -3 }, { x: -1, y: -1, lbl: '(−1, −1)', dx: -44, dy: 12 } ],
            alt: 'hyperbole de la fonction inverse', cap: 'asymptotes : les deux axes' },
        ] } ],
    ] },
    { t: 'form', h: 'forme transformée', items: [
      ['règle', 'f(x) = {{a|b(x − h)}} + k'],
      ['forme simplifiée', 'f(x) = {{a|x − h}} + k   (on divise a par b)'],
      ['asymptotes', 'x = h et y = k · centre (h, k)'],
      ['domaine · image', 'ℝ \\ {h} · ℝ \\ {k}'],
      ['variation', 'a > 0 : décroissante sur chaque branche · a < 0 : croissante'],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'forme {{ax + b|cx + d}}', items: [
          'Asymptote verticale : **x = −{{d|c}}** (le dénominateur s\'annule).',
          'Asymptote horizontale : **y = {{a|c}}**.',
          'Pour la forme canonique : on fait la **division** du numérateur par le dénominateur.',
        ] } ],
      [ { t: 'list', h: 'analyser', items: [
          '**Zéro** : numérateur = 0 (forme {{ax + b|cx + d}}), ou {{a|x − h}} = −k.',
          '**Ordonnée à l\'origine** : f(0), si 0 ≠ h.',
          '**Signe** : avec le zéro et l\'asymptote verticale, qui découpent la droite numérique.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Analyser f(x) = {{3|x − 2}} + 1.',
      fig: { kind: 'plan', w: 215, h: 175, xmin: -4, xmax: 8, ymin: -5, ymax: 6, tick: 2, ticky: 2,
        courbes: [ { fn: x => 3 / (x - 2) + 1, n: 1000 } ],
        droites: [ { a: [2, 0], b: [2, 1], cls: 'ln2', dash: true }, { a: [0, 1], b: [1, 1], cls: 'ln2', dash: true } ],
        pts: [ { x: -1, y: 0, lbl: '(−1, 0)', dx: -18, dy: -6 }, { x: 0, y: -0.5 } ], alt: 'hyperbole de centre 2, 1' },
      s: [ 'asymptotes : x = 2 et y = 1', 'domaine ℝ \\ {2} · image ℝ \\ {1}', 'zéro : {{3|x − 2}} = −1 → x − 2 = −3 → x = −1', 'f(0) = {{3|−2}} + 1 = −{{1|2}}', 'décroissante sur ]−∞, 2[ et sur ]2, +∞[', 'f(x) ≥ 0 sur ]−∞, −1] ∪ ]2, +∞[' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Écrire f(x) = {{2x + 1|x − 3}} sous forme canonique.',
      s: [ '2x + 1 = 2(x − 3) + 7 // division', 'f(x) = {{2(x − 3) + 7|x − 3}} = 2 + {{7|x − 3}}', 'asymptotes : x = 3 et y = 2 · zéro : x = −{{1|2}}' ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 3 —', q: 'Asymptotes x = −1 et y = 4 ; passe par (1, 3).',
          s: [ '3 = {{a|1 + 1}} + 4', '{{a|2}} = −1 → a = −2' ], r: 'f(x) = {{−2|x + 1}} + 4' } ],
      [ { t: 'ex', h: 'Exemple 4 —', q: 'Durée d\'un trajet de 120 km selon la vitesse v.',
          s: [ 't(v) = {{120|v}}', 't(80) = 1,5 h · t(60) = 2 h' ], p: [ 'Variation inverse : a = 120.' ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier d\'exclure h du domaine.',
          'Chercher un zéro qui n\'existe pas : si k = 0, la courbe ne touche jamais l\'axe des x.',
          'Dans le tableau de signes, oublier que la fonction change de signe à l\'asymptote.',
        ] } ],
      [ { t: 'retenir', items: [
          'Asymptotes x = h et y = k.',
          '{{ax + b|cx + d}} : x = −{{d|c}} et y = {{a|c}}.',
          'a > 0 : décroissante sur chaque branche.',
        ] } ],
    ] },
  ],
},

/* ============ 8. Logarithmes et leurs lois ============ */
logarithmes: {
  bulle: 'logarithmes',
  sous: 'Les logarithmes et leurs lois',
  recto: [
    { t: 'cols', w: '1.2fr 1fr', c: [
      [ { t: 'txt', p: [
          'Le **logarithme** en base c de x est l\'**exposant** qu\'il faut donner à c pour obtenir x : « c à quelle puissance donne x ? »',
          '**log x** = base 10 (touche LOG) · **ln x** = base e ≈ 2,718 (touche LN).',
        ] } ],
      [ { t: 'box', f: 'log<sub>c</sub> x = y  ⇔  c<sup>y</sup> = x', note: 'c > 0, c ≠ 1 et x > 0' } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'form', h: 'valeurs à connaître', items: [
          ['', 'log<sub>c</sub> 1 = 0 · log<sub>c</sub> c = 1'],
          ['', 'log<sub>c</sub> c<sup>n</sup> = n · c<sup>log<sub>c</sub> x</sup> = x'],
          ['', 'log<sub>c</sub> {{1|m}} = −log<sub>c</sub> m'],
        ] } ],
      [ { t: 'box', h: 'changement de base', f: 'log<sub>c</sub> x = {{log x|log c}} = {{ln x|ln c}}' } ],
    ] },
    { t: 'tab', h: 'les lois (m > 0, n > 0)', full: true, lcol: true,
      head: ['Loi', 'Formule', 'Vient de…'],
      rows: [
        ['**produit**', 'log<sub>c</sub>(mn) = log<sub>c</sub> m + log<sub>c</sub> n', 'c<sup>a</sup> × c<sup>b</sup> = c<sup>a + b</sup>'],
        ['**quotient**', 'log<sub>c</sub>({{m|n}}) = log<sub>c</sub> m − log<sub>c</sub> n', '{{c<sup>a</sup>|c<sup>b</sup>}} = c<sup>a − b</sup>'],
        ['**puissance**', 'log<sub>c</sub>(m<sup>n</sup>) = n log<sub>c</sub> m', '(c<sup>a</sup>)<sup>n</sup> = c<sup>an</sup>'],
        ['**égalité**', 'log<sub>c</sub> m = log<sub>c</sub> n ⇔ m = n', 'la fonction log est bijective'],
      ] },
    { t: 'box', h: 'ces « lois » n\'existent PAS', f: 'log(m + n) ≠ log m + log n    ·    {{log m|log n}} ≠ log({{m|n}})    ·    (log m)<sup>2</sup> ≠ 2 log m' },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 1 —', q: 'Évaluer sans calculatrice.',
          s: [ 'log<sub>2</sub> 32 = 5', 'log<sub>3</sub> {{1|9}} = −2', 'log 0,001 = −3', 'log<sub>4</sub> 8 = {{3|2}} // 4<sup>3/2</sup> = 8' ] } ],
      [ { t: 'ex', h: 'Exemple 2 —', q: 'Réduire.',
          s: [ 'log 5 + log 20 = log 100 = 2', 'log<sub>2</sub> 48 − log<sub>2</sub> 3 = log<sub>2</sub> 16 = 4', '2 log a + log b − 3 log c = log {{a<sup>2</sup>b|c<sup>3</sup>}}' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Développer log<sub>3</sub>({{9x<sup>2</sup>|y}}) (x, y > 0).',
      s: [ '= log<sub>3</sub> 9 + log<sub>3</sub> x<sup>2</sup> − log<sub>3</sub> y', '= 2 + 2 log<sub>3</sub> x − log<sub>3</sub> y' ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 4 —', q: 'Calculer log<sub>3</sub> 20.',
          s: [ '{{log 20|log 3}} ≈ {{1,3010|0,4771}} ≈ 2,727' ] } ],
      [ { t: 'ex', h: 'Exemple 5 —', q: 'Résoudre 5<sup>x</sup> = 40.',
          s: [ 'x = log<sub>5</sub> 40 = {{log 40|log 5}} ≈ 2,29' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 6 —', q: 'Sachant log 2 ≈ 0,301 et log 3 ≈ 0,477, évaluer log 12.',
      s: [ 'log 12 = log(2<sup>2</sup> × 3) = 2 log 2 + log 3 ≈ 1,079' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Confondre base et argument : log<sub>8</sub> 2 = {{1|3}}, pas 3.',
          'Changement de base à l\'envers : c\'est log de l\'argument ÷ log de la base.',
          'Séparer log(m + n) en deux logs.',
        ] } ],
      [ { t: 'retenir', items: [
          'Un log est un exposant.',
          'Produit → +, quotient → −, puissance → devant.',
          'Arguments toujours positifs.',
        ] } ],
    ] },
  ],
},

/* ============ GÉNÉRAL ============ */
general: {
  bulle: 'math SN : tout en 1',
  sous: 'Résumé de l\'année — Mathématique SN, secondaire 5',
  recto: [
    { t: 'tab', h: 'les fonctions (forme simplifiée)', full: true, lcol: true,
      head: ['Fonction', 'Règle', 'Repère', 'Domaine / image'],
      rows: [
        ['valeur absolue', 'a|x − h| + k', 'sommet (h, k), pentes ±a', 'ℝ / [k, ∞[ si a > 0'],
        ['racine carrée', 'a√(±(x − h)) + k', 'point de départ (h, k)', '[h, ∞[ si +  /  [k, ∞[ si a > 0'],
        ['rationnelle', '{{a|x − h}} + k', 'asymptotes x = h, y = k', 'ℝ \\ {h} / ℝ \\ {k}'],
        ['exponentielle', 'a(c)<sup>x − h</sup> + k', 'asymptote y = k', 'ℝ / ]k, ∞[ si a > 0'],
        ['logarithmique', 'a log<sub>c</sub>(x − h) + k', 'asymptote x = h', ']h, ∞[ / ℝ'],
        ['sinus, cosinus', 'a sin(b(x − h)) + k', 'p = {{2π||b|}}, axe y = k', 'ℝ / [k − |a|, k + |a|]'],
        ['tangente', 'a tan(b(x − h)) + k', 'p = {{π||b|}}', 'ℝ sauf les asymptotes / ℝ'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'équations', items: [
          '|A| = c → A = ±c ; |A| < c → entre ; |A| > c → à l\'extérieur.',
          'Racine : isoler, élever au carré, **vérifier**.',
          'Exp : même base ou log. Log : un seul log, forme exponentielle, **vérifier**.',
          'Trigo : sin → θ et π − θ ; cos → ±θ ; + période.',
          '**Réciproque** : échanger x et y. **Composition** : (g ∘ f)(x) = g(f(x)).',
        ] },
        { t: 'form', h: 'logarithmes', items: [
          ['', 'log<sub>c</sub> x = y ⇔ c<sup>y</sup> = x · log<sub>c</sub> x = {{log x|log c}}'],
          ['', 'log mn = log m + log n · log m<sup>n</sup> = n log m'],
        ] } ],
      [ { t: 'list', h: 'optimisation', items: [
          'Contraintes → **polygone de contraintes** → sommets.',
          'L\'optimum est à un **sommet** ; droite baladeuse de pente −{{a|b}}.',
        ] },
        { t: 'form', h: 'trigo et vecteurs', items: [
          ['', 'P(θ) = (cos θ, sin θ) · sin<sup>2</sup> + cos<sup>2</sup> = 1'],
          ['', 'sin(a ± b) = sin a cos b ± cos a sin b'],
          ['', '‖u⃗‖ = √(a<sup>2</sup> + b<sup>2</sup>) · u⃗ · v⃗ = ac + bd'],
          ['', 'u⃗ · v⃗ = 0 ⇔ orthogonaux'],
        ] },
        { t: 'form', h: 'coniques', items: [
          ['cercle', '(x − h)<sup>2</sup> + (y − k)<sup>2</sup> = r<sup>2</sup>'],
          ['ellipse', 'c<sup>2</sup> = grand<sup>2</sup> − petit<sup>2</sup>'],
          ['hyperbole', 'c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>'],
          ['parabole', '(x − h)<sup>2</sup> = 4c(y − k)'],
        ] } ],
    ] },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Valeur absolue —', q: '−2|x − 3| + 4 = 0', s: [ '|x − 3| = 2 → x = 1 ou 5' ] },
        { t: 'ex', h: 'Racine —', q: '√(2x + 3) = x', s: [ 'x = 3 (x = −1 rejeté)' ] },
        { t: 'ex', h: 'Rationnelle —', q: '{{2x + 1|x − 3}}', s: [ '= {{7|x − 3}} + 2 ; asymptotes x = 3, y = 2' ] },
        { t: 'ex', h: 'Log —', q: 'log<sub>2</sub> x + log<sub>2</sub>(x − 2) = 3', s: [ 'x = 4 (−2 rejeté)' ] } ],
      [ { t: 'ex', h: 'Optimisation —', q: 'sommets (0, 5), (20, 5), (15, 10), (0, 20) ; max. 18x + 20y', s: [ '470 en (15, 10)' ] },
        { t: 'ex', h: 'Trigo —', q: '2 sin x − 1 = 0 sur [0, 2π]', s: [ 'x = {{π|6}} ou {{5π|6}}' ] },
        { t: 'ex', h: 'Vecteurs —', q: '(3, 4) · (5, −2)', s: [ '= 7 ; θ ≈ 74,9°' ] },
        { t: 'ex', h: 'Coniques —', q: 'x<sup>2</sup> + y<sup>2</sup> = 25 et y = x + 1', s: [ '(3, 4) et (−4, −3)' ] } ],
    ] },
    { t: 'pieges', items: [
      'Racine et log : **vérifier** les solutions (solutions étrangères, arguments ≤ 0).',
      'Valeur absolue : ne pas oublier le 2<sup>e</sup> cas.',
      'Rationnelle : h est exclu du domaine.',
      'Trigo : calculatrice en radians ; ajouter la période avant de diviser par b.',
      'Ellipse (−) et hyperbole (+) : ne pas confondre les relations entre a, b et c.',
      'Optimisation : vérifier que chaque sommet respecte toutes les contraintes.',
    ] },
    { t: 'retenir', items: [
      'Toutes les fonctions : a (étirement, réflexion), b (horizontal), h et k (translations).',
      'Chaque fonction a son point clé : sommet, point de départ, centre ou asymptote.',
      'Réciproques : exp ↔ log ; 2<sup>e</sup> degré (restreint) ↔ racine carrée.',
      'Coniques : lieux de points définis par des distances.',
    ] },
  ],
},

});
})();
