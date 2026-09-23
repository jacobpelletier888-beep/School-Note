/* Monde contemporain — secondaire 5 */
(function () {
  const NOTE = 'Les intitulés exacts des concepts et des enjeux peuvent varier légèrement selon ton manuel : vérifie avec ton cahier.';

DATA.feuilles['monde-contemporain'] = {

/* ============ ENVIRONNEMENT ============ */
'environnement-concepts': {
  bulle: 'environnement : concepts',
  sous: 'Thème Environnement — les concepts',
  recto: [
    { t: 'txt', p: [ 'L\'**environnement**, c\'est l\'ensemble des éléments naturels (air, eau, sol, êtres vivants) et humains avec lesquels les sociétés interagissent. Le thème étudie comment les humains **utilisent** et **protègent** ces éléments à l\'échelle de la planète.' ] },
    { t: 'tab', h: 'les concepts particuliers', full: true, lcol: true,
      head: ['Concept', 'Définition (en mes mots)', 'Exemples'],
      rows: [
        ['**Consommation**', 'utilisation de biens et de ressources pour répondre à des besoins ; la **surconsommation** dépasse ce que la planète peut renouveler', 'empreinte écologique, « jour du dépassement », obsolescence programmée'],
        ['**Développement durable**', 'développement qui répond aux besoins du présent sans compromettre la capacité des générations futures de répondre aux leurs (rapport Brundtland, 1987)', 'trois sphères : **environnement**, **société**, **économie**'],
        ['**Gestion**', 'façon d\'administrer les ressources, le territoire et les déchets', 'les **3RV** : réduction, réemploi, recyclage, valorisation ; aires protégées'],
        ['**Responsabilité**', 'obligation des acteurs (États, entreprises, citoyens) de répondre des conséquences de leurs actions sur l\'environnement', 'principe **pollueur-payeur** ; responsabilité commune mais différenciée'],
        ['**Réglementation**', 'ensemble des lois, normes et accords qui encadrent les activités humaines', 'protocole de Montréal (1987), protocole de Kyoto (1997), accord de Paris (2015)'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'les acteurs', items: [
          '**États** et gouvernements (lois, accords).',
          '**Organisations internationales** : ONU, Programme des Nations unies pour l\'environnement (PNUE), GIEC (experts du climat).',
          '**Entreprises**, **ONG** (Greenpeace, WWF…), **citoyens** et consommateurs.',
        ] } ],
      [ { t: 'list', h: 'outils économiques', items: [
          '**Marché du carbone** : les entreprises achètent et vendent des droits d\'émission (le Québec est lié à la Californie).',
          '**Écofiscalité** : taxes sur la pollution, crédits pour les choix verts.',
          '**Écoétiquetage** et certifications.',
        ] } ],
    ] },
    { t: 'txt', p: [ '<span class="note">' + NOTE + '</span>' ] },
  ],
  verso: [
    { t: 'ex', h: 'Cas 1 — une réglementation qui a fonctionné', q: 'Le protocole de Montréal (1987)',
      p: [ 'Les États se sont entendus pour éliminer les CFC, des gaz qui détruisaient la **couche d\'ozone**. Presque tous les pays l\'ont appliqué et la couche d\'ozone se rétablit lentement. On le cite souvent comme exemple de **réglementation** internationale efficace.' ] },
    { t: 'ex', h: 'Cas 2 — les limites de la réglementation', q: 'Le climat : de Kyoto à Paris',
      p: [ '**Kyoto** (1997) imposait des cibles de réduction surtout aux pays industrialisés. L\'**accord de Paris** (2015) vise à limiter le réchauffement bien en dessous de 2 °C ; chaque pays fixe lui-même ses cibles. Les engagements dépendent donc de la volonté des États.' ] },
    { t: 'ex', h: 'Cas 3 — le développement durable au quotidien', q: 'Relier une action aux trois sphères.',
      s: [ 'transport en commun électrique → environnement : moins de GES', '→ société : accès à la mobilité pour tous', '→ économie : moins de dépenses d\'essence importée' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Confondre développement durable et simple protection de la nature : il y a aussi l\'économie et la société.',
          'Donner une définition sans exemple concret.',
          'Oublier de nommer les acteurs et leurs intérêts.',
        ] } ],
      [ { t: 'retenir', items: [
          '5 concepts : consommation, développement durable, gestion, responsabilité, réglementation.',
          'Montréal (ozone), Kyoto, Paris (climat).',
          'Toujours : acteurs + intérêts + exemple.',
        ] } ],
    ] },
  ],
},

'environnement-enjeux': {
  bulle: 'environnement : enjeux',
  sous: 'Thème Environnement — les enjeux',
  recto: [
    { t: 'txt', p: [ 'Un **enjeu** est une question sur laquelle les acteurs ne s\'entendent pas, parce que leurs **intérêts** et leurs **valeurs** diffèrent. Pour ce thème, on étudie surtout l\'**harmonisation des normes environnementales** et l\'**utilisation et la consommation des ressources**.' ] },
    { t: 'cols', c: [
      [ { t: 'txt', h: 'enjeu 1 : harmoniser les normes', p: [ 'Faut-il des règles environnementales **communes** à tous les pays ?' ] },
        { t: 'list', items: [
          '**Pour** : la pollution ne connaît pas de frontières ; sans règles communes, les entreprises s\'installent là où les normes sont faibles.',
          '**Contre** ou **nuances** : chaque État est souverain ; les pays en développement veulent pouvoir se développer, comme l\'ont fait les pays riches.',
          'Idée clé : **responsabilité commune mais différenciée**.',
        ] } ],
      [ { t: 'txt', h: 'enjeu 2 : utiliser et consommer les ressources', p: [ 'Comment répondre aux besoins de 8 milliards d\'humains sans épuiser la planète ?' ] },
        { t: 'list', items: [
          'Ressources sous pression : eau douce (une petite partie de l\'eau de la planète), forêts, poissons, minerais, énergie fossile.',
          'Tensions entre **croissance économique**, **emplois** et **protection**.',
          'Pistes : économie circulaire, énergies renouvelables, réduction de la consommation, quotas.',
        ] } ],
    ] },
    { t: 'tab', h: 'les acteurs et leurs intérêts', full: true, lcol: true,
      head: ['Acteur', 'Intérêts souvent défendus'],
      rows: [
        ['pays industrialisés', 'maintenir leur niveau de vie et leur compétitivité ; plusieurs financent la transition des autres'],
        ['pays émergents et en développement', 'croissance, lutte contre la pauvreté ; aide financière et technologique'],
        ['petits États insulaires', 'survie face à la hausse du niveau de la mer ; cibles ambitieuses'],
        ['entreprises', 'rentabilité, règles stables et équitables entre concurrents'],
        ['ONG et citoyens', 'protection de la nature, justice climatique, santé'],
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Cas — la surpêche de la morue', q: 'Un exemple canadien d\'épuisement d\'une ressource.',
      p: [ 'Au large de Terre-Neuve, la pêche intensive a effondré les stocks de morue. En 1992, le gouvernement fédéral a imposé un **moratoire** : des milliers de personnes ont perdu leur emploi. Cet exemple montre le lien entre **gestion**, **consommation** et conséquences sociales.' ] },
    { t: 'ex', h: 'Structure d\'une prise de position', q: '« Les normes environnementales devraient-elles être les mêmes pour tous les pays ? »',
      s: [ 'position → oui, avec des délais pour les pays en développement', 'argument 1 → la pollution est mondiale (ex. climat, ozone)', 'argument 2 → éviter que les entreprises fuient les normes', 'nuance → aide financière des pays riches (responsabilité différenciée)', 'action possible → taxe carbone aux frontières, fonds climatique' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Prendre position sans nuancer ni considérer l\'autre point de vue.',
          'Parler seulement du Québec : l\'enjeu est **mondial**.',
          'Oublier les pays en développement dans l\'analyse.',
        ] } ],
      [ { t: 'retenir', items: [
          'Enjeu = désaccord entre acteurs.',
          'Harmonisation : règles communes vs souveraineté.',
          'Ressources : besoins vs capacité de la planète.',
        ] } ],
    ] },
  ],
},

/* ============ POPULATION ============ */
'population-concepts': {
  bulle: 'population : concepts',
  sous: 'Thème Population — les concepts',
  recto: [
    { t: 'txt', p: [ 'Le thème **Population** étudie comment les gens se **déplacent** et se **répartissent** sur la planète, et les défis que cela crée pour les sociétés.' ] },
    { t: 'tab', h: 'les concepts particuliers', full: true, lcol: true,
      head: ['Concept', 'Définition (en mes mots)', 'Exemples'],
      rows: [
        ['**Migration**', 'déplacement de personnes d\'un lieu à un autre pour s\'y établir ; **émigrer** (partir), **immigrer** (arriver)', 'migrants économiques, réfugiés, migrants climatiques'],
        ['**Urbanisation**', 'croissance de la population des villes et de la part des gens qui vivent en ville', 'exode rural, métropoles, bidonvilles, étalement urbain'],
        ['**Diversité culturelle**', 'coexistence de plusieurs cultures (langues, religions, traditions) dans une société', 'Montréal, métropole multiculturelle'],
        ['**Réseau**', 'liens (familiaux, communautaires, de transport, de communication) qui facilitent les déplacements', 'diaspora, envois d\'argent vers le pays d\'origine'],
        ['**Délocalisation**', 'déplacement d\'activités de production d\'un pays vers un autre, souvent pour réduire les coûts', 'usines déplacées vers des pays où les salaires sont bas'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'pourquoi migre-t-on ?', items: [
          '**Facteurs répulsifs** (qui poussent à partir) : pauvreté, guerre, persécution, catastrophes, changements climatiques.',
          '**Facteurs attractifs** (qui attirent) : emploi, sécurité, études, famille, qualité de vie.',
          '**Réfugié** : personne qui fuit son pays par crainte d\'être persécutée (Convention de Genève, 1951) ; protégée par le droit international.',
          '**Déplacé interne** : a fui, mais reste dans son pays.',
        ] } ],
      [ { t: 'list', h: 'l\'urbanisation en chiffres (ONU)', items: [
          'En 2018, environ **55 %** de la population mondiale vivait en ville.',
          'L\'ONU prévoyait environ **68 %** en 2050.',
          'La croissance urbaine la plus rapide se fait en **Afrique** et en **Asie**.',
          'Environ un milliard de personnes vivent dans des quartiers informels (bidonvilles).',
        ] } ],
    ] },
    { t: 'txt', p: [ '<span class="note">' + NOTE + '</span>' ] },
  ],
  verso: [
    { t: 'ex', h: 'Cas 1 — le Québec, société d\'accueil', q: 'Comment le Québec gère-t-il l\'immigration ?',
      p: [ 'En vertu d\'une entente avec le gouvernement fédéral (accord Canada-Québec, 1991), le Québec **sélectionne** une grande partie de ses immigrants économiques et s\'occupe de leur **intégration** (francisation, emploi). La **diversité culturelle** est surtout concentrée dans la région de Montréal.' ] },
    { t: 'ex', h: 'Cas 2 — l\'exode rural', q: 'Relier migration et urbanisation.',
      s: [ 'facteur répulsif → peu d\'emplois à la campagne', 'facteur attractif → emplois en ville', 'conséquence → villes qui grandissent vite, manque de logements, bidonvilles' ] },
    { t: 'ex', h: 'Cas 3 — le rôle des réseaux', q: 'Pourquoi des migrants d\'un même pays s\'installent-ils souvent dans le même quartier ?',
      p: [ 'Grâce aux **réseaux** familiaux et communautaires : on y trouve de l\'aide, un logement, un emploi, sa langue. Ces réseaux forment une **diaspora** qui garde des liens avec le pays d\'origine.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Confondre émigrer (partir) et immigrer (arriver).',
          'Confondre réfugié (statut juridique) et migrant économique.',
          'Oublier les facteurs répulsifs ET attractifs.',
        ] } ],
      [ { t: 'retenir', items: [
          'Migration, urbanisation, diversité culturelle, réseau, délocalisation.',
          'Répulsif = pousse ; attractif = attire.',
          'Plus de la moitié de l\'humanité vit en ville.',
        ] } ],
    ] },
  ],
},

'population-enjeux': {
  bulle: 'population : enjeux',
  sous: 'Thème Population — les enjeux',
  recto: [
    { t: 'txt', p: [ 'Deux grandes questions divisent les acteurs : comment **gérer les migrations** (qui accueillir, combien, comment intégrer) et comment faire face aux **défis de l\'urbanisation** (logement, transport, services, environnement).' ] },
    { t: 'cols', c: [
      [ { t: 'txt', h: 'enjeu : la gestion des migrations', p: [] },
        { t: 'list', items: [
          '**Points de vue favorables à plus d\'immigration** : pénurie de main-d\'œuvre, vieillissement de la population, devoir humanitaire, richesse culturelle.',
          '**Points de vue favorables à plus de contrôle** : capacité d\'accueil (logement, services), intégration, sécurité des frontières, protection de la langue et de la culture.',
          'Question des **réfugiés** : obligation d\'accueillir selon le droit international, mais partage inégal entre les pays.',
        ] } ],
      [ { t: 'txt', h: 'enjeu : les défis de l\'urbanisation', p: [] },
        { t: 'list', items: [
          '**Logement** : prix élevés, bidonvilles, itinérance.',
          '**Transport** : congestion, pollution ; transport collectif.',
          '**Services** : eau potable, égouts, écoles, soins.',
          '**Environnement** : étalement urbain sur les terres agricoles, îlots de chaleur.',
          'Pistes : densification, planification, verdissement, investissements publics.',
        ] } ],
    ] },
    { t: 'tab', h: 'les acteurs', full: true, lcol: true,
      head: ['Acteur', 'Rôle ou intérêt'],
      rows: [
        ['pays d\'accueil', 'répondre aux besoins économiques tout en contrôlant les entrées'],
        ['pays d\'origine', 'perdre de la main-d\'œuvre (fuite des cerveaux), mais recevoir de l\'argent de la diaspora'],
        ['migrants', 'sécurité, emploi, avenir de leurs enfants'],
        ['villes', 'financer les infrastructures et les services'],
        ['HCR (ONU), ONG', 'protéger les réfugiés, offrir de l\'aide'],
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Cas — la fuite des cerveaux', q: 'Une conséquence de la migration pour les pays de départ.',
      p: [ 'Quand des médecins, des ingénieurs ou des infirmières quittent un pays en développement pour un pays riche, leur pays d\'origine perd des compétences qu\'il a payées pour former. En contrepartie, la diaspora envoie souvent de l\'argent à sa famille.' ] },
    { t: 'ex', h: 'Structure d\'une prise de position', q: '« Le Québec devrait-il accueillir plus d\'immigrants ? »',
      s: [ 'position → oui, mais avec plus de moyens pour l\'intégration', 'argument 1 → pénurie de main-d\'œuvre et vieillissement', 'argument 2 → apport culturel et économique', 'nuance → capacité de logement et francisation à renforcer', 'action → investir dans la francisation et le logement abordable' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Généraliser (« tous les immigrants… ») : on nuance et on appuie sur des faits.',
          'Ignorer le point de vue des pays d\'origine.',
          'Parler d\'urbanisation sans nommer de ville ou de situation concrète.',
        ] } ],
      [ { t: 'retenir', items: [
          'Migrations : besoins vs capacité d\'accueil.',
          'Urbanisation : logement, transport, services, environnement.',
          'Toujours plusieurs acteurs et points de vue.',
        ] } ],
    ] },
  ],
},

/* ============ POUVOIR ============ */
'pouvoir-concepts': {
  bulle: 'pouvoir : concepts',
  sous: 'Thème Pouvoir — les concepts',
  recto: [
    { t: 'txt', p: [ 'Le thème **Pouvoir** étudie qui prend les décisions à l\'échelle mondiale : les **États**, les **organisations internationales**, les entreprises multinationales et même les citoyens. Avec la mondialisation, le pouvoir des États est de plus en plus **partagé**.' ] },
    { t: 'tab', h: 'les concepts particuliers', full: true, lcol: true,
      head: ['Concept', 'Définition (en mes mots)', 'Exemples'],
      rows: [
        ['**État**', 'entité politique qui exerce son autorité sur un territoire et une population, avec un gouvernement', 'Canada, France, Japon'],
        ['**Souveraineté**', 'pouvoir d\'un État de décider lui-même, sans ingérence extérieure, sur son territoire', 'lois, frontières, politique étrangère'],
        ['**Mondialisation**', 'intensification des échanges (biens, capitaux, personnes, information, culture) à l\'échelle de la planète', 'chaînes de production mondiales, Internet'],
        ['**Institution internationale**', 'organisation créée par des États pour coopérer dans un domaine', 'ONU, OMC, FMI, OTAN'],
        ['**Accord international**', 'entente écrite entre États qui crée des obligations', 'accords de libre-échange, traités sur le climat'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'l\'ONU en bref', items: [
          'Fondée en **1945**, après la Seconde Guerre mondiale ; 193 États membres.',
          '**Assemblée générale** : tous les États, un vote chacun.',
          '**Conseil de sécurité** : 15 membres, dont **5 permanents avec droit de veto** (Chine, États-Unis, France, Royaume-Uni, Russie).',
          'Agences : OMS, UNESCO, UNICEF, HCR…',
        ] } ],
      [ { t: 'list', h: 'céder de la souveraineté', items: [
          'En signant un accord, un État accepte des règles qui limitent sa liberté d\'action.',
          'ex. l\'**Union européenne** : monnaie commune (euro) pour plusieurs membres, lois communes.',
          'ex. l\'**OMC** : un État peut être condamné s\'il ne respecte pas les règles du commerce.',
          'Contrepoids : les États gardent le droit de se retirer (ex. le Brexit en 2020).',
        ] } ],
    ] },
    { t: 'txt', p: [ '<span class="note">' + NOTE + '</span>' ] },
  ],
  verso: [
    { t: 'ex', h: 'Cas 1 — le droit de veto', q: 'Pourquoi le Conseil de sécurité est-il parfois bloqué ?',
      p: [ 'Un seul des cinq membres permanents peut **bloquer** une résolution avec son veto, même si tous les autres sont d\'accord. Quand leurs intérêts s\'opposent (ex. guerres en Syrie ou en Ukraine), l\'ONU a de la difficulté à agir.' ] },
    { t: 'ex', h: 'Cas 2 — un accord de libre-échange', q: 'L\'ACEUM (Canada, États-Unis, Mexique), en vigueur depuis 2020',
      p: [ 'Il remplace l\'ALENA et réduit les barrières au commerce entre les trois pays. Les entreprises y gagnent des marchés, mais les États acceptent des **règles communes** qui limitent certaines décisions (ex. certaines subventions).' ] },
    { t: 'ex', h: 'Cas 3 — d\'autres acteurs puissants', q: 'Qui d\'autre exerce du pouvoir à l\'échelle mondiale ?',
      s: [ 'multinationales → investissements, emplois, influence sur les lois', 'grandes plateformes numériques → contrôle de l\'information', 'ONG → pression sur les États, aide', 'citoyens → votes, mouvements sociaux, boycotts' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Confondre État (entité politique) et gouvernement (ceux qui dirigent).',
          'Croire que l\'ONU est un gouvernement mondial : elle dépend de la volonté des États.',
          'Oublier les acteurs non étatiques.',
        ] } ],
      [ { t: 'retenir', items: [
          'État, souveraineté, mondialisation, institution internationale, accord international.',
          'Conseil de sécurité : 5 membres permanents avec veto.',
          'Coopérer = partager un peu de souveraineté.',
        ] } ],
    ] },
  ],
},

'pouvoir-enjeux': {
  bulle: 'pouvoir : enjeux',
  sous: 'Thème Pouvoir — les enjeux',
  recto: [
    { t: 'txt', p: [ 'Les enjeux de ce thème portent sur la **capacité d\'action des États** dans un monde mondialisé et sur le **pouvoir des organisations internationales** : doivent-elles avoir plus d\'autorité sur les États, ou moins ?' ] },
    { t: 'cols', c: [
      [ { t: 'txt', h: 'enjeu : la capacité d\'action des États', p: [] },
        { t: 'list', items: [
          'Les États peuvent-ils encore protéger leur économie, leur culture et leurs citoyens face aux marchés mondiaux et aux multinationales ?',
          '**Arguments pour plus de souveraineté** : démocratie (les citoyens élisent leur gouvernement), protection de la culture et des emplois.',
          '**Arguments pour plus de coopération** : les grands problèmes (climat, pandémies, évasion fiscale) dépassent les frontières.',
          'ex. la **diversité culturelle** : le Canada et le Québec défendent le droit de protéger leur culture (quotas de contenu francophone, soutien aux œuvres).',
        ] } ],
      [ { t: 'txt', h: 'enjeu : le pouvoir des organisations internationales', p: [] },
        { t: 'list', items: [
          '**Pour plus de pouvoir** : faire respecter le droit international, coordonner les réponses aux crises, protéger les droits humains.',
          '**Contre** ou **nuances** : manque de légitimité démocratique, domination des pays puissants (veto), lenteur, bureaucratie.',
          'Pistes : réformer le Conseil de sécurité, renforcer les tribunaux internationaux.',
        ] } ],
    ] },
    { t: 'list', h: 'vocabulaire utile', items: [
      '**Gouvernance mondiale** : façon de gérer les problèmes mondiaux par la coopération entre États et organisations.',
      '**Multilatéralisme** : décisions prises à plusieurs États ; **unilatéralisme** : un État agit seul.',
      '**Protectionnisme** : mesures (tarifs, quotas) pour protéger l\'économie nationale.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Cas — le Brexit', q: 'Un État qui reprend une partie de sa souveraineté.',
      p: [ 'Par référendum en 2016, les Britanniques ont choisi de quitter l\'Union européenne (sortie effective en 2020). Les partisans voulaient « reprendre le contrôle » des lois et des frontières ; les opposants craignaient des pertes économiques et des obstacles au commerce. Un bon exemple du débat entre **souveraineté** et **coopération**.' ] },
    { t: 'ex', h: 'Structure d\'une prise de position', q: '« Les organisations internationales devraient-elles avoir plus de pouvoir sur les États ? »',
      s: [ 'position → oui, dans les domaines qui dépassent les frontières', 'argument 1 → climat, pandémies : aucun État ne peut agir seul', 'argument 2 → protéger les droits humains quand un État les viole', 'nuance → réformer le veto pour plus de légitimité', 'action → renforcer l\'OMS en cas de pandémie' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Présenter la mondialisation comme entièrement bonne ou entièrement mauvaise.',
          'Oublier la notion de légitimité démocratique.',
          'Ne pas donner d\'exemple d\'organisation ou d\'accord précis.',
        ] } ],
      [ { t: 'retenir', items: [
          'Souveraineté vs coopération.',
          'OI : efficaces pour les problèmes mondiaux, mais limitées par les États.',
          'Multilatéralisme, unilatéralisme, protectionnisme.',
        ] } ],
    ] },
  ],
},

/* ============ RICHESSE ============ */
'richesse-concepts': {
  bulle: 'richesse : concepts',
  sous: 'Thème Richesse — les concepts',
  recto: [
    { t: 'txt', p: [ 'Le thème **Richesse** étudie la production et la **répartition** de la richesse dans le monde : pourquoi certains pays et certains groupes sont-ils beaucoup plus riches que d\'autres ?' ] },
    { t: 'tab', h: 'les concepts particuliers', full: true, lcol: true,
      head: ['Concept', 'Définition (en mes mots)', 'Exemples'],
      rows: [
        ['**Disparité**', 'écart important entre des pays, des régions ou des groupes (revenus, santé, éducation)', 'Nord-Sud, villes-campagnes, hommes-femmes'],
        ['**Développement économique**', 'amélioration durable de la production et du niveau de vie d\'une population', 'industrialisation, éducation, infrastructures'],
        ['**Concentration**', 'accumulation de la richesse (ou des activités) entre peu de mains ou dans peu de lieux', 'les plus riches détiennent une grande part de la richesse mondiale'],
        ['**Justice sociale**', 'idéal d\'une répartition équitable de la richesse et des chances', 'impôt progressif, programmes sociaux, salaire minimum'],
        ['**Ressource**', 'élément (naturel, humain, financier) qui peut créer de la richesse', 'pétrole, minerais, eau, main-d\'œuvre qualifiée'],
      ] },
    { t: 'tab', h: 'mesurer la richesse et le développement', full: true, lcol: true,
      head: ['Indicateur', 'Ce qu\'il mesure'],
      rows: [
        ['**PIB** et **PIB par habitant**', 'valeur de la production d\'un pays ; divisée par la population, elle donne une moyenne par personne'],
        ['**IDH** (indice de développement humain, PNUD)', 'combine **santé** (espérance de vie), **éducation** et **niveau de vie** ; entre 0 et 1'],
        ['**Coefficient de Gini**', 'inégalité des revenus : 0 = égalité parfaite, 1 = inégalité maximale'],
      ],
      note: 'Le PIB par habitant est une moyenne : il ne montre pas les inégalités à l\'intérieur d\'un pays.' },
    { t: 'txt', p: [ '<span class="note">' + NOTE + '</span>' ] },
  ],
  verso: [
    { t: 'ex', h: 'Cas 1 — nationaliser une ressource', q: 'Hydro-Québec',
      p: [ 'Au début des années 1960, le Québec a nationalisé la plupart des compagnies privées d\'électricité. L\'État contrôle depuis cette **ressource** : les profits servent la collectivité et l\'électricité est un moteur de **développement économique**.' ] },
    { t: 'ex', h: 'Cas 2 — le paradoxe de l\'abondance', q: 'Pourquoi des pays riches en ressources restent-ils pauvres ?',
      s: [ 'richesse naturelle → exportée brute, peu transformée sur place', 'profits → concentrés entre les mains de quelques entreprises ou dirigeants', 'conséquence → disparités, corruption, parfois conflits' ] },
    { t: 'ex', h: 'Cas 3 — commerce équitable', q: 'Un moyen de réduire les disparités ?',
      p: [ 'Le commerce équitable garantit un prix minimum aux petits producteurs (café, cacao…). Il améliore leurs revenus, mais il reste une petite part du commerce mondial.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Utiliser seulement le PIB pour juger le développement.',
          'Confondre croissance (produire plus) et développement (vivre mieux).',
          'Oublier les disparités à l\'intérieur des pays riches.',
        ] } ],
      [ { t: 'retenir', items: [
          'Disparité, développement, concentration, justice sociale, ressource.',
          'IDH = santé + éducation + niveau de vie.',
          'Gini : 0 égal, 1 inégal.',
        ] } ],
    ] },
  ],
},

'richesse-enjeux': {
  bulle: 'richesse : enjeux',
  sous: 'Thème Richesse — les enjeux',
  recto: [
    { t: 'txt', p: [ 'Les enjeux de ce thème portent sur le **partage de la richesse** (comment réduire les inégalités ?) et le **contrôle des ressources** (qui doit en profiter : l\'État, les entreprises, les communautés locales ?).' ] },
    { t: 'cols', c: [
      [ { t: 'txt', h: 'enjeu : le partage de la richesse', p: [] },
        { t: 'list', items: [
          '**Moyens de redistribution** : impôts progressifs, programmes sociaux, aide internationale, annulation de dettes.',
          '**Points de vue favorables** : justice sociale, stabilité, santé et éducation pour tous.',
          '**Points de vue critiques** : risque de décourager l\'investissement, efficacité de l\'aide parfois limitée, corruption.',
          'Débats actuels : paradis fiscaux, impôt minimum mondial sur les multinationales, salaire minimum.',
        ] } ],
      [ { t: 'txt', h: 'enjeu : le contrôle des ressources', p: [] },
        { t: 'list', items: [
          '**Nationalisation** : l\'État prend le contrôle d\'une ressource (profits pour la collectivité).',
          '**Privatisation** ou **investissement étranger** : capitaux, expertise, emplois, mais profits souvent exportés.',
          'Droits des **peuples autochtones** sur les ressources de leurs territoires.',
          'Cartels de producteurs : ex. l\'**OPEP** (pays exportateurs de pétrole, fondée en 1960).',
        ] } ],
    ] },
    { t: 'tab', h: 'les acteurs', full: true, lcol: true,
      head: ['Acteur', 'Intérêt'],
      rows: [
        ['pays en développement', 'tirer plus de profits de leurs ressources ; financement du développement'],
        ['pays riches', 'accès aux ressources, commerce ouvert ; aide au développement'],
        ['multinationales', 'rentabilité, accès aux matières premières et aux marchés'],
        ['FMI, Banque mondiale', 'prêts, stabilité financière, parfois avec conditions (réformes)'],
        ['ONG, syndicats, communautés', 'conditions de travail, environnement, partage équitable'],
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Cas — les ressources et les communautés locales', q: 'Un projet minier dans le Nord québécois.',
      p: [ 'Une entreprise veut exploiter un gisement. Le gouvernement voit des **redevances** et des emplois ; l\'entreprise, des profits ; la communauté autochtone veut être **consultée**, obtenir des emplois et protéger son territoire. Les ententes sur les répercussions et les avantages cherchent à concilier ces intérêts.' ] },
    { t: 'ex', h: 'Structure d\'une prise de position', q: '« Les pays riches devraient-ils augmenter leur aide aux pays pauvres ? »',
      s: [ 'position → oui, si l\'aide est bien ciblée', 'argument 1 → justice sociale : réduire les disparités', 'argument 2 → stabilité mondiale (moins de conflits et de migrations forcées)', 'nuance → l\'aide doit être transparente et soutenir des projets locaux', 'action → financer l\'éducation et la santé, lutter contre les paradis fiscaux' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Parler de « pays pauvres » sans nuancer (pays émergents, disparités internes).',
          'Oublier les acteurs privés (multinationales).',
          'Prendre position sans proposer d\'action concrète.',
        ] } ],
      [ { t: 'retenir', items: [
          'Partage : redistribution vs incitation.',
          'Contrôle : nationalisation vs investissement privé.',
          'Toujours nommer les acteurs et leurs intérêts.',
        ] } ],
    ] },
  ],
},

/* ============ TENSIONS ET CONFLITS ============ */
'tensions-concepts': {
  bulle: 'tensions et conflits : concepts',
  sous: 'Thème Tensions et conflits — les concepts',
  recto: [
    { t: 'txt', p: [ 'Le thème **Tensions et conflits** étudie les situations où des groupes s\'opposent (parfois par les armes) et la façon dont la communauté internationale réagit : faut-il intervenir, comment et au nom de quoi ?' ] },
    { t: 'tab', h: 'les concepts particuliers', full: true, lcol: true,
      head: ['Concept', 'Définition (en mes mots)', 'Exemples'],
      rows: [
        ['**Revendication**', 'demande d\'un groupe pour obtenir un droit, un territoire, une reconnaissance', 'autonomie, indépendance, droits linguistiques'],
        ['**Intervention**', 'action d\'un ou de plusieurs acteurs extérieurs dans une situation de crise', 'mission de paix, sanctions, médiation, action militaire'],
        ['**Ingérence**', 'intervention dans les affaires internes d\'un État **sans son accord**', 'ingérence humanitaire pour protéger une population'],
        ['**Droit international**', 'règles qui encadrent les relations entre États (traités, coutumes, conventions)', 'Charte de l\'ONU, conventions de Genève'],
        ['**Aide humanitaire**', 'secours apporté aux victimes (nourriture, soins, abris), en principe neutre et impartial', 'Croix-Rouge, Médecins sans frontières, PAM'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'repères du droit international', items: [
          '**Charte de l\'ONU** (1945) : interdit en principe le recours à la force, sauf légitime défense ou autorisation du Conseil de sécurité.',
          '**Déclaration universelle des droits de l\'homme** (1948).',
          '**Conventions de Genève** : protègent les civils, les blessés et les prisonniers de guerre.',
          '**Cour pénale internationale** (CPI, 2002) : juge les génocides, crimes de guerre et crimes contre l\'humanité.',
        ] } ],
      [ { t: 'list', h: 'formes d\'intervention', items: [
          '**Diplomatique** : médiation, négociations.',
          '**Économique** : sanctions, embargo.',
          '**Maintien de la paix** : casques bleus de l\'ONU, avec l\'accord des parties.',
          '**Militaire** : autorisée ou non par le Conseil de sécurité.',
          '**Responsabilité de protéger** (2005) : si un État ne protège pas sa population d\'atrocités, la communauté internationale peut intervenir.',
        ] } ],
    ] },
    { t: 'txt', p: [ '<span class="note">' + NOTE + '</span>' ] },
  ],
  verso: [
    { t: 'ex', h: 'Cas 1 — la non-intervention', q: 'Le génocide au Rwanda (1994)',
      p: [ 'En quelques mois, environ 800 000 personnes, surtout des Tutsis, ont été tuées. La mission de l\'ONU, commandée par le Canadien Roméo Dallaire, n\'a pas reçu les moyens d\'agir. Cet échec a mené à la réflexion sur la **responsabilité de protéger**.' ] },
    { t: 'ex', h: 'Cas 2 — une intervention contestée', q: 'Le Kosovo (1999)',
      p: [ 'L\'OTAN a bombardé la Serbie pour protéger la population du Kosovo, **sans autorisation** du Conseil de sécurité (la Russie s\'y opposait). Pour certains, l\'intervention était **légitime** (raisons humanitaires) ; pour d\'autres, **illégale** (non autorisée).' ] },
    { t: 'ex', h: 'Cas 3 — une intervention autorisée', q: 'La Libye (2011)',
      p: [ 'Le Conseil de sécurité a autorisé des mesures pour protéger les civils (résolution 1973), au nom de la responsabilité de protéger. L\'intervention a ensuite été critiquée, car elle a contribué à renverser le régime et le pays est resté instable.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Confondre légal (conforme au droit) et légitime (jugé juste).',
          'Confondre intervention (avec ou sans accord) et ingérence (sans accord).',
          'Oublier les conséquences à long terme d\'une intervention.',
        ] } ],
      [ { t: 'retenir', items: [
          'Revendication, intervention, ingérence, droit international, aide humanitaire.',
          'Rwanda (non-intervention), Kosovo (sans mandat), Libye (avec mandat).',
          'Responsabilité de protéger (2005).',
        ] } ],
    ] },
  ],
},

'tensions-enjeux': {
  bulle: 'tensions et conflits : enjeux',
  sous: 'Thème Tensions et conflits — les enjeux',
  recto: [
    { t: 'txt', p: [ 'Les enjeux de ce thème portent sur la **légitimité des interventions** étrangères (quand est-il juste d\'intervenir dans un autre pays ?) et sur l\'**application du principe d\'intervention** (qui décide, avec quels moyens, et pourquoi intervient-on à certains endroits et pas à d\'autres ?).' ] },
    { t: 'cols', c: [
      [ { t: 'txt', h: 'arguments pour intervenir', p: [] },
        { t: 'list', items: [
          'Protéger des civils d\'atrocités (génocide, crimes contre l\'humanité).',
          'Devoir moral : « plus jamais ça » après le Rwanda.',
          'Stabilité régionale et mondiale ; prévenir les crises de réfugiés.',
          'Faire respecter le droit international.',
        ] } ],
      [ { t: 'txt', h: 'arguments contre ou nuances', p: [] },
        { t: 'list', items: [
          'Respect de la **souveraineté** des États.',
          'Risque d\'**intérêts cachés** (ressources, influence).',
          '**Deux poids, deux mesures** : on intervient seulement là où les grandes puissances ont des intérêts.',
          'Conséquences imprévues : instabilité, victimes civiles, occupation qui s\'éternise.',
        ] } ],
    ] },
    { t: 'tab', h: 'critères souvent proposés pour une intervention légitime', full: true, lcol: true,
      head: ['Critère', 'Question'],
      rows: [
        ['cause juste', 'y a-t-il des atrocités graves ou imminentes ?'],
        ['autorité légitime', 'le Conseil de sécurité l\'a-t-il autorisée ?'],
        ['dernier recours', 'a-t-on essayé la diplomatie et les sanctions ?'],
        ['proportionnalité', 'les moyens sont-ils limités à ce qui est nécessaire ?'],
        ['chances raisonnables de succès', 'l\'intervention améliorera-t-elle la situation ?'],
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Cas — l\'invasion de l\'Ukraine (2022)', q: 'Quand un membre permanent du Conseil de sécurité est impliqué.',
      p: [ 'La Russie a envahi l\'Ukraine, un État souverain. Comme elle possède un droit de veto, le Conseil de sécurité ne peut pas autoriser d\'action contre elle. Plusieurs pays ont plutôt imposé des **sanctions économiques** et fourni une aide militaire et humanitaire à l\'Ukraine. Ce cas montre les **limites du système** de l\'ONU.' ] },
    { t: 'ex', h: 'Structure d\'une prise de position', q: '« La communauté internationale devrait-elle intervenir militairement pour protéger une population menacée ? »',
      s: [ 'position → oui, mais seulement en dernier recours et avec l\'autorisation de l\'ONU', 'argument 1 → devoir de protéger (Rwanda : le coût de l\'inaction)', 'argument 2 → le droit international donne un cadre (responsabilité de protéger)', 'nuance → risque d\'intérêts cachés et d\'instabilité (Libye)', 'action → réformer le veto en cas d\'atrocités de masse' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Répondre « oui » ou « non » sans critères ni nuances.',
          'Donner un seul exemple : compare au moins deux situations.',
          'Confondre aide humanitaire (neutre) et intervention militaire.',
        ] } ],
      [ { t: 'retenir', items: [
          'Légitimité : cause juste, autorité, dernier recours, proportionnalité.',
          'Veto → limites de l\'ONU.',
          'Comparer plusieurs cas.',
        ] } ],
    ] },
  ],
},

/* ============ MÉTHODE ============ */
interpreter: {
  bulle: 'interpréter un problème',
  sous: 'Compétence 1 — Interpréter un problème du monde contemporain',
  recto: [
    { t: 'txt', p: [ 'Interpréter un problème, c\'est **comprendre en profondeur** une situation mondiale : ses causes, ses conséquences, les acteurs impliqués et leurs points de vue. On ne donne pas encore son opinion.' ] },
    { t: 'list', h: 'la démarche', items: [
      '**1. Cerner le problème** : de quoi parle-t-on ? Où ? Depuis quand ? Qui est touché ?',
      '**2. Établir les faits** : chiffres, dates, événements, à partir de sources fiables.',
      '**3. Considérer le contexte** : dans l\'**espace** (échelles locale, nationale, mondiale) et dans le **temps** (origines historiques, évolution).',
      '**4. Analyser** : **causes** (économiques, politiques, sociales, environnementales) et **conséquences**.',
      '**5. Examiner les acteurs** : qui sont-ils ? Quels sont leurs **intérêts**, leurs **valeurs**, leurs **points de vue** ?',
      '**6. Comparer** avec des situations semblables ailleurs dans le monde.',
      '**7. Dégager les enjeux** : sur quoi les acteurs sont-ils en désaccord ?',
    ] },
    { t: 'cols', c: [
      [ { t: 'tab', h: 'types de causes (facteurs)', full: true, lcol: true,
          head: ['Type', 'Exemples'],
          rows: [
            ['économique', 'pauvreté, chômage, commerce'],
            ['politique', 'régime, lois, conflits, corruption'],
            ['social', 'éducation, santé, démographie'],
            ['environnemental', 'climat, ressources, catastrophes'],
            ['culturel', 'langue, religion, identité'],
          ] } ],
      [ { t: 'list', h: 'échelles d\'analyse', items: [
          '**Locale** : une ville, une communauté.',
          '**Nationale** : un pays (le Québec, le Canada).',
          '**Internationale** : plusieurs pays, une région du monde.',
          '**Mondiale** : toute la planète.',
          'Un bon travail montre les **liens** entre les échelles.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple guidé —', q: 'Problème : la pénurie d\'eau potable dans certaines régions du monde.',
      s: [ 'faits → une partie importante de l\'humanité n\'a pas accès à une eau potable gérée en toute sécurité (ONU)', 'causes → climat aride, pollution, croissance urbaine, manque d\'infrastructures', 'conséquences → maladies, conflits d\'usage, migrations', 'acteurs → États, villes, entreprises (agriculture, embouteillage), ONG, ONU', 'comparaison → sécheresses en Afrique de l\'Est vs réserves abondantes du Québec', 'enjeu → l\'eau doit-elle être un bien commun ou une marchandise ?' ] },
    { t: 'ex', h: 'Formulations utiles', q: '',
      p: [ '« Ce problème s\'explique d\'abord par… » · « Il a pour conséquence… » · « Du point de vue de…, il faut… alors que… estime plutôt que… » · « Une situation comparable s\'observe en… »' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Donner son opinion dès le début : ici, on analyse.',
          'Nommer des causes sans les expliquer.',
          'Oublier le contexte historique.',
          'Présenter un seul point de vue.',
        ] } ],
      [ { t: 'retenir', items: [
          'Faits → contexte → causes et conséquences → acteurs → comparaison → enjeu.',
          'Plusieurs échelles, plusieurs points de vue.',
        ] } ],
    ] },
  ],
},

'prendre-position': {
  bulle: 'prendre position',
  sous: 'Compétence 2 — Prendre position sur un enjeu du monde contemporain',
  recto: [
    { t: 'txt', p: [ 'Prendre position, c\'est **choisir** une option sur un enjeu et la **justifier** avec des arguments fondés sur des faits, en tenant compte des autres points de vue.' ] },
    { t: 'list', h: 'la démarche', items: [
      '**1. Cerner l\'enjeu** : le formuler comme une question (« Faut-il… ? », « Devrait-on… ? »).',
      '**2. Examiner les positions** des acteurs : qui est pour, qui est contre, et pourquoi (intérêts, valeurs) ?',
      '**3. Considérer des options** : quelles actions sont possibles ? Quels en seraient les avantages et les limites ?',
      '**4. Choisir** sa position.',
      '**5. Défendre** sa position : arguments, faits, exemples, sources.',
      '**6. Nuancer** : reconnaître les limites de sa position ou un bon argument de l\'autre côté.',
    ] },
    { t: 'cols', c: [
      [ { t: 'box', h: 'plan d\'un texte de prise de position', f: 'introduction (enjeu + position) → 2 ou 3 arguments avec faits et exemples → contre-argument et réponse → conclusion (rappel + action proposée)' } ],
      [ { t: 'list', h: 'un bon argument…', items: [
          'est **fondé** sur des faits vérifiables ;',
          'est **pertinent** (lié à l\'enjeu) ;',
          'cite une **source** fiable ;',
          'donne un **exemple** précis (lieu, date, acteur).',
        ] } ],
    ] },
    { t: 'list', h: 'valeurs souvent en jeu', items: [
      'justice, égalité, liberté, sécurité, solidarité, souveraineté, respect de l\'environnement, prospérité.',
      'Nommer la **valeur** qui guide ta position rend ton argumentation plus forte.',
    ] },
  ],
  verso: [
    { t: 'cite', h: 'Exemple de paragraphe argumentatif', p: [
      'Je crois que les normes environnementales devraient être harmonisées à l\'échelle internationale. D\'abord, la pollution ne s\'arrête pas aux frontières : les gaz à effet de serre émis par un pays réchauffent toute la planète. Le protocole de Montréal a d\'ailleurs montré qu\'une règle commune pouvait réussir, puisque la couche d\'ozone se rétablit depuis que les CFC ont été interdits presque partout. Certes, les pays en développement craignent de freiner leur croissance ; c\'est pourquoi les pays riches devraient les aider à financer leur transition.',
    ] },
    { t: 'ex', h: 'Analyse :', q: '',
      s: [ '« Je crois que… » → position claire', '« la pollution ne s\'arrête pas… » → argument', '« Le protocole de Montréal… » → fait et exemple précis', '« Certes… c\'est pourquoi… » → nuance et solution' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Opinion sans faits (« je pense que c\'est mieux »).',
          'Ignorer complètement les autres positions.',
          'Exemple vague (« dans certains pays… ») : nomme le pays, la date.',
          'Proposer une action irréaliste.',
        ] } ],
      [ { t: 'retenir', items: [
          'Enjeu → positions → options → choix → justification → nuance.',
          'Faits + exemples + sources.',
          'Nommer les valeurs.',
        ] } ],
    ] },
  ],
},

sources: {
  bulle: 'analyser des sources',
  sous: 'Analyser des documents et des sources',
  recto: [
    { t: 'tab', h: 'évaluer la fiabilité d\'une source', full: true, lcol: true,
      head: ['Critère', 'Questions à se poser'],
      rows: [
        ['**Auteur**', 'Qui a écrit ou produit le document ? Est-il compétent (expert, journaliste, organisme reconnu) ?'],
        ['**Date**', 'Le document est-il récent ? La situation a-t-elle changé depuis ?'],
        ['**Provenance**', 'Où est-il publié (média reconnu, site officiel, blogue, réseau social) ?'],
        ['**Intention**', 'Informer, convaincre, vendre, divertir ? L\'auteur a-t-il un intérêt particulier ?'],
        ['**Corroboration**', 'D\'autres sources fiables disent-elles la même chose ?'],
        ['**Faits ou opinions**', 'Distingue-t-on clairement les faits vérifiables des jugements ?'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'types de documents', items: [
          '**Textes** : articles, rapports, lettres ouvertes, discours.',
          '**Cartes** : titre, légende, échelle, date.',
          '**Graphiques** et **tableaux** : titre, unités, source, période.',
          '**Caricatures** : message critique ; repérer symboles, exagérations, personnages.',
          '**Photos**, **vidéos** : cadrage, contexte, possibilité de montage.',
        ] } ],
      [ { t: 'list', h: 'se méfier de…', items: [
          '**Fausses nouvelles** et contenus truqués (images modifiées, hors contexte, générées par IA).',
          'Titres **sensationnalistes**.',
          'Chiffres sans source.',
          '**Biais de confirmation** : on croit plus facilement ce qui confirme nos idées.',
          'Organisme au nom neutre qui défend en fait des intérêts précis.',
        ] } ],
    ] },
    { t: 'list', h: 'lire un graphique ou une carte', items: [
      '1. Titre, source, date. 2. Axes, unités, légende. 3. Tendance générale. 4. Valeurs extrêmes ou exceptions. 5. Lien avec le problème étudié.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Deux sources sur la même question : un rapport d\'un organisme de l\'ONU et une publication virale sans auteur sur un réseau social. Laquelle privilégier ?',
      s: [ 'rapport → auteur identifié, méthode expliquée, date précise', 'publication virale → aucun auteur, aucune source, intention inconnue', 'conclusion → privilégier le rapport et chercher une 2<sup>e</sup> source qui confirme' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Une association d\'une industrie publie une étude affirmant que son produit est sans danger. Que faut-il vérifier ?',
      p: [ 'L\'**intention** et les **intérêts** de l\'auteur : l\'étude a pu être financée pour défendre le produit. On cherche des études **indépendantes** pour corroborer.' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Analyser une caricature (démarche).',
      s: [ 'décrire → personnages, objets, texte', 'identifier → symboles et exagérations', 'contexte → à quel événement fait-elle référence ?', 'message → quelle critique fait le caricaturiste ?' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Croire un document parce qu\'il est partagé souvent.',
          'Citer sans nommer la source.',
          'Utiliser des données trop vieilles.',
        ] } ],
      [ { t: 'retenir', items: [
          'Auteur, date, provenance, intention, corroboration.',
          'Fait ≠ opinion.',
          'Toujours croiser au moins deux sources.',
        ] } ],
    ] },
  ],
},

organisations: {
  bulle: 'organisations internationales',
  sous: 'Les organisations internationales à connaître',
  recto: [
    { t: 'tab', full: true, lcol: true,
      head: ['Organisation', 'Rôle', 'Thème lié'],
      rows: [
        ['**ONU** (Organisation des Nations unies, 1945)', 'paix et sécurité, droits humains, coopération ; 193 membres', 'Pouvoir, Tensions'],
        ['**Conseil de sécurité** de l\'ONU', 'maintien de la paix ; 5 membres permanents avec veto', 'Tensions, Pouvoir'],
        ['**OMS**', 'santé mondiale (pandémies, vaccination)', 'Population'],
        ['**HCR**', 'protection des réfugiés', 'Population, Tensions'],
        ['**UNESCO**', 'éducation, science, culture ; patrimoine mondial', 'Population'],
        ['**PNUE**, **GIEC**', 'environnement ; experts qui évaluent la science du climat', 'Environnement'],
        ['**OMC** (1995)', 'règles du commerce international ; règlement des différends', 'Richesse, Pouvoir'],
        ['**FMI**', 'stabilité financière ; prêts aux pays en difficulté', 'Richesse'],
        ['**Banque mondiale**', 'prêts et projets de développement', 'Richesse'],
        ['**OCDE**', 'analyses et recommandations économiques (pays surtout développés)', 'Richesse'],
        ['**OTAN** (1949)', 'alliance militaire ; défense collective (une attaque contre un membre = contre tous)', 'Tensions'],
        ['**Union européenne**', 'union politique et économique de 27 pays', 'Pouvoir'],
        ['**G7**, **G20**', 'rencontres des grandes économies pour coordonner leurs politiques', 'Pouvoir, Richesse'],
        ['**OPEP**', 'pays exportateurs de pétrole qui coordonnent leur production', 'Richesse'],
        ['**CPI**', 'juge les génocides, crimes de guerre et crimes contre l\'humanité', 'Tensions'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'ONG à connaître', items: [
          '**Croix-Rouge** : aide humanitaire, droit des conflits.',
          '**Médecins sans frontières** : soins en zones de crise.',
          '**Amnistie internationale** : droits de la personne.',
          '**Greenpeace**, **WWF** : environnement.',
        ] } ],
      [ { t: 'list', h: 'accords à connaître', items: [
          'Protocole de Montréal (1987) · Kyoto (1997) · Paris (2015).',
          'Déclaration universelle des droits de l\'homme (1948).',
          'Conventions de Genève ; Convention sur les réfugiés (1951).',
          'ACEUM (Canada–États-Unis–Mexique, 2020).',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Quelle organisation est la plus pertinente ?',
      s: [ 'une pandémie mondiale → OMS', 'un différend commercial entre deux pays → OMC', 'un pays au bord de la faillite → FMI', 'des milliers de réfugiés à une frontière → HCR', 'un dirigeant accusé de crimes contre l\'humanité → CPI' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'ONU ou ONG : quelle différence ?',
      p: [ 'L\'ONU est une organisation **intergouvernementale** : ses membres sont des États. Une **ONG** est indépendante des gouvernements : elle est formée de citoyens et financée surtout par des dons.' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Pourquoi l\'OTAN n\'est-elle pas une agence de l\'ONU ?',
      p: [ 'C\'est une **alliance militaire** entre certains pays (Amérique du Nord et Europe surtout), créée par un traité séparé. Elle peut toutefois agir avec un mandat de l\'ONU.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Confondre FMI (stabilité financière) et Banque mondiale (développement).',
          'Confondre OMC (commerce) et OMS (santé).',
          'Croire que l\'ONU a une armée permanente : les casques bleus sont fournis par les États.',
        ] } ],
      [ { t: 'retenir', items: [
          'ONU, OMS, HCR, OMC, FMI, OTAN, UE, CPI.',
          'Intergouvernemental ≠ ONG.',
          'Associer chaque organisation à un thème.',
        ] } ],
    ] },
  ],
},

/* ============ GÉNÉRAL ============ */
general: {
  bulle: 'monde contemporain : tout en 1',
  sous: 'Résumé de l\'année — Monde contemporain, secondaire 5',
  recto: [
    { t: 'tab', h: 'les 5 thèmes', full: true, lcol: true,
      head: ['Thème', 'Concepts particuliers', 'Enjeux'],
      rows: [
        ['**Environnement**', 'consommation, développement durable, gestion, responsabilité, réglementation', 'harmonisation des normes environnementales ; utilisation et consommation des ressources'],
        ['**Population**', 'migration, urbanisation, diversité culturelle, réseau, délocalisation', 'gestion des migrations ; défis de l\'urbanisation'],
        ['**Pouvoir**', 'État, souveraineté, mondialisation, institution internationale, accord international', 'capacité d\'action des États ; pouvoir des organisations internationales'],
        ['**Richesse**', 'disparité, développement économique, concentration, justice sociale, ressource', 'partage de la richesse ; contrôle des ressources'],
        ['**Tensions et conflits**', 'revendication, intervention, ingérence, droit international, aide humanitaire', 'légitimité des interventions ; application du principe d\'intervention'],
      ],
      note: NOTE },
    { t: 'cols', c: [
      [ { t: 'list', h: 'compétence 1 : interpréter', items: [
          'Faits → contexte (espace et temps) → causes et conséquences → acteurs et intérêts → comparaison → enjeu.',
          'On analyse, on ne donne pas encore son opinion.',
        ] } ],
      [ { t: 'list', h: 'compétence 2 : prendre position', items: [
          'Enjeu → positions des acteurs → options → choix → arguments fondés → nuance → action proposée.',
          'Nommer les valeurs en jeu.',
        ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'repères clés', items: [
          'ONU (1945) ; Conseil de sécurité : 5 membres permanents avec veto.',
          'Montréal (1987), Kyoto (1997), Paris (2015).',
          'Rwanda (1994), Kosovo (1999), Libye (2011), Ukraine (2022).',
          'Responsabilité de protéger (2005) ; CPI (2002).',
        ] } ],
      [ { t: 'list', h: 'indicateurs', items: [
          'PIB par habitant : moyenne de la production par personne.',
          'IDH : santé + éducation + niveau de vie.',
          'Gini : 0 = égalité, 1 = inégalité maximale.',
          'Plus de la moitié de l\'humanité vit en ville.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Méthode rapide pour toute question d\'examen', q: '',
      s: [ '1. Quel thème ? quels concepts ?', '2. Quels faits (lieu, date, chiffres) ?', '3. Quels acteurs et quels intérêts ?', '4. Quelles causes et conséquences ?', '5. Quel enjeu ? quelles positions ?', '6. Ma position, justifiée et nuancée' ] },
    { t: 'cols', c: [
      [ { t: 'ex', h: 'Légal ou légitime ?', q: 'Kosovo (1999)', p: [ 'Non autorisé par l\'ONU (légalité contestée), mais défendu pour des raisons humanitaires (légitimité).' ] },
        { t: 'ex', h: 'Souveraineté —', q: 'Brexit', p: [ 'Reprendre le contrôle des lois vs perdre des avantages de la coopération.' ] } ],
      [ { t: 'ex', h: 'Ressource —', q: 'Hydro-Québec', p: [ 'Nationalisation au début des années 1960 : contrôle collectif d\'une ressource.' ] },
        { t: 'ex', h: 'Réglementation —', q: 'Protocole de Montréal', p: [ 'Exemple d\'accord international efficace (couche d\'ozone).' ] } ],
    ] },
    { t: 'pieges', items: [
      'Donner une opinion quand on demande d\'interpréter (et l\'inverse).',
      'Rester vague : nommer des pays, des dates, des organisations.',
      'Oublier les intérêts et les points de vue des différents acteurs.',
      'Confondre légal et légitime ; intervention et ingérence ; ONU et ONG.',
      'Utiliser des sources non fiables ou non vérifiées.',
    ] },
    { t: 'retenir', items: [
      'Chaque thème = concepts + 2 enjeux + exemples actuels.',
      'Suis l\'actualité : les exemples récents enrichissent tes réponses (vérifie-les dans des sources fiables).',
      'Un enjeu a toujours plusieurs réponses défendables : c\'est la qualité de la justification qui compte.',
    ] },
  ],
},

};
})();
