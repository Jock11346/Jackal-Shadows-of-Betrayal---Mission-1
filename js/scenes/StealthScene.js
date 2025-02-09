import Phaser from 'phaser';

export default class StealthScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StealthScene' });
  }

  preload() {
    console.log('StealthScene preload started');
    // Load stealth-specific assets here if needed
  }

  create() {
    console.log('StealthScene create started');
    this.add.text(400, 300, 'Stealth Scene', {
      fontSize: '32px',
      fill: '#fff'
    }).setOrigin(0.5);
  }
}
