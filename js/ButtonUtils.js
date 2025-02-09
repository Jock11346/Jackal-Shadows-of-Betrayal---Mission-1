export function createButton(scene, text, x, y, color, callback) {
  const button = scene.add.text(x, y, text, {
    fontSize: '24px',
    fill: '#000',
    backgroundColor: color,
    padding: { x: 10, y: 5 },
    align: 'center'
  }).setOrigin(0.5)
    .setInteractive({ useHandCursor: true })
    .on('pointerup', callback)
    .on('pointerover', () => button.setStyle({ fill: '#ff0' }))
    .on('pointerout', () => button.setStyle({ fill: '#000' }));

  return button;
}

