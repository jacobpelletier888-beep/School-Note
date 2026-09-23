/* Physique — Travail et énergie */
Object.assign(DATA.feuilles['physique'], {

/* ============ 18. Travail ============ */
travail: {
  bulle: 'le travail',
  sous: 'Le travail d\'une force',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [
          'En physique, une force effectue un **travail** quand elle **déplace** son point d\'application. Le travail est un **transfert d\'énergie**.',
        ] },
        { t: 'box', f: 'W = F d cos θ', note: 'W en joules (J) · F en N · d en m · θ = angle entre la force et le déplacement' },
        { t: 'form', items: [
          ['unité', '1 J = 1 N·m'],
          ['force parallèle au déplacement', 'W = Fd (θ = 0°)'],
        ] } ],
      [ { t: 'tab', h: 'le signe du travail', full: true, lcol: true,
          head: ['Angle θ', 'Travail', 'Exemple'],
          rows: [
            ['0°', 'positif, maximal', 'pousser un chariot vers l\'avant'],
            ['entre 0° et 90°', 'positif', 'tirer un traîneau avec une corde inclinée'],
            ['**90°**', '**nul**', 'porter un sac en marchant à l\'horizontale'],
            ['180°', 'négatif', 'frottement, freinage'],
          ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'pas de travail si…', items: [
          'il n\'y a **pas de déplacement** (pousser un mur, tenir un sac immobile) ;',
          'la force est **perpendiculaire** au déplacement (la force normale sur un objet qui glisse, le poids d\'un objet déplacé horizontalement).',
        ] } ],
      [ { t: 'list', h: 'cas utiles', items: [
          'Soulever un objet à vitesse constante : W = mgh (F = mg).',
          'Travail total = somme des travaux = travail de la force résultante.',
          '**Théorème de l\'énergie cinétique** : W<sub>total</sub> = ΔE<sub>k</sub>.',
          'Sur un graphique F-d, l\'**aire** sous la courbe = travail.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'On tire un traîneau sur 20 m avec une force de 50 N inclinée à 30° par rapport au sol.',
      s: [ 'W = 50 × 20 × cos 30°', 'W ≈ 866 J' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'On soulève une boîte de 10 kg de 2,0 m à vitesse constante.',
      s: [ 'F = mg = 98 N (vers le haut)', 'W = 98 × 2,0 = 196 J' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Un élève porte son sac de 8 kg sur 50 m dans un corridor horizontal. Travail de la force qu\'il exerce pour le tenir ?',
      p: [ 'La force est verticale, le déplacement horizontal : θ = 90° → **W = 0 J**. (Il se fatigue quand même : ses muscles dépensent de l\'énergie, mais le sac ne gagne aucune énergie.)' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Un frottement de 30 N agit sur une boîte qui glisse sur 4,0 m.',
      s: [ 'W = 30 × 4,0 × cos 180° = −120 J // l\'énergie est retirée (chaleur)' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier cos θ quand la force est inclinée.',
          'Dire qu\'on fait un travail en poussant un mur immobile.',
          'Utiliser la masse au lieu de la force (mg !).',
        ] } ],
      [ { t: 'retenir', items: [
          'W = Fd cos θ, en J.',
          'Force ⟂ déplacement → W = 0.',
          'W total = ΔE<sub>k</sub>.',
        ] } ],
    ] },
  ],
},

/* ============ 19. Puissance ============ */
puissance: {
  bulle: 'la puissance',
  sous: 'La puissance mécanique',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [ 'La **puissance** est la **rapidité** à laquelle un travail est effectué (ou une énergie est transformée).' ] },
        { t: 'box', f: 'P = {{W|Δt}} = {{E|Δt}}', note: 'P en watts (W) · W ou E en J · Δt en s' },
        { t: 'form', h: 'autre forme (vitesse constante)', items: [
          ['', 'P = Fv'],
        ] } ],
      [ { t: 'form', h: 'unités', items: [
          ['watt', '1 W = 1 J/s'],
          ['kilowatt', '1 kW = 1000 W'],
          ['cheval-vapeur', '1 hp ≈ 746 W'],
          ['kilowattheure', '1 kWh = 3,6 × 10<sup>6</sup> J (énergie, pas puissance !)'],
        ] } ],
    ] },
    { t: 'list', h: 'à comprendre', items: [
      'Deux élèves montent le même escalier : ils font le même travail, mais celui qui court développe une **puissance** plus grande.',
      'Un moteur plus puissant fait le même travail en **moins de temps**.',
      'Hydro-Québec facture l\'**énergie** en kWh : énergie = puissance × temps.',
    ] },
    { t: 'box', h: 'rendement', f: 'rendement = {{énergie (ou travail) utile|énergie consommée}} × 100 %' },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Une élève de 60 kg monte un escalier de 3,0 m de haut en 4,0 s. Puissance ?',
      s: [ 'W = mgh = 60 × 9,8 × 3,0 = 1764 J', 'P = {{1764|4,0}} = 441 W' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Un moteur tire une charge avec une force de 2000 N à 1,5 m/s constante. Puissance ?',
      s: [ 'P = Fv = 2000 × 1,5 = 3000 W = 3,0 kW' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Une chaufferette de 1500 W fonctionne pendant 2,0 h. Énergie consommée ?',
      s: [ 'E = P × Δt = 1,5 kW × 2,0 h = 3,0 kWh', 'en joules : 1500 × 7200 = 1,08 × 10<sup>7</sup> J' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Un moteur consomme 500 J et soulève une charge qui gagne 400 J d\'énergie. Rendement ?',
      s: [ '{{400|500}} × 100 % = 80 % // 100 J perdus en chaleur et en son' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Laisser le temps en minutes ou en heures dans P = W / Δt (en J/s).',
          'Confondre kW (puissance) et kWh (énergie).',
          'Rendement de plus de 100 % : impossible.',
        ] } ],
      [ { t: 'retenir', items: [
          'P = W / Δt, en watts.',
          'P = Fv.',
          'Rendement = utile / consommée.',
        ] } ],
    ] },
  ],
},

/* ============ 20. Énergie cinétique ============ */
'energie-cinetique': {
  bulle: 'énergie cinétique',
  sous: 'L\'énergie cinétique',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [ 'L\'**énergie cinétique** est l\'énergie que possède un objet parce qu\'il est **en mouvement**.' ] },
        { t: 'box', f: 'E<sub>k</sub> = ½mv²', note: 'E<sub>k</sub> en J · m en kg · v en m/s' } ],
      [ { t: 'list', h: 'à comprendre', items: [
          'Masse × 2 → E<sub>k</sub> × 2.',
          '**Vitesse × 2 → E<sub>k</sub> × 4** (à cause du carré).',
          'E<sub>k</sub> est toujours **positive** (ou nulle au repos).',
          'C\'est un **scalaire** : pas de direction.',
        ] } ],
    ] },
    { t: 'box', h: 'théorème de l\'énergie cinétique', f: 'W<sub>total</sub> = ΔE<sub>k</sub> = ½mv<sub>f</sub>² − ½mv<sub>i</sub>²', note: 'Le travail total fait sur un objet change son énergie cinétique.' },
    { t: 'cols', c: [
      [ { t: 'form', h: 'formules dérivées', items: [
          ['vitesse', 'v = √({{2E<sub>k</sub>|m}})'],
          ['masse', 'm = {{2E<sub>k</sub>|v<sup>2</sup>}}'],
        ] } ],
      [ { t: 'list', h: 'sécurité routière', items: [
          'À 100 km/h, une auto a environ 2 fois plus d\'énergie cinétique qu\'à 70 km/h (100<sup>2</sup> ÷ 70<sup>2</sup> ≈ 2).',
          'La distance de freinage augmente donc beaucoup avec la vitesse.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Énergie cinétique d\'une auto de 1000 kg à 72 km/h.',
      s: [ '72 km/h = 20 m/s', 'E<sub>k</sub> = ½ × 1000 × 20<sup>2</sup> = 200 000 J = 200 kJ' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Cette auto freine avec une force de frottement de 5000 N. Distance de freinage ?',
      s: [ 'W<sub>frottement</sub> = ΔE<sub>k</sub> = 0 − 200 000 = −200 000 J', '−5000 × d = −200 000', 'd = 40 m' ],
      p: [ 'À 144 km/h (vitesse × 2), E<sub>k</sub> × 4 → distance de freinage de 160 m !' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Une balle de 0,15 kg a 30 J d\'énergie cinétique. Vitesse ?',
      s: [ 'v = √({{2 × 30|0,15}}) = √400 = 20 m/s' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier le carré de v.',
          'Oublier le ½.',
          'Utiliser des km/h ou des grammes.',
        ] } ],
      [ { t: 'retenir', items: [
          'E<sub>k</sub> = ½mv<sup>2</sup>.',
          'v × 2 → E<sub>k</sub> × 4.',
          'W total = ΔE<sub>k</sub>.',
        ] } ],
    ] },
  ],
},

/* ============ 21. Énergie potentielle gravitationnelle ============ */
'energie-gravitationnelle': {
  bulle: 'énergie potentielle',
  sous: 'L\'énergie potentielle gravitationnelle',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [ 'L\'**énergie potentielle gravitationnelle** est l\'énergie emmagasinée par un objet à cause de sa **position en hauteur** dans le champ gravitationnel.' ] },
        { t: 'box', f: 'E<sub>p</sub> = mgh', note: 'm en kg · g = 9,8 N/kg · h en m (hauteur par rapport à un niveau de référence)' } ],
      [ { t: 'list', h: 'le niveau de référence', items: [
          'On choisit où h = 0 (le sol, la table, le bas d\'une pente).',
          'La **valeur** de E<sub>p</sub> dépend de ce choix, mais la **variation** ΔE<sub>p</sub> = mgΔh, non.',
          'Sous le niveau de référence, E<sub>p</sub> est négative.',
        ] } ],
    ] },
    { t: 'list', h: 'à comprendre', items: [
      'Soulever un objet à vitesse constante : le travail fourni devient de l\'E<sub>p</sub> (W = mgh).',
      'Quand l\'objet tombe, son E<sub>p</sub> se transforme en E<sub>k</sub>.',
      'Le chemin suivi n\'a pas d\'importance : seule la **différence de hauteur** compte.',
      'Exemples : eau d\'un barrage (centrale hydroélectrique), marteau levé, montagnes russes.',
    ] },
    { t: 'form', h: 'formules dérivées', items: [
      ['hauteur', 'h = {{E<sub>p</sub>|mg}}'],
      ['masse', 'm = {{E<sub>p</sub>|gh}}'],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Un livre de 2,0 kg est sur une tablette à 1,5 m du sol.',
      s: [ 'E<sub>p</sub> = 2,0 × 9,8 × 1,5 = 29,4 J // référence : le sol' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Même livre, en prenant comme référence une table de 0,75 m.',
      s: [ 'h = 1,5 − 0,75 = 0,75 m', 'E<sub>p</sub> = 2,0 × 9,8 × 0,75 = 14,7 J' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Un grimpeur de 70 kg monte de 300 m en altitude. Gain d\'énergie potentielle ?',
      s: [ 'ΔE<sub>p</sub> = 70 × 9,8 × 300 ≈ 2,06 × 10<sup>5</sup> J' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'À quelle hauteur une balle de 0,50 kg a-t-elle 49 J d\'E<sub>p</sub> ?',
      s: [ 'h = {{49|0,50 × 9,8}} = 10 m' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier de préciser le niveau de référence.',
          'Utiliser la distance parcourue sur une pente au lieu de la **hauteur** verticale.',
          'Utiliser g = 10 si ton enseignant exige 9,8.',
        ] } ],
      [ { t: 'retenir', items: [
          'E<sub>p</sub> = mgh.',
          'h vertical, depuis la référence.',
          'Seule la différence de hauteur compte.',
        ] } ],
    ] },
  ],
},

/* ============ 22. Énergie potentielle élastique ============ */
'energie-elastique': {
  bulle: 'énergie élastique',
  sous: 'L\'énergie potentielle élastique',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [ 'Un ressort (ou un élastique, un arc) déformé **emmagasine** de l\'énergie : l\'**énergie potentielle élastique**. Elle est libérée quand il reprend sa forme.' ] },
        { t: 'box', f: 'E<sub>pé</sub> = ½kx²', note: 'k en N/m · x = étirement ou compression en m' } ],
      [ { t: 'list', h: 'à comprendre', items: [
          'Déformation × 2 → énergie × 4 (carré).',
          'Étirer ou comprimer de la même distance donne la même énergie.',
          'C\'est l\'**aire** du triangle sous le graphique F-x : ½ × x × kx.',
          'Valable dans la limite d\'élasticité.',
        ] } ],
    ] },
    { t: 'list', h: 'transformations typiques', items: [
      'Lance-pierre, arc : E<sub>pé</sub> → E<sub>k</sub> de la flèche.',
      'Trampoline : E<sub>k</sub> → E<sub>pé</sub> → E<sub>k</sub> → E<sub>p</sub>.',
      'Ressort vertical : échanges entre E<sub>k</sub>, E<sub>p</sub> et E<sub>pé</sub>.',
    ] },
    { t: 'form', h: 'formules dérivées', items: [
      ['déformation', 'x = √({{2E<sub>pé</sub>|k}})'],
      ['vitesse de lancement', '½kx<sup>2</sup> = ½mv<sup>2</sup> → v = x√({{k|m}}) (sans perte)'],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Un ressort de k = 200 N/m est comprimé de 10 cm. Énergie emmagasinée ?',
      s: [ 'x = 0,10 m', 'E<sub>pé</sub> = ½ × 200 × 0,10<sup>2</sup> = 1,0 J' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Ce ressort lance une bille de 20 g sur une surface sans frottement. Vitesse de la bille ?',
      s: [ '½mv<sup>2</sup> = 1,0 J', 'v = √({{2 × 1,0|0,020}}) = √100 = 10 m/s' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Si on comprime le même ressort de 20 cm, que deviennent l\'énergie et la vitesse ?',
      s: [ 'x × 2 → E × 4 = 4,0 J', 'v × 2 = 20 m/s // v proportionnelle à x' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Laisser x en cm.',
          'Confondre la force (kx) et l\'énergie (½kx<sup>2</sup>).',
          'Oublier que la masse du projectile n\'intervient pas dans E<sub>pé</sub>.',
        ] } ],
      [ { t: 'retenir', items: [
          'E<sub>pé</sub> = ½kx<sup>2</sup>.',
          'x × 2 → E × 4.',
          'E<sub>pé</sub> → E<sub>k</sub> : ½kx<sup>2</sup> = ½mv<sup>2</sup>.',
        ] } ],
    ] },
  ],
},

/* ============ 23. Conservation ============ */
conservation: {
  bulle: 'conservation de l\'énergie',
  sous: 'Conservation de l\'énergie mécanique et rendement',
  recto: [
    { t: 'cols', c: [
      [ { t: 'box', h: 'énergie mécanique', f: 'E<sub>m</sub> = E<sub>k</sub> + E<sub>p</sub> (+ E<sub>pé</sub>)' },
        { t: 'box', h: 'sans frottement', f: 'E<sub>m initiale</sub> = E<sub>m finale</sub>', note: '½mv<sub>i</sub>² + mgh<sub>i</sub> = ½mv<sub>f</sub>² + mgh<sub>f</sub>' } ],
      [ { t: 'list', h: 'la loi de conservation de l\'énergie', items: [
          'L\'énergie ne se crée pas et ne se détruit pas : elle se **transforme**.',
          'Sans frottement, l\'énergie mécanique reste **constante** : ce que l\'objet perd en E<sub>p</sub>, il le gagne en E<sub>k</sub>.',
          'Avec frottement, une partie de l\'E<sub>m</sub> devient de l\'**énergie thermique** (chaleur) : E<sub>m</sub> diminue, mais l\'énergie totale est conservée.',
        ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'form', h: 'avec frottement', items: [
          ['', 'E<sub>m i</sub> = E<sub>m f</sub> + énergie perdue'],
          ['', 'énergie perdue = F<sub>f</sub> × d'],
        ] },
        { t: 'box', h: 'rendement', f: '{{énergie utile|énergie consommée}} × 100 %' } ],
      [ { t: 'list', h: 'à comprendre', items: [
          'La masse s\'annule quand on cherche une vitesse : v = √(2gh) pour une chute depuis le repos.',
          'Au point le plus haut d\'un pendule : E<sub>p</sub> max, E<sub>k</sub> = 0 ; au point le plus bas : l\'inverse.',
          'Aucune machine n\'a un rendement de 100 %.',
        ] } ],
    ] },
    { t: 'list', h: 'démarche', items: [
      '1. Choisir un **niveau de référence** (h = 0) et deux positions (i et f).',
      '2. Écrire E<sub>m</sub> à chaque position (E<sub>k</sub> + E<sub>p</sub> + E<sub>pé</sub>).',
      '3. Égaler (ou ajouter l\'énergie perdue s\'il y a frottement), puis isoler.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Un wagon de montagnes russes part du repos d\'une hauteur de 20 m (sans frottement). Vitesse en bas (h = 0) et à 5,0 m ?',
      s: [ 'mgh<sub>i</sub> = ½mv<sup>2</sup> → v = √(2gh)', 'en bas : v = √(2 × 9,8 × 20) ≈ 19,8 m/s', 'à 5,0 m : v = √(2 × 9,8 × 15) ≈ 17,1 m/s // on a descendu 15 m' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Un pendule est lâché de 0,45 m au-dessus de son point le plus bas. Vitesse maximale ?',
      s: [ 'v = √(2 × 9,8 × 0,45) ≈ 3,0 m/s' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Un enfant de 30 kg descend une glissade de 3,0 m de haut et arrive en bas à 6,0 m/s. Énergie perdue et rendement ?',
      s: [ 'E<sub>m i</sub> = 30 × 9,8 × 3,0 = 882 J', 'E<sub>m f</sub> = ½ × 30 × 6,0<sup>2</sup> = 540 J', 'perdue : 882 − 540 = 342 J // chaleur', 'rendement : {{540|882}} × 100 % ≈ 61 %' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier que la hauteur finale n\'est pas toujours 0.',
          'Dire que l\'énergie « disparaît » avec le frottement : elle devient de la chaleur.',
          'Croire que la vitesse en bas dépend de la masse (sans frottement, non).',
        ] } ],
      [ { t: 'retenir', items: [
          'E<sub>m</sub> = E<sub>k</sub> + E<sub>p</sub> constante sans frottement.',
          'v = √(2gh) depuis le repos.',
          'Frottement → chaleur ; rendement < 100 %.',
        ] } ],
    ] },
  ],
},

});
