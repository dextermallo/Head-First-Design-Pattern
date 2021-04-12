import { Command } from "../interface";
import { Light } from '../model';

export class LightOnCommand implements Command {
    light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute() {
        this.light.on();
    }
}