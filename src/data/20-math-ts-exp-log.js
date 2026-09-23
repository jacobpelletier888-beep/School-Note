/* Mathématique TS — Exposants, exponentielles et logarithmes */
DATA.feuilles['math-ts'] = DATA.feuilles['math-ts'] || {};
Object.assign(DATA.feuilles['math-ts'], {

/* ============ 1. Lois des exposants ============ */
exposants: {
  bulle: 'exposants et radicaux',
  sous: 'Lois des exposants et des radicaux (rappel)',
  recto: [
    { t: 'cols', c: [
      [ { t: 'form', h: 'lois des exposants (a, b ≠ 0)', items: [
          ['exposant 0', 'a<sup>0</sup> = 1'],
          ['exposant négatif', 'a<sup>−n</sup> = {{1|a<sup>n</sup>}}'],
          ['produit, même base', 'a<sup>m</sup> × a<sup>n</sup> = a<sup>m + n</sup>'],
          ['quotient, même base', '{{a<sup>m</sup>|a<sup>n</sup>}} = a<sup>m − n</sup>'],
          ['puissance d\'une puissance', '(a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>'],
          ['puissance d\'un produit', '(ab)<sup>n</sup> = a<sup>n</sup>b<sup>n</sup>'],
          ['puissance d\'un quotient', '({{a|b}})<sup>n</sup> = {{a<sup>n</sup>|b<sup>n</sup>}}'],
        ] } ],
      [ { t: 'form', h: 'exposants fractionnaires et radicaux', items: [
          ['exposant fractionnaire', 'a<sup>m/n</sup> = <sup>n</sup>√(a<sup>m</sup>) = (<sup>n</sup>√a)<sup>m</sup>'],
          ['racine d\'un produit', '√(ab) = √a × √b'],
          ['racine d\'un quotient', '√({{a|b}}) = {{√a|√b}}'],
          ['rationaliser', '{{1|√a}} = {{√a|a}}'],
        ], note: 'Valable pour a, b ≥ 0 quand l\'indice de la racine est pair.' },
        { t: 'box', f: 'le nombre <b>e</b> ≈ 2,718 28… (base naturelle)' } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'simplifier une expression', items: [
          'Traiter chaque base séparément (les nombres, puis chaque variable).',
          'Appliquer d\'abord les puissances de parenthèses, puis les produits et quotients.',
          'Réponse finale : **exposants positifs** et radicaux simplifiés.',
        ] } ],
      [ { t: 'list', h: 'simplifier un radical', items: [
          'Sortir les carrés parfaits : √50 = √(25 × 2) = 5√2.',
          'On additionne seulement des radicaux **semblables** : 5√2 + 3√2 = 8√2.',
        ] } ],
    ] },
    { t: 'box', h: 'l\'outil clé pour les équations', f: 'c<sup>m</sup> = c<sup>n</sup>  ⇔  m = n    (c > 0, c ≠ 1)', note: 'On écrit les deux membres avec la même base, puis on égale les exposants.' },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Simplifier (2x<sup>3</sup>y<sup>−2</sup>)<sup>2</sup> × 3x<sup>−4</sup>y<sup>5</sup>.',
      s: [ '(2x<sup>3</sup>y<sup>−2</sup>)<sup>2</sup> = 4x<sup>6</sup>y<sup>−4</sup> // chaque facteur à la puissance 2', '4x<sup>6</sup>y<sup>−4</sup> × 3x<sup>−4</sup>y<sup>5</sup> = 12x<sup>6 − 4</sup>y<sup>−4 + 5</sup> // on additionne les exposants', '= 12x<sup>2</sup>y' ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 2 —', q: 'Évaluer sans calculatrice.',
          s: [ '27<sup>2/3</sup> = (∛27)<sup>2</sup> = 3<sup>2</sup> = 9', '16<sup>−3/4</sup> = {{1|(<sup>4</sup>√16)<sup>3</sup>}} = {{1|2<sup>3</sup>}} = {{1|8}}' ] } ],
      [ { t: 'ex', h: 'Exemple 3 —', q: 'Radicaux.',
          s: [ '√50 + √18 = 5√2 + 3√2 = 8√2', '{{6|√3}} = {{6√3|3}} = 2√3 // on rationalise' ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 4 —', q: 'Résoudre 4<sup>x + 1</sup> = 8<sup>x</sup>.',
          s: [ '(2<sup>2</sup>)<sup>x + 1</sup> = (2<sup>3</sup>)<sup>x</sup> // même base : 2', '2<sup>2x + 2</sup> = 2<sup>3x</sup>', '2x + 2 = 3x', 'x = 2' ],
          p: [ 'Vérif. : 4<sup>3</sup> = 64 et 8<sup>2</sup> = 64 ✓' ] } ],
      [ { t: 'ex', h: 'Exemple 5 —', q: 'Résoudre 9<sup>x</sup> = {{1|27}}.',
          s: [ '3<sup>2x</sup> = 3<sup>−3</sup>', '2x = −3', 'x = −{{3|2}}' ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          '(a + b)<sup>2</sup> ≠ a<sup>2</sup> + b<sup>2</sup> : les lois s\'appliquent aux produits, pas aux sommes.',
          '√(a + b) ≠ √a + √b.',
          'a<sup>m</sup> × a<sup>n</sup> : on **additionne** les exposants, on ne les multiplie pas.',
          '−3<sup>2</sup> = −9, mais (−3)<sup>2</sup> = 9.',
        ] } ],
      [ { t: 'retenir', items: [
          'Même base → on additionne ou soustrait les exposants.',
          'a<sup>−n</sup> = 1 ÷ a<sup>n</sup> ; a<sup>m/n</sup> = racine n-ième de a<sup>m</sup>.',
          'Équation : même base des deux côtés, puis on égale les exposants.',
        ] } ],
    ] },
  ],
},

/* ============ 2. Fonction exponentielle ============ */
exponentielle: {
  bulle: 'fonction exponentielle',
  sous: 'La fonction exponentielle',
  recto: [
    { t: 'cols', w: '1.15fr 1fr', c: [
      [ { t: 'txt', h: 'fonction de base : f(x) = c<sup>x</sup>', p: [
          'La base c est positive et différente de 1. La variable est dans l\'**exposant**.',
        ] },
        { t: 'list', items: [
          'c > 1 : **croissante** (croissance exponentielle).',
          '0 < c < 1 : **décroissante** (décroissance exponentielle).',
          'Passe par (0, 1) et (1, c).',
          '**Asymptote horizontale** : y = 0.',
          'Domaine : ℝ · Image : ]0, +∞[ · aucun zéro.',
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 240, h: 205, xmin: -3, xmax: 3, ymin: -1, ymax: 8, tick: 1, ticky: 2,
            courbes: [
              { fn: x => Math.pow(2, x), lbl: 'y = 2^x', at: [1.6, 6.5] },
              { fn: x => Math.pow(0.5, x), cls: 'ln2', lbl: 'y = (1/2)^x', at: [-2.9, 6.5], pk: true },
            ],
            pts: [ { x: 0, y: 1, lbl: '(0, 1)', dx: 5, dy: 14 } ],
            alt: 'courbes de 2 exposant x et un demi exposant x', cap: 'croissante (c > 1) et décroissante (0 < c < 1)' },
        ] } ],
    ] },
    { t: 'form', h: 'forme transformée', items: [
      ['règle', 'f(x) = a(c)<sup>b(x − h)</sup> + k'],
      ['asymptote', 'y = k'],
      ['image', ']k, +∞[ si a > 0 · ]−∞, k[ si a < 0'],
      ['forme simplifiée', 'f(x) = a(c)<sup>x</sup> + k  (on y arrive avec les lois des exposants)'],
    ], note: 'Croissante ou décroissante ? Regarde le signe de a et si c<sup>b</sup> est plus grand ou plus petit que 1.' },
    { t: 'cols', c: [
      [ { t: 'form', h: 'modèles de la vie courante', items: [
          ['croissance de i %', 'Q(t) = Q<sub>0</sub>(1 + i)<sup>t</sup>'],
          ['décroissance de i %', 'Q(t) = Q<sub>0</sub>(1 − i)<sup>t</sup>'],
          ['demi-vie T', 'Q(t) = Q<sub>0</sub>({{1|2}})<sup>t/T</sup>'],
          ['intérêts composés', 'C = C<sub>0</sub>(1 + {{i|n}})<sup>nt</sup>'],
        ], note: 'i en décimal (4 % → 0,04) ; n = nombre de périodes par an.' } ],
      [ { t: 'list', h: 'trouver la règle f(x) = a(c)<sup>x</sup> + k', items: [
          '1. L\'asymptote donne **k**.',
          '2. Remplacer un point pour trouver **a** (souvent celui où x = 0 : f(0) = a + k).',
          '3. Remplacer un 2<sup>e</sup> point pour trouver **c**.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Asymptote y = 3 ; la courbe passe par (0, 5) et (2, 21). Trouver la règle f(x) = a(c)<sup>x</sup> + k.',
      s: [ 'k = 3', 'f(0) = a(c)<sup>0</sup> + 3 = 5 → a = 2', 'f(2) = 2c<sup>2</sup> + 3 = 21 → c<sup>2</sup> = 9 → c = 3 // c > 0' ],
      r: 'f(x) = 2(3)<sup>x</sup> + 3' },
    { t: 'ex', h: 'Exemple 2 —', q: 'Analyser f(x) = −2(0,5)<sup>x − 1</sup> + 4.',
      fig: { kind: 'plan', w: 220, h: 170, xmin: -3, xmax: 4, ymin: -6, ymax: 6, tick: 1, ticky: 2,
        courbes: [ { fn: x => -2 * Math.pow(0.5, x - 1) + 4 } ],
        droites: [ { a: [0, 4], b: [1, 4], cls: 'ln2', dash: true, lbl: 'y = 4', at: [2.2, 4.6], pk: true } ],
        pts: [ { x: 0, y: 0, lbl: '(0, 0)', dx: 5, dy: 13 } ], alt: 'courbe croissante sous l’asymptote y = 4' },
      s: [
        'asymptote : y = 4 · a < 0 → la courbe est **sous** l\'asymptote',
        'image : ]−∞, 4[',
        'f(0) = −2(0,5)<sup>−1</sup> + 4 = −2(2) + 4 = 0 // ordonnée à l\'origine',
        'zéro : (0,5)<sup>x − 1</sup> = 2 = (0,5)<sup>−1</sup> → x − 1 = −1 → x = 0',
        'variation : 0,5<sup>x</sup> décroît, × (−2) → f est **croissante**',
        'signe : f(x) ≥ 0 sur [0, +∞[',
      ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 3 —', q: 'Une ville de 2500 habitants croît de 4 % par année. Population dans 10 ans ?',
          s: [ 'P(t) = 2500(1,04)<sup>t</sup>', 'P(10) = 2500(1,04)<sup>10</sup> ≈ 3700,6' ], r: 'environ 3701 habitants' } ],
      [ { t: 'ex', h: 'Exemple 4 —', q: 'Un médicament de 80 mg a une demi-vie de 6 h. Quantité après 18 h ?',
          s: [ 'Q(t) = 80({{1|2}})<sup>t/6</sup>', 'Q(18) = 80({{1|2}})<sup>3</sup> = {{80|8}} = 10' ], r: '10 mg' } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Écrire 1,4 au lieu de 1,04 pour une hausse de 4 %.',
          'Oublier que la courbe ne touche jamais son asymptote.',
          'Conclure « croissante » seulement parce que c > 1 : a peut être négatif.',
        ] } ],
      [ { t: 'retenir', items: [
          'Asymptote y = k ; image selon le signe de a.',
          'Hausse : × (1 + i) ; baisse : × (1 − i).',
          'k d\'abord, puis a, puis c.',
        ] } ],
    ] },
  ],
},

/* ============ 3. Logarithme : définition ============ */
'log-definition': {
  bulle: 'logarithmes',
  sous: 'Le logarithme : définition et changement de base',
  recto: [
    { t: 'cols', w: '1.2fr 1fr', c: [
      [ { t: 'txt', p: [
          'Le **logarithme** en base c d\'un nombre x est l\'**exposant** qu\'il faut donner à c pour obtenir x.',
          'Autrement dit, le log répond à la question : « c à quelle puissance donne x ? »',
        ] } ],
      [ { t: 'box', f: 'log<sub>c</sub> x = y  ⇔  c<sup>y</sup> = x', note: 'avec c > 0, c ≠ 1 et x > 0' } ],
    ] },
    { t: 'tab', h: 'passer d\'une forme à l\'autre', full: true,
      head: ['Forme exponentielle', 'Forme logarithmique', 'Se lit'],
      rows: [
        ['2<sup>5</sup> = 32', 'log<sub>2</sub> 32 = 5', 'log en base 2 de 32 égale 5'],
        ['10<sup>−3</sup> = 0,001', 'log 0,001 = −3', 'log en base 10 (on n\'écrit pas le 10)'],
        ['e<sup>2</sup> ≈ 7,389', 'ln 7,389 ≈ 2', 'logarithme naturel (base e)'],
      ] },
    { t: 'cols', c: [
      [ { t: 'form', h: 'valeurs à connaître', items: [
          ['', 'log<sub>c</sub> 1 = 0  (car c<sup>0</sup> = 1)'],
          ['', 'log<sub>c</sub> c = 1'],
          ['', 'log<sub>c</sub> c<sup>n</sup> = n'],
          ['', 'c<sup>log<sub>c</sub> x</sup> = x'],
        ], note: 'On ne peut pas calculer le log d\'un nombre négatif ou de 0.' } ],
      [ { t: 'box', h: 'changement de base', f: 'log<sub>c</sub> x = {{log x|log c}} = {{ln x|ln c}}', note: 'Sert à calculer n\'importe quelle base avec la calculatrice.' } ],
    ] },
    { t: 'list', h: 'deux logs spéciaux', items: [
      '**log x** = log<sub>10</sub> x : le logarithme **décimal** (touche LOG).',
      '**ln x** = log<sub>e</sub> x : le logarithme **naturel** (touche LN), avec e ≈ 2,718.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Évaluer sans calculatrice.',
      s: [
        'log<sub>2</sub> 32 = 5 // 2<sup>5</sup> = 32',
        'log<sub>3</sub> {{1|9}} = −2 // 3<sup>−2</sup> = 1/9',
        'log 0,001 = −3 // 10<sup>−3</sup> = 0,001',
        'log<sub>1/2</sub> 8 = −3 // (1/2)<sup>−3</sup> = 8',
        'ln e<sup>4</sup> = 4',
        'log<sub>4</sub> 8 = {{3|2}} // 4<sup>3/2</sup> = (√4)<sup>3</sup> = 8',
      ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 2 —', q: 'Changer de forme.',
          s: [ '5<sup>3</sup> = 125 ⇔ log<sub>5</sub> 125 = 3', 'log<sub>2</sub> x = 6 ⇔ x = 2<sup>6</sup> = 64', 'log<sub>x</sub> 49 = 2 ⇔ x<sup>2</sup> = 49 → x = 7 // la base est positive' ] } ],
      [ { t: 'ex', h: 'Exemple 3 —', q: 'Calculer log<sub>3</sub> 20.',
          s: [ 'log<sub>3</sub> 20 = {{log 20|log 3}}', '≈ {{1,3010|0,4771}} ≈ 2,727' ],
          p: [ 'Vérif. : 3<sup>2,727</sup> ≈ 20 ✓' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Résoudre 5<sup>x</sup> = 40.',
      s: [ 'x = log<sub>5</sub> 40 // forme logarithmique', 'x = {{log 40|log 5}} ≈ {{1,6021|0,6990}} ≈ 2,29' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Confondre la base et l\'argument : log<sub>2</sub> 8 = 3, mais log<sub>8</sub> 2 = {{1|3}}.',
          'Calculer log<sub>3</sub> 20 avec {{log 3|log 20}} (c\'est l\'inverse !).',
          'Chercher le log d\'un nombre négatif.',
        ] } ],
      [ { t: 'retenir', items: [
          'Un log est un **exposant**.',
          'log<sub>c</sub> x = y ⇔ c<sup>y</sup> = x.',
          'Changement de base : log de l\'argument ÷ log de la base.',
        ] } ],
    ] },
  ],
},

/* ============ 4. Lois des logarithmes ============ */
'log-lois': {
  bulle: 'lois des logarithmes',
  sous: 'Les lois des logarithmes',
  recto: [
    { t: 'txt', p: [ 'Les lois des logarithmes viennent directement des lois des exposants. Elles sont vraies pour m > 0, n > 0, c > 0 et c ≠ 1.' ] },
    { t: 'tab', full: true, lcol: true,
      head: ['Loi', 'Formule', 'Vient de…'],
      rows: [
        ['**log d\'un produit**', 'log<sub>c</sub>(mn) = log<sub>c</sub> m + log<sub>c</sub> n', 'c<sup>a</sup> × c<sup>b</sup> = c<sup>a + b</sup>'],
        ['**log d\'un quotient**', 'log<sub>c</sub>({{m|n}}) = log<sub>c</sub> m − log<sub>c</sub> n', '{{c<sup>a</sup>|c<sup>b</sup>}} = c<sup>a − b</sup>'],
        ['**log d\'une puissance**', 'log<sub>c</sub>(m<sup>n</sup>) = n log<sub>c</sub> m', '(c<sup>a</sup>)<sup>n</sup> = c<sup>an</sup>'],
        ['**changement de base**', 'log<sub>c</sub> m = {{log<sub>d</sub> m|log<sub>d</sub> c}}', 'n\'importe quelle base d'],
        ['**égalité**', 'log<sub>c</sub> m = log<sub>c</sub> n ⇔ m = n', 'la fonction log est bijective'],
      ] },
    { t: 'cols', c: [
      [ { t: 'form', h: 'valeurs utiles', items: [
          ['', 'log<sub>c</sub> 1 = 0'],
          ['', 'log<sub>c</sub> c = 1'],
          ['', 'log<sub>c</sub> {{1|m}} = −log<sub>c</sub> m'],
          ['', 'log<sub>c</sub> √m = {{1|2}} log<sub>c</sub> m'],
        ] } ],
      [ { t: 'list', h: 'deux sens d\'utilisation', items: [
          '**Développer** : un seul log → une somme de logs (pratique pour dériver ou simplifier).',
          '**Réduire** : une somme de logs → un seul log (indispensable pour résoudre une équation).',
        ] } ],
    ] },
    { t: 'box', h: 'attention : ces « lois » n\'existent PAS', f: 'log(m + n) ≠ log m + log n    ·    {{log m|log n}} ≠ log({{m|n}})    ·    (log m)<sup>2</sup> ≠ 2 log m' },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 1 —', q: 'Réduire et évaluer.',
          s: [ 'log 5 + log 20 = log 100 = 2', 'log<sub>2</sub> 48 − log<sub>2</sub> 3 = log<sub>2</sub> 16 = 4', '3 log<sub>2</sub> 4 − {{1|2}} log<sub>2</sub> 16 = 6 − 2 = 4' ] } ],
      [ { t: 'ex', h: 'Exemple 2 —', q: 'Écrire en un seul log.',
          s: [ '2 log a + log b − 3 log c', '= log a<sup>2</sup> + log b − log c<sup>3</sup>', '= log {{a<sup>2</sup>b|c<sup>3</sup>}}' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Développer log<sub>3</sub>({{9x<sup>2</sup>|y}}) (x, y > 0).',
      s: [ '= log<sub>3</sub> 9 + log<sub>3</sub> x<sup>2</sup> − log<sub>3</sub> y // produit et quotient', '= 2 + 2 log<sub>3</sub> x − log<sub>3</sub> y // log<sub>3</sub> 9 = 2 et loi de la puissance' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Sachant que log 2 ≈ 0,301 et log 3 ≈ 0,477, évaluer log 12 et log 1,5.',
      s: [ 'log 12 = log(2<sup>2</sup> × 3) = 2 log 2 + log 3 ≈ 0,602 + 0,477 = 1,079', 'log 1,5 = log {{3|2}} = log 3 − log 2 ≈ 0,176' ] },
    { t: 'ex', h: 'Exemple 5 —', q: 'Exprimer log<sub>8</sub> x en base 2.',
      s: [ 'log<sub>8</sub> x = {{log<sub>2</sub> x|log<sub>2</sub> 8}} = {{log<sub>2</sub> x|3}}' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Séparer log(m + n) en deux logs.',
          'Appliquer la loi de la puissance à (log m)<sup>2</sup>.',
          'Oublier de sortir l\'exposant **de tout** le produit : log(3x)<sup>2</sup> = 2 log 3x, pas log 3 + 2 log x.',
        ] } ],
      [ { t: 'retenir', items: [
          'Produit → +, quotient → −, puissance → devant.',
          'Pour résoudre : réduire à UN seul log.',
          'Seulement des arguments positifs.',
        ] } ],
    ] },
  ],
},

/* ============ 5. Fonction logarithmique ============ */
logarithmique: {
  bulle: 'fonction logarithmique',
  sous: 'La fonction logarithmique',
  recto: [
    { t: 'cols', w: '1.1fr 1fr', c: [
      [ { t: 'txt', h: 'fonction de base : f(x) = log<sub>c</sub> x', p: [
          'C\'est la **réciproque** de la fonction exponentielle c<sup>x</sup> : leurs courbes sont symétriques par rapport à la droite y = x.',
        ] },
        { t: 'list', items: [
          'c > 1 : croissante · 0 < c < 1 : décroissante.',
          'Passe par (1, 0) et (c, 1).',
          '**Asymptote verticale** : x = 0.',
          'Domaine : ]0, +∞[ · Image : ℝ · zéro : x = 1.',
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 235, h: 225, xmin: -3, xmax: 6, ymin: -3, ymax: 6, tick: 1, ticky: 1,
            courbes: [
              { fn: x => Math.pow(2, x), cls: 'ln2', lbl: 'y = 2^x', at: [1.6, 5.3], pk: true },
              { fn: x => Math.log2(x), x0: 0.001, lbl: 'y = log₂ x', at: [3.6, 1.3] },
              { fn: x => x, cls: 'ln3', dash: true, lbl: 'y = x', at: [4.6, 3.9] },
            ],
            pts: [ { x: 1, y: 0, lbl: '(1, 0)', dx: 3, dy: 13 }, { x: 0, y: 1, lbl: '(0, 1)', dx: -34, dy: -2 } ],
            alt: 'symétrie entre 2 exposant x et log en base 2 de x', cap: 'log₂ x et 2^x sont symétriques par rapport à y = x' },
        ] } ],
    ] },
    { t: 'form', h: 'forme transformée', items: [
      ['règle', 'f(x) = a log<sub>c</sub>(b(x − h)) + k'],
      ['asymptote', 'x = h'],
      ['domaine', 'b(x − h) > 0 : ]h, +∞[ si b > 0 · ]−∞, h[ si b < 0'],
      ['image', 'ℝ'],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'analyser une fonction log', items: [
          '**Domaine** et **asymptote** (à partir de h et du signe de b).',
          '**Zéro** : f(x) = 0 → isoler le log → forme exponentielle.',
          '**Ordonnée à l\'origine** : f(0), seulement si 0 est dans le domaine.',
          '**Variation** et **signe** à l\'aide d\'une esquisse.',
        ] } ],
      [ { t: 'list', h: 'trouver la règle', items: [
          'L\'asymptote donne **h**.',
          'Remplacer un ou deux points pour trouver a et k (ou c).',
          'On transforme souvent log<sub>c</sub> en log ou ln avec le changement de base.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Analyser f(x) = 2 log<sub>3</sub>(x − 1) − 4.',
      fig: { kind: 'plan', w: 215, h: 165, xmin: -1, xmax: 14, ymin: -7, ymax: 3, tick: 2, ticky: 2,
        courbes: [ { fn: x => 2 * Math.log(x - 1) / Math.log(3) - 4, x0: 1.0005 } ],
        droites: [ { a: [1, 0], b: [1, 1], cls: 'ln2', dash: true } ],
        pts: [ { x: 10, y: 0, lbl: '(10, 0)', dx: -18, dy: -7 }, { x: 4, y: -2, lbl: '(4, −2)', dx: 5, dy: 12 } ], alt: 'courbe logarithmique croissante' },
      s: [
        'asymptote : x = 1 · domaine : ]1, +∞[',
        'zéro : 2 log<sub>3</sub>(x − 1) = 4 → log<sub>3</sub>(x − 1) = 2',
        'x − 1 = 3<sup>2</sup> = 9 → x = 10',
        'point : f(4) = 2 log<sub>3</sub> 3 − 4 = −2',
        'croissante ; f(x) ≥ 0 sur [10, +∞[ ; pas d\'ordonnée à l\'origine',
      ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Trouver la règle f(x) = a log<sub>2</sub>(x − h) : asymptote x = −3 et point (1, 6).',
      s: [ 'h = −3 → f(x) = a log<sub>2</sub>(x + 3)', '6 = a log<sub>2</sub>(1 + 3) = a log<sub>2</sub> 4 = 2a', 'a = 3' ],
      r: 'f(x) = 3 log<sub>2</sub>(x + 3)' },
    { t: 'ex', h: 'Exemple 3 —', q: 'f(x) = −log(−(x − 2)) + 1 : domaine et zéro.',
      s: [ '−(x − 2) > 0 → x < 2 // domaine ]−∞, 2[, asymptote x = 2', 'log(2 − x) = 1 → 2 − x = 10 → x = −8 // zéro' ],
      p: [ 'Vérif. : f(−8) = −log 10 + 1 = 0 ✓' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Donner une ordonnée à l\'origine quand 0 n\'est pas dans le domaine.',
          'Oublier que le domaine dépend du signe de b.',
          'Confondre asymptote verticale (log) et horizontale (exponentielle).',
        ] } ],
      [ { t: 'retenir', items: [
          'Log = réciproque de l\'exponentielle.',
          'Asymptote x = h ; argument toujours > 0.',
          'Zéro : forme exponentielle.',
        ] } ],
    ] },
  ],
},

/* ============ 6. Équations exponentielles et logarithmiques ============ */
'equations-exp-log': {
  bulle: 'équations exp et log',
  sous: 'Équations et inéquations exponentielles et logarithmiques',
  recto: [
    { t: 'cols', c: [
      [ { t: 'list', h: 'équation exponentielle', items: [
          '1. **Isoler** la puissance : c<sup>…</sup> = nombre.',
          '2a. Si on peut, écrire les deux côtés avec la **même base** et égaler les exposants.',
          '2b. Sinon, passer à la **forme logarithmique** (ou prendre le log des deux côtés).',
          '3. Isoler x.',
        ] } ],
      [ { t: 'list', h: 'équation logarithmique', items: [
          '1. **Réduire** à un seul log de chaque côté (lois des logs).',
          '2. Passer à la **forme exponentielle** : log<sub>c</sub> A = y → A = c<sup>y</sup>.',
          '   ou égaler les arguments : log<sub>c</sub> A = log<sub>c</sub> B → A = B.',
          '3. Résoudre, puis **vérifier** : rejeter toute solution qui rend un argument ≤ 0.',
        ] } ],
    ] },
    { t: 'box', h: 'l\'outil universel', f: 'c<sup>x</sup> = N  ⇔  x = log<sub>c</sub> N = {{log N|log c}}' },
    { t: 'cols', c: [
      [ { t: 'list', h: 'inéquations exponentielles', items: [
          'Même base c > 1 : on **garde** le sens de l\'inégalité.',
          'Même base 0 < c < 1 : on **inverse** le sens.',
          'Si on divise par un log négatif (ex. log 0,5), on inverse aussi.',
        ] } ],
      [ { t: 'list', h: 'inéquations logarithmiques', items: [
          'Trouver d\'abord le **domaine** (arguments > 0).',
          'Résoudre comme une équation, en respectant la règle du sens (base > 1 ou < 1).',
          'Réponse = intersection avec le domaine.',
        ] } ],
    ] },
    { t: 'list', h: 'problèmes d\'application', items: [
      '« Après combien de temps… ? » : l\'inconnue est dans l\'exposant → on utilise le log.',
      'Arrondir selon le contexte : on attend souvent la première année **complète** où le seuil est atteint.',
    ] },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 1 —', q: '3(2)<sup>x + 1</sup> − 5 = 43',
          s: [ '3(2)<sup>x + 1</sup> = 48', '2<sup>x + 1</sup> = 16 = 2<sup>4</sup>', 'x + 1 = 4 → x = 3' ] } ],
      [ { t: 'ex', h: 'Exemple 2 —', q: 'Un placement de 5000 $ rapporte 8 % par année. Quand vaudra-t-il 12 000 $ ?',
          s: [ '5000(1,08)<sup>t</sup> = 12 000', '1,08<sup>t</sup> = 2,4', 't = {{log 2,4|log 1,08}} ≈ 11,38' ], r: 'au cours de la 12<sup>e</sup> année' } ],
    ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'log<sub>2</sub> x + log<sub>2</sub>(x − 2) = 3',
      s: [ 'log<sub>2</sub>(x(x − 2)) = 3 // un seul log', 'x<sup>2</sup> − 2x = 2<sup>3</sup> = 8', 'x<sup>2</sup> − 2x − 8 = 0 → (x − 4)(x + 2) = 0', 'x = 4 ou x = −2' ],
      p: [ 'x = −2 est **rejeté** (log<sub>2</sub>(−2) n\'existe pas). Solution : x = 4. Vérif. : log<sub>2</sub> 4 + log<sub>2</sub> 2 = 2 + 1 = 3 ✓' ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 4 —', q: '2(0,5)<sup>x</sup> ≥ {{1|8}}',
          s: [ '(0,5)<sup>x</sup> ≥ {{1|16}} = (0,5)<sup>4</sup>', 'x ≤ 4 // base < 1 : on inverse' ] } ],
      [ { t: 'ex', h: 'Exemple 5 —', q: 'log<sub>3</sub>(2x − 1) < 2',
          s: [ 'domaine : 2x − 1 > 0 → x > {{1|2}}', '2x − 1 < 3<sup>2</sup> = 9 → x < 5', 'solution : ]{{1|2}}, 5[' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 6 —', q: 'e<sup>2x</sup> = 7', s: [ '2x = ln 7', 'x = {{ln 7|2}} ≈ 0,973' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Prendre le log avant d\'avoir isolé la puissance : log(3 · 2<sup>x</sup> − 5) ne se simplifie pas.',
          'Oublier de vérifier les solutions d\'une équation log.',
          'Oublier d\'inverser le sens quand la base est entre 0 et 1.',
        ] } ],
      [ { t: 'retenir', items: [
          'Exponentielle : isoler, puis même base ou log.',
          'Log : réduire, forme exponentielle, vérifier.',
          'Inéquation : base < 1 → on inverse.',
        ] } ],
    ] },
  ],
},

});
