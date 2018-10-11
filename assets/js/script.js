
var playerName = "Red";
var accountName = "JeffD";
firebase.initializeApp(Config.config);
var loginScreen = document.querySelector('#Login');
var gameMap = document.querySelector('#game-map');
var apiMap = document.querySelector('#api-map');
var tradeScreen = document.querySelector('#trade-screen');


// document.querySelector("#login-dialog").addEventListener("click", function (){
//     loginDialog.showModal();
// });

// document.querySelector("#login-start-screen").addEventListener("click", function (){
//     loginDialog.showModal();
// });

// document.querySelector("#logout").addEventListener("click", function(){
//     firebase.auth().signOut();
//     // show start screen
//     var logoutMessage = $("?????????????");
//     logoutMessage.html("<b>You have succesfully signed out!</b>");
//     // append logout message
// });

document.querySelector('.buttonLocation').addEventListener("click", function() {
    console.log(getStartPort());
    gameMap.style.display = "none";
    apiMap.style.display = "block";
    // Hard part - sense the variables from api.js
});

document.querySelector('.buttonTrade').addEventListener("click", function() {
    // open trade screen.  Let's see if we can make this a modal
    gameMap.style.display = "none";
    tradeScreen.style.display = "block";
});

// Adding listener to each 'port options' button
var ports = document.getElementsByClassName("port-opt")
for (var i = 0; i < ports.length; i++) {
    ports[i].addEventListener('click', function(){
        if (document.querySelector("#TradeOptions").style.display === "none") {
            document.querySelector("#TradeOptions").style.display = "block";
        } else {
            document.querySelector("#TradeOptions").style.display = "none";
        }
    });
}
// Start screen function
function startScreen(){
    
    // show this/ hide others, also starts that way
    loginScreen.style.display = "block";
    gameMap.style.display = "none";
    apiMap.style.display = "none";
    tradeScreen.style.display = "none";
    gameStart();
    // login is handled above
    // accountName = firebase.auth().currentUser;
    // playerName = firebase.auth().currentUser.displayName;
}

function gameStart() {
    loginScreen.style.display = "none";
    gameMap.style.display = "block";
    apiMap.style.display = "none";
    tradeScreen.style.display = "none";
    initializeClass();
}
// var ref = firebase.database().ref("/"+ accountName + "-" + playerName)

Account.init();






// testing
