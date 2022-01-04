var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var reset = function(){
    playerHealth = 100;
    playerAttack = 10;
    enemyName = "Roborto";
    enemyHealth = 50;
    enemyAttack = 12;
    // You can also log multiple values at once like this
    console.log(playerName, playerAttack, playerHealth);
}


var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    enemyHealth = enemyHealth - playerAttack;
    console.log('enemy health: ' + enemyHealth);
    playerHealth = playerHealth - enemyAttack;
    console.log(playerHealth)
};

  
fight();

// check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
    reset()
} 
    else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
// put new code under this
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

// player health
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

// check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
} 
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}