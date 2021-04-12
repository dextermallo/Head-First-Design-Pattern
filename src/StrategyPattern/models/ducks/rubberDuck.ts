import Duck from './duck';
import { FlyNoWay } from '../flyBehavior';
import { MuteQuack } from '../quackBehavior';

export default class RubberDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new MuteQuack();
        this.flyBehavior = new FlyNoWay();
    }

    public display() {
        console.log('RubberDuck display');
    }
}
