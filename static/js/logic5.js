var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"

var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5,
  });


var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap)


d3.json(queryUrl, function(data){
  L.geoJson(data);
  console.log(data)

  var test = data.features[1].geometry.coordinates[0]
  console.log(test)

 console.log(data.features[0].geometry.coordinates[0])
//   var lng = data.features[i].geometry.coordinates[1]

markers = []  

//   for (var i = 0; i < data.features.length; i++) {
//     L.circle([lat, lng], {
//         stroke: false,
//         fillOpacity: .075,
//         color: "#980043"
//     }).addTo(myMap)

//     console.log(data.features[i].properties.title)
//   }
}); 


