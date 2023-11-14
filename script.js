// Access DOM
const allRatingElements = document.querySelectorAll(".rating");
const cardFrontElement = document.querySelector(".card-front");
const cardBackElement = document.querySelector(".card-back");
const submitButtonElement = document.querySelector(".submit-button");
const ratingSelectionElement = document.querySelector(".rating-selection");

// Initialize event listeners when page loads
window.onload = initializeEventListeners;

// Declare global variables
let selectedRating = null;
let previousRatingElement = null;

// Initialize rating and submit events
function initializeEventListeners() {
  allRatingElements.forEach((rating) =>
    rating.addEventListener("click", onRatingClicked)
  );

  submitButtonElement.addEventListener("click", onSubmit);
}

// Handle rating click events
function onRatingClicked(event) {
  const element = event.target;
  selectedRating = element.innerText;

  if (previousRatingElement) {
    previousRatingElement.classList.remove("selected");

    if (element === previousRatingElement) {
      previousRatingElement = null;
      selectedRating = null;
      return;
    }
  }

  element.classList.add("selected");
  previousRatingElement = element;
}

// Handle submit event
function onSubmit() {
  if (selectedRating) {
    cardFrontElement.style.display = "none";
    cardBackElement.style.display = "flex";

    ratingSelectionElement.innerText = `You selected ${selectedRating} out of 5`;
  } else {
    alert("Please select a rating before submitting.");
  }
}
