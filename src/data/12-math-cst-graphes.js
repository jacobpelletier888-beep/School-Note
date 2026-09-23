/* Mathématique CST — Graphes */
(function () {
  // graphe « G » réutilisé dans les feuilles 6 et 7
  const G = {
    kind: 'graphe', w: 320, h: 145,
    sommets: { A: [30, 35], B: [130, 22], C: [100, 115], D: [210, 80], E: [292, 118] },
    aretes: [['A', 'B'], ['A', 'C'], ['B', 'C'], ['B', 'D'], ['C', 'D'], ['D', 'E']],
    alt: 'graphe G à 5 sommets et 6 arêtes',
  };

Object.assign(DATA.feuilles['math-cst'], {

/* ============ 6. Vocabulaire ============ */
'graphes-vocabulaire': {
  bulle: 'vocabulaire des graphes',
  sous: 'Les graphes : définitions de base',
  recto: [
    { t: 'cols', w: '1fr 1.05fr', c: [
      [ { t: 'txt', p: [
        'Un **graphe** est un ensemble de **sommets** (points) reliés par des **arêtes** (lignes). Il sert à modéliser des réseaux : routes, amitiés, horaires, réseaux informatiques…',
        'La position des sommets et la forme des arêtes n\'ont **pas d\'importance** : seules les liaisons comptent.',
      ] } ],
      [ { t: 'fig', figs: [ Object.assign({}, G, { cap: 'graphe G : 5 sommets, 6 arêtes' }) ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'les sommets', items: [
          '**Ordre** d\'un graphe : son nombre de sommets.',
          '**Degré** d\'un sommet : nombre d\'arêtes qui y touchent (une boucle compte pour 2).',
          '**Sommets adjacents** : reliés par une arête.',
          '**Sommet isolé** : de degré 0.',
        ] },
        { t: 'list', h: 'les arêtes', items: [
          '**Boucle** : arête qui part d\'un sommet et y revient.',
          '**Arêtes multiples** : plusieurs arêtes relient les deux mêmes sommets.',
          '**Graphe simple** : sans boucle et sans arête multiple.',
        ] } ],
      [ { t: 'list', h: 'chaînes et cycles', items: [
          '**Chaîne** : suite d\'arêtes qui se suivent (ex. A–B–D–E).',
          '**Longueur** d\'une chaîne : son nombre d\'arêtes.',
          '**Chaîne simple** : ne passe pas deux fois par la même arête.',
          '**Cycle** : chaîne simple qui revient à son point de départ (ex. A–B–C–A).',
          '**Distance** entre deux sommets : longueur de la plus courte chaîne qui les relie.',
          '**Diamètre** : la plus grande distance entre deux sommets du graphe.',
        ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'types de graphes', items: [
          '**Connexe** : on peut aller de n\'importe quel sommet à n\'importe quel autre.',
          '**Complet** : chaque sommet est relié à tous les autres.',
          '**Orienté** : les arêtes ont un sens (flèches).',
          '**Pondéré** (valué) : chaque arête porte un nombre.',
        ] } ],
      [ { t: 'form', h: 'formules', items: [
          ['Somme des degrés', '= 2 × nombre d\'arêtes'],
          ['Graphe complet à n sommets', '{{n(n − 1)|2}} arêtes'],
        ], note: 'Conséquence : le nombre de sommets de degré **impair** est toujours **pair**.' } ],
    ] },
    { t: 'ex', h: 'Petit exemple —', q: 'Un graphe a 7 arêtes, et ses sommets sont tous de degré 2. Quel est son ordre ?',
      s: [ 'somme des degrés = 2 × 7 = 14', '2 × n = 14 → n = 7 // n = nombre de sommets' ],
      r: '7 sommets' },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Décrire le graphe G.',
      fig: Object.assign({}, G, { w: 260, h: 125, sommets: { A: [22, 30], B: [105, 18], C: [82, 100], D: [175, 70], E: [245, 104] } }),
      s: [
        'ordre : 5 sommets · 6 arêtes',
        'degrés : A = 2, B = 3, C = 3, D = 3, E = 1',
        '2 + 3 + 3 + 3 + 1 = 12 = 2 × 6 // la formule est vérifiée ✓',
        'connexe ? oui, tous les sommets sont reliés',
        'complet ? non : il en faudrait {{5 × 4|2}} = 10 arêtes',
        'distance(A, E) = 3 // A–B–D–E ou A–C–D–E',
        'diamètre = 3 // aucune paire n\'est plus éloignée',
      ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 2 —', q: 'Peut-on dessiner un graphe dont les sommets ont les degrés 3, 3, 2 et 1 ?',
          s: [ '3 + 3 + 2 + 1 = 9 // impair' ],
          p: [ 'La somme des degrés doit être le double du nombre d\'arêtes, donc **paire**. Un tel graphe est **impossible**.' ] } ],
      [ { t: 'ex', h: 'Exemple 3 —', q: '8 amis se serrent tous la main une fois. Combien de poignées de main ?',
          s: [ 'graphe complet à 8 sommets', '{{8 × 7|2}} = {{56|2}} = 28' ],
          r: '28 poignées de main' } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Compter une boucle comme 1 dans le degré (elle compte pour **2**).',
          'Confondre l\'ordre (nombre de sommets) et le nombre d\'arêtes.',
          'Croire que deux arêtes qui se croisent sur le dessin créent un sommet.',
          'Confondre distance (nombre d\'arêtes) et poids (valeurs sur les arêtes).',
        ] } ],
      [ { t: 'retenir', items: [
          'Σ degrés = 2 × arêtes.',
          'Complet : n(n − 1) ÷ 2 arêtes.',
          'Distance = plus courte chaîne ; diamètre = la plus grande distance.',
          'Connexe = « tout le monde est relié ».',
        ] } ],
    ] },
  ],
},

/* ============ 7. Euler et Hamilton ============ */
'euler-hamilton': {
  bulle: 'euler et hamilton',
  sous: 'Chaînes et cycles eulériens et hamiltoniens',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', h: 'eulérien : les ARÊTES', p: [
        'Une **chaîne eulérienne** passe par **chaque arête une seule fois**.',
        'Un **cycle eulérien** est une chaîne eulérienne qui revient au sommet de départ.',
        'Utile pour : déneiger toutes les rues, livrer le courrier, tracer une figure sans lever le crayon.',
      ] } ],
      [ { t: 'txt', h: 'hamiltonien : les SOMMETS', p: [
        'Une **chaîne hamiltonienne** passe par **chaque sommet une seule fois**.',
        'Un **cycle hamiltonien** est une chaîne hamiltonienne qui revient au sommet de départ.',
        'Utile pour : une tournée de clients, un voyage qui visite chaque ville une fois.',
      ] } ],
    ] },
    { t: 'tab', h: 'théorème d\'Euler (graphe connexe)', full: true, lcol: true,
      head: ['Nombre de sommets de degré impair', 'Conclusion'],
      rows: [
        ['0', 'il existe un **cycle eulérien** (on peut partir de n\'importe quel sommet)'],
        ['2', 'il existe une **chaîne eulérienne** (pas de cycle) : elle part d\'un sommet impair et finit à l\'autre'],
        ['plus de 2', '**aucune** chaîne eulérienne'],
      ],
      note: 'Un graphe non connexe n\'a jamais de chaîne eulérienne (s\'il a des arêtes dans plus d\'un morceau).' },
    { t: 'cols', w: '1.2fr 1fr', c: [
      [ { t: 'list', h: 'pour Hamilton : pas de théorème simple', items: [
          'On cherche par **essais** : on essaie de visiter tous les sommets sans repasser.',
          'Un sommet de degré 1 empêche un cycle hamiltonien (on ne pourrait pas en ressortir).',
          'Un graphe complet (3 sommets ou plus) a toujours un cycle hamiltonien.',
        ] },
        { t: 'box', f: 'Euler → chaque <b>arête</b> une fois · Hamilton → chaque <b>sommet</b> une fois' } ],
      [ { t: 'fig', figs: [
          { kind: 'graphe', w: 190, h: 150, sommets: { A: [30, 25], B: [160, 25], C: [160, 125], D: [30, 125] },
            aretes: [['A', 'B'], ['B', 'C'], ['C', 'D'], ['D', 'A'], ['A', 'C']],
            alt: 'carré avec une diagonale', cap: 'degrés : A = 3, B = 2, C = 3, D = 2' },
        ] } ],
    ] },
    { t: 'txt', h: 'le problème historique', p: [
      'En 1736, Euler a prouvé qu\'on ne pouvait pas traverser les 7 ponts de Königsberg une seule fois chacun : les 4 sommets du graphe étaient de degré impair.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Le carré avec une diagonale (recto) : chaîne ou cycle eulérien ? Cycle hamiltonien ?',
      fig: { kind: 'graphe', w: 170, h: 130, sommets: { A: [25, 20], B: [145, 20], C: [145, 110], D: [25, 110] },
        aretes: [['A', 'B', 1], ['B', 'C', 2], ['C', 'D', 3], ['D', 'A', 4], ['A', 'C', 5, [10, -8]]],
        alt: 'ordre de parcours de la chaîne eulérienne', cap: 'ordre de passage : 1 à 5' },
      s: [
        'sommets impairs : A (3) et C (3) → 2 sommets impairs',
        'donc une chaîne eulérienne, de A vers C, mais pas de cycle',
        'A–B–C–D–A–C // 5 arêtes, chacune une fois ✓',
        'cycle hamiltonien : A–B–C–D–A // 4 sommets, chacun une fois ✓',
      ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Le graphe G de la feuille « vocabulaire » (degrés A = 2, B = 3, C = 3, D = 3, E = 1).',
      s: [
        'sommets impairs : B, C, D et E → 4 // plus de 2',
        'donc aucune chaîne eulérienne',
        'chaîne hamiltonienne : A–B–C–D–E ✓',
        'cycle hamiltonien : impossible // E est de degré 1',
      ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Un camion de déneigement doit passer une fois dans chaque rue d\'un quartier et revenir au garage. Quelle condition le graphe des rues doit-il respecter ?',
      p: [ 'On cherche un **cycle eulérien** (les rues sont les arêtes). Le graphe doit être connexe et **tous** ses sommets (intersections) doivent être de **degré pair**.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Confondre Euler (arêtes) et Hamilton (sommets).',
          'Chercher un cycle eulérien quand il y a 2 sommets impairs : il n\'y a qu\'une chaîne.',
          'Commencer une chaîne eulérienne à un sommet pair alors qu\'il y a 2 sommets impairs.',
          'Pour Hamilton : oublier que le cycle doit revenir au départ sans repasser par un sommet.',
        ] } ],
      [ { t: 'retenir', items: [
          'Compte les sommets de degré **impair** : 0 → cycle, 2 → chaîne, plus → rien.',
          'Hamilton : on essaie, pas de règle simple.',
          'Degré 1 → pas de cycle hamiltonien.',
        ] } ],
    ] },
  ],
},

/* ============ 8. Orientés, pondérés, chaîne la plus courte ============ */
'chaine-courte': {
  bulle: 'chaîne la plus courte',
  sous: 'Graphes orientés et pondérés, chaîne la plus courte',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', h: 'graphe orienté', p: [
          'Chaque arête a un **sens** : on l\'appelle un **arc** et on la dessine avec une flèche. On ne peut la suivre que dans ce sens.',
          'Dans un graphe orienté, on parle de **chemin** (au lieu de chaîne) et de **circuit** (au lieu de cycle).',
          'Exemples : rues à sens unique, abonnements sur un réseau social, ordre des tâches d\'un projet.',
        ] } ],
      [ { t: 'txt', h: 'graphe pondéré (valué)', p: [
          'Chaque arête porte un nombre : son **poids** (distance, coût, temps…).',
          'Le **poids d\'une chaîne** est la somme des poids de ses arêtes.',
          'La **chaîne la plus courte** entre deux sommets est celle qui a le **plus petit poids**, pas forcément le moins d\'arêtes.',
        ] } ],
    ] },
    { t: 'list', h: 'algorithme de Dijkstra (chaîne la plus courte)', items: [
      '1. Le sommet de départ reçoit 0. Tous les autres reçoivent ∞ (inconnu).',
      '2. On **fixe** le sommet non fixé qui a la plus petite valeur.',
      '3. Pour chacun de ses voisins non fixés : valeur du sommet fixé + poids de l\'arête. Si c\'est plus petit que la valeur actuelle, on la remplace et on note d\'où on vient.',
      '4. On recommence à l\'étape 2 jusqu\'à ce que le sommet d\'arrivée soit fixé.',
      '5. On remonte les « d\'où on vient » à partir de l\'arrivée pour lire la chaîne.',
    ] },
    { t: 'cols', c: [
      [ { t: 'fig', figs: [
          { kind: 'graphe', w: 320, h: 165, sommets: { A: [22, 85], B: [125, 22], C: [125, 145], D: [235, 50], E: [300, 128] },
            aretes: [['A', 'B', 4], ['A', 'C', 2], ['C', 'B', 1, [10, 0]], ['B', 'D', 5], ['C', 'D', 8], ['C', 'E', 10], ['D', 'E', 2]],
            gras: ['A-C', 'C-B', 'B-D', 'D-E'],
            alt: 'graphe pondéré avec la chaîne la plus courte en rose', cap: 'chaîne la plus courte de A à E (en rose) : poids 10' },
        ] } ],
      [ { t: 'list', h: 'trucs', items: [
          'Dans un petit graphe, on peut aussi **énumérer** toutes les chaînes et comparer leurs poids.',
          'La chaîne directe n\'est pas toujours la meilleure : ici A–B (4) est plus long que A–C–B (3).',
          'Dans un graphe orienté, on respecte le sens des flèches.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'tab', h: 'Exemple 1 — Dijkstra de A à E (graphe du recto)', full: true,
      head: ['Sommet fixé', 'A', 'B', 'C', 'D', 'E'],
      rows: [
        ['départ', '<b>0</b>', '∞', '∞', '∞', '∞'],
        ['A (0)', '✓', '4 (A)', '2 (A)', '∞', '∞'],
        ['C (2)', '✓', '3 (C)', '✓', '10 (C)', '12 (C)'],
        ['B (3)', '✓', '✓', '✓', '8 (B)', '12 (C)'],
        ['D (8)', '✓', '✓', '✓', '✓', '10 (D)'],
        ['E (10)', '✓', '✓', '✓', '✓', '✓'],
      ],
      note: 'Ligne C : B passe de 4 à 2 + 1 = 3. Ligne B : D passe de 10 à 3 + 5 = 8. Ligne D : E passe de 12 à 8 + 2 = 10.' },
    { t: 'ex', h: 'Remontée :', q: 'E vient de D, D vient de B, B vient de C, C vient de A.',
      s: [ 'chaîne : A–C–B–D–E', 'poids : 2 + 1 + 5 + 2 = 10' ],
      r: 'A–C–B–D–E, de poids 10' },
    { t: 'ex', h: 'Exemple 2 —', q: 'Graphe orienté : trouver le chemin le plus court de S à T.',
      fig: { kind: 'graphe', oriente: true, w: 230, h: 130, sommets: { S: [20, 65], A: [110, 18], B: [110, 112], T: [210, 65] },
        aretes: [['S', 'A', 3], ['S', 'B', 6], ['A', 'B', 2, [10, 0]], ['B', 'T', 1], ['A', 'T', 5]],
        gras: ['S-A', 'A-B', 'B-T'], alt: 'graphe orienté pondéré' },
      s: [ 'S → A → T : 3 + 5 = 8', 'S → B → T : 6 + 1 = 7', 'S → A → B → T : 3 + 2 + 1 = 6 // le plus court' ],
      r: 'S → A → B → T, de poids 6' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Choisir la chaîne qui a le moins d\'arêtes au lieu du plus petit poids.',
          'Oublier de mettre à jour une valeur quand on trouve un meilleur passage.',
          'Suivre une flèche à l\'envers dans un graphe orienté.',
        ] } ],
      [ { t: 'retenir', items: [
          'Poids d\'une chaîne = somme des poids.',
          'Dijkstra : fixer le plus petit, mettre à jour les voisins, recommencer.',
          'Toujours noter d\'où l\'on vient pour remonter la chaîne.',
        ] } ],
    ] },
  ],
},

/* ============ 9. Arbres ============ */
arbres: {
  bulle: 'arbres',
  sous: 'Arbres et arbre de valeur minimale',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [
          'Un **arbre** est un graphe **connexe** et **sans cycle**.',
        ] },
        { t: 'list', h: 'propriétés d\'un arbre à n sommets', items: [
          'Il a exactement **n − 1 arêtes**.',
          'Entre deux sommets, il y a **une seule** chaîne.',
          'Enlever une arête le coupe en deux (il n\'est plus connexe).',
          'Ajouter une arête crée un cycle.',
        ] } ],
      [ { t: 'txt', h: 'arbre de valeur minimale', p: [
          'Dans un graphe pondéré, c\'est un arbre qui relie **tous les sommets** avec la **plus petite somme de poids** possible.',
          'Aussi appelé arbre de poids minimal. Exemples : relier des villages par la fibre optique ou des chalets par des sentiers au plus bas coût.',
          'L\'**arbre de valeur maximale** relie tous les sommets avec la plus grande somme de poids.',
        ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'algorithme de Kruskal', items: [
          '1. Classer les arêtes par poids **croissant**.',
          '2. Prendre les arêtes dans l\'ordre. On garde une arête seulement si elle **ne crée pas de cycle**.',
          '3. Arrêter quand on a **n − 1 arêtes**.',
          'Pour l\'arbre de valeur **maximale** : même méthode, en ordre **décroissant**.',
        ] } ],
      [ { t: 'list', h: 'algorithme de Prim', items: [
          '1. Partir de n\'importe quel sommet.',
          '2. Parmi les arêtes qui relient un sommet déjà choisi à un sommet pas encore choisi, prendre la plus légère.',
          '3. Recommencer jusqu\'à ce que tous les sommets soient reliés.',
          'Les deux méthodes donnent la même valeur minimale.',
        ] } ],
    ] },
    { t: 'fig', figs: [
      { kind: 'graphe', w: 330, h: 165, sommets: { A: [25, 85], B: [130, 22], C: [130, 145], D: [235, 50], E: [305, 130] },
        aretes: [['A', 'B', 6], ['A', 'C', 3], ['B', 'C', 4, [10, 0]], ['B', 'D', 2], ['C', 'D', 5], ['C', 'E', 7], ['D', 'E', 8]],
        gras: ['B-D', 'A-C', 'B-C', 'C-E'], pale: ['C-D', 'A-B', 'D-E'],
        alt: 'arbre de valeur minimale en rose', cap: 'graphe pondéré de l\'exemple : l\'arbre de valeur minimale est en rose' },
    ] },
  ],
  verso: [
    { t: 'tab', h: 'Exemple 1 — arbre de valeur minimale (Kruskal)', full: true, lcol: true,
      head: ['Arête (ordre croissant)', 'Poids', 'Décision'],
      rows: [
        ['B–D', '2', 'on garde ✓'],
        ['A–C', '3', 'on garde ✓'],
        ['B–C', '4', 'on garde ✓ (relie {B, D} et {A, C})'],
        ['C–D', '5', 'rejetée ✗ : cycle B–C–D'],
        ['A–B', '6', 'rejetée ✗ : cycle A–B–C'],
        ['C–E', '7', 'on garde ✓ → 4 arêtes = 5 − 1 : on arrête'],
      ] },
    { t: 'ex', h: 'Valeur :', q: '', s: [ '2 + 3 + 4 + 7 = 16' ], r: 'arbre B–D, A–C, B–C, C–E, de valeur minimale 16' },
    { t: 'ex', h: 'Exemple 2 —', q: 'Vérifier avec Prim, en partant de A.',
      s: [
        '{A} : A–C (3) plutôt que A–B (6) // on ajoute C',
        '{A, C} : B–C (4) est la plus légère // on ajoute B',
        '{A, B, C} : B–D (2) // on ajoute D',
        '{A, B, C, D} : C–E (7) plutôt que D–E (8) // on ajoute E',
      ],
      r: 'même arbre, valeur 16 ✓' },
    { t: 'ex', h: 'Exemple 3 —', q: 'Arbre de valeur maximale (ordre décroissant).',
      s: [ 'D–E (8) ✓ · C–E (7) ✓ · A–B (6) ✓', 'C–D (5) ✗ // cycle C–D–E', 'B–C (4) ✓ // 4 arêtes : on arrête', '8 + 7 + 6 + 4 = 25' ],
      r: 'valeur maximale 25' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Garder une arête qui ferme un cycle.',
          'Continuer après avoir obtenu n − 1 arêtes.',
          'Avec Prim : choisir une arête qui relie deux sommets déjà choisis.',
        ] } ],
      [ { t: 'retenir', items: [
          'Arbre = connexe + sans cycle = n − 1 arêtes.',
          'Kruskal : du plus léger au plus lourd, sans cycle.',
          'Maximale : même chose en ordre décroissant.',
        ] } ],
    ] },
  ],
},

/* ============ 10. Chemin critique ============ */
'chemin-critique': {
  bulle: 'chemin critique',
  sous: 'Chemin critique d\'un projet',
  recto: [
    { t: 'txt', p: [
      'Pour planifier un projet, on le découpe en **tâches**. Chaque tâche a une **durée** et parfois des **tâches préalables** : des tâches qui doivent être finies avant qu\'elle puisse commencer. On représente le projet par un **graphe orienté** (les sommets sont les tâches, les flèches suivent l\'ordre).',
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'vocabulaire', items: [
          '**Chemin** : suite de tâches du début à la fin du projet, en suivant les flèches.',
          '**Durée d\'un chemin** : la somme des durées de ses tâches.',
          '**Chemin critique** : le chemin le **plus long**. Sa durée est la **durée minimale** du projet.',
          '**Tâche critique** : tâche sur le chemin critique. Le moindre retard retarde tout le projet.',
          '**Marge** d\'une tâche : le retard qu\'elle peut prendre sans retarder le projet.',
        ] } ],
      [ { t: 'list', h: 'démarche', items: [
          '1. Faire le tableau des tâches : durée et tâches préalables.',
          '2. Dessiner le graphe orienté : « Début », les tâches, « Fin ».',
          '3. Énumérer **tous** les chemins de Début à Fin.',
          '4. Calculer la durée de chaque chemin.',
          '5. Le plus long = chemin critique = durée minimale du projet.',
        ] },
        { t: 'box', f: 'marge = durée du projet − durée du plus long chemin qui passe par la tâche' } ],
    ] },
    { t: 'txt', h: 'pourquoi le PLUS LONG chemin ?', p: [
      'Plusieurs tâches se font en même temps. Le projet ne peut pas finir avant que la plus longue suite de tâches obligatoires soit terminée. C\'est pour ça qu\'on cherche le chemin le plus long, et non le plus court.',
    ] },
    { t: 'fig', figs: [
      { kind: 'graphe', oriente: true, w: 470, h: 175,
        sommets: { Début: [38, 88], A: [135, 35], B: [135, 140], C: [255, 20], D: [255, 88], E: [255, 155], F: [360, 88], Fin: [440, 88] },
        labels: { A: 'A · 3 j', B: 'B · 2 j', C: 'C · 4 j', D: 'D · 5 j', E: 'E · 7 j', F: 'F · 2 j' },
        aretes: [['Début', 'A'], ['Début', 'B'], ['A', 'C'], ['A', 'D'], ['B', 'D'], ['B', 'E'], ['C', 'F'], ['D', 'F'], ['E', 'F'], ['F', 'Fin']],
        gras: ['Début-B', 'B-E', 'E-F', 'F-Fin'],
        alt: 'graphe du projet avec le chemin critique en rose', cap: 'graphe du projet de bal (verso) ; chemin critique en rose' },
    ] },
  ],
  verso: [
    { t: 'tab', h: 'Exemple — organiser le bal des finissants', full: true, lcol: true,
      head: ['Tâche', 'Durée', 'Tâches préalables'],
      rows: [
        ['A : réserver la salle', '3 jours', 'aucune'],
        ['B : choisir le thème', '2 jours', 'aucune'],
        ['C : engager le DJ', '4 jours', 'A'],
        ['D : préparer les décorations', '5 jours', 'A et B'],
        ['E : vendre les billets', '7 jours', 'B'],
        ['F : monter la salle', '2 jours', 'C, D et E'],
      ] },
    { t: 'ex', h: 'Les chemins :', q: '(graphe au recto)',
      s: [
        'Début–A–C–F–Fin : 3 + 4 + 2 = 9 jours',
        'Début–A–D–F–Fin : 3 + 5 + 2 = 10 jours',
        'Début–B–D–F–Fin : 2 + 5 + 2 = 9 jours',
        'Début–B–E–F–Fin : 2 + 7 + 2 = 11 jours // le plus long',
      ],
      r: 'chemin critique B–E–F : le bal demande au minimum 11 jours' },
    { t: 'tab', h: 'les marges', full: true,
      head: ['Tâche', 'A', 'B', 'C', 'D', 'E', 'F'],
      rows: [
        ['plus long chemin qui passe par la tâche', '10', '11', '9', '10', '11', '11'],
        ['marge (11 − …)', '1 j', '<b>0</b>', '2 j', '1 j', '<b>0</b>', '<b>0</b>'],
      ],
      note: 'Les tâches critiques (marge 0) sont B, E et F. Le DJ (C) peut être engagé jusqu\'à 2 jours en retard sans retarder le bal.' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Chercher le chemin le plus **court** : c\'est le plus **long** qui est critique.',
          'Oublier un chemin : énumère-les tous, de façon organisée.',
          'Additionner les durées de toutes les tâches (ça donne 23 jours, mais plusieurs se font en même temps).',
        ] } ],
      [ { t: 'retenir', items: [
          'Chemin critique = chemin le plus long = durée minimale du projet.',
          'Tâche critique : marge de 0.',
          'Pour raccourcir le projet, il faut raccourcir une tâche **critique**.',
        ] } ],
    ] },
  ],
},

/* ============ 11. Coloration ============ */
coloration: {
  bulle: 'coloration de graphes',
  sous: 'Coloration de graphes et nombre chromatique',
  recto: [
    { t: 'cols', w: '1.35fr 1fr', c: [
      [ { t: 'txt', p: [
          '**Colorer un graphe**, c\'est donner une couleur à chaque sommet de sorte que deux sommets **adjacents** n\'aient **jamais** la même couleur.',
          'Le **nombre chromatique** d\'un graphe, noté **χ(G)** (« khi de G »), est le **plus petit** nombre de couleurs nécessaire.',
        ] },
        { t: 'list', h: 'applications', items: [
          '**Horaire d\'examens** : sommets = cours, arête = un élève suit les deux cours ; couleur = plage horaire.',
          '**Carte géographique** : deux régions voisines de couleurs différentes.',
          '**Aquarium** : des poissons incompatibles dans des bassins différents.',
          '**Feux de circulation**, fréquences radio, tables d\'invités…',
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'graphe', w: 200, h: 170, sommets: { A: [100, 18], B: [180, 75], C: [150, 152], D: [50, 152], E: [20, 75] },
            aretes: [['A', 'B'], ['B', 'C'], ['C', 'D'], ['D', 'E'], ['E', 'A']],
            couleurs: { A: 1, B: 2, C: 1, D: 2, E: 3 },
            alt: 'cycle de 5 sommets colorié avec 3 couleurs', cap: 'un cycle de 5 sommets demande 3 couleurs : χ = 3' },
        ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'box', h: 'encadrer χ(G)', f: 'ordre du plus grand sous-graphe complet ≤ χ(G) ≤ degré maximal + 1' },
        { t: 'list', items: [
          'Un triangle (3 sommets tous reliés) oblige au moins **3** couleurs.',
          'Un graphe complet à n sommets : χ = n.',
          'Un cycle : χ = 2 s\'il a un nombre pair de sommets, 3 s\'il est impair.',
          'Un arbre (2 sommets ou plus) : χ = 2.',
        ] } ],
      [ { t: 'list', h: 'algorithme de Welsh-Powell', items: [
          '1. Classer les sommets par degré **décroissant**.',
          '2. Donner la couleur 1 au premier sommet, puis, dans l\'ordre, à chaque sommet **non adjacent** à ceux déjà colorés en 1.',
          '3. Recommencer avec la couleur 2 pour les sommets pas encore colorés, et ainsi de suite.',
          'Le nombre de couleurs obtenu est une bonne réponse ; on confirme avec la borne inférieure.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'txt', h: 'Exemple — horaire d\'examens', p: [
      'Six examens (A à F). Une arête relie deux examens qui ont au moins un élève en commun (ils ne peuvent pas avoir lieu en même temps). Arêtes : A–B, A–C, A–D, B–C, B–E, C–F, D–E, E–F. Combien de plages horaires faut-il au minimum ?',
    ] },
    { t: 'cols', w: '1.1fr 1fr', c: [
      [ { t: 'ex', h: 'Degrés :', q: 'A = 3, B = 3, C = 3, E = 3, D = 2, F = 2',
          s: [
            'ordre : A, B, C, E, D, F',
            'couleur 1 : A, puis E // E n\'est pas voisin de A',
            'couleur 2 : B, puis D et F // ni D ni F ne touchent B, et D–F n\'est pas une arête',
            'couleur 3 : C',
          ] },
        { t: 'ex', h: 'Vérification :', q: 'Les 8 arêtes relient des couleurs différentes : A–B (1-2), A–C (1-3), A–D (1-2), B–C (2-3), B–E (2-1), C–F (3-2), D–E (2-1), E–F (1-2) ✓' } ],
      [ { t: 'fig', figs: [
          { kind: 'graphe', w: 290, h: 220, sommets: { D: [160, 18], A: [50, 90], B: [160, 62], E: [272, 110], F: [210, 200], C: [90, 190] },
            aretes: [['A', 'B'], ['A', 'C'], ['A', 'D'], ['B', 'C'], ['B', 'E'], ['C', 'F'], ['D', 'E'], ['E', 'F']],
            couleurs: { A: 1, E: 1, B: 2, D: 2, F: 2, C: 3 },
            alt: 'graphe des examens colorié avec 3 couleurs', cap: 'rose = plage 1 · bleu = plage 2 · vert = plage 3' },
        ] } ],
    ] },
    { t: 'ex', h: 'Conclusion :', q: 'A, B et C forment un triangle, donc χ ≥ 3. On a réussi avec 3 couleurs, donc χ = 3.',
      r: '3 plages horaires : {A, E}, {B, D, F} et {C}' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Donner la même couleur à deux sommets **reliés**.',
          'Oublier de vérifier la borne inférieure : trouver 3 couleurs ne prouve pas qu\'on ne peut pas faire mieux.',
          'Mal modéliser : dans un horaire, l\'arête veut dire « ne peuvent PAS être en même temps ».',
        ] } ],
      [ { t: 'retenir', items: [
          'Sommets adjacents → couleurs différentes.',
          'χ(G) = nombre minimal de couleurs.',
          'Triangle → au moins 3 ; χ ≤ degré max + 1.',
          'Welsh-Powell : degrés décroissants.',
        ] } ],
    ] },
  ],
},

});
})();
