/* Physique — Dynamique */
(function () {
  const s30 = 0.5, c30 = Math.sqrt(3) / 2;
  const P = [4, 2.31]; // point d'application sur le plan incliné (30°)
  const add = (a, v, k) => [a[0] + v[0] * k, a[1] + v[1] * k];
  // boîte (carré) centrée à l'origine
  const boite = [ { a: [-1, -1], b: [1, -1], cls: 'ln' }, { a: [1, -1], b: [1, 1], cls: 'ln' }, { a: [1, 1], b: [-1, 1], cls: 'ln' }, { a: [-1, 1], b: [-1, -1], cls: 'ln' } ];

Object.assign(DATA.feuilles['physique'], {

/* ============ 10. Forces et DCL ============ */
forces: {
  bulle: 'forces et dcl',
  sous: 'Les forces et le diagramme de corps libre',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [
          'Une **force** est une action (poussée ou traction) qui peut changer le mouvement d\'un objet ou le déformer. C\'est une grandeur **vectorielle**, mesurée en **newtons (N)** avec un dynamomètre.',
          '1 N = 1 kg·m/s<sup>2</sup>',
        ] },
        { t: 'tab', h: 'les forces courantes', full: true, lcol: true,
          head: ['Force', 'Symbole', 'Direction'],
          rows: [
            ['gravitationnelle (poids)', 'F<sub>g</sub>', 'vers le centre de la Terre'],
            ['normale', 'F<sub>N</sub>', 'perpendiculaire à la surface, vers l\'extérieur'],
            ['frottement', 'F<sub>f</sub>', 'parallèle à la surface, contre le mouvement'],
            ['tension (corde)', 'F<sub>T</sub>', 'le long de la corde, en tirant'],
            ['appliquée', 'F<sub>a</sub>', 'selon la poussée ou la traction'],
            ['élastique (ressort)', 'F<sub>é</sub>', 'vers la position de repos du ressort'],
          ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 230, h: 230, xmin: -4, xmax: 4, ymin: -4, ymax: 4, xlabels: [], ylabels: [], grille: 1,
            segs: boite,
            fleches: [ { a: [0, 0], b: [0, -3.3], pk: true, lbl: 'Fg', at: [0.2, -3.2] }, { a: [0, 0], b: [0, 3.3], lbl: 'FN', at: [0.2, 3.2] }, { a: [0, 0], b: [3.4, 0], vert: true, lbl: 'Fa', at: [2.6, 0.3] }, { a: [0, 0], b: [-2.2, 0], lbl: 'Ff', at: [-3.4, 0.3] } ],
            alt: 'diagramme de corps libre d’une boîte tirée sur le sol', cap: 'DCL : boîte tirée vers la droite sur le sol' },
        ] } ],
    ] },
    { t: 'list', h: 'tracer un diagramme de corps libre (DCL)', items: [
      '1. Représenter l\'objet par un **point** ou une boîte.',
      '2. Dessiner **toutes les forces qui s\'exercent SUR l\'objet**, à partir du centre, avec des flèches proportionnelles à leur grandeur.',
      '3. Nommer chaque force. Ne pas dessiner les forces que l\'objet exerce sur les autres.',
      '4. Choisir des axes (souvent parallèle et perpendiculaire au mouvement).',
    ] },
    { t: 'box', h: 'force résultante', f: 'F<sub>R</sub> = ΣF = somme vectorielle de toutes les forces', note: 'Si F<sub>R</sub> = 0 : équilibre (repos ou MRU). Si F<sub>R</sub> ≠ 0 : l\'objet accélère dans le sens de F<sub>R</sub>.' },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Une boîte de 10 kg est tirée sur le sol par une force de 50 N vers la droite ; le frottement vaut 20 N. Forces et résultante ?',
      s: [ 'F<sub>g</sub> = 10 × 9,8 = 98 N vers le bas', 'F<sub>N</sub> = 98 N vers le haut // surface horizontale', 'vertical : 98 − 98 = 0', 'horizontal : 50 − 20 = 30 N vers la droite' ],
      r: 'F<sub>R</sub> = 30 N vers la droite' },
    { t: 'ex', h: 'Exemple 2 —', q: 'Une lampe est suspendue au plafond par un fil. DCL ?',
      p: [ 'Deux forces : F<sub>g</sub> vers le bas et F<sub>T</sub> (tension) vers le haut, de même grandeur : la lampe est en équilibre.' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Trois élèves tirent une caisse : 40 N vers l\'est, 30 N vers l\'est, 50 N vers l\'ouest. Résultante ?',
      s: [ '40 + 30 − 50 = 20 N vers l\'est' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Ajouter une « force du mouvement » : elle n\'existe pas.',
          'Dessiner la force que l\'objet exerce sur le sol au lieu de celle du sol sur l\'objet.',
          'Oublier F<sub>g</sub> ou F<sub>N</sub>.',
        ] } ],
      [ { t: 'retenir', items: [
          'Force : vecteur, en N.',
          'DCL : seulement les forces SUR l\'objet.',
          'F<sub>R</sub> = somme vectorielle.',
        ] } ],
    ] },
  ],
},

/* ============ 11. 1re loi ============ */
'newton-1': {
  bulle: '1re loi de newton',
  sous: 'La 1<sup>re</sup> loi de Newton : le principe d\'inertie',
  recto: [
    { t: 'box', f: 'Si la force résultante sur un objet est <b>nulle</b>, il reste au <b>repos</b> ou continue en <b>MRU</b>.' },
    { t: 'cols', c: [
      [ { t: 'list', h: 'l\'inertie', items: [
          'L\'**inertie** est la tendance d\'un objet à **résister** à tout changement de son mouvement.',
          'Plus la **masse** est grande, plus l\'inertie est grande (un camion est plus difficile à démarrer et à arrêter qu\'un vélo).',
          'Un objet n\'a pas besoin d\'une force pour **continuer** à bouger ; il en faut une pour **changer** son mouvement.',
        ] } ],
      [ { t: 'list', h: 'l\'équilibre de translation', items: [
          'ΣF = 0 ⇔ **a = 0**.',
          'Deux situations possibles : **repos** ou **MRU**.',
          'Pour le vérifier : ΣF<sub>x</sub> = 0 et ΣF<sub>y</sub> = 0.',
        ] } ],
    ] },
    { t: 'list', h: 'exemples de la vie courante', items: [
      'Dans un autobus qui freine, les passagers sont projetés vers l\'**avant** : leur corps continue son mouvement.',
      'Quand l\'autobus démarre, on est « poussé » vers l\'arrière : notre corps tend à rester au repos.',
      'La **ceinture de sécurité** applique la force qui arrête le passager.',
      'Dans l\'espace, une sonde continue en ligne droite sans moteur.',
      'On secoue une bouteille de ketchup à l\'envers puis on l\'arrête brusquement : le ketchup continue vers le bas.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Une auto roule à 100 km/h constante sur une route droite. Le moteur produit une poussée de 1500 N. Frottement total ?',
      s: [ 'MRU → a = 0 → ΣF = 0', 'F<sub>frottement</sub> = 1500 N, vers l\'arrière' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Une rondelle glisse sur la glace et ralentit très peu. Pourquoi ne s\'arrête-t-elle pas tout de suite ?',
      p: [ 'Le frottement est très faible : la force résultante est presque nulle. Par inertie, la rondelle continue presque en MRU.' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Un parachutiste descend à vitesse constante. Que peut-on dire des forces ?',
      p: [ 'Vitesse constante = MRU → ΣF = 0 : la résistance de l\'air est égale à son poids.' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Un livre est au repos sur une table. Il n\'y a aucune force sur lui ? ',
      p: [ 'Faux : F<sub>g</sub> vers le bas et F<sub>N</sub> vers le haut s\'annulent. La résultante est nulle, pas les forces.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Croire qu\'il faut une force pour maintenir une vitesse constante (sans frottement, non).',
          'Confondre « aucune force » et « force résultante nulle ».',
          'Dire que l\'inertie est une force.',
        ] } ],
      [ { t: 'retenir', items: [
          'ΣF = 0 → repos ou MRU.',
          'Inertie ∝ masse.',
          'Il faut une force pour CHANGER le mouvement.',
        ] } ],
    ] },
  ],
},

/* ============ 12. 2e loi ============ */
'newton-2': {
  bulle: '2e loi de newton',
  sous: 'La 2<sup>e</sup> loi de Newton : ΣF = ma',
  recto: [
    { t: 'cols', c: [
      [ { t: 'box', f: 'ΣF = ma', note: 'ΣF en N · m en kg · a en m/s²' },
        { t: 'list', items: [
          'L\'accélération a le **même sens** que la force résultante.',
          'Pour une même force, un objet deux fois plus massif accélère deux fois moins.',
          'Pour une même masse, une force deux fois plus grande donne une accélération deux fois plus grande.',
        ] } ],
      [ { t: 'form', h: 'formes utiles', items: [
          ['accélération', 'a = {{ΣF|m}}'],
          ['masse', 'm = {{ΣF|a}}'],
          ['poids', 'F<sub>g</sub> = mg (cas particulier : a = g)'],
        ] } ],
    ] },
    { t: 'list', h: 'démarche', items: [
      '1. Tracer le **DCL**.',
      '2. Choisir des axes (un dans le sens du mouvement).',
      '3. Écrire ΣF sur chaque axe : ΣF<sub>x</sub> = ma<sub>x</sub> ; ΣF<sub>y</sub> = ma<sub>y</sub>.',
      '4. Résoudre ; utiliser au besoin les équations du MRUA pour la vitesse ou la distance.',
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'l\'ascenseur (poids apparent)', items: [
          'La balance mesure F<sub>N</sub>, pas F<sub>g</sub>.',
          'Accélère vers le haut : F<sub>N</sub> = m(g + a) → on se sent plus lourd.',
          'Accélère vers le bas : F<sub>N</sub> = m(g − a) → plus léger.',
          'Vitesse constante : F<sub>N</sub> = mg.',
        ] } ],
      [ { t: 'list', h: 'masse et poids', items: [
          '**Masse** (kg) : quantité de matière, la même partout.',
          '**Poids** (N) : force de gravité, dépend de g (plus petit sur la Lune).',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 1 —', q: 'Une force résultante de 3000 N agit sur une auto de 1200 kg.', s: [ 'a = {{3000|1200}} = 2,5 m/s<sup>2</sup>' ] } ],
      [ { t: 'ex', h: 'Exemple 2 —', q: '50 N vers l\'est et 20 N vers l\'ouest sur 5,0 kg.', s: [ 'ΣF = 30 N vers l\'est', 'a = {{30|5,0}} = 6,0 m/s<sup>2</sup> vers l\'est' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'On pousse une caisse de 20 kg avec 100 N sur un sol où μ<sub>c</sub> = 0,30. Accélération ?',
      s: [ 'F<sub>N</sub> = mg = 20 × 9,8 = 196 N', 'F<sub>f</sub> = 0,30 × 196 = 58,8 N', 'ΣF = 100 − 58,8 = 41,2 N', 'a = {{41,2|20}} ≈ 2,1 m/s<sup>2</sup>' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Une personne de 60 kg est dans un ascenseur qui accélère vers le haut à 2,0 m/s<sup>2</sup>. Que lit la balance ?',
      s: [ 'ΣF = F<sub>N</sub> − mg = ma', 'F<sub>N</sub> = m(g + a) = 60 × 11,8 = 708 N', 'masse « lue » : {{708|9,8}} ≈ 72 kg' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Utiliser une seule force au lieu de la **résultante**.',
          'Confondre masse (kg) et poids (N).',
          'Oublier le frottement.',
        ] } ],
      [ { t: 'retenir', items: [
          'ΣF = ma.',
          'DCL d\'abord, toujours.',
          'a dans le sens de ΣF.',
        ] } ],
    ] },
  ],
},

/* ============ 13. 3e loi ============ */
'newton-3': {
  bulle: '3e loi de newton',
  sous: 'La 3<sup>e</sup> loi de Newton : action-réaction',
  recto: [
    { t: 'box', f: 'Si A exerce une force sur B, alors B exerce sur A une force de <b>même grandeur</b> et de <b>sens opposé</b>.', note: 'F<sub>A sur B</sub> = −F<sub>B sur A</sub>' },
    { t: 'cols', c: [
      [ { t: 'list', h: 'caractéristiques d\'une paire action-réaction', items: [
          'Même **grandeur**, même **direction**, sens **opposés**.',
          'Elles agissent sur **deux objets différents** : elles ne s\'annulent donc jamais.',
          'Elles sont de la **même nature** (deux forces de contact, deux forces gravitationnelles…).',
          'Elles apparaissent et disparaissent **en même temps**.',
        ] } ],
      [ { t: 'list', h: 'pourquoi les effets sont différents ?', items: [
          'Les forces sont égales, mais les **masses** peuvent être très différentes.',
          'Avec ΣF = ma : même force, grande masse → petite accélération.',
          'ex. La Terre attire une pomme, et la pomme attire la Terre avec la même force ; mais la Terre n\'accélère presque pas.',
        ] } ],
    ] },
    { t: 'tab', h: 'exemples de paires', full: true, lcol: true,
      head: ['Action', 'Réaction'],
      rows: [
        ['le pied pousse le sol vers l\'arrière', 'le sol pousse le pied vers l\'avant (on avance)'],
        ['la fusée pousse les gaz vers le bas', 'les gaz poussent la fusée vers le haut'],
        ['le nageur pousse l\'eau vers l\'arrière', 'l\'eau pousse le nageur vers l\'avant'],
        ['le fusil pousse la balle', 'la balle pousse le fusil (recul)'],
        ['la Terre attire la Lune', 'la Lune attire la Terre (marées)'],
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Un livre est posé sur une table. F<sub>g</sub> et F<sub>N</sub> forment-elles une paire action-réaction ?',
      p: [ '**Non.** Elles agissent sur le **même** objet (le livre) et sont de natures différentes. La vraie réaction de F<sub>g</sub> (Terre sur livre) est la force du **livre sur la Terre**. La réaction de F<sub>N</sub> (table sur livre) est la force du **livre sur la table**.' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Une patineuse de 50 kg pousse un patineur de 80 kg avec une force de 120 N. Accélérations ?',
      s: [ 'chacun subit 120 N (3<sup>e</sup> loi)', 'a<sub>patineuse</sub> = {{120|50}} = 2,4 m/s<sup>2</sup> // vers l\'arrière', 'a<sub>patineur</sub> = {{120|80}} = 1,5 m/s<sup>2</sup> // vers l\'avant' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Si la force du cheval sur la charrette est égale à celle de la charrette sur le cheval, comment le cheval peut-il avancer ?',
      p: [ 'Ces deux forces agissent sur des objets différents. Pour savoir si le cheval avance, on regarde les forces **sur le cheval** : le sol le pousse vers l\'avant (réaction à ses sabots) plus fort que la charrette ne le retient.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Croire que l\'action et la réaction s\'annulent.',
          'Prendre F<sub>g</sub> et F<sub>N</sub> pour une paire action-réaction.',
          'Croire que le plus gros objet exerce la plus grande force.',
        ] } ],
      [ { t: 'retenir', items: [
          'A sur B = − B sur A.',
          'Deux objets différents.',
          'Même force, effets différents selon la masse.',
        ] } ],
    ] },
  ],
},

/* ============ 14. Gravitation ============ */
gravitation: {
  bulle: 'gravitation et poids',
  sous: 'La force gravitationnelle et le poids',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', h: 'loi de la gravitation universelle', p: [ 'Deux objets qui ont une masse s\'**attirent** toujours. Cette force augmente avec les masses et diminue avec le **carré** de la distance entre leurs centres.' ] },
        { t: 'box', f: 'F<sub>g</sub> = {{G m<sub>1</sub> m<sub>2</sub>|d<sup>2</sup>}}', note: 'G = 6,67 × 10<sup>−11</sup> N·m²/kg² · d entre les centres (m)' } ],
      [ { t: 'txt', h: 'le poids', p: [ 'Près de la surface d\'un astre, la force gravitationnelle sur un objet s\'appelle son **poids** :' ] },
        { t: 'box', f: 'F<sub>g</sub> = mg', note: 'g = intensité du champ gravitationnel (N/kg = m/s²)' },
        { t: 'tab', full: true, lcol: true,
          head: ['Astre', 'g (N/kg)'],
          rows: [ ['Terre', '9,8'], ['Lune', '1,6'], ['Mars', '3,7'], ['Jupiter', '24,8'] ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'effet de la distance', items: [
          'Distance × 2 → force ÷ 4.',
          'Distance × 3 → force ÷ 9.',
          'Distance ÷ 2 → force × 4.',
        ] } ],
      [ { t: 'list', h: 'effet des masses', items: [
          'Une masse × 2 → force × 2.',
          'Les deux masses × 2 → force × 4.',
          'La gravité entre deux objets du quotidien est minuscule : on ne la sent pas.',
        ] } ],
    ] },
    { t: 'box', h: 'lien entre les deux formules', f: 'g = {{G M<sub>astre</sub>|r<sup>2</sup>}}', note: 'Pour la Terre : {{6,67 × 10<sup>−11</sup> × 5,97 × 10<sup>24</sup>|(6,37 × 10<sup>6</sup>)<sup>2</sup>}} ≈ 9,8 N/kg' },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 1 —', q: 'Poids d\'un élève de 70 kg sur la Terre et sur la Lune.', s: [ 'Terre : 70 × 9,8 = 686 N', 'Lune : 70 × 1,6 = 112 N', 'masse : 70 kg partout' ] } ],
      [ { t: 'ex', h: 'Exemple 2 —', q: 'Deux élèves de 60 kg sont à 1,0 m l\'un de l\'autre.', s: [ 'F = {{6,67 × 10<sup>−11</sup> × 60 × 60|1,0<sup>2</sup>}}', 'F ≈ 2,4 × 10<sup>−7</sup> N // imperceptible' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Un satellite est à une distance du centre de la Terre égale à 2 rayons terrestres. Son poids par rapport à la surface ?',
      s: [ 'distance × 2 → force ÷ 2<sup>2</sup> = ÷ 4', 'g ≈ {{9,8|4}} ≈ 2,5 N/kg' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Un objet pèse 37 N sur Mars. Sa masse ?',
      s: [ 'm = {{F<sub>g</sub>|g}} = {{37|3,7}} = 10 kg' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Dire « je pèse 70 kg » en physique : 70 kg est une masse ; le poids est 686 N.',
          'Oublier le carré de la distance.',
          'Mesurer d à partir de la surface au lieu du centre.',
        ] } ],
      [ { t: 'retenir', items: [
          'F = Gm<sub>1</sub>m<sub>2</sub> / d<sup>2</sup>.',
          'Poids = mg ; g Terre = 9,8 N/kg.',
          'd × 2 → F ÷ 4.',
        ] } ],
    ] },
  ],
},

/* ============ 15. Normale et frottement ============ */
'normale-frottement': {
  bulle: 'normale et frottement',
  sous: 'La force normale et la force de frottement',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', h: 'force normale F<sub>N</sub>', p: [
          'Force exercée par une **surface** sur un objet qui s\'appuie sur elle, toujours **perpendiculaire** à la surface.',
          'Sur une surface horizontale, sans autre force verticale : **F<sub>N</sub> = mg**.',
          'Si on pousse vers le bas ou tire vers le haut, F<sub>N</sub> change (calculer avec ΣF<sub>y</sub> = 0).',
        ] } ],
      [ { t: 'txt', h: 'force de frottement F<sub>f</sub>', p: [
          'Force qui s\'**oppose** au glissement (ou à la tendance à glisser) entre deux surfaces, **parallèle** à la surface.',
        ] },
        { t: 'box', f: 'F<sub>f</sub> = μF<sub>N</sub>', note: 'μ : coefficient de frottement (sans unité)' } ],
    ] },
    { t: 'tab', h: 'statique ou cinétique ?', full: true, lcol: true,
      head: ['', 'Frottement **statique**', 'Frottement **cinétique**'],
      rows: [
        ['quand ?', 'l\'objet **ne glisse pas** encore', 'l\'objet **glisse**'],
        ['valeur', 's\'ajuste pour empêcher le mouvement, jusqu\'à un maximum μ<sub>s</sub>F<sub>N</sub>', 'constante : μ<sub>c</sub>F<sub>N</sub>'],
        ['comparaison', 'μ<sub>s</sub> > μ<sub>c</sub> : il est plus difficile de **démarrer** un objet que de le garder en mouvement', ''],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'facteurs', items: [
          'La **nature des surfaces** (μ) et la **force normale**.',
          'Pas l\'aire de contact (dans le modèle simple).',
          'Lubrifiants, roulements à billes : diminuent μ.',
        ] } ],
      [ { t: 'list', h: 'frottement utile ou nuisible', items: [
          'Utile : marcher, freiner, tenir un crayon, pneus d\'hiver.',
          'Nuisible : usure, chaleur, perte d\'énergie dans les moteurs.',
          'Résistance de l\'air : un frottement dans un fluide.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Une caisse de 40 kg repose sur le sol (μ<sub>s</sub> = 0,50 ; μ<sub>c</sub> = 0,35). Force minimale pour la faire bouger ? Force pour la garder à vitesse constante ?',
      s: [ 'F<sub>N</sub> = 40 × 9,8 = 392 N', 'démarrer : F > μ<sub>s</sub>F<sub>N</sub> = 0,50 × 392 = 196 N', 'vitesse constante : F = μ<sub>c</sub>F<sub>N</sub> = 0,35 × 392 ≈ 137 N' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'On pousse cette caisse avec 100 N. Quelle est la force de frottement ?',
      p: [ '100 N < 196 N : la caisse ne bouge pas. Le frottement **statique** vaut exactement **100 N** (il s\'ajuste), pas 196 N.' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Une personne appuie de 50 N vers le bas sur un livre de 2,0 kg posé sur une table. F<sub>N</sub> ?',
      s: [ 'ΣF<sub>y</sub> = 0 : F<sub>N</sub> = mg + 50 = 19,6 + 50 ≈ 69,6 N' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Prendre F<sub>N</sub> = mg quand il y a une autre force verticale ou un plan incliné.',
          'Utiliser μ<sub>s</sub>F<sub>N</sub> comme valeur du frottement statique même quand l\'objet ne bouge pas.',
          'Donner une unité à μ.',
        ] } ],
      [ { t: 'retenir', items: [
          'F<sub>N</sub> ⟂ surface ; F<sub>f</sub> ∥ surface.',
          'F<sub>f</sub> = μF<sub>N</sub>.',
          'μ<sub>s</sub> > μ<sub>c</sub>.',
        ] } ],
    ] },
  ],
},

/* ============ 16. Plan incliné ============ */
'plan-incline': {
  bulle: 'plan incliné',
  sous: 'Le plan incliné',
  recto: [
    { t: 'cols', w: '1fr 1.05fr', c: [
      [ { t: 'txt', p: [ 'Sur un plan incliné d\'angle θ, on choisit des axes **parallèle** et **perpendiculaire** au plan, puis on décompose le poids.' ] },
        { t: 'form', h: 'composantes du poids', items: [
          ['parallèle au plan', 'F<sub>g∥</sub> = mg sin θ (fait glisser vers le bas)'],
          ['perpendiculaire', 'F<sub>g⟂</sub> = mg cos θ (presse l\'objet contre le plan)'],
          ['normale', 'F<sub>N</sub> = mg cos θ'],
          ['frottement', 'F<sub>f</sub> = μmg cos θ'],
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 260, h: 190, xmin: 0, xmax: 8.5, ymin: -0.3, ymax: 5.5, xlabels: [], ylabels: [], grille: 1,
            segs: [ { a: [0, 0], b: [8, 4.62], cls: 'ln' }, { a: [0, 0], b: [8, 0], cls: 'ln' }, { a: [8, 0], b: [8, 4.62], cls: 'ln' } ],
            fleches: [
              { a: P, b: add(P, [0, -1], 2), pk: true, lbl: 'Fg', at: [4.15, 0.4] },
              { a: P, b: add(P, [-s30, c30], 1.9), lbl: 'FN', at: [2.6, 4.1] },
              { a: P, b: add(P, [-c30, -s30], 1), vert: true, dash: true, lbl: 'Fg∥', at: [2.2, 1.5] },
              { a: P, b: add(P, [s30, -c30], 1.73), vert: true, dash: true, lbl: 'Fg⟂', at: [5.1, 0.9] },
            ],
            pts: [ { x: 1.2, y: 0.2, lbl: 'θ = 30°', dx: 2, dy: -3 } ],
            alt: 'objet sur un plan incliné et décomposition du poids', cap: 'F<sub>g∥</sub> = mg sin θ ; F<sub>g⟂</sub> = mg cos θ' },
        ] } ],
    ] },
    { t: 'form', h: 'accélération le long du plan (vers le bas)', items: [
      ['sans frottement', 'a = g sin θ'],
      ['avec frottement', 'a = g(sin θ − μ cos θ)'],
      ['objet immobile', 'μ<sub>s</sub> ≥ tan θ'],
    ] },
    { t: 'list', h: 'à comprendre', items: [
      'Plus θ est grand, plus F<sub>g∥</sub> est grande et plus F<sub>N</sub> est petite.',
      'θ = 0° : plan horizontal (F<sub>N</sub> = mg) ; θ = 90° : chute libre (a = g).',
      'La masse s\'annule dans a = g sin θ : sans frottement, tous les objets descendent avec la même accélération.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Une boîte de 10 kg glisse sur un plan incliné à 30° ; μ<sub>c</sub> = 0,20. Accélération ?',
      s: [ 'F<sub>g∥</sub> = 10 × 9,8 × sin 30° = 49 N', 'F<sub>N</sub> = 10 × 9,8 × cos 30° ≈ 84,9 N', 'F<sub>f</sub> = 0,20 × 84,9 ≈ 17,0 N', 'ΣF = 49 − 17,0 = 32,0 N', 'a = {{32,0|10}} ≈ 3,2 m/s<sup>2</sup>' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Même plan, sans frottement. Accélération et vitesse après 2,0 m (départ du repos) ?',
      s: [ 'a = 9,8 × sin 30° = 4,9 m/s<sup>2</sup>', 'v<sub>f</sub> = √(2 × 4,9 × 2,0) ≈ 4,4 m/s' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'À partir de quel angle un bloc (μ<sub>s</sub> = 0,40) commence-t-il à glisser ?',
      s: [ 'tan θ = 0,40', 'θ = tan<sup>−1</sup>(0,40) ≈ 21,8°' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Inverser sin et cos : le long du plan, c\'est **sin**.',
          'Écrire F<sub>N</sub> = mg sur un plan incliné.',
          'Oublier que le frottement est vers le **haut** du plan quand l\'objet descend.',
        ] } ],
      [ { t: 'retenir', items: [
          '∥ : mg sin θ ; ⟂ : mg cos θ.',
          'a = g(sin θ − μ cos θ).',
          'Axes parallèle / perpendiculaire au plan.',
        ] } ],
    ] },
  ],
},

/* ============ 17. Hooke ============ */
hooke: {
  bulle: 'loi de hooke',
  sous: 'La loi de Hooke (force élastique)',
  recto: [
    { t: 'cols', w: '1.1fr 1fr', c: [
      [ { t: 'txt', p: [
          'Quand on étire ou comprime un ressort, il exerce une **force de rappel** qui tend à le ramener à sa **position de repos**. Tant qu\'on reste dans sa **limite d\'élasticité**, cette force est proportionnelle à la déformation.',
        ] },
        { t: 'box', f: 'F<sub>é</sub> = −kx', note: 'k : constante de rappel (N/m) · x : étirement ou compression (m) · le « − » : la force est opposée à la déformation' },
        { t: 'list', items: [
          'Grandeur de la force : F = kx.',
          'Grand k : ressort **rigide** (difficile à étirer).',
          'Au-delà de la **limite d\'élasticité**, le ressort se déforme de façon permanente : la loi ne s\'applique plus.',
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 230, h: 185, xmin: 0, xmax: 0.25, ymin: 0, ymax: 50, tick: 0.05, ticky: 10, grille: 0.05, nx: 'x (m)', ny: 'F (N)',
            courbes: [ { fn: x => 200 * x, x1: 0.2 } ],
            pts: [ { x: 0.1, y: 20, lbl: '(0,10 ; 20)', dx: 5, dy: 3 } ],
            alt: 'force proportionnelle à l’étirement', cap: 'F-x : droite ; pente = k = 200 N/m' },
        ] } ],
    ] },
    { t: 'list', h: 'mesurer k en laboratoire', items: [
      'Suspendre des masses connues au ressort : F = mg.',
      'Mesurer chaque allongement x (à partir de la longueur au repos !).',
      'Tracer F en fonction de x : la **pente** de la droite est k.',
    ] },
    { t: 'list', h: 'applications', items: [
      'Dynamomètre (peson), suspension d\'auto, trampoline, matelas, balance à ressort.',
      'Énergie emmagasinée dans le ressort : E<sub>pé</sub> = ½kx<sup>2</sup> (voir la feuille sur l\'énergie élastique).',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Une masse de 2,0 kg suspendue étire un ressort de 9,8 cm. Constante k ?',
      s: [ 'F = mg = 2,0 × 9,8 = 19,6 N', 'x = 0,098 m', 'k = {{F|x}} = {{19,6|0,098}} = 200 N/m' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Même ressort : de combien s\'étire-t-il avec une masse de 500 g ?',
      s: [ 'F = 0,500 × 9,8 = 4,9 N', 'x = {{4,9|200}} = 0,0245 m ≈ 2,5 cm' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Un ressort mesure 12 cm au repos et 15 cm quand on tire avec 6,0 N. k ?',
      s: [ 'x = 15 − 12 = 3 cm = 0,03 m // allongement, pas la longueur', 'k = {{6,0|0,03}} = 200 N/m' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Utiliser la longueur totale au lieu de l\'allongement.',
          'Laisser x en cm (k est en N/m).',
          'Utiliser la masse (kg) au lieu de la force (N).',
        ] } ],
      [ { t: 'retenir', items: [
          'F = kx (grandeur).',
          'x = allongement en mètres.',
          'Pente du graphique F-x = k.',
        ] } ],
    ] },
  ],
},

});
})();
