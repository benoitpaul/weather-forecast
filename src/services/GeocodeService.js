export default class GeocodeService {
    getGeolocation( /*location*/ ) {
        return new Promise((resolve /*, reject*/ ) => {
            resolve({ city: "New-York", state: "NY" });
        });
    }
}