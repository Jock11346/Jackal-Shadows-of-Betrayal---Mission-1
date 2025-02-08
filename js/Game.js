import PreloadScene from './scenes/PreloadScene.js';
import MainMenuScene from './scenes/MainMenuScene.js';
import Mission1Scene from './scenes/Mission1Scene.js';
import StealthScene from './scenes/StealthScene.js';

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: { debug: false }
    },
    scene: [PreloadScene, MainMenuScene, Mission1Scene, StealthScene],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

const game = new Phaser.Game(config);

// Signal that the game has loaded (call this in PreloadScene when ready)
window.gameLoaded = true;
