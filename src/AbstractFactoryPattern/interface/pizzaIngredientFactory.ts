import { Dough, Cheese, Veggies } from '../model/index';

export interface PizzaIngredientFactory {
    createDough(): Dough;
    createCheese(): Cheese;
    createVeggies(): Veggies[];
}