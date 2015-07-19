$(document).ready(function(){
  var latitude, longitude;
  function getLocation(){

        navigator.geolocation.getCurrentPosition(latlng);


  }
  function latlng(){
    latitude = coords.latitude;
    longitude = coords.longitude;
    alert(latitude);
    alert(longitude);
  }
    getLocation();
});
