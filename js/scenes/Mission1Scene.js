import { createButton } from '../js/ButtonUtils.js';

export default class Mission1Scene extends Phaser.Scene {
    constructor() {
        super({ key: 'Mission1Scene' });
    }

    preload() {
        // Load images (all paths are lowercase and match GitHub)
        this.load.image('facilityBackground', 'assets/images/facility.jpg');
        this.load.image('informant', 'assets/images/informant.jpg');
        this.load.image('guard', 'assets/images/guard.jpg');
    }

    create() {
        // Add background image
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'facilityBackground')
            .setOrigin(0.5, 0.5);

        // Add informant and guard sprites
        this.add.image(200, 400, 'informant').setScale(0.5);
        this.add.image(600, 400, 'guard').setScale(0.5);

        // Display mission objective
        this.add.text(16, 16, "Mission Objective: Decide the informant's fate", 
            { fontSize: '20px', fill: '#fff' });

        // Create buttons for player choices
        createButton(this, 'Spare Informant', 100, 400, '#00ff00', () => {
            this.scene.start('StealthScene', { action: 'spare' });
        });

        createButton(this, 'Kill Informant', 100, 450, '#ff0000', () => {
            this.scene.start('StealthScene', { action: 'kill' });
        });
    }
}
