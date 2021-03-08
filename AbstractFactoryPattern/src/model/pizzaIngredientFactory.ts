import { PizzaIngredientFactory } from '../interface/index';
import { ReggianoCheese, MozzarellaCheese, ThickCrustDough, Onion, ThinCrustDough, Garlic } from './index';

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
    createDough() {
        return new ThinCrustDough();
    }

    createCheese() {
        return new ReggianoCheese();
    }

    createVeggies() {
        return [new Garlic()];
    }
}


export class CHIPizzaIngredientFactory implements PizzaIngredientFactory {
    createDough() {
        return new ThickCrustDough();
    }

    createCheese() {
        return new MozzarellaCheese();
    }

    createVeggies() {
        return [new Onion()];
    }
}