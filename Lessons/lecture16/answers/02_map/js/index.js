
//initialize map:
const map = L.map('map').setView([42.0449388,-87.6868161], 14);

//initialize tiles (there are many options):
// L.tileLayer.provider('Stamen.TonerLite').addTo(mymap);
//L.tileLayer.provider('Stamen.Watercolor').addTo(map);
 L.tileLayer.provider('Stamen.Terrain').addTo(map);
// L.tileLayer.provider('Stamen.TerrainBackground').addTo(mymap);
// L.tileLayer.provider('Stamen.Toner').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerBackground').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerHybrid').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerLines').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerLabels').addTo(mymap);

// getting data from Yelp
let allRestaurants;
let url = 'https://www.apitutor.org/yelp/simple/v3/businesses/search?location=Evanston,%20IL&term=pizza';
fetch(url)
    .then(response => response.json())
    .then(restaurants => {
        allRestaurants = restaurants;
        console.log(restaurants);
        
        for (const restaurant of restaurants) {
            console.log(restaurant.coordinates);
            var marker = L.marker([restaurant.coordinates.latitude, restaurant.coordinates.longitude]).addTo(map);
            marker.on('click', (ev) => {
                console.log(ev);
            });
            marker.bindPopup(`<h3>${restaurant.name}</h3><p>${restaurant.display_address}</p>`).openPopup();
        }

    });


// // CODE TO GENERATE LOTS OF FAKE MARKERS
// const generateRandomMarkers = (numCoords=100) => {
//     return new Array(numCoords).fill(null).map(
//         () => [ (Math.random() * 0.6 + 51), -1 * Math.random() + 0.4 ]
//     );
// };
// const coordinates = generateRandomMarkers(numCoords=50);
// console.log(coordinates);

// // create markers 
// for (coord of coordinates) {
//     const marker = L.marker(coord).addTo(mymap);
//     marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
// }


// // create circle:
// const circle = L.circle([51.5, -0.09], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);

// // create polygon:
// const polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(mymap);
