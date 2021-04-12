import { IFlyBehavior } from '../../interface/index';

export default class FlyWithWings implements IFlyBehavior {
    fly() {
        console.log('fly with wings.');
    }
}