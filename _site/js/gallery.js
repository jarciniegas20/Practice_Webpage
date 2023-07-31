// Activates the image gallery.
// Add an event listener to each image in the galley and respond on click

function activateGallery() {
// # locates the css id and finds all the images within this class
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage  = document.querySelector("#gallery-photo > img");
  // Finding the class = "title"
  let mainTitle = document.querySelector("#gallery-info > .title"); 
  let mainDesc = document.querySelector("#gallery-info > .description");

  thumbnails.forEach(function(thumbnail) {
    // Preload large images before the click to make them appear faster
    let newImageSrc  = thumbnail.dataset.largeVersion
    let largeVersion = new Image();
    largeVersion.src = newImageSrc;

    thumbnail.addEventListener("click", function() {
      // this corresponds to the 'data-large-version' variable in index.html
      let newImageSrc = thumbnail.dataset.largeVersion
      // Updating the "class=title" (Pacific Sunset)
      // to the "data-title=" content (Sea Turtle for ex)
      mainTitle.innerHTML = thumbnail.dataset.title;
      mainDesc.innerHTML = thumbnail.dataset.description;

      // Set clicked image as main image.
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", thumbnail.alt);

      let currentClass = "current"
      // Change which image is current
      document.querySelector(".current").classList.remove(currentClass)
      thumbnail.parentNode.classList.add(currentClass);
     });
  });  
}