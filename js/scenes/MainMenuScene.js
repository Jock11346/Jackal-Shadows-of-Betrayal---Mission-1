const mainMenuSceneJs = `
import { createButton } from '../js/ButtonUtils.js';
export default class MainMenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenuScene' });
    }
    preload() {
        this.load.image('menuBackground', 'assets/images/background.jpg');
        this.load.image('logo', 'assets/images/logo.jpg');
    }
    create() {
        this.add.image(400, 300, 'menuBackground').setOrigin(0.5, 0.5);
        this.add.text(400, 100, 'Jackal: Shadows of Betrayal – Mission 1', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
        createButton(this, 'Start Game', 400, 300, '#00ff00', () => { this.scene.start('Mission1Scene'); });
        createButton(this, 'Quit', 400, 400, '#ff0000', () => { if (confirm('Are you sure you want to quit?')) window.location.href = 'https://example.com'; });
    }
}
`;
