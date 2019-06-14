$(document).ready(function(){

// Function to create the random target
var randomT;

function randomTarget(){
    // var tester = document.getElementById("tester");
    var tester = $("#tester");
    randomT = Math.floor(Math.random() * (120 - 19) + 19) + 1;
    tester.html(randomT);
}
randomTarget();

//Function to create the random guess
function randomGuess(){
    return Math.floor(Math.random() * (1, 12)) + 1;
}

//Function to reset the two boxes after a victory or defeat
function boxReset(){
    guessTotal = 0;
    secondTester.html(guessTotal);
    randomTarget();
}

//First button config
var firstButton = $("#firstButton");
firstButton = {value:randomGuess()};
//Second button config
var secondButton = $("#secondButton");
secondButton = {value:randomGuess()};
//Third button config
var thirdButton = $("#thirdButton");
thirdButton = {value:randomGuess()};
//Fourth button config
var fourthButton = $("#fourthButton");
fourthButton = {value:randomGuess()};
//Initial box 2 config
var guessTotal = 0;
var secondTester = $("#secondTester");
//Setting variables for WR and LR
var winRate = 0;
var lossRate = 0;

//Function to increase win rate
function increaseWinRate(){
    winRate = winRate + 1;                                  //Increase win rate by 1
    $("#win").html(winRate);                             //Display win rate
}

function increaseLossRate(){
    lossRate = lossRate + 1;
    $("#lose").html(lossRate);
}
//Config for the first button.
function oneBtn(){
    guessTotal = guessTotal + firstButton.value;                //Totaling the guess total
    secondTester.html(guessTotal);                          //Displaying the guess total
    console.log(guessTotal);                                    //Logging the guess total

    if(guessTotal == randomT){                                  //If the guess total equals target...
        alert("victory");                                       //...alert...
        increaseWinRate();                                      //...Increase winrate...
        firstButton = {value:randomGuess()};                    //...Get a new value for the btn...
        boxReset();                                             //Reset the box
    }else if(guessTotal > randomT){                             //Else if the total > target...
        alert("defeat");                                        //...alert...
        increaseLossRate();                                     //...increase loss rate...
        firstButton = {value:randomGuess()};                    //...get a new value for the btn...
        boxReset();                                             //...reset the box
    }                                                           //This is repeated for btns 2 & 3
}
$("#firstGuess").click(oneBtn);

function twoBtn(){
    guessTotal = guessTotal + secondButton.value;
    secondTester.html(guessTotal);
    console.log(guessTotal);

    if(guessTotal == randomT){
        alert("victory");
        increaseWinRate();
        secondButton = {value:randomGuess()};
        boxReset();
    }else if(guessTotal > randomT){
        alert("defeat");
        increaseLossRate();
        secondButton = {value:randomGuess()};
        boxReset();
    }
}
$("#secondGuess").click(twoBtn);

function threeBtn(){
    guessTotal = guessTotal + thirdButton.value;
    secondTester.html(guessTotal);
    console.log(guessTotal);

    if(guessTotal == randomT){
        alert("victory");
        increaseWinRate();
        thirdButton = {value:randomGuess()};
        boxReset();
    }else if(guessTotal > randomT){
        alert("defeat");
        increaseLossRate();
        thirdButton = {value:randomGuess()};
        boxReset();
    }
}
$("#thirdGuess").click(threeBtn);

function fourBtn(){
    guessTotal = guessTotal + fourthButton.value;
    secondTester.html(guessTotal);
    console.log(guessTotal);

    if(guessTotal == randomT){
        alert("victory");
        increaseWinRate();
        fourthButton = {value:randomGuess()};
        boxReset();
    }else if(guessTotal > randomT){
        alert("defeat");
        increaseLossRate();
        fourthButton = {value:randomGuess()};
        boxReset();
    }
}
$("#fourthGuess").click(fourBtn);

console.log(winRate + " WR");
console.log(lossRate + " LR");

console.log(firstButton.value + " 1 btn value");
console.log(secondButton.value + " 2 btn value");
console.log(thirdButton.value + " 3 btn value");
console.log(fourthButton.value + " 4 btn value");
console.log(randomGuess());

});