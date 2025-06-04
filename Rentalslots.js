/****************************
Rental Josh 16/05/25
****************************/
console.log("hello");


//variables
var PokerRent =0;
var BlackJackRent =0;
var SpinTheWheelRent =0;
var RouletteRent =0;
var CashSlotsRent =0;
var HorseRacingRent =0;
var Cash =0;
var timer =0;
var checkertrue =0;
while (timer >= 0 || timer <= 30) {
    if (timer == 30) {
        checkertrue = checkertrue - 1
        timer = timer - 30
    }
}
/****************************
 Main code
****************************/

function start() {
Cash = Cash + 1;
console.log(Cash);
}

//timerintervals
let intervalID = setInterval(() => {
  if (checkerture == 1) {
    rentTimer();
  }
}, 1000);

/****************************
  Functions
****************************/
function rentTimer() {
   if (secondChecker == 1) {
    timer = timer + 1
    console.log("timer")
   }
}
function poker() {
if (Cash >= 20) {
    console.log("30 second rental has started");
    Cash = Cash - 20
checkertrue = checkertrue + 1
} else {
    console.log("insufficient funds.");
}
}
function blackJack() {
if (Cash >= 100) {
    console.log("45 second rental has started");
} else {
    console.log("insufficient funds.");
}
}
function spinTheWheel() {
if (Cash >= 1000) {
    console.log("30 second rental has started");
} else {
    console.log("insufficient funds.");
}
}
function roulette() {
if (Cash >= 5000) {
    console.log("1 minute rental has started");
} else {
    console.log("insufficient funds.");
}
}
function cashSlot() {
if (Cash >= 25000) {
    console.log("5 minutes rental has started");
} else {
    console.log("insufficient funds.");
}
}
function horseRacing() {
if (Cash >= 100000) {
    console.log("20 minutes rental has started");

} else {
    console.log("insufficient funds.");
}
}