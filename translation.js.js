// ======================================================================
// 1. DICTIONNAIRE DE TRADUCTION
// ======================================================================

const translations = {
    'fr': {
        // --- Navigation ---
        'nav_home': 'Accueil',
        'nav_expertise': 'Expertise',
        'nav_projects': 'Projets',
        'nav_contact': 'Contact',
        
        // --- Header / Profil ---
        'pitch_title': 'Spécialiste Polyvalent en Technologies Numériques : <strong>Cybersécurité</strong>, <strong>Développement Web/Mobile</strong> et <strong>UX/UI</strong>.',
        'pitch_text': 'Mon approche rigoureuse et ma curiosité me permettent de concevoir des solutions performantes, sécurisées et centrées sur l\'utilisateur.',
        'cta_cv': 'Télécharger mon CV',
        'cta_contact': 'Me Contacter',
        'cta_projects': 'Voir mes Projets',
        
        // --- Titres de Section ---
        'section_expertise': 'Expertise et Compétences',
        'sec_dev_title': 'Développement & Sécurité',
        'sec_design_title': 'Design & E-commerce',
        'section_projects': 'Mes Projets (Études de Cas)',
        'section_contact': 'Contactez-moi',
        
        // --- Compétences ---
        'comp_mobile': '<strong>Développement Mobile :</strong> Flutter, Dart, Firebase, API REST (gestion d\'état).',
        'comp_security': '<strong>Cybersécurité :</strong> Pentesting, Cryptographie, Firewalls, OSINT (Analyste certifié).',
        'comp_web': '<strong>Développement Web :</strong> Java/J2EE, C, PHP/MySQL, HTML/CSS.',
        'comp_network': '<strong>Réseaux et Systèmes :</strong> Installation, configuration, gestion des utilisateurs.',
        'comp_uxui': '<strong>UX/UI Design :</strong> Design thinking, wireframing, prototypage (Figma, UX/UI Design - en cours).',
        'comp_ecomm': '<strong>E-commerce :</strong> Shopify, Branding, Marketing numérique.',
        'comp_tools': '<strong>Outils Créatifs :</strong> Canva, CapCut, ChatGPT, FL Studio.',
        'comp_soft': '<strong>Interpersonnelles :</strong> Rigueur, Esprit d’analyse, Communication claire.',
        
        // --- Projets ---
        'proj_vastora_title': 'The Vastora : E-commerce & Optimisation UX/UI',
        'proj_vastora_role': '<strong>Rôle :</strong> Créateur, Brand Manager, Spécialiste UX/UI et Opérations.',
        'proj_vastora_desc': 'Création complète d’une boutique en ligne, de la stratégie de marque au parcours d\'achat optimisé pour la conversion.',
        
        'proj_larue_title': 'La Rue Du Style : Vitrine de Mode E-commerce',
        'proj_larue_role': '<strong>Rôle :</strong> Web Designer et Intégrateur E-commerce.',
        'proj_larue_desc': 'Développement d\'une plateforme de vente en ligne, assurant une identité visuelle forte et une navigation responsive pour la mode.',
        
        'proj_allo_title': 'UX/UI Design : Prototype Interactif AlloPharmacie',
        'proj_allo_role': '<strong>Rôle :</strong> UX/UI Designer (Wireframing et Prototypage Figma).',
        'proj_allo_desc': 'Démonstration de mon processus de Design Thinking : du wireframe au prototype haute fidélité pour un parcours utilisateur spécifique.',
        'proj_link_figma': 'Ouvrir le fichier Figma complet →',
        
        'proj_libere_title': '"Libère ta voix" : Design et Intégration Web',
        'proj_libere_role': '<strong>Rôle :</strong> Web Designer et Intégrateur (Design Graphique et Intégration Web).',
        'proj_libere_desc': 'Création de l\'identité visuelle de l\'e-book et conception d\'une page de vente efficace, intégrée sur la plateforme systeme.io.',
        
        'proj_link': 'Visiter le site →',
        
        // --- Contact ---
        'contact_pitch': 'Discutons de votre prochain projet alliant sécurité, développement et design.',
        'footer_rights': '&copy; 2025 Abdoulaye Ndiaye. Tous droits réservés.',

    },
    'en': {
        // --- Navigation ---
        'nav_home': 'Home',
        'nav_expertise': 'Expertise',
        'nav_projects': 'Projects',
        'nav_contact': 'Contact',
        
        // --- Header / Profil ---
        'pitch_title': 'Versatile Specialist in Digital Technologies: <strong>Cybersecurity</strong>, <strong>Web/Mobile Development</strong>, and <strong>UX/UI</strong>.',
        'pitch_text': 'My rigorous approach and curiosity enable me to design effective, secure, and user-centric solutions.',
        'cta_cv': 'Download my CV',
        'cta_contact': 'Contact Me',
        'cta_projects': 'View My Projects',

        // --- Titres de Section ---
        'section_expertise': 'Expertise and Skills',
        'sec_dev_title': 'Development & Security',
        'sec_design_title': 'Design & E-commerce',
        'section_projects': 'My Projects (Case Studies)',
        'section_contact': 'Contact Me',
        
        // --- Compétences ---
        'comp_mobile': '<strong>Mobile Development:</strong> Flutter, Dart, Firebase, REST API (state management).',
        'comp_security': '<strong>Cybersecurity:</strong> Pentesting, Cryptography, Firewalls, OSINT (Certified Analyst).',
        'comp_web': '<strong>Web Development:</strong> Java/J2EE, C, PHP/MySQL, HTML/CSS.',
        'comp_network': '<strong>Networks and Systems:</strong> Installation, configuration, user management.',
        'comp_uxui': '<strong>UX/UI Design:</strong> Design thinking, wireframing, prototyping (Figma, UX/UI Design - currently studying).',
        'comp_ecomm': '<strong>E-commerce:</strong> Shopify, Branding, Digital Marketing.',
        'comp_tools': '<strong>Creative Tools:</strong> Canva, CapCut, ChatGPT, FL Studio.',
        'comp_soft': '<strong>Soft Skills:</strong> Rigor, Analytical spirit, Clear communication.',
        
        // --- Projets ---
        'proj_vastora_title': 'The Vastora: E-commerce & UX/UI Optimization',
        'proj_vastora_role': '<strong>Role:</strong> Creator, Brand Manager, UX/UI Specialist, and Operations.',
        'proj_vastora_desc': 'Full creation of an online store, from branding strategy to an optimized purchase journey for conversion.',

        'proj_larue_title': 'La Rue Du Style: E-commerce Fashion Showcase',
        'proj_larue_role': '<strong>Role:</strong> Web Designer and E-commerce Integrator.',
        'proj_larue_desc': 'Development of an online sales platform, ensuring a strong visual identity and responsive navigation for fashion.',

        'proj_allo_title': 'UX/UI Design: AlloPharmacie Interactive Prototype',
        'proj_allo_role': '<strong>Role:</strong> UX/UI Designer (Wireframing and Figma Prototyping).',
        'proj_allo_desc': 'Demonstration of my Design Thinking process: from wireframe to high-fidelity prototype for a specific user journey.',
        'proj_link_figma': 'Open complete Figma file →',

        'proj_libere_title': '"Libère ta voix": Web Design and Integration',
        'proj_libere_role': '<strong>Role:</strong> Web Designer and Integrator (Graphic Design and Web Integration).',
        'proj_libere_desc': 'Creation of the e-book\'s visual identity and design of an effective sales page, integrated on the systeme.io platform.',
        
        'proj_link': 'Visit the website →',

        // --- Contact ---
        'contact_pitch': 'Let\'s discuss your next project combining security, development, and design.',
        'footer_rights': '&copy; 2025 Abdoulaye Ndiaye. All rights reserved.',
    }
};

// ======================================================================
// 2. LOGIQUE DE TRADUCTION
// ======================================================================

// Fonction principale pour changer la langue
function setLanguage(lang) {
    // 1. Mise à jour des boutons actifs
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');

    // 2. Mise à jour de l'attribut de langue global
    document.documentElement.lang = lang;

    // 3. Traduction des éléments HTML via l'attribut data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Utiliser innerHTML pour les textes contenant des balises (comme <strong>)
            element.innerHTML = translations[lang][key];
        }
    });
}

// Initialisation au chargement de la page et gestion des clics
document.addEventListener('DOMContentLoaded', () => {
    // Événements pour les boutons de langue
    document.getElementById('lang-fr').addEventListener('click', () => setLanguage('fr'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

    // Définir la langue par défaut (FR) au chargement
    // Vous pouvez changer 'fr' par 'en' si vous préférez l'anglais par défaut.
    setLanguage('fr'); 
});