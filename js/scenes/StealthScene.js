export default class StealthScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StealthScene' });
    }

    preload() {
        // Load assets for Stealth Scene
        this.load.image('container', 'assets/images/container.jpg');
        this.load.image('jackal', 'assets/images/jackal.jpg');
    }

    create(data) {
        // Add background image
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'facilityBackground')
            .setOrigin(0.5, 0.5);

        // Add player sprite
        const player = this.add.image(100, 400, 'jackal').setScale(0.5);

        // Handle player choice from Mission1Scene
        if (data.action === 'spare') {
            this.add.text(16, 50, 'You chose to spare the informant.', 
                { fontSize: '20px', fill: '#00ff00' });
        } else if (data.action === 'kill') {
            this.add.text(16, 50, 'You chose to kill the informant.', 
                { fontSize: '20px', fill: '#ff0000' });
        }

        // Add a button to return to the main menu
        createButton(this, 'Return to Main Menu', 300, 500, '#ffffff', () => {
            this.scene.start('MainMenuScene');
        });
    }
}
