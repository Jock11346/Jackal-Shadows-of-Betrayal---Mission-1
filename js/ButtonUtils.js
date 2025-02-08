export default class ButtonUtils {
    static createButton(scene, x, y, text, onClick) {
        const btn = scene.add.text(x, y, text, {
            font: '24px Arial',
            fill: '#ffffff',
            backgroundColor: '#333333',
            padding: { x: 20, y: 10 },
            borderRadius: 5
        })
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true })
        .on('pointerover', () => btn.setAlpha(0.8))
        .on('pointerout', () => btn.setAlpha(1))
        .on('pointerdown', onClick);

        // Accessibility
        btn.setAttribute('role', 'button');
        btn.setAttribute('aria-label', text);
        
        return btn;
    }
}
