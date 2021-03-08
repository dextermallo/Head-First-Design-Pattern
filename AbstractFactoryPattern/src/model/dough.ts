export abstract class Dough {
    naming: string;
};

export class ThinCrustDough extends Dough {
    constructor() {
        super();
        this.naming = 'Thin crust dough';
    }
}

export class ThickCrustDough extends Dough {
    constructor() {
        super();
        this.naming = 'Thick crust dough';
    }
}