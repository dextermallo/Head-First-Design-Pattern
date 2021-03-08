import { PizzaStore } from "./model"


module.exports.main = function() {

    let pizzaStore = new PizzaStore();
    pizzaStore.orderPizza('cheese');
    pizzaStore.orderPizza('veggie');
}