//while playing the game
//we have produce a random number and user have to guess
//4 scenario
//1 value<gen val and within chance
//have text to give feedback "oops! your guess is low"

//2 value >gen val and within chance
//have text "oops! your guess is high"

//3 value == gen , then redirect to the win page

//4 when the lives are out then redirect to loose page


let totalLives = 10;
const rand = Math.ceil(Math.random() * 100);


// slecting elements
const form = document.querySelector("#form");
const feed = document.querySelector(".info");
const balLives = document.querySelector(".count");

//listenting to the submit event
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const numIn = document.querySelector("#form input");
  const num = numIn.value;

  if (totalLives > 1) {
    if (num < rand) {
      totalLives--;
      feed.innerText = "low";
      balLives.innerText = totalLives;
    } else if (num > rand) {
      totalLives--;
      feed.innerText = "high";
      balLives.innerText = totalLives;
    } else {
      window.location = "win.html";
    }
  } else {
    window.location = "loose.html";
  }
});

