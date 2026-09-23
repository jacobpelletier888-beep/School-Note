/* Éducation financière — secondaire 5 */
(function () {
  const TAUX = 'Les taux et montants officiels (salaire minimum, impôt, cotisations) changent chaque année : les chiffres des exemples sont fictifs ou arrondis.';

DATA.feuilles['education-financiere'] = {

/* ============ 1. Besoins et désirs ============ */
'besoins-desirs': {
  bulle: 'besoins et désirs',
  sous: 'Besoins, désirs et influences sur la consommation',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [
          'Un **besoin** est essentiel pour vivre ou fonctionner : se nourrir, se loger, se vêtir, se soigner, se déplacer pour travailler ou étudier.',
          'Un **désir** (ou envie) rend la vie plus agréable, mais on peut s\'en passer : le dernier cellulaire, des vêtements de marque, un abonnement de plus.',
          'La frontière dépend de la **situation** : une auto peut être un besoin en région et un désir en ville.',
        ] } ],
      [ { t: 'list', h: 'ce qui influence nos achats', items: [
          '**Publicité** et **marketing** (placement de produits, soldes, « offre limitée »).',
          '**Influenceurs** et **réseaux sociaux** (souvent payés pour promouvoir).',
          '**Amis** et **famille** (pression sociale, besoin d\'appartenance).',
          '**Émotions** : stress, ennui, récompense (achat impulsif).',
          '**Valeurs** personnelles : environnement, achat local, prix.',
        ] } ],
    ] },
    { t: 'list', h: 'techniques de vente à reconnaître', items: [
      '**Rareté** : « il n\'en reste que 2 ! » · **urgence** : compte à rebours.',
      '**Prix psychologique** : 19,99 $ semble bien moins cher que 20 $.',
      '**Paiement différé** : « achetez maintenant, payez plus tard ».',
      '**Placement** en magasin : bonbons près de la caisse, produits chers à hauteur des yeux.',
      '**Achats intégrés** et microtransactions dans les jeux.',
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'bien consommer', items: [
          'Se demander : **besoin ou désir ?** Ai-je l\'argent ?',
          'Attendre **24 à 48 heures** avant un achat non planifié.',
          'Comparer les prix et la qualité ; lire les avis.',
          'Penser au **coût total** (entretien, abonnement, accessoires).',
        ] } ],
      [ { t: 'list', h: 'au Québec', items: [
          'La publicité destinée aux enfants de moins de 13 ans est **interdite** (Loi sur la protection du consommateur).',
          'Consommation responsable : réparer, acheter usagé, acheter local.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Classer : loyer, nouvelles espadrilles de marque (les tiennes sont encore bonnes), épicerie, abonnement de musique, passe d\'autobus pour aller au cégep.',
      s: [ 'loyer, épicerie, passe d\'autobus → besoins', 'espadrilles de marque, abonnement de musique → désirs' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Une influenceuse recommande une crème « miracle » avec un code promo. Quelles questions se poser ?',
      s: [ 'est-elle payée ? → souvent indiqué par #partenariat ou #pub', 'ai-je vraiment besoin de ce produit ?', 'existe-t-il des avis indépendants ?', 'le « rabais » est-il réel ? → comparer ailleurs' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Un jeu gratuit propose des « gemmes » à 4,99 $. Sur un an, un joueur en achète deux par semaine.',
      s: [ '2 × 4,99 × 52 ≈ 519 $ par année' ], r: 'un jeu « gratuit » peut coûter cher' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Acheter sous le coup de l\'émotion.',
          'Se fier au prix affiché sans penser au coût total.',
          'Croire qu\'un produit est bon parce qu\'il est populaire en ligne.',
        ] } ],
      [ { t: 'retenir', items: [
          'Besoin = essentiel ; désir = agréable.',
          'Reconnaître les techniques de vente.',
          'Attendre avant un achat impulsif.',
        ] } ],
    ] },
  ],
},

/* ============ 2. Budget ============ */
budget: {
  bulle: 'le budget',
  sous: 'Faire et suivre un budget',
  recto: [
    { t: 'txt', p: [ 'Un **budget** est un plan qui compare les **revenus** (l\'argent qui entre) et les **dépenses** (l\'argent qui sort) pour une période, souvent un mois.' ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'les revenus', items: [
          'Salaire **net** (après retenues), pourboires.',
          'Allocation, argent de poche, bourses, aide financière.',
          'Revenus irréguliers : on prévoit une estimation **prudente**.',
        ] },
        { t: 'list', h: 'les dépenses', items: [
          '**Fixes** : même montant chaque mois (loyer, cellulaire, assurance, transport).',
          '**Variables** : changent d\'un mois à l\'autre (épicerie, sorties, vêtements).',
          '**Occasionnelles** : annuelles ou imprévues (réparations, cadeaux) → on les étale sur 12 mois.',
          '**Épargne** : à traiter comme une dépense fixe (« se payer en premier »).',
        ] } ],
      [ { t: 'box', h: 'le résultat', f: 'revenus − dépenses = surplus (+) ou déficit (−)' },
        { t: 'tab', h: 'une règle simple (repère)', full: true, lcol: true,
          head: ['Part du revenu net', 'Pour…'],
          rows: [
            ['environ **50 %**', 'besoins'],
            ['environ **30 %**', 'désirs'],
            ['environ **20 %**', 'épargne et remboursement de dettes'],
          ],
          note: 'C\'est un repère, pas une loi : chaque situation est différente.' } ],
    ] },
    { t: 'list', h: 'étapes', items: [
      '1. Noter **tous** ses revenus et ses dépenses pendant un mois (appli, chiffrier, carnet).',
      '2. Classer les dépenses ; repérer celles qu\'on peut réduire.',
      '3. Fixer des **objectifs** (ex. épargner 500 $ pour un voyage en 10 mois).',
      '4. Comparer chaque mois le prévu et le réel ; ajuster.',
      '5. Se bâtir un **fonds d\'urgence** (idéalement quelques mois de dépenses essentielles).',
    ] },
  ],
  verso: [
    { t: 'tab', h: 'Exemple — budget mensuel de Léa, 17 ans (chiffres fictifs)', full: true, lcol: true,
      head: ['Revenus', '$', 'Dépenses', '$'],
      rows: [
        ['salaire net (emploi à temps partiel)', '680', 'cellulaire', '45'],
        ['gardiennage', '80', 'transport', '60'],
        ['', '', 'repas et collations', '150'],
        ['', '', 'vêtements et soins', '90'],
        ['', '', 'sorties et abonnements', '160'],
        ['', '', 'épargne (voyage)', '150'],
        ['**Total**', '**760**', '**Total**', '**655**'],
      ] },
    { t: 'ex', h: 'Analyse :', q: '',
      s: [ '760 − 655 = 105 $ de surplus', 'épargne : {{150|760}} ≈ 20 % du revenu ✓', 'objectif voyage de 1500 $ → 1500 ÷ 150 = 10 mois', 'si elle ajoute le surplus : 1500 ÷ 255 ≈ 6 mois' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier les petites dépenses (cafés, applis) qui s\'additionnent.',
          'Utiliser le salaire brut au lieu du net.',
          'Ne pas prévoir les dépenses annuelles.',
        ] } ],
      [ { t: 'retenir', items: [
          'Revenus − dépenses = surplus ou déficit.',
          'Fixes, variables, occasionnelles.',
          'Se payer en premier : épargner d\'abord.',
        ] } ],
    ] },
  ],
},

/* ============ 3. Modes de paiement ============ */
'modes-paiement': {
  bulle: 'modes de paiement',
  sous: 'Les modes de paiement',
  recto: [
    { t: 'tab', full: true, lcol: true,
      head: ['Mode', 'Comment ça marche', 'Avantages', 'Inconvénients'],
      rows: [
        ['**Argent comptant**', 'billets et pièces', 'contrôle facile du budget, accepté presque partout', 'risque de perte ou de vol, aucune trace'],
        ['**Carte de débit**', 'l\'argent sort **immédiatement** du compte', 'pratique, pas de dette', 'frais possibles ; fraude si le NIP est volé'],
        ['**Carte de crédit**', 'on emprunte à l\'émetteur ; facture mensuelle', 'délai de grâce sans intérêts si on paie **tout** le solde, protection des achats, historique de crédit', 'intérêts très élevés si on ne paie pas tout ; risque d\'endettement'],
        ['**Paiement mobile**', 'cellulaire ou montre liés à une carte', 'rapide', 'même risque que la carte liée ; dépenses moins « visibles »'],
        ['**Virement Interac**', 'transfert d\'un compte à un autre', 'simple entre particuliers', 'fraudes par hameçonnage'],
        ['**Achetez maintenant, payez plus tard**', 'paiement en plusieurs versements', 'étale le coût', 'frais ou intérêts si on manque un versement ; incite à dépenser plus'],
        ['**Carte prépayée**', 'on charge un montant à l\'avance', 'dépense limitée', 'frais d\'activation ou de rechargement'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'sécurité', items: [
          'Ne jamais partager son **NIP** ou ses mots de passe.',
          'Méfiance envers les courriels ou textos qui demandent des informations (**hameçonnage**).',
          'Vérifier ses relevés chaque mois.',
          'Signaler rapidement une carte perdue ou volée.',
        ] } ],
      [ { t: 'list', h: 'frais bancaires', items: [
          'Frais mensuels du compte, frais par transaction, guichet d\'une autre institution.',
          'Plusieurs institutions offrent des comptes sans frais pour les jeunes et les étudiants : comparer.',
        ] } ],
    ] },
    { t: 'txt', p: [ '<span class="note">Taxes au Québec : TPS (fédérale) 5 % + TVQ (provinciale) 9,975 % = 14,975 % sur la plupart des achats.</span>' ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Prix affiché : 100 $. Prix à payer avec les taxes ?',
      s: [ 'TPS : 100 × 0,05 = 5,00 $', 'TVQ : 100 × 0,09975 = 9,98 $', 'total : 100 × 1,14975 ≈ 114,98 $' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Débit ou crédit pour acheter des écouteurs à 150 $ ?',
      p: [ 'Si on peut payer le solde complet à l\'échéance, le **crédit** donne une protection et bâtit l\'historique de crédit sans intérêts. Si on risque de ne pas tout payer, le **débit** est plus sûr : l\'argent doit déjà être dans le compte.' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Un texto dit : « Votre colis est retenu. Payez 2,99 $ ici : lien. » Que faire ?',
      p: [ 'Ne pas cliquer : c\'est probablement de l\'**hameçonnage**. Vérifier directement sur le site officiel du transporteur.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Croire que la carte de crédit, « c\'est de l\'argent gratuit ».',
          'Oublier les taxes dans son budget.',
          'Payer « plus tard » plusieurs achats en même temps et perdre le fil.',
        ] } ],
      [ { t: 'retenir', items: [
          'Débit = mon argent ; crédit = argent emprunté.',
          'Taxes : 14,975 %.',
          'Protéger son NIP.',
        ] } ],
    ] },
  ],
},

/* ============ 4. Crédit ============ */
credit: {
  bulle: 'crédit et dossier de crédit',
  sous: 'Le crédit et le dossier de crédit',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [ 'Le **crédit**, c\'est la possibilité d\'emprunter de l\'argent maintenant et de le rembourser plus tard, habituellement **avec des intérêts**. On doit être **majeur** (18 ans) pour signer seul un contrat de crédit.' ] },
        { t: 'list', h: 'formes de crédit', items: [
          '**Carte de crédit** (crédit renouvelable).',
          '**Marge de crédit** : montant disponible qu\'on utilise au besoin.',
          '**Prêt** : montant fixe remboursé par versements.',
          '**Financement** en magasin (meubles, électronique).',
        ] } ],
      [ { t: 'list', h: 'le dossier de crédit', items: [
          'Il contient l\'historique de tes emprunts et de tes paiements.',
          'Au Canada, deux agences le tiennent : **Equifax** et **TransUnion**. Tu peux le consulter gratuitement.',
          'La **cote de crédit** (environ 300 à 900) résume ta fiabilité : plus elle est élevée, mieux c\'est.',
          'Elle sert aux prêteurs, mais aussi parfois aux propriétaires (logement) et aux employeurs.',
        ] } ],
    ] },
    { t: 'tab', h: 'ce qui influence la cote', full: true, lcol: true,
      head: ['Facteur', 'Bonne pratique'],
      rows: [
        ['historique de paiements', 'payer **à temps**, chaque mois (le facteur le plus important)'],
        ['utilisation du crédit', 'utiliser une petite part de sa limite (repère : moins d\'environ 30 %)'],
        ['durée de l\'historique', 'garder longtemps sa première carte'],
        ['demandes de crédit', 'éviter de multiplier les demandes en peu de temps'],
      ] },
    { t: 'list', h: 'la carte de crédit', items: [
      '**Délai de grâce** : si on paie le **solde complet** avant la date d\'échéance, on ne paie pas d\'intérêts sur les achats.',
      '**Paiement minimum** : évite les pénalités, mais les intérêts s\'accumulent sur le reste (souvent autour de 20 % par année).',
      '**Avance de fonds** : intérêts dès le premier jour, à éviter.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Un solde de 1000 $ sur une carte à 19,99 % par année. Intérêts d\'un mois ?',
      s: [ '1000 × {{0,1999|12}} ≈ 16,66 $ par mois' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Une dette de 3000 $ à 20 % par année, en ne payant que le minimum (3 % du solde, au moins 10 $). Combien de temps pour la rembourser ?',
      s: [ 'simulation mois par mois (intérêts ajoutés, puis paiement minimum)', 'environ 207 mois ≈ plus de 17 ans' ],
      r: 'payer seulement le minimum coûte très cher et très longtemps' },
    { t: 'ex', h: 'Exemple 3 —', q: 'Samuel a une carte avec une limite de 1000 $. Il la garde toujours presque pleine (950 $), mais paie le minimum à temps. Bon pour sa cote ?',
      p: [ 'Pas vraiment : il paie à temps (bien), mais il **utilise 95 %** de sa limite, ce qui nuit à sa cote et lui coûte des intérêts. Mieux vaut garder un solde bas et le payer au complet.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Payer seulement le minimum.',
          'Faire une avance de fonds.',
          'Prêter sa carte ou cosigner un prêt sans comprendre les risques.',
        ] } ],
      [ { t: 'retenir', items: [
          'Crédit = emprunt avec intérêts.',
          'Payer tout le solde, à temps.',
          'Cote de crédit : Equifax, TransUnion.',
        ] } ],
    ] },
  ],
},

/* ============ 5. Intérêts ============ */
interets: {
  bulle: 'intérêts',
  sous: 'Intérêt simple, intérêt composé et coût du crédit',
  recto: [
    { t: 'txt', p: [ 'L\'**intérêt** est le prix de l\'argent : on le **paie** quand on emprunte, on le **reçoit** quand on épargne ou qu\'on place.' ] },
    { t: 'cols', c: [
      [ { t: 'form', h: 'intérêt simple', items: [
          ['intérêt', 'I = C × i × t'],
          ['montant final', 'M = C + I'],
        ], note: 'C : capital · i : taux annuel en décimal · t : temps en années. L\'intérêt est calculé seulement sur le capital de départ.' } ],
      [ { t: 'form', h: 'intérêt composé', items: [
          ['capital accumulé', 'C<sub>n</sub> = C<sub>0</sub>(1 + i)<sup>n</sup>'],
          ['plusieurs périodes par an', 'C = C<sub>0</sub>(1 + {{i|k}})<sup>kt</sup>'],
        ], note: 'Les intérêts s\'ajoutent au capital et produisent à leur tour des intérêts : « des intérêts sur les intérêts ».' } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'box', h: 'la règle de 72 (approximation)', f: 'temps pour doubler ≈ {{72|taux en %}}', note: 'à 6 %, un placement double en environ 12 ans' } ],
      [ { t: 'list', h: 'le coût du crédit', items: [
          'C\'est tout ce qu\'on paie **en plus** du montant emprunté : intérêts + frais.',
          'Le **taux annuel** permet de comparer les offres.',
          'Plus la durée est longue, plus on paie d\'intérêts au total, même si les versements sont plus petits.',
        ] } ],
    ] },
    { t: 'list', h: 'le temps est ton allié (ou ton ennemi)', items: [
      'Épargner **tôt**, même de petits montants, profite beaucoup de l\'intérêt composé.',
      'Une dette qui traîne grossit aussi par l\'intérêt composé.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: '1000 $ placés à 3 % d\'intérêt simple pendant 4 ans.',
      s: [ 'I = 1000 × 0,03 × 4 = 120 $', 'M = 1120 $' ] },
    { t: 'ex', h: 'Exemple 2 —', q: '1000 $ placés à 5 % composé annuellement pendant 10 ans.',
      s: [ 'C = 1000 × 1,05<sup>10</sup> ≈ 1628,89 $', 'avec l\'intérêt simple : 1000 + 1000 × 0,05 × 10 = 1500 $' ],
      r: 'le composé rapporte 128,89 $ de plus' },
    { t: 'ex', h: 'Exemple 3 —', q: '100 $ par mois dans un CELI à 5 % par année (composé chaque mois). Si on commence à 25 ans plutôt qu\'à 40 ans, combien aura-t-on à 65 ans ?',
      s: [ 'dès 25 ans (40 ans d\'épargne) → environ 152 600 $ // 48 000 $ versés', 'dès 40 ans (25 ans d\'épargne) → environ 59 550 $ // 30 000 $ versés' ],
      r: 'commencer 15 ans plus tôt rapporte plus du double' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Écrire le taux en % au lieu du décimal (5 % = 0,05).',
          'Confondre intérêt simple et composé.',
          'Regarder seulement le versement mensuel d\'un prêt, pas le coût total.',
        ] } ],
      [ { t: 'retenir', items: [
          'Simple : I = Cit.',
          'Composé : C<sub>0</sub>(1 + i)<sup>n</sup>.',
          'Règle de 72 ; commencer tôt.',
        ] } ],
    ] },
  ],
},

/* ============ 6. Prêts ============ */
prets: {
  bulle: 'types de prêts',
  sous: 'Les types de prêts',
  recto: [
    { t: 'tab', full: true, lcol: true,
      head: ['Prêt', 'Pour…', 'Particularités'],
      rows: [
        ['**prêt personnel**', 'une dépense précise', 'montant, taux et durée fixes ; versements réguliers'],
        ['**prêt auto**', 'acheter un véhicule', 'le véhicule sert de **garantie** : le prêteur peut le reprendre si on ne paie pas'],
        ['**prêt hypothécaire**', 'acheter une propriété', 'longue durée (amortissement souvent de 25 ans) ; **mise de fonds** requise ; la maison sert de garantie'],
        ['**marge de crédit**', 'besoins variables', 'on paie des intérêts seulement sur ce qu\'on utilise ; taux souvent plus bas qu\'une carte'],
        ['**prêt étudiant**', 'les études', 'Aide financière aux études : intérêts payés par le gouvernement pendant les études à temps plein'],
        ['**prêt sur salaire**', 'dépannage rapide', 'coût extrêmement élevé : à éviter'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'vocabulaire', items: [
          '**Capital** : montant emprunté.',
          '**Taux d\'intérêt** : fixe (ne change pas) ou variable (suit le marché).',
          '**Terme** : durée du contrat de taux ; **amortissement** : durée totale pour tout rembourser.',
          '**Garantie** (bien donné en garantie) ; **endosseur** ou cosignataire : paie si l\'emprunteur ne paie pas.',
          '**Ratio d\'endettement** : part du revenu qui sert à rembourser des dettes.',
        ] } ],
      [ { t: 'box', h: 'versement d\'un prêt', f: 'versement = {{r × capital|1 − (1 + r)<sup>−n</sup>}}', note: 'r : taux par période (taux annuel ÷ 12 pour des versements mensuels) · n : nombre de versements. En pratique, on utilise un calculateur en ligne.' } ],
    ] },
    { t: 'list', h: 'avant d\'emprunter', items: [
      'Ai-je vraiment besoin d\'emprunter ? Puis-je épargner d\'abord ?',
      'Comparer le **taux**, les **frais** et le **coût total** chez plusieurs prêteurs.',
      'Vérifier que le versement entre dans mon **budget**.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Prêt auto de 20 000 $ à 6 % par année sur 5 ans (versements mensuels).',
      s: [ 'r = {{0,06|12}} = 0,005 · n = 60', 'versement = {{0,005 × 20 000|1 − 1,005<sup>−60</sup>}} ≈ 386,66 $', 'total payé : 386,66 × 60 ≈ 23 199 $', 'coût du crédit : 23 199 − 20 000 ≈ 3199 $' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Même prêt sur 7 ans plutôt que 5 : le versement baisse. Est-ce une bonne affaire ?',
      p: [ 'Le versement mensuel est plus petit, mais on paie des intérêts **plus longtemps** : le coût total augmente. En plus, l\'auto perd de la valeur ; on risque de devoir plus que ce qu\'elle vaut.' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Ton ami te demande d\'endosser son prêt. Que risques-tu ?',
      p: [ 'S\'il ne paie pas, **tu devras payer** à sa place, et ton dossier de crédit peut être touché.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Choisir le prêt avec le plus petit versement sans regarder le coût total.',
          'Emprunter pour des désirs (voyages, gadgets).',
          'Utiliser un prêt sur salaire.',
        ] } ],
      [ { t: 'retenir', items: [
          'Comparer taux, frais, coût total.',
          'Plus long = plus d\'intérêts.',
          'Endosser = s\'engager à payer.',
        ] } ],
    ] },
  ],
},

/* ============ 7. Louer ou acheter ============ */
'louer-acheter': {
  bulle: 'louer ou acheter',
  sous: 'Louer ou acheter (logement, véhicule)',
  recto: [
    { t: 'cols', c: [
      [ { t: 'tab', h: 'le logement', full: true, lcol: true,
          head: ['', 'Louer', 'Acheter'],
          rows: [
            ['argent au départ', 'peu (souvent aucun dépôt permis au Québec, sauf exceptions)', 'mise de fonds, frais de notaire, taxe de bienvenue, inspection'],
            ['coûts réguliers', 'loyer (parfois chauffage, électricité)', 'versement hypothécaire, taxes municipales et scolaires, assurances, entretien'],
            ['flexibilité', 'on peut déménager à la fin du bail', 'vendre prend du temps et coûte des frais'],
            ['à long terme', 'on ne bâtit pas d\'avoir', 'on bâtit une valeur (équité)'],
          ] } ],
      [ { t: 'list', h: 'louer au Québec', items: [
          'Le **bail** est un contrat écrit (formulaire obligatoire du Tribunal administratif du logement).',
          'Le **Tribunal administratif du logement** (TAL) règle les litiges entre locataires et propriétaires.',
          'Le propriétaire doit fournir un logement en bon état ; le locataire doit payer le loyer et prendre soin du logement.',
          'Le locataire peut refuser une hausse de loyer ; le TAL peut alors la fixer.',
        ] } ],
    ] },
    { t: 'tab', h: 'le véhicule', full: true, lcol: true,
      head: ['', 'Location', 'Achat (comptant ou financé)'],
      rows: [
        ['paiements', 'souvent plus bas', 'plus élevés si financé'],
        ['à la fin', 'on remet le véhicule (ou on l\'achète)', 'le véhicule nous appartient'],
        ['limites', 'kilométrage limité, frais d\'usure', 'aucune'],
        ['pour qui ?', 'qui veut un véhicule récent et roule peu', 'qui garde longtemps son véhicule'],
      ] },
    { t: 'list', h: 'comparer', items: [
      'Calculer le **coût total** sur la même période, pas seulement le paiement mensuel.',
      'Considérer l\'**usage réel** : transport en commun, autopartage, vélo, auto usagée.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Auto neuve : location à 350 $/mois pendant 4 ans + 1000 $ au départ, ou achat d\'une auto usagée à 12 000 $ revendue 6000 $ après 4 ans (chiffres fictifs, entretien semblable).',
      s: [ 'location : 1000 + 350 × 48 = 17 800 $ // et on n\'a plus d\'auto', 'usagée : 12 000 − 6000 = 6000 $ de perte de valeur' ],
      r: 'l\'auto usagée coûte beaucoup moins cher sur 4 ans' },
    { t: 'ex', h: 'Exemple 2 —', q: 'Première année en appartement : quelles dépenses prévoir en plus du loyer ?',
      s: [ 'électricité, Internet, cellulaire', 'assurance habitation (locataire)', 'meubles, déménagement', 'épicerie, produits ménagers' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Le propriétaire demande 1000 $ de dépôt de garantie pour signer le bail. Est-ce permis ?',
      p: [ 'Au Québec, le locateur ne peut généralement **pas exiger de dépôt** autre que le premier mois de loyer. En cas de doute, on consulte le TAL.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Comparer seulement les paiements mensuels.',
          'Oublier les coûts cachés (assurance, entretien, taxes).',
          'Signer un bail sans le lire.',
        ] } ],
      [ { t: 'retenir', items: [
          'Louer : flexible, pas d\'avoir.',
          'Acheter : avoir, mais coûts et responsabilités.',
          'TAL pour les litiges de logement.',
        ] } ],
    ] },
  ],
},

/* ============ 8. Contrats et protection ============ */
contrats: {
  bulle: 'contrats et protection',
  sous: 'Contrats et protection du consommateur',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [ 'Un **contrat** est une entente qui crée des obligations entre des personnes. Il peut être écrit ou verbal (un achat en magasin est un contrat).' ] },
        { t: 'list', h: 'avant de signer', items: [
          'Lire **tout**, y compris les petits caractères.',
          'Poser des questions ; ne pas se sentir pressé.',
          'Garder une **copie** et les reçus.',
          'Mineurs : un contrat qui leur cause un préjudice (lésion) peut être annulé, sauf pour les besoins courants.',
        ] } ],
      [ { t: 'list', h: 'la protection du consommateur au Québec', items: [
          '**Loi sur la protection du consommateur** (LPC).',
          '**Office de la protection du consommateur** (OPC) : informe, reçoit les plaintes.',
          'Le **prix affiché** doit être le prix total (sauf taxes de vente).',
          '**Commerçant itinérant** (vente à domicile) : 10 jours pour annuler.',
          'Contrats de service à long terme (gym, cours) : on peut résilier, en payant une pénalité limitée.',
          'Petites créances : tribunal pour les litiges de moins de 15 000 $, sans avocat.',
        ] } ],
    ] },
    { t: 'tab', h: 'les garanties', full: true, lcol: true,
      head: ['Garantie', 'Ce que c\'est'],
      rows: [
        ['**garantie légale**', 'automatique et gratuite (LPC) : le bien doit servir à l\'usage prévu et durer un temps raisonnable selon son prix et son usage'],
        ['**garantie du fabricant**', 'offerte par le fabricant, durée précise (ex. 1 an)'],
        ['**garantie prolongée**', 'vendue en supplément ; souvent inutile, car la garantie légale couvre déjà beaucoup'],
      ],
      note: 'Le commerçant doit informer le consommateur de la garantie légale avant de lui vendre une garantie prolongée.' },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Un réfrigérateur de 1500 $ tombe en panne après 3 ans. La garantie du fabricant (1 an) est expirée. Recours ?',
      p: [ 'La **garantie légale** peut s\'appliquer : un réfrigérateur de ce prix devrait durer plus longtemps. On s\'adresse d\'abord au commerçant par écrit (mise en demeure), puis à l\'OPC ou aux petites créances.' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Un vendeur de thermopompes à domicile fait signer un contrat. Le lendemain, on change d\'idée.',
      p: [ 'Contrat conclu avec un **commerçant itinérant** : on peut l\'annuler sans frais dans les **10 jours** suivant la réception du double du contrat, en envoyant un avis.' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Le prix affiché d\'un billet de spectacle est 50 $, mais à la caisse on ajoute 12 $ de « frais de service ».',
      p: [ 'Selon la LPC, le prix annoncé doit inclure **tous les frais** (sauf les taxes de vente). Le consommateur peut porter plainte à l\'OPC.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Payer une garantie prolongée sans connaître la garantie légale.',
          'Jeter ses reçus.',
          'Signer sous la pression d\'un vendeur.',
        ] } ],
      [ { t: 'retenir', items: [
          'LPC + OPC protègent le consommateur.',
          'Garantie légale : automatique.',
          'Itinérant : 10 jours pour annuler.',
        ] } ],
    ] },
  ],
},

/* ============ 9. Assurances ============ */
assurances: {
  bulle: 'les assurances',
  sous: 'Les assurances',
  recto: [
    { t: 'txt', p: [ 'L\'**assurance** permet de se protéger contre une perte financière importante en échange d\'un paiement régulier, la **prime**. Les primes de tous les assurés servent à payer les pertes de ceux qui ont un sinistre.' ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'vocabulaire', items: [
          '**Prime** : montant payé pour être assuré.',
          '**Franchise** : partie de la perte que l\'assuré paie lui-même.',
          '**Sinistre** (réclamation) : événement couvert (vol, accident, incendie).',
          '**Police** : le contrat d\'assurance.',
          '**Bénéficiaire** : personne qui reçoit l\'argent (assurance vie).',
        ] } ],
      [ { t: 'list', h: 'franchise et prime', items: [
          'Franchise plus **élevée** → prime plus **basse** (on assume plus de risques).',
          'Il faut pouvoir payer la franchise en cas de sinistre.',
        ] } ],
    ] },
    { t: 'tab', h: 'les principales assurances', full: true, lcol: true,
      head: ['Assurance', 'Couvre', 'Au Québec'],
      rows: [
        ['**auto**', 'dommages causés aux autres (responsabilité civile) et à son véhicule', 'responsabilité civile **obligatoire** ; les **blessures corporelles** sont couvertes par la SAAQ'],
        ['**habitation** (propriétaire ou locataire)', 'biens (vol, incendie, dégâts d\'eau) et responsabilité civile', 'souvent exigée dans le bail'],
        ['**vie**', 'verse un montant aux bénéficiaires au décès', 'importante si des personnes dépendent de ton revenu'],
        ['**invalidité**', 'remplace une partie du revenu si on ne peut plus travailler', 'souvent offerte par l\'employeur'],
        ['**santé**', 'soins médicaux et hospitaliers', 'RAMQ (public) ; assurance médicaments publique ou privée'],
        ['**voyage**', 'soins d\'urgence à l\'étranger, annulation', 'la RAMQ rembourse peu à l\'étranger'],
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Un vol de 3000 $ de biens dans ton appartement ; ton assurance locataire a une franchise de 500 $.',
      s: [ 'l\'assureur paie : 3000 − 500 = 2500 $', 'tu paies : 500 $' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Franchise de 500 $ (prime 25 $/mois) ou de 1000 $ (prime 20 $/mois) ?',
      s: [ 'économie de prime : 5 × 12 = 60 $ par année', 'risque supplémentaire : 500 $ de plus par sinistre' ],
      p: [ 'La franchise de 1000 $ est avantageuse si on a peu de sinistres **et** un fonds d\'urgence pour la payer.' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Un dégât d\'eau venant de ton appartement abîme celui du voisin d\'en bas. Quelle protection joue ?',
      p: [ 'La **responsabilité civile** de ton assurance habitation (dommages causés aux autres).' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Ne pas s\'assurer comme locataire (« je n\'ai rien de valeur »).',
          'Choisir une franchise qu\'on ne pourrait pas payer.',
          'Voyager sans assurance voyage.',
        ] } ],
      [ { t: 'retenir', items: [
          'Prime, franchise, sinistre, police.',
          'Franchise ↑ → prime ↓.',
          'Auto : responsabilité civile obligatoire ; SAAQ pour les blessures.',
        ] } ],
    ] },
  ],
},

/* ============ 10. Épargne et placements ============ */
epargne: {
  bulle: 'épargne et placements',
  sous: 'Épargne et placements',
  recto: [
    { t: 'cols', c: [
      [ { t: 'list', h: 'pourquoi épargner ?', items: [
          '**Fonds d\'urgence** : imprévus (perte d\'emploi, réparation) ; repère : quelques mois de dépenses essentielles.',
          '**Projets** à court terme (voyage, auto) et à long terme (études, maison, retraite).',
          'Profiter de l\'**intérêt composé**.',
        ] },
        { t: 'tab', h: 'risque et rendement', full: true, lcol: true,
          head: ['Placement', 'Risque', 'Rendement espéré'],
          rows: [
            ['compte d\'épargne', 'très faible', 'faible'],
            ['**CPG** (certificat de placement garanti)', 'très faible', 'faible, fixe'],
            ['**obligations**', 'faible à moyen', 'moyen'],
            ['**actions**', 'élevé (la valeur varie)', 'plus élevé à long terme'],
            ['fonds communs, **FNB**', 'selon leur contenu', 'selon leur contenu ; attention aux frais'],
          ] } ],
      [ { t: 'tab', h: 'les comptes enregistrés', full: true, lcol: true,
          head: ['Compte', 'Principe'],
          rows: [
            ['**CELI** (compte d\'épargne libre d\'impôt)', 'dès 18 ans ; les gains ne sont **jamais imposés** ; retraits libres ; plafond annuel de cotisation'],
            ['**REER** (régime enregistré d\'épargne-retraite)', 'cotisation **déductible** d\'impôt ; l\'argent est imposé au retrait ; pour la retraite (et certains programmes : achat d\'une première maison, études)'],
            ['**REEE** (régime enregistré d\'épargne-études)', 'pour les études d\'un enfant ; les gouvernements ajoutent des **subventions** : 20 % au fédéral et 10 % au Québec, jusqu\'à des plafonds annuels'],
            ['**CELIAPP**', 'pour l\'achat d\'une première propriété ; déductible et retrait non imposé pour cet achat'],
          ] } ],
    ] },
    { t: 'list', h: 'principes de base', items: [
      '**Diversifier** : ne pas mettre tous ses œufs dans le même panier.',
      'Plus l\'horizon est long, plus on peut accepter de risque.',
      'Se méfier des promesses de gains rapides et garantis : souvent des **fraudes**. Vérifier que le conseiller est inscrit à l\'**Autorité des marchés financiers** (AMF).',
      'Les dépôts sont protégés jusqu\'à 100 000 $ par institution (AMF pour les coopératives comme Desjardins, SADC pour les banques), selon certaines conditions.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Épargner 50 $ par mois pendant 5 ans à 4 % par année (composé chaque mois).',
      s: [ 'versé : 50 × 60 = 3000 $', 'accumulé ≈ 3315 $ // environ 315 $ d\'intérêts' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Des parents versent 2500 $ par année dans le REEE de leur enfant. Subventions reçues ?',
      s: [ 'fédéral : 20 % × 2500 = 500 $', 'Québec : 10 % × 2500 = 250 $', 'total : 750 $ de plus par année' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'CELI ou REER pour un étudiant qui gagne peu ?',
      p: [ 'Souvent le **CELI** : à faible revenu, la déduction du REER rapporte peu, et le CELI permet des retraits sans impôt pour des projets. Le REER devient plus intéressant quand le revenu (et le taux d\'impôt) est plus élevé.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Placer à risque de l\'argent dont on aura besoin bientôt.',
          'Croire aux rendements « garantis » élevés.',
          'Oublier les frais de gestion des fonds.',
        ] } ],
      [ { t: 'retenir', items: [
          'Fonds d\'urgence d\'abord.',
          'Risque ↑ → rendement espéré ↑.',
          'CELI, REER, REEE : leurs avantages fiscaux.',
        ] } ],
    ] },
  ],
},

/* ============ 11. Statuts de travail ============ */
statuts: {
  bulle: 'statuts de travail',
  sous: 'Les statuts de travail',
  recto: [
    { t: 'tab', full: true, lcol: true,
      head: ['Statut', 'Caractéristiques'],
      rows: [
        ['**salarié** (employé)', 'travaille pour un employeur qui dirige le travail ; reçoit un salaire ; l\'employeur fait les **retenues à la source** et paie sa part des cotisations ; protégé par les normes du travail'],
        ['**travailleur autonome**', 'travaille à son compte, pour des clients ; fixe ses prix et ses horaires ; **aucune retenue** : il doit mettre de l\'argent de côté pour ses impôts et payer les deux parts de certaines cotisations (ex. RRQ) ; pas d\'assurance-emploi habituelle'],
        ['**temps plein** / **temps partiel**', 'selon le nombre d\'heures par semaine'],
        ['**permanent** / **temporaire** (contractuel, saisonnier)', 'selon la durée de l\'emploi'],
        ['**syndiqué**', 'conditions négociées dans une convention collective ; cotisation syndicale'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'le travail au noir', items: [
          'Travail payé « en dessous de la table », sans déclaration.',
          'C\'est **illégal** : ni retenues, ni protection (accident, normes du travail), ni cotisation à la retraite ou à l\'assurance-emploi.',
          'Le travailleur perd des droits et risque des pénalités.',
        ] } ],
      [ { t: 'list', h: 'l\'économie de plateforme', items: [
          'Livraison, transport, microtâches par application.',
          'Souvent considérés comme travailleurs autonomes : revenus variables, peu de protections.',
        ] } ],
    ] },
    { t: 'list', h: 'l\'âge pour travailler au Québec', items: [
      'Depuis 2023, l\'âge minimum général pour travailler est de **14 ans** (avec certaines exceptions, ex. gardiennage, entreprise familiale).',
      'Pour les jeunes soumis à l\'obligation de fréquentation scolaire, le travail est limité pendant l\'année scolaire (notamment un maximum d\'heures par semaine). Vérifie les règles à jour auprès de la CNESST.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Julien gagne 800 $ en tondant des pelouses pour ses clients cet été. Quel est son statut ?',
      p: [ '**Travailleur autonome** : il choisit ses clients, ses tarifs et son horaire. Il doit déclarer ce revenu dans ses déclarations de revenus.' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Comparer : 18 $/h comme salarié ou 22 $/h comme autonome (chiffres fictifs), 30 h/semaine.',
      s: [ 'salarié : 18 × 30 = 540 $ brut ; retenues faites ; vacances et congés payés', 'autonome : 22 × 30 = 660 $ ; mais il paie seul ses cotisations, son matériel, ses assurances, et aucun congé payé' ],
      r: 'le taux horaire plus élevé ne veut pas toujours dire plus d\'argent au final' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Accepter du travail au noir « pour gagner plus ».',
          'Oublier de mettre de côté l\'impôt quand on est autonome.',
          'Comparer seulement les taux horaires.',
        ] } ],
      [ { t: 'retenir', items: [
          'Salarié : retenues faites par l\'employeur.',
          'Autonome : liberté, mais tout à sa charge.',
          'Travail au noir : illégal, sans protection.',
        ] } ],
    ] },
  ],
},

/* ============ 12. Droits et obligations ============ */
droits: {
  bulle: 'droits au travail',
  sous: 'Droits et obligations au travail',
  recto: [
    { t: 'txt', p: [ 'Au Québec, la **Loi sur les normes du travail** fixe les conditions **minimales** de travail. La **CNESST** (Commission des normes, de l\'équité, de la santé et de la sécurité du travail) la fait respecter et reçoit les plaintes.' ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'normes importantes', items: [
          '**Salaire minimum** : fixé par le gouvernement, révisé chaque année (habituellement le 1<sup>er</sup> mai). Un taux plus bas existe pour les employés au pourboire.',
          '**Heures supplémentaires** : au-delà de **40 h** par semaine, payées à **taux et demi** (ou compensées en congé).',
          '**Pauses** : 30 minutes pour le repas après 5 h de travail (payée si on ne peut pas quitter son poste).',
          '**Vacances** : 2 semaines après 1 an (indemnité de 4 %), 3 semaines après 3 ans (6 %).',
          '**Jours fériés** et congés (maladie, obligations familiales).',
          '**Harcèlement psychologique et sexuel** : l\'employeur doit le prévenir et le faire cesser.',
        ] } ],
      [ { t: 'list', h: 'obligations du travailleur', items: [
          'Être ponctuel, faire son travail avec soin.',
          'Respecter les règles de santé et de sécurité.',
          'Être loyal et discret (secrets de l\'entreprise).',
        ] },
        { t: 'list', h: 'obligations de l\'employeur', items: [
          'Payer le salaire dû, remettre un **talon de paie**.',
          'Offrir un milieu **sécuritaire**.',
          'Respecter les normes et la **Charte des droits et libertés** (pas de discrimination).',
        ] },
        { t: 'list', h: 'santé et sécurité', items: [
          'Droit de **refuser** un travail dangereux.',
          'Accident de travail : indemnisation par la CNESST.',
        ] } ],
    ] },
    { t: 'txt', p: [ '<span class="note">' + TAUX + '</span>' ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Maya, payée 17 $/h (fictif), a travaillé 44 h cette semaine. Salaire brut ?',
      s: [ '40 h × 17 = 680 $', '4 h × 17 × 1,5 = 102 $ // heures supplémentaires', 'total : 782 $' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Après 10 mois dans son emploi, Loïc quitte. A-t-il droit à une indemnité de vacances ?',
      p: [ 'Oui : moins d\'un an de service donne droit à **4 %** du salaire brut gagné pendant la période de référence.' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Le gérant demande à une employée de monter sur une échelle brisée.',
      p: [ 'Elle peut **refuser** ce travail dangereux (Loi sur la santé et la sécurité du travail) et avertir son supérieur ou la CNESST.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Croire qu\'un étudiant n\'a pas les mêmes droits.',
          'Accepter de ne pas être payé pour une « formation » obligatoire.',
          'Ne pas garder ses talons de paie.',
        ] } ],
      [ { t: 'retenir', items: [
          'Normes du travail = minimums.',
          'Plus de 40 h → taux et demi.',
          'CNESST pour les plaintes et les accidents.',
        ] } ],
    ] },
  ],
},

/* ============ 13. Salaire brut et net ============ */
salaire: {
  bulle: 'salaire brut et net',
  sous: 'Salaire brut, salaire net et talon de paie',
  recto: [
    { t: 'cols', c: [
      [ { t: 'box', f: 'salaire net = salaire brut − retenues', note: 'brut : ce que l\'employeur verse avant tout · net : ce qui arrive dans ton compte' },
        { t: 'list', h: 'formes de rémunération', items: [
          '**taux horaire** × heures travaillées ;',
          '**salaire annuel** divisé en paies (aux 2 semaines : 26 paies par année) ;',
          '**commission** (pourcentage des ventes), **pourboires**, **primes**.',
        ] } ],
      [ { t: 'tab', h: 'lire un talon de paie', full: true, lcol: true,
          head: ['Section', 'Contenu'],
          rows: [
            ['identification', 'employeur, employé, période de paie'],
            ['gains', 'heures, taux, heures supplémentaires, vacances → **salaire brut**'],
            ['retenues', 'impôts, RRQ, assurance-emploi, RQAP, cotisations syndicales, assurances collectives'],
            ['net', '**salaire net** de la période'],
            ['cumulatif', 'totaux depuis le début de l\'année'],
          ] } ],
    ] },
    { t: 'list', h: 'à savoir', items: [
      'Les pourboires doivent être déclarés : ils sont imposables.',
      'Vérifier chaque talon : heures, taux, retenues. Une erreur peut arriver.',
      'Le salaire net peut varier d\'une paie à l\'autre (heures différentes, primes).',
    ] },
    { t: 'txt', p: [ '<span class="note">' + TAUX + '</span>' ] },
  ],
  verso: [
    { t: 'tab', h: 'Exemple — talon de paie simplifié (montants fictifs)', full: true, lcol: true,
      head: ['Élément', 'Montant ($)'],
      rows: [
        ['25 h × 17,00 $', '425,00'],
        ['pourboires déclarés', '60,00'],
        ['**salaire brut**', '**485,00**'],
        ['impôt fédéral', '− 22,00'],
        ['impôt du Québec', '− 28,00'],
        ['RRQ', '− 24,00'],
        ['assurance-emploi', '− 6,00'],
        ['RQAP', '− 2,00'],
        ['**total des retenues**', '**− 82,00**'],
        ['**salaire net**', '**403,00**'],
      ] },
    { t: 'ex', h: 'Analyse :', q: '',
      s: [ 'retenues : 22 + 28 + 24 + 6 + 2 = 82 $', 'net : 485 − 82 = 403 $', 'part retenue : {{82|485}} ≈ 17 %' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Faire son budget avec le salaire brut.',
          'Oublier de déclarer ses pourboires.',
          'Ne pas vérifier ses heures sur le talon.',
        ] } ],
      [ { t: 'retenir', items: [
          'Net = brut − retenues.',
          'Talon : gains, retenues, net, cumulatif.',
          'Pourboires imposables.',
        ] } ],
    ] },
  ],
},

/* ============ 14. Retenues ============ */
retenues: {
  bulle: 'retenues à la source',
  sous: 'Les retenues à la source',
  recto: [
    { t: 'txt', p: [ 'Les **retenues à la source** sont des montants que l\'employeur retire de chaque paie et envoie aux gouvernements (ou à d\'autres organismes) au nom de l\'employé.' ] },
    { t: 'tab', h: 'retenues obligatoires au Québec', full: true, lcol: true,
      head: ['Retenue', 'Gouvernement', 'À quoi ça sert'],
      rows: [
        ['**impôt fédéral**', 'Canada (ARC)', 'services du fédéral : défense, pensions de vieillesse, transferts aux provinces…'],
        ['**impôt du Québec**', 'Québec (Revenu Québec)', 'santé, éducation, services sociaux…'],
        ['**RRQ** (Régime de rentes du Québec)', 'Québec (Retraite Québec)', 'rente de **retraite** et prestations en cas d\'invalidité ou de décès'],
        ['**assurance-emploi** (AE)', 'Canada', 'revenu temporaire en cas de **perte d\'emploi**'],
        ['**RQAP** (Régime québécois d\'assurance parentale)', 'Québec', 'prestations lors d\'une **naissance** ou d\'une **adoption**'],
      ],
      note: 'L\'employeur paie aussi sa propre part pour le RRQ, l\'AE et le RQAP, en plus d\'autres cotisations (santé, CNESST).' },
    { t: 'cols', c: [
      [ { t: 'list', h: 'retenues facultatives ou selon l\'emploi', items: [
          'cotisation syndicale ;',
          'assurances collectives ;',
          'régime de retraite de l\'employeur ;',
          'épargne sur la paie, dons.',
        ] } ],
      [ { t: 'list', h: 'bon à savoir', items: [
          'Le Québec a son propre régime de rentes (**RRQ**) plutôt que le RPC du reste du Canada.',
          'Si on a trop payé d\'impôt pendant l\'année, on reçoit un **remboursement** après la déclaration de revenus.',
          'Un faible revenu peut entraîner peu ou pas d\'impôt retenu.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Associer chaque situation à la retenue qui la finance.',
      s: [ 'Anne perd son emploi lors d\'une fermeture → assurance-emploi', 'Marc prend un congé à la naissance de sa fille → RQAP', 'Louise prend sa retraite à 65 ans → RRQ (rente)', 'la construction d\'une école → impôt du Québec' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Pourquoi un travailleur autonome doit-il mettre de l\'argent de côté ?',
      p: [ 'Aucune retenue n\'est faite sur ses revenus : il devra payer son impôt et ses cotisations (dont les deux parts du RRQ) lors de ses déclarations, parfois par acomptes provisionnels.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Croire que les retenues sont « perdues » : elles financent des protections et des services.',
          'Confondre RRQ (retraite) et RQAP (parents).',
          'Oublier que l\'employeur cotise aussi.',
        ] } ],
      [ { t: 'retenir', items: [
          'Impôts fédéral et du Québec, RRQ, AE, RQAP.',
          'Chaque retenue a un but précis.',
          'Trop payé → remboursement.',
        ] } ],
    ] },
  ],
},

/* ============ 15. Impôts ============ */
impots: {
  bulle: 'impôts et déclaration',
  sous: 'Impôts et déclaration de revenus',
  recto: [
    { t: 'cols', c: [
      [ { t: 'list', h: 'les déclarations au Québec', items: [
          'Les Québécois remplissent **deux déclarations** : une **fédérale** (Agence du revenu du Canada) et une **provinciale** (Revenu Québec).',
          'Date limite : habituellement le **30 avril** (15 juin pour les travailleurs autonomes, mais le solde dû reste payable au 30 avril).',
          'Documents : feuillets **T4** (fédéral) et **relevés 1** (Québec) de l\'employeur, reçus (frais de scolarité, dons…).',
          'Même avec un petit revenu, c\'est utile : **remboursement** d\'impôt retenu et accès à des **crédits** (crédit pour la TPS, crédit d\'impôt pour solidarité).',
        ] } ],
      [ { t: 'list', h: 'un impôt progressif', items: [
          'Le revenu est découpé en **tranches** ; chaque tranche est imposée à un taux différent, de plus en plus élevé.',
          '**Taux marginal** : taux appliqué au dernier dollar gagné.',
          '**Taux moyen** (effectif) : impôt total ÷ revenu imposable.',
          'Gagner plus ne fait **jamais** perdre d\'argent : seul le montant au-dessus du seuil est imposé au taux plus élevé.',
        ] } ],
    ] },
    { t: 'tab', h: 'du revenu à l\'impôt', full: true, lcol: true,
      head: ['Étape', 'Explication'],
      rows: [
        ['revenu total', 'salaire, pourboires, revenus d\'autonome, intérêts…'],
        ['− déductions', 'ex. cotisations REER, cotisations syndicales → revenu **imposable**'],
        ['× taux par tranche', 'impôt de base'],
        ['− crédits d\'impôt', 'montant personnel de base, frais de scolarité, dons…'],
        ['− impôt déjà retenu', '= remboursement (si négatif) ou solde à payer'],
      ] },
    { t: 'list', h: 'les taxes', items: [
      'Taxes de vente : **TPS 5 %** + **TVQ 9,975 %**.',
      'Taxes foncières (municipales, scolaires) : payées par les propriétaires (et indirectement par les locataires via le loyer).',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple — impôt progressif (barème fictif)', q: 'Barème : 15 % jusqu\'à 50 000 $, puis 20 % sur la partie au-dessus. Revenu imposable : 60 000 $.',
      s: [ '1<sup>re</sup> tranche : 50 000 × 0,15 = 7500 $', '2<sup>e</sup> tranche : (60 000 − 50 000) × 0,20 = 2000 $', 'impôt total : 9500 $', 'taux marginal : 20 % · taux moyen : {{9500|60 000}} ≈ 15,8 %' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Une étudiante a gagné 6000 $ et l\'employeur a retenu 350 $ d\'impôt. Vaut-il la peine de produire ses déclarations ?',
      p: [ 'Oui : son revenu est probablement sous le seuil imposable ; elle récupérera l\'impôt retenu et pourra recevoir des crédits (TPS, solidarité). Elle accumule aussi des droits de cotisation au REER.' ] },
    { t: 'ex', h: 'Exemple 3 —', q: '« Si j\'accepte cette augmentation, je change de tranche et je vais gagner moins. » Vrai ?',
      p: [ '**Faux.** Seuls les dollars au-dessus du seuil sont imposés au taux plus élevé. Le revenu net augmente toujours.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Ne pas produire de déclarations quand on a un petit revenu.',
          'Confondre taux marginal et taux moyen.',
          'Oublier la déclaration du Québec.',
        ] } ],
      [ { t: 'retenir', items: [
          'Deux déclarations au Québec, avant le 30 avril.',
          'Impôt progressif par tranches.',
          'T4 + relevé 1.',
        ] } ],
    ] },
  ],
},

/* ============ 16. Avantages sociaux ============ */
avantages: {
  bulle: 'avantages sociaux',
  sous: 'Les avantages sociaux',
  recto: [
    { t: 'txt', p: [ 'Les **avantages sociaux** sont des bénéfices offerts par l\'employeur **en plus du salaire**. Ils ont une vraie valeur financière, même s\'ils n\'apparaissent pas dans le taux horaire.' ] },
    { t: 'tab', full: true, lcol: true,
      head: ['Avantage', 'Description'],
      rows: [
        ['**assurances collectives**', 'médicaments, soins dentaires, soins de la vue, invalidité, vie ; souvent payées en partie par l\'employeur'],
        ['**régime de retraite** de l\'employeur', 'l\'employeur verse une cotisation (ex. il égale une partie de la cotisation de l\'employé)'],
        ['**congés** supplémentaires', 'plus de vacances que le minimum, congés personnels, congés payés'],
        ['**horaire flexible**, **télétravail**', 'meilleure conciliation travail-vie personnelle'],
        ['**formation** payée', 'cours, remboursement de frais de scolarité'],
        ['**rabais**, **repas**, **transport**', 'rabais d\'employé, passe de transport, stationnement'],
        ['**programme d\'aide aux employés**', 'consultation psychologique confidentielle'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'comparer deux offres d\'emploi', items: [
          'Salaire **et** avantages sociaux.',
          'Nombre d\'heures, horaire, trajet (temps et coût).',
          'Possibilités d\'avancement, climat de travail.',
        ] } ],
      [ { t: 'list', h: 'à savoir', items: [
          'Certains avantages sont **imposables** (ex. certains avantages en nature).',
          'La part d\'un régime de retraite versée par l\'employeur est un « salaire différé ».',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple —', q: 'Offre A : 50 000 $ par année, aucun avantage. Offre B : 48 000 $ + assurances collectives (valeur 1500 $) + l\'employeur verse 3 % du salaire au régime de retraite (chiffres fictifs).',
      s: [ 'B : régime de retraite = 0,03 × 48 000 = 1440 $', 'valeur totale B ≈ 48 000 + 1500 + 1440 = 50 940 $', 'A : 50 000 $' ],
      r: 'l\'offre B vaut plus, même si le salaire est plus bas' },
    { t: 'ex', h: 'Exemple 2 —', q: 'Une entreprise offre le télétravail 3 jours par semaine. Quel avantage financier ?',
      s: [ 'moins de frais de transport et de repas', 'temps de trajet économisé' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Comparer les emplois seulement par le salaire.',
          'Ne pas s\'inscrire au régime de retraite de l\'employeur (on laisse de l\'argent sur la table).',
        ] } ],
      [ { t: 'retenir', items: [
          'Rémunération globale = salaire + avantages.',
          'Assurances, retraite, congés, formation.',
          'Calculer la valeur de chaque offre.',
        ] } ],
    ] },
  ],
},

/* ============ 17. Coût des études ============ */
'cout-etudes': {
  bulle: 'coût des études',
  sous: 'Le coût des études',
  recto: [
    { t: 'cols', c: [
      [ { t: 'tab', h: 'les frais directs', full: true, lcol: true,
          head: ['Ordre', 'Droits de scolarité (résident du Québec)'],
          rows: [
            ['formation professionnelle (DEP)', 'généralement gratuite (quelques frais)'],
            ['cégep public (DEC)', '**pas de droits de scolarité**, mais des frais afférents (inscription, activités)'],
            ['université', 'droits de scolarité par crédit ; quelques milliers de dollars par année à temps plein'],
          ],
          note: 'Les montants exacts changent chaque année et varient selon l\'établissement et le programme.' } ],
      [ { t: 'list', h: 'les autres coûts', items: [
          'Matériel : livres, ordinateur, logiciels, uniformes ou outils.',
          '**Logement** (si on quitte la maison) : souvent la plus grosse dépense.',
          'Transport, nourriture, cellulaire, assurances.',
          'Frais de stage ou de déplacement.',
        ] },
        { t: 'list', h: 'le coût d\'opportunité', items: [
          'Pendant les études à temps plein, on **renonce** à un salaire complet : c\'est aussi un coût.',
        ] } ],
    ] },
    { t: 'list', h: 'réduire les coûts', items: [
      'Étudier près de chez soi et habiter chez ses parents si possible.',
      'Acheter des livres usagés, utiliser la bibliothèque.',
      'Colocation, résidences étudiantes.',
      'Rabais étudiants (transport, logiciels, musées).',
    ] },
  ],
  verso: [
    { t: 'tab', h: 'Exemple — budget annuel d\'un étudiant au cégep en appartement (chiffres fictifs)', full: true, lcol: true,
      head: ['Dépense', 'Par mois ($)', 'Par année ($)'],
      rows: [
        ['logement en colocation (sa part)', '550', '6600'],
        ['épicerie', '300', '3600'],
        ['transport', '60', '720'],
        ['cellulaire, Internet', '60', '720'],
        ['matériel scolaire et frais afférents', '—', '800'],
        ['loisirs, vêtements, divers', '150', '1800'],
        ['**total**', '', '**14 240**'],
      ] },
    { t: 'ex', h: 'Analyse :', q: '',
      s: [ 'même sans droits de scolarité, habiter seul coûte plus de 14 000 $ par année', 'chez ses parents, le coût baisse fortement' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Croire que le cégep « gratuit » ne coûte rien.',
          'Oublier le logement et la nourriture.',
          'Oublier le coût d\'opportunité.',
        ] } ],
      [ { t: 'retenir', items: [
          'Frais directs + frais de subsistance.',
          'Logement = souvent la plus grosse dépense.',
          'Coût d\'opportunité = salaire auquel on renonce.',
        ] } ],
    ] },
  ],
},

/* ============ 18. Financement ============ */
financement: {
  bulle: 'financer ses études',
  sous: 'Le financement des études',
  recto: [
    { t: 'tab', full: true, lcol: true,
      head: ['Source', 'Caractéristiques'],
      rows: [
        ['**Aide financière aux études** (AFE, gouvernement du Québec)', 'combinaison de **prêts** et de **bourses** selon les besoins (revenus de l\'étudiant, contribution des parents…) ; on fait la demande en ligne chaque année'],
        ['prêt de l\'AFE', 'à rembourser après les études ; le gouvernement paie les intérêts pendant les études à temps plein'],
        ['bourse de l\'AFE', '**ne se rembourse pas**'],
        ['**REEE**', 'épargne accumulée par les parents, avec subventions ; retraits pour les études'],
        ['**travail étudiant**', 'à temps partiel pendant l\'année ; emploi d\'été'],
        ['**bourses d\'excellence**', 'fondations, établissements, entreprises : selon les notes, l\'implication, le programme'],
        ['**aide des parents**', 'logement, argent, transport'],
        ['**marge de crédit étudiante**', 'offerte par les institutions ; intérêts à payer : prudence'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'conseils', items: [
          'Faire sa demande à l\'AFE **tôt** (avant le début des études).',
          'Chercher des bourses : il en existe beaucoup, et peu de gens postulent pour certaines.',
          'Emprunter seulement ce dont on a besoin.',
          'Travail pendant l\'année : un nombre raisonnable d\'heures pour ne pas nuire à la réussite.',
        ] } ],
      [ { t: 'list', h: 'après les études', items: [
          'Le remboursement du prêt de l\'AFE commence après une période de grâce (environ 6 mois).',
          'Des mesures existent en cas de difficulté (programme de remboursement différé).',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple —', q: 'Noah prévoit 14 000 $ de dépenses pour son année. Ressources : emploi d\'été 5000 $, travail pendant l\'année 3000 $, REEE 2000 $, AFE : bourse 2500 $ et prêt 1500 $ (chiffres fictifs).',
      s: [ 'total : 5000 + 3000 + 2000 + 2500 + 1500 = 14 000 $ ✓', 'à rembourser plus tard : seulement le prêt, 1500 $', 'part empruntée : {{1500|14 000}} ≈ 11 %' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Bourse ou prêt : quelle différence ?',
      p: [ 'Une **bourse** est un don : on ne la rembourse pas. Un **prêt** doit être remboursé, avec intérêts après les études.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Ne pas faire de demande à l\'AFE en croyant ne pas y avoir droit.',
          'Travailler trop d\'heures et échouer des cours.',
          'Utiliser la marge de crédit étudiante pour des désirs.',
        ] } ],
      [ { t: 'retenir', items: [
          'AFE = prêts + bourses.',
          'Bourse : pas de remboursement.',
          'Combiner plusieurs sources.',
        ] } ],
    ] },
  ],
},

/* ============ 19. Budget étudiant et endettement ============ */
'budget-etudiant': {
  bulle: 'budget étudiant',
  sous: 'Budget étudiant et endettement',
  recto: [
    { t: 'cols', c: [
      [ { t: 'list', h: 'le budget étudiant', items: [
          'Revenus souvent **irréguliers** : emploi d\'été, prêts et bourses versés en quelques fois.',
          'Répartir l\'argent reçu sur **toute la session** (diviser par le nombre de mois).',
          'Prévoir les grosses dépenses du début de session (livres, loyer).',
          'Garder un petit fonds d\'urgence.',
        ] },
        { t: 'list', h: 'signes d\'endettement excessif', items: [
          'On paie seulement le **minimum** de sa carte de crédit.',
          'On emprunte pour rembourser d\'autres dettes.',
          'On utilise le crédit pour l\'épicerie ou le loyer chaque mois.',
          'On évite de regarder ses relevés.',
        ] } ],
      [ { t: 'list', h: 'bonnes dettes, mauvaises dettes ?', items: [
          'Une dette peut être un **investissement** si elle augmente ses revenus futurs (études, avec modération).',
          'Une dette pour des **désirs** (voyage, gadgets) ne rapporte rien et coûte des intérêts.',
        ] },
        { t: 'list', h: 'sortir de l\'endettement', items: [
          'Faire un budget réaliste et couper les dépenses non essentielles.',
          'Rembourser d\'abord la dette au **taux le plus élevé**.',
          'Parler à son institution financière ; consulter un organisme de conseil budgétaire (au Québec : associations de consommateurs, ACEF).',
          'Éviter les « solutions miracles » et les prêts sur salaire.',
        ] } ],
    ] },
    { t: 'box', h: 'ratio d\'endettement (repère)', f: 'paiements de dettes par mois ÷ revenu brut mensuel', note: 'Plus ce ratio est élevé, plus la situation est risquée.' },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Zoé reçoit 4200 $ (bourse + prêt) au début d\'une session de 4 mois. Combien peut-elle dépenser par mois ?',
      s: [ '4200 ÷ 4 = 1050 $ par mois', 'si elle garde 200 $ en réserve : 4000 ÷ 4 = 1000 $ par mois' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Deux dettes : carte de crédit 1200 $ à 20 % et prêt étudiant 5000 $ à 5 %. Laquelle rembourser en priorité avec un surplus ?',
      s: [ 'intérêts annuels carte : 1200 × 0,20 = 240 $', 'intérêts annuels prêt : 5000 × 0,05 = 250 $ // mais sur un montant 4 fois plus grand', 'chaque dollar remboursé sur la carte économise 0,20 $ par an, contre 0,05 $ pour le prêt' ],
      r: 'rembourser d\'abord la carte de crédit (taux le plus élevé)' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Dépenser le prêt de la session dès le premier mois.',
          'Accumuler des cartes de crédit pour « bâtir son crédit ».',
          'Ignorer ses dettes en espérant qu\'elles disparaissent.',
        ] } ],
      [ { t: 'retenir', items: [
          'Étaler l\'argent reçu sur la session.',
          'Rembourser le taux le plus élevé d\'abord.',
          'Demander de l\'aide tôt.',
        ] } ],
    ] },
  ],
},

/* ============ 20. Choisir ses études ============ */
'choix-etudes': {
  bulle: 'choisir ses études',
  sous: 'Choisir ses études et en évaluer la rentabilité',
  recto: [
    { t: 'cols', c: [
      [ { t: 'list', h: 'les critères de choix', items: [
          '**Intérêts** et **aptitudes** : ce qu\'on aime et ce pour quoi on est doué.',
          '**Valeurs** : aider les autres, créativité, sécurité, autonomie.',
          '**Perspectives d\'emploi** : la demande dans le domaine, dans sa région.',
          '**Revenus** attendus et conditions de travail.',
          '**Durée** et **coût** de la formation.',
        ] },
        { t: 'list', h: 'où s\'informer', items: [
          'Conseiller d\'orientation de l\'école.',
          'Sites des établissements, journées portes ouvertes, élève d\'un jour.',
          'Données publiques sur le marché du travail (ex. perspectives d\'emploi par profession).',
          'Entrevues avec des personnes du métier, stages.',
        ] } ],
      [ { t: 'tab', h: 'les parcours au Québec', full: true, lcol: true,
          head: ['Formation', 'Durée habituelle', 'Mène à'],
          rows: [
            ['DEP (formation professionnelle)', '6 mois à 2 ans', 'métiers (électricité, soins, cuisine…)'],
            ['DEC préuniversitaire', '2 ans', 'l\'université'],
            ['DEC technique', '3 ans', 'le marché du travail (ou l\'université)'],
            ['baccalauréat', '3 à 4 ans', 'professions, études supérieures'],
          ] } ],
    ] },
    { t: 'list', h: 'évaluer la rentabilité', items: [
      '**Coûts** : frais directs + frais de subsistance + **salaire perdu** pendant les études (coût d\'opportunité).',
      '**Gains** : écart de revenu sur toute la carrière, sécurité d\'emploi, satisfaction.',
      'En moyenne, un diplôme plus élevé est associé à des revenus plus élevés et à moins de chômage, mais il y a de grandes différences selon le domaine : un DEP dans un métier en demande peut être très rentable.',
      'La rentabilité n\'est pas seulement financière : le bien-être compte aussi.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple — calcul simplifié (chiffres fictifs)', q: 'Option A : travailler tout de suite à 32 000 $/an. Option B : DEC technique de 3 ans (coût 6000 $ en tout), puis 48 000 $/an.',
      s: [ 'pendant 3 ans, B perd : 3 × 32 000 = 96 000 $ de salaire + 6000 $ de frais = 102 000 $', 'ensuite, B gagne 48 000 − 32 000 = 16 000 $ de plus par an', 'rattrapage : 102 000 ÷ 16 000 ≈ 6,4 ans', 'après environ 9,4 ans (3 + 6,4), B devient plus rentable' ],
      r: 'sur une carrière de 40 ans, l\'option B rapporte beaucoup plus' },
    { t: 'ex', h: 'Nuance :', q: '',
      p: [ 'Ce calcul ignore l\'impôt, les augmentations et les travaux d\'été pendant les études. Il sert à **comparer**, pas à prédire exactement.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Choisir seulement pour le salaire.',
          'Oublier le coût d\'opportunité.',
          'Se fier à des données vieilles ou d\'une autre région.',
        ] } ],
      [ { t: 'retenir', items: [
          'Intérêts + aptitudes + perspectives.',
          'Rentabilité : coûts vs gains sur la carrière.',
          'Consulter un conseiller d\'orientation.',
        ] } ],
    ] },
  ],
},

/* ============ GÉNÉRAL ============ */
general: {
  bulle: 'éduc. financière : tout en 1',
  sous: 'Résumé de l\'année — Éducation financière, secondaire 5',
  recto: [
    { t: 'cols', c: [
      [ { t: 'list', h: 'consommer', items: [
          '**Besoin** (essentiel) vs **désir** ; attention au marketing et aux influenceurs.',
          '**Budget** : revenus − dépenses = surplus ou déficit ; se payer en premier.',
          '**Débit** = mon argent ; **crédit** = emprunt ; taxes : TPS 5 % + TVQ 9,975 %.',
          '**Dossier de crédit** (Equifax, TransUnion) : payer tout le solde, à temps.',
          '**Intérêt** simple I = Cit ; composé C<sub>0</sub>(1 + i)<sup>n</sup> ; règle de 72.',
          '**Prêts** : comparer taux, frais et coût total.',
          '**Louer ou acheter** : coût total, flexibilité ; TAL pour le logement.',
          '**LPC** et **OPC** ; garantie légale automatique ; 10 jours (commerçant itinérant).',
          '**Assurances** : prime, franchise ; auto : responsabilité civile obligatoire, SAAQ.',
          '**Épargne** : fonds d\'urgence ; CELI, REER, REEE ; risque ↔ rendement.',
        ] } ],
      [ { t: 'list', h: 'travailler', items: [
          '**Salarié** (retenues faites) vs **autonome** (tout à sa charge) ; travail au noir = illégal.',
          '**Normes du travail** et **CNESST** : salaire minimum, taux et demi après 40 h, vacances (4 % puis 6 %).',
          '**Net = brut − retenues** ; talon de paie.',
          '**Retenues** : impôts fédéral et du Québec, RRQ, AE, RQAP.',
          '**Deux déclarations** au Québec avant le 30 avril ; impôt **progressif** (taux marginal vs moyen).',
          '**Avantages sociaux** : assurances, retraite, congés.',
        ] },
        { t: 'list', h: 'étudier', items: [
          '**Coûts** : frais directs, subsistance, coût d\'opportunité.',
          '**Financement** : AFE (prêts + bourses), REEE, travail, bourses.',
          '**Budget étudiant** : étaler l\'argent ; rembourser le taux le plus élevé d\'abord.',
          '**Rentabilité** : coûts vs gains sur la carrière, et bien-être.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Taxes —', q: '100 $ avant taxes', s: [ '100 × 1,14975 ≈ 114,98 $' ] },
        { t: 'ex', h: 'Composé —', q: '1000 $ à 5 %, 10 ans', s: [ '1000 × 1,05<sup>10</sup> ≈ 1628,89 $' ] },
        { t: 'ex', h: 'Prêt auto —', q: '20 000 $, 6 %, 5 ans', s: [ '≈ 386,66 $/mois ; coût ≈ 3199 $' ] },
        { t: 'ex', h: 'REEE —', q: '2500 $ versés', s: [ '+ 500 $ (fédéral) + 250 $ (Québec)' ] } ],
      [ { t: 'ex', h: 'Heures sup. —', q: '44 h à 17 $/h', s: [ '680 + 4 × 25,50 = 782 $' ] },
        { t: 'ex', h: 'Impôt progressif —', q: '60 000 $ (15 % / 20 % au-delà de 50 000 $)', s: [ '9500 $ ; taux moyen ≈ 15,8 %' ] },
        { t: 'ex', h: 'Franchise —', q: 'perte 3000 $, franchise 500 $', s: [ 'assureur : 2500 $' ] },
        { t: 'ex', h: 'Dette —', q: 'carte à 20 % ou prêt à 5 % ?', s: [ 'rembourser la carte d\'abord' ] } ],
    ] },
    { t: 'pieges', items: [
      'Budget fait avec le salaire brut ; oublier les taxes et les petites dépenses.',
      'Payer seulement le minimum de sa carte de crédit.',
      'Comparer des prêts ou des offres d\'emploi par le seul montant mensuel ou le seul salaire.',
      'Acheter une garantie prolongée sans connaître la garantie légale.',
      'Ne pas produire ses déclarations de revenus quand on a un petit revenu.',
      'Croire qu\'une augmentation peut faire perdre de l\'argent à cause des tranches d\'impôt.',
    ] },
    { t: 'retenir', items: [
      'Dépenser moins que ce qu\'on gagne, épargner tôt, emprunter prudemment.',
      'Connaître ses droits : consommateur (LPC, OPC), travailleur (CNESST), locataire (TAL).',
      TAUX,
    ] },
  ],
},

};
})();
