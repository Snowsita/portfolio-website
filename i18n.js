/**
 * i18n engine — vanilla JS, zero dependencies.
 *
 * English text is the source-of-truth, baked into index.html.
 * Other languages live in `dictionaries` below.
 *
 * To add a new language: add it to `available`, `labels`, `fullNames`,
 * and `dictionaries`. The header switcher rebuilds itself on init.
 */
(() => {
    const STORAGE_KEY = 'portfolio.lang';

    const available = ['en', 'es'];
    const labels = { en: 'EN', es: 'ES' };
    const fullNames = { en: 'English', es: 'Español' };

    const dictionaries = {
        es: {
            // navbar
            'nav.home': 'Inicio',
            'nav.about': 'Sobre mí',
            'nav.history': 'Historia',
            'nav.services': 'Servicios',
            'nav.work': 'Proyectos',
            'nav.contact': 'Contacto',

            // hero
            'hero.greeting': 'Hola,',
            'hero.name': 'Soy Enmanuel<br>Torres',
            'hero.role': 'Ingeniero de Software y Fundador',
            'hero.desc':
                'Ingeniero de Software en <a href="https://www.remitly.com" target="_blank" rel="noopener" class="text-white hover:text-accent transition-colors underline-offset-4 hover:underline">Remitly</a>, ' +
                'donde construyo servicios en Go, integraciones bancarias y experiencias en React Native. ' +
                'Fundador &amp; CEO de <a href="https://vanter.net" target="_blank" rel="noopener" class="text-white hover:text-accent transition-colors underline-offset-4 hover:underline">Vanter</a>, ' +
                'una empresa SaaS que entrega infraestructura digital de alto rendimiento.',
            'hero.cta_contact': 'Contáctame <i class="bx bx-right-arrow-alt"></i>',
            'hero.cta_cv': 'Descargar CV',

            // stats
            'stats.years': 'Años en ingeniería<br>full-stack',
            'stats.companies': 'Empresas para<br>las que he trabajado',
            'stats.bugs': 'Bugs de producción<br>resueltos a escala',

            // about
            'about.tag': '— Sobre mí',
            'about.title': 'Programando<br>desde los 16.',
            'about.p1':
                'Soy un ingeniero de software basado en Matagalpa, Nicaragua, con amplia experiencia ' +
                'entregando software empresarial de extremo a extremo — desde diseñar servicios cloud-native ' +
                'hasta modernizar stacks legacy de hace una década.',
            'about.p2':
                'Hoy divido mi tiempo entre dos cosas que amo: construir software de transferencia de dinero ' +
                'confiable en <strong class="text-white font-medium">Remitly</strong> usando Go y React Native, ' +
                'y hacer crecer <strong class="text-white font-medium">Vanter</strong>, la empresa SaaS que ' +
                'fundé en marzo de 2026 para diseñar productos de alto rendimiento para sectores que ' +
                'normalmente están atrapados en hojas de cálculo.',
            'about.p3':
                'He liderado equipos en migraciones de Java&nbsp;8&nbsp;→&nbsp;21, reemplazado JDBC plano por ' +
                'Hibernate session-per-request, fortalecido los límites de Spring Security, y entregado 100% ' +
                'de uptime en producción en sistemas que solían caerse a diario. Me importa la corrección, ' +
                'la claridad y la mantenibilidad — en ese orden.',

            // history
            'history.tag': '— Mi trayectoria',
            'history.title': 'Echa un vistazo<br>a mi experiencia.',

            'hist.remitly.dates': 'Dic 2025 — Presente',
            'hist.remitly.role': 'Ingeniero de Software · Go, React Native, AWS',
            'hist.remitly.desc':
                'Construyendo integraciones bancarias, microservicios en Go y flujos gestionados con ' +
                'AWS Secrets para una plataforma global de remesas. Propiedad de extremo a extremo: ' +
                'diseño de APIs, servicios backend, conexión frontend, pruebas E2E. También trabajando ' +
                'en AI/ML, creación de servidores MCP y herramientas internas de Skills.',

            'hist.vanter.dates': 'Mar 2026 — Presente',
            'hist.vanter.role': 'Fundador &amp; CEO · vanter.net',
            'hist.vanter.desc':
                'Empresa SaaS que construye software de alto rendimiento e infraestructura digital. ' +
                'Primer producto: <strong class="text-white font-medium">Axiom</strong>, una plataforma ' +
                'de administración escolar. Próximos: plataformas de membresía para gimnasios y librerías.',

            'hist.ahinko.dates': 'May 2025 — Dic 2025',
            'hist.ahinko.role': 'Líder Técnico y Desarrollador Full-stack · Oviedo, FL',
            'hist.ahinko.desc':
                'Lideré un equipo de 4 modernizando sistemas empresariales legacy en Java, Hibernate y ' +
                'WebSphere. Logré 100% de uptime en producción durante 30 días, eliminé caídas diarias del ' +
                'servidor, resolví 150+ bugs críticos, encabecé las migraciones de Java&nbsp;8&nbsp;→&nbsp;21, ' +
                'WebSphere&nbsp;→&nbsp;Open&nbsp;Liberty, AngularJS&nbsp;→&nbsp;Angular&nbsp;19.',

            'hist.gss.dates': 'Ago 2023 — May 2025',
            'hist.gss.role': 'Desarrollador Full-stack · Ciudad de Guatemala',
            'hist.gss.desc':
                'Diseñé APIs REST en Spring Boot y Angular para un SaaS de gestión de empleados, ' +
                'aumentando la eficiencia operativa en un 60%. Brindé soporte cross-stack en ' +
                '.NET, Node.js y React.',

            'hist.sigel.dates': 'Jul 2022 — Ago 2023',
            'hist.sigel.role': 'Desarrollador Full-stack · Matagalpa',
            'hist.sigel.desc':
                'Diseñé APIs REST y manejé el ciclo de vida completo de despliegue en UAT, QA y producción. ' +
                'Ejecuté migraciones zero-downtime de Oracle y PostgreSQL.',

            'hist.arrocera.dates': 'Feb 2020 — Jul 2022',
            'hist.arrocera.role': 'Desarrollador Full-stack · Matagalpa',
            'hist.arrocera.desc':
                'Construí un sistema personalizado de facturación e inventario sobre MySQL — optimizado ' +
                'para manejar 100,000+ registros y reducir tiempos de consulta en un 60%.',

            // services
            'services.tag': '— Mis servicios',
            'services.title': 'Lo que construyo<br>para clientes.',
            'services.cta': 'Ver proyectos',

            'srv.fullstack.title': 'Ingeniería Full-stack',
            'srv.fullstack.desc':
                'Desarrollo de producto de extremo a extremo en Go, Java, TypeScript y React/React Native — ' +
                'servicios backend, frontend, base de datos y despliegue.',

            'srv.cloud.title': 'Microservicios y Cloud',
            'srv.cloud.desc':
                'Microservicios en Go, APIs en Spring Boot, AWS Secrets Manager, Docker, CI/CD. ' +
                'Infraestructura escalable que no te despierta a las 3 AM.',

            'srv.legacy.title': 'Modernización Legacy',
            'srv.legacy.desc':
                'Java&nbsp;8&nbsp;→&nbsp;21, WebSphere&nbsp;→&nbsp;Open Liberty, AngularJS&nbsp;→&nbsp;Angular ' +
                'moderno, JDBC plano&nbsp;→&nbsp;Hibernate. Hago que sistemas de hace una década vuelvan a ser entregables.',

            'srv.api.title': 'Arquitectura de API y Seguridad',
            'srv.api.desc':
                'APIs REST endurecidas con Spring Security 6, autenticación JWT, CORS, gestión delegada ' +
                'de contraseñas. Elimina la superficie de SQL-injection y centraliza el control de acceso.',

            'srv.ai.title': 'Herramientas AI / ML y MCP',
            'srv.ai.desc':
                'Servidores MCP personalizados, Skills internas y flujos de trabajo aumentados con AI ' +
                'que se integran a pipelines de ingeniería existentes.',

            'srv.lead.title': 'Liderazgo Técnico y Mentoría',
            'srv.lead.desc':
                'Code review, dirección arquitectónica, hojas de ruta de modernización. He liderado ' +
                'equipos en migraciones que el resto de la organización pensaba imposibles.',

            // projects
            'projects.tag': '— Trabajos seleccionados',
            'projects.title': 'Proyectos recientes.',

            'proj.vanter.role': 'Fundador · CEO',
            'proj.vanter.desc':
                'Empresa SaaS que construye software de alto rendimiento e infraestructura digital. ' +
                'Fundada en marzo de 2026.',

            'proj.acc.role': 'En vivo · Freelance',
            'proj.acc.title': 'Sitio de Contabilidad',
            'proj.acc.desc':
                'Plataforma de contabilidad responsiva construida para PyMEs nicaragüenses — ' +
                'estados, catálogo de productos y módulos de reportes.',
            'proj.acc.cta': 'Visitar sitio <i class="bx bx-right-arrow-alt"></i>',

            // axiom
            'axiom.tag': '— Destacado · Vanter',
            'axiom.title': 'Axiom — Administración<br>escolar a escala.',
            'axiom.desc':
                'Las instituciones K-12 manejan asistencia, calificaciones, horarios, comunicaciones con ' +
                'padres y matrícula a través de hojas de cálculo y herramientas desconectadas. ' +
                '<strong class="text-white font-medium">Axiom</strong> es una sola plataforma para todo ' +
                'eso — construida por Vanter como nuestro producto SaaS insignia.',
            'axiom.thumb.dashboard': 'Panel admin',
            'axiom.thumb.attendance': 'Asistencia',
            'axiom.thumb.schedule': 'Horario',
            'axiom.thumb.tuition': 'Matrícula',
            'axiom.viewall': 'Ver las 11 pantallas <i class="bx bx-right-arrow-alt"></i>',

            // contact
            'contact.tag': '— Trabajemos juntos',
            'contact.title': '¿Tienes un proyecto<br>en mente?',
            'contact.desc':
                'Abierto a trabajos de consultoría, roles de ingeniero fundador y alianzas con Vanter. ' +
                'La forma más rápida de contactarme es por correo.',

            // footer
            'footer.copyright': '© 2026 — Hecho en Matagalpa, Nicaragua.',
        },
    };

    // Lightbox captions are consumed by script.js, exposed via window.__i18n.lightboxCaption().
    const lightboxCaptions = {
        en: [
            'Admin dashboard — overview metrics',
            'Class performance — sorted by average',
            'Classes — all sections',
            'Staff & teachers',
            'Student accounts',
            'Parent accounts',
            'Sections — by grade',
            'Evaluation periods (MINED)',
            'Schedule constructor — weekly view',
            'Tuition — collection rate & balances',
            'Monthly attendance — heatmap',
        ],
        es: [
            'Panel admin — métricas generales',
            'Rendimiento por clase — ordenado por promedio',
            'Clases — todas las secciones',
            'Personal y profesores',
            'Cuentas de estudiantes',
            'Cuentas de padres',
            'Secciones — por grado',
            'Cortes evaluativos (MINED)',
            'Constructor de horario — vista semanal',
            'Matrícula — tasa de cobro y saldos',
            'Asistencia mensual — heatmap',
        ],
    };

    // Cache the original (English) HTML on first load so EN can always be restored.
    const originals = {};
    const cacheOriginals = () => {
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.dataset.i18n;
            if (!(key in originals)) originals[key] = el.innerHTML;
        });
    };

    const apply = (lang) => {
        const dict = dictionaries[lang] || {};
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.dataset.i18n;
            if (lang === 'en') {
                el.innerHTML = originals[key] ?? el.innerHTML;
            } else if (key in dict) {
                el.innerHTML = dict[key];
            } else {
                // missing translation — fall back to English
                el.innerHTML = originals[key] ?? el.innerHTML;
            }
        });
        document.documentElement.lang = lang;
    };

    let currentLang = 'en';

    const setLanguage = (lang) => {
        if (!available.includes(lang)) lang = 'en';
        currentLang = lang;
        apply(lang);
        try { localStorage.setItem(STORAGE_KEY, lang); } catch {}
        document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang } }));
        renderSwitcher();
    };

    const buildSwitcher = () => {
        const host = document.getElementById('lang-switcher');
        if (!host) return;
        host.innerHTML = '';
        available.forEach((lang, i) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.dataset.lang = lang;
            btn.setAttribute('aria-label', `Switch to ${fullNames[lang]}`);
            btn.title = fullNames[lang];
            btn.textContent = labels[lang];
            btn.className =
                'px-2 py-1 rounded transition-colors hover:text-white';
            btn.addEventListener('click', () => setLanguage(lang));
            host.appendChild(btn);
            if (i < available.length - 1) {
                const sep = document.createElement('span');
                sep.textContent = '·';
                sep.className = 'text-ink-600 px-0.5';
                host.appendChild(sep);
            }
        });
    };

    const renderSwitcher = () => {
        document.querySelectorAll('#lang-switcher button[data-lang]').forEach((btn) => {
            const isActive = btn.dataset.lang === currentLang;
            btn.classList.toggle('text-accent', isActive);
            btn.classList.toggle('text-muted', !isActive);
        });
    };

    // Public API
    window.__i18n = {
        get current() { return currentLang; },
        available,
        setLanguage,
        lightboxCaption(index) {
            const arr = lightboxCaptions[currentLang] || lightboxCaptions.en;
            return arr[index] ?? lightboxCaptions.en[index] ?? '';
        },
    };

    // Init
    document.addEventListener('DOMContentLoaded', () => {
        cacheOriginals();
        buildSwitcher();

        let saved = null;
        try { saved = localStorage.getItem(STORAGE_KEY); } catch {}
        const initial = available.includes(saved)
            ? saved
            : (navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en';
        setLanguage(initial);
    });
})();
