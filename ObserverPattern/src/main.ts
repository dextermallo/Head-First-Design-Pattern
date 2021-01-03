import { WeatherDisplay, WeatherData } from './model';

module.exports.main = function() {
    let weatherData: WeatherData = new WeatherData();
    let currentConditionsDisplay: WeatherDisplay = new WeatherDisplay(weatherData);
    let forecastDisplay: WeatherDisplay = new WeatherDisplay(weatherData);

    weatherData.setMeasurements();

    // this will not trigger the setChanged().
    weatherData.setMinorMeasurements();

    weatherData.setMeasurements();

    // remove forecastDisplay as observer.
    weatherData.removeObserver(forecastDisplay);

    console.log('forecastDisplay unsubscribe the data.');
    weatherData.setMeasurements();

}

