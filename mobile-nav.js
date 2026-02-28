(function () {
  function initMobileNav() {
    var headerRow = document.querySelector('.header-row');
    if (!headerRow) return;

    var navList = headerRow.querySelector('.nav-links');
    if (!navList) return;

    var toggle = document.createElement('button');
    toggle.className = 'mobile-menu-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'mobile-nav-drawer');
    toggle.textContent = 'Menu';

    headerRow.appendChild(toggle);

    var overlay = document.createElement('div');
    overlay.className = 'mobile-nav-overlay';

    var drawer = document.createElement('aside');
    drawer.className = 'mobile-nav-drawer';
    drawer.id = 'mobile-nav-drawer';
    drawer.setAttribute('aria-label', 'Mobile navigation');

    var head = document.createElement('div');
    head.className = 'mobile-nav-head';

    var title = document.createElement('strong');
    title.textContent = 'Navigate';

    var closeBtn = document.createElement('button');
    closeBtn.className = 'mobile-nav-close';
    closeBtn.type = 'button';
    closeBtn.textContent = 'Close';

    head.appendChild(title);
    head.appendChild(closeBtn);

    var mobileList = document.createElement('ul');
    mobileList.className = 'mobile-nav-list';
    mobileList.innerHTML = navList.innerHTML;

    drawer.appendChild(head);
    drawer.appendChild(mobileList);

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    function openNav() {
      document.body.classList.add('mobile-nav-open');
      toggle.setAttribute('aria-expanded', 'true');
    }

    function closeNav() {
      document.body.classList.remove('mobile-nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', function () {
      if (document.body.classList.contains('mobile-nav-open')) {
        closeNav();
      } else {
        openNav();
      }
    });

    closeBtn.addEventListener('click', closeNav);
    overlay.addEventListener('click', closeNav);

    drawer.addEventListener('click', function (event) {
      if (event.target && event.target.closest('a')) {
        closeNav();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeNav();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileNav);
  } else {
    initMobileNav();
  }
})();
