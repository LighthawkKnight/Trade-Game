// Require x amount of fresh water per distance.
// In a tank similar to STF, or part of your hold.

// Each time you get to port:
// Buy and sell function


// Write a function that compares current hold to max size or maybe
// or use a get function

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

function displayPrices(){
    // Display to buy and sell screens
    // Me or Qi may do this
}

function sell(name, amount) {
    var item = Ship.getCargo(name);
    if (item) {
        if (amount <= item[1]) {
            Ship.setCargo(name, item[1] - amount);
<<<<<<< HEAD
            // may have to add a listener, based on the database perhaps
=======
>>>>>>> c53a6f920f8efd30b863fc75e7a9771740c49ae6
            Ship.setItem("money", Ship.money += calculatePrice(name, amount));
        }
        else
            alert("You do not possess this many " + name);
    }
    else
        console.log("Not found");  // Change to functionality
}

function buy(name, amount) {
    var item = Ship.getCargo(name);
    if (item) {
        if (Ship.isSpace(amount)) {
            Ship.setCargo(name, Ship.getCargo(name, item[1] + amount))
            Ship.setItem("money", Ship.money -= calculatePrice(name, amount));
        }
        else
            alert("Not enough in space in your cargo hold.");
    }
    else
        console.log("Not found");

    //trade screen

}

function calculatePrice(name, amount) {
    // TODO: lookup name
    price = 200;
    return amount * price;
}

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

class Voyage {

static voyage(destination, weather) {
    // Calculate distance from current location to 'destination'
    // Calculate weather factors
    // Use those to determine water usage / hull damage / cargo loss
    // On nav button click
    document.querySelector('#navigate-id').addEventListener("click", function() {
<<<<<<< HEAD
        ship.setItem("location", destination);
        timer.setTime(calculateTime(Ship.location, destination));
=======
        Ship.setItem("location", destination);
        Timer.setTime(calculateTime(Ship.location, destination));
>>>>>>> c53a6f920f8efd30b863fc75e7a9771740c49ae6
    });
}

}

