module.exports.main = function() {
    let duck = new MallardDuck();
    let turkey = new WildTurkey();
    let turkeyAdopter = new TurkeyAdopter(turkey);

    duck.fly();
    duck.quack();

    turkey.fly();
    turkey.gobble();

    turkeyAdopter.fly();
    turkeyAdopter.quack();
}

interface Duck {
    quack(): void;
    fly(): void;
}

interface Turkey {
    gobble(): void;
    fly(): void;
}

class MallardDuck implements Duck {
    quack() {
        console.log('quack');
    }
    fly() {
        console.log('flying');
    }
}

class WildTurkey implements Turkey {
    gobble() {
        console.log('gobble');
    }

    fly() {
        console.log('flying');
    }
}

class TurkeyAdopter implements Duck {
    turkey: Turkey
    constructor(turkey: Turkey) {
        this.turkey = turkey;
    }

    quack() {
        this.turkey.gobble();
    }

    fly() {
        for (let i = 0; i < 3; ++i) {
            this.turkey.fly();
        }
    }
}