import ButtonUtils from '../utils/ButtonUtils.js';

export default class MainMenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenuScene' });
    }

    create() {
        // Background
        this.add.image(0, 0, 'mainmenu_bg').setOrigin(0);

        // Buttons
        ButtonUtils.createButton(this, 640, 300, 'Start Mission', () => this.scene.start('Mission1Scene'));
        ButtonUtils.createButton(this, 640, 400, 'Stealth Training', () => this.scene.start('StealthScene'));
        ButtonUtils.createButton(this, 640, 500, 'Options', () => console.log('Options clicked'));
    }
}
