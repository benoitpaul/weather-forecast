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

function fetchWeather(latitude, longitude) {
    const service = new OpenWeatherMapService();
    const request = service.getCurrentWeatherByCoordinate(latitude, longitude, 'imperial');

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

function fetchData(location) {
    return (dispatch, getState) => {
        return dispatch(fetchLocation(location)).then(() => {
            const fetchedLocation = getState().location;
            return dispatch(fetchWeather(fetchedLocation.latitude, fetchedLocation.longitude));
        });
    }
}

export { fetchData };