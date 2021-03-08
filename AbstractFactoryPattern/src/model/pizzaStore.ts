import { Pizza, NYPizzaIngredientFactory, CHIPizzaIngredientFactory } from './index';
import { PizzaIngredientFactory } from '../interface/index';
import { CheesePizza, VeggiePizza } from './pizza';


export abstract class PizzaStore {

    factory: PizzaIngredientFactory;

    orderPizza(type: string): Pizza {
        let pizza: Pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }

    abstract createPizza(type: string): Pizza;
}

export class NYPizzaStore extends PizzaStore {

    constructor() {
        super();
        this.factory = new NYPizzaIngredientFactory();
    }

    createPizza(type: string): Pizza {
        let pizza: Pizza = null;
        
        if (type === 'cheese') {
            pizza = new CheesePizza(this.factory);
        } else if (type === 'veggie') {
            pizza = new VeggiePizza(this.factory);
        }
        return pizza;
    } 
}


export class CHIPizzaStore extends PizzaStore {

    constructor() {
        super();
        this.factory = new CHIPizzaIngredientFactory();
    }

    createPizza(type: string): Pizza {
        let pizza: Pizza = null;
        
        if (type === 'cheese') {
            pizza = new CheesePizza(this.factory);
        } else if (type === 'veggie') {
            pizza = new VeggiePizza(this.factory);
        }
        return pizza;
    } 
}