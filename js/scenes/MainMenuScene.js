import { createButton } from '../js/ButtonUtils.js';

export default class MainMenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenuScene' });
    }

    preload() {
        // Load images (all paths are lowercase and match GitHub)
        this.load.image('menuBackground', 'assets/images/background.jpg');
        this.load.image('logo', 'assets/images/logo.jpg');
    }

    create() {
        // Add background image
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'menuBackground')
            .setOrigin(0.5, 0.5);

        // Add game title
        this.add.text(this.cameras.main.centerX, 100, 'Jackal: Shadows of Betrayal – Mission 1', 
            { fontSize: '32px', fill: '#fff', fontFamily: 'Arial', fontWeight: 'bold' })
            .setOrigin(0.5, 0.5);

        // Add logo
        this.add.image(this.cameras.main.centerX, 200, 'logo')
            .setOrigin(0.5, 0.5)
            .setScale(0.5);

        // Create buttons
        createButton(this, 'Start Game', this.cameras.main.centerX, 300, '#00ff00', () => {
            this.scene.start('Mission1Scene');
        });

        createButton(this, 'Quit', this.cameras.main.centerX, 400, '#ff0000', () => {
            if (confirm('Are you sure you want to quit?')) {
                window.location.href = 'https://example.com';
            }
        });
    }
}
