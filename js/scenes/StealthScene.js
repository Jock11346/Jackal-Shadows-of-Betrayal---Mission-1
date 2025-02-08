export default class StealthScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StealthScene' });
    }

    preload() {
        // Load images
        this.load.image('container', 'assets/images/container.png');
        this.load.image('jackal', 'assets/images/jackal.png');

        // Load audio
        this.load.audio('alert', 'assets/audio/alart.mp3');
        this.load.audio('loudGunshot', 'assets/audio/loudgunshot.mp3');
    }

    create(data) {
        // Add background image (if needed)
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'facilityBackground')
            .setOrigin(0.5, 0.5);

        // Add player sprite
        const player = this.add.image(100, 400, 'jackal').setScale(0.5);

        // Handle player choice from Mission1Scene
        if (data.action === 'spare') {
            this.add.text(16, 50, 'You chose to spare the informant.', 
                { fontSize: '20px', fill: '#00ff00' });
            this.sound.play('alert'); // Play alert sound
        } else if (data.action === 'kill') {
            this.add.text(16, 50, 'You chose to kill the informant.', 
                { fontSize: '20px', fill: '#ff0000' });
            this.sound.play('loudGunshot'); // Play loud gunshot sound
        }

        // Add a button to return to the main menu
        createButton(this, 'Return to Main Menu', 300, 500, '#ffffff', () => {
            this.scene.start('MainMenuScene');
        });
    }
}
