var map;
var markers = [];
var marker, lat, long;


function initMap(x1, y1){
  var lat_lng = {lat: x1, lng: y1};

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: lat_lng,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  // This event listener will call addMarker() when the map is clicked.
  map.addListener('click', function(event) {
    addMarker(event.latLng);
  });
  // Adds a marker at the center of the map.
  addMarker(lat_lng);
}

// Adds a marker to the map and push to the array.
function addMarker(location) {
  marker = new google.maps.Marker({
    position: location,
	  draggable:true,
	  animation: google.maps.Animation.DROP,
    map: map
  });
  markers.push(marker);
  //document.write(marker.getPosition());
}

function latlong(){
  lat=marker.getPosition().lat();
  long=marker.getPosition().lng();
}
