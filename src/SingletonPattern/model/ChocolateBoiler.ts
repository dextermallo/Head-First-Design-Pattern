export class ChocolateBoiler {
    
    private empty: boolean;
    private boiled: boolean;
    
    private static instance: ChocolateBoiler = new ChocolateBoiler();

    private constructor() {
        this.empty = true;
        this.boiled = false;
    }

    static getInstance(): ChocolateBoiler {
        return this.instance;
    }

    public fill() {
        if (this.isEmpty()) {
            this.empty = false;
            this.boiled = false;
        }
    }

    drain() {
        if (!this.isEmpty() && this.isBoiled()) {
            this.empty = true;
        }
    }

    isEmpty() {
        return this.empty;
    }

    isBoiled() {
        return this.boiled;
    }

}