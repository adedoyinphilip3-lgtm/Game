// ===== STEP 1: Get one character moving on screen =====
// This is our starting point. We'll build up from here:
// Step 2: add a second hero
// Step 3: make them detect each other (interaction)
// Step 4: trigger "commotion" / fight state
// Step 5: add more heroes

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 500,
  backgroundColor: '#2d2d44',
  parent: 'game-container',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },   // no gravity, top-down world
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

let hero1;
let cursors;

function preload() {
  // For now we use a simple colored rectangle as a placeholder "sprite"
  // Later we'll replace this with real character art.
  this.load.image('hero_placeholder', 'https://labs.phaser.io/assets/sprites/phaser-dude.png');
}

function create() {
  // Create our first hero in the middle of the screen
  hero1 = this.physics.add.sprite(200, 250, 'hero_placeholder');
  hero1.setCollideWorldBounds(true); // can't walk off screen
  hero1.name = 'Hero One';

  // Set up arrow key controls
  cursors = this.input.keyboard.createCursorKeys();

  // Simple on-screen label
  this.add.text(10, 10, 'Hero World - Step 1: Move with arrow keys', {
    fontSize: '16px',
    fill: '#ffffff'
  });
}

function update() {
  const speed = 200;
  hero1.setVelocity(0);

  if (cursors.left.isDown) {
    hero1.setVelocityX(-speed);
  } else if (cursors.right.isDown) {
    hero1.setVelocityX(speed);
  }

  if (cursors.up.isDown) {
    hero1.setVelocityY(-speed);
  } else if (cursors.down.isDown) {
    hero1.setVelocityY(speed);
  }
  }
    
