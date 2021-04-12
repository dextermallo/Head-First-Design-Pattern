import { Command } from "../interface";
import { Stereo } from '../model';

export class StereoOffCommand implements Command {
    stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    execute() {
        this.stereo.off();
    }
}
