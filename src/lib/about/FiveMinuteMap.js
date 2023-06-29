import React from 'react';
import "./fiveminutemap.css"

class FiveMinuteMap extends React.Component {
    map = null

    constructor(props) {
        super(props)
        window.mapboxgl.accessToken = 'pk.eyJ1IjoidGhyb3dhd2F5ODY3NTMwOSIsImEiOiJja2Q3bmZ4c2ExZWw0MnlvMmZ2OWR1MHE5In0.lt1pIT7P5njAWbfnucdQmQ';
    }

    componentDidMount() {
        this.map = new window.mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v11',
            center: [-74.5, 40],
            zoom: 9,
        });
        this.getLocationInfo()
    }

    /**
     * Grabs user location info from ipinfo and my location from uh my brain.
     */
    async getLocationInfo() {
        const rawIpInfoResponse = await fetch("https://ipinfo.io/?callback=test").then((r) => r.text().then((text) => text))
        // Use London as a default, for when IP Info rate limits me while testing.
        let strippedResponse = '{"loc": "-0.1276,51.5072"}'
        try {
            strippedResponse = rawIpInfoResponse.substring(rawIpInfoResponse.findIndex("{"))
        } catch (e) {
        }
        const ipInfo = JSON.parse(strippedResponse)
        const yourLocation = window.turf.point(ipInfo.loc.split(",")).geometry.coordinates
        const durham = window.turf.point([-78.91618516143913, 36.020195587756106]).geometry.coordinates
        const midpoint = window.turf.midpoint(yourLocation, durham)
        const bounds = new window.mapboxgl.LngLatBounds(yourLocation, durham);
        this.map.fitBounds(bounds, {padding: 100})
    }

    render() {
        return <div className="map-container">
            <div id='map' className="five-minute-map"></div>
        </div>
    }
}

export default FiveMinuteMap;