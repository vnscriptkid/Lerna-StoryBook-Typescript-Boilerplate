// https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/
// https://medium.com/@marxlow/building-a-react-ice-cream-finder-app-with-the-google-maps-api-7e39339e0261
// https://stackoverflow.com/questions/47114169/how-to-use-react-with-google-places-api-to-display-place-markers-on-a-google-ma
// https://scotch.io/tutorials/react-apps-with-the-google-maps-api-and-google-maps-react
// https://medium.com/@tarangsachdev/google-maps-directionsrenderer-with-reactjs-8074a4d0173e

// https://developers.google.com/maps/documentation/javascript/places#place_search_requests
// https://github.com/google-map-react/google-map-react // This one look good
// https://tomchentw.github.io/react-google-maps/#directionsrenderer // large, good docs
// https://medium.com/@tarangsachdev/google-maps-directionsrenderer-with-reactjs-8074a4d0173e
// https://github.com/fullstackreact/google-maps-react/
const API_KEY = 'AIzaSyDFwu1MmuOatqW-283LSCbsxqHcp89ouiw';
// const GoogleMapsAPI = 'https://maps.googleapis.com/maps/api';
// const URL = `https://maps.googleapis.com/maps/api/js?key=${KEY}&callback=_mapsLoaded`

// const getAddressFromCoords = (latitude, longitude) => {
//     const url = `${GoogleMapsAPI}/geocode/json?latlng=${latitude},${longitude}&key=${KEY}`;

//     return fetch(url).then(res => res.json()).then(json => {
//         console.log('json: ', json);
//         return json.results[0].formatted_address;
//     });
// };

import * as React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
const { useState } = React;

function MyMap(): any {
    let placesService = null;

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: API_KEY
    });

    const handleOnLoad = (map: any): void | Promise<void> => {
        debugger;
        console.log('map: ', map);
        console.log('google', google);
        placesService = new google.maps.places.PlacesService(map);
        console.log(placesService);
    };

    const renderMap = (): React.ReactNode => {
        // wrapping to a function is useful in case you want to access `window.google`
        // to eg. setup options or create latLng object, it won't be available otherwise
        // feel free to render directly if you don't need that
        return <GoogleMap
            options={{
                zoomControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_CENTER
                }
            }}
            id="circle-example"
            mapContainerStyle={{
                height: "400px",
                width: "800px"
            }}
            zoom={15}
            center={{
                lat: 20,
                lng: 100
            }}
            onLoad={handleOnLoad}
        >
        </GoogleMap>;
    };

    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>;
    }

    return isLoaded ? renderMap() : <div>Loading...</div>;
}

// class MyMap extends React.Component {

//     public geoId: number;
//     private placesService = null;

//     public state = {
//         currentPosition: null,
//         places: [],
//         error: null,
//     }

//     public componentDidMount(): void {
//         this.geoId = navigator.geolocation.watchPosition((position): void => {
//             const { latitude, longitude } = position.coords;
//             this.setState({ currentPosition: { longitude, latitude } }, (): void => {
//                 this.fetchPlacesNearby('restaurant');
//             });
//         });


//     }

//     private fetchPlacesNearby = async (type: string): Promise<any> => {
//         try {
//             const { latitude, longitude } = this.state.currentPosition;
//             const res = await fetch(`${GoogleMapsAPI}/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`);
//             const json = await res.json();
//             console.log('json: ', json);
//         } catch (e) {
//             console.log('error: ', e);
//         }
//     }

//     private handleMapLoad = (map: Map<void, void>): void | Promise<void> | undefined => {
//         this.placesService = new google.places.PlacesService(map);
//         console.log(this.placesService);
//     }

//     public componentWillUnmount(): void {
//         navigator.geolocation.clearWatch(this.geoId);
//     }

//     public render(): React.ReactNode {
//         const { longitude = 0, latitude = 0 } = this.state.currentPosition || {};
//         return (
//             <LoadScript
//                 googleMapsApiKey={API_KEY}
//                 onLoad={(): void => console.log('loading ...')}
//             >
//                 <GoogleMap
//                     id="circle-example"
//                     mapContainerStyle={{
//                         height: "400px",
//                         width: "800px"
//                     }}
//                     zoom={15}
//                     center={{
//                         lat: latitude,
//                         lng: longitude
//                     }}
//                     onLoad={this.handleMapLoad}
//                 >

//                     <Marker
//                         position={{ lat: latitude, lng: longitude }}
//                     >
//                     </Marker>
//                     <Marker
//                         position={{ lat: 20.86481, lng: 106.68345 }}
//                     >
//                     </Marker>
//                 </GoogleMap>
//             </LoadScript>
//         );
//     }
// }

export { MyMap };