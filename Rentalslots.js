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
let intervalID = setinterval(RentOne, 1000);
/****************************
 Main code
****************************/
function start() {
Cash = Cash + 1;
console.log(Cash);
}
if (timer == 30) {
    console.log("30 Second rent have finished.");
}
if (timer == 30) {
clearInterval
}

/****************************
  Functions
****************************/
function RentOne() {
if (intervalID == 1000) {
timer = timer + 1
}
}
function Poker() {
if (Cash >= 20) {
    console.log("30 second rental has started");
    Cash = Cash - 20
} else {
    console.log("insufficient funds.");
}
}
function BlackJack() {
if (Cash >= 100) {
    console.log("45 second rental has started");
} else {
    console.log("insufficient funds.");
}
}
function SpinTheWheel() {
if (Cash >= 1000) {
    console.log("30 second rental has started");
} else {
    console.log("insufficient funds.");
}
}
function Roulette() {
if (Cash >= 5000) {
    console.log("1 minute rental has started");
} else {
    console.log("insufficient funds.");
}
}
function CashSlot() {
if (Cash >= 25000) {
    console.log("5 minutes rental has started");
} else {
    console.log("insufficient funds.");
}
}
function HorseRacing() {
if (Cash >= 100000) {
    console.log("20 minutes rental has started");

} else {
    console.log("insufficient funds.");
}
}