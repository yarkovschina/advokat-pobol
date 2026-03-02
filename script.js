document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.burger');
  var mobileMenu = document.querySelector('.mobile-menu');
  var mobileLinks = mobileMenu.querySelectorAll('a');
  var popupOverlay = document.querySelector('.popup-overlay');
  var popupCloseBtns = document.querySelectorAll('[data-close-popup]');
  var popupOpenBtns = document.querySelectorAll('[data-open-popup]');

  // Burger menu
  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      burger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Popup
  popupOpenBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      popupOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  popupCloseBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      popupOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  popupOverlay.addEventListener('click', function (e) {
    if (e.target === popupOverlay) {
      popupOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Form handling
  document.querySelectorAll('form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var successEl = form.querySelector('.form-success');
      if (successEl) {
        form.querySelector('.form-inline').style.display = 'none';
        var privacy = form.querySelector('.form-privacy');
        if (privacy) privacy.style.display = 'none';
        successEl.style.display = 'block';
        successEl.textContent = 'Спасибо! Мы свяжемся с вами в ближайшее время.';
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = 70;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // Header background on scroll
  var header = document.querySelector('.header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.style.background = 'rgba(0, 0, 0, 0.85)';
    } else {
      header.style.background = 'rgba(0, 0, 0, 0.5)';
    }
  });
});
