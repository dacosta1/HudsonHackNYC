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

var apiUrl = encodeURIComponent("http://api.nytimes.com/svc/events/v2/listings.json?&?jsoncallback=?&ll=40.756146,-73.99021&filters=kid_friendly:true,category:forChildren&api-key=911438b10372aa19104a0ce16ac409cc:4:72528312");




$.getJSON("http://127.0.0.1:5000/proxy/?url=" + apiUrl + "&jsoncallback=?", function(data){
  $.each(data.results, function(index, value){

  $('<div class="eventsDiv" id="event' + index + '">' + "<h3> "+data.results[index].event_name+ "</h3>" + "<h4>Address</h4>"+"<p> "+data.results[index].street_address+ "</p>" + "<h4>Description</h4>"+"<p>" + data.results[index].web_description + "</p>" + "<h4>Borough</h4>"+"<p> "+data.results[index].borough + "</p>"+ "<h4>Address</h4>"+"<p>"+data.results[index].neighborhood+ "</p>"+'</div>').appendTo(".events");
  console.log(array1);
    });
setTimeout(function(){
  console.log(array1);
},3000);

  });

  });
