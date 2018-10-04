// temp
const defaultCargo = [["Coffee",0], ["Spices",0], ["Gold",0], ["Food",0]];
const playerName = "Red";

var ref = firebase.database().ref()('/'+playerName);

var Ship = (function() {

    var hull = 5000;
    var money = 1000;
    var hold = 100;
    var fuel = 100;
    var cargo = defaultCargo;

    return {
        init: function(h = 5000, m = 1000, hld = 100, f = 100) {
            hull = h;
            money = m;
            hold = hld;
            fuel = f;
        },

        setCargo: function(name, amount) {
            for (var i = 0; i < cargo.length; i++)
                if (cargo[i][0] == name) {
                    cargo[i].pop();
                    cargo[i].push(amount);
                    i = cargo.length;
                }
        },

        setMoney: function(newMoney) {
            money = newMoney;
        },

        // setHold: function(newHold) {
        //     hold = newHold;
        // },

        // setFuel: function(newFuel) {
        //     fuel = newFuel
        // },

        getMoney: function() {
            return money;
        },

        getCargo: function() {
            // write code here to display to the various html pages that needs it
        },
    }
})();



