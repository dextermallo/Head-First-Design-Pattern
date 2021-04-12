export class Stereo {
    volume: number;
    cdName?: string;
    isOn: boolean;

    constructor() {
        this.volume = 0;
        this.isOn = false;
        this.cdName = null;
    }

    on() {
        console.log(`Stereo has turned on with CD: ${this.cdName}`);
        this.isOn = true;
    }

    off() {
        console.log(`Stereo has turned off with CD: ${this.cdName}`);
        this.isOn = false;
    }

    setCD(cdName: string) {
        console.log(`set CD to ${cdName}`);
        this.cdName = cdName;
    }

    setVolume(volume: number) {
        console.log(`set volume to ${volume}`);
        this.volume = volume;
    }
}