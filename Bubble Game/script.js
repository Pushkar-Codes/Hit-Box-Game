//Box bubble
const bblBox = document.querySelector(".bbl-box");
var bblNum = 0;

function createBox() {
  for (let i = 1; i <= 195; i++) {
    const bbl = document.createElement("div");
    bbl.className = "bbl";
    bblBox.appendChild(bbl);

    bblNum = Math.floor(Math.random() * 10);
    bbl.innerText = " " + bblNum;
  }
}

createBox();

// Countdown
var timeLeft = 30;
var elem = document.querySelector(".timer");

var timerId = setInterval(Countdown, 1000);

function Countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    bblBox.innerHTML = "Reload to play again! ";
    alert("Game Over");
  } else {
    elem.innerHTML = timeLeft + "  ";
    timeLeft--;
  }
}

// Hit number
var random;
const hitNum = document.querySelector(".num");
function RandomNum() {
  random = Math.floor(Math.random() * 10);
  hitNum.innerText = " " + random;
}

RandomNum();

// Increase sore
var score = 0;
function increaseScore() {
  score += 1;
  document.querySelector(".score").innerText = score;
}

// Clicked number
bblBox.addEventListener("click", function (vals) {
  // console.log(vals.target);
  var bblVal = Number(vals.target.textContent);
  if (bblVal == random) {
    RandomNum();
    increaseScore();

    bbl.innerText = " " + bblNum;
  }
});
