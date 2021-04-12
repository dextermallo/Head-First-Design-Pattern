import { IDisplayElement, IObserver } from '../interface';
import WeatherData from './weatherData';

export default class WeatherDisplay implements IObserver, IDisplayElement {
    private temperature: number;
    private humidity: number;
    private pressure: number;
    private weatherData: WeatherData;

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
        this.temperature = this.weatherData.getTemperature();
        this.humidity = this.weatherData.getHumidity();
        this.pressure = this.weatherData.getPressure();
    }


    update(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    }

    display() {
        console.log(`Current conditions:
        Temperature: ${this.temperature.toFixed(2)}'F,
        Humidity: ${this.humidity.toFixed(2)}%,
        Pressure: ${this.pressure.toFixed(2)} Pa.
        `);
    }
}