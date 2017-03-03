import { combineReducers } from 'redux';
import { location } from './location.reducer.js';
import { weather } from './weather.reducer.js';

const allReducers = combineReducers({
    location,
    weather
});

export default allReducers;