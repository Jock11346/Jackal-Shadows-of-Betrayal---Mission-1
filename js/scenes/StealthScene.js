export default class StealthScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StealthScene' });
    }

    preload() {
        // Load assets for the stealth scene
        this.load.image('stealthBackground', 'assets/images/stealth.jpg');
    }

    create(data) {
        // Access data passed from Mission1Scene
        console.log(data.action); // 'spare' or 'kill'

        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'stealthBackground')
            .setOrigin(0.5, 0.5);

        this.add.text(16, 16, 'Stealth Mode: Avoid detection', 
            { fontSize: '20px', fill: '#fff' });
    }
}
