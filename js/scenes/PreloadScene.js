export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' });
    }

    preload() {
        // Display loading progress bar
        this.createProgressBar();

        // Load images
        this.loadImages();

        // Load audio
        this.loadAudio();

        // Load spritesheets or atlases (if any)
        this.loadSpritesheets();

        // Load other assets (e.g., JSON, fonts)
        this.loadMiscAssets();
    }

    create() {
        // Signal that the game has loaded
        window.gameLoaded = true;

        // Start the MainMenuScene
        this.scene.start('MainMenuScene');
    }

    createProgressBar() {
        const { width, height } = this.cameras.main;
        const progressBar = this.add.graphics();
        const progressBox = this.add.graphics();

        // Draw the progress bar background
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(width / 4, height / 2 - 30, width / 2, 50);

        // Update progress bar as assets load
        this.load.on('progress', (value) => {
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(width / 4 + 10, height / 2 - 20, (width / 2 - 20) * value, 30);
        });

        // Clean up when loading is complete
        this.load.on('complete', () => {
            progressBar.destroy();
            progressBox.destroy();
        });
    }

    loadImages() {
        // Load background images
        this.load.image('mainmenu_bg', 'assets/images/mainmenu_bg.webp');
        this.load.image('mission1_bg', 'assets/images/mission1_bg.webp');
        this.load.image('stealth_bg', 'assets/images/stealth_bg.webp');

        // Load character images
        this.load.image('jackal', 'assets/images/jackal.webp');
        this.load.image('raven', 'assets/images/raven.webp');

        // Load UI elements
        this.load.image('button', 'assets/images/button.webp');
    }

    loadAudio() {
        // Load sound effects
        this.load.audio('gunshot', ['assets/audio/gunshot.mp3', 'assets/audio/gunshot.ogg']);
        this.load.audio('footsteps', ['assets/audio/footsteps.mp3', 'assets/audio/footsteps.ogg']);

        // Load background music
        this.load.audio('main_theme', ['assets/audio/main_theme.mp3', 'assets/audio/main_theme.ogg']);
    }

    loadSpritesheets() {
        // Example: Load a spritesheet for animations
        this.load.spritesheet('jackal_idle', 'assets/spritesheets/jackal_idle.webp', {
            frameWidth: 64,
            frameHeight: 64
        });
    }

    loadMiscAssets() {
        // Example: Load JSON data or fonts
        this.load.json('mission_data', 'assets/data/mission1.json');
    }
}

