import { Duck, MallardDuck, RedHeadDuck, RubberDuck, ModelDuck } from './models/ducks';
import { FlyRocketPowered } from './models/flyBehavior';

function simulateDuck(duck: Duck) {
    duck.display();
    duck.performFly();
    duck.performQuack();
}

module.exports.main = function() {
    let mallardDuck: Duck = new MallardDuck();
    simulateDuck(mallardDuck);
    
    let redHeadDuck = new RedHeadDuck();
    simulateDuck(redHeadDuck);

    let rubberDuck = new RubberDuck();
    simulateDuck(rubberDuck);

    let modelDuck = new ModelDuck();
    simulateDuck(modelDuck);

    // modify model duck
    modelDuck.setFlyBehavior(new FlyRocketPowered());
    modelDuck.performFly();
}