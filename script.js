/* ============================================================
   DJELTI ILYES — Portfolio Scripts
   ============================================================ */

// ==================== TRANSLATIONS ====================
const translations = {
  ru: {
    'nav.about': 'Обо мне',
    'nav.achievements': 'Достижения',
    'nav.projects': 'Проекты',
    'nav.skills': 'Навыки',
    'nav.portfolio': 'Портфолио',
    'nav.contact': 'Контакт',
    'nav.hire': 'Связаться',
    'hero.badge': 'Открыт для возможностей',
    'hero.title': 'ИИ Инженер',
    'hero.title2': 'Креативный Технолог',
    'hero.subtitle': 'Создаю интеллектуальные системы и цифровой опыт, соединяющий исследования в области ИИ с реальным воздействием.',
    'hero.btn1': 'Проекты',
    'hero.btn2': 'Связаться',
    'hero.btn3': 'Скачать CV',
    'hero.scroll': 'Прокрутите вниз',
    'about.tag': 'Знакомство',
    'about.title': 'Обо мне',
    'about.degree': 'Магистр',
    'about.heading': 'Магистр, специализирующийся на компьютерном зрении, IoT и интеллектуальных системах',
    'about.text': 'Выпускник магистратуры, специализирующийся на компьютерном зрении, IoT и интеллектуальных системах. Создаю технологии, которые соединяют исследования в области ИИ с реальным воздействием на мир.',
    'about.focus_title': 'Направления исследований',
    'about.focus1': 'Компьютерное зрение',
    'about.focus2': 'IoT',
    'about.focus3': 'Встраиваемые системы',
    'about.focus4': 'Edge AI',
    'about.stat1': 'Оценка магистра',
    'about.stat2': 'Точность модели',
    'about.stat3': 'Место в стране',
    'ach.tag': 'Достижения',
    'ach.title': 'Ключевые результаты',
    'ach.subtitle': 'Цифры, которые отражают стремление к совершенству',
    'ach.label1': 'Оценка магистра',
    'ach.desc1': 'Высший балл за исследование в области ИИ и компьютерного зрения',
    'ach.label2': 'Точность модели',
    'ach.desc2': 'Система обнаружения объектов LUNAV достигла 95% точности',
    'ach.label3': 'Национальный конкурс',
    'ach.desc3': 'Второе место в национальном конкурсе инноваций',
    'ach.place': '-е место',
    'proj.tag': 'Работы',
    'proj.title': 'Проекты',
    'proj.subtitle': 'Интеллектуальные системы и инновационные решения',
    'proj.featured': 'Главный проект',
    'proj.lunav_desc': 'Интеллектуальная навигационная система для слабовидящих людей',
    'proj.accuracy': 'Точность',
    'proj.detection': 'Обнаружение',
    'proj.battery': 'Батарея',
    'proj.details': 'Подробнее',
    'proj.dc_desc': 'Устойчивое решение для испарительного охлаждения',
    'proj.sensors': 'Датчики',
    'proj.temp': 'Снижение t°',
    'proj.energy': 'Экономия',
    'proj.rob_title': 'Образовательная робототехника',
    'proj.rob_desc': 'Мастер-классы по робототехнике Arduino для студентов университетов. Проектное обучение.',
    'proj.robotics': 'Робототехника',
    'proj.education': 'Образование',
    'proj.net_title': 'Network Optimizer',
    'proj.net_desc': 'Инструмент мониторинга и оптимизации сети на Python. Мониторинг в реальном времени, автоматическая оптимизация.',
    'proj.networking': 'Сети',
    'proj.monitoring': 'Мониторинг',
    'modal.lunav_sub': 'Интеллектуальная навигационная система для слабовидящих',
    'modal.overview': 'Обзор',
    'modal.lunav_overview': 'Интеллектуальная навигационная система для слабовидящих людей, использующая обнаружение объектов в реальном времени, компьютерное зрение YOLO, 3D-пространственный звук, навигацию с тактильной обратной связью, Raspberry Pi с ультразвуковыми датчиками.',
    'modal.features': 'Функции',
    'modal.lunav_f1': 'Обнаружение объектов в реальном времени',
    'modal.lunav_f2': 'Компьютерное зрение YOLO',
    'modal.lunav_f3': '3D-пространственный звук',
    'modal.lunav_f4': 'Навигация с тактильной обратной связью',
    'modal.lunav_f5': 'Raspberry Pi + ультразвуковые датчики',
    'modal.tech': 'Технологии',
    'modal.performance': 'Производительность',
    'modal.dc_sub': 'Устойчивое решение для испарительного охлаждения',
    'modal.dc_overview': 'Устойчивое решение для испарительного охлаждения. Снижение температуры на 10–15°C, экономия энергии 80%. Использует датчики Arduino.',
    'modal.results': 'Результаты',
    'modal.rob_sub': 'Мастер-классы по робототехнике для студентов',
    'modal.rob_overview': 'Мастер-классы по робототехнике Arduino для студентов университетов. Проектное обучение с практическими заданиями.',
    'modal.net_sub': 'Инструмент мониторинга и оптимизации сети',
    'modal.net_overview': 'Инструмент мониторинга и оптимизации сети на Python. Мониторинг в реальном времени, автоматическая оптимизация производительности.',
    'modal.net_f1': 'Мониторинг в реальном времени',
    'modal.net_f2': 'Автоматическая оптимизация',
    'skills.tag': 'Экспертиза',
    'skills.title': 'Навыки',
    'skills.subtitle': 'Техническая экспертиза и творческие способности',
    'skills.tech': 'Технические навыки',
    'skills.creative': 'Творческие навыки',
    'skills.aiml': 'ИИ и Машинное обучение',
    'skills.aiml_desc': 'Глубокое обучение, нейронные сети, обработка сигналов',
    'skills.cv': 'Компьютерное зрение',
    'skills.cv_desc': 'OpenCV, YOLO, обнаружение объектов, обработка изображений',
    'skills.iot': 'IoT и Встраиваемые системы',
    'skills.iot_desc': 'Raspberry Pi, Arduino, датчики, системы реального времени, основы PCB',
    'skills.dev': 'Разработка ПО',
    'skills.dev_desc': 'Python, C/C++, структуры данных, Git',
    'skills.edge_desc': 'Развертывание моделей на встраиваемых устройствах',
    'skills.video': 'Видеомонтаж',
    'skills.video_desc': 'Профессиональное редактирование видео и постпроизводство',
    'skills.design': 'Графический дизайн',
    'skills.design_desc': 'Визуальный дизайн и создание творческого контента',
    'skills.film': 'Кинопроизводство',
    'skills.film_desc': 'Создание фильмов, операторская работа и сторителлинг',
    'skills.marketing': 'Цифровой маркетинг',
    'skills.marketing_desc': 'Онлайн-маркетинг и стратегии продвижения',
    'skills.ecommerce': 'E-commerce Маркетинг',
    'skills.ecommerce_desc': 'Маркетинг электронной коммерции и оптимизация конверсий',
    'skills.content': 'Создание контента',
    'skills.content_desc': 'Создание креативного цифрового контента для различных платформ',
    'port.tag': 'Галерея',
    'port.title': 'Портфолио',
    'port.subtitle': 'Избранные работы и прототипы',
    'port.all': 'Все',
    'port.ai': 'ИИ проекты',
    'port.video': 'Видео',
    'port.design': 'Дизайн',
    'port.tech': 'Технологии',
    'port.item1': 'Модель LUNAV',
    'port.item1_cat': 'Компьютерное зрение',
    'port.item2': 'Обучение нейросети',
    'port.item2_cat': 'Глубокое обучение',
    'port.item3': 'Видеопроект',
    'port.item3_cat': 'Видеопроизводство',
    'port.item4': 'Дизайн-проект',
    'port.item4_cat': 'Графический дизайн',
    'port.item5': 'IoT прототип',
    'port.item5_cat': 'Встраиваемые системы',
    'port.item6': 'Брендинг',
    'port.item6_cat': 'Креативный дизайн',
    'contact.tag': 'Контакт',
    'contact.heading': 'Давайте создадим\nбудущее вместе.',
    'contact.text': 'Открыт для сотрудничества, исследовательских проектов и инновационных возможностей.',
    'contact.cta': 'Готовы к инновациям?',
    'contact.cta_text': 'Свяжитесь со мной для обсуждения вашего следующего проекта',
    'contact.btn': 'Написать мне',
    'footer.copy': '© 2025 Djelti Ilyes. Все права защищены.'
  },

  en: {
    'nav.about': 'About',
    'nav.achievements': 'Achievements',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.hire': 'Hire Me',
    'hero.badge': 'Open to Opportunities',
    'hero.title': 'AI Engineer',
    'hero.title2': 'Creative Technologist',
    'hero.subtitle': 'Building intelligent systems and digital experiences that bridge AI research and real-world impact.',
    'hero.btn1': 'View Projects',
    'hero.btn2': 'Contact Me',
    'hero.btn3': 'Download CV',
    'hero.scroll': 'Scroll Down',
    'about.tag': 'Introduction',
    'about.title': 'About Me',
    'about.degree': 'Master\'s',
    'about.heading': 'Master\'s graduate specializing in Computer Vision, IoT, and intelligent systems',
    'about.text': 'Master\'s graduate specializing in Computer Vision, IoT, and intelligent systems. Creating technology that bridges the gap between AI research and real-world impact.',
    'about.focus_title': 'Research Focus',
    'about.focus1': 'Computer Vision',
    'about.focus2': 'IoT',
    'about.focus3': 'Embedded Systems',
    'about.focus4': 'Edge AI',
    'about.stat1': 'Master Score',
    'about.stat2': 'Model Accuracy',
    'about.stat3': 'National Rank',
    'ach.tag': 'Achievements',
    'ach.title': 'Key Results',
    'ach.subtitle': 'Numbers that reflect the pursuit of excellence',
    'ach.label1': 'Master Score',
    'ach.desc1': 'Highest score in AI and Computer Vision research',
    'ach.label2': 'Model Accuracy',
    'ach.desc2': 'LUNAV object detection system achieved 95% accuracy',
    'ach.label3': 'National Competition',
    'ach.desc3': 'Second place in the national innovation competition',
    'ach.place': 'nd Place',
    'proj.tag': 'Works',
    'proj.title': 'Projects',
    'proj.subtitle': 'Intelligent systems and innovative solutions',
    'proj.featured': 'Featured Project',
    'proj.lunav_desc': 'Intelligent Navigation System for the Visually Impaired',
    'proj.accuracy': 'Accuracy',
    'proj.detection': 'Detection',
    'proj.battery': 'Battery',
    'proj.details': 'Learn More',
    'proj.dc_desc': 'Sustainable evaporative cooling solution',
    'proj.sensors': 'Sensors',
    'proj.temp': 'Temp Reduction',
    'proj.energy': 'Energy Savings',
    'proj.rob_title': 'Educational Robotics',
    'proj.rob_desc': 'Arduino robotics workshops for university students. Project-based teaching.',
    'proj.robotics': 'Robotics',
    'proj.education': 'Education',
    'proj.net_title': 'Network Optimizer',
    'proj.net_desc': 'Python network monitoring and optimization tool. Real-time monitoring, automated optimization.',
    'proj.networking': 'Networking',
    'proj.monitoring': 'Monitoring',
    'modal.lunav_sub': 'Intelligent Navigation System for the Visually Impaired',
    'modal.overview': 'Overview',
    'modal.lunav_overview': 'Intelligent navigation system for the visually impaired using real-time object detection, YOLO computer vision, 3D spatial audio, haptic feedback navigation, Raspberry Pi with ultrasonic sensors.',
    'modal.features': 'Features',
    'modal.lunav_f1': 'Real-time object detection',
    'modal.lunav_f2': 'YOLO computer vision',
    'modal.lunav_f3': '3D spatial audio',
    'modal.lunav_f4': 'Haptic feedback navigation',
    'modal.lunav_f5': 'Raspberry Pi + ultrasonic sensors',
    'modal.tech': 'Technologies',
    'modal.performance': 'Performance',
    'modal.dc_sub': 'Sustainable evaporative cooling solution',
    'modal.dc_overview': 'Sustainable evaporative cooling solution. Temperature reduction of 10–15°C, energy savings of 80%. Uses Arduino sensors.',
    'modal.results': 'Results',
    'modal.rob_sub': 'Robotics workshops for university students',
    'modal.rob_overview': 'Arduino robotics workshops for university students. Project-based teaching with hands-on assignments.',
    'modal.net_sub': 'Network monitoring and optimization tool',
    'modal.net_overview': 'Python network monitoring and optimization tool. Real-time monitoring, automated performance optimization.',
    'modal.net_f1': 'Real-time monitoring',
    'modal.net_f2': 'Automated optimization',
    'skills.tag': 'Expertise',
    'skills.title': 'Skills',
    'skills.subtitle': 'Technical expertise and creative abilities',
    'skills.tech': 'Technical Skills',
    'skills.creative': 'Creative Skills',
    'skills.aiml': 'AI & Machine Learning',
    'skills.aiml_desc': 'Deep Learning, Neural Networks, Signal Processing',
    'skills.cv': 'Computer Vision',
    'skills.cv_desc': 'OpenCV, YOLO, Object Detection, Image Processing',
    'skills.iot': 'IoT & Embedded Systems',
    'skills.iot_desc': 'Raspberry Pi, Arduino, Sensor integration, Real-time systems, PCB basics',
    'skills.dev': 'Software Development',
    'skills.dev_desc': 'Python, C/C++, Data Structures, Git',
    'skills.edge_desc': 'Deploying models on embedded devices',
    'skills.video': 'Video Editing',
    'skills.video_desc': 'Professional video editing and post-production',
    'skills.design': 'Graphic Design',
    'skills.design_desc': 'Visual design and creative content creation',
    'skills.film': 'Filmmaking',
    'skills.film_desc': 'Film production, cinematography and storytelling',
    'skills.marketing': 'Digital Marketing',
    'skills.marketing_desc': 'Online marketing and promotion strategies',
    'skills.ecommerce': 'E-commerce Marketing',
    'skills.ecommerce_desc': 'E-commerce marketing and conversion optimization',
    'skills.content': 'Content Creation',
    'skills.content_desc': 'Creating creative digital content for various platforms',
    'port.tag': 'Gallery',
    'port.title': 'Portfolio',
    'port.subtitle': 'Selected works and prototypes',
    'port.all': 'All',
    'port.ai': 'AI Projects',
    'port.video': 'Video',
    'port.design': 'Design',
    'port.tech': 'Technology',
    'port.item1': 'LUNAV Model',
    'port.item1_cat': 'Computer Vision',
    'port.item2': 'Neural Network Training',
    'port.item2_cat': 'Deep Learning',
    'port.item3': 'Video Project',
    'port.item3_cat': 'Video Production',
    'port.item4': 'Design Project',
    'port.item4_cat': 'Graphic Design',
    'port.item5': 'IoT Prototype',
    'port.item5_cat': 'Embedded Systems',
    'port.item6': 'Branding',
    'port.item6_cat': 'Creative Design',
    'contact.tag': 'Contact',
    'contact.heading': 'Let\'s build the\nfuture together.',
    'contact.text': 'Open for collaboration, research projects and innovative opportunities.',
    'contact.cta': 'Ready to innovate?',
    'contact.cta_text': 'Get in touch to discuss your next project',
    'contact.btn': 'Write to Me',
    'footer.copy': '© 2025 Djelti Ilyes. All rights reserved.'
  },

  fr: {
    'nav.about': 'À propos',
    'nav.achievements': 'Réalisations',
    'nav.projects': 'Projets',
    'nav.skills': 'Compétences',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.hire': 'Contacter',
    'hero.badge': 'Ouvert aux opportunités',
    'hero.title': 'Ingénieur IA',
    'hero.title2': 'Technologue Créatif',
    'hero.subtitle': 'Je crée des systèmes intelligents et des expériences numériques reliant la recherche en IA à un impact concret.',
    'hero.btn1': 'Voir les Projets',
    'hero.btn2': 'Me Contacter',
    'hero.btn3': 'Télécharger CV',
    'hero.scroll': 'Défiler vers le bas',
    'about.tag': 'Présentation',
    'about.title': 'À propos',
    'about.degree': 'Master',
    'about.heading': 'Diplômé de Master spécialisé en Vision par Ordinateur, IoT et systèmes intelligents',
    'about.text': 'Diplômé de Master spécialisé en Vision par Ordinateur, IoT et systèmes intelligents. Je crée des technologies qui comblent le fossé entre la recherche en IA et l\'impact réel.',
    'about.focus_title': 'Axes de recherche',
    'about.focus1': 'Vision par Ordinateur',
    'about.focus2': 'IoT',
    'about.focus3': 'Systèmes Embarqués',
    'about.focus4': 'Edge AI',
    'about.stat1': 'Note de Master',
    'about.stat2': 'Précision du modèle',
    'about.stat3': 'Rang National',
    'ach.tag': 'Réalisations',
    'ach.title': 'Résultats clés',
    'ach.subtitle': 'Des chiffres qui reflètent la quête d\'excellence',
    'ach.label1': 'Note de Master',
    'ach.desc1': 'Meilleure note en recherche IA et Vision par Ordinateur',
    'ach.label2': 'Précision du modèle',
    'ach.desc2': 'Le système de détection d\'objets LUNAV a atteint 95% de précision',
    'ach.label3': 'Compétition Nationale',
    'ach.desc3': 'Deuxième place au concours national d\'innovation',
    'ach.place': 'e place',
    'proj.tag': 'Travaux',
    'proj.title': 'Projets',
    'proj.subtitle': 'Systèmes intelligents et solutions innovantes',
    'proj.featured': 'Projet Principal',
    'proj.lunav_desc': 'Système de navigation intelligent pour les personnes malvoyantes',
    'proj.accuracy': 'Précision',
    'proj.detection': 'Détection',
    'proj.battery': 'Batterie',
    'proj.details': 'En savoir plus',
    'proj.dc_desc': 'Solution de refroidissement par évaporation durable',
    'proj.sensors': 'Capteurs',
    'proj.temp': 'Réduction t°',
    'proj.energy': 'Économie',
    'proj.rob_title': 'Robotique Éducative',
    'proj.rob_desc': 'Ateliers de robotique Arduino pour étudiants universitaires. Enseignement par projet.',
    'proj.robotics': 'Robotique',
    'proj.education': 'Éducation',
    'proj.net_title': 'Network Optimizer',
    'proj.net_desc': 'Outil de surveillance et d\'optimisation réseau en Python. Surveillance en temps réel, optimisation automatique.',
    'proj.networking': 'Réseau',
    'proj.monitoring': 'Surveillance',
    'modal.lunav_sub': 'Système de navigation intelligent pour les malvoyants',
    'modal.overview': 'Aperçu',
    'modal.lunav_overview': 'Système de navigation intelligent pour les personnes malvoyantes utilisant la détection d\'objets en temps réel, la vision par ordinateur YOLO, l\'audio spatial 3D, la navigation par retour haptique, Raspberry Pi avec capteurs ultrasoniques.',
    'modal.features': 'Fonctionnalités',
    'modal.lunav_f1': 'Détection d\'objets en temps réel',
    'modal.lunav_f2': 'Vision par ordinateur YOLO',
    'modal.lunav_f3': 'Audio spatial 3D',
    'modal.lunav_f4': 'Navigation par retour haptique',
    'modal.lunav_f5': 'Raspberry Pi + capteurs ultrasoniques',
    'modal.tech': 'Technologies',
    'modal.performance': 'Performance',
    'modal.dc_sub': 'Solution de refroidissement par évaporation durable',
    'modal.dc_overview': 'Solution de refroidissement par évaporation durable. Réduction de température de 10–15°C, économie d\'énergie de 80%. Utilise des capteurs Arduino.',
    'modal.results': 'Résultats',
    'modal.rob_sub': 'Ateliers de robotique pour étudiants',
    'modal.rob_overview': 'Ateliers de robotique Arduino pour étudiants universitaires. Enseignement par projets avec travaux pratiques.',
    'modal.net_sub': 'Outil de surveillance et d\'optimisation réseau',
    'modal.net_overview': 'Outil de surveillance et d\'optimisation réseau en Python. Surveillance en temps réel, optimisation automatique des performances.',
    'modal.net_f1': 'Surveillance en temps réel',
    'modal.net_f2': 'Optimisation automatique',
    'skills.tag': 'Expertise',
    'skills.title': 'Compétences',
    'skills.subtitle': 'Expertise technique et capacités créatives',
    'skills.tech': 'Compétences Techniques',
    'skills.creative': 'Compétences Créatives',
    'skills.aiml': 'IA et Machine Learning',
    'skills.aiml_desc': 'Deep Learning, Réseaux de neurones, Traitement du signal',
    'skills.cv': 'Vision par Ordinateur',
    'skills.cv_desc': 'OpenCV, YOLO, Détection d\'objets, Traitement d\'images',
    'skills.iot': 'IoT et Systèmes Embarqués',
    'skills.iot_desc': 'Raspberry Pi, Arduino, Intégration capteurs, Systèmes temps réel, Bases PCB',
    'skills.dev': 'Développement Logiciel',
    'skills.dev_desc': 'Python, C/C++, Structures de données, Git',
    'skills.edge_desc': 'Déploiement de modèles sur appareils embarqués',
    'skills.video': 'Montage Vidéo',
    'skills.video_desc': 'Édition vidéo professionnelle et post-production',
    'skills.design': 'Design Graphique',
    'skills.design_desc': 'Design visuel et création de contenu créatif',
    'skills.film': 'Réalisation',
    'skills.film_desc': 'Production cinématographique et narration visuelle',
    'skills.marketing': 'Marketing Digital',
    'skills.marketing_desc': 'Marketing en ligne et stratégies de promotion',
    'skills.ecommerce': 'Marketing E-commerce',
    'skills.ecommerce_desc': 'Marketing e-commerce et optimisation de conversion',
    'skills.content': 'Création de Contenu',
    'skills.content_desc': 'Création de contenu numérique créatif pour diverses plateformes',
    'port.tag': 'Galerie',
    'port.title': 'Portfolio',
    'port.subtitle': 'Travaux sélectionnés et prototypes',
    'port.all': 'Tous',
    'port.ai': 'Projets IA',
    'port.video': 'Vidéo',
    'port.design': 'Design',
    'port.tech': 'Technologie',
    'port.item1': 'Modèle LUNAV',
    'port.item1_cat': 'Vision par Ordinateur',
    'port.item2': 'Entraînement réseau neuronal',
    'port.item2_cat': 'Deep Learning',
    'port.item3': 'Projet Vidéo',
    'port.item3_cat': 'Production Vidéo',
    'port.item4': 'Projet Design',
    'port.item4_cat': 'Design Graphique',
    'port.item5': 'Prototype IoT',
    'port.item5_cat': 'Systèmes Embarqués',
    'port.item6': 'Branding',
    'port.item6_cat': 'Design Créatif',
    'contact.tag': 'Contact',
    'contact.heading': 'Construisons\nl\'avenir ensemble.',
    'contact.text': 'Ouvert à la collaboration, aux projets de recherche et aux opportunités innovantes.',
    'contact.cta': 'Prêt à innover ?',
    'contact.cta_text': 'Contactez-moi pour discuter de votre prochain projet',
    'contact.btn': 'M\'écrire',
    'footer.copy': '© 2025 Djelti Ilyes. Tous droits réservés.'
  },

  ar: {
    'nav.about': 'نبذة عني',
    'nav.achievements': 'الإنجازات',
    'nav.projects': 'المشاريع',
    'nav.skills': 'المهارات',
    'nav.portfolio': 'معرض الأعمال',
    'nav.contact': 'اتصل بي',
    'nav.hire': 'تواصل',
    'hero.badge': 'متاح للفرص',
    'hero.title': 'مهندس ذكاء اصطناعي',
    'hero.title2': 'تقني إبداعي',
    'hero.subtitle': 'أبني أنظمة ذكية وتجارب رقمية تربط بين أبحاث الذكاء الاصطناعي والتأثير الحقيقي.',
    'hero.btn1': 'المشاريع',
    'hero.btn2': 'اتصل بي',
    'hero.btn3': 'تحميل السيرة الذاتية',
    'hero.scroll': 'مرر للأسفل',
    'about.tag': 'تعريف',
    'about.title': 'نبذة عني',
    'about.degree': 'ماجستير',
    'about.heading': 'حاصل على ماجستير متخصص في الرؤية الحاسوبية وإنترنت الأشياء والأنظمة الذكية',
    'about.text': 'خريج ماجستير متخصص في الرؤية الحاسوبية وإنترنت الأشياء والأنظمة الذكية. أبتكر تقنيات تسد الفجوة بين أبحاث الذكاء الاصطناعي والتأثير الحقيقي.',
    'about.focus_title': 'محاور البحث',
    'about.focus1': 'الرؤية الحاسوبية',
    'about.focus2': 'إنترنت الأشياء',
    'about.focus3': 'الأنظمة المدمجة',
    'about.focus4': 'Edge AI',
    'about.stat1': 'درجة الماجستير',
    'about.stat2': 'دقة النموذج',
    'about.stat3': 'الترتيب الوطني',
    'ach.tag': 'الإنجازات',
    'ach.title': 'النتائج الرئيسية',
    'ach.subtitle': 'أرقام تعكس السعي نحو التميز',
    'ach.label1': 'درجة الماجستير',
    'ach.desc1': 'أعلى درجة في بحث الذكاء الاصطناعي والرؤية الحاسوبية',
    'ach.label2': 'دقة النموذج',
    'ach.desc2': 'نظام كشف الأجسام LUNAV حقق دقة 95%',
    'ach.label3': 'مسابقة وطنية',
    'ach.desc3': 'المركز الثاني في المسابقة الوطنية للابتكار',
    'ach.place': ' - المركز',
    'proj.tag': 'الأعمال',
    'proj.title': 'المشاريع',
    'proj.subtitle': 'أنظمة ذكية وحلول مبتكرة',
    'proj.featured': 'المشروع الرئيسي',
    'proj.lunav_desc': 'نظام ملاحة ذكي لضعاف البصر',
    'proj.accuracy': 'الدقة',
    'proj.detection': 'الكشف',
    'proj.battery': 'البطارية',
    'proj.details': 'المزيد',
    'proj.dc_desc': 'حل تبريد تبخيري مستدام',
    'proj.sensors': 'المستشعرات',
    'proj.temp': 'خفض الحرارة',
    'proj.energy': 'توفير الطاقة',
    'proj.rob_title': 'الروبوتات التعليمية',
    'proj.rob_desc': 'ورش عمل روبوتات Arduino لطلاب الجامعات. التعلم القائم على المشاريع.',
    'proj.robotics': 'الروبوتات',
    'proj.education': 'التعليم',
    'proj.net_title': 'محسّن الشبكات',
    'proj.net_desc': 'أداة مراقبة وتحسين الشبكة بلغة Python. مراقبة فورية، تحسين تلقائي.',
    'proj.networking': 'الشبكات',
    'proj.monitoring': 'المراقبة',
    'modal.lunav_sub': 'نظام ملاحة ذكي لضعاف البصر',
    'modal.overview': 'نظرة عامة',
    'modal.lunav_overview': 'نظام ملاحة ذكي لضعاف البصر يستخدم كشف الأجسام في الوقت الحقيقي، الرؤية الحاسوبية YOLO، الصوت المكاني ثلاثي الأبعاد، الملاحة باللمس، Raspberry Pi مع مستشعرات فوق صوتية.',
    'modal.features': 'الميزات',
    'modal.lunav_f1': 'كشف الأجسام في الوقت الحقيقي',
    'modal.lunav_f2': 'الرؤية الحاسوبية YOLO',
    'modal.lunav_f3': 'الصوت المكاني ثلاثي الأبعاد',
    'modal.lunav_f4': 'الملاحة باللمس',
    'modal.lunav_f5': 'Raspberry Pi + مستشعرات فوق صوتية',
    'modal.tech': 'التقنيات',
    'modal.performance': 'الأداء',
    'modal.dc_sub': 'حل تبريد تبخيري مستدام',
    'modal.dc_overview': 'حل تبريد تبخيري مستدام. خفض الحرارة 10-15 درجة مئوية، توفير الطاقة 80%. يستخدم مستشعرات Arduino.',
    'modal.results': 'النتائج',
    'modal.rob_sub': 'ورش عمل روبوتات للطلاب',
    'modal.rob_overview': 'ورش عمل روبوتات Arduino لطلاب الجامعات. التعلم القائم على المشاريع مع مهام عملية.',
    'modal.net_sub': 'أداة مراقبة وتحسين الشبكة',
    'modal.net_overview': 'أداة مراقبة وتحسين الشبكة بلغة Python. مراقبة فورية، تحسين تلقائي للأداء.',
    'modal.net_f1': 'مراقبة فورية',
    'modal.net_f2': 'تحسين تلقائي',
    'skills.tag': 'الخبرة',
    'skills.title': 'المهارات',
    'skills.subtitle': 'الخبرة التقنية والقدرات الإبداعية',
    'skills.tech': 'المهارات التقنية',
    'skills.creative': 'المهارات الإبداعية',
    'skills.aiml': 'الذكاء الاصطناعي والتعلم الآلي',
    'skills.aiml_desc': 'التعلم العميق، الشبكات العصبية، معالجة الإشارات',
    'skills.cv': 'الرؤية الحاسوبية',
    'skills.cv_desc': 'OpenCV، YOLO، كشف الأجسام، معالجة الصور',
    'skills.iot': 'إنترنت الأشياء والأنظمة المدمجة',
    'skills.iot_desc': 'Raspberry Pi، Arduino، تكامل المستشعرات، أنظمة الوقت الحقيقي، أساسيات PCB',
    'skills.dev': 'تطوير البرمجيات',
    'skills.dev_desc': 'Python، C/C++، هياكل البيانات، Git',
    'skills.edge_desc': 'نشر النماذج على الأجهزة المدمجة',
    'skills.video': 'تحرير الفيديو',
    'skills.video_desc': 'تحرير فيديو احترافي وما بعد الإنتاج',
    'skills.design': 'التصميم الجرافيكي',
    'skills.design_desc': 'التصميم المرئي وإنشاء المحتوى الإبداعي',
    'skills.film': 'صناعة الأفلام',
    'skills.film_desc': 'إنتاج الأفلام والتصوير السينمائي وسرد القصص',
    'skills.marketing': 'التسويق الرقمي',
    'skills.marketing_desc': 'التسويق عبر الإنترنت واستراتيجيات الترويج',
    'skills.ecommerce': 'تسويق التجارة الإلكترونية',
    'skills.ecommerce_desc': 'تسويق التجارة الإلكترونية وتحسين التحويلات',
    'skills.content': 'إنشاء المحتوى',
    'skills.content_desc': 'إنشاء محتوى رقمي إبداعي لمنصات متنوعة',
    'port.tag': 'المعرض',
    'port.title': 'معرض الأعمال',
    'port.subtitle': 'أعمال مختارة ونماذج أولية',
    'port.all': 'الكل',
    'port.ai': 'مشاريع ذكاء اصطناعي',
    'port.video': 'فيديو',
    'port.design': 'تصميم',
    'port.tech': 'تكنولوجيا',
    'port.item1': 'نموذج LUNAV',
    'port.item1_cat': 'الرؤية الحاسوبية',
    'port.item2': 'تدريب الشبكة العصبية',
    'port.item2_cat': 'التعلم العميق',
    'port.item3': 'مشروع فيديو',
    'port.item3_cat': 'إنتاج الفيديو',
    'port.item4': 'مشروع تصميم',
    'port.item4_cat': 'التصميم الجرافيكي',
    'port.item5': 'نموذج IoT أولي',
    'port.item5_cat': 'الأنظمة المدمجة',
    'port.item6': 'العلامة التجارية',
    'port.item6_cat': 'التصميم الإبداعي',
    'contact.tag': 'اتصل بي',
    'contact.heading': 'لنبنِ المستقبل\nمعاً.',
    'contact.text': 'متاح للتعاون والمشاريع البحثية والفرص المبتكرة.',
    'contact.cta': 'مستعد للابتكار؟',
    'contact.cta_text': 'تواصل معي لمناقشة مشروعك القادم',
    'contact.btn': 'راسلني',
    'footer.copy': '© 2025 جلطي إلياس. جميع الحقوق محفوظة.'
  }
};

const langFlags = { ru: '🇷🇺', en: '🇬🇧', fr: '🇫🇷', ar: '🇸🇦' };
const langCodes = { ru: 'RU', en: 'EN', fr: 'FR', ar: 'AR' };
let currentLang = localStorage.getItem('lang') || 'ru';

// ==================== LANGUAGE SWITCHER ====================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  // Set direction
  const isRTL = lang === 'ar';
  document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      // Handle line breaks in contact heading
      const text = translations[lang][key];
      if (key === 'contact.heading') {
        el.innerHTML = text.replace(/\n/g, '<br/>');
      } else {
        el.textContent = text;
      }
    }
  });

  // Update switcher button
  document.getElementById('currentLangFlag').textContent = langFlags[lang];
  document.getElementById('currentLangCode').textContent = langCodes[lang];

  // Close dropdown
  document.getElementById('langDropdown').classList.remove('open');
}

// ==================== PARTICLE SYSTEM ====================
class ParticleNetwork {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null };
    this.resize();
    this.init();
    this.animate();

    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    const count = window.innerWidth < 768 ? 40 : 80;
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach((p, i) => {
      // Update position
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < 0) p.x = this.canvas.width;
      if (p.x > this.canvas.width) p.x = 0;
      if (p.y < 0) p.y = this.canvas.height;
      if (p.y > this.canvas.height) p.y = 0;

      // Mouse repulsion
      if (this.mouse.x !== null) {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          p.x += dx * 0.02;
          p.y += dy * 0.02;
        }
      }

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
      this.ctx.fill();

      // Draw connections
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          const alpha = (1 - dist / 150) * 0.15;
          this.ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      }
    });

    requestAnimationFrame(() => this.animate());
  }
}

// ==================== DOM CONTENT LOADED ====================
document.addEventListener('DOMContentLoaded', () => {

  // ----- Loader -----
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
    }, 1200);
  });

  // ----- Particle Background -----
  const heroCanvas = document.getElementById('heroCanvas');
  if (heroCanvas) new ParticleNetwork(heroCanvas);

  // ----- Initialize AOS -----
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 80,
    disable: false
  });

  // ----- Set Language -----
  setLanguage(currentLang);

  // ----- Language Dropdown -----
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
  });

  document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', () => {
      const lang = option.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  document.addEventListener('click', () => {
    langDropdown.classList.remove('open');
  });

  // ----- Custom Cursor -----
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');

  if (window.innerWidth > 768) {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = mouseX - 3 + 'px';
      cursorDot.style.top = mouseY - 3 + 'px';
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      cursorRing.style.left = ringX - 18 + 'px';
      cursorRing.style.top = ringY - 18 + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover effect on interactive elements
    const hoverEls = document.querySelectorAll('a, button, .project-card, .portfolio-item, .skill-card');
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
    });
  }

  // ----- Navbar Scroll -----
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ----- Mobile Nav Toggle -----
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // ----- Smooth Scroll -----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80;
        const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  // ----- Counter Animation -----
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseFloat(counter.getAttribute('data-target'));
        const isDecimal = counter.getAttribute('data-decimal') === 'true';
        const duration = 2000;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = eased * target;

          if (isDecimal) {
            counter.textContent = current.toFixed(1);
          } else {
            counter.textContent = Math.floor(current);
          }

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            if (isDecimal) {
              counter.textContent = target.toFixed(1);
            } else {
              counter.textContent = target;
            }
          }
        }

        requestAnimationFrame(updateCounter);
        counterObserver.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

  // ----- Skill Bars Animation -----
  const skillFills = document.querySelectorAll('.skill-fill');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const width = fill.getAttribute('data-width');
        setTimeout(() => {
          fill.style.width = width + '%';
        }, 200);
        skillObserver.unobserve(fill);
      }
    });
  }, { threshold: 0.3 });

  skillFills.forEach(f => skillObserver.observe(f));

  // ----- Project Modals -----
  const modalOverlay = document.getElementById('modalOverlay');
  const modals = document.querySelectorAll('.modal');

  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = 'modal-' + btn.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modalOverlay.classList.add('open');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    modalOverlay.classList.remove('open');
    modals.forEach(m => m.classList.remove('active'));
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // ----- Portfolio Filters -----
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.classList.remove('hidden');
          item.style.display = '';
        } else {
          item.classList.add('hidden');
          item.style.display = 'none';
        }
      });
    });
  });

  // ----- GSAP Animations -----
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance
    const heroTl = gsap.timeline({ delay: 1.4 });
    heroTl
      .from('.hero-badge', { y: 30, opacity: 0, duration: 0.6 })
      .from('.name-line', { y: 60, opacity: 0, duration: 0.7, stagger: 0.15 }, '-=0.3')
      .from('.hero-title', { y: 30, opacity: 0, duration: 0.6 }, '-=0.3')
      .from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
      .from('.hero-actions', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
      .from('.hero-scroll', { opacity: 0, duration: 0.6 }, '-=0.2');

    // Parallax on scroll
    gsap.to('.hero-content', {
      y: -80,
      opacity: 0.3,
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

    // Section headers
    gsap.utils.toArray('.section-header').forEach(header => {
      gsap.from(header.querySelectorAll('.section-tag, .section-title, .section-subtitle'), {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });

    // Project cards stagger
    gsap.utils.toArray('.project-card').forEach((card, i) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      });
    });

    // Achievement cards
    gsap.utils.toArray('.ach-card').forEach((card, i) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        delay: i * 0.15,
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      });
    });

    // Skill cards
    gsap.utils.toArray('.skill-card').forEach((card, i) => {
      gsap.from(card, {
        x: -30,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.08,
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      });
    });

    // Contact section
    gsap.from('.contact-heading', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  }

  // ----- Active Nav Link on Scroll -----
  const sections = document.querySelectorAll('.section');
  const navLinksList = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinksList.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
});