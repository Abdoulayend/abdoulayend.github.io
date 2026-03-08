document.addEventListener('DOMContentLoaded', () => {

    // Helpers sécurisés : n'écrivent jamais sur un élément null
    const setText = (selector, text) => {
        const el = document.querySelector(selector);
        if (el && text != null) el.textContent = text;
    };
    const setHTML = (selector, html) => {
        const el = document.querySelector(selector);
        if (el && html != null) el.innerHTML = html;
    };

    // ======================================================================
    // DICTIONNAIRE DE TRADUCTION
    // ======================================================================
    const translations = {
        fr: {
            navLinks: ['Accueil', 'Expertise', 'Projets', 'Contact'],
            tagline:    'Profil Hybride : Génie Civil & Technologies Numériques',
            heroH2:     'Génie Civil, Cybersécurité & Développement Web/Mobile',
            heroP:      'Mon approche combine <strong>rigueur technique</strong> et <strong>conception centrée utilisateur</strong> pour livrer des solutions performantes, sécurisées et complètes.',
            ctaCV:      'Télécharger mon CV',
            ctaContact: 'Me Contacter',
            expTitle:   'Expertise et Compétences 🛠️',
            expIntro:   'Mes compétences clés, structurées pour répondre aux défis techniques et numériques modernes.',
            cards: [
                {
                    title: 'Développement & Sécurité',
                    p:     'Création de solutions robustes et protection contre les menaces numériques.',
                    items: [
                        '<i class="fas fa-mobile-alt"></i> <strong>Mobile :</strong> Flutter, Dart, Firebase.',
                        '<i class="fas fa-shield-virus"></i> <strong>Cybersécurité :</strong> Pentesting, OSINT, Analyste certifié.',
                        '<i class="fas fa-laptop-code"></i> <strong>Web :</strong> Java, PHP/MySQL, HTML/CSS.',
                        '<i class="fas fa-network-wired"></i> <strong>Réseaux :</strong> Installation et configuration.',
                    ]
                },
                {
                    title: 'Design & E-commerce',
                    p:     'Conception centrée utilisateur et mise en place de stratégies de vente en ligne.',
                    items: [
                        '<i class="fas fa-drafting-compass"></i> <strong>UX/UI Design :</strong> Wireframing et prototypage (Figma).',
                        '<i class="fas fa-shopping-cart"></i> <strong>E-commerce :</strong> Shopify, Branding, Marketing.',
                        '<i class="fas fa-tools"></i> <strong>Outils :</strong> Canva, CapCut, ChatGPT.',
                        '<i class="fas fa-handshake"></i> <strong>Soft Skills :</strong> Rigueur, Communication claire.',
                    ]
                },
                {
                    title: 'Génie Civil & Technique',
                    p:     'Application de la rigueur technique dans la conception et la gestion de projets structurels.',
                    items: [
                        '<i class="fas fa-pencil-ruler"></i> <strong>Dessin Technique :</strong> Lecture de plans, AutoCAD.',
                        '<i class="fas fa-road"></i> <strong>Infrastructures :</strong> Géotechnique et Normes QHSE.',
                        '<i class="fas fa-tasks"></i> <strong>Gestion :</strong> Planification et suivi d\'activités techniques.',
                        '<i class="fas fa-check-circle"></i> <strong>Rigueur :</strong> Analyse et respect des cahiers des charges.',
                    ]
                }
            ],
            projTitle: 'Projets Récents et Études de Cas 💡',
            projIntro: 'Réalisations concrètes séparées par domaine d\'intervention.',
            projects: [
                { h3: '<i class="fas fa-store"></i> Ruqaya Store',            role: 'Rôle : Développeur E-commerce & Brand Manager.',  p: "Conception et développement d'une boutique en ligne lifestyle complète.",    link: 'Visiter le site →' },
                { h3: '<i class="fas fa-shopping-bag"></i> Le Bassima',       role: 'Rôle : Concepteur et Intégrateur E-commerce.',    p: 'Mise à jour et gestion de la boutique en ligne spécialisée.',                link: 'Visiter le site →' },
                { h3: '<i class="fas fa-tshirt"></i> La Rue Du Style',        role: 'Rôle : Web Designer et Intégrateur E-commerce.',  p: "Développement d'une plateforme de mode avec identité visuelle forte.",       link: 'Visiter le site →' },
                { h3: '<i class="fas fa-shopping-cart"></i> The Vastora',     role: "Rôle : Créateur et Gestionnaire d'Opérations.",   p: "Optimisation du parcours d'achat et gestion de marque e-commerce.",         link: 'Visiter le site →' },
                { h3: '<i class="fas fa-book"></i> Ebook : "Libère ta voix"', role: 'Rôle : Web Designer et Intégrateur Web.',         p: 'Création graphique et page de vente sur systeme.io.',                        link: 'Voir la page de vente →' },
                { h3: '<i class="fab fa-figma"></i> Prototype AlloPharmacie', role: 'Rôle : UX/UI Designer (Figma).',                  p: null, link: 'Ouvrir le fichier Figma complet <i class="fas fa-external-link-alt"></i>' },
            ],
            contactTitle: 'Contactez-moi 📞',
            emailLabel:   'Email :',
            telLabel:     'Téléphone :',
            footerText:   '© 2026 Abdoulaye Ndiaye. Tous droits réservés.',
        },

        en: {
            navLinks: ['Home', 'Expertise', 'Projects', 'Contact'],
            tagline:    'Hybrid Profile: Civil Engineering & Digital Technologies',
            heroH2:     'Civil Engineering, Cybersecurity & Web/Mobile Development',
            heroP:      'My approach combines <strong>technical rigor</strong> and <strong>user-centered design</strong> to deliver high-performance, secure, and complete solutions.',
            ctaCV:      'Download my CV',
            ctaContact: 'Contact Me',
            expTitle:   'Expertise and Skills 🛠️',
            expIntro:   'My core competencies, structured to meet modern technical and digital challenges.',
            cards: [
                {
                    title: 'Development & Security',
                    p:     'Building robust solutions and protecting against digital threats.',
                    items: [
                        '<i class="fas fa-mobile-alt"></i> <strong>Mobile:</strong> Flutter, Dart, Firebase.',
                        '<i class="fas fa-shield-virus"></i> <strong>Cybersecurity:</strong> Pentesting, OSINT, Certified Analyst.',
                        '<i class="fas fa-laptop-code"></i> <strong>Web:</strong> Java, PHP/MySQL, HTML/CSS.',
                        '<i class="fas fa-network-wired"></i> <strong>Networks:</strong> Installation and configuration.',
                    ]
                },
                {
                    title: 'Design & E-commerce',
                    p:     'User-centered design and implementation of online sales strategies.',
                    items: [
                        '<i class="fas fa-drafting-compass"></i> <strong>UX/UI Design:</strong> Wireframing and prototyping (Figma).',
                        '<i class="fas fa-shopping-cart"></i> <strong>E-commerce:</strong> Shopify, Branding, Marketing.',
                        '<i class="fas fa-tools"></i> <strong>Tools:</strong> Canva, CapCut, ChatGPT.',
                        '<i class="fas fa-handshake"></i> <strong>Soft Skills:</strong> Rigor, Clear communication.',
                    ]
                },
                {
                    title: 'Civil Engineering & Technical',
                    p:     'Applying technical rigor to structural project design and management.',
                    items: [
                        '<i class="fas fa-pencil-ruler"></i> <strong>Technical Drawing:</strong> Blueprint reading, AutoCAD.',
                        '<i class="fas fa-road"></i> <strong>Infrastructure:</strong> Geotechnics and QHSE Standards.',
                        '<i class="fas fa-tasks"></i> <strong>Management:</strong> Planning and monitoring technical activities.',
                        '<i class="fas fa-check-circle"></i> <strong>Rigor:</strong> Analysis and compliance with specifications.',
                    ]
                }
            ],
            projTitle: 'Recent Projects and Case Studies 💡',
            projIntro: 'Concrete achievements across different areas of expertise.',
            projects: [
                { h3: '<i class="fas fa-store"></i> Ruqaya Store',            role: 'Role: E-commerce Developer & Brand Manager.',  p: 'Design and development of a complete lifestyle online store.',     link: 'Visit website →' },
                { h3: '<i class="fas fa-shopping-bag"></i> Le Bassima',       role: 'Role: E-commerce Designer and Integrator.',    p: 'Update and management of a specialized online store.',             link: 'Visit website →' },
                { h3: '<i class="fas fa-tshirt"></i> La Rue Du Style',        role: 'Role: Web Designer and E-commerce Integrator.',p: 'Development of a fashion platform with a strong visual identity.',  link: 'Visit website →' },
                { h3: '<i class="fas fa-shopping-cart"></i> The Vastora',     role: 'Role: Creator and Operations Manager.',        p: 'Purchase journey optimization and e-commerce brand management.',   link: 'Visit website →' },
                { h3: '<i class="fas fa-book"></i> Ebook: "Free Your Voice"', role: 'Role: Web Designer and Web Integrator.',       p: 'Graphic creation and sales page on systeme.io.',                   link: 'View sales page →' },
                { h3: '<i class="fab fa-figma"></i> AlloPharmacie Prototype', role: 'Role: UX/UI Designer (Figma).',                p: null, link: 'Open full Figma file <i class="fas fa-external-link-alt"></i>' },
            ],
            contactTitle: 'Contact Me 📞',
            emailLabel:   'Email:',
            telLabel:     'Phone:',
            footerText:   '© 2026 Abdoulaye Ndiaye. All rights reserved.',
        }
    };

    // ======================================================================
    // LOGIQUE DE TRADUCTION
    // ======================================================================

    const setLanguage = (lang) => {
        const t = translations[lang];
        if (!t) return;

        // Boutons actifs
        document.getElementById('lang-fr').classList.toggle('active', lang === 'fr');
        document.getElementById('lang-en').classList.toggle('active', lang === 'en');
        document.documentElement.lang = lang;

        // Navigation
        const navLinks = document.querySelectorAll('.nav-links a');
        t.navLinks.forEach((label, i) => {
            if (navLinks[i]) navLinks[i].textContent = label;
        });

        // Hero
        setText('.tagline', t.tagline);
        setText('.hero-content h2', t.heroH2);
        setHTML('.hero-content p', t.heroP);
        setHTML('.cta-button.primary', t.ctaCV + ' <i class="fas fa-download"></i>');
        setText('.cta-button.secondary', t.ctaContact);

        // Expertise
        setText('#expertise h2', t.expTitle);
        setText('#expertise .section-intro', t.expIntro);
        const expCards = document.querySelectorAll('.expertise-card');
        t.cards.forEach((card, i) => {
            const el = expCards[i];
            if (!el) return;
            const h3 = el.querySelector('h3');
            const p  = el.querySelector('p');
            if (h3) h3.textContent = card.title;
            if (p)  p.textContent  = card.p;
            const lis = el.querySelectorAll('.skill-list li');
            card.items.forEach((html, j) => {
                if (lis[j]) lis[j].innerHTML = html;
            });
        });

        // Projets
        setText('#projets h2', t.projTitle);
        setText('#projets .section-intro', t.projIntro);
        const projCards = document.querySelectorAll('.projet-card');
        t.projects.forEach((proj, i) => {
            const card = projCards[i];
            if (!card) return;
            const h3   = card.querySelector('h3');
            const role = card.querySelector('.role-pro');
            const desc = card.querySelector('p:not(.role-pro)');
            const link = card.querySelector('.projet-link');
            if (h3)            h3.innerHTML    = proj.h3;
            if (role)          role.textContent = proj.role;
            if (desc && proj.p !== null) desc.textContent = proj.p;
            if (link)          link.innerHTML   = proj.link;
        });

        // Contact
        setText('#contact h2', t.contactTitle);
        const cPs = document.querySelectorAll('.contact-info p');
        if (cPs[0]) { const s = cPs[0].querySelector('strong'); if (s) s.textContent = t.emailLabel; }
        if (cPs[1]) { const s = cPs[1].querySelector('strong'); if (s) s.textContent = t.telLabel; }

        // Footer
        setText('footer p', t.footerText);
    };

    document.getElementById('lang-fr').addEventListener('click', () => setLanguage('fr'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

    setLanguage('fr');
});