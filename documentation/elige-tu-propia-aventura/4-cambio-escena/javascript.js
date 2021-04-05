class Escena extends Phaser.Scene {
    constructor() {
        super({
            key: 'sceneA'
        });
    }

    preload() {
        //this.load.baseURL = '/curso/phaser/ex/elije-tu-propia-aventura/';
        resize();
        window.addEventListener('resize', resize);
        this.load.image('fondo', '../img/espacio.jpg');
    }

    create() {
        this.add.sprite(480, 320, 'fondo');

        const opcionNave = this.add.zone(140, 10, 450, 410);
        opcionNave.setOrigin(0);
        opcionNave.setName('nave');
        opcionNave.setInteractive();
        opcionNave.once('pointerdown', () => this.opcionPulsada(opcionNave));
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcionNave);


        const opcionMundo = this.add.zone(590, 240, 370, 410);
        opcionMundo.setOrigin(0);
        opcionMundo.setName('tierra');
        opcionMundo.setInteractive();
        opcionMundo.once('pointerdown', () => this.opcionPulsada(opcionMundo));

        this.add.graphics().lineStyle(2, 0x00ff00).strokeRectShape(opcionMundo);
    }

    opcionPulsada(opcion) {
        if (opcion.name === 'nave') {
            this.scene.start('naveScene');
        } else {
            this.scene.start('homeScene');
        }
    }
}

class EscenaNave extends Phaser.Scene {

    constructor() {
        super({
            key: 'naveScene'
        });
    }

    preload() {
        //this.load.baseURL = '/curso/phaser/ex/elije-tu-propia-aventura/';
        this.load.image('nave', '../img/nave.jpg');
    }

    create() {
        this.add.sprite(480, 320, 'nave');
    }
}

class EscenaHome extends Phaser.Scene {

    constructor() {
        super({
            key: 'homeScene'
        });
    }

    preload() {
        //this.load.baseURL = '/curso/phaser/ex/elije-tu-propia-aventura/';
        this.load.image('home', '../img/home.jpg');
    }

    create() {
        this.add.sprite(480, 320, 'home');
    }
}

function resize() {
    const canvas = document.querySelector("canvas");
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
}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 960,
    height: 640,
    scene: [Escena, EscenaNave, EscenaHome],
};

new Phaser.Game(config);