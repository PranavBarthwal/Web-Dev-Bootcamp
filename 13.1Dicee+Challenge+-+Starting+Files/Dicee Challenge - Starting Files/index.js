// for first dice
var randomNumber1 = Math.random();

randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1);
randomNumber1 = randomNumber1 + 1;

var randomSrc1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelector(".img1").setAttribute("src", randomSrc1);


// for second dice
var randomNumber2 = Math.random();

randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2);
randomNumber2 = randomNumber2 + 1;

var randomSrc2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelector(".img2").setAttribute("src", randomSrc2);


// finding winner
 if(randomNumber1===randomNumber2){
    document.querySelector("h1").textContent = "Tieeee";
 }
 else if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins";

 }
 else{
    document.querySelector("h1").textContent = "Player 2 Wins";
 }