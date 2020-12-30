import { MallardDuck, RedHeadDuck, RubberDuck } from './models/index';

module.exports.main = function() {
    let mallardDuck: MallardDuck = new MallardDuck();
    mallardDuck.display();
    mallardDuck.fly();
    mallardDuck.quack();
    mallardDuck.swim();

    let redHeadDuck: RedHeadDuck = new RedHeadDuck();
    redHeadDuck.display();
    redHeadDuck.fly();
    redHeadDuck.quack();
    redHeadDuck.swim();
    
    // WRONG: rubber duck should not be able to fly.
    let rubberDuck: RubberDuck = new RubberDuck();
    rubberDuck.display();
    rubberDuck.fly();
    rubberDuck.quack();
    rubberDuck.swim();
}

