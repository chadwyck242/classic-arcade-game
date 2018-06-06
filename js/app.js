// MDN JavaScript Reference
// Math.random() inclusive min and max example function:
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

// Enemies our player must avoid
var Enemy = function(sprite, x, y, speed) {

    // loads the sprite image
    this.sprite = 'images/enemy-bug.png';
    // sets location of Enemy sprite
    this.x = x;
    this.y = y;
    this.speed =  speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    dtRandom = dt * getRandomIntInclusive(1, 20);
    this.x = this.x + this.speed * dtRandom;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(sprite, x, y, speed) {
    // loads the sprite image
    this.sprite = 'images/char-cat-girl.png';
    // sets location of Player sprite
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update player position on the screen
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {

};

// draw the player on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Handle player controls
Player.prototype.handleInput = function() {

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
var enemy1 = new Enemy(this.sprite, -203, 60, 10);
var enemy2 = new Enemy(this.sprite, -101, 145, 10);
var enemy3 = new Enemy(this.sprite, -301, 230, 10);
// var enemy4 = new Enemy(this.sprite, -505, 130, 5);
// var enemy5 = new Enemy(this.sprite, -405, 60, 20);

allEnemies.push(enemy1, enemy2, enemy3);

// Place the player object in a variable called player
var player = new Player(this.sprite, 200, 400, 10);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
