(() => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('open');
            const icon = menuIcon.querySelector('i');
            if (icon) icon.classList.toggle('bx-x');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('open');
                const icon = menuIcon.querySelector('i');
                if (icon) icon.classList.remove('bx-x');
            });
        });
    }

    const sections = document.querySelectorAll('main section[id]');
    const setActiveLink = () => {
        const scrollY = window.scrollY + 120;
        let current = '';
        sections.forEach(section => {
            if (scrollY >= section.offsetTop) current = section.id;
        });
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('text-white', href === `#${current}`);
            link.classList.toggle('text-muted', href !== `#${current}`);
        });
    };
    window.addEventListener('scroll', setActiveLink, { passive: true });
    setActiveLink();

    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
        reveals.forEach(el => io.observe(el));
    } else {
        reveals.forEach(el => el.classList.add('is-visible'));
    }

    // ----- Axiom lightbox -----
    const axiomImages = [
        'axiom-1.png',  'axiom-2.png',  'axiom-3.png',  'axiom-4.png',
        'axiom-5.png',  'axiom-6.png',  'axiom-7.png',  'axiom-8.png',
        'axiom-9.png',  'axiom-10.png', 'axiom-11.png',
    ];

    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        const lbImg = document.getElementById('lightbox-img');
        const lbCaption = document.getElementById('lightbox-caption');
        const lbCounter = document.getElementById('lightbox-counter');
        const btnClose = document.getElementById('lightbox-close');
        const btnPrev = document.getElementById('lightbox-prev');
        const btnNext = document.getElementById('lightbox-next');
        let currentIndex = 0;

        const captionFor = (i) =>
            (window.__i18n && window.__i18n.lightboxCaption)
                ? window.__i18n.lightboxCaption(i)
                : '';

        const render = () => {
            lbImg.src = axiomImages[currentIndex];
            const caption = captionFor(currentIndex);
            lbImg.alt = caption;
            lbCaption.textContent = caption;
            lbCounter.textContent = `${currentIndex + 1} / ${axiomImages.length}`;
        };

        const open = (index = 0) => {
            currentIndex = Math.max(0, Math.min(index, axiomImages.length - 1));
            render();
            lightbox.classList.remove('hidden');
            lightbox.classList.add('flex');
            document.body.style.overflow = 'hidden';
        };

        const close = () => {
            lightbox.classList.add('hidden');
            lightbox.classList.remove('flex');
            document.body.style.overflow = '';
        };

        const next = () => {
            currentIndex = (currentIndex + 1) % axiomImages.length;
            render();
        };

        const prev = () => {
            currentIndex = (currentIndex - 1 + axiomImages.length) % axiomImages.length;
            render();
        };

        document.querySelectorAll('[data-axiom-open]').forEach(btn => {
            btn.addEventListener('click', () => {
                open(parseInt(btn.dataset.axiomOpen, 10) || 0);
            });
        });

        btnClose.addEventListener('click', close);
        btnPrev.addEventListener('click', prev);
        btnNext.addEventListener('click', next);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) close();
        });
        document.addEventListener('keydown', (e) => {
            if (lightbox.classList.contains('hidden')) return;
            if (e.key === 'Escape') close();
            else if (e.key === 'ArrowRight') next();
            else if (e.key === 'ArrowLeft') prev();
        });

        // Re-render caption when language changes (only if open)
        document.addEventListener('i18n:change', () => {
            if (!lightbox.classList.contains('hidden')) render();
        });
    }
})();
