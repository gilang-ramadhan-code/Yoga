// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58;

    const sectionId = current.getAttribute('id');

    const sectionsClass = document.querySelector(
      `.nav__menu a[href*=${sectionId}]`
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);

// DARK LIGHT THEME
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );

  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](
    iconTheme
  );
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

// SHOW MENU
const navClose = document.getElementById('nav-close'),
  navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');

  navMenu.classList.remove('show-menu');
};

navLink.forEach((n) => n.addEventListener('click', linkAction));

// ADD BLUR TO HEADER
const blurHeader = () => {
  const header = document.getElementById('header');

  this.scrollY >= 50
    ? header.classList.add('blur-header')
    : header.classList.remove('blur-header');
};

window.addEventListener('scroll', blurHeader);

// SHOW SCROLL UP
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');

  this.scrollY >= 350
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  delay: 400,
  distance: '60px',
  duration: 2500,
  origin: 'top',
});

sr.reveal(`.footer__container, .home__data, .list__container, .join__content`);
sr.reveal(`.home__image`, { origin: 'bottom' });

sr.reveal(`.follow__image-3, .health__image, .routine__images`, {
  origin: 'left',
});

sr.reveal(`.follow__image-4, .health__data, .routine__data`, {
  origin: 'right',
});

sr.reveal(`.follow__content-1 img, .follow__data`, { interval: 100 });
