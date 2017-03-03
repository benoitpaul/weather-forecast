import { FETCH_LOCATION } from './actionTypes.js';

function location(state = null, action) {
    switch (action.type) {
        case FETCH_LOCATION:
            //return extractCityAndState(action.payload);
            return action.payload;
        default:
            return state;
    }
}
/*
function extractCityAndState(location) {
    const cityAndState = {
        city: findAddressComponent(location, 'locality').long_name,
        state: findAddressComponent(location, 'administrative_area_level_1').short_name
    };
    return cityAndState;
}

function findAddressComponent(location, addressComponentType) {
    const addressComponent = location.address_components.find(ac => ac.types.includes(addressComponentType));
    return addressComponent;
}
*/
export { location };