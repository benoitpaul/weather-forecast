import React from 'react';
import CurrentWeather from './CurrentWeather.jsx';
import ForecastWeather from './ForecastWeather.jsx';
import styles from './SmallWidget.scss';

const FORECAST_BACKGROUND_COLORS = ["#89b0ee", "#b3d4f6", "#3c438b", "#18173a"];

function SmallWidget({ location, weather }) {
    const forecasts = weather.forecast.map((f, index) => {
        const backgroundColor = FORECAST_BACKGROUND_COLORS[index]
        return <ForecastWeather key={f.id} backgroundColor={backgroundColor} forecastWeather={f} />
    });

    return (
        <div className={styles.smallWidget}>
            <CurrentWeather location={location} currentWeather={weather.current} />
            {forecasts}
        </div>
    );
}
SmallWidget.propTypes = {
  location: React.PropTypes.object,
  weather: React.PropTypes.shape({
    current: React.PropTypes.object,
    forecast: React.PropTypes.array
  }),
}

export default SmallWidget;
