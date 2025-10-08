export type Language = 'fr' | 'es' | 'en';

export type TranslationObject = {
    [key: string]: string;
};

export const translations: Record<Language, TranslationObject> = {
    fr: {
        // Navigation
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.diving': 'Nos Plongées',
        'nav.diving.beginners': 'Premières Plongées',
        'nav.diving.certified': 'Plongeurs Certifiés',
        'nav.diving.cenotes': 'Cenotes',
        'nav.playadelcarmen': 'Playa del Carmen',
        'nav.contact': 'Contact',

        // Hero
        'hero.title': 'PLONGEZ DANS\nLA RIVIERA MAYA',


        // About
        'about.title': 'QUI SOMMES-NOUS',
        'about.introduction': "Je suis John, instructeur de plongée et guide en cénote dans la Riviera Maya depuis plus de 7 ans.",
        'about.description' : "Je vous emmènerai découvrir les magnifiques fonds marins de Playa del Carmen, Tulum et Cozumel, ainsi que vivre l’expérience des cenotes mystiques et mythiques du Yucatan.",

        // Diving Section
        'diving.title': 'Nos Plongées',
        'diving.beginners': 'PREMIÈRES PLONGÉES',
        'diving.certified': 'PLONGEURS CERTIFIÉS',
        'diving.cenotes': 'EXPLORATION DES CENOTES',

        // Diving Details
        "diving.chacmool.title": "Chac Mool – Halocline et Lumière Magique à Playa del Carmen",
        "diving.chacmool.description": "Plongez dans l’un des cénotes les plus fascinants de la Riviera Maya : Chac Mool. Entre ses jeux de lumière spectaculaires, ses haloclines hypnotisantes et ses dômes d’air ornés de stalactites, cette plongée est un voyage au cœur des merveilles naturelles du Yucatán.",
        "diving.chacmool.location": "📍 Localisation : À 20 minutes de Playa del Carmen",
        "diving.chacmool.depth": "📏 Profondeur max : 14 m",
        "diving.chacmool.level": "🎯 Niveau requis : Open Water minimum",
        "diving.chacmool.duration": "⏳ Durée : 2 plongées d’environ 40-45 minutes chacune",
        "diving.chacmool.highlight1": "Halocline unique qui crée un effet visuel magique",
        "diving.chacmool.highlight2": "Rayons de lumière qui transpercent la caverne",
        "diving.chacmool.highlight3": "Dôme d’air décoré de formations millénaires",
        "diving.chacmool.highlight4": "Eau cristalline et visibilité incroyable toute l'année",
        "diving.chacmool.final_word": "Chac Mool est un cénote qui laisse un souvenir impérissable, même aux plongeurs les plus expérimentés.",

        // // Services
        'services.title': 'NOS SERVICES',
        'services.personalized': 'SERVICE PERSONNALISÉ',
        'services.personalized.desc': 'Organisez une sortie sur-mesure, selon votre niveau de plongée et vos envies. Nos instructeurs expérimentés vous accompagnent dans vos plongées pour une expérience inoubliable.',
        'services.training': 'FORMATIONS DIPLOMANTES',
        'services.training.desc': 'Profitez de votre séjour pour commencer votre formation ou valider des acquis',
        'services.multilingual': 'SERVICES MULTILINGUES',
        'services.multilingual.desc': 'Notre équipe parle français, espagnol et anglais pour vous accompagner dans votre langue maternelle tout au long de votre aventure sous-marine.',

        // // Spot Section
        // 'spot.title': 'NOTRE SPOT DU MOMENT',
        // 'spot.contact': 'NOUS CONTACTER',
        // 'spot.more': 'Plus d\'adresses à découvrir',

        // // Instagram
        // 'instagram.title': 'SUIVEZ-NOUS SUR INSTAGRAM',

        // // TripAdvisor
        // 'tripadvisor.title': 'RETROUVEZ-NOUS SUR TRIPADVISOR',

        // // Reviews
        // 'review.charles': 'Une expérience exceptionnelle ! Les guides sont professionnels et passionnés. Les cénotes sont magnifiques et l\'équipement est de qualité.',
        // 'review.sophie': 'Plongée inoubliable dans les cénotes ! L\'équipe de John Diving est fantastique, très sécurisante et connaît parfaitement les sites.'
    },

    es: {
        // Navigation
        'nav.home': 'Inicio',
        'nav.about': 'Acerca de',
        'nav.diving': 'Nuestros Buceos',
        'nav.diving.beginners': 'Primeros Buceos',
        'nav.diving.certified': 'Buceadores Certificados',
        'nav.diving.cenotes': 'Cenotes',
        'nav.playadelcarmen': 'Playa del Carmen',
        'nav.contact': 'Contacto',

        // Hero
        'hero.title': 'SUMÉRGETE EN\nLA RIVIERA MAYA',
    
        // About
        'about.title': 'QUIÉNES SOMOS',
        'about.introduction': "Soy John, instructor de buceo y guía de cenotes en la Riviera Maya desde hace más de 7 años.",
        'about.description': "Te llevaré a descubrir los impresionantes fondos marinos de Playa del Carmen, Tulum y Cozumel, así como a vivir la experiencia de los cenotes místicos y legendarios del Yucatán.",

        // Diving Section
        'diving.title': 'Nuestros Buceos',
        'diving.beginners': 'PRIMEROS BUCEOS',
        'diving.certified': 'BUCEADORES CERTIFICADOS',
        'diving.cenotes': 'EXPLORACIÓN DE CENOTES',

        // Diving Details
        'diving.chacmool.title': 'Buceo Cenote Chac Mool – Haloclina y Luz Mágica en Playa del Carmen',
        'diving.chacmool.description': 'Sumérgete en uno de los cenotes más fascinantes de la Riviera Maya: Chac Mool. Entre sus juegos de luz espectaculares, sus haloclinas hipnotizantes y sus domos de aire adornados con estalactitas, este buceo es un viaje al corazón de las maravillas naturales de Yucatán.',
        'diving.location': 'Ubicación',
        'diving.depth': 'Profundidad máx',
        'diving.level': 'Nivel requerido',
        'diving.duration': 'Duración',
        'diving.highlights.title': '¿Por qué bucear en Chac Mool?',
        'diving.price': 'TARIFA',
        'diving.reserve': 'RESERVAR',

        // Services
        'services.title': 'NUESTROS SERVICIOS',
        'services.personalized': 'SERVICIO PERSONALIZADO',
        'services.personalized.desc': 'Organiza una salida a medida según tu nivel de buceo y tus preferencias. Nuestros instructores experimentados te acompañan durante tus inmersiones para una experiencia inolvidable.',
        'services.training': 'CURSOS DE CERTIFICACIÓN',
        'services.training.desc': 'Aprovecha tu estancia para iniciar tu formación o validar tus competencias.',
        'services.multilingual': 'SERVICIOS MULTILINGÜES',
        'services.multilingual.desc': 'Nuestro equipo habla francés, español e inglés para acompañarte en tu idioma nativo durante toda tu aventura submarina.',

        // // Spot Section
        // 'spot.title': 'NUESTRO LUGAR DEL MOMENTO',
        // 'spot.contact': 'CONTÁCTANOS',
        // 'spot.more': 'Más direcciones por descubrir',

        // // Instagram
        // 'instagram.title': 'SÍGUENOS EN INSTAGRAM',

        // // TripAdvisor
        // 'tripadvisor.title': 'ENCUÉNTRANOS EN TRIPADVISOR',

        // // Reviews
        // 'review.charles': '¡Una experiencia excepcional! Los guías son profesionales y apasionados. Los cenotes son magníficos y el equipo es de calidad.',
        // 'review.sophie': '¡Buceo inolvidable en los cenotes! El equipo de John Diving es fantástico, muy seguro y conoce perfectamente los sitios.'
    },

    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.diving': 'Our Dives',
        'nav.diving.beginners': 'First Dives',
        'nav.diving.certified': 'Certified Divers',
        'nav.diving.cenotes': 'Cenotes',
        'nav.playadelcarmen': 'Playa del Carmen',
        'nav.contact': 'Contact',

        // Hero
        'hero.title': 'DIVE INTO\nTHE RIVIERA MAYA',
        'hero.badge.title': "Travelers' Choice",
        'hero.badge.year': '2025',

        // About
        'about.title': 'ABOUT US',
        'about.introduction': "I’m John, a diving instructor and cenote guide in the Riviera Maya for over 7 years.",
        'about.description': "I will take you to discover the stunning underwater worlds of Playa del Carmen, Tulum, and Cozumel, as well as experience the mystical and legendary cenotes of the Yucatán.",


        // Diving Section
        'diving.title': 'Our Dives',
        'diving.beginners': 'FIRST DIVES',
        'diving.certified': 'CERTIFIED DIVERS',
        'diving.cenotes': 'CENOTE EXPLORATION',

        // Diving Details
        'diving.chacmool.title': 'Chac Mool Cenote Diving – Halocline and Magical Light in Playa del Carmen',
        'diving.chacmool.description': 'Dive into one of the most fascinating cenotes in the Riviera Maya: Chac Mool. Between its spectacular light displays, mesmerizing haloclines, and air domes adorned with stalactites, this dive is a journey to the heart of Yucatán\'s natural wonders.',
        'diving.location': 'Location',
        'diving.depth': 'Max depth',
        'diving.level': 'Required level',
        'diving.duration': 'Duration',
        'diving.highlights.title': 'Why dive at Chac Mool?',
        'diving.price': 'RATE',
        'diving.reserve': 'BOOK NOW',

        // // Services
        // 'services.title': 'OUR SERVICES',
        // 'services.personalized': 'PERSONALIZED SERVICE',
        // 'services.personalized.desc': 'Organize a tailor-made trip according to your diving level and preferences. Our experienced instructors accompany you during your dives for an unforgettable experience.',
        // 'services.training': 'CERTIFICATION COURSES',
        // 'services.training.desc': 'Take advantage of your stay to start your training or validate your skills.',
        // 'services.multilingual': 'MULTILINGUAL SERVICES',
        // 'services.multilingual.desc': 'Our team speaks French, Spanish, and English to assist you in your native language throughout your underwater adventure.',

        // // Spot Section
        // 'spot.title': 'OUR CURRENT SPOT',
        // 'spot.contact': 'CONTACT US',
        // 'spot.more': 'More places to discover',

        // // Instagram
        // 'instagram.title': 'FOLLOW US ON INSTAGRAM',

        // // TripAdvisor
        // 'tripadvisor.title': 'FIND US ON TRIPADVISOR',

        // // Reviews
        // 'review.charles': 'An exceptional experience! The guides are professional and passionate. The cenotes are magnificent and the equipment is quality.',
        // 'review.sophie': 'Unforgettable diving in the cenotes! The John Diving team is fantastic, very safe and knows the sites perfectly.'
    }
};