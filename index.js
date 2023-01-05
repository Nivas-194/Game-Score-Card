let num1 = 0;
let num2 = 0;
const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");

function addh1(){
    homeScore.textContent = ++num1;
}
function addg1(){
    guestScore.textContent = ++num2;
}
function addh2(){
    homeScore.textContent = num1= num1+2;
}
function addg2(){
    
    guestScore.textContent = num2= num2+2;
}
function addh3(){
    homeScore.textContent = num1= num1+3;
}
function addg3(){
    guestScore.textContent = num2= num2+3;
}

