/* Physique — Optique et feuille Général */
(function () {
  const rad = d => d * Math.PI / 180;
  const R3 = (a, b) => ({ a, b, cls: 'ln3' });
  const axeOptique = { a: [0, 0], b: [1, 0], cls: 'ln', dash: true };

Object.assign(DATA.feuilles['physique'], {

/* ============ 24. Lumière ============ */
lumiere: {
  bulle: 'la lumière',
  sous: 'La lumière et les rayons lumineux',
  recto: [
    { t: 'cols', c: [
      [ { t: 'list', h: 'propriétés de la lumière', items: [
          'Elle se propage en **ligne droite** dans un milieu homogène (d\'où les ombres).',
          'Elle n\'a pas besoin de matière : elle voyage dans le **vide**.',
          'Sa vitesse dans le vide : **c = 3,00 × 10<sup>8</sup> m/s**. Elle est plus lente dans l\'eau, le verre…',
          'Elle transporte de l\'**énergie**.',
          'La lumière blanche est un mélange de toutes les couleurs (prisme, arc-en-ciel).',
        ] } ],
      [ { t: 'list', h: 'le modèle du rayon', items: [
          'Un **rayon lumineux** est une droite fléchée qui indique le trajet de la lumière.',
          '**Faisceau** : ensemble de rayons ; il peut être **parallèle**, **convergent** (les rayons se rapprochent) ou **divergent** (ils s\'éloignent).',
          'Sources **primaires** (produisent la lumière : Soleil, ampoule) et **secondaires** (la réfléchissent : Lune, objets).',
        ] } ],
    ] },
    { t: 'tab', h: 'lumière et matière', full: true, lcol: true,
      head: ['Milieu', 'Ce qui se passe', 'Exemple'],
      rows: [
        ['**transparent**', 'laisse passer la lumière ; on voit clairement à travers', 'verre, eau, air'],
        ['**translucide**', 'laisse passer la lumière, mais en la diffusant', 'papier ciré, verre givré'],
        ['**opaque**', 'bloque la lumière (absorbe ou réfléchit)', 'bois, métal, corps humain'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'ombres', items: [
          '**Ombre** : zone qui ne reçoit aucune lumière de la source.',
          '**Pénombre** : zone qui reçoit une partie de la lumière (source étendue).',
          'Éclipses : la Lune ou la Terre fait de l\'ombre.',
        ] } ],
      [ { t: 'form', h: 'formules', items: [
          ['vitesse', 'v = {{d|Δt}}'],
          ['indice de réfraction', 'n = {{c|v}}'],
          ['année-lumière', '≈ 9,46 × 10<sup>15</sup> m'],
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Le Soleil est à 1,5 × 10<sup>11</sup> m de la Terre. Temps pour que sa lumière nous parvienne ?',
      s: [ 'Δt = {{1,5 × 10<sup>11</sup>|3,00 × 10<sup>8</sup>}} = 500 s', '500 s ≈ 8 min 20 s' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Vitesse de la lumière dans l\'eau (n = 1,33) ?',
      s: [ 'v = {{c|n}} = {{3,00 × 10<sup>8</sup>|1,33}} ≈ 2,26 × 10<sup>8</sup> m/s' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Pourquoi voit-on un éclair avant d\'entendre le tonnerre ?',
      p: [ 'La lumière (3 × 10<sup>8</sup> m/s) va près d\'un million de fois plus vite que le son (≈ 340 m/s). Chaque 3 s d\'écart correspond à environ 1 km de distance.' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Un poteau de 3,0 m fait une ombre de 4,0 m. Au même moment, un arbre fait une ombre de 12 m. Hauteur de l\'arbre ?',
      s: [ 'triangles semblables (propagation rectiligne)', 'h = 3,0 × {{12|4,0}} = 9,0 m' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Croire que la lumière a besoin d\'air pour se propager.',
          'Confondre translucide et transparent.',
          'Oublier les puissances de 10 dans les calculs.',
        ] } ],
      [ { t: 'retenir', items: [
          'Propagation rectiligne.',
          'c = 3,00 × 10<sup>8</sup> m/s.',
          'n = c / v.',
        ] } ],
    ] },
  ],
},

/* ============ 25. Miroirs plans ============ */
'miroirs-plans': {
  bulle: 'réflexion et miroirs plans',
  sous: 'La réflexion et les miroirs plans',
  recto: [
    { t: 'cols', w: '1.1fr 1fr', c: [
      [ { t: 'list', h: 'les lois de la réflexion', items: [
          '1. Le rayon incident, la **normale** et le rayon réfléchi sont dans le **même plan**.',
          '2. L\'**angle d\'incidence** est égal à l\'**angle de réflexion** : θ<sub>i</sub> = θ<sub>r</sub>.',
          'Les angles se mesurent **à partir de la normale** (droite perpendiculaire au miroir), pas à partir du miroir !',
        ] },
        { t: 'list', h: 'deux types de réflexion', items: [
          '**Spéculaire** (régulière) : sur une surface lisse ; les rayons parallèles restent parallèles → on voit une image.',
          '**Diffuse** : sur une surface rugueuse ; la lumière est renvoyée dans toutes les directions → on voit l\'objet, pas d\'image.',
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 230, h: 180, xmin: -3.5, xmax: 2.5, ymin: -0.5, ymax: 2.2, xlabels: [], ylabels: [], grille: 0.5,
            segs: [ { a: [0, -0.4], b: [0, 2.1], cls: 'ln' }, R3([-2, 1.5], [0, 0.9]), R3([0, 0.9], [-3, 0]), { a: [0, 0.9], b: [2, 1.5], cls: 'ln3', dash: true } ],
            fleches: [ { a: [-2, 0], b: [-2, 1.5], lbl: 'objet', at: [-2.4, 1.75] }, { a: [2, 0], b: [2, 1.5], pk: true, dash: true, lbl: 'image', at: [1.4, 1.8] } ],
            pts: [ { x: -3, y: 0, lbl: 'œil', dx: -6, dy: 13 } ],
            alt: 'image dans un miroir plan', cap: 'l\'image semble venir de derrière le miroir' },
        ] } ],
    ] },
    { t: 'tab', h: 'caractéristiques de l\'image dans un miroir plan', full: true, lcol: true,
      head: ['Caractéristique', 'Image'],
      rows: [
        ['nature', '**virtuelle** (on ne peut pas la capter sur un écran)'],
        ['position', 'derrière le miroir, **à la même distance** que l\'objet'],
        ['grandeur', '**même grandeur** que l\'objet'],
        ['sens', '**droite** (à l\'endroit), mais **inversée gauche-droite**'],
      ] },
    { t: 'list', h: 'tracer l\'image', items: [
      'Placer chaque point de l\'image **symétriquement** par rapport au miroir.',
      'Pour tracer un rayon vu par l\'œil : relier l\'œil à l\'image ; la partie devant le miroir est réelle, celle derrière est en pointillé (prolongement).',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Un rayon arrive sur un miroir en faisant un angle de 25° **avec le miroir**. Angle de réflexion ?',
      s: [ 'angle d\'incidence (avec la normale) = 90° − 25° = 65°', 'angle de réflexion = 65°' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Une personne se tient à 1,5 m d\'un miroir plan. Distance entre elle et son image ?',
      s: [ 'image à 1,5 m derrière le miroir', 'distance = 1,5 + 1,5 = 3,0 m' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Elle recule de 0,5 m. De combien son image s\'éloigne-t-elle d\'elle ?',
      s: [ 'nouvelle distance : 2 × 2,0 = 4,0 m', 'l\'écart augmente de 1,0 m' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Pourquoi le mot AMBULANCE est-il écrit à l\'envers sur le devant des ambulances ?',
      p: [ 'Le miroir inverse gauche-droite : le conducteur devant le lit correctement « AMBULANCE » dans son rétroviseur.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Mesurer les angles à partir du miroir au lieu de la normale.',
          'Placer l\'image sur le miroir.',
          'Dire que l\'image est inversée haut-bas.',
        ] } ],
      [ { t: 'retenir', items: [
          'θ<sub>i</sub> = θ<sub>r</sub> (depuis la normale).',
          'Image virtuelle, symétrique, même grandeur.',
          'Inversion gauche-droite.',
        ] } ],
    ] },
  ],
},

/* ============ 26. Miroirs courbes ============ */
'miroirs-courbes': {
  bulle: 'miroirs courbes',
  sous: 'Les miroirs courbes : tracé des rayons et équations',
  recto: [
    { t: 'cols', w: '1fr 1.1fr', c: [
      [ { t: 'list', h: 'vocabulaire', items: [
          '**Concave** (creux, comme l\'intérieur d\'une cuillère) : **convergent**.',
          '**Convexe** (bombé) : **divergent**.',
          '**C** : centre de courbure · **F** : foyer · **S** : sommet.',
          '**Distance focale** f = {{R|2}} (F est au milieu entre C et S).',
        ] },
        { t: 'list', h: 'les 3 rayons principaux (concave)', items: [
          '1. Parallèle à l\'axe → se réfléchit en passant par **F**.',
          '2. Passant par **F** → se réfléchit **parallèle** à l\'axe.',
          '3. Passant par **C** → revient sur lui-même.',
          'L\'image est au croisement des rayons réfléchis.',
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 275, h: 200, xmin: -7, xmax: 1, ymin: -2.5, ymax: 1.8, xlabels: [[-4, 'C'], [-2, 'F']], ylabels: [], grille: 1,
            param: [ { px: y => -4 + Math.sqrt(16 - y * y), py: y => y, t0: -2.4, t1: 1.7, cls: 'ln' } ],
            segs: [ R3([-6, 1], [0, 1]), R3([0, 1], [-3, -0.5]), R3([-6, 1], [0, -0.5]), R3([0, -0.5], [-3, -0.5]), R3([-6, 1], [0, -2]) ],
            fleches: [ { a: [-6, 0], b: [-6, 1], lbl: 'objet', at: [-6.9, 1.35] }, { a: [-3, 0], b: [-3, -0.5], pk: true, lbl: 'image', at: [-3.3, -0.9] } ],
            alt: 'tracé des rayons pour un miroir concave', cap: 'concave : objet au-delà de C → image réelle, inversée, réduite' },
        ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'form', h: 'équations', items: [
          ['équation des miroirs', '{{1|f}} = {{1|d<sub>o</sub>}} + {{1|d<sub>i</sub>}}'],
          ['grandissement', 'G = {{h<sub>i</sub>|h<sub>o</sub>}} = −{{d<sub>i</sub>|d<sub>o</sub>}}'],
        ] },
        { t: 'tab', h: 'conventions de signes', full: true, lcol: true,
          head: ['', '+', '−'],
          rows: [
            ['f', 'concave', 'convexe'],
            ['d<sub>i</sub>', 'image réelle (devant)', 'image virtuelle (derrière)'],
            ['h<sub>i</sub>, G', 'image droite', 'image inversée'],
          ] } ],
      [ { t: 'tab', h: 'images d\'un miroir concave', full: true, lcol: true,
          head: ['Objet', 'Image'],
          rows: [
            ['au-delà de C', 'réelle, inversée, réduite'],
            ['sur C', 'réelle, inversée, même grandeur'],
            ['entre C et F', 'réelle, inversée, agrandie'],
            ['sur F', 'aucune image (rayons parallèles)'],
            ['entre F et le miroir', 'virtuelle, droite, agrandie'],
          ],
          note: 'Miroir convexe : toujours virtuelle, droite, réduite (rétroviseurs, miroirs de sécurité).' } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Miroir concave, f = 10 cm. Objet de 4,0 cm à 30 cm du miroir.',
      s: [ '{{1|d<sub>i</sub>}} = {{1|10}} − {{1|30}} = {{2|30}} → d<sub>i</sub> = 15 cm', 'G = −{{15|30}} = −0,5 → h<sub>i</sub> = −2,0 cm' ],
      r: 'image réelle (d<sub>i</sub> > 0), inversée, réduite, à 15 cm devant le miroir' },
    { t: 'ex', h: 'Exemple 2 —', q: 'Même miroir, objet à 5,0 cm (miroir grossissant de maquillage).',
      s: [ '{{1|d<sub>i</sub>}} = {{1|10}} − {{1|5}} = −{{1|10}} → d<sub>i</sub> = −10 cm', 'G = −{{−10|5}} = +2' ],
      r: 'image virtuelle, droite, 2 fois plus grande' },
    { t: 'ex', h: 'Exemple 3 —', q: 'Miroir convexe, f = −15 cm, objet à 30 cm.',
      s: [ '{{1|d<sub>i</sub>}} = −{{1|15}} − {{1|30}} = −{{3|30}} → d<sub>i</sub> = −10 cm', 'G = −{{−10|30}} = +{{1|3}}' ],
      r: 'virtuelle, droite, réduite (3 fois plus petite)' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier le signe négatif de f pour un miroir convexe.',
          'Oublier d\'inverser la fraction à la fin : on trouve {{1|d<sub>i</sub>}}, pas d<sub>i</sub>.',
          'Confondre f et R (f = R ÷ 2).',
        ] } ],
      [ { t: 'retenir', items: [
          '1/f = 1/d<sub>o</sub> + 1/d<sub>i</sub>.',
          'G = −d<sub>i</sub>/d<sub>o</sub>.',
          'd<sub>i</sub> > 0 : réelle ; G < 0 : inversée.',
        ] } ],
    ] },
  ],
},

/* ============ 27. Réfraction ============ */
refraction: {
  bulle: 'la réfraction',
  sous: 'La réfraction et la loi de Snell-Descartes',
  recto: [
    { t: 'cols', w: '1.1fr 1fr', c: [
      [ { t: 'txt', p: [ 'La **réfraction** est la **déviation** de la lumière quand elle passe d\'un milieu transparent à un autre, parce que sa **vitesse change**.' ] },
        { t: 'box', f: 'n<sub>1</sub> sin θ<sub>1</sub> = n<sub>2</sub> sin θ<sub>2</sub>', note: 'angles mesurés à partir de la normale' },
        { t: 'list', h: 'le sens de la déviation', items: [
          'Vers un milieu **plus réfringent** (n plus grand, lumière plus lente) : le rayon **se rapproche** de la normale.',
          'Vers un milieu **moins réfringent** : il **s\'éloigne** de la normale.',
          'Incidence perpendiculaire (θ<sub>1</sub> = 0°) : aucune déviation.',
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 230, h: 210, xmin: -3, xmax: 3, ymin: -3, ymax: 3, xlabels: [], ylabels: [], grille: 0.5,
            zones: [ { pts: [[-3, 0], [3, 0], [3, -3], [-3, -3]], cls: 'zone2' } ],
            segs: [ { a: [-3, 0], b: [3, 0], cls: 'ln' }, { a: [0, -3], b: [0, 3], cls: 'ln', dash: true } ],
            fleches: [
              { a: [-3 * Math.sin(rad(40)), 3 * Math.cos(rad(40))], b: [0, 0], lbl: '40°', at: [-0.8, 2.3] },
              { a: [0, 0], b: [2.8 * Math.sin(rad(28.9)), -2.8 * Math.cos(rad(28.9))], pk: true, lbl: '28,9°', at: [0.25, -2.2] },
            ],
            pts: [ { x: -2.9, y: 0.25, lbl: 'air (n = 1,00)', dx: 0, dy: -3 }, { x: -2.9, y: -0.3, lbl: 'eau (n = 1,33)', dx: 0, dy: 12 } ],
            alt: 'rayon qui se rapproche de la normale en entrant dans l’eau', cap: 'air → eau : le rayon se rapproche de la normale' },
        ] } ],
    ] },
    { t: 'tab', h: 'indices de réfraction', full: true,
      head: ['vide', 'air', 'eau', 'verre', 'diamant'],
      rows: [ ['1', '1,00', '1,33', '≈ 1,50', '2,42'] ],
      note: 'n = c / v : plus n est grand, plus la lumière y est lente.' },
    { t: 'list', h: 'phénomènes', items: [
      'Une paille semble **cassée** dans un verre d\'eau ; le fond d\'une piscine paraît **moins profond**.',
      '**Dispersion** : chaque couleur est déviée un peu différemment → prisme, arc-en-ciel.',
      'Mirages : l\'air chaud au-dessus de la route dévie la lumière.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Un rayon passe de l\'air à l\'eau avec un angle d\'incidence de 40°. Angle de réfraction ?',
      s: [ '1,00 × sin 40° = 1,33 × sin θ<sub>2</sub>', 'sin θ<sub>2</sub> = {{0,643|1,33}} ≈ 0,483', 'θ<sub>2</sub> ≈ 28,9° // plus près de la normale ✓' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Un rayon sort du verre (n = 1,50) vers l\'air avec un angle de 30°.',
      s: [ '1,50 × sin 30° = 1,00 × sin θ<sub>2</sub>', 'sin θ<sub>2</sub> = 0,75 → θ<sub>2</sub> ≈ 48,6° // s\'éloigne de la normale' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Dans un liquide inconnu, un rayon venant de l\'air à 50° est réfracté à 35°. Indice du liquide ?',
      s: [ 'n<sub>2</sub> = {{1,00 × sin 50°|sin 35°}} = {{0,766|0,574}} ≈ 1,34' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Mesurer l\'angle à partir de la surface au lieu de la normale.',
          'Calculatrice en radians.',
          'Oublier de faire sin<sup>−1</sup> à la fin.',
        ] } ],
      [ { t: 'retenir', items: [
          'n<sub>1</sub> sin θ<sub>1</sub> = n<sub>2</sub> sin θ<sub>2</sub>.',
          'n ↑ → rayon vers la normale.',
          'Angles depuis la normale.',
        ] } ],
    ] },
  ],
},

/* ============ 28. Réflexion totale interne ============ */
'reflexion-totale': {
  bulle: 'réflexion totale interne',
  sous: 'La réflexion totale interne et l\'angle critique',
  recto: [
    { t: 'cols', w: '1fr 1.1fr', c: [
      [ { t: 'txt', p: [ 'Quand la lumière passe d\'un milieu **plus réfringent** à un milieu **moins réfringent** (ex. eau → air), elle s\'éloigne de la normale. Si l\'angle d\'incidence est assez grand, elle ne sort plus : **toute** la lumière est réfléchie.' ] },
        { t: 'box', h: 'angle critique', f: 'sin θ<sub>c</sub> = {{n<sub>2</sub>|n<sub>1</sub>}}', note: 'avec n<sub>1</sub> > n<sub>2</sub> (seulement dans ce sens !)' },
        { t: 'list', items: [
          'θ<sub>i</sub> < θ<sub>c</sub> : réfraction (et un peu de réflexion).',
          'θ<sub>i</sub> = θ<sub>c</sub> : le rayon réfracté longe la surface (90°).',
          'θ<sub>i</sub> > θ<sub>c</sub> : **réflexion totale interne**.',
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 260, h: 200, xmin: -0.5, xmax: 6, ymin: -2.8, ymax: 2.2, xlabels: [], ylabels: [], grille: 0.5,
            zones: [ { pts: [[-0.5, 0], [6, 0], [6, -2.8], [-0.5, -2.8]], cls: 'zone2' } ],
            segs: [ { a: [-0.5, 0], b: [6, 0], cls: 'ln' }, R3([0, -2.5], [1, 0]), R3([1, 0], [2.14, 2]), R3([0, -2.5], [2.85, 0]), { a: [2.85, 0], b: [4.6, 0.04], cls: 'ln2' }, R3([0, -2.5], [4, 0]), R3([4, 0], [6, -1.25]) ],
            pts: [ { x: 0, y: -2.5, lbl: 'source', dx: 5, dy: 4 }, { x: 2.85, y: 0, lbl: 'θc', dx: -12, dy: -5, pk: true }, { x: 4, y: 0, lbl: 'réflexion totale', dx: -30, dy: -7 } ],
            alt: 'trois rayons sortant de l’eau : réfracté, critique, totalement réfléchi', cap: 'eau → air : au-delà de θ<sub>c</sub> ≈ 48,8°, tout est réfléchi' },
        ] } ],
    ] },
    { t: 'tab', h: 'angles critiques (vers l\'air)', full: true,
      head: ['eau', 'verre (n = 1,50)', 'diamant'],
      rows: [ ['48,8°', '41,8°', '24,4°'] ],
      note: 'Le diamant a un très petit angle critique : la lumière y rebondit plusieurs fois avant de sortir, d\'où son éclat.' },
    { t: 'list', h: 'applications', items: [
      '**Fibre optique** : la lumière reste piégée dans le cœur de la fibre par réflexions totales successives (Internet, endoscopes médicaux).',
      'Prismes de jumelles et de périscopes.',
      'Brillance des diamants ; reflets vus sous l\'eau.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Angle critique pour la lumière qui passe de l\'eau (1,33) à l\'air.',
      s: [ 'sin θ<sub>c</sub> = {{1,00|1,33}} ≈ 0,752', 'θ<sub>c</sub> ≈ 48,8°' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Un rayon dans le verre (n = 1,50) frappe la surface verre-air à 45°. Sort-il ?',
      s: [ 'θ<sub>c</sub> = sin<sup>−1</sup>({{1,00|1,50}}) ≈ 41,8°', '45° > 41,8°' ], r: 'non : réflexion totale interne' },
    { t: 'ex', h: 'Exemple 3 —', q: 'Peut-il y avoir réflexion totale quand la lumière passe de l\'air à l\'eau ?',
      p: [ '**Non.** Elle va vers un milieu plus réfringent : le rayon se rapproche de la normale et peut toujours entrer. {{n<sub>2</sub>|n<sub>1</sub>}} serait plus grand que 1, ce qui est impossible pour un sinus.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Chercher un angle critique de l\'air vers l\'eau.',
          'Inverser n<sub>1</sub> et n<sub>2</sub> dans la formule.',
          'Oublier sin<sup>−1</sup>.',
        ] } ],
      [ { t: 'retenir', items: [
          'Seulement de n grand vers n petit.',
          'sin θ<sub>c</sub> = n<sub>2</sub> / n<sub>1</sub>.',
          'Fibre optique = réflexions totales.',
        ] } ],
    ] },
  ],
},

/* ============ 29. Lentilles : tracé ============ */
'lentilles-trace': {
  bulle: 'lentilles : tracé',
  sous: 'Les lentilles : tracé des rayons',
  recto: [
    { t: 'cols', c: [
      [ { t: 'list', h: 'les deux types', items: [
          '**Convergente** : plus épaisse au centre ; fait converger les rayons parallèles au **foyer image F\'**.',
          '**Divergente** : plus mince au centre ; fait diverger les rayons, qui semblent venir du foyer **F** (côté objet).',
          'Chaque lentille a deux foyers, de part et d\'autre, à la distance **f** du centre optique O.',
        ] } ],
      [ { t: 'list', h: 'les 3 rayons principaux (convergente)', items: [
          '1. Parallèle à l\'axe → sort en passant par **F\'**.',
          '2. Passant par le **centre optique** → n\'est pas dévié.',
          '3. Passant par **F** → sort **parallèle** à l\'axe.',
          'Divergente : le rayon parallèle sort comme s\'il venait de **F** (prolongement en pointillé).',
        ] } ],
    ] },
    { t: 'fig', figs: [
      { kind: 'plan', w: 330, h: 190, xmin: -4, xmax: 7, ymin: -2.6, ymax: 1.8, xlabels: [[-2, 'F'], [2, 'F′']], ylabels: [], grille: 1,
        segs: [ { a: [0, -2.4], b: [0, 1.6], cls: 'ln' }, R3([-3, 1], [0, 1]), R3([0, 1], [6, -2]), R3([-3, 1], [6, -2]), R3([-3, 1], [0, -2]), R3([0, -2], [6, -2]) ],
        fleches: [ { a: [-3, 0], b: [-3, 1], lbl: 'objet', at: [-3.9, 1.35] }, { a: [6, 0], b: [6, -2], pk: true, lbl: 'image', at: [6.1, -0.5] } ],
        alt: 'tracé des rayons pour une lentille convergente', cap: '<b>convergente</b>, objet entre F et 2F : image réelle, inversée, agrandie' },
      { kind: 'plan', w: 260, h: 190, xmin: -4.5, xmax: 3.5, ymin: -1.2, ymax: 2.8, xlabels: [[-2, 'F'], [2, 'F′']], ylabels: [], grille: 1,
        segs: [ { a: [0, -1.1], b: [0, 2.7], cls: 'ln' }, R3([-4, 1], [0, 1]), R3([0, 1], [3, 2.5]), { a: [0, 1], b: [-2, 0], cls: 'ln3', dash: true }, R3([-4, 1], [3, -0.75]) ],
        fleches: [ { a: [-4, 0], b: [-4, 1], lbl: 'objet', at: [-4.4, 1.3] }, { a: [-4 / 3, 0], b: [-4 / 3, 1 / 3], pk: true, lbl: 'image', at: [-1.2, 0.6] } ],
        alt: 'tracé des rayons pour une lentille divergente', cap: '<b>divergente</b> : image virtuelle, droite, réduite' },
    ] },
    { t: 'tab', h: 'images d\'une lentille convergente', full: true, lcol: true,
      head: ['Objet', 'Image', 'Application'],
      rows: [
        ['au-delà de 2F', 'réelle, inversée, réduite', 'appareil photo, œil'],
        ['entre 2F et F', 'réelle, inversée, agrandie', 'projecteur'],
        ['sur F', 'aucune (rayons parallèles)', 'phare'],
        ['entre F et la lentille', 'virtuelle, droite, agrandie', 'loupe'],
      ],
      note: 'Lentille divergente : toujours virtuelle, droite, réduite.' },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Analyser le tracé convergent du recto (f = 2 carreaux, objet à 3 carreaux).',
      s: [ 'rayon parallèle → passe par F\' (2, 0)', 'rayon par O → tout droit', 'rayon par F → ressort parallèle', 'croisement en (6 ; −2)' ],
      r: 'image réelle (derrière la lentille), inversée, 2 fois plus grande' },
    { t: 'ex', h: 'Exemple 2 —', q: 'Où placer un objet pour qu\'une lentille convergente serve de loupe ?',
      p: [ 'Entre le foyer F et la lentille : l\'image est virtuelle, droite et agrandie. On la voit en regardant à travers la lentille.' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Comment reconnaître une lentille au toucher ou en regardant à travers ?',
      p: [ 'Convergente : bords minces, grossit les objets proches. Divergente : bords épais, rapetisse toujours les objets.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Confondre F et F\' : pour une convergente, le rayon parallèle passe par F\' (de l\'autre côté).',
          'Dessiner une image réelle avec une lentille divergente.',
          'Oublier les pointillés pour les prolongements (images virtuelles).',
        ] } ],
      [ { t: 'retenir', items: [
          '3 rayons : parallèle, centre, foyer.',
          'Convergente : souvent réelle ; loupe si l\'objet est près.',
          'Divergente : virtuelle, droite, réduite.',
        ] } ],
    ] },
  ],
},

/* ============ 30. Lentilles : équation ============ */
'lentilles-equation': {
  bulle: 'lentilles : équations',
  sous: 'Équation des lentilles minces, grandissement et dioptries',
  recto: [
    { t: 'cols', c: [
      [ { t: 'form', h: 'équations', items: [
          ['lentilles minces', '{{1|f}} = {{1|d<sub>o</sub>}} + {{1|d<sub>i</sub>}}'],
          ['grandissement', 'G = {{h<sub>i</sub>|h<sub>o</sub>}} = −{{d<sub>i</sub>|d<sub>o</sub>}}'],
          ['puissance', 'P = {{1|f}}  (f en mètres, P en dioptries δ)'],
        ] },
        { t: 'list', h: 'lire le résultat', items: [
          'd<sub>i</sub> > 0 : image **réelle**, de l\'autre côté de la lentille.',
          'd<sub>i</sub> < 0 : image **virtuelle**, du même côté que l\'objet.',
          'G < 0 : inversée · G > 0 : droite · |G| > 1 : agrandie.',
        ] } ],
      [ { t: 'tab', h: 'signes', full: true, lcol: true,
          head: ['', '+', '−'],
          rows: [
            ['f et P', 'convergente', 'divergente'],
            ['d<sub>o</sub>', 'objet réel (toujours ici)', '—'],
            ['d<sub>i</sub>', 'image réelle', 'image virtuelle'],
            ['h<sub>i</sub>', 'droite', 'inversée'],
          ] },
        { t: 'list', h: 'les dioptries', items: [
          'Plus |P| est grand, plus la lentille dévie fortement la lumière.',
          'Lunettes de +2 δ : convergentes, f = 0,5 m.',
          'Lentilles accolées : P<sub>totale</sub> = P<sub>1</sub> + P<sub>2</sub>.',
        ] } ],
    ] },
    { t: 'list', h: 'démarche', items: [
      '1. Identifier f (avec son signe) et d<sub>o</sub>.',
      '2. {{1|d<sub>i</sub>}} = {{1|f}} − {{1|d<sub>o</sub>}}, puis **inverser**.',
      '3. Calculer G, puis h<sub>i</sub> = G × h<sub>o</sub>.',
      '4. Décrire l\'image : nature, sens, grandeur, position. Vérifier avec un tracé rapide.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Lentille convergente f = 20 cm ; objet de 3,0 cm à 60 cm.',
      s: [ '{{1|d<sub>i</sub>}} = {{1|20}} − {{1|60}} = {{2|60}} → d<sub>i</sub> = 30 cm', 'G = −{{30|60}} = −0,5 → h<sub>i</sub> = −1,5 cm' ],
      r: 'réelle, inversée, 2 fois plus petite, à 30 cm derrière la lentille' },
    { t: 'ex', h: 'Exemple 2 —', q: 'Même lentille ; objet à 10 cm (loupe).',
      s: [ '{{1|d<sub>i</sub>}} = {{1|20}} − {{1|10}} = −{{1|20}} → d<sub>i</sub> = −20 cm', 'G = −{{−20|10}} = +2' ],
      r: 'virtuelle, droite, 2 fois plus grande' },
    { t: 'ex', h: 'Exemple 3 —', q: 'Lentille divergente f = −20 cm ; objet à 30 cm.',
      s: [ '{{1|d<sub>i</sub>}} = −{{1|20}} − {{1|30}} = −{{5|60}} → d<sub>i</sub> = −12 cm', 'G = −{{−12|30}} = +0,4' ],
      r: 'virtuelle, droite, réduite' },
    { t: 'ex', h: 'Exemple 4 —', q: 'Puissance d\'une lentille de f = 25 cm ? d\'une lentille de f = −50 cm ?',
      s: [ 'P = {{1|0,25 m}} = +4 δ', 'P = {{1|−0,50 m}} = −2 δ' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Calculer P avec f en cm.',
          'Oublier le signe « − » de f pour une divergente.',
          'Oublier d\'inverser 1/d<sub>i</sub>.',
        ] } ],
      [ { t: 'retenir', items: [
          '1/f = 1/d<sub>o</sub> + 1/d<sub>i</sub>.',
          'G = −d<sub>i</sub>/d<sub>o</sub>.',
          'P = 1/f (m) en dioptries.',
        ] } ],
    ] },
  ],
},

/* ============ 31. Œil et instruments ============ */
oeil: {
  bulle: 'l\'œil et les instruments',
  sous: 'L\'œil et les instruments d\'optique',
  recto: [
    { t: 'cols', c: [
      [ { t: 'tab', h: 'les parties de l\'œil', full: true, lcol: true,
          head: ['Partie', 'Rôle'],
          rows: [
            ['**cornée**', 'surface transparente bombée : fait la plus grande partie de la convergence'],
            ['**iris** et **pupille**', 'l\'iris règle l\'ouverture de la pupille selon la lumière'],
            ['**cristallin**', 'lentille **convergente** souple : fait la mise au point'],
            ['**rétine**', 'écran où se forme l\'image (réelle, inversée) ; cellules sensibles à la lumière'],
            ['**nerf optique**', 'transmet l\'information au cerveau, qui « redresse » l\'image'],
          ] },
        { t: 'list', h: 'l\'accommodation', items: [
          'Pour voir de près, les muscles bombent le **cristallin** : sa distance focale diminue (sa puissance augmente).',
          'Punctum proximum : point le plus proche vu net (≈ 25 cm chez un jeune adulte).',
        ] } ],
      [ { t: 'tab', h: 'défauts de la vision', full: true, lcol: true,
          head: ['Défaut', 'Problème', 'Correction'],
          rows: [
            ['**myopie**', 'voit mal **de loin** ; image formée **avant** la rétine (œil trop convergent)', 'lentille **divergente**'],
            ['**hypermétropie**', 'voit mal **de près** ; image **derrière** la rétine', 'lentille **convergente**'],
            ['**presbytie**', 'cristallin moins souple avec l\'âge : difficulté de près', 'lentille convergente (lunettes de lecture)'],
            ['**astigmatisme**', 'cornée irrégulière : vision floue ou déformée', 'lentille cylindrique'],
          ] } ],
    ] },
    { t: 'tab', h: 'instruments d\'optique', full: true, lcol: true,
      head: ['Instrument', 'Principe'],
      rows: [
        ['**loupe**', 'une lentille convergente ; objet entre F et la lentille → image virtuelle agrandie'],
        ['**appareil photo**', 'lentille convergente qui forme une image réelle, inversée, réduite sur le capteur'],
        ['**microscope**', 'deux lentilles convergentes : l\'objectif forme une image réelle agrandie, l\'oculaire l\'agrandit encore (comme une loupe)'],
        ['**lunette astronomique**', 'objectif de grande distance focale + oculaire'],
        ['**télescope**', 'miroir concave pour capter la lumière + oculaire'],
        ['**projecteur**', 'objet entre F et 2F → image réelle agrandie sur l\'écran'],
      ],
      note: 'Grossissement d\'un microscope ≈ grossissement de l\'objectif × grossissement de l\'oculaire.' },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Une personne myope voit net jusqu\'à 2,0 m seulement. Quelle lentille lui faut-il ?',
      s: [ 'lentille divergente dont le foyer est à son point éloigné', 'f = −2,0 m → P = {{1|−2,0}} = −0,5 δ' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Pourquoi l\'image sur la rétine est-elle inversée, alors qu\'on voit le monde à l\'endroit ?',
      p: [ 'L\'œil agit comme une lentille convergente avec un objet très éloigné (au-delà de 2F) : l\'image est réelle et inversée. C\'est le **cerveau** qui l\'interprète à l\'endroit.' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Un microscope a un objectif × 40 et un oculaire × 10. Grossissement total ?',
      s: [ '40 × 10 = 400 fois' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Une personne a besoin de lunettes de +2,5 δ pour lire. Défaut probable ?',
      p: [ 'P > 0 → lentille **convergente** : hypermétropie ou presbytie (difficulté à voir de près).' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Corriger la myopie avec une lentille convergente (c\'est divergente).',
          'Dire que la pupille fait la mise au point (c\'est le cristallin).',
          'Additionner les grossissements d\'un microscope au lieu de les multiplier.',
        ] } ],
      [ { t: 'retenir', items: [
          'Cristallin = lentille convergente qui accommode.',
          'Myopie → divergente ; hypermétropie → convergente.',
          'Image sur la rétine : réelle, inversée.',
        ] } ],
    ] },
  ],
},

/* ============ GÉNÉRAL ============ */
general: {
  bulle: 'physique : tout en 1',
  sous: 'Résumé de l\'année — Physique, secondaire 5',
  recto: [
    { t: 'cols', c: [
      [ { t: 'form', h: 'cinématique', items: [
          ['vitesse', 'v = Δx / Δt ; km/h ÷ 3,6 = m/s'],
          ['accélération', 'a = Δv / Δt'],
          ['MRU', 'x<sub>f</sub> = x<sub>i</sub> + vΔt'],
          ['MRUA', 'v<sub>f</sub> = v<sub>i</sub> + aΔt'],
          ['', 'Δx = v<sub>i</sub>Δt + ½aΔt<sup>2</sup>'],
          ['', 'v<sub>f</sub><sup>2</sup> = v<sub>i</sub><sup>2</sup> + 2aΔx'],
          ['chute libre', 'a = −9,8 m/s<sup>2</sup> (haut +)'],
          ['projectile', 'x : MRU ; y : chute libre ; même Δt'],
          ['graphiques', 'x-t : pente = v · v-t : pente = a, aire = Δx'],
        ] } ],
      [ { t: 'form', h: 'dynamique', items: [
          ['Newton 1', 'ΣF = 0 → repos ou MRU'],
          ['Newton 2', 'ΣF = ma'],
          ['Newton 3', 'F<sub>A→B</sub> = −F<sub>B→A</sub>'],
          ['poids', 'F<sub>g</sub> = mg ; g = 9,8 N/kg'],
          ['gravitation', 'F = Gm<sub>1</sub>m<sub>2</sub> / d<sup>2</sup>'],
          ['frottement', 'F<sub>f</sub> = μF<sub>N</sub>'],
          ['plan incliné', 'mg sin θ (∥) ; mg cos θ (⟂)'],
          ['Hooke', 'F = kx'],
        ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'form', h: 'énergie', items: [
          ['travail', 'W = Fd cos θ'],
          ['puissance', 'P = W / Δt'],
          ['cinétique', 'E<sub>k</sub> = ½mv<sup>2</sup>'],
          ['potentielle', 'E<sub>p</sub> = mgh'],
          ['élastique', 'E<sub>pé</sub> = ½kx<sup>2</sup>'],
          ['conservation', 'E<sub>m i</sub> = E<sub>m f</sub> (sans frottement)'],
          ['rendement', 'utile / consommée × 100 %'],
        ] } ],
      [ { t: 'form', h: 'optique', items: [
          ['réflexion', 'θ<sub>i</sub> = θ<sub>r</sub> (depuis la normale)'],
          ['indice', 'n = c / v ; c = 3,00 × 10<sup>8</sup> m/s'],
          ['Snell-Descartes', 'n<sub>1</sub> sin θ<sub>1</sub> = n<sub>2</sub> sin θ<sub>2</sub>'],
          ['angle critique', 'sin θ<sub>c</sub> = n<sub>2</sub> / n<sub>1</sub>'],
          ['miroirs, lentilles', '1/f = 1/d<sub>o</sub> + 1/d<sub>i</sub>'],
          ['grandissement', 'G = −d<sub>i</sub>/d<sub>o</sub>'],
          ['puissance', 'P = 1/f (m), en δ'],
        ] } ],
    ] },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'MRUA —', q: '25 m/s → arrêt sur 50 m', s: [ 'a = −625 / 100 = −6,25 m/s<sup>2</sup>' ] },
        { t: 'ex', h: 'Chute —', q: 'lâché de 45 m', s: [ 'Δt ≈ 3,0 s ; v ≈ 29,7 m/s' ] },
        { t: 'ex', h: 'Projectile —', q: '20 m/s à 30°', s: [ 'portée ≈ 35,3 m ; h<sub>max</sub> ≈ 5,1 m' ] },
        { t: 'ex', h: 'Newton —', q: '100 N sur 20 kg, μ = 0,30', s: [ 'a = (100 − 58,8) / 20 ≈ 2,1 m/s<sup>2</sup>' ] } ],
      [ { t: 'ex', h: 'Plan incliné —', q: '30°, μ = 0,20', s: [ 'a = 9,8(sin 30° − 0,20 cos 30°) ≈ 3,2 m/s<sup>2</sup>' ] },
        { t: 'ex', h: 'Énergie —', q: 'chute de 20 m depuis le repos', s: [ 'v = √(2gh) ≈ 19,8 m/s' ] },
        { t: 'ex', h: 'Réfraction —', q: 'air → eau à 40°', s: [ 'θ<sub>2</sub> ≈ 28,9°' ] },
        { t: 'ex', h: 'Lentille —', q: 'f = 20 cm, d<sub>o</sub> = 60 cm', s: [ 'd<sub>i</sub> = 30 cm ; G = −0,5' ] } ],
    ] },
    { t: 'pieges', items: [
      'Unités : m, s, kg, N, m/s (convertir km/h et cm) ; calculatrice en degrés.',
      'Distance ≠ déplacement ; masse (kg) ≠ poids (N).',
      'Utiliser une seule force au lieu de la résultante dans ΣF = ma.',
      'Plan incliné : sin pour la composante parallèle ; F<sub>N</sub> ≠ mg.',
      'Oublier le carré de v dans E<sub>k</sub> ; oublier cos θ dans W.',
      'Angles en optique mesurés depuis la **normale** ; signes de f et de d<sub>i</sub>.',
    ] },
    { t: 'retenir', items: [
      'Toujours : schéma (DCL, tracé de rayons), liste des données, formule, unités.',
      'Choisir un sens positif et le garder.',
      'L\'énergie se conserve : elle se transforme, notamment en chaleur avec le frottement.',
      'Vérifier le bon sens physique de chaque réponse (ordre de grandeur, signe).',
    ] },
  ],
},

});
})();
