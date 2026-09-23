/* Français — Lecture et écriture argumentatives */
DATA.feuilles['francais'] = DATA.feuilles['francais'] || {};
Object.assign(DATA.feuilles['francais'], {

/* ============ 1. Texte argumentatif : structure ============ */
'texte-argumentatif': {
  bulle: 'le texte argumentatif',
  sous: 'Le texte argumentatif : structure',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', p: [
          'Un **texte argumentatif** cherche à **convaincre** ou à **persuader** un destinataire d\'adhérer à une opinion.',
          '**Convaincre** : faire appel à la raison (faits, logique). **Persuader** : faire appel aux émotions et aux valeurs.',
        ] } ],
      [ { t: 'list', h: 'les éléments clés', items: [
          '**Sujet** (objet de la controverse) : la question débattue.',
          '**Thèse** : l\'opinion défendue par l\'énonciateur.',
          '**Thèse adverse** : l\'opinion contraire.',
          '**Arguments** : les raisons qui appuient la thèse.',
          '**Preuves** (ou explications) : ce qui rend chaque argument crédible.',
        ] } ],
    ] },
    { t: 'tab', h: 'le plan du texte', full: true, lcol: true,
      head: ['Partie', 'Contenu', 'Conseils'],
      rows: [
        ['**Introduction**', '**Sujet amené** : situer le sujet dans un contexte.<br>**Sujet posé** : présenter la question et la **thèse**.<br>**Sujet divisé** : annoncer les arguments.', 'Du général au particulier. La thèse doit être claire dès l\'introduction.'],
        ['**Développement**', 'Un **paragraphe par argument** : argument → explication ou preuves (procédés) → petite conclusion partielle.<br>Souvent une **contre-argumentation** : concession, puis réfutation.', 'Organisateur textuel au début de chaque paragraphe. Garder l\'argument le plus fort pour la fin.'],
        ['**Conclusion**', '**Synthèse** : rappel de la thèse et des arguments, en d\'autres mots.<br>**Ouverture** : élargir le sujet (question, piste d\'action, souhait).', 'Aucun nouvel argument dans la conclusion.'],
      ] },
    { t: 'cols', c: [
      [ { t: 'box', h: 'le paragraphe argumentatif', f: 'argument + preuves (exemple, statistique, expert…) + conclusion partielle' } ],
      [ { t: 'list', h: 'la contre-argumentation', items: [
          '**Concession** : on reconnaît qu\'un argument adverse a une part de vérité (« Certes… », « Il est vrai que… »).',
          '**Réfutation** : on montre ensuite qu\'il est faible ou faux (« Toutefois… »).',
          'Elle rend le texte plus crédible : l\'énonciateur montre qu\'il connaît l\'autre point de vue.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'cite', h: 'Exemple — introduction d\'une lettre ouverte', p: [
      '__Chaque automne, des milliers d\'élèves québécois se lèvent avant le soleil pour attraper l\'autobus scolaire.__ __Pourtant, les chercheurs s\'entendent : les adolescents ont un besoin de sommeil plus tardif que celui des adultes. Les écoles secondaires devraient donc commencer leurs cours plus tard le matin.__ __Cette mesure améliorerait la santé des jeunes, favoriserait leur réussite et réduirait les retards.__',
    ] },
    { t: 'ex', h: 'Analyse :', q: '',
      s: [ '1<sup>re</sup> phrase → sujet amené // contexte général', '2<sup>e</sup> et 3<sup>e</sup> phrases → sujet posé + thèse // « devraient commencer plus tard »', '4<sup>e</sup> phrase → sujet divisé // trois arguments annoncés' ] },
    { t: 'cite', h: 'Exemple — paragraphe avec contre-argumentation', p: [
      '__Certes__, décaler l\'horaire compliquerait l\'organisation du transport scolaire. __Cependant__, plusieurs districts scolaires américains ont adopté cet horaire en réorganisant leurs circuits d\'autobus. L\'argument du transport ne tient donc pas.',
    ] },
    { t: 'ex', h: 'Analyse :', q: '',
      s: [ '« Certes… » → concession // on admet une partie de la thèse adverse', '« Cependant… » → réfutation // preuve : un exemple', 'dernière phrase → conclusion partielle' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Une thèse floue ou cachée : elle doit être claire et formulée dans l\'introduction.',
          'Un argument sans preuve : c\'est une simple affirmation.',
          'Ajouter un argument nouveau dans la conclusion.',
          'Oublier les organisateurs textuels entre les paragraphes.',
        ] } ],
      [ { t: 'retenir', items: [
          'Intro : sujet amené, posé, divisé.',
          'Un paragraphe = un argument + ses preuves.',
          'Concession + réfutation = contre-argumentation.',
          'Conclusion : synthèse + ouverture.',
        ] } ],
    ] },
  ],
},

/* ============ 2. Stratégies argumentatives ============ */
strategies: {
  bulle: 'stratégies argumentatives',
  sous: 'Les stratégies argumentatives',
  recto: [
    { t: 'txt', p: [ 'La **stratégie argumentative** est la façon générale dont l\'énonciateur organise son argumentation pour défendre sa thèse. On en utilise souvent plusieurs dans un même texte.' ] },
    { t: 'tab', full: true, lcol: true,
      head: ['Stratégie', 'Principe', 'Marqueurs typiques'],
      rows: [
        ['**Explication argumentative**', 'On explique **pourquoi** la thèse est juste, en montrant des causes, des conséquences, des liens logiques. Le texte ressemble à une explication, mais il défend une opinion.', 'parce que, car, en effet, puisque, c\'est pourquoi, ainsi'],
        ['**Réfutation**', 'On présente la **thèse adverse** (ou un argument adverse), puis on démontre qu\'elle est fausse, exagérée ou mal fondée.', 'certains prétendent que…, or, pourtant, au contraire, en réalité'],
        ['**Démonstration**', 'On prouve la thèse par une suite d\'étapes **logiques** et de faits vérifiables, comme en sciences.', 'premièrement, de plus, par conséquent, donc, il en découle que'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'réfutation : les façons de contrer', items: [
          'Montrer une **contradiction** dans la thèse adverse.',
          'Montrer que ses **preuves** sont fausses, dépassées ou peu fiables.',
          'Montrer que ses **conséquences** seraient néfastes.',
          'Retourner l\'argument contre l\'adversaire.',
          'Opposer un **contre-exemple**.',
        ] } ],
      [ { t: 'list', h: 'la contre-argumentation', items: [
          'Elle combine **concession** (on admet un point) et **réfutation** (on le nuance ou le rejette).',
          'Mots de concession : certes, il est vrai que, bien que, même si, j\'admets que.',
          'Mots de réfutation : toutefois, cependant, néanmoins, or, mais.',
        ] } ],
    ] },
    { t: 'list', h: 'comment reconnaître la stratégie dominante', items: [
      'Le texte parle surtout de la **thèse adverse** pour la démolir → réfutation.',
      'Le texte enchaîne des **causes et conséquences** pour justifier sa position → explication argumentative.',
      'Le texte avance par **étapes logiques** et faits mesurables → démonstration.',
    ] },
  ],
  verso: [
    { t: 'cite', h: 'Extrait A', p: [ 'Certains affirment que les jeux vidéo rendent les jeunes violents. Or, aucune étude sérieuse n\'a démontré de lien direct entre ces jeux et les gestes violents. En réalité, la violence juvénile a même diminué depuis que ces jeux sont populaires.' ] },
    { t: 'ex', h: 'Analyse :', q: '',
      s: [ 'thèse adverse présentée → « Certains affirment que… »', 'contestation des preuves → « aucune étude sérieuse »', 'contre-exemple → « la violence a même diminué »' ],
      r: 'stratégie : réfutation' },
    { t: 'cite', h: 'Extrait B', p: [ 'Le transport en commun gratuit est une bonne idée, car il incite les citoyens à laisser leur voiture à la maison. Moins de voitures sur les routes signifie moins de gaz à effet de serre et moins de congestion. C\'est pourquoi la santé de la population et l\'économie en profiteraient.' ] },
    { t: 'ex', h: 'Analyse :', q: '',
      s: [ 'cause → « car il incite… »', 'conséquences → « moins de gaz à effet de serre »', 'lien logique → « C\'est pourquoi… »' ],
      r: 'stratégie : explication argumentative' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Confondre explication argumentative et texte explicatif : ici, l\'énonciateur **défend une opinion**.',
          'Réfuter sans d\'abord présenter clairement la thèse adverse.',
          'Faire une concession sans la réfuter ensuite : on affaiblit sa propre thèse.',
        ] } ],
      [ { t: 'retenir', items: [
          'Explication : pourquoi j\'ai raison.',
          'Réfutation : pourquoi l\'autre a tort.',
          'Démonstration : preuve étape par étape.',
          'Concession + réfutation = contre-argumentation.',
        ] } ],
    ] },
  ],
},

/* ============ 3. Procédés argumentatifs ============ */
procedes: {
  bulle: 'procédés argumentatifs',
  sous: 'Les procédés argumentatifs et les types d\'arguments',
  recto: [
    { t: 'txt', p: [ 'Les **procédés argumentatifs** sont les moyens concrets qu\'on utilise pour appuyer un argument et le rendre crédible.' ] },
    { t: 'tab', full: true, lcol: true,
      head: ['Procédé', 'Ce que c\'est', 'Exemple'],
      rows: [
        ['**Exemple**', 'un cas concret qui illustre l\'argument', 'La Finlande donne peu de devoirs, et ses élèves obtiennent de bons résultats.'],
        ['**Donnée chiffrée** (statistique)', 'un chiffre précis et vérifiable', 'Selon l\'enquête citée, un élève sur trois dort moins de 7 h.'],
        ['**Appel à l\'autorité** (citation)', 'l\'avis d\'un expert ou d\'une source reconnue', 'Selon une pédiatre de l\'hôpital…'],
        ['**Comparaison**, **analogie**', 'rapprocher deux situations', 'Interdire les cellulaires, c\'est comme interdire les calculatrices.'],
        ['**Cause / conséquence**', 'montrer l\'effet d\'une situation', 'Ce manque de sommeil nuit à la concentration.'],
        ['**Définition**', 'préciser le sens d\'un terme pour orienter le débat', 'Le vrai loisir, c\'est ce qu\'on choisit librement.'],
        ['**Question rhétorique**', 'question dont la réponse est évidente', 'Qui voudrait respirer un air pollué ?'],
        ['**Anecdote**', 'un court récit vécu', 'L\'an dernier, ma sœur a…'],
        ['**Énumération**, **gradation**', 'accumuler des faits, souvent en intensité croissante', 'inutile, coûteux, dangereux'],
      ] },
    { t: 'tab', h: 'types d\'arguments', full: true, lcol: true,
      head: ['Type', 'Il s\'appuie sur…'],
      rows: [
        ['**logique** (rationnel)', 'des faits, des chiffres, un raisonnement'],
        ['**affectif** (émotif)', 'les émotions du destinataire : peur, pitié, fierté'],
        ['**moral** (éthique)', 'des valeurs : justice, respect, égalité'],
        ['**pragmatique**', 'l\'utilité, les avantages concrets, le coût'],
        ['**d\'autorité**', 'la crédibilité d\'une personne ou d\'un organisme'],
      ] },
  ],
  verso: [
    { t: 'cite', h: 'Extrait à analyser', p: [
      '(1) Les boissons énergisantes devraient être interdites aux moins de 16 ans. (2) Une grande canette peut contenir plus de caféine qu\'une tasse de café. (3) Selon Santé Canada, les adolescents ne devraient pas dépasser environ 2,5 mg de caféine par kilogramme de masse corporelle chaque jour. (4) Voudrions-nous que nos jeunes deviennent dépendants à un produit qu\'on vend comme une friandise ? (5) Mon cousin, qui en buvait trois par jour, ne réussissait plus à dormir avant 2 h du matin.',
    ] },
    { t: 'ex', h: 'Analyse :', q: '',
      s: [ '(1) → thèse', '(2) → comparaison + donnée chiffrée // argument logique', '(3) → appel à l\'autorité // source reconnue', '(4) → question rhétorique // argument affectif et moral', '(5) → anecdote // exemple vécu, touche l\'émotion' ] },
    { t: 'ex', h: 'Bien intégrer un procédé :', q: 'Une preuve seule ne suffit pas : il faut la **relier** à l\'argument.',
      p: [ '✗ « 30 % des jeunes dorment mal. »', '✓ « Le manque de sommeil touche beaucoup d\'élèves : près de 30 % d\'entre eux disent mal dormir. Des cours plus tardifs répondraient donc à un vrai besoin. »' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Inventer des statistiques ou des experts : à l\'épreuve, utilise les sources du dossier préparatoire.',
          'Citer sans nommer la source.',
          'Accumuler des preuves sans les expliquer.',
          'Confondre le procédé (le moyen) et le type d\'argument (ce sur quoi il s\'appuie).',
        ] } ],
      [ { t: 'retenir', items: [
          'Varier les procédés rend l\'argumentation plus solide.',
          'Toujours nommer la source.',
          'Preuve → explication → lien avec la thèse.',
        ] } ],
    ] },
  ],
},

/* ============ 4. Point de vue et modalisation ============ */
'point-de-vue': {
  bulle: 'point de vue',
  sous: 'Point de vue, modalisation et marques de subjectivité',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', h: 'le point de vue', p: [
          'Le **point de vue** est l\'attitude de l\'énonciateur face à ce qu\'il dit (le sujet) et face à son destinataire.',
          '**Engagé** (subjectif) : l\'énonciateur montre clairement son opinion et ses sentiments.',
          '**Distancié** (objectif) : il semble neutre, présente des faits sans se montrer.',
        ] } ],
      [ { t: 'txt', h: 'la modalisation', p: [
          'La **modalisation**, ce sont les moyens linguistiques par lesquels l\'énonciateur laisse voir son point de vue : ce sont les **marques de modalité**.',
          'Un texte argumentatif est presque toujours **engagé**.',
        ] } ],
    ] },
    { t: 'tab', h: 'les marques de modalité', full: true, lcol: true,
      head: ['Marque', 'Exemples'],
      rows: [
        ['**Vocabulaire connoté** : mélioratif (positif) ou péjoratif (négatif)', 'un __chef-d\'œuvre__, un __torchon__ ; une __brillante__ idée ; __bâcler__'],
        ['**Adverbes** et expressions modalisateurs', 'heureusement, malheureusement, sans doute, peut-être, évidemment, à mon avis'],
        ['**Verbes** d\'opinion ou de sentiment', 'je crois, je pense, je doute, je déplore, je souhaite'],
        ['**Conditionnel** (doute, prudence, rumeur)', 'Le maire __aurait__ accepté l\'offre.'],
        ['**Pronoms** qui marquent l\'énonciateur', 'je, me, moi, nous, notre, on'],
        ['**Types de phrases**', 'phrases exclamatives, interrogatives (questions rhétoriques)'],
        ['**Figures de style**', 'hyperbole, ironie, métaphore, gradation'],
        ['**Ponctuation expressive**, typographie', '! ?! … guillemets de distance (« l\'expert »), italique'],
        ['**Discours rapporté** choisi', 'le verbe introducteur juge : il __prétend__ que… ; il __avoue__ que…'],
      ] },
    { t: 'list', h: 'marques d\'un point de vue distancié', items: [
      'Pronoms à la 3<sup>e</sup> personne, aucune trace du « je ».',
      'Vocabulaire neutre (dénoté), phrases déclaratives.',
      'Faits, données, sources nommées.',
    ] },
  ],
  verso: [
    { t: 'cite', h: 'Même fait, deux points de vue', p: [
      '**A.** Le conseil municipal a adopté hier un règlement qui interdit les feux d\'artifice privés.',
      '**B.** __Hélas__, nos élus ont __encore__ adopté un règlement __absurde__ : __adieu__ les feux d\'artifice de la Saint-Jean ! __Je doute__ fort que cette mesure __serve__ à quoi que ce soit.',
    ] },
    { t: 'ex', h: 'Analyse de B :', q: '',
      s: [ '« Hélas » → adverbe modalisateur // regret', '« encore » → adverbe // agacement, répétition', '« absurde » → adjectif péjoratif', '« adieu … ! » → phrase exclamative // ponctuation expressive', '« Je doute » → pronom je + verbe d\'opinion' ],
      r: 'A est distancié ; B est engagé (et critique)' },
    { t: 'ex', h: 'Exemple 2 —', q: 'Récrire de façon plus engagée : « Le nouveau parc a coûté 3 millions de dollars. »',
      p: [ '✓ « Le nouveau parc a coûté la __rondelette__ somme de 3 millions de dollars : un __gaspillage__ que les citoyens paieront __longtemps__ ! »' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Croire qu\'un texte sans « je » est forcément distancié : le vocabulaire connoté trahit l\'opinion.',
          'Relever une marque sans dire quel sentiment elle exprime.',
          'Dans ta lettre ouverte, abuser des « je pense que » : varie les marques.',
        ] } ],
      [ { t: 'retenir', items: [
          'Engagé = subjectif ; distancié = objectif.',
          'Relever la marque + nommer ce qu\'elle révèle.',
          'Vocabulaire connoté = l\'indice le plus fréquent.',
        ] } ],
    ] },
  ],
},

/* ============ 5. Énonciation ============ */
enonciation: {
  bulle: 'l\'énonciation',
  sous: 'Énonciation : énonciateur, destinataire et ton',
  recto: [
    { t: 'txt', p: [ 'La **situation d\'énonciation**, c\'est le contexte dans lequel un message est produit : **qui** parle, **à qui**, **de quoi**, **quand**, **où** et **pourquoi**.' ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'les éléments', items: [
          '**Énonciateur** : celui qui produit le message (pas toujours l\'auteur réel : dans une lettre ouverte, il peut parler au nom d\'un groupe).',
          '**Destinataire** : celui à qui le message s\'adresse (un individu, un groupe, les lecteurs d\'un journal).',
          '**Message** : le contenu (sujet, thèse).',
          '**Intention** : informer, convaincre, divertir, émouvoir…',
          '**Contexte** : moment, lieu, circonstances de publication.',
        ] } ],
      [ { t: 'list', h: 'le rapport entre l\'énonciateur et le destinataire', items: [
          'Rapport d\'**égalité** ou d\'**autorité** (expert → public, élève → ministre).',
          'Rapport **formel** (vouvoiement, langue soutenue) ou **familier** (tutoiement).',
          'Marques : pronoms (vous, tu, nous inclusif), apostrophe, variété de langue.',
          'Le **nous inclusif** crée une complicité : « Nous devons agir ensemble. »',
        ] } ],
    ] },
    { t: 'tab', h: 'le ton', intro: 'Le **ton** est la couleur générale que l\'énonciateur donne à son texte. On le justifie toujours avec des indices.', full: true, lcol: true,
      head: ['Ton', 'Indices typiques'],
      rows: [
        ['**neutre**, didactique', 'vocabulaire dénoté, phrases déclaratives, explications'],
        ['**humoristique**', 'jeux de mots, exagérations, situations cocasses'],
        ['**ironique**', 'on dit le contraire de ce qu\'on pense : « Quelle brillante idée ! »'],
        ['**sarcastique**', 'ironie méchante, qui blesse'],
        ['**critique**, polémique', 'vocabulaire péjoratif, attaques, questions rhétoriques'],
        ['**dramatique**, alarmiste', 'vocabulaire de la peur, hyperboles, gradation'],
        ['**lyrique**, émotif', 'expression des sentiments, exclamations, 1<sup>re</sup> personne'],
        ['**enthousiaste**', 'vocabulaire mélioratif, exclamations positives'],
      ] },
  ],
  verso: [
    { t: 'cite', h: 'Extrait', p: [ 'Chers membres du conseil d\'établissement, vous avez décidé de supprimer la sortie de fin d\'année. Bravo ! Quelle merveilleuse façon de récompenser nos efforts… Nous, les finissants, vous demandons respectueusement de revoir cette décision.' ] },
    { t: 'ex', h: 'Analyse :', q: '',
      s: [ 'énonciateur → les finissants // « Nous, les finissants »', 'destinataire → le conseil d\'établissement // apostrophe « Chers membres… »', 'rapport → formel (vous, « respectueusement »), d\'élèves à autorité', '« Bravo ! Quelle merveilleuse façon… » → ironie // on pense le contraire', 'intention → convaincre de revoir la décision' ],
      r: 'ton ironique, puis respectueux et revendicateur' },
    { t: 'ex', h: 'Justifier un ton (modèle de réponse) :', q: '',
      p: [ '« Le ton est **ironique**, car l\'énonciateur félicite le conseil (« Bravo ! », « merveilleuse façon ») alors qu\'il désapprouve clairement sa décision. »' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Nommer un ton sans citer d\'indices du texte.',
          'Confondre l\'auteur (la personne réelle) et l\'énonciateur.',
          'Changer de rapport en cours de texte : passer du « vous » au « tu ».',
        ] } ],
      [ { t: 'retenir', items: [
          'Qui ? À qui ? Pourquoi ? Sur quel ton ?',
          'Ton = toujours justifié par des indices.',
          'Lettre ouverte : rapport formel, vouvoiement.',
        ] } ],
    ] },
  ],
},

/* ============ 6. Séquences textuelles ============ */
sequences: {
  bulle: 'séquences textuelles',
  sous: 'Les séquences textuelles',
  recto: [
    { t: 'txt', p: [
      'Une **séquence textuelle** est une portion de texte organisée selon un modèle précis. Un texte en contient souvent plusieurs : la **séquence dominante** donne au texte son type ; les autres sont des **séquences secondaires** (ou enchâssées).',
      'ex. Un roman (séquence narrative dominante) contient des descriptions et des dialogues.',
    ] },
    { t: 'tab', full: true, lcol: true,
      head: ['Séquence', 'But', 'Structure', 'Indices'],
      rows: [
        ['**narrative**', 'raconter', 'situation initiale → élément déclencheur → déroulement → dénouement → situation finale', 'verbes d\'action, temps du passé, organisateurs de temps'],
        ['**descriptive**', 'décrire (lieu, personne, objet)', 'sujet de la description → aspects → sous-aspects', 'adjectifs, verbes d\'état, vocabulaire des sens, organisateurs d\'espace'],
        ['**explicative**', 'faire comprendre (pourquoi, comment)', 'phase de questionnement → phase explicative → phase conclusive', 'parce que, car, en effet, vocabulaire précis'],
        ['**argumentative**', 'convaincre', 'thèse → arguments → conclusion', 'marques de modalité, marqueurs logiques'],
        ['**dialogale**', 'rapporter un échange', 'ouverture → interaction → clôture', 'tirets ou guillemets, verbes de parole, répliques'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'repérer la séquence dominante', items: [
          'Quelle est l\'**intention** principale du texte ?',
          'Quelle séquence occupe le plus de place ou encadre les autres ?',
        ] } ],
      [ { t: 'list', h: 'dans ta lettre ouverte', items: [
          'Dominante **argumentative**.',
          'Une courte séquence **narrative** (anecdote) ou **explicative** peut servir de preuve.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'cite', h: 'Extrait', p: [
      '(1) Samedi dernier, j\'ai participé au nettoyage des berges de la rivière. En trois heures, nous avons ramassé plus de 200 kilos de déchets. (2) Les berges étaient couvertes de bouteilles de plastique, de filets déchirés et de canettes rouillées. (3) Ces déchets s\'accumulent parce que les gens les jettent dans les rues : la pluie les entraîne ensuite dans les égouts, puis dans la rivière. (4) Il est urgent d\'interdire les bouteilles d\'eau jetables dans notre ville.',
    ] },
    { t: 'ex', h: 'Analyse :', q: '',
      s: [ '(1) → séquence narrative // « Samedi dernier », verbes d\'action au passé', '(2) → séquence descriptive // énumération, adjectifs', '(3) → séquence explicative // « parce que », étapes d\'un phénomène', '(4) → thèse argumentative // « Il est urgent »' ],
      r: 'séquence dominante : argumentative ; les autres servent de preuves' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Confondre explicatif (faire comprendre un phénomène) et argumentatif (défendre une opinion).',
          'Dire qu\'un texte est narratif parce qu\'il contient une anecdote.',
          'Oublier les séquences secondaires quand on analyse un texte.',
        ] } ],
      [ { t: 'retenir', items: [
          '5 séquences : narrative, descriptive, explicative, argumentative, dialogale.',
          'L\'intention du texte = la séquence dominante.',
        ] } ],
    ] },
  ],
},

/* ============ 7. Genres argumentatifs ============ */
genres: {
  bulle: 'genres argumentatifs',
  sous: 'Les genres argumentatifs : lettre ouverte, éditorial, critique, chronique',
  recto: [
    { t: 'tab', full: true, lcol: true,
      head: ['Genre', 'Qui l\'écrit ? Où ?', 'Caractéristiques'],
      rows: [
        ['**Lettre ouverte**', 'n\'importe quel citoyen ; publiée dans un journal, un site d\'information', 'adressée à un destinataire précis (un ministre, la population), mais lue par tous ; formule d\'appel et signature ; thèse claire ; vouvoiement'],
        ['**Éditorial**', 'l\'éditorialiste, au nom du journal', 'prend position sur un sujet d\'actualité ; exprime l\'opinion du journal ; ton souvent sérieux'],
        ['**Chronique**', 'un chroniqueur, dans une rubrique régulière', 'regard personnel sur l\'actualité, la culture ; ton libre, souvent humoristique ou ironique ; « je » très présent'],
        ['**Critique**', 'un critique (cinéma, livre, spectacle, jeu vidéo)', 'présente l\'œuvre, puis l\'évalue selon des critères ; recommandation ; souvent une note ou des étoiles'],
        ['**Texte d\'opinion**', 'lecteur, expert, collaborateur', 'défend une thèse sur une question de société'],
        ['**Discours**, plaidoyer', 'personne qui s\'adresse à un public', 'destiné à l\'oral ; appels directs au public'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'présentation d\'une lettre ouverte', items: [
          '**Titre** accrocheur qui annonce le sujet ou la thèse.',
          '**Formule d\'appel** : « Madame la Ministre, »',
          'Introduction, développement, conclusion.',
          '**Formule de salutation** (facultative dans un journal) et **signature** (nom, titre ou qualité : « Élève de 5<sup>e</sup> secondaire »).',
        ] } ],
      [ { t: 'list', h: 'pamphlet et autres', items: [
          '**Pamphlet** : attaque violente et souvent ironique contre une personne ou une institution.',
          '**Caricature**, **publicité sociale** : argumentation visuelle.',
          'Tous partagent une **thèse** et une intention de convaincre ou de persuader.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'cite', h: 'Exemple — début et fin d\'une lettre ouverte', p: [
      '**Pour un vrai choix de légumes à la cafétéria**',
      'Madame la Directrice,',
      'Chaque midi, plus de 800 élèves de notre école mangent à la cafétéria. […]',
      'Je vous prie d\'agréer, Madame la Directrice, l\'expression de mes sentiments respectueux.',
      'Léa Tremblay, élève de 5<sup>e</sup> secondaire et présidente du conseil des élèves',
    ] },
    { t: 'ex', h: 'Analyse :', q: '',
      s: [ 'titre → annonce la thèse', '« Madame la Directrice, » → formule d\'appel // suivie d\'une virgule', 'formule de salutation → registre soutenu', 'signature → nom + qualité // montre sa crédibilité' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Quel genre ? « Ce film est un pur bonheur : scénario habile, acteurs justes, musique envoûtante. Quatre étoiles sur cinq, courez-y ! »',
      r: 'une critique (évaluation d\'une œuvre selon des critères, recommandation)' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier la formule d\'appel ou la signature d\'une lettre ouverte.',
          'Tutoyer le destinataire d\'une lettre ouverte.',
          'Confondre chronique (point de vue personnel, ton libre) et éditorial (position du journal).',
        ] } ],
      [ { t: 'retenir', items: [
          'Lettre ouverte = à quelqu\'un, lue par tous.',
          'Critique = évaluer une œuvre.',
          'Éditorial = opinion du journal.',
        ] } ],
    ] },
  ],
},

/* ============ 8. Épreuve unique d'écriture ============ */
'epreuve-unique': {
  bulle: 'l\'épreuve unique',
  sous: 'Épreuve unique d\'écriture de 5<sup>e</sup> secondaire : méthode et critères',
  recto: [
    { t: 'txt', p: [
      'À la fin du secondaire, l\'épreuve ministérielle d\'écriture demande de rédiger un **texte argumentatif**, souvent une **lettre ouverte**, d\'environ **500 mots**, sur un sujet de société. Un **dossier préparatoire** (textes et documents sur le thème) est remis quelques semaines avant. Vérifie les consignes exactes de l\'année avec ton enseignant.',
    ] },
    { t: 'tab', h: 'les critères d\'évaluation', full: true, lcol: true,
      head: ['Critère', 'Ce qu\'on vérifie'],
      rows: [
        ['**1. Adaptation à la situation de communication**', 'thèse claire, arguments pertinents et bien développés, preuves variées, point de vue engagé, respect du destinataire'],
        ['**2. Cohérence du texte**', 'plan clair (intro, développement, conclusion), paragraphes, organisateurs textuels, reprise de l\'information, aucune contradiction'],
        ['**3. Vocabulaire**', 'mots précis, variés, adaptés au registre standard ; pas d\'anglicismes ni de répétitions'],
        ['**4. Syntaxe et ponctuation**', 'phrases bien construites, variées ; virgules au bon endroit'],
        ['**5. Orthographe**', 'orthographe d\'usage et grammaticale (accords !)'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'avant l\'épreuve', items: [
          'Lire le dossier et **annoter** : idées, chiffres, citations, noms d\'experts.',
          'Préparer des arguments pour **les deux** thèses possibles.',
          'Se faire une liste d\'organisateurs textuels et de marques de modalité.',
        ] } ],
      [ { t: 'list', h: 'le jour J (gestion du temps)', items: [
          '**Planifier** (environ 20 %) : thèse, 2 ou 3 arguments, preuves, plan.',
          '**Rédiger** (environ 50 %) : brouillon, en sautant des lignes.',
          '**Réviser** (environ 30 %) : relire plusieurs fois, une fois par type d\'erreur.',
          'Mettre au propre en gardant du temps pour une dernière relecture.',
        ] } ],
    ] },
    { t: 'list', h: 'réviser efficacement', items: [
      'Pour chaque verbe : trouver le **sujet** et accorder.',
      'Pour chaque participe passé : quel **auxiliaire** ? Où est le **CD** ?',
      'Pour chaque GN : déterminant, nom, adjectifs accordés ensemble.',
      'Chercher dans le dictionnaire les mots dont tu doutes ; vérifier les homophones (a/à, ou/où, ces/ses, leur/leurs).',
    ] },
  ],
  verso: [
    { t: 'txt', h: 'Plan type (sujet : faut-il interdire le cellulaire en classe ?)', p: [ 'Thèse : **Oui, le cellulaire devrait être interdit pendant les cours.**' ] },
    { t: 'tab', full: true, lcol: true,
      head: ['Partie', 'Contenu prévu', 'Preuves (dossier)'],
      rows: [
        ['Introduction', 'sujet amené (omniprésence des écrans) · sujet posé + thèse · sujet divisé', '—'],
        ['Argument 1', 'Il nuit à la concentration.', 'donnée chiffrée d\'une étude du dossier ; explication'],
        ['Argument 2', 'Il favorise la cyberintimidation à l\'école.', 'témoignage (appel à l\'autorité) ; conséquence'],
        ['Contre-argument', 'Certes, il peut servir d\'outil pédagogique. Toutefois, les écoles fournissent déjà des ordinateurs.', 'réfutation'],
        ['Conclusion', 'synthèse des arguments · ouverture (autoriser le cellulaire aux pauses ?)', '—'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'formules utiles', items: [
          'Thèse : « Je suis convaincu que… », « Il faut… »',
          'Introduire une preuve : « Selon… », « Comme le démontre… », « En effet, … »',
          'Concession : « Certes… Toutefois… »',
          'Conclusion : « Bref, … », « En somme, … »',
        ] } ],
      [ { t: 'list', h: 'citer le dossier', items: [
          'Guillemets + source : « … », affirme la chercheuse X.',
          'Citation courte, intégrée à ta phrase.',
          'Reformuler une idée : pas de guillemets, mais on nomme la source.',
        ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Changer de thèse en cours de route.',
          'Recopier de longs passages du dossier.',
          'Manquer de temps pour la révision : c\'est là que se gagnent les points d\'orthographe.',
          'Écrire en langue familière.',
        ] } ],
      [ { t: 'retenir', items: [
          'Planifier, rédiger, réviser.',
          'Une thèse, 2-3 arguments, des preuves du dossier.',
          '5 critères : situation, cohérence, vocabulaire, syntaxe-ponctuation, orthographe.',
        ] } ],
    ] },
  ],
},

/* ============ 9. Cohérence textuelle ============ */
coherence: {
  bulle: 'cohérence textuelle',
  sous: 'Cohérence textuelle : reprise de l\'information et progression',
  recto: [
    { t: 'txt', p: [ 'Un texte est **cohérent** quand il forme un tout logique et facile à suivre. On vérifie **4 règles**.' ] },
    { t: 'tab', full: true, lcol: true,
      head: ['Règle', 'Explication'],
      rows: [
        ['**Pertinence**', 'Toutes les idées sont liées au sujet et à l\'intention.'],
        ['**Continuité**', 'On reprend l\'information d\'une phrase à l\'autre : le lecteur sait toujours de quoi on parle.'],
        ['**Progression**', 'Chaque phrase apporte de l\'information **nouvelle**. On ne tourne pas en rond.'],
        ['**Non-contradiction**', 'Aucune idée ne contredit une autre ; les temps de verbes et le point de vue restent constants.'],
      ] },
    { t: 'tab', h: 'la reprise de l\'information (continuité)', full: true, lcol: true,
      head: ['Moyen', 'Exemple (le mot repris : « le castor »)'],
      rows: [
        ['**pronom**', 'Le castor construit des barrages. __Il__ utilise des branches.'],
        ['**synonyme**', '… Ce __rongeur__ …'],
        ['**terme générique** (plus général)', '… Cet __animal__ …'],
        ['**terme spécifique** (plus précis)', 'Certains animaux… __Le castor__, par exemple, …'],
        ['**périphrase** (groupe de mots)', '… L\'__ingénieur des rivières__ …'],
        ['**changement de déterminant**', '__Un__ castor… __Ce__ castor…'],
        ['**reprise partielle**', 'Le castor… __Ses dents__ poussent toute sa vie.'],
        ['**reprise par un adverbe**', 'Il vit au Canada. __Là__, il est un symbole.'],
        ['**reprise d\'une idée** (nominalisation)', 'Il abat des arbres. __Cet abattage__ …'],
      ] },
    { t: 'list', h: 'à surveiller', items: [
      'Un pronom doit avoir un **antécédent clair** : pas d\'ambiguïté possible.',
      'Éviter les **répétitions** du même mot : varier les reprises.',
      'Garder le même **système de temps** (présent ou passé) et le même **point de vue** du début à la fin.',
    ] },
  ],
  verso: [
    { t: 'cite', h: 'Texte avec des problèmes de cohérence', p: [ 'Les abeilles sont essentielles à l\'agriculture. Les abeilles pollinisent de nombreuses cultures. Les abeilles disparaissent à cause des pesticides. Les pesticides sont utilisés partout. Mon oncle a un chalet. Il a interdit les pesticides.' ] },
    { t: 'ex', h: 'Problèmes :', q: '',
      s: [ '« Les abeilles » ×3 → répétitions // continuité maladroite', '« Mon oncle a un chalet » → pas pertinent', '« Il a interdit… » → antécédent ambigu // l\'oncle ? le gouvernement ?' ] },
    { t: 'cite', h: 'Version corrigée', p: [ 'Les abeilles sont essentielles à l\'agriculture. __Ces insectes__ pollinisent en effet de nombreuses cultures. Or, __ils__ disparaissent à cause des pesticides, utilisés dans presque tous les champs. __Cette disparition__ menace notre alimentation ; c\'est pourquoi __le gouvernement__ devrait interdire __ces produits__.' ] },
    { t: 'ex', h: 'Reprises utilisées :', q: '',
      s: [ '« Ces insectes » → terme générique', '« ils » → pronom', '« Cette disparition » → reprise d\'une idée', '« ces produits » → terme générique // pour pesticides' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Un « il » ou un « cela » dont on ne sait pas ce qu\'il remplace.',
          'Passer du présent au passé sans raison.',
          'Ajouter une anecdote qui ne sert pas l\'argument.',
        ] } ],
      [ { t: 'retenir', items: [
          'Pertinence, continuité, progression, non-contradiction.',
          'Varier les reprises : pronom, synonyme, générique, périphrase.',
          'Chaque pronom = un antécédent clair.',
        ] } ],
    ] },
  ],
},

/* ============ 10. Organisateurs et marqueurs ============ */
organisateurs: {
  bulle: 'organisateurs et marqueurs',
  sous: 'Organisateurs textuels et marqueurs de relation',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', h: 'organisateur textuel', p: [
          'Il **structure le texte** : il marque les grandes étapes ou le passage d\'une partie à l\'autre. Il se place souvent au **début d\'un paragraphe** et il est suivi d\'une **virgule**.',
          'ex. D\'abord, … Ensuite, … Enfin, … En conclusion, …',
        ] } ],
      [ { t: 'txt', h: 'marqueur de relation', p: [
          'Il **lie deux groupes ou deux phrases** à l\'intérieur d\'un paragraphe et indique le **lien logique** entre eux.',
          'ex. Il pleuvait, __mais__ nous sommes sortis. Nous sommes restés __parce qu\'__il pleuvait.',
        ] } ],
    ] },
    { t: 'tab', h: 'classés par sens', full: true, lcol: true,
      head: ['Sens', 'Exemples'],
      rows: [
        ['**temps / ordre**', 'd\'abord, premièrement, ensuite, puis, par la suite, enfin, finalement'],
        ['**addition**', 'et, de plus, en outre, par ailleurs, également, aussi, d\'une part… d\'autre part'],
        ['**cause**', 'car, parce que, puisque, étant donné que, en effet, comme'],
        ['**conséquence**', 'donc, ainsi, par conséquent, c\'est pourquoi, si bien que, de sorte que'],
        ['**opposition**', 'mais, cependant, toutefois, par contre, au contraire, alors que, tandis que'],
        ['**concession**', 'certes, bien que (+ subjonctif), même si, malgré, pourtant, néanmoins'],
        ['**but**', 'pour, afin de, afin que (+ subjonctif), pour que'],
        ['**illustration**', 'par exemple, notamment, entre autres, ainsi'],
        ['**explication / reformulation**', 'c\'est-à-dire, autrement dit, en d\'autres mots'],
        ['**conclusion**', 'bref, en somme, en conclusion, pour conclure, somme toute'],
      ] },
    { t: 'list', h: 'ponctuation', items: [
      'Organisateur en début de phrase → **virgule** après : « Ensuite, … »',
      'Coordonnant (mais, car, donc, or) entre deux phrases → **virgule** avant.',
      'Marqueur subordonnant (parce que, bien que) → pas de virgule obligatoire avant, sauf si la subordonnée est en tête de phrase.',
    ] },
  ],
  verso: [
    { t: 'cite', h: 'Exemple — relever et nommer', p: [ '__Premièrement__, le vélo en ville réduit la pollution. __En effet__, il ne produit aucun gaz à effet de serre. __Certes__, il est peu pratique l\'hiver ; __toutefois__, de plus en plus de pistes sont déneigées. __Bref__, il mérite plus de place sur nos routes.' ] },
    { t: 'ex', h: 'Analyse :', q: '',
      s: [ '« Premièrement » → organisateur textuel // ordre', '« En effet » → marqueur // explication, cause', '« Certes » → marqueur // concession', '« toutefois » → marqueur // opposition, réfutation', '« Bref » → organisateur textuel // conclusion' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Choisir le bon marqueur : « Le projet est coûteux, ___ il rapportera beaucoup à long terme. »',
      r: 'mais (ou cependant) : lien d\'opposition' },
    { t: 'ex', h: 'Exemple 3 —', q: 'Mode après le marqueur : « Bien qu\'il ___ (faire) froid, nous sortirons. »',
      r: 'Bien qu\'il fasse froid (bien que + subjonctif)' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Utiliser « malgré que » : en français soigné, on écrit **bien que**.',
          '« Après que » se construit avec l\'**indicatif** : après qu\'il est parti.',
          'Répéter toujours « de plus » : varie les marqueurs.',
          'Mettre un marqueur qui ne correspond pas au lien logique (« donc » pour une opposition).',
        ] } ],
      [ { t: 'retenir', items: [
          'Organisateur = structure le texte.',
          'Marqueur = relie des idées, exprime un lien logique.',
          'Bien que, afin que, pour que → subjonctif.',
        ] } ],
    ] },
  ],
},

/* ============ 11. Discours rapporté ============ */
'discours-rapporte': {
  bulle: 'discours rapporté',
  sous: 'Le discours rapporté et la citation',
  recto: [
    { t: 'txt', p: [ 'Le **discours rapporté**, ce sont les paroles ou les pensées de quelqu\'un d\'autre intégrées dans un texte. En argumentation, il sert surtout à **appuyer** une idée (appel à l\'autorité) ou à présenter la **thèse adverse**.' ] },
    { t: 'tab', full: true, lcol: true,
      head: ['Forme', 'Caractéristiques', 'Exemple'],
      rows: [
        ['**Discours direct**', 'paroles exactes ; deux-points et guillemets (ou tirets dans un dialogue) ; verbe de parole', 'La ministre a déclaré : « Nous investirons dans les écoles. »'],
        ['**Discours indirect**', 'paroles reformulées dans une **subordonnée complétive** ; pas de guillemets ; changement de pronoms, de temps et d\'indicateurs de temps', 'La ministre a déclaré __qu\'elle investirait__ dans les écoles.'],
        ['**Discours indirect libre**', 'paroles intégrées au récit, sans verbe de parole ni subordination (surtout en littérature)', 'Elle réfléchit. Investirait-elle vraiment dans les écoles ?'],
        ['**Modalisation en discours second**', 'on attribue une idée à quelqu\'un', '__Selon__ la ministre, … · __D\'après__ l\'étude, …'],
      ] },
    { t: 'cols', c: [
      [ { t: 'tab', h: 'passer du direct à l\'indirect (verbe au passé)', full: true, lcol: true,
          head: ['Direct', 'Indirect'],
          rows: [
            ['présent', 'imparfait'],
            ['passé composé', 'plus-que-parfait'],
            ['futur simple', 'conditionnel présent'],
            ['je, nous', 'il/elle, ils/elles'],
            ['aujourd\'hui, demain', 'ce jour-là, le lendemain'],
            ['ici', 'là'],
          ] } ],
      [ { t: 'list', h: 'citer correctement', items: [
          'Citation **exacte**, entre guillemets français « ».',
          '**[…]** indique une coupure dans la citation.',
          'Nommer la **source** : personne, fonction, organisme.',
          'Intégrer la citation dans une phrase **grammaticalement correcte**.',
          'Le **verbe introducteur** peut révéler un jugement : affirmer (neutre), prétendre (doute), avouer (faute), reconnaître (concession).',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Transposer au discours indirect : Le directeur a annoncé : « Je fermerai la cafétéria demain. »',
      s: [ '« Je » → il', '« fermerai » (futur) → fermerait // conditionnel présent', '« demain » → le lendemain' ],
      r: 'Le directeur a annoncé qu\'il fermerait la cafétéria le lendemain.' },
    { t: 'ex', h: 'Exemple 2 —', q: 'Transposer : Mon amie m\'a demandé : « As-tu terminé ton travail ? »',
      s: [ 'question oui/non → si', '« as-tu terminé » (passé composé) → avais terminé // plus-que-parfait', '« tu » / « ton » → je / mon' ],
      r: 'Mon amie m\'a demandé si j\'avais terminé mon travail.' },
    { t: 'ex', h: 'Exemple 3 —', q: 'Intégrer une citation dans une lettre ouverte.',
      p: [ '✗ Un expert dit « les jeunes manquent de sommeil ».', '✓ Comme le souligne le chercheur Marc Gagnon, « la majorité des adolescents dorment moins de huit heures par nuit [...] pendant l\'année scolaire ». (source fictive, pour l\'exemple)' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Quel jugement révèle le verbe ? « Le fabricant __prétend__ que son produit est sans danger. »',
      r: 'un doute : l\'énonciateur ne croit pas le fabricant' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Garder les guillemets au discours indirect.',
          'Oublier de changer les temps et les pronoms.',
          'Écrire « il m\'a demandé est-ce que… » : on écrit « il m\'a demandé si… ».',
        ] } ],
      [ { t: 'retenir', items: [
          'Direct : « paroles exactes ».',
          'Indirect : que / si + changements.',
          'Toujours nommer la source.',
        ] } ],
    ] },
  ],
},

});
