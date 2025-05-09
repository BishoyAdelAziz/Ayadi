// /**
//  * Rolso
//  * Modern cargo, transport and logistics HTML Template. Exclusively built for transport, logistics, delivery, moving, and cargo websites.
//  * Exclusively on https://1.envato.market/rolso-html
//  *
//  * @encoding        UTF-8
//  * @version         1.0.0
//  * @copyright       (C) 2018 - 2022 Merkulove ( https://merkulov.design/ ). All rights reserved.
//  * @license         Envato License https://1.envato.market/KYbje
//  * @contributors    Lilith Lamber (winter.rituel@gmail.com)
//  * @support         help@merkulov.design
//  **/
// "use strict";

// const _KEY = 'PasteYourGoogleMapsApiKeyHere';

// import {Loader} from "@googlemaps/js-api-loader";
// import mapTheme from "./map-theme";

// function initMap() {
//     const loader = new Loader({
//         apiKey: _KEY,
//         version: "weekly",

//     });
//     const mapContainer = document.querySelector('#map');
//     const defaultMarker = { lat: 40.74881584652125, lng: -73.98561648634562 };

//     if (mapContainer) {
//         loader.load().then(() => {
//             const map = new google.maps.Map(mapContainer, {
//                 center: defaultMarker,
//                 zoom: 16,
//                 styles: [...mapTheme],
//                 disableDefaultUI: true,
//             });
//             const marker = new google.maps.Marker({
//                 position: defaultMarker,
//                 map: map,
//                 icon: './svg/marker.svg'
//             });
//         });
//     }
// }

// export default initMap;
