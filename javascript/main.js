$(document).ready(function(){
  var latitude, longitude;
  function getLocation(){

        navigator.geolocation.getCurrentPosition(latlng);
}
function latlng(position){
  longitude = position.coords.latitude;
  latitude = position.coords.longitude;
  alert(latitude);
  alert(longitude);
}
  function initialize(lng, lat) {
    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(lng, lat)
    };

    var map = new google.maps.Map(document.getElementById('mapCanvas'),
        mapOptions);
  }


  getLocation();




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


initialize(longitude, latitude);

  });
>>>>>>> 57c4b7753088adb05f4d26fd72bd4bb41ad9318d
