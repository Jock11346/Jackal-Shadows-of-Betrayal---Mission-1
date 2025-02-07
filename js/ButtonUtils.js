/**
 * Creates an interactive button in a Phaser scene.
 * 
 * @param {Phaser.Scene} scene - The scene where the button will be added.
 * @param {string} text - The text displayed on the button.
 * @param {number} x - The x-coordinate of the button.
 * @param {number} y - The y-coordinate of the button.
 * @param {string} color - The color of the button text.
 * @param {function} callback - The function to call when the button is clicked.
 * @param {string} [hoverColor='#ff0'] - The color of the button text when hovered over.
 * @param {string} [fontSize='24px'] - The font size of the button text.
 * @returns {Phaser.GameObjects.Text} The created button object.
 */
function createButton(scene, text, x, y, color, callback, hoverColor = '#ff0', fontSize = '24px') {
    // Create the button text
    const button = scene.add.text(x, y, text, { fontSize, fill: color })
        .setOrigin(0.5, 0.5) // Center the text
        .setInteractive() // Make the text interactive
        .on('pointerdown', callback) // Call the callback on click
        .on('pointerover', () => button.setStyle({ fill: hoverColor })) // Change color on hover
        .on('pointerout', () => button.setStyle({ fill: color })); // Revert color on hover out

    return button; // Return the button object for further manipulation
}

// Export the function for use in other files
export { createButton };
