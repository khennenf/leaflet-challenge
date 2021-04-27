// geojson with three features. two have value "parking" for property "parking" and one has value "stadium"
var locations = [{
  "type": "Feature",
  "properties": {
  "mag": 6.4,
  "place": "205 km WSW of Haveluloto, Tonga",
  "time": 1619389682039,
  "updated": 1619476260670,
  "tz": null,
  "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000e4rl",
  "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us6000e4rl.geojson",
  "felt": 1,
  "cdi": 2.7,
  "mmi": 3.637,
  "alert": "green",
  "status": "reviewed",
  "tsunami": 0,
  "sig": 630,
  "net": "us",
  "code": "6000e4rl",
  "ids": ",us6000e4rl,",
  "sources": ",us,",
  "types": ",dyfi,losspager,moment-tensor,origin,phase-data,shakemap,",
  "nst": null,
  "dmin": 5.966,
  "rms": 0.88,
  "gap": 20,
  "magType": "mww",
  "type": "earthquake",
  "title": "M 6.4 - 205 km WSW of Haveluloto, Tonga"
  },
  "geometry": {
  "type": "Point",
  "coordinates": [
  -177.1304,
  -21.6393,
  246
  ]
  },
  "id": "us6000e4rl"
  },
  {
  "type": "Feature",
  "properties": {
  "mag": 3.7,
  "place": "8km SE of Dollar Point, CA",
  "time": 1619364803610,
  "updated": 1619484605477,
  "tz": null,
  "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc73554385",
  "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/nc73554385.geojson",
  "felt": 1637,
  "cdi": 4.6,
  "mmi": 4.205,
  "alert": null,
  "status": "reviewed",
  "tsunami": 0,
  "sig": 671,
  "net": "nc",
  "code": "73554385",
  "ids": ",nc73554385,nn00805751,us6000e4p5,",
  "sources": ",nc,nn,us,",
  "types": ",dyfi,focal-mechanism,moment-tensor,nearby-cities,origin,phase-data,scitech-link,shakemap,",
  "nst": 33,
  "dmin": 0.102,
  "rms": 0.24,
  "gap": 46,
  "magType": "mw",
  "type": "earthquake",
  "title": "M 3.7 - 8km SE of Dollar Point, CA"
  },
  "geometry": {
  "type": "Point",
  "coordinates": [
  -120.0433333,
  39.1283333,
  7.51
  ]
  },
  "id": "nc73554385"
  },
  {
  "type": "Feature",
  "properties": {
  "mag": 3.61,
  "place": "15km N of Morgan Hill, CA",
  "time": 1619326768510,
  "updated": 1619476759520,
  "tz": null,
  "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc73554215",
  "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/nc73554215.geojson",
  "felt": 2390,
  "cdi": 4.2,
  "mmi": 3.788,
  "alert": null,
  "status": "reviewed",
  "tsunami": 0,
  "sig": 620,
  "net": "nc",
  "code": "73554215",
  "ids": ",nc73554215,us6000e4jn,",
  "sources": ",nc,us,",
  "types": ",dyfi,focal-mechanism,moment-tensor,nearby-cities,origin,phase-data,scitech-link,shakemap,",
  "nst": 183,
  "dmin": 0.07455,
  "rms": 0.09,
  "gap": 33,
  "magType": "mw",
  "type": "earthquake",
  "title": "M 3.6 - 15km N of Morgan Hill, CA"
  },
  "geometry": {
  "type": "Point",
  "coordinates": [
  -121.6395,
  37.267,
  7.66
  ]
  },
  "id": "nc73554215"
  },
  {
  "type": "Feature",
  "properties": {
  "mag": 6.5,
  "place": "223 km WNW of Pangai, Tonga",
  "time": 1619223818098,
  "updated": 1619452184040,
  "tz": null,
  "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us6000e47c",
  "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us6000e47c.geojson",
  "felt": 3,
  "cdi": 5.9,
  "mmi": 3.583,
  "alert": "green",
  "status": "reviewed",
  "tsunami": 0,
  "sig": 652,
  "net": "us",
  "code": "6000e47c",
  "ids": ",us6000e47c,",
  "sources": ",us,",
  "types": ",dyfi,losspager,moment-tensor,origin,phase-data,shakemap,",
  "nst": null,
  "dmin": 4.92,
  "rms": 0.91,
  "gap": 19,
  "magType": "mww",
  "type": "earthquake",
  "title": "M 6.5 - 223 km WNW of Pangai, Tonga"
  },
  "geometry": {
  "type": "Point",
  "coordinates": [
  -176.26,
  -18.9189,
  301
  ]
  },
  "id": "us6000e47c"
  }
  ]


  // Create our map, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5,
  });

    // Define streetmap
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap)


// create your custom icon
var myIcon = L.icon({
		iconUrl: 'https://img.icons8.com/color/48/000000/nut.png',
		iconSize: [32, 37],
		iconAnchor: [16, 37],
		popupAnchor: [0, -28]
});

// function to get value from property "name" to populate for the popup
function onEachFeature(feature, layer) {
	layer.bindPopup(feature.properties.place);
}


// add geojson to the map, click on the marker to see the popup
L.geoJSON(locations, {
	pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: myIcon});
	},
	onEachFeature: onEachFeature
}).addTo(myMap);






