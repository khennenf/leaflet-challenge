var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"

var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 3,
  });



var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/light-v10",
    accessToken: API_KEY
  }).addTo(myMap)


d3.json(queryUrl, function(data){
  L.geoJson(data);
  console.log(data)

  var test = data.features[1].geometry.coordinates[0]
  console.log(test)

 console.log(data.features[0].geometry.coordinates[0])


markers = []


function markerSize(mag) {
    return mag*1.5;
  }


function getColor(d) {
    return d > 91 ? '#feebe2' :
           d > 90  ? '#fcc5c0' :
           d > 70  ? '#fa9fb5' :
           d > 50  ? '#f768a1' :
           d > 30   ? '#c51b8a' :
           d > 10   ? '#7a0177' :
                      '#FFEDA0';
  }

  for (var i = 0; i < data.features.length; i++) {
    var lng = data.features[i].geometry.coordinates[0]
    var customPopup = "<h2>Location:<br>" + data.features[i].properties.place + "</h2> <hr> <h3>Magnitude: " + data.features[i].properties.mag + "</h3>"
    var customOptions = 
    {
        'maxWidth': '200',
        'width': '200',
        'className' : 'popupCustom'
        }
    var lat = data.features[i].geometry.coordinates[1]
        L.circleMarker([lat, lng], {
        stroke: false,
        fillOpacity: 1,
        color: getColor(data.features[i].geometry.coordinates[2]),
        radius: markerSize(data.features[i].properties.mag)
    }).bindPopup(customPopup, customOptions).addTo(myMap)
  }

    var legend = L.control({position: 'bottomright'});

    legend.onAdd - function(map)

   

}); 


