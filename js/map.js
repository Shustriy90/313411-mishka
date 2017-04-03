var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.936379, lng: 30.321709},
    zoom: 17
  });


  //var image = '../img/icons/icon-map-pin.png';

  var image = {
  url:' ../img/icons/icon-map-pin.png',
  size: new google.maps.Size(200, 200),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(40, 100),
  scaledSize: new google.maps.Size(80, 120)
  };

  var beachMarker = new google.maps.Marker({
    position: {lat: 59.936379, lng: 30.321709},
    map: map,
    icon: image
  });

  google.maps.event.trigger(map, 'resize');

}


