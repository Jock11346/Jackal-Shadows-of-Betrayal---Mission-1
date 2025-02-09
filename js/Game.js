import Phaser from 'phaser';
import MainMenuScene from '../scenes/MainMenuScene.js';
import Mission1Scene from '../scenes/Mission1Scene.js';
import StealthScene from '../scenes/StealthScene.js';

const config = {
  type: Phaser.AUTO,
  parent: 'game-container', // Injects the canvas into the #game-container div
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

// Initialize the Phaser game
const game = new Phaser.Game(config);
console.log('Phaser game initialized');
