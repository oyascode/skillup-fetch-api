
const auth = "563492ad6f917000010000019d6e521ad8f345798ad01d3e472ea042"

const next = document.querySelector(".next");
const input = document.querySelector("input");
const searchBtn = document.querySelector("search-btn");

 let pageNumber = 1;
 let query = "";
//  let search = false;


input.addEventListener("input", (e) => {
  e.preventDefault();
  query = e.target.value;  
})

const selectImages = async () => {
  const imageData = await fetch(
    `https://api.pexels.com/v1/curated?per_page=20&${pageNumber}`,
    {
      method: "GET", 
      headers: {
        accept: "application/JSON",
        authorization: auth
      }
    }
  );
  const response = await imageData.json();
  response.photos.forEach(photo => {
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

selectImages(pageNumber);