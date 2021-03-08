export abstract class Veggies {
    naming: string;
};

export class Garlic extends Veggies {
    constructor() {
        super();
        this.naming = 'garlic';
    }
}

export class Onion extends Veggies {
    constructor() {
        super();
        this.naming = 'onion';
    }
}