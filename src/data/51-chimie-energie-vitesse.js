/* Chimie — Aspect énergétique des transformations et vitesse de réaction */
(function () {
  // Courbe de diagramme énergétique : plateau des réactifs (Hr), bosse du complexe activé (Hc), plateau des produits (Hp)
  const diag = (Hr, Hc, Hp) => x => {
    if (x <= 2) return Hr;
    if (x <= 5) return Hr + (Hc - Hr) * (1 - Math.cos(Math.PI * (x - 2) / 3)) / 2;
    if (x <= 8) return Hp + (Hc - Hp) * (1 + Math.cos(Math.PI * (x - 5) / 3)) / 2;
    return Hp;
  };
  // Distribution des énergies cinétiques (forme de Maxwell-Boltzmann simplifiée)
  const mb = T => E => 60 * (E / (T * T)) * Math.exp(-E / T);

Object.assign(DATA.feuilles['chimie'], {

/* ============ 12. Endo et exo ============ */
'endo-exo': {
  bulle: 'endothermique ou exothermique',
  sous: 'Réactions endothermiques et exothermiques, diagramme énergétique',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [
          'Toute transformation s\'accompagne d\'un échange d\'énergie entre le **système** (les substances qui réagissent) et le **milieu** (tout le reste).',
          'L\'**enthalpie** H est l\'énergie contenue dans une substance. On mesure la **variation d\'enthalpie** :',
        ] },
        { t: 'box', f: 'ΔH = H<sub>produits</sub> − H<sub>réactifs</sub>' } ],
      [ { t: 'tab', full: true, lcol: true,
          head: ['', '**Exothermique**', '**Endothermique**'],
          rows: [
            ['énergie', 'dégagée dans le milieu', 'absorbée du milieu'],
            ['ΔH', '**négatif** (ΔH < 0)', '**positif** (ΔH > 0)'],
            ['milieu', 'se réchauffe', 'se refroidit'],
            ['H produits', 'plus bas que les réactifs', 'plus haut que les réactifs'],
            ['dans l\'équation', 'énergie du côté des **produits**', 'énergie du côté des **réactifs**'],
          ] } ],
    ] },
    { t: 'fig', h: 'diagrammes énergétiques', figs: [
      { kind: 'plan', w: 270, h: 185, xmin: 0, xmax: 10, ymin: 0, ymax: 10, xlabels: [], ylabels: [], nx: 'progression', ny: 'H',
        courbes: [ { fn: diag(6, 8.5, 2) } ],
        segs: [ { a: [9, 6], b: [9, 2], cls: 'ln2' } ],
        pts: [ { x: 1, y: 6, lbl: 'réactifs', dx: -4, dy: -6 }, { x: 8.6, y: 2, lbl: 'produits', dx: -40, dy: 13 } ],
        droites: [ { a: [0, 6], b: [1, 6], cls: 'ln3', dash: true, lbl: 'ΔH < 0', at: [9.2, 4.2], pk: true } ],
        alt: 'diagramme d’une réaction exothermique', cap: '<b>exothermique</b> : les produits sont plus bas' },
      { kind: 'plan', w: 270, h: 185, xmin: 0, xmax: 10, ymin: 0, ymax: 10, xlabels: [], ylabels: [], nx: 'progression', ny: 'H',
        courbes: [ { fn: diag(2, 8.5, 6) } ],
        segs: [ { a: [9, 2], b: [9, 6], cls: 'ln2' } ],
        pts: [ { x: 1, y: 2, lbl: 'réactifs', dx: -4, dy: 13 }, { x: 8.6, y: 6, lbl: 'produits', dx: -40, dy: -6 } ],
        droites: [ { a: [0, 2], b: [1, 2], cls: 'ln3', dash: true, lbl: 'ΔH > 0', at: [9.2, 4.2], pk: true } ],
        alt: 'diagramme d’une réaction endothermique', cap: '<b>endothermique</b> : les produits sont plus haut' },
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'exemples exothermiques', items: [
          'combustions, respiration cellulaire, neutralisation',
          'dissolution de NaOH dans l\'eau',
          'condensation, solidification',
        ] } ],
      [ { t: 'list', h: 'exemples endothermiques', items: [
          'photosynthèse, électrolyse de l\'eau',
          'dissolution de NH<sub>4</sub>NO<sub>3</sub> (sac réfrigérant instantané)',
          'fusion, vaporisation, sublimation',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'CH<sub>4</sub> + 2 O<sub>2</sub> → CO<sub>2</sub> + 2 H<sub>2</sub>O   ΔH = −890 kJ',
      s: [ 'ΔH < 0 → exothermique', 'autre écriture : CH<sub>4</sub> + 2 O<sub>2</sub> → CO<sub>2</sub> + 2 H<sub>2</sub>O + 890 kJ // énergie avec les produits' ] },
    { t: 'ex', h: 'Exemple 2 —', q: '6 CO<sub>2</sub> + 6 H<sub>2</sub>O + 2803 kJ → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub>',
      s: [ 'énergie du côté des réactifs → endothermique', 'ΔH = +2803 kJ' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'On dissout un sel dans l\'eau et le bécher devient froid. La dissolution est-elle endo ou exo ?',
      p: [ 'Le **milieu** (eau, bécher, main) se refroidit : il a **donné** de l\'énergie au système. La dissolution est **endothermique** (ΔH > 0).' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Sur un diagramme, H<sub>réactifs</sub> = 120 kJ et H<sub>produits</sub> = 45 kJ. ΔH ?',
      s: [ 'ΔH = 45 − 120 = −75 kJ → exothermique' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Confondre système et milieu : si le bécher devient **chaud**, la réaction est **exo**.',
          'Écrire ΔH = H<sub>réactifs</sub> − H<sub>produits</sub> (c\'est l\'inverse).',
          'Oublier le signe de ΔH.',
        ] } ],
      [ { t: 'retenir', items: [
          'Exo : ΔH < 0, dégage de la chaleur.',
          'Endo : ΔH > 0, absorbe de la chaleur.',
          'ΔH = H<sub>P</sub> − H<sub>R</sub>.',
        ] } ],
    ] },
  ],
},

/* ============ 13. Énergie d'activation ============ */
'energie-activation': {
  bulle: 'énergie d\'activation',
  sous: 'Énergie d\'activation et complexe activé',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [
          'Pour réagir, les réactifs doivent d\'abord **briser des liaisons** : il faut leur fournir une énergie minimale, l\'**énergie d\'activation** (E<sub>a</sub>).',
          'Au sommet de la « bosse », les particules forment le **complexe activé** : un état instable, de très courte durée, où des liaisons se brisent pendant que d\'autres se forment.',
        ] },
        { t: 'form', h: 'lectures du diagramme', items: [
          ['E<sub>a</sub> directe', 'H<sub>complexe</sub> − H<sub>réactifs</sub>'],
          ['E<sub>a</sub> inverse', 'H<sub>complexe</sub> − H<sub>produits</sub>'],
          ['ΔH', 'H<sub>produits</sub> − H<sub>réactifs</sub> = E<sub>a</sub> directe − E<sub>a</sub> inverse'],
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 250, h: 220, xmin: 0, xmax: 10, ymin: 0, ymax: 200, xlabels: [], ticky: 50, grille: 1, nx: 'progression', ny: 'H (kJ)',
            courbes: [ { fn: diag(50, 180, 20) } ],
            segs: [ { a: [3.2, 50], b: [3.2, 180], cls: 'ln3', dash: true }, { a: [6.8, 20], b: [6.8, 180], cls: 'ln3', dash: true }, { a: [9.2, 50], b: [9.2, 20], cls: 'ln2' } ],
            droites: [ { a: [0, 50], b: [1, 50], cls: 'ln3', dash: true } ],
            pts: [ { x: 5, y: 180, lbl: 'complexe activé', dx: -40, dy: -7 } ],
            alt: 'diagramme avec énergie d’activation', cap: 'H<sub>R</sub> = 50, complexe = 180, H<sub>P</sub> = 20 (kJ)' },
        ] } ],
    ] },
    { t: 'list', h: 'à comprendre', items: [
      'Même une réaction **exothermique** a besoin d\'une énergie d\'activation (ex. une allumette pour allumer du bois).',
      'Plus E<sub>a</sub> est **petite**, plus la réaction est **rapide** (plus de collisions ont assez d\'énergie).',
      'Un **catalyseur** abaisse E<sub>a</sub> (nouveau chemin) sans changer ΔH.',
      'Réaction inverse : E<sub>a</sub> inverse = E<sub>a</sub> directe − ΔH.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Avec le diagramme du recto (H<sub>R</sub> = 50 kJ, complexe à 180 kJ, H<sub>P</sub> = 20 kJ).',
      s: [ 'E<sub>a</sub> directe = 180 − 50 = 130 kJ', 'E<sub>a</sub> inverse = 180 − 20 = 160 kJ', 'ΔH = 20 − 50 = −30 kJ // exothermique', 'vérif. : 130 − 160 = −30 ✓' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Une réaction a E<sub>a</sub> = 75 kJ et ΔH = +40 kJ. E<sub>a</sub> de la réaction inverse ?',
      s: [ 'E<sub>a</sub> inverse = E<sub>a</sub> directe − ΔH = 75 − 40 = 35 kJ' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Un catalyseur fait passer E<sub>a</sub> de 130 kJ à 70 kJ pour la même réaction. Que devient ΔH ?',
      p: [ 'ΔH **ne change pas** (−30 kJ) : le catalyseur abaisse seulement la bosse. E<sub>a</sub> inverse passe aussi de 160 à 100 kJ.' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Pourquoi une feuille de papier ne brûle-t-elle pas seule à la température de la pièce, même si la combustion est exothermique ?',
      p: [ 'Parce que l\'énergie d\'activation n\'est pas atteinte : il faut d\'abord une flamme (ou une étincelle) pour fournir E<sub>a</sub>. Ensuite, l\'énergie dégagée par la combustion entretient la réaction.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Mesurer E<sub>a</sub> à partir de 0 au lieu de partir du niveau des réactifs.',
          'Croire qu\'un catalyseur change ΔH.',
          'Confondre E<sub>a</sub> directe et inverse.',
        ] } ],
      [ { t: 'retenir', items: [
          'E<sub>a</sub> = sommet − réactifs.',
          'Complexe activé = sommet, instable.',
          'Catalyseur : E<sub>a</sub> ↓, ΔH inchangé.',
        ] } ],
    ] },
  ],
},

/* ============ 14. Enthalpie, chaleur molaire ============ */
enthalpie: {
  bulle: 'chaleur molaire de réaction',
  sous: 'Variation d\'enthalpie et chaleur molaire de réaction',
  recto: [
    { t: 'txt', p: [
      'La **chaleur molaire de réaction** est l\'énergie absorbée ou dégagée par **1 mole** d\'une substance lors d\'une transformation. Elle s\'exprime en **kJ/mol** et porte le signe de ΔH.',
    ] },
    { t: 'box', f: 'Q = n × ΔH<sub>molaire</sub>', note: 'Q : énergie totale échangée (kJ) · n : nombre de moles de la substance de référence' },
    { t: 'tab', h: 'les types', full: true, lcol: true,
      head: ['Chaleur molaire de…', 'Transformation', 'Exemple (valeur approximative)'],
      rows: [
        ['**combustion**', '1 mol d\'une substance brûle dans O<sub>2</sub>', 'CH<sub>4</sub> : −890 kJ/mol'],
        ['**formation**', '1 mol d\'un composé formée à partir de ses éléments', 'H<sub>2</sub>O(l) : −285,8 kJ/mol'],
        ['**dissolution**', '1 mol de soluté se dissout', 'NaOH : −44,5 kJ/mol · NH<sub>4</sub>NO<sub>3</sub> : +25,7 kJ/mol'],
        ['**neutralisation**', '1 mol d\'eau formée par un acide et une base', 'environ −57 kJ/mol'],
        ['**fusion**, **vaporisation**', 'changement d\'état de 1 mol', 'glace : +6,01 kJ/mol · eau : +40,7 kJ/mol'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'règles', items: [
          'Les coefficients de l\'équation sont des **moles** : ΔH correspond aux quantités écrites.',
          'Si on **double** l\'équation, on **double** ΔH.',
          'Si on **inverse** l\'équation, on **change le signe** de ΔH.',
          'L\'état (s, l, g) compte : ΔH change selon que l\'eau est liquide ou gazeuse.',
        ] } ],
      [ { t: 'list', h: 'changements d\'état', items: [
          'Endothermiques : fusion, vaporisation, sublimation.',
          'Exothermiques : solidification, condensation, déposition.',
          'La température reste constante pendant un changement d\'état.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Énergie dégagée par la combustion de 32,1 g de CH<sub>4</sub> (ΔH = −890 kJ/mol).',
      s: [ 'n = {{32,1|16,05}} = 2,00 mol', 'Q = 2,00 × (−890) = −1780 kJ' ],
      r: '1780 kJ dégagés' },
    { t: 'ex', h: 'Exemple 2 —', q: 'Énergie dégagée quand on forme 9,01 g d\'eau liquide (ΔH<sub>f</sub> = −285,8 kJ/mol).',
      s: [ 'n = {{9,01|18,02}} = 0,500 mol', 'Q = 0,500 × (−285,8) ≈ −143 kJ' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Énergie pour faire fondre 36,0 g de glace (ΔH<sub>fus</sub> = +6,01 kJ/mol).',
      s: [ 'n = {{36,0|18,02}} ≈ 2,00 mol', 'Q = 2,00 × 6,01 ≈ 12,0 kJ absorbés' ] },
    { t: 'ex', h: 'Exemple 4 —', q: '2 H<sub>2</sub> + O<sub>2</sub> → 2 H<sub>2</sub>O(l)  ΔH = −571,6 kJ. ΔH pour 2 H<sub>2</sub>O(l) → 2 H<sub>2</sub> + O<sub>2</sub> ? Et par mole d\'eau formée ?',
      s: [ 'inverse → ΔH = +571,6 kJ', 'par mole d\'eau : {{−571,6|2}} = −285,8 kJ/mol' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier de convertir la masse en moles.',
          'Garder le même signe en inversant l\'équation.',
          'Confondre la chaleur par mole et la chaleur pour l\'équation complète.',
        ] } ],
      [ { t: 'retenir', items: [
          'Q = n × ΔH.',
          '× 2 l\'équation → × 2 ΔH ; inverser → − ΔH.',
          'Combustion, formation, dissolution, neutralisation.',
        ] } ],
    ] },
  ],
},

/* ============ 15. Énergie de liaison ============ */
'energie-liaison': {
  bulle: 'énergie de liaison',
  sous: 'Énergie de liaison et calcul de ΔH',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [
          'L\'**énergie de liaison** est l\'énergie nécessaire pour **briser** 1 mol d\'une liaison entre deux atomes (à l\'état gazeux).',
          '**Briser** une liaison **absorbe** de l\'énergie (+). **Former** une liaison **dégage** la même énergie (−).',
        ] },
        { t: 'box', f: 'ΔH = Σ E(liaisons brisées) − Σ E(liaisons formées)', note: 'réactifs : liaisons brisées · produits : liaisons formées' } ],
      [ { t: 'tab', h: 'énergies moyennes (kJ/mol)', full: true,
          head: ['Liaison', 'E', 'Liaison', 'E'],
          rows: [
            ['H–H', '436', 'O–H', '463'],
            ['Cl–Cl', '242', 'C–H', '413'],
            ['H–Cl', '431', 'C=O', '799'],
            ['O=O', '498', 'C–C', '348'],
            ['N≡N', '945', 'N–H', '391'],
          ],
          note: 'Les valeurs varient légèrement selon les tables : utilise celles de ton cahier.' } ],
    ] },
    { t: 'list', h: 'démarche', items: [
      '1. Dessiner la **structure** (formule développée) de chaque molécule pour voir toutes les liaisons.',
      '2. Compter les liaisons brisées (réactifs) en tenant compte des **coefficients**.',
      '3. Compter les liaisons formées (produits).',
      '4. ΔH = brisées − formées. Si les liaisons formées sont plus fortes → ΔH < 0 (exothermique).',
    ] },
    { t: 'list', h: 'à comprendre', items: [
      'Une réaction est **exothermique** quand l\'énergie dégagée en formant les nouvelles liaisons dépasse l\'énergie absorbée pour briser les anciennes.',
      'Liaison double ou triple : plus forte qu\'une liaison simple entre les mêmes atomes.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'H<sub>2</sub> + Cl<sub>2</sub> → 2 HCl',
      s: [ 'brisées : 1 H–H + 1 Cl–Cl = 436 + 242 = 678 kJ', 'formées : 2 H–Cl = 2 × 431 = 862 kJ', 'ΔH = 678 − 862 = −184 kJ // exothermique' ] },
    { t: 'ex', h: 'Exemple 2 —', q: '2 H<sub>2</sub> + O<sub>2</sub> → 2 H<sub>2</sub>O(g)',
      s: [ 'brisées : 2 H–H + 1 O=O = 2(436) + 498 = 1370 kJ', 'formées : 4 O–H (2 par molécule × 2) = 4 × 463 = 1852 kJ', 'ΔH = 1370 − 1852 = −482 kJ' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'CH<sub>4</sub> + 2 O<sub>2</sub> → CO<sub>2</sub> + 2 H<sub>2</sub>O(g)',
      s: [ 'brisées : 4 C–H + 2 O=O = 4(413) + 2(498) = 2648 kJ', 'formées : 2 C=O + 4 O–H = 2(799) + 4(463) = 3450 kJ', 'ΔH = 2648 − 3450 = −802 kJ' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Faire formées − brisées (signe inversé).',
          'Oublier de multiplier par les coefficients.',
          'Oublier qu\'une molécule d\'eau contient **deux** liaisons O–H.',
        ] } ],
      [ { t: 'retenir', items: [
          'Briser : +E ; former : −E.',
          'ΔH = brisées − formées.',
          'Toujours dessiner les molécules.',
        ] } ],
    ] },
  ],
},

/* ============ 16. Calorimétrie ============ */
calorimetrie: {
  bulle: 'calorimétrie',
  sous: 'La calorimétrie',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [
          'La **calorimétrie** mesure l\'énergie échangée lors d\'une transformation grâce à la variation de température d\'une masse d\'eau, dans un **calorimètre** (contenant isolé).',
        ] },
        { t: 'box', f: 'Q = mcΔT', note: 'Q en J · m en g · c en J/(g·°C) · ΔT = T<sub>finale</sub> − T<sub>initiale</sub>' },
        { t: 'form', items: [
          ['capacité thermique massique de l\'eau', 'c = 4,19 J/(g·°C)'],
          ['1 mL d\'eau (ou de solution diluée)', '≈ 1 g'],
        ] } ],
      [ { t: 'list', h: 'le principe', items: [
          'Énergie **dégagée** par la réaction = énergie **absorbée** par l\'eau (et inversement).',
          'Q<sub>réaction</sub> = −Q<sub>eau</sub>',
          'L\'eau se **réchauffe** → réaction **exothermique** → ΔH < 0.',
          'L\'eau se **refroidit** → réaction **endothermique** → ΔH > 0.',
        ] },
        { t: 'box', h: 'chaleur molaire', f: 'ΔH = {{−Q<sub>eau</sub>|n}}', note: 'n : moles de la substance de référence ; convertir J → kJ' } ],
    ] },
    { t: 'list', h: 'sources d\'erreur', items: [
      'Pertes de chaleur vers l\'air ou le contenant (calorimètre mal isolé).',
      'Lecture imprécise du thermomètre ; réaction incomplète.',
      'On néglige souvent la chaleur absorbée par le calorimètre lui-même.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Énergie pour chauffer 250 g d\'eau de 20 °C à 80 °C.',
      s: [ 'Q = 250 × 4,19 × (80 − 20)', 'Q = 62 850 J ≈ 62,9 kJ' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'On dissout 2,00 g de NaOH dans 100 g d\'eau. T passe de 20,0 °C à 25,3 °C. Chaleur molaire de dissolution ?',
      s: [ 'Q<sub>eau</sub> = 100 × 4,19 × 5,3 = 2221 J = 2,221 kJ', 'n(NaOH) = {{2,00|40,00}} = 0,0500 mol', 'ΔH = {{−2,221 kJ|0,0500 mol}} ≈ −44,4 kJ/mol // exothermique : l\'eau s\'est réchauffée' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'On mélange 50 mL de HCl 1,0 mol/L et 50 mL de NaOH 1,0 mol/L. ΔT = +6,7 °C. Chaleur molaire de neutralisation ?',
      s: [ 'm ≈ 100 g · Q<sub>eau</sub> = 100 × 4,19 × 6,7 ≈ 2807 J', 'n(H<sub>2</sub>O) = 1,0 × 0,050 = 0,050 mol', 'ΔH = {{−2,807|0,050}} ≈ −56 kJ/mol' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Quelle masse d\'eau peut-on chauffer de 25 °C avec 10,0 kJ ?',
      s: [ 'm = {{Q|cΔT}} = {{10 000|4,19 × 25}} ≈ 95,5 g' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier le signe : ΔH de la réaction est l\'**opposé** de Q de l\'eau.',
          'Laisser Q en J et ΔH en kJ/mol sans convertir.',
          'Utiliser la masse du soluté au lieu de la masse d\'eau dans mcΔT.',
        ] } ],
      [ { t: 'retenir', items: [
          'Q = mcΔT, c(eau) = 4,19.',
          'Q<sub>réaction</sub> = −Q<sub>eau</sub>.',
          'ΔH = −Q / n.',
        ] } ],
    ] },
  ],
},

/* ============ 17. Loi de Hess ============ */
hess: {
  bulle: 'loi de hess',
  sous: 'La loi de Hess',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [
          'La variation d\'enthalpie d\'une réaction **ne dépend pas du chemin** suivi : si on peut obtenir une réaction en additionnant plusieurs étapes, son ΔH est la **somme** des ΔH des étapes.',
        ] },
        { t: 'box', f: 'ΔH<sub>totale</sub> = ΔH<sub>1</sub> + ΔH<sub>2</sub> + ΔH<sub>3</sub> + …' } ],
      [ { t: 'list', h: 'les 3 règles de manipulation', items: [
          '**Inverser** une équation → **changer le signe** de ΔH.',
          '**Multiplier** une équation par un nombre → **multiplier** ΔH par ce nombre.',
          '**Additionner** les équations → **additionner** les ΔH ; les substances présentes des deux côtés s\'annulent.',
        ] } ],
    ] },
    { t: 'list', h: 'démarche', items: [
      '1. Écrire l\'équation **cible** (celle dont on cherche ΔH).',
      '2. Pour chaque substance de la cible, trouver l\'équation donnée où elle apparaît **une seule fois**.',
      '3. **Inverser** l\'équation si la substance est du mauvais côté ; **multiplier** pour avoir le bon coefficient.',
      '4. Additionner ; vérifier qu\'on retrouve exactement la cible (les intermédiaires s\'annulent).',
      '5. Additionner les ΔH modifiés.',
    ] },
    { t: 'txt', h: 'à quoi ça sert ?', p: [ 'À trouver le ΔH de réactions difficiles ou impossibles à mesurer directement (ex. formation du monoxyde de carbone, qui se transforme en CO<sub>2</sub> pendant la mesure).' ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Trouver ΔH de C + ½ O<sub>2</sub> → CO, avec :',
      s: [ '(1) C + O<sub>2</sub> → CO<sub>2</sub>  ΔH<sub>1</sub> = −393,5 kJ', '(2) CO + ½ O<sub>2</sub> → CO<sub>2</sub>  ΔH<sub>2</sub> = −283,0 kJ', 'CO doit être un produit → on inverse (2) :', 'CO<sub>2</sub> → CO + ½ O<sub>2</sub>  ΔH = +283,0 kJ', '(1) + (2 inversée) : C + ½ O<sub>2</sub> → CO // CO<sub>2</sub> et ½ O<sub>2</sub> s\'annulent', 'ΔH = −393,5 + 283,0 = −110,5 kJ' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Trouver ΔH de S + <sup>3</sup>/<sub>2</sub> O<sub>2</sub> → SO<sub>3</sub>, avec :',
      s: [ '(1) S + O<sub>2</sub> → SO<sub>2</sub>  ΔH<sub>1</sub> = −296,8 kJ', '(2) 2 SO<sub>2</sub> + O<sub>2</sub> → 2 SO<sub>3</sub>  ΔH<sub>2</sub> = −197,8 kJ', 'on veut 1 SO<sub>3</sub> → (2) × ½ : SO<sub>2</sub> + ½ O<sub>2</sub> → SO<sub>3</sub>  ΔH = −98,9 kJ', '(1) + (2 × ½) : S + <sup>3</sup>/<sub>2</sub> O<sub>2</sub> → SO<sub>3</sub>', 'ΔH = −296,8 + (−98,9) = −395,7 kJ' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Inverser l\'équation sans changer le signe de ΔH.',
          'Multiplier l\'équation mais pas ΔH (ou l\'inverse).',
          'Ne pas vérifier que la somme donne exactement la cible.',
        ] } ],
      [ { t: 'retenir', items: [
          'ΔH ne dépend pas du chemin.',
          'Inverser → signe ; multiplier → × ΔH.',
          'Les intermédiaires doivent s\'annuler.',
        ] } ],
    ] },
  ],
},

/* ============ 18. Vitesse de réaction ============ */
vitesse: {
  bulle: 'vitesse de réaction',
  sous: 'La vitesse de réaction : définition et mesure',
  recto: [
    { t: 'cols', w: '1.1fr 1fr', c: [
      [ { t: 'txt', p: [
          'La **vitesse de réaction** est la variation de la quantité d\'un réactif ou d\'un produit **par unité de temps**.',
        ] },
        { t: 'box', f: 'v = {{Δ quantité|Δt}}', note: 'unités : mol/(L·s), g/s, mL/s, mol/min…' },
        { t: 'list', items: [
          'Les **réactifs** diminuent ; les **produits** augmentent. La vitesse est toujours donnée **positive**.',
          'La vitesse **diminue** au cours de la réaction (moins de réactifs, donc moins de collisions).',
          '**Vitesse moyenne** : entre deux instants (pente d\'une sécante). **Vitesse instantanée** : à un instant précis (pente de la tangente).',
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 235, h: 190, xmin: 0, xmax: 60, ymin: 0, ymax: 60, tick: 10, ticky: 10, grille: 5, nx: 't (s)', ny: 'V (mL)',
            courbes: [ { fn: t => 55 * (1 - Math.exp(-t / 15)) } ],
            segs: [ { a: [0, 0], b: [20, 55 * (1 - Math.exp(-20 / 15))], cls: 'ln2', dash: true } ],
            alt: 'volume de gaz produit en fonction du temps', cap: 'volume de O<sub>2</sub> produit : la pente (vitesse) diminue' },
        ] } ],
    ] },
    { t: 'box', h: 'vitesse et coefficients', f: 'pour aA + bB → cC + dD :  v = {{1|a}}{{Δ[A]|Δt}} (en valeur absolue) = {{1|c}}{{Δ[C]|Δt}}', note: 'Une substance qui a un coefficient 2 varie 2 fois plus vite qu\'une substance de coefficient 1.' },
    { t: 'tab', h: 'comment la mesurer', full: true, lcol: true,
      head: ['On mesure…', 'Quand ?'],
      rows: [
        ['le **volume** de gaz produit', 'un gaz se dégage (seringue, cylindre renversé dans l\'eau)'],
        ['la **masse** perdue', 'un gaz s\'échappe du contenant (balance)'],
        ['la **pression**', 'gaz en contenant fermé'],
        ['la **couleur** (intensité)', 'un réactif ou un produit est coloré'],
        ['le **pH** ou la **conductibilité**', 'des ions apparaissent ou disparaissent'],
        ['le **temps** d\'apparition d\'un précipité', 'un solide se forme'],
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'La décomposition de H<sub>2</sub>O<sub>2</sub> produit 30 mL d\'O<sub>2</sub> en 20 s. Vitesse moyenne ?',
      s: [ 'v = {{30 mL|20 s}} = 1,5 mL/s' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Dans 2 A → B, [A] passe de 0,80 à 0,50 mol/L en 60 s.',
      s: [ 'v(A) = {{0,80 − 0,50|60}} = 0,0050 mol/(L·s)', 'v(B) = {{1|2}} × 0,0050 = 0,0025 mol/(L·s) // coefficient 2 : 1' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Un comprimé effervescent perd 0,44 g de CO<sub>2</sub> en 2,0 min. Vitesse en mol/min ?',
      s: [ 'n = {{0,44|44,01}} ≈ 0,010 mol', 'v = {{0,010|2,0}} = 0,0050 mol/min' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Sur le graphique du recto, la vitesse est-elle plus grande à 10 s ou à 40 s ?',
      p: [ 'À **10 s** : la courbe est plus inclinée (pente plus forte). À 40 s, les réactifs sont presque épuisés et la courbe s\'aplatit.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Donner une vitesse négative pour un réactif : on prend la valeur absolue.',
          'Oublier de diviser par le coefficient pour comparer les vitesses.',
          'Mélanger secondes et minutes.',
        ] } ],
      [ { t: 'retenir', items: [
          'v = Δ quantité / Δt.',
          'La vitesse diminue avec le temps.',
          'Pente de la courbe = vitesse.',
        ] } ],
    ] },
  ],
},

/* ============ 19. Théorie des collisions ============ */
collisions: {
  bulle: 'théorie des collisions',
  sous: 'La théorie des collisions',
  recto: [
    { t: 'txt', p: [ 'Pour qu\'une réaction se produise, les particules de réactifs doivent **entrer en collision**. Mais toutes les collisions ne donnent pas une réaction : seules les **collisions efficaces** comptent.' ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'une collision est efficace si…', items: [
          '1. les particules ont assez d\'**énergie** : au moins l\'**énergie d\'activation** E<sub>a</sub> ;',
          '2. elles ont la bonne **orientation** : les bons atomes se rencontrent.',
        ] },
        { t: 'box', f: 'vitesse de réaction ∝ nombre de collisions efficaces par seconde' },
        { t: 'list', h: 'pour accélérer une réaction, il faut…', items: [
          'augmenter le **nombre de collisions** (concentration, surface de contact, pression) ;',
          'augmenter la **proportion de collisions assez énergiques** (température) ;',
          'ou **abaisser** E<sub>a</sub> (catalyseur).',
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 250, h: 200, xmin: 0, xmax: 10, ymin: 0, ymax: 25, xlabels: [], ylabels: [], nx: 'énergie', ny: 'nb de particules',
            courbes: [ { fn: mb(1.2), lbl: 'T₁ (froid)', at: [1.4, 19.5] }, { fn: mb(2), cls: 'ln2', lbl: 'T₂ (chaud)', at: [3.3, 12], pk: true } ],
            droites: [ { a: [6, 0], b: [6, 1], cls: 'ln3', dash: true, lbl: 'Eₐ', at: [6.2, 22] } ],
            alt: 'distribution des énergies à deux températures', cap: 'à T₂, beaucoup plus de particules dépassent Eₐ' },
        ] } ],
    ] },
    { t: 'list', h: 'lire la courbe de distribution', items: [
      'Elle montre combien de particules ont chaque énergie cinétique.',
      'Les particules à **droite de E<sub>a</sub>** peuvent réagir.',
      'Quand T augmente, la courbe s\'aplatit et se déplace vers la droite : la surface à droite de E<sub>a</sub> **augmente beaucoup**.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Expliquer pourquoi un aliment se conserve plus longtemps au réfrigérateur.',
      p: [ 'Au froid, les particules ont moins d\'énergie cinétique : **moins de collisions** et surtout une **plus petite proportion** de collisions atteignent E<sub>a</sub>. Les réactions de décomposition (et la croissance des bactéries) ralentissent.' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Deux molécules se heurtent avec une énergie supérieure à E<sub>a</sub>, mais rien ne se passe. Pourquoi ?',
      p: [ 'Leur **orientation** n\'était pas favorable : les atomes qui doivent se lier ne se sont pas rencontrés. La collision n\'était pas efficace.' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Pourquoi une réaction avec E<sub>a</sub> = 20 kJ est-elle généralement plus rapide qu\'une réaction avec E<sub>a</sub> = 150 kJ ?',
      p: [ 'Avec une E<sub>a</sub> plus petite, une **plus grande proportion** des collisions a assez d\'énergie pour être efficace.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Croire que chaque collision produit une réaction.',
          'Dire que la chaleur augmente seulement le nombre de collisions : elle augmente surtout leur **énergie**.',
          'Oublier le critère d\'orientation.',
        ] } ],
      [ { t: 'retenir', items: [
          'Collision efficace = énergie ≥ E<sub>a</sub> + bonne orientation.',
          'Plus de collisions efficaces = réaction plus rapide.',
        ] } ],
    ] },
  ],
},

/* ============ 20. Facteurs ============ */
facteurs: {
  bulle: 'facteurs de vitesse',
  sous: 'Les facteurs qui influencent la vitesse de réaction',
  recto: [
    { t: 'tab', full: true, lcol: true,
      head: ['Facteur', 'Effet', 'Explication (théorie des collisions)'],
      rows: [
        ['**Nature des réactifs**', 'réactions entre ions en solution : très rapides ; beaucoup de liaisons à briser : lentes', 'E<sub>a</sub> différente selon les liaisons à briser'],
        ['**Concentration**', '↑ concentration → ↑ vitesse', 'plus de particules par volume → plus de collisions'],
        ['**Surface de contact**', 'solide en poudre → plus rapide qu\'en bloc', 'plus de particules exposées → plus de collisions'],
        ['**Température**', '↑ T → ↑ vitesse (souvent environ × 2 pour +10 °C)', 'plus de collisions ET surtout plus de collisions ≥ E<sub>a</sub>'],
        ['**Catalyseur**', 'accélère sans être consommé', 'offre un chemin avec une E<sub>a</sub> plus basse'],
        ['**Pression** (gaz)', '↑ P → ↑ vitesse', 'gaz comprimé = concentration plus grande'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'le catalyseur', items: [
          'Il n\'est **pas consommé** : on le retrouve intact à la fin.',
          'Il ne change **pas** ΔH ni la quantité de produits obtenue.',
          'Il accélère la réaction **directe et inverse** autant.',
          'Exemples : **enzymes** (catalyseurs biologiques), convertisseur catalytique des voitures.',
          'Un **inhibiteur** fait l\'inverse : il ralentit une réaction (agents de conservation).',
        ] } ],
      [ { t: 'list', h: 'nature des réactifs : ordre typique', items: [
          'ions en solution (très rapide)',
          'molécules simples',
          'molécules complexes, solides (lent)',
          'ex. le fer rouille lentement, le sodium réagit violemment avec l\'eau.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Pourquoi coupe-t-on le bois d\'allumage en petits morceaux ?',
      p: [ 'Pour augmenter la **surface de contact** avec l\'oxygène de l\'air : plus de particules peuvent entrer en collision, la combustion démarre plus vite.' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Un comprimé effervescent entier dans l\'eau froide, puis broyé dans l\'eau chaude. Lequel réagit le plus vite et pourquoi ?',
      p: [ 'Le comprimé **broyé dans l\'eau chaude** : deux facteurs s\'additionnent, une plus grande **surface de contact** et une **température** plus élevée.' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'On double la concentration d\'acide qui réagit avec du magnésium. Que se passe-t-il ?',
      p: [ 'Plus de particules d\'acide par litre → plus de collisions avec le magnésium → le gaz se dégage **plus vite**. La quantité totale de gaz dépend toutefois du réactif limitant.' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'L\'enzyme catalase décompose H<sub>2</sub>O<sub>2</sub> très rapidement. Est-elle consommée ?',
      p: [ 'Non : c\'est un **catalyseur**. Elle abaisse E<sub>a</sub> et se retrouve intacte à la fin.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Dire qu\'un catalyseur donne plus de produit : il donne le même produit, plus vite.',
          'Confondre vitesse et quantité finale de produit.',
          'Donner un facteur sans l\'expliquer avec les collisions.',
        ] } ],
      [ { t: 'retenir', items: [
          '5 facteurs : nature, concentration, surface, température, catalyseur.',
          'Toujours expliquer avec les collisions.',
          'Catalyseur : E<sub>a</sub> ↓, non consommé.',
        ] } ],
    ] },
  ],
},

/* ============ 21. Loi des vitesses ============ */
'loi-vitesses': {
  bulle: 'loi des vitesses',
  sous: 'La loi des vitesses de réaction',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [
          'La **loi des vitesses** exprime la vitesse d\'une réaction en fonction des **concentrations** des réactifs.',
          'Pour aA + bB → produits :',
        ] },
        { t: 'box', f: 'v = k [A]<sup>m</sup> [B]<sup>n</sup>' } ],
      [ { t: 'list', h: 'les termes', items: [
          '**k** : constante de vitesse ; elle dépend de la réaction et de la **température** (pas des concentrations).',
          '**m**, **n** : **ordres** de réaction par rapport à A et B, trouvés **expérimentalement**.',
          'Pour une réaction **élémentaire** (en une seule étape), m et n sont égaux aux coefficients a et b.',
          'Les solides et liquides purs n\'apparaissent pas dans la loi.',
        ] } ],
    ] },
    { t: 'tab', h: 'trouver l\'ordre avec des expériences', full: true, lcol: true,
      head: ['Quand [A] est multipliée par 2…', 'Ordre m'],
      rows: [
        ['la vitesse ne change pas', '0'],
        ['la vitesse est multipliée par 2', '1'],
        ['la vitesse est multipliée par 4', '2'],
        ['la vitesse est multipliée par 8', '3'],
      ],
      note: 'On compare deux expériences où **une seule** concentration change.' },
    { t: 'list', h: 'démarche', items: [
      '1. Choisir deux expériences où seule [A] change → trouver m.',
      '2. Choisir deux expériences où seule [B] change → trouver n.',
      '3. Remplacer les valeurs d\'une expérience dans v = k[A]<sup>m</sup>[B]<sup>n</sup> pour calculer **k** (avec ses unités).',
      '4. Utiliser la loi pour prédire la vitesse à d\'autres concentrations.',
    ] },
  ],
  verso: [
    { t: 'tab', h: 'Exemple — réaction A + 2 B → C', full: true,
      head: ['Expérience', '[A] (mol/L)', '[B] (mol/L)', 'v (mol/(L·s))'],
      rows: [ ['1', '0,10', '0,10', '2,0 × 10<sup>−3</sup>'], ['2', '0,20', '0,10', '4,0 × 10<sup>−3</sup>'], ['3', '0,10', '0,20', '8,0 × 10<sup>−3</sup>'] ] },
    { t: 'ex', h: 'Solution :', q: '',
      s: [ 'exp. 1 → 2 : [A] × 2, v × 2 → m = 1', 'exp. 1 → 3 : [B] × 2, v × 4 → n = 2', 'loi : v = k[A][B]<sup>2</sup>', 'k = {{2,0 × 10<sup>−3</sup>|(0,10)(0,10)<sup>2</sup>}} = 2,0 L<sup>2</sup>/(mol<sup>2</sup>·s)' ] },
    { t: 'ex', h: 'Prédiction :', q: 'Vitesse si [A] = 0,30 mol/L et [B] = 0,30 mol/L ?',
      s: [ 'v = 2,0 × 0,30 × (0,30)<sup>2</sup> = 0,054 mol/(L·s)' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Réaction élémentaire 2 NO + O<sub>2</sub> → 2 NO<sub>2</sub>. Loi des vitesses ? Effet de tripler [NO] ?',
      s: [ 'v = k[NO]<sup>2</sup>[O<sub>2</sub>]', '[NO] × 3 → v × 3<sup>2</sup> = 9' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Prendre les coefficients comme ordres pour une réaction qui n\'est pas élémentaire.',
          'Comparer deux expériences où les deux concentrations changent.',
          'Oublier les unités de k.',
        ] } ],
      [ { t: 'retenir', items: [
          'v = k[A]<sup>m</sup>[B]<sup>n</sup>.',
          '× 2 → × 2<sup>ordre</sup>.',
          'k dépend seulement de la température.',
        ] } ],
    ] },
  ],
},

});
})();
