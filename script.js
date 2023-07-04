import { fetchPlanetData } from './helpers/fetch.js';
import { toggleActiveClass } from './helpers/toggleActiveClass.js';
import { toggleNavbar } from './helpers/toggleNavbar.js';
import { toggleOptionColor } from './helpers/toggleOptionColor.js';
const startingPlanet = 'mercury';
// when the page loads, fetch the data for the planet
document.addEventListener('DOMContentLoaded', function () {
  fetchPlanetData(startingPlanet);
});

const handleClick = (e) => {
  e.preventDefault();
  let planet = e.target.closest('a').id;
  console.log(planet);
  fetchPlanetData(planet);
  toggleActiveClass(e, planet);
  toggleOptionColor(planet);
};
const navButton = document.querySelector('.hamburger-button');
navButton.addEventListener('click', toggleNavbar);
const links = document.querySelectorAll('.link > a');
links.forEach((link) => {
  link.addEventListener('click', handleClick);
});
const mobileLinks = document.querySelectorAll('.mobile-link > a');
mobileLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    handleClick(e);
    toggleNavbar();
  });
});
