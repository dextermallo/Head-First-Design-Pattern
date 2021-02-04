import { Beverage } from './beverage';
import { beverageSize } from './const';

export abstract class CondimentDecorator extends Beverage {
    abstract getDescription(): string;
}

export class Mocha extends CondimentDecorator {
    beverage: Beverage;
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }
    getDescription() {
        return `${this.beverage.getDescription()}, ${this.constructor.name}`;
    }

    cost() {
        let cost: number = this.beverage.cost();

        switch (this.beverage.getSize()) {
            case beverageSize.large:
                cost += .8;
            break;
            case beverageSize.medium:
                cost += .5;
            break;
            case beverageSize.small:
                cost += .3;
            break;
        }
        return cost;
    }
}

export class Whip extends CondimentDecorator {
    beverage: Beverage;
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }
    getDescription() {
        return `${this.beverage.getDescription()}, ${this.constructor.name}`;
    }

    cost() {
        let cost: number = this.beverage.cost();

        switch (this.beverage.getSize()) {
            case beverageSize.large:
                cost += .35;
            break;
            case beverageSize.medium:
                cost += .25;
            break;
            case beverageSize.small:
                cost += .15;
            break;
        }
        return cost;
    }
}