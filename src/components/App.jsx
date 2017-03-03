import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchLocation, fetchWeather } from '../reducers/actions.js';

import layout from './layout.scss';
import CurrentWeather from './CurrentWeather.jsx';
import ForecastWeather from './ForecastWeather.jsx';

const FORECAST_BACKGROUND_COLORS = ["#89b0ee", "#b3d4f6", "#3c438b", "#18173a"];

/*global  */

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.fetchData();
  }

  fetchData() {
      //const zipCode = this.getZipCode();
      this.props.fetchLocation();
      this.props.fetchWeather("10001");
    }

  render() {
    if (!this.props.weather) {
      return <div>Loading...</div>;
    }

    const forecasts = this.props.weather.forecast.map((f, index) => {
      const backgroundColor = FORECAST_BACKGROUND_COLORS[index]
      return <ForecastWeather key={f.id} backgroundColor={backgroundColor} forecastWeather={f} />
    });

    return (
      <div>
        <CurrentWeather className={layout.content} location={this.props.location} currentWeather={this.props.weather.current} />
        {forecasts}
      </div>
    );
  }
}
App.propTypes = {
  children: React.PropTypes.node,
  location: React.PropTypes.object,
  weather: React.PropTypes.shape({
    current: React.PropTypes.object,
    forecast: React.PropTypes.array
  }),

  fetchLocation: React.PropTypes.func.isRequired,
  fetchWeather: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    location: state.location,
    weather: state.weather
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchLocation, fetchWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);