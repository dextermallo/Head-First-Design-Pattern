export abstract class Cheese {
    naming: string;
};

export class ReggianoCheese extends Cheese {
    constructor() {
        super();
        this.naming = 'Reggiano cheese';
    }
}

export class MozzarellaCheese extends Cheese {
    constructor() {
        super();
        this.naming = 'Mozzarella cheese';
    }
}