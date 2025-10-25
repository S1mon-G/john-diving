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

        // Whatsapp Button
        'whatsapp.phone': 'https://wa.me/5219842386761',
        'whatsapp.contact': 'nous contacter',

        // Hero
        'hero.title': 'PLONGEZ DANS\nLA RIVIERA MAYA',


        // About
        'about.title': 'QUI SOMMES-NOUS',
        'about.introduction': "Je suis John, instructeur de plongée et guide en cénote dans la Riviera Maya depuis plus de 7 ans.",
        'about.description': "Je vous emmènerai découvrir les magnifiques fonds marins de Playa del Carmen, Tulum et Cozumel, ainsi que vivre l’expérience des cenotes mystiques et mythiques du Yucatan.",

        // Diving Section
        'diving.title': 'Nos Plongées',
        'diving.beginners': 'PREMIÈRES PLONGÉES',
        'diving.certified': 'PLONGEURS CERTIFIÉS',
        'diving.cenotes': 'EXPLORATION DES CENOTES',

        // Diving Details

        "first_dive.dsd.title": "DSD - Decouvrez la plongée",
        "first_dive.dsd.description": "Vous n’avez jamais plongé et rêvez de découvrir ce monde fascinant sous la surface ? Playa del Carmen est l’endroit idéal pour vivre votre première expérience ! Après une courte initiation simple et rassurante en piscine, vous vous laisserez glisser dans les eaux chaudes et cristallines des Caraïbes, accompagné pas à pas par un instructeur certifié qui sera à vos côtés à chaque instant.",
        "first_dive.dsd.highlights": "Sous l’eau, un tout nouvel univers s’ouvre à vous : poissons tropicaux aux couleurs éclatantes, coraux majestueux et la sensation magique de flotter en apesanteur. Pas besoin d’expérience préalable ni de compétences particulières : ce baptême de plongée est conçu spécialement pour les débutants absolus, afin de vous offrir une aventure inoubliable en toute sécurité.",
        "first_dive.dsd.final_word": "Venez vivre ce premier pas vers le monde sous-marin et repartez avec des souvenirs uniques que vous n’oublierez jamais !",

        "first_dive.ow.title": "PADI - Open Water",
        "first_dive.ow.description": "Vous avez adoré votre première plongée et vous rêvez maintenant d’aller plus loin ? Le cours Open Water PADI est la porte d’entrée vers la liberté sous-marine : en seulement quelques jours, vous apprendrez toutes les bases pour plonger en toute sécurité, partout dans le monde.",
        "first_dive.ow.highlights": "L’enseignement se fait en petits groupes (maximum 4), avec une attention personnalisée, du matériel récent et des procédures de sécurité claires, pour que chacun progresse à son rythme.",
        "first_dive.ow.final_word": "À l’issue du cours, vous repartirez avec une certification reconnue mondialement et la confiance nécessaire pour explorer les fonds marins aux quatre coins du monde. Un apprentissage sérieux, rassurant et joyeux. Et quel meilleur endroit pour franchir ce cap qu’à Playa del Carmen, au cœur des récifs colorés et des eaux turquoise ?",


        "diving.title.highlight": "Points Forts",
        "diving.title.dive": "Pourquoi Plonger ici ?",

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

        "diving.dosojos.title": "Dos Ojos – L’Incontournable de Tulum",
        "diving.dosojos.description": "Explorez l’un des systèmes de grottes les plus célèbres au monde : Dos Ojos. Ce cénote légendaire, dont le nom signifie “Deux Yeux”, vous invite à plonger dans des tunnels cristallins, illuminés par une lumière turquoise magique.",
        "diving.dosojos.location": "📍 Localisation : À 40 minutes de Playa Del Carmen",
        "diving.dosojos.depth": "📏 Profondeur max : 9 m",
        "diving.dosojos.level": "🎯 Niveau requis : Open Water minimum",
        "diving.dosojos.duration": "⏳ Durée : 2 plongées de 40-45 minutes",
        "diving.dosojos.highlight1": "Parcours spectaculaire dans l’un des cénotes les plus connus au monde",
        "diving.dosojos.highlight2": "Formations stalactites et stalagmites impressionnantes",
        "diving.dosojos.highlight3": "Visibilité incroyable toute l’année",
        "diving.dosojos.highlight4": "Ambiance féerique idéale pour la photographie sous-marine",
        "diving.dosojos.final_word": "Dos Ojos est une plongée incontournable pour les amateurs de grottes.",

        "diving.eden.title": "Eden (Ponderosa) – Un Jardin Tropical Sous-Marin",
        "diving.eden.description": "Le Cénote Eden, aussi connu sous le nom de Ponderosa, est un véritable paradis pour les plongeurs. Eau cristalline, halocline douce et accès à la célèbre Coral Cavern.",
        "diving.eden.location": "📍 Localisation : À 25 minutes de Playa del Carmen",
        "diving.eden.depth": "📏 Profondeur max : 15 m",
        "diving.eden.level": "🎯 Niveau requis : Open Water minimum",
        "diving.eden.duration": "⏳ Durée : 2 plongées de 40-45 minutes",
        "diving.eden.highlight1": "Eau cristalline et ambiance tropicale",
        "diving.eden.highlight2": "Halocline subtile pour un effet visuel fascinant",
        "diving.eden.highlight3": "Passage vers Coral Cavern, riche en formations",
        "diving.eden.highlight4": "Idéal pour la photographie grand angle",
        "diving.eden.final_word": "Eden est une plongée parfaite pour profiter de la beauté naturelle de la Riviera Maya.",

        "diving.elpit.title": "El Pit – Puits Vertigineux et Halocline Mystique",
        "diving.elpit.description": "Descendez dans l’un des cénotes les plus spectaculaires et profonds de la Riviera Maya : El Pit. Connu pour sa verticale impressionnante et son rayon de lumière qui perce les profondeurs.",
        "diving.elpit.location": "📍 Localisation : 40 minutes de Playa del Carmen",
        "diving.elpit.depth": "📏 Profondeur max : 40 m",
        "diving.elpit.level": "🎯 Niveau requis : Advanced Open Water",
        "diving.elpit.duration": "⏳ Durée : 1 plongée (40 minutes)",
        "diving.elpit.highlight1": "Descente verticale unique dans un puits naturel",
        "diving.elpit.highlight2": "Halocline spectaculaire et effets visuels mystiques",
        "diving.elpit.highlight3": "Rayons de lumière descendant jusqu’aux profondeurs",
        "diving.elpit.highlight4": "Sensation de plonger dans l’infini",
        "diving.elpit.final_word": "El Pit est une plongée qui donne le vertige… un must pour les plongeurs confirmés.",

        "diving.angelita.title": "Angelita – La Rivière de Soufre Souterraine",
        "diving.angelita.description": "Le cénote Angelita est connu pour son nuage de sulfure d’hydrogène qui ressemble à une rivière sous-marine. Un décor surréaliste fascinant.",
        "diving.angelita.location": "📍 Localisation : 20 minutes de Tulum",
        "diving.angelita.depth": "📏 Profondeur max : 30-35 m",
        "diving.angelita.level": "🎯 Niveau requis : Advanced Open Water",
        "diving.angelita.duration": "⏳ Durée : 1 plongée (40 minutes)",
        "diving.angelita.highlight1": "Nuage épais de sulfure d’hydrogène créant une rivière mystique",
        "diving.angelita.highlight2": "Arbres engloutis sous la couche de soufre",
        "diving.angelita.highlight3": "Ambiance hors du commun, presque irréelle",
        "diving.angelita.highlight4": "Sensation de plonger dans un autre monde",
        "diving.angelita.final_word": "Angelita est une plongée unique, un décor de science-fiction sous-marin.",

        "diving.dreamgate.title": "Dreamgate – Un Voyage au Cœur des Formations",
        "diving.dreamgate.description": "Le cénote Dreamgate est un véritable musée souterrain, connu pour ses stalactites et stalagmites impressionnantes.",
        "diving.dreamgate.location": "📍 Localisation : 30 minutes de Playa del Carmen",
        "diving.dreamgate.depth": "📏 Profondeur max : 7 m",
        "diving.dreamgate.level": "🎯 Niveau requis : Open Water Advanced avec bonne maîtrise de la flottabilité",
        "diving.dreamgate.duration": "⏳ Durée : 2 plongées (40 minutes chacune)",
        "diving.dreamgate.highlight1": "Forêt de stalactites et stalagmites millénaires",
        "diving.dreamgate.highlight2": "Décor intact et fragile, digne d’une cathédrale sous-marine",
        "diving.dreamgate.highlight3": "Sensation de flotter dans un monde féerique",
        "diving.dreamgate.highlight4": "Expérience incontournable pour les amateurs de spéléo",
        "diving.dreamgate.final_word": "Dreamgate est une plongée magique, comme entrer dans une cathédrale sous-marine.",
        "diving.taakbiha.title": "Taak Bi Ha – La Cathédrale de Cristal",
        "diving.taakbiha.description": "Le cénote Taak Bi Ha est réputé pour ses stalactites et stalagmites qui forment un décor de cathédrale. Une plongée magique dans l’un des environnements les plus spectaculaires de la Riviera Maya.",
        "diving.taakbiha.location": "📍 Localisation : 40 minutes de Playa del Carmen",
        "diving.taakbiha.depth": "📏 Profondeur max : 7 m",
        "diving.taakbiha.level": "🎯 Niveau requis : Open Water Advanced avec bonne maîtrise de la flottabilité",
        "diving.taakbiha.duration": "⏳ Durée : 1 plongée (40 minutes)",
        "diving.taakbiha.highlight1": "Formations cristallines d’une beauté exceptionnelle",
        "diving.taakbiha.highlight2": "Ambiance de cathédrale souterraine",
        "diving.taakbiha.highlight3": "Plongée dans un décor fragile et préservé",
        "diving.taakbiha.highlight4": "Sensation unique de flotter dans un monde féerique",
        "diving.taakbiha.final_word": "Taak Bi Ha est un cénote magique, un véritable joyau de la Riviera Maya.",

        "diving.nicteha.title": "Nicte Ha – Jardin Aquatique et Formations Calcaires",
        "diving.nicteha.description": "Le cénote Nicte Ha est un lieu enchanteur où la végétation luxuriante rencontre la beauté des formations souterraines.",
        "diving.nicteha.location": "📍 Localisation : 40 minutes de Playa del Carmen",
        "diving.nicteha.depth": "📏 Profondeur max : 8 m",
        "diving.nicteha.level": "🎯 Niveau requis : Open Water",
        "diving.nicteha.duration": "⏳ Durée : 1 plongée (40 minutes)",
        "diving.nicteha.highlight1": "Plongée au milieu des nénuphars et racines immergées",
        "diving.nicteha.highlight2": "Lumières naturelles créant une atmosphère unique",
        "diving.nicteha.highlight3": "Formations calcaires délicates",
        "diving.nicteha.highlight4": "Ambiance paisible et poétique",
        "diving.nicteha.final_word": "Nicte Ha est une plongée qui mélange la beauté de la jungle et du monde souterrain.",

        "diving.carwash.title": "Aktun Ha (Carwash) – Jungle Verte et Eau Cristalline",
        "diving.carwash.description": "Le cénote Aktun Ha, surnommé Carwash, est célèbre pour sa surface recouverte de végétation verte en saison, créant un effet de lagune mystérieuse.",
        "diving.carwash.location": "📍 Localisation : 10 minutes de Tulum",
        "diving.carwash.depth": "📏 Profondeur max : 15 m",
        "diving.carwash.level": "🎯 Niveau requis : Open Water",
        "diving.carwash.duration": "⏳ Durée : 1 plongée (40 minutes)",
        "diving.carwash.highlight1": "Surface recouverte d’algues en saison, effet lagune unique",
        "diving.carwash.highlight2": "Racines, branches et ambiance jungle sous-marine",
        "diving.carwash.highlight3": "Formations calcaires et grande clarté de l’eau",
        "diving.carwash.highlight4": "Possibilité d’observer fossiles et vie aquatique",
        "diving.carwash.final_word": "Carwash est un cénote surprenant, avec un charme sauvage et naturel.",

        "diving.casacenote.title": "Casa Cenote – Entre Mangroves et Mer des Caraïbes",
        "diving.casacenote.description": "Le cénote Casa Cenote est unique car il se situe à l’interface entre la jungle et la mer. Avec ses mangroves immergées et sa faune riche.",
        "diving.casacenote.location": "📍 Localisation : 45 minutes de Playa del Carmen",
        "diving.casacenote.depth": "📏 Profondeur max : 8 m",
        "diving.casacenote.level": "🎯 Niveau requis : Open Water",
        "diving.casacenote.duration": "⏳ Durée : 1 plongée (40 minutes)",
        "diving.casacenote.highlight1": "Exploration parmi les racines de mangroves",
        "diving.casacenote.highlight2": "Rencontre avec une faune riche (tarpons, poissons, crabes…)",
        "diving.casacenote.highlight3": "Eau douce connectée à la mer des Caraïbes",
        "diving.casacenote.highlight4": "Parfait pour débutants comme confirmés",
        "diving.casacenote.final_word": "Casa Cenote est une plongée paisible et vivante, idéale pour découvrir un cénote différent.",

        "diving.zapote.title": "Zapote – Les Clochettes de l’Enfer",
        "diving.zapote.description": "Le cénote Zapote, aussi appelé Hell’s Bells, est célèbre pour ses formations calcaires uniques en forme de cloches.",
        "diving.zapote.location": "📍 Localisation : 30 minutes de Playa del Carmen",
        "diving.zapote.depth": "📏 Profondeur max : 35 m",
        "diving.zapote.level": "🎯 Niveau requis : Advanced Open Water",
        "diving.zapote.duration": "⏳ Durée : 1 plongée (40-45 minutes)",
        "diving.zapote.highlight1": "Formations uniques “Hell’s Bells” en forme de cloches",
        "diving.zapote.highlight2": "Ambiance mystérieuse et différente des autres cénotes",
        "diving.zapote.highlight3": "Plongée profonde avec grande visibilité",
        "diving.zapote.highlight4": "Expérience rare dans le monde de la plongée",
        "diving.zapote.final_word": "Zapote est une plongée hors du temps, mystérieuse et inoubliable.",

        "diving.maravilla.title": "Maravilla – Le Rayon de Lumière Inoubliable",
        "diving.maravilla.description": "Le cénote Maravilla est un immense puits vertical où un spectaculaire rayon de lumière perce jusqu’aux profondeurs.",
        "diving.maravilla.location": "📍 Localisation : 25 minutes de Playa del Carmen",
        "diving.maravilla.depth": "📏 Profondeur max : 40 m",
        "diving.maravilla.level": "🎯 Niveau requis : Advanced Open Water",
        "diving.maravilla.duration": "⏳ Durée : 1 plongée (40-45 minutes)",
        "diving.maravilla.highlight1": "Puits vertical impressionnant",
        "diving.maravilla.highlight2": "Rayon de lumière spectaculaire",
        "diving.maravilla.highlight3": "Halocline créant des effets visuels étonnants",
        "diving.maravilla.highlight4": "Expérience visuelle unique",
        "diving.maravilla.final_word": "Maravilla est une plongée majestueuse, parfaite pour les photographes.",

        "diving.yaakun.title": "Yaakun – Sérénité et Beauté Cachée",
        "diving.yaakun.description": "Le cénote Yaakun offre une ambiance paisible et naturelle avec sa grande clarté d’eau, ses formations rocheuses et sa végétation environnante.",
        "diving.yaakun.location": "📍 Localisation : 20 minutes de Playa del Carmen",
        "diving.yaakun.depth": "📏 Profondeur max : 35 m",
        "diving.yaakun.level": "🎯 Niveau requis : Open Water Advanced",
        "diving.yaakun.duration": "⏳ Durée : 1 plongée (40 minutes)",
        "diving.yaakun.highlight1": "Ambiance paisible et moins fréquentée",
        "diving.yaakun.highlight2": "Eau cristalline et grande visibilité",
        "diving.yaakun.highlight3": "Formations rocheuses intéressantes",
        "diving.yaakun.highlight4": "Expérience authentique hors des sentiers battus",
        "diving.yaakun.final_word": "Yaakun est un cénote discret et magique, parfait pour les amoureux de nature.",

        "diving.nohoch.title": "Nohoch – L’Entrée du Plus Long Système de Grottes",
        "diving.nohoch.description": "Le cénote Nohoch Nah Chich est l’entrée du plus vaste système de grottes sous-marines du monde. Une plongée spéléo exceptionnelle pour plongeurs expérimentés.",
        "diving.nohoch.location": "📍 Localisation : 50 minutes de Playa del Carmen",
        "diving.nohoch.depth": "📏 Profondeur max : 7 m",
        "diving.nohoch.level": "🎯 Niveau requis : Open Water Advanced",
        "diving.nohoch.duration": "⏳ Durée : 1 plongée (40 minutes)",
        "diving.nohoch.highlight1": "Entrée du plus grand système souterrain du monde",
        "diving.nohoch.highlight2": "Galeries spectaculaires ornées de stalactites",
        "diving.nohoch.highlight3": "Expérience incontournable pour les plongeurs de grotte",
        "diving.nohoch.highlight4": "Atmosphère mystique et grandiose",
        "diving.nohoch.final_word": "Nohoch est une plongée spéléo mythique, un voyage dans l’infini souterrain.",

        // certified dive
        "certified.cozumel.title": 'Cozumel',
        "certified.cozumel.description": "Déjà certifié et envie d’explorer de nouveaux horizons ? Les récifs de Cozumel font partie des meilleurs sites de plongée au monde, et ils se trouvent à seulement une quarantaine minutes de Playa del Carmen. Classés réserve marine protégée depuis 1979, ces fonds spectaculaires offrent des tombants vertigineux, des jardins coralliens intacts et une incroyable biodiversité",
        "certified.cozumel.highlight": "Plonger à Cozumel, c’est se laisser porter par un courant doux à la dérive, admirer d’immenses éponges colorées, croiser des tortues majestueuses, des raies aigles et parfois même des requins nourrices. Chaque immersion est différente, mais toujours magique.",
        "certified.cozumel.final_word": "Que vous soyez passionné de photographie sous-marine, amateur de dérive ou simplement en quête d’émotions fortes, Cozumel vous garantit une expérience inoubliable au cœur d’un des joyaux de la plongée mondiale.",

        "certified.playa_del_carmen.title": "Playa Del Carmen",
        "certified.playa_del_carmen.description": "À deux pas de la plage, les récifs de Playa del Carmen offrent des plongées riches en couleurs et en vie marine, accessibles directement en bateau en seulement quelques minutes. Ici, pas besoin d’aller loin pour profiter d’une eau turquoise et chaude toute l’année, de coraux éclatants et de poissons tropicaux virevoltant autour de vous.",
        "certified.playa_del_carmen.highlight": "Chaque plongée révèle son lot de surprises : tortues paisibles, bancs de poissons argentés, langoustes cachées dans les anfractuosités et parfois même le passage furtif d’une raie aigle. Les sites, variés et adaptés à tous les niveaux, permettent aussi bien de faire des plongées tranquilles sur des récifs peu profonds que des immersions plus profondes",
        "certified.playa_del_carmen.final_word": "Plonger à Playa del Carmen, c’est allier la simplicité d’accès et la richesse d’un récif tropical préservé, dans une ambiance détendue et conviviale, idéale pour profiter pleinement de chaque moment sous l’eau.",

        "certified.epaves.title": "Epaves",
        "certified.epaves.description": "Envie d’un nouveau défi sous-marin ? Les plongées sur épaves offrent une expérience unique, à mi-chemin entre exploration et aventure. Descendre le long du mouillage et voir peu à peu apparaître la silhouette d’un navire englouti procure un frisson incomparable, même pour les plongeurs déjà expérimentés.",
        "certified.epaves.highlight": "Les épaves ne sont pas seulement des témoins mystérieux du passé : elles sont devenues de véritables récifs artificiels, recouverts de coraux et peuplés d’une vie marine abondante. Bancs de poissons, barracudas curieux, tortues de passage ou murènes installées dans les structures… chaque recoin réserve une surprise.",
        "certified.epaves.final_word": "Plonger sur une épave, c’est se challenger un peu plus, sortir de sa zone de confort et ressentir cette excitation particulière qui fait battre le cœur plus vite. Une expérience à part, à vivre absolument pour enrichir son parcours de plongeur.",

        "certified.formation.title": "Formation Continue",
        "certified.formation.description": "Après votre certification Open Water, une nouvelle aventure vous attend : continuer à progresser et à élargir vos horizons sous-marins. Le cours Advanced Open Water vous permet d’explorer de nouvelles sensations — plonger plus profond (30m), dériver le long de récifs spectaculaires ou découvrir l’excitation des plongées sur épave. Le Rescue Diver, lui, développe vos réflexes et votre confiance, en vous apprenant à prévenir et gérer des situations sous-marines pour devenir un binôme encore plus solide.",
        "certified.formation.highlight": "Et pour enrichir votre expérience, de nombreuses spécialités s’offrent à vous : la plongée profonde pour descendre jusqu’à 40 mètres, la plongée Nitrox pour profiter de temps fond prolongés, ou encore l’exploration d’épaves pour vivre un frisson unique. Chaque formation est une étape de plus vers l’autonomie, la maîtrise et le plaisir de découvrir l’océan autrement.",
        "certified.formation.final_word": "Se former en continu, c’est non seulement se challenger, mais aussi s’ouvrir les portes de sites et d’expériences réservés aux plongeurs plus expérimentés. Une progression passionnante pour ceux qui veulent transformer chaque plongée en une nouvelle aventure.",

        // // Services
        'services.title': 'NOS SERVICES',
        'services.personalized': 'SERVICE PERSONNALISÉ',
        'services.personalized.desc': 'Organisez une sortie sur-mesure, selon votre niveau de plongée et vos envies.',
        'services.training': 'FORMATIONS CERTIFIANTES',
        'services.training.desc': 'Profitez de votre séjour pour commencer votre formation ou valider des acquis',
        'services.multilingual': 'SERVICES MULTILINGUES',
        'services.multilingual.desc': 'Notre équipe parle français, espagnol et anglais pour vous accompagner dans votre aventure sous-marine.',

        //footer 

        'privacy.footer': 'politique de confidentialité',
        // // Spot Section
        'spot.title': 'NOTRE SPOT DU MOMENT',
        // 'spot.contact': 'NOUS CONTACTER',
        // 'spot.more': 'Plus d\'adresses à découvrir',

        // //Instagram
        'instagram.title': 'SUIVEZ-NOUS SUR INSTAGRAM',

        // // TripAdvisor
        'tripadvisor.title': 'RETROUVEZ-NOUS SUR TRIPADVISOR',

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

        //whatsapp button
        'whatsapp.phone': 'https://wa.me/5219842386761',
        'whatsapp.contact': 'contáctanos',

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
        "diving.title.highlight": "Aspectos Destacados",
        "diving.title.dive": "¿Por Qué Bucear Aquí?",

        "diving.chacmool.title": "Chac Mool – Haloclina y Luz Mágica en Playa del Carmen",
        "diving.chacmool.description": "Sumérgete en uno de los cenotes más fascinantes de la Riviera Maya: Chac Mool. Entre sus juegos de luz espectaculares, sus hipnotizantes haloclinas y sus domos de aire adornados con estalactitas, esta inmersión es un viaje al corazón de las maravillas naturales del Yucatán.",
        "diving.chacmool.location": "📍 Ubicación: A 20 minutos de Playa del Carmen",
        "diving.chacmool.depth": "📏 Profundidad máxima: 14 m",
        "diving.chacmool.level": "🎯 Nivel requerido: Open Water mínimo",
        "diving.chacmool.duration": "⏳ Duración: 2 inmersiones de aproximadamente 40-45 minutos cada una",
        "diving.chacmool.highlight1": "Haloclina única que crea un efecto visual mágico",
        "diving.chacmool.highlight2": "Rayos de luz que atraviesan la caverna",
        "diving.chacmool.highlight3": "Domo de aire decorado con formaciones milenarias",
        "diving.chacmool.highlight4": "Agua cristalina y visibilidad increíble todo el año",
        "diving.chacmool.final_word": "Chac Mool es un cenote que deja un recuerdo imborrable, incluso para los buceadores más experimentados.",

        "diving.dosojos.title": "Dos Ojos – Imprescindible en Tulum",
        "diving.dosojos.description": "Explora uno de los sistemas de cuevas más famosos del mundo: Dos Ojos. Este cenote legendario, cuyo nombre significa “Dos Ojos”, invita a bucear por túneles cristalinos iluminados por una mágica luz turquesa.",
        "diving.dosojos.location": "📍 Ubicación: A 40 minutos de Playa del Carmen",
        "diving.dosojos.depth": "📏 Profundidad máxima: 9 m",
        "diving.dosojos.level": "🎯 Nivel requerido: Open Water mínimo",
        "diving.dosojos.duration": "⏳ Duración: 2 inmersiones de 40-45 minutos",
        "diving.dosojos.highlight1": "Recorrido espectacular en uno de los cenotes más conocidos del mundo",
        "diving.dosojos.highlight2": "Formaciones impresionantes de estalactitas y estalagmitas",
        "diving.dosojos.highlight3": "Visibilidad increíble durante todo el año",
        "diving.dosojos.highlight4": "Ambiente mágico ideal para fotografía subacuática",
        "diving.dosojos.final_word": "Dos Ojos es una inmersión imprescindible para los amantes de las cuevas.",

        "diving.eden.title": "Eden (Ponderosa) – Un Jardín Tropical Submarino",
        "diving.eden.description": "El cenote Eden, también conocido como Ponderosa, es un verdadero paraíso para los buceadores. Agua cristalina, haloclina suave y acceso a la famosa Coral Cavern.",
        "diving.eden.location": "📍 Ubicación: A 25 minutos de Playa del Carmen",
        "diving.eden.depth": "📏 Profundidad máxima: 15 m",
        "diving.eden.level": "🎯 Nivel requerido: Open Water mínimo",
        "diving.eden.duration": "⏳ Duración: 2 inmersiones de 40-45 minutos",
        "diving.eden.highlight1": "Agua cristalina y ambiente tropical",
        "diving.eden.highlight2": "Haloclina sutil que crea un efecto visual fascinante",
        "diving.eden.highlight3": "Paso hacia Coral Cavern, rica en formaciones",
        "diving.eden.highlight4": "Ideal para fotografía gran angular",
        "diving.eden.final_word": "Eden es una inmersión perfecta para disfrutar de la belleza natural de la Riviera Maya.",

        "diving.elpit.title": "El Pit – Pozo Vertiginoso y Haloclina Mística",
        "diving.elpit.description": "Desciende en uno de los cenotes más espectaculares y profundos de la Riviera Maya: El Pit. Conocido por su vertical impresionante y el rayo de luz que atraviesa sus profundidades.",
        "diving.elpit.location": "📍 Ubicación: A 40 minutos de Playa del Carmen",
        "diving.elpit.depth": "📏 Profundidad máxima: 40 m",
        "diving.elpit.level": "🎯 Nivel requerido: Advanced Open Water",
        "diving.elpit.duration": "⏳ Duración: 1 inmersión (40 minutos)",
        "diving.elpit.highlight1": "Descenso vertical único en un pozo natural",
        "diving.elpit.highlight2": "Haloclina espectacular y efectos visuales místicos",
        "diving.elpit.highlight3": "Rayos de luz que descienden hasta las profundidades",
        "diving.elpit.highlight4": "Sensación de bucear en el infinito",
        "diving.elpit.final_word": "El Pit es una inmersión que provoca vértigo… un imprescindible para buceadores experimentados.",

        "diving.angelita.title": "Angelita – El Río Subterráneo de Azufre",
        "diving.angelita.description": "El cenote Angelita es conocido por su nube de sulfuro de hidrógeno que parece un río subterráneo. Un escenario surrealista fascinante.",
        "diving.angelita.location": "📍 Ubicación: A 20 minutos de Tulum",
        "diving.angelita.depth": "📏 Profundidad máxima: 30-35 m",
        "diving.angelita.level": "🎯 Nivel requerido: Advanced Open Water",
        "diving.angelita.duration": "⏳ Duración: 1 inmersión (40 minutos)",
        "diving.angelita.highlight1": "Nube densa de sulfuro creando un río místico",
        "diving.angelita.highlight2": "Árboles sumergidos bajo la capa de azufre",
        "diving.angelita.highlight3": "Ambiente único, casi irreal",
        "diving.angelita.highlight4": "Sensación de bucear en otro mundo",
        "diving.angelita.final_word": "Angelita es una inmersión única, un escenario de ciencia ficción submarina.",

        "diving.dreamgate.title": "Dreamgate – Un Viaje al Corazón de las Formaciones",
        "diving.dreamgate.description": "El cenote Dreamgate es un verdadero museo subterráneo, famoso por sus impresionantes estalactitas y estalagmitas.",
        "diving.dreamgate.location": "📍 Ubicación: A 30 minutos de Playa del Carmen",
        "diving.dreamgate.depth": "📏 Profundidad máxima: 7 m",
        "diving.dreamgate.level": "🎯 Nivel requerido: Open Water Advanced con buen control de flotabilidad",
        "diving.dreamgate.duration": "⏳ Duración: 2 inmersiones (40 minutos cada una)",
        "diving.dreamgate.highlight1": "Bosque de estalactitas y estalagmitas milenarias",
        "diving.dreamgate.highlight2": "Decorado intacto y frágil, como una catedral submarina",
        "diving.dreamgate.highlight3": "Sensación de flotar en un mundo mágico",
        "diving.dreamgate.highlight4": "Experiencia imprescindible para los amantes de la espeleología",
        "diving.dreamgate.final_word": "Dreamgate es una inmersión mágica, como entrar en una catedral submarina.",


        "diving.taakbiha.title": "Taak Bi Ha – La Catedral de Cristal",
        "diving.taakbiha.description": "El cenote Taak Bi Ha es famoso por sus espectaculares estalactitas y estalagmitas que forman un escenario de catedral. Una inmersión mágica en uno de los ambientes más impresionantes de la Riviera Maya.",
        "diving.taakbiha.location": "📍 Ubicación: 40 minutos de Playa del Carmen",
        "diving.taakbiha.depth": "📏 Profundidad máxima: 7 m",
        "diving.taakbiha.level": "🎯 Nivel requerido: Open Water Advanced con buen control de flotabilidad",
        "diving.taakbiha.duration": "⏳ Duración: 1 inmersión (40 minutos)",
        "diving.taakbiha.highlight1": "Formaciones cristalinas de belleza única",
        "diving.taakbiha.highlight2": "Ambiente de catedral subterránea",
        "diving.taakbiha.highlight3": "Escenario intacto y frágil",
        "diving.taakbiha.highlight4": "Sensación de volar en un mundo mágico",
        "diving.taakbiha.final_word": "Taak Bi Ha es un cenote mágico, una verdadera joya de la Riviera Maya.",

        "diving.nicteha.title": "Nicte Ha – Jardín Acuático y Formaciones Subterráneas",
        "diving.nicteha.description": "El cenote Nicte Ha es un lugar encantador donde la vegetación tropical se combina con las formaciones subterráneas.",
        "diving.nicteha.location": "📍 Ubicación: 40 minutos de Playa del Carmen",
        "diving.nicteha.depth": "📏 Profundidad máxima: 8 m",
        "diving.nicteha.level": "🎯 Nivel requerido: Open Water",
        "diving.nicteha.duration": "⏳ Duración: 1 inmersión (40 minutos)",
        "diving.nicteha.highlight1": "Buceo entre nenúfares y raíces sumergidas",
        "diving.nicteha.highlight2": "Luz natural creando un ambiente mágico",
        "diving.nicteha.highlight3": "Formaciones calcáreas únicas",
        "diving.nicteha.highlight4": "Experiencia relajante y diferente",
        "diving.nicteha.final_word": "Nicte Ha es una inmersión que une la belleza de la selva con el mundo subterráneo.",

        "diving.carwash.title": "Aktun Ha (Carwash) – Verde Selva y Agua Cristalina",
        "diving.carwash.description": "El cenote Aktun Ha, conocido como Carwash, es famoso por su superficie cubierta de vegetación verde en temporada, creando un efecto de laguna misteriosa.",
        "diving.carwash.location": "📍 Ubicación: 10 minutos de Tulum",
        "diving.carwash.depth": "📏 Profundidad máxima: 15 m",
        "diving.carwash.level": "🎯 Nivel requerido: Open Water",
        "diving.carwash.duration": "⏳ Duración: 1 inmersión (40 minutos)",
        "diving.carwash.highlight1": "Superficie cubierta de algas en temporada",
        "diving.carwash.highlight2": "Ambiente de selva submarina con raíces y ramas",
        "diving.carwash.highlight3": "Formaciones de roca caliza y gran visibilidad",
        "diving.carwash.highlight4": "Posibilidad de ver fósiles y vida acuática",
        "diving.carwash.final_word": "Carwash es un cenote lleno de sorpresas y encanto natural.",

        "diving.casacenote.title": "Casa Cenote – Entre Manglares y el Caribe",
        "diving.casacenote.description": "El Casa Cenote es único, ya que conecta la selva con el mar Caribe. Con sus manglares sumergidos y su abundante vida marina.",
        "diving.casacenote.location": "📍 Ubicación: 45 minutos de Playa del Carmen",
        "diving.casacenote.depth": "📏 Profundidad máxima: 8 m",
        "diving.casacenote.level": "🎯 Nivel requerido: Open Water",
        "diving.casacenote.duration": "⏳ Duración: 1 inmersión (40 minutos)",
        "diving.casacenote.highlight1": "Buceo entre raíces de manglar",
        "diving.casacenote.highlight2": "Encuentro con fauna diversa (sábalos, peces, cangrejos…)",
        "diving.casacenote.highlight3": "Agua dulce conectada con el mar Caribe",
        "diving.casacenote.highlight4": "Ideal tanto para principiantes como experimentados",
        "diving.casacenote.final_word": "Casa Cenote es una inmersión tranquila y llena de vida, perfecta para algo diferente.",

        "diving.zapote.title": "Zapote – Las Campanas del Infierno",
        "diving.zapote.description": "El cenote Zapote, conocido como Hell’s Bells, es famoso por sus formaciones calcáreas únicas en forma de campanas.",
        "diving.zapote.location": "📍 Ubicación: 30 minutos de Playa del Carmen",
        "diving.zapote.depth": "📏 Profundidad máxima: 35 m",
        "diving.zapote.level": "🎯 Nivel requerido: Advanced Open Water",
        "diving.zapote.duration": "⏳ Duración: 1 inmersión (40-45 minutos)",
        "diving.zapote.highlight1": "Formaciones únicas “Hell’s Bells” en forma de campanas",
        "diving.zapote.highlight2": "Ambiente misterioso y diferente a otros cenotes",
        "diving.zapote.highlight3": "Inmersión profunda con excelente visibilidad",
        "diving.zapote.highlight4": "Experiencia rara y exclusiva en el buceo",
        "diving.zapote.final_word": "Zapote es una inmersión misteriosa que queda grabada en la memoria.",

        "diving.maravilla.title": "Maravilla – El Rayo de Luz Inolvidable",
        "diving.maravilla.description": "El cenote Maravilla es un pozo vertical impresionante donde un rayo de luz espectacular ilumina las profundidades.",
        "diving.maravilla.location": "📍 Ubicación: 25 minutos de Playa del Carmen",
        "diving.maravilla.depth": "📏 Profundidad máxima: 40 m",
        "diving.maravilla.level": "🎯 Nivel requerido: Advanced Open Water",
        "diving.maravilla.duration": "⏳ Duración: 1 inmersión (40-45 minutos)",
        "diving.maravilla.highlight1": "Pozo vertical majestuoso",
        "diving.maravilla.highlight2": "Rayo de luz inolvidable",
        "diving.maravilla.highlight3": "Haloclina con efectos visuales impresionantes",
        "diving.maravilla.highlight4": "Experiencia única para fotógrafos",
        "diving.maravilla.final_word": "Maravilla es una inmersión grandiosa y mágica.",

        "diving.yaakun.title": "Yaakun – Serenidad y Belleza Escondida",
        "diving.yaakun.description": "El cenote Yaakun ofrece un ambiente tranquilo y natural, con aguas cristalinas, formaciones rocosas y vegetación alrededor.",
        "diving.yaakun.location": "📍 Ubicación: 20 minutos de Playa del Carmen",
        "diving.yaakun.depth": "📏 Profundidad máxima: 35 m",
        "diving.yaakun.level": "🎯 Nivel requerido: Open Water Advanced",
        "diving.yaakun.duration": "⏳ Duración: 1 inmersión (40 minutos)",
        "diving.yaakun.highlight1": "Ambiente tranquilo y poco concurrido",
        "diving.yaakun.highlight2": "Agua cristalina y gran visibilidad",
        "diving.yaakun.highlight3": "Formaciones rocosas interesantes",
        "diving.yaakun.highlight4": "Experiencia auténtica y diferente",
        "diving.yaakun.final_word": "Yaakun es un cenote tranquilo y mágico para quienes buscan naturaleza.",

        "diving.nohoch.title": "Nohoch – La Entrada al Sistema Subterráneo Más Largo",
        "diving.nohoch.description": "El cenote Nohoch Nah Chich es la entrada al sistema de cuevas submarinas más grande del mundo. Una inmersión espeleológica extraordinaria para buceadores experimentados.",
        "diving.nohoch.location": "📍 Ubicación: 50 minutos de Playa del Carmen",
        "diving.nohoch.depth": "📏 Profundidad máxima: 7 m",
        "diving.nohoch.level": "🎯 Nivel requerido: Open Water Advanced",
        "diving.nohoch.duration": "⏳ Duración: 1 inmersión (40 minutos)",
        "diving.nohoch.highlight1": "Entrada al sistema subterráneo más largo del mundo",
        "diving.nohoch.highlight2": "Galerías espectaculares con estalactitas",
        "diving.nohoch.highlight3": "Experiencia única para buceadores de cuevas",
        "diving.nohoch.highlight4": "Ambiente místico e impresionante",
        "diving.nohoch.final_word": "Nohoch es una inmersión legendaria en el mundo de la espeleología.",

        // certified dive


        "certified.cozumel.title": "Cozumel",
        "certified.cozumel.description": "¿Ya estás certificado y con ganas de explorar nuevos horizontes? Los arrecifes de Cozumel se encuentran entre los mejores sitios de buceo del mundo, a solo unos cuarenta minutos de Playa del Carmen. Declarados reserva marina protegida desde 1979, estos fondos espectaculares ofrecen paredes vertiginosas, jardines de coral intactos y una biodiversidad increíble.",
        "certified.cozumel.highlight": "Bucear en Cozumel es dejarse llevar por una suave corriente, admirar enormes esponjas coloridas, cruzarse con majestuosas tortugas, rayas águila y, a veces, incluso tiburones nodriza. Cada inmersión es diferente, pero siempre mágica.",
        "certified.cozumel.final_word": "Ya seas un apasionado de la fotografía submarina, amante del buceo a la deriva o simplemente estés buscando emociones fuertes, Cozumel te garantiza una experiencia inolvidable en el corazón de una de las joyas del buceo mundial.",

        "certified.playa_del_carmen.title": "Playa Del Carmen",
        "certified.playa_del_carmen.description": "A pocos pasos de la playa, los arrecifes de Playa del Carmen ofrecen inmersiones llenas de color y vida marina, accesibles directamente en barco en solo unos minutos. No hace falta ir lejos para disfrutar de aguas turquesas y cálidas todo el año, corales vibrantes y peces tropicales que giran a tu alrededor.",
        "certified.playa_del_carmen.highlight": "Cada inmersión revela sus propias sorpresas: tortugas tranquilas, bancos de peces plateados, langostas escondidas en las grietas y, a veces, el paso fugaz de una raya águila. Los sitios, variados y adaptados a todos los niveles, permiten tanto buceos tranquilos en arrecifes poco profundos como inmersiones más profundas.",
        "certified.playa_del_carmen.final_word": "Bucear en Playa del Carmen combina la facilidad de acceso con la riqueza de un arrecife tropical bien conservado, en un ambiente relajado y acogedor, ideal para disfrutar al máximo cada momento bajo el agua.",

        "certified.epaves.title": "Pecios",
        "certified.epaves.description": "¿Buscas un nuevo desafío submarino? Las inmersiones en pecios ofrecen una experiencia única, a medio camino entre la exploración y la aventura. Descender por la línea de fondeo y ver poco a poco la silueta de un barco hundido produce una emoción incomparable, incluso para buceadores experimentados.",
        "certified.epaves.highlight": "Los pecios no son solo testigos misteriosos del pasado: se han convertido en verdaderos arrecifes artificiales cubiertos de corales y habitados por una abundante vida marina. Bancos de peces, barracudas curiosas, tortugas de paso o morenas instaladas en las estructuras… cada rincón guarda una sorpresa.",
        "certified.epaves.final_word": "Bucear en un pecio es superarse un poco más, salir de la zona de confort y sentir esa emoción especial que acelera el corazón. Una experiencia única que todo buceador debería vivir al menos una vez.",

        "certified.formation.title": "Formación Continua",
        "certified.formation.description": "Después de tu certificación Open Water, te espera una nueva aventura: seguir progresando y ampliar tus horizontes submarinos. El curso Advanced Open Water te permite explorar nuevas sensaciones: bucear más profundo (30 m), derivar a lo largo de arrecifes espectaculares o descubrir la emoción de los pecios. El curso Rescue Diver desarrolla tus reflejos y tu confianza, enseñándote a prevenir y manejar situaciones bajo el agua para convertirte en un compañero de buceo más sólido.",
        "certified.formation.highlight": "Y para enriquecer tu experiencia, tienes muchas especialidades disponibles: el buceo profundo para descender hasta 40 metros, el buceo con Nitrox para disfrutar de más tiempo de fondo o la exploración de pecios para vivir una emoción única. Cada formación es un paso más hacia la autonomía, el dominio y el placer de descubrir el océano de otra manera.",
        "certified.formation.final_word": "Formarse continuamente no solo es un desafío personal, sino también una puerta abierta a sitios y experiencias reservadas a buceadores más experimentados. Una progresión apasionante para quienes desean convertir cada inmersión en una nueva aventura.",



        // Services
        'services.title': 'NUESTROS SERVICIOS',
        'services.personalized': 'SERVICIO PERSONALIZADO',
        'services.personalized.desc': 'Organiza una salida a medida según tu nivel de buceo y tus preferencias.',
        'services.training': 'CURSOS DE CERTIFICACIÓN',
        'services.training.desc': 'Aprovecha tu estancia para iniciar tu formación o validar tus competencias.',
        'services.multilingual': 'SERVICIOS MULTILINGÜES',
        'services.multilingual.desc': 'Nuestro equipo habla francés, español e inglés para acompañarte en tu aventura submarina.',

        //footer 

        'privacy.footer': 'aviso de privacidad',
        'privacy.title': 'Aviso de Privacidad',

        // // Spot Section
        'spot.title': 'NUESTRO LUGAR DEL MOMENTO',
        // 'spot.contact': 'CONTÁCTANOS',
        // 'spot.more': 'Más direcciones por descubrir',

        // // Instagram
        'instagram.title': 'SÍGUENOS EN INSTAGRAM',

        // // TripAdvisor
        'tripadvisor.title': 'ENCUÉNTRANOS EN TRIPADVISOR',

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

        // whatsapp button
        'whatsapp.phone': 'https://wa.me/529841674224',
        'whatsapp.contact': 'contact us',

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
        "diving.title.highlight": "Highlights",
        "diving.title.dive": "Why Dive Here?",

        "diving.chacmool.title": "Chac Mool – Halocline and Magical Light in Playa del Carmen",
        "diving.chacmool.description": "Dive into one of the most fascinating cenotes of the Riviera Maya: Chac Mool. Between its spectacular light shows, hypnotic haloclines, and air domes adorned with stalactites, this dive is a journey into the heart of Yucatán's natural wonders.",
        "diving.chacmool.location": "📍 Location: 20 minutes from Playa del Carmen",
        "diving.chacmool.depth": "📏 Maximum depth: 14 m",
        "diving.chacmool.level": "🎯 Required level: Open Water minimum",
        "diving.chacmool.duration": "⏳ Duration: 2 dives of approximately 40-45 minutes each",
        "diving.chacmool.highlight1": "Unique halocline creating a magical visual effect",
        "diving.chacmool.highlight2": "Rays of light piercing through the cavern",
        "diving.chacmool.highlight3": "Air dome decorated with millennial formations",
        "diving.chacmool.highlight4": "Crystal-clear water and incredible visibility year-round",
        "diving.chacmool.final_word": "Chac Mool is a cenote that leaves an unforgettable memory, even for the most experienced divers.",

        "diving.dosojos.title": "Dos Ojos – A Must-See in Tulum",
        "diving.dosojos.description": "Explore one of the most famous cave systems in the world: Dos Ojos. This legendary cenote, whose name means 'Two Eyes,' invites you to dive through crystal-clear tunnels illuminated by magical turquoise light.",
        "diving.dosojos.location": "📍 Location: 40 minutes from Playa del Carmen",
        "diving.dosojos.depth": "📏 Maximum depth: 9 m",
        "diving.dosojos.level": "🎯 Required level: Open Water minimum",
        "diving.dosojos.duration": "⏳ Duration: 2 dives of 40-45 minutes",
        "diving.dosojos.highlight1": "Spectacular route in one of the world’s most famous cenotes",
        "diving.dosojos.highlight2": "Impressive stalactite and stalagmite formations",
        "diving.dosojos.highlight3": "Incredible visibility year-round",
        "diving.dosojos.highlight4": "Magical atmosphere ideal for underwater photography",
        "diving.dosojos.final_word": "Dos Ojos is a must-do dive for cave enthusiasts.",

        "diving.eden.title": "Eden (Ponderosa) – An Underwater Tropical Garden",
        "diving.eden.description": "Cenote Eden, also known as Ponderosa, is a true paradise for divers. Crystal-clear water, gentle halocline, and access to the famous Coral Cavern.",
        "diving.eden.location": "📍 Location: 25 minutes from Playa del Carmen",
        "diving.eden.depth": "📏 Maximum depth: 15 m",
        "diving.eden.level": "🎯 Required level: Open Water minimum",
        "diving.eden.duration": "⏳ Duration: 2 dives of 40-45 minutes",
        "diving.eden.highlight1": "Crystal-clear water and tropical atmosphere",
        "diving.eden.highlight2": "Subtle halocline creating a fascinating visual effect",
        "diving.eden.highlight3": "Passage to Coral Cavern, rich in formations",
        "diving.eden.highlight4": "Ideal for wide-angle photography",
        "diving.eden.final_word": "Eden is a perfect dive to enjoy the natural beauty of the Riviera Maya.",

        "diving.elpit.title": "El Pit – Vertiginous Pit and Mystical Halocline",
        "diving.elpit.description": "Descend into one of the most spectacular and deepest cenotes in the Riviera Maya: El Pit. Known for its impressive vertical drop and the light beam that pierces its depths.",
        "diving.elpit.location": "📍 Location: 40 minutes from Playa del Carmen",
        "diving.elpit.depth": "📏 Maximum depth: 40 m",
        "diving.elpit.level": "🎯 Required level: Advanced Open Water",
        "diving.elpit.duration": "⏳ Duration: 1 dive (40 minutes)",
        "diving.elpit.highlight1": "Unique vertical descent in a natural pit",
        "diving.elpit.highlight2": "Spectacular halocline and mystical visual effects",
        "diving.elpit.highlight3": "Rays of light reaching down to the depths",
        "diving.elpit.highlight4": "Feeling of diving into infinity",
        "diving.elpit.final_word": "El Pit is a dive that gives vertigo… a must for experienced divers.",

        "diving.angelita.title": "Angelita – The Underground Sulfur River",
        "diving.angelita.description": "Cenote Angelita is known for its hydrogen sulfide cloud that looks like an underwater river. A surreal and fascinating setting.",
        "diving.angelita.location": "📍 Location: 20 minutes from Tulum",
        "diving.angelita.depth": "📏 Maximum depth: 30-35 m",
        "diving.angelita.level": "🎯 Required level: Advanced Open Water",
        "diving.angelita.duration": "⏳ Duration: 1 dive (40 minutes)",
        "diving.angelita.highlight1": "Thick sulfur cloud creating a mystical river",
        "diving.angelita.highlight2": "Submerged trees beneath the sulfur layer",
        "diving.angelita.highlight3": "Unique, almost unreal atmosphere",
        "diving.angelita.highlight4": "Feeling of diving into another world",
        "diving.angelita.final_word": "Angelita is a unique dive, a real underwater sci-fi scene.",

        "diving.dreamgate.title": "Dreamgate – A Journey into the Heart of Formations",
        "diving.dreamgate.description": "Cenote Dreamgate is a true underground museum, famous for its impressive stalactites and stalagmites.",
        "diving.dreamgate.location": "📍 Location: 30 minutes from Playa del Carmen",
        "diving.dreamgate.depth": "📏 Maximum depth: 7 m",
        "diving.dreamgate.level": "🎯 Required level: Open Water Advanced with good buoyancy control",
        "diving.dreamgate.duration": "⏳ Duration: 2 dives (40 minutes each)",
        "diving.dreamgate.highlight1": "Forest of millennial stalactites and stalagmites",
        "diving.dreamgate.highlight2": "Intact and fragile setting, like an underwater cathedral",
        "diving.dreamgate.highlight3": "Feeling of floating in a magical world",
        "diving.dreamgate.highlight4": "Unmissable experience for cave diving enthusiasts",
        "diving.dreamgate.final_word": "Dreamgate is a magical dive, like entering an underwater cathedral.",
        "diving.grutas.title": "Grutas – Caverns of Light and Shadows",
        "diving.grutas.description": "Cenote Grutas offers a mysterious dive among its caverns, stalactites, and unique light effects.",
        "diving.grutas.location": "📍 Location: 35 minutes from Playa del Carmen",
        "diving.grutas.depth": "📏 Maximum depth: 12 m",
        "diving.grutas.level": "🎯 Required level: Open Water minimum",
        "diving.grutas.duration": "⏳ Duration: 2 dives of 40 minutes each",
        "diving.grutas.highlight1": "Beautiful light beams filtering through cave openings",
        "diving.grutas.highlight2": "Stalactites and stalagmites formations",
        "diving.grutas.highlight3": "Crystal-clear waters",
        "diving.grutas.highlight4": "Quiet and peaceful dive experience",
        "diving.grutas.final_word": "Grutas is a perfect dive for those who love exploring caves and hidden corners.",

        "diving.taakbiha.title": "Taak Bi Ha – Tranquility and Underwater Beauty",
        "diving.taakbiha.description": "Cenote Taak Bi Ha is a calm and shallow cenote, ideal for beginners and photography lovers.",
        "diving.taakbiha.location": "📍 Location: 25 minutes from Tulum",
        "diving.taakbiha.depth": "📏 Maximum depth: 6 m",
        "diving.taakbiha.level": "🎯 Required level: Beginner to Open Water",
        "diving.taakbiha.duration": "⏳ Duration: 1-2 dives of 35-40 minutes",
        "diving.taakbiha.highlight1": "Perfect light penetration for stunning photos",
        "diving.taakbiha.highlight2": "Shallow and calm waters",
        "diving.taakbiha.highlight3": "Unique formations and rock patterns",
        "diving.taakbiha.highlight4": "Safe and relaxing dive",
        "diving.taakbiha.final_word": "Taak Bi Ha is ideal for first-time divers or photographers seeking tranquility.",

        "diving.kankirixche.title": "Kankirixche – Adventure through Stalactites",
        "diving.kankirixche.description": "Cenote Kankirixche offers adventurous dives through narrow passages and stunning stalactite formations.",
        "diving.kankirixche.location": "📍 Location: 30 minutes from Playa del Carmen",
        "diving.kankirixche.depth": "📏 Maximum depth: 18 m",
        "diving.kankirixche.level": "🎯 Required level: Advanced Open Water",
        "diving.kankirixche.duration": "⏳ Duration: 2 dives of 40-50 minutes",
        "diving.kankirixche.highlight1": "Challenging underwater passages",
        "diving.kankirixche.highlight2": "Impressive stalactite formations",
        "diving.kankirixche.highlight3": "Clear water with great visibility",
        "diving.kankirixche.highlight4": "Perfect for adventurous divers",
        "diving.kankirixche.final_word": "Kankirixche is an exhilarating dive for those seeking excitement in the cenotes.",

        // certified dive


        "certified.cozumel.title": "Cozumel",
        "certified.cozumel.description": "Already certified and eager to explore new horizons? The reefs of Cozumel are among the best diving sites in the world, located just about forty minutes from Playa del Carmen. Designated a protected marine reserve since 1979, these spectacular underwater landscapes offer breathtaking drop-offs, pristine coral gardens, and incredible biodiversity.",
        "certified.cozumel.highlight": "Diving in Cozumel means drifting along with a gentle current, admiring giant colorful sponges, encountering majestic turtles, eagle rays, and sometimes even nurse sharks. Each dive is different, but always magical.",
        "certified.cozumel.final_word": "Whether you’re passionate about underwater photography, a drift diving enthusiast, or simply seeking strong emotions, Cozumel guarantees an unforgettable experience in the heart of one of the world’s diving jewels.",

        "certified.playa_del_carmen.title": "Playa Del Carmen",
        "certified.playa_del_carmen.description": "Just steps from the beach, the reefs of Playa del Carmen offer colorful dives full of marine life, accessible directly by boat in just a few minutes. There’s no need to go far to enjoy warm turquoise waters all year round, vibrant corals, and tropical fish swirling around you.",
        "certified.playa_del_carmen.highlight": "Each dive reveals its own surprises: peaceful turtles, shimmering schools of fish, lobsters hiding in crevices, and sometimes even a fleeting eagle ray. The sites, varied and suitable for all levels, allow for both calm shallow reef dives and deeper immersions.",
        "certified.playa_del_carmen.final_word": "Diving in Playa del Carmen combines easy access with the richness of a preserved tropical reef, in a relaxed and friendly atmosphere—perfect for enjoying every moment underwater.",

        "certified.epaves.title": "Wrecks",
        "certified.epaves.description": "Looking for a new underwater challenge? Wreck diving offers a unique experience, halfway between exploration and adventure. Descending along the mooring line and slowly seeing the silhouette of a sunken ship appear gives an incomparable thrill, even for experienced divers.",
        "certified.epaves.highlight": "Wrecks are not only mysterious witnesses of the past; they have become real artificial reefs covered with corals and teeming with abundant marine life. Schools of fish, curious barracudas, passing turtles, or moray eels hiding within the structures—every corner holds a surprise.",
        "certified.epaves.final_word": "Diving on a wreck is about pushing yourself further, stepping out of your comfort zone, and feeling that special excitement that makes your heart beat faster. A unique experience that every diver should live at least once.",

        "certified.formation.title": "Continued Training",
        "certified.formation.description": "After your Open Water certification, a new adventure awaits: continuing to progress and expand your underwater horizons. The Advanced Open Water course lets you explore new sensations—dive deeper (30m), drift along spectacular reefs, or discover the thrill of wreck diving. The Rescue Diver course develops your reflexes and confidence, teaching you to prevent and manage underwater situations to become an even stronger dive buddy.",
        "certified.formation.highlight": "To enrich your experience, many specialties are available: deep diving to descend to 40 meters, Nitrox diving for longer bottom times, or wreck exploration for a unique thrill. Each course is another step toward autonomy, mastery, and the joy of discovering the ocean differently.",
        "certified.formation.final_word": "Continuing your training means challenging yourself while unlocking access to sites and experiences reserved for more advanced divers. A thrilling progression for those who want to turn every dive into a new adventure.",


        // Services
        'services.title': 'OUR SERVICES',
        'services.personalized': 'PERSONALIZED SERVICE',
        'services.personalized.desc': 'Organize a tailor-made trip according to your diving level and preferences.',
        'services.training': 'CERTIFICATION COURSES',
        'services.training.desc': 'Take advantage of your stay to start your training or validate your skills.',
        'services.multilingual': 'MULTILINGUAL SERVICES',
        'services.multilingual.desc': 'Our team speaks French, Spanish, and English to assist you in your underwater adventure.',

        //footer 

        'privacy.footer': 'privacy',
        'privacy.title': '',
        'privacy.text': '',

        // // Spot Section
        'spot.title': 'OUR FAVOURITE SPOT',
        // 'spot.contact': 'CONTACT US',
        // 'spot.more': 'More places to discover',

        // // Instagram
        'instagram.title': 'FOLLOW US ON INSTAGRAM',

        // // TripAdvisor
        'tripadvisor.title': 'FIND US ON TRIPADVISOR',
    }
};