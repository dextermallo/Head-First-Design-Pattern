import { IFlyBehavior } from '../../interface/index';

export default class FlyNoWay implements IFlyBehavior {
    fly() {
        console.log('fly no way.');
    }
}