/* Français — Grammaire, oral et feuille Général */
Object.assign(DATA.feuilles['francais'], {

/* ============ 17. Classes de mots ============ */
'classes-mots': {
  bulle: 'classes de mots',
  sous: 'Les classes de mots et les groupes',
  recto: [
    { t: 'tab', h: 'les classes de mots', full: true, lcol: true,
      head: ['Classe', 'Variable ?', 'Rôle et repères', 'Exemples'],
      rows: [
        ['**Nom**', 'oui (genre, nombre)', 'noyau du GN ; désigne une personne, une chose, une idée', 'élève, Montréal, liberté'],
        ['**Déterminant**', 'oui', 'précède le nom et en reçoit le genre et le nombre', 'le, une, ces, mon, plusieurs, trois'],
        ['**Adjectif**', 'oui', 'caractérise le nom ; on peut souvent ajouter « très »', 'grand, québécois, fatigué'],
        ['**Pronom**', 'oui', 'remplace un GN (ou autre) ou désigne un participant', 'il, elle, le, lui, qui, celui-ci, tout'],
        ['**Verbe**', 'oui (personne, nombre, temps, mode)', 'noyau du GV ; se conjugue ; encadrable par « ne… pas »', 'réussir, être, prendre'],
        ['**Adverbe**', 'non', 'modifie un verbe, un adjectif, un adverbe ou une phrase', 'vite, très, hier, heureusement'],
        ['**Préposition**', 'non', 'introduit un complément (noyau du GPrép)', 'à, de, pour, avec, sans, malgré'],
        ['**Conjonction**', 'non', 'coordonne (mais, ou, et, donc, or, ni, car) ou subordonne (que, quand, parce que, si)', 'et, mais, lorsque, bien que'],
      ],
      note: 'Invariables : adverbe, préposition, conjonction (et l\'interjection : oh ! hélas !).' },
    { t: 'tab', h: 'les groupes de mots', full: true, lcol: true,
      head: ['Groupe', 'Noyau', 'Exemple'],
      rows: [
        ['**GN**', 'nom (ou pronom)', '__les petits chats__ du voisin'],
        ['**GV**', 'verbe conjugué', 'Elle __mange une pomme__.'],
        ['**GAdj**', 'adjectif', '__très fier de lui__'],
        ['**GPrép**', 'préposition', '__dans la cour__'],
        ['**GAdv**', 'adverbe', '__vraiment bien__'],
        ['**GInf**', 'verbe à l\'infinitif', '__Lire des romans__ me détend.'],
        ['**GPart**', 'verbe au participe présent', '__Voyant la pluie__, il resta.'],
      ] },
    { t: 'list', h: 'astuces pour identifier', items: [
      'Déterminant ou pronom ? « __le__ livre » (devant un nom → déterminant) ; « je __le__ lis » (devant un verbe → pronom).',
      'Adjectif ou adverbe ? L\'adjectif s\'accorde (une robe __chère__) ; l\'adverbe non (elle coûte __cher__).',
      'Préposition ou conjonction ? La préposition introduit un groupe (__avant__ le cours) ; la conjonction introduit une phrase (__avant qu\'__il parte).',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Donner la classe de chaque mot : « Ces jeunes musiciens jouent très bien leur dernière chanson. »',
      s: [ 'Ces → déterminant (démonstratif)', 'jeunes → adjectif', 'musiciens → nom', 'jouent → verbe', 'très → adverbe // modifie « bien »', 'bien → adverbe // modifie « jouent »', 'leur → déterminant (possessif) // devant le nom « chanson »', 'dernière → adjectif · chanson → nom' ] },
    { t: 'ex', h: 'Exemple 2 —', q: '« Je __leur__ ai parlé » ou « __leurs__ amis » ?',
      s: [ '« je leur ai parlé » → pronom // invariable, devant le verbe', '« leurs amis » → déterminant // s\'accorde avec le nom' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Délimiter les groupes : « Mon frère aîné travaille dans un restaurant du quartier. »',
      s: [ '[Mon frère aîné] → GN (sujet)', '[travaille dans un restaurant du quartier] → GV', '[dans un restaurant du quartier] → GPrép // complément du verbe', '[du quartier] → GPrép // complément du nom « restaurant »' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          '« leur » devant un verbe ne prend jamais de s.',
          'Accorder un adverbe : « Ils parlent fort » (invariable).',
          'Confondre « tout » déterminant (tous les jours), pronom (tous sont venus) et adverbe (tout petit).',
        ] } ],
      [ { t: 'retenir', items: [
          '8 classes : 5 variables, 3 invariables.',
          'Le noyau donne son nom au groupe.',
          'Devant un nom → déterminant ; devant un verbe → pronom.',
        ] } ],
    ] },
  ],
},

/* ============ 18. Phrase de base et fonctions ============ */
'phrase-base': {
  bulle: 'phrase de base et fonctions',
  sous: 'Phrase de base, manipulations syntaxiques et fonctions',
  recto: [
    { t: 'cols', w: '1fr 1.1fr', c: [
      [ { t: 'box', h: 'la phrase de base (P)', f: 'Sujet + Prédicat + (Complément de phrase)', note: 'Elle est déclarative, positive, active, neutre et personnelle.' },
        { t: 'tab', h: 'les manipulations', full: true, lcol: true,
          head: ['Manipulation', 'Sert à…'],
          rows: [
            ['**Effacement**', 'voir si un élément est obligatoire'],
            ['**Déplacement**', 'repérer le CP (mobile)'],
            ['**Remplacement**', 'trouver la fonction (par un pronom)'],
            ['**Addition**', 'reconnaître un adjectif (+ très)'],
            ['**Encadrement**', 'sujet : « C\'est… qui » ; verbe : « ne… pas »'],
          ] } ],
      [ { t: 'tab', h: 'les fonctions', full: true, lcol: true,
          head: ['Fonction', 'Comment la reconnaître'],
          rows: [
            ['**Sujet**', 'encadrable par « C\'est… qui » ; remplaçable par il, elle, ils, cela'],
            ['**Prédicat**', 'ce qu\'on dit du sujet ; c\'est le GV'],
            ['**Complément de phrase** (CP)', 'effaçable et **déplaçable** ; souvent temps, lieu, cause, but'],
            ['**Complément direct** (CD)', 'non déplaçable ; remplaçable par le, la, les, en, cela ; pas de préposition'],
            ['**Complément indirect** (CI)', 'introduit par une préposition ; remplaçable par lui, leur, y, en'],
            ['**Attribut du sujet**', 'après un verbe attributif (être, paraître, sembler, devenir, rester, demeurer, avoir l\'air) ; remplaçable par « le »'],
            ['**Complément du nom**', 'dans un GN, précise le nom'],
            ['**Complément de l\'adjectif**', 'complète l\'adjectif : fier __de toi__'],
            ['**Modificateur**', 'adverbe (ou GPrép) qui modifie le sens : parler __doucement__'],
            ['**Attribut du CD**', 'caractérise le CD : Je la trouve __drôle__.'],
          ] } ],
    ] },
    { t: 'list', h: 'démarche pour analyser une phrase', items: [
      '1. Trouver le **verbe conjugué** (encadrement ne… pas) et son **sujet** (C\'est… qui).',
      '2. Isoler les **CP** : ce qui se déplace et s\'efface.',
      '3. Dans le GV : trouver les compléments du verbe (CD, CI) ou l\'attribut par remplacement.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Analyser : « Chaque matin, ma voisine donne des graines aux oiseaux du parc. »',
      s: [ '« Chaque matin » → CP // Ma voisine donne… chaque matin (déplacement)', '« ma voisine » → sujet // C\'est ma voisine qui donne…', '« donne des graines aux oiseaux du parc » → prédicat (GV)', '« des graines » → CD du verbe // elle __en__ donne', '« aux oiseaux du parc » → CI du verbe // elle __leur__ donne', '« du parc » → complément du nom « oiseaux »' ] },
    { t: 'ex', h: 'Exemple 2 —', q: '« Les élèves semblent fatigués après l\'examen. »',
      s: [ '« semblent » → verbe attributif', '« fatigués » → attribut du sujet // ils le semblent', '« après l\'examen » → CP // Après l\'examen, les élèves…' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'CD ou attribut ? « Elle est devenue __médecin__. » / « Elle a soigné __un patient__. »',
      s: [ 'devenir = verbe attributif → « médecin » : attribut du sujet', 'soigner = verbe non attributif → « un patient » : CD // elle l\'a soigné' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Prendre un CI pour un CP : le CI ne se déplace pas.',
          'Oublier qu\'un sujet peut être placé après le verbe (« Où vont __les enfants__ ? »).',
          'Confondre attribut (après être, sembler…) et CD.',
        ] } ],
      [ { t: 'retenir', items: [
          'P = sujet + prédicat + (CP).',
          'CP : se déplace et s\'efface.',
          'CD : le/la/les ; CI : lui/leur/y/en.',
        ] } ],
    ] },
  ],
},

/* ============ 19. Types et formes de phrases ============ */
'types-formes': {
  bulle: 'types et formes',
  sous: 'Types et formes de phrases, phrases à construction particulière',
  recto: [
    { t: 'cols', c: [
      [ { t: 'tab', h: 'les 4 types (une phrase en a un seul)', full: true, lcol: true,
          head: ['Type', 'Exemple'],
          rows: [
            ['**déclaratif**', 'Tu étudies ce soir.'],
            ['**interrogatif**', 'Étudies-tu ce soir ? Est-ce que tu étudies ?'],
            ['**exclamatif**', 'Comme tu étudies fort !'],
            ['**impératif**', 'Étudie ce soir.'],
          ] } ],
      [ { t: 'tab', h: 'les 4 paires de formes (une de chaque paire)', full: true, lcol: true,
          head: ['Forme', 'Exemple'],
          rows: [
            ['**positive** / **négative**', 'Il vient. / Il ne vient pas.'],
            ['**active** / **passive**', 'Le chat mange la souris. / La souris est mangée par le chat.'],
            ['**neutre** / **emphatique**', 'Julie a gagné. / C\'est Julie qui a gagné.'],
            ['**personnelle** / **impersonnelle**', 'Trois élèves manquent. / Il manque trois élèves.'],
          ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'transformations à connaître', items: [
          '**Négative** : ne… pas / plus / jamais / rien / personne / aucun. On garde le « ne » à l\'écrit !',
          '**Passive** : le CD devient sujet ; verbe **être** + participe passé ; l\'ancien sujet devient complément introduit par « par ». Seuls les verbes avec un CD peuvent se mettre au passif.',
          '**Emphatique** : mettre un élément en relief par « C\'est… qui / que » ou par un **détachement** avec un pronom (« Ce film, je l\'ai adoré. »).',
          '**Interrogative** : inversion du sujet (avec trait d\'union), « est-ce que », ou mot interrogatif.',
        ] } ],
      [ { t: 'list', h: 'phrases à construction particulière', items: [
          '**Non verbale** (sans verbe conjugué) : Silence ! Quelle soirée !',
          '**Infinitive** : Ralentir. Que faire ?',
          '**À présentatif** : __Voici__ le résultat. __C\'est__ l\'heure. __Il y a__ du monde.',
          '**Impersonnelle** : __Il__ pleut. __Il__ faut partir. (« il » ne remplace rien)',
        ] } ],
    ] },
    { t: 'box', h: 'le « t » euphonique', f: 'A-t-il fini ? Va-t-elle venir ? (entre deux voyelles, avec deux traits d\'union)' },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Donner le type et les formes : « Ce roman n\'a pas été écrit par une Québécoise. »',
      s: [ 'type → déclaratif', 'formes → négative, passive, neutre, personnelle', 'phrase active → Une Québécoise n\'a pas écrit ce roman.' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Transformer « Les élèves préparent le spectacle. » à la forme passive, puis emphatique.',
      s: [ 'passive → Le spectacle est préparé par les élèves.', 'emphatique → Ce sont les élèves qui préparent le spectacle.' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Mettre à la forme interrogative par inversion : « Ton frère a réussi son examen. »',
      r: 'Ton frère a-t-il réussi son examen ?',
      p: [ 'Avec un sujet GN, on garde le GN et on ajoute un pronom après le verbe (inversion complexe).' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Négation à l\'écrit.',
      p: [ '✗ « J\'ai pas compris. »  ✓ « Je n\'ai pas compris. »', '✗ « Personne a répondu. »  ✓ « Personne n\'a répondu. »' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier le « ne » de la négation (très fréquent à l\'oral).',
          'Écrire « a-t\'il » avec une apostrophe : c\'est un trait d\'union (a-t-il).',
          'Vouloir mettre au passif une phrase sans CD : « Marie dort » n\'a pas de forme passive.',
        ] } ],
      [ { t: 'retenir', items: [
          '1 type + 4 formes.',
          'Passif : être + participe passé + par.',
          'Emphase : c\'est… qui / que.',
        ] } ],
    ] },
  ],
},

/* ============ 20. Subordonnées ============ */
subordonnees: {
  bulle: 'les subordonnées',
  sous: 'Subordonnées relative, complétive et circonstancielle',
  recto: [
    { t: 'txt', p: [ 'Une **subordonnée** est une phrase **enchâssée** dans une autre à l\'aide d\'un **subordonnant**. Elle ne peut pas exister seule et joue une **fonction** dans la phrase.' ] },
    { t: 'tab', full: true, lcol: true,
      head: ['Subordonnée', 'Subordonnants', 'Fonction', 'Exemple'],
      rows: [
        ['**relative**', 'qui, que, dont, où, lequel, auquel, duquel…', '**complément du nom** (ou du pronom)', 'Le livre __que tu m\'as prêté__ est génial.'],
        ['**complétive**', 'que, si, à ce que, de ce que ; mots interrogatifs (interrogative indirecte)', '**CD**, **CI**, **sujet**, complément de l\'adjectif ou du nom', 'Je pense __que tu as raison__. Je me demande __si tu viendras__.'],
        ['**circonstancielle**', 'quand, lorsque, parce que, puisque, pour que, afin que, bien que, si, même si, alors que…', 'surtout **complément de phrase** (temps, cause, but, concession, condition, opposition)', '__Quand la cloche sonne__, tout le monde sort.'],
      ],
      note: 'Les subordonnées corrélatives (si… que, tellement… que, plus… que) ne sont pas des compléments de phrase : elles dépendent d\'un adverbe.' },
    { t: 'cols', c: [
      [ { t: 'tab', h: 'choisir le bon pronom relatif', full: true, lcol: true,
          head: ['Pronom', 'Remplace…'],
          rows: [
            ['**qui**', 'un sujet'],
            ['**que**', 'un CD (ou un attribut)'],
            ['**dont**', 'un complément introduit par **de**'],
            ['**où**', 'un complément de lieu ou de temps'],
            ['**à qui**, **auquel**…', 'un complément introduit par à, pour, avec…'],
          ] } ],
      [ { t: 'list', h: 'le mode du verbe', items: [
          'Subjonctif après : bien que, pour que, afin que, avant que, à moins que, sans que, jusqu\'à ce que.',
          'Indicatif après : parce que, puisque, lorsque, **après que**, pendant que, si (condition).',
          'Complétive : subjonctif après un verbe de volonté, de doute ou de sentiment (je veux que tu __viennes__).',
        ] },
        { t: 'list', h: 'réduire une subordonnée', items: [
          'Pour que je __réussisse__ → pour __réussir__ (GInf, même sujet).',
          'Avant qu\'il __parte__ → avant __son départ__ (GN).',
          'Les élèves qui étaient épuisés → les élèves __épuisés__ (GAdj).',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Compléter avec le bon pronom relatif.',
      s: [ 'L\'amie ___ je te parle → dont // parler DE quelqu\'un', 'La ville ___ je suis née → où // lieu', 'Le film ___ nous avons vu → que // voir QUELQUE CHOSE (CD)', 'Le prof ___ j\'ai posé la question → à qui // poser À quelqu\'un' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Identifier la subordonnée et sa fonction : « Bien qu\'il soit fatigué, Samuel affirme qu\'il terminera son travail. »',
      s: [ '« Bien qu\'il soit fatigué » → circonstancielle de concession // CP, subjonctif', '« qu\'il terminera son travail » → complétive // CD de « affirme » (il l\'affirme)' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Relative : « Les élèves qui ont réussi l\'examen recevront un certificat. »',
      s: [ '« qui ont réussi l\'examen » → relative, complément du nom « élèves »', '« qui » → sujet de « ont réussi »' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Réduire : « Je travaille fort afin que je réussisse mon année. »',
      r: 'Je travaille fort afin de réussir mon année.' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          '« La chose que j\'ai besoin » ✗ → « La chose **dont** j\'ai besoin » (avoir besoin **de**).',
          '« Après qu\'il soit parti » ✗ → « Après qu\'il **est** parti ».',
          '« Malgré que » ✗ → « Bien que ».',
        ] } ],
      [ { t: 'retenir', items: [
          'Relative → complément du nom.',
          'Complétive → complément du verbe (souvent CD).',
          'Circonstancielle → surtout CP.',
          'dont = de ; où = lieu ou temps.',
        ] } ],
    ] },
  ],
},

/* ============ 21. Coordination et juxtaposition ============ */
coordination: {
  bulle: 'coordination',
  sous: 'Coordination et juxtaposition',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', h: 'la coordination', p: [
          'On **coordonne** deux éléments de même fonction (deux phrases, deux GN, deux adjectifs…) avec un **coordonnant** qui exprime un lien logique.',
          'ex. Il pleuvait, __mais__ nous sommes sortis.',
        ] } ],
      [ { t: 'txt', h: 'la juxtaposition', p: [
          'On **juxtapose** des éléments avec un **signe de ponctuation** seulement : virgule, point-virgule ou deux-points. Le lien logique est sous-entendu.',
          'ex. Il pleuvait ; nous sommes restés.',
        ] } ],
    ] },
    { t: 'tab', h: 'les coordonnants', full: true, lcol: true,
      head: ['Sens', 'Coordonnants'],
      rows: [
        ['addition', 'et, ni, puis, de plus, aussi, en outre'],
        ['opposition, restriction', 'mais, cependant, toutefois, pourtant, par contre, néanmoins'],
        ['cause', 'car, en effet'],
        ['conséquence', 'donc, alors, ainsi, c\'est pourquoi, par conséquent'],
        ['alternative', 'ou, ou bien, soit… soit'],
        ['explication', 'c\'est-à-dire, en effet'],
        ['transition, argument', 'or'],
      ],
      note: 'Conjonctions de coordination : mais, ou, et, donc, or, ni, car. Les autres sont des adverbes coordonnants.' },
    { t: 'cols', c: [
      [ { t: 'list', h: 'ponctuation avec les coordonnants', items: [
          '**Virgule devant** les coordonnants (mais, car, donc, or, puis, cependant…).',
          '**Pas de virgule** devant **et**, **ou**, **ni** quand ils unissent deux éléments.',
          'Virgule devant « et » si la 2<sup>e</sup> partie a un sujet différent et qu\'on veut marquer une pause, ou dans une énumération répétée (et… et…).',
        ] } ],
      [ { t: 'list', h: 'signes de juxtaposition', items: [
          '**Virgule** : énumération, phrases courtes liées.',
          '**Point-virgule** : deux phrases étroitement liées, souvent en opposition ou en parallèle.',
          '**Deux-points** : explication, cause, conséquence ou énumération annoncée.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Ponctuer : « Elle voulait venir mais elle était malade donc elle est restée chez elle. »',
      r: 'Elle voulait venir, mais elle était malade, donc elle est restée chez elle.' },
    { t: 'ex', h: 'Exemple 2 —', q: 'Nommer le lien : « Il a raté l\'autobus : il est arrivé en retard. »',
      s: [ 'deux-points → juxtaposition', 'lien sous-entendu → conséquence // donc il est arrivé en retard' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Coordonner correctement.',
      p: [ '✗ « J\'aime le soccer et jouer au hockey. » (un GN et un GInf : fonctions semblables, mais structures déséquilibrées)', '✓ « J\'aime jouer au soccer et au hockey. »', '✗ « Il n\'aime ni le froid, ni la neige. »  ✓ « Il n\'aime ni le froid ni la neige. »' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Juxtaposer avec un point-virgule : « Mon frère adore les sciences. Ma sœur préfère les arts. »',
      r: 'Mon frère adore les sciences ; ma sœur préfère les arts.' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier la virgule devant « mais » ou « car ».',
          'Mettre une virgule entre deux éléments coordonnés par « et ».',
          'Coordonner des éléments de structures différentes.',
          'Commencer une phrase par « Car » (on écrit plutôt « En effet »).',
        ] } ],
      [ { t: 'retenir', items: [
          'Coordination = coordonnant ; juxtaposition = ponctuation.',
          'Virgule devant mais, car, donc.',
          'Pas de virgule devant et, ou, ni (2 éléments).',
        ] } ],
    ] },
  ],
},

/* ============ 22. Ponctuation ============ */
ponctuation: {
  bulle: 'la ponctuation',
  sous: 'La ponctuation (surtout la virgule)',
  recto: [
    { t: 'cols', c: [
      [ { t: 'list', h: 'on met une virgule…', items: [
          'après un **CP en début de phrase** : « Demain, … »',
          'autour d\'un **CP au milieu** de la phrase : « Nous irons, demain, … »',
          'entre les éléments d\'une **énumération** (sauf devant et, ou).',
          'devant les **coordonnants** mais, car, donc, or…',
          'autour d\'un **complément du nom détaché** (apposition) : « Paul, mon voisin, … »',
          'autour d\'une **relative explicative** : « Mon frère, qui vit à Gatineau, … »',
          'autour d\'une **apostrophe** : « Julie, viens ici. »',
          'autour d\'une **incise** : « Oui, dit-il, je viens. »',
          'après un **organisateur textuel** : « Ensuite, … »',
          'pour détacher un élément (emphase) : « Ce film, je l\'ai adoré. »',
        ] } ],
      [ { t: 'box', h: 'virgules INTERDITES', f: 'entre le sujet et le verbe<br>entre le verbe et son complément (CD, CI)<br>entre le verbe et l\'attribut', note: 'Sauf si un élément est inséré entre eux : on met alors une virgule avant ET après cet élément.' },
        { t: 'list', h: 'les autres signes', items: [
          '**Point-virgule** : sépare deux phrases étroitement liées.',
          '**Deux-points** : annonce une explication, une énumération ou une citation.',
          '**Guillemets** « » : citation, mot employé de façon particulière.',
          '**Parenthèses** : information accessoire.',
          '**Tiret** : dialogue ; ou encadre une précision (comme des parenthèses).',
          '**Points de suspension** : phrase inachevée, hésitation (jamais après « etc. »).',
        ] } ],
    ] },
    { t: 'tab', h: 'espaces (typographie française)', full: true, lcol: true,
      head: ['Signe', 'Avant', 'Après'],
      rows: [
        ['. , …', 'aucune', 'une espace'],
        ['; ! ?', 'espace fine (ou aucune à la main)', 'une espace'],
        [':', 'une espace', 'une espace'],
        ['« »', 'espace après « et avant »', '—'],
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Ajouter les virgules : « Pendant les vacances mes cousins qui habitent en Gaspésie sont venus nous voir mais ils sont repartis trop vite. »',
      s: [ '« Pendant les vacances, » → CP en début de phrase', '« mes cousins, qui habitent en Gaspésie, » → relative explicative', '« , mais ils… » → coordonnant' ],
      r: 'Pendant les vacances, mes cousins, qui habitent en Gaspésie, sont venus nous voir, mais ils sont repartis trop vite.' },
    { t: 'ex', h: 'Exemple 2 —', q: 'Trouver l\'erreur : « Les élèves de la classe de madame Roy, ont gagné le concours. »',
      s: [ 'sujet → « Les élèves de la classe de madame Roy »', 'verbe → « ont gagné »', 'virgule entre le sujet et le verbe ✗' ],
      r: 'Les élèves de la classe de madame Roy ont gagné le concours.' },
    { t: 'ex', h: 'Exemple 3 —', q: 'Relative déterminative ou explicative ?',
      p: [ '« Les élèves __qui ont étudié__ ont réussi. » → **déterminative** : seulement ceux qui ont étudié. Pas de virgules.', '« Les élèves, __qui ont étudié__, ont réussi. » → **explicative** : tous les élèves ont étudié. Virgules.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Virgule entre un long sujet et son verbe.',
          'Oublier la 2<sup>e</sup> virgule d\'un élément inséré.',
          'Mettre « … » après « etc. ».',
          'Virgule avant « que » dans « Je pense que… ».',
        ] } ],
      [ { t: 'retenir', items: [
          'CP déplacé → virgule.',
          'Jamais entre sujet et verbe.',
          'Élément inséré → deux virgules.',
        ] } ],
    ] },
  ],
},

/* ============ 23. Accords GN et GV ============ */
'accords-gn-gv': {
  bulle: 'accords GN et GV',
  sous: 'Les accords dans le groupe du nom et dans le groupe du verbe',
  recto: [
    { t: 'cols', c: [
      [ { t: 'txt', h: 'dans le GN', p: [
          'Le **nom noyau** est le **donneur** : il donne son **genre** et son **nombre** au déterminant et aux adjectifs.',
          'les __petites__ voitures __rouges__ · un __vieil__ ami',
        ] },
        { t: 'list', items: [
          'Adjectif qui qualifie plusieurs noms : **pluriel** ; masculin si un des noms est masculin (une jupe et un chandail __neufs__).',
          '**Adjectifs de couleur** : simples, ils s\'accordent (des robes __vertes__) ; tirés d\'un nom, ils sont invariables (des chandails __orange__, __marron__), sauf rose, mauve, écarlate, fauve, pourpre ; composés, ils sont invariables (des yeux __bleu foncé__).',
          '**Demi** : invariable devant le nom (une __demi__-heure) ; accordé en genre après (deux heures et __demie__).',
          '**Vingt** et **cent** prennent un s s\'ils sont multipliés et terminent le nombre : quatre-vingt__s__, deux cent__s__, mais deux cent trois. **Mille** est invariable.',
        ] } ],
      [ { t: 'txt', h: 'dans le GV', p: [
          'Le **sujet** est le donneur : le **verbe** s\'accorde en **personne** et en **nombre** avec le noyau du sujet.',
          'L\'**attribut du sujet** s\'accorde en **genre** et en **nombre** avec le sujet.',
          'Mes sœurs __sont__ __contentes__.',
        ] },
        { t: 'list', h: 'cas délicats (sujet)', items: [
          'Sujet **« qui »** : accord avec l\'antécédent (C\'est moi qui __suis__ prêt ; les amis qui __viennent__).',
          '**Plusieurs sujets** : pluriel ; toi et moi → nous (Toi et moi __partirons__).',
          '**Sujet éloigné** ou **inversé** : bien le trouver (Où __vont__ les oiseaux ?).',
          '**Sujet collectif** + complément (une foule de gens) : accord selon le sens (__attendait__ ou __attendaient__).',
          '**La plupart**, **beaucoup** + nom pluriel : verbe au pluriel.',
          '**Écran** entre le sujet et le verbe : « Les élèves que le prof __interroge__… » (sujet = le prof).',
        ] } ],
    ] },
    { t: 'box', h: 'méthode de révision', f: 'Verbe → « C\'est… qui » → sujet → flèche vers le verbe · Nom → flèche vers déterminant et adjectifs' },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Corriger : « Les spectateurs, émus par la finale, applaudissait les acteur québécois. »',
      s: [ 'sujet → « Les spectateurs » (3<sup>e</sup> pers. plur.)', 'applaudissait → applaudissaient', 'GN « les acteur québécois » → noyau pluriel : les acteurs québécois' ],
      r: 'Les spectateurs, émus par la finale, applaudissaient les acteurs québécois.' },
    { t: 'ex', h: 'Exemple 2 —', q: 'Accorder : « Ce sont mes amies qui (avoir) organisé la fête. Elles semblaient (ravi). »',
      s: [ 'qui → antécédent « mes amies » → ont', 'attribut de « Elles » → ravies' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Couleurs : « des souliers (brun) et des chandails (orange) avec des bas (vert pâle) ».',
      s: [ 'brun → bruns // couleur simple', 'orange → orange // nom de fruit : invariable', 'vert pâle → vert pâle // couleur composée : invariable' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Écrire en lettres : 280 et 300.',
      r: 'deux cent quatre-vingts (ou deux-cent-quatre-vingts, orthographe rectifiée) ; trois cents' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Accorder le verbe avec le mot le plus proche au lieu du vrai sujet.',
          'Oublier l\'accord de l\'attribut avec le sujet.',
          '« leur » pronom ne prend jamais de s.',
        ] } ],
      [ { t: 'retenir', items: [
          'GN : le nom donne son genre et son nombre.',
          'GV : le sujet donne personne et nombre au verbe.',
          'Attribut = accord avec le sujet.',
        ] } ],
    ] },
  ],
},

/* ============ 24. Participe passé ============ */
'participe-passe': {
  bulle: 'participe passé',
  sous: 'L\'accord du participe passé',
  recto: [
    { t: 'tab', h: 'les 4 grandes règles', full: true, lcol: true,
      head: ['Cas', 'Règle', 'Exemple'],
      rows: [
        ['**Seul** (sans auxiliaire)', 'comme un **adjectif** : avec le nom qu\'il complète', 'des devoirs __terminés__'],
        ['avec **être**', 'avec le **sujet**', 'Elles sont __parties__ tôt.'],
        ['avec **avoir**', 'avec le **CD s\'il est placé avant** le verbe ; sinon, **invariable**', 'Les pommes que j\'ai __mangées__. / J\'ai __mangé__ des pommes.'],
        ['**verbe pronominal**', 'voir ci-dessous', 'Elle s\'est __lavée__. / Elle s\'est __lavé__ les mains.'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'avec avoir : trouver le CD', items: [
          'Poser la question : « avoir + participe + **qui ?** ou **quoi ?** »',
          'Le CD est souvent un pronom placé avant : **que**, **le**, **la**, **les**, **l\'**, **me**, **te**, **nous**, **vous**.',
          '« que » → chercher son **antécédent** pour connaître le genre et le nombre.',
          'Avec **en** : participe **invariable** (Des pommes, j\'en ai __mangé__).',
        ] },
        { t: 'list', h: 'cas particuliers', items: [
          '**Coûté**, **valu**, **pesé**, **mesuré**, **duré** avec un complément de prix, de poids ou de durée : invariables (les 20 $ que ce livre m\'a __coûté__).',
          '**Fait** suivi d\'un infinitif : toujours invariable (Elle s\'est __fait__ couper les cheveux).',
          'Participe d\'un verbe **impersonnel** : invariable (les tempêtes qu\'il y a __eu__).',
        ] } ],
      [ { t: 'list', h: 'verbes pronominaux', items: [
          '**Essentiellement pronominaux** (n\'existent qu\'avec « se ») : accord avec le **sujet** : Elles se sont __souvenues__. Il s\'est __évanoui__.',
          '**Sens différent** du verbe non pronominal (s\'apercevoir, s\'attendre) : accord avec le **sujet** : Elles se sont __aperçues__ de leur erreur.',
          '**Autres** : on remplace « être » par « avoir » et on applique la règle du CD placé avant.',
          '• Elle s\'est __lavée__ → elle a lavé qui ? se (= elle), placé avant → accord.',
          '• Elle s\'est __lavé__ les mains → CD « les mains » placé après → invariable.',
          '• Ils se sont __parlé__ → parler **à** quelqu\'un : se = CI → invariable.',
        ] } ],
    ] },
    { t: 'box', h: 'démarche', f: 'auxiliaire ? → être : sujet · avoir : CD avant ? · pronominal : type de verbe, puis CD' },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: '« Les lettres que tu m\'as (envoyer) sont (arriver) hier. »',
      s: [ 'm\'as envoyé… : auxiliaire avoir ; envoyé quoi ? « que » = les lettres, placé avant → envoyées', 'sont arrivé… : auxiliaire être → accord avec « les lettres » → arrivées' ],
      r: 'Les lettres que tu m\'as envoyées sont arrivées hier.' },
    { t: 'ex', h: 'Exemple 2 —', q: '« Nous avons (voir) plusieurs films. Ceux que nous avons (préférer) étaient québécois. »',
      s: [ 'avons vu quoi ? « plusieurs films » placé après → vu (invariable)', 'avons préféré quoi ? « que » = ceux (films), placé avant → préférés' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Pronominaux.',
      s: [ 'Elles se sont (téléphoner) → téléphoné // téléphoner À : se = CI', 'Elles se sont (maquiller) → maquillées // maquiller qui ? se, avant', 'Elles se sont (acheter) des billets → acheté // CD après', 'Les billets qu\'elles se sont (acheter) → achetés // CD « que » avant', 'Elles se sont (enfuir) → enfuies // essentiellement pronominal' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Accorder avec le sujet quand l\'auxiliaire est avoir.',
          'Accorder avec un CD placé après.',
          'Oublier de remonter à l\'antécédent de « que ».',
          '« Ils se sont parlés » ✗ → « parlé ».',
        ] } ],
      [ { t: 'retenir', items: [
          'Être → sujet.',
          'Avoir → CD placé avant.',
          'En, fait + infinitif → invariable.',
        ] } ],
    ] },
  ],
},

/* ============ 25. Conjugaison ============ */
conjugaison: {
  bulle: 'conjugaison',
  sous: 'Modes, temps et concordance des temps',
  recto: [
    { t: 'tab', h: 'les modes', full: true, lcol: true,
      head: ['Mode', 'Valeur', 'Exemple'],
      rows: [
        ['**Indicatif**', 'faits réels, situés dans le temps (inclut le conditionnel présent et passé)', 'il vient, il viendra, il viendrait'],
        ['**Subjonctif**', 'souhait, doute, obligation, sentiment ; après certains subordonnants', 'Il faut qu\'il __vienne__.'],
        ['**Impératif**', 'ordre, conseil (sans sujet)', 'Viens ! Venons ! Venez !'],
        ['**Infinitif**', 'forme non conjuguée', 'venir, être venu'],
        ['**Participe**', 'présent (-ant) ou passé', 'venant, venu'],
      ] },
    { t: 'cols', c: [
      [ { t: 'box', h: 'si + imparfait → conditionnel', f: 'Si j\'<b>avais</b> le temps, j\'<b>irais</b>.<br>Si j\'<b>avais eu</b> le temps, je <b>serais allé</b>.', note: 'Jamais de conditionnel après « si » : « Si j\'aurais » ✗' },
        { t: 'list', h: 'terminaisons à connaître', items: [
          'Impératif des verbes en -er : pas de s (mange, parle), sauf devant en et y (manges-en, vas-y).',
          'Futur (je parlerai) ≠ conditionnel (je parlerais) : remplacer par « nous » (parlerons / parlerions).',
          '-é (participe) ou -er (infinitif) ? Remplacer par « vendu » / « vendre ».',
          'Subjonctif de faire, pouvoir, savoir, aller : que je fasse, puisse, sache, aille.',
        ] } ],
      [ { t: 'tab', h: 'concordance : verbe principal au PASSÉ', full: true, lcol: true,
          head: ['L\'action de la subordonnée est…', 'Temps'],
          rows: [
            ['**en même temps** (simultanéité)', 'imparfait : Je savais qu\'il __était__ là.'],
            ['**avant** (antériorité)', 'plus-que-parfait : Je savais qu\'il __était parti__.'],
            ['**après** (postériorité)', 'conditionnel présent : Je savais qu\'il __viendrait__.'],
          ],
          note: 'Verbe principal au présent ou au futur : tous les temps sont possibles selon le sens.' },
        { t: 'list', h: 'temps composés', items: [
          'auxiliaire (avoir ou être) conjugué + participe passé.',
          'Plus-que-parfait = imparfait de l\'auxiliaire : j\'__avais__ fini.',
          'Futur antérieur = futur de l\'auxiliaire : j\'__aurai__ fini.',
          'Conditionnel passé : j\'__aurais__ fini.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Concordance : « Elle croyait que tu (réussir) ton examen la semaine suivante. »',
      s: [ 'verbe principal au passé (croyait)', 'action après → postériorité → conditionnel présent' ], r: 'que tu réussirais' },
    { t: 'ex', h: 'Exemple 2 —', q: '« Si tu (étudier) davantage, tu (obtenir) de meilleures notes. »',
      r: 'Si tu étudiais davantage, tu obtiendrais de meilleures notes.' },
    { t: 'ex', h: 'Exemple 3 —', q: 'Mode : « Bien qu\'il (pleuvoir), nous jouerons. Il faut que tu (faire) ton travail. »',
      s: [ 'bien que → subjonctif → qu\'il pleuve', 'il faut que → subjonctif → que tu fasses' ] },
    { t: 'ex', h: 'Exemple 4 —', q: 'Futur ou conditionnel ? « Demain, je (aller) au cinéma si j\'ai de l\'argent. »',
      s: [ 'si + présent → futur dans la principale', 'j\'irai (et non j\'irais)' ] },
    { t: 'ex', h: 'Exemple 5 —', q: 'Impératif : « (Manger) tes légumes ! (Aller) - y ! »',
      r: 'Mange tes légumes ! Vas-y !' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          '« Si j\'aurais » ✗.',
          'Confondre je finirai (futur) et je finirais (conditionnel).',
          '« Il faut que tu fais » ✗ → « que tu fasses ».',
          'Mettre un s à l\'impératif des verbes en -er (« manges » ✗).',
        ] } ],
      [ { t: 'retenir', items: [
          'Si + imparfait → conditionnel.',
          'Passé : simultanéité imparfait, antériorité plus-que-parfait, postériorité conditionnel.',
          'Bien que, pour que, il faut que → subjonctif.',
        ] } ],
    ] },
  ],
},

/* ============ 26. Lexique ============ */
lexique: {
  bulle: 'lexique',
  sous: 'Lexique : formation des mots, sens et variétés de langue',
  recto: [
    { t: 'cols', c: [
      [ { t: 'tab', h: 'la formation des mots', full: true, lcol: true,
          head: ['Procédé', 'Exemple'],
          rows: [
            ['**dérivation** (préfixe, suffixe)', '__in__égal, bleu__âtre__, __dé__faire'],
            ['**composition**', 'arc-en-ciel, pomme de terre, portefeuille'],
            ['**télescopage** (mot-valise)', 'courriel (courrier + électronique)'],
            ['**abrègement**', 'prof, ado, vélo'],
            ['**sigle** / **acronyme**', 'CÉGEP, SAAQ / radar, ovni'],
            ['**emprunt**', 'pizza (italien), kayak (inuktitut)'],
            ['**néologisme**', 'clavarder, divulgâcher'],
          ] },
        { t: 'list', h: 'les sens d\'un mot', items: [
          '**Sens propre** (premier) / **figuré** (imagé) : un __loup__ / cet homme est un __loup__.',
          '**Dénotation** (sens neutre) / **connotation** (valeur ajoutée, positive ou négative).',
          '**Polysémie** : un mot a plusieurs sens (une __souris__ : animal ou accessoire).',
        ] } ],
      [ { t: 'list', h: 'les relations entre les mots', items: [
          '**Synonymes** : sens proche (rapide / vite).',
          '**Antonymes** : sens contraire (généreux / avare).',
          '**Homophones** : même son, sens différent (vert, verre, vers, ver).',
          '**Paronymes** : mots qui se ressemblent (éminent / imminent, conjecture / conjoncture).',
          '**Champ lexical** : mots liés à un même thème.',
          '**Générique** / **spécifique** : fruit → pomme.',
        ] },
        { t: 'tab', h: 'les variétés de langue', full: true, lcol: true,
          head: ['Variété', 'Exemple'],
          rows: [
            ['**soutenue**', 'Je suis fort las de ces querelles.'],
            ['**standard**', 'Je suis fatigué de ces disputes.'],
            ['**familière**', 'Chu tanné de ces chicanes.'],
            ['**populaire**', 'expressions très relâchées, parfois vulgaires'],
          ],
          note: 'À l\'écrit scolaire : la langue **standard**. Les québécismes standards (courriel, magasiner, dépanneur) sont acceptés.' } ],
    ] },
    { t: 'tab', h: 'anglicismes fréquents à éviter', full: true, lcol: true,
      head: ['À éviter', 'À dire'],
      rows: [
        ['appliquer sur un emploi', 'postuler un emploi, poser sa candidature'],
        ['prendre une marche', 'faire une promenade'],
        ['canceller, céduler', 'annuler, planifier (ou fixer)'],
        ['à date', 'jusqu\'à maintenant, jusqu\'ici'],
        ['définitivement (au sens de « certainement »)', 'certainement, assurément'],
        ['faire du sens', 'avoir du sens, être logique'],
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Analyser la formation : « inacceptable », « téléverser », « OQLF ».',
      s: [ 'in + accept + able → dérivation // préfixe + suffixe', 'élément télé- (« à distance ») + verser → néologisme québécois', 'OQLF → sigle // Office québécois de la langue française' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Connotation : classer « bavard », « éloquent », « volubile ».',
      s: [ 'éloquent → mélioratif', 'volubile → plutôt neutre', 'bavard → péjoratif' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Récrire en langue standard : « Mon chum pis moi, on a jasé longtemps, c\'tait l\'fun. »',
      r: 'Mon ami et moi avons longuement discuté ; c\'était agréable.' },
    { t: 'ex', h: 'Exemple 4 —', q: 'Paronymes : « La tempête est (éminente / imminente). »',
      r: 'imminente (qui va arriver bientôt) ; éminent = remarquable' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Utiliser un mot familier dans une lettre ouverte.',
          'Confondre des paronymes (effraction / infraction).',
          'Utiliser un anglicisme sans le savoir : vérifier dans un dictionnaire ou la Banque de dépannage linguistique de l\'OQLF.',
        ] } ],
      [ { t: 'retenir', items: [
          'Dérivation, composition, emprunt…',
          'Dénotation (neutre) vs connotation (jugement).',
          'Écrit scolaire = langue standard.',
        ] } ],
    ] },
  ],
},

/* ============ 27. Oral ============ */
oral: {
  bulle: 'communication orale',
  sous: 'Communication orale : débat et exposé argumentatif',
  recto: [
    { t: 'cols', c: [
      [ { t: 'list', h: 'le débat', items: [
          '**Animateur** (modérateur) : présente le sujet, donne la parole, fait respecter le temps, résume.',
          '**Débatteurs** : défendent une position avec des arguments et des preuves.',
          '**Public** : écoute, pose parfois des questions.',
        ] },
        { t: 'list', h: 'stratégies pendant un débat', items: [
          '**Écouter** activement et prendre des notes.',
          '**Reformuler** la position de l\'autre avant d\'y répondre (« Si je comprends bien… »).',
          '**Concéder** puis **réfuter** (« Tu as raison sur ce point, mais… »).',
          'Demander des **précisions** ou des **preuves**.',
          'Rester **respectueux** : on critique les idées, pas les personnes.',
        ] } ],
      [ { t: 'list', h: 'l\'exposé argumentatif', items: [
          '**Introduction** : accroche, sujet, thèse, annonce du plan.',
          '**Développement** : arguments et preuves, avec des marqueurs clairs (« Mon deuxième argument… »).',
          '**Conclusion** : rappel de la thèse et ouverture ; remercier l\'auditoire.',
          'Utiliser des **aide-mémoire** (mots-clés, pas un texte à lire) et un **support visuel** simple.',
        ] },
        { t: 'tab', h: 'les éléments à travailler', full: true, lcol: true,
          head: ['Type', 'Éléments'],
          rows: [
            ['**prosodiques** (la voix)', 'volume, débit, intonation, articulation, pauses'],
            ['**non verbaux** (le corps)', 'regard, posture, gestes, expressions du visage'],
            ['**verbaux** (la langue)', 'vocabulaire précis, langue standard, marqueurs de relation'],
          ] } ],
    ] },
    { t: 'list', h: 'formules utiles', items: [
      'Donner son opinion : « À mon avis… », « Je suis convaincu que… », « Pour ma part… »',
      'Être d\'accord : « Je partage ton point de vue », « Effectivement… »',
      'Être en désaccord : « Je ne suis pas de cet avis, car… », « Au contraire… »',
      'Garder la parole : « Permets-moi de terminer… » · Conclure : « En somme… »',
    ] },
  ],
  verso: [
    { t: 'cite', h: 'Échange à analyser (débat sur l\'uniforme scolaire)', p: [
      '<b>Amir</b> — L\'uniforme réduit la pression liée aux marques de vêtements.',
      '<b>Chloé</b> — Si je comprends bien, tu dis que tout le monde serait sur un pied d\'égalité ? C\'est vrai en partie. Par contre, les élèves se distinguent aussi par leurs souliers, leur cellulaire… La pression ne disparaît donc pas.',
      '<b>Amir</b> — Tu as raison, mais elle diminue quand même, selon le sondage de notre école.',
    ] },
    { t: 'ex', h: 'Analyse :', q: '',
      s: [ '« Si je comprends bien, tu dis que… » → reformulation', '« C\'est vrai en partie. » → concession', '« Par contre, … » → réfutation + exemples', '« Tu as raison, mais… » → concession puis retour à sa thèse', '« selon le sondage » → preuve (appel à une source)' ],
      r: 'un débat respectueux : on reformule, on concède, on réfute' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Lire son texte mot à mot sans regarder l\'auditoire.',
          'Parler trop vite par nervosité.',
          'Couper la parole ou attaquer la personne plutôt que l\'idée.',
          'Utiliser des tics de langage (« genre », « comme », « faque »).',
        ] } ],
      [ { t: 'retenir', items: [
          'Écouter, reformuler, concéder, réfuter.',
          'Voix, corps, langue : les trois comptent.',
          'Aide-mémoire = mots-clés.',
        ] } ],
    ] },
  ],
},

/* ============ GÉNÉRAL ============ */
general: {
  bulle: 'français : tout en 1',
  sous: 'Résumé de l\'année — Français, secondaire 5',
  recto: [
    { t: 'cols', c: [
      [ { t: 'list', h: 'argumenter', items: [
          '**Thèse** + **arguments** + **preuves** ; thèse adverse.',
          'Intro : sujet **amené**, **posé**, **divisé** · Conclusion : **synthèse** + **ouverture**.',
          '**Stratégies** : explication argumentative, réfutation, démonstration.',
          '**Contre-argumentation** : concession (certes) + réfutation (toutefois).',
          '**Procédés** : exemple, statistique, appel à l\'autorité, comparaison, question rhétorique, anecdote…',
          '**Point de vue** engagé / distancié ; **marques de modalité** : vocabulaire connoté, adverbes, conditionnel, ponctuation expressive…',
          '**Énonciation** : énonciateur, destinataire, ton (justifié par des indices).',
          '**Cohérence** : pertinence, continuité (reprises), progression, non-contradiction.',
        ] } ],
      [ { t: 'list', h: 'lire la littérature', items: [
          '**Figures** : comparaison (comme), métaphore, personnification, hyperbole, litote, antithèse, oxymore, gradation, anaphore, ironie → relever, nommer, expliquer l\'effet.',
          '**Récit** : schéma narratif ; narrateur participant, omniscient ou témoin.',
          '**Poésie** : alexandrin 12, décasyllabe 10, octosyllabe 8 ; rimes plates, croisées, embrassées.',
          '**Théâtre** : répliques, didascalies, aparté, monologue, double énonciation.',
          '**Appréciation** : critère → jugement → justification → exemple.',
        ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'grammaire de la phrase', items: [
          'P = **sujet** + **prédicat** + (**CP**). CP : déplaçable, effaçable.',
          'CD : le/la/les ; CI : lui/leur/y/en ; attribut : après être, sembler…',
          'Subordonnées : **relative** (complément du nom), **complétive** (CD…), **circonstancielle** (CP).',
          'dont = de ; bien que, pour que, il faut que → **subjonctif**.',
          'Virgule : après un CP en tête, devant mais/car/donc, autour d\'un élément inséré ; **jamais** entre sujet et verbe.',
        ] } ],
      [ { t: 'list', h: 'accords et conjugaison', items: [
          'GN : le nom donne genre et nombre. GV : le sujet donne personne et nombre.',
          'PP : **être** → sujet ; **avoir** → CD placé avant ; « en » et « fait + infinitif » → invariable.',
          '**Si + imparfait → conditionnel.**',
          'Concordance au passé : imparfait (même temps), plus-que-parfait (avant), conditionnel (après).',
          'Langue **standard** ; éviter les anglicismes.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Thèse —', q: '« Les écoles devraient commencer plus tard. »', s: [ '« devraient » → conditionnel // position claire' ] },
        { t: 'ex', h: 'Contre-argument —', q: '« Certes, … Toutefois, … »', s: [ 'concession → réfutation' ] },
        { t: 'ex', h: 'Modalité —', q: '« Hélas, un règlement absurde ! »', s: [ 'adverbe + adjectif péjoratif + exclamation' ] },
        { t: 'ex', h: 'Figure —', q: '« La ville dormait »', s: [ 'personnification // calme, vie' ] } ],
      [ { t: 'ex', h: 'Relatif —', q: 'l\'outil ___ j\'ai besoin', s: [ 'dont // avoir besoin DE' ] },
        { t: 'ex', h: 'PP —', q: 'les lettres que tu m\'as (envoyer)', s: [ 'envoyées // CD « que » avant' ] },
        { t: 'ex', h: 'Conjugaison —', q: 'Si j\'(avoir) le temps, j\'(aller)…', s: [ 'avais → irais' ] },
        { t: 'ex', h: 'Virgule —', q: 'Pendant l\'été mes cousins sont venus.', s: [ 'Pendant l\'été, mes cousins… // CP en tête' ] } ],
    ] },
    { t: 'pieges', items: [
      'Thèse floue ; argument sans preuve ; nouvel argument dans la conclusion.',
      'Nommer une figure ou un ton sans expliquer l\'effet ni citer d\'indices.',
      'Virgule entre sujet et verbe ; oublier la 2<sup>e</sup> virgule d\'un élément inséré.',
      'Accorder le PP avec avoir sur le sujet ; accorder avec un CD placé après.',
      '« Si j\'aurais », « malgré que », « après qu\'il soit », « la chose que j\'ai besoin ».',
      'Langue familière ou anglicismes dans un texte scolaire.',
    ] },
    { t: 'retenir', items: [
      'Épreuve unique : planifier, rédiger, réviser (garder du temps pour les accords !).',
      '5 critères : situation de communication, cohérence, vocabulaire, syntaxe et ponctuation, orthographe.',
      'Réviser : chaque verbe → son sujet ; chaque PP → son auxiliaire ; chaque GN → ses accords.',
    ] },
  ],
},

});
