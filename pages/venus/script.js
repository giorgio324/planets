import { fetchPlanetData } from '../../helpers/fetch.js';
const planet = 'venus';

document.addEventListener('DOMContentLoaded', function () {
  fetchPlanetData(planet);
});
