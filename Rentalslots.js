/****************************
Rental Josh 16/05/25
****************************/
console.log("hello");


//variables
var Poker =(0);
var BlackJack =(0);
var SpinTheWheel =(0);
var Roulete =(0);
var CashSlots =(0);
var HorseRacing =(0);
var Cash =(0);
const startingMinutes = 0.5;
let time = startingMinutes * 60
const countdownEL = document.getElementById('countdown');
setInterval(updateCountdown, 1000);

/****************************
 Main code
****************************/
function start() {
Cash = Cash + 1;
console.log(Cash);
}


/****************************
  Functions
****************************/
function Poker() {
if (Cash >= 20) {
    console.log("30 second rental has started")
} else {
    console.log("You are too broke don't even try.")
}
}
function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEL.innerHTML = `${minutes}:${formattedSeconds}`;
    time--;
    time = time < 0 ? 0 : time; 
}
