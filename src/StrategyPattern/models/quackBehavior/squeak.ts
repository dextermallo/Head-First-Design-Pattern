import { IQuackBehavior } from '../../interface/index';

export default class Squeak implements IQuackBehavior {
    quack() {
        console.log('duck squeak');
    }
}