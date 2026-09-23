/* Physique — Outils et cinématique */
DATA.feuilles['physique'] = DATA.feuilles['physique'] || {};
(function () {
  const g = 9.8;
  // graphique v-t de l'exemple : accélère 0 → 8 m/s (0-4 s), constant (4-10 s), freine (10-12 s)
  const vt = t => (t <= 4 ? 2 * t : t <= 10 ? 8 : Math.max(0, 8 - 4 * (t - 10)));

Object.assign(DATA.feuilles['physique'], {

/* ============ 1. Mesure et incertitude ============ */
mesure: {
  bulle: 'mesure et incertitude',
  sous: 'Mesure, incertitude et chiffres significatifs',
  recto: [
    { t: 'cols', c: [
      [ { t: 'list', h: 'incertitude', items: [
          'Toute mesure a une **incertitude** : on l\'écrit **valeur ± incertitude absolue**.',
          'Instrument **gradué** : ± la moitié de la plus petite graduation (règle en mm : ± 0,5 mm).',
          'Instrument **numérique** : ± 1 sur le dernier chiffre affiché.',
          '**Incertitude relative** = {{incertitude absolue|valeur}} × 100 %.',
        ] },
        { t: 'tab', h: 'propager l\'incertitude', full: true, lcol: true,
          head: ['Opération', 'On additionne les…'],
          rows: [
            ['addition, soustraction', 'incertitudes **absolues**'],
            ['multiplication, division', 'incertitudes **relatives**'],
          ] } ],
      [ { t: 'list', h: 'chiffres significatifs', items: [
          'Tous les chiffres non nuls sont significatifs : 245 → 3.',
          'Les zéros **entre** des chiffres comptent : 1005 → 4.',
          'Les zéros **au début** ne comptent pas : 0,0032 → 2.',
          'Les zéros **à la fin après la virgule** comptent : 2,50 → 3.',
          '× et ÷ : la réponse a autant de chiffres significatifs que la donnée qui en a **le moins**.',
          '+ et − : autant de **décimales** que la donnée qui en a le moins.',
        ] },
        { t: 'list', h: 'notation scientifique', items: [
          'a × 10<sup>n</sup> avec 1 ≤ a < 10 : 0,000 45 = 4,5 × 10<sup>−4</sup>.',
        ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'précision et exactitude', items: [
          '**Exactitude** : la mesure est proche de la **vraie valeur**.',
          '**Précision** : les mesures répétées sont proches **les unes des autres**.',
          'On peut être précis sans être exact (instrument mal calibré).',
        ] } ],
      [ { t: 'form', h: 'conversions utiles', items: [
          ['km/h → m/s', '÷ 3,6'],
          ['m/s → km/h', '× 3,6'],
          ['1 h', '= 3600 s'],
          ['1 cm', '= 0,01 m · 1 g = 0,001 kg'],
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Un rectangle mesure (12,3 ± 0,1) cm sur (4,5 ± 0,1) cm. Aire avec son incertitude ?',
      s: [ 'A = 12,3 × 4,5 = 55,35 cm²', 'relatives : {{0,1|12,3}} + {{0,1|4,5}} ≈ 0,81 % + 2,22 % = 3,03 %', 'absolue : 55,35 × 0,0303 ≈ 1,7 cm²' ],
      r: 'A = (55 ± 2) cm²' },
    { t: 'ex', h: 'Exemple 2 —', q: 'Périmètre du même rectangle.',
      s: [ 'P = 2(12,3 + 4,5) = 33,6 cm', 'incertitude : 2(0,1 + 0,1) = 0,4 cm // on additionne les absolues' ], r: 'P = (33,6 ± 0,4) cm' },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 3 —', q: 'Chiffres significatifs.',
          s: [ '0,004 20 → 3', '3,0 × 2,456 = 7,4 // 2 ch. sig.', '12,1 + 0,35 = 12,5 // 1 décimale' ] } ],
      [ { t: 'ex', h: 'Exemple 4 —', q: 'Convertir 90 km/h en m/s.', s: [ '90 ÷ 3,6 = 25 m/s' ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Donner une réponse avec 8 décimales de calculatrice.',
          'Additionner des incertitudes relatives pour une somme.',
          'Mélanger km/h et m/s dans une même équation.',
        ] } ],
      [ { t: 'retenir', items: [
          '+ et − : incertitudes absolues ; × et ÷ : relatives.',
          'km/h ÷ 3,6 = m/s.',
          'Précis ≠ exact.',
        ] } ],
    ] },
  ],
},

/* ============ 2. Vecteurs ============ */
vecteurs: {
  bulle: 'vecteurs en physique',
  sous: 'Grandeurs vectorielles : addition et décomposition',
  recto: [
    { t: 'cols', c: [
      [ { t: 'tab', full: true, lcol: true,
          head: ['Grandeur **scalaire**', 'Grandeur **vectorielle**'],
          rows: [
            ['seulement une valeur (et une unité)', 'une grandeur + une **orientation**'],
            ['masse, temps, distance, énergie, température', 'déplacement, vitesse, accélération, force'],
          ] },
        { t: 'form', h: 'décomposer un vecteur (angle θ avec l\'axe des x)', items: [
          ['composante x', 'A<sub>x</sub> = A cos θ'],
          ['composante y', 'A<sub>y</sub> = A sin θ'],
        ] },
        { t: 'form', h: 'recomposer', items: [
          ['grandeur', 'A = √(A<sub>x</sub><sup>2</sup> + A<sub>y</sub><sup>2</sup>)'],
          ['orientation', 'θ = tan<sup>−1</sup>({{A<sub>y</sub>|A<sub>x</sub>}}) (+ vérifier le quadrant)'],
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 230, h: 200, xmin: -10, xmax: 100, ymin: -10, ymax: 80, tick: 20, ticky: 20, grille: 10, nx: 'x (N)', ny: 'y',
            fleches: [ { a: [0, 0], b: [86.6, 50], pk: true, lbl: 'F = 100 N', at: [30, 40] }, { a: [0, 0], b: [86.6, 0], lbl: 'Fx', at: [40, -8] }, { a: [86.6, 0], b: [86.6, 50], vert: true, lbl: 'Fy', at: [89, 22] } ],
            alt: 'décomposition d’une force en composantes', cap: '100 N à 30° : F<sub>x</sub> = 86,6 N ; F<sub>y</sub> = 50 N' },
        ] } ],
    ] },
    { t: 'list', h: 'additionner des vecteurs (résultante)', items: [
      '**Méthode graphique** : placer les vecteurs bout à bout ; la résultante va du début du premier à la fin du dernier.',
      '**Méthode des composantes** : décomposer chaque vecteur, additionner tous les x, puis tous les y, puis recomposer.',
      'Vecteurs perpendiculaires : **Pythagore** directement.',
      'Vecteurs de même direction : on additionne (même sens) ou on soustrait (sens contraires).',
    ] },
    { t: 'list', h: 'noter l\'orientation', items: [
      'Angle à partir de l\'axe des x positifs (sens antihoraire), ou points cardinaux : « 30° au nord de l\'est ».',
      'Choisir un **sens positif** (vers la droite, vers le haut) et s\'y tenir.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Deux forces : 30 N vers l\'est et 40 N vers le nord. Résultante ?',
      s: [ 'R = √(30<sup>2</sup> + 40<sup>2</sup>) = 50 N', 'θ = tan<sup>−1</sup>({{40|30}}) ≈ 53,1° au nord de l\'est' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Décomposer une force de 100 N à 30°.',
      s: [ 'F<sub>x</sub> = 100 cos 30° ≈ 86,6 N', 'F<sub>y</sub> = 100 sin 30° = 50 N' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Un avion vole à 200 km/h vers le nord ; le vent souffle à 50 km/h vers l\'est. Vitesse par rapport au sol ?',
      s: [ 'v = √(200<sup>2</sup> + 50<sup>2</sup>) ≈ 206 km/h', 'θ = tan<sup>−1</sup>({{50|200}}) ≈ 14° à l\'est du nord' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Forces de 12 N vers la droite et de 20 N vers la gauche.',
      s: [ 'R = 12 − 20 = −8 N → 8 N vers la gauche' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Additionner les grandeurs de vecteurs non parallèles (30 + 40 ≠ 50… sauf ici par Pythagore !).',
          'Inverser cos et sin selon l\'angle choisi.',
          'Calculatrice en radians.',
        ] } ],
      [ { t: 'retenir', items: [
          'Décomposer : A cos θ, A sin θ.',
          'Additionner les composantes.',
          'Recomposer : Pythagore + tan<sup>−1</sup>.',
        ] } ],
    ] },
  ],
},

/* ============ 3. Position, distance, déplacement ============ */
position: {
  bulle: 'position et déplacement',
  sous: 'Référentiel, position, distance et déplacement',
  recto: [
    { t: 'cols', c: [
      [ { t: 'list', h: 'le référentiel', items: [
          'Un **référentiel** est le point de vue (l\'objet de référence) à partir duquel on décrit un mouvement.',
          'Le mouvement est **relatif** : un passager assis dans un autobus est immobile par rapport à l\'autobus, mais en mouvement par rapport à la route.',
          'On choisit une **origine** (x = 0) et un **sens positif**.',
        ] } ],
      [ { t: 'tab', full: true, lcol: true,
          head: ['Grandeur', 'Définition', 'Type'],
          rows: [
            ['**position** x', 'endroit par rapport à l\'origine', 'vectorielle'],
            ['**distance** d', 'longueur totale du trajet parcouru', 'scalaire (toujours ≥ 0)'],
            ['**déplacement** Δx', 'changement de position : x<sub>f</sub> − x<sub>i</sub>', 'vectorielle (peut être négatif)'],
          ] } ],
    ] },
    { t: 'box', f: 'Δx = x<sub>f</sub> − x<sub>i</sub>', note: 'Le déplacement ne dépend que du point de départ et du point d\'arrivée, pas du chemin.' },
    { t: 'cols', c: [
      [ { t: 'list', h: 'à retenir', items: [
          'Distance ≥ grandeur du déplacement.',
          'Aller-retour : déplacement **nul**, mais distance non nulle.',
          'Le signe du déplacement indique le **sens** (+ ou − selon l\'axe choisi).',
        ] } ],
      [ { t: 'list', h: 'unités', items: [
          'SI : mètre (m).',
          'Écrire toujours l\'orientation d\'un déplacement : « 3 m vers l\'est » ou « −3 m ».',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Une coureuse part de x = 2 m, va jusqu\'à x = 10 m, puis revient à x = 6 m.',
      s: [ 'distance = (10 − 2) + (10 − 6) = 8 + 4 = 12 m', 'déplacement = 6 − 2 = +4 m // dans le sens positif' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Un élève fait le tour d\'une piste de 400 m et revient à son point de départ.',
      s: [ 'distance = 400 m', 'déplacement = 0 m' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Une voiture roule 3 km vers le nord, puis 4 km vers l\'est.',
      s: [ 'distance = 3 + 4 = 7 km', 'déplacement = √(3<sup>2</sup> + 4<sup>2</sup>) = 5 km', 'orientation : tan<sup>−1</sup>({{4|3}}) ≈ 53° à l\'est du nord' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Dans un train qui roule à 80 km/h, une personne marche vers l\'avant à 5 km/h. Sa vitesse par rapport au sol ?',
      s: [ '80 + 5 = 85 km/h // référentiel : le sol' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Confondre distance et déplacement.',
          'Oublier le signe (sens) du déplacement.',
          'Oublier de préciser le référentiel.',
        ] } ],
      [ { t: 'retenir', items: [
          'Δx = x<sub>f</sub> − x<sub>i</sub>.',
          'Distance = scalaire ; déplacement = vecteur.',
          'Le mouvement dépend du référentiel.',
        ] } ],
    ] },
  ],
},

/* ============ 4. Vitesse ============ */
vitesse: {
  bulle: 'vitesse',
  sous: 'Vitesse moyenne, vitesse scalaire et vitesse instantanée',
  recto: [
    { t: 'tab', full: true, lcol: true,
      head: ['Grandeur', 'Formule', 'Type'],
      rows: [
        ['**vitesse moyenne**', 'v<sub>moy</sub> = {{Δx|Δt}} (déplacement ÷ temps)', 'vectorielle'],
        ['**vitesse scalaire moyenne**', 'v = {{d|Δt}} (distance ÷ temps)', 'scalaire'],
        ['**vitesse instantanée**', 'vitesse à un instant précis (compteur de vitesse) ; pente de la tangente sur un graphique x-t', 'vectorielle'],
      ] },
    { t: 'cols', c: [
      [ { t: 'form', h: 'formules dérivées', items: [
          ['déplacement', 'Δx = v × Δt'],
          ['temps', 'Δt = {{Δx|v}}'],
        ] },
        { t: 'form', h: 'unités', items: [
          ['SI', 'm/s'],
          ['conversion', 'km/h ÷ 3,6 = m/s'],
        ] } ],
      [ { t: 'list', h: 'à comprendre', items: [
          'La vitesse moyenne ne dit rien des variations pendant le trajet.',
          'Sur un aller-retour, la vitesse moyenne est **nulle**, mais pas la vitesse scalaire moyenne.',
          'Vitesse moyenne de plusieurs étapes : **déplacement total ÷ temps total** (on ne fait pas la moyenne des vitesses !).',
        ] } ],
    ] },
    { t: 'txt', h: 'sur un graphique position-temps', p: [ 'La **pente** d\'une droite x-t donne la vitesse. Pour une courbe, la pente de la **sécante** donne la vitesse moyenne et la pente de la **tangente** donne la vitesse instantanée.' ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Un cycliste roule 3 km vers l\'est, puis 1 km vers l\'ouest, en 0,5 h au total.',
      s: [ 'vitesse scalaire moyenne = {{4 km|0,5 h}} = 8 km/h', 'déplacement = 3 − 1 = 2 km vers l\'est', 'vitesse moyenne = {{2 km|0,5 h}} = 4 km/h vers l\'est' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Une auto parcourt 60 km à 60 km/h, puis 60 km à 120 km/h. Vitesse scalaire moyenne ?',
      s: [ 't<sub>1</sub> = 1 h · t<sub>2</sub> = 0,5 h', 'v = {{120 km|1,5 h}} = 80 km/h // et non 90 km/h !' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Combien de temps pour parcourir 450 m à 18 km/h ?',
      s: [ '18 km/h = 5 m/s', 'Δt = {{450|5}} = 90 s' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Faire la moyenne des vitesses de deux étapes de durées différentes.',
          'Mélanger km et m, h et s.',
          'Confondre vitesse moyenne (déplacement) et vitesse scalaire (distance).',
        ] } ],
      [ { t: 'retenir', items: [
          'v<sub>moy</sub> = Δx / Δt.',
          'Total ÷ total.',
          'Pente d\'un graphique x-t = vitesse.',
        ] } ],
    ] },
  ],
},

/* ============ 5. MRU ============ */
mru: {
  bulle: 'mru',
  sous: 'Le mouvement rectiligne uniforme (MRU)',
  recto: [
    { t: 'cols', w: '1.1fr 1fr', c: [
      [ { t: 'txt', p: [
          'Un objet est en **MRU** quand il se déplace en **ligne droite** à **vitesse constante** (même grandeur, même sens). Son accélération est **nulle**.',
        ] },
        { t: 'box', f: 'x<sub>f</sub> = x<sub>i</sub> + vΔt', note: 'ou Δx = vΔt' },
        { t: 'list', h: 'les graphiques du MRU', items: [
          '**x-t** : une **droite** oblique ; pente = vitesse.',
          '**v-t** : une droite **horizontale** ; aire sous la droite = déplacement.',
          '**a-t** : a = 0.',
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 230, h: 175, xmin: 0, xmax: 10, ymin: 0, ymax: 60, tick: 2, ticky: 10, grille: 1, nx: 't (s)', ny: 'x (m)',
            courbes: [ { fn: t => 10 + 4 * t, lbl: 'x = 10 + 4t', at: [0.5, 50] } ],
            pts: [ { x: 0, y: 10, lbl: 'x₀ = 10 m', dx: 5, dy: 12 }, { x: 10, y: 50 } ],
            alt: 'droite position temps', cap: 'x-t : pente = {{40 m|10 s}} = 4 m/s' },
        ] } ],
    ] },
    { t: 'list', h: 'problèmes de rencontre (deux mobiles)', items: [
      '1. Écrire l\'équation de position de chaque mobile avec la **même origine** et le **même sens positif**.',
      '2. Au moment de la rencontre, les deux positions sont **égales** : x<sub>A</sub> = x<sub>B</sub>.',
      '3. Résoudre pour t, puis trouver la position.',
    ] },
    { t: 'list', h: 'le MRU dans la vie réelle', items: [
      'Rare sur Terre (frottement) : une auto sur l\'autoroute avec régulateur de vitesse s\'en approche.',
      '1<sup>re</sup> loi de Newton : si la force résultante est nulle, un objet en mouvement reste en MRU.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Une auto roule à 90 km/h pendant 2 h 30 min. Distance ?',
      s: [ 'Δx = 90 km/h × 2,5 h = 225 km' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Deux autos partent en même temps de deux villes distantes de 300 km et roulent l\'une vers l\'autre, à 100 km/h (A) et à 80 km/h (B). Où et quand se croisent-elles ?',
      s: [ 'x<sub>A</sub> = 100t · x<sub>B</sub> = 300 − 80t // origine : ville A', '100t = 300 − 80t', '180t = 300 → t ≈ 1,67 h (1 h 40 min)', 'x = 100 × 1,67 ≈ 167 km de la ville A' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Sur le graphique du recto, où est l\'objet à t = 7 s ?',
      s: [ 'x = 10 + 4(7) = 38 m' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier la position initiale x<sub>i</sub>.',
          'Donner le même signe aux vitesses de deux mobiles qui vont en sens contraires.',
          'Laisser 2 h 30 min = 2,30 h (c\'est 2,5 h !).',
        ] } ],
      [ { t: 'retenir', items: [
          'MRU : v constante, a = 0.',
          'x<sub>f</sub> = x<sub>i</sub> + vΔt.',
          'Rencontre : x<sub>A</sub> = x<sub>B</sub>.',
        ] } ],
    ] },
  ],
},

/* ============ 6. MRUA ============ */
mrua: {
  bulle: 'accélération et mrua',
  sous: 'L\'accélération et le mouvement rectiligne uniformément accéléré (MRUA)',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [
          'L\'**accélération** est la variation de la vitesse par unité de temps. Elle se mesure en **m/s<sup>2</sup>**.',
          'En **MRUA**, l\'objet se déplace en ligne droite avec une accélération **constante**.',
        ] },
        { t: 'box', f: 'a = {{Δv|Δt}} = {{v<sub>f</sub> − v<sub>i</sub>|Δt}}' },
        { t: 'list', h: 'le signe de a', items: [
          'a et v de **même signe** : l\'objet **accélère** (va plus vite).',
          'a et v de **signes contraires** : l\'objet **ralentit**.',
          '« Décélération » = ralentissement, pas forcément a négatif !',
        ] } ],
      [ { t: 'form', h: 'les 4 équations du MRUA', items: [
          ['sans Δx', 'v<sub>f</sub> = v<sub>i</sub> + aΔt'],
          ['sans v<sub>f</sub>', 'Δx = v<sub>i</sub>Δt + ½aΔt<sup>2</sup>'],
          ['sans Δt', 'v<sub>f</sub><sup>2</sup> = v<sub>i</sub><sup>2</sup> + 2aΔx'],
          ['sans a', 'Δx = {{v<sub>i</sub> + v<sub>f</sub>|2}} Δt'],
        ], note: 'Choisir l\'équation qui ne contient PAS la variable qu\'on ne connaît pas et qu\'on ne cherche pas.' } ],
    ] },
    { t: 'list', h: 'démarche', items: [
      '1. Choisir le sens positif ; faire la liste : v<sub>i</sub>, v<sub>f</sub>, a, Δt, Δx (3 connues, 1 cherchée).',
      '2. Convertir en m, s, m/s.',
      '3. Choisir l\'équation ; isoler ; calculer.',
      '4. Vérifier le signe et l\'ordre de grandeur.',
    ] },
    { t: 'list', h: 'indices dans les énoncés', items: [
      '« part du repos », « démarre » → v<sub>i</sub> = 0.',
      '« s\'arrête », « s\'immobilise » → v<sub>f</sub> = 0.',
      '« tombe » (sans frottement) → a = −9,8 m/s<sup>2</sup> (vers le bas).',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Une auto part du repos et accélère à 3,0 m/s<sup>2</sup> pendant 5,0 s. Vitesse finale et distance ?',
      s: [ 'v<sub>f</sub> = 0 + 3,0 × 5,0 = 15 m/s', 'Δx = 0 + ½ × 3,0 × 5,0<sup>2</sup> = 37,5 m' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Une auto roulant à 25 m/s freine et s\'arrête sur 50 m. Accélération et durée du freinage ?',
      s: [ '0<sup>2</sup> = 25<sup>2</sup> + 2a(50)', 'a = {{−625|100}} = −6,25 m/s<sup>2</sup> // sens contraire du mouvement', 'Δt = {{0 − 25|−6,25}} = 4,0 s' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Un skieur passe de 4 m/s à 16 m/s sur 100 m. Durée ?',
      s: [ 'Δx = {{v<sub>i</sub> + v<sub>f</sub>|2}}Δt', '100 = {{4 + 16|2}} Δt = 10Δt', 'Δt = 10 s' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier le signe négatif de a quand l\'objet ralentit.',
          'Oublier le carré de Δt dans ½aΔt<sup>2</sup>.',
          'Utiliser les équations du MRUA si l\'accélération n\'est pas constante.',
        ] } ],
      [ { t: 'retenir', items: [
          'a = Δv / Δt.',
          '4 équations : choisir celle sans l\'inconnue inutile.',
          'Repos → v = 0.',
        ] } ],
    ] },
  ],
},

/* ============ 7. Graphiques ============ */
graphiques: {
  bulle: 'graphiques du mouvement',
  sous: 'Les graphiques du mouvement (x-t, v-t, a-t)',
  recto: [
    { t: 'tab', full: true, lcol: true,
      head: ['Graphique', 'La pente donne…', 'L\'aire sous la courbe donne…'],
      rows: [
        ['**position-temps** (x-t)', 'la **vitesse**', '(rien d\'utile)'],
        ['**vitesse-temps** (v-t)', 'l\'**accélération**', 'le **déplacement** Δx'],
        ['**accélération-temps** (a-t)', '—', 'la **variation de vitesse** Δv'],
      ] },
    { t: 'tab', h: 'reconnaître les mouvements', full: true, lcol: true,
      head: ['Mouvement', 'x-t', 'v-t', 'a-t'],
      rows: [
        ['**repos**', 'horizontale', 'sur l\'axe (v = 0)', 'a = 0'],
        ['**MRU**', 'droite oblique', 'horizontale', 'a = 0'],
        ['**MRUA** (accélère)', 'courbe (parabole) de plus en plus inclinée', 'droite oblique', 'horizontale (≠ 0)'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'lire un graphique x-t', items: [
          'Pente positive : l\'objet avance dans le sens positif.',
          'Pente négative : il revient vers l\'origine (sens négatif).',
          'Pente plus raide : plus vite.',
          'Croiser l\'axe du temps : l\'objet passe à l\'origine.',
        ] } ],
      [ { t: 'list', h: 'lire un graphique v-t', items: [
          'Au-dessus de l\'axe : mouvement dans le sens positif.',
          'Aire **sous l\'axe** : déplacement négatif.',
          'Aire totale d\'un trapèze : {{(B + b) × h|2}} ; d\'un triangle : {{b × h|2}}.',
          'Croiser l\'axe du temps : l\'objet s\'arrête et change de sens.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple —', q: 'Analyser le graphique v-t ci-dessous.',
      fig: { kind: 'plan', w: 270, h: 170, xmin: 0, xmax: 13, ymin: 0, ymax: 10, tick: 2, ticky: 2, grille: 1, nx: 't (s)', ny: 'v (m/s)',
        zones: [ { pts: [[0, 0], [4, 8], [10, 8], [12, 0]] } ],
        courbes: [ { fn: vt, n: 600 } ],
        alt: 'graphique vitesse temps en trois phases', cap: 'aire jaune = déplacement' },
      s: [ '0 à 4 s : a = {{8 − 0|4}} = 2 m/s<sup>2</sup> // MRUA, accélère', '4 à 10 s : a = 0 // MRU à 8 m/s', '10 à 12 s : a = {{0 − 8|2}} = −4 m/s<sup>2</sup> // ralentit', 'aire : {{4 × 8|2}} + 6 × 8 + {{2 × 8|2}}', '= 16 + 48 + 8 = 72 m' ],
      r: 'déplacement total de 72 m ; vitesse moyenne 72 ÷ 12 = 6 m/s' },
    { t: 'ex', h: 'Exemple 2 —', q: 'Sur un graphique x-t, la position passe de 30 m à 10 m en 5 s (droite). Vitesse ?',
      s: [ 'v = {{10 − 30|5}} = −4 m/s // retour vers l\'origine' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Lire un graphique v-t comme un graphique x-t (une droite horizontale en v-t n\'est pas le repos !).',
          'Oublier que l\'aire sous l\'axe est négative.',
          'Prendre la valeur lue pour la pente.',
        ] } ],
      [ { t: 'retenir', items: [
          'x-t : pente = v.',
          'v-t : pente = a ; aire = Δx.',
          'a-t : aire = Δv.',
        ] } ],
    ] },
  ],
},

/* ============ 8. Chute libre ============ */
'chute-libre': {
  bulle: 'chute libre',
  sous: 'La chute libre',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [
          'Un objet est en **chute libre** quand la **seule force** qui agit sur lui est la **gravité** (on néglige la résistance de l\'air).',
          'Tous les objets tombent alors avec la **même accélération**, peu importe leur masse.',
        ] },
        { t: 'box', f: 'g = 9,8 m/s² vers le bas', note: 'avec l\'axe positif vers le haut : a = −9,8 m/s²' } ],
      [ { t: 'form', h: 'équations (a = −g)', items: [
          ['', 'v<sub>f</sub> = v<sub>i</sub> − gΔt'],
          ['', 'Δy = v<sub>i</sub>Δt − ½gΔt<sup>2</sup>'],
          ['', 'v<sub>f</sub><sup>2</sup> = v<sub>i</sub><sup>2</sup> − 2gΔy'],
        ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'objet lancé vers le haut', items: [
          'Il ralentit en montant (a opposée à v).',
          'Au **point le plus haut**, v = 0 (mais a = −9,8 m/s<sup>2</sup>, pas 0 !).',
          'Le temps de montée = le temps de descente jusqu\'à la même hauteur.',
          'Il repasse à sa hauteur de départ avec la même vitesse, mais vers le bas.',
        ] } ],
      [ { t: 'list', h: 'avec l\'air (réalité)', items: [
          'La résistance de l\'air augmente avec la vitesse.',
          'L\'objet finit par atteindre une **vitesse limite** (force de l\'air = poids).',
          'Une plume tombe moins vite qu\'une pierre dans l\'air, mais à la même vitesse dans le vide.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'On laisse tomber une pierre d\'un pont de 45 m. Durée de la chute et vitesse à l\'arrivée ?',
      s: [ '−45 = 0 − ½(9,8)Δt<sup>2</sup> // Δy négatif : vers le bas', 'Δt = √({{2 × 45|9,8}}) ≈ 3,0 s', 'v<sub>f</sub> = 0 − 9,8 × 3,03 ≈ −29,7 m/s // 29,7 m/s vers le bas' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Une balle est lancée vers le haut à 15 m/s. Hauteur maximale et temps pour y arriver ?',
      s: [ 'au sommet v<sub>f</sub> = 0', '0 = 15<sup>2</sup> − 2(9,8)Δy → Δy = {{225|19,6}} ≈ 11,5 m', 'Δt = {{15|9,8}} ≈ 1,53 s' ],
      p: [ 'Elle revient à la main après 2 × 1,53 ≈ 3,06 s, à 15 m/s vers le bas.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Dire que a = 0 au sommet.',
          'Croire qu\'un objet lourd tombe plus vite (sans air).',
          'Mélanger les signes : choisis un sens positif et garde-le.',
        ] } ],
      [ { t: 'retenir', items: [
          'Chute libre : a = −9,8 m/s<sup>2</sup> (haut positif).',
          'Sommet : v = 0.',
          'Masse sans effet (dans le vide).',
        ] } ],
    ] },
  ],
},

/* ============ 9. Projectiles ============ */
projectiles: {
  bulle: 'mouvement des projectiles',
  sous: 'Le mouvement des projectiles',
  recto: [
    { t: 'cols', w: '1fr 1.05fr', c: [
      [ { t: 'txt', p: [
          'Un **projectile** est lancé puis soumis seulement à la gravité. Sa trajectoire est une **parabole**.',
          'L\'astuce : on sépare le mouvement en **deux mouvements indépendants**.',
        ] },
        { t: 'tab', full: true, lcol: true,
          head: ['', 'Horizontal (x)', 'Vertical (y)'],
          rows: [
            ['mouvement', '**MRU**', '**MRUA** (chute libre)'],
            ['accélération', 'a<sub>x</sub> = 0', 'a<sub>y</sub> = −9,8 m/s<sup>2</sup>'],
            ['vitesse initiale', 'v<sub>ix</sub> = v<sub>i</sub> cos θ', 'v<sub>iy</sub> = v<sub>i</sub> sin θ'],
            ['équation', 'Δx = v<sub>ix</sub>Δt', 'Δy = v<sub>iy</sub>Δt − ½gΔt<sup>2</sup>'],
          ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 250, h: 170, xmin: 0, xmax: 38, ymin: 0, ymax: 8, tick: 10, ticky: 2, grille: 2, nx: 'x (m)', ny: 'y (m)',
            courbes: [ { fn: x => x * Math.tan(Math.PI / 6) - 9.8 * x * x / (2 * 400 * 0.75), x0: 0, x1: 35.35 } ],
            fleches: [ { a: [0, 0], b: [8.66, 5], pk: true, lbl: 'vᵢ', at: [3, 4.5] } ],
            pts: [ { x: 17.67, y: 5.1, lbl: 'hauteur max.', dx: -30, dy: -7 }, { x: 35.35, y: 0, lbl: 'portée', dx: -34, dy: -5 } ],
            alt: 'trajectoire parabolique d’un projectile', cap: '20 m/s à 30° : parabole' },
        ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'ce qui relie les deux mouvements', items: [
          'Le **temps** Δt est le même pour x et pour y.',
          'On trouve souvent Δt avec le mouvement vertical, puis Δx avec l\'horizontal.',
        ] },
        { t: 'list', h: 'lancer horizontal', items: [
          'v<sub>iy</sub> = 0 : le temps de chute ne dépend que de la hauteur.',
          'Une balle lancée horizontalement et une balle lâchée de la même hauteur touchent le sol **en même temps**.',
        ] } ],
      [ { t: 'list', h: 'lancer oblique (même hauteur de départ et d\'arrivée)', items: [
          'Au sommet : v<sub>y</sub> = 0, mais v<sub>x</sub> reste la même.',
          'Temps de vol : Δt = {{2v<sub>iy</sub>|g}}.',
          'Hauteur max. : {{v<sub>iy</sub><sup>2</sup>|2g}}.',
          'Portée maximale à **45°** (sans air).',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Une balle roule à 5,0 m/s et quitte le bord d\'une falaise de 20 m. Temps de chute, distance horizontale et vitesse à l\'impact ?',
      s: [ 'vertical : −20 = 0 − ½(9,8)Δt<sup>2</sup> → Δt ≈ 2,02 s', 'horizontal : Δx = 5,0 × 2,02 ≈ 10,1 m', 'v<sub>fy</sub> = −9,8 × 2,02 ≈ −19,8 m/s · v<sub>x</sub> = 5,0 m/s', 'v = √(5,0<sup>2</sup> + 19,8<sup>2</sup>) ≈ 20,4 m/s' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Un ballon est botté à 20 m/s à 30° au-dessus de l\'horizontale (terrain plat).',
      s: [ 'v<sub>ix</sub> = 20 cos 30° ≈ 17,3 m/s · v<sub>iy</sub> = 20 sin 30° = 10 m/s', 'temps de vol : {{2 × 10|9,8}} ≈ 2,04 s', 'portée : 17,3 × 2,04 ≈ 35,3 m', 'hauteur max. : {{10<sup>2</sup>|2 × 9,8}} ≈ 5,1 m' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Utiliser la vitesse totale au lieu des composantes.',
          'Mettre une accélération sur l\'axe horizontal.',
          'Oublier que Δy est négatif quand l\'objet finit plus bas.',
        ] } ],
      [ { t: 'retenir', items: [
          'x : MRU ; y : chute libre.',
          'Même Δt pour les deux.',
          'Portée max. à 45°.',
        ] } ],
    ] },
  ],
},

});
})();
