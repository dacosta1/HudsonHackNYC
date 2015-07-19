$(document).ready(function(){
  var latitude, longitude, map;
  function getLocation(){

<<<<<<< HEAD
  function initialize(lng, lat) {
    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(lng, lat)
    };
=======
        navigator.geolocation.getCurrentPosition(latlng);
>>>>>>> 06209056cec587634cb6c7a2a888e91bc3cba791


  }
  function latlng(position){
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  }
<<<<<<< HEAD
=======
    getLocation();

    function initialize(latitude, longitude) {
    var mapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(latitude, longitude)
  };
  mapCanvas = document.getElementById('mapCanvas');
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
>>>>>>> 06209056cec587634cb6c7a2a888e91bc3cba791



  $('#theBronx').on("click", function(){
    var bronxLat = -73.8860;
    var bronxLng = 40.8373;
    initialize(bronxLng, bronxLat);
  });

  $('#Queens').on("click", function(){
    var QLat = -73.8667;
    var QLng = 40.7500;
    initialize(QLng, QLat);
  });

  $('#Brooklyn').on("click", function(){
    var bkLat = -73.9903;
    var bkLng = 40.6928;
    initialize(bkLng, bkLat);
    });


    $('#Manhattan').on("click", function(){
      var MLat = -73.9597;
      var MLng = 40.7903;
      initialize(MLng, MLat);
      });


      $('#StatenIsland').on("click", function(){
      var SLat = -74.1448;
      var SLng = 40.5763;
      initialize(SLng, SLat);
    });





  });
