// Coding Timelapse w/ resources:
// https://youtu.be/c0HTgIItRhc
// Thanks for stopping by! Stay well and safe ❤️
// script.js

// Show the pop-up after a delay (or you can call this function directly)
function showPopup() {
  document.getElementById("popup").classList.remove("hidden");
}

// Close the pop-up
document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popup").classList.add("hidden");
});

// Example: Show the pop-up after 2 seconds
setTimeout(showPopup, 2000);
