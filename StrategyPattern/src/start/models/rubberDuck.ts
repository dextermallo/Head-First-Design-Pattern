import Duck from './duck';

export default class RubberDuck extends Duck {
    constructor() {
        super();
    }

    public quack() {
        // override
        console.log('[override] RubberDuck squeak.');
    }

    public display() {
        console.log('Rubber Duck display');
    }
}
