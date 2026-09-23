/* Français — Littérature */
Object.assign(DATA.feuilles['francais'], {

/* ============ 12. Figures de style ============ */
'figures-style': {
  bulle: 'figures de style',
  sous: 'Les figures de style',
  recto: [
    { t: 'txt', p: [ 'Une **figure de style** est une façon particulière d\'utiliser les mots pour créer un effet : rendre une idée plus frappante, plus belle, plus drôle ou plus émouvante.' ] },
    { t: 'tab', full: true, lcol: true,
      head: ['Figure', 'Définition', 'Exemple'],
      rows: [
        ['**Comparaison**', 'rapproche deux réalités **avec un outil** (comme, tel, pareil à, ressembler à)', 'Ses yeux brillaient __comme__ des lanternes.'],
        ['**Métaphore**', 'rapproche deux réalités **sans outil** de comparaison', 'Ses yeux étaient des lanternes.'],
        ['**Personnification**', 'donne des traits humains à un objet, un animal, une idée', 'Le vent __gémissait__ dans la cheminée.'],
        ['**Hyperbole**', 'exagère pour frapper l\'esprit', 'Je te l\'ai dit mille fois !'],
        ['**Litote**', 'dit moins pour faire entendre plus', 'Ce n\'est pas mauvais. (= c\'est très bon)'],
        ['**Euphémisme**', 'adoucit une réalité pénible', 'Il nous a quittés. (= il est mort)'],
        ['**Antithèse**', 'oppose deux idées dans une même phrase', 'Il fait __chaud__ le jour et __froid__ la nuit.'],
        ['**Oxymore**', 'unit deux mots de sens contraires', 'un __silence assourdissant__'],
        ['**Gradation**', 'suite de termes d\'intensité croissante (ou décroissante)', 'Je marche, je cours, je vole !'],
        ['**Énumération**, accumulation', 'suite de termes de même nature', 'Des livres, des crayons, des cartables traînaient partout.'],
        ['**Anaphore**', 'répétition d\'un mot en début de phrase ou de vers', '__Nous__ voulons… __Nous__ exigeons… __Nous__ refusons…'],
        ['**Ironie**', 'dire le contraire de ce qu\'on pense', 'Bravo, quel beau travail ! (devant un désastre)'],
        ['**Métonymie**', 'désigne une chose par une autre qui lui est liée', 'boire un __verre__ ; lire un __Tremblay__'],
        ['**Périphrase**', 'remplace un mot par une expression qui le décrit', 'l\'astre du jour (= le soleil)'],
        ['**Question rhétorique**', 'question qui n\'attend pas de réponse', 'Qui oserait dire le contraire ?'],
        ['**Allitération** / **assonance**', 'répétition d\'un son consonne / voyelle', 'Le vent siffle sans cesse sur les sapins. (son « s »)'],
      ] },
    { t: 'list', h: 'analyser une figure : 3 étapes', items: [
      '1. **Relever** l\'extrait exact.',
      '2. **Nommer** la figure.',
      '3. **Expliquer l\'effet** : qu\'est-ce qu\'elle fait ressentir ou comprendre ?',
    ] },
  ],
  verso: [
    { t: 'cite', h: 'Extrait à analyser', p: [
      '(1) La ville dormait sous une couverture de neige. (2) Les réverbères, comme des sentinelles fatiguées, veillaient sur les rues désertes. (3) Au loin, un chien aboya, puis hurla, puis se tut. (4) Dans cette nuit à la fois douce et cruelle, Marie avançait, seule.',
    ] },
    { t: 'ex', h: 'Analyse :', q: '',
      s: [ '(1) « La ville dormait » → personnification // la ville semble paisible, vivante', '(1) « une couverture de neige » → métaphore // la neige protège et enveloppe', '(2) « comme des sentinelles fatiguées » → comparaison (+ personnification)', '(3) « aboya, puis hurla, puis se tut » → gradation // tension, puis silence inquiétant', '(4) « douce et cruelle » → antithèse // émotions contradictoires de Marie' ] },
    { t: 'ex', h: 'Modèle de réponse complète :', q: '',
      p: [ '« Dans la phrase 2, l\'auteur utilise une **comparaison** (« comme des sentinelles fatiguées ») : les réverbères semblent protéger la ville, mais leur fatigue crée une atmosphère triste et lourde. »' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Confondre comparaison (avec « comme ») et métaphore (sans outil).',
          'Nommer la figure sans expliquer son effet.',
          'Confondre antithèse (deux idées opposées) et oxymore (deux mots opposés collés).',
          'Voir une comparaison dans toute phrase avec « comme » : « comme il pleuvait » exprime une cause.',
        ] } ],
      [ { t: 'retenir', items: [
          'Relever, nommer, expliquer l\'effet.',
          'Comparaison = outil ; métaphore = sans outil.',
          'Hyperbole ↑ ; litote et euphémisme ↓.',
        ] } ],
    ] },
  ],
},

/* ============ 13. Univers narratif ============ */
'univers-narratif': {
  bulle: 'univers narratif',
  sous: 'L\'univers narratif : roman et nouvelle',
  recto: [
    { t: 'cols', c: [
      [ { t: 'list', h: 'le schéma narratif', items: [
          '**Situation initiale** : personnages, lieu, époque, équilibre de départ.',
          '**Élément déclencheur** : ce qui brise l\'équilibre.',
          '**Déroulement** : péripéties, actions pour résoudre le problème.',
          '**Dénouement** : l\'événement qui règle (ou non) le problème.',
          '**Situation finale** : le nouvel équilibre.',
        ] },
        { t: 'list', h: 'roman ou nouvelle ?', items: [
          '**Nouvelle** : texte court, peu de personnages, une seule intrigue, souvent une **chute** (fin surprenante).',
          '**Roman** : texte long, plusieurs intrigues et personnages, évolution des personnages.',
          'Genres : policier, fantastique, science-fiction, historique, d\'apprentissage, psychologique…',
        ] } ],
      [ { t: 'tab', h: 'le narrateur', full: true, lcol: true,
          head: ['Narrateur', 'Indices'],
          rows: [
            ['**participant** (personnage)', 'raconte à la 1<sup>re</sup> personne (je) : il est le héros ou un témoin'],
            ['**omniscient**', '3<sup>e</sup> personne ; sait tout : pensées de tous, passé, avenir'],
            ['**témoin** (externe)', '3<sup>e</sup> personne ; raconte seulement ce qu\'on peut voir et entendre'],
          ] },
        { t: 'list', h: 'les personnages', items: [
          '**Principal** (héros), **secondaires**, **figurants** ; adjuvants (aident) et opposants (nuisent).',
          'Caractérisation **physique** et **psychologique**, directe (le narrateur la décrit) ou indirecte (par les actions, les paroles).',
        ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'le temps du récit', items: [
          '**Ordre** : chronologique, ou avec **retour en arrière** (analepse) ou **anticipation** (prolepse).',
          '**Rythme** : scène (temps réel), sommaire (résumé), ellipse (saut dans le temps), pause (description).',
          '**Temps verbaux** : passé simple (actions de premier plan) et imparfait (arrière-plan, description), ou présent de narration.',
        ] } ],
      [ { t: 'list', h: 'autres éléments', items: [
          '**Lieux** : réels ou imaginaires ; ils créent une atmosphère.',
          '**Thèmes** : les grandes idées abordées (amitié, deuil, liberté…).',
          '**Valeurs** véhiculées et **vision du monde** de l\'œuvre.',
          '**Point de vue** du narrateur : engagé ou distancié.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'cite', h: 'Extrait à analyser', p: [
      'Depuis trois semaines, Olivier n\'adressait plus la parole à personne. Ce matin-là pourtant, en ouvrant son casier, il découvrit une enveloppe jaune. Il la déchira d\'un geste nerveux. À l\'intérieur, une seule phrase : « Je sais ce qui s\'est passé au chalet. » Son cœur se mit à battre plus fort ; il savait déjà qui l\'avait écrite.',
    ] },
    { t: 'ex', h: 'Analyse :', q: '',
      s: [ 'narrateur → omniscient // 3<sup>e</sup> personne, connaît les pensées d\'Olivier (« il savait déjà »)', '« Depuis trois semaines… » → situation initiale // imparfait = arrière-plan', '« Ce matin-là pourtant… il découvrit » → élément déclencheur // passé simple', '« au chalet » → allusion à un événement passé // retour en arrière possible', 'caractérisation indirecte → « geste nerveux », « cœur … plus fort » // anxiété' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Récrire la 1<sup>re</sup> phrase avec un narrateur participant.',
      r: '« Depuis trois semaines, je n\'adressais plus la parole à personne. »' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Confondre l\'auteur (personne réelle) et le narrateur (voix qui raconte).',
          'Dire « omniscient » simplement parce que le texte est à la 3<sup>e</sup> personne : il faut qu\'il connaisse les pensées.',
          'Résumer l\'histoire au lieu d\'analyser les procédés.',
        ] } ],
      [ { t: 'retenir', items: [
          'Schéma : SI, ED, déroulement, dénouement, SF.',
          'Narrateur : participant, omniscient ou témoin.',
          'Toujours justifier avec une citation.',
        ] } ],
    ] },
  ],
},

/* ============ 14. Poésie ============ */
poesie: {
  bulle: 'la poésie',
  sous: 'La poésie : versification, rimes et strophes',
  recto: [
    { t: 'cols', c: [
      [ { t: 'list', h: 'le vers et la strophe', items: [
          '**Vers** : une ligne du poème. **Strophe** : un groupe de vers séparé par un blanc.',
          'Strophes : **distique** (2 vers), **tercet** (3), **quatrain** (4), **quintil** (5), **sizain** (6).',
          '**Mètre** : nombre de syllabes d\'un vers : **alexandrin** (12), **décasyllabe** (10), **octosyllabe** (8).',
        ] },
        { t: 'list', h: 'compter les syllabes', items: [
          'Le **e muet** compte devant une **consonne** : « bel/le/ ro/se » → 4.',
          'Il ne compte **pas** devant une voyelle (élision) ni en **fin de vers**.',
          '**Diérèse** : on sépare deux voyelles pour allonger (li-on). **Synérèse** : on les unit (lion).',
        ] } ],
      [ { t: 'tab', h: 'les rimes', full: true, lcol: true,
          head: ['Disposition', 'Schéma'],
          rows: [
            ['**plates** (suivies)', 'AABB'],
            ['**croisées**', 'ABAB'],
            ['**embrassées**', 'ABBA'],
          ] },
        { t: 'list', items: [
          '**Richesse** : pauvre (1 son commun), suffisante (2), riche (3 et plus).',
          '**Genre** : **féminine** si elle finit par un e muet (branches), **masculine** sinon (doré).',
        ] } ],
    ] },
    { t: 'tab', h: 'formes de poèmes', full: true, lcol: true,
      head: ['Forme', 'Caractéristiques'],
      rows: [
        ['**Sonnet**', 'forme fixe : 2 quatrains + 2 tercets (14 vers), souvent en alexandrins'],
        ['**Poème en vers réguliers**', 'mètre et rimes constants'],
        ['**Vers libres**', 'longueurs variées, rimes facultatives (très fréquent en poésie québécoise contemporaine)'],
        ['**Poème en prose**', 'pas de vers : des paragraphes, mais un travail poétique des images et du rythme'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'effets de rythme', items: [
          '**Enjambement** : la phrase continue sur le vers suivant.',
          '**Rejet** : un mot court rejeté au début du vers suivant, mis en valeur.',
          '**Césure** : pause au milieu de l\'alexandrin (6 + 6).',
        ] } ],
      [ { t: 'list', h: 'analyser un poème', items: [
          'Thème, émotion, ton (lyrique, mélancolique…).',
          'Champs lexicaux, figures de style, sonorités.',
          'Lien entre la forme et le sens.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'cite', h: 'Quatrain à analyser', p: [
      'Le vent du soir berce les branches,<br>Sur le lac dort un ciel doré ;<br>Les étoiles, fragiles et blanches,<br>Brillent sur le bois coloré.',
    ] },
    { t: 'ex', h: 'Compter les syllabes :', q: '',
      s: [ 'Le / vent / du / soir / ber / ce / les / bran(ches) → 8 // « ches » final ne compte pas', 'Sur / le / lac / dort / un / ciel / do / ré → 8', 'Les / é / toi / les / fra / gi / l(es)‿et / blan(ches) → 8 // élision devant « et »', 'Bril / lent / sur / le / bois / co / lo / ré → 8' ],
      r: 'des octosyllabes' },
    { t: 'ex', h: 'Rimes :', q: '',
      s: [ 'branches (A) · doré (B) · blanches (A) · coloré (B) → rimes croisées ABAB', 'branches / blanches → rimes féminines // e muet', 'doré / coloré → rimes masculines', 'doré / coloré → sons « o-ré » : rime suffisante' ] },
    { t: 'ex', h: 'Sens :', q: '',
      p: [ '« Le vent … berce » et « dort un ciel » sont des **personnifications** : la nature semble douce et protectrice. Le champ lexical de la lumière (doré, étoiles, blanches, brillent) crée une atmosphère paisible.' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Compter le e muet final du vers.',
          'Oublier l\'élision d\'un e devant une voyelle.',
          'Dire « rime riche » dès que deux mots riment.',
        ] } ],
      [ { t: 'retenir', items: [
          '12 = alexandrin, 10 = décasyllabe, 8 = octosyllabe.',
          'AABB plates, ABAB croisées, ABBA embrassées.',
          'Forme + figures + sonorités = sens.',
        ] } ],
    ] },
  ],
},

/* ============ 15. Théâtre ============ */
theatre: {
  bulle: 'le théâtre',
  sous: 'Le texte de théâtre',
  recto: [
    { t: 'txt', p: [ 'Le **texte dramatique** est écrit pour être **joué** devant un public. Il n\'y a pas de narrateur : l\'histoire avance par les **paroles** des personnages et les **indications** de l\'auteur.' ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'le vocabulaire du théâtre', items: [
          '**Réplique** : ce que dit un personnage à son tour de parole.',
          '**Tirade** : une longue réplique.',
          '**Monologue** : un personnage seul sur scène parle à voix haute.',
          '**Aparté** : réplique que le public entend, mais pas les autres personnages.',
          '**Didascalies** : indications de l\'auteur (en italique ou entre parenthèses) sur les gestes, le ton, le décor.',
          '**Actes** et **scènes** : divisions de la pièce (nouvelle scène = entrée ou sortie d\'un personnage).',
          '**Quiproquo** : un personnage en prend un autre pour quelqu\'un d\'autre (malentendu).',
        ] } ],
      [ { t: 'list', h: 'la double énonciation', items: [
          'Un personnage parle à un autre personnage…',
          '… mais l\'auteur s\'adresse en même temps au **public**, qui en sait souvent plus que les personnages.',
        ] },
        { t: 'tab', h: 'les grands genres', full: true, lcol: true,
          head: ['Genre', 'Caractéristiques'],
          rows: [
            ['**Tragédie**', 'personnages nobles, destin fatal, fin malheureuse'],
            ['**Comédie**', 'faire rire, critiquer les travers de la société, fin heureuse'],
            ['**Drame**', 'mélange de sérieux et de comique, personnages ordinaires'],
          ] } ],
    ] },
    { t: 'list', h: 'analyser un extrait de théâtre', items: [
      'Qui parle à qui ? Quelle est la **relation** entre les personnages (conflit, complicité) ?',
      'Que révèlent les **didascalies** (émotions, tension) ?',
      'Quel est le **registre** (comique, tragique, dramatique) ? Relever les procédés : quiproquo, répétitions, jeux de mots, exagérations.',
      'Au Québec, plusieurs pièces utilisent la langue **familière** ou le **joual** pour peindre des personnages réalistes.',
    ] },
  ],
  verso: [
    { t: 'cite', h: 'Extrait (scène inventée pour l\'exemple)', p: [
      '<b>JULIE</b>, <i>entrant en coup de vent</i>. — Maman, j\'ai eu mon permis !',
      '<b>LA MÈRE</b>, <i>sans lever les yeux de son journal</i>. — C\'est bien, ma chouette.',
      '<b>JULIE</b>, <i>à part</i>. — Elle n\'a rien entendu, comme d\'habitude.',
      '<i>(Elle dépose bruyamment les clés de l\'auto sur la table.)</i>',
      '<b>LA MÈRE</b>, <i>se levant d\'un bond</i>. — Quoi ? Tu as pris MON auto ?',
    ] },
    { t: 'ex', h: 'Analyse :', q: '',
      s: [ '« entrant en coup de vent » → didascalie // excitation de Julie', '« sans lever les yeux » → didascalie // indifférence de la mère', '« à part » → aparté // le public partage la frustration de Julie', '« se levant d\'un bond » → didascalie // retournement comique', '« MON auto » → majuscules // insistance, colère' ],
      r: 'registre comique : contraste entre l\'indifférence et la réaction finale' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier que les didascalies ne sont pas dites par les acteurs.',
          'Confondre monologue (seul sur scène) et tirade (longue réplique devant d\'autres).',
          'Chercher un narrateur : il n\'y en a pas au théâtre.',
        ] } ],
      [ { t: 'retenir', items: [
          'Répliques + didascalies = texte de théâtre.',
          'Aparté : seul le public entend.',
          'Double énonciation : on parle aussi au public.',
        ] } ],
    ] },
  ],
},

/* ============ 16. Appréciation critique ============ */
appreciation: {
  bulle: 'appréciation critique',
  sous: 'L\'appréciation critique d\'une œuvre',
  recto: [
    { t: 'txt', p: [ 'Une **appréciation critique** donne un **jugement** justifié sur une œuvre (roman, film, pièce, chanson). Elle ne se contente pas de dire « j\'ai aimé » : elle s\'appuie sur des **critères** et des **exemples** tirés de l\'œuvre.' ] },
    { t: 'tab', h: 'critères d\'appréciation', full: true, lcol: true,
      head: ['Aspect', 'Questions à se poser'],
      rows: [
        ['**Intrigue**', 'Est-elle originale, captivante, vraisemblable ? Le rythme est-il bon ?'],
        ['**Personnages**', 'Sont-ils crédibles, attachants, nuancés ? Évoluent-ils ?'],
        ['**Thèmes** et valeurs', 'Sont-ils actuels, profonds ? Font-ils réfléchir ?'],
        ['**Style** (écriture)', 'Vocabulaire, figures de style, dialogues, niveau de langue : efficaces ?'],
        ['**Structure**', 'Ordre des événements, fin (surprenante, satisfaisante ?)'],
        ['**Effet** sur le lecteur', 'Émotions ressenties, suspense, humour.'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'structure du texte', items: [
          '**Introduction** : présentation de l\'œuvre (titre, auteur, genre, bref résumé sans dévoiler la fin) + **appréciation générale**.',
          '**Développement** : un paragraphe par **critère** : jugement → justification → exemple ou **citation** de l\'œuvre.',
          '**Conclusion** : rappel de l\'appréciation, **recommandation** (à qui ?).',
        ] } ],
      [ { t: 'list', h: 'vocabulaire appréciatif', items: [
          'Mélioratif : captivant, touchant, habile, percutant, nuancé, poignant.',
          'Péjoratif : prévisible, invraisemblable, superficiel, lourd, décousu.',
          'Nuancer : « malgré quelques longueurs… », « bien que la fin soit prévisible… ».',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'cite', h: 'Exemple de paragraphe de développement', p: [
      '__Les personnages du roman sont particulièrement attachants.__ __En effet, l\'autrice prend le temps de montrer les doutes et les contradictions de sa narratrice : celle-ci veut aider son frère, mais elle lui en veut aussi de l\'avoir abandonnée.__ __Lorsqu\'elle écrit « je t\'aime assez pour te détester », on comprend toute la complexité de leur relation.__ __C\'est cette profondeur qui rend le récit si touchant.__',
    ] },
    { t: 'ex', h: 'Analyse :', q: '',
      s: [ '1<sup>re</sup> phrase → jugement sur un critère // les personnages', '2<sup>e</sup> phrase → justification // explication', '3<sup>e</sup> phrase → citation de l\'œuvre // preuve', '4<sup>e</sup> phrase → conclusion partielle // effet sur le lecteur' ] },
    { t: 'ex', h: 'Transformer une appréciation vague :', q: '',
      p: [ '✗ « Le film est bon, j\'ai aimé la fin. »', '✓ « La finale, à la fois inattendue et logique, récompense le spectateur attentif : tous les indices semés dès la première scène prennent enfin leur sens. »' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Résumer toute l\'histoire au lieu de l\'apprécier.',
          'Dévoiler la fin sans avertissement.',
          'Donner un jugement sans exemple de l\'œuvre.',
          'Utiliser seulement « bon », « beau », « nul » : vocabulaire trop vague.',
        ] } ],
      [ { t: 'retenir', items: [
          'Critère → jugement → justification → exemple.',
          'Vocabulaire précis et nuancé.',
          'Conclure avec une recommandation.',
        ] } ],
    ] },
  ],
},

});
