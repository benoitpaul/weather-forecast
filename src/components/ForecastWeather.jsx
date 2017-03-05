import React from 'react';

import styles from './ForecastWeather.scss';
import commonStyles from './common.scss';


function ForecastWeather({backgroundColor, forecastWeather}) {
    const forecastWeatherStyle = {
        backgroundColor: backgroundColor
    };

    let getConditionClassname = function(icon) {
        switch (icon) {
            case '03d':
            case '04d':
                return styles.cloudy;
            case '09d':
            case '10d':
            case '50d':
                return styles.rainy;
            case '11d':
                return styles.thunderstorm;
            case '13d':
                return styles.snowy;
            case '02d':
                return styles.partlyCloudy;
            case '01d':
            default:
                return styles.sunny;
        }
    };

    const conditionClassname = getConditionClassname(forecastWeather.icon);

    return (
        <div className={styles.forecastWeather} style={forecastWeatherStyle}>
            <div className={commonStyles.details}>
                <div className={commonStyles.conditionsBox}>
                    <div className={conditionClassname} />
                </div>
                <div className={commonStyles.temperatureBox}>
                    <div className={commonStyles.temperature}>{forecastWeather.temperature}&deg;</div>
                    <div>{forecastWeather.humidity}%</div>
                </div>
            </div>
        </div>);
}
ForecastWeather.propTypes = {
    backgroundColor: React.PropTypes.string.isRequired,
    forecastWeather: React.PropTypes.object.isRequired,
}

export default ForecastWeather;