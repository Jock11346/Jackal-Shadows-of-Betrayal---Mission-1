export function createButton(scene, text, x, y, color, callback, hoverColor = '#ff0', fontSize = '24px') {
    const button = scene.add.text(x, y, text, { fontSize, fill: color })
        .setOrigin(0.5, 0.5)
        .setInteractive()
        .on('pointerdown', callback)
        .on('pointerover', () => button.setStyle({ fill: hoverColor }))
        .on('pointerout', () => button.setStyle({ fill: color }));

    return button;
}
