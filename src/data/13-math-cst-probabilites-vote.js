/* Mathématique CST — Probabilités et choix social */
(function () {
  // profil de vote réutilisé dans les feuilles 16 et 17
  const PROFIL = {
    t: 'tab', full: true, lcol: true,
    head: ['Nombre d\'électeurs', '8', '6', '5', '2'],
    rows: [
      ['1<sup>er</sup> choix', 'A', 'B', 'C', 'C'],
      ['2<sup>e</sup> choix', 'B', 'C', 'B', 'A'],
      ['3<sup>e</sup> choix', 'C', 'A', 'A', 'B'],
    ],
  };

Object.assign(DATA.feuilles['math-cst'], {

/* ============ 12. Rappels de probabilité ============ */
'proba-rappels': {
  bulle: 'probabilités : rappels',
  sous: 'Rappels : événements, calcul de probabilités et dénombrement',
  recto: [
    { t: 'cols', c: [
      [ { t: 'list', h: 'vocabulaire', items: [
          '**Expérience aléatoire** : on connaît les résultats possibles, mais on ne peut pas prévoir lequel sortira.',
          '**Univers des possibles (Ω)** : l\'ensemble de tous les résultats possibles.',
          '**Événement** : un sous-ensemble de résultats (ex. « obtenir un nombre pair »).',
          '**Événement certain** : P = 1 · **impossible** : P = 0.',
        ] } ],
      [ { t: 'list', h: 'types d\'événements', items: [
          '**Mutuellement exclusifs** (incompatibles) : ne peuvent pas se produire en même temps.',
          '**Compatibles** : peuvent se produire en même temps.',
          '**Complémentaires** (A et A\') : exclusifs, et l\'un des deux se produit toujours.',
          '**Dépendants / indépendants** : voir la feuille « probabilité conditionnelle ».',
        ] } ],
    ] },
    { t: 'form', h: 'formules', items: [
      ['Résultats équiprobables', 'P(A) = {{nombre de cas favorables|nombre de cas possibles}}'],
      ['Toujours', '0 ≤ P(A) ≤ 1'],
      ['Complémentaire', 'P(A\') = 1 − P(A)'],
      ['« A ou B »', 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)'],
      ['A et B exclusifs', 'P(A ∪ B) = P(A) + P(B)   (car P(A ∩ B) = 0)'],
      ['Probabilité géométrique', 'P = {{mesure de la région favorable|mesure de la région totale}}   (longueur, aire, volume)'],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'trois types de probabilité', items: [
          '**Théorique** : calculée par raisonnement (ex. un dé équilibré).',
          '**Fréquentielle** (expérimentale) : {{nombre de fois observé|nombre d\'essais}}.',
          '**Subjective** : basée sur un jugement ou une opinion (ex. la météo selon un expert).',
        ] } ],
      [ { t: 'list', h: 'outils pour compter', items: [
          '**Arbre**, **tableau à double entrée**, **diagramme de Venn**.',
          '**Principe de multiplication** : n<sub>1</sub> × n<sub>2</sub> × … façons.',
          '**Avec remise** : on remet l\'objet (mêmes probabilités à chaque tirage). **Sans remise** : les probabilités changent.',
        ] } ],
    ] },
    { t: 'tab', h: 'dénombrement : choisir r objets parmi n', full: true, lcol: true,
      head: ['', 'L\'ordre compte ?', 'Formule', 'Exemple'],
      rows: [
        ['**Arrangement**', 'oui', '{{n!|(n − r)!}}', 'président, vice, trésorier'],
        ['**Permutation**', 'oui, tous les objets', 'n!', 'placer 5 livres en rangée : 120'],
        ['**Combinaison**', 'non', '{{n!|r! (n − r)!}}', 'un comité de 3 élèves'],
      ],
      note: 'n! = n × (n − 1) × … × 2 × 1  (ex. 5! = 120 ; par convention, 0! = 1)' },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 1 —', q: 'On lance deux dés.',
          s: [ '36 résultats possibles // 6 × 6', 'P(somme = 7) = {{6|36}} = {{1|6}} // (1,6) (2,5) (3,4) (4,3) (5,2) (6,1)', 'P(aucun 6) = {{5|6}} × {{5|6}} = {{25|36}}', 'P(au moins un 6) = 1 − {{25|36}} = {{11|36}}' ] } ],
      [ { t: 'ex', h: 'Exemple 2 —', q: 'Choisir 3 élèves parmi 8.',
          s: [ 'comité (ordre sans importance) :', '{{8!|3! × 5!}} = {{8 × 7 × 6|3 × 2 × 1}} = 56', 'président, vice, trésorier :', '8 × 7 × 6 = 336 // l\'ordre compte' ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 3 —', q: 'Un sac contient 5 billes rouges et 3 bleues. On en tire 2 sans remise. P(2 rouges) ?',
          s: [ 'P = {{5|8}} × {{4|7}} // il reste 4 rouges sur 7', 'P = {{20|56}} = {{5|14}} ≈ 0,357' ] } ],
      [ { t: 'ex', h: 'Exemple 4 —', q: 'On tire une carte d\'un jeu de 52. P(cœur ou figure) ?',
          s: [ 'P(cœur) = {{13|52}} · P(figure) = {{12|52}} // valet, dame, roi', 'P(cœur et figure) = {{3|52}}', 'P = {{13 + 12 − 3|52}} = {{22|52}} = {{11|26}}' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 5 —', q: 'Une cible est un disque de rayon 10 cm. Le centre est un disque de rayon 2 cm. Une fléchette lancée au hasard touche la cible. P(centre) ?',
      s: [ 'P = {{π(2)²|π(10)²}} = {{4π|100π}} = 0,04' ], r: '4 %' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Additionner P(A) et P(B) sans soustraire P(A ∩ B) quand les événements sont compatibles.',
          'Oublier que, sans remise, le nombre total diminue au 2<sup>e</sup> tirage.',
          'Utiliser un arrangement quand l\'ordre ne compte pas (ou l\'inverse).',
          '« Au moins un » : plus rapide avec le complémentaire (1 − P(aucun)).',
        ] } ],
      [ { t: 'retenir', items: [
          'P = favorables ÷ possibles.',
          'P(A ou B) = P(A) + P(B) − P(A et B).',
          'Ordre compte → arrangement ; sinon → combinaison.',
          '« Au moins un » → 1 − P(aucun).',
        ] } ],
    ] },
  ],
},

/* ============ 13. Probabilité conditionnelle ============ */
'proba-conditionnelle': {
  bulle: 'probabilité conditionnelle',
  sous: 'Probabilité conditionnelle, événements dépendants et indépendants',
  recto: [
    { t: 'cols', w: '1.2fr 1fr', c: [
      [ { t: 'txt', p: [
          'La **probabilité conditionnelle** est la probabilité qu\'un événement A se produise **sachant que** l\'événement B s\'est déjà produit.',
          'On la note **P(A | B)** et on lit « probabilité de A sachant B ».',
          'L\'information « B s\'est produit » **réduit l\'univers** : on ne regarde plus que les cas où B est vrai.',
        ] } ],
      [ { t: 'box', h: 'la formule', f: 'P(A | B) = {{P(A ∩ B)|P(B)}}', note: 'donc  P(A ∩ B) = P(B) × P(A | B)' } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'txt', h: 'événements indépendants', p: [
          'Le fait que B se produise ne change **pas** la probabilité de A.',
          'P(A | B) = P(A)  ⇔  **P(A ∩ B) = P(A) × P(B)**',
          'ex. lancer un dé, puis une pièce ; des tirages **avec remise**.',
        ] } ],
      [ { t: 'txt', h: 'événements dépendants', p: [
          'Le fait que B se produise **change** la probabilité de A.',
          'P(A | B) ≠ P(A)',
          'ex. des tirages **sans remise** ; « être en sec 5 » et « avoir son permis ».',
        ] } ],
    ] },
    { t: 'box', f: 'Exclusifs ≠ indépendants ! Deux événements exclusifs (de probabilités non nulles) sont toujours <b>dépendants</b> : si l\'un arrive, l\'autre devient impossible.' },
    { t: 'cols', c: [
      [ { t: 'list', h: 'avec un tableau à double entrée', items: [
          'P(A | B) = {{nombre dans la case « A et B »|total de la ligne (ou colonne) B}}',
          'On lit seulement la ligne ou la colonne de la condition.',
        ] } ],
      [ { t: 'list', h: 'avec un arbre', items: [
          'Les probabilités sur les branches du 2<sup>e</sup> niveau sont **conditionnelles**.',
          'On **multiplie** le long d\'un chemin ; on **additionne** les chemins qui mènent au même événement.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'tab', h: 'Exemple 1 — sondage auprès de 200 élèves', full: true, lcol: true,
      head: ['', 'Fait du sport', 'Pas de sport', 'Total'],
      rows: [ ['Sec 4', '60', '40', '100'], ['Sec 5', '45', '55', '100'], ['Total', '105', '95', '200'] ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: '', q: '',
          s: [ 'P(sport | sec 5) = {{45|100}} = 0,45 // ligne « sec 5 » seulement', 'P(sec 5 | sport) = {{45|105}} = {{3|7}} ≈ 0,43 // colonne « sport »', 'P(sport) = {{105|200}} = 0,525' ] } ],
      [ { t: 'ex', h: 'Indépendants ?', q: '', p: [ 'P(sport | sec 5) = 0,45 ≠ P(sport) = 0,525. Les événements sont **dépendants** : le niveau change la probabilité de faire du sport.' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Une urne contient 4 billes vertes (V) et 6 jaunes (J). On tire 2 billes sans remise.',
      fig: { kind: 'graphe', w: 250, h: 175,
        sommets: { O: [14, 88], V: [115, 42], J: [115, 134], VV: [225, 16], VJ: [225, 64], JV: [225, 112], JJ: [225, 160] },
        labels: { O: '•', VV: 'V', VJ: 'J', JV: 'V', JJ: 'J' },
        aretes: [['O', 'V', '4/10', [-8, -8]], ['O', 'J', '6/10', [-8, 8]], ['V', 'VV', '3/9', [0, -8]], ['V', 'VJ', '6/9', [0, 8]], ['J', 'JV', '4/9', [0, -8]], ['J', 'JJ', '5/9', [0, 8]]],
        alt: 'arbre des probabilités de deux tirages sans remise', cap: '1<sup>er</sup> tirage → 2<sup>e</sup> tirage' },
      s: [
        'P(2<sup>e</sup> V | 1<sup>re</sup> V) = {{3|9}} = {{1|3}} // il reste 3 V sur 9',
        'P(V puis V) = {{4|10}} × {{3|9}} = {{12|90}}',
        'P(J puis V) = {{6|10}} × {{4|9}} = {{24|90}}',
        'P(2<sup>e</sup> V) = {{12|90}} + {{24|90}} = {{36|90}} = 0,4',
        'P(1<sup>re</sup> V | 2<sup>e</sup> V) = {{12/90|36/90}} = {{1|3}}',
      ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'On lance un dé, puis une pièce. P(6 et face) ?',
      s: [ 'indépendants : P = {{1|6}} × {{1|2}} = {{1|12}}' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Confondre P(A | B) et P(B | A) : ce n\'est pas la même division (45/100 ≠ 45/105).',
          'Diviser par le grand total au lieu du total de la condition.',
          'Croire que « exclusifs » veut dire « indépendants ».',
        ] } ],
      [ { t: 'retenir', items: [
          'P(A | B) = P(A et B) ÷ P(B).',
          'Indépendants : P(A et B) = P(A) × P(B).',
          'Arbre : × sur un chemin, + entre les chemins.',
        ] } ],
    ] },
  ],
},

/* ============ 14. Chances ============ */
chances: {
  bulle: 'chances pour et contre',
  sous: 'Chances pour et chances contre',
  recto: [
    { t: 'txt', p: [
      'Les **chances** comparent les cas favorables aux cas **défavorables** (et non au total, comme la probabilité). On les écrit sous forme de **rapport** a : b.',
    ] },
    { t: 'cols', c: [
      [ { t: 'box', h: 'chances pour', f: 'nombre de cas favorables : nombre de cas défavorables' } ],
      [ { t: 'box', h: 'chances contre', f: 'nombre de cas défavorables : nombre de cas favorables' } ],
    ] },
    { t: 'tab', h: 'passer de l\'un à l\'autre', full: true, lcol: true,
      head: ['On connaît…', 'On trouve…', 'Comment'],
      rows: [
        ['les chances pour a : b', 'la probabilité', 'P = {{a|a + b}}'],
        ['les chances contre a : b', 'la probabilité de gagner', 'P = {{b|a + b}}'],
        ['la probabilité {{m|n}}', 'les chances pour', 'm : (n − m)'],
        ['les chances pour a : b', 'les chances contre', 'b : a (on inverse)'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'à savoir', items: [
          'On **simplifie** le rapport comme une fraction : 6 : 4 = 3 : 2.',
          'Chances pour 1 : 1 → une chance sur deux (P = {{1|2}}).',
          'Des chances pour de 3 : 2 **ne veulent pas dire** P = {{3|2}} ! Une probabilité ne dépasse jamais 1. Ici, P = {{3|5}}.',
          'Somme des deux termes = nombre total de cas.',
        ] } ],
      [ { t: 'list', h: 'dans les paris', items: [
          'Les chances contre servent souvent à fixer un **gain** : pour des chances contre de 4 : 1, un pari équitable rapporte 4 $ de gain net pour 1 $ misé.',
          'On le vérifie avec l\'espérance mathématique (feuille suivante).',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 1 —', q: 'On lance un dé. Chances d\'obtenir un nombre premier ?',
          s: [ 'favorables : 2, 3, 5 → 3', 'défavorables : 1, 4, 6 → 3', 'chances pour = 3 : 3 = 1 : 1', 'P = {{3|6}} = {{1|2}}' ] } ],
      [ { t: 'ex', h: 'Exemple 2 —', q: 'La probabilité de gagner est {{2|7}}. Chances pour et contre ?',
          s: [ 'favorables : 2 · défavorables : 7 − 2 = 5', 'chances pour = 2 : 5', 'chances contre = 5 : 2' ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 3 —', q: 'Les chances contre qu\'une équipe gagne sont de 7 : 3. Probabilité qu\'elle gagne ?',
          s: [ 'défavorables : 7 · favorables : 3 · total : 10', 'P(gagner) = {{3|10}} = 0,3', 'P(perdre) = {{7|10}} = 0,7' ] } ],
      [ { t: 'ex', h: 'Exemple 4 —', q: 'Une roue a 8 secteurs égaux, dont 3 rouges. Chances pour « rouge » ?',
          s: [ 'favorables : 3 · défavorables : 5', 'chances pour = 3 : 5', 'P(rouge) = {{3|8}}' ] } ],
    ] },
    { t: 'ex', h: 'Exemple 5 —', q: 'Dans une classe de 30 élèves, les chances pour qu\'un élève pris au hasard ait un emploi sont de 2 : 3. Combien d\'élèves ont un emploi ?',
      s: [ 'P(emploi) = {{2|2 + 3}} = {{2|5}}', '{{2|5}} × 30 = 12' ], r: '12 élèves' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Écrire les chances comme une fraction favorables ÷ total : ça, c\'est la **probabilité**.',
          'Inverser pour et contre.',
          'Oublier de simplifier le rapport.',
        ] } ],
      [ { t: 'retenir', items: [
          'Pour = favorables : défavorables.',
          'Contre = défavorables : favorables.',
          'Chances pour a : b → P = a ÷ (a + b).',
        ] } ],
    ] },
  ],
},

/* ============ 15. Espérance mathématique ============ */
esperance: {
  bulle: 'espérance mathématique',
  sous: 'Espérance mathématique et jeu équitable',
  recto: [
    { t: 'cols', w: '1.2fr 1fr', c: [
      [ { t: 'txt', p: [
          'L\'**espérance mathématique** E est le **gain moyen** (ou la perte moyenne) par partie si on jouait un très grand nombre de fois.',
          'On multiplie chaque résultat possible par sa probabilité, puis on additionne.',
        ] } ],
      [ { t: 'box', h: 'formule', f: 'E = Σ (gain net × probabilité)', note: 'gain net = montant reçu − mise' } ],
    ] },
    { t: 'form', h: 'deux façons équivalentes', items: [
      ['Avec les gains nets', 'E = g<sub>1</sub> · p<sub>1</sub> + g<sub>2</sub> · p<sub>2</sub> + … (une perte est un gain négatif)'],
      ['Avec les montants reçus', 'E = (montant reçu<sub>1</sub> · p<sub>1</sub> + montant reçu<sub>2</sub> · p<sub>2</sub> + …) − mise'],
    ], note: 'La somme des probabilités de tous les résultats doit donner 1.' },
    { t: 'tab', h: 'interpréter E (du point de vue du joueur)', full: true, lcol: true,
      head: ['Valeur', 'Le jeu est…', 'À long terme'],
      rows: [
        ['E = 0', '**équitable**', 'le joueur ne gagne ni ne perd en moyenne'],
        ['E > 0', '**favorable** au joueur', 'le joueur gagne en moyenne E $ par partie'],
        ['E < 0', '**défavorable** au joueur', 'le joueur perd en moyenne ; l\'organisateur gagne'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'rendre un jeu équitable', items: [
          'On pose **E = 0** et on résout pour trouver la mise ou le gain manquant.',
          'On peut changer la mise, un prix ou une probabilité.',
        ] } ],
      [ { t: 'list', h: 'l\'espérance ailleurs', items: [
          'Pas seulement de l\'argent : points à un jeu, nombre moyen de clients, etc.',
          'Loteries et casinos : E est toujours négative pour le joueur.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'On mise 5 $ et on lance un dé. Un 6 : on reçoit 20 $. Un 5 : on reçoit 10 $. Sinon, rien. Le jeu est-il équitable ?',
      s: [
        'gains nets : 6 → 20 − 5 = +15 · 5 → 10 − 5 = +5 · autre → −5',
        'E = 15 × {{1|6}} + 5 × {{1|6}} + (−5) × {{4|6}}',
        'E = {{15 + 5 − 20|6}} = 0',
      ],
      r: 'E = 0 : le jeu est équitable' },
    { t: 'ex', h: 'Exemple 2 —', q: 'Une loterie vend 1000 billets à 2 $. Il y a 1 prix de 500 $ et 5 prix de 50 $.',
      s: [
        'montant reçu moyen = 500 × {{1|1000}} + 50 × {{5|1000}} = 0,50 + 0,25 = 0,75',
        'E = 0,75 − 2 = −1,25',
      ],
      r: 'E = −1,25 $ : défavorable, on perd en moyenne 1,25 $ par billet' },
    { t: 'ex', h: 'Exemple 3 —', q: 'On mise 3 $ et on tire une carte d\'un jeu de 52. Si c\'est un as, on reçoit x $. Quel montant x rend le jeu équitable ?',
      s: [ 'P(as) = {{4|52}} = {{1|13}}', 'E = x × {{1|13}} − 3 = 0', 'x = 39' ],
      r: 'il faut remettre 39 $ au joueur (gain net de 36 $)' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier de soustraire la mise (confondre montant reçu et gain net).',
          'Soustraire la mise deux fois : une fois dans chaque gain net ET à la fin.',
          'Oublier le cas « on ne gagne rien » (gain net = −mise).',
          'Vérifier : la somme des probabilités doit être 1.',
        ] } ],
      [ { t: 'retenir', items: [
          'E = Σ gain net × probabilité.',
          'E = 0 → équitable.',
          'E < 0 → défavorable au joueur.',
          'Rendre équitable : poser E = 0.',
        ] } ],
    ] },
  ],
},

/* ============ 16. Procédures de vote ============ */
vote: {
  bulle: 'procédures de vote',
  sous: 'Les procédures de vote (théorie du choix social)',
  recto: [
    { t: 'txt', p: [
      'Une **procédure de vote** est une règle qui permet de choisir un gagnant à partir des préférences des électeurs. Avec le même bulletin, des procédures différentes peuvent donner des **gagnants différents** !',
      'Un **bulletin préférentiel** classe tous les candidats : 1<sup>er</sup> choix, 2<sup>e</sup> choix, etc.',
    ] },
    { t: 'tab', full: true, lcol: true,
      head: ['Procédure', 'Comment on trouve le gagnant'],
      rows: [
        ['**Majorité** (absolue)', 'le candidat qui a **plus de 50 %** des 1<sup>ers</sup> choix. Il peut ne pas y en avoir.'],
        ['**Pluralité** (majorité relative)', 'le candidat qui a le **plus** de 1<sup>ers</sup> choix, même sans 50 %.'],
        ['**Borda**', 'on donne des points selon le rang : avec n candidats, n − 1 points pour un 1<sup>er</sup> choix, …, 0 pour le dernier. Le plus de points gagne.'],
        ['**Condorcet**', 'on compare les candidats **deux à deux** (duels). Le gagnant bat **tous** les autres en duel. Il peut ne pas exister.'],
        ['**Élimination** (vote alternatif)', 'on élimine le candidat qui a le moins de 1<sup>ers</sup> choix et on transfère ses votes au choix suivant. On recommence jusqu\'à ce qu\'un candidat ait la majorité.'],
        ['**Second tour** (deux tours)', 'si personne n\'a la majorité, les 2 premiers s\'affrontent dans un second vote.'],
        ['**Assentiment** (approbation)', 'chaque électeur vote pour **tous** les candidats qu\'il accepte. Le plus de votes gagne.'],
        ['**Vote pondéré**', 'certains votes comptent plus que d\'autres (ex. un vote vaut 2 points).'],
      ],
      note: 'Pour Borda, certains manuels donnent n points au 1<sup>er</sup> choix, …, 1 point au dernier : le classement final est le même.' },
    { t: 'cols', c: [
      [ { t: 'list', h: 'le seuil de majorité', items: [
          'Majorité = plus de la moitié : avec 21 électeurs, il faut **11** votes ; avec 20, il en faut **11** aussi.',
        ] } ],
      [ { t: 'list', h: 'le vocabulaire québécois', items: [
          'Aux élections provinciales, on utilise le **scrutin uninominal à un tour** : c\'est la **pluralité** dans chaque circonscription.',
        ] } ],
    ] },
  ],
  verso: [
    Object.assign({}, PROFIL, { h: 'Exemple — 21 électeurs, 3 candidats (A, B, C)' }),
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Majorité :', q: 'il faut 11 votes. A : 8, B : 6, C : 7 → **personne**.' },
        { t: 'ex', h: 'Pluralité :', q: 'A a le plus de 1<sup>ers</sup> choix (8) → **A gagne**.' },
        { t: 'ex', h: 'Borda', q: '(2 pts, 1 pt, 0 pt) :',
          s: [ 'A : 8 × 2 + 2 × 1 = 18', 'B : 6 × 2 + (8 + 5) × 1 = 25', 'C : (5 + 2) × 2 + 6 × 1 = 20', 'total : 18 + 25 + 20 = 63 = 3 × 21 ✓' ],
          r: 'B gagne' } ],
      [ { t: 'ex', h: 'Condorcet', q: '(duels) :',
          s: [ 'A contre B : 8 + 2 = 10 · 6 + 5 = 11 → B', 'A contre C : 8 · 6 + 5 + 2 = 13 → C', 'B contre C : 8 + 6 = 14 · 5 + 2 = 7 → B' ],
          r: 'B bat tout le monde : B gagne' },
        { t: 'ex', h: 'Élimination :', q: 'B a le moins de 1<sup>ers</sup> choix (6) → éliminé. Ses 6 électeurs vont à leur 2<sup>e</sup> choix, C.',
          s: [ 'C : 7 + 6 = 13 · A : 8' ], r: 'C gagne (13 &gt; 11)' },
        { t: 'ex', h: 'Assentiment', q: '(si chacun approuve ses 2 premiers choix) : A : 8 + 2 = 10 · B : 8 + 6 + 5 = 19 · C : 6 + 5 + 2 = 13 → **B gagne**.' } ],
    ] },
    { t: 'txt', h: 'bilan', p: [ 'Même bulletin, trois gagnants possibles : **A** (pluralité), **B** (Borda, Condorcet, assentiment) et **C** (élimination). Le choix de la procédure est donc une décision importante.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Confondre majorité (plus de 50 %) et pluralité (le plus de votes).',
          'Dans Borda, oublier de multiplier les points par le nombre d\'électeurs.',
          'À l\'élimination, transférer les votes au mauvais candidat : on prend le choix suivant **encore en course**.',
        ] } ],
      [ { t: 'retenir', items: [
          'Vérifie Borda : total des points = points par bulletin × électeurs.',
          'Condorcet : duels deux à deux.',
          'Une procédure différente peut changer le gagnant.',
        ] } ],
    ] },
  ],
},

/* ============ 17. Analyser un vote ============ */
'vote-analyse': {
  bulle: 'analyser un vote',
  sous: 'Critères d\'équité et paradoxes des procédures de vote',
  recto: [
    { t: 'txt', p: [
      'Pour juger si une procédure est « juste », on vérifie si elle respecte des **critères d\'équité**. Aucune procédure ne les respecte tous.',
    ] },
    { t: 'list', h: 'les critères', items: [
      '**Critère de la majorité** : si un candidat a la majorité des 1<sup>ers</sup> choix, il doit gagner.',
      '**Critère de Condorcet** : si un candidat bat tous les autres en duel, il doit gagner.',
      '**Critère de monotonie** : si un gagnant monte dans le classement de certains électeurs, il doit rester gagnant.',
      '**Critère d\'indépendance** (des options non pertinentes) : si un candidat perdant se retire, le gagnant ne doit pas changer.',
    ] },
    { t: 'tab', h: 'qui respecte quoi ?', full: true, lcol: true,
      head: ['Procédure', 'Majorité', 'Condorcet', 'Monotonie', 'Indépendance'],
      rows: [
        ['Pluralité', '✓', '✗ peut échouer', '✓', '✗ peut échouer'],
        ['Borda', '✗ peut échouer', '✗ peut échouer', '✓', '✗ peut échouer'],
        ['Élimination', '✓', '✗ peut échouer', '✗ peut échouer', '✗ peut échouer'],
        ['Condorcet', '✓', '✓', '✓', '✓ *'],
      ],
      note: '* La méthode de Condorcet ne désigne pas toujours de gagnant (paradoxe de Condorcet).' },
    { t: 'cols', c: [
      [ { t: 'txt', h: 'paradoxe de Condorcet', p: [
          'Les préférences du groupe peuvent **tourner en rond** : A bat B, B bat C, mais C bat A. Il n\'y a alors aucun gagnant de Condorcet.',
        ] } ],
      [ { t: 'txt', h: 'théorème d\'Arrow', p: [
          'Avec 3 candidats ou plus, **aucune** procédure de vote ne peut respecter tous les critères d\'équité en même temps.',
        ] } ],
    ] },
    { t: 'list', h: 'aussi à connaître', items: [
      '**Vote stratégique** : un électeur ne vote pas selon ses vraies préférences pour nuire à un candidat ou éviter de « perdre son vote ».',
      'Choisir une procédure selon le contexte : Borda favorise un candidat de **compromis** ; la pluralité est simple et rapide.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 — Borda ne respecte pas la majorité', q: '6 électeurs : A > B > C · 5 électeurs : B > C > A',
      s: [ 'A a 6 votes sur 11 : la majorité', 'Borda A = 6 × 2 + 5 × 0 = 12', 'Borda B = 6 × 1 + 5 × 2 = 16', 'Borda C = 6 × 0 + 5 × 1 = 5' ],
      p: [ 'B gagne avec Borda même si A a la majorité : le critère de la majorité **n\'est pas respecté**.' ] },
    { t: 'ex', h: 'Exemple 2 — paradoxe de Condorcet', q: '3 électeurs : A > B > C · B > C > A · C > A > B',
      s: [ 'A contre B : 2 contre 1 → A', 'B contre C : 2 contre 1 → B', 'C contre A : 2 contre 1 → C' ],
      p: [ 'Chaque candidat perd un duel : **pas de gagnant** de Condorcet.' ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Exemple 3 — pluralité et indépendance', q: 'Avec le bulletin de la feuille « procédures de vote », A gagne à la pluralité (8 votes). Si B (perdant) se retire, ses 6 électeurs votent C.',
          s: [ 'C : 7 + 6 = 13 · A : 8' ],
          p: [ 'C gagne : le retrait d\'un perdant a changé le gagnant → critère d\'indépendance **non respecté**.' ] } ],
      [ { t: 'ex', h: 'Exemple 4 — pluralité et Condorcet', q: 'Même bulletin : B est le gagnant de Condorcet, mais la pluralité élit A.',
          p: [ 'Pire : A perd tous ses duels (10 à 11 contre B, 8 à 13 contre C). La pluralité peut élire un **perdant de Condorcet**.' ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Dire qu\'une procédure « respecte » un critère à partir d\'un seul exemple : un exemple ne peut que montrer qu\'elle **échoue**.',
          'Confondre le paradoxe de Condorcet avec une égalité.',
        ] } ],
      [ { t: 'retenir', items: [
          '4 critères : majorité, Condorcet, monotonie, indépendance.',
          'Arrow : aucune procédure parfaite.',
          'Un contre-exemple suffit pour montrer qu\'un critère n\'est pas respecté.',
        ] } ],
    ] },
  ],
},

});
})();
