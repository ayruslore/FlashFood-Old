var x, y;

function getLocation(){
  if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(showPosition);
  else
    x.innerHTML="Geolocation is not supported by this browser.";
}

function showPosition(position){
  x=position.coords.latitude;
  y=position.coords.longitude;
}
