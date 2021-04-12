import { Dough, Veggies, Cheese } from './index';
import { PizzaIngredientFactory } from '../interface/pizzaIngredientFactory'; 


export abstract class Pizza {

    name: string;
    dough: Dough;
    veggies: Veggies[];
    cheese: Cheese;

    abstract prepare(): void;

    bake() { 
        console.log(`[${this.name}]: baking...`);
    }

    cut() {
        console.log(`[${this.name}]: cutting...`);
    }

    box() {
        console.log(`[${this.name}]: boxing...`);
    }
}

export class CheesePizza extends Pizza {

    factory: PizzaIngredientFactory;

    constructor(factory: PizzaIngredientFactory) {
        super();
        this.factory = factory;
        this.name = 'Cheese pizza';
    }

    prepare() {

        this.dough = this.factory.createDough();
        this.veggies = this.factory.createVeggies();
        this.cheese = this.factory.createCheese();

        console.log(`
        Preparing ${this.name}:
         - dough: ${this.dough.naming},
         - veggies: ${this.veggies},
         - cheese: ${this.cheese.naming}
        `);
    }
}

export class VeggiePizza extends Pizza {
    factory: PizzaIngredientFactory;

    constructor(factory: PizzaIngredientFactory) {
        super();
        this.factory = factory;
        this.name = 'Veggie pizza';
    }

    prepare() {

        this.dough = this.factory.createDough();
        this.veggies = this.factory.createVeggies();
        this.cheese = this.factory.createCheese();

        console.log(`
        Preparing ${this.name}:
         - dough: ${this.dough.naming},
         - veggies: ${this.veggies},
         - cheese: ${this.cheese.naming}
        `);
    }
}
