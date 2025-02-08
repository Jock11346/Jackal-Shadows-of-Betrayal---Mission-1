export default class MainMenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenuScene' });
    }

    preload() {
        this.load.image('menuBackground', 'assets/images/menu.jpg');
    }

    create() {
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'menuBackground')
            .setOrigin(0.5, 0.5);

        this.add.text(300, 100, 'Jackal: Shadows of Betrayal', { fontSize: '32px', fill: '#fff' });

        createButton(this, 'Start Game', 300, 300, '#00ff00', () => this.scene.start('Mission1Scene'));
        createButton(this, 'Quit', 300, 400, '#ff0000', () => window.close());
    }
}
