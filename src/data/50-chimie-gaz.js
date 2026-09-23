/* Chimie — Les gaz */
DATA.feuilles['chimie'] = DATA.feuilles['chimie'] || {};
Object.assign(DATA.feuilles['chimie'], {

/* ============ 1. Rappels ============ */
rappels: {
  bulle: 'rappels de chimie',
  sous: 'Rappels : mole, masse molaire, concentration et stœchiométrie',
  recto: [
    { t: 'cols', c: [
      [ { t: 'form', h: 'la mole', items: [
          ['1 mol', '= 6,02 × 10<sup>23</sup> particules (nombre d\'Avogadro)'],
          ['masse molaire M', 'masse de 1 mol (g/mol), tableau périodique'],
          ['nombre de moles', 'n = {{m|M}}'],
        ], note: 'ex. M(H<sub>2</sub>O) = 2(1,01) + 16,00 = 18,02 g/mol' } ],
      [ { t: 'form', h: 'la concentration', items: [
          ['molaire', 'C = {{n|V}}  (mol/L, V en litres)'],
          ['massique', 'C = {{m|V}}  (g/L)'],
          ['en %', '% m/V = g de soluté par 100 mL'],
          ['en ppm', '1 ppm = 1 mg/L (solution aqueuse)'],
          ['dilution', 'C<sub>1</sub>V<sub>1</sub> = C<sub>2</sub>V<sub>2</sub>'],
        ] } ],
    ] },
    { t: 'list', h: 'la stœchiométrie', items: [
      'Une équation chimique **balancée** respecte la conservation de la matière (même nombre d\'atomes de chaque côté).',
      'Les **coefficients** donnent les rapports en **moles** (pas en grammes !).',
      'Démarche : masse → **moles** (÷ M) → rapport des coefficients → moles cherchées → masse (× M).',
      '**Réactif limitant** : celui qui s\'épuise en premier ; il détermine la quantité de produit. L\'autre est en **excès**.',
    ] },
    { t: 'box', h: 'le « pont des moles »', f: 'grammes ⇄ moles ⇄ moles de l\'autre substance ⇄ grammes (ou litres de gaz)' },
    { t: 'cols', c: [
      [ { t: 'list', h: 'types de réactions', items: [
          'Synthèse : A + B → AB · Décomposition : AB → A + B.',
          'Combustion : avec O<sub>2</sub>, produit CO<sub>2</sub> et H<sub>2</sub>O (pour un composé organique).',
          'Neutralisation : acide + base → sel + eau.',
        ] } ],
      [ { t: 'list', h: 'chiffres significatifs', items: [
          'Multiplication, division : autant de chiffres significatifs que la donnée qui en a le moins.',
          'Garder les calculs intermédiaires sans arrondir.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 1 —', q: 'Nombre de moles dans 36,0 g d\'eau.', s: [ 'n = {{36,0 g|18,02 g/mol}} = 2,00 mol' ] } ],
      [ { t: 'ex', h: 'Exemple 2 —', q: 'On dissout 5,85 g de NaCl dans 250 mL d\'eau. C ?',
          s: [ 'n = {{5,85|58,44}} = 0,100 mol', 'C = {{0,100 mol|0,250 L}} = 0,400 mol/L' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 3 —', q: '2 H<sub>2</sub> + O<sub>2</sub> → 2 H<sub>2</sub>O. Quelle masse d\'eau forment 4,04 g de H<sub>2</sub> ?',
      s: [ 'n(H<sub>2</sub>) = {{4,04|2,02}} = 2,00 mol', 'n(H<sub>2</sub>O) = 2,00 mol × {{2|2}} = 2,00 mol // rapport 2 : 2', 'm = 2,00 × 18,02 = 36,0 g' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'On mélange 3,0 mol de H<sub>2</sub> et 2,0 mol de O<sub>2</sub>. Réactif limitant ?',
      s: [ '3,0 mol H<sub>2</sub> demandent 3,0 × {{1|2}} = 1,5 mol O<sub>2</sub>', 'on a 2,0 mol O<sub>2</sub> > 1,5 → O<sub>2</sub> en excès (0,5 mol de trop)' ],
      r: 'H<sub>2</sub> est limitant ; il se forme 3,0 mol d\'eau' },
    { t: 'ex', h: 'Exemple 5 —', q: 'Diluer 50 mL d\'une solution à 2,0 mol/L jusqu\'à 250 mL.',
      s: [ 'C<sub>2</sub> = {{C<sub>1</sub>V<sub>1</sub>|V<sub>2</sub>}} = {{2,0 × 50|250}} = 0,40 mol/L' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Utiliser les coefficients avec des grammes.',
          'Oublier de convertir les mL en L pour C = n/V.',
          'Équation non balancée → tous les calculs sont faux.',
        ] } ],
      [ { t: 'retenir', items: [
          'n = m / M ; C = n / V.',
          'Toujours passer par les moles.',
          'Le réactif limitant décide de la quantité de produit.',
        ] } ],
    ] },
  ],
},

/* ============ 2. Théorie cinétique ============ */
'theorie-cinetique': {
  bulle: 'théorie cinétique des gaz',
  sous: 'Propriétés des gaz et théorie cinétique',
  recto: [
    { t: 'list', h: 'la théorie cinétique des gaz (modèle du gaz parfait)', items: [
      'Un gaz est formé de particules **très petites** et **très éloignées** : leur volume propre est négligeable.',
      'Les particules sont en **mouvement constant**, **rapide**, **aléatoire** et en ligne droite.',
      'Elles entrent en **collision** entre elles et avec les parois : ces collisions sont **élastiques** (pas de perte d\'énergie).',
      'Il n\'y a **pas de forces d\'attraction** entre les particules.',
      'L\'**énergie cinétique moyenne** des particules est proportionnelle à la **température absolue** (en kelvins).',
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'propriétés des gaz', items: [
          '**Compressibilité** : on peut réduire leur volume (beaucoup d\'espace vide).',
          '**Expansion** : ils occupent tout le volume disponible.',
          '**Diffusion** : ils se mélangent spontanément à d\'autres gaz.',
          '**Effusion** : ils s\'échappent par de petites ouvertures.',
          '**Pression** : causée par les collisions des particules sur les parois.',
        ] } ],
      [ { t: 'form', h: 'les 4 variables d\'un gaz', items: [
          ['pression', 'P (kPa)'],
          ['volume', 'V (L)'],
          ['température', 'T (K) = T (°C) + 273'],
          ['quantité', 'n (mol)'],
        ], note: 'Zéro absolu : 0 K = −273 °C. Les particules y auraient une énergie cinétique minimale.' } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'box', h: 'vitesse de diffusion (loi de Graham)', f: '{{v<sub>1</sub>|v<sub>2</sub>}} = √({{M<sub>2</sub>|M<sub>1</sub>}})', note: 'Plus un gaz est léger, plus il diffuse vite.' } ],
      [ { t: 'list', h: 'gaz parfait et gaz réel', items: [
          'Un gaz **réel** s\'éloigne du modèle à **haute pression** et à **basse température** (les particules se rapprochent et s\'attirent).',
          'Dans les conditions ordinaires, le modèle du gaz parfait fonctionne bien.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 1 —', q: 'Convertir.', s: [ '25 °C = 25 + 273 = 298 K', '−40 °C = −40 + 273 = 233 K', '373 K = 373 − 273 = 100 °C' ] } ],
      [ { t: 'ex', h: 'Exemple 2 —', q: 'Combien de fois H<sub>2</sub> diffuse-t-il plus vite que O<sub>2</sub> ?',
          s: [ '{{v(H<sub>2</sub>)|v(O<sub>2</sub>)}} = √({{32,00|2,02}}) ≈ 4' ], r: 'environ 4 fois plus vite' } ],
    ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Expliquer avec la théorie cinétique : un ballon gonflé à l\'intérieur rapetisse quand on le sort en hiver.',
      p: [ 'Au froid, l\'énergie cinétique des particules diminue : elles bougent moins vite et frappent la paroi moins souvent et moins fort. La pression intérieure baisse, donc le ballon se contracte jusqu\'à ce que les pressions intérieure et extérieure s\'équilibrent.' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Pourquoi sent-on le parfum d\'une personne à l\'autre bout de la classe ?',
      p: [ 'Par **diffusion** : les particules de parfum, en mouvement aléatoire constant, se dispersent parmi les particules de l\'air.' ] },
    { t: 'ex', h: 'Exemple 5 —', q: 'Pourquoi une seringue bouchée remplie d\'air se comprime-t-elle, mais pas une seringue remplie d\'eau ?',
      p: [ 'Dans un gaz, les particules sont très éloignées : il y a beaucoup d\'espace vide à réduire. Dans un liquide, elles se touchent presque.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Utiliser des °C dans une loi des gaz : toujours des **kelvins**.',
          'Dire que les particules « grossissent » quand on chauffe : c\'est leur vitesse qui augmente.',
          'Inverser la loi de Graham : le gaz léger est le plus rapide.',
        ] } ],
      [ { t: 'retenir', items: [
          'Gaz = particules petites, éloignées, rapides, sans attraction.',
          'T (K) = T (°C) + 273.',
          'Pression = collisions sur les parois.',
        ] } ],
    ] },
  ],
},

/* ============ 3. Pression ============ */
pression: {
  bulle: 'la pression',
  sous: 'La pression : unités et mesure',
  recto: [
    { t: 'cols', c: [
      [ { t: 'box', h: 'définition', f: 'P = {{F|A}}', note: 'F en newtons (N), A en m², P en pascals (Pa). 1 kPa = 1000 Pa.' },
        { t: 'txt', p: [ 'Pour un gaz, la pression vient des **collisions** des particules sur les parois du contenant. Plus il y a de collisions (et plus elles sont fortes), plus la pression est grande.' ] } ],
      [ { t: 'form', h: 'équivalences', items: [
          ['', '1 atm = 101,3 kPa = 760 mm Hg'],
          ['', '1 mm Hg ≈ 0,133 kPa'],
          ['pression normale', '101,3 kPa (au niveau de la mer)'],
        ] },
        { t: 'list', h: 'conditions de référence', items: [
          '**TPN** : 0 °C (273 K) et 101,3 kPa.',
          '**TAPN** : 25 °C (298 K) et 101,3 kPa.',
        ] } ],
    ] },
    { t: 'tab', h: 'mesurer une pression', full: true, lcol: true,
      head: ['Instrument', 'Principe', 'Calcul'],
      rows: [
        ['**Baromètre** à mercure', 'mesure la pression atmosphérique par la hauteur d\'une colonne de mercure', 'P<sub>atm</sub> = h (mm Hg)'],
        ['**Manomètre à bout fermé**', 'le gaz pousse le mercure vers un bout fermé (vide)', 'P<sub>gaz</sub> = h'],
        ['**Manomètre à bout ouvert**', 'on compare le gaz à la pression atmosphérique', 'mercure plus haut du côté **ouvert** : P<sub>gaz</sub> = P<sub>atm</sub> + h<br>mercure plus haut du côté **gaz** : P<sub>gaz</sub> = P<sub>atm</sub> − h'],
      ],
      note: 'h = différence de hauteur entre les deux colonnes de mercure. Le côté où le mercure est plus bas est celui qui pousse le plus fort.' },
    { t: 'list', h: 'pression et altitude', items: [
      'Plus on monte, plus la couche d\'air au-dessus est mince : la pression atmosphérique **diminue**.',
      'L\'eau bout donc à moins de 100 °C en montagne.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Une force de 500 N s\'exerce sur 0,25 m². Pression ?',
      s: [ 'P = {{500 N|0,25 m²}} = 2000 Pa = 2,0 kPa' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Convertir 95,0 kPa en atm et en mm Hg.',
      s: [ '95,0 × {{1 atm|101,3 kPa}} ≈ 0,938 atm', '95,0 × {{760 mm Hg|101,3 kPa}} ≈ 713 mm Hg' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Manomètre à bout ouvert : P<sub>atm</sub> = 760 mm Hg. Le mercure est 150 mm plus haut du côté ouvert. P<sub>gaz</sub> en kPa ?',
      s: [ 'côté ouvert plus haut → le gaz pousse plus fort', 'P<sub>gaz</sub> = 760 + 150 = 910 mm Hg', '910 × {{101,3|760}} ≈ 121 kPa' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Même manomètre, mais le mercure est 60 mm plus haut du côté du gaz.',
      s: [ 'P<sub>gaz</sub> = 760 − 60 = 700 mm Hg ≈ 93,3 kPa' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Additionner h quand il faut soustraire (regarde de quel côté le mercure est plus bas).',
          'Mélanger kPa et mm Hg dans le même calcul.',
          'Oublier que 1 kPa = 1000 Pa.',
        ] } ],
      [ { t: 'retenir', items: [
          'P = F / A.',
          '101,3 kPa = 1 atm = 760 mm Hg.',
          'TPN : 0 °C ; TAPN : 25 °C.',
        ] } ],
    ] },
  ],
},

/* ============ 4. Boyle-Mariotte ============ */
boyle: {
  bulle: 'loi de boyle-mariotte',
  sous: 'La loi de Boyle-Mariotte (pression et volume)',
  recto: [
    { t: 'cols', w: '1.1fr 1fr', c: [
      [ { t: 'txt', p: [
          'À **température** et **quantité de gaz constantes**, la pression d\'un gaz est **inversement proportionnelle** à son volume : si le volume diminue de moitié, la pression double.',
        ] },
        { t: 'box', f: 'P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub>', note: 'ou PV = constante' },
        { t: 'list', h: 'explication (théorie cinétique)', items: [
          'Moins de volume → les particules ont moins d\'espace → elles frappent les parois **plus souvent** → la pression augmente.',
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 230, h: 190, xmin: 0, xmax: 5, ymin: 0, ymax: 500, tick: 1, ticky: 100, grille: 1,
            nx: 'V (L)', ny: 'P (kPa)',
            courbes: [ { fn: x => 200 / x, x0: 0.35 } ],
            pts: [ { x: 1, y: 200, lbl: '(1 ; 200)', dx: 5, dy: -4 }, { x: 2, y: 100, lbl: '(2 ; 100)', dx: 5, dy: -4 } ],
            alt: 'hyperbole pression en fonction du volume', cap: 'P en fonction de V : courbe inverse (PV = 200)' },
        ] } ],
    ] },
    { t: 'list', h: 'démarche pour toutes les lois des gaz', items: [
      '1. Faire la **liste des données** avec leurs unités (P<sub>1</sub>, V<sub>1</sub>, P<sub>2</sub>, V<sub>2</sub>…).',
      '2. Repérer ce qui est **constant** → choisir la bonne loi.',
      '3. Utiliser les **mêmes unités** pour les deux états (kPa et kPa ; L et L). T toujours en **K**.',
      '4. Isoler l\'inconnue, calculer, vérifier que la réponse a du sens (P ↑ → V ↓).',
    ] },
    { t: 'list', h: 'applications', items: [
      'Seringue, pompe à vélo, respiration (le diaphragme augmente le volume des poumons → la pression baisse → l\'air entre).',
      'Plongée : en remontant, la pression diminue et l\'air des poumons prend de l\'expansion.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Un gaz occupe 2,0 L à 100 kPa. On le comprime à 0,50 L (T constante). Nouvelle pression ?',
      s: [ 'P<sub>2</sub> = {{P<sub>1</sub>V<sub>1</sub>|V<sub>2</sub>}}', 'P<sub>2</sub> = {{100 kPa × 2,0 L|0,50 L}} = 400 kPa' ],
      p: [ 'Vérif. : volume ÷ 4 → pression × 4 ✓' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Un plongeur expire une bulle de 1,5 L à une profondeur où la pression est de 303,9 kPa. Volume de la bulle en surface (101,3 kPa) ?',
      s: [ 'V<sub>2</sub> = {{P<sub>1</sub>V<sub>1</sub>|P<sub>2</sub>}} = {{303,9 × 1,5|101,3}} = 4,5 L' ],
      r: 'la bulle triple de volume en remontant' },
    { t: 'ex', h: 'Exemple 3 —', q: 'Une seringue contient 60 mL d\'air à 101,3 kPa. On bouche l\'embout et on pousse jusqu\'à 20 mL. Pression ?',
      s: [ 'P<sub>2</sub> = {{101,3 × 60|20}} ≈ 304 kPa' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Utiliser Boyle quand la température change.',
          'Croire que P et V sont directement proportionnels.',
          'Mélanger mL et L entre l\'état 1 et l\'état 2 (ici, ça fonctionne tant que c\'est la même unité des deux côtés).',
        ] } ],
      [ { t: 'retenir', items: [
          'T et n constantes : P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub>.',
          'Relation inverse : V ÷ 2 → P × 2.',
          'Graphique P-V : courbe (hyperbole).',
        ] } ],
    ] },
  ],
},

/* ============ 5. Charles ============ */
charles: {
  bulle: 'loi de charles',
  sous: 'La loi de Charles (volume et température)',
  recto: [
    { t: 'cols', w: '1.1fr 1fr', c: [
      [ { t: 'txt', p: [
          'À **pression** et **quantité de gaz constantes**, le volume d\'un gaz est **directement proportionnel** à sa **température absolue** (en kelvins).',
        ] },
        { t: 'box', f: '{{V<sub>1</sub>|T<sub>1</sub>}} = {{V<sub>2</sub>|T<sub>2</sub>}}', note: 'T en kelvins obligatoirement !' },
        { t: 'list', h: 'explication', items: [
          'On chauffe → les particules vont plus vite et frappent plus fort → pour garder la même pression, le gaz **prend de l\'expansion**.',
          'Si on prolonge la droite V-T, elle coupe l\'axe à **−273 °C** : le **zéro absolu** (0 K).',
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 235, h: 190, xmin: -300, xmax: 150, ymin: 0, ymax: 6, tick: 100, ticky: 1, grille: 50,
            nx: 'T (°C)', ny: 'V (L)',
            courbes: [ { fn: x => (x + 273) / 75, x0: -50 }, { fn: x => (x + 273) / 75, x0: -273, x1: -50, dash: true, cls: 'ln2' } ],
            pts: [ { x: -273, y: 0, lbl: '−273 °C', dx: -8, dy: -8, pk: true } ],
            alt: 'volume en fonction de la température : droite qui coupe l’axe à moins 273 degrés', cap: 'prolongée, la droite atteint V = 0 à −273 °C' },
        ] } ],
    ] },
    { t: 'list', h: 'applications', items: [
      'Montgolfière : l\'air chauffé prend de l\'expansion ; il devient moins dense et monte.',
      'Ballon placé au congélateur : il rapetisse.',
      'Pneus de vélo gonflés au soleil qui semblent plus durs.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Un gaz occupe 3,0 L à 27 °C. On le chauffe à 127 °C (P constante). Nouveau volume ?',
      s: [ 'T<sub>1</sub> = 27 + 273 = 300 K · T<sub>2</sub> = 127 + 273 = 400 K', 'V<sub>2</sub> = {{V<sub>1</sub>T<sub>2</sub>|T<sub>1</sub>}} = {{3,0 × 400|300}} = 4,0 L' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Un ballon de 2,50 L à 22 °C est sorti dehors à −18 °C. Volume ?',
      s: [ 'T<sub>1</sub> = 295 K · T<sub>2</sub> = 255 K', 'V<sub>2</sub> = {{2,50 × 255|295}} ≈ 2,16 L' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'À quelle température (°C) un gaz de 500 mL à 20 °C occupera-t-il 600 mL ?',
      s: [ 'T<sub>2</sub> = {{T<sub>1</sub>V<sub>2</sub>|V<sub>1</sub>}} = {{293 × 600|500}} ≈ 352 K', '352 − 273 = 79 °C' ] },
    { t: 'ex', h: 'Piège classique :', q: 'Si on double la température de 20 °C à 40 °C, le volume double-t-il ?',
      p: [ '**Non !** En kelvins : 293 K → 313 K, soit seulement 1,07 fois plus. Le volume augmente d\'environ 7 %.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Calculer avec des °C (on obtient des réponses absurdes).',
          'Oublier de reconvertir la réponse en °C quand on le demande.',
        ] } ],
      [ { t: 'retenir', items: [
          'P et n constantes : V / T constant.',
          'T en kelvins.',
          'Zéro absolu : −273 °C.',
        ] } ],
    ] },
  ],
},

/* ============ 6. Gay-Lussac ============ */
'gay-lussac': {
  bulle: 'loi de gay-lussac',
  sous: 'La loi de Gay-Lussac (pression et température)',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [
          'À **volume** et **quantité de gaz constants**, la pression d\'un gaz est **directement proportionnelle** à sa température absolue.',
        ] },
        { t: 'box', f: '{{P<sub>1</sub>|T<sub>1</sub>}} = {{P<sub>2</sub>|T<sub>2</sub>}}', note: 'T en kelvins' } ],
      [ { t: 'list', h: 'explication', items: [
          'Le contenant est **rigide** : le volume ne peut pas changer.',
          'On chauffe → les particules vont plus vite → collisions plus fréquentes et plus fortes → la **pression augmente**.',
        ] } ],
    ] },
    { t: 'list', h: 'applications et sécurité', items: [
      'Ne jamais chauffer ni jeter au feu une **bonbonne d\'aérosol** : la pression peut la faire exploser.',
      'La pression des pneus augmente après un long trajet (les pneus chauffent) : on la mesure à froid.',
      'Autocuiseur : pression plus élevée → l\'eau bout à plus de 100 °C → cuisson plus rapide.',
    ] },
    { t: 'tab', h: 'résumé des lois simples', full: true, lcol: true,
      head: ['Loi', 'Constantes', 'Relation', 'Formule'],
      rows: [
        ['Boyle-Mariotte', 'T, n', 'P et V inverses', 'P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub>'],
        ['Charles', 'P, n', 'V et T directes', '{{V<sub>1</sub>|T<sub>1</sub>}} = {{V<sub>2</sub>|T<sub>2</sub>}}'],
        ['Gay-Lussac', 'V, n', 'P et T directes', '{{P<sub>1</sub>|T<sub>1</sub>}} = {{P<sub>2</sub>|T<sub>2</sub>}}'],
        ['Avogadro', 'P, T', 'V et n directes', '{{V<sub>1</sub>|n<sub>1</sub>}} = {{V<sub>2</sub>|n<sub>2</sub>}}'],
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Un pneu est gonflé à 220 kPa à 20 °C. Après un trajet, il est à 45 °C (volume constant). Pression ?',
      s: [ 'T<sub>1</sub> = 293 K · T<sub>2</sub> = 318 K', 'P<sub>2</sub> = {{P<sub>1</sub>T<sub>2</sub>|T<sub>1</sub>}} = {{220 × 318|293}} ≈ 239 kPa' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Une bonbonne d\'aérosol à 300 kPa et 25 °C est jetée dans un feu à 400 °C. Pression ?',
      s: [ 'T<sub>1</sub> = 298 K · T<sub>2</sub> = 673 K', 'P<sub>2</sub> = {{300 × 673|298}} ≈ 678 kPa' ],
      r: 'plus du double : risque d\'explosion' },
    { t: 'ex', h: 'Exemple 3 —', q: 'Un contenant rigide passe de 150 kPa à 100 kPa quand on le refroidit. Il était à 27 °C. Nouvelle température ?',
      s: [ 'T<sub>2</sub> = {{T<sub>1</sub>P<sub>2</sub>|P<sub>1</sub>}} = {{300 × 100|150}} = 200 K', '200 − 273 = −73 °C' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Confondre Gay-Lussac (V constant) et Charles (P constante).',
          'Température en °C.',
          'Oublier que dans un contenant souple (ballon), c\'est plutôt le volume qui change.',
        ] } ],
      [ { t: 'retenir', items: [
          'V et n constants : P / T constant.',
          'Contenant rigide → Gay-Lussac.',
          'Chaleur + contenant fermé = danger.',
        ] } ],
    ] },
  ],
},

/* ============ 7. Avogadro ============ */
avogadro: {
  bulle: 'loi d\'avogadro',
  sous: 'La loi d\'Avogadro et le volume molaire',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [
          'À **température** et **pression constantes**, le volume d\'un gaz est **directement proportionnel** à son nombre de moles.',
          'Conséquence (hypothèse d\'Avogadro) : des volumes **égaux** de gaz différents, aux mêmes T et P, contiennent le **même nombre de particules**.',
        ] },
        { t: 'box', f: '{{V<sub>1</sub>|n<sub>1</sub>}} = {{V<sub>2</sub>|n<sub>2</sub>}}' } ],
      [ { t: 'tab', h: 'le volume molaire (1 mol de n\'importe quel gaz)', full: true, lcol: true,
          head: ['Conditions', 'T', 'P', 'V<sub>m</sub>'],
          rows: [
            ['**TPN**', '0 °C', '101,3 kPa', '**22,4 L/mol**'],
            ['**TAPN**', '25 °C', '101,3 kPa', '**24,5 L/mol**'],
          ] },
        { t: 'box', f: 'V = n × V<sub>m</sub>    ·    n = {{V|V<sub>m</sub>}}' } ],
    ] },
    { t: 'list', h: 'à savoir', items: [
      'Le volume molaire est le **même pour tous les gaz** (parfaits), peu importe leur masse molaire.',
      'Mais la **masse** de 22,4 L change d\'un gaz à l\'autre : 22,4 L de H<sub>2</sub> pèsent 2,02 g, 22,4 L de CO<sub>2</sub> pèsent 44,01 g.',
      'Le volume molaire sert de pont entre les **litres de gaz** et les **moles** en stœchiométrie.',
      'Masse volumique d\'un gaz : ρ = {{M|V<sub>m</sub>}} (g/L).',
    ] },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 1 —', q: 'Volume de 0,50 mol d\'O<sub>2</sub> à TPN.', s: [ 'V = 0,50 × 22,4 = 11,2 L' ] } ],
      [ { t: 'ex', h: 'Exemple 2 —', q: 'Nombre de moles dans 49 L de gaz à TAPN.', s: [ 'n = {{49|24,5}} = 2,0 mol' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Masse de 5,6 L de CO<sub>2</sub> à TPN.',
      s: [ 'n = {{5,6|22,4}} = 0,25 mol', 'm = 0,25 × 44,01 ≈ 11 g' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Un ballon contient 0,040 mol de gaz et occupe 1,0 L. On ajoute 0,020 mol (T et P constantes). Volume ?',
      s: [ 'V<sub>2</sub> = {{V<sub>1</sub>n<sub>2</sub>|n<sub>1</sub>}} = {{1,0 × 0,060|0,040}} = 1,5 L' ] },
    { t: 'ex', h: 'Exemple 5 —', q: 'Masse volumique de l\'hélium à TAPN.',
      s: [ 'ρ = {{4,00 g/mol|24,5 L/mol}} ≈ 0,163 g/L // bien plus léger que l\'air (≈ 1,2 g/L)' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Utiliser 22,4 L/mol quand les conditions ne sont pas TPN.',
          'Croire que 1 mol d\'un gaz lourd occupe plus de volume.',
          'Oublier d\'additionner l\'ancienne et la nouvelle quantité (n<sub>2</sub> = total).',
        ] } ],
      [ { t: 'retenir', items: [
          'TPN : 22,4 L/mol ; TAPN : 24,5 L/mol.',
          'Même volume = même nombre de particules.',
          'V et n proportionnels.',
        ] } ],
    ] },
  ],
},

/* ============ 8. Loi générale ============ */
'loi-generale': {
  bulle: 'loi générale des gaz',
  sous: 'La loi générale des gaz',
  recto: [
    { t: 'txt', p: [ 'La **loi générale des gaz** réunit les lois de Boyle-Mariotte, de Charles, de Gay-Lussac et d\'Avogadro. On l\'utilise quand **plusieurs variables changent en même temps**.' ] },
    { t: 'cols', c: [
      [ { t: 'box', h: 'forme complète', f: '{{P<sub>1</sub>V<sub>1</sub>|n<sub>1</sub>T<sub>1</sub>}} = {{P<sub>2</sub>V<sub>2</sub>|n<sub>2</sub>T<sub>2</sub>}}' } ],
      [ { t: 'box', h: 'quantité constante (le plus fréquent)', f: '{{P<sub>1</sub>V<sub>1</sub>|T<sub>1</sub>}} = {{P<sub>2</sub>V<sub>2</sub>|T<sub>2</sub>}}' } ],
    ] },
    { t: 'list', h: 'l\'astuce', items: [
      'On **raye** de la formule ce qui reste **constant** : on retrouve automatiquement la loi simple.',
      'ex. T constante et n constante → P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub> (Boyle).',
      'Il suffit donc de retenir UNE formule.',
    ] },
    { t: 'list', h: 'démarche', items: [
      '1. Tableau : état 1 (P<sub>1</sub>, V<sub>1</sub>, T<sub>1</sub>, n<sub>1</sub>) et état 2.',
      '2. Convertir : T en K ; mêmes unités de P et de V pour les deux états.',
      '3. Isoler l\'inconnue : par ex. V<sub>2</sub> = {{P<sub>1</sub>V<sub>1</sub>T<sub>2</sub>|T<sub>1</sub>P<sub>2</sub>}}.',
      '4. Vérifier le bon sens : chaque variable pousse-t-elle la réponse dans le bon sens ?',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Un gaz occupe 500 mL à 25 °C et 100 kPa. Volume à TPN ?',
      s: [ 'T<sub>1</sub> = 298 K, P<sub>1</sub> = 100 kPa · T<sub>2</sub> = 273 K, P<sub>2</sub> = 101,3 kPa', 'V<sub>2</sub> = {{P<sub>1</sub>V<sub>1</sub>T<sub>2</sub>|T<sub>1</sub>P<sub>2</sub>}} = {{100 × 500 × 273|298 × 101,3}}', 'V<sub>2</sub> ≈ 452 mL' ],
      p: [ 'Bon sens : on refroidit (V ↓) et on augmente un peu P (V ↓) → le volume diminue ✓' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Un ballon-sonde de 10 L est lâché au sol (100 kPa, 20 °C). En altitude : 30 kPa et −40 °C. Volume ?',
      s: [ 'T<sub>1</sub> = 293 K · T<sub>2</sub> = 233 K', 'V<sub>2</sub> = {{100 × 10 × 233|293 × 30}} ≈ 26,5 L' ],
      r: 'le ballon grossit : la baisse de pression l\'emporte sur le froid' },
    { t: 'ex', h: 'Exemple 3 —', q: 'On double la quantité de gaz et on double la température absolue dans un contenant rigide. Que devient P ?',
      s: [ '{{P<sub>1</sub>|n<sub>1</sub>T<sub>1</sub>}} = {{P<sub>2</sub>|2n<sub>1</sub> × 2T<sub>1</sub>}} // V constant, rayé', 'P<sub>2</sub> = 4P<sub>1</sub>' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier une variable qui change (souvent T).',
          'Isoler mal : faire un produit croisé écrit au long aide.',
          'Laisser T en °C.',
        ] } ],
      [ { t: 'retenir', items: [
          'Une seule formule : P V / (n T) constant.',
          'Rayer ce qui ne change pas.',
          'Vérifier le sens de la réponse.',
        ] } ],
    ] },
  ],
},

/* ============ 9. Gaz parfaits ============ */
'gaz-parfaits': {
  bulle: 'loi des gaz parfaits',
  sous: 'La loi des gaz parfaits',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [
          'La **loi des gaz parfaits** relie les 4 variables d\'un gaz **dans un seul état** (pas de « avant / après »).',
        ] },
        { t: 'box', f: 'PV = nRT', note: 'R = 8,314 kPa·L/(mol·K)' } ],
      [ { t: 'form', h: 'unités obligatoires avec ce R', items: [
          ['P', 'kPa'],
          ['V', 'L'],
          ['n', 'mol'],
          ['T', 'K'],
        ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'form', h: 'formes utiles', items: [
          ['nombre de moles', 'n = {{PV|RT}}'],
          ['avec la masse', 'PV = {{m|M}}RT'],
          ['masse molaire', 'M = {{mRT|PV}}'],
          ['masse volumique', 'ρ = {{m|V}} = {{PM|RT}}'],
        ] } ],
      [ { t: 'list', h: 'quand l\'utiliser ?', items: [
          'On connaît 3 des 4 variables et on cherche la 4<sup>e</sup>.',
          'Il n\'y a **qu\'un seul état** du gaz.',
          'Trouver la **masse molaire** d\'un gaz inconnu → l\'identifier.',
          'Si on a deux états → loi générale.',
        ] } ],
    ] },
    { t: 'box', h: 'vérification', f: 'à TPN : V = {{1 × 8,314 × 273|101,3}} ≈ 22,4 L pour 1 mol ✓' },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Nombre de moles dans une bonbonne de 10,0 L à 25 °C et 150 kPa.',
      s: [ 'n = {{PV|RT}} = {{150 × 10,0|8,314 × 298}}', 'n ≈ 0,605 mol' ] },
    { t: 'ex', h: 'Exemple 2 —', q: '1,00 g d\'un gaz inconnu occupe 0,785 L à 100 kPa et 300 K. Quel gaz ?',
      s: [ 'M = {{mRT|PV}} = {{1,00 × 8,314 × 300|100 × 0,785}}', 'M ≈ 31,8 g/mol' ],
      r: 'probablement O<sub>2</sub> (32,00 g/mol)' },
    { t: 'ex', h: 'Exemple 3 —', q: 'Pression de 0,500 mol de N<sub>2</sub> dans 2,00 L à 20 °C.',
      s: [ 'P = {{nRT|V}} = {{0,500 × 8,314 × 293|2,00}} ≈ 609 kPa' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Volume de 8,80 g de CO<sub>2</sub> à 30 °C et 95,0 kPa.',
      s: [ 'n = {{8,80|44,01}} ≈ 0,200 mol', 'V = {{nRT|P}} = {{0,200 × 8,314 × 303|95,0}} ≈ 5,30 L' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Utiliser des mL, des °C ou des atm avec R = 8,314.',
          'Utiliser PV = nRT quand le problème a deux états.',
          'Oublier de convertir la masse en moles.',
        ] } ],
      [ { t: 'retenir', items: [
          'PV = nRT, R = 8,314.',
          'kPa, L, mol, K.',
          'M = mRT / PV pour identifier un gaz.',
        ] } ],
    ] },
  ],
},

/* ============ 10. Dalton ============ */
dalton: {
  bulle: 'loi de dalton',
  sous: 'La loi de Dalton (pressions partielles)',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [
          'Dans un **mélange de gaz** qui ne réagissent pas entre eux, chaque gaz exerce sa propre pression, comme s\'il était seul : c\'est sa **pression partielle**.',
        ] },
        { t: 'box', f: 'P<sub>totale</sub> = P<sub>1</sub> + P<sub>2</sub> + P<sub>3</sub> + …' } ],
      [ { t: 'form', h: 'avec la fraction molaire', items: [
          ['fraction molaire', 'x<sub>A</sub> = {{n<sub>A</sub>|n<sub>totale</sub>}}'],
          ['pression partielle', 'P<sub>A</sub> = x<sub>A</sub> × P<sub>totale</sub>'],
        ], note: 'La pression partielle est proportionnelle au nombre de moles du gaz.' } ],
    ] },
    { t: 'list', h: 'gaz recueilli sur l\'eau', items: [
      'Quand on recueille un gaz par déplacement d\'eau, il est mélangé à de la **vapeur d\'eau**.',
      'P<sub>gaz sec</sub> = P<sub>totale</sub> − P<sub>vapeur d\'eau</sub> (valeur dans une table ; elle dépend de la température, ≈ 3,17 kPa à 25 °C).',
    ] },
    { t: 'list', h: 'exemples de la vie courante', items: [
      'L\'air : environ 78 % de N<sub>2</sub> et 21 % de O<sub>2</sub> → à 101,3 kPa, P(O<sub>2</sub>) ≈ 21 kPa.',
      'En altitude, la pression partielle d\'O<sub>2</sub> baisse : on respire plus difficilement.',
      'Les plongeurs utilisent des mélanges gazeux adaptés à la profondeur.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Un mélange contient 2,0 mol de N<sub>2</sub> et 0,50 mol de O<sub>2</sub>. P<sub>totale</sub> = 150 kPa. Pressions partielles ?',
      s: [ 'n<sub>totale</sub> = 2,5 mol', 'x(N<sub>2</sub>) = {{2,0|2,5}} = 0,80 → P = 0,80 × 150 = 120 kPa', 'x(O<sub>2</sub>) = {{0,50|2,5}} = 0,20 → P = 0,20 × 150 = 30 kPa', 'vérif. : 120 + 30 = 150 ✓' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'On recueille du H<sub>2</sub> sur l\'eau à 25 °C. P<sub>totale</sub> = 101,3 kPa ; P<sub>vapeur</sub> = 3,17 kPa. P(H<sub>2</sub>) ?',
      s: [ 'P(H<sub>2</sub>) = 101,3 − 3,17 ≈ 98,1 kPa' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Pressions partielles : He 40 kPa, Ne 25 kPa, Ar 35 kPa. P<sub>totale</sub> et fraction molaire de He ?',
      s: [ 'P<sub>totale</sub> = 40 + 25 + 35 = 100 kPa', 'x(He) = {{40|100}} = 0,40' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier de soustraire la vapeur d\'eau pour un gaz recueilli sur l\'eau.',
          'Calculer la fraction molaire avec des grammes au lieu des moles.',
        ] } ],
      [ { t: 'retenir', items: [
          'P<sub>totale</sub> = somme des pressions partielles.',
          'P<sub>A</sub> = x<sub>A</sub> P<sub>totale</sub>.',
          'Gaz sur l\'eau : − P<sub>vapeur</sub>.',
        ] } ],
    ] },
  ],
},

/* ============ 11. Stœchiométrie des gaz ============ */
'stoechio-gaz': {
  bulle: 'stœchiométrie des gaz',
  sous: 'La stœchiométrie des gaz',
  recto: [
    { t: 'txt', p: [ 'On combine l\'équation balancée (rapports en moles) avec les lois des gaz pour passer des **litres de gaz** aux **moles**, et inversement.' ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'les 3 ponts vers les moles', items: [
          'Masse → n = {{m|M}}.',
          'Gaz à TPN ou TAPN → n = {{V|V<sub>m</sub>}} (22,4 ou 24,5 L/mol).',
          'Gaz à d\'autres conditions → n = {{PV|RT}}.',
          'Solution → n = C × V.',
        ] } ],
      [ { t: 'box', h: 'loi des volumes combinés', f: 'Aux mêmes T et P, les <b>volumes</b> de gaz sont dans le même rapport que les <b>coefficients</b>.', note: 'On peut alors travailler directement en litres, sans passer par les moles.' } ],
    ] },
    { t: 'list', h: 'démarche', items: [
      '1. Écrire et **balancer** l\'équation.',
      '2. Convertir la donnée en **moles**.',
      '3. Utiliser le **rapport des coefficients**.',
      '4. Convertir les moles trouvées dans l\'unité demandée (g, L, mol/L).',
      '5. Vérifier le réactif limitant s\'il y a deux réactifs.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Zn + 2 HCl → ZnCl<sub>2</sub> + H<sub>2</sub>. Volume de H<sub>2</sub> à TAPN produit par 6,54 g de Zn (HCl en excès) ?',
      s: [ 'n(Zn) = {{6,54|65,38}} ≈ 0,100 mol', 'n(H<sub>2</sub>) = 0,100 mol // rapport 1 : 1', 'V = 0,100 × 24,5 = 2,45 L' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'N<sub>2</sub> + 3 H<sub>2</sub> → 2 NH<sub>3</sub>. Volume de NH<sub>3</sub> produit par 6,0 L de H<sub>2</sub> (mêmes T et P) ?',
      s: [ 'V(NH<sub>3</sub>) = 6,0 L × {{2|3}} = 4,0 L // volumes combinés' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'C<sub>3</sub>H<sub>8</sub> + 5 O<sub>2</sub> → 3 CO<sub>2</sub> + 4 H<sub>2</sub>O. Pour brûler 10 L de propane (mêmes T et P) ?',
      s: [ 'O<sub>2</sub> nécessaire = 10 × 5 = 50 L', 'CO<sub>2</sub> produit = 10 × 3 = 30 L' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Même réaction qu\'en 1 : quelle masse de Zn faut-il pour produire 1,50 L de H<sub>2</sub> à 20 °C et 98,0 kPa ?',
      s: [ 'n(H<sub>2</sub>) = {{98,0 × 1,50|8,314 × 293}} ≈ 0,0603 mol', 'n(Zn) = 0,0603 mol', 'm = 0,0603 × 65,38 ≈ 3,95 g' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Utiliser le rapport des coefficients avec des grammes.',
          'Appliquer les volumes combinés à un liquide ou un solide.',
          'Utiliser 22,4 L/mol hors des conditions TPN.',
        ] } ],
      [ { t: 'retenir', items: [
          'Tout passe par les moles.',
          'Gaz aux mêmes T, P : volumes ∝ coefficients.',
          'PV = nRT hors TPN/TAPN.',
        ] } ],
    ] },
  ],
},

});
