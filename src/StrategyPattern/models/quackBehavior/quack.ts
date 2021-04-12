import { IQuackBehavior } from '../../interface/index';

export default class Quack implements IQuackBehavior {
    quack() {
        console.log('duck quack');
    }
}