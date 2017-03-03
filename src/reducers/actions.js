import { FETCH_LOCATION, FETCH_WEATHER } from './actionTypes.js';
import GeocodeService from '../services/GeocodeService.js';
import OpenWeatherMapService from '../services/OpenWeatherMapService.js';

function fetchLocation(location) {
    const service = new GeocodeService();
    const request = service.getGeolocation(location);

    return {
        type: FETCH_LOCATION,
        payload: request
    };
}


function fetchWeather(location) {
    const service = new OpenWeatherMapService();
    const request = service.getCurrentWeather(location);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

export { fetchLocation, fetchWeather };