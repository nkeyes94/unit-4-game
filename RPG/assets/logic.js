//Create obj for player
var player = {
    health: 10,
    stamina: 10,
    experience: 0,
    defense: 3,
    weapon: "none",
    spell: "none"
}

//Create an obj for the enemy (one enemy to test)
var enemy = {
    health: 8,
    stamina: 8,
    experience: 0,
    defense: 2,
    weapon: "none",
    spell: "none"
}

//Create a weapon
var sword = {
    damage: 3,
    staminaUse: 1,
}

var spear = {
    damage: 4,
    staminaUse: 3,
}

var fireBall = {
    damage: 5,
    staminaUse: 4,
}

//hard coding weapons for testing
player.weapon=sword;
enemy.weapon=sword;

// var rad = document.createElement("INPUT");
// rad.setAttribute("type", "radio");
// rad.
// document.body.appendChild(rad);

function playerAttack(){
    var weaponDamage = player.weapon.damage;
    var enemyHealth = enemy.health - weaponDamage;
    console.log("enemy health: "+ enemyHealth);
}
playerAttack();

function enemyAttack(){
    var weaponDamage = enemy.weapon.damage;
    var playerHealth = player.health - weaponDamage;
    console.log("player health: "+ playerHealth);
}
enemyAttack();

function playerDefend(){
    var weaponDamage = enemy.weapon.damage;
    var defense = player.defense;
    var mitigation = weaponDamage - defense;
    return mitigation;
}

function enemyDefend(){
    var weaponDamage = player.weapon.damage;
    var defense = enemy.defense;
    var mitigation = weaponDamage - defense;
    return mitigation; 
}

function enemySelect(){
    var choiceArray = [enemyDefend(), enemyAttack()];
    var randomNumber = Math.floor(Math.random() * (1, choiceArray.length));
    var choice = choiceArray[randomNumber];
    return choice;
}

function bothAttack(){
    var playerHealth = player.health;
    var playerWeapon = player.weapon.damage;
    var enemyHealth = enemy.health;
    var enemyWeapon = enemy.weapon.damage; 
    var mitigation = playerWeapon - enemyWeapon;
    playerHealth - mitigation;
    enemyHealth - mitigation;
    return playerHealth, enemyHealth;
}

while(player.health > 0 || enemy.health > 0){
    //allow player to choose attack, defend, spell etc. 
    var playerSelection = window.confirm("Would you like to attack? OK to attack, Cancel to defend");
    if(playerSelection === true){
        alert("You've elected to attack!");
        playerAttack();
    }else{
        alert("You've elected to defend!");
        playerDefend();
    }
    //allow enemy to make selection
    enemySelect();

    if(enemySelect() = enemyDefend() && playerSelection === false){
        alert("Both parties defending! No damage done");
    }else if(enemySelect() = enemyAttack() && playerSelection === true){
        alert("Both parties attacking! Reduced damage!")
        bothAttack();
    }else if(enemySelect() = enemyAttack() && playerSelection === false){
        alert("You've defended while the enemy attacks!")
        playerDefend();
    }else if(enemySelect() = enemyDefend() && playerSelection === true){
        alert("You've attacked while the enemy defends!")
        enemyDefend();
    }

    console.log(player.health);
    console.log(enemy.health);
    //take points away until one dies

    //award experience to player if they win
}