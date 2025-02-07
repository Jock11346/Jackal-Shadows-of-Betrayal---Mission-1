export default class Mission1Scene extends Phaser.Scene {
    constructor() {
        super({ key: 'Mission1Scene' });
    }

    preload() {
        // Load assets for Mission 1
        this.load.image('facilityBackground', 'assets/images/facility.jpg');
    }

    create() {
        // Add background image
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'facilityBackground')
            .setOrigin(0.5, 0.5);

        // Display mission objective
        this.add.text(16, 16, "Mission Objective: Decide the informant's fate", 
            { fontSize: '20px', fill: '#fff' });

        // Create buttons for player choices
        createButton(this, 'Spare Informant', 100, 400, '#00ff00', () => {
            this.scene.start('StealthScene', { action: 'spare' }); // Pass data to StealthScene
        });

        createButton(this, 'Kill Informant', 100, 450, '#ff0000', () => {
            this.scene.start('StealthScene', { action: 'kill' }); // Pass data to StealthScene
        });
    }
}
