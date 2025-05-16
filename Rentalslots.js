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
    console.log("30 second rental has started");
} else {
    console.log("You are too broke don't even try.");
}
}
function BlackJack() {
if (Cash >= 100) {
    console.log("45 second rental has started");
} else {
    console.log("You are too broke don't even try.");
}
}
function SpinTheWheel() {
if (Cash >= 1000) {
    console.log("30 second rental has started");
} else {
    console.log("You are too broke don't even try.");
}
}
function Roulette() {
if (Cash >= 5000) {
    console.log("1 minute rental has started");
} else {
    console.log("You are too broke don't even try.");
}
}
function CashSlot() {
if (Cash >= 25000) {
    console.log("5 minutes rental has started");
} else {
    console.log("You are too broke don't even try.");
}
}
function HorseRacing() {
if (Cash >= 100000) {
    console.log("20 minutes rental has started");
} else {
    console.log("You are too broke don't even try.");
}
}