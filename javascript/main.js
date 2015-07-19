$(document).ready(function(){
  var latitude, longitude;
  function getLocation(){

        navigator.geolocation.getCurrentPosition(latlng);


  }
  function latlng(position){
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  }
  getLocation();

    function initialize(lat, long) {
    var mapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(lat, long)
  };
  mapCanvas = document.getElementById('mapCanvas');
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
  initialize(latitude, longitude);
});
