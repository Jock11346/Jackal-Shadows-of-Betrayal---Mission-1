const mission1SceneJs = `
import { createButton } from '../js/ButtonUtils.js';
export default class Mission1Scene extends Phaser.Scene {
    constructor() {
        super({ key: 'Mission1Scene' });
    }
    preload() {
        this.load.image('facilityBackground', 'assets/images/facility.png');
    }
    create() {
        this.add.image(400, 300, 'facilityBackground').setOrigin(0.5);
        this.add.text(20, 20, 'Mission: Find the Informant', { fontSize: '18px', fill: '#fff' });
        createButton(this, 'Proceed', 400, 500, '#ffffff', () => { this.scene.start('StealthScene'); });
    }
}
`;
