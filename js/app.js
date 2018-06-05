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
    if (allEnemies.length <= 3) {
        allEnemies.push({
            sprite: sprite,
            x: getRandomInt(3) * 101 - canvas.width,
            y: canvas.height - getRandomIntInclusive(3, 5) * 171,
            speed: x + getRandomIntInclusive(1, 5) * 10 * dt
        });
    }
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

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
// Place the player object in a variable called player
var player = new Player(this.sprite, 100, 100, 10);
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
