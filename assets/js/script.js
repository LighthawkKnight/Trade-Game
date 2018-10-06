window.onload = function() { 

var playerName;
var accountName;
var ref;

firebase.initializeApp(Config.config);

document.querySelector("#login").addEventListener("click", function (){
    loginDialog.showModal();
});

document.querySelector("#login-start-screen").addEventListener("click", function (){
    loginDialog.showModal();
});

document.querySelector("#logout").addEventListener("click", function(){
    firebase.auth().signOut();
    // show start screen
    var logoutMessage = $("?????????????");
    logoutMessage.html("<b>You have succesfully signed out!</b>");
    // append logout message
});

// Start screen function
function startScreen(){
    // show this/ hide others
    // login
    accountName = firebase.auth().currentUser;
    playerName = firebase.auth().currentUser.displayName;
}

ref = firebase.database().ref("/"+ accountName + "-" + playerName);

var ship = new Ship();
var timer = new Timer();
var market = new Market();

// testing
console.log(ship.cargo[0]);
Ship.setCargo("Coffee", 2);
console.log(ship.cargo[0]);
}