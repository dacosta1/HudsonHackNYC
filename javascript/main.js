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
    function initialize(latitude, longitude) {
    var mapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(latitude, longitude)
  };

  var map = new google.maps.Map(document.getElementById('mapCanvas'),
      mapOptions);
}

});
