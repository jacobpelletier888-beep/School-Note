/* Anglais, langue seconde — secondaire 5 (explications en français, exemples en anglais) */
DATA.feuilles['anglais'] = {

/* ============ 1. Response Process ============ */
'response-process': {
  bulle: 'response process',
  sous: 'Le processus de réponse à un texte (Response Process)',
  recto: [
    { t: 'txt', p: [ 'Le **Response Process** sert à comprendre un texte (écrit, audio ou vidéo) et à y **réagir** de façon personnelle et critique. Il est au cœur de la compétence 2 (*Reinvests understanding of texts*).' ] },
    { t: 'tab', h: 'les 3 phases', full: true, lcol: true,
      head: ['Phase', 'Ce qu\'on fait', 'Questions utiles'],
      rows: [
        ['**1. Exploring the text**', 'comprendre le texte : sujet, idées principales, détails importants, vocabulaire nouveau', 'What is the text about? Who? What? When? Where? Why?'],
        ['**2. Establishing a personal connection**', 'faire des liens entre le texte et sa propre vie, ses expériences, ses valeurs', 'Does this remind me of something? How do I feel about it? Do I agree?'],
        ['**3. Generalizing beyond the text**', 'élargir la réflexion à la société, au monde, à d\'autres textes', 'What does this say about society? How could this issue be solved?'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'stratégies de lecture', items: [
          '**Predicting** : prédire le contenu à partir du titre et des images.',
          '**Skimming** : survoler pour saisir l\'idée générale.',
          '**Scanning** : chercher une information précise.',
          '**Inferring** : deviner le sens d\'un mot grâce au contexte.',
          '**Note-taking** : noter les idées clés (tableau, schéma).',
        ] } ],
      [ { t: 'list', h: 'formulations utiles', items: [
          'The main idea of the text is…',
          'According to the author, …',
          'This text reminds me of the time when…',
          'I agree / disagree with… because…',
          'In our society, this issue affects…',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'cite', h: 'Texte court (exemple)', p: [ 'Many teenagers spend more than seven hours a day on screens. Some experts believe this affects their sleep and mood. However, screens also help young people stay connected with friends and learn new skills.' ] },
    { t: 'ex', h: 'Les 3 phases appliquées :', q: '',
      s: [ 'Exploring → Topic: teenagers and screen time. Main idea: screens have both negative and positive effects.', 'Personal connection → « I often stay up late on my phone, and I feel tired at school the next day. »', 'Generalizing → « Schools could teach students how to manage their screen time. »' ] },
    { t: 'ex', h: 'Réponse écrite modèle :', q: '',
      p: [ '« The text explains that screens can hurt teenagers\' sleep but also help them learn. I can relate to this because I often use my phone before bed. I think families and schools should work together to help teens find a healthy balance. »' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Résumer le texte sans donner de réaction personnelle.',
          'Donner son opinion sans lien avec le texte.',
          'Oublier la 3<sup>e</sup> phase (élargir au monde).',
        ] } ],
      [ { t: 'retenir', items: [
          'Explore → Connect → Generalize.',
          'Appuyer chaque idée sur le texte.',
          'Skimming, scanning, inferring.',
        ] } ],
    ] },
  ],
},

/* ============ 2. Writing Process ============ */
'writing-process': {
  bulle: 'writing process',
  sous: 'Le processus d\'écriture (Writing Process)',
  recto: [
    { t: 'tab', h: 'les étapes', full: true, lcol: true,
      head: ['Étape', 'Ce qu\'on fait'],
      rows: [
        ['**1. Prepare to write** (planning)', 'comprendre la tâche (audience, purpose, text type), faire un remue-méninges (brainstorming), organiser ses idées dans un plan'],
        ['**2. Write the draft**', 'écrire un premier jet en suivant le plan, sans s\'arrêter à chaque erreur'],
        ['**3. Revise**', 'améliorer le **contenu** et l\'**organisation** : idées claires, détails, liens, paragraphes (feedback d\'un pair)'],
        ['**4. Edit**', 'corriger la **langue** : grammaire, orthographe, ponctuation, majuscules (liste de vérification, dictionnaire)'],
        ['**5. Publish**', 'mettre au propre et partager la version finale'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'le paragraphe', items: [
          '**Topic sentence** : phrase qui annonce l\'idée principale.',
          '**Supporting details** : explications, exemples, faits.',
          '**Concluding sentence** : phrase qui boucle l\'idée.',
          'Un paragraphe = une idée principale.',
        ] } ],
      [ { t: 'list', h: 'liste de vérification (editing)', items: [
          'Chaque phrase a un sujet et un verbe.',
          '3<sup>e</sup> personne du singulier au présent : **-s** (she works).',
          'Temps de verbes cohérents.',
          'Majuscules : I, noms propres, jours, mois, langues (English, French).',
          'Pas de mots en français ni de faux amis.',
        ] } ],
    ] },
    { t: 'list', h: 'penser à l\'audience et au but', items: [
      '**Audience** : à qui j\'écris ? (un ami → informel ; un directeur → formel).',
      '**Purpose** : informer, convaincre, raconter, divertir ?',
      '**Register** : formel (I would like to…) ou informel (Hey! What\'s up?).',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple de plan —', q: 'Task: Write a paragraph about your favourite season for the school blog.',
      s: [ 'topic sentence → My favourite season is autumn.', 'detail 1 → The colours of the trees are beautiful.', 'detail 2 → I love hiking when the weather is cool.', 'detail 3 → Halloween is my favourite celebration.', 'concluding sentence → For all these reasons, autumn is the best season for me.' ] },
    { t: 'ex', h: 'Editing —', q: 'Corriger : « Every saturday, my brother go to the library for studying english. »',
      s: [ 'saturday → Saturday // majuscule aux jours', 'go → goes // 3<sup>e</sup> personne', 'for studying → to study // but = to + verbe', 'english → English // majuscule aux langues' ],
      r: 'Every Saturday, my brother goes to the library to study English.' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Sauter l\'étape de planification.',
          'Confondre revise (contenu) et edit (langue).',
          'Traduire mot à mot du français.',
        ] } ],
      [ { t: 'retenir', items: [
          'Plan → Draft → Revise → Edit → Publish.',
          'Topic sentence + details + conclusion.',
          'Penser à l\'audience et au but.',
        ] } ],
    ] },
  ],
},

/* ============ 3. Production Process ============ */
'production-process': {
  bulle: 'production process',
  sous: 'Le processus de production de textes médiatiques (Production Process)',
  recto: [
    { t: 'txt', p: [ 'Le **Production Process** sert à créer un **texte médiatique** : vidéo, balado (podcast), affiche, publicité, publication sur un réseau social, présentation.' ] },
    { t: 'tab', h: 'les 3 étapes', full: true, lcol: true,
      head: ['Étape', 'Ce qu\'on fait'],
      rows: [
        ['**1. Preproduction**', 'définir le **message**, l\'**audience** et le **but** ; faire un remue-méninges ; écrire un script ou un **storyboard** ; répartir les rôles'],
        ['**2. Production**', 'créer le texte : filmer, enregistrer, dessiner, monter ; suivre le plan'],
        ['**3. Postproduction**', 'réviser et améliorer (montage, son, texte), présenter le produit, obtenir de la rétroaction, réfléchir au processus'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'les éléments d\'un texte médiatique', items: [
          '**Audience** : public visé (âge, intérêts).',
          '**Purpose** : informer, persuader, divertir.',
          '**Codes** : images, couleurs, musique, angles de caméra, typographie, slogans.',
          '**Conventions** du genre : une publicité a un slogan et un logo ; une vidéo a des scènes, des transitions.',
        ] } ],
      [ { t: 'list', h: 'lire un texte médiatique de façon critique', items: [
          'Who created this message? Why?',
          'Who is the target audience?',
          'What techniques are used to attract attention?',
          'What is left out?',
        ] } ],
    ] },
    { t: 'list', h: 'techniques de persuasion (publicités)', items: [
      '**Bandwagon** : « Everyone is doing it! » · **Testimonial** : une célébrité recommande le produit.',
      '**Emotional appeal** : peur, humour, bonheur · **Facts and statistics** · **Slogan** accrocheur et répétition.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple —', q: 'Task: Create a 60-second public service announcement (PSA) about distracted driving for teenagers.',
      s: [ 'preproduction → message: « Phones down while driving. » ; audience: new drivers ; storyboard of 4 scenes', 'production → film scenes with friends ; record a voice-over', 'postproduction → edit, add music and text on screen ; present to the class ; ask for feedback' ] },
    { t: 'ex', h: 'Analyse d\'une publicité —', q: 'Slogan: « Join millions of happy runners. Get yours today! »',
      s: [ '« Join millions » → bandwagon', '« happy » → emotional appeal', '« Get yours today! » → sense of urgency' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Commencer à filmer sans script ni storyboard.',
          'Oublier l\'audience visée.',
          'Négliger la réflexion finale (postproduction).',
        ] } ],
      [ { t: 'retenir', items: [
          'Preproduction → Production → Postproduction.',
          'Message + audience + purpose.',
          'Reconnaître les techniques de persuasion.',
        ] } ],
    ] },
  ],
},

/* ============ 4. Opinion texts ============ */
'opinion-texts': {
  bulle: 'opinion texts',
  sous: 'Opinion and persuasive texts',
  recto: [
    { t: 'tab', h: 'la structure', full: true, lcol: true,
      head: ['Partie', 'Contenu'],
      rows: [
        ['**Introduction**', '**hook** (question, fait surprenant, citation) + contexte + **thesis statement** (ton opinion claire)'],
        ['**Body paragraphs** (2 ou 3)', 'un argument par paragraphe : **topic sentence** + preuves (facts, examples, statistics, expert opinion) + explication'],
        ['**Counterargument** (optionnel, mais fort)', 'présenter l\'autre point de vue, puis le réfuter : « Some people think… However, … »'],
        ['**Conclusion**', 'reformuler l\'opinion + résumer les arguments + **call to action** ou réflexion finale'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'exprimer son opinion', items: [
          'In my opinion, … / I strongly believe that…',
          'From my point of view, …',
          'It is clear that… / There is no doubt that…',
          'Éviter de répéter « I think » à chaque phrase.',
        ] } ],
      [ { t: 'list', h: 'techniques persuasives', items: [
          '**Facts** et **statistics** · **Expert opinion**.',
          '**Rhetorical question** : « Who wants to breathe polluted air? »',
          '**Emotional appeal** · **Personal anecdote**.',
          '**Repetition** · **Call to action** : « Let\'s act now! »',
        ] } ],
    ] },
    { t: 'list', h: 'opinion text vs persuasive text', items: [
      '**Opinion text** : exprime et justifie une opinion personnelle.',
      '**Persuasive text** : cherche activement à faire **agir** ou changer d\'avis le lecteur (appel à l\'action, techniques de persuasion plus marquées).',
    ] },
  ],
  verso: [
    { t: 'cite', h: 'Exemple d\'introduction et de paragraphe', p: [
      '__Did you know that the average teenager checks their phone more than 100 times a day?__ Phones are everywhere, even in classrooms. __In my opinion, cell phones should be banned during class time.__',
      '__First of all, phones distract students from learning.__ When a notification appears, it is hard to stay focused on the teacher. For example, many of my classmates check social media during lessons and miss important explanations. Therefore, banning phones would help students concentrate.',
    ] },
    { t: 'ex', h: 'Analyse :', q: '',
      s: [ 'question + fact → hook (statistique fictive, pour l\'exemple)', '« In my opinion, … » → thesis statement', '« First of all, … » → topic sentence', '« For example, … » → supporting detail', '« Therefore, … » → concluding sentence of the paragraph' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Opinion floue (« maybe it\'s good and bad »).',
          'Arguments sans exemples.',
          'Nouvelle idée dans la conclusion.',
        ] } ],
      [ { t: 'retenir', items: [
          'Hook + thesis ; 1 argument par paragraphe.',
          'Counterargument = texte plus fort.',
          'Finir par un call to action.',
        ] } ],
    ] },
  ],
},

/* ============ 5. Other texts ============ */
'other-texts': {
  bulle: 'other text types',
  sous: 'Narrative texts, feature articles, letters and emails',
  recto: [
    { t: 'tab', full: true, lcol: true,
      head: ['Type', 'But', 'Éléments clés'],
      rows: [
        ['**Narrative text** (story)', 'raconter, divertir', 'characters, setting, plot : beginning (situation), problem (conflict), events, climax, resolution ; temps du passé ; dialogue'],
        ['**Feature article**', 'informer de façon intéressante sur un sujet', '**headline** accrocheur, **lead** (introduction qui accroche), sous-titres, faits, citations, photo et légende'],
        ['**Formal letter / email**', 'demander, se plaindre, postuler', 'Dear Mr./Ms. [Name], — langue formelle, pas de contractions — Sincerely, / Yours truly,'],
        ['**Informal letter / email**', 'écrire à un ami', 'Hi [Name], — contractions permises, ton amical — Take care, / See you soon,'],
        ['**Review**', 'évaluer un film, un livre, un jeu', 'présentation, forces, faiblesses, note, recommandation'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'raconter une histoire', items: [
          'Past simple pour les actions ; past continuous pour le décor (It was raining…).',
          'Mots de temps : First, Then, Suddenly, After that, Finally.',
          'Montrer les émotions (show, don\'t tell) : « Her hands were shaking. »',
        ] } ],
      [ { t: 'list', h: 'formel ou informel ?', items: [
          'Formel : I would like to, Could you please, I am writing to…',
          'Informel : I\'d love to, Can you, Just wanted to tell you…',
          'Formel : **pas** de contractions (do not, I am).',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'cite', h: 'Courriel formel (exemple)', p: [
      'Subject: Summer job application',
      'Dear Ms. Tremblay,',
      'I am writing to apply for the camp counsellor position advertised on your website. I am 17 years old and I have been a volunteer at my town\'s day camp for two summers. I am responsible, patient and I enjoy working with children.',
      'I would be available for an interview at your convenience. Thank you for considering my application.',
      'Sincerely,<br>Alex Roy',
    ] },
    { t: 'ex', h: 'Analyse :', q: '',
      s: [ '« Dear Ms. Tremblay, » → formal greeting', '« I am writing to… » → purpose stated in the first sentence', '« I have been a volunteer… » → present perfect (experience)', 'no contractions → formal register', '« Sincerely, » → formal closing' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Écrire « Hi! » à un employeur.',
          'Mélanger les temps dans une histoire.',
          'Article sans titre ni introduction accrocheuse.',
        ] } ],
      [ { t: 'retenir', items: [
          'Story : characters, setting, plot.',
          'Feature article : headline + lead.',
          'Formal : Dear… / Sincerely,',
        ] } ],
    ] },
  ],
},

/* ============ 6. Functional language ============ */
'functional-language': {
  bulle: 'functional language',
  sous: 'Functional language : les expressions pour interagir',
  recto: [
    { t: 'txt', p: [ 'Le **functional language**, ce sont des expressions toutes faites pour **interagir** à l\'oral (compétence 1 : *Interacts orally in English*). Les utiliser naturellement montre qu\'on participe activement à la discussion.' ] },
    { t: 'tab', full: true, lcol: true,
      head: ['Fonction', 'Expressions'],
      rows: [
        ['**giving an opinion**', 'In my opinion… · I think / believe that… · As far as I\'m concerned…'],
        ['**agreeing**', 'I agree with you. · That\'s a good point. · Exactly! · I feel the same way.'],
        ['**disagreeing politely**', 'I see your point, but… · I\'m not sure about that. · I don\'t really agree because…'],
        ['**asking for an opinion**', 'What do you think? · How do you feel about…? · Do you agree?'],
        ['**asking for clarification**', 'What do you mean by…? · Could you repeat that, please? · Can you give an example?'],
        ['**checking understanding**', 'Do you know what I mean? · Does that make sense?'],
        ['**suggesting**', 'Why don\'t we…? · How about…? · Let\'s… · We could…'],
        ['**taking / giving a turn**', 'Can I add something? · Sorry to interrupt, but… · Go ahead. · Your turn.'],
        ['**summarizing, concluding**', 'So, we agree that… · To sum up… · All in all…'],
        ['**hesitating** (gagner du temps)', 'Well… · Let me think… · How can I say this…'],
      ] },
    { t: 'list', h: 'pour bien participer', items: [
      'Parler **seulement en anglais**, même si c\'est imparfait.',
      'Écouter les autres et **rebondir** sur leurs idées.',
      'Justifier : « … because… » ; donner des exemples.',
    ] },
  ],
  verso: [
    { t: 'cite', h: 'Discussion modèle (school uniforms)', p: [
      '<b>Sam:</b> In my opinion, school uniforms are a good idea because they reduce pressure about clothes.',
      '<b>Mia:</b> I see your point, but I think they limit our self-expression. What do you think, Leo?',
      '<b>Leo:</b> Well… I agree with Mia. Could we find a compromise? How about a dress code instead?',
      '<b>Sam:</b> That\'s a good point. So, we agree that some rules are useful, but not a full uniform.',
    ] },
    { t: 'ex', h: 'Analyse :', q: '',
      s: [ '« In my opinion… because… » → giving and justifying an opinion', '« I see your point, but… » → polite disagreement', '« What do you think, Leo? » → asking for an opinion (includes others)', '« Well… » → hesitation', '« How about…? » → suggesting', '« So, we agree that… » → summarizing' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Répondre seulement « yes » ou « no » sans justifier.',
          'Passer au français quand on bloque.',
          'Couper la parole sans formule polie.',
        ] } ],
      [ { t: 'retenir', items: [
          'Opinion + because + example.',
          'Disagree politely : I see your point, but…',
          'Inclure les autres : What do you think?',
        ] } ],
    ] },
  ],
},

/* ============ 7. Strategies ============ */
strategies: {
  bulle: 'strategies',
  sous: 'Communication and learning strategies',
  recto: [
    { t: 'cols', c: [
      [ { t: 'tab', h: 'communication strategies', full: true, lcol: true,
          head: ['Stratégie', 'Exemple'],
          rows: [
            ['**Circumlocution** (décrire un mot qu\'on ne connaît pas)', '« It\'s the thing you use to open a bottle » (bottle opener)'],
            ['**Gestures**', 'mimer, pointer'],
            ['**Asking for help**', '« How do you say… in English? »'],
            ['**Rephrasing** (reformuler)', '« In other words, … »'],
            ['**Recasting** (reprendre correctement ce que l\'autre a dit)', '« Oh, you went to the store? »'],
            ['**Stalling** (gagner du temps)', '« Let me think… »'],
          ] } ],
      [ { t: 'tab', h: 'learning strategies', full: true, lcol: true,
          head: ['Stratégie', 'Exemple'],
          rows: [
            ['**Inferencing**', 'deviner le sens d\'un mot par le contexte'],
            ['**Predicting**', 'anticiper le contenu d\'un texte'],
            ['**Skimming / Scanning**', 'survoler / chercher une info'],
            ['**Note-taking**', 'noter les mots-clés'],
            ['**Self-monitoring**', 'remarquer et corriger ses erreurs'],
            ['**Using resources**', 'dictionnaire, grammaire, correcteur'],
            ['**Cooperating**', 'travailler avec un pair'],
            ['**Setting goals**', '« I will use 3 new words today. »'],
          ] } ],
    ] },
    { t: 'list', h: 'les mots apparentés (cognates)', items: [
      'Beaucoup de mots anglais ressemblent au français et ont le même sens : **information**, **important**, **nature**, **visit**.',
      'Attention aux **faux amis** (voir la feuille « Faux amis »).',
    ] },
    { t: 'list', h: 'bien utiliser un dictionnaire', items: [
      'Vérifier la **classe** du mot (noun, verb, adjective) et lire l\'exemple.',
      'Choisir le bon sens selon le contexte ; retraduire pour vérifier.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 — circumlocution', q: 'Tu ne connais pas le mot « déneigeuse ».',
      p: [ '« It\'s a big truck that removes snow from the streets in winter. » (snowplow)' ] },
    { t: 'ex', h: 'Exemple 2 — inferencing', q: '« After running the marathon, she was so exhausted that she slept for twelve hours. » Que veut dire « exhausted » ?',
      s: [ 'indice → marathon', 'indice → slept for twelve hours', 'sens → très fatiguée, épuisée' ] },
    { t: 'ex', h: 'Exemple 3 — scanning', q: 'Tu cherches seulement l\'heure du départ dans un horaire de train.',
      p: [ 'On ne lit pas tout : on repère les chiffres et le mot « departure ».' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Abandonner quand il manque un mot.',
          'Chercher chaque mot inconnu dans le dictionnaire.',
          'Se fier aux faux amis.',
        ] } ],
      [ { t: 'retenir', items: [
          'Contourner les mots manquants (circumlocution).',
          'Deviner par le contexte.',
          'Utiliser les ressources intelligemment.',
        ] } ],
    ] },
  ],
},

/* ============ 8. Present ============ */
present: {
  bulle: 'present tenses',
  sous: 'Simple present and present continuous',
  recto: [
    { t: 'tab', full: true, lcol: true,
      head: ['', 'Simple present', 'Present continuous'],
      rows: [
        ['forme', 'I **work** · she **works**', 'I **am working** · she **is working**'],
        ['négation', 'I **don\'t** work · she **doesn\'t** work', 'I\'m **not** working'],
        ['question', '**Do** you work? · **Does** she work?', '**Are** you working?'],
        ['emplois', 'habitudes, routines, vérités générales, horaires', 'action en cours maintenant, situation temporaire, projets planifiés'],
        ['mots indicateurs', 'always, usually, often, sometimes, never, every day', 'now, right now, at the moment, today, this week'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'le -s de la 3<sup>e</sup> personne (he, she, it)', items: [
          'la plupart des verbes : + **s** (plays, works)',
          'verbes en -s, -sh, -ch, -x, -o : + **es** (watches, goes, does)',
          'consonne + y : **-ies** (study → studies) ; voyelle + y : + s (play → plays)',
          'have → **has**',
          'Avec does / doesn\'t, le verbe **n\'a plus de -s** : Does she **play**?',
        ] } ],
      [ { t: 'list', h: 'l\'orthographe du -ing', items: [
          'e muet disparaît : make → **making**',
          'consonne doublée (voyelle courte accentuée) : run → **running**, sit → **sitting**',
          '-ie → -y : lie → **lying**',
        ] },
        { t: 'list', h: 'verbes d\'état (stative verbs)', items: [
          'Pas de forme continue : know, like, love, hate, want, need, believe, understand, own, seem.',
          '✗ I am knowing → ✓ I **know**.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Choisir le bon temps.',
      s: [ 'She (play) hockey every Saturday. → plays // habitude', 'Look! It (snow). → is snowing // en ce moment', 'Water (boil) at 100 °C. → boils // vérité générale', 'I (stay) at my aunt\'s house this week. → am staying // temporaire', 'The bus (leave) at 7:15. → leaves // horaire' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Négation et question : « He watches TV every night. »',
      s: [ 'négation → He doesn\'t watch TV every night. // pas de -s après doesn\'t', 'question → Does he watch TV every night?' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Corriger : « I am wanting a new phone. »',
      r: 'I want a new phone. (want = stative verb)' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier le -s : « He play » ✗.',
          'Garder le -s après does : « Does she plays » ✗.',
          'Utiliser le continu avec know, like, want.',
        ] } ],
      [ { t: 'retenir', items: [
          'Habitude → simple present.',
          'Maintenant → present continuous.',
          'He / she / it → -s.',
        ] } ],
    ] },
  ],
},

/* ============ 9. Past ============ */
past: {
  bulle: 'past tenses',
  sous: 'Simple past and past continuous',
  recto: [
    { t: 'tab', full: true, lcol: true,
      head: ['', 'Simple past', 'Past continuous'],
      rows: [
        ['forme', 'I **worked** · I **went** (irrégulier)', 'I **was working** · they **were working**'],
        ['négation', 'I **didn\'t** work (verbe à la base)', 'I **wasn\'t** working'],
        ['question', '**Did** you work?', '**Were** you working?'],
        ['emplois', 'action **terminée** à un moment précis du passé', 'action **en cours** à un moment du passé ; décor d\'une histoire'],
        ['mots indicateurs', 'yesterday, last week, in 2020, ago', 'while, at 8 p.m. last night, when'],
      ] },
    { t: 'box', h: 'action interrompue', f: 'I <b>was reading</b> (en cours) <b>when</b> the phone <b>rang</b> (interruption).', note: 'While + past continuous · when + simple past' },
    { t: 'cols', c: [
      [ { t: 'list', h: 'verbes réguliers : -ed', items: [
          'play → played ; like → liked (e + d)',
          'study → studied (consonne + y → ied)',
          'stop → stopped (consonne doublée)',
          'Prononciation : /t/ (walked), /d/ (played), /ɪd/ (wanted, needed).',
        ] } ],
      [ { t: 'tab', h: 'verbes irréguliers fréquents', full: true,
          head: ['base', 'past', 'base', 'past'],
          rows: [
            ['be', 'was / were', 'go', 'went'],
            ['have', 'had', 'make', 'made'],
            ['do', 'did', 'take', 'took'],
            ['see', 'saw', 'get', 'got'],
            ['come', 'came', 'think', 'thought'],
            ['buy', 'bought', 'write', 'wrote'],
            ['begin', 'began', 'know', 'knew'],
          ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Conjuguer.',
      s: [ 'Yesterday, we (go) to the museum. → went', 'She (study) for three hours last night. → studied', 'They (not / see) the movie. → didn\'t see', '(you / buy) a ticket? → Did you buy' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Past continuous ou simple past ?',
      s: [ 'I (walk) home when it (start) to rain. → was walking / started', 'While she (cook), he (set) the table. → was cooking / was setting // deux actions en même temps', 'At 9 p.m. yesterday, I (do) my homework. → was doing' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Corriger : « Did you went to the party? »',
      r: 'Did you go to the party? (après did, le verbe est à la base)' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          '« I didn\'t went » ✗ → I didn\'t go.',
          'Ajouter -ed à un verbe irrégulier (« goed » ✗).',
          'Oublier « was / were » au past continuous.',
        ] } ],
      [ { t: 'retenir', items: [
          'Terminé → simple past.',
          'En cours dans le passé → was / were + -ing.',
          'Apprendre les verbes irréguliers.',
        ] } ],
    ] },
  ],
},

/* ============ 10. Present perfect ============ */
'present-perfect': {
  bulle: 'present perfect',
  sous: 'Present perfect (simple and continuous)',
  recto: [
    { t: 'cols', c: [
      [ { t: 'box', h: 'forme', f: 'have / has + past participle', note: 'I have finished · She has seen · They haven\'t eaten · Have you been…?' },
        { t: 'list', h: 'emplois', items: [
          '**Expérience** de vie, sans moment précis : I have visited New York.',
          'Action **commencée dans le passé et qui continue** : I have lived here **for** 5 years / **since** 2019.',
          'Action récente avec un **résultat présent** : I have lost my keys (je ne les ai pas).',
        ] } ],
      [ { t: 'tab', h: 'mots indicateurs', full: true, lcol: true,
          head: ['Mot', 'Exemple'],
          rows: [
            ['**for** (durée)', 'for two hours, for a long time'],
            ['**since** (point de départ)', 'since Monday, since I was ten'],
            ['**ever** / **never**', 'Have you ever been to Paris? · I have never tried sushi.'],
            ['**already** / **yet**', 'I have already finished. · Have you finished yet? · Not yet.'],
            ['**just**', 'She has just arrived.'],
          ] } ],
    ] },
    { t: 'tab', h: 'present perfect ou simple past ?', full: true, lcol: true,
      head: ['Present perfect', 'Simple past'],
      rows: [
        ['moment **non précisé** ou lié au présent', 'moment **précis** et terminé'],
        ['I have seen that movie.', 'I saw that movie **last week**.'],
        ['She has worked here since 2020. (elle y travaille encore)', 'She worked there from 2015 to 2018. (c\'est fini)'],
      ] },
    { t: 'list', h: 'present perfect continuous', items: [
      'have / has **been** + **-ing** : met l\'accent sur la **durée** d\'une action qui continue.',
      'I **have been studying** for three hours. (et je continue)',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'For ou since ?',
      s: [ 'I have known her ___ 2018. → since', 'We have waited ___ 20 minutes. → for', 'He has been sick ___ last Friday. → since' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Present perfect ou simple past ?',
      s: [ 'I (never / be) to Europe. → have never been', 'I (go) to Europe in 2022. → went // moment précis', '(you / ever / eat) poutine? → Have you ever eaten' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Traduire : « J\'habite à Laval depuis cinq ans. »',
      r: 'I have lived (ou have been living) in Laval for five years. (et non « I live since »)' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          '« I live here since 2019 » ✗ (calque du français).',
          'Present perfect avec un moment précis : « I have seen him yesterday » ✗.',
          'Confondre for (durée) et since (point de départ).',
        ] } ],
      [ { t: 'retenir', items: [
          'have / has + past participle.',
          'for = durée ; since = début.',
          'Moment précis → simple past.',
        ] } ],
    ] },
  ],
},

/* ============ 11. Past perfect ============ */
'past-perfect': {
  bulle: 'past perfect',
  sous: 'Past perfect',
  recto: [
    { t: 'cols', c: [
      [ { t: 'box', h: 'forme', f: 'had + past participle', note: 'I had finished · She hadn\'t seen · Had you eaten?' },
        { t: 'txt', p: [ 'Le **past perfect** exprime une action qui s\'est passée **avant** une autre action passée. C\'est le « passé du passé » (comme le plus-que-parfait en français : j\'avais mangé).' ] } ],
      [ { t: 'list', h: 'mots indicateurs', items: [
          '**before**, **after**, **by the time**, **already**, **when**, **until**.',
          'By the time we arrived, the movie **had started**.',
          'After she **had finished** her homework, she went out.',
        ] } ],
    ] },
    { t: 'box', h: 'ligne du temps', f: '1. action la plus ancienne → <b>past perfect</b> · 2. action plus récente → <b>simple past</b>' },
    { t: 'cols', c: [
      [ { t: 'list', h: 'quand l\'utiliser ?', items: [
          'Pour clarifier l\'**ordre** de deux actions passées.',
          'Dans le **reported speech** (discours indirect) : « I saw it » → She said she **had seen** it.',
          'Dans le **3<sup>e</sup> conditionnel** : If I **had known**, …',
        ] } ],
      [ { t: 'list', h: 'past perfect continuous', items: [
          'had **been** + **-ing** : durée d\'une action avant un moment passé.',
          'She **had been waiting** for an hour when the bus arrived.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Mettre les verbes au bon temps.',
      s: [ 'When I got to the station, the train (already / leave). → had already left', 'She (never / see) snow before she moved to Québec. → had never seen', 'After they (eat), they (go) for a walk. → had eaten / went' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Quelle action vient en premier ? « When Tom arrived, Julie had gone home. »',
      s: [ 'had gone → 1<sup>re</sup> action (Julie est partie)', 'arrived → 2<sup>e</sup> action (Tom arrive après)' ], r: 'Tom ne l\'a pas vue.' },
    { t: 'ex', h: 'Comparer :', q: '',
      s: [ 'When I arrived, she left. → elle part au moment où j\'arrive', 'When I arrived, she had left. → elle était déjà partie' ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Utiliser le past perfect quand l\'ordre est déjà évident ou qu\'il n\'y a qu\'une action.',
          'Oublier le participe passé irrégulier (had went ✗ → had gone).',
        ] } ],
      [ { t: 'retenir', items: [
          'had + past participle.',
          'Action antérieure à une autre action passée.',
          'By the time, before, after, already.',
        ] } ],
    ] },
  ],
},

/* ============ 12. Future ============ */
future: {
  bulle: 'future forms',
  sous: 'Les façons d\'exprimer le futur',
  recto: [
    { t: 'tab', full: true, lcol: true,
      head: ['Forme', 'Emplois', 'Exemple'],
      rows: [
        ['**will** + base', 'décision **prise sur le moment**, prédiction, promesse, offre', 'I\'m thirsty. I\'ll get some water. · It will rain tomorrow. · I will help you.'],
        ['**be going to** + base', '**intention** déjà décidée, prédiction appuyée sur une **preuve** visible', 'I\'m going to study medicine. · Look at those clouds! It\'s going to rain.'],
        ['**present continuous**', 'rendez-vous, plans **organisés**', 'I\'m meeting my friends at 7 tonight.'],
        ['**simple present**', 'horaires, programmes fixes', 'The concert starts at 8 p.m.'],
        ['**future continuous** (will be + -ing)', 'action en cours à un moment du futur', 'This time tomorrow, I will be flying to Paris.'],
        ['**future perfect** (will have + p.p.)', 'action terminée avant un moment futur', 'By June, I will have finished high school.'],
      ] },
    { t: 'cols', c: [
      [ { t: 'box', h: 'règle importante', f: 'Après <b>when, if, as soon as, before, after, until</b> : présent (pas will)', note: 'When I <b>get</b> home, I will call you. (✗ When I will get)' } ],
      [ { t: 'list', h: 'négations et questions', items: [
          'will not = **won\'t** : I won\'t be late.',
          'Will you come? · Are you going to come?',
          'Shall I / we…? (offre ou suggestion, surtout formel) : Shall we go?',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Will ou going to ?',
      s: [ '« The phone is ringing. » « I ___ answer it. » → will // décision sur le moment', 'I bought a ticket. I ___ see the game on Friday. → am going to // plan', 'Be careful! You ___ fall! → are going to // preuve visible', 'I promise I ___ tell anyone. → won\'t' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Corriger : « I will call you when I will arrive. »',
      r: 'I will call you when I arrive.' },
    { t: 'ex', h: 'Exemple 3 —', q: 'Future perfect : « D\'ici 2030, j\'aurai terminé mes études. »',
      r: 'By 2030, I will have finished my studies.' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          '« will » après when / if dans la même phrase.',
          '« I will to go » ✗ → I will go.',
          '« I\'m going to the movies tomorrow » est correct (present continuous pour un plan).',
        ] } ],
      [ { t: 'retenir', items: [
          'Décision spontanée → will.',
          'Plan ou preuve → going to.',
          'Horaire → simple present.',
        ] } ],
    ] },
  ],
},

/* ============ 13. Modals ============ */
modals: {
  bulle: 'modals',
  sous: 'Les verbes modaux (modals)',
  recto: [
    { t: 'box', h: 'règles', f: 'modal + verbe de base (sans <i>to</i>) · jamais de -s · pas de do / does', note: 'She can swim. (✗ She cans swim / She can to swim) · Can she swim?' },
    { t: 'tab', full: true, lcol: true,
      head: ['Modal', 'Sens', 'Exemple'],
      rows: [
        ['**can**', 'capacité, permission (informelle), possibilité', 'I can speak three languages. · Can I go out?'],
        ['**could**', 'capacité passée, demande polie, possibilité', 'I could swim at five. · Could you help me?'],
        ['**may**', 'permission (formelle), possibilité', 'May I come in? · It may rain.'],
        ['**might**', 'faible possibilité', 'I might go to the party.'],
        ['**must**', 'obligation (souvent personnelle), déduction certaine', 'I must study tonight. · She must be tired.'],
        ['**have to**', 'obligation (souvent externe, règle)', 'We have to wear a uniform.'],
        ['**should** / **ought to**', 'conseil, recommandation', 'You should sleep more.'],
        ['**would**', 'demande polie, souhait, conditionnel', 'Would you like some tea? · I would travel if…'],
        ['**will**', 'futur, volonté, promesse', 'I will call you.'],
      ] },
    { t: 'cols', c: [
      [ { t: 'box', h: 'attention', f: '<b>mustn\'t</b> = interdiction · <b>don\'t have to</b> = pas obligatoire', note: 'You mustn\'t use your phone during the test. · You don\'t have to come, but you can.' } ],
      [ { t: 'list', h: 'modaux au passé (modal perfect)', items: [
          '**should have** + p.p. : regret, reproche : You should have studied.',
          '**could have** + p.p. : possibilité non réalisée : I could have won.',
          '**must have** + p.p. : déduction sur le passé : He must have forgotten.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Choisir le bon modal.',
      s: [ 'You look sick. You ___ see a doctor. → should // conseil', 'Students ___ bring their ID card. It\'s the rule. → have to (ou must)', '___ you pass me the salt, please? → Could // demande polie', 'Take an umbrella. It ___ rain later. → might (ou may)', 'You ___ smoke here. It\'s forbidden. → mustn\'t' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Corriger : « She cans to drive. »',
      r: 'She can drive.' },
    { t: 'ex', h: 'Exemple 3 —', q: 'Exprimer un regret : « J\'aurais dû partir plus tôt. »',
      r: 'I should have left earlier.' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Ajouter to ou -s après un modal.',
          'Confondre mustn\'t (interdit) et don\'t have to (facultatif).',
          '« I must to go » ✗.',
        ] } ],
      [ { t: 'retenir', items: [
          'Modal + base verb.',
          'should = conseil ; must / have to = obligation.',
          'should have + p.p. = regret.',
        ] } ],
    ] },
  ],
},

/* ============ 14. Conditionals ============ */
conditionals: {
  bulle: 'conditionals',
  sous: 'Les phrases conditionnelles (conditionals)',
  recto: [
    { t: 'tab', full: true, lcol: true,
      head: ['Type', 'Structure', 'Emploi', 'Exemple'],
      rows: [
        ['**Zero**', 'If + present, present', 'vérités générales, faits scientifiques', 'If you heat ice, it melts.'],
        ['**First**', 'If + present, **will** + base', 'situation **réelle** et **possible** dans le futur', 'If it rains, I will stay home.'],
        ['**Second**', 'If + **past**, **would** + base', 'situation **imaginaire** ou peu probable (présent / futur)', 'If I had a million dollars, I would travel.'],
        ['**Third**', 'If + **past perfect**, **would have** + p.p.', 'situation imaginaire dans le **passé** (regret)', 'If I had studied, I would have passed.'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'à savoir', items: [
          'On peut inverser les deux parties : I will stay home **if it rains**. (pas de virgule dans ce cas)',
          'Si la phrase commence par **If**, on met une **virgule** entre les deux parties.',
          'Jamais de **will** ou de **would** dans la partie avec **if**.',
          '2<sup>e</sup> conditionnel : **If I were** (avec tous les sujets, style soigné) : If I were you, I would apologize.',
        ] } ],
      [ { t: 'list', h: 'autres mots', items: [
          '**unless** = if not : I won\'t go unless you come.',
          '**as long as**, **provided that** = à condition que.',
          '**I wish** + past : I wish I had more time. (souhait sur le présent)',
          '**I wish** + past perfect : I wish I had listened. (regret sur le passé)',
        ] } ],
    ] },
    { t: 'box', h: 'mixed conditional (bonus)', f: 'If + past perfect, would + base', note: 'If I had slept more last night, I wouldn\'t be tired now. (cause passée, conséquence présente)' },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Compléter.',
      s: [ 'If you mix red and blue, you (get) purple. → get // zero', 'If she studies, she (pass) the exam. → will pass // first', 'If I (be) you, I would call her. → were // second', 'If we had left earlier, we (not / miss) the bus. → wouldn\'t have missed // third' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Corriger : « If I would have money, I will buy a car. »',
      r: 'If I had money, I would buy a car.' },
    { t: 'ex', h: 'Exemple 3 —', q: 'Unless : « Tu ne réussiras pas si tu n\'étudies pas. »',
      r: 'You won\'t succeed unless you study.' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Mettre would après if.',
          'Mélanger les types (If I had…, I will… ✗).',
          '« If I was you » : accepté à l\'oral, mais écrire **If I were you**.',
        ] } ],
      [ { t: 'retenir', items: [
          '1<sup>st</sup> : present / will.',
          '2<sup>nd</sup> : past / would.',
          '3<sup>rd</sup> : had + p.p. / would have + p.p.',
        ] } ],
    ] },
  ],
},

/* ============ 15. Passive ============ */
passive: {
  bulle: 'passive voice',
  sous: 'La voix passive (passive voice)',
  recto: [
    { t: 'cols', c: [
      [ { t: 'box', h: 'forme', f: 'be (au bon temps) + past participle (+ by + agent)' },
        { t: 'list', h: 'quand l\'utiliser ?', items: [
          'Quand l\'**action** ou l\'**objet** est plus important que la personne qui agit.',
          'Quand on ne connaît pas l\'auteur, ou qu\'il est évident : My bike **was stolen**.',
          'Dans les textes scientifiques, les nouvelles, les textes formels.',
        ] } ],
      [ { t: 'list', h: 'transformer une phrase active', items: [
          '1. L\'**objet** de la phrase active devient le **sujet**.',
          '2. On met **be** au même temps que le verbe actif.',
          '3. On ajoute le **participe passé**.',
          '4. L\'ancien sujet devient **by + agent** (souvent on l\'enlève).',
        ] } ],
    ] },
    { t: 'tab', h: 'la passive à tous les temps', full: true, lcol: true,
      head: ['Temps', 'Active', 'Passive'],
      rows: [
        ['simple present', 'They clean the room.', 'The room **is cleaned**.'],
        ['present continuous', 'They are cleaning the room.', 'The room **is being cleaned**.'],
        ['simple past', 'They cleaned the room.', 'The room **was cleaned**.'],
        ['present perfect', 'They have cleaned the room.', 'The room **has been cleaned**.'],
        ['future (will)', 'They will clean the room.', 'The room **will be cleaned**.'],
        ['modal', 'They must clean the room.', 'The room **must be cleaned**.'],
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Mettre au passif : « Shakespeare wrote Romeo and Juliet. »',
      s: [ 'objet → Romeo and Juliet (nouveau sujet)', 'wrote (simple past) → was written', 'by Shakespeare' ], r: 'Romeo and Juliet was written by Shakespeare.' },
    { t: 'ex', h: 'Exemple 2 —', q: '« Someone has broken the window. »',
      r: 'The window has been broken. (agent inconnu : on ne met pas « by someone »)' },
    { t: 'ex', h: 'Exemple 3 —', q: 'Une nouvelle : « La nouvelle école sera construite en 2027. »',
      r: 'The new school will be built in 2027.' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Oublier be : « The car washed yesterday » ✗ → was washed.',
          'Mauvais participe irrégulier (was builded ✗ → built).',
          'Mettre au passif un verbe sans objet (She arrived ✗).',
        ] } ],
      [ { t: 'retenir', items: [
          'be + past participle.',
          'Garder le temps du verbe actif.',
          'by + agent, seulement s\'il est utile.',
        ] } ],
    ] },
  ],
},

/* ============ 16. Reported speech ============ */
'reported-speech': {
  bulle: 'reported speech',
  sous: 'Le discours rapporté (reported speech)',
  recto: [
    { t: 'txt', p: [ 'Le **reported speech** (discours indirect) rapporte les paroles de quelqu\'un sans guillemets. Si le verbe introducteur est au **passé** (said, told), on **recule** d\'un temps (backshift).' ] },
    { t: 'cols', c: [
      [ { t: 'tab', h: 'le recul des temps (backshift)', full: true, lcol: true,
          head: ['Direct', 'Reported'],
          rows: [
            ['simple present (I like)', 'simple past (she liked)'],
            ['present continuous (I am going)', 'past continuous (was going)'],
            ['simple past (I saw)', 'past perfect (had seen)'],
            ['present perfect (I have done)', 'past perfect (had done)'],
            ['will', 'would'],
            ['can', 'could'],
            ['must', 'had to'],
          ] } ],
      [ { t: 'tab', h: 'autres changements', full: true, lcol: true,
          head: ['Direct', 'Reported'],
          rows: [
            ['I, we, my', 'he / she, they, his / her'],
            ['now', 'then'],
            ['today', 'that day'],
            ['tomorrow', 'the next day'],
            ['yesterday', 'the day before'],
            ['here, this', 'there, that'],
          ] },
        { t: 'list', h: 'say ou tell ?', items: [
          '**say** (something) : She **said** (that) she was tired.',
          '**tell** + personne : She **told me** (that) she was tired.',
        ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'les questions rapportées', items: [
          'Yes / no → **if** ou **whether** : « Are you ready? » → He asked if I was ready.',
          'Wh- questions → on garde le mot interrogatif, avec l\'**ordre d\'une affirmation** : « Where do you live? » → She asked where I **lived**.',
        ] } ],
      [ { t: 'list', h: 'ordres et demandes', items: [
          'tell / ask + personne + **to** + base : « Close the door. » → He told me **to close** the door.',
          'Négatif : **not to** : « Don\'t be late. » → She told us **not to be** late.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: '« I am studying for my exam, » said Leo.',
      s: [ 'am studying → was studying', 'my → his' ], r: 'Leo said (that) he was studying for his exam.' },
    { t: 'ex', h: 'Exemple 2 —', q: '« I will call you tomorrow, » she told me.',
      r: 'She told me (that) she would call me the next day.' },
    { t: 'ex', h: 'Exemple 3 —', q: '« Where did you buy your jacket? » he asked.',
      s: [ 'did you buy → I had bought // ordre d\'une affirmation + backshift' ], r: 'He asked where I had bought my jacket.' },
    { t: 'ex', h: 'Exemple 4 —', q: '« Don\'t touch the screen! » the teacher said to us.',
      r: 'The teacher told us not to touch the screen.' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          '« She said me » ✗ → She told me / She said to me.',
          'Garder l\'ordre de la question : « He asked where did I live » ✗.',
          'Oublier de changer les pronoms et les mots de temps.',
        ] } ],
      [ { t: 'retenir', items: [
          'Reculer d\'un temps après said / told.',
          'Questions : if / whether + ordre affirmatif.',
          'Ordres : told + person + to.',
        ] } ],
    ] },
  ],
},

/* ============ 17. Gerunds and infinitives ============ */
gerunds: {
  bulle: 'gerunds and infinitives',
  sous: 'Gerunds (-ing) and infinitives (to + verb)',
  recto: [
    { t: 'cols', c: [
      [ { t: 'tab', h: 'verbe + gerund (-ing)', full: true, lcol: true,
          head: ['Verbes', 'Exemple'],
          rows: [
            ['enjoy, avoid, finish, mind, suggest, keep, miss, practise, consider, can\'t stand', 'I enjoy **reading**.'],
            ['après une **préposition**', 'She is good at **drawing**. · Thanks for **helping**.'],
            ['comme **sujet**', '**Swimming** is good exercise.'],
            ['look forward to, be used to (to = préposition)', 'I look forward to **meeting** you.'],
          ] } ],
      [ { t: 'tab', h: 'verbe + infinitive (to + base)', full: true, lcol: true,
          head: ['Verbes', 'Exemple'],
          rows: [
            ['want, need, decide, hope, plan, agree, promise, refuse, learn, seem, would like', 'I want **to travel**.'],
            ['pour exprimer un **but**', 'I went to the store **to buy** milk.'],
            ['après beaucoup d\'adjectifs', 'It\'s easy **to understand**.'],
          ] } ],
    ] },
    { t: 'tab', h: 'les deux sont possibles', full: true, lcol: true,
      head: ['Verbes', 'Sens'],
      rows: [
        ['like, love, hate, start, begin, continue', 'même sens : I like **swimming** / **to swim**.'],
        ['**stop**', 'stop **smoking** (arrêter de fumer) ≠ stop **to smoke** (s\'arrêter pour fumer)'],
        ['**remember** / **forget**', 'remember **locking** the door (se souvenir de l\'avoir fait) ≠ remember **to lock** (ne pas oublier de le faire)'],
        ['**try**', 'try **to open** (essayer, effort) ≠ try **opening** (essayer comme test)'],
      ] },
    { t: 'list', h: 'cas spéciaux', items: [
      '**make** / **let** + objet + base (sans to) : She made me **clean** my room. · Let me **help**.',
      '**help** + (to) base : Can you help me (to) **carry** this?',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Gerund ou infinitive ?',
      s: [ 'I decided (join) the team. → to join', 'She avoids (eat) junk food. → eating', 'We are interested in (learn) Spanish. → learning // après une préposition', 'He promised (call) me. → to call', 'I\'m looking forward to (see) you. → seeing' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Stop : quel sens ?',
      s: [ 'He stopped eating meat. → il ne mange plus de viande', 'He stopped to eat. → il s\'est arrêté pour manger' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Corriger : « I went to the library for studying. »',
      r: 'I went to the library to study. (but → to + verbe)' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          '« for + verbe » pour exprimer le but ✗.',
          '« I look forward to see you » ✗ → seeing.',
          '« She made me to clean » ✗ → made me clean.',
        ] } ],
      [ { t: 'retenir', items: [
          'Après préposition → -ing.',
          'want, decide, hope → to + verbe.',
          'stop, remember, forget : le sens change.',
        ] } ],
    ] },
  ],
},

/* ============ 18. Adjectives and adverbs ============ */
adjectives: {
  bulle: 'adjectives and adverbs',
  sous: 'Adjectives, adverbs, comparatives and superlatives',
  recto: [
    { t: 'cols', c: [
      [ { t: 'list', h: 'les adjectifs', items: [
          'Placés **avant** le nom : a **red** car (pas « a car red »).',
          '**Invariables** : two **big** houses (pas de -s).',
          'Après **be**, **seem**, **look**, **feel** : She looks **happy**.',
          '**-ed** (ce qu\'on ressent) vs **-ing** (ce qui cause l\'émotion) : I am **bored** because the movie is **boring**.',
        ] },
        { t: 'list', h: 'les adverbes', items: [
          'Souvent adjectif + **-ly** : quick → quickly, happy → happily.',
          'Irréguliers : good → **well**, fast → **fast**, hard → **hard** (hardly = à peine).',
          'Adverbes de fréquence avant le verbe principal, après be : I **often** read. · She is **always** late.',
        ] } ],
      [ { t: 'tab', h: 'comparatifs et superlatifs', full: true, lcol: true,
          head: ['Adjectif', 'Comparatif', 'Superlatif'],
          rows: [
            ['1 syllabe : tall', 'taller than', 'the tallest'],
            ['finit en -y : happy', 'happier than', 'the happiest'],
            ['voyelle + consonne : big', 'bigger than', 'the biggest'],
            ['2+ syllabes : interesting', 'more interesting than', 'the most interesting'],
            ['good', '**better** than', 'the **best**'],
            ['bad', '**worse** than', 'the **worst**'],
            ['far', 'farther / further', 'the farthest / furthest'],
            ['many / much', 'more', 'the most'],
            ['little', 'less', 'the least'],
          ] } ],
    ] },
    { t: 'list', h: 'autres comparaisons', items: [
      'Égalité : **as** tall **as** · not **as** expensive **as**.',
      'Moins : **less** interesting **than** · the **least** expensive.',
      'Progression : It\'s getting **colder and colder**. · **The more** you practise, **the better** you get.',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Compléter.',
      s: [ 'Montréal is (big) than Québec City. → bigger', 'This is (good) pizza in town. → the best', 'Math is (difficult) than music for me. → more difficult', 'She speaks English (good). → well // adverbe', 'The trip was (tire). I was (tire). → tiring / tired' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Corriger : « He is more taller than his brother. »',
      r: 'He is taller than his brother. (pas de « more » avec -er)' },
    { t: 'ex', h: 'Exemple 3 —', q: 'Traduire : « Ce film n\'est pas aussi bon que le livre. »',
      r: 'This movie is not as good as the book.' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          '« more better » ✗.',
          '« I am boring » (= je suis ennuyant) au lieu de « I am bored ».',
          '« She sings good » ✗ → well.',
        ] } ],
      [ { t: 'retenir', items: [
          'Court : -er / -est ; long : more / most.',
          'good → better → best.',
          '-ed = je ressens ; -ing = ça cause.',
        ] } ],
    ] },
  ],
},

/* ============ 19. Pronouns, determiners, articles ============ */
pronouns: {
  bulle: 'pronouns and articles',
  sous: 'Pronouns, determiners and articles',
  recto: [
    { t: 'tab', h: 'les pronoms', full: true,
      head: ['Subject', 'Object', 'Possessive adj.', 'Possessive pron.', 'Reflexive'],
      rows: [
        ['I', 'me', 'my', 'mine', 'myself'],
        ['you', 'you', 'your', 'yours', 'yourself'],
        ['he', 'him', 'his', 'his', 'himself'],
        ['she', 'her', 'her', 'hers', 'herself'],
        ['it', 'it', 'its', '—', 'itself'],
        ['we', 'us', 'our', 'ours', 'ourselves'],
        ['they', 'them', 'their', 'theirs', 'themselves'],
      ],
      note: 'Le possessif s\'accorde avec le possesseur : his mother (la mère de lui), her father (le père d\'elle).' },
    { t: 'cols', c: [
      [ { t: 'list', h: 'les articles', items: [
          '**a** devant un **son** consonne : a book, a **u**niversity (/ju/).',
          '**an** devant un **son** voyelle : an apple, an **h**our (h muet).',
          '**the** : chose précise ou déjà connue : **The** book on the table is mine.',
          '**Pas d\'article** pour les généralités : I love **music**. · **Dogs** are loyal. (✗ The dogs are loyal, au sens général)',
          'Pas d\'article devant : les repas (have lunch), la plupart des pays (Canada), les sports, les langues.',
        ] } ],
      [ { t: 'list', h: 'dénombrable ou non ?', items: [
          '**Countable** : a chair, two chairs → **many**, **a few**.',
          '**Uncountable** : water, money, **information**, **advice**, **homework**, **furniture**, **news** → **much**, **a little** ; jamais de -s ni de « a ».',
          '**some** (phrases affirmatives, offres) · **any** (négations, questions).',
          '**a lot of** : les deux types.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Pronoms.',
      s: [ 'Julie called ___ brother. → her', 'This phone is not yours, it\'s ___. → mine', 'Tom hurt ___ while skiing. → himself', 'Can you help ___ ? (nous) → us' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Articles.',
      s: [ 'She is ___ honest person. → an // h muet', 'I want to become ___ engineer. → an', '___ life is beautiful. → (aucun article) // sens général' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Corriger : « Can you give me an advice? I need some informations. »',
      r: 'Can you give me some advice (ou a piece of advice)? I need some information.' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          '« his » pour une femme (possesseur !).',
          '« informations », « advices », « homeworks » ✗.',
          'Mettre « the » devant une généralité (the nature, the love).',
        ] } ],
      [ { t: 'retenir', items: [
          'a / an selon le son.',
          'Généralité : pas d\'article.',
          'much (non dénombrable) / many (dénombrable).',
        ] } ],
    ] },
  ],
},

/* ============ 20. Questions ============ */
questions: {
  bulle: 'questions',
  sous: 'Poser des questions (word order, tag questions, indirect questions)',
  recto: [
    { t: 'box', h: 'l\'ordre de base (QASV)', f: 'Question word + Auxiliary + Subject + Verb', note: 'Where <b>do</b> you <b>live</b>? · What <b>are</b> you <b>doing</b>? · Why <b>did</b> she <b>leave</b>?' },
    { t: 'cols', c: [
      [ { t: 'tab', h: 'les mots interrogatifs', full: true, lcol: true,
          head: ['Mot', 'Sens'],
          rows: [
            ['who', 'qui (personne)'],
            ['what', 'quoi, quel'],
            ['where', 'où'],
            ['when', 'quand'],
            ['why', 'pourquoi'],
            ['how', 'comment'],
            ['which', 'lequel (choix limité)'],
            ['whose', 'à qui'],
            ['how much / how many', 'combien (non dénombrable / dénombrable)'],
            ['how long / how often', 'combien de temps / à quelle fréquence'],
          ] } ],
      [ { t: 'list', h: 'questions sur le sujet', items: [
          'Quand **who** ou **what** est le **sujet**, pas d\'auxiliaire do : **Who called** you? (✗ Who did call you?)',
          'Comparer : **Who** did you call? (who = objet)',
        ] },
        { t: 'list', h: 'tag questions', items: [
          'Petite question à la fin pour vérifier ou demander un accord.',
          'Phrase **positive** → tag **négatif** : You are coming, **aren\'t you**?',
          'Phrase **négative** → tag **positif** : She doesn\'t like pizza, **does she**?',
          'On reprend l\'auxiliaire : He can swim, **can\'t he**? · They went, **didn\'t they**?',
          'Particulier : I am late, **aren\'t I**?',
        ] } ],
    ] },
    { t: 'list', h: 'indirect questions (plus polies)', items: [
      'Can you tell me / Do you know + mot interrogatif + **sujet + verbe** (ordre d\'une affirmation).',
      'Where **is** the station? → Can you tell me where the station **is**?',
      'Yes / no → **if** : Do you know **if** the store is open?',
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Former la question.',
      s: [ 'she / work / where? → Where does she work?', 'you / go / yesterday / where? → Where did you go yesterday?', 'they / wait / how long? → How long have they been waiting?' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Tag questions.',
      s: [ 'It\'s cold today, ___? → isn\'t it', 'You didn\'t finish, ___? → did you', 'She has been there, ___? → hasn\'t she' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Rendre plus poli : « What time does the museum open? »',
      r: 'Could you tell me what time the museum opens?' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          '« Where you live? » ✗ (auxiliaire manquant).',
          '« Where does she lives? » ✗ (pas de -s après does).',
          'Garder l\'inversion dans une question indirecte : « Can you tell me where is the station? » ✗.',
        ] } ],
      [ { t: 'retenir', items: [
          'Q + Aux + S + V.',
          'Tag : positif → négatif, négatif → positif.',
          'Indirecte : ordre d\'une affirmation.',
        ] } ],
    ] },
  ],
},

/* ============ 21. Linking words ============ */
'linking-words': {
  bulle: 'linking words',
  sous: 'Linking words (connecteurs)',
  recto: [
    { t: 'tab', full: true, lcol: true,
      head: ['Sens', 'Connecteurs'],
      rows: [
        ['**addition**', 'and, also, moreover, furthermore, in addition, besides'],
        ['**contrast**', 'but, however, although, even though, whereas, while, on the other hand, nevertheless'],
        ['**cause**', 'because, since, as, due to (+ nom), because of (+ nom)'],
        ['**result**', 'so, therefore, as a result, consequently, that\'s why'],
        ['**example**', 'for example, for instance, such as, like'],
        ['**sequence**', 'first, second, then, next, after that, finally'],
        ['**purpose**', 'to, in order to, so that'],
        ['**concession**', 'despite / in spite of (+ nom ou -ing), although'],
        ['**conclusion**', 'in conclusion, to sum up, all in all, overall'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'ponctuation', items: [
          '**However**, **Moreover**, **Therefore** en début de phrase → **virgule** après : However, it was too late.',
          'Entre deux phrases : point-virgule ou point avant however : It rained; however, we went out.',
          '**Although** relie deux propositions : Although it rained, we went out.',
        ] } ],
      [ { t: 'list', h: 'attention à la structure', items: [
          '**despite** + nom ou -ing : Despite **the rain**… · Despite **being** tired…',
          '**although** + sujet + verbe : Although **it was raining**…',
          '**because of** + nom · **because** + sujet + verbe.',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Choisir le bon connecteur.',
      s: [ 'I studied hard; ___, I failed the test. → however', 'She stayed home ___ she was sick. → because', 'He loves sports, ___ hockey and soccer. → such as', '___ the traffic, we arrived on time. → Despite' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Relier : « Electric cars are expensive. They are better for the environment. »',
      s: [ 'Although electric cars are expensive, they are better for the environment.', 'Electric cars are expensive. However, they are better for the environment.' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Corriger : « Despite it was cold, we went skating. »',
      r: 'Although it was cold, we went skating. / Despite the cold, we went skating.' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          '« Despite of » ✗ → despite / in spite of.',
          'Utiliser toujours « and » et « but » : varier.',
          'Oublier la virgule après However.',
        ] } ],
      [ { t: 'retenir', items: [
          'However, Moreover, Therefore + virgule.',
          'Although + phrase ; despite + nom.',
          'Varier les connecteurs dans un texte.',
        ] } ],
    ] },
  ],
},

/* ============ 22. Phrasal verbs and idioms ============ */
'phrasal-verbs': {
  bulle: 'phrasal verbs and idioms',
  sous: 'Phrasal verbs and idioms',
  recto: [
    { t: 'txt', p: [ 'Un **phrasal verb** est un verbe + une particule (up, out, off, on…). Son sens est souvent **différent** du verbe seul : **give** = donner, **give up** = abandonner.' ] },
    { t: 'tab', h: 'phrasal verbs fréquents', full: true, lcol: true,
      head: ['Phrasal verb', 'Sens', 'Exemple'],
      rows: [
        ['give up', 'abandonner, arrêter', 'Don\'t give up!'],
        ['find out', 'découvrir, apprendre', 'I found out the truth.'],
        ['look for', 'chercher', 'I\'m looking for my keys.'],
        ['look after', 's\'occuper de', 'She looks after her little brother.'],
        ['look forward to', 'avoir hâte de (+ -ing)', 'I look forward to seeing you.'],
        ['get along (with)', 's\'entendre (avec)', 'I get along with my sister.'],
        ['put off', 'remettre à plus tard', 'Stop putting off your homework.'],
        ['run out of', 'manquer de', 'We ran out of milk.'],
        ['turn down', 'refuser ; baisser (le son)', 'He turned down the job offer.'],
        ['come up with', 'trouver (une idée)', 'She came up with a great plan.'],
        ['figure out', 'comprendre, trouver la solution', 'I can\'t figure out this problem.'],
        ['hang out', 'passer du temps (avec des amis)', 'We hang out after school.'],
        ['break down', 'tomber en panne', 'The car broke down.'],
        ['set up', 'installer, organiser', 'They set up a new club.'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'séparables ou non ?', items: [
          'Séparables : turn **it** down, put **it** off (avec un pronom, il va **au milieu**).',
          'Inséparables : look **after** him, get **along with** her.',
        ] } ],
      [ { t: 'tab', h: 'idioms', full: true, lcol: true,
          head: ['Idiom', 'Sens'],
          rows: [
            ['a piece of cake', 'très facile'],
            ['break the ice', 'briser la glace'],
            ['hit the books', 'étudier fort'],
            ['under the weather', 'un peu malade'],
            ['cost an arm and a leg', 'coûter très cher'],
            ['once in a blue moon', 'très rarement'],
            ['spill the beans', 'révéler un secret'],
            ['on the fence', 'indécis'],
          ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Remplacer par un phrasal verb.',
      s: [ 'She discovered that the store was closed. → found out', 'I refused the invitation. → turned down', 'We need to postpone the meeting. → put off', 'He has no more battery. → has run out of' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Pronom avec un phrasal verb séparable : « Turn down the music. » (it)',
      r: 'Turn it down. (✗ Turn down it)' },
    { t: 'ex', h: 'Exemple 3 —', q: 'Sens de l\'idiom : « The final exam was a piece of cake! »',
      r: 'L\'examen final était très facile.' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Traduire les idioms mot à mot.',
          'Mettre le pronom après la particule (turn off it ✗).',
          'Oublier que look forward to est suivi de -ing.',
        ] } ],
      [ { t: 'retenir', items: [
          'Verbe + particule = nouveau sens.',
          'Pronom au milieu (séparables).',
          'Apprendre avec un exemple.',
        ] } ],
    ] },
  ],
},

/* ============ 23. Prepositions ============ */
prepositions: {
  bulle: 'prepositions',
  sous: 'Prepositions of time, place and movement',
  recto: [
    { t: 'cols', c: [
      [ { t: 'tab', h: 'le temps', full: true, lcol: true,
          head: ['Préposition', 'Avec…', 'Exemple'],
          rows: [
            ['**at**', 'heures, moments précis', 'at 7 o\'clock, at noon, at night'],
            ['**on**', 'jours, dates', 'on Monday, on July 1st, on my birthday'],
            ['**in**', 'mois, années, saisons, parties de la journée, durées', 'in May, in 2025, in winter, in the morning, in two weeks'],
            ['**for**', 'durée', 'for three hours'],
            ['**since**', 'point de départ', 'since 2020'],
            ['**during**', 'pendant (un événement)', 'during the game'],
            ['**by**', 'au plus tard', 'by Friday'],
          ] } ],
      [ { t: 'tab', h: 'le lieu', full: true, lcol: true,
          head: ['Préposition', 'Avec…', 'Exemple'],
          rows: [
            ['**at**', 'un point, une adresse, un lieu d\'activité', 'at school, at home, at the bus stop, at 25 Main Street'],
            ['**in**', 'un espace fermé, une ville, un pays', 'in the room, in Montréal, in Canada'],
            ['**on**', 'une surface, une rue, un transport', 'on the table, on Main Street, on the bus'],
          ] },
        { t: 'tab', h: 'le mouvement', full: true, lcol: true,
          head: ['Préposition', 'Exemple'],
          rows: [
            ['**to**', 'go to school'],
            ['**into**', 'walk into the room'],
            ['**out of**', 'get out of the car'],
            ['**through**, **across**', 'through the forest, across the street'],
          ] } ],
    ] },
    { t: 'tab', h: 'verbes et adjectifs + préposition', full: true, lcol: true,
      head: ['Expression', 'Expression', 'Expression'],
      rows: [
        ['listen **to**', 'wait **for**', 'depend **on**'],
        ['arrive **at** / **in** (jamais to)', 'interested **in**', 'good **at**'],
        ['afraid **of**', 'proud **of**', 'married **to**'],
        ['different **from**', 'responsible **for**', 'agree **with**'],
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'At, on ou in ?',
      s: [ 'My birthday is ___ March. → in', 'The game starts ___ 7:30. → at', 'We have a test ___ Friday. → on', 'She lives ___ Sherbrooke. → in', 'I left my book ___ the kitchen table. → on' ] },
    { t: 'ex', h: 'Exemple 2 —', q: 'Corriger : « I arrived to Toronto on the morning and I waited my friend. »',
      r: 'I arrived in Toronto in the morning and I waited for my friend.' },
    { t: 'ex', h: 'Exemple 3 —', q: 'Traduire : « Il est bon en maths et il s\'intéresse à la science. »',
      r: 'He is good at math and he is interested in science.' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          '« arrive to » ✗ → arrive at / in.',
          '« on the morning » ✗ → in the morning (mais on Monday morning).',
          '« wait someone » ✗ → wait for someone.',
        ] } ],
      [ { t: 'retenir', items: [
          'at (heure) · on (jour) · in (mois, année).',
          'at (point) · on (surface) · in (dedans).',
          'Apprendre les verbes avec leur préposition.',
        ] } ],
    ] },
  ],
},

/* ============ 24. Faux amis ============ */
'faux-amis': {
  bulle: 'faux amis',
  sous: 'Faux amis et erreurs fréquentes des francophones',
  recto: [
    { t: 'tab', h: 'faux amis', full: true, lcol: true,
      head: ['Mot anglais', 'Veut dire…', 'Pour dire le mot français, on écrit…'],
      rows: [
        ['**actually**', 'en fait', 'actuellement → currently, now'],
        ['**eventually**', 'finalement, à la longue', 'éventuellement → possibly'],
        ['**library**', 'bibliothèque', 'librairie → bookstore'],
        ['**sensible**', 'raisonnable, sensé', 'sensible → sensitive'],
        ['**deception**', 'tromperie', 'déception → disappointment'],
        ['**assist**', 'aider', 'assister à → attend'],
        ['**pass** (an exam)', 'réussir', 'passer un examen → take / write an exam'],
        ['**lecture**', 'cours magistral, conférence', 'lecture → reading'],
        ['**coin**', 'pièce de monnaie', 'coin → corner'],
        ['**college**', 'établissement postsecondaire (souvent)', 'collège (au sens de cégep) → CEGEP, college'],
        ['**chance**', 'possibilité, occasion', 'chance (bonne fortune) → luck'],
        ['**achieve**', 'réaliser, atteindre', 'achever → finish, complete'],
      ] },
    { t: 'tab', h: 'calques du français à éviter', full: true, lcol: true,
      head: ['✗ Erreur', '✓ Correct'],
      rows: [
        ['I have 16 years old.', 'I **am** 16 years old.'],
        ['I am agree.', 'I agree.'],
        ['I live here since 2019.', 'I **have lived** here since 2019.'],
        ['It depends of…', 'It depends **on**…'],
        ['People is nice.', 'People **are** nice.'],
        ['He don\'t like it.', 'He **doesn\'t** like it.'],
        ['I\'m going to the doctor for my exam.', 'I\'m going to the doctor for a **check-up**.'],
        ['Explain me.', 'Explain **to** me.'],
        ['I make my homework.', 'I **do** my homework.'],
      ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple 1 —', q: 'Trouver le faux ami et corriger : « Actually, I work in a library where I sell books. »',
      s: [ '« Actually » → si on veut dire « actuellement » : Currently', '« library » → on n\'y vend pas de livres : bookstore' ], r: 'Currently, I work in a bookstore where I sell books.' },
    { t: 'ex', h: 'Exemple 2 —', q: 'Make ou do ?',
      s: [ '___ a mistake → make', '___ your homework → do', '___ a decision → make', '___ the dishes → do', '___ friends → make' ] },
    { t: 'ex', h: 'Exemple 3 —', q: 'Corriger : « I passed my exam yesterday but I didn\'t pass it. » (on voulait dire : j\'ai passé l\'examen, mais je ne l\'ai pas réussi)',
      r: 'I took (ou wrote) my exam yesterday, but I didn\'t pass it.' },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Faire confiance à un mot seulement parce qu\'il ressemble au français.',
          'Traduire mot à mot une expression française.',
        ] } ],
      [ { t: 'retenir', items: [
          'actually = en fait ; library = bibliothèque.',
          'I am 16 ; I agree.',
          'make (créer) vs do (tâche).',
        ] } ],
    ] },
  ],
},

/* ============ 25. Examen ============ */
examen: {
  bulle: 'l\'épreuve de fin d\'année',
  sous: 'Épreuve ministérielle d\'anglais de 5<sup>e</sup> secondaire : méthode',
  recto: [
    { t: 'txt', p: [ 'En 5<sup>e</sup> secondaire, l\'épreuve ministérielle d\'anglais langue seconde évalue surtout la capacité à **comprendre des textes** (écrits, audio, vidéo) sur un thème et à **réinvestir** cette compréhension dans une **tâche d\'écriture**. Elle se déroule en plusieurs étapes, sur plus d\'une période. Les modalités exactes (programme de base ou enrichi, durée, outils permis) sont précisées chaque année : **vérifie-les avec ton enseignant**.' ] },
    { t: 'tab', h: 'déroulement typique', full: true, lcol: true,
      head: ['Étape', 'Ce que tu fais'],
      rows: [
        ['**Préparation** (thème)', 'lire, écouter, visionner des textes sur un même thème ; prendre des notes ; discuter en équipe'],
        ['**Compréhension**', 'répondre à des questions ou remplir des organisateurs graphiques pour montrer ce que tu as compris'],
        ['**Production écrite**', 'rédiger un texte (ex. texte d\'opinion, article, lettre) qui **réutilise** les informations des textes'],
      ] },
    { t: 'cols', c: [
      [ { t: 'list', h: 'ce qu\'on évalue (généralement)', items: [
          '**Compréhension** des textes et **réinvestissement** des idées.',
          '**Contenu** : idées pertinentes, précises, justifiées.',
          '**Organisation** : structure claire, paragraphes, connecteurs.',
          '**Langue** (formulation) : vocabulaire varié, grammaire, orthographe.',
        ] } ],
      [ { t: 'list', h: 'stratégies gagnantes', items: [
          'Pendant la préparation, **noter** les faits, les exemples, les mots utiles.',
          'Lire la tâche d\'écriture **deux fois** : text type, audience, purpose.',
          'Faire un **plan** avant d\'écrire.',
          'Utiliser des infos de **plusieurs textes**.',
          'Garder du temps pour **relire** (checklist).',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'ex', h: 'Exemple de plan —', q: 'Task: Write an opinion text for your school newspaper: « Should teenagers have a part-time job during the school year? » (thème fictif)',
      s: [ 'thesis → Yes, but no more than 15 hours a week.', 'argument 1 → Financial independence (text 1: teens save for college)', 'argument 2 → Learning responsibility (video: interview with an employer)', 'counterargument → Some say it hurts grades. However, a limited schedule prevents that (text 2).', 'conclusion → call to action: talk with your parents about a balanced schedule' ] },
    { t: 'tab', h: 'checklist de révision', full: true, lcol: true,
      head: ['Contenu et organisation', 'Langue'],
      rows: [
        ['opinion claire dans l\'introduction ?', '-s à la 3<sup>e</sup> personne ?'],
        ['un argument par paragraphe ?', 'temps de verbes cohérents ?'],
        ['exemples tirés des textes ?', 'faux amis, calques du français ?'],
        ['connecteurs variés ?', 'majuscules, ponctuation ?'],
        ['conclusion qui reprend l\'opinion ?', 'mots répétés → synonymes ?'],
      ] },
    { t: 'cols', c: [
      [ { t: 'pieges', items: [
          'Écrire sans utiliser les textes de préparation.',
          'Recopier des phrases entières des textes.',
          'Ne pas respecter le type de texte demandé.',
          'Manquer de temps pour relire.',
        ] } ],
      [ { t: 'retenir', items: [
          'Comprendre → noter → planifier → écrire → réviser.',
          'Réinvestir les idées de plusieurs textes.',
          'Vérifier les modalités de l\'année.',
        ] } ],
    ] },
  ],
},

/* ============ GÉNÉRAL ============ */
general: {
  bulle: 'anglais : tout en 1',
  sous: 'Résumé de l\'année — Anglais, langue seconde, secondaire 5',
  recto: [
    { t: 'cols', c: [
      [ { t: 'list', h: 'processus et textes', items: [
          '**Response Process** : Explore → Personal connection → Generalize.',
          '**Writing Process** : Plan → Draft → Revise → Edit → Publish.',
          '**Production Process** : Preproduction → Production → Postproduction.',
          '**Opinion text** : hook + thesis, 1 argument par paragraphe, counterargument, call to action.',
          '**Formal letter** : Dear Ms. …, I am writing to…, Sincerely,',
          '**Functional language** : In my opinion… · I see your point, but… · What do you think?',
        ] } ],
      [ { t: 'tab', h: 'les temps de verbes', full: true, lcol: true,
          head: ['Temps', 'Forme', 'Emploi'],
          rows: [
            ['simple present', 'she works', 'habitude'],
            ['present continuous', 'she is working', 'maintenant'],
            ['simple past', 'she worked / went', 'terminé, moment précis'],
            ['past continuous', 'she was working', 'en cours dans le passé'],
            ['present perfect', 'she has worked', 'expérience, for / since'],
            ['past perfect', 'she had worked', 'avant une autre action passée'],
            ['future', 'will / going to', 'décision / plan'],
          ] } ],
    ] },
    { t: 'cols', c: [
      [ { t: 'form', h: 'structures clés', items: [
          ['modals', 'modal + base (can go)'],
          ['conditionals', 'If + present, will · If + past, would · If + had p.p., would have p.p.'],
          ['passive', 'be + past participle'],
          ['reported', 'backshift ; told me to…'],
          ['questions', 'Q + Aux + S + V'],
        ] } ],
      [ { t: 'list', h: 'petits mots importants', items: [
          'at (heure) · on (jour) · in (mois, année).',
          'a / an selon le son ; pas d\'article pour une généralité.',
          'enjoy + -ing · want + to · après préposition → -ing.',
          'Although + phrase · despite + nom · However, …',
          'good → better → best ; -ed (ressentir) vs -ing (causer).',
        ] } ],
    ] },
  ],
  verso: [
    { t: 'tab', h: 'les 10 erreurs les plus fréquentes', full: true, lcol: true,
      head: ['✗ Erreur', '✓ Correct'],
      rows: [
        ['He play hockey.', 'He play**s** hockey.'],
        ['Did you went?', 'Did you **go**?'],
        ['I have 16 years.', 'I **am** 16.'],
        ['I live here since 2019.', 'I **have lived** here since 2019.'],
        ['If I would have time…', 'If I **had** time…'],
        ['She cans to swim.', 'She **can swim**.'],
        ['more better', '**better**'],
        ['an information, advices', '**information**, **advice**'],
        ['I went there for studying.', 'I went there **to study**.'],
        ['Actually (= actuellement)', '**Currently**'],
      ] },
    { t: 'ex', h: 'Exemple intégrateur —', q: 'Corriger : « Yesterday, my friend tell me that she have never went to Toronto, but if she would win the contest, she will go there for visiting her cousin. »',
      s: [ 'tell → told // simple past', 'have never went → had never been // reported speech + participe', 'would win → won // 2<sup>e</sup> conditionnel', 'will go → would go', 'for visiting → to visit' ],
      r: 'Yesterday, my friend told me that she had never been to Toronto, but if she won the contest, she would go there to visit her cousin.' },
    { t: 'retenir', items: [
      'Parler et écrire en anglais le plus possible : les erreurs font partie de l\'apprentissage.',
      'Relire en ciblant ses erreurs habituelles (checklist personnelle).',
      'Réutiliser les expressions et connecteurs appris.',
    ] },
  ],
},

};
