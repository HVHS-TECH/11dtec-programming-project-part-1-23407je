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