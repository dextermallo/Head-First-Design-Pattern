import Duck from './duck';

export default class RedHeadDuck extends Duck {
    constructor() {
        super();
    }

    public display() {
        console.log('RedHeadDuck display');
    }
}
