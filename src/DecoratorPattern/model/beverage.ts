import { beverageSize } from './const';

export abstract class Beverage {
    description: string;
    size: beverageSize;

    getDescription() {
        return this.description;
    };

    getSize() {
        return this.size;
    }

    showDescWithPrice() {
        console.log(`${this.getDescription()}: ${this.cost()}`);
    }

    constructor() {
        this.description = this.constructor.name;
    }

    abstract cost(): number;
}



export class Espresso extends Beverage {
    cost() {
        switch (this.size) {
            case beverageSize.large:
                return 4;
            case beverageSize.medium:
                return 3;
            case beverageSize.small:
                return 2;
        }
    }
}

export class HouseBlend extends Beverage {
    cost() {
        switch (this.size) {
            case beverageSize.large:
                return 7;
            case beverageSize.medium:
                return 6;
            case beverageSize.small:
                return 5;
        }
    }
}

