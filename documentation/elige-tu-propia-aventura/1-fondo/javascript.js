class Escena extends Phaser.Scene {

    preload() {
        //this.load.baseURL = '/curso/phaser/ex/elije-tu-propia-aventura/';
        resize();
        window.addEventListener('resize', resize);
        this.load.image('fondo', '../img/espacio.jpg');
    };

    create() {
        this.add.sprite(480, 320, 'fondo');
    };
}

function resize() {
    const canvas = document.querySelector('canvas');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const windowRatio = windowWidth / windowHeight;
    const gameRatio = config.width / config.height;
    if (windowRatio < gameRatio) {
        canvas.style.width = '${windowWidth}px';
        canvas.style.height = '${windowWidth / gameRatio}px';
    } else {
        canvas.style.width = '${windowHeight * gameRatio}px';
        canvas.style.height = '${windowHeight}px';
    }
};

const config = {
    type: Phaser.AUTO,
    width: 960,
    height: 640,
    scene: Escena,
};

new Phaser.Game(config);