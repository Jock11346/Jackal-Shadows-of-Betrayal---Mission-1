export default class Mission1Scene extends Phaser.Scene {
    constructor() {
        super({ key: 'Mission1Scene' });
    }

    preload() {
        // Load images
        this.load.image('facilityBackground', 'assets/images/facility.png');
        this.load.image('informant', 'assets/images/informant.png');
        this.load.image('guard', 'assets/images/guard.png');

        // Load audio
        this.load.audio('missionMusic', 'assets/audio/Assassin.mp3');
        this.load.audio('footsteps', 'assets/audio/footsteps.mp3');
        this.load.audio('silencedGunshot', 'assets/audio/silencedGunshot.mp3');
    }

    create() {
        // Add background image
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'facilityBackground')
            .setOrigin(0.5, 0.5);

        // Add informant and guard sprites
        this.add.image(200, 400, 'informant').setScale(0.5);
        this.add.image(600, 400, 'guard').setScale(0.5);

        // Play background music
        const missionMusic = this.sound.add('missionMusic', { loop: true });
        missionMusic.play();

        // Display mission objective
        this.add.text(16, 16, "Mission Objective: Decide the informant's fate", 
            { fontSize: '20px', fill: '#fff' });

        // Create buttons for player choices
        createButton(this, 'Spare Informant', 100, 400, '#00ff00', () => {
            this.sound.play('footsteps'); // Play footsteps sound
            this.scene.start('StealthScene', { action: 'spare' });
        });

        createButton(this, 'Kill Informant', 100, 450, '#ff0000', () => {
            this.sound.play('silencedGunshot'); // Play silenced gunshot sound
            this.scene.start('StealthScene', { action: 'kill' });
        });
    }
}
