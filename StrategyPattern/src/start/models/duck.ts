export default abstract class Duck {

    constructor() { }

    public quack() { 
        console.log('Duck quack.');
    }
    public swim() { 
        console.log('Duck swim.');
    }

    public fly() {
        console.log('Duck fly');
    }

    public abstract display(): void;

    
}