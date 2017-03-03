import axios from 'axios';

const OPEN_WEATHER_MAP_API_KEY = 'de0ef651f552f0b25f4d2964ff25abf6';

export default class OpenWeatherMapService {
    getCurrentWeather(location, units) {
        const CURRENT_BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?';
        const FORECAST_BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast?';

        //imperial
        const currentUrl = `${CURRENT_BASE_URL}q=${location},us&units=${units}&appid=${OPEN_WEATHER_MAP_API_KEY}`;
        const forecastUrl = `${FORECAST_BASE_URL}q=${location},us&units=${units}&appid=${OPEN_WEATHER_MAP_API_KEY}`;

        return Promise.all([axios.get(currentUrl), axios.get(forecastUrl)]).then((values) => {
            return {
                currentWeather: values[0].data,
                forecastWeather: values[1].data
            }
        });
    }
}