import { IQuackBehavior } from '../../interface/index';

export default class MuteQuack implements IQuackBehavior {
    quack() {
        console.log('duck mute quack');
    }
}