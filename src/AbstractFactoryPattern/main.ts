import { NYPizzaStore, CHIPizzaStore, PizzaStore } from './model/index';

module.exports.main = function() {

    let pizzaStore: PizzaStore;
        
    pizzaStore = new NYPizzaStore();
    pizzaStore.orderPizza('cheese');
    pizzaStore.orderPizza('veggie');

    pizzaStore = new CHIPizzaStore();
    pizzaStore.orderPizza('cheese');
    pizzaStore.orderPizza('veggie');

}