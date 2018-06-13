// MDN JavaScript Reference
// Math.random() inclusive min and max example function:
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var winBox = document.querySelector(".win-text");

var winHTML = `<h3>You Made It!</h3>`;

// variables for my keypress events
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

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
    this.x = this.x + this.speed * dt;
};

// Draw the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class constructor
var Player = function(sprite, x, y) {
    // loads the sprite image
    this.sprite = 'images/char-cat-girl.png';
    // sets location of Player sprite
    this.x = x;
    this.y = y;
};

// Update player position on the screen
// Set player bounds within the canvas
// Parameter: dt, a time delta between ticks
Player.prototype.update = function() {
    if(rightPressed) {
        this.x += 50;
        rightPressed = false;
    }

    else if(leftPressed) {
        this.x -= 50;
        leftPressed = false;
    }

    if(upPressed) {
        this.y -= 85;
        upPressed = false;
    }

    else if(downPressed) {
        this.y += 85;
        downPressed = false;
    }

    if(this.x < 0) {
        this.x = 0;
    }

    else if(this.x > 401) {
        this.x = 401;
    }

    if(this.y < -50) {
        this.y = -50;
    }

    else if(this.y > 400) {
        this.y = 400;
    }

    player.playerWin();

};

// draw the player on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Handle player controls
// sets a boolean to check if a particular arrow keys was pressed
Player.prototype.handleInput = function(keys) {
    if(keys == 'right') {
        rightPressed = true;
    }
    else if(keys == 'left') {
        leftPressed = true;
    }
    if(keys == 'down') {
        downPressed = true;
    }
    else if(keys == 'up') {
        upPressed = true;
    }
};

// method that takes action when player wins
Player.prototype.playerWin = function() {
    if(this.y <= -25) {
        allEnemies = [];
        this.x = 200;
        this.y = 400;
        winBox.innerHTML = winHTML;
    } else {
        return;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
(function addEnemies() {
    var enemy = [];
    for(var i = 1; i <= 75; i++) {
        var enemySprite = Enemy.sprite;
        var xVal = getRandomIntInclusive(1, 50) * (-101) + 201;
        var yVal = getRandomIntInclusive(1, 3) * (72);
        var xVel = getRandomIntInclusive(2, 10) * 20;

        enemy[i] = new Enemy(enemySprite, xVal, yVal, xVel);
        allEnemies.push(enemy[i]);
    }
})();

// Place the player object in a variable called player
var player = new Player(this.sprite, 200, 400);

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
