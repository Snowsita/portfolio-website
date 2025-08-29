if (typeof document !== 'undefined') {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    const translations = {
        en: {},
        es: {
            'nav-home': 'Inicio',
            'nav-about': 'Acerca de',
            'nav-services': 'Servicios',
            'nav-projects': 'Proyectos',
            'nav-contact': 'Contacto',
            'home-title': 'Bienvenido, soy <span>Enmanuel Torres</span>',
            'home-role': 'Desarrollador <span>Full-Stack Senior</span>',
            'home-desc': 'Líder de equipo de ingeniería de software con más de cinco años de experiencia impulsando la modernización y estabilidad en entornos empresariales. Especializado en liderar equipos multifuncionales para entregar soluciones confiables y escalables, resolver desafíos arquitectónicos complejos e implementar mejoras estratégicas en la gestión de datos. Experto en Java, Hibernate y WebSphere, con un fuerte compromiso con la optimización del rendimiento, la seguridad y la mantenibilidad.',
            'about-title': 'Acerca de <span>Mí</span>',
            'about-desc1': 'Soy líder de equipo de ingeniería de software en Matagalpa, Nicaragua, con una trayectoria comprobada en la formación y dirección de equipos de alto rendimiento para entregar software empresarial robusto. Mi experiencia abarca todo el ciclo de desarrollo, desde el diseño de aplicaciones cloud-native hasta la modernización de sistemas heredados para mayor eficiencia y seguridad. Apasionado por el liderazgo técnico, la mentoría y la resolución de desafíos críticos de negocio mediante tecnología innovadora.',
            'about-desc2': 'Mi base técnica es Java, complementada por experiencia en Spring Boot, Angular y plataformas en la nube como AWS y Azure. He liderado con éxito iniciativas tecnológicas importantes, incluidas migraciones a gran escala y la adopción de prácticas DevOps modernas con Docker y Git. Mi objetivo es aplicar mis habilidades para crear soluciones de software sostenibles e impactantes.',
            'services-title': 'Mis <span>Servicios</span>',
            'service-fullstack-title': 'Desarrollo Full-Stack',
            'service-fullstack-desc': 'Ofrezco desarrollo integral de aplicaciones utilizando tecnologías modernas como Java, Spring Boot, Angular y React. Desde el diseño de bases de datos escalables (PostgreSQL, Oracle) hasta la creación de interfaces de usuario responsivas, gestiono todo el ciclo de vida del software para lograr soluciones empresariales cohesivas y de alto rendimiento.',
            'service-legacy-title': 'Modernización de Sistemas Legados',
            'service-legacy-desc': 'Especialista en migración y actualización de sistemas legados complejos. Experiencia liderando migraciones de Java 8 a 21, WebSphere a Open Liberty y AngularJS a versiones modernas de Angular. Re-arquitecto capas de acceso a datos, reemplazo prácticas obsoletas por Hibernate y refactorizo código para mejorar seguridad y mantenibilidad.',
            'service-devops-title': 'DevOps y Nube',
            'service-devops-desc': 'Gestiono el ciclo completo de despliegue de aplicaciones con herramientas como Docker, Jenkins y Git. Experto en optimizar pipelines de despliegue para entornos UAT, QA y producción. Manejo AWS, Azure y Google Cloud, asegurando infraestructura robusta, escalable y resiliente.',
            'service-api-title': 'Arquitectura de API y Seguridad',
            'service-api-desc': 'Diseño e implemento APIs REST seguras con Spring Boot para plataformas SaaS. Experto en seguridad empresarial con Spring Security, autenticación basada en JWT y mitigación proactiva de vulnerabilidades como inyección SQL, garantizando protección de datos y cumplimiento.',
            'projects-title': 'Mis <span>Proyectos</span>',
            'project-emp-title': 'API de Gestión de Empleados (Angular, Spring, MySQL)',
            'project-emp-desc': 'Sistema integral de gestión de empleados diseñado para optimizar operaciones de RRHH. Backend con API REST segura en Spring Boot, operaciones CRUD y almacenamiento eficiente en MySQL. Frontend en Angular para gestión intuitiva de perfiles, roles y permisos. Funcionalidades clave: identificadores únicos, manejo seguro de correos y campos personalizables, todo pensado para escalabilidad y fiabilidad empresarial.',
            'project-msg-title': 'Aplicación de Mensajería Interna (Angular, Spring, Keycloak, PostgresSQL)',
            'project-msg-desc': 'Plataforma de mensajería interna personalizada para comunicación empresarial segura. Backend con Spring Boot y PostgreSQL para almacenamiento escalable, autenticación avanzada con Keycloak. Frontend en Angular para mensajería en tiempo real, presencia de usuario e historial de mensajes, fomentando colaboración eficiente y segura.',
            'project-cash-title': 'Cash-Cards Familiar (Angular, Spring, PostgresSQL)',
            'project-cash-desc': 'Aplicación segura para gestión de tarjetas de efectivo familiar. API REST en Spring Boot conectada a PostgreSQL para administrar tarjetas virtuales, seguimiento de ahorros, depósitos y retiros. Frontend en Angular para experiencia intuitiva en gestión de saldos, historial de transacciones y asignación de fondos, promoviendo transparencia y control.',
            'project-acc-title': 'Sitio de Contabilidad (React, Node.js, TypeScript)',
            'project-acc-desc': 'Sitio web de contabilidad moderno y responsivo, diseñado para usabilidad óptima en cualquier dispositivo. Desarrollado con React, Node.js y TypeScript, incluye layouts adaptativos y gestión eficiente de estados de cuenta. El sistema de productos está optimizado para manejar grandes volúmenes de datos con rapidez y claridad.',
            'project-login-title': 'Sistema de Inicio de Sesión con Delegación de Contraseña (Angular, Spring, MySQL)',
            'project-login-desc': 'Sistema robusto de autenticación con Spring Boot y Spring Security 6.5, integrado con MySQL para gestión segura de usuarios. Delegación avanzada de contraseñas y gestión de sesiones con JSESSIONID para máxima seguridad. Frontend en Angular para experiencia de inicio de sesión fluida y protección contra vulnerabilidades web comunes.',
            'project-inv-title': 'Sistema de Inventario (React, TypeScript, Vite, PostgresSQL)',
            'project-inv-desc': 'Plataforma interactiva de gestión de inventario con operaciones CRUD completas. Desarrollada con React y TypeScript, impulsada por Vite para desarrollo rápido, incluye gestión avanzada de estado para actualizaciones en tiempo real y precisión de datos. Ideal para seguimiento eficiente de artículos en pymes.',
            'contact-title': 'Contác<span>tame</span>',
            'contact-alt': 'Alternativamente, puedes contactarme directamente:',
            'contact-email': 'Correo: snowsita1@gmail.com',
            'footer-copy': '© Enmanuel Torres | Todos los derechos reservados'
        }
    };

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        translations.en[key] = element.innerHTML;
    });

    const setLanguage = (lang) => {
        if (document.documentElement.lang === lang) return;

        const dict = translations[lang];
        if (!dict) return;

        const elements = document.querySelectorAll('[data-key]');

        elements.forEach(el => el.classList.add('lang-fade'));

        setTimeout(() => {
            elements.forEach(element => {
                const key = element.getAttribute('data-key');
                if (dict[key]) {
                    element.innerHTML = dict[key];
                }
            });

            document.documentElement.lang = lang;

            elements.forEach(el => el.classList.remove('lang-fade'));
        }, 200);

        document.getElementById('lang-en').classList.toggle('active', lang === 'en');
        document.getElementById('lang-es').classList.toggle('active', lang === 'es');
    };

    document.getElementById('lang-en').addEventListener('click', () => {
        setLanguage('en');
        localStorage.setItem('language', 'en');
    });

    document.getElementById('lang-es').addEventListener('click', () => {
        setLanguage('es');
        localStorage.setItem('language', 'es');
    });

    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
}
