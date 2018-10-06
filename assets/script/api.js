//TODO add function for making marker on map

var houston_info = `<h2>great</h2>`;
var miami_info = `<h2>keep calm on carry on</h2>`;

var mode = "";
$("#routeMode").on("click", function() {
  console.log("route mode now");
  mode = "route";
});
var marinePlanCoordinates = [];

// ship 1
// var lineSymbol = {
//   path:
//     "M21.671 23h0.329c2.209 0 3.999-1.795 3.999-4h-10v-15h-1v15h-10c0 0.876 0.282 1.686 0.759 2.345 3.661-1.772 7.586-1.975 11.486 0.219 1.515 0.852 2.993 1.312 4.426 1.436v0 0zM26 18h-9v-9l9 9zM8 9.5c-3 5-3 8.5-3 8.5h9c0 0-1-1.5-1-6s1-8 1-8c0 0-3 0.5-6 5.5v0zM3 25c0.432-0.319 0.901-0.634 1.405-0.934 4.032-2.406 8.441-2.965 12.82-0.502 4.021 2.262 7.786 1.761 11.12-0.452 0.623-0.414 1.177-0.857 1.655-1.299v1.322c-0.341 0.277-0.709 0.549-1.102 0.81-3.622 2.405-7.778 2.957-12.164 0.491-4.022-2.262-8.065-1.75-11.817 0.489-0.713 0.425-1.353 0.881-1.911 1.336-0.002 0.002-0.004 0.003-0.006 0.005v-1.266zM5.979 26.232c3.592-1.665 7.43-1.813 11.245 0.333 3.481 1.958 6.771 1.846 9.755 0.344v1.109c-3.143 1.433-6.616 1.46-10.245-0.581-3.645-2.050-7.307-1.822-10.755-0.094v-1.11z",
//   fillColor: "#F00",
//   strokeColor: "#393",
//   rotation: 270,
//   scale: 1.2
// };
// ship 2
// var lineSymbol = {
//   path:
//     "M17,22 L26.9047619,22 L27,22 C27,24.2046438 25.2094214,26 23.0006308,26 L9.99936922,26 C7.79044819,26 6,24.209139 6,22 L6.0952381,22 L16,22 L16,7 L17,7 L17,22 L17,22 Z M27,21 L18,21 L18,12 L27,21 L27,21 Z M9,12.5 C6,17.5 6,21 6,21 L15,21 C15,21 14,19.5 14,15 C14,10.5 15,7 15,7 C15,7 12,7.5 9,12.5 L9,12.5 Z",
//   fillColor: "#0364f5",
//   fillOpacity: 1,
//   strokeColor: "#393",
//   rotation: 270,
//   scale: 1.2
// };
// ship 2 reverse
var lineSymbolR = {
  path:
    "M17,22 L26.9047619,22 L27,22 C27,24.2046438 25.2094214,26 23.0006308,26 L9.99936922,26 C7.79044819,26 6,24.209139 6,22 L6.0952381,22 L16,22 L16,7 L17,7 L17,22 L17,22 Z M27,21 L18,21 L18,12 L27,21 L27,21 Z M9,12.5 C6,17.5 6,21 6,21 L15,21 C15,21 14,19.5 14,15 C14,10.5 15,7 15,7 C15,7 12,7.5 9,12.5 L9,12.5 Z",
  fillColor: "#0364f5",
  fillOpacity: 1,
  strokeColor: "#393",
  rotation: 90,
  scale: 1.2
};
// ship 3

function initMap() {
  // lighthouse
  var lighthouseIcon = {
    path:
      "M318.628,182.599c5.314-2.555,8.697-7.927,8.704-13.824V83.783c-0.066-1.039-0.238-2.068-0.512-3.072l-1.024-2.56v-1.024     l-1.024-2.048v-1.024l-1.536-1.536l-76.8-68.608c-5.831-5.215-14.649-5.215-20.48,0L150.18,72.007l-1.536,1.536v1.024     l-1.024,2.048v1.024l-1.024,2.56c-0.274,1.004-0.446,2.033-0.512,3.072v86.016c0.007,5.897,3.39,11.269,8.704,13.824     l-17.92,259.072H97.956v30.72h276.48v-30.72h-38.912L318.628,182.599z M251.556,99.143h45.056v54.784h-45.056V99.143z      M175.78,99.143h45.056v54.784H175.78V99.143z M176.804,294.727l113.152-78.336l3.584,54.784l-120.32,83.456L176.804,294.727z      M237.732,442.183l64.512-45.056l3.072,45.056H237.732z",
    fillColor: "yellow",
    fillOpacity: 0.8,
    scale: 0.08,
    strokeColor: "black",
    strokeWeight: 2,
    anchor: new google.maps.Point(600, 200)
  };

  var lineSymbol = {
    path:
      "M202.302,353.148c-46.343,23.113-90.541,45.085-146.523,61.376V305.988c0-8.448,4.182-16.346,11.166-21.096l41.807-28.428   c3.571-2.428,10.026-4.415,14.344-4.415h67.119v-39.534h75.523v39.534h57.871c9.393,0,17.006,7.614,17.006,17.006v23.501   C287.413,310.723,244.533,332.091,202.302,353.148z M190.215,173.476v20.514h75.523v-20.514c0-10.51-8.52-19.029-19.029-19.029   h-37.467C198.734,154.447,190.215,162.966,190.215,173.476z M146.352,113.665c5.434,0,10.604-1.118,15.307-3.122   c5.336,7.391,13.97,12.248,23.782,12.248c3.202,0,6.228-0.64,9.113-1.587c-0.046,0.532-0.16,1.044-0.16,1.587   c0,10.061,8.155,18.215,18.215,18.215s18.215-8.155,18.215-18.215c0-10.06-8.155-18.215-18.215-18.215   c-0.004,0-0.008,0.001-0.012,0.001c1.419-3.447,2.226-7.211,2.226-11.169c0-16.228-13.155-29.384-29.383-29.384   c-0.54,0-1.043,0.13-1.575,0.159c-4.575-16.508-19.549-28.695-37.513-28.695c-21.588,0-39.088,17.5-39.088,39.088   C107.264,96.164,124.764,113.665,146.352,113.665z M528.954,496.265c-3.778,5.754-3.881,13.155-0.061,18.881l22.525,33.761   c8.232,12.31-1.351,28.69-16.114,27.549L34.419,537.106c-13.626-1.07-25.016-10.651-28.489-23.872   C2.893,501.669,0,487.318,0,474.604c0-26.148,10.511-31.027,32.011-36.157c192.263-45.878,245.145-156.462,565.948-174.566   c8.333-0.47,15.035,6.81,13.919,15.081C602.372,349.385,568.794,435.601,528.954,496.265z M504.474,413.614   c0-4.7-3.804-8.504-8.504-8.504s-8.503,3.804-8.503,8.504c0,13.133-8.766,24.136-20.711,27.803v-58.622   c6.393-3.17,10.827-9.696,10.827-17.314c0-10.707-8.68-19.387-19.387-19.387c-10.706,0-19.386,8.68-19.386,19.387   c0,7.663,4.484,14.226,10.938,17.373v58.563c-11.945-3.667-20.711-14.67-20.711-27.803c0-4.7-3.804-8.504-8.504-8.504   s-8.504,3.804-8.504,8.504c0,25.485,20.735,46.221,46.221,46.221C483.738,459.835,504.474,439.1,504.474,413.614z",
    fillColor: "#F00",
    fillOpacity: 0.8,
    strokeColor: "#393",
    rotation: 270,
    scale: 0.1,
    anchor: new google.maps.Point(20, 400)
  };
  var houston = { lat: 29.795, lng: -95.236 };
  var miami = { lat: 25.813, lng: -80.134 };
  var weather1 = { lat: 30, lng: -74 };
  var weather2 = { lat: 34, lng: -49 };
  var weather3 = { lat: 35, lng: -19 };
  var lisbon = { lat: 38.716, lng: -9.133 };
  var elizabeth_sa = { lat: -33.917, lng: 25.57 };
  var weather4 = { lat: -6, lng: 47 };
  var mumbai = { lat: 19.072, lng: 72.882 };
  var lightHouse1 = { lat: 11.421, lng: -23.532 }; //light house 1
  var lightHouse2 = { lat: -6.353, lng: 9.279 }; //light house 2
  var lightHouse3 = { lat: -37.442, lng: 17.433 }; //light house 3
  // The map, centered at lisbon
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: lisbon,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#ebe3cd"
          }
        ]
      },
      {
        elementType: "labels",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#523735"
          }
        ]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f1e6"
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#c9b2a6"
          }
        ]
      },
      {
        featureType: "administrative.country",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "on"
          }
        ]
      },
      {
        featureType: "administrative.country",
        elementType: "labels.text.stroke",
        stylers: [
          {
            weight: 8
          }
        ]
      },
      {
        featureType: "landscape.natural.landcover",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#9d7550"
          }
        ]
      },
      {
        featureType: "landscape.natural.terrain",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ae5811"
          }
        ]
      },
      {
        featureType: "poi",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#dfd2ae"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#93817c"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#b9d3c2"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry.stroke",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#92998d"
          }
        ]
      }
    ]
  });

  // Use the marker to create route
  var preDefineCoordinates = [
    { lat: 29.795, lng: -95.236 }, //houston
    { lat: 25.813, lng: -80.134 }, //miami
    { lat: 30, lng: -74 }, //ws1
    { lat: 34, lng: -49 }, //ws2
    { lat: 35, lng: -19 }, //ws3
    { lat: 38.716, lng: -9.133 }, //lisbon
    { lat: 11.421, lng: -23.532 }, //light house 1
    { lat: -6.353, lng: 9.279 }, //light house 2
    { lat: -37.442, lng: 17.433 }, //light house 3
    { lat: -33.917, lng: 25.57 }, //elizabeth
    { lat: -6, lng: 47 }, //ws4
    { lat: 19.072, lng: 72.882 } //mumbai
  ];
  var preDefinePath = new google.maps.Polyline({
    path: preDefineCoordinates,
    geodesic: true,
    strokeColor: "#5b85e0",
    strokeOpacity: 0.7,
    strokeWeight: 20
  });
  preDefinePath.setMap(map);

  // The marker, positioned at Uluru
  var huston_marker = new google.maps.Marker({ position: houston, map: map });
  var lisbon_marker = new google.maps.Marker({ position: lisbon, map: map });
  var elizabeth_sa_marker = new google.maps.Marker({
    position: elizabeth_sa,
    map: map
  });
  var mumbai_marker = new google.maps.Marker({ position: mumbai, map: map });
  var miami_marker = new google.maps.Marker({ position: miami, map: map });
  var lh1_marker = new google.maps.Marker({
    position: lightHouse1,
    map: map,
    icon: lighthouseIcon
  });
  var lh2_marker = new google.maps.Marker({
    position: lightHouse2,
    map: map,
    icon: lighthouseIcon
  });
  var lh3_marker = new google.maps.Marker({
    position: lightHouse3,
    map: map,
    icon: lighthouseIcon
  });

  var infowindow = new google.maps.InfoWindow();
  //Marker Click Action
  huston_marker.addListener("click", function(event) {
    if (mode === "route") {
      marinePlanCoordinates.push(0);
    }
  });

  lisbon_marker.addListener("click", function(event) {
    if (mode === "route") {
      marinePlanCoordinates.push(5);
    }
  });
  elizabeth_sa_marker.addListener("click", function(event) {
    if (mode === "route") {
      marinePlanCoordinates.push(9);
    }
  });
  mumbai_marker.addListener("click", function(event) {
    if (mode === "route") {
      marinePlanCoordinates.push(12);
    }
  });
  miami_marker.addListener("click", function(event) {
    if (mode === "route") {
      marinePlanCoordinates.push(1);
    }
  });
  lh1_marker.addListener("click", function(event) {
    if (mode === "route") {
      marinePlanCoordinates.push(6);
    }
  });
  lh2_marker.addListener("click", function(event) {
    if (mode === "route") {
      marinePlanCoordinates.push(7);
    }
  });
  lh3_marker.addListener("click", function(event) {
    if (mode === "route") {
      marinePlanCoordinates.push(8);
    }
  });
  //Marker Mouseover Action
  miami_marker.addListener("mouseover", function() {
    infowindow.setContent(miami_info);
    infowindow.open(map, this);
  });
  miami_marker.addListener("mouseout", function() {
    infowindow.close();
  });

  $("#routeConfirm").on("click", function initMap() {
    console.log(marinePlanCoordinates);

    var a = marinePlanCoordinates[0];
    var b = marinePlanCoordinates[1];
    console.log(a);
    console.log(b);

    if (a < b) {
      let marinePath_L_R_C = [];
      for (let j = a; j <= b; j++) {
        marinePath_L_R_C.push(preDefineCoordinates[j]);
      }
      console.log(marinePath_L_R_C);

      let marinePath_L_R = new google.maps.Polyline({
        path: marinePath_L_R_C,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 0.4,
        strokeWeight: 6,
        icons: [
          {
            icon: lineSymbol,
            offset: "90px"
          }
        ]
      });
      marinePath_L_R.setMap(map);
      animateBoat(marinePath_L_R);
    } else if (a > b) {
      let marinePath_R_L_C = [];
      for (let x = a; x >= b; x--) {
        marinePath_R_L_C.push(preDefineCoordinates[x]);
      }
      console.log(marinePath_R_L_C);

      let marinePath_R_L = new google.maps.Polyline({
        path: marinePath_R_L_C,
        geodesic: true,
        strokeColor: "#03f513",
        strokeOpacity: 1.0,
        strokeWeight: 6,
        icons: [
          {
            icon: lineSymbolR,
            offset: "90px"
          }
        ]
      });
      marinePath_R_L.setMap(map);
      animateBoat(marinePath_R_L);
    }

    // var marinePath = new google.maps.Polyline({
    //   path: marinePlanCoordinates,
    //   geodesic: true,
    //   strokeColor: "#FF0000",
    //   strokeOpacity: 1.0,
    //   strokeWeight: 6,
    //   icons: [
    //     {
    //       icon: lineSymbol,
    //       offset: "90px"
    //     }
    //   ]
    // });
    function animateBoat(line) {
      var count = 0;
      window.setInterval(function() {
        count = (count + 1) % 200;

        var icons = line.get("icons");
        icons[0].offset = count / 2 + "%";
        line.set("icons", icons);
      }, 100);
    }
  });
}

function port(location, price) {
  this.location = location;
  this.price = price;
}

var lisbonPort = new port(lisbon, {
  cheese: 37,
  olive_oil: 34,
  fish: 25,
  arms: 120
});
var miamiPort = new port(miami, {
  cheese: 52,
  olive_oil: 7,
  fish: 12,
  arms: 145
});
var mumbaiPort = new port(mumbai, {
  cheese: 46,
  olive_oil: 121,
  fish: 24,
  arms: 72
});
var houstonPort = new port(huston, {
  cheese: 31,
  olive_oil: 39,
  fish: 25,
  arms: 102
});
var elizabethPort = new port(elizabeth, {
  cheese: 45,
  olive_oil: 30,
  fish: 8,
  arms: 181
});
