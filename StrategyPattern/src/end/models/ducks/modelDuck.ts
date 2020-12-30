import Duck from './duck';
import { FlyNoWay } from '../flyBehavior';
import { Quack } from '../quackBehavior';

export default class ModelDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyNoWay();
    }

    public display() {
        console.log('model duck display');
    }
}
