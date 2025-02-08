const gameJs = `
import MainMenuScene from '../scenes/MainMenuScene.js';
import Mission1Scene from '../scenes/Mission1Scene.js';
import StealthScene from '../scenes/StealthScene.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [MainMenuScene, Mission1Scene, StealthScene]
};

const game = new Phaser.Game(config);
`;

// styles.css
const stylesCss = `
body {
    margin: 0;
    padding: 0;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: Arial, sans-serif;
    animation: backgroundFade 5s infinite alternate;
}
@keyframes backgroundFade {
    0% { background-color: #000; }
    50% { background-color: #111; }
    100% { background-color: #000; }
}
.button {
    display: inline-block;
    padding: 15px 30px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    background: linear-gradient(45deg, #ff0000, #8b0000);
    border: 3px solid #fff;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}
.button:hover {
    background: linear-gradient(45deg, #8b0000, #ff0000);
    transform: scale(1.05);
}
`;
