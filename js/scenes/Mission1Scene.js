import Phaser from 'phaser';

export default class Mission1Scene extends Phaser.Scene {
  constructor() {
    super({ key: 'Mission1Scene' });
  }

  preload() {
    console.log('Mission1Scene preload started');
    // Load mission-specific assets here if needed
    // Example: this.load.image('missionBackground', 'assets/images/mission1_background.jpg');
  }

  create() {
    console.log('Mission1Scene create started');
    // Display some text to confirm the scene is active
    this.add.text(400, 300, 'Mission 1 Scene', {
      fontSize: '32px',
      fill: '#fff',
      fontFamily: 'Arial, sans-serif'
    }).setOrigin(0.5);
  }
}
