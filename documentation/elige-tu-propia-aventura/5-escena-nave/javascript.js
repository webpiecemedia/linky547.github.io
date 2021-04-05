class Escena extends Phaser.Scene {
    constructor() {
        super({key: 'sceneA'});
    }

    preload() {
        //this.load.baseURL = '/curso/phaser/ex/elije-tu-propia-aventura/';
        resize();
        window.addEventListener('resize', resize);
        this.load.image('fondo', '../img/espacio.jpg');
    }

    create() {
        this.add.sprite(480, 320, 'fondo');

        const opcionNave = this.add.zone(140, 10, 440, 400);
        opcionNave.setOrigin(0);
        opcionNave.setName('nave');
        opcionNave.setInteractive();
        opcionNave.once('pointerdown', () => this.opcionPulsada(opcionNave));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcionNave);

        const opcionMundo = this.add.zone(590, 240, 370, 410);
        opcionMundo.setOrigin(0);
        opcionMundo.setName('tierra');
        opcionMundo.setInteractive();
        opcionMundo.once('pointerdown', () => this.opcionPulsada(opcionMundo));

        //this.add.graphics().lineStyle(2, 0x00ff00).strokeRectShape(opcionMundo);
    }

    opcionPulsada(opcion) {
        console.log("Opción:" + opcion.name)
        if (opcion.name === 'nave') {
            this.scene.start('naveScene');
        } else {
            this.scene.start('homeScene');
        }
    }
}

class EscenaNave extends Phaser.Scene {

    constructor() {
        super({key: 'naveScene'});
    }

    preload() {
        //this.load.baseURL = '/curso/phaser/ex/elije-tu-propia-aventura/';
        this.load.image('nave', '../img/nave.jpg');
    }

    create() {
        this.add.sprite(480, 320, 'nave');

        const opcionNave = this.add.zone(150, 170, 250, 370);
        opcionNave.setOrigin(0);
        opcionNave.setName('boss');
        opcionNave.setInteractive();
        opcionNave.once('pointerdown', () => this.opcionPulsada(opcionNave));
        //


        const opcionMundo = this.add.zone(530, 170, 250, 370);
        opcionMundo.setOrigin(0);
        opcionMundo.setName('home');
        opcionMundo.setInteractive();
        opcionMundo.once('pointerdown', () => this.opcionPulsada(opcionMundo));
        //  this.add.graphics().lineStyle(2, 0x00ff00).strokeRectShape(opcionMundo);
    }

    opcionPulsada(opcion) {
        if (opcion.name === 'boss') {
            this.scene.start('monstruoScene');
        } else {
            this.scene.start('homeScene');
        }
    }
}

class EscenaHome extends Phaser.Scene {

    constructor() {
        super({key: 'homeScene'});
    }

    preload() {
        //this.load.baseURL = '/curso/phaser/ex/elije-tu-propia-aventura/';
        this.load.image('home', '../img/home.jpg');
    }

    create() {
        this.add.sprite(480, 320, 'home');
    }
}

class EscenaMonstruo extends Phaser.Scene {

    constructor() {
        super({key: 'monstruoScene'});
    }

    preload() {
        //this.load.baseURL = '/curso/phaser/ex/elije-tu-propia-aventura/';
        this.load.image('monstruo', '../img/monstruo.jpg');
    }

    create() {
        this.add.sprite(480, 320, 'monstruo');
    }
}

function resize() {
    const canvas = document.querySelector("canvas");
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    canvas.style.width = windowWidth + 'px';
    canvas.style.height = windowHeight + 'px';
}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 960,
    height: 640,
    scene: [Escena, EscenaNave, EscenaHome, EscenaMonstruo],
};

new Phaser.Game(config);