var audio = document.getElementById("myAudio");
var button = document.getElementById("playButton");

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    button.textContent = "Pause Musik"; // Change button text to "Pause"
  } else {
    audio.pause();
    button.textContent = "Play Musik"; // Change button text back to "Play"
  }
}

// Optional: Automatically load and play audio when the page loads (but keep the Play button functionality)
window.onload = function() {
  audio.load(); // Preload the audio file
};

const year = new Date().getFullYear();
const fourthOfJuly = new Date(year, 1, 20, 0, 0, 0).getTime();
const fourthOfJulyNextYear = new Date(year + 1, 20, 0, 0, 0).getTime();
const month = new Date().getMonth();

// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  let diff;
  if(month > 1) {
    diff = fourthOfJulyNextYear - today;
  } else {
    diff = fourthOfJuly - today;
  }

 // If the countdown reaches 0
 if (diff <= 0) {
    clearInterval(timer);  // Stop the countdown
    // Redirect to a new page
    window.location.href ="page.html";  // Ganti dengan URL halaman tujuan Anda
    return; // Stop the function here
  }

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>seconds</div> \
</div>";

}, 1000);

