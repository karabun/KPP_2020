var map;
var infowindow;
var marker;
var apiResponse = "";
const latLngVinnytsia = { lat: 49.232827, lng: 28.468799 };
const styles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: latLngVinnytsia,
    zoom: 12
  });

  map.setOptions({ styles });

  marker = new google.maps.Marker({
    position: latLngVinnytsia,
    map,
    title: 'Vinnytsia City'
  });

  infowindow = new google.maps.InfoWindow({
    content: JSON.stringify(this.apiResponse),
  });

  this.apiReponse && this.apiReponse.length !== 0 ? infowindow.open(map, marker) : "";
  
  google.maps.event.addListener(infowindow, 'closeclick',function() {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  });

  marker.addListener('click', function () {
      getApiData();
      marker.setAnimation(null);
  });

  getApiData();
}

function getApiData() {

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latLngVinnytsia.lat}&lon=${latLngVinnytsia.lng}&appid=1b5ee5a1a74d624a74750350327ea372`)
    .then(function(response) {
      response.json().then(function(data) {
        console.log("Response data: ", data);

        apiResponse = data;

        infowindow.setContent(`<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="weather"> ${JSON.stringify(apiResponse)}`);
        infowindow.open(map, marker);
      });
    });
}