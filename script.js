import { fetchPlanetData } from './helpers/fetch.js';
import { toggleActiveClass } from './helpers/toggleActiveClass.js';
import { toggleNavbar } from './helpers/toggleNavbar.js';
import {
  toggleOptionColor,
  toggleBodyOptionColor,
  resetToggleBodyOptionColor,
} from './helpers/toggleOptionColor.js';
import { toggleBodyOption, toggleOption } from './helpers/toggleOption.js';
const startingPlanet = 'mercury';
let currentPlanet = startingPlanet;
// when the page loads, fetch the data for the planet
document.addEventListener('DOMContentLoaded', function () {
  fetchPlanetData(startingPlanet);
});

const handleClick = (e) => {
  e.preventDefault();
  let planet = e.target.closest('a').id;
  currentPlanet = planet;
  fetchPlanetData(planet);
  toggleActiveClass(e, planet);
  toggleOptionColor(planet);
  toggleBodyOptionColor(planet);
  toggleBodyOption(e, true);
  resetToggleBodyOptionColor();
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
const options = document.querySelectorAll('.head-option');
options.forEach((option) => {
  option.addEventListener('click', (e) => {
    toggleOption(e);
  });
});
const bodyOptions = document.querySelectorAll('.body-option');
bodyOptions.forEach((option) => {
  option.addEventListener('click', (e) => {
    toggleBodyOption(e);
    toggleBodyOptionColor(currentPlanet);
  });
});
