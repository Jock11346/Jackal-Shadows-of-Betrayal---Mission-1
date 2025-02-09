import Phaser from 'phaser';

export default class Mission1Scene extends Phaser.Scene {
  constructor() {
    super({ key: 'Mission1Scene' });
  }

  preload() {
    console.log('Mission1Scene preload started');
    // Load mission-specific assets here if needed
  }

  create() {
    console.log('Mission1Scene create started');
    this.add.text(400, 300, 'Mission 1 Scene', {
      fontSize: '32px',
      fill: '#fff'
    }).setOrigin(0.5);
  }
}
