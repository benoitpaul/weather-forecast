import React from 'react';

import styles from './ForecastWeather.scss';
import commonStyles from './common.scss';


function ForecastWeather({backgroundColor, forecastWeather}) {
    const forecastWeatherStyle = {
        backgroundColor: backgroundColor
    }

    let getConditionClassname = function(icon) {
        switch (icon) {
            case 'cloudy':
                return styles.cloudy;
            case 'rainy':
                return styles.rainy;
            case 'thunderstorm':
                return styles.thunderstorm;
            case 'snowy':
                return styles.snowy;
            case 'partly_cloudy':
                return styles.partlyCloudy;
            case 'sunny':
            default:
                return styles.sunny;
        }
    }

    const conditionClassname = getConditionClassname(forecastWeather.icon);

    return (
        <div className={styles.forecastWeather} style={forecastWeatherStyle}>
            <div className={commonStyles.details}>
                <div className={commonStyles.conditionsBox}>
                    <div className={conditionClassname} />
                </div>
                <div className={commonStyles.temperatureBox}>
                    <div className={commonStyles.temperature}>{forecastWeather.high}&deg;</div>
                    <div>LOW {forecastWeather.low}&deg;</div>
                </div>
            </div>
        </div>);
}
ForecastWeather.propTypes = {
    backgroundColor: React.PropTypes.string.isRequired,
    forecastWeather: React.PropTypes.object.isRequired,
}

export default ForecastWeather;