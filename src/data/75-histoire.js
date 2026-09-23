/* Histoire du 20e siècle — secondaire 5 (cours à option) */
(function () {
  const NOTE = "Les temps forts étudiés varient d'une école à l'autre : compare avec ton plan de cours et ton cahier.";

DATA.feuilles['histoire'] = {

/* ============ DE 1900 À 1945 ============ */
'monde-1900': {
  bulle: 'le monde vers 1900',
  sous: "Impérialisme, alliances et rivalités : l'Europe domine le monde",
  recto: [
    { t: 'txt', p: [ "Vers 1900, quelques puissances européennes contrôlent une grande partie de la planète. Leur **concurrence** pour les territoires, les marchés et le prestige crée des tensions qui mèneront à la guerre de 1914." ] },
    { t: 'tab', h: 'les concepts clés', full: true, lcol: true,
      head: ['Concept', 'Définition (en mes mots)', 'Exemple'],
      rows: [
        ['**Impérialisme**', "volonté d'un État d'étendre sa domination (politique, économique, culturelle) sur d'autres territoires", "l'Empire britannique, le plus vaste du monde"],
        ['**Colonialisme**', "occupation et exploitation d'un territoire par une métropole qui y impose son pouvoir", "partage de l'Afrique à la conférence de Berlin (1884-1885)"],
        ['**Nationalisme**', "sentiment d'appartenance à une nation et volonté de défendre ses intérêts, ou d'obtenir un État à soi", "peuples slaves des Balkans qui veulent se libérer de l'Autriche-Hongrie"],
        ['**Militarisme**', "importance accordée à l'armée et à la force pour régler les conflits", "course aux armements navals entre le Royaume-Uni et l'Allemagne"],
        ['**Alliance**', "entente entre États qui promettent de s'entraider en cas de guerre", "Triple Alliance et Triple Entente"],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'les deux blocs', items: [
          "**Triple Alliance** (1882) : Allemagne, Autriche-Hongrie, Italie.",
          "**Triple Entente** (1907) : France, Royaume-Uni, Russie.",
          "Chaque bloc promet de défendre ses membres : un conflit local peut devenir général.",
        ] } ],
      [ { t: 'list', h: 'les points chauds', items: [
          "**Balkans** : la « poudrière de l'Europe » (Serbie contre Autriche-Hongrie).",
          "**Alsace-Lorraine** : prise par l'Allemagne à la France en 1871.",
          "**Colonies** : crises marocaines entre la France et l'Allemagne (1905, 1911).",
        ] } ],
    ] },
    { t: 'txt', p: [ '<span class="note">' + NOTE + '</span>' ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 — ', q: 'Pourquoi les Européens colonisent-ils ?',
      s: [ 'économique → matières premières et nouveaux marchés', 'politique → prestige et puissance face aux rivaux', 'militaire → ports et bases sur les routes maritimes', 'idéologique → prétendue « mission civilisatrice » (idée raciste de supériorité)' ] },
    { t: 'ex', h: 'Exemple 2 — ', q: "Relie une cause de la guerre à chaque lettre de l'aide-mémoire « MAIN ».",
      s: [ 'M → Militarisme : course aux armements', 'A → Alliances : deux blocs rivaux', 'I → Impérialisme : rivalités coloniales', 'N → Nationalisme : Balkans, Alsace-Lorraine' ] },
    { t: 'ex', h: 'Question type examen — ', q: "Explique en quoi le nationalisme menace la paix en Europe vers 1900.",
      s: ["fait → la Serbie veut unir les Slaves du Sud, dont ceux de l'Autriche-Hongrie", "fait → la France veut reprendre l'Alsace-Lorraine", "lien → chaque nation défend ses intérêts, quitte à faire la guerre", "conclusion → les tensions nationales deviennent des conflits entre grandes puissances"] },
    { t: 'list', h: 'vrai ou faux ?', items: ["En 1914, l'Italie combat avec l'Allemagne ? **Faux** : elle rejoint les Alliés en 1915.", "L'Empire britannique est le plus vaste vers 1900 ? **Vrai**.", "La conférence de Berlin règle le sort des Balkans ? **Faux** : elle partage l'Afrique."] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          "Confondre impérialisme (volonté de domination) et colonialisme (occupation d'un territoire).",
          "Placer l'Italie dans l'Entente : en 1914 elle fait partie de la Triple Alliance (elle change de camp en 1915).",
          "Donner une seule cause à la guerre.",
        ] } ],
      [ { t: 'retenir', items: [
          'Vers 1900 : l\'Europe domine le monde.',
          'Alliance (All., A-H, It.) vs Entente (Fr., R-U, Rus.).',
          'Causes profondes : MAIN.',
        ] } ],
    ] },
  ],
},

'premiere-guerre': {
  bulle: 'la Première Guerre mondiale',
  sous: '1914-1918 : la première guerre totale',
  recto: [
    { t: 'tab', h: 'du déclencheur à la guerre générale (été 1914)', full: true, lcol: true,
      head: ['Date', 'Événement'],
      rows: [
        ['28 juin', "À **Sarajevo**, un nationaliste serbe de Bosnie assassine l'archiduc **François-Ferdinand**, héritier de l'Autriche-Hongrie."],
        ['28 juillet', "L'Autriche-Hongrie déclare la guerre à la Serbie."],
        ['1er au 4 août', "**Jeu des alliances** : l'Allemagne déclare la guerre à la Russie puis à la France et envahit la Belgique ; le Royaume-Uni entre en guerre (et avec lui le Canada)."],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'les phases', items: [
          "**1914** : guerre de mouvement ; l'offensive allemande est arrêtée sur la Marne.",
          "**1915-1917** : guerre de **tranchées** sur le front ouest ; batailles meurtrières (**Verdun**, la **Somme**, 1916).",
          "**1917** : les **États-Unis** entrent en guerre ; la **Russie** en sort après sa révolution.",
          "**11 novembre 1918** : **armistice**.",
        ] } ],
      [ { t: 'list', h: 'une guerre totale', items: [
          "Toute la société est mobilisée : soldats, usines, femmes au travail, rationnement.",
          "**Propagande** et censure pour garder le moral.",
          "Nouvelles armes : mitrailleuses, gaz de combat, chars, avions, sous-marins.",
          "Environ **10 millions** de soldats morts.",
        ] } ],
    ] },
    { t: 'tab', h: 'les camps', full: true, lcol: true,
      head: ['Alliés (Entente)', 'Puissances centrales'],
      rows: [ ['France, Royaume-Uni et son empire (dont le Canada), Russie (jusqu\'en 1917), Italie (dès 1915), États-Unis (dès 1917)…', 'Allemagne, Autriche-Hongrie, Empire ottoman, Bulgarie'] ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 — ', q: "Pourquoi un assassinat à Sarajevo devient-il une guerre mondiale ?",
      p: [ "Parce que les **alliances** entraînent les pays les uns après les autres : l'Autriche-Hongrie attaque la Serbie, la Russie protège la Serbie, l'Allemagne soutient l'Autriche-Hongrie, la France est alliée de la Russie, et le Royaume-Uni intervient quand la Belgique neutre est envahie. Les **empires coloniaux** étendent ensuite le conflit au monde entier." ] },
    { t: 'ex', h: 'Exemple 2 — ', q: 'Le Canada dans la guerre',
      s: [ 'avril 1917 → victoire de la crête de **Vimy**', '1917 → loi sur la **conscription** : forte opposition au Québec', 'conséquence → le Canada signe lui-même le traité de Versailles : plus d\'autonomie' ] },
    { t: 'ex', h: 'Exemple 3 — ', q: 'Pourquoi 1917 est-elle une année charnière ?',
      p: [ "Deux changements majeurs : l'entrée des **États-Unis** donne un avantage décisif aux Alliés, et la **révolution russe** retire la Russie du conflit (traité de Brest-Litovsk, 1918)." ] },
    { t: 'ex', h: 'Question type examen — ', q: "Montre que la Première Guerre mondiale est une guerre totale.",
      s: ["militaire → des millions de soldats mobilisés", "économique → usines converties à la production d'armes", "social → les femmes remplacent les hommes au travail", "psychologique → propagande et censure"] },
    { t: 'list', h: 'vrai ou faux ?', items: ["L'armistice est signé le 11 novembre 1918 ? **Vrai**.", "Les États-Unis entrent en guerre dès 1914 ? **Faux** : en 1917.", "Vimy est une victoire canadienne de 1917 ? **Vrai**."] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          "Dire que l'assassinat est la seule cause : c'est le **déclencheur**, pas la cause profonde.",
          "Confondre armistice (arrêt des combats, 1918) et traité de paix (Versailles, 1919).",
        ] } ],
      [ { t: 'retenir', items: [
          '1914-1918 · Sarajevo · alliances.',
          'Tranchées, guerre totale.',
          'Armistice : 11 novembre 1918.',
        ] } ],
    ] },
  ],
},

'traites-paix': {
  bulle: 'les traités de paix et la SDN',
  sous: "1919-1920 : redessiner l'Europe et tenter d'empêcher une autre guerre",
  recto: [
    { t: 'txt', p: [ "En 1919, les vainqueurs se réunissent à la **conférence de Paris**. Chaque vaincu signe un traité séparé ; le plus important est le **traité de Versailles** avec l'Allemagne (28 juin 1919)." ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'traité de Versailles : l\'Allemagne…', items: [
          "est déclarée **responsable** de la guerre ;",
          "doit payer des **réparations** énormes ;",
          "perd l'**Alsace-Lorraine** (rendue à la France), d'autres territoires et toutes ses **colonies** ;",
          "voit son armée limitée à **100 000 hommes** et la Rhénanie démilitarisée.",
          "Les Allemands le vivent comme un **diktat** (paix imposée) et une humiliation.",
        ] } ],
      [ { t: 'list', h: 'la fin de quatre empires', items: [
          "**allemand**, **austro-hongrois**, **ottoman**, **russe**.",
          "Nouveaux États : Pologne, Tchécoslovaquie, Yougoslavie, Autriche, Hongrie, Finlande, pays baltes.",
          "Principe du **droit des peuples à disposer d'eux-mêmes** (un des 14 points du président américain **Wilson**) : appliqué surtout en Europe.",
          "Au Moyen-Orient, les territoires ottomans deviennent des **mandats** français et britanniques.",
        ] } ],
    ] },
    { t: 'tab', h: 'la Société des Nations (SDN)', full: true, lcol: true,
      rows: [
        ['**But**', "maintenir la paix par la **sécurité collective** et l'arbitrage des conflits (siège à Genève, créée en 1919-1920)"],
        ['**Forces**', "première organisation internationale de ce type ; aide aux réfugiés, santé, travail"],
        ['**Faiblesses**', "pas d'armée ; décisions à l'unanimité ; les **États-Unis n'y adhèrent jamais** ; le Japon et l'Allemagne la quittent en 1933, l'Italie en 1937"],
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 — ', q: 'Pourquoi dit-on que Versailles prépare la guerre suivante ?',
      p: [ "Le traité humilie l'Allemagne sans l'affaiblir pour de bon. Le ressentiment et les difficultés économiques nourrissent l'idée de le **réviser par la force**, une promesse centrale de Hitler dans les années 1930." ] },
    { t: 'ex', h: 'Exemple 2 — ', q: 'Pourquoi la SDN échoue-t-elle ?',
      s: [ 'invasion de la Mandchourie par le Japon (1931) → simple condamnation', 'invasion de l\'Éthiopie par l\'Italie (1935) → sanctions faibles', 'conclusion → sans armée ni grandes puissances unies, elle ne peut rien imposer' ] },
    { t: 'ex', h: 'Question type examen — ', q: "Nomme deux décisions du traité de Versailles et une conséquence pour l'Allemagne.",
      s: ["décision → l'Allemagne est déclarée responsable de la guerre", "décision → elle perd l'Alsace-Lorraine et ses colonies", "conséquence → ressentiment exploité plus tard par les nazis"] },
    { t: 'list', h: 'vrai ou faux ?', items: ["La SDN a sa propre armée ? **Faux**.", "L'Empire ottoman disparaît après la guerre ? **Vrai**.", "Le traité de Versailles est signé en 1918 ? **Faux** : le 28 juin 1919."] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          "Croire que les États-Unis faisaient partie de la SDN : le Sénat américain a refusé.",
          "Confondre la SDN (1919) et l'ONU (1945), qui la remplace.",
          "Oublier que le droit des peuples n'est pas appliqué aux colonies.",
        ] } ],
      [ { t: 'retenir', items: [
          'Versailles, 28 juin 1919 : Allemagne responsable.',
          '4 empires disparaissent.',
          'SDN : idée neuve, mais sans moyens.',
        ] } ],
    ] },
  ],
},

'revolution-russe': {
  bulle: 'la révolution russe',
  sous: "1917 : de l'empire des tsars au premier État communiste",
  recto: [
    { t: 'cols', c: [
      [ { t: 'list', h: 'les causes', items: [
          "Pouvoir absolu du **tsar Nicolas II**.",
          "Paysans pauvres, ouvriers mal payés.",
          "Défaites et pénuries causées par la guerre.",
        ] } ],
      [ { t: 'list', h: 'les idées de Marx', items: [
          "Histoire = **lutte des classes** (bourgeoisie contre prolétariat).",
          "Révolution → **dictature du prolétariat** → société **sans classes**.",
          "Abolition de la **propriété privée** des moyens de production.",
        ] } ],
    ] },
    { t: 'tab', h: 'les étapes', full: true, lcol: true,
      head: ['Date', 'Événement'],
      rows: [
        ['février 1917', "Émeutes à Petrograd ; le tsar **abdique** ; un **gouvernement provisoire** prend le pouvoir mais poursuit la guerre."],
        ['octobre 1917', "Les **bolcheviks** de **Lénine** prennent le pouvoir par la force."],
        ['1918', "Traité de **Brest-Litovsk** : la Russie sort de la guerre et cède de vastes territoires."],
        ['1918-1921', "**Guerre civile** : Rouges (bolcheviks) contre Blancs (opposants aidés par l'étranger) ; victoire des Rouges."],
        ['1922', "Création de l'**URSS** (Union des républiques socialistes soviétiques)."],
        ['1924', "Mort de Lénine ; **Staline** élimine ses rivaux et s'impose."],
      ] },
    { t: 'list', h: 'l\'URSS de Staline', items: [
        "**Plans quinquennaux** (dès 1928) : industrialisation rapide planifiée par l'État.",
        "**Collectivisation** forcée des terres ; famine meurtrière, dont celle de l'Ukraine (1932-1933).",
        "**Terreur** : grandes purges (1936-1938), camps de travail forcé (**goulag**).",
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 — ', q: 'Pourquoi deux dates « février » et « octobre » pour des événements de mars et de novembre ?',
      p: [ "La Russie utilisait encore le **calendrier julien**, en retard de 13 jours sur le nôtre. La révolution d'Octobre a donc eu lieu en novembre 1917 selon notre calendrier." ] },
    { t: 'ex', h: 'Exemple 2 — ', q: 'Idéal communiste et réalité soviétique',
      s: [ 'idéal → égalité et pouvoir aux travailleurs', 'réalité → parti unique et chef tout-puissant', 'idéal → fin de l\'exploitation', 'réalité → travail forcé, famines, répression' ] },
    { t: 'ex', h: 'Question type examen — ', q: "Pourquoi les bolcheviks réussissent-ils à prendre le pouvoir en 1917 ?",
      s: ["le gouvernement provisoire continue une guerre impopulaire", "Lénine promet « la paix, la terre et le pain »", "les bolcheviks sont organisés et contrôlent des soldats et des ouvriers de Petrograd"] },
    { t: 'list', h: 'vrai ou faux ?', items: ["Le tsar Nicolas II abdique en février 1917 ? **Vrai**.", "Staline dirige la révolution d'Octobre ? **Faux** : c'est Lénine.", "Le goulag est un réseau de camps de travail forcé ? **Vrai**."] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          "Confondre les deux révolutions de 1917 : février renverse le tsar, octobre amène les bolcheviks.",
          "Écrire que l'URSS naît en 1917 : c'est en 1922.",
        ] } ],
      [ { t: 'retenir', items: [
          'Lénine, bolcheviks, 1917.',
          'URSS : 1922.',
          'Staline : plans, collectivisation, goulag.',
        ] } ],
    ] },
  ],
},

'crise-1929': {
  bulle: 'la crise de 1929',
  sous: 'Du krach de Wall Street à la Grande Dépression des années 1930',
  recto: [
    { t: 'txt', p: [ "Dans les années 1920, l'économie américaine est prospère. En **octobre 1929**, la Bourse de New York (**Wall Street**) s'effondre : c'est le **krach**. Il déclenche une crise économique mondiale, la **Grande Dépression**." ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'les causes', items: [
          "**Spéculation** : on achète des actions à crédit en espérant les revendre plus cher.",
          "**Surproduction** : on produit plus que ce que les gens peuvent acheter.",
          "Crédit facile et banques fragiles.",
        ] } ],
      [ { t: 'list', h: 'l\'effet domino', items: [
          "Les actions s'effondrent → les banques font faillite.",
          "Les entreprises ferment → **chômage** massif (environ le quart des travailleurs aux États-Unis et au Canada vers 1933).",
          "Les pays se ferment au commerce (**protectionnisme**) : la crise devient mondiale.",
        ] } ],
    ] },
    { t: 'tab', h: 'deux réponses opposées', full: true, lcol: true,
      head: ['Idée', 'En résumé'],
      rows: [
        ['**Libéralisme économique**', "l'État intervient peu : le marché finira par se rétablir"],
        ['**Interventionnisme** (Keynes)', "l'État dépense pour relancer l'économie : grands travaux, aide aux chômeurs"],
        ['**New Deal** (Roosevelt, dès 1933)', "programme américain de grands travaux, de réglementation des banques et de sécurité sociale"],
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 — ', q: 'Des conséquences politiques',
      p: [ "Le chômage et la misère rendent les gens méfiants envers les démocraties. En Allemagne, le parti nazi devient le premier parti au Parlement en 1932 ; Hitler devient chancelier en 1933." ] },
    { t: 'ex', h: 'Exemple 2 — ', q: 'Au Canada et au Québec',
      s: [ 'chômage massif → soupes populaires, secours direct', 'agriculture des Prairies → sécheresse et chute du prix du blé', 'Québec → retour à la terre et colonisation de l\'Abitibi', 'conséquence → l\'État prend plus de place (programmes sociaux après 1940)' ] },
    { t: 'ex', h: 'Question type examen — ', q: "Explique comment une crise boursière américaine devient mondiale.",
      s: ["les banques américaines rappellent leurs prêts à l'Europe", "les États-Unis achètent moins à l'étranger", "chaque pays protège son marché (protectionnisme) → le commerce mondial s'effondre"] },
    { t: 'list', h: 'vrai ou faux ?', items: ["Le New Deal est un programme de Roosevelt ? **Vrai**.", "Le libéralisme économique prône une forte intervention de l'État ? **Faux**.", "La crise favorise la montée du nazisme ? **Vrai**."] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          "Confondre le krach (un événement boursier, octobre 1929) et la dépression (une crise qui dure des années).",
          "Oublier le lien entre la crise et la montée des régimes totalitaires.",
        ] } ],
      [ { t: 'retenir', items: [
          'Octobre 1929 : krach de Wall Street.',
          'Spéculation + surproduction.',
          'Réponse : New Deal, État interventionniste.',
        ] } ],
    ] },
  ],
},

'totalitarismes': {
  bulle: 'les régimes totalitaires',
  sous: "Fascisme, nazisme, stalinisme : l'État contrôle tout",
  recto: [
    { t: 'txt', p: [ "Un régime **totalitaire** veut contrôler **tous** les aspects de la vie : politique, économie, culture, éducation et même la pensée. Il va plus loin qu'une simple dictature (régime **autoritaire**), qui cherche surtout à garder le pouvoir." ] },
    { t: 'list', h: 'les caractéristiques communes', items: [
        "Un **parti unique** et un **chef** qui fait l'objet d'un culte.",
        "Une **idéologie officielle** imposée à tous.",
        "La **propagande** (affiches, radio, cinéma) et la **censure**.",
        "La **terreur** : police politique, camps, élimination des opposants.",
        "L'**embrigadement** de la jeunesse et le contrôle de l'économie.",
      ] },
    { t: 'tab', h: 'trois régimes', full: true, lcol: true,
      head: ['', 'Italie fasciste', 'Allemagne nazie', 'URSS stalinienne'],
      rows: [
        ['**Chef**', 'Mussolini (au pouvoir en 1922)', 'Hitler (chancelier en 1933)', 'Staline (maître du pays vers 1928)'],
        ['**Idéologie**', 'nationalisme, culte de l\'État', 'nationalisme, **racisme**, **antisémitisme**, « espace vital »', 'communisme : société sans classes'],
        ['**Police**', 'OVRA', 'Gestapo, SS', 'NKVD'],
        ['**Cibles**', 'opposants, socialistes', 'Juifs, opposants, Roms, personnes handicapées', '« ennemis du peuple », paysans, opposants'],
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 — ', q: 'Comment Hitler arrive-t-il au pouvoir ?',
      s: [ '1932 → le parti nazi arrive en tête aux élections', 'janvier 1933 → Hitler est nommé chancelier (de façon légale)', '1933 → pleins pouvoirs, partis interdits : la démocratie disparaît', '1935 → lois de Nuremberg contre les Juifs' ] },
    { t: 'ex', h: 'Exemple 2 — ', q: 'Analyser une affiche de propagande',
      p: [ "Repère le **message** (ce qu'on veut faire croire), le **public visé**, les **symboles** (chef, drapeau, ennemi caricaturé) et le **contexte** (date, pays). Une affiche est une source utile pour connaître les **intentions** du régime, pas la réalité." ] },
    { t: 'ex', h: 'Question type examen — ', q: "Compare le nazisme et le stalinisme.",
      s: ["similitude → parti unique, chef tout-puissant", "similitude → propagande, terreur, camps", "différence → nazisme : racisme au cœur de l'idéologie", "différence → stalinisme : idéal d'une société sans classes"] },
    { t: 'list', h: 'vrai ou faux ?', items: ["Mussolini arrive au pouvoir en 1922 ? **Vrai**.", "La Gestapo est la police politique soviétique ? **Faux** : allemande.", "Un régime autoritaire contrôle tout, même la pensée ? **Faux** : c'est le totalitarisme."] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          "Dire que Hitler a fait un coup d'État en 1933 : il est nommé légalement, puis détruit la démocratie.",
          "Classer tous les régimes à droite : le stalinisme est communiste (gauche).",
        ] } ],
      [ { t: 'retenir', items: [
          'Totalitaire = contrôle total.',
          'Parti unique, chef, propagande, terreur.',
          'Mussolini, Hitler, Staline.',
        ] } ],
    ] },
  ],
},

'seconde-guerre': {
  bulle: 'la Seconde Guerre mondiale',
  sous: '1939-1945 : la guerre la plus meurtrière de l\'histoire',
  recto: [
    { t: 'tab', h: 'vers la guerre', full: true, lcol: true,
      head: ['Date', 'Événement'],
      rows: [
        ['1936', "L'Allemagne remilitarise la Rhénanie."],
        ['mars 1938', "**Anschluss** : l'Allemagne annexe l'Autriche."],
        ['sept. 1938', "Accords de **Munich** : la France et le Royaume-Uni laissent Hitler prendre les Sudètes (politique d'**apaisement**)."],
        ['août 1939', "**Pacte germano-soviétique** : Hitler et Staline s'entendent pour ne pas s'attaquer."],
        ['1er sept. 1939', "L'Allemagne envahit la **Pologne** ; la France et le Royaume-Uni déclarent la guerre, le Canada le 10 septembre."],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'les grandes étapes', items: [
          "**1939-1941** : victoires de l'Axe (**guerre éclair**) ; la France capitule en 1940.",
          "**1941** : l'Allemagne attaque l'**URSS** ; le Japon attaque **Pearl Harbor** et les États-Unis entrent en guerre.",
          "**1942-1943** : tournants (**Stalingrad**, Midway, Afrique du Nord).",
          "**6 juin 1944** : débarquement en **Normandie** (le Canada à Juno Beach).",
          "**8 mai 1945** : capitulation de l'Allemagne.",
          "**Août 1945** : bombes atomiques sur **Hiroshima** et **Nagasaki** ; le Japon capitule (2 septembre).",
        ] } ],
      [ { t: 'list', h: 'les camps', items: [
          "**Axe** : Allemagne, Italie, Japon.",
          "**Alliés** : Royaume-Uni, France, Canada, URSS (dès 1941), États-Unis (dès 1941), Chine…",
        ] },
        { t: 'list', h: 'le bilan', items: [
          "Plus de **60 millions** de morts, en majorité des **civils**.",
          "Génocide des Juifs (**Shoah**).",
          "Europe détruite ; deux superpuissances : **États-Unis** et **URSS**.",
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 — ', q: 'Pourquoi Stalingrad est-elle un tournant ?',
      p: [ "Pendant l'hiver 1942-1943, l'armée allemande est encerclée et capitule (février 1943). C'est sa première grande défaite : dès lors, l'Armée rouge avance vers l'ouest jusqu'à Berlin." ] },
    { t: 'ex', h: 'Exemple 2 — ', q: 'Causes de la guerre : lesquelles sont profondes, laquelle est le déclencheur ?',
      s: [ 'profonde → rancune contre le traité de Versailles', 'profonde → crise économique et régimes totalitaires', 'profonde → expansionnisme et faiblesse de la SDN, apaisement', 'déclencheur → invasion de la Pologne (1er septembre 1939)' ] },
    { t: 'ex', h: 'Question type examen — ', q: "Pourquoi l'entrée en guerre des États-Unis change-t-elle le cours de la guerre ?",
      s: ["production industrielle énorme (armes, navires, avions)", "des millions de soldats supplémentaires", "possibilité d'ouvrir un second front en Europe (1944)"] },
    { t: 'list', h: 'vrai ou faux ?', items: ["Dieppe (1942) est une victoire canadienne ? **Faux** : un échec coûteux.", "Le pacte germano-soviétique est signé en août 1939 ? **Vrai**.", "Le Japon capitule avant l'Allemagne ? **Faux**."] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          "Placer l'URSS avec les Alliés dès 1939 : elle s'est d'abord entendue avec Hitler.",
          "Confondre la fin de la guerre en Europe (mai 1945) et dans le Pacifique (septembre 1945).",
        ] } ],
      [ { t: 'retenir', items: [
          '1939 : Pologne · 1941 : URSS et Pearl Harbor.',
          'Stalingrad, 6 juin 1944.',
          'Mai et août-sept. 1945.',
        ] } ],
    ] },
  ],
},

'shoah': {
  bulle: 'la Shoah',
  sous: 'Le génocide des Juifs d\'Europe et la naissance de la justice internationale',
  recto: [
    { t: 'txt', p: [ "La **Shoah** (mot hébreu qui veut dire « catastrophe ») est l'extermination systématique d'environ **6 millions de Juifs** par l'Allemagne nazie et ses complices. Les nazis ont aussi tué des **Roms**, des personnes **handicapées**, des **homosexuels** et des opposants politiques." ] },
    { t: 'tab', h: "les étapes de la persécution à l'extermination", full: true, lcol: true,
      head: ['Période', 'Étape'],
      rows: [
        ['1933-1935', "**Exclusion** : boycott, renvoi des fonctionnaires juifs ; **lois de Nuremberg** (1935) qui retirent la citoyenneté."],
        ['nov. 1938', "**Nuit de cristal** : synagogues et commerces détruits, milliers d'arrestations."],
        ['1939-1941', "**Ghettos** en Pologne occupée (Varsovie, Lodz) : faim, maladies."],
        ['1941', "Fusillades de masse par des unités mobiles derrière le front de l'Est."],
        ['1942', "Conférence de **Wannsee** : organisation de la « solution finale »."],
        ['1942-1945', "**Camps d'extermination** : Auschwitz-Birkenau, Treblinka, Sobibor…"],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'les mots justes', items: [
          "**Génocide** : destruction volontaire de tout ou d'une partie d'un groupe national, ethnique, racial ou religieux (Convention de l'ONU, 1948).",
          "**Crime contre l'humanité** : crime grave et massif contre des civils.",
          "**Camp de concentration** ≠ **camp d'extermination** (conçu pour tuer).",
        ] } ],
      [ { t: 'list', h: 'juger les crimes', items: [
          "**Procès de Nuremberg** (1945-1946) : des dirigeants nazis jugés par les Alliés.",
          "Chefs d'accusation : crimes contre la paix, crimes de guerre, **crimes contre l'humanité**.",
          "Point de départ de la **justice pénale internationale**.",
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 — ', q: 'Le Canada face aux réfugiés juifs',
      p: [ "En 1939, le paquebot **Saint-Louis**, chargé de plus de 900 réfugiés juifs, se voit refuser l'entrée à Cuba, aux États-Unis puis au Canada. Il retourne en Europe, où plusieurs passagers seront tués. Cet épisode montre la **fermeture** de nombreux pays à l'époque." ] },
    { t: 'ex', h: 'Exemple 2 — ', q: 'Pourquoi étudier la Shoah ?',
      s: [ 'devoir de mémoire → se souvenir des victimes', 'comprendre le processus → la discrimination peut mener au meurtre de masse', 'citoyenneté → reconnaître les discours de haine aujourd\'hui' ] },
    { t: 'ex', h: 'Question type examen — ', q: "Décris le passage de la persécution à l'extermination.",
      s: ["exclusion légale → lois de Nuremberg (1935)", "violence → Nuit de cristal (1938)", "enfermement → ghettos (1939-1941)", "meurtre de masse → fusillades, puis camps d'extermination (1942-1945)"] },
    { t: 'list', h: 'vrai ou faux ?', items: ["Le mot « génocide » est défini par une convention de l'ONU en 1948 ? **Vrai**.", "Le procès de Nuremberg a lieu en 1935 ? **Faux** : 1945-1946.", "Seuls les Juifs ont été victimes des nazis ? **Faux**."] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          "Dire que tous les camps étaient des camps d'extermination.",
          "Présenter la Shoah comme soudaine : elle s'est faite par **étapes**.",
          "Utiliser « génocide » pour n'importe quel massacre : le mot a une définition précise.",
        ] } ],
      [ { t: 'retenir', items: [
          'Environ 6 millions de Juifs tués.',
          'Nuremberg : lois (1935) ≠ procès (1945-1946).',
          'Génocide : Convention de 1948.',
        ] } ],
    ] },
  ],
},

/* ============ DE 1945 À 2000 ============ */
'onu-droits': {
  bulle: "l'ONU et les droits de l'homme",
  sous: "1945-1948 : bâtir la paix et protéger les droits",
  recto: [
    { t: 'txt', p: [ "Après la guerre, les vainqueurs créent une organisation plus forte que la SDN. La **Charte des Nations unies** est signée à **San Francisco** le 26 juin 1945 ; l'**ONU** existe officiellement le 24 octobre 1945, avec 51 pays membres." ] },
    { t: 'tab', h: "les principaux organes de l'ONU", full: true, lcol: true,
      head: ['Organe', 'Rôle'],
      rows: [
        ['**Assemblée générale**', 'tous les États membres, un vote chacun ; recommandations'],
        ['**Conseil de sécurité**', "maintien de la paix ; 5 membres **permanents** avec droit de **veto** (États-Unis, URSS/Russie, Royaume-Uni, France, Chine) et des membres élus"],
        ['**Secrétariat**', 'administration, dirigée par le secrétaire général'],
        ['**Cour internationale de justice**', 'règle les différends entre États (La Haye)'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'la Déclaration universelle (DUDH)', items: [
          "Adoptée le **10 décembre 1948** à Paris.",
          "Droits **civils et politiques** (vie, liberté, vote) et droits **économiques et sociaux** (travail, éducation).",
          "Première ébauche rédigée par le Canadien **John Humphrey**.",
          "Ce n'est pas un traité obligatoire, mais une référence mondiale.",
        ] } ],
      [ { t: 'list', h: 'autres institutions de 1944-1945', items: [
          "**FMI** et **Banque mondiale** (accords de Bretton Woods, 1944).",
          "Agences : UNESCO, OMS, HCR (réfugiés, 1950)…",
          "**Casques bleus** : idée du Canadien **Lester B. Pearson** pendant la crise de Suez (1956), prix Nobel de la paix 1957.",
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 — ', q: 'Pourquoi le Conseil de sécurité est-il souvent bloqué pendant la guerre froide ?',
      p: [ "Parce que les États-Unis et l'URSS ont tous deux un **veto** : chacun bloque les résolutions qui nuisent à son camp." ] },
    { t: 'ex', h: 'Exemple 2 — ', q: 'SDN ou ONU : ce qui change',
      s: [ 'membres → les États-Unis et l\'URSS sont dans l\'ONU dès le départ', 'moyens → l\'ONU peut autoriser l\'usage de la force', 'droits → la DUDH donne une référence commune' ] },
    { t: 'ex', h: 'Question type examen — ', q: "Nomme deux buts de l'ONU et un moyen pour les atteindre.",
      s: ["but → maintenir la paix et la sécurité internationales", "but → faire respecter les droits de la personne", "moyen → le Conseil de sécurité peut imposer des sanctions ou autoriser une intervention"] },
    { t: 'list', h: 'vrai ou faux ?', items: ["La Charte de l'ONU est signée à San Francisco ? **Vrai**.", "Le Canada est membre permanent du Conseil de sécurité ? **Faux**.", "La DUDH est adoptée le 10 décembre 1948 ? **Vrai**."] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          "Croire que la DUDH oblige légalement les États à la respecter.",
          "Oublier que les membres permanents sont les grands vainqueurs de 1945.",
        ] } ],
      [ { t: 'retenir', items: [
          'ONU : 1945 · DUDH : 10 déc. 1948.',
          '5 membres permanents, veto.',
          'Canadiens : Humphrey, Pearson.',
        ] } ],
    ] },
  ],
},

'guerre-froide': {
  bulle: 'la guerre froide',
  sous: '1947-1991 : deux blocs qui s\'affrontent sans guerre directe',
  recto: [
    { t: 'txt', p: [ "La **guerre froide** oppose les **États-Unis** (capitalisme, démocratie libérale) et l'**URSS** (communisme, parti unique). Les deux superpuissances ne se battent jamais directement, à cause du risque **nucléaire**, mais s'affrontent partout ailleurs : alliances, conflits indirects, propagande, course aux armements et à l'espace." ] },
    { t: 'tab', h: 'la formation des blocs', full: true, lcol: true,
      head: ['Date', 'Événement'],
      rows: [
        ['1946', "Churchill parle d'un « **rideau de fer** » qui coupe l'Europe en deux."],
        ['1947', "**Doctrine Truman** (**endiguement** : bloquer l'expansion du communisme) et **plan Marshall** (aide économique à l'Europe)."],
        ['1948-1949', "**Blocus de Berlin** par l'URSS ; pont aérien des Occidentaux."],
        ['1949', "Création de l'**OTAN** (dont le Canada) ; deux Allemagnes (RFA et RDA) ; première bombe atomique soviétique."],
        ['1955', "Création du **pacte de Varsovie** autour de l'URSS."],
        ['1961', "Construction du **mur de Berlin**."],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'bloc de l\'Ouest', items: [ 'États-Unis, Europe de l\'Ouest, Canada, Japon…', 'économie de marché, élections libres', 'alliance : OTAN' ] } ],
      [ { t: 'list', h: 'bloc de l\'Est', items: [ 'URSS, Europe de l\'Est (pays « satellites »)…', 'économie planifiée, parti communiste unique', 'alliance : pacte de Varsovie' ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 — ', q: 'Pourquoi « froide » ?',
      p: [ "Parce que les deux Grands ne se déclarent jamais la guerre. La **dissuasion nucléaire** (chacun peut détruire l'autre) les en empêche. Il y a toutefois des guerres « chaudes » par pays interposés : Corée, Vietnam, Afghanistan." ] },
    { t: 'ex', h: 'Exemple 2 — ', q: 'Les terrains d\'affrontement',
      s: [ 'militaire → course aux armements nucléaires', 'spatial → Spoutnik (URSS, 1957), premier homme sur la Lune (États-Unis, 1969)', 'idéologique → propagande, films, sport (Jeux olympiques)', 'économique → plan Marshall contre aide soviétique' ] },
    { t: 'ex', h: 'Question type examen — ', q: "Pourquoi l'Allemagne est-elle au cœur de la guerre froide ?",
      s: ["divisée en zones d'occupation en 1945", "blocus de Berlin (1948-1949)", "deux États en 1949 : RFA à l'Ouest, RDA à l'Est", "mur de Berlin (1961) : symbole de la division"] },
    { t: 'list', h: 'vrai ou faux ?', items: ["Le plan Marshall aide l'Europe de l'Est ? **Faux** : l'URSS l'a refusé pour son bloc.", "L'OTAN est créée en 1949 ? **Vrai**.", "Le Canada fait partie du pacte de Varsovie ? **Faux**."] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          "Dire que la guerre froide n'a fait aucune victime : les conflits indirects ont été très meurtriers.",
          "Confondre OTAN (Ouest) et pacte de Varsovie (Est).",
        ] } ],
      [ { t: 'retenir', items: [
          'États-Unis vs URSS, 1947-1991.',
          'Endiguement, plan Marshall.',
          'OTAN (1949) · Varsovie (1955).',
        ] } ],
    ] },
  ],
},

'crises-guerre-froide': {
  bulle: 'les crises de la guerre froide',
  sous: 'Quand la guerre froide devient chaude : Corée, Cuba, Vietnam',
  recto: [
    { t: 'tab', h: 'les grandes crises', full: true, lcol: true,
      head: ['Crise', 'Ce qui se passe', 'Issue'],
      rows: [
        ['**Corée** (1950-1953)', "La Corée du Nord communiste envahit le Sud ; l'ONU (surtout les États-Unis, avec le Canada) défend le Sud, la Chine aide le Nord.", "armistice en 1953 ; frontière au **38e parallèle**, toujours divisée"],
        ['**Hongrie** (1956)', "Les Hongrois se soulèvent contre la domination soviétique.", "écrasés par les chars soviétiques"],
        ['**Cuba** (1962)', "L'URSS installe des **missiles nucléaires** à Cuba, près des États-Unis ; blocus naval américain.", "retrait des missiles ; « téléphone rouge » entre Washington et Moscou"],
        ['**Vietnam** (1955-1975)', "Les États-Unis soutiennent le Sud contre le Nord communiste ; engagement massif à partir de 1965.", "retrait américain (1973) ; victoire du Nord et réunification (1975)"],
        ['**Afghanistan** (1979-1989)', "L'URSS envahit le pays ; les résistants sont aidés par les États-Unis.", "retrait soviétique en 1989"],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'des phases', items: [
          "**1947-1962** : fortes tensions.",
          "**1962-1975** : **détente** (accords sur les armes, SALT I en 1972).",
          "**1979-1985** : nouvelles tensions.",
        ] } ],
      [ { t: 'list', h: 'la théorie des dominos', items: [
          "Pour les Américains, si un pays devient communiste, ses voisins suivront.",
          "Elle justifie les interventions en Asie, dont le Vietnam.",
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 — ', q: 'Pourquoi la crise de Cuba est-elle la plus dangereuse ?',
      p: [ "Pendant **13 jours** en octobre 1962, le monde est au bord d'une guerre nucléaire. Kennedy et Khrouchtchev négocient : l'URSS retire ses missiles, les États-Unis promettent de ne pas envahir Cuba (et retirent discrètement des missiles de Turquie). La crise mène à la **détente**." ] },
    { t: 'ex', h: 'Exemple 2 — ', q: 'Pourquoi les États-Unis perdent-ils au Vietnam ?',
      s: [ 'guérilla → ennemi difficile à repérer, soutenu par une partie de la population', 'opinion publique → images télévisées, manifestations contre la guerre', 'coût → pertes humaines et financières énormes' ] },
    { t: 'ex', h: 'Question type examen — ', q: "Montre que la guerre froide alterne tensions et détente.",
      s: ["tension → Corée (1950-1953)", "sommet de tension → Cuba (1962)", "détente → téléphone rouge, accords sur les armes (1972)", "nouvelle tension → Afghanistan (1979)"] },
    { t: 'list', h: 'vrai ou faux ?', items: ["La Corée est toujours divisée aujourd'hui ? **Vrai**.", "Les États-Unis gagnent la guerre du Vietnam ? **Faux**.", "La crise de Cuba dure environ deux semaines ? **Vrai**."] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          "Dire que les États-Unis et l'URSS se sont battus directement en Corée ou au Vietnam.",
          "Oublier que la crise de Cuba se règle par la négociation.",
        ] } ],
      [ { t: 'retenir', items: [
          'Corée 1950-1953 · Cuba 1962.',
          'Vietnam 1955-1975.',
          'Tensions ↔ détente.',
        ] } ],
    ] },
  ],
},

'decolonisation': {
  bulle: 'la décolonisation',
  sous: "1945-1975 : les colonies deviennent des États indépendants",
  recto: [
    { t: 'txt', p: [ "La **décolonisation** est le processus par lequel les colonies obtiennent leur **indépendance**. Elle se fait parfois par la **négociation**, parfois par la **guerre**." ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'les causes', items: [
          "Les métropoles européennes sont **affaiblies** par la guerre.",
          "Montée des **mouvements nationalistes** dans les colonies.",
          "L'ONU défend le **droit des peuples** à disposer d'eux-mêmes.",
          "Les États-Unis et l'URSS sont **hostiles** aux empires coloniaux.",
        ] } ],
      [ { t: 'list', h: 'les conséquences', items: [
          "Des dizaines de nouveaux États à l'ONU.",
          "Naissance du **tiers-monde** et du **non-alignement** (conférence de **Bandung**, 1955).",
          "Frontières souvent tracées par les colonisateurs → conflits.",
          "**Néocolonialisme** : dépendance économique qui continue.",
        ] } ],
    ] },
    { t: 'tab', h: 'des exemples', full: true, lcol: true,
      head: ['Pays', 'Date', 'Comment'],
      rows: [
        ['**Inde** (britannique)', '1947', "résistance **non violente** menée par **Gandhi** ; partition sanglante entre l'Inde et le Pakistan"],
        ['**Indochine** (française)', '1954', "guerre ; défaite française à Diên Biên Phu ; Vietnam coupé en deux"],
        ['**Ghana** (britannique)', '1957', "négociation ; premier pays d'Afrique subsaharienne indépendant"],
        ['**Afrique**', '1960', "« année de l'Afrique » : 17 pays deviennent indépendants"],
        ['**Algérie** (française)', '1962', "guerre de 1954 à 1962 ; accords d'Évian"],
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 — ', q: 'Comparer l\'Inde et l\'Algérie',
      s: [ 'similitude → volonté d\'indépendance face à une puissance européenne', 'différence → Inde : surtout non violente ; Algérie : guerre longue', 'différence → l\'Algérie compte un million de colons européens, ce qui complique la sortie' ] },
    { t: 'ex', h: 'Exemple 2 — ', q: 'Pourquoi parle-t-on de « non-alignement » ?',
      p: [ "Plusieurs nouveaux États refusent de choisir entre les États-Unis et l'URSS. À Bandung (1955), ils affirment leur volonté d'indépendance et de coopération entre pays d'Asie et d'Afrique." ] },
    { t: 'ex', h: 'Question type examen — ', q: "Pourquoi la Seconde Guerre mondiale accélère-t-elle la décolonisation ?",
      s: ["les métropoles sont ruinées et affaiblies", "des colonisés ont combattu pour la liberté des Européens", "l'ONU et les deux Grands appuient le droit des peuples"] },
    { t: 'list', h: 'vrai ou faux ?', items: ["L'Inde devient indépendante en 1947 ? **Vrai**.", "L'Algérie obtient son indépendance sans guerre ? **Faux**.", "La conférence de Bandung a lieu en 1955 ? **Vrai**."] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          "Croire que l'indépendance règle tous les problèmes : pauvreté et dépendance restent.",
          "Mettre toutes les décolonisations dans le même moule.",
        ] } ],
      [ { t: 'retenir', items: [
          'Inde 1947 · Afrique 1960 · Algérie 1962.',
          'Négociation ou guerre.',
          'Tiers-monde, non-alignement.',
        ] } ],
    ] },
  ],
},

'chine': {
  bulle: 'la Chine communiste',
  sous: 'De la révolution de Mao aux réformes de Deng Xiaoping',
  recto: [
    { t: 'tab', h: 'les étapes', full: true, lcol: true,
      head: ['Date', 'Événement'],
      rows: [
        ['1911-1912', "Fin de l'empire ; proclamation d'une **république**."],
        ['1927-1949', "**Guerre civile** entre nationalistes (**Tchang Kaï-chek**) et communistes (**Mao Zedong**), interrompue par l'invasion japonaise ; **Longue Marche** des communistes (1934-1935)."],
        ['1er oct. 1949', "Mao proclame la **République populaire de Chine** ; les nationalistes se réfugient à **Taïwan**."],
        ['1958-1960', "**Grand Bond en avant** : industrialisation forcée ; famine qui fait des dizaines de millions de morts."],
        ['1966-1976', "**Révolution culturelle** : les Gardes rouges persécutent intellectuels et « ennemis » du régime."],
        ['1978', "**Deng Xiaoping** lance des réformes : ouverture à l'économie de marché, sous le contrôle du Parti."],
        ['juin 1989', "La place **Tian’anmen** : l'armée écrase un mouvement étudiant pour la démocratie."],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'la Chine et la guerre froide', items: [
          "Alliée de l'URSS au début, puis **rupture** vers 1960.",
          "Voyage du président **Nixon** en Chine (1972).",
          "La Chine populaire prend le siège de la Chine à l'ONU (1971).",
        ] } ],
      [ { t: 'list', h: 'à retenir sur le régime', items: [
          "Parti communiste **unique**.",
          "Culte de la personnalité de Mao.",
          "Après 1978 : économie de plus en plus capitaliste, politique toujours autoritaire.",
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 — ', q: 'Changement ou continuité après la mort de Mao (1976) ?',
      s: [ 'changement → économie ouverte, croissance rapide', 'changement → entreprises privées et investissements étrangers', 'continuité → pouvoir du Parti communiste', 'continuité → répression des opposants (Tian’anmen)' ] },
    { t: 'ex', h: 'Exemple 2 — ', q: 'Le Canada et la Chine',
      p: [ "En 1970, le gouvernement de Pierre Elliott Trudeau reconnaît la République populaire de Chine, avant les États-Unis." ] },
    { t: 'ex', h: 'Question type examen — ', q: "Nomme deux politiques de Mao et leurs conséquences.",
      s: ["Grand Bond en avant → famine et millions de morts", "Révolution culturelle → persécutions, écoles fermées, chaos", "conclusion → après 1976, le Parti change de cap économique"] },
    { t: 'list', h: 'vrai ou faux ?', items: ["Taïwan devient le refuge des nationalistes ? **Vrai**.", "La Chine et l'URSS restent alliées toute la guerre froide ? **Faux**.", "Deng Xiaoping introduit la démocratie ? **Faux**."] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          "Confondre la République populaire de Chine (1949) et la république de 1912.",
          "Croire qu'ouverture économique veut dire démocratie.",
        ] } ],
      [ { t: 'retenir', items: [
          'Mao, 1949.',
          'Grand Bond, Révolution culturelle.',
          'Deng, 1978 · Tian’anmen, 1989.',
        ] } ],
    ] },
  ],
},

'moyen-orient': {
  bulle: 'le Moyen-Orient',
  sous: 'Le conflit israélo-arabe et une région stratégique',
  recto: [
    { t: 'tab', h: 'les étapes', full: true, lcol: true,
      head: ['Date', 'Événement'],
      rows: [
        ['1917', "**Déclaration Balfour** : le Royaume-Uni appuie un « foyer national juif » en Palestine."],
        ['1920-1948', "**Mandat britannique** sur la Palestine ; tensions entre Juifs et Arabes."],
        ['1947', "Plan de **partage** de l'ONU : un État juif, un État arabe ; accepté par les dirigeants juifs, rejeté par les pays arabes."],
        ['1948', "Proclamation de l'**État d'Israël** ; première guerre israélo-arabe ; des centaines de milliers de **réfugiés palestiniens**."],
        ['1967', "**Guerre des Six Jours** : Israël occupe la Cisjordanie, Gaza, Jérusalem-Est, le Golan et le Sinaï."],
        ['1973', "Guerre du **Kippour** ; **choc pétrolier** : les pays arabes producteurs réduisent leurs exportations."],
        ['1978-1979', "Accords de **Camp David** : paix entre l'Égypte et Israël, qui rend le Sinaï."],
        ['1987 et 1993', "Première **intifada** (soulèvement palestinien) ; **accords d'Oslo** (reconnaissance mutuelle d'Israël et de l'OLP)."],
      ] },
    { t: 'list', h: 'pourquoi une région si disputée ?', items: [
        "**Territoire** revendiqué par deux peuples ; lieux saints de trois religions à Jérusalem.",
        "**Pétrole** : grandes réserves, enjeu pour les puissances.",
        "Guerre froide : les États-Unis appuient Israël, l'URSS plusieurs pays arabes.",
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 — ', q: 'Pourquoi le choc pétrolier de 1973 touche-t-il le monde entier ?',
      p: [ "Le prix du pétrole est multiplié environ par quatre. Les pays importateurs subissent inflation et ralentissement : on voit que les événements du Moyen-Orient ont un effet **mondial**." ] },
    { t: 'ex', h: 'Exemple 2 — ', q: 'Présenter les points de vue sans parti pris',
      s: [ 'point de vue israélien → sécurité d\'un État menacé dès sa naissance', 'point de vue palestinien → perte de terres, réfugiés, occupation', 'point de vue de l\'ONU → deux États, retrait des territoires occupés (résolution 242, 1967)' ] },
    { t: 'ex', h: 'Question type examen — ', q: "Pourquoi l'ONU joue-t-elle un rôle dans la naissance d'Israël ?",
      s: ["le Royaume-Uni remet la question de la Palestine à l'ONU", "l'ONU vote un plan de partage (1947)", "Israël est proclamé en 1948, ce qui déclenche une guerre"] },
    { t: 'list', h: 'vrai ou faux ?', items: ["La déclaration Balfour date de 1917 ? **Vrai**.", "Les accords de Camp David unissent Israël et la Syrie ? **Faux** : l'Égypte.", "L'OPEP réduit ses exportations en 1973 ? **Vrai**."] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          "Présenter un seul point de vue : en histoire, on expose les perspectives de chaque acteur.",
          "Confondre la guerre des Six Jours (1967) et celle du Kippour (1973).",
        ] } ],
      [ { t: 'retenir', items: [
          '1948 : Israël · 1967 : Six Jours.',
          '1973 : choc pétrolier.',
          'Camp David, Oslo.',
        ] } ],
    ] },
  ],
},

'construction-europeenne': {
  bulle: 'la construction européenne',
  sous: "D'ennemis à partenaires : de la CECA à l'Union européenne",
  recto: [
    { t: 'txt', p: [ "Après deux guerres mondiales, des dirigeants européens veulent rendre une nouvelle guerre entre la France et l'Allemagne **impossible** en liant leurs économies. Les « pères de l'Europe » : Robert **Schuman**, Jean **Monnet**, Konrad **Adenauer**…" ] },
    { t: 'tab', h: 'les étapes', full: true, lcol: true,
      head: ['Date', 'Étape'],
      rows: [
        ['1950', "**Déclaration Schuman** : mettre en commun le charbon et l'acier."],
        ['1951', "**CECA** (Communauté européenne du charbon et de l'acier) : 6 pays (France, RFA, Italie, Belgique, Pays-Bas, Luxembourg)."],
        ['1957', "**Traité de Rome** : **CEE**, un marché commun."],
        ['1973-1995', "Élargissements : Royaume-Uni, Irlande, Danemark (1973), Grèce (1981), Espagne et Portugal (1986), Autriche, Finlande, Suède (1995)."],
        ['1992', "**Traité de Maastricht** : naissance de l'**Union européenne** (en vigueur en 1993)."],
        ['1999-2002', "L'**euro** : monnaie commune (pièces et billets en 2002)."],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'les buts', items: [ 'la **paix**', 'la reconstruction et la prospérité', 'plus de poids face aux deux superpuissances' ] } ],
      [ { t: 'list', h: 'les débats', items: [ 'partager des pouvoirs ou garder sa **souveraineté** ?', 'élargir ou approfondir ?' ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 — ', q: 'Pourquoi commencer par le charbon et l\'acier ?',
      p: [ "Ce sont les ressources de base pour fabriquer des armes. Les mettre en commun sous une autorité partagée empêche un pays de s'armer seul contre l'autre : la paix passe par l'économie." ] },
    { t: 'ex', h: 'Exemple 2 — ', q: 'Continuité et changement entre 1945 et 2000',
      s: [ 'changement → la France et l\'Allemagne passent d\'ennemies à partenaires', 'changement → frontières plus ouvertes, monnaie commune', 'continuité → chaque pays garde sa langue, sa culture et son gouvernement' ] },
    { t: 'ex', h: 'Question type examen — ', q: "Explique pourquoi la construction européenne commence par l'économie.",
      s: ["coopérer sur des intérêts concrets est plus facile que sur la politique", "des économies liées rendent la guerre coûteuse et absurde", "les réussites économiques préparent ensuite une union politique"] },
    { t: 'list', h: 'vrai ou faux ?', items: ["La CECA regroupe 6 pays ? **Vrai**.", "Le Royaume-Uni fait partie des pays fondateurs ? **Faux** : il entre en 1973.", "Le traité de Maastricht crée l'Union européenne ? **Vrai**."] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          "Dire que l'Union européenne existe depuis 1957 : en 1957, c'est la CEE.",
          "Confondre Union européenne (économie et politique) et OTAN (alliance militaire).",
        ] } ],
      [ { t: 'retenir', items: [
          'CECA 1951 · Rome 1957.',
          'Maastricht 1992 : UE.',
          'But premier : la paix.',
        ] } ],
    ] },
  ],
},

'droits-civiques': {
  bulle: 'les luttes pour les droits',
  sous: 'Droits civiques aux États-Unis, apartheid, droits des femmes',
  recto: [
    { t: 'cols', c: [
      [ { t: 'list', h: 'droits civiques aux États-Unis', items: [
          "Dans le Sud, la **ségrégation** sépare Noirs et Blancs (écoles, autobus, restaurants).",
          "**1954** : la Cour suprême interdit la ségrégation scolaire.",
          "**1955** : **Rosa Parks** refuse de céder sa place ; boycott des autobus de Montgomery.",
          "**1963** : discours « I have a dream » de **Martin Luther King** à Washington.",
          "**1964-1965** : lois sur les droits civiques et le droit de vote.",
          "Méthode de King : **non-violence** et désobéissance civile.",
        ] } ],
      [ { t: 'list', h: 'l\'apartheid en Afrique du Sud', items: [
          "**1948** : l'apartheid (« séparation ») devient la politique officielle.",
          "Lieux, droits et emplois séparés selon la « race » ; la majorité noire est privée du vote.",
          "**Nelson Mandela** (ANC) est emprisonné de 1962 à 1990.",
          "Pressions internationales : sanctions, boycott sportif.",
          "**1994** : premières élections multiraciales ; Mandela devient président.",
        ] } ],
    ] },
    { t: 'tab', h: 'droits des femmes : quelques repères', full: true, lcol: true,
      head: ['Date', 'Repère'],
      rows: [
        ['1918', "La plupart des Canadiennes obtiennent le droit de vote au fédéral."],
        ['1929', "Affaire « **personnes** » : les femmes sont reconnues comme des « personnes » au sens de la loi au Canada."],
        ['1940', "Droit de vote des femmes au **Québec**."],
        ['1960-1970', "Deuxième vague du **féminisme** : égalité au travail, contraception, droits dans la famille."],
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 — ', q: 'Comparer la lutte aux États-Unis et en Afrique du Sud',
      s: [ 'similitude → une loi sépare les gens selon la couleur de la peau', 'similitude → mouvements de résistance et appuis internationaux', 'différence → aux États-Unis la majorité est blanche ; en Afrique du Sud, une minorité blanche contrôle le pouvoir', 'différence → fin légale : 1964-1965 contre 1991-1994' ] },
    { t: 'ex', h: 'Exemple 2 — ', q: 'Pourquoi ces luttes s\'inscrivent-elles dans leur époque ?',
      p: [ "Après 1945, la **DUDH** proclame l'égalité de tous ; la décolonisation et la télévision rendent les injustices plus visibles, et la guerre froide pousse les États-Unis à soigner leur image." ] },
    { t: 'ex', h: 'Question type examen — ', q: "Explique la stratégie de Martin Luther King.",
      s: ["non-violence : boycotts, marches, sit-in", "rendre les injustices visibles dans les médias", "gagner l'appui de l'opinion publique et du gouvernement fédéral"] },
    { t: 'list', h: 'vrai ou faux ?', items: ["Rosa Parks refuse de céder sa place en 1955 ? **Vrai**.", "Mandela est libéré en 1990 ? **Vrai**.", "Les Québécoises votent au provincial dès 1918 ? **Faux** : en 1940."] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          "Croire que la fin légale de la ségrégation a mis fin au racisme.",
          "Oublier les acteurs moins connus : la lutte était collective.",
        ] } ],
      [ { t: 'retenir', items: [
          'Parks 1955 · King 1963.',
          'Apartheid 1948-1991 · Mandela 1994.',
          'Vote des Québécoises : 1940.',
        ] } ],
    ] },
  ],
},

'fin-guerre-froide': {
  bulle: 'la fin de la guerre froide',
  sous: "1985-1991 : de Gorbatchev à la disparition de l'URSS",
  recto: [
    { t: 'cols', c: [
      [ { t: 'list', h: 'les causes', items: [
          "**Économie** soviétique en crise : pénuries, retard technologique.",
          "Coût de la course aux armements et de la guerre en **Afghanistan**.",
          "Contestation dans les pays satellites (syndicat **Solidarność** en Pologne dès 1980).",
          "Réformes de **Gorbatchev**.",
        ] } ],
      [ { t: 'list', h: 'les réformes de Gorbatchev (dès 1985)', items: [
          "**Perestroïka** : restructuration de l'économie.",
          "**Glasnost** : transparence, plus de liberté d'expression.",
          "Rapprochement avec les États-Unis : accord sur les missiles (1987).",
          "Il renonce à intervenir militairement en Europe de l'Est.",
        ] } ],
    ] },
    { t: 'tab', h: 'la chute en quelques dates', full: true, lcol: true,
      head: ['Date', 'Événement'],
      rows: [
        ['1989', "Élections partiellement libres en Pologne ; les régimes communistes tombent un à un en Europe de l'Est."],
        ['9 nov. 1989', "**Chute du mur de Berlin**."],
        ['3 oct. 1990', "**Réunification** de l'Allemagne."],
        ['1991', "Dissolution du pacte de Varsovie ; tentative de coup d'État à Moscou (août)."],
        ['25-26 déc. 1991', "Gorbatchev démissionne ; l'**URSS disparaît** ; 15 républiques indépendantes, dont la Russie."],
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 — ', q: 'Pourquoi les réformes de Gorbatchev accélèrent-elles la chute ?',
      p: [ "La glasnost permet de critiquer le régime ouvertement, et la perestroïka désorganise l'économie sans la sauver. Quand l'URSS renonce à la force, les peuples d'Europe de l'Est et les républiques soviétiques en profitent pour réclamer leur liberté." ] },
    { t: 'ex', h: 'Exemple 2 — ', q: 'Ordonne ces événements.',
      s: [ '1 → arrivée de Gorbatchev (1985)', '2 → chute du mur de Berlin (1989)', '3 → réunification de l\'Allemagne (1990)', '4 → fin de l\'URSS (1991)' ] },
    { t: 'ex', h: 'Question type examen — ', q: "Quelles sont les conséquences de la fin de l'URSS ?",
      s: ["15 nouveaux États indépendants", "l'Europe de l'Est se tourne vers l'Ouest (UE, OTAN)", "les États-Unis restent la seule superpuissance"] },
    { t: 'list', h: 'vrai ou faux ?', items: ["La glasnost est une politique de transparence ? **Vrai**.", "L'Allemagne est réunifiée en 1989 ? **Faux** : en 1990.", "Solidarność est un syndicat polonais ? **Vrai**."] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          "Dire que la chute du mur (1989) marque la fin de l'URSS (1991).",
          "Présenter Gorbatchev comme voulant détruire l'URSS : il voulait la réformer.",
        ] } ],
      [ { t: 'retenir', items: [
          'Gorbatchev : perestroïka, glasnost.',
          'Mur : 9 novembre 1989.',
          'Fin de l\'URSS : décembre 1991.',
        ] } ],
    ] },
  ],
},

'apres-1991': {
  bulle: 'le monde après 1991',
  sous: 'Un « nouvel ordre mondial » ? Conflits, génocides et mondialisation',
  recto: [
    { t: 'txt', p: [ "Avec la fin de l'URSS, les **États-Unis** restent la seule superpuissance. On espère un monde plus pacifique, guidé par l'ONU, mais de nouveaux conflits éclatent, souvent **à l'intérieur** des États (conflits ethniques, nationalistes ou religieux)." ] },
    { t: 'tab', h: 'des repères', full: true, lcol: true,
      head: ['Date', 'Événement'],
      rows: [
        ['1991', "**Guerre du Golfe** : une coalition autorisée par l'ONU (dont le Canada) chasse l'Irak du Koweït."],
        ['1991-1995', "Éclatement de la **Yougoslavie** ; guerre en Bosnie ; massacre de **Srebrenica** (1995)."],
        ['1994', "**Génocide des Tutsis au Rwanda** : environ 800 000 morts en trois mois ; la mission de l'ONU, dirigée par le Canadien **Roméo Dallaire**, n'a pas les moyens d'agir."],
        ['1994-1995', "**ALENA** (Canada, États-Unis, Mexique) ; création de l'**OMC**."],
        ['1998', "Statut de Rome : future **Cour pénale internationale** (en fonction en 2002)."],
        ['1999', "L'**OTAN** bombarde la Serbie pour protéger les Albanais du **Kosovo**, sans autorisation de l'ONU."],
        ['11 sept. 2001', "Attentats aux États-Unis : ouverture d'une nouvelle période."],
      ] },
    { t: 'list', h: 'la mondialisation', items: [
        "Échanges commerciaux, financiers et culturels de plus en plus rapides (Internet, conteneurs, libre-échange).",
        "Gagnants et perdants : croissance dans certains pays, délocalisations dans d'autres.",
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 — ', q: 'Rwanda et Bosnie : quelle leçon pour l\'ONU ?',
      p: [ "Dans les deux cas, les Casques bleus présents n'ont pas pu empêcher les massacres. Ces échecs mènent à l'idée de **responsabilité de protéger** (adoptée à l'ONU en 2005) et à des tribunaux internationaux pour juger les responsables." ] },
    { t: 'ex', h: 'Exemple 2 — ', q: 'Légal ou légitime ? Le Kosovo (1999)',
      s: [ 'légalité → pas d\'autorisation du Conseil de sécurité (veto russe prévisible)', 'légitimité → but humanitaire : protéger des civils', 'conclusion → une intervention peut être contestée légalement et défendue moralement' ] },
    { t: 'ex', h: 'Question type examen — ', q: "Montre que les conflits changent de nature après la guerre froide.",
      s: ["avant → conflits liés à la rivalité États-Unis/URSS", "après → guerres civiles, ethniques et nationalistes", "exemples → Bosnie, Rwanda, Kosovo", "réponse → interventions humanitaires et tribunaux internationaux"] },
    { t: 'list', h: 'vrai ou faux ?', items: ["Le génocide du Rwanda a lieu en 1994 ? **Vrai**.", "L'intervention au Kosovo est autorisée par l'ONU ? **Faux**.", "L'ALENA unit le Canada, les États-Unis et le Mexique ? **Vrai**."] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          "Croire que la fin de la guerre froide a mis fin aux guerres.",
          "Confondre les tribunaux internationaux (pour des personnes) et la Cour internationale de justice (pour des États).",
        ] } ],
      [ { t: 'retenir', items: [
          'Une seule superpuissance.',
          'Bosnie, Rwanda (1994), Kosovo.',
          'Mondialisation : ALENA, OMC.',
        ] } ],
    ] },
  ],
},

/* ============ REPÈRES ET MÉTHODE ============ */
'ideologies': {
  bulle: 'les idéologies du 20e siècle',
  sous: 'Comprendre les idées qui orientent les choix politiques',
  recto: [
    { t: 'txt', p: [ "Une **idéologie** est un ensemble d'idées sur la façon d'organiser la société. Au 20e siècle, les grands conflits opposent souvent des idéologies." ] },
    { t: 'tab', h: 'les principales idéologies', full: true, lcol: true,
      head: ['Idéologie', 'Idées principales', 'Exemple'],
      rows: [
        ['**Libéralisme**', "libertés individuelles, élections, propriété privée, marché libre", "États-Unis, Canada, Europe de l'Ouest"],
        ['**Socialisme**', "réduire les inégalités ; l'État redistribue la richesse (réformes, élections)", "partis sociaux-démocrates européens"],
        ['**Communisme**', "abolir la propriété privée et les classes sociales ; en pratique : parti unique et économie planifiée", "URSS, Chine de Mao"],
        ['**Fascisme**', "nation et État au-dessus de tout, chef tout-puissant, rejet de la démocratie", "Italie de Mussolini"],
        ['**Nazisme**', "fascisme + **racisme** et **antisémitisme**, conquête d'un « espace vital »", "Allemagne de Hitler"],
        ['**Nationalisme**', "défendre les intérêts d'une nation ou obtenir un État", "décolonisation, Balkans"],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'deux systèmes économiques', items: [
          "**Capitalisme** : entreprises privées, prix fixés par le marché.",
          "**Économie planifiée** : l'État décide de la production et des prix.",
        ] } ],
      [ { t: 'list', h: 'gauche et droite', items: [
          "**Gauche** : priorité à l'égalité et au changement social.",
          "**Droite** : priorité à l'ordre, à la tradition, à la liberté économique.",
          "Les extrêmes (communisme, fascisme) peuvent mener au totalitarisme.",
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 — ', q: 'Associer chaque conflit aux idéologies en jeu',
      s: [ 'Seconde Guerre mondiale → démocraties libérales et URSS contre fascisme et nazisme', 'guerre froide → libéralisme et capitalisme contre communisme', 'décolonisation → nationalisme contre impérialisme' ] },
    { t: 'ex', h: 'Exemple 2 — ', q: 'Démocratie ou démocratie « populaire » ?',
      p: [ "Les pays de l'Est s'appelaient « démocraties populaires », mais il n'y avait qu'un seul parti et pas d'élections libres. Le **nom** d'un régime ne suffit pas : on regarde son **fonctionnement**." ] },
    { t: 'ex', h: 'Question type examen — ', q: "Associe chaque dirigeant à son idéologie.",
      s: ["Lénine, Staline, Mao → communisme", "Mussolini → fascisme", "Hitler → nazisme", "Roosevelt, Churchill → démocratie libérale"] },
    { t: 'list', h: 'vrai ou faux ?', items: ["Le communisme veut abolir la propriété privée ? **Vrai**.", "Le fascisme valorise la démocratie parlementaire ? **Faux**.", "Le nationalisme mène toujours au racisme ? **Faux**."] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          "Confondre socialisme démocratique et communisme soviétique.",
          "Confondre nationalisme (fierté d'une nation) et nazisme (idéologie raciste).",
        ] } ],
      [ { t: 'retenir', items: [
          'Idéologie = vision de la société.',
          'Libéralisme vs communisme : la guerre froide.',
          'Fascisme, nazisme : totalitarisme de droite.',
        ] } ],
    ] },
  ],
},

'canada-quebec': {
  bulle: 'le Canada et le Québec',
  sous: 'Dans les conflits du siècle : guerres, conscription, maintien de la paix',
  recto: [
    { t: 'tab', h: 'de colonie à pays autonome', full: true, lcol: true,
      head: ['Date', 'Événement'],
      rows: [
        ['1914', "Le Canada entre en guerre **automatiquement** avec le Royaume-Uni."],
        ['1917', "Victoire de **Vimy** ; loi sur la **conscription** : forte opposition au Québec (émeutes à Québec en 1918)."],
        ['1919', "Le Canada signe lui-même le traité de Versailles et entre à la SDN."],
        ['1931', "**Statut de Westminster** : le Canada contrôle sa politique étrangère."],
        ['1939', "Le Canada déclare la guerre **lui-même**, le 10 septembre."],
        ['1942', "**Plébiscite** sur la conscription : le Canada vote oui, le Québec vote majoritairement non."],
        ['1944', "Envoi de conscrits outre-mer ; nouvelle crise."],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'pendant la Seconde Guerre', items: [
          "Raid de **Dieppe** (1942) : échec coûteux.",
          "Débarquement à **Juno Beach** (6 juin 1944), libération des **Pays-Bas**.",
          "Usines de guerre : les femmes y travaillent en grand nombre.",
          "Internement de Canadiens d'origine japonaise.",
        ] } ],
      [ { t: 'list', h: 'après 1945', items: [
          "Membre fondateur de l'**OTAN** (1949) ; soldats en **Corée**.",
          "**NORAD** avec les États-Unis (1958).",
          "**Maintien de la paix** : Pearson et les Casques bleus (1956).",
          "Accueil de réfugiés, dont les « boat people » vietnamiens (1979-1980).",
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 — ', q: 'Pourquoi la conscription divise-t-elle le pays ?',
      s: [ 'Canada anglais → fort lien avec l\'Empire britannique ; devoir d\'aider', 'Québec → peu d\'attachement à l\'Empire ; guerre jugée étrangère', 'aussi → armée surtout anglophone ; promesses de ne pas imposer la conscription' ] },
    { t: 'ex', h: 'Exemple 2 — ', q: 'Comment les guerres augmentent-elles l\'autonomie du Canada ?',
      p: [ "Par ses sacrifices en 1914-1918, le Canada obtient de signer les traités lui-même ; en 1931, il contrôle sa politique étrangère ; en 1939, il déclare la guerre de lui-même, une semaine après le Royaume-Uni." ] },
    { t: 'ex', h: 'Question type examen — ', q: "Explique la position du Québec au plébiscite de 1942.",
      s: ["contexte → en 1939, le gouvernement avait promis de ne pas imposer la conscription pour servir outre-mer", "question → libérer le gouvernement de sa promesse", "résultat → oui au Canada, non majoritaire au Québec", "cause → souvenir de 1917 et faible attachement à l'Empire"] },
    { t: 'list', h: 'vrai ou faux ?', items: ["Le Canada déclare la guerre en même temps que le Royaume-Uni en 1939 ? **Faux** : le 10 septembre.", "Le Canada est membre fondateur de l'OTAN ? **Vrai**.", "Lester B. Pearson reçoit le prix Nobel de la paix ? **Vrai**."] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          "Dire que le Québec refusait toute participation : il s'opposait surtout à la **conscription**.",
          "Oublier que le Canada entre en guerre à des dates différentes en 1914 et en 1939.",
        ] } ],
      [ { t: 'retenir', items: [
          'Conscription : 1917 et 1944.',
          'Westminster : 1931.',
          'OTAN, Casques bleus.',
        ] } ],
    ] },
  ],
},

'chronologie': {
  bulle: 'ligne du temps du 20e siècle',
  sous: 'Les dates à connaître, dans l\'ordre',
  recto: [
    { t: 'tab', h: '1900 à 1945', full: true, lcol: true,
      head: ['Date', 'Événement'],
      rows: [
        ['1914-1918', 'Première Guerre mondiale'],
        ['1917', 'Révolutions russes ; entrée en guerre des États-Unis'],
        ['1919', 'Traité de Versailles ; création de la SDN'],
        ['1922', 'Mussolini au pouvoir ; création de l\'URSS'],
        ['1929', 'Krach de Wall Street'],
        ['1933', 'Hitler chancelier ; New Deal'],
        ['1938', 'Anschluss ; accords de Munich ; Nuit de cristal'],
        ['1939-1945', 'Seconde Guerre mondiale'],
        ['1941', 'Invasion de l\'URSS ; Pearl Harbor'],
        ['1942-1943', 'Stalingrad'],
        ['6 juin 1944', 'Débarquement en Normandie'],
        ['1945', 'Capitulations ; Hiroshima et Nagasaki ; création de l\'ONU'],
      ] },
    { t: 'txt', p: [ '<span class="note">' + NOTE + '</span>' ] },
  ],
  verso: [
    { t: 'tab', h: '1945 à 2001', full: true, lcol: true,
      head: ['Date', 'Événement'],
      rows: [
        ['1947', 'Doctrine Truman, plan Marshall ; indépendance de l\'Inde'],
        ['1948', 'DUDH ; État d\'Israël ; apartheid'],
        ['1949', 'OTAN ; Chine communiste'],
        ['1950-1953', 'Guerre de Corée'],
        ['1957', 'Traité de Rome ; Spoutnik'],
        ['1960', 'Année de l\'Afrique'],
        ['1961 et 1962', 'Mur de Berlin ; crise des missiles de Cuba'],
        ['1955-1975', 'Guerre du Vietnam'],
        ['1973', 'Choc pétrolier'],
        ['1989', 'Chute du mur de Berlin ; Tian’anmen'],
        ['1991', 'Fin de l\'URSS ; guerre du Golfe'],
        ['1992', 'Traité de Maastricht'],
        ['1994', 'Génocide au Rwanda ; Mandela président'],
        ['2001', 'Attentats du 11 septembre'],
      ] },
    { t: 'retenir', items: [
        "Pour mémoriser : regroupe par **période** (avant 1945 ; guerre froide ; après 1991), puis place les dates autour de quelques repères sûrs (1914, 1939, 1945, 1989, 1991).",
      ] },
  ],
},

'caracteriser': {
  bulle: 'caractériser un temps fort',
  sous: 'Compétence 1 — décrire ce qui rend une période unique',
  recto: [
    { t: 'txt', p: [ "Un **temps fort** est une période où les relations internationales **basculent** (une guerre, une révolution, une crise). Le **caractériser**, c'est en dégager les traits essentiels avec des faits précis." ] },
    { t: 'list', h: 'les questions à se poser', items: [
        "**Quand ?** Situer dans le temps : début, fin, durée, ce qui vient avant et après.",
        "**Où ?** Situer dans l'espace : pays, régions, frontières (aide-toi d'une carte).",
        "**Qui ?** Les **acteurs** : États, dirigeants, organisations, groupes, populations.",
        "**Quoi ?** Les **faits** principaux, dans l'ordre.",
        "**Pourquoi ?** Les **causes** (profondes et déclencheur).",
        "**Et après ?** Les **conséquences** à court et à long terme.",
        "**Qu'est-ce qui change ?** Les **changements** et les **continuités**.",
      ] },
    { t: 'tab', h: 'les opérations intellectuelles', full: true, lcol: true,
      head: ['Opération', 'Ce qu\'on attend'],
      rows: [
        ['Situer dans le temps et l\'espace', 'dates, ordre chronologique, lieux'],
        ['Établir des faits', 'nommer des faits précis et vérifiables'],
        ['Comparer', 'similitudes et différences entre deux réalités'],
        ['Causes et conséquences', 'expliquer les liens entre les faits'],
        ['Changements et continuités', 'ce qui se transforme et ce qui reste'],
      ],
      note: "Les noms des opérations peuvent varier selon ton manuel." },
  ],
  verso: [
    { t: 'ex', h: 'Exemple — ', q: 'Caractériser la crise des missiles de Cuba (1962)',
      s: [ 'quand → octobre 1962, 13 jours, en pleine guerre froide', 'où → Cuba, à environ 150 km des côtes de la Floride', 'qui → Kennedy (États-Unis), Khrouchtchev (URSS), Castro (Cuba)', 'faits → missiles soviétiques repérés, blocus naval, négociations', 'causes → rivalité des blocs, révolution cubaine (1959)', 'conséquences → retrait des missiles, « téléphone rouge », détente', 'changement → les deux Grands cherchent à éviter la guerre nucléaire' ] },
    { t: 'ex', h: 'Question type examen — ', q: "Changement ou continuité ? (entre 1914 et 1945)",
      s: ["guerres mondiales → changement d'échelle : conflits de plus en plus totaux", "nationalisme → continuité", "domination européenne → changement : elle décline en 1945"] },
    { t: 'list', h: 'vrai ou faux ?', items: ["Un déclencheur est une cause profonde ? **Faux**.", "Situer dans l'espace demande souvent une carte ? **Vrai**.", "Caractériser, c'est raconter l'histoire en détail ? **Faux** : c'est dégager des traits."] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          "Raconter sans analyser : il faut dégager des **traits**.",
          "Oublier les dates et les lieux précis.",
          "Mélanger causes et conséquences.",
        ] } ],
      [ { t: 'retenir', items: [
          'Quand, où, qui, quoi, pourquoi, et après.',
          'Toujours des faits précis.',
          'Changements et continuités.',
        ] } ],
    ] },
  ],
},

'interpreter': {
  bulle: 'interpréter une réalité sociale',
  sous: 'Compétence 2 — utiliser la méthode historique',
  recto: [
    { t: 'txt', p: [ "**Interpréter**, c'est proposer une **explication** fondée sur des sources. L'historien ne donne pas une opinion : il construit une réponse qu'il peut **justifier** avec des preuves." ] },
    { t: 'tab', h: 'les étapes de la méthode historique', full: true, lcol: true,
      head: ['Étape', 'Ce que je fais'],
      rows: [
        ['1. Prendre connaissance du problème', "je formule une **question** précise (ex. : Pourquoi la SDN échoue-t-elle ?)"],
        ['2. Émettre une hypothèse', "je propose une réponse provisoire"],
        ['3. Rechercher et **critiquer** les sources', "je trouve des documents variés et je vérifie leur fiabilité"],
        ['4. Organiser l\'information', "je classe : causes, conséquences, acteurs, points de vue"],
        ['5. Interpréter', "je réponds à la question, je confirme ou je corrige mon hypothèse"],
        ['6. Communiquer', "je présente ma réponse de façon claire, avec mes sources"],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'un bon raisonnement historique', items: [
          "Tenir compte de plusieurs **points de vue** (perspective des acteurs).",
          "Éviter l'**anachronisme** : juger le passé avec les idées d'aujourd'hui.",
          "Distinguer **fait** (vérifiable) et **opinion**.",
        ] } ],
      [ { t: 'list', h: 'et la citoyenneté', items: [
          "Comprendre les origines des enjeux actuels.",
          "Débattre de façon nuancée et respectueuse.",
          "Reconnaître l'importance des institutions démocratiques.",
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple — ', q: 'Question : Pourquoi l\'apaisement a-t-il échoué en 1938 ?',
      s: [ 'hypothèse → Hitler voulait plus que les Sudètes', 'source 1 → discours et écrits de Hitler sur l\'« espace vital »', 'source 2 → invasion du reste de la Tchécoslovaquie (mars 1939)', 'point de vue → Français et Britanniques voulaient éviter une guerre et n\'étaient pas prêts', 'interprétation → l\'apaisement a donné du temps à Hitler sans changer ses objectifs' ] },
    { t: 'ex', h: 'Question type examen — ', q: "Fait ou opinion ?",
      s: ["« Le mur de Berlin tombe le 9 novembre 1989 » → fait", "« Gorbatchev est le meilleur dirigeant du siècle » → opinion", "« L'apaisement a encouragé Hitler » → interprétation à justifier par des sources"] },
    { t: 'list', h: 'vrai ou faux ?', items: ["Une hypothèse est une réponse définitive ? **Faux**.", "Un anachronisme est une erreur de période ? **Vrai**.", "Une seule source fiable suffit toujours ? **Faux**."] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          "Donner son opinion sans preuve.",
          "Utiliser une seule source.",
          "Juger avec les valeurs d'aujourd'hui sans le contexte de l'époque.",
        ] } ],
      [ { t: 'retenir', items: [
          'Question → hypothèse → sources.',
          'Critique des sources.',
          'Réponse justifiée et nuancée.',
        ] } ],
    ] },
  ],
},

'documents': {
  bulle: 'analyser des documents',
  sous: 'Sources écrites, cartes, affiches, caricatures, photos, graphiques',
  recto: [
    { t: 'tab', h: 'les types de sources', full: true, lcol: true,
      head: ['Type', 'Définition', 'Exemple'],
      rows: [
        ['**Source primaire**', "produite à l'époque étudiée, par un témoin ou un acteur", 'discours, lettre, affiche, photo, traité'],
        ['**Source secondaire**', "produite plus tard par quelqu'un qui étudie l'époque", 'manuel, article d\'historien, documentaire'],
      ] },
    { t: 'list', h: 'la critique d\'un document : 5 questions', items: [
        "**Qui** l'a produit ? (auteur, son rôle, son camp)",
        "**Quand** et **où** ? (le contexte)",
        "**Pour qui** ? (destinataire, public visé)",
        "**Pourquoi** ? (intention : informer, convaincre, commander…)",
        "Est-il **fiable** ? (comparer avec d'autres sources)",
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'lire une carte', items: [
          'titre, date, légende, échelle',
          'ce qui change d\'une carte à l\'autre (frontières, blocs)',
        ] },
        { t: 'list', h: 'lire un graphique', items: [
          'titre, unités, période',
          'tendance : hausse, baisse, rupture',
        ] } ],
      [ { t: 'list', h: 'lire une caricature ou une affiche', items: [
          'identifier les personnages et les symboles',
          'trouver le message et le point de vue de l\'auteur',
          'relier au contexte (date, événement)',
          'se rappeler qu\'elle exagère volontairement',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 — ', q: 'Primaire ou secondaire ?',
      s: [ 'le discours « I have a dream » (1963) → primaire', 'un manuel de 2020 sur la guerre froide → secondaire', 'une affiche soviétique des années 1930 → primaire', 'un documentaire sur Vimy (2017) → secondaire' ] },
    { t: 'ex', h: 'Exemple 2 — ', q: 'Une affiche de recrutement canadienne de 1915 est-elle fiable ?',
      p: [ "Elle est fiable pour connaître le **message** que le gouvernement voulait transmettre et les **valeurs** qu'il mettait de l'avant. Elle ne l'est pas pour décrire la **réalité** des tranchées, puisque son but est de convaincre." ] },
    { t: 'ex', h: 'Question type examen — ', q: "Critique ce document : un discours de Churchill à la radio (1940).",
      s: ["qui → premier ministre britannique", "quand → en pleine guerre, après la chute de la France", "pour qui → la population britannique", "intention → encourager la résistance", "fiabilité → bon pour le moral et les intentions ; à croiser pour les faits militaires"] },
    { t: 'list', h: 'vrai ou faux ?', items: ["Une photo ne peut pas être truquée ni cadrée ? **Faux**.", "Un manuel scolaire est une source secondaire ? **Vrai**.", "Une caricature exprime un point de vue ? **Vrai**."] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          "Croire qu'une source primaire est toujours vraie.",
          "Décrire un document sans l'expliquer ni le relier au contexte.",
          "Oublier la date du document.",
        ] } ],
      [ { t: 'retenir', items: [
          'Primaire = de l\'époque.',
          'Qui, quand, pour qui, pourquoi.',
          'Toujours croiser les sources.',
        ] } ],
    ] },
  ],
},

/* ============ GÉNÉRAL ============ */
general: {
  bulle: 'histoire du 20e : tout en 1',
  sous: 'Résumé de l\'année — Histoire du 20e siècle, secondaire 5',
  recto: [
    { t: 'tab', h: 'les grandes périodes', full: true, lcol: true,
      head: ['Période', 'L\'essentiel'],
      rows: [
        ['**1900-1914**', "Europe dominante ; impérialisme ; deux blocs d'alliances ; causes MAIN"],
        ['**1914-1918**', "Première Guerre mondiale : tranchées, guerre totale ; 1917 : États-Unis et révolution russe"],
        ['**1919-1939**', "Versailles et SDN ; URSS ; crise de 1929 ; totalitarismes (Mussolini, Hitler, Staline)"],
        ['**1939-1945**', "Seconde Guerre mondiale ; Shoah ; bombes atomiques ; ONU"],
        ['**1947-1991**', "guerre froide : blocs, OTAN et Varsovie, Corée, Cuba, Vietnam ; décolonisation ; construction européenne ; droits civiques"],
        ['**1991-2001**', "fin de l'URSS ; une seule superpuissance ; Bosnie, Rwanda, Kosovo ; mondialisation"],
      ],
      note: NOTE },
    { t: 'cols', c: [
      [ { t: 'list', h: 'compétence 1 : caractériser', items: [
          "Temps, espace, acteurs, faits.",
          "Causes et conséquences.",
          "Changements et continuités.",
        ] } ],
      [ { t: 'list', h: 'compétence 2 : interpréter', items: [
          "Question → hypothèse → sources.",
          "Critique des sources, points de vue.",
          "Réponse justifiée, sans anachronisme.",
        ] } ],
    ] },
    { t: 'list', h: 'concepts clés', items: [
        "impérialisme · nationalisme · alliance · guerre totale · totalitarisme · génocide · idéologie · sécurité collective · bipolarisation · endiguement · dissuasion · décolonisation · mondialisation",
      ] },
  ],
  verso: [
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Cause et conséquence —', q: 'Versailles', p: [ "L'humiliation de l'Allemagne nourrit le nazisme et prépare la Seconde Guerre." ] },
        { t: 'ex', h: 'Changement —', q: '1945', p: [ "L'Europe perd sa domination ; deux superpuissances la remplacent." ] } ],
      [ { t: 'ex', h: 'Comparaison —', q: 'SDN et ONU', p: [ "Même but (la paix), mais l'ONU inclut les grandes puissances et peut autoriser la force." ] },
        { t: 'ex', h: 'Continuité —', q: 'le nationalisme', p: [ "Présent en 1914, dans la décolonisation et dans les guerres des années 1990." ] } ],
    ] },
    { t: 'tab', h: '10 dates sûres', full: true,
      rows: [
        ['1914', '1917', '1919', '1929', '1933'],
        ['1939', '1945', '1949', '1962', '1989 / 1991'],
      ] },
    { t: 'pieges', items: [
      "Donner une date sans l'événement, ou un événement sans son contexte.",
      "Confondre déclencheur et cause profonde.",
      "Confondre armistice et traité ; SDN et ONU ; chute du mur (1989) et fin de l'URSS (1991).",
      "Juger le passé avec nos valeurs actuelles (anachronisme).",
      "Présenter un seul point de vue dans un conflit.",
    ] },
    { t: 'retenir', items: [
      "Chaque temps fort : quand, où, qui, pourquoi, et après.",
      "Le siècle en une phrase : de la domination européenne à la guerre froide, puis à la mondialisation.",
      "Des faits précis et des sources critiquées font une bonne réponse.",
    ] },
  ],
},

};
})();
