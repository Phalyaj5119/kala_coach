// Get input element and search button
var input = document.getElementById('searchInput');
var searchButton = document.getElementById('searchButton');

// Add event listener for click event on search button
searchButton.addEventListener('click', function() {
  search();
});

// Function to perform search
function search() {
  var searchText = input.value.trim();
  
  // Check if search text is empty
  if (searchText === '') {
    alert('Please enter a search term.');
    return;
  }
  
  // Perform search - This is where you would implement your search logic
  
  // For demonstration, let's just display an alert with the search text
  alert('You searched for: ' + searchText);
}
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function moveSlide(direction) {
  currentIndex = (currentIndex + direction + carouselItems.length) % carouselItems.length;
  const offset = -currentIndex * carouselItems[0].offsetWidth;
  carouselContainer.style.transform = `translateX(${offset}px)`;
}

