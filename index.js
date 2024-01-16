var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "dice" + randomNumber1 + ".png";
document.querySelector(".dice-1 img").setAttribute("src","images/"+randomImage1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice" + randomNumber2 + ".png";

document.querySelector(".dice-2 img").setAttribute("src","images/"+randomImage2);

if(randomImage1 > randomImage2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}

else if(randomImage1 === randomImage2){
    document.querySelector("h1").innerHTML = "Draw!!";
}

else{
    document.querySelector("h1").innerHTML = "PLayer 2 wins!";
}

