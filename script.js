import { fetchPlanetData } from './helpers/fetch.js';
import { toggleActiveClass } from './helpers/toggleActiveClass.js';
const planet = 'mercury';
// when the page loads, fetch the data for the planet
document.addEventListener('DOMContentLoaded', function () {
  fetchPlanetData(planet);
});

const handleClick = (e) => {
  e.preventDefault();
  const planet = e.target.id;
  fetchPlanetData(planet);
  toggleActiveClass(e, planet);
  e.target.parentElement
    .querySelector('.link-top-line')
    .classList.add('active');
};
const links = document.querySelectorAll('.link > a');
links.forEach((link) => {
  link.addEventListener('click', handleClick);
});
