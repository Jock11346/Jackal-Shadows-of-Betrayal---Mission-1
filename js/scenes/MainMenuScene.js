import Phaser from 'phaser';
import { createButton } from '../js/ButtonUtils.js';

export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainMenuScene' });
  }

  preload() {
    console.log('MainMenuScene preload started');
    // Load assets (paths are relative to index.html)
    this.load.image('menuBackground', 'assets/images/background.jpg');
    this.load.image('logo', 'assets/images/logo.jpg');

    this.load.on('complete', () => {
      console.log('MainMenuScene assets loaded');
    });

    this.load.on('loaderror', (file) => {
      console.error('Error loading asset:', file.key);
    });
  }

  create() {
    console.log('MainMenuScene create started');

    // Add background image
    const background = this.add.image(400, 300, 'menuBackground').setOrigin(0.5, 0.5);
    if (!background) {
      console.error('Background image not found!');
    }

    // Add game title text
    const titleText = this.add.text(400, 100, 'Jackal: Shadows of Betrayal – Mission 1', {
      fontSize: '32px',
      fill: '#fff',
      fontFamily: 'Arial, sans-serif'
    }).setOrigin(0.5);
    if (!titleText) {
      console.error('Title text not rendered!');
    }

    // Add Start Game button
    createButton(this, 'Start Game', 400, 300, '#00ff00', () => {
      console.log('Start Game button clicked');
      this.scene.start('Mission1Scene');
    });

    // Add Quit button
    createButton(this, 'Quit', 400, 400, '#ff0000', () => {
      console.log('Quit button clicked');
      if (confirm('Are you sure you want to quit?')) {
        window.location.href = 'https://example.com';
      }
    });

    console.log('MainMenuScene create completed');
  }
}
