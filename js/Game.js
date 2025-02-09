import Phaser from 'phaser';
import MainMenuScene from './scenes/MainMenuScene.js';
import Mission1Scene from './scenes/Mission1Scene.js';
import StealthScene from './scenes/StealthScene.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [MainMenuScene, Mission1Scene, StealthScene],
    // Optional: Add physics or other configurations if needed
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }, // Adjust as needed
            debug: false // Set to true for debugging physics
        }
    }
};

// Initialize the game
const game = new Phaser.Game(config);

// Debugging: Log game initialization
console.log('Phaser game initialized');
