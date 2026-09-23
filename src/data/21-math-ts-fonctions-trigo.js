/* Mathématique TS — Fonctions (réciproque, opérations) et trigonométrie */
(function () {
  const PI = Math.PI;
  const XPI = [[-PI / 2, '−π/2'], [PI / 2, 'π/2'], [PI, 'π'], [3 * PI / 2, '3π/2'], [2 * PI, '2π']];

Object.assign(DATA.feuilles['math-ts'], {

/* ============ 7. Fonction réciproque ============ */
reciproque: {
  bulle: 'fonction réciproque',
  sous: 'La réciproque d\'une fonction',
  recto: [
    { t: 'cols', w: '1.15fr 1fr', c: [
      [ { t: 'txt', p: [
          'La **réciproque** d\'une fonction f, notée **f<sup>−1</sup>**, « défait » ce que f fait : elle **échange x et y**.',
          'Si f(a) = b, alors f<sup>−1</sup>(b) = a. Chaque point (a, b) de f devient (b, a).',
          'Les deux courbes sont **symétriques par rapport à la droite y = x**.',
        ] },
        { t: 'list', h: 'propriétés', items: [
          'dom f<sup>−1</sup> = ima f  et  ima f<sup>−1</sup> = dom f.',
          'f<sup>−1</sup> est une fonction seulement si f est **bijective** (chaque y vient d\'un seul x).',
          'Sinon, on **restreint le domaine** de f (ex. x ≥ 0 pour x<sup>2</sup>).',
          'f(f<sup>−1</sup>(x)) = x : pratique pour vérifier.',
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 230, h: 225, xmin: -7, xmax: 5, ymin: -7, ymax: 5, tick: 2, ticky: 2,
            courbes: [
              { fn: x => 3 * x - 6, lbl: 'f(x) = 3x − 6', at: [2.9, 4.1] },
              { fn: x => x / 3 + 2, cls: 'ln2', lbl: 'f⁻¹(x) = x/3 + 2', at: [-6.8, 0.2], pk: true },
              { fn: x => x, cls: 'ln3', dash: true, lbl: 'y = x', at: [3.1, 2] },
            ],
            pts: [ { x: 0, y: -6, lbl: '(0, −6)', dx: 5, dy: 4 }, { x: -6, y: 0, lbl: '(−6, 0)', dx: -8, dy: 14 } ],
            alt: 'une fonction et sa réciproque symétriques par rapport à y = x', cap: '(0, −6) sur f ↔ (−6, 0) sur f⁻¹' },
        ] } ],
    ] },
    { t: 'list', h: 'trouver la règle de la réciproque', items: [
      '1. Remplacer f(x) par y.',
      '2. **Échanger** x et y.',
      '3. **Isoler** y (en « défaisant » les opérations dans l\'ordre inverse).',
      '4. Remplacer y par f<sup>−1</sup>(x) et donner son domaine.',
    ] },
    { t: 'tab', h: 'paires de fonctions réciproques', full: true, lcol: true,
      head: ['Fonction', 'Réciproque'],
      rows: [
        ['1<sup>er</sup> degré y = ax + b (a ≠ 0)', '1<sup>er</sup> degré y = {{x − b|a}}'],
        ['exponentielle y = c<sup>x</sup>', 'logarithmique y = log<sub>c</sub> x'],
        ['2<sup>e</sup> degré (domaine restreint)', 'racine carrée'],
        ['valeur absolue', 'pas une fonction (sauf en restreignant le domaine)'],
      ] },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 1 —', q: 'f(x) = 3x − 6',
          s: [ 'x = 3y − 6 // on échange', 'x + 6 = 3y', 'y = {{x + 6|3}}', 'f<sup>−1</sup>(x) = {{x|3}} + 2' ],
          p: [ 'Vérif. : f(f<sup>−1</sup>(x)) = 3({{x|3}} + 2) − 6 = x ✓' ] } ],
      [ { t: 'ex', h: 'Exemple 2 —', q: 'f(x) = 5 log<sub>2</sub>(x + 1) − 3',
          s: [ 'x = 5 log<sub>2</sub>(y + 1) − 3', '{{x + 3|5}} = log<sub>2</sub>(y + 1)', 'y + 1 = 2<sup>(x + 3)/5</sup>', 'f<sup>−1</sup>(x) = 2<sup>(x + 3)/5</sup> − 1' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'f(x) = 2(3)<sup>x − 1</sup> + 4',
      s: [ 'x = 2(3)<sup>y − 1</sup> + 4', '{{x − 4|2}} = 3<sup>y − 1</sup>', 'y − 1 = log<sub>3</sub>({{x − 4|2}}) // forme logarithmique', 'f<sup>−1</sup>(x) = log<sub>3</sub>({{x − 4|2}}) + 1' ],
      p: [ 'Domaine de f<sup>−1</sup> : x > 4, c\'est bien l\'image de f (asymptote y = 4, a > 0).' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'f(x) = (x − 2)<sup>2</sup> + 1 n\'est pas bijective. On restreint à x ≥ 2.',
      s: [ 'x = (y − 2)<sup>2</sup> + 1', 'x − 1 = (y − 2)<sup>2</sup>', 'y − 2 = √(x − 1) // on garde + car y ≥ 2', 'f<sup>−1</sup>(x) = √(x − 1) + 2, pour x ≥ 1' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Confondre f<sup>−1</sup>(x) et {{1|f(x)}} : ce n\'est **pas** la même chose.',
          'Oublier de donner le domaine de la réciproque.',
          'Isoler y dans le mauvais ordre : on défait d\'abord ce qui a été fait en dernier.',
        ] } ],
      [ { t: 'retenir', items: [
          'On échange x et y, puis on isole y.',
          'Symétrie par rapport à y = x.',
          'Domaine ↔ image.',
        ] } ],
    ] },
  ],
},

/* ============ 8. Opérations et composition ============ */
'operations-fonctions': {
  bulle: 'opérations sur les fonctions',
  sous: 'Opérations sur les fonctions et composition',
  recto: [
    { t: 'tab', h: 'les quatre opérations', full: true, lcol: true,
      head: ['Opération', 'Règle', 'Domaine'],
      rows: [
        ['somme', '(f + g)(x) = f(x) + g(x)', 'dom f ∩ dom g'],
        ['différence', '(f − g)(x) = f(x) − g(x)', 'dom f ∩ dom g'],
        ['produit', '(f · g)(x) = f(x) × g(x)', 'dom f ∩ dom g'],
        ['quotient', '({{f|g}})(x) = {{f(x)|g(x)}}', 'dom f ∩ dom g, **sauf** les x où g(x) = 0'],
      ] },
    { t: 'cols', w: '1.1fr 1fr', c: [
      [ { t: 'txt', h: 'la composition', p: [
          'Composer, c\'est **enchaîner** deux fonctions : le résultat de la première devient l\'entrée de la seconde.',
          '**(g ∘ f)(x) = g(f(x))** se lit « g rond f de x ». On applique **f d\'abord**, puis g.',
        ] },
        { t: 'list', items: [
          'Domaine : les x du domaine de f **dont l\'image f(x) est dans le domaine de g**.',
          'En général, g ∘ f ≠ f ∘ g (l\'ordre compte).',
          'f ∘ f<sup>−1</sup> et f<sup>−1</sup> ∘ f donnent x.',
        ] } ],
      [ { t: 'box', h: 'schéma', f: 'x  →  <b>f</b>  →  f(x)  →  <b>g</b>  →  g(f(x))' },
        { t: 'list', h: 'décomposer une fonction', items: [
          'On cherche une fonction « intérieure » et une fonction « extérieure ».',
          'ex. h(x) = √(x<sup>2</sup> + 9) = g(f(x)) avec f(x) = x<sup>2</sup> + 9 et g(x) = √x.',
        ] } ],
    ] },
    { t: 'list', h: 'démarche pour une composition', items: [
      '1. Écrire la fonction extérieure avec des parenthèses vides : g( ).',
      '2. Mettre **toute** la règle de la fonction intérieure dans les parenthèses.',
      '3. Développer et réduire.',
      '4. Pour une valeur : calculer f(a) d\'abord, puis g(f(a)). C\'est un bon moyen de vérifier la règle.',
    ] },
  ],
  verso: [
    { t: 'txt', p: [ 'Soit **f(x) = 2x − 3** et **g(x) = x<sup>2</sup> + 1**.' ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 1 —', q: 'Opérations.',
          s: [ '(f + g)(x) = x<sup>2</sup> + 2x − 2', '(f · g)(x) = (2x − 3)(x<sup>2</sup> + 1)', '= 2x<sup>3</sup> − 3x<sup>2</sup> + 2x − 3', '({{f|g}})(x) = {{2x − 3|x<sup>2</sup> + 1}} // domaine ℝ : x<sup>2</sup> + 1 ≠ 0' ] } ],
      [ { t: 'ex', h: 'Exemple 2 —', q: 'Compositions.',
          s: [ '(g ∘ f)(x) = (2x − 3)<sup>2</sup> + 1', '= 4x<sup>2</sup> − 12x + 10', '(f ∘ g)(x) = 2(x<sup>2</sup> + 1) − 3', '= 2x<sup>2</sup> − 1' ] } ],
    ] },
    { t: 'ex', h: 'Vérification avec x = 2 :', q: '',
      s: [ '(g ∘ f)(2) = g(f(2)) = g(1) = 2 // et 4(4) − 24 + 10 = 2 ✓', '(f ∘ g)(2) = f(g(2)) = f(5) = 7 // et 2(4) − 1 = 7 ✓' ],
      p: [ 'Les deux compositions sont différentes : l\'ordre compte.' ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 3 —', q: 'f(x) = √x et g(x) = x − 4. Domaine de f ∘ g ?',
          s: [ '(f ∘ g)(x) = √(x − 4)', 'x − 4 ≥ 0 → x ≥ 4' ], r: '[4, +∞[' } ],
      [ { t: 'ex', h: 'Exemple 4 —', q: 'f(x) = √(x + 2) et g(x) = x − 1. Domaine de {{f|g}} ?',
          s: [ 'dom f = [−2, +∞[', 'g(x) = 0 si x = 1' ], r: '[−2, 1[ ∪ ]1, +∞[' } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Appliquer g d\'abord dans g ∘ f (c\'est f qu\'on applique en premier).',
          'Oublier les parenthèses : (2x − 3)<sup>2</sup> ≠ 2x<sup>2</sup> − 3.',
          'Oublier d\'exclure les zéros du dénominateur dans f/g.',
        ] } ],
      [ { t: 'retenir', items: [
          '(g ∘ f)(x) = g(f(x)) : f d\'abord.',
          'Domaine d\'une opération : l\'intersection.',
          'Vérifie une composition avec une valeur.',
        ] } ],
    ] },
  ],
},

/* ============ 9. Cercle trigonométrique ============ */
'cercle-trigo': {
  bulle: 'cercle trigonométrique',
  sous: 'Le radian et le cercle trigonométrique',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', h: 'le radian', p: [
          'Un **radian** est l\'angle au centre qui intercepte un arc de même longueur que le rayon.',
        ] },
        { t: 'form', items: [
          ['conversion', '2π rad = 360°   ·   π rad = 180°'],
          ['degrés → radians', '× {{π|180°}}'],
          ['radians → degrés', '× {{180°|π}}'],
          ['longueur d\'arc', 'L = rθ  (θ en radians)'],
        ] },
        { t: 'txt', h: 'le cercle trigonométrique', p: [
          'Cercle de **rayon 1** centré à l\'origine. On mesure θ à partir de (1, 0), dans le sens **antihoraire** (positif).',
        ] },
        { t: 'box', f: 'P(θ) = (cos θ, sin θ)    ·    tan θ = {{sin θ|cos θ}}' } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 255, h: 255, xmin: -1.35, xmax: 1.35, ymin: -1.35, ymax: 1.35, tick: 1, ticky: 1, grille: 0.5,
            param: [ { px: t => Math.cos(t), py: t => Math.sin(t), t0: 0, t1: 2 * PI } ],
            segs: [ { a: [0, 0], b: [Math.cos(PI / 6), Math.sin(PI / 6)], dash: true }, { a: [0, 0], b: [Math.cos(PI / 4), Math.sin(PI / 4)], dash: true }, { a: [0, 0], b: [Math.cos(PI / 3), Math.sin(PI / 3)], dash: true } ],
            pts: [
              { x: Math.cos(PI / 6), y: Math.sin(PI / 6), lbl: 'π/6', dx: 5, dy: 3 },
              { x: Math.cos(PI / 4), y: Math.sin(PI / 4), lbl: 'π/4', dx: 5, dy: -2 },
              { x: Math.cos(PI / 3), y: Math.sin(PI / 3), lbl: 'π/3', dx: 4, dy: -5 },
              { x: 0, y: 1, lbl: 'π/2', dx: 5, dy: -5 }, { x: -1, y: 0, lbl: 'π', dx: -14, dy: -5 },
              { x: 0, y: -1, lbl: '3π/2', dx: 5, dy: 13 }, { x: 1, y: 0, lbl: '0', dx: 5, dy: -5 },
              { x: Math.cos(5 * PI / 6), y: Math.sin(5 * PI / 6), lbl: '5π/6', dx: -30, dy: -4 },
            ],
            alt: 'cercle trigonométrique avec les angles remarquables', cap: 'Q1 : cos et sin positifs' },
        ] } ],
    ] },
    { t: 'tab', h: 'points remarquables (1<sup>er</sup> quadrant et axes)', full: true,
      head: ['θ', '0', 'π/6 (30°)', 'π/4 (45°)', 'π/3 (60°)', 'π/2 (90°)', 'π (180°)', '3π/2 (270°)'],
      rows: [
        ['cos θ', '1', '{{√3|2}}', '{{√2|2}}', '{{1|2}}', '0', '−1', '0'],
        ['sin θ', '0', '{{1|2}}', '{{√2|2}}', '{{√3|2}}', '1', '0', '−1'],
        ['tan θ', '0', '{{√3|3}}', '1', '√3', 'non définie', '0', 'non définie'],
      ] },
    { t: 'cols', c: [
      [ { t: 'form', h: 'symétries (on part de θ dans Q1)', items: [
          ['Q2 : π − θ', '(−cos θ, sin θ)'],
          ['Q3 : π + θ', '(−cos θ, −sin θ)'],
          ['Q4 : 2π − θ ou −θ', '(cos θ, −sin θ)'],
          ['un tour de plus', 'P(θ + 2πn) = P(θ)'],
        ] } ],
      [ { t: 'list', h: 'autres rapports', items: [
          'sécante : sec θ = {{1|cos θ}}',
          'cosécante : csc θ = {{1|sin θ}}',
          'cotangente : cot θ = {{cos θ|sin θ}}',
          'Signes : Q1 tout +, Q2 sin +, Q3 tan +, Q4 cos +.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 1 —', q: 'Convertir.',
          s: [ '150° = 150 × {{π|180}} = {{5π|6}}', '{{7π|4}} = {{7π|4}} × {{180°|π}} = 315°' ] } ],
      [ { t: 'ex', h: 'Exemple 2 —', q: 'Longueur d\'un arc de 72° sur un cercle de 5 cm de rayon.',
          s: [ '72° = {{2π|5}} rad', 'L = 5 × {{2π|5}} = 2π ≈ 6,28 cm' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Trouver les coordonnées des points trigonométriques.',
      s: [
        'P({{5π|6}}) = (−{{√3|2}}, {{1|2}}) // Q2 : π − π/6',
        'P(−{{π|3}}) = ({{1|2}}, −{{√3|2}}) // Q4',
        'P({{7π|4}}) = ({{√2|2}}, −{{√2|2}}) // Q4 : 2π − π/4',
        'P({{17π|6}}) = P({{5π|6}}) = (−{{√3|2}}, {{1|2}}) // 17π/6 − 2π = 5π/6',
      ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 4 —', q: 'tan {{2π|3}} ?',
          s: [ 'P({{2π|3}}) = (−{{1|2}}, {{√3|2}})', 'tan = {{√3/2|−1/2}} = −√3' ] } ],
      [ { t: 'ex', h: 'Exemple 5 —', q: 'sin θ = {{3|5}} et θ dans Q2. cos θ et tan θ ?',
          s: [ 'cos<sup>2</sup> θ = 1 − {{9|25}} = {{16|25}}', 'cos θ = −{{4|5}} // Q2 : cos < 0', 'tan θ = −{{3|4}}' ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Calculatrice en mode degrés alors qu\'on travaille en radians.',
          'Oublier le signe selon le quadrant.',
          'Inverser cos (abscisse x) et sin (ordonnée y).',
        ] } ],
      [ { t: 'retenir', items: [
          'π rad = 180°.',
          'P(θ) = (cos θ, sin θ).',
          'Connaître π/6, π/4, π/3, puis utiliser les symétries.',
        ] } ],
    ] },
  ],
},

/* ============ 10. Sinus et cosinus ============ */
'sinus-cosinus': {
  bulle: 'sinus et cosinus',
  sous: 'Les fonctions sinus et cosinus',
  recto: [
    { t: 'fig', figs: [
      { kind: 'plan', w: 640, h: 170, xmin: -PI / 2 - 0.3, xmax: 2 * PI + 0.3, ymin: -1.5, ymax: 1.5, ticky: 1, grille: 0.5, xlabels: XPI,
        courbes: [
          { fn: Math.sin, lbl: 'y = sin x', at: [PI / 2 - 0.4, 1.2] },
          { fn: Math.cos, cls: 'ln2', lbl: 'y = cos x', at: [-1.9, 1.2], pk: true },
        ],
        alt: 'courbes de sinus et cosinus', cap: 'sin et cos : période 2π, amplitude 1 ; cos x = sin(x + π/2)' },
    ] },
    { t: 'cols', c: [
      [ { t: 'form', h: 'forme transformée', items: [
          ['sinus', 'f(x) = a sin(b(x − h)) + k'],
          ['cosinus', 'f(x) = a cos(b(x − h)) + k'],
          ['amplitude', '|a| = {{max − min|2}}'],
          ['période', 'p = {{2π||b|}}'],
          ['déphasage', 'h (décalage horizontal)'],
          ['axe d\'oscillation', 'y = k = {{max + min|2}}'],
          ['image', '[k − |a|, k + |a|]'],
        ] } ],
      [ { t: 'list', h: 'esquisser en 5 points (a > 0, b > 0)', items: [
          'Diviser une période en **4 quarts** à partir de x = h.',
          '**Sinus** : axe (en montant) → max → axe → min → axe.',
          '**Cosinus** : max → axe → min → axe → max.',
          'Si a < 0, on inverse max et min.',
        ] },
        { t: 'list', h: 'trouver la règle d\'un graphique', items: [
          'a et k avec le max et le min.',
          'p : distance entre deux max consécutifs → b = {{2π|p}}.',
          'h : un point sur l\'axe en montant (sinus) ou un max (cosinus).',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Analyser f(x) = 3 sin(2(x − {{π|4}})) + 1.',
      fig: { kind: 'plan', w: 260, h: 170, xmin: -0.2, xmax: 3 * PI / 2 + 0.2, ymin: -3, ymax: 5, ticky: 2,
        xlabels: [[PI / 4, 'π/4'], [PI / 2, 'π/2'], [3 * PI / 4, '3π/4'], [PI, 'π'], [5 * PI / 4, '5π/4']],
        courbes: [ { fn: x => 3 * Math.sin(2 * (x - PI / 4)) + 1 } ],
        droites: [ { a: [0, 1], b: [1, 1], cls: 'ln2', dash: true } ],
        pts: [ { x: PI / 2, y: 4, lbl: 'max', dx: 4, dy: -3 }, { x: PI, y: -2, lbl: 'min', dx: 4, dy: 12 } ], alt: 'sinusoïde transformée' },
      s: [ 'amplitude : 3 · période : {{2π|2}} = π', 'déphasage : {{π|4}} · axe : y = 1', 'max = 1 + 3 = 4 · min = 1 − 3 = −2', 'image : [−2, 4]', '5 points : ({{π|4}}, 1) ({{π|2}}, 4) ({{3π|4}}, 1) (π, −2) ({{5π|4}}, 1)' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Une sinusoïde a un maximum de 7 en x = 2, puis un minimum de −1 en x = 5. Règle en cosinus ?',
      s: [ 'a = {{7 − (−1)|2}} = 4 · k = {{7 + (−1)|2}} = 3', 'demi-période : 5 − 2 = 3 → p = 6 → b = {{2π|6}} = {{π|3}}', 'h = 2 // position d\'un max pour le cosinus' ],
      r: 'f(x) = 4 cos({{π|3}}(x − 2)) + 3',
      p: [ 'Vérif. : f(5) = 4 cos(π) + 3 = −1 ✓' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Une grande roue de 10 m de rayon a son centre à 12 m du sol et fait un tour en 40 s. On part du point le plus bas.',
      s: [ 'h(t) = −10 cos({{2π|40}} t) + 12 = −10 cos({{π|20}} t) + 12', 'h(0) = −10 + 12 = 2 m // point le plus bas ✓', 'h(20) = −10 cos π + 12 = 22 m // point le plus haut ✓' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Période = {{2π|b}}, pas 2πb.',
          'Oublier de mettre b en évidence : sin(2x − π) = sin(2(x − {{π|2}})), donc h = {{π|2}}.',
          'Calculatrice en degrés.',
        ] } ],
      [ { t: 'retenir', items: [
          'a = amplitude, b → période, h = déphasage, k = axe.',
          'Sinus part de l\'axe, cosinus part d\'un max.',
          'max et min → a et k.',
        ] } ],
    ] },
  ],
},

/* ============ 11. Tangente ============ */
tangente: {
  bulle: 'fonction tangente',
  sous: 'La fonction tangente',
  recto: [
    { t: 'cols', w: '1fr 1.1fr', c: [
      [ { t: 'txt', p: [ '**tan x = {{sin x|cos x}}** : elle n\'existe pas quand cos x = 0.' ] },
        { t: 'list', h: 'fonction de base f(x) = tan x', items: [
          'Période : **π**.',
          '**Asymptotes verticales** : x = {{π|2}} + nπ (n entier).',
          'Zéros : x = nπ.',
          'Domaine : ℝ \\ { {{π|2}} + nπ } · Image : ℝ.',
          'Toujours **croissante** entre deux asymptotes.',
          'Pas d\'amplitude (ni max ni min).',
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 290, h: 220, xmin: -3 * PI / 2 - 0.2, xmax: 3 * PI / 2 + 0.2, ymin: -4, ymax: 4, ticky: 2,
            xlabels: [[-PI, '−π'], [-PI / 2, '−π/2'], [PI / 2, 'π/2'], [PI, 'π']],
            courbes: [ { fn: Math.tan, n: 1200 } ],
            droites: [ { a: [-PI / 2, 0], b: [-PI / 2, 1], cls: 'ln2', dash: true }, { a: [PI / 2, 0], b: [PI / 2, 1], cls: 'ln2', dash: true } ],
            alt: 'courbe de la fonction tangente', cap: 'asymptotes (roses) à x = ±π/2' },
        ] } ],
    ] },
    { t: 'form', h: 'forme transformée : f(x) = a tan(b(x − h)) + k', items: [
      ['période', 'p = {{π||b|}}'],
      ['point d\'inflexion (« centre »)', '(h, k), puis tous les (h + np, k)'],
      ['asymptotes', 'x = h + {{p|2}} + np'],
      ['variation', 'croissante si ab > 0 · décroissante si ab < 0'],
    ] },
    { t: 'list', h: 'trouver la règle', items: [
      'Deux asymptotes consécutives donnent la **période** p, donc |b| = {{π|p}}.',
      'Le point au **milieu** de deux asymptotes donne (h, k).',
      'Un autre point donne **a**.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Analyser f(x) = 2 tan({{1|2}}(x − π)) + 1.',
      s: [ 'période : {{π|1/2}} = 2π', 'centre : (π, 1)', 'asymptotes : x = π + π + 2πn = 2π + 2πn, donc x = 2πn', 'croissante (a = 2 > 0, b > 0)', 'zéro : tan({{1|2}}(x − π)) = −{{1|2}}', '{{1|2}}(x − π) ≈ −0,464 + πn → x ≈ 2,21 + 2πn' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Asymptotes consécutives x = −1 et x = 3 ; la courbe croissante passe par (1, 2) et (2, 5). Règle ?',
      s: [ 'p = 3 − (−1) = 4 → b = {{π|4}}', 'centre au milieu : (1, 2) → h = 1, k = 2', '5 = a tan({{π|4}}(2 − 1)) + 2 = a(1) + 2 → a = 3' ],
      r: 'f(x) = 3 tan({{π|4}}(x − 1)) + 2' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Utiliser 2π comme période (c\'est π pour la tangente).',
          'Chercher une amplitude : la tangente n\'en a pas.',
          'Oublier les asymptotes dans le domaine.',
        ] } ],
      [ { t: 'retenir', items: [
          'Période {{π||b|}} ; asymptotes à mi-chemin entre deux centres.',
          'tan = sin ÷ cos.',
          'ab > 0 → croissante.',
        ] } ],
    ] },
  ],
},

/* ============ 12. Équations trigonométriques ============ */
'equations-trigo': {
  bulle: 'équations trigo',
  sous: 'Équations et inéquations trigonométriques',
  recto: [
    { t: 'list', h: 'démarche', items: [
      '1. **Isoler** le sinus, le cosinus ou la tangente.',
      '2. Trouver les **angles de base** sur le cercle trigonométrique (ou avec sin<sup>−1</sup>, cos<sup>−1</sup>, tan<sup>−1</sup>).',
      '3. Ajouter la **période** pour avoir toutes les solutions.',
      '4. Si l\'argument est b(x − h), résoudre b(x − h) = angle, puis isoler x.',
      '5. Garder seulement les solutions dans l\'intervalle demandé.',
    ] },
    { t: 'tab', h: 'les deux solutions d\'un tour', full: true, lcol: true,
      head: ['Équation', 'Solutions de base', 'Toutes les solutions'],
      rows: [
        ['sin θ = v', 'θ<sub>1</sub> et π − θ<sub>1</sub>', 'θ<sub>1</sub> + 2πn et π − θ<sub>1</sub> + 2πn'],
        ['cos θ = v', 'θ<sub>1</sub> et −θ<sub>1</sub> (ou 2π − θ<sub>1</sub>)', '±θ<sub>1</sub> + 2πn'],
        ['tan θ = v', 'θ<sub>1</sub>', 'θ<sub>1</sub> + πn'],
      ],
      note: 'Si l\'argument est b(x − h), la période devient {{2π||b|}} (ou {{π||b|}} pour tan) : on divise tout par b.' },
    { t: 'cols', c: [
      [ { t: 'list', h: 'cas particuliers', items: [
          'sin θ = 1 → θ = {{π|2}} + 2πn (une seule solution par tour).',
          'sin θ = 2 → **aucune** solution (−1 ≤ sin ≤ 1).',
          'Équation du 2<sup>e</sup> degré : poser u = sin x, factoriser, puis résoudre chaque équation.',
        ] } ],
      [ { t: 'list', h: 'inéquations', items: [
          'Résoudre l\'équation correspondante.',
          'Utiliser le graphique ou le cercle pour savoir où la fonction est au-dessus ou au-dessous.',
          'Écrire la réponse en intervalles.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 1 —', q: '2 sin x − 1 = 0 sur [0, 2π].',
          s: [ 'sin x = {{1|2}}', 'x = {{π|6}} ou x = π − {{π|6}} = {{5π|6}}' ] } ],
      [ { t: 'ex', h: 'Exemple 2 —', q: 'tan x = −1 (toutes les solutions).',
          s: [ 'angle de base : {{3π|4}}', 'x = {{3π|4}} + πn' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 3 —', q: '4 cos(2(x − {{π|3}})) + 2 = 0',
      s: [ 'cos(2(x − {{π|3}})) = −{{1|2}}', '2(x − {{π|3}}) = {{2π|3}} + 2πn  ou  {{4π|3}} + 2πn', 'x − {{π|3}} = {{π|3}} + πn  ou  {{2π|3}} + πn // ÷ 2', 'x = {{2π|3}} + πn  ou  x = π + πn' ],
      p: [ 'Vérif. avec x = π : 2({{2π|3}}) = {{4π|3}} et cos {{4π|3}} = −{{1|2}} ✓' ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 4 —', q: '2 sin<sup>2</sup> x − sin x − 1 = 0 sur [0, 2π[.',
          s: [ '(2 sin x + 1)(sin x − 1) = 0', 'sin x = −{{1|2}} → x = {{7π|6}} ou {{11π|6}}', 'sin x = 1 → x = {{π|2}}' ] } ],
      [ { t: 'ex', h: 'Exemple 5 —', q: 'sin x ≥ {{1|2}} sur [0, 2π].',
          s: [ 'égalité en {{π|6}} et {{5π|6}}', 'entre les deux, sin x est plus grand' ], r: '[{{π|6}}, {{5π|6}}]' } ],
    ] },
    { t: 'ex', h: 'Exemple 6 —', q: 'Grande roue : h(t) = −10 cos({{π|20}} t) + 12. Quand est-on à 17 m pendant le 1<sup>er</sup> tour ?',
      s: [ 'cos({{π|20}} t) = −{{1|2}}', '{{π|20}} t = {{2π|3}} ou {{4π|3}}', 't = {{40|3}} ≈ 13,3 s  ou  t = {{80|3}} ≈ 26,7 s' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier la 2<sup>e</sup> solution de base (π − θ pour le sinus).',
          'Ajouter 2πn **après** avoir divisé par b : il faut l\'ajouter **avant**.',
          'Diviser par sin x dans une équation : on perd des solutions. On factorise plutôt.',
        ] } ],
      [ { t: 'retenir', items: [
          'Isoler, angles de base, + période.',
          'sin : θ et π − θ ; cos : ±θ ; tan : θ + πn.',
          'Vérifier dans l\'intervalle demandé.',
        ] } ],
    ] },
  ],
},

/* ============ 13. Identités ============ */
'identites-trigo': {
  bulle: 'identités trigo',
  sous: 'Les identités trigonométriques',
  recto: [
    { t: 'txt', p: [ 'Une **identité** est une égalité vraie pour **toutes** les valeurs de la variable (là où les expressions existent). On s\'en sert pour simplifier des expressions et pour prouver d\'autres identités.' ] },
    { t: 'cols', c: [
      [ { t: 'form', h: 'définitions', items: [
          ['', 'tan x = {{sin x|cos x}}   ·   cot x = {{cos x|sin x}}'],
          ['', 'sec x = {{1|cos x}}   ·   csc x = {{1|sin x}}'],
        ] },
        { t: 'form', h: 'identités de Pythagore', items: [
          ['', '<b>sin<sup>2</sup> x + cos<sup>2</sup> x = 1</b>'],
          ['', '1 + tan<sup>2</sup> x = sec<sup>2</sup> x'],
          ['', '1 + cot<sup>2</sup> x = csc<sup>2</sup> x'],
        ], note: 'Les deux dernières viennent de la 1<sup>re</sup>, divisée par cos<sup>2</sup> x ou par sin<sup>2</sup> x.' },
        { t: 'form', h: 'parité', items: [
          ['', 'sin(−x) = −sin x · cos(−x) = cos x · tan(−x) = −tan x'],
        ] } ],
      [ { t: 'form', h: 'somme et différence d\'angles', items: [
          ['', 'sin(a ± b) = sin a cos b ± cos a sin b'],
          ['', 'cos(a ± b) = cos a cos b ∓ sin a sin b'],
          ['', 'tan(a ± b) = {{tan a ± tan b|1 ∓ tan a tan b}}'],
        ] },
        { t: 'form', h: 'angle double', items: [
          ['', 'sin 2a = 2 sin a cos a'],
          ['', 'cos 2a = cos<sup>2</sup> a − sin<sup>2</sup> a = 2cos<sup>2</sup> a − 1 = 1 − 2sin<sup>2</sup> a'],
        ], note: 'Vérifie avec ton enseignant si les formules de somme et d\'angle double sont évaluées dans ta classe.' } ],
    ] },
    { t: 'list', h: 'démontrer une identité', items: [
      'Travailler **un seul membre** (souvent le plus compliqué) jusqu\'à obtenir l\'autre.',
      'Tout écrire en **sin et cos**.',
      'Mettre au **même dénominateur**, **factoriser**, utiliser sin<sup>2</sup> + cos<sup>2</sup> = 1.',
      'Ne jamais « passer de l\'autre côté » : ce n\'est pas une équation à résoudre.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Démontrer : sec x − cos x = sin x tan x.',
      s: [ 'sec x − cos x = {{1|cos x}} − cos x // en sin et cos', '= {{1 − cos<sup>2</sup> x|cos x}} // même dénominateur', '= {{sin<sup>2</sup> x|cos x}} // Pythagore', '= sin x × {{sin x|cos x}} = sin x tan x ✓' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Démontrer : (1 − cos<sup>2</sup> x)(1 + cot<sup>2</sup> x) = 1.',
      s: [ '(1 − cos<sup>2</sup> x)(1 + cot<sup>2</sup> x) = sin<sup>2</sup> x × csc<sup>2</sup> x', '= sin<sup>2</sup> x × {{1|sin<sup>2</sup> x}} = 1 ✓' ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 3 —', q: 'Valeur exacte de sin {{5π|12}} (75°).',
          s: [ 'sin({{π|4}} + {{π|6}})', '= {{√2|2}} · {{√3|2}} + {{√2|2}} · {{1|2}}', '= {{√6 + √2|4}} ≈ 0,966' ] } ],
      [ { t: 'ex', h: 'Exemple 4 —', q: 'Valeur exacte de cos {{π|12}} (15°).',
          s: [ 'cos({{π|3}} − {{π|4}})', '= {{1|2}} · {{√2|2}} + {{√3|2}} · {{√2|2}}', '= {{√2 + √6|4}} ≈ 0,966' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 5 —', q: 'Simplifier (sin x + cos x)<sup>2</sup>.',
      s: [ '= sin<sup>2</sup> x + 2 sin x cos x + cos<sup>2</sup> x', '= 1 + 2 sin x cos x = 1 + sin 2x' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Écrire sin(a + b) = sin a + sin b (faux !).',
          'Travailler les deux membres en même temps comme une équation.',
          'sin<sup>2</sup> x veut dire (sin x)<sup>2</sup>, pas sin(x<sup>2</sup>).',
        ] } ],
      [ { t: 'retenir', items: [
          'sin<sup>2</sup> + cos<sup>2</sup> = 1 : l\'identité reine.',
          'Tout en sin et cos, même dénominateur.',
          'Un seul membre à la fois.',
        ] } ],
    ] },
  ],
},

});
})();
