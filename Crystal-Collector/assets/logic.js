// Function to create the random target
var randomT;

function randomTarget(){
    var tester = document.getElementById("tester");
    randomT = Math.floor(Math.random() * (120 - 19) + 19) + 1;
    // tester.replaceWith(randomT);
    tester.innerHTML=randomT;
}
randomTarget();

//Function to create the random guess
function randomGuess(){
    return Math.floor(Math.random() * (1, 12)) + 1;
}

//Function to reset the two boxes after a victory or defeat
function boxReset(){
    guessTotal = 0;
    secondTester.innerHTML=guessTotal;
    randomTarget();
}

//First button config
var firstButton = document.getElementById("firstButton");
firstButton = {value:randomGuess()};
//Second button config
var secondButton = document.getElementById("secondButton");
secondButton = {value:randomGuess()};
//Third button config
var thirdButton = document.getElementById("thirdButton");
thirdButton = {value:randomGuess()};
//Fourth button config
var fourthButton = document.getElementById("fourthButton");
fourthButton = {value:randomGuess()};
//Initial box 2 config
var guessTotal = 0;
var secondTester = document.getElementById("secondTester");
//Setting variables for WR and LR
var winRate = 0;
var lossRate = 0;

//Function to increase win rate
function increaseWinRate(){
    winRate = winRate + 1;                                  //Increase win rate by 1
    document.getElementById("win").innerHTML=winRate;                             //Display win rate
}

function increaseLossRate(){
    lossRate = lossRate + 1;
    document.getElementById("lose").innerHTML=lossRate;
}
//Config for the first button.
function oneBtn(){
    guessTotal = guessTotal + firstButton.value;                //Totaling the guess total
    secondTester.innerHTML=guessTotal;                          //Displaying the guess total
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

function twoBtn(){
    guessTotal = guessTotal + secondButton.value;
    secondTester.innerHTML=guessTotal;
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

function threeBtn(){
    guessTotal = guessTotal + thirdButton.value;
    secondTester.innerHTML=guessTotal;
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

function fourBtn(){
    guessTotal = guessTotal + fourthButton.value;
    secondTester.innerHTML=guessTotal;
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

console.log(winRate + " WR");
console.log(lossRate + " LR");

console.log(firstButton.value + " 1 btn value");
console.log(secondButton.value + " 2 btn value");
console.log(thirdButton.value + " 3 btn value");
console.log(fourthButton.value + " 4 btn value");
console.log(randomGuess());