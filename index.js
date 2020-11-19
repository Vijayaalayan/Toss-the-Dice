var randomnumber1 = Math.random();
randomnumber1 = Math.floor(randomnumber1*6) + 1;
var randomnumber2 = Math.random();
randomnumber2 = Math.floor(randomnumber2*6) + 1;
var randomdice1 = "images/dice"+randomnumber1+".png";
var randomdice2 = "images/dice"+randomnumber2+".png";
document.querySelector(".img1").setAttribute("src",randomdice1);    
document.querySelector(".img2").setAttribute("src",randomdice2);
var result;
if(randomnumber1 > randomnumber2){
  result = "1";
}else if(randomnumber1 <randomnumber2){
  result = "2";
}else{
  result = "0";
}
if(result == 1){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}else if(result == 2){
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}