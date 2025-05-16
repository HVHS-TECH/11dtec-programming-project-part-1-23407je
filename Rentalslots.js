/****************************
Rental Josh 16/05/25
****************************/
console.log("hello");


//variables
var PokerRent =(0);
var BlackJackRent =(0);
var SpinTheWheelRent =(0);
var RouleteRent =(0);
var CashSlotsRent =(0);
var HorseRacingRent =(0);
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
    clearInterval(earningInterval);

      earningInterval = setInterval(() => {
        money += 1;
        document.getElementById('Cash').textContent = `$${Cash}`;
      }, 1000)
} else {
    console.log("You are too broke don't even try.")
}
}