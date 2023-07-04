let isNavClosed = false;
export const toggleNavbar = () => {
  const mobileOptions = document.querySelector('.head-options-container');
  const hero = document.querySelector('.hero');
  const mobileNav = document.querySelector('.mobile-nav');
  const navButton = document.querySelector('.hamburger-button');
  if (!isNavClosed) {
    mobileOptions.classList.add('hidden');
    hero.classList.add('hidden');
    mobileNav.classList.remove('hidden');
    navButton.classList.add('active-burger');
    isNavClosed = true;
  } else {
    mobileOptions.classList.remove('hidden');
    hero.classList.remove('hidden');
    mobileNav.classList.add('hidden');
    navButton.classList.remove('active-burger');
    isNavClosed = false;
  }
};
