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
let intervalID = setinterval(rentTimer, 1000);
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
function rentTimer() {
if (intervalID == 1000) {
   console.log("it has been 1 second");
}
}
function poker() {
if (Cash >= 20) {
    console.log("30 second rental has started");
    Cash = Cash - 20
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