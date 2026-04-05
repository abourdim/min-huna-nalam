/* من هنا نعلم — THIS IS WHERE WE LEARN — app.js v1.0 */
/* Based on "Min Huna Na'lam" by Sheikh Mohammed al-Ghazali (1917-1996) */
/* Response to Khalid Muhammad Khalid's "From Here We Begin" */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'من هنا نعلم',
    splashSub: 'الإسلام دين ودولة — رد علمي على دعاة العلمانية',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الشورى ٤٢: ١٣',
    tabHome: 'الرئيسية', tabKnowledge: 'المعرفة', tabPath: 'المسار', tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    knowledgeTitle: 'أسس المعرفة الإسلامية',
    knowledgeDesc: '٢٠ بطاقة معرفية من كتاب "من هنا نعلم" — الإسلام نظام شامل للحياة',
    pathTitle: 'مسار الاكتشاف',
    pathDesc: 'رحلة تدريجية في فهم شمولية الإسلام',
    quizTitle: 'من يريد أن يكون عالماً؟',
    quizDesc: 'اختبر معرفتك بأسلوب تصاعدي — أجب وافتح أسئلة أصعب',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية طلب العلم',
    dailyLabel: '✨ معرفة اليوم',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في البطاقات...',
    misconception: '❌ الشبهة',
    response: '✅ الرد',
    evidence: '📖 الدليل',
    quizCorrect: 'إجابة صحيحة!',
    quizWrong: 'إجابة خاطئة',
    quizNext: 'السؤال التالي',
    quizFinish: 'النتيجة النهائية',
    quizRestart: 'أعد الاختبار',
    quizScore: 'نتيجتك',
    lifeline5050: '50/50',
    lifelineHint: '📖 اسأل الشيخ',
    lifelineIstikhara: '🤲 استخارة',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    badgeEarned: 'حصلت على وسام!',
    streakMsg: 'يوم متتالي!',
    youngMode: '🌱 المستكشف الصغير',
    teenMode: '📚 الباحث الشاب',
    splashFeatures: [
      '٢٠ بطاقة معرفية عن الإسلام كنظام شامل',
      'مسار اكتشاف تدريجي',
      'اختبار "من يريد أن يكون عالماً؟"',
      'نظام نقاط وأوسمة + أدعية'
    ],
  },
  en: {
    appTitle: 'This Is Where We Learn',
    splashSub: 'Islam as both religion and state — a scholarly response to secularism',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Ash-Shura 42:13',
    tabHome: 'Home', tabKnowledge: 'Knowledge', tabPath: 'Path', tabQuiz: 'Quiz', tabAbout: 'Book',
    knowledgeTitle: 'Foundations of Islamic Knowledge',
    knowledgeDesc: '20 knowledge cards from "This Is Where We Learn" — Islam as a complete system',
    pathTitle: 'Discovery Path',
    pathDesc: 'A progressive journey to understand Islam\'s comprehensive nature',
    quizTitle: 'Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge with progressive difficulty — unlock harder questions',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Seeking Knowledge',
    dailyLabel: '✨ Today\'s Knowledge',
    share: 'Share',
    searchPlaceholder: 'Search cards...',
    misconception: '❌ The Misconception',
    response: '✅ The Response',
    evidence: '📖 The Evidence',
    quizCorrect: 'Correct!',
    quizWrong: 'Wrong answer',
    quizNext: 'Next Question',
    quizFinish: 'Final Score',
    quizRestart: 'Retake Quiz',
    quizScore: 'Your Score',
    lifeline5050: '50/50',
    lifelineHint: '📖 Ask the Sheikh',
    lifelineIstikhara: '🤲 Istikhara',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    badgeEarned: 'Badge earned!',
    streakMsg: 'day streak!',
    youngMode: '🌱 Young Explorer',
    teenMode: '📚 Teen Scholar',
    splashFeatures: [
      '20 knowledge cards on Islam as a complete system',
      'Progressive discovery path',
      '"Who Wants to Be a Scholar?" quiz',
      'XP system & badges + duas'
    ],
  },
  fr: {
    appTitle: 'C\'est Ici Que Nous Apprenons',
    splashSub: 'L\'Islam, religion et État — une réponse savante à la laïcité',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Ash-Shura 42:13',
    tabHome: 'Accueil', tabKnowledge: 'Savoir', tabPath: 'Parcours', tabQuiz: 'Quiz', tabAbout: 'Livre',
    knowledgeTitle: 'Fondements du Savoir Islamique',
    knowledgeDesc: '20 cartes de savoir de « C\'est Ici Que Nous Apprenons » — l\'Islam comme système complet',
    pathTitle: 'Parcours de Découverte',
    pathDesc: 'Un voyage progressif pour comprendre la nature globale de l\'Islam',
    quizTitle: 'Qui Veut Être Savant ?',
    quizDesc: 'Testez vos connaissances avec difficulté progressive — débloquez des questions plus difficiles',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour la Quête du Savoir',
    dailyLabel: '✨ Savoir du Jour',
    share: 'Partager',
    searchPlaceholder: 'Rechercher les cartes...',
    misconception: '❌ L\'idée reçue',
    response: '✅ La Réponse',
    evidence: '📖 La Preuve',
    quizCorrect: 'Correct !',
    quizWrong: 'Mauvaise réponse',
    quizNext: 'Question Suivante',
    quizFinish: 'Score Final',
    quizRestart: 'Refaire le Quiz',
    quizScore: 'Votre Score',
    lifeline5050: '50/50',
    lifelineHint: '📖 Demander au Cheikh',
    lifelineIstikhara: '🤲 Istikhara',
    xpLabel: 'Points d\'Expérience',
    levelLabel: 'Niveau',
    badgeEarned: 'Médaille obtenue !',
    streakMsg: 'jours consécutifs !',
    youngMode: '🌱 Jeune Explorateur',
    teenMode: '📚 Chercheur Ado',
    splashFeatures: [
      '20 cartes de savoir sur l\'Islam comme système complet',
      'Parcours de découverte progressif',
      'Quiz « Qui Veut Être Savant ? »',
      'Système XP & médailles + duas'
    ],
  }
};

// ═══════════════ KNOWLEDGE CARDS DATA (20 cards) ═══════════════
const KNOWLEDGE = [
  {
    id:1, emoji:'📍', category:'foundation',
    ar:{title:'من هنا نعلم',desc:'كتبه الغزالي عام ١٩٥٠ رداً نقطياً على كتاب خالد محمد خالد "من هنا نبدأ" الذي دعا إلى فصل الدين عن الدولة. يثبت الغزالي أن الإسلام نظام شامل: عقيدة وعبادة وأخلاق ومعاملات وحكم. خالد نفسه تراجع لاحقاً في كتابه "الدولة في الإسلام".',misconception:'الدين شأن شخصي فقط ولا علاقة له بالدولة',response:'الإسلام جاء بنظام متكامل: عقيدة وشريعة وأخلاق ودولة. فصل الدين عن الحياة يناقض جوهر الرسالة الإسلامية',evidence:'شَرَعَ لَكُم مِّنَ الدِّينِ مَا وَصَّىٰ بِهِ نُوحًا — الشورى ٤٢: ١٣'},
    en:{title:'This Is Where We Learn',desc:'Islam is not merely rituals and worship, but a comprehensive system governing all aspects of life: creed, worship, ethics, transactions, and governance. This is what Sheikh al-Ghazali proves in his scholarly response.',misconception:'Religion is a purely personal matter with no relation to the state',response:'Islam came as an integrated system: creed, law, ethics, and governance. Separating religion from life contradicts the very essence of the Islamic message',evidence:'He has ordained for you the same religion He enjoined upon Noah — Ash-Shura 42:13'},
    fr:{title:'C\'est Ici Que Nous Apprenons',desc:'L\'Islam n\'est pas simplement des rituels et des cultes, mais un système global qui régit tous les aspects de la vie : croyance, culte, éthique, transactions et gouvernance. C\'est ce que le Cheikh al-Ghazali prouve dans sa réponse savante.',misconception:'La religion est une affaire purement personnelle sans rapport avec l\'État',response:'L\'Islam est venu comme un système intégré : croyance, loi, éthique et gouvernance. Séparer la religion de la vie contredit l\'essence même du message islamique',evidence:'Il vous a prescrit en matière de religion ce qu\'Il avait enjoint à Noé — Ash-Shura 42:13'}
  },
  {
    id:2, emoji:'⚖️', category:'governance',
    ar:{title:'العدل أساس الحكم',desc:'الحكم في الإسلام مبني على العدل المطلق. لا يجوز للحاكم أن يظلم ولو كان المظلوم غير مسلم. العدل فريضة لا فضيلة اختيارية.',misconception:'الحكم الإسلامي استبداد ديني',response:'الإسلام سبق العالم في تقييد سلطة الحاكم. الحاكم في الإسلام خادم للأمة لا سيدها، ومقيد بالشريعة والشورى',evidence:'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ — النحل ١٦: ٩٠'},
    en:{title:'Justice Is the Foundation of Governance',desc:'Governance in Islam is built upon absolute justice. A ruler may not oppress anyone, even non-Muslims. Justice is an obligation, not an optional virtue.',misconception:'Islamic governance is religious tyranny',response:'Islam preceded the world in restricting the ruler\'s power. The ruler in Islam is a servant of the community, not its master, and is bound by divine law and consultation',evidence:'Indeed, God commands justice and good conduct — An-Nahl 16:90'},
    fr:{title:'La Justice, Fondement de la Gouvernance',desc:'La gouvernance en Islam est fondée sur la justice absolue. Un dirigeant ne peut opprimer personne, même les non-musulmans. La justice est une obligation, pas une vertu optionnelle.',misconception:'La gouvernance islamique est une tyrannie religieuse',response:'L\'Islam a précédé le monde en limitant le pouvoir du dirigeant. Le dirigeant en Islam est un serviteur de la communauté, pas son maître, et il est lié par la loi divine et la consultation',evidence:'Certes, Dieu commande la justice et la bienfaisance — An-Nahl 16:90'}
  },
  {
    id:3, emoji:'🤝', category:'governance',
    ar:{title:'الشورى منهج إسلامي',desc:'الشورى ليست مجرد توصية بل فريضة إلهية. الحاكم المسلم ملزم بمشاورة أهل العلم والخبرة. الاستبداد مرفوض في الإسلام رفضاً قاطعاً.',misconception:'الإسلام لا يعرف الديمقراطية',response:'الشورى أسبق من الديمقراطية الحديثة بأربعة عشر قرناً. الفرق أن الشورى تستند إلى قيم ثابتة بينما الديمقراطية قد تبيح ما يتناقض مع الفطرة',evidence:'وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ — الشورى ٤٢: ٣٨'},
    en:{title:'Consultation Is an Islamic Methodology',desc:'Consultation (shura) is not merely a recommendation but a divine obligation. The Muslim ruler is bound to consult people of knowledge and expertise. Tyranny is categorically rejected in Islam.',misconception:'Islam does not know democracy',response:'Consultation preceded modern democracy by fourteen centuries. The difference is that shura is anchored in stable values, while democracy may permit what contradicts human nature',evidence:'And their affairs are conducted by mutual consultation — Ash-Shura 42:38'},
    fr:{title:'La Consultation, Méthode Islamique',desc:'La consultation (shura) n\'est pas une simple recommandation mais une obligation divine. Le dirigeant musulman est tenu de consulter les gens de savoir et d\'expertise. La tyrannie est catégoriquement rejetée en Islam.',misconception:'L\'Islam ne connaît pas la démocratie',response:'La consultation a précédé la démocratie moderne de quatorze siècles. La différence est que la shura repose sur des valeurs stables, tandis que la démocratie peut permettre ce qui contredit la nature humaine',evidence:'Et ceux dont les affaires se traitent par consultation entre eux — Ash-Shura 42:38'}
  },
  {
    id:4, emoji:'📚', category:'knowledge',
    ar:{title:'العلم فريضة',desc:'الإسلام أول دين يجعل طلب العلم فريضة على كل مسلم ومسلمة. لم يفرّق بين علم ديني ودنيوي — فكل علم نافع عبادة.',misconception:'الإسلام عدو للعلم والتقدم',response:'أول كلمة نزلت في القرآن "اقرأ". الحضارة الإسلامية قادت العالم علمياً لثمانية قرون. العلماء المسلمون أسسوا علوماً كاملة كالجبر والكيمياء والبصريات',evidence:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ — العلق ٩٦: ١'},
    en:{title:'Knowledge Is an Obligation',desc:'Islam is the first religion to make seeking knowledge obligatory for every Muslim, male and female. It did not distinguish between religious and worldly knowledge — every beneficial knowledge is worship.',misconception:'Islam is the enemy of science and progress',response:'The first word revealed in the Quran was "Read." Islamic civilization led the world scientifically for eight centuries. Muslim scholars founded entire disciplines like algebra, chemistry, and optics',evidence:'Read in the name of your Lord who created — Al-Alaq 96:1'},
    fr:{title:'Le Savoir Est une Obligation',desc:'L\'Islam est la première religion à rendre la quête du savoir obligatoire pour tout musulman et musulmane. Il n\'a pas distingué entre savoir religieux et profane — tout savoir bénéfique est un acte d\'adoration.',misconception:'L\'Islam est l\'ennemi de la science et du progrès',response:'Le premier mot révélé dans le Coran était « Lis ». La civilisation islamique a mené le monde scientifiquement pendant huit siècles. Les savants musulmans ont fondé des disciplines entières comme l\'algèbre, la chimie et l\'optique',evidence:'Lis au nom de ton Seigneur qui a créé — Al-Alaq 96:1'}
  },
  {
    id:5, emoji:'💰', category:'economics',
    ar:{title:'الاقتصاد الإسلامي',desc:'الإسلام وضع نظاماً اقتصادياً متكاملاً يحارب الفقر والاحتكار. الزكاة ليست صدقة بل حق الفقير في مال الغني — نظام ضمان اجتماعي سبق العالم.',misconception:'الإسلام لا يملك نظرية اقتصادية',response:'الإسلام حرّم الربا والاحتكار، وفرض الزكاة، ونظّم الملكية الخاصة والعامة. هذا نظام اقتصادي أخلاقي متكامل يوازن بين حرية الفرد ومصلحة المجتمع',evidence:'كَيْ لَا يَكُونَ دُولَةً بَيْنَ الْأَغْنِيَاءِ مِنكُمْ — الحشر ٥٩: ٧'},
    en:{title:'Islamic Economics',desc:'Islam established a complete economic system that fights poverty and monopoly. Zakat is not charity but the poor\'s right in the wealth of the rich — a social security system that preceded the modern world.',misconception:'Islam has no economic theory',response:'Islam prohibited usury and monopoly, mandated zakat, and regulated private and public ownership. This is a complete ethical economic system that balances individual freedom with community welfare',evidence:'So that wealth does not circulate only among the rich — Al-Hashr 59:7'},
    fr:{title:'L\'Économie Islamique',desc:'L\'Islam a établi un système économique complet qui combat la pauvreté et le monopole. La zakat n\'est pas une charité mais le droit du pauvre dans la richesse du riche — un système de sécurité sociale qui a précédé le monde moderne.',misconception:'L\'Islam n\'a pas de théorie économique',response:'L\'Islam a interdit l\'usure et le monopole, imposé la zakat, et réglementé la propriété privée et publique. C\'est un système économique éthique complet qui équilibre liberté individuelle et bien-être communautaire',evidence:'Afin que les richesses ne circulent pas seulement parmi les riches — Al-Hashr 59:7'}
  },
  {
    id:6, emoji:'👥', category:'society',
    ar:{title:'المساواة بين البشر',desc:'الإسلام أعلن مساواة البشر جميعاً بغض النظر عن اللون والعرق والنسب. لا فضل لعربي على أعجمي إلا بالتقوى. هذه ثورة حقيقية في عالم كان يعبد الأصنام ويستعبد الضعفاء.',misconception:'الإسلام دين عنصري يفضل العرب',response:'النبي أعلن في حجة الوداع: "لا فضل لعربي على أعجمي إلا بالتقوى". بلال الحبشي وسلمان الفارسي وصهيب الرومي كانوا من أقرب الصحابة',evidence:'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا — الحجرات ٤٩: ١٣'},
    en:{title:'Equality Among All People',desc:'Islam declared the equality of all humans regardless of color, race, or lineage. No Arab has superiority over a non-Arab except through piety. This was a true revolution in a world that worshipped idols and enslaved the weak.',misconception:'Islam is a racist religion that favors Arabs',response:'The Prophet declared in his Farewell Sermon: "No Arab has superiority over a non-Arab except through piety." Bilal the Ethiopian, Salman the Persian, and Suhaib the Roman were among the closest companions',evidence:'O humanity, We created you from male and female and made you into nations and tribes that you may know one another — Al-Hujurat 49:13'},
    fr:{title:'L\'Égalité Entre Tous les Êtres Humains',desc:'L\'Islam a déclaré l\'égalité de tous les êtres humains sans distinction de couleur, de race ou de lignée. Aucun Arabe n\'a de supériorité sur un non-Arabe sauf par la piété. Ce fut une vraie révolution dans un monde qui adorait les idoles et asservissait les faibles.',misconception:'L\'Islam est une religion raciste qui favorise les Arabes',response:'Le Prophète a déclaré dans son Sermon d\'Adieu : « Aucun Arabe n\'a de supériorité sur un non-Arabe sauf par la piété. » Bilal l\'Éthiopien, Salman le Persan et Suhaib le Romain étaient parmi les plus proches compagnons',evidence:'Ô humanité, Nous vous avons créés d\'un mâle et d\'une femelle et Nous avons fait de vous des nations et des tribus pour que vous vous entre-connaissiez — Al-Hujurat 49:13'}
  },
  {
    id:7, emoji:'👩', category:'society',
    ar:{title:'مكانة المرأة في الإسلام',desc:'الإسلام رفع مكانة المرأة من كائن مهان يُوأد إلى إنسان مكرّم له حقوق كاملة في التعليم والملكية والعمل والميراث. كرّم الأم أعظم تكريم.',misconception:'الإسلام يضطهد المرأة',response:'الإسلام أعطى المرأة حق الملكية والتعليم والعمل والميراث قبل أن تحصل عليه المرأة الغربية بثلاثة عشر قرناً. خديجة كانت سيدة أعمال ناجحة',evidence:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ — البقرة ٢: ٢٢٨'},
    en:{title:'The Status of Women in Islam',desc:'Islam elevated the status of women from a degraded being buried alive to an honored human with full rights in education, property, work, and inheritance. It honored mothers with the greatest honor.',misconception:'Islam oppresses women',response:'Islam gave women the right to property, education, work, and inheritance thirteen centuries before Western women obtained them. Khadijah was a successful businesswoman',evidence:'And women have rights similar to those over them in kindness — Al-Baqarah 2:228'},
    fr:{title:'Le Statut de la Femme en Islam',desc:'L\'Islam a élevé le statut de la femme d\'un être dégradé enterré vivant à un être humain honoré avec des droits complets en éducation, propriété, travail et héritage. Il a honoré les mères du plus grand honneur.',misconception:'L\'Islam opprime les femmes',response:'L\'Islam a donné aux femmes le droit à la propriété, l\'éducation, le travail et l\'héritage treize siècles avant que les femmes occidentales ne les obtiennent. Khadija était une femme d\'affaires prospère',evidence:'Et elles ont des droits semblables à ceux qui leur incombent selon le convenable — Al-Baqarah 2:228'}
  },
  {
    id:8, emoji:'🕊️', category:'freedom',
    ar:{title:'حرية المعتقد',desc:'الإسلام أقرّ حرية المعتقد بشكل واضح وصريح. لا يجوز إكراه أحد على الدخول في الإسلام. الإيمان الحقيقي لا يكون إلا عن قناعة واختيار حر.',misconception:'الإسلام انتشر بالسيف',response:'القرآن صريح: "لا إكراه في الدين". الشعوب التي فتحها المسلمون احتفظت بأديانها لقرون. أكبر دولة إسلامية (إندونيسيا) لم يصلها جيش مسلم قط',evidence:'لَا إِكْرَاهَ فِي الدِّينِ — البقرة ٢: ٢٥٦'},
    en:{title:'Freedom of Belief',desc:'Islam clearly and explicitly affirmed freedom of belief. No one may be forced to enter Islam. True faith can only come through conviction and free choice.',misconception:'Islam spread by the sword',response:'The Quran is clear: "There is no compulsion in religion." Peoples conquered by Muslims kept their religions for centuries. The largest Muslim country (Indonesia) was never reached by a Muslim army',evidence:'There is no compulsion in religion — Al-Baqarah 2:256'},
    fr:{title:'La Liberté de Croyance',desc:'L\'Islam a affirmé clairement et explicitement la liberté de croyance. Personne ne peut être forcé d\'entrer en Islam. La vraie foi ne peut venir que par conviction et libre choix.',misconception:'L\'Islam s\'est répandu par l\'épée',response:'Le Coran est clair : « Nulle contrainte en religion. » Les peuples conquis par les musulmans ont gardé leurs religions pendant des siècles. Le plus grand pays musulman (l\'Indonésie) n\'a jamais été atteint par une armée musulmane',evidence:'Nulle contrainte en religion — Al-Baqarah 2:256'}
  },
  {
    id:9, emoji:'🏛️', category:'governance',
    ar:{title:'الفصل بين السلطات',desc:'عمر بن الخطاب أسس مبدأ الفصل بين السلطات قبل مونتسكيو بأحد عشر قرناً. فصل القضاء عن الحكم، وجعل القاضي مستقلاً لا يخضع لسلطة الحاكم.',misconception:'الحكم الإسلامي لا يعرف فصل السلطات',response:'عمر بن الخطاب عزل القضاء عن السلطة التنفيذية. وقال للقاضي: "لا يضرك في الله لومة لائم". هذا فصل حقيقي بين السلطات قبل عصر التنوير بقرون',evidence:'حديث: "كلكم راعٍ وكلكم مسؤول عن رعيته" — متفق عليه'},
    en:{title:'Separation of Powers',desc:'Umar ibn al-Khattab established the principle of separation of powers eleven centuries before Montesquieu. He separated the judiciary from governance, making judges independent from the ruler\'s authority.',misconception:'Islamic governance knows no separation of powers',response:'Umar ibn al-Khattab separated the judiciary from executive power. He told the judge: "Let no one\'s blame in God\'s cause deter you." This is a true separation of powers centuries before the Enlightenment',evidence:'Hadith: "Each of you is a shepherd and each is responsible for his flock" — agreed upon'},
    fr:{title:'La Séparation des Pouvoirs',desc:'Omar ibn al-Khattab a établi le principe de séparation des pouvoirs onze siècles avant Montesquieu. Il a séparé le judiciaire de la gouvernance, rendant les juges indépendants de l\'autorité du dirigeant.',misconception:'La gouvernance islamique ne connaît pas la séparation des pouvoirs',response:'Omar ibn al-Khattab a séparé le judiciaire du pouvoir exécutif. Il a dit au juge : « Que le blâme de personne ne te détourne dans la cause de Dieu. » C\'est une vraie séparation des pouvoirs des siècles avant les Lumières',evidence:'Hadith : « Chacun de vous est un berger et chacun est responsable de son troupeau » — unanimement reconnu'}
  },
  {
    id:10, emoji:'🌍', category:'civilization',
    ar:{title:'الحضارة الإسلامية',desc:'الحضارة الإسلامية أنارت العالم لثمانية قرون متواصلة. بينما كانت أوروبا في العصور المظلمة، كان المسلمون يبنون المستشفيات والجامعات والمكتبات.',misconception:'المسلمون لم يقدموا شيئاً للحضارة',response:'ابن سينا في الطب، الخوارزمي في الرياضيات، ابن الهيثم في البصريات، جابر بن حيان في الكيمياء. هؤلاء أسسوا العلوم التي بنى عليها الغرب نهضته',evidence:'هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ — الزمر ٣٩: ٩'},
    en:{title:'Islamic Civilization',desc:'Islamic civilization illuminated the world for eight consecutive centuries. While Europe was in the Dark Ages, Muslims were building hospitals, universities, and libraries.',misconception:'Muslims contributed nothing to civilization',response:'Ibn Sina in medicine, Al-Khwarizmi in mathematics, Ibn al-Haytham in optics, Jabir ibn Hayyan in chemistry. These scholars founded the sciences upon which the West built its Renaissance',evidence:'Are those who know equal to those who do not know? — Az-Zumar 39:9'},
    fr:{title:'La Civilisation Islamique',desc:'La civilisation islamique a illuminé le monde pendant huit siècles consécutifs. Tandis que l\'Europe était dans les Ages Sombres, les musulmans construisaient des hôpitaux, des universités et des bibliothèques.',misconception:'Les musulmans n\'ont rien apporté à la civilisation',response:'Ibn Sina en médecine, Al-Khwarizmi en mathématiques, Ibn al-Haytham en optique, Jabir ibn Hayyan en chimie. Ces savants ont fondé les sciences sur lesquelles l\'Occident a bâti sa Renaissance',evidence:'Sont-ils égaux ceux qui savent et ceux qui ne savent pas ? — Az-Zumar 39:9'}
  },
  {
    id:11, emoji:'📜', category:'law',
    ar:{title:'الشريعة رحمة لا قسوة',desc:'الشريعة الإسلامية جاءت لحفظ خمسة أشياء: الدين والنفس والعقل والنسل والمال. كل أحكامها تدور حول حماية هذه المقاصد الضرورية.',misconception:'الشريعة قوانين قاسية ومتخلفة',response:'مقاصد الشريعة خمسة: حفظ الدين والنفس والعقل والنسل والمال. هذه المقاصد توافق تماماً ما تسعى إليه كل القوانين الحديثة. الشريعة مرنة في التطبيق ثابتة في المبادئ',evidence:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ — الأنبياء ٢١: ١٠٧'},
    en:{title:'Shariah Is Mercy, Not Harshness',desc:'Islamic Shariah came to preserve five things: religion, life, intellect, lineage, and wealth. All its rulings revolve around protecting these essential objectives.',misconception:'Shariah is a harsh and backward legal system',response:'The five objectives of Shariah: preserving religion, life, intellect, lineage, and wealth. These objectives perfectly align with what all modern laws seek to achieve. Shariah is flexible in application, firm in principles',evidence:'And We have not sent you except as a mercy to the worlds — Al-Anbiya 21:107'},
    fr:{title:'La Charia Est Miséricorde, Pas Cruauté',desc:'La Charia islamique est venue pour préserver cinq choses : la religion, la vie, l\'intellect, la lignée et les biens. Tous ses jugements tournent autour de la protection de ces objectifs essentiels.',misconception:'La Charia est un système juridique cruel et arriéré',response:'Les cinq objectifs de la Charia : préserver la religion, la vie, l\'intellect, la lignée et les biens. Ces objectifs s\'alignent parfaitement avec ce que toutes les lois modernes cherchent à réaliser. La Charia est flexible dans l\'application, ferme dans les principes',evidence:'Et Nous ne t\'avons envoyé que comme miséricorde pour les mondes — Al-Anbiya 21:107'}
  },
  {
    id:12, emoji:'🕌', category:'worship',
    ar:{title:'العبادة أوسع من الصلاة',desc:'العبادة في الإسلام ليست مقصورة على الصلاة والصيام. كل عمل نافع يُقصد به وجه الله فهو عبادة: العمل والتعلم وإعالة الأسرة والإحسان للجار.',misconception:'الإسلام دين طقوس فقط',response:'العمل عبادة، طلب العلم عبادة، الابتسامة صدقة، إماطة الأذى عن الطريق عبادة. الإسلام حوّل كل لحظة في حياة المسلم إلى عبادة بالنية الصالحة',evidence:'قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ — الأنعام ٦: ١٦٢'},
    en:{title:'Worship Is Broader Than Prayer',desc:'Worship in Islam is not limited to prayer and fasting. Every beneficial act intended for God\'s sake is worship: working, learning, supporting one\'s family, and being kind to neighbors.',misconception:'Islam is a religion of rituals only',response:'Work is worship, seeking knowledge is worship, smiling is charity, removing harm from the road is worship. Islam transforms every moment of a Muslim\'s life into worship through sincere intention',evidence:'Say: Indeed, my prayer, my rites, my living and my dying are for God, Lord of the worlds — Al-An\'am 6:162'},
    fr:{title:'L\'Adoration Est Plus Large Que la Prière',desc:'L\'adoration en Islam ne se limite pas à la prière et au jeûne. Chaque acte bénéfique fait pour Dieu est adoration : travailler, apprendre, subvenir aux besoins de sa famille, être bon avec ses voisins.',misconception:'L\'Islam est une religion de rituels uniquement',response:'Le travail est adoration, la quête du savoir est adoration, le sourire est charité, enlever un obstacle du chemin est adoration. L\'Islam transforme chaque moment de la vie d\'un musulman en adoration par l\'intention sincère',evidence:'Dis : Ma prière, mes actes de dévotion, ma vie et ma mort sont pour Dieu, Seigneur des mondes — Al-An\'am 6:162'}
  },
  {
    id:13, emoji:'🔬', category:'knowledge',
    ar:{title:'لا تعارض بين العلم والدين',desc:'الغزالي يؤكد أن الإسلام لم يعرف الصراع بين العلم والدين الذي عرفته أوروبا. القرآن يحث على التفكر والبحث العلمي. الإيمان والعقل حليفان لا خصمان.',misconception:'الدين يتعارض مع العلم',response:'الصراع بين العلم والكنيسة ظاهرة أوروبية لا إسلامية. القرآن فيه أكثر من ٧٥٠ آية تحث على التفكر والنظر في الكون. العلماء المسلمون كانوا علماء دين وعلم معاً',evidence:'أَفَلَا يَنظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ — الغاشية ٨٨: ١٧'},
    en:{title:'No Conflict Between Science and Religion',desc:'Al-Ghazali affirms that Islam never experienced the conflict between science and religion that Europe knew. The Quran encourages reflection and scientific inquiry. Faith and reason are allies, not adversaries.',misconception:'Religion conflicts with science',response:'The conflict between science and the Church is a European phenomenon, not an Islamic one. The Quran has over 750 verses urging reflection on the universe. Muslim scholars were scientists and religious scholars simultaneously',evidence:'Do they not look at the camels, how they are created? — Al-Ghashiyah 88:17'},
    fr:{title:'Aucun Conflit Entre Science et Religion',desc:'Al-Ghazali affirme que l\'Islam n\'a jamais connu le conflit entre science et religion qu\'a connu l\'Europe. Le Coran encourage la réflexion et la recherche scientifique. La foi et la raison sont des alliées, pas des adversaires.',misconception:'La religion est en conflit avec la science',response:'Le conflit entre science et Église est un phénomène européen, pas islamique. Le Coran contient plus de 750 versets incitant à la réflexion sur l\'univers. Les savants musulmans étaient à la fois scientifiques et érudits religieux',evidence:'Ne regardent-ils pas les chameaux, comment ils ont été créés ? — Al-Ghashiyah 88:17'}
  },
  {
    id:14, emoji:'🌱', category:'ethics',
    ar:{title:'الأخلاق جزء من الإيمان',desc:'الأخلاق في الإسلام ليست اختياراً بل جزء أصيل من الإيمان. النبي قال: "إنما بُعثت لأتمم مكارم الأخلاق". المسلم الحق لا يفصل بين عبادته وأخلاقه.',misconception:'يمكن فصل الأخلاق عن الدين',response:'الأخلاق بلا مرجعية إلهية تصبح نسبية ومتغيرة. الإسلام ربط الأخلاق بالإيمان ربطاً وثيقاً: "أكمل المؤمنين إيماناً أحسنهم خلقاً"',evidence:'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ — القلم ٦٨: ٤'},
    en:{title:'Ethics Are Part of Faith',desc:'Ethics in Islam are not optional but an essential part of faith. The Prophet said: "I was sent to perfect noble character." A true Muslim does not separate worship from ethics.',misconception:'Ethics can be separated from religion',response:'Ethics without divine reference become relative and changeable. Islam firmly linked ethics to faith: "The most complete in faith among believers is the best in character"',evidence:'And indeed, you are of a great moral character — Al-Qalam 68:4'},
    fr:{title:'L\'Éthique Fait Partie de la Foi',desc:'L\'éthique en Islam n\'est pas optionnelle mais une partie essentielle de la foi. Le Prophète a dit : « J\'ai été envoyé pour parfaire les nobles caractères. » Un vrai musulman ne sépare pas son culte de son éthique.',misconception:'L\'éthique peut être séparée de la religion',response:'L\'éthique sans référence divine devient relative et changeante. L\'Islam a fermement lié l\'éthique à la foi : « Le plus complet en foi parmi les croyants est le meilleur en caractère »',evidence:'Et tu es certes d\'un caractère éminent — Al-Qalam 68:4'}
  },
  {
    id:15, emoji:'🤲', category:'worship',
    ar:{title:'الصلاة صلة لا طقس',desc:'الصلاة في الإسلام ليست طقساً آلياً بل صلة حية بين العبد وربه. هي محطة تجديد خمس مرات يومياً تنهى عن الفحشاء والمنكر.',misconception:'الصلاة مجرد حركات بلا معنى',response:'الصلاة تنهى عن الفحشاء والمنكر — هي تربية يومية وتزكية مستمرة. من صلّى ولم تنهه صلاته عن المنكر فليس له من صلاته شيء. الصلاة عمود الدين وميزان الاستقامة',evidence:'إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ — العنكبوت ٢٩: ٤٥'},
    en:{title:'Prayer Is Connection, Not Ritual',desc:'Prayer in Islam is not an automatic ritual but a living connection between the servant and their Lord. It is a renewal station five times daily that prevents indecency and wrongdoing.',misconception:'Prayer is just meaningless movements',response:'Prayer prevents indecency and wrongdoing — it is daily training and continuous purification. Whoever prays but their prayer does not prevent them from wrong has nothing from their prayer. Prayer is the pillar of religion',evidence:'Indeed, prayer prevents indecency and wrongdoing — Al-Ankabut 29:45'},
    fr:{title:'La Prière Est Connexion, Pas Rituel',desc:'La prière en Islam n\'est pas un rituel automatique mais une connexion vivante entre le serviteur et son Seigneur. C\'est une station de renouveau cinq fois par jour qui empêche l\'indécence et le mal.',misconception:'La prière n\'est que des mouvements sans sens',response:'La prière empêche l\'indécence et le mal — c\'est un entraînement quotidien et une purification continue. Celui dont la prière ne l\'empêche pas du mal n\'a rien de sa prière. La prière est le pilier de la religion',evidence:'Certes, la prière préserve de la turpitude et du blâmable — Al-Ankabut 29:45'}
  },
  {
    id:16, emoji:'🛡️', category:'defense',
    ar:{title:'الجهاد دفاع لا عدوان',desc:'الجهاد في الإسلام دفاع عن النفس والأرض والعقيدة — وليس حرباً عدوانية. الغزالي يوضح أن الإسلام لم يبدأ حرباً قط، بل كل معاركه كانت دفاعية أو لرفع الظلم.',misconception:'الجهاد يعني قتل غير المسلمين',response:'الجهاد الأكبر هو جهاد النفس. والجهاد العسكري له شروط صارمة: دفاع فقط، لا قتل مدنيين، لا قطع أشجار، لا هدم معابد. هذه أخلاق حرب سبقت اتفاقيات جنيف',evidence:'وَقَاتِلُوا فِي سَبِيلِ اللَّهِ الَّذِينَ يُقَاتِلُونَكُمْ وَلَا تَعْتَدُوا — البقرة ٢: ١٩٠'},
    en:{title:'Jihad Is Defense, Not Aggression',desc:'Jihad in Islam is defense of self, land, and faith — not aggressive warfare. Al-Ghazali clarifies that Islam never initiated a war; all its battles were defensive or to remove oppression.',misconception:'Jihad means killing non-Muslims',response:'The greater jihad is the struggle against one\'s own self. Military jihad has strict conditions: defense only, no killing civilians, no cutting trees, no destroying places of worship. These are war ethics that preceded the Geneva Conventions',evidence:'And fight in God\'s cause those who fight you, but do not transgress — Al-Baqarah 2:190'},
    fr:{title:'Le Djihad Est Défense, Pas Agression',desc:'Le djihad en Islam est la défense de soi, de la terre et de la foi — pas une guerre agressive. Al-Ghazali clarifie que l\'Islam n\'a jamais initié une guerre ; toutes ses batailles étaient défensives ou pour lever l\'oppression.',misconception:'Le djihad signifie tuer les non-musulmans',response:'Le plus grand djihad est la lutte contre soi-même. Le djihad militaire a des conditions strictes : défense uniquement, pas de meurtre de civils, pas d\'arbres coupés, pas de destruction de lieux de culte. Ce sont des éthiques de guerre qui ont précédé les Conventions de Genève',evidence:'Et combattez dans le sentier de Dieu ceux qui vous combattent, et ne transgressez pas — Al-Baqarah 2:190'}
  },
  {
    id:17, emoji:'📖', category:'foundation',
    ar:{title:'الرد على العلمانية',desc:'الغزالي يرد على من يطالب بفصل الدين عن الدولة: التجربة الأوروبية لا تنطبق على الإسلام. الكنيسة حاربت العلم، لكن الإسلام شجعه. العلمانية حل أوروبي لمشكلة أوروبية.',misconception:'العلمانية هي الحل لتقدم المسلمين',response:'العلمانية نشأت رداً على طغيان الكنيسة في أوروبا. الإسلام لم يعرف هذا الطغيان. تطبيق حل أوروبي على واقع إسلامي مختلف تماماً خطأ منهجي كبير',evidence:'أَفَحُكْمَ الْجَاهِلِيَّةِ يَبْغُونَ — المائدة ٥: ٥٠'},
    en:{title:'The Response to Secularism',desc:'Al-Ghazali responds to those calling for separation of religion and state: the European experience does not apply to Islam. The Church fought science, but Islam encouraged it. Secularism is a European solution to a European problem.',misconception:'Secularism is the solution for Muslim progress',response:'Secularism arose as a response to Church tyranny in Europe. Islam never experienced such tyranny. Applying a European solution to a completely different Islamic reality is a major methodological error',evidence:'Is it the judgment of ignorance they seek? — Al-Ma\'idah 5:50'},
    fr:{title:'La Réponse à la Laïcité',desc:'Al-Ghazali répond à ceux qui appellent à la séparation de la religion et de l\'État : l\'expérience européenne ne s\'applique pas à l\'Islam. L\'Église a combattu la science, mais l\'Islam l\'a encouragée. La laïcité est une solution européenne à un problème européen.',misconception:'La laïcité est la solution pour le progrès des musulmans',response:'La laïcité est née en réponse à la tyrannie de l\'Église en Europe. L\'Islam n\'a jamais connu une telle tyrannie. Appliquer une solution européenne à une réalité islamique complètement différente est une grave erreur méthodologique',evidence:'Est-ce le jugement de l\'ignorance qu\'ils cherchent ? — Al-Ma\'idah 5:50'}
  },
  {
    id:18, emoji:'💡', category:'civilization',
    ar:{title:'التجديد لا التغريب',desc:'الغزالي يميز بين التجديد والتغريب. التجديد يعني تطوير الذات من داخل الثقافة الإسلامية. التغريب يعني التبعية العمياء للغرب دون تمييز بين نافع وضار.',misconception:'التقدم يعني تقليد الغرب',response:'الاقتباس الحكيم من الحضارات الأخرى مطلوب. لكن نقل كل شيء دون تمييز — بما فيه ما يتعارض مع قيمنا — هو تبعية وليس تقدماً. "الحكمة ضالة المؤمن أنّى وجدها فهو أحق بها"',evidence:'خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ — الأعراف ٧: ١٩٩'},
    en:{title:'Renewal, Not Westernization',desc:'Al-Ghazali distinguishes between renewal and Westernization. Renewal means developing from within Islamic culture. Westernization means blind imitation of the West without distinguishing beneficial from harmful.',misconception:'Progress means imitating the West',response:'Wise borrowing from other civilizations is desired. But importing everything without distinction — including what contradicts our values — is dependency, not progress. "Wisdom is the lost property of the believer"',evidence:'Take what is given freely, enjoin what is good — Al-A\'raf 7:199'},
    fr:{title:'Renouveau, Pas Occidentalisation',desc:'Al-Ghazali distingue entre renouveau et occidentalisation. Le renouveau signifie se développer de l\'intérieur de la culture islamique. L\'occidentalisation signifie l\'imitation aveugle de l\'Occident sans distinguer le bénéfique du nuisible.',misconception:'Le progrès signifie imiter l\'Occident',response:'L\'emprunt sage aux autres civilisations est souhaité. Mais tout importer sans distinction — y compris ce qui contredit nos valeurs — est de la dépendance, pas du progrès. « La sagesse est l\'objet perdu du croyant »',evidence:'Prends ce qui t\'est donné, ordonne le convenable — Al-A\'raf 7:199'}
  },
  {
    id:19, emoji:'🌟', category:'ethics',
    ar:{title:'الأدب مع المخالف',desc:'الغزالي يقدم نموذجاً راقياً في الاختلاف. رغم رده القوي على خالد محمد خالد، التزم بأدب الحوار واحترام المخالف. النقد العلمي لا يعني الإساءة الشخصية.',misconception:'الاختلاف يعني العداوة',response:'الغزالي انتقد الأفكار لا الأشخاص. قال: "أخي خالد أخطأ في فهمه للإسلام لكنه ليس عدواً". هذا أدب إسلامي رفيع يفتقده كثير من المتحاورين اليوم',evidence:'ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ — النحل ١٦: ١٢٥'},
    en:{title:'Etiquette in Disagreement',desc:'Al-Ghazali presents an exemplary model of respectful disagreement. Despite his strong response to Khalid Muhammad Khalid, he maintained dialogue etiquette and respect for the opponent. Scholarly critique does not mean personal insult.',misconception:'Disagreement means enmity',response:'Al-Ghazali criticized ideas, not people. He said: "My brother Khalid erred in his understanding of Islam but he is not an enemy." This is refined Islamic etiquette that many debaters today lack',evidence:'Invite to the way of your Lord with wisdom and good instruction — An-Nahl 16:125'},
    fr:{title:'L\'Éthique dans le Désaccord',desc:'Al-Ghazali présente un modèle exemplaire de désaccord respectueux. Malgré sa réponse forte à Khalid Muhammad Khalid, il a maintenu l\'étiquette du dialogue et le respect de l\'adversaire. La critique savante ne signifie pas l\'insulte personnelle.',misconception:'Le désaccord signifie l\'inimitié',response:'Al-Ghazali a critiqué les idées, pas les personnes. Il a dit : « Mon frère Khalid s\'est trompé dans sa compréhension de l\'Islam mais il n\'est pas un ennemi. » C\'est une étiquette islamique raffinée que beaucoup de débatteurs d\'aujourd\'hui n\'ont pas',evidence:'Appelle au sentier de ton Seigneur par la sagesse et la bonne exhortation — An-Nahl 16:125'}
  },
  {
    id:20, emoji:'🏁', category:'foundation',
    ar:{title:'من هنا نعلم... أن الإسلام هو الحل',desc:'الغزالي يختم بأن الإسلام ليس مشكلة العالم الإسلامي بل هو حله. المشكلة في سوء الفهم وسوء التطبيق لا في الإسلام ذاته. عودوا إلى الإسلام الصحيح تعود لكم العزة.',misconception:'الإسلام سبب تخلف المسلمين',response:'تخلف المسلمين سببه الابتعاد عن الإسلام الحقيقي لا التمسك به. عندما طبق المسلمون إسلامهم بصدق قادوا العالم. والعودة للإسلام الصحيح هي طريق النهضة',evidence:'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ — الرعد ١٣: ١١'},
    en:{title:'This Is Where We Learn... That Islam Is the Solution',desc:'Al-Ghazali concludes that Islam is not the problem of the Muslim world but its solution. The problem lies in misunderstanding and misapplication, not in Islam itself. Return to true Islam and dignity returns.',misconception:'Islam is the cause of Muslim backwardness',response:'Muslim backwardness is caused by distancing from true Islam, not adhering to it. When Muslims applied their Islam sincerely, they led the world. Returning to authentic Islam is the path of renaissance',evidence:'Indeed, God will not change the condition of a people until they change what is within themselves — Ar-Ra\'d 13:11'},
    fr:{title:'C\'est Ici Que Nous Apprenons... Que l\'Islam Est la Solution',desc:'Al-Ghazali conclut que l\'Islam n\'est pas le problème du monde musulman mais sa solution. Le problème réside dans la mauvaise compréhension et la mauvaise application, pas dans l\'Islam lui-même. Revenez au vrai Islam et la dignité reviendra.',misconception:'L\'Islam est la cause du retard des musulmans',response:'Le retard des musulmans est causé par l\'éloignement du vrai Islam, pas par l\'adhésion à celui-ci. Quand les musulmans ont appliqué leur Islam sincèrement, ils ont mené le monde. Le retour à l\'Islam authentique est le chemin de la renaissance',evidence:'Certes, Dieu ne modifie pas l\'état d\'un peuple tant qu\'ils ne modifient pas ce qui est en eux-mêmes — Ar-Ra\'d 13:11'}
  }
];

// ═══════════════ DISCOVERY PATH DATA ═══════════════
const PATH_STAGES = [
  {
    id:1, emoji:'🔍', unlockAt:0,
    ar:{title:'المبتدئ',desc:'ابدأ رحلتك في فهم الإسلام كنظام شامل'},
    en:{title:'Beginner',desc:'Start your journey understanding Islam as a comprehensive system'},
    fr:{title:'Débutant',desc:'Commencez votre voyage pour comprendre l\'Islam comme système global'}
  },
  {
    id:2, emoji:'📖', unlockAt:50,
    ar:{title:'القارئ',desc:'اقرأ ١٠ بطاقات معرفية على الأقل'},
    en:{title:'Reader',desc:'Read at least 10 knowledge cards'},
    fr:{title:'Lecteur',desc:'Lisez au moins 10 cartes de savoir'}
  },
  {
    id:3, emoji:'🧠', unlockAt:150,
    ar:{title:'المتعلم',desc:'أكمل اختبار المستوى الأول بنجاح'},
    en:{title:'Learner',desc:'Complete the first level quiz successfully'},
    fr:{title:'Apprenant',desc:'Réussissez le quiz du premier niveau'}
  },
  {
    id:4, emoji:'🎓', unlockAt:300,
    ar:{title:'العالم',desc:'أتقن جميع البطاقات واجتز جميع الاختبارات'},
    en:{title:'Scholar',desc:'Master all cards and pass all quizzes'},
    fr:{title:'Savant',desc:'Maîtrisez toutes les cartes et réussissez tous les quiz'}
  },
  {
    id:5, emoji:'🏆', unlockAt:500,
    ar:{title:'الخبير',desc:'حقق أعلى درجة في جميع المستويات'},
    en:{title:'Expert',desc:'Achieve the highest score in all levels'},
    fr:{title:'Expert',desc:'Obtenez le meilleur score à tous les niveaux'}
  }
];

// ═══════════════ QUIZ DATA (15 questions, 3 difficulty levels) ═══════════════
const QUIZ_DATA = [
  // Level 1 — Easy (5 questions)
  {
    level:1, id:1,
    ar:{q:'ما أول كلمة نزلت في القرآن الكريم؟',opts:['اقرأ','قل','بسم','ألم'],correct:0,hint:'نزلت في غار حراء'},
    en:{q:'What was the first word revealed in the Quran?',opts:['Read','Say','In the name','Alif Lam Mim'],correct:0,hint:'Revealed in the Cave of Hira'},
    fr:{q:'Quel est le premier mot révélé dans le Coran ?',opts:['Lis','Dis','Au nom','Alif Lam Mim'],correct:0,hint:'Révélé dans la Grotte de Hira'}
  },
  {
    level:1, id:2,
    ar:{q:'ما موقف الإسلام من إكراه الناس على الدين؟',opts:['لا إكراه في الدين','يجب إجبار الجميع','للحاكم أن يقرر','لا يوجد نص واضح'],correct:0,hint:'آية صريحة في سورة البقرة'},
    en:{q:'What is Islam\'s position on forcing people into religion?',opts:['No compulsion in religion','Everyone must be forced','The ruler decides','There is no clear text'],correct:0,hint:'An explicit verse in Surah Al-Baqarah'},
    fr:{q:'Quelle est la position de l\'Islam sur la contrainte religieuse ?',opts:['Nulle contrainte en religion','Tout le monde doit être forcé','Le dirigeant décide','Il n\'y a pas de texte clair'],correct:0,hint:'Un verset explicite dans la sourate Al-Baqarah'}
  },
  {
    level:1, id:3,
    ar:{q:'من هو مؤلف كتاب "من هنا نعلم"؟',opts:['محمد الغزالي','خالد محمد خالد','يوسف القرضاوي','سيد قطب'],correct:0,hint:'عالم مصري لُقب بأديب الدعوة'},
    en:{q:'Who is the author of "This Is Where We Learn"?',opts:['Mohammed al-Ghazali','Khalid Muhammad Khalid','Yusuf al-Qaradawi','Sayyid Qutb'],correct:0,hint:'Egyptian scholar nicknamed the Literary Preacher'},
    fr:{q:'Qui est l\'auteur de « C\'est Ici Que Nous Apprenons » ?',opts:['Mohammed al-Ghazali','Khalid Muhammad Khalid','Yusuf al-Qaradawi','Sayyid Qutb'],correct:0,hint:'Savant égyptien surnommé le Littéraire de la Prédication'}
  },
  {
    level:1, id:4,
    ar:{q:'كم عدد مقاصد الشريعة الإسلامية الكبرى؟',opts:['خمسة','ثلاثة','سبعة','عشرة'],correct:0,hint:'الدين والنفس والعقل والنسل والمال'},
    en:{q:'How many major objectives does Islamic Shariah have?',opts:['Five','Three','Seven','Ten'],correct:0,hint:'Religion, life, intellect, lineage, wealth'},
    fr:{q:'Combien d\'objectifs majeurs la Charia islamique a-t-elle ?',opts:['Cinq','Trois','Sept','Dix'],correct:0,hint:'Religion, vie, intellect, lignée, biens'}
  },
  {
    level:1, id:5,
    ar:{q:'ما هو الجهاد الأكبر في الإسلام؟',opts:['جهاد النفس','القتال','الدعوة','الهجرة'],correct:0,hint:'المعركة الداخلية'},
    en:{q:'What is the greater jihad in Islam?',opts:['Struggle against the self','Fighting','Preaching','Migration'],correct:0,hint:'The internal battle'},
    fr:{q:'Quel est le plus grand djihad en Islam ?',opts:['La lutte contre soi-même','Le combat','La prédication','L\'émigration'],correct:0,hint:'La bataille intérieure'}
  },
  // Level 2 — Medium (5 questions)
  {
    level:2, id:6,
    ar:{q:'على أي كتاب رد الشيخ الغزالي في "من هنا نعلم"؟',opts:['"من هنا نبدأ" لخالد محمد خالد','"في الشعر الجاهلي" لطه حسين','"تحرير المرأة" لقاسم أمين','"الإسلام وأصول الحكم" لعلي عبد الرازق'],correct:0,hint:'كتاب دعا لفصل الدين عن الدولة'},
    en:{q:'Which book did Sheikh al-Ghazali respond to in "This Is Where We Learn"?',opts:['"From Here We Begin" by Khalid M. Khalid','"On Pre-Islamic Poetry" by Taha Hussein','"The Liberation of Women" by Qasim Amin','"Islam and the Foundations of Governance" by Ali Abdel Raziq'],correct:0,hint:'A book calling for separating religion from the state'},
    fr:{q:'A quel livre le Cheikh al-Ghazali a-t-il répondu dans « C\'est Ici Que Nous Apprenons » ?',opts:['« D\'Ici Nous Commençons » de Khalid M. Khalid','« Sur la Poésie Préislamique » de Taha Hussein','« La Libération de la Femme » de Qasim Amin','« L\'Islam et les Fondements de la Gouvernance » d\'Ali Abdel Raziq'],correct:0,hint:'Un livre appelant à la séparation de la religion et de l\'État'}
  },
  {
    level:2, id:7,
    ar:{q:'من أسس مبدأ الفصل بين السلطات في التاريخ الإسلامي؟',opts:['عمر بن الخطاب','أبو بكر الصديق','علي بن أبي طالب','معاوية بن أبي سفيان'],correct:0,hint:'الخليفة الثاني'},
    en:{q:'Who established the principle of separation of powers in Islamic history?',opts:['Umar ibn al-Khattab','Abu Bakr as-Siddiq','Ali ibn Abi Talib','Muawiya ibn Abi Sufyan'],correct:0,hint:'The second Caliph'},
    fr:{q:'Qui a établi le principe de séparation des pouvoirs dans l\'histoire islamique ?',opts:['Omar ibn al-Khattab','Abu Bakr as-Siddiq','Ali ibn Abi Talib','Muawiya ibn Abi Sufyan'],correct:0,hint:'Le deuxième Calife'}
  },
  {
    level:2, id:8,
    ar:{q:'لماذا يرى الغزالي أن العلمانية لا تناسب المسلمين؟',opts:['لأنها حل لمشكلة أوروبية لم يعرفها الإسلام','لأن الإسلام يرفض كل شيء غربي','لأن العلمانية كفر','لأن العلمانية ضد العلم'],correct:0,hint:'الفرق بين تجربة الكنيسة والإسلام'},
    en:{q:'Why does al-Ghazali believe secularism doesn\'t suit Muslims?',opts:['It\'s a solution to a European problem Islam never had','Islam rejects everything Western','Secularism is disbelief','Secularism is against science'],correct:0,hint:'The difference between the Church\'s experience and Islam'},
    fr:{q:'Pourquoi al-Ghazali pense-t-il que la laïcité ne convient pas aux musulmans ?',opts:['C\'est une solution à un problème européen que l\'Islam n\'a jamais eu','L\'Islam rejette tout ce qui est occidental','La laïcité est mécréance','La laïcité est contre la science'],correct:0,hint:'La différence entre l\'expérience de l\'Église et l\'Islam'}
  },
  {
    level:2, id:9,
    ar:{q:'ما أكبر دولة إسلامية لم يصلها جيش مسلم قط؟',opts:['إندونيسيا','مصر','تركيا','إيران'],correct:0,hint:'أكبر أرخبيل في العالم'},
    en:{q:'What is the largest Muslim country never reached by a Muslim army?',opts:['Indonesia','Egypt','Turkey','Iran'],correct:0,hint:'The world\'s largest archipelago'},
    fr:{q:'Quel est le plus grand pays musulman jamais atteint par une armée musulmane ?',opts:['L\'Indonésie','L\'Égypte','La Turquie','L\'Iran'],correct:0,hint:'Le plus grand archipel du monde'}
  },
  {
    level:2, id:10,
    ar:{q:'ما الفرق بين التجديد والتغريب عند الغزالي؟',opts:['التجديد تطوير من الداخل والتغريب تقليد أعمى','لا فرق بينهما','التجديد أفضل من التغريب لكنهما متشابهان','التغريب أفضل من التجديد'],correct:0,hint:'أحدهما من داخل الثقافة والآخر تبعية'},
    en:{q:'What is the difference between renewal and Westernization according to al-Ghazali?',opts:['Renewal is development from within; Westernization is blind imitation','There is no difference','Renewal is better but they are similar','Westernization is better than renewal'],correct:0,hint:'One is from within the culture, the other is dependency'},
    fr:{q:'Quelle est la différence entre renouveau et occidentalisation selon al-Ghazali ?',opts:['Le renouveau est un développement interne ; l\'occidentalisation est imitation aveugle','Il n\'y a pas de différence','Le renouveau est meilleur mais ils sont similaires','L\'occidentalisation est meilleure que le renouveau'],correct:0,hint:'L\'un vient de l\'intérieur de la culture, l\'autre est de la dépendance'}
  },
  // Level 3 — Hard (5 questions)
  {
    level:3, id:11,
    ar:{q:'كيف تعامل الغزالي مع خالد محمد خالد في ردّه؟',opts:['انتقد الأفكار باحترام دون إساءة شخصية','هاجمه هجوماً عنيفاً','تجاهله تماماً','اتفق معه في كل شيء'],correct:0,hint:'أدب إسلامي راقٍ في الاختلاف'},
    en:{q:'How did al-Ghazali treat Khalid Muhammad Khalid in his response?',opts:['Criticized ideas respectfully without personal insult','Attacked him violently','Ignored him completely','Agreed with him on everything'],correct:0,hint:'Refined Islamic etiquette in disagreement'},
    fr:{q:'Comment al-Ghazali a-t-il traité Khalid Muhammad Khalid dans sa réponse ?',opts:['A critiqué les idées respectueusement sans insulte personnelle','L\'a attaqué violemment','L\'a complètement ignoré','Était d\'accord avec lui sur tout'],correct:0,hint:'Étiquette islamique raffinée dans le désaccord'}
  },
  {
    level:3, id:12,
    ar:{q:'ما هو مفهوم الشورى في الإسلام مقارنة بالديمقراطية؟',opts:['الشورى تستند لقيم ثابتة بينما الديمقراطية نسبية','لا فرق بينهما','الديمقراطية أفضل','الشورى رأي استشاري فقط'],correct:0,hint:'الفرق في المرجعية والقيم'},
    en:{q:'What is the concept of shura compared to democracy?',opts:['Shura is anchored in stable values while democracy is relative','There is no difference','Democracy is better','Shura is advisory opinion only'],correct:0,hint:'The difference in reference and values'},
    fr:{q:'Quel est le concept de shura comparé à la démocratie ?',opts:['La shura repose sur des valeurs stables tandis que la démocratie est relative','Il n\'y a pas de différence','La démocratie est meilleure','La shura n\'est qu\'un avis consultatif'],correct:0,hint:'La différence en référence et valeurs'}
  },
  {
    level:3, id:13,
    ar:{q:'لماذا يرى الغزالي أن تخلف المسلمين ليس بسبب الإسلام؟',opts:['لأن التخلف سببه الابتعاد عن الإسلام الحقيقي','لأن المسلمين لم يطبقوا العلمانية','لأن الغرب هو السبب فقط','لأن التخلف قدر لا مفر منه'],correct:0,hint:'الفرق بين الإسلام كنظرية وتطبيق المسلمين'},
    en:{q:'Why does al-Ghazali believe Muslim backwardness is not caused by Islam?',opts:['Backwardness is caused by distancing from true Islam','Muslims did not apply secularism','The West is solely to blame','Backwardness is inevitable fate'],correct:0,hint:'The difference between Islam as theory and Muslim practice'},
    fr:{q:'Pourquoi al-Ghazali pense-t-il que le retard des musulmans n\'est pas causé par l\'Islam ?',opts:['Le retard est causé par l\'éloignement du vrai Islam','Les musulmans n\'ont pas appliqué la laïcité','L\'Occident est le seul responsable','Le retard est un destin inévitable'],correct:0,hint:'La différence entre l\'Islam comme théorie et la pratique des musulmans'}
  },
  {
    level:3, id:14,
    ar:{q:'ما العلاقة بين الأخلاق والإيمان في الإسلام حسب الغزالي؟',opts:['الأخلاق جزء أصيل من الإيمان لا ينفصل عنه','الأخلاق مستحبة فقط','لا علاقة بينهما','الأخلاق أهم من العبادة'],correct:0,hint:'"أكمل المؤمنين إيماناً أحسنهم خلقاً"'},
    en:{q:'What is the relationship between ethics and faith in Islam according to al-Ghazali?',opts:['Ethics are an inseparable part of faith','Ethics are merely recommended','There is no relationship','Ethics are more important than worship'],correct:0,hint:'"The most complete in faith is the best in character"'},
    fr:{q:'Quelle est la relation entre éthique et foi en Islam selon al-Ghazali ?',opts:['L\'éthique est une partie inséparable de la foi','L\'éthique est simplement recommandée','Il n\'y a pas de relation','L\'éthique est plus importante que le culte'],correct:0,hint:'« Le plus complet en foi est le meilleur en caractère »'}
  },
  {
    level:3, id:15,
    ar:{q:'ما رسالة الغزالي النهائية في كتاب "من هنا نعلم"؟',opts:['العودة للإسلام الصحيح هي طريق النهضة','يجب تبني العلمانية','الحل في الثورة السياسية','لا أمل في التغيير'],correct:0,hint:'الآية: "إن الله لا يغير ما بقوم حتى يغيروا ما بأنفسهم"'},
    en:{q:'What is al-Ghazali\'s final message in "This Is Where We Learn"?',opts:['Returning to true Islam is the path of renaissance','Secularism must be adopted','The solution is political revolution','There is no hope for change'],correct:0,hint:'The verse: "God will not change the condition of a people until they change themselves"'},
    fr:{q:'Quel est le message final d\'al-Ghazali dans « C\'est Ici Que Nous Apprenons » ?',opts:['Le retour au vrai Islam est le chemin de la renaissance','La laïcité doit être adoptée','La solution est la révolution politique','Il n\'y a pas d\'espoir de changement'],correct:0,hint:'Le verset : « Dieu ne modifie pas l\'état d\'un peuple tant qu\'ils ne modifient pas ce qui est en eux-mêmes »'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  {
    ar:{label:'دعاء طلب العلم',text:'اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي، وَعَلِّمْنِي مَا يَنْفَعُنِي، وَزِدْنِي عِلْمًا',tr:'اللهم انفعني بما علمتني وعلمني ما ينفعني وزدني علماً'},
    en:{label:'Dua for Seeking Knowledge',text:'اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي، وَعَلِّمْنِي مَا يَنْفَعُنِي، وَزِدْنِي عِلْمًا',tr:'O God, benefit me with what You have taught me, teach me what will benefit me, and increase me in knowledge'},
    fr:{label:'Dua pour la Quête du Savoir',text:'اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي، وَعَلِّمْنِي مَا يَنْفَعُنِي، وَزِدْنِي عِلْمًا',tr:'O Dieu, fais-moi bénéficier de ce que Tu m\'as enseigné, enseigne-moi ce qui me sera utile, et augmente-moi en savoir'}
  },
  {
    ar:{label:'دعاء فتح البصيرة',text:'رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي ۝ وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي ۝ يَفْقَهُوا قَوْلِي',tr:'رب اشرح لي صدري ويسر لي أمري واحلل عقدة من لساني يفقهوا قولي'},
    en:{label:'Dua for Opening the Heart',text:'رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي ۝ وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي ۝ يَفْقَهُوا قَوْلِي',tr:'My Lord, expand my chest, ease my task, and untie the knot from my tongue so they may understand my speech'},
    fr:{label:'Dua pour l\'Ouverture du Coeur',text:'رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي ۝ وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي ۝ يَفْقَهُوا قَوْلِي',tr:'Mon Seigneur, ouvre-moi la poitrine, facilite-moi ma tâche, et dénoue le noeud de ma langue pour qu\'ils comprennent ma parole'}
  },
  {
    ar:{label:'دعاء الهداية',text:'اللَّهُمَّ أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ، وَأَرِنَا الْبَاطِلَ بَاطِلًا وَارْزُقْنَا اجْتِنَابَهُ',tr:'اللهم أرنا الحق حقاً وارزقنا اتباعه وأرنا الباطل باطلاً وارزقنا اجتنابه'},
    en:{label:'Dua for Guidance',text:'اللَّهُمَّ أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ، وَأَرِنَا الْبَاطِلَ بَاطِلًا وَارْزُقْنَا اجْتِنَابَهُ',tr:'O God, show us the truth as truth and grant us to follow it, and show us falsehood as falsehood and grant us to avoid it'},
    fr:{label:'Dua pour la Guidance',text:'اللَّهُمَّ أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ، وَأَرِنَا الْبَاطِلَ بَاطِلًا وَارْزُقْنَا اجْتِنَابَهُ',tr:'O Dieu, montre-nous la vérité comme vérité et accorde-nous de la suivre, et montre-nous le faux comme faux et accorde-nous de l\'éviter'}
  },
  {
    ar:{label:'دعاء النور',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا، وَفِي بَصَرِي نُورًا، وَفِي سَمْعِي نُورًا',tr:'اللهم اجعل في قلبي نوراً وفي بصري نوراً وفي سمعي نوراً'},
    en:{label:'Dua for Light',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا، وَفِي بَصَرِي نُورًا، وَفِي سَمْعِي نُورًا',tr:'O God, place light in my heart, light in my sight, and light in my hearing'},
    fr:{label:'Dua pour la Lumière',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا، وَفِي بَصَرِي نُورًا، وَفِي سَمْعِي نُورًا',tr:'O Dieu, mets de la lumière dans mon coeur, de la lumière dans ma vue, et de la lumière dans mon ouïe'}
  }
];

// ═══════════════ BADGES ═══════════════
const BADGES = [
  {id:'beginner', emoji:'🌟', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Débutant'},
  {id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur'},
  {id:'scholar', emoji:'🧠', xp:250, ar:'عالم', en:'Scholar', fr:'Savant'},
  {id:'persistent', emoji:'🔥', xp:400, ar:'مثابر', en:'Persistent', fr:'Persévérant'},
  {id:'expert', emoji:'🏆', xp:600, ar:'خبير', en:'Expert', fr:'Expert'}
];

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('mhn-lang') || 'ar';
let theme = localStorage.getItem('mhn-theme') || 'teal';
let ageMode = localStorage.getItem('mhn-age') || 'teen';
let currentPrincipleIdx = -1;
const THEMES = ['teal','night','ocean'];
const THEME_ICONS = ['📍','🌙','🌊'];
const LS_PREFIX = 'mhn-';

// ═══════════════ XP SYSTEM ═══════════════
function getXP() { return parseInt(localStorage.getItem(LS_PREFIX+'xp') || '0'); }
function addXP(amount) {
  const prev = getXP();
  const next = prev + amount;
  localStorage.setItem(LS_PREFIX+'xp', next);
  checkBadges(prev, next);
  updateXPDisplay();
  return next;
}
function checkBadges(prev, next) {
  const earned = JSON.parse(localStorage.getItem(LS_PREFIX+'badges') || '[]');
  BADGES.forEach(b => {
    if (!earned.includes(b.id) && next >= b.xp) {
      earned.push(b.id);
      localStorage.setItem(LS_PREFIX+'badges', JSON.stringify(earned));
      showToast(`${b.emoji} ${T[lang].badgeEarned} ${b[lang]}`);
      playSound('badge');
    }
  });
}
function getEarnedBadges() { return JSON.parse(localStorage.getItem(LS_PREFIX+'badges') || '[]'); }
function updateXPDisplay() {
  const xp = getXP();
  const el = document.getElementById('xpDisplay');
  if (el) {
    const currentBadge = [...BADGES].reverse().find(b => xp >= b.xp) || BADGES[0];
    const nextBadge = BADGES.find(b => xp < b.xp);
    const pct = nextBadge ? Math.min(100, (xp / nextBadge.xp) * 100) : 100;
    el.innerHTML = `
      <div class="xp-info">
        <span class="xp-badge">${currentBadge.emoji}</span>
        <span class="xp-level">${currentBadge[lang]}</span>
        <span class="xp-points">${xp} XP</span>
      </div>
      <div class="xp-bar-bg"><div class="xp-bar-fill" style="width:${pct}%"></div></div>
    `;
  }
}

// ═══════════════ READ TRACKING ═══════════════
function getReadCards() { return JSON.parse(localStorage.getItem(LS_PREFIX+'read') || '[]'); }
function markCardRead(id) {
  const read = getReadCards();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem(LS_PREFIX+'read', JSON.stringify(read));
    addXP(10);
  }
}

// ═══════════════ STREAK SYSTEM ═══════════════
function getStreak() {
  const data = JSON.parse(localStorage.getItem(LS_PREFIX+'streak') || '{"count":0,"lastDate":""}');
  return data.count;
}
function updateStreak() {
  const today = new Date().toDateString();
  let data = JSON.parse(localStorage.getItem(LS_PREFIX+'streak') || '{"count":0,"lastDate":""}');
  if (data.lastDate === today) return;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (data.lastDate === yesterday.toDateString()) {
    data.count++;
  } else if (data.lastDate !== today) {
    data.count = 1;
  }
  data.lastDate = today;
  localStorage.setItem(LS_PREFIX+'streak', JSON.stringify(data));
}

// ═══════════════ INIT ═══════════════
function initApp() {
  setLang(lang);
  initTabs();
  renderAll();
  initScrollTop();
  initKeyboardNav();
  initSplash();
  updateStreak();
  updateXPDisplay();
  // First open = beginner badge
  if (!getEarnedBadges().includes('beginner')) { addXP(0); checkBadges(-1, 0); }
}

function renderAll() {
  renderHome();
  renderKnowledge();
  renderPath();
  renderQuiz();
  renderAbout();
  renderHelp();
  renderDuas();
  updateXPDisplay();
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem(LS_PREFIX+'lang', l);
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  const t = T[l];
  document.getElementById('appTitle').textContent = t.appTitle;
  document.getElementById('tabHome').textContent = t.tabHome;
  document.getElementById('tabKnowledge').textContent = t.tabKnowledge;
  document.getElementById('tabPath').textContent = t.tabPath;
  document.getElementById('tabQuiz').textContent = t.tabQuiz;
  document.getElementById('tabAbout').textContent = t.tabAbout;
  document.getElementById('knowledgeTitle').textContent = t.knowledgeTitle;
  document.getElementById('knowledgeDesc').textContent = t.knowledgeDesc;
  document.getElementById('pathTitle').textContent = t.pathTitle;
  document.getElementById('pathDesc').textContent = t.pathDesc;
  document.getElementById('quizTitle').textContent = t.quizTitle;
  document.getElementById('quizDesc').textContent = t.quizDesc;
  document.getElementById('helpTitle').textContent = t.helpTitle;
  document.getElementById('duaPanelTitle').textContent = t.duaPanelTitle;
  document.getElementById('splashSub').textContent = t.splashSub;
  document.getElementById('splashHint').textContent = t.splashHint;
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
  initScrollReveal();
}

// ═══════════════ THEME ═══════════════
function cycleTheme() {
  const idx = (THEMES.indexOf(theme) + 1) % THEMES.length;
  theme = THEMES[idx];
  localStorage.setItem(LS_PREFIX+'theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('themeIcon').textContent = THEME_ICONS[idx];
  playSound('theme');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top:0, behavior:'smooth'});
      playSound('click');
      setTimeout(() => initScrollReveal(), 100);
    });
  });
}

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  const features = T[lang].splashFeatures;
  document.getElementById('splashFeatures').innerHTML = features.map(f => `<div class="splash-feat">${f}</div>`).join('');
  let count = 5;
  const el = document.getElementById('splashCount');
  const timer = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { clearInterval(timer); dismissSplash(); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (s) { s.style.opacity = '0'; setTimeout(() => s.style.display = 'none', 400); }
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % KNOWLEDGE.length;
  const k = KNOWLEDGE[dayIdx];
  const kd = k[lang];
  document.getElementById('dailyCard').innerHTML = `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${kd.title}</div>
    <div class="daily-body">${kd.desc}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=knowledge]').click()">${t.tabKnowledge} &#8594;</div>
  `;
  const sections = [
    {icon:'📚',tab:'knowledge',title:t.tabKnowledge,desc:lang==='ar'?'٢٠ بطاقة معرفية':lang==='fr'?'20 cartes de savoir':'20 knowledge cards'},
    {icon:'🗺️',tab:'path',title:t.tabPath,desc:lang==='ar'?'مسار الاكتشاف':lang==='fr'?'Parcours de découverte':'Discovery path'},
    {icon:'🧠',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'اختبر معرفتك':lang==='fr'?'Testez vos connaissances':'Test your knowledge'},
    {icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب والمؤلف':lang==='fr'?'Le livre et l\'auteur':'Book & author'},
  ];
  document.getElementById('homeGrid').innerHTML = sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: KNOWLEDGE ═══════════════
function renderKnowledge() {
  const t = T[lang];
  const readCards = getReadCards();
  const searchBar = `<div class="search-bar"><input type="text" id="knowledgeSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterKnowledge(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = KNOWLEDGE.map((k, i) => {
    const d = k[lang];
    const isRead = readCards.includes(k.id);
    return `
    <div class="knowledge-card scroll-reveal ${isRead?'read':''}" id="knowledge-${k.id}" data-search="${d.title.toLowerCase()}">
      <div class="knowledge-head" onclick="toggleCard('knowledge-${k.id}');markCardRead(${k.id})">
        <span class="knowledge-num">${k.id}</span>
        <span class="knowledge-emoji">${k.emoji}</span>
        <span class="knowledge-title">${d.title}</span>
        ${isRead?'<span class="read-check">&#10003;</span>':''}
        <span class="knowledge-chev">&#9660;</span>
      </div>
      <div class="knowledge-body">
        <div class="knowledge-inner">
          <p class="knowledge-desc">${d.desc}</p>
          <div class="misconception-box">
            <div class="misc-label">${t.misconception}</div>
            <div class="misc-text">${d.misconception}</div>
          </div>
          <div class="response-box">
            <div class="resp-label">${t.response}</div>
            <div class="resp-text">${d.response}</div>
          </div>
          <div class="verse-box">
            <div class="verse-label">${t.evidence}</div>
            <div class="verse-arabic">${d.evidence}</div>
          </div>
          <button class="share-btn" onclick="event.stopPropagation();shareCard(${i})">
            <span class="share-icon">&#128279;</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  document.getElementById('knowledgeContainer').innerHTML = searchBar + cards;
}

function filterKnowledge(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.knowledge-card').forEach(card => {
    const searchText = card.dataset.search || '';
    const title = card.querySelector('.knowledge-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    const match = !q || searchText.includes(q) || titleText.includes(q);
    card.style.display = match ? '' : 'none';
  });
}

// ═══════════════ SHARE CARD ═══════════════
async function shareCard(idx) {
  const k = KNOWLEDGE[idx];
  const d = k[lang];
  const text = `${k.emoji} ${d.title}\n\n${d.desc}\n\n📖 ${d.evidence}\n\n— من هنا نعلم | This Is Where We Learn`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text }); } catch(e) {}
  } else {
    try {
      await navigator.clipboard.writeText(text);
      showToast(lang==='ar'?'تم النسخ!':lang==='fr'?'Copié !':'Copied!');
    } catch(e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: PATH ═══════════════
function renderPath() {
  const xp = getXP();
  const readCards = getReadCards();
  document.getElementById('pathContainer').innerHTML = PATH_STAGES.map(s => {
    const d = s[lang];
    const unlocked = xp >= s.unlockAt;
    return `
    <div class="path-stage ${unlocked?'unlocked':'locked'} scroll-reveal">
      <div class="path-icon">${unlocked ? s.emoji : '🔒'}</div>
      <div class="path-info">
        <div class="path-title">${d.title}</div>
        <div class="path-desc">${d.desc}</div>
        ${!unlocked ? `<div class="path-req">${s.unlockAt} XP</div>` : ''}
      </div>
    </div>`;
  }).join('') + `
    <div class="path-stats scroll-reveal">
      <div class="stat-item"><span class="stat-num">${readCards.length}</span><span class="stat-label">/${KNOWLEDGE.length} ${lang==='ar'?'بطاقة':lang==='fr'?'cartes':'cards'}</span></div>
      <div class="stat-item"><span class="stat-num">${xp}</span><span class="stat-label">XP</span></div>
      <div class="stat-item"><span class="stat-num">${getStreak()}</span><span class="stat-label">${T[lang].streakMsg}</span></div>
    </div>
    <div class="badges-display scroll-reveal">
      ${BADGES.map(b => `<span class="badge-item ${getEarnedBadges().includes(b.id)?'earned':'locked'}" title="${b[lang]}">${getEarnedBadges().includes(b.id)?b.emoji:'🔒'}</span>`).join('')}
    </div>
  `;
}

// ═══════════════ QUIZ ENGINE — "Who Wants to Be a Scholar?" ═══════════════
let quizState = { current:0, score:0, answered:[], lifelines:{fifty:true,hint:true,istikhara:true}, level:1, active:false };

function renderQuiz() {
  quizState = { current:0, score:0, answered:[], lifelines:{fifty:true,hint:true,istikhara:true}, level:1, active:false };
  const t = T[lang];
  document.getElementById('quizContainer').innerHTML = `
    <div class="quiz-start">
      <div class="quiz-start-icon">🧠</div>
      <div class="quiz-start-title">${t.quizTitle}</div>
      <div class="quiz-start-desc">${t.quizDesc}</div>
      <div class="quiz-levels">
        <button class="quiz-level-btn" onclick="startQuiz(1)">⭐ ${lang==='ar'?'المستوى الأول':lang==='fr'?'Niveau 1':'Level 1'}</button>
        <button class="quiz-level-btn" onclick="startQuiz(2)">⭐⭐ ${lang==='ar'?'المستوى الثاني':lang==='fr'?'Niveau 2':'Level 2'}</button>
        <button class="quiz-level-btn" onclick="startQuiz(3)">⭐⭐⭐ ${lang==='ar'?'المستوى الثالث':lang==='fr'?'Niveau 3':'Level 3'}</button>
      </div>
    </div>
  `;
  document.getElementById('quizResult').classList.add('hidden');
}

function startQuiz(level) {
  const questions = QUIZ_DATA.filter(q => q.level <= level);
  quizState = { current:0, score:0, answered:[], lifelines:{fifty:true,hint:true,istikhara:true}, level, active:true, questions };
  showQuestion();
}

function showQuestion() {
  const t = T[lang];
  const qs = quizState.questions;
  if (quizState.current >= qs.length) { showQuizResult(); return; }
  const q = qs[quizState.current];
  const qd = q[lang];
  const container = document.getElementById('quizContainer');
  container.innerHTML = `
    <div class="quiz-progress">
      <div class="quiz-progress-text">${quizState.current+1}/${qs.length}</div>
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${(quizState.current/qs.length)*100}%"></div></div>
      <div class="quiz-score-display">🏆 ${quizState.score}</div>
    </div>
    <div class="quiz-difficulty">
      ${'⭐'.repeat(q.level)}
    </div>
    <div class="quiz-question-card">
      <div class="quiz-q-text">${qd.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${qd.opts.map((o,i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${o}</button>`).join('')}
      </div>
    </div>
    <div class="quiz-lifelines">
      <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
      <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
      <button class="lifeline-btn ${quizState.lifelines.istikhara?'':'used'}" onclick="useIstikhara()" ${quizState.lifelines.istikhara?'':'disabled'}>${t.lifelineIstikhara}</button>
    </div>
  `;
}

function answerQuiz(idx) {
  if (quizState.answered.includes(quizState.current)) return;
  quizState.answered.push(quizState.current);
  const q = quizState.questions[quizState.current];
  const correct = q[lang].correct;
  const isCorrect = idx === correct;
  if (isCorrect) {
    quizState.score += q.level * 10;
    addXP(5 * q.level);
  }
  // Highlight
  document.querySelectorAll('.quiz-opt').forEach((btn, i) => {
    if (i === correct) btn.classList.add('correct');
    else if (i === idx && !isCorrect) btn.classList.add('wrong');
    btn.disabled = true;
  });
  const t = T[lang];
  const feedback = document.createElement('div');
  feedback.className = `quiz-feedback ${isCorrect?'correct':'wrong'}`;
  feedback.textContent = isCorrect ? t.quizCorrect : t.quizWrong;
  document.querySelector('.quiz-question-card').appendChild(feedback);
  playSound(isCorrect ? 'success' : 'click');
  setTimeout(() => {
    quizState.current++;
    showQuestion();
  }, 1500);
}

function showQuizResult() {
  const t = T[lang];
  const total = quizState.questions.length;
  const maxScore = quizState.questions.reduce((sum,q) => sum + q.level*10, 0);
  const pct = Math.round((quizState.score/maxScore)*100);
  let emoji, title;
  if (pct >= 80) { emoji='🏆'; title=lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A true scholar!'; }
  else if (pct >= 50) { emoji='📚'; title=lang==='ar'?'جيد، واصل التعلم!':lang==='fr'?'Bien, continuez !':'Good, keep learning!'; }
  else { emoji='📍'; title=lang==='ar'?'ابدأ من هنا!':lang==='fr'?'Commencez ici !':'Start here!'; }
  addXP(20);
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${maxScore} (${pct}%)</div>
    <div class="qr-title">${title}</div>
    <button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${t.quizRestart}</button>
  `;
  result.scrollIntoView({behavior:'smooth'});
  if (pct >= 80) launchConfetti();
  document.getElementById('quizContainer').innerHTML = '';
}

// ═══════════════ LIFELINES ═══════════════
function useFifty() {
  if (!quizState.lifelines.fifty || quizState.answered.includes(quizState.current)) return;
  quizState.lifelines.fifty = false;
  const q = quizState.questions[quizState.current];
  const correct = q[lang].correct;
  const wrong = [0,1,2,3].filter(i => i !== correct);
  const hide = wrong.sort(() => Math.random()-0.5).slice(0,2);
  hide.forEach(i => {
    const btn = document.getElementById('qopt-'+i);
    if (btn) { btn.style.visibility = 'hidden'; btn.disabled = true; }
  });
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint || quizState.answered.includes(quizState.current)) return;
  quizState.lifelines.hint = false;
  const q = quizState.questions[quizState.current];
  const hint = q[lang].hint;
  showToast('📖 ' + hint);
  playSound('click');
}

function useIstikhara() {
  if (!quizState.lifelines.istikhara || quizState.answered.includes(quizState.current)) return;
  quizState.lifelines.istikhara = false;
  const q = quizState.questions[quizState.current];
  const correct = q[lang].correct;
  const btn = document.getElementById('qopt-'+correct);
  if (btn) btn.classList.add('istikhara-highlight');
  playSound('success');
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle:'⚠️ تنبيه مهم', disclaimer:'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName:'الشيخ محمد الغزالي', authorDates:'١٩١٧ — ١٩٩٦',
      authorBio:'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد.',
      bookTitle:'عن الكتاب',
      bookDesc:'"من هنا نعلم" هو رد الشيخ الغزالي العلمي على كتاب خالد محمد خالد "من هنا نبدأ" الذي دعا لفصل الدين عن الدولة. يثبت الغزالي أن الإسلام دين ودولة معاً، ويفند دعاوى العلمانية، ويصحح المفاهيم الخاطئة عن الحكم الإسلامي. كُتب بدقة علمية مع احترام المخالف.',
      contextTitle:'السياق التاريخي',
      contextDesc:'صدر الكتاب في أواخر الأربعينيات رداً على موجة الدعوة للعلمانية في مصر. كان خالد محمد خالد قد نشر كتاباً يطالب فيه بفصل الدين عن الحكم متأثراً بالتجربة الأوروبية. فرد عليه الغزالي بأن التجربة الأوروبية مع الكنيسة لا تنطبق على الإسلام.',
      sourcesTitle:'المصادر',
      sources:['كتاب "من هنا نعلم" — الشيخ محمد الغزالي','كتاب "من هنا نبدأ" — خالد محمد خالد','القرآن الكريم','صحيح البخاري ومسلم'],
      contact:'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle:'⚠️ Important Notice', disclaimer:'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996',
      authorBio:'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal, fighting rigidity, and defending women\'s rights in Islam.',
      bookTitle:'About the Book',
      bookDesc:'"This Is Where We Learn" is Sheikh al-Ghazali\'s scholarly response to Khalid Muhammad Khalid\'s "From Here We Begin" which called for separating religion from the state. Al-Ghazali proves that Islam is both religion and state, refutes secularism claims, and corrects misconceptions about Islamic governance. Written with scholarly rigor yet respectful disagreement.',
      contextTitle:'Historical Context',
      contextDesc:'The book was published in the late 1940s in response to the wave of secularism advocacy in Egypt. Khalid Muhammad Khalid had published a book calling for separating religion from governance, influenced by the European experience. Al-Ghazali responded that Europe\'s experience with the Church does not apply to Islam.',
      sourcesTitle:'Sources',
      sources:['"This Is Where We Learn" (Min Huna Na\'lam) — Sheikh Mohammed al-Ghazali','"From Here We Begin" (Min Huna Nabda\') — Khalid Muhammad Khalid','The Holy Quran','Sahih al-Bukhari and Muslim'],
      contact:'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle:'⚠️ Avis Important', disclaimer:'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Cheikh al-Ghazali. Le contenu est tiré du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName:'Cheikh Mohammed al-Ghazali', authorDates:'1917 — 1996',
      authorBio:'Savant et penseur islamique égyptien, surnommé « Le Littéraire de la Prédication ». Auteur de plus de 94 livres. Diplômé d\'Al-Azhar, professeur à l\'Université Émir Abdelkader de Constantine (Algérie). Lauréat du Prix Roi Faysal. Connu pour le renouveau, la lutte contre la rigidité et la défense des droits des femmes en Islam.',
      bookTitle:'À Propos du Livre',
      bookDesc:'« C\'est Ici Que Nous Apprenons » est la réponse savante du Cheikh al-Ghazali au livre de Khalid Muhammad Khalid « D\'Ici Nous Commençons » qui appelait à la séparation de la religion et de l\'État. Al-Ghazali prouve que l\'Islam est à la fois religion et État, réfute les affirmations de la laïcité, et corrige les idées fausses sur la gouvernance islamique. Écrit avec rigueur savante mais dans le respect du contradicteur.',
      contextTitle:'Contexte Historique',
      contextDesc:'Le livre a été publié à la fin des années 1940 en réponse à la vague de plaidoyer pour la laïcité en Égypte. Khalid Muhammad Khalid avait publié un livre appelant à séparer la religion de la gouvernance, influencé par l\'expérience européenne. Al-Ghazali a répondu que l\'expérience de l\'Europe avec l\'Église ne s\'applique pas à l\'Islam.',
      sourcesTitle:'Sources',
      sources:['« C\'est Ici Que Nous Apprenons » (Min Huna Na\'lam) — Cheikh Mohammed al-Ghazali','« D\'Ici Nous Commençons » (Min Huna Nabda\') — Khalid Muhammad Khalid','Le Saint Coran','Sahih al-Bukhari et Muslim'],
      contact:'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `
    <div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div>
    <div class="about-section"><div class="about-section-title">${a.contextTitle}</div><p class="about-text">${a.contextDesc}</p></div>
    <div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s=>`<p class="about-text">&#8226; ${s}</p>`).join('')}</div>
    <div class="about-section"><p class="about-text">${a.contact}</p></div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar:[
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "من هنا نعلم" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ٢٠ بطاقة معرفية، اختبار تصاعدي بـ ١٥ سؤالاً، نظام نقاط وأوسمة، مسار اكتشاف.'},
      {title:'🎮 نظام النقاط',body:'+١٠ نقاط لكل بطاقة تقرأها، +٥ لكل إجابة صحيحة، +٢٠ عند إكمال الاختبار. اجمع أوسمة وافتح مستويات جديدة!'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/min-huna-nalam'},
    ],
    en:[
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"This Is Where We Learn" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 20 knowledge cards, progressive quiz with 15 questions, XP & badges system, discovery path.'},
      {title:'🎮 XP System',body:'+10 XP per card read, +5 per correct answer, +20 on quiz completion. Collect badges and unlock new levels!'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/min-huna-nalam'},
    ],
    fr:[
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Cheikh al-Ghazali.'},
      {title:'📚 Sources',body:'« C\'est Ici Que Nous Apprenons » par Cheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalités',body:'Trois langues (AR/EN/FR), 3 thèmes, 20 cartes de savoir, quiz progressif avec 15 questions, système XP et médailles, parcours de découverte.'},
      {title:'🎮 Système XP',body:'+10 XP par carte lue, +5 par bonne réponse, +20 à la fin du quiz. Collectionnez les médailles et débloquez de nouveaux niveaux !'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/min-huna-nalam'},
    ]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `
    <div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>
  `).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`;
  }).join('');
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#00695C','#26A69A','#80CBC4','#FFD54F','#4FC3F7','#B388FF','#66BB6A'];
  for (let i=0;i<120;i++) { particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height-canvas.height,w:Math.random()*10+5,h:Math.random()*6+3,color:colors[Math.floor(Math.random()*colors.length)],vx:(Math.random()-.5)*4,vy:Math.random()*3+2,rot:Math.random()*360,rotSpeed:(Math.random()-.5)*10}); }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx;p.y+=p.vy;p.rot+=p.rotSpeed;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot*Math.PI/180);ctx.fillStyle=p.color;ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);ctx.restore(); });
    frame++;
    if (frame<120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } });
  }, {threshold:0.08, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el));
}

// ═══════════════ KEYBOARD NAV ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key==='Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.knowledge-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key==='ArrowRight'||e.key==='ArrowLeft') {
      const kp = document.getElementById('panel-knowledge');
      if (!kp||!kp.classList.contains('active')) return;
      if (document.activeElement&&document.activeElement.id==='knowledgeSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.knowledge-card')).filter(c=>c.style.display!=='none');
      if (!cards.length) return;
      if (currentPrincipleIdx>=0&&currentPrincipleIdx<cards.length) cards[currentPrincipleIdx].classList.remove('open');
      const dir = (document.documentElement.dir==='rtl')?(e.key==='ArrowRight'?-1:1):(e.key==='ArrowRight'?1:-1);
      currentPrincipleIdx = Math.max(0,Math.min(cards.length-1,currentPrincipleIdx+dir));
      cards[currentPrincipleIdx].classList.add('open');
      markCardRead(KNOWLEDGE[currentPrincipleIdx].id);
      cards[currentPrincipleIdx].scrollIntoView({behavior:'smooth',block:'center'});
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t&&m) { m.textContent=msg; t.style.display='block'; setTimeout(()=>t.style.display='none',2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY>300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; }
    else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; }
    else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; }
    else if (type==='badge') { osc.frequency.value=660; osc.type='sine'; gain.gain.value=0.07; }
    osc.start(); osc.stop(audioCtx.currentTime+0.12);
  } catch(e) {}
}

// ═══════════════ SWIPE GESTURES ═══════════════
(function initSwipe() {
  let sx=0,sy=0;
  const tabs=['home','knowledge','path','quiz','about'];
  document.addEventListener('touchstart',e=>{sx=e.changedTouches[0].screenX;sy=e.changedTouches[0].screenY},{passive:true});
  document.addEventListener('touchend',e=>{
    const dx=e.changedTouches[0].screenX-sx;
    const dy=e.changedTouches[0].screenY-sy;
    if (Math.abs(dx)<80||Math.abs(dy)>Math.abs(dx)*0.6) return;
    const active=document.querySelector('.tab.active');
    if (!active) return;
    const cur=tabs.indexOf(active.dataset.tab);
    const isRTL=document.documentElement.dir==='rtl';
    const dir=isRTL?(dx>0?-1:1):(dx>0?1:-1);
    const next=cur-dir;
    if (next>=0&&next<tabs.length) document.querySelector(`[data-tab="${tabs[next]}"]`).click();
  },{passive:true});
})();

// ═══════════════ TICKER ═══════════════
function initTicker() {
  const items = {
    ar:['📍 من هنا نعلم — الشيخ محمد الغزالي','⚖️ الإسلام دين ودولة','📚 ٢٠ بطاقة معرفية','🧠 اختبر معرفتك','🏆 اجمع النقاط والأوسمة'],
    en:['📍 This Is Where We Learn — Sheikh al-Ghazali','⚖️ Islam: religion and state','📚 20 knowledge cards','🧠 Test your knowledge','🏆 Collect XP & badges'],
    fr:['📍 C\'est Ici Que Nous Apprenons — Cheikh al-Ghazali','⚖️ L\'Islam : religion et État','📚 20 cartes de savoir','🧠 Testez vos connaissances','🏆 Collectez XP et médailles']
  };
  const list = items[lang]||items.en;
  const sep = '   ✦   ';
  const full = list.join(sep) + sep;
  const el = document.getElementById('tickerText');
  if (el) {
    el.innerHTML = `<span class="tc">${full}</span><span class="tc">${full}</span>`;
    el.style.animation = `tickerMarquee ${full.length*0.15}s linear infinite`;
  }
}

// ═══════════════ BOOT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('themeIcon').textContent = THEME_ICONS[THEMES.indexOf(theme)];
  initApp();
  initTicker();
  setTimeout(initScrollReveal, 500);
});
