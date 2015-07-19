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

  function initialize(lat, lng) {
    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(lat, lng)
    };

    var map = new google.maps.Map(document.getElementById('mapCanvas'),
        mapOptions);
  }
initialize(latitude, longitude);





  $('#theBronx').on("click", function(){
    var bronxLng= -73.8860;
    var bronxLat= 40.8373;
    initialize(bronxLat, bronxLng);
  });

  $('#Queens').on("click", function(){
    var QLng= -73.8667;
    var QLat= 40.7500;
    initialize(QLat, QLng);
  });

  $('#Brooklyn').on("click", function(){
    var bkLng= -73.9903;
    var bkLat= 40.6928;
    initialize(bkLat, bkLng);
    });


    $('#Manhattan').on("click", function(){
      var MLng= -73.9597;
      var MLat= 40.7903;
      initialize(MLat, MLng);
      });


      $('#StatenIsland').on("click", function(){
      var SLng= -74.1448;
      var SLat= 40.5763;
      initialize(SLat, SLng);
    });




  });
