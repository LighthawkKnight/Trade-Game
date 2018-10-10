// two polyline
var marinePath_R_L;
var marinePath_L_R;
// Port Marker mouse over information
var houston_info = `<h2>great</h2>`;
var miami_info = `<h2>keep calm on carry on</h2>`;
// use for mode switch
var mode = "";
//switch to route setting mode and  clear animation Interval.
function setRouteMode() {
  console.log("route mode now");
  clearInterval(intervalID);
  mode = "route";
}

//Speed factor bigger and slower, recommend scope 20~800, default is 50. will be changed basing on the weather
var boatSpeedFactor = 50;

//days delay because of the weather
var weatherCauseDelay = 0;
var intervalID;

// all the geography location used in this game.
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
// origin choice
var startPort = 0;
// this array include  the starting point and the ending point
var marinePlanCoordinates = [startPort];
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

//!-----------------------------------------------------------------------------------
//!--------------------------------MAIN FUNCTION---------------------------------------
function initMap() {
  //lighthouse icon and ship3(lineSymbol). Because of the anchor property , both of them must be stay inside //the main function
  var lighthouseIcon = {
    path:
      "M318.628,182.599c5.314-2.555,8.697-7.927,8.704-13.824V83.783c-0.066-1.039-0.238-2.068-0.512-3.072l-1.024-2.56v-1.024     l-1.024-2.048v-1.024l-1.536-1.536l-76.8-68.608c-5.831-5.215-14.649-5.215-20.48,0L150.18,72.007l-1.536,1.536v1.024     l-1.024,2.048v1.024l-1.024,2.56c-0.274,1.004-0.446,2.033-0.512,3.072v86.016c0.007,5.897,3.39,11.269,8.704,13.824     l-17.92,259.072H97.956v30.72h276.48v-30.72h-38.912L318.628,182.599z M251.556,99.143h45.056v54.784h-45.056V99.143z      M175.78,99.143h45.056v54.784H175.78V99.143z M176.804,294.727l113.152-78.336l3.584,54.784l-120.32,83.456L176.804,294.727z      M237.732,442.183l64.512-45.056l3.072,45.056H237.732z",
    fillColor: "yellow",
    fillOpacity: 0.8,
    scale: 0.08,
    strokeColor: "black",
    strokeWeight: 2,
    //adjust the distance between lighthouse and polyline
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
  // ship 2 reverse
  // var lineSymbolR = {
  //   path:
  //     "M17,22 L26.9047619,22 L27,22 C27,24.2046438 25.2094214,26 23.0006308,26 L9.99936922,26 C7.79044819,26 6,24.209139 6,22 L6.0952381,22 L16,22 L16,7 L17,7 L17,22 L17,22 Z M27,21 L18,21 L18,12 L27,21 L27,21 Z M9,12.5 C6,17.5 6,21 6,21 L15,21 C15,21 14,19.5 14,15 C14,10.5 15,7 15,7 C15,7 12,7.5 9,12.5 L9,12.5 Z",
  //   fillColor: "#0364f5",
  //   fillOpacity: 1,
  //   strokeColor: "#393",
  //   rotation: 90,
  //   scale: 1.2,
  //   anchor: new google.maps.Point(600, 200)
  // };

  var lineSymbolR = {
    path:
      "M202.302,353.148c-46.343,23.113-90.541,45.085-146.523,61.376V305.988c0-8.448,4.182-16.346,11.166-21.096l41.807-28.428   c3.571-2.428,10.026-4.415,14.344-4.415h67.119v-39.534h75.523v39.534h57.871c9.393,0,17.006,7.614,17.006,17.006v23.501   C287.413,310.723,244.533,332.091,202.302,353.148z M190.215,173.476v20.514h75.523v-20.514c0-10.51-8.52-19.029-19.029-19.029   h-37.467C198.734,154.447,190.215,162.966,190.215,173.476z M146.352,113.665c5.434,0,10.604-1.118,15.307-3.122   c5.336,7.391,13.97,12.248,23.782,12.248c3.202,0,6.228-0.64,9.113-1.587c-0.046,0.532-0.16,1.044-0.16,1.587   c0,10.061,8.155,18.215,18.215,18.215s18.215-8.155,18.215-18.215c0-10.06-8.155-18.215-18.215-18.215   c-0.004,0-0.008,0.001-0.012,0.001c1.419-3.447,2.226-7.211,2.226-11.169c0-16.228-13.155-29.384-29.383-29.384   c-0.54,0-1.043,0.13-1.575,0.159c-4.575-16.508-19.549-28.695-37.513-28.695c-21.588,0-39.088,17.5-39.088,39.088   C107.264,96.164,124.764,113.665,146.352,113.665z M528.954,496.265c-3.778,5.754-3.881,13.155-0.061,18.881l22.525,33.761   c8.232,12.31-1.351,28.69-16.114,27.549L34.419,537.106c-13.626-1.07-25.016-10.651-28.489-23.872   C2.893,501.669,0,487.318,0,474.604c0-26.148,10.511-31.027,32.011-36.157c192.263-45.878,245.145-156.462,565.948-174.566   c8.333-0.47,15.035,6.81,13.919,15.081C602.372,349.385,568.794,435.601,528.954,496.265z M504.474,413.614   c0-4.7-3.804-8.504-8.504-8.504s-8.503,3.804-8.503,8.504c0,13.133-8.766,24.136-20.711,27.803v-58.622   c6.393-3.17,10.827-9.696,10.827-17.314c0-10.707-8.68-19.387-19.387-19.387c-10.706,0-19.386,8.68-19.386,19.387   c0,7.663,4.484,14.226,10.938,17.373v58.563c-11.945-3.667-20.711-14.67-20.711-27.803c0-4.7-3.804-8.504-8.504-8.504   s-8.504,3.804-8.504,8.504c0,25.485,20.735,46.221,46.221,46.221C483.738,459.835,504.474,439.1,504.474,413.614z",
    fillColor: "#F00",
    fillOpacity: 0.8,
    strokeColor: "#393",
    rotation: 90,
    scale: 0.1,
    anchor: new google.maps.Point(20, 400)
  };

  //! The map, centered at lisbon
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: lisbon,
    styles: [
      {
        elementType: "labels",
        stylers: [
          {
            visibility: "off"
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
        featureType: "administrative.neighborhood",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "landscape.natural",
        stylers: [
          {
            color: "#bdac74"
          },
          {
            visibility: "on"
          }
        ]
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#bdac74"
          },
          {
            visibility: "on"
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
        featureType: "road",
        stylers: [
          {
            visibility: "off"
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
        featureType: "transit",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "water",
        stylers: [
          {
            color: "#26425d"
          },
          {
            visibility: "on"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text",
        stylers: [
          {
            color: "#7d5e25"
          },
          {
            visibility: "on"
          }
        ]
      }
    ]
  });

  // Use the marker to create route
  var preDefineCoordinates = [
    houston,
    miami,
    weather1,
    weather2,
    weather3,
    lisbon,
    lightHouse1,
    lightHouse2,
    lightHouse3,
    elizabeth_sa,
    weather4,
    mumbai
  ];
  //the style of the preDefinedPath
  var preDefinePath = new google.maps.Polyline({
    path: preDefineCoordinates,
    geodesic: true,
    strokeColor: "#5b85e0",
    strokeOpacity: 0.7,
    strokeWeight: 20
  });

  //draw the preDefinePath(polyline)
  preDefinePath.setMap(map);

  // draw the marker on the map
  var huston_marker = new google.maps.Marker({
    position: houston,
    map: map,
    icon: "assets/image/port_marker/port-map-marker-point.svg"
  });
  var lisbon_marker = new google.maps.Marker({
    position: lisbon,
    map: map,
    icon: "assets/image/port_marker/port-map-marker-point.svg"
  });
  var elizabeth_sa_marker = new google.maps.Marker({
    position: elizabeth_sa,
    map: map,
    icon: "assets/image/port_marker/port-map-marker-point.svg"
  });
  var mumbai_marker = new google.maps.Marker({
    position: mumbai,
    map: map,
    icon: "assets/image/port_marker/port-map-marker-point.svg"
  });
  var miami_marker = new google.maps.Marker({
    position: miami,
    map: map,
    icon: "assets/image/port_marker/port-map-marker-point.svg"
  });
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

  //!------------------------------------------------Marker Click Action------------------------
  //! In route setting mode,every click will return the marker index in the preDefinePath array
  //! Which can easily transfer the starting point ,ending point and the points between them.
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
      marinePlanCoordinates.push(11);
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
  var infowindow = new google.maps.InfoWindow();
  miami_marker.addListener("mouseover", function() {
    infowindow.setContent(miami_info);
    infowindow.open(map, this);
  });
  miami_marker.addListener("mouseout", function() {
    infowindow.close();
  });

  $("#routeConfirm").on("click", function initMap() {
    clearInterval(intervalID);
    // starting point index in preDefinePath array
    var a = marinePlanCoordinates[0];
    //ending point index in perDefinePath array
    var b = marinePlanCoordinates[1];
    // Get direction by compare the index
    if (a < b) {
      let marinePath_L_R_C = [];
      for (let j = a; j <= b; j++) {
        marinePath_L_R_C.push(preDefineCoordinates[j]);
      }
      weatherFactor(marinePath_L_R_C);
      marinePath_L_R = new google.maps.Polyline({
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
      startPort = marinePlanCoordinates[1];
      console.log("this is " + startPort);
      animateBoat(marinePath_L_R);
    } else if (a > b) {
      let marinePath_R_L_C = [];
      for (let x = a; x >= b; x--) {
        marinePath_R_L_C.push(preDefineCoordinates[x]);
      }
      console.log("from r to l " + marinePath_R_L_C);
      weatherFactor(marinePath_R_L_C);
      marinePath_R_L = new google.maps.Polyline({
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
      startPort = marinePlanCoordinates[1];
      console.log("this is " + startPort);
      animateBoatR(marinePath_R_L);
    }

    function animateBoat(line) {
      var count = 0;
      var intervalID = window.setInterval(function() {
        var icons = line.get("icons");
        count = (count + 1) % 200;
        console.log("count = " + count);
        if (count === 0) {
          // stop the animate and initial
          clearInterval(intervalID);
          icons[0].icon = null;
          removeRedLine();
          marinePlanCoordinates = [startPort];
          mode = "";
        }
        var icons = line.get("icons");
        icons[0].offset = count / 2 + "%";
        line.set("icons", icons);
      }, boatSpeedFactor);
    }

    function animateBoatR(line) {
      var count = 0;
      var intervalID = window.setInterval(function() {
        var icons = line.get("icons");
        count = (count + 1) % 200;
        console.log("count = " + count);
        if (count === 0) {
          // stop the animate and initial
          window.clearInterval(intervalID);
          icons[0].icon = null;
          removeGreenLine();
          marinePlanCoordinates = [startPort];
          mode = "";
        }
        var icons = line.get("icons");
        icons[0].offset = count / 2 + "%";
        line.set("icons", icons);
      }, boatSpeedFactor);
    }
  });

  // $("#routeMode").on("click", function() {
  //   console.log("route mode now");
  //   clearInterval(intervalID);
  //   mode = "route";
  //   remoteRedLine();
  // });
}
function removeRedLine() {
  marinePath_L_R.setMap(null);
}
function removeGreenLine() {
  marinePath_R_L.setMap(null);
}

//!----------------Main Function Ends-----------------------------

//!--------------------------------WEATHER API-----------------------------
//!weatherFactor function need an array argument. the argument is an ordered list of location of the route.
//!By now,in this game, we only use the wind speed as the weather factor. In future will add more
//!the function will return boatSpeedFactor(the interval time for ship each movement)
//!----------------------------------------------------------------------------
function weatherFactor(coordinateArray) {
  var APIKey = "166a433c57516f51dfab1f7edaed8413";
  var windInfo = [];

  for (let i = 0; i < coordinateArray.length; i++) {
    console.log("this is i " + i);
    lat = coordinateArray[i].lat;
    console.log(lat);
    lon = coordinateArray[i].lng;
    console.log(lon);
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      windInfo.push(response.wind.speed);
      console.log("wind info " + windInfo);
      let m = Math.max(...windInfo);
      console.log("m equal " + m);
      if (m > 7 && m < 11) {
        boatSpeedFactor = 100;
        weatherCauseDelay = 9;
      } else if (m <= 7) {
        boatSpeedFactor = 20;
        weatherCauseDelay = 0;
      } else {
        boatSpeedFactor = 200;
        weatherCauseDelay = 15;
      }
    });
  } //for loop end
  // console.log("weather array " + windInfo);
}
//!--------------------------------COMMODITY PRICE-----------------------------
//!Four functions for four commodity
//!Each function will return an array which include 5 items. 5 items match 5 ports
//!For arm, olive oil, cheese, need input nth day
//!For fish, no argument needed
//!----------------------------------------------------------------------------

function armPrice(nth_day) {
  var queryURL_arms =
    "https://www.quandl.com/api/v3/datasets/LBMA/GOLD.json?api_key=YAJjnPkiAFh1n3YazeZP";
  $.ajax({
    url: queryURL_arms,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var dailyPrice = response.dataset.data;
    var armEachPort = dailyPrice[nth_day].slice(1);
    console.log(armEachPort);
  });
  return armEachPort;
}
function oliveOilPrice(nth_day) {
  var queryURL_olive_oil =
    "https://www.quandl.com/api/v3/datasets/LBMA/SILVER.json?api_key=YAJjnPkiAFh1n3YazeZP";
  $.ajax({
    url: queryURL_olive_oil,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var dailyPrice = response.dataset.data;
    var ooEachPort1 = dailyPrice[nth_day].slice(1);
    var ooEachPort2 = dailyPrice[nth_day + 1].slice(2);
    var ooEachPort = ooEachPort1.concat(ooEachPort2);
    // console.log(armEachPort);
  });
  return ooEachPort;
}

function fishPrice() {
  var fishEachPort = [];
  queryURL_fish =
    "https://www.quandl.com/api/v3/datasets/WGEC/WLD_ZINC.json?api_key=YAJjnPkiAFh1n3YazeZP";
  $.ajax({
    url: queryURL_fish,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var dailyPrice = response.dataset.data;
    for (let i = 0; i < 5; i++) {
      let c = Math.floor(56 * Math.random());
      fishEachPort.push(dailyPrice[c]);
    }
    return fishEachPort;
  });
}

function cheesePrice(nth_day) {
  var queryURL_cheese =
    "https://www.quandl.com/api/v3/datasets/CHRIS/CME_ED19.json?api_key=YAJjnPkiAFh1n3YazeZP";
  var cheeseEachPort = [];
  $.ajax({
    url: queryURL_cheese,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    let c = response.dataset.data[nth_day];
    console.log(c);
    let idx = [1, 2, 3, 4, 6];
    for (let i = 0; i < 5; i++) {
      let d = idx[i];
      cheeseEachPort.push(c[d]);
    }
    return cheeseEachPort;
  });
}
