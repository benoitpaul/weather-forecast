import { FETCH_LOCATION } from './actionTypes.js';

function location(state = null, action) {
    switch (action.type) {
        case FETCH_LOCATION:
            return extractInfo(action.payload.data.results[0]);
            //return action.payload;
        default:
            return state;
    }
}

function extractInfo(location) {
    const cityAndState = {
        city: findAddressComponent(location, 'locality').long_name,
        state: findAddressComponent(location, 'administrative_area_level_1').short_name,
        latitude: location.geometry.location.lat,
        longitude: location.geometry.location.lng,
    };
    return cityAndState;
}

function findAddressComponent(location, addressComponentType) {
    const addressComponent = location.address_components.find(ac => ac.types.includes(addressComponentType));
    return addressComponent;
}

export { location };