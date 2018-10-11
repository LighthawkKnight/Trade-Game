// Houston, Miami, Lisbon, Elizabeth SA, Mumbai
// Houston to Miami - 1178 nm, 10 days
// Miami to Lisbon - 4478 nm, 37 days
// Lisbon to Elizabeth - 6541 nm, 55 days
// Elizabeth to Mumbai - 5098 nm, 42.5 days
// at 5 knots
const   HouToMia = 10,
        MiaToLis = 37,
        LisToEli = 55,
        EliToMum = 43;


var ship;
var timer;

function sell(name, amount, totalPrice) {
    var item = ship.getCargo(name);
    if (item != null) {
        if (amount <= item) {
            ship.setCargo(name, item - amount);
            ship.setItem("money", ship.money += totalPrice);
        }
        else
            alert("You do not possess this many " + name);
    }
    else
        console.log("Not found");  // Change to functionality
}

function buy(name, amount, totalPrice) {
    var item = ship.getCargo(name);
    if (item != null) {
        if (ship.isSpace(amount)) {
            if (ship.money >= totalCost) {
                ship.setCargo(name, item + amount)
                ship.setItem("money", ship.money -= totalPrice);
            }
            else
                alert("Not enough money");
        }
        else
            alert("Not enough in space in your cargo hold.");
    }
    else
        console.log("Not found");

    //trade screen

}

// function calculatePrice(name, amount) {
//     // TODO: lookup name
//     price = 200;
//     return amount * price;
// }

// Houston, Miami, Lisbon, Elizabeth SA, Mumbai
function calculateTime(start, end) {
    if (start === "Houston") {
        if (end == "Miami")
            return HouToMia;
        if (end == "Lisbon")
            return HouToMia + MiaToLis;
        if (end == "Elizabeth")
            return HouToMia + MiaToLis + LisToEli;
        if (end == "Mumbai")
            return HouToMia + MiaToLis + LisToEli + EliToMum;
    }
    else if (start == "Miami") {
        if (end == "Houston")
            return HouToMia;
        if (end == "Lisbon")
            return MiaToLis;
        if (end == "Elizabeth")
            return MiaToLis + LisToEli;
        if (end == "Mumbai")
            return MiaToLis + LisToEli + EliToMum;        
    }
    else if (start == "Lisbon") {
        if (end == "Miami")
            return MiaToLis;
        if (end == "Houston")
            return HouToMia + MiaToLis;
        if (end == "Elizabeth")
            return LisToEli;
        if (end == "Mumbai")
            return LisToEli + EliToMum;        
    }
    else if (start == "Elizabeth") {
        if (end == "Miami")
            return LisToEli + MiaToLis + HouToMia;
        if (end == "Houston")
            return LisToEli + MiaToLis;
        if (end == "Lisbon")
            return LisToEli;
        if (end == "Mumbai")
            return EliToMum;        
    }
    else if (start == "Mumbai") {
        if (end == "Miami")
            return HouToMia + MiaToLis + LisToEli + EliToMum;
        if (end == "Houston")
            return MiaToLis + LisToEli + EliToMum;
        if (end == "Lisbon")
            return LisToEli + EliToMum;
        if (end == "Elizabeth")
            return EliToMum;        
    }
    return null;
}

function initializeClass(){
    // Defaults: location = "Houston", hull = 5000, money = 1000, hold = 100, fuel = 100, time = 0
    if (localStorage.getItem("money") === null && localStorage.getItem("location") === null) {
        ship = new Ship();
        timer = new Timer();
    }
    else {
        // location = "Houston", hull = 5000, money = 1000, hold = 100, fuel = 100
        ship = new Ship(localStorage.getItem("location"), localStorage.getItem("hull"), localStorage.getItem("money"), localStorage.getItem("hold"), localStorage.getItem("fuel"), JSON.parse(localStorage.getItem("cargo")));
        timer = new Timer();
    }
    currentLocation();
    changePrice();
}

function currentLocation() {
    //temp
    // filter: grayscale(100%);
    var houston = document.querySelector("#hou-img");
    var houPort = document.querySelector("#bp1");
    var miami = document.querySelector("#mia-img");
    var miaPort = document.querySelector("#bp2");
    var lisbon = document.querySelector("#lis-img");
    var lisPort = document.querySelector("#bp3");
    var elizabeth = document.querySelector("#liza-img");
    var lizaPort = document.querySelector("#bp4");
    var mumbai = document.querySelector("#mum-img");
    var mumPort = document.querySelector("#bp5");
    var bw = "grayscale(100%)";
    switch(ship.location){
        case "Houston":
            houston.style.filter = "";
            miami.style.filter = bw;
            lisbon.style.filter = bw;
            elizabeth.style.filter = bw;
            mumbai.style.filter = bw;
            houPort.style.display = "block";
            miaPort.style.display = "none";
            lisPort.style.display = "none";
            lizaPort.style.display = "none";
            mumPort.style.display = "none";
            $("#portPlace").html("Houston");
            break;
        case "Miami":
            houston.style.filter = bw;
            miami.style.filter = "";
            lisbon.style.filter = bw;
            elizabeth.style.filter = bw;
            mumbai.style.filter = bw;
            houPort.style.display = "none";
            miaPort.style.display = "block";
            lisPort.style.display = "none";
            lizaPort.style.display = "none";
            mumPort.style.display = "none";
            $("#portPlace").html("Miami");
            break;
        case "Lisbon":
            houston.style.filter = bw;
            miami.style.filter = bw;
            lisbon.style.filter = "";
            elizabeth.style.filter = bw;
            mumbai.style.filter = bw;
            houPort.style.display = "none";
            miaPort.style.display = "none";
            lisPort.style.display = "block";
            lizaPort.style.display = "none";
            mumPort.style.display = "none";
            $("#portPlace").html("Lisbon");
            break;
        case "Elizabeth":
            houston.style.filter = bw;
            miami.style.filter = bw;
            lisbon.style.filter = bw;
            elizabeth.style.filter = "";
            mumbai.style.filter = bw;
            houPort.style.display = "none";
            miaPort.style.display = "none";
            lisPort.style.display = "none";
            lizaPort.style.display = "block";
            mumPort.style.display = "none";
            $("#portPlace").html("Elizabeth");
            break;
        case "Mumbai":
            houston.style.filter = bw;
            miami.style.filter = bw;
            lisbon.style.filter = bw;
            elizabeth.style.filter = bw;
            mumbai.style.filter = "";
            houPort.style.display = "none";
            miaPort.style.display = "none";
            lisPort.style.display = "none";
            lizaPort.style.display = "none";
            mumPort.style.display = "block";
            $("#portPlace").html("Mumbai");
            break;
        default:
            console.log("Location error");
    }
}

function voyage(destination) {
    timer.setTime(calculateTime(ship.location, destination));
    ship.setItem("location", destination);
    currentLocation();
    changePrice();
}

// This will change the prices in the game based on the amount of days passed
function changePrice() {
    var prices = [];
    var houPrices = [];
    var miaPrices = [];
    var lisPrices = [];
    var eliPrices = [];
    var mumPrices = [];
    var days = timer.time;

    if (timer.time == 0)
        days = 1;

    prices[0] = cheesePrice(days);
    prices[1] = oliveOilPrice(days);
    prices[2] = fishPrice(days);
    prices[3] = armPrice(days);

    setTimeout(function(){
        for (var i = 0; i < prices.length; i++) 
            for (var j = 0; j < prices[i].length; j++) {
                var rand = Math.random() * 2 + 0.1;
                prices[i][j] *= rand;
                prices[i][j] = parseInt(prices[i][j])
                switch(j) {
                    case 0: houPrices.push(prices[i][j]); break;
                    case 1: miaPrices.push(prices[i][j]); break;
                    case 2: lisPrices.push(prices[i][j]); break;
                    case 3: eliPrices.push(prices[i][j]); break;
                    case 4: mumPrices.push(prices[i][j]); break;
                    default: console.log("changePrice error");
                }
            }
        localStorage.setItem("Houston", JSON.stringify(houPrices));
        localStorage.setItem("Miami", JSON.stringify(miaPrices));
        localStorage.setItem("Lisbon", JSON.stringify(lisPrices));
        localStorage.setItem("Elizabeth", JSON.stringify(eliPrices));
        localStorage.setItem("Mumbai", JSON.stringify(mumPrices));
    },6000);
}

