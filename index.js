var randomNumber1 = Math.random();
var x =  6*randomNumber1 + 1;
var diceNumber1=Math.floor(x);
var firstPlayerDice = "./images/dice" + diceNumber1 +".png";
document.querySelectorAll("img")[1].setAttribute( "src" , firstPlayerDice);


var randomNumber2 = Math.random();
var diceNumber2= Math.floor(randomNumber2*6) + 1;
var secondPlayerDice= "./images/dice"+diceNumber2+".png";
document.querySelectorAll("img")[2].setAttribute("src",secondPlayerDice);


function whoWins(){
    if(diceNumber1>diceNumber2){
        document.querySelector("h1").textContent="First Player Wins !";
    }
    else if(diceNumber1<diceNumber2){
        document.querySelector("h1").textContent="Second Player  Wins !";
    }
    else{
        document.querySelector("h1").textContent="It's a Draw !";
    }
}
whoWins();
document.getElementById("refreshButton").addEventListener("click", function() {location.reload()}); 
