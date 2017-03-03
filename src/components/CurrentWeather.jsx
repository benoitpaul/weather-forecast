import React from 'react';
import moment from 'moment';

import styles from './CurrentWeather.scss';
import commonStyles from './common.scss';


function CurrentWeather({location, currentWeather}) {
    // format the current date and time
    const formattedDate = moment().format('MMMM D, YYYY');
    const formattedTime = moment().format('h:mma');

    return (
        <div className={styles.currentWeather}>
            <div className={styles.location}>{location.city}, {location.state}</div>
            <div className={styles.dateTime}>
                <div className={styles.dateBox}>{formattedDate}</div>
                <div className={styles.timeBox}>{formattedTime}</div>
                </div>
            <div className={commonStyles.details}>
                <div className={commonStyles.conditionsBox}>
                    <div>Feels like {currentWeather.feelsLike}&deg;</div>
                    <div>H-L {currentWeather.high}&deg;-{currentWeather.low}&deg;</div>
                    <div>UV Index {currentWeather.uvIndex}</div>
                    <div>Wind {currentWeather.wind.direction} {currentWeather.wind.speed}mph</div>
                </div>
                <div className={commonStyles.temperatureBox}>
                    <div className={commonStyles.temperature}>{currentWeather.temperature}&deg;</div>
                    <div>{currentWeather.condition}</div>
                </div>
            </div>
        </div>);
}
CurrentWeather.propTypes = {
    location: React.PropTypes.object.isRequired,
    currentWeather: React.PropTypes.object.isRequired,
}

export default CurrentWeather;