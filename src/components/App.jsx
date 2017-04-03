import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../reducers/actions.js';

import SmallWidget from './SmallWidget/SmallWidget.jsx';
import MediumWidget from './MediumWidget/MediumWidget.jsx';

/*global  */

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.fetchData();
  }

  fetchData() {
    this.props.fetchData("Atlanta");
  }

  render() {
    if (!this.props.weather) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <SmallWidget location={this.props.location} weather={this.props.weather} />
        <MediumWidget location={this.props.location} weather={this.props.weather} />
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

  fetchData: React.PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    location: state.location,
    weather: state.weather
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);