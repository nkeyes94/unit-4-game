// Function to create the random target
function randomTarget(){
    var tester = document.getElementById("tester");
    var randomT = Math.floor(Math.random() * (120 - 19) + 19) + 1;
    tester.replaceWith(randomT);
}
randomTarget();
//Function to create the random guess
function randomGuess(){
    return Math.floor(Math.random() * (1, 12)) + 1;
}

var firstButton = document.getElementById("firstButton");
firstButton = {value:randomGuess()};

var secondButton = document.getElementById("secondButton");
secondButton = {value:randomGuess()};

var thirdButton = document.getElementById("thirdButton");
thirdButton = {value:randomGuess()};

var guessTotal = 0;
var secondTester = document.getElementById("secondBox");

function oneBtn(){
    guessTotal = guessTotal + firstButton.value;
    secondTester.innerHTML=guessTotal;
    console.log(guessTotal);
}

function twoBtn(){
    guessTotal = guessTotal + secondButton.value;
    secondTester.innerHTML=guessTotal;
    console.log(guessTotal);
}

function threeBtn(){
    guessTotal = guessTotal + thirdButton.value;
    secondTester.innerHTML=guessTotal;
    console.log(guessTotal);
}


console.log(firstButton.value + " 1 btn value");
console.log(secondButton.value + " 2 btn value");
console.log(thirdButton.value + " 3 btn value");
// console.log(randomTarget());
console.log(randomGuess());