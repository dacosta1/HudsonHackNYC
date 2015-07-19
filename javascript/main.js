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
    var latLng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
      zoom: 12,
      center: latLng
    };

    var map = new google.maps.Map(document.getElementById('mapCanvas'),
        mapOptions);

    var contentString = '<div id="content">'+
     '<div id="siteNotice">'+
     '</div>'+
     '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
     '<div id="bodyContent">'+
     '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
     'sandstone rock formation in the southern part of the '+
     'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
     'south west of the nearest large town, Alice Springs; 450&#160;km '+
     '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
     'features of the Uluru - Kata Tjuta National Park. Uluru is '+
     'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
     'Aboriginal people of the area. It has many springs, waterholes, '+
     'rock caves and ancient paintings. Uluru is listed as a World '+
     'Heritage Site.</p>'+
     '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
     'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
     '(last visited June 22, 2009).</p>'+
     '</div>'+
     '</div>';

 var infowindow = new google.maps.InfoWindow({
     content: contentString
 });
 var marker = new google.maps.Marker({
  position: latLng,
  map: map,
  title: 'First Marker'
});

 google.maps.event.addListener(marker, 'click', function() {
   infowindow.open(map,marker);
 });

}


  `

`

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
