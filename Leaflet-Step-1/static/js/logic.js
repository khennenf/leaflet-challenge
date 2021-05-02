//Data URL
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"

//Declare Map
var myMap = L.map("map", {
    center: [18.436539, -64.618103],
    zoom: 3.2,
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
                      '#fff7bc';
    }

  //Create Popups
  for (var i = 0; i < data.features.length; i++) {
    var lng = data.features[i].geometry.coordinates[0]
    var customPopup = "<h2>Location:<br>" + data.features[i].properties.place + "</h2> <hr> <h3>Magnitude: " + data.features[i].properties.mag + "</h3>"
    var customOptions = 
    {
        'maxWidth': '200',
        'width': '200',
        'className' : 'popupCustom'
        }
    //Design markers    
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

  //Create info box variable
  var info = L.control();

  //Create div for info box
  info.onAdd = function (map) {
      this._div = L.DomUtil.create('div', 'info'); 
      this.update();
      return this._div;
  };
  
  //Add content to info nox
  info.update = function (props) {
      this._div.innerHTML = '<strong>All earthquakes within the last day<br> Information provided by United States Geological Survey (USGS) <br> </strong><hr> Select a pin to see location and earthquake magnitude <br><hr> <font size="-1">  Pin size represents severity of magnitude  <br>Pin color represents earthquake depth </font>'
  };

  //Add info box to map
  info.addTo(myMap);
  
  //Create legend variable
  var legend = L.control({position: 'bottomright'});

  //Add legend to map
  legend.onAdd = function(map) {

    //Create/Add lables to HTML
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
  
  //Add legend to map
  legend.addTo(myMap)
})


