export default class MainMenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenuScene' });
    }

    preload() {
        // Load images
        this.load.image('menuBackground', 'assets/images/background.jpg');
        this.load.image('logo', 'assets/images/logo.png');

        // Load audio
        this.load.audio('menuMusic', 'assets/audio/Dawn of the Apocalypse.mp3');
        this.load.audio('click', 'assets/audio/click.mp3');
    }

    create() {
        // Add background image
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'menuBackground')
            .setOrigin(0.5, 0.5);

        // Add logo
        this.add.image(this.cameras.main.centerX, 150, 'logo')
            .setOrigin(0.5, 0.5);

        // Play background music
        const menuMusic = this.sound.add('menuMusic', { loop: true });
        menuMusic.play();

        // Create buttons with click sound
        createButton(this, 'Start Game', this.cameras.main.centerX, 300, '#00ff00', () => {
            this.sound.play('click'); // Play click sound
            this.scene.start('Mission1Scene');
        });

        createButton(this, 'Quit', this.cameras.main.centerX, 400, '#ff0000', () => {
            this.sound.play('click'); // Play click sound
            if (confirm('Are you sure you want to quit?')) {
                window.location.href = 'https://example.com'; // Redirect to another page
            }
        });
    }
}
