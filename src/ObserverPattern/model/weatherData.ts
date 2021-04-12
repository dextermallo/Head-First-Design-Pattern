import { ISubject, IObserver } from '../interface';


function generateRandomBetween(max: number, min: number = 0): number {
    return Math.random() * (max - min) + min;
}

export default class WeatherData implements ISubject {

    private changed: boolean;
    private observers: IObserver[];
    private temperature: number;
    private humidity: number;
    private pressure: number;

    constructor() {
        this.observers = new Array(0);
        this.temperature = generateRandomBetween(-10, 40);
        this.humidity = generateRandomBetween(100);
        this.pressure = generateRandomBetween(10);
        this.changed = false;
    }

    registerObserver(observer: IObserver) {
        this.observers.push(observer);
    }

    removeObserver(observer: IObserver) {
        for (let i = 0; i < this.observers.length; ++i) {
            if (this.observers[i] === observer) {
                this.observers.splice(i, 1);
                return;
            }
        }
    }

    notifyObserver() {
        if (!this.changed) { return }

        for (let observer of this.observers) {
            observer.update(this.temperature, this.humidity, this.pressure);
        }
        this.changed = false;
    }

    getTemperature(): number {
        return this.temperature;
    }

    getHumidity(): number {
        return this.humidity;
    }

    getPressure(): number {
        return this.pressure;
    }

    measurementsChanged() {
        this.notifyObserver();
    }

    setMeasurements() {
        this.temperature = generateRandomBetween(-10, 40);
        this.humidity = generateRandomBetween(100);
        this.pressure = generateRandomBetween(10);
        this.setChanged();
        this.measurementsChanged();
    }

    // Not trigger setChanged().
    setMinorMeasurements() {
        this.temperature = generateRandomBetween(-10, 40);
        this.humidity = generateRandomBetween(100);
        this.pressure = generateRandomBetween(10);
        this.measurementsChanged();
    }

    setChanged() {
        this.changed = true;
    }
}