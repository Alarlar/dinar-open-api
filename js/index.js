document
  .getElementById("artwork-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    fetchArtwork();
  });

document
  .getElementById("artist-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    fetchArtist();
  });

function fetchArtwork() {
  fetch("https://api.artic.edu/api/v1/artworks")
    .then((response) => response.json())
    .then((data) => {
      const artwork = data.data[0];
      const imageUrl = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;
      document.getElementById("content").innerHTML = `
              <h2>${artwork.title}</h2>
              <p>Artist: ${artwork.artist_title}</p>
              <img src="${imageUrl}" alt="${artwork.title}" style="max-width: 100%; height: auto;">
          `;
    })
    .catch((error) => console.error("Error fetching artwork:", error));
}

function fetchArtist() {
  fetch("https://api.artic.edu/api/v1/artists")
    .then((response) => response.json())
    .then((data) => {
      const artist = data.data[0];
      document.getElementById("content").innerHTML = `
              <h2>${artist.title}</h2>
              <p>Birth Date: ${artist.birth_date}</p>
          `;
    })
    .catch((error) => console.error("Error fetching artist:", error));
}
