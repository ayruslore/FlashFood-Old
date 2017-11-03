function getLocation(){
  initMap(12.9716, 77.5946);
  if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(showPosition);
  else
    alert("Geolocation is not supported by this browser.");
}

function showPosition(position){
  var x1=(position.coords.latitude);
  var y1=(position.coords.longitude);
  console.log("Latitude: "+x1+"\nLongitude: "+y1);
  initMap(x1, y1);
}
