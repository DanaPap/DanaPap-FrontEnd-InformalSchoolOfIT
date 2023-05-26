function fetchData(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
}

function getCharacters(characterId = '') {
  const url = `https://rickandmortyapi.com/api/character/${characterId}`;
  return fetchData(url);
}

function getLocations(locationId = '') {
  const url = `https://rickandmortyapi.com/api/location/${locationId}`;
  return fetchData(url);
}

function getEpisodes(episodeId = '') {
  const url = `https://rickandmortyapi.com/api/episode/${episodeId}`;
  return fetchData(url);
}

function displayCharacters() {
  getCharacters()
    .then(data => {
      const charactersDiv = document.getElementById('characters');
      charactersDiv.innerHTML = JSON.stringify(data);
      console.log('All characters:', data);
    })
    .catch(error => console.error('Error fetching characters:', error));
}

function displayLocations() {
  getLocations()
    .then(data => {
      const locationsDiv = document.getElementById('locations');
      locationsDiv.innerHTML = JSON.stringify(data);
      console.log('All locations:', data);
    })
    .catch(error => console.error('Error fetching locations:', error));
}

function displayEpisodes() {
  getEpisodes()
    .then(data => {
      const episodesDiv = document.getElementById('episodes');
      episodesDiv.innerHTML = JSON.stringify(data);
      console.log('All episodes:', data);
    })
    .catch(error => console.error('Error fetching episodes:', error));
  }