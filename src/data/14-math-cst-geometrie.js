/* Mathématique CST — Géométrie (figures et solides équivalents) */
Object.assign(DATA.feuilles['math-cst'], {

/* ============ 18. Figures planes équivalentes ============ */
'figures-equivalentes': {
  bulle: 'figures équivalentes',
  sous: 'Figures planes équivalentes',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [
          'Deux figures planes sont **équivalentes** si elles ont la **même aire**, peu importe leur forme.',
          'ex. un rectangle de 9 cm × 4 cm et un carré de 6 cm de côté (36 cm² chacun).',
        ] } ],
      [ { t: 'tab', full: true, lcol: true,
          head: ['Figures…', 'ont…'],
          rows: [
            ['**isométriques**', 'même forme ET mêmes mesures'],
            ['**semblables**', 'même forme, mesures proportionnelles'],
            ['**équivalentes**', 'même aire (forme libre)'],
          ],
          note: 'Isométriques ⇒ équivalentes, mais pas l\'inverse.' } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'form', h: 'formules d\'aire', items: [
          ['carré', 'A = c²'],
          ['rectangle', 'A = b × h'],
          ['parallélogramme', 'A = b × h'],
          ['triangle', 'A = {{b × h|2}}'],
          ['losange', 'A = {{D × d|2}}'],
          ['trapèze', 'A = {{(B + b) × h|2}}'],
          ['polygone régulier', 'A = {{n × c × a|2}} = {{périmètre × apothème|2}}'],
          ['disque', 'A = πr²  ·  circonférence C = 2πr'],
        ] } ],
      [ { t: 'list', h: 'propriétés à connaître', items: [
          'Parmi les **rectangles** équivalents, le **carré** a le plus petit périmètre.',
          'Parmi les **polygones à n côtés** équivalents, le polygone **régulier** a le plus petit périmètre.',
          'Plus un polygone régulier a de côtés, plus son périmètre est petit (pour une même aire).',
          'Parmi **toutes** les figures planes équivalentes, le **disque** a le plus petit périmètre.',
        ] },
        { t: 'list', h: 'outils utiles', items: [
          '**Pythagore** : a² + b² = c² (triangle rectangle, c = hypoténuse).',
          'Trouver une mesure manquante : on écrit « aire de la figure 1 = aire de la figure 2 » et on isole l\'inconnue.',
        ] } ],
    ] },
    { t: 'list', h: 'démarche', items: [
      '1. Calculer l\'aire de la figure connue.',
      '2. Écrire la formule d\'aire de l\'autre figure et l\'égaler à cette aire.',
      '3. Isoler la mesure cherchée (racine carrée si elle est au carré).',
      '4. Répondre avec les bonnes unités (cm pour une longueur, cm² pour une aire).',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Un rectangle de 18 cm sur 8 cm est équivalent à un carré. Trouver le côté du carré et comparer les périmètres.',
      s: [ 'A = 18 × 8 = 144 cm²', 'c² = 144 → c = √144 = 12 cm', 'P rectangle = 2(18 + 8) = 52 cm', 'P carré = 4 × 12 = 48 cm // plus petit ✓' ],
      r: 'côté de 12 cm ; le carré a le plus petit périmètre' },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 2 —', q: 'Un triangle de base 16 cm est équivalent à un trapèze de bases 10 cm et 6 cm, et de hauteur 5 cm. Hauteur du triangle ?',
          s: [ 'A trapèze = {{(10 + 6) × 5|2}} = 40 cm²', '{{16 × h|2}} = 40', '8h = 40 → h = 5 cm' ] } ],
      [ { t: 'ex', h: 'Exemple 3 —', q: 'Un disque est équivalent à un carré de 10 cm de côté. Rayon du disque ?',
          s: [ 'πr² = 100', 'r² = {{100|π}} ≈ 31,83', 'r ≈ 5,64 cm', 'C = 2πr ≈ 35,45 cm // < 40 cm ✓' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Un hexagone régulier de 4 cm de côté a une apothème d\'environ 3,46 cm. Il est équivalent à un rectangle de 6 cm de base. Hauteur du rectangle ?',
      s: [ 'A hexagone = {{6 × 4 × 3,46|2}} = 41,52 cm²', '6 × h = 41,52', 'h = 6,92 cm' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Confondre équivalentes (même aire) et semblables (même forme).',
          'Oublier de diviser par 2 (triangle, losange, trapèze, polygone régulier).',
          'Oublier la racine carrée quand on cherche un côté ou un rayon.',
          'Arrondir trop tôt : garde les décimales jusqu\'à la fin.',
        ] } ],
      [ { t: 'retenir', items: [
          'Équivalentes = **même aire**.',
          'Aire fixe → le carré, le polygone régulier et le disque minimisent le périmètre.',
          'Égaler les deux aires, puis isoler.',
        ] } ],
    ] },
  ],
},

/* ============ 19. Solides équivalents ============ */
'solides-equivalents': {
  bulle: 'solides équivalents',
  sous: 'Solides équivalents',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [
          'Deux solides sont **équivalents** s\'ils ont le **même volume**, peu importe leur forme.',
          'ex. un cube de 6 cm d\'arête et un prisme de 4 cm × 4 cm × 13,5 cm (216 cm³ chacun).',
        ] } ],
      [ { t: 'form', h: 'unités de capacité', items: [
          ['1 cm³', '= 1 mL'],
          ['1 dm³', '= 1 L = 1000 cm³'],
          ['1 m³', '= 1000 L'],
        ] } ],
    ] },
    { t: 'tab', h: 'formules (A<sub>b</sub> = aire de la base, P<sub>b</sub> = périmètre de la base, a = apothème)', full: true, lcol: true,
      head: ['Solide', 'Aire latérale', 'Aire totale', 'Volume'],
      rows: [
        ['cube (arête c)', '4c²', '6c²', 'c³'],
        ['prisme droit', 'P<sub>b</sub> × h', 'A<sub>L</sub> + 2A<sub>b</sub>', 'A<sub>b</sub> × h'],
        ['cylindre', '2πrh', '2πr² + 2πrh', 'πr²h'],
        ['pyramide droite régulière', '{{P<sub>b</sub> × a|2}}', 'A<sub>L</sub> + A<sub>b</sub>', '{{A<sub>b</sub> × h|3}}'],
        ['cône droit', 'πra', 'πr² + πra', '{{πr²h|3}}'],
        ['boule (sphère)', '—', '4πr²', '{{4|3}}πr³'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'propriétés à connaître', items: [
          'Parmi les **prismes rectangulaires** équivalents, le **cube** a la plus petite aire totale.',
          'Parmi les **cylindres** équivalents, celui dont la **hauteur = diamètre** (h = 2r) a la plus petite aire totale.',
          'Parmi **tous** les solides équivalents, la **boule** a la plus petite aire.',
        ] } ],
      [ { t: 'list', h: 'bon à savoir', items: [
          'Une pyramide (ou un cône) a le **tiers** du volume du prisme (ou du cylindre) de même base et de même hauteur.',
          'Dans une pyramide ou un cône : h, a et le rayon (ou l\'apothème de la base) forment un triangle rectangle → **Pythagore**.',
          'Trouver une mesure manquante : « volume du solide 1 = volume du solide 2 », puis isoler.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Un cube de 6 cm d\'arête est équivalent à un prisme à base carrée de 13,5 cm de hauteur. Côté de la base du prisme ? Quel solide a la plus petite aire ?',
      s: [ 'V cube = 6³ = 216 cm³', 'A<sub>b</sub> × 13,5 = 216 → A<sub>b</sub> = 16 cm²', 'côté = √16 = 4 cm', 'A<sub>T</sub> cube = 6 × 6² = 216 cm²', 'A<sub>T</sub> prisme = 2 × 16 + 4 × (4 × 13,5) = 32 + 216 = 248 cm² // le cube gagne ✓' ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 2 —', q: 'Un cylindre a un rayon de 3 cm et une hauteur de 8 cm. Un cône équivalent a le même rayon. Sa hauteur ?',
          s: [ 'V cylindre = π(3)²(8) = 72π ≈ 226,19 cm³', '{{π(3)² × h|3}} = 72π', '3πh = 72π → h = 24 cm' ],
          r: '24 cm (3 fois plus haut)' } ],
      [ { t: 'ex', h: 'Exemple 3 —', q: 'Rayon d\'une boule équivalente à ce cylindre ?',
          s: [ '{{4|3}}πr³ = 72π', 'r³ = 72 × {{3|4}} = 54', 'r = ∛54 ≈ 3,78 cm' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Comparer les aires du cylindre et de la boule de l\'exemple 3.',
      s: [ 'A<sub>T</sub> cylindre = 2π(3)² + 2π(3)(8) = 18π + 48π = 66π ≈ 207,35 cm²', 'A boule = 4π(3,78)² ≈ 179,5 cm² // plus petite, comme prévu ✓' ],
      p: [ 'Capacité : 226,19 cm³ = 226,19 mL ≈ 0,23 L.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier de diviser par 3 pour une pyramide ou un cône.',
          'Confondre la hauteur h et l\'apothème a d\'une pyramide ou d\'un cône.',
          'Utiliser le diamètre au lieu du rayon.',
          'Oublier la racine cubique quand on cherche une arête ou un rayon à partir d\'un volume.',
        ] } ],
      [ { t: 'retenir', items: [
          'Équivalents = **même volume**.',
          'Volume fixe : cube, cylindre h = 2r, boule → aire minimale.',
          '1 cm³ = 1 mL ; 1 dm³ = 1 L.',
        ] } ],
    ] },
  ],
},

/* ============ 20. Optimisation en géométrie ============ */
'optimisation-geometrie': {
  bulle: 'optimiser une figure',
  sous: 'Optimisation en géométrie : aire, périmètre et volume',
  recto: [
    { t: 'txt', p: [
      'On cherche la figure ou le solide qui donne la **meilleure** mesure (aire maximale, périmètre minimal, moins de matériel…) quand une autre mesure est **fixée**.',
    ] },
    { t: 'tab', h: 'les résultats à connaître', full: true, lcol: true,
      head: ['Famille', 'Mesure fixée', 'Meilleure forme'],
      rows: [
        ['rectangles', 'périmètre', '**carré** (aire maximale)'],
        ['rectangles', 'aire', '**carré** (périmètre minimal)'],
        ['polygones à n côtés', 'périmètre', '**polygone régulier** (aire maximale)'],
        ['toutes les figures planes', 'périmètre', '**disque** (aire maximale)'],
        ['enclos rectangulaire contre un mur (3 côtés à clôturer)', 'longueur de clôture', 'côté parallèle au mur = **2 ×** l\'autre côté'],
        ['prismes rectangulaires', 'volume', '**cube** (aire totale minimale)'],
        ['prismes rectangulaires', 'aire totale', '**cube** (volume maximal)'],
        ['cylindres fermés', 'volume', '**hauteur = diamètre** (h = 2r)'],
        ['tous les solides', 'volume', '**boule** (aire minimale)'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'démarche', items: [
          '1. Identifier ce qui est **fixé** et ce qu\'on veut **optimiser**.',
          '2. Utiliser la propriété du tableau pour choisir la forme.',
          '3. Trouver les dimensions à partir de la mesure fixée.',
          '4. Calculer la mesure optimale et répondre avec les unités.',
        ] } ],
      [ { t: 'list', h: 'l\'idée derrière', items: [
          'Plus une forme est « ronde » ou « régulière », moins elle a de bord pour ce qu\'elle contient.',
          'C\'est pour ça que les bulles de savon sont sphériques et que beaucoup de conserves ont une hauteur proche de leur diamètre.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 1 —', q: 'Avec 60 m de clôture, quel enclos rectangulaire a la plus grande aire ?',
          s: [ 'carré : côté = 60 ÷ 4 = 15 m', 'A = 15 × 15 = 225 m²', 'comparaison : 20 × 10 = 200 m² // plus petit' ],
          r: 'un carré de 15 m, 225 m²' } ],
      [ { t: 'ex', h: 'Exemple 2 —', q: 'Cube de 64 cm³ : arête et aire totale ?',
          s: [ 'c = ∛64 = 4 cm', 'A<sub>T</sub> = 6 × 4² = 96 cm²' ],
          p: [ 'Aucun autre prisme rectangulaire de 64 cm³ n\'utilise moins de matériel.' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Un enclos rectangulaire est appuyé contre un mur. On a 60 m de clôture pour les 3 autres côtés. Dimensions pour une aire maximale ?',
      s: [ 'x : côtés perpendiculaires au mur · y : côté parallèle au mur', '2x + y = 60 → y = 60 − 2x', 'propriété : y = 2x → 2x + 2x = 60 → x = 15 m, y = 30 m', 'A = 15 × 30 = 450 m²' ] },
    { t: 'tab', h: 'vérification avec une table de valeurs', full: true,
      head: ['x (m)', '10', '12', '15', '18', '20'],
      rows: [ ['y = 60 − 2x (m)', '40', '36', '30', '24', '20'], ['A = x × y (m²)', '400', '432', '<b>450</b>', '432', '400'] ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Une canette cylindrique doit contenir 1 L (1000 cm³) avec le moins de métal possible. Dimensions ?',
      s: [
        'aire minimale quand h = 2r',
        'πr² × 2r = 1000 → 2πr³ = 1000',
        'r³ = {{500|π}} ≈ 159,15 → r ≈ 5,42 cm',
        'h = 2r ≈ 10,84 cm',
        'A<sub>T</sub> = 2πr² + 2πrh = 6πr² ≈ 553,6 cm² // car h = 2r',
      ],
      p: [ 'Comparaison : avec r = 4 cm, h = 1000 ÷ (16π) ≈ 19,89 cm et A<sub>T</sub> ≈ 600,5 cm² : plus de métal.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Pour l\'enclos contre un mur, prendre un carré : ce n\'est pas l\'optimum (225 m² &lt; 450 m²).',
          'Confondre « volume fixe » (on minimise l\'aire) et « aire fixe » (on maximise le volume).',
          'Oublier de convertir les litres en cm³.',
        ] } ],
      [ { t: 'retenir', items: [
          'Carré, cube, polygone régulier, disque, boule : les formes optimales.',
          'Cylindre optimal : h = 2r.',
          'Contre un mur : le côté parallèle au mur = 2 × l\'autre.',
        ] } ],
    ] },
  ],
},

/* ============ GÉNÉRAL ============ */
general: {
  bulle: 'math CST : tout en 1',
  sous: 'Résumé de l\'année — Mathématique CST, secondaire 5',
  recto: [
    { t: 'cols', c: [
      [ { t: 'list', h: 'optimisation', items: [
          'Inéquation à 2 variables → **demi-plan** ; ≤ ≥ trait plein, < > pointillé ; ÷ par un négatif → on inverse.',
          '**Polygone de contraintes** = région qui respecte toutes les contraintes (+ x ≥ 0, y ≥ 0).',
          '**Sommet** = intersection de 2 droites (comparaison, substitution, réduction) qui respecte les autres contraintes.',
          '**Fonction à optimiser** Z = ax + by + c ; l\'optimum est à un **sommet**.',
          '**Droite baladeuse** : pente −{{a|b}}. Deux sommets égaux → tout le côté est optimal.',
          'Polygone ouvert → souvent pas de maximum.',
          'Scénario : un sommet reste optimal si la pente de Z est entre les pentes des 2 droites du sommet.',
        ] } ],
      [ { t: 'list', h: 'graphes', items: [
          '**Ordre** = nb de sommets ; **degré** = nb d\'arêtes au sommet ; Σ degrés = 2 × arêtes.',
          'Complet : {{n(n − 1)|2}} arêtes. Distance, diamètre, connexe.',
          '**Euler** (arêtes) : 0 sommet impair → cycle ; 2 → chaîne ; plus → aucune.',
          '**Hamilton** (sommets) : par essais.',
          '**Chaîne la plus courte** : Dijkstra (plus petit poids).',
          '**Arbre** : connexe, sans cycle, n − 1 arêtes. Valeur minimale : Kruskal ou Prim.',
          '**Chemin critique** = chemin le plus **long** = durée minimale du projet.',
          '**Nombre chromatique** χ : couleurs minimales ; triangle → χ ≥ 3 ; χ ≤ degré max + 1.',
        ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'form', h: 'probabilités', items: [
          ['P(A)', '= {{favorables|possibles}}  ·  P(A\') = 1 − P(A)'],
          ['A ou B', 'P(A) + P(B) − P(A ∩ B)'],
          ['A sachant B', 'P(A | B) = {{P(A ∩ B)|P(B)}}'],
          ['indépendants', 'P(A ∩ B) = P(A) × P(B)'],
          ['chances pour', 'favorables : défavorables → P = {{a|a + b}}'],
          ['espérance', 'E = Σ gain net × p ; E = 0 → équitable'],
          ['combinaison', '{{n!|r!(n − r)!}} (ordre sans importance)'],
        ] } ],
      [ { t: 'list', h: 'choix social', items: [
          '**Majorité** : plus de 50 %. **Pluralité** : le plus de votes.',
          '**Borda** : points selon le rang. **Condorcet** : gagne tous ses duels.',
          '**Élimination** : on retire le dernier et on transfère.',
          '**Assentiment** : on vote pour tous les candidats acceptables.',
          'Critères : majorité, Condorcet, monotonie, indépendance. **Arrow** : aucune procédure parfaite.',
        ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'figures et solides équivalents', items: [
          'Figures équivalentes : **même aire** ; solides équivalents : **même volume**.',
          'Aire fixe : carré, polygone régulier, disque → plus petit périmètre.',
          'Volume fixe : cube, cylindre h = 2r, boule → plus petite aire.',
          'Contre un mur : côté parallèle au mur = 2 × l\'autre.',
        ] } ],
      [ { t: 'form', h: 'formules clés', items: [
          ['disque', 'A = πr² ; C = 2πr'],
          ['polygone régulier', 'A = {{P × a|2}}'],
          ['prisme, cylindre', 'V = A<sub>b</sub> × h'],
          ['pyramide, cône', 'V = {{A<sub>b</sub> × h|3}}'],
          ['boule', 'V = {{4|3}}πr³ ; A = 4πr²'],
        ] } ],
    ] },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Optimisation —', q: 'sommets (0, 0), (10, 0), (6, 4), (0, 7) ; max. Z = 3x + 5y',
          s: [ 'Z = 0 · 30 · 38 · 35' ], r: 'max. 38 en (6, 4)' },
        { t: 'ex', h: 'Graphes —', q: 'degrés 2, 3, 3, 3, 1',
          s: [ '4 sommets impairs → aucune chaîne eulérienne', 'Σ = 12 → 6 arêtes' ] },
        { t: 'ex', h: 'Chemin critique —', q: 'chemins de 9, 10, 9 et 11 jours', r: 'durée minimale : 11 jours' } ],
      [ { t: 'ex', h: 'Probabilités —', q: 'urne : 4 V, 6 J, 2 tirages sans remise',
          s: [ 'P(V puis V) = {{4|10}} × {{3|9}} = {{2|15}}', 'chances pour V (1<sup>er</sup> tirage) = 4 : 6 = 2 : 3' ] },
        { t: 'ex', h: 'Espérance —', q: 'mise 5 $ ; 6 → reçoit 20 $ ; 5 → reçoit 10 $',
          s: [ 'E = {{15 + 5 − 4 × 5|6}} = 0' ], r: 'équitable' },
        { t: 'ex', h: 'Équivalence —', q: 'carré équivalent à un rectangle 18 × 8',
          s: [ 'c = √144 = 12 cm' ] } ],
    ] },
    { t: 'pieges', items: [
      'Oublier d\'**inverser** le symbole en divisant par un négatif.',
      'Prendre une intersection hors du polygone pour un sommet.',
      'Chemin critique : c\'est le chemin le plus **long**, pas le plus court.',
      'Confondre P(A | B) et P(B | A) ; confondre chances (favorables : défavorables) et probabilité (favorables ÷ total).',
      'Espérance : soustraire la mise une seule fois.',
      'Borda : multiplier les points par le nombre d\'électeurs ; vérifier le total.',
      'Pyramide et cône : diviser par 3. Racine carrée (aire) ou cubique (volume) pour revenir à une longueur.',
    ] },
    { t: 'retenir', items: [
      'Optimisation : variables → contraintes → polygone → sommets → réponse en phrase.',
      'Graphes : compte les degrés impairs (Euler), cherche le plus court (Dijkstra), le plus long (chemin critique).',
      'Probabilités : dessine un arbre ou un tableau avant de calculer.',
      'Vote : la procédure choisie peut changer le gagnant.',
      'Géométrie : la forme la plus « régulière » est toujours la plus efficace.',
    ] },
  ],
},

});
