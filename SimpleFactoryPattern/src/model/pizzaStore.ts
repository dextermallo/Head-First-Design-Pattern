import { Pizza } from './index';
import { SimplePizzaFactory } from './simplePizzaFactory';

export class PizzaStore {
    factory: SimplePizzaFactory;

    constructor() {
        this.factory = new SimplePizzaFactory();
    }

    orderPizza(type: string): Pizza {
        let pizza = this.factory.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}