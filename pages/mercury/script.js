import { fetchPlanetData } from '../../helpers/fetch.js';
const planet = 'mercury';

document.addEventListener('DOMContentLoaded', function () {
  fetchPlanetData(planet);
});
