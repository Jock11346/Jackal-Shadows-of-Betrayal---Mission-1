export default class Mission1Scene extends Phaser.Scene {
    constructor() {
        super({ key: 'Mission1Scene' });
    }

    preload() {
        // Load mission-specific assets
        this.load.image('mission1_bg', 'assets/images/environments/mission1_bg.webp');
        this.load.audio('gunshot', ['assets/audio/gunshot.mp3', 'assets/audio/gunshot.ogg']);
    }

    create() {
        // Setup world
        this.add.image(0, 0, 'mission1_bg').setOrigin(0);
        this.player = this.physics.add.sprite(100, 500, 'jackal');

        // Input
        this.cursors = this.input.keyboard.createCursorKeys();
        this.input.on('pointerdown', () => this.fireShot());
    }

    update() {
        // Player movement
        if (this.cursors.left.isDown) this.player.setVelocityX(-160);
        else if (this.cursors.right.isDown) this.player.setVelocityX(160);
        else this.player.setVelocityX(0);
    }

    fireShot() {
        this.sound.play('gunshot');
        // Add bullet logic here
    }
}
