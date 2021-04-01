const moreImges = document.querySelector(".next");

const apiKey = "563492ad6f917000010000019d6e521ad8f345798ad01d3e472ea042"

let pageNumber = 1;
const getCuratedPhotos = async (pageNumber) => {
  const response = await fetch(
    `https://api.pexels.com/v1/curated?per_page=20&${pageNumber}`,
    {
      method: "GET", 
      headers: {
        accept: "application/JSON",
        authorization: apiKey
      }
    }
  );
  const photoData = await response.json();
  photoData.photos.forEach(photo => {
    const imageCard = document.createElement("div");
    imageCard.className = "card-img";
    imageCard.innerHTML = 
    ` <img src=${photo.src.large}>
      <p>Photo: ${photo.photographer}</p>
      <a href=${photo.src.large}>Download</a>    
    `;
    const gallery = document.querySelector(".gallery");
    gallery.appendChild(imageCard)
  });
} 

moreImges.addEventListener("click", () => {
  pageNumber = pageNumber++;
  getCuratedPhotos(pageNumber);
})

getCuratedPhotos(pageNumber);
