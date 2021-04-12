import { beverageSize, Mocha, Whip, HouseBlend, Espresso, Beverage } from './model/index';

module.exports.main = function() {
    let beverage: Beverage = new Espresso();
    beverage.size = beverageSize.small;
    beverage.showDescWithPrice();

    let beverage2: Beverage = new HouseBlend();
    beverage2.size = beverageSize.large;
    beverage2 = new Mocha(beverage2);
    beverage2 = new Mocha(beverage2);
    beverage2 = new Whip(beverage2);
    beverage2.showDescWithPrice();
}