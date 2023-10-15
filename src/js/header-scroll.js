var scrollDistance = 50;

function checkHeaderPosition() {
  if (window.scrollY > scrollDistance) {
    document.querySelector('.header').classList.add('header--scrolled')
  } else {
    document.querySelector('.header').classList.remove('header--scrolled')
  }
}

window.addEventListener('scroll', checkHeaderPosition );

checkHeaderPosition();
