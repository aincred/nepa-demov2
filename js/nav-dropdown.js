// Dropdown behaviour for the main menu. Include before </body>.
(function () {
  var items = document.querySelectorAll('#menu-list li.has-sub');

  function setOpen(li, open) {
    li.classList.toggle('open', open);
    var a = li.querySelector(':scope > .sub-toggle');
    a.setAttribute('aria-expanded', open ? 'true' : 'false');
    a.querySelector('.plus').textContent = open ? '\u2212' : '+'; // − when open
  }

  function closeAll(except) {
    items.forEach(function (li) { if (li !== except && !li.contains(except)) setOpen(li, false); });
  }

  items.forEach(function (li) {
    var toggle = li.querySelector(':scope > .sub-toggle');
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      var willOpen = !li.classList.contains('open');
      closeAll(li);
      setOpen(li, willOpen);
    });
    // keep +/− in sync with hover on desktop
    li.addEventListener('mouseenter', function () {
      if (window.matchMedia('(min-width: 901px)').matches) setOpen(li, true);
    });
    li.addEventListener('mouseleave', function () {
      if (window.matchMedia('(min-width: 901px)').matches) setOpen(li, false);
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('#menu-list')) closeAll(null);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll(null);
  });
})();
