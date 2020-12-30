import { IFlyBehavior, IQuackBehavior } from '../../interface/index';

export default abstract class Duck {

    flyBehavior: IFlyBehavior;
    quackBehavior: IQuackBehavior;

    constructor() { }

    performFly() { 
        this.flyBehavior.fly();
    }
    performQuack() {
        this.quackBehavior.quack();
    }

    public swim() { 
        console.log('Duck swim.');
    }

    public abstract display(): void;

    public setFlyBehavior(fb: IFlyBehavior) { 
        this.flyBehavior = fb;
    }

    public setQuackBehavior(qb: IQuackBehavior) {
        this.quackBehavior = qb;
    }
}