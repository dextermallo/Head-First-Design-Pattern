import { Command } from "../interface";
import { Stereo } from '../model';

export class StereoOnCommand implements Command {
    stereo: Stereo;
    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }
    execute() {
        this.stereo.on();
        this.stereo.setVolume(11);
    }
}
