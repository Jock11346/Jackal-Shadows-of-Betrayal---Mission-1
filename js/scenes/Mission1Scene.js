export default class Mission1Scene extends Phaser.Scene {
    constructor() {
        super({ key: 'Mission1Scene' });
    }

    preload() {
        this.load.image('facilityBackground', 'assets/images/facility.jpg');
    }

    create() {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'facilityBackground')
            .setOrigin(0.5, 0.5);

        this.add.text(16, 16, "Mission Objective: Decide the informant's fate", 
            { fontSize: '20px', fill: '#fff' });

        createButton(this, 'Spare Informant', 100, 400, '#00ff00', () => this.scene.start('StealthScene'));
        createButton(this, 'Kill Informant', 100, 450, '#ff0000', () => this.scene.start('StealthScene'));
    }
}
