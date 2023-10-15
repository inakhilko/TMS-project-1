var scrollDistance = 50;

window.addEventListener('scroll', function() {
    if (window.scrollY > scrollDistance) {
      document.querySelector('.header').classList.add('header--scrolled')
    } else {
      document.querySelector('.header').classList.remove('header--scrolled')
    }
  })