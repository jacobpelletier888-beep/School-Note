/* Chimie — Équilibre chimique et feuille Général */
(function () {
  const e = Math.exp;
  // Perturbation de N2 + 3 H2 ⇌ 2 NH3 : ajout de H2 à t = 5
  const apres = (t, avant, fin) => (t < 5 ? avant : fin + (avant - fin) * e(-(t - 5) / 1.5));
  const H2 = t => (t < 5 ? 0.6 : 0.85 + 0.15 * e(-(t - 5) / 1.5));
  const N2 = t => apres(t, 0.4, 0.35);
  const NH3 = t => apres(t, 0.3, 0.4);

Object.assign(DATA.feuilles['chimie'], {

/* ============ 22. Équilibre ============ */
equilibre: {
  bulle: 'équilibre chimique',
  sous: 'L\'équilibre chimique : conditions et caractéristiques',
  recto: [
    { t: 'txt', p: [ 'Une réaction **réversible** peut se faire dans les deux sens : A + B ⇌ C + D. À l\'**équilibre**, la réaction directe et la réaction inverse continuent de se produire, **à la même vitesse**.' ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'conditions pour atteindre l\'équilibre', items: [
          'Une réaction **réversible**.',
          'Un système **fermé** (rien n\'entre ni ne sort).',
          'Des conditions **constantes** (température, pression).',
        ] },
        { t: 'list', h: 'caractéristiques', items: [
          'v<sub>directe</sub> = v<sub>inverse</sub>.',
          'Les concentrations sont **constantes**, mais **pas forcément égales**.',
          'Équilibre **dynamique** : au niveau microscopique, les réactions continuent.',
          'Les propriétés observables (couleur, pression) ne changent plus.',
          'On peut l\'atteindre à partir des réactifs **ou** des produits.',
        ] } ],
      [ { t: 'fig', figs: [
          { kind: 'plan', w: 240, h: 150, xmin: 0, xmax: 12, ymin: 0, ymax: 1.1, xlabels: [], ylabels: [], nx: 't', ny: '[ ]',
            courbes: [ { fn: t => 0.4 + 0.6 * e(-t / 2.5), lbl: 'réactifs', at: [0.5, 0.95] }, { fn: t => 0.6 * (1 - e(-t / 2.5)), cls: 'ln2', lbl: 'produits', at: [0.6, 0.12], pk: true } ],
            droites: [ { a: [7, 0], b: [7, 1], cls: 'ln3', dash: true, lbl: 'équilibre', at: [7.3, 1.02] } ],
            alt: 'concentrations qui deviennent constantes', cap: 'concentrations constantes, mais différentes' },
          { kind: 'plan', w: 240, h: 150, xmin: 0, xmax: 12, ymin: 0, ymax: 1.1, xlabels: [], ylabels: [], nx: 't', ny: 'v',
            courbes: [ { fn: t => 0.35 + 0.65 * e(-t / 2.5), lbl: 'v directe', at: [0.5, 0.95] }, { fn: t => 0.35 * (1 - e(-t / 2.5)), cls: 'ln2', lbl: 'v inverse', at: [0.6, 0.12], pk: true } ],
            alt: 'vitesses directe et inverse qui deviennent égales', cap: 'les deux vitesses deviennent égales' },
        ] } ],
    ] },
    { t: 'tab', h: 'types d\'équilibres', full: true, lcol: true,
      head: ['Type', 'Exemple'],
      rows: [
        ['**de phase**', 'H<sub>2</sub>O(l) ⇌ H<sub>2</sub>O(g) dans une bouteille fermée'],
        ['**de solubilité**', 'NaCl(s) ⇌ Na<sup>+</sup>(aq) + Cl<sup>−</sup>(aq) dans une solution saturée'],
        ['**chimique**', 'N<sub>2</sub>(g) + 3 H<sub>2</sub>(g) ⇌ 2 NH<sub>3</sub>(g)'],
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Dans une bouteille d\'eau fermée, le niveau d\'eau ne baisse plus. L\'évaporation s\'est-elle arrêtée ?',
      p: [ 'Non. L\'eau continue de s\'évaporer, mais la vapeur se condense **à la même vitesse** : c\'est un équilibre **dynamique** de phase.' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Un élève affirme : « À l\'équilibre, il y a autant de réactifs que de produits. » Vrai ou faux ?',
      p: [ '**Faux.** Ce sont les **vitesses** qui sont égales. Les concentrations sont constantes, mais elles peuvent être très différentes (voir le graphique du recto).' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Une boisson gazeuse ouverte perd son gaz. Pourquoi n\'est-ce pas un équilibre ?',
      p: [ 'Le système est **ouvert** : le CO<sub>2</sub> s\'échappe et ne peut pas revenir. La réaction inverse ne peut pas se produire.' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Comment savoir qu\'un système est à l\'équilibre dans une expérience ?',
      p: [ 'Ses propriétés observables (couleur, pression, masse de solide, pH) ne changent plus, à température constante.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Croire que la réaction s\'arrête à l\'équilibre.',
          'Confondre « concentrations égales » et « concentrations constantes ».',
          'Oublier que le système doit être fermé.',
        ] } ],
      [ { t: 'retenir', items: [
          'Équilibre : v directe = v inverse.',
          'Concentrations constantes.',
          'Système fermé, réaction réversible.',
        ] } ],
    ] },
  ],
},

/* ============ 23. Le Chatelier ============ */
'le-chatelier': {
  bulle: 'principe de le chatelier',
  sous: 'Le principe de Le Chatelier',
  recto: [
    { t: 'box', f: 'Si on modifie un système à l\'équilibre, il réagit de façon à <b>s\'opposer</b> (en partie) à cette modification, jusqu\'à un nouvel équilibre.' },
    { t: 'tab', h: 'les modifications et leurs effets', full: true, lcol: true,
      head: ['Modification', 'Le système…', 'Déplacement'],
      rows: [
        ['**ajout** d\'un réactif', 'consomme ce qu\'on ajoute', 'vers les **produits** (→)'],
        ['**retrait** d\'un produit', 'en refabrique', 'vers les **produits** (→)'],
        ['**ajout** d\'un produit', 'le consomme', 'vers les **réactifs** (←)'],
        ['**hausse de T**', 'absorbe la chaleur ajoutée', 'dans le sens **endothermique**'],
        ['**baisse de T**', 'dégage de la chaleur', 'dans le sens **exothermique**'],
        ['**hausse de P** (baisse de V), gaz', 'réduit le nombre de particules', 'vers le côté qui a **le moins de moles de gaz**'],
        ['**baisse de P** (hausse de V), gaz', 'augmente le nombre de particules', 'vers le côté qui a **le plus de moles de gaz**'],
        ['**catalyseur**', 'atteint l\'équilibre plus vite', '**aucun** déplacement'],
      ],
      note: 'Si les deux côtés ont le même nombre de moles de gaz, la pression n\'a pas d\'effet. Seul un changement de température modifie la valeur de K.' },
    { t: 'cols', c: [
      [ { t: 'list', h: 'astuce pour la température', items: [
          'Écrire la chaleur dans l\'équation comme un réactif ou un produit.',
          'ex. N<sub>2</sub> + 3 H<sub>2</sub> ⇌ 2 NH<sub>3</sub> + 92 kJ',
          'Chauffer = ajouter de la chaleur → déplacement vers la gauche.',
        ] } ],
      [ { t: 'list', h: 'ce qui ne change rien', items: [
          'Ajouter un **solide** ou un **liquide pur** (leur concentration ne varie pas).',
          'Ajouter un gaz inerte à volume constant.',
          'Ajouter un catalyseur.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'txt', h: 'Réaction étudiée : N<sub>2</sub>(g) + 3 H<sub>2</sub>(g) ⇌ 2 NH<sub>3</sub>(g)   ΔH = −92 kJ', p: [ 'Réactifs : 1 + 3 = 4 mol de gaz · Produits : 2 mol de gaz · La réaction directe est exothermique.' ] },
    { t: 'tab', full: true, lcol: true,
      head: ['On…', 'Déplacement', 'Pourquoi', '[NH<sub>3</sub>]'],
      rows: [
        ['ajoute du N<sub>2</sub>', '→', 'consommer le N<sub>2</sub> ajouté', '↑'],
        ['retire du NH<sub>3</sub>', '→', 'remplacer le NH<sub>3</sub> retiré', 'remonte en partie (reste plus bas qu\'avant)'],
        ['chauffe', '←', 'sens endothermique', '↓'],
        ['refroidit', '→', 'sens exothermique', '↑'],
        ['augmente la pression', '→', '4 mol de gaz → 2 mol', '↑'],
        ['ajoute un catalyseur', 'aucun', 'accélère les deux sens', '='],
      ] },
    { t: 'ex', h: 'Exemple 2 —', q: '2 NO<sub>2</sub>(g) (brun) ⇌ N<sub>2</sub>O<sub>4</sub>(g) (incolore)  ΔH = −57 kJ. On plonge le tube dans l\'eau glacée.',
      p: [ 'Refroidir → déplacement dans le sens exothermique (→) : plus de N<sub>2</sub>O<sub>4</sub>, la couleur brune **pâlit**.' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'CoCl<sub>4</sub><sup>2−</sup> (bleu) + 6 H<sub>2</sub>O ⇌ Co(H<sub>2</sub>O)<sub>6</sub><sup>2+</sup> (rose) + 4 Cl<sup>−</sup>. On ajoute du NaCl.',
      p: [ 'Ajout de Cl<sup>−</sup> (un produit) → déplacement vers la gauche (←) : la solution devient plus **bleue**.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Croire que le système annule complètement la modification (il la compense en partie).',
          'Compter les moles de solides ou de liquides pour l\'effet de pression.',
          'Dire qu\'un catalyseur déplace l\'équilibre.',
        ] } ],
      [ { t: 'retenir', items: [
          'Le système s\'oppose au changement.',
          'Chaleur ↑ → sens endothermique.',
          'Pression ↑ → côté avec moins de moles de gaz.',
        ] } ],
    ] },
  ],
},

/* ============ 24. Kc ============ */
kc: {
  bulle: 'constante d\'équilibre',
  sous: 'La constante d\'équilibre K<sub>c</sub>',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [ 'Pour la réaction à l\'équilibre aA + bB ⇌ cC + dD :' ] },
        { t: 'box', f: 'K<sub>c</sub> = {{[C]<sup>c</sup> [D]<sup>d</sup>|[A]<sup>a</sup> [B]<sup>b</sup>}}', note: 'concentrations à l\'équilibre, en mol/L' },
        { t: 'list', items: [
          'Produits en **haut**, réactifs en **bas**, chacun à la puissance de son **coefficient**.',
          'On **n\'inclut pas** les solides (s) ni les liquides purs (l), comme H<sub>2</sub>O(l).',
          'K<sub>c</sub> n\'a généralement pas d\'unité en secondaire 5.',
        ] } ],
      [ { t: 'tab', h: 'interpréter K<sub>c</sub>', full: true, lcol: true,
          head: ['Valeur', 'À l\'équilibre…'],
          rows: [
            ['K<sub>c</sub> > 1 (très grand)', 'les **produits** sont favorisés (réaction presque complète)'],
            ['K<sub>c</sub> ≈ 1', 'réactifs et produits en quantités comparables'],
            ['K<sub>c</sub> < 1 (très petit)', 'les **réactifs** sont favorisés (peu de réaction)'],
          ] },
        { t: 'list', h: 'à savoir', items: [
          'K<sub>c</sub> ne dépend que de la **température**.',
          'Inverser l\'équation → K<sub>inverse</sub> = {{1|K<sub>c</sub>}}.',
        ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'le quotient réactionnel Q', items: [
          'Même formule que K<sub>c</sub>, mais avec les concentrations **à un moment quelconque**.',
          'Q < K<sub>c</sub> → la réaction avance vers les **produits** (→).',
          'Q = K<sub>c</sub> → le système est à l\'équilibre.',
          'Q > K<sub>c</sub> → la réaction recule vers les **réactifs** (←).',
        ] } ],
      [ { t: 'list', h: 'le tableau IVE (initial, variation, équilibre)', items: [
          'Ligne **I** : concentrations initiales.',
          'Ligne **V** : variations, dans le rapport des **coefficients** (− pour les réactifs, + pour les produits).',
          'Ligne **É** : I + V. On remplace ensuite dans K<sub>c</sub>.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'H<sub>2</sub>(g) + I<sub>2</sub>(g) ⇌ 2 HI(g). À l\'équilibre : [H<sub>2</sub>] = [I<sub>2</sub>] = 0,10 mol/L et [HI] = 0,70 mol/L.',
      s: [ 'K<sub>c</sub> = {{[HI]<sup>2</sup>|[H<sub>2</sub>][I<sub>2</sub>]}} = {{(0,70)<sup>2</sup>|(0,10)(0,10)}} = {{0,49|0,010}} = 49', 'K<sub>c</sub> > 1 → produits favorisés' ] },
    { t: 'tab', h: 'Exemple 2 — N<sub>2</sub>O<sub>4</sub>(g) ⇌ 2 NO<sub>2</sub>(g) : 1,00 mol de N<sub>2</sub>O<sub>4</sub> dans 1,00 L ; à l\'équilibre, [NO<sub>2</sub>] = 0,20 mol/L', full: true, lcol: true,
      head: ['', '[N<sub>2</sub>O<sub>4</sub>]', '[NO<sub>2</sub>]'],
      rows: [ ['I', '1,00', '0'], ['V', '−0,10', '+0,20'], ['É', '0,90', '0,20'] ],
      note: 'Pour 2 NO<sub>2</sub> formés, 1 N<sub>2</sub>O<sub>4</sub> est consommé : −0,20 ÷ 2 = −0,10.' },
    { t: 'ex', h: '', q: '', s: [ 'K<sub>c</sub> = {{(0,20)<sup>2</sup>|0,90}} ≈ 0,044 // réactifs favorisés' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Pour H<sub>2</sub> + I<sub>2</sub> ⇌ 2 HI (K<sub>c</sub> = 49), on a [HI] = 0,50, [H<sub>2</sub>] = [I<sub>2</sub>] = 0,20 mol/L. Dans quel sens va la réaction ?',
      s: [ 'Q = {{(0,50)<sup>2</sup>|(0,20)(0,20)}} = 6,25', 'Q < K<sub>c</sub> → vers les produits (→)' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Écrire K<sub>c</sub> de CaCO<sub>3</sub>(s) ⇌ CaO(s) + CO<sub>2</sub>(g).',
      s: [ 'K<sub>c</sub> = [CO<sub>2</sub>] // solides exclus' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier les exposants (coefficients).',
          'Mettre les réactifs en haut.',
          'Inclure un solide ou H<sub>2</sub>O(l).',
          'Utiliser des moles au lieu de mol/L (diviser par le volume !).',
        ] } ],
      [ { t: 'retenir', items: [
          'K<sub>c</sub> = produits / réactifs, avec exposants.',
          'K > 1 : produits favorisés.',
          'Q < K → ; Q > K ←.',
        ] } ],
    ] },
  ],
},

/* ============ 25. Keau, pH ============ */
'keau-ph': {
  bulle: 'pH et pOH',
  sous: 'Constante d\'ionisation de l\'eau, pH et pOH',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [ 'L\'eau s\'ionise très légèrement : H<sub>2</sub>O(l) ⇌ H<sup>+</sup>(aq) + OH<sup>−</sup>(aq)', '(on écrit aussi H<sub>3</sub>O<sup>+</sup> pour H<sup>+</sup>)' ] },
        { t: 'box', h: 'à 25 °C', f: 'K<sub>eau</sub> = [H<sup>+</sup>][OH<sup>−</sup>] = 1,0 × 10<sup>−14</sup>' },
        { t: 'form', h: 'formules', items: [
          ['pH', '= −log [H<sup>+</sup>]'],
          ['pOH', '= −log [OH<sup>−</sup>]'],
          ['somme', 'pH + pOH = 14'],
          ['retour', '[H<sup>+</sup>] = 10<sup>−pH</sup> · [OH<sup>−</sup>] = 10<sup>−pOH</sup>'],
        ] } ],
      [ { t: 'tab', h: 'l\'échelle', full: true, lcol: true,
          head: ['Solution', '[H<sup>+</sup>] (mol/L)', 'pH'],
          rows: [
            ['**acide**', '> 1,0 × 10<sup>−7</sup>', '< 7'],
            ['**neutre**', '= 1,0 × 10<sup>−7</sup>', '= 7'],
            ['**basique**', '< 1,0 × 10<sup>−7</sup>', '> 7'],
          ] },
        { t: 'list', items: [
          'Une variation de **1 unité de pH** = [H<sup>+</sup>] multipliée ou divisée par **10**.',
          'Acide **fort** (HCl, HNO<sub>3</sub>) : ionisé à 100 % → [H<sup>+</sup>] = C<sub>acide</sub>.',
          'Base **forte** (NaOH, KOH) : [OH<sup>−</sup>] = C<sub>base</sub>.',
          'Exemples de pH : suc gastrique ≈ 2, jus de citron ≈ 2,5, eau pure 7, eau de Javel ≈ 12.',
        ] } ],
    ] },
    { t: 'list', h: 'chiffres significatifs du pH', items: [
      'Le nombre de **décimales** du pH = le nombre de chiffres significatifs de [H<sup>+</sup>] : [H<sup>+</sup>] = 3,2 × 10<sup>−4</sup> (2 ch. sig.) → pH = 3,49 (2 décimales).',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: '[H<sup>+</sup>] = 3,2 × 10<sup>−4</sup> mol/L. pH, pOH, [OH<sup>−</sup>] ?',
      s: [ 'pH = −log(3,2 × 10<sup>−4</sup>) ≈ 3,49 // acide', 'pOH = 14 − 3,49 = 10,51', '[OH<sup>−</sup>] = {{1,0 × 10<sup>−14</sup>|3,2 × 10<sup>−4</sup>}} ≈ 3,1 × 10<sup>−11</sup> mol/L' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'pH d\'une solution de NaOH à 0,020 mol/L.',
      s: [ 'base forte → [OH<sup>−</sup>] = 0,020 mol/L', 'pOH = −log(0,020) ≈ 1,70', 'pH = 14 − 1,70 = 12,30' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Une solution a un pH de 9,5. [H<sup>+</sup>] et [OH<sup>−</sup>] ?',
      s: [ '[H<sup>+</sup>] = 10<sup>−9,5</sup> ≈ 3,2 × 10<sup>−10</sup> mol/L', 'pOH = 4,5 → [OH<sup>−</sup>] = 10<sup>−4,5</sup> ≈ 3,2 × 10<sup>−5</sup> mol/L' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Combien de fois une solution de pH 3 est-elle plus acide qu\'une solution de pH 6 ?',
      s: [ '10<sup>6 − 3</sup> = 10<sup>3</sup> = 1000' ], r: '1000 fois plus de H<sup>+</sup>' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier le signe moins : pH = **−**log[H<sup>+</sup>].',
          'Croire que pH 4 est « deux fois » plus acide que pH 8 : c\'est 10<sup>4</sup> fois.',
          'Calculer le pH directement avec [OH<sup>−</sup>] (on trouve le pOH).',
        ] } ],
      [ { t: 'retenir', items: [
          '[H<sup>+</sup>][OH<sup>−</sup>] = 10<sup>−14</sup>.',
          'pH + pOH = 14.',
          '1 unité de pH = facteur 10.',
        ] } ],
    ] },
  ],
},

/* ============ 26. Ka et Kb ============ */
'ka-kb': {
  bulle: 'ka et kb',
  sous: 'Constantes d\'acidité (K<sub>a</sub>) et de basicité (K<sub>b</sub>)',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', h: 'acide faible', p: [ 'Un acide **faible** ne s\'ionise que partiellement : HA ⇌ H<sup>+</sup> + A<sup>−</sup>' ] },
        { t: 'box', f: 'K<sub>a</sub> = {{[H<sup>+</sup>][A<sup>−</sup>]|[HA]}}' },
        { t: 'list', items: [
          'Plus K<sub>a</sub> est **grand**, plus l\'acide est **fort** (il s\'ionise davantage).',
          'ex. acide acétique (vinaigre) : K<sub>a</sub> = 1,8 × 10<sup>−5</sup>.',
        ] } ],
      [ { t: 'txt', h: 'base faible', p: [ 'B + H<sub>2</sub>O ⇌ BH<sup>+</sup> + OH<sup>−</sup>' ] },
        { t: 'box', f: 'K<sub>b</sub> = {{[BH<sup>+</sup>][OH<sup>−</sup>]|[B]}}' },
        { t: 'list', items: [
          'Plus K<sub>b</sub> est grand, plus la base est forte.',
          'ex. ammoniac NH<sub>3</sub> : K<sub>b</sub> = 1,8 × 10<sup>−5</sup>.',
        ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'méthode (acide faible de concentration C)', items: [
          'Tableau IVE : [H<sup>+</sup>] = [A<sup>−</sup>] = x ; [HA] = C − x.',
          'K<sub>a</sub> = {{x<sup>2</sup>|C − x}}.',
          '**Approximation** : si l\'acide est très faible, C − x ≈ C, donc x = √(K<sub>a</sub> × C).',
          'Vérifier : x doit être moins de 5 % de C.',
        ] } ],
      [ { t: 'list', h: 'à connaître', items: [
          '**Pourcentage d\'ionisation** = {{x|C}} × 100 %.',
          'Paire acide-base conjuguée : K<sub>a</sub> × K<sub>b</sub> = K<sub>eau</sub> = 1,0 × 10<sup>−14</sup>.',
          'Acide fort (HCl) : K<sub>a</sub> très grand, ionisation complète : pas besoin de K<sub>a</sub>.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'pH d\'une solution d\'acide acétique à 0,10 mol/L (K<sub>a</sub> = 1,8 × 10<sup>−5</sup>).',
      s: [ '{{x<sup>2</sup>|0,10}} ≈ 1,8 × 10<sup>−5</sup> // approximation C − x ≈ C', 'x = √(1,8 × 10<sup>−6</sup>) ≈ 1,34 × 10<sup>−3</sup> mol/L = [H<sup>+</sup>]', 'pH = −log(1,34 × 10<sup>−3</sup>) ≈ 2,87', '% d\'ionisation = {{1,34 × 10<sup>−3</sup>|0,10}} × 100 ≈ 1,3 % // < 5 % ✓' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Un acide HA à 0,050 mol/L a un pH de 3,00. K<sub>a</sub> ?',
      s: [ '[H<sup>+</sup>] = [A<sup>−</sup>] = 10<sup>−3,00</sup> = 1,0 × 10<sup>−3</sup> mol/L', '[HA] = 0,050 − 0,001 = 0,049 mol/L', 'K<sub>a</sub> = {{(1,0 × 10<sup>−3</sup>)<sup>2</sup>|0,049}} ≈ 2,0 × 10<sup>−5</sup>' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'pH d\'une solution de NH<sub>3</sub> à 0,20 mol/L (K<sub>b</sub> = 1,8 × 10<sup>−5</sup>).',
      s: [ '[OH<sup>−</sup>] = √(1,8 × 10<sup>−5</sup> × 0,20) ≈ 1,9 × 10<sup>−3</sup> mol/L', 'pOH ≈ 2,72 → pH ≈ 11,28' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Traiter un acide faible comme un acide fort ([H<sup>+</sup>] ≠ C).',
          'Oublier que K<sub>b</sub> donne [OH<sup>−</sup>], donc le pOH d\'abord.',
          'Garder l\'approximation quand x dépasse 5 % de C.',
        ] } ],
      [ { t: 'retenir', items: [
          'K<sub>a</sub> = [H<sup>+</sup>][A<sup>−</sup>] / [HA].',
          'x ≈ √(K × C).',
          'K<sub>a</sub> grand = acide plus fort.',
        ] } ],
    ] },
  ],
},

/* ============ 27. Kps ============ */
kps: {
  bulle: 'produit de solubilité',
  sous: 'La constante du produit de solubilité (K<sub>ps</sub>)',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [
          'Un sel **peu soluble** forme, dans une solution **saturée**, un équilibre entre le solide et ses ions :',
          'AgCl(s) ⇌ Ag<sup>+</sup>(aq) + Cl<sup>−</sup>(aq)',
        ] },
        { t: 'box', f: 'K<sub>ps</sub> = [Ag<sup>+</sup>][Cl<sup>−</sup>]', note: 'le solide n\'apparaît pas dans l\'expression' },
        { t: 'list', items: [
          'Plus K<sub>ps</sub> est **petit**, moins le sel est soluble (à formule semblable).',
          'K<sub>ps</sub> dépend de la température.',
        ] } ],
      [ { t: 'tab', h: 'solubilité molaire s (mol/L)', full: true, lcol: true,
          head: ['Type de sel', 'Ions', 'K<sub>ps</sub>'],
          rows: [
            ['AB (AgCl)', 's et s', 's<sup>2</sup>'],
            ['AB<sub>2</sub> (PbI<sub>2</sub>)', 's et 2s', 's × (2s)<sup>2</sup> = 4s<sup>3</sup>'],
            ['A<sub>2</sub>B (Ag<sub>2</sub>CrO<sub>4</sub>)', '2s et s', '(2s)<sup>2</sup> × s = 4s<sup>3</sup>'],
          ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'va-t-il y avoir un précipité ?', items: [
          'Calculer **Q** avec les concentrations des ions après le mélange.',
          'Q < K<sub>ps</sub> : pas de précipité (solution non saturée).',
          'Q = K<sub>ps</sub> : solution saturée.',
          'Q > K<sub>ps</sub> : un **précipité** se forme.',
        ] } ],
      [ { t: 'list', h: 'effet d\'ion commun', items: [
          'Ajouter un ion déjà présent (ex. du NaCl dans une solution de AgCl) **diminue** la solubilité du sel : l\'équilibre se déplace vers le solide (Le Chatelier).',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Solubilité de AgCl (K<sub>ps</sub> = 1,8 × 10<sup>−10</sup>) en mol/L et en g/L.',
      s: [ 's<sup>2</sup> = 1,8 × 10<sup>−10</sup>', 's = √(1,8 × 10<sup>−10</sup>) ≈ 1,3 × 10<sup>−5</sup> mol/L', 'en g/L : 1,34 × 10<sup>−5</sup> × 143,32 ≈ 1,9 × 10<sup>−3</sup> g/L' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Solubilité de PbI<sub>2</sub> (K<sub>ps</sub> = 9,8 × 10<sup>−9</sup>).',
      s: [ 'PbI<sub>2</sub>(s) ⇌ Pb<sup>2+</sup> + 2 I<sup>−</sup>', 'K<sub>ps</sub> = s(2s)<sup>2</sup> = 4s<sup>3</sup>', 's = ∛({{9,8 × 10<sup>−9</sup>|4}}) ≈ 1,3 × 10<sup>−3</sup> mol/L' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'On obtient [Ag<sup>+</sup>] = 1,0 × 10<sup>−4</sup> et [Cl<sup>−</sup>] = 1,0 × 10<sup>−4</sup> mol/L après un mélange. Précipité ?',
      s: [ 'Q = (1,0 × 10<sup>−4</sup>)(1,0 × 10<sup>−4</sup>) = 1,0 × 10<sup>−8</sup>', 'Q > K<sub>ps</sub> (1,8 × 10<sup>−10</sup>)' ], r: 'oui, AgCl précipite' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier le coefficient 2 dans (2s)<sup>2</sup>.',
          'Inclure le solide dans K<sub>ps</sub>.',
          'Oublier de tenir compte de la dilution quand on mélange deux solutions.',
        ] } ],
      [ { t: 'retenir', items: [
          'K<sub>ps</sub> = produit des ions, avec exposants.',
          'AB : s = √K<sub>ps</sub> ; AB<sub>2</sub> : s = ∛(K<sub>ps</sub>/4).',
          'Q > K<sub>ps</sub> → précipité.',
        ] } ],
    ] },
  ],
},

/* ============ 28. Graphiques d'équilibre ============ */
'graphiques-equilibre': {
  bulle: 'graphiques d\'équilibre',
  sous: 'Interpréter les graphiques d\'équilibre',
  recto: [
    { t: 'txt', p: [ 'Les graphiques « concentration en fonction du temps » montrent comment un système atteint l\'équilibre, puis comment il réagit à une perturbation (principe de Le Chatelier).' ] },
    { t: 'tab', h: 'lire une perturbation', full: true, lcol: true,
      head: ['Ce qu\'on voit', 'Ce qui s\'est passé'],
      rows: [
        ['un **saut brusque** d\'une seule courbe vers le haut', 'on a **ajouté** cette substance'],
        ['un **saut brusque** d\'une seule courbe vers le bas', 'on a **retiré** cette substance'],
        ['**toutes** les courbes de gaz sautent en même temps', 'changement de **volume** (pression)'],
        ['changements **progressifs**, sans saut', 'changement de **température**'],
        ['équilibre atteint **plus vite**, mêmes concentrations finales', 'ajout d\'un **catalyseur**'],
      ] },
    { t: 'list', h: 'après la perturbation', items: [
      'Les concentrations changent **dans le rapport des coefficients** : pour N<sub>2</sub> + 3 H<sub>2</sub> ⇌ 2 NH<sub>3</sub>, si [N<sub>2</sub>] baisse de 0,05, [H<sub>2</sub>] baisse de 0,15 et [NH<sub>3</sub>] monte de 0,10.',
      'Les courbes redeviennent **horizontales** : nouvel équilibre.',
      'Le système ne revient pas complètement à l\'état d\'avant : il **compense en partie**.',
    ] },
    { t: 'fig', figs: [
      { kind: 'plan', w: 560, h: 190, xmin: 0, xmax: 14, ymin: 0, ymax: 1.1, tick: 1, ticky: 0.2, grille: 1, nx: 't (min)', ny: '[ ] (mol/L)',
        courbes: [ { fn: H2, n: 800, lbl: 'H₂', at: [1, 0.66] }, { fn: N2, cls: 'ln3', lbl: 'N₂', at: [1, 0.45] }, { fn: NH3, cls: 'ln2', lbl: 'NH₃', at: [1, 0.22], pk: true } ],
        droites: [ { a: [5, 0], b: [5, 1], cls: 'ln2', dash: true, lbl: 'perturbation', at: [5.2, 1.05], pk: true } ],
        alt: 'concentrations de H2, N2 et NH3 avec un ajout de H2 à 5 minutes', cap: 'N₂ + 3 H₂ ⇌ 2 NH₃ : que s\'est-il passé à t = 5 min ? (voir le verso)' },
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Interpréter le graphique du recto.',
      s: [ 'avant 5 min → équilibre // courbes horizontales', 'à 5 min, [H<sub>2</sub>] saute de 0,60 à 1,00 → ajout de H<sub>2</sub>', 'ensuite [H<sub>2</sub>] et [N<sub>2</sub>] baissent, [NH<sub>3</sub>] monte → déplacement vers les produits (→)', 'variations : N<sub>2</sub> −0,05 ; H<sub>2</sub> −0,15 ; NH<sub>3</sub> +0,10 → rapport 1 : 3 : 2 ✓', 'nouvel équilibre : [H<sub>2</sub>] = 0,85 // plus élevé qu\'avant : compensation partielle' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Toutes les concentrations baissent d\'un coup. Ensuite, [N<sub>2</sub>] et [H<sub>2</sub>] montent un peu et [NH<sub>3</sub>] baisse. Que s\'est-il passé ?',
      s: [ 'saut de toutes les courbes vers le bas → le volume a augmenté (pression ↓)', 'le système se déplace vers le côté qui a le plus de moles de gaz → réactifs (4 mol contre 2)', '[N<sub>2</sub>] et [H<sub>2</sub>] ↑, [NH<sub>3</sub>] ↓ → cohérent avec Le Chatelier ✓' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Sans aucun saut, [NH<sub>3</sub>] diminue progressivement et [N<sub>2</sub>], [H<sub>2</sub>] augmentent. Cause probable ?',
      p: [ 'Un changement de **température** (pas de saut). Le déplacement se fait vers les réactifs, dans le sens **endothermique** : on a **chauffé**.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Confondre un saut (ajout ou retrait) et une variation progressive (température).',
          'Oublier de vérifier le rapport des coefficients.',
          'Croire que la substance ajoutée revient à sa valeur de départ.',
        ] } ],
      [ { t: 'retenir', items: [
          'Saut d\'une courbe = ajout ou retrait.',
          'Pas de saut = température.',
          'Variations dans le rapport des coefficients.',
        ] } ],
    ] },
  ],
},

/* ============ GÉNÉRAL ============ */
general: {
  bulle: 'chimie : tout en 1',
  sous: 'Résumé de l\'année — Chimie, secondaire 5',
  recto: [
    { t: 'cols', c: [
      [ { t: 'form', h: 'les gaz', items: [
          ['moles', 'n = m / M · C = n / V'],
          ['température', 'T (K) = T (°C) + 273'],
          ['pression', '101,3 kPa = 1 atm = 760 mm Hg'],
          ['Boyle', 'P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub> (T, n const.)'],
          ['Charles', 'V / T constant (P, n const.)'],
          ['Gay-Lussac', 'P / T constant (V, n const.)'],
          ['Avogadro', 'V / n constant ; TPN 22,4 · TAPN 24,5 L/mol'],
          ['générale', '{{P<sub>1</sub>V<sub>1</sub>|n<sub>1</sub>T<sub>1</sub>}} = {{P<sub>2</sub>V<sub>2</sub>|n<sub>2</sub>T<sub>2</sub>}}'],
          ['gaz parfaits', 'PV = nRT ; R = 8,314 kPa·L/(mol·K)'],
          ['Dalton', 'P<sub>tot</sub> = ΣP<sub>i</sub> ; P<sub>A</sub> = x<sub>A</sub>P<sub>tot</sub>'],
        ] } ],
      [ { t: 'form', h: 'énergie', items: [
          ['enthalpie', 'ΔH = H<sub>P</sub> − H<sub>R</sub> ; exo < 0, endo > 0'],
          ['activation', 'E<sub>a</sub> = H<sub>complexe</sub> − H<sub>R</sub>'],
          ['chaleur molaire', 'Q = n × ΔH'],
          ['liaisons', 'ΔH = Σ brisées − Σ formées'],
          ['calorimétrie', 'Q = mcΔT ; c(eau) = 4,19 J/(g·°C)'],
          ['', 'ΔH = −Q<sub>eau</sub> / n'],
          ['Hess', 'inverser → −ΔH ; × k → k·ΔH ; additionner'],
        ] },
        { t: 'form', h: 'vitesse', items: [
          ['vitesse', 'v = Δ quantité / Δt'],
          ['loi', 'v = k[A]<sup>m</sup>[B]<sup>n</sup>'],
          ['facteurs', 'nature, concentration, surface, T, catalyseur'],
        ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'form', h: 'équilibre', items: [
          ['K<sub>c</sub>', '{{[produits]<sup>coef</sup>|[réactifs]<sup>coef</sup>}} (sans solides ni liquides)'],
          ['Q vs K', 'Q < K → ; Q > K ←'],
          ['Le Chatelier', 'le système s\'oppose au changement'],
        ] } ],
      [ { t: 'form', h: 'acides et bases', items: [
          ['K<sub>eau</sub>', '[H<sup>+</sup>][OH<sup>−</sup>] = 1,0 × 10<sup>−14</sup>'],
          ['pH', '−log[H<sup>+</sup>] ; pH + pOH = 14'],
          ['acide faible', '[H<sup>+</sup>] ≈ √(K<sub>a</sub> × C)'],
          ['K<sub>ps</sub>', 'AB : s<sup>2</sup> ; AB<sub>2</sub> : 4s<sup>3</sup>'],
        ] } ],
    ] },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Gaz —', q: 'pneu 220 kPa, 20 °C → 45 °C', s: [ 'P<sub>2</sub> = 220 × 318 / 293 ≈ 239 kPa' ] },
        { t: 'ex', h: 'PV = nRT —', q: '10,0 L, 25 °C, 150 kPa', s: [ 'n ≈ 0,605 mol' ] },
        { t: 'ex', h: 'Calorimétrie —', q: '2,00 g NaOH, 100 g d\'eau, ΔT = 5,3 °C', s: [ 'ΔH ≈ −44,4 kJ/mol' ] },
        { t: 'ex', h: 'Hess —', q: 'C → CO à partir de C → CO<sub>2</sub> et CO → CO<sub>2</sub>', s: [ 'ΔH = −393,5 + 283,0 = −110,5 kJ' ] } ],
      [ { t: 'ex', h: 'Loi des vitesses —', q: '[A] × 2 → v × 2 ; [B] × 2 → v × 4', s: [ 'v = k[A][B]<sup>2</sup>' ] },
        { t: 'ex', h: 'K<sub>c</sub> —', q: '[HI] = 0,70 ; [H<sub>2</sub>] = [I<sub>2</sub>] = 0,10', s: [ 'K<sub>c</sub> = 0,49 / 0,010 = 49' ] },
        { t: 'ex', h: 'pH —', q: 'NaOH 0,020 mol/L', s: [ 'pOH = 1,70 → pH = 12,30' ] },
        { t: 'ex', h: 'Le Chatelier —', q: 'N<sub>2</sub> + 3 H<sub>2</sub> ⇌ 2 NH<sub>3</sub> + chaleur ; on chauffe', s: [ 'déplacement ← ; [NH<sub>3</sub>] ↓' ] } ],
    ] },
    { t: 'pieges', items: [
      'Températures en °C dans les lois des gaz : toujours en **kelvins**.',
      'Utiliser 22,4 L/mol hors TPN ; mélanger kPa, atm et mm Hg.',
      'Signe de ΔH : inversé en calorimétrie (−Q<sub>eau</sub>) et quand on inverse une équation.',
      'Liaisons : brisées − formées (et non l\'inverse).',
      'Croire qu\'un catalyseur change ΔH ou déplace l\'équilibre.',
      'K<sub>c</sub> : oublier les exposants ou inclure les solides.',
      'pH : oublier le « − » de −log.',
    ] },
    { t: 'retenir', items: [
      'Tout calcul stœchiométrique passe par les **moles**.',
      'Théorie cinétique et théorie des collisions expliquent presque tout : vitesse des particules, énergie, orientation.',
      'Le Chatelier : le système compense en partie ce qu\'on lui impose.',
    ] },
  ],
},

});
})();
