import { IFlyBehavior } from '../../interface/index';

export default class FlyRocketPowered implements IFlyBehavior {
    fly() {
        console.log('fly by rocket powered.');
    }
}