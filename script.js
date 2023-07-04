import { fetchPlanetData } from './helpers/fetch.js';
const planet = 'mercury';
document.addEventListener('DOMContentLoaded', function () {
  fetchPlanetData(planet);
});

const handleClick = (e) => {
  e.preventDefault();
  const planet = e.target.id;
  fetchPlanetData(planet);
};
const links = document.querySelectorAll('.link > a');
links.forEach((link) => {
  link.addEventListener('click', handleClick);
});
