import { fetchPlanetData } from '../../helpers/fetch.js';
const planet = 'earth';

document.addEventListener('DOMContentLoaded', function () {
  fetchPlanetData(planet);
});
