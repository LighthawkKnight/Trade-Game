window.onload = function() { 

var playerName = "Red";
var accountName = "JeffD";
var ship;
var timer;
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
    // show this/ hide others, probably will simply start that way
    // login
    // accountName = firebase.auth().currentUser;
    // playerName = firebase.auth().currentUser.displayName;
}

// var ref = firebase.database().ref("/"+ accountName + "-" + playerName)

Account.init(accountName, playerName);

if (localStorage.getItem("money") === null) {
    ship = new Ship();
    timer = new Timer();
}
else {
    // location = "Houston", hull = 5000, money = 1000, hold = 100, fuel = 100
    ship = new Ship(localStorage.getItem("location"), localStorage.getItem("hull"), localStorage.getItem("money"), localStorage.getItem("hold"), localStorage.getItem("fuel"), JSON.parse(localStorage.getItem("cargo")));
    timer = new Timer();
}
var market = new Market();



// testing

}