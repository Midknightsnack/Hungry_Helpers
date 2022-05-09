
//Mapbox token provided by Group 7
mapboxgl.accessToken = 'pk.eyJ1IjoibGUxMWV2YW4iLCJhIjoiY2wxdnBvZGY5MWk3bTNsb2Z2aTE3cTRibyJ9.Mp2IDrPcjvLaVrD5-oseOA';


// geolocation (allow/deny user's location)
navigator.geolocation.getCurrentPosition(sucessLocation, errorLocation, { enableHighAccuracy: true})

function sucessLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

// default location
function errorLocation() {
    setupMap([33.8823, 117.8851])
}

// Starting/Normal location of map
function setupMap(center) {

    const geojson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-117.88536,33.88137]
            }
          }
        ]
      };
    
    // Map initialization
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 14
        })
      
      
    // Search Bar
    map.addControl(
        new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
      })
    );

     
    // Navigation functionality
    const nav = new mapboxgl.NavigationControl();
      map.addControl(nav);

      var directions = new MapboxDirections({
          accessToken: mapboxgl.accessToken
    });
          
    map.addControl(directions, 'top-left');
       
}