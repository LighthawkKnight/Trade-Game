// temp
const defaultCargo = [["Coffee",0], ["Spices",0], ["Gold",0], ["Food",0]];
const playerName = "Red";

var ref = firebase.database().ref()('/'+ accountName + '/' + playerName);

var Ship = (function() {

    var hull;
    var money;
    var hold;
    var fuel;
    var cargo;
    var crew;
    var location;

    return {
        init: function(l = "London", h = 5000, m = 1000, hld = 100, f = 100, c = 30) {
            location = l;
            hull = h;
            money = m;
            hold = hld;
            fuel = f;
            cargo = defualtCargo;
            crew = c;
        },

        // Setters
        setCargo: function(name, amount) {
            for (var i = 0; i < cargo.length; i++)
                if (cargo[i][0] == name) {
                    cargo[i].pop();
                    cargo[i].push(amount);
                    i = cargo.length;
                }
        },

        setHull: function(newHull) {
            hull = newHull;
        },

        setMoney: function(newMoney) {
            money = newMoney;
        },

        setHold: function(newHold) {
            hold = newHold;
        },

        setFuel: function(newFuel) {
            fuel = newFuel
        },

        setLocation: function(newLocation) {
            location = newLocation;
        },

        // Getters
        getHull: function() {
            return hull;
        },

        getMoney: function() {
            return money;
        },

        getHold: function() {
            return hold;
        },

        getFuel: function() {
            return fuel;
        },

        getLocation: function() {
            return location;
        },

        getCargo: function(name) {
            for (var i = 0; i < cargo.length; i++)
            if (cargo[i][0] == name) {
                return cargo[i];
                i = cargo.length;
            }
            return null;
        },

        outputCargo: function() {
            // write code here to display to the various html pages that needs it
        },
    }
})();



