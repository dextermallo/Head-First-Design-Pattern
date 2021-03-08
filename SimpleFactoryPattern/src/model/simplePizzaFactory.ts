import { CheesePizza, Pizza, VeggiePizza } from "./pizza";

export class SimplePizzaFactory {

    createPizza(type: string): Pizza {
        let pizza: Pizza = null;
        if (type === 'cheese') {
            pizza = new CheesePizza();   
        } else if (type === 'veggie') {
            pizza = new VeggiePizza();
        }
        return pizza;
    }

}