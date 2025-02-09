import Phaser from 'phaser';
import MainMenuScene from '../scenes/MainMenuScene.js';
import Mission1Scene from '../scenes/Mission1Scene.js';
import StealthScene from '../scenes/StealthScene.js';

const config = {
  type: Phaser.AUTO,
  parent: 'game-container', // Ensures the canvas is added to this div
  width: 800,
  height: 600,
  scene: [MainMenuScene, Mission1Scene, StealthScene],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  }
};

// Initialize the game
const game = new Phaser.Game(config);

// Debugging: Log game initialization
console.log('Phaser game initialized');
