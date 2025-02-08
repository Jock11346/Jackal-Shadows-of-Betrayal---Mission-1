const stealthSceneJs = `
import { createButton } from '../js/ButtonUtils.js';
export default class StealthScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StealthScene' });
    }
    create() {
        this.add.text(20, 50, 'Stealth Mode Activated', { fontSize: '20px', fill: '#00ff00' });
        createButton(this, 'Return to Main Menu', 400, 500, '#ffffff', () => { this.scene.start('MainMenuScene'); });
    }
}
`;
