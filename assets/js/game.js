// Require x amount of fresh water per distance.
// In a tank similar to STF, or part of your hold.

// Each time you get to port:
// Buy and sell function


// Write a function that compares current hold to max size or maybe
// or use a get function

function displayPrices(){
    // Display to buy and sell screens
    // Me or Qi may do this
}

function sell(name, amount) {
    var item = Ship.getCargo(name);
    if (item) {
        if (amount <= item[1])
            Ship.setCargo(name, item[1] - amount);
            // may have to add a listener, based on the database perhaps
            Ship.setMoney(Ship.getMoney() + calculatePrice(name, amount));
    }
    else
        console.log("Not found");  // Change to functionality
}

function buy(name, amount) {
    var item = Ship.setCargo(amount);
    if (item) {
        Ship.setCargo(name, Ship.getCargo(name, item[1] + amount))
        Ship.setMoney(Ship.getMoney() - calculatePrice(name, amount));
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

function voyage(destination, weather) {
    // Calculate distance from current location to 'destination'
    // Calculate weather factors
    // Use those to determine water usage / hull damage / cargo loss
    Ship.
    Ship.setlocation = destination;
}