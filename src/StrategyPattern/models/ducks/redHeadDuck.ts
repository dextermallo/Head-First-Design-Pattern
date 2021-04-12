import Duck from './duck';
import { FlyWithWings } from '../flyBehavior';
import { Quack } from '../quackBehavior';

export default class RedHeadDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }

    public display() {
        console.log('RedHeadDuck display');
    }
}
