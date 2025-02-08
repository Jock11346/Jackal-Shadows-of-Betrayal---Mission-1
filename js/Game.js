import MainMenuScene from './scenes/MainMenuScene.js';
import Mission1Scene from './scenes/Mission1Scene.js';
import StealthScene from './scenes/StealthScene.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [MainMenuScene, Mission1Scene, StealthScene]
};

const game = new Phaser.Game(config);
