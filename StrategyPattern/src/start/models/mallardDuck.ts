import Duck from './duck';

export default class MallardDuck extends Duck {
    constructor() {
        super();
    }

    public display() {
        console.log('MallardDuck display');
    }
}
