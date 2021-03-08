export abstract class Pizza {
    name: string;
    dough: string;
    cheese: string;
    veggie: string[];

    prepare() {
        console.log(`
        preparing ${this.name}:
         - dough: ${this.dough},
         - cheese: ${this.cheese},
         - veggies: ${this.veggie}.
        `)
    }

    bake() {
        console.log(`${this.name} is baking...`);
    }

    cut() {
        console.log(`${this.name} is cutting...`);
    }

    box() {
        console.log(`${this.name} is boxing...`);
    }

}

export class CheesePizza extends Pizza {
    constructor() {
        super();
        this.name = 'Cheese Pizza';
        this.dough = 'Cheese dough';
        this.cheese = 'Cheese Cheese';
        this.veggie = ['Cheese Veggie'];
    }
}

export class VeggiePizza extends Pizza {
    constructor() {
        super();
        this.name = 'Veggie Pizza';
        this.dough = 'Veggie dough';
        this.cheese = 'Veggie Cheese';
        this.veggie = ['Veggie Veggie'];
    }
}