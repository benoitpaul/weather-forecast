

import axios from 'axios';

export default class GeocodeService {
    constructor() {
        this.GOOGLE_MAPS_API_KEY = 'AIzaSyA2-z1GxWr2GD8z2PfLTg20j9BZ3HUloDU';
        this.BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';
    }
/*
    getGeolocation( ) {
        return new Promise((resolve ) => {
            resolve({ city: "New-York", state: "NY" });
        });
    }
    */
    getGeolocation(location) {
        const url = `${this.BASE_URL}address=${location}&key=${this.GOOGLE_MAPS_API_KEY}`;
        return axios.get(url);
    }
}