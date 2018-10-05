firebase.initializeApp(Config.config);

window.onload = function() { 
    Ship.init();
    console.log(ship.cargo[0]);
    Ship.setCargo("Coffee", 2);
    console.log(ship.cargo[0]);
}