function randomTarget(){
    return Math.floor(Math.random() * (19, 120)) + 1;
}

function randomGuess(){
    return Math.floor(Math.random() * (1, 12)) +1;
}

console.log(randomTarget());
console.log(randomGuess());