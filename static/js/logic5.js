//Data URL
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"

//Declare Map
var myMap = L.map("map", {
    center: [15.183002, -23.703451],
    zoom: 3,
  });

//Basemap Layer
var basemap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/light-v10",
    accessToken: API_KEY
  }).addTo(myMap)

//Get Data
d3.json(queryUrl, function(data){
  L.geoJson(data);
  console.log(data)

//Determine marker radius size based on mag
function markerSize(mag) {
    return mag*1.5;
  }

//Determine marker color based on depth
function getColor(d) {
    return d > 91 ? '#8c2d04' :
           d > 90  ? '#cc4c02' :
           d > 70  ? '#ec7014' :
           d > 50  ? '#fe9929' :
           d > 30   ? '#fec44f' :
           d > 10   ? '#fee391' :
                      '#ffffd4';
  }

  //
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
        fillColor: getColor(data.features[i].geometry.coordinates[2]),
        color: "black",
        radius: markerSize(data.features[i].properties.mag),
        stroke: true,
        weight: .5,
        fillOpacity: .8,
    }).bindPopup(customPopup, customOptions).addTo(myMap)
  }

  var legend = L.control({position: 'bottomright'});

  legend.onAdd = function(map) {

    var div = L.DomUtil.create('div', 'info legend'),
      arr = [-10,10,30,50,70,90],
      labels = ['<strong> Earthquake Depth (km) </strong> <hr>']

      for (var i = 0; i <arr.length; i++) {
        
        labels.push(
          '<i style="background:' + getColor(arr[i] + 1) + '"></i> ' +
          arr[i] + (arr[i + 1] ? '&ndash;' + arr[i + 1] + '<br>' : '+'));
      }
      div.innerHTML = labels.join('<br>');
      return div;
  };

  legend.addTo(myMap)
})


