export class Light {

    isOn: boolean;
    location: string;

    constructor(location: string) {
        this.isOn = false;
        this.location = location;
    }

    on() {
        console.log(`Light in ${this.location} is turn on`);
        this.isOn = true;
    }

    off() {
        console.log(`Light in ${this.location} is turn off`);
        this.isOn = false;
    }
}







