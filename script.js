const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    menuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
    document.getElementById('year').textContent = new Date().getFullYear();

    // Placeholder profile links are intentionally disabled until real URLs are added.
    document.querySelectorAll('[data-placeholder-link]').forEach(link => {
      link.addEventListener('click', event => {
        if (link.getAttribute('href') === '#') {
          event.preventDefault();
          alert('Please add your real profile URL in index.html before publishing.');
        }
      });
    });

    const sections = document.querySelectorAll('main section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navAnchors.forEach(anchor => {
            anchor.classList.toggle('active', anchor.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach(section => observer.observe(section));
