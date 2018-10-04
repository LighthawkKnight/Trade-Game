firebase.initializeApp(Config.config);

window.onload = function() { 
    Ship.init();
    console.log(ship.cargo[0]);
    ship.setCargo("Coffee", 2);
    console.log(ship.cargo[0]);
}