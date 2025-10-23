document.addEventListener('DOMContentLoaded', () => {
    // ======================================================================
    // 1. DICTIONNAIRE DE TRADUCTION
    // ======================================================================
    const translations = {
        'fr': {
            // Navigation
            'nav-accueil': 'Accueil',
            'nav-expertise': 'Expertise',
            'nav-projets': 'Projets',
            'nav-contact': 'Contact',
            
            // Hero
            'hero-tagline': 'Spécialiste Polyvalent & Analyste Certifié',
            'hero-subtitle': 'Cybersécurité, Développement Web/Mobile & UX/UI', // Non traduit dans votre HTML, mais gardé pour complétude
            'hero-p': 'Mon approche combine <strong>rigueur technique</strong> et <strong>conception centrée utilisateur</strong> pour livrer des solutions numériques performantes, sécurisées et complètes.',
            'cta-cv': 'Télécharger mon CV',
            'cta-contact': 'Me Contacter',
            
            // Expertise (Titres et Listes)
            'exp-title': 'Expertise et Compétences 🛠️',
            'exp-intro': 'Mes compétences clés, structurées pour répondre aux défis numériques modernes.',
            'exp-dev-sec-title': 'Développement & Sécurité',
            'exp-dev-sec-p': 'Spécialisation dans la création de solutions robustes et leur protection contre les menaces numériques.',
            'exp-design-eco-title': 'Design & E-commerce',
            'exp-design-eco-p': 'Conception centrée utilisateur, prototypage et mise en place de stratégies de vente en ligne.',

            // Compétences (textes complets, incluant les balises)
            'comp-mobile': '<i class="fas fa-mobile-alt"></i> <strong>Développement Mobile :</strong> Flutter, Dart, Firebase, API REST (gestion d\'état).',
            'comp-security': '<i class="fas fa-shield-virus"></i> <strong>Cybersécurité :</strong> Pentesting, Cryptographie, Firewalls, OSINT (Analyste certifié).',
            'comp-web': '<i class="fas fa-laptop-code"></i> <strong>Développement Web :</strong> Java/J2EE, C, PHP/MySQL, HTML/CSS.',
            'comp-network': '<i class="fas fa-network-wired"></i> <strong>Réseaux et Systèmes :</strong> Installation, configuration, gestion des utilisateurs.',
            'comp-uxui': '<i class="fas fa-drafting-compass"></i> <strong>UX/UI Design :</strong> Design thinking, wireframing, prototypage (Figma, UX/UI Design - en cours).',
            'comp-ecomm': '<i class="fas fa-shopping-cart"></i> <strong>E-commerce :</strong> Shopify, Branding, Marketing numérique.',
            'comp-tools': '<i class="fas fa-tools"></i> <strong>Outils Créatifs :</strong> Canva, CapCut, ChatGPT, FL Studio.',
            'comp-soft': '<i class="fas fa-handshake"></i> <strong>Interpersonnelles :</strong> Rigueur, Esprit d’analyse, Communication claire.',

            // Projets
            'proj-title': 'Projets Récents et Études de Cas 💡',
            'proj-intro': 'Exemples concrets de mon application technique et créative.',
            
            'proj-vastora-h3': '<i class="fas fa-shopping-bag"></i> The Vastora : E-commerce & Optimisation UX/UI',
            'proj-vastora-role': 'Rôle : Créateur, Brand Manager, Spécialiste UX/UI et Opérations.',
            'proj-vastora-p': 'Création complète d’une boutique en ligne, de la stratégie de marque au parcours d\'achat optimisé pour la conversion.',
            'proj-laruedustyle-h3': '<i class="fas fa-tshirt"></i> La Rue Du Style : Vitrine de Mode E-commerce',
            'proj-laruedustyle-role': 'Rôle : Web Designer et Intégrateur E-commerce.',
            'proj-laruedustyle-p': 'Développement d\'une plateforme de vente en ligne, assurant une identité visuelle forte et une navigation responsive pour la mode.',
            'proj-allopharma-h3': '<i class="fab fa-figma"></i> UX/UI Design : Prototype Interactif AlloPharmacie',
            'proj-allopharma-role': 'Rôle : UX/UI Designer (Wireframing et Prototypage Figma).',
            'proj-allopharma-p': 'Démonstration de mon processus de Design Thinking : du wireframe au prototype haute fidélité pour un parcours utilisateur spécifique.',
            'proj-libravoix-h3': '<i class="fas fa-book"></i> "Libère ta voix" : Design et Intégration Web',
            'proj-libravoix-role': 'Rôle : Web Designer et Intégrateur (Design Graphique et Intégration Web).',
            'proj-libravoix-p': 'Création de l\'identité visuelle de l\'e-book et conception d\'une page de vente efficace, intégrée sur la plateforme systeme.io.',
            
            'proj-link-site': 'Visiter le site →',
            'proj-link-figma': 'Ouvrir le fichier Figma complet <i class="fas fa-external-link-alt"></i>',
            'proj-link-ventes': 'Voir la page de vente →',

            // Contact & Footer
            'contact-title': 'Contactez-moi 📞',
            'contact-intro': 'Intéressé(e) par une collaboration ? N\'hésitez pas à me joindre directement.',
            'contact-email-label': 'Email :',
            'contact-tel-label': 'Téléphone :',
            'footer-text': '© 2025 Abdoulaye Ndiaye. Tous droits réservés.',
        },
        'en': {
            // Navigation
            'nav-accueil': 'Home',
            'nav-expertise': 'Expertise',
            'nav-projets': 'Projects',
            'nav-contact': 'Contact',
            
            // Hero
            'hero-tagline': 'Versatile Specialist & Certified Analyst',
            'hero-subtitle': 'Cybersecurity, Web/Mobile Development & UX/UI', // Non traduit dans votre HTML, mais gardé pour complétude
            'hero-p': 'My approach combines <strong>technical rigor</strong> and <strong>user-centered design</strong> to deliver high-performance, secure, and complete digital solutions.',
            'cta-cv': 'Download my CV',
            'cta-contact': 'Contact Me',

            // Expertise (Titres et Listes)
            'exp-title': 'Expertise and Skills 🛠️',
            'exp-intro': 'My core competencies, structured to meet modern digital challenges.',
            'exp-dev-sec-title': 'Development & Security',
            'exp-dev-sec-p': 'Specializing in creating robust solutions and protecting them against digital threats.',
            'exp-design-eco-title': 'Design & E-commerce',
            'exp-design-eco-p': 'User-centered design, prototyping, and implementation of optimized online sales strategies.',

            // Compétences (textes complets, incluant les balises)
            'comp-mobile': '<i class="fas fa-mobile-alt"></i> <strong>Mobile Development:</strong> Flutter, Dart, Firebase, REST API (state management).',
            'comp-security': '<i class="fas fa-shield-virus"></i> <strong>Cybersecurity:</strong> Pentesting, Cryptography, Firewalls, OSINT (Certified Analyst).',
            'comp-web': '<i class="fas fa-laptop-code"></i> <strong>Web Development:</strong> Java/J2EE, C, PHP/MySQL, HTML/CSS.',
            'comp-network': '<i class="fas fa-network-wired"></i> <strong>Networks and Systems:</strong> Installation, configuration, user management.',
            'comp-uxui': '<i class="fas fa-drafting-compass"></i> <strong>UX/UI Design:</strong> Design thinking, wireframing, prototyping (Figma, UX/UI Design - currently studying).',
            'comp-ecomm': '<i class="fas fa-shopping-cart"></i> <strong>E-commerce:</strong> Shopify, Branding, Digital Marketing.',
            'comp-tools': '<i class="fas fa-tools"></i> <strong>Creative Tools:</strong> Canva, CapCut, ChatGPT, FL Studio.',
            'comp-soft': '<i class="fas fa-handshake"></i> <strong>Soft Skills:</strong> Rigor, Analytical spirit, Clear communication.',

            // Projets
            'proj-title': 'Recent Projects and Case Studies 💡',
            'proj-intro': 'Concrete examples of my technical and creative application.',
            
            'proj-vastora-h3': '<i class="fas fa-shopping-bag"></i> The Vastora: E-commerce & UX/UI Optimization',
            'proj-vastora-role': 'Role: Creator, Brand Manager, UX/UI Specialist, and Operations.',
            'proj-vastora-p': 'Full creation of an online store, from brand strategy to an optimized purchase journey for conversion.',
            'proj-laruedustyle-h3': '<i class="fas fa-tshirt"></i> La Rue Du Style: E-commerce Fashion Showcase',
            'proj-laruedustyle-role': 'Role: Web Designer and E-commerce Integrator.',
            'proj-laruedustyle-p': 'Development of an online sales platform, ensuring a strong visual identity and responsive navigation for fashion.',
            'proj-allopharma-h3': '<i class="fab fa-figma"></i> UX/UI Design: AlloPharmacie Interactive Prototype',
            'proj-allopharma-role': 'Role: UX/UI Designer (Wireframing and Figma Prototyping).',
            'proj-allopharma-p': 'Demonstration of my Design Thinking process: from wireframe to high-fidelity prototype for a specific user journey.',
            'proj-libravoix-h3': '<i class="fas fa-book"></i> "Free Your Voice": Design and Web Integration',
            'proj-libravoix-role': 'Role: Web Designer and Integrator (Graphic Design and Web Integration).',
            'proj-libravoix-p': 'Creation of the e-book\'s visual identity and design of an effective sales page, integrated on the systeme.io platform.',
            
            'proj-link-site': 'Visit website →',
            'proj-link-figma': 'Open full Figma file <i class="fas fa-external-link-alt"></i>',
            'proj-link-ventes': 'View sales page →',

            // Contact & Footer
            'contact-title': 'Contact Me 📞',
            'contact-intro': 'Interested in collaboration? Feel free to contact me directly.',
            'contact-email-label': 'Email:',
            'contact-tel-label': 'Phone:',
            'footer-text': '© 2025 Abdoulaye Ndiaye. All rights reserved.',
        }
    };

    // ======================================================================
    // 2. LOGIQUE DE TRADUCTION
    // ======================================================================

    const setLanguage = (lang) => {
        const t = translations[lang];

        // --- Mise à jour de la langue et des boutons ---
        document.documentElement.lang = lang;
        document.getElementById('lang-fr').classList.remove('active');
        document.getElementById('lang-en').classList.remove('active');
        document.getElementById('lang-' + lang).classList.add('active');


        // --- Navigation ---
        document.querySelectorAll('.nav-links a')[0].textContent = t['nav-accueil'];
        document.querySelectorAll('.nav-links a')[1].textContent = t['nav-expertise'];
        document.querySelectorAll('.nav-links a')[2].textContent = t['nav-projets'];
        document.querySelectorAll('.nav-links a')[3].textContent = t['nav-contact'];

        // --- Header (Hero) ---
        document.querySelector('.tagline').textContent = t['hero-tagline'];
        document.querySelector('.hero-content p').innerHTML = t['hero-p']; 
        document.querySelector('.cta-button.primary').childNodes[0].nodeValue = t['cta-cv'] + ' '; // NodeValue pour ne pas écraser l'icône
        document.querySelector('.cta-button.secondary').textContent = t['cta-contact'];

        // --- Section Expertise ---
        document.querySelector('#expertise h2').textContent = t['exp-title'];
        document.querySelector('#expertise .section-intro').textContent = t['exp-intro'];
        
        const expCards = document.querySelectorAll('.expertise-card');
        expCards[0].querySelector('h3').textContent = t['exp-dev-sec-title'];
        expCards[0].querySelector('p').textContent = t['exp-dev-sec-p'];
        expCards[1].querySelector('h3').textContent = t['exp-design-eco-title'];
        expCards[1].querySelector('p').textContent = t['exp-design-eco-p'];
        
        // Compétences (Listes)
        const skillListItems = document.querySelectorAll('.skill-list li');
        skillListItems[0].innerHTML = t['comp-mobile'];
        skillListItems[1].innerHTML = t['comp-security'];
        skillListItems[2].innerHTML = t['comp-web'];
        skillListItems[3].innerHTML = t['comp-network'];
        skillListItems[4].innerHTML = t['comp-uxui'];
        skillListItems[5].innerHTML = t['comp-ecomm'];
        skillListItems[6].innerHTML = t['comp-tools'];
        skillListItems[7].innerHTML = t['comp-soft'];

        // --- Section Projets ---
        document.querySelector('#projets h2').textContent = t['proj-title'];
        document.querySelector('#projets .section-intro').textContent = t['proj-intro'];
        
        const projCards = document.querySelectorAll('.projet-card');
        const projRoles = document.querySelectorAll('.projet-card .role-pro');
        const projDescs = document.querySelectorAll('.projet-card p:not(.role-pro):not(.section-intro)');
        const projLinks = document.querySelectorAll('.projet-link');

        // Projet 1 (The Vastora)
        projCards[0].querySelector('h3').innerHTML = t['proj-vastora-h3'];
        projRoles[0].textContent = t['proj-vastora-role'];
        projDescs[0].textContent = t['proj-vastora-p'];
        projLinks[0].textContent = t['proj-link-site'];

        // Projet 2 (La Rue Du Style)
        projCards[1].querySelector('h3').innerHTML = t['proj-laruedustyle-h3'];
        projRoles[1].textContent = t['proj-laruedustyle-role'];
        projDescs[1].textContent = t['proj-laruedustyle-p'];
        projLinks[1].textContent = t['proj-link-site'];

        // Projet 3 (AlloPharmacie - Figma)
        projCards[2].querySelector('h3').innerHTML = t['proj-allopharma-h3'];
        projRoles[2].textContent = t['proj-allopharma-role'];
        projDescs[2].textContent = t['proj-allopharma-p'];
        projLinks[2].innerHTML = t['proj-link-figma']; // Utiliser innerHTML pour l'icône

        // Projet 4 (Libère ta voix)
        projCards[3].querySelector('h3').innerHTML = t['proj-libravoix-h3'];
        projRoles[3].textContent = t['proj-libravoix-role'];
        projDescs[3].textContent = t['proj-libravoix-p'];
        projLinks[3].textContent = t['proj-link-ventes'];
        
        // --- Section Contact & Footer ---
        document.querySelector('#contact h2').textContent = t['contact-title'];
        document.querySelector('#contact .section-intro').textContent = t['contact-intro'];
        
        const contactP = document.querySelectorAll('.contact-info p');
        contactP[0].querySelector('strong').textContent = t['contact-email-label'];
        contactP[1].querySelector('strong').textContent = t['contact-tel-label'];

        document.querySelector('footer p').textContent = t['footer-text'];
    };

    // --- Gestionnaire d'événements pour le changement de langue ---
    document.getElementById('lang-fr').addEventListener('click', () => setLanguage('fr'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
    
    // Initialisation : Appliquer la traduction FR au chargement pour s'assurer que tout est ciblé
    setLanguage('fr'); 
});