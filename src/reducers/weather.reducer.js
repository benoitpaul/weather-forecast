import { FETCH_WEATHER } from './actionTypes.js';
import moment from 'moment';

function weather(state = null, action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return extractCurrentAndForecastWeather(action.payload);
        default:
            return state;
    }
}

function extractCurrentAndForecastWeather(data) {
    const w = {
        current: extractCurrentWeather(data),
        forecast: extractForecastWeather(data),
    };
    return w;
}

function extractCurrentWeather(data) {
    const current = data.currentWeather;
    const feelsLike = getFeelsLikeTemperature(current.main.temp, current.wind.speed);
    const direction = getWindDirection(current.wind.deg);

    return {
        temperature: Math.round(current.main.temp),
        icon: current.weather[0].main,
        condition: current.weather[0].description.toUpperCase(),
        feelsLike: Math.round(feelsLike),
        high: Math.round(current.main.temp_max),
        low: Math.round(current.main.temp_min),
        uvIndex: 0,
        wind: {
            direction: direction,
            speed: Math.round(current.wind.speed)
        }
    };
}

function getFeelsLikeTemperature(temperature, windSpeed) {
    // as described here: http://www.onlineconversion.com/windchill.htm
    return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
}

function getWindDirection(angle) {
    // as described here: http://climate.umn.edu/snow_fence/components/winddirectionanddegreeswithouttable3.htm
    if (angle >= 348.75 || angle <= 11.25) {
        return 'N';
    } else if (angle >= 11.25 || angle <= 33.75) {
        return 'NNE';
    } else if (angle >= 33.75 || angle <= 56.25) {
        return 'NE';
    } else if (angle >= 56.25 || angle <= 78.75) {
        return 'ENE';
    } else if (angle >= 78.75 || angle <= 101.25) {
        return 'E';
    } else if (angle >= 101.25 || angle <= 123.75) {
        return 'ESE';
    } else if (angle >= 123.75 || angle <= 146.25) {
        return 'SE';
    } else if (angle >= 146.25 || angle <= 168.75) {
        return 'SSE';
    } else if (angle >= 168.75 || angle <= 191.25) {
        return 'S';
    } else if (angle >= 191.25 || angle <= 213.75) {
        return 'SSW';
    } else if (angle >= 213.75 || angle <= 236.25) {
        return 'SW';
    } else if (angle >= 236.25 || angle <= 258.75) {
        return 'WSW';
    } else if (angle >= 258.75 || angle <= 281.25) {
        return 'W';
    } else if (angle >= 281.25 || angle <= 303.75) {
        return 'WNW';
    } else if (angle >= 303.75 || angle <= 326.25) {
        return 'NW';
    } else if (angle >= 326.25 || angle <= 348.75) {
        return 'NNW';
    }
}

function extractForecastWeather(data) {
    let forecastWeather = [];
    const NUMBER_OF_FORECAST = 4;
    for (let i = 0; i < NUMBER_OF_FORECAST; i++) {
        forecastWeather[i] = getForecast(data.forecastWeather.list, i + 1);
    }
    return forecastWeather;

}

function getForecast(list, shift) {
    const date = moment().add(shift, 'days').hour(12).minute(0).seconds(0).milliseconds(0);
    const raw = findForecast(list, date);
    return {
        id: shift,
        icon: raw.weather[0].icon,
        high: Math.round(raw.main.temp),
        low: Math.round(raw.main.temp_min),
    };
}

function findForecast(list, date) {
    const formattedDate = date.format("YYYY-MM-DD hh:mm:ss");
    return list.find(item => item.dt_txt === formattedDate);
}

export { weather };