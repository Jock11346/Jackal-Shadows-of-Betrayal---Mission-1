export default class StealthScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StealthScene' });
    }

    preload() {
        // Load assets for Stealth Scene
        this.load.image('stealthBackground', 'assets/images/stealth.jpg');
    }

    create(data) {
        // Add background image
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'stealthBackground')
            .setOrigin(0.5, 0.5);

        // Display stealth mode message
        this.add.text(16, 16, 'Stealth Mode: Avoid detection', 
            { fontSize: '20px', fill: '#fff' });

        // Handle player choice from Mission1Scene
        if (data.action === 'spare') {
            this.add.text(16, 50, 'You chose to spare the informant.', 
                { fontSize: '20px', fill: '#00ff00' });
            // Add logic for sparing the informant
        } else if (data.action === 'kill') {
            this.add.text(16, 50, 'You chose to kill the informant.', 
                { fontSize: '20px', fill: '#ff0000' });
            // Add logic for killing the informant
        }

        // Add a button to return to the main menu
        createButton(this, 'Return to Main Menu', 300, 500, '#ffffff', () => {
            this.scene.start('MainMenuScene');
        });
    }
}
