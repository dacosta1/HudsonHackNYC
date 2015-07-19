$(document).ready(function(){
  var latitude, longitude;
  function getLocation(){

        navigator.geolocation.getCurrentPosition(latlng);


  }
  function latlng(){
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    alert(latitude);
    alert(longitude);
  }
    getLocation();
});
