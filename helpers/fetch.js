export async function fetchPlanetData(planetName) {
  try {
    const response = await fetch(
      `https://planets-api.vercel.app/api/v1/planets/${planetName}`
    );
    const planetData = await response.json();
    console.log(planetData);

    const planetNameElement = document.querySelector('.planet-name');
    const planetImageElement = document.querySelector('.planet-image');
    const planetDescriptionElement = document.querySelector(
      '.planet-description'
    );
    const sourceLinkElement = document.querySelector('.source-link');
    const planetRotationElement = document.querySelector(
      '.planet-info-rotation-data'
    );
    const planetRevolutionElement = document.querySelector(
      '.planet-info-revolution-data'
    );
    const planetRadiusElement = document.querySelector(
      '.planet-info-radius-data'
    );
    const planetTemperatureElement = document.querySelector(
      '.planet-info-temperature-data'
    );

    planetNameElement.textContent = planetData?.name;
    planetImageElement.src = planetData?.images?.planet;
    planetDescriptionElement.textContent = planetData?.overview?.content;
    sourceLinkElement.href = planetData?.overview?.source;
    planetRotationElement.textContent = planetData?.rotation;
    planetRevolutionElement.textContent = planetData?.revolution;
    planetRadiusElement.textContent = planetData?.radius;
    planetTemperatureElement.textContent = planetData?.temperature;
  } catch (error) {
    console.error(error);
  }
}
