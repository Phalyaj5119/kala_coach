const lightboxImage = document.getElementById('lightboxImage');
const thumbnailGallery = document.getElementById('thumbnailGallery');
const images = ['rectangle-27@2x.png', 'rectangle-25@2x.png', 'img1.png', 'img2.png', 'rectangle-26@2x.png']; // Image URLs
let currentIndex = 0;

function displayImage(index) {
  lightboxImage.style.backgroundImage = `url(${images[index]})`;
}

function generateThumbnails() {
  thumbnailGallery.innerHTML = '';
  images.forEach((image, index) => {
    const thumbnail = document.createElement('div');
    thumbnail.classList.add('thumbnail');
    thumbnail.style.backgroundImage = `url(${image})`;
    thumbnail.addEventListener('click', () => {
      currentIndex = index;
      displayImage(currentIndex);
    });
    thumbnailGallery.appendChild(thumbnail);
  });
}

function startSlideshow() {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    displayImage(currentIndex);
  }, 5000); // Change slideshow interval as needed (in milliseconds)
}

generateThumbnails();
displayImage(currentIndex);
startSlideshow();


document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    showPopup();
  });
  
  document.querySelector(".close").addEventListener("click", function() {
    hidePopup();
  });
  
  function showPopup() {
    document.getElementById("popup").style.display = "block";
  }
  
  function hidePopup() {
    document.getElementById("popup").style.display = "none";
  }

  