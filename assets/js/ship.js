// temp
// because of firebase array handling, should get list of goods before writing functions for them
const defaultCargo = [["Coffee",0], ["Spices",0], ["Gold",0], ["Food",0]];

class Ship {

    constructor(location = "London", hull = 5000, money = 1000, hold = 100, fuel = 100) {
        this.location = location;
        this.hull = hull;
        this.money = money;
        this.hold = hold;
        this.fuel = fuel;
        this.cargo = defualtCargo;
        localStorage.setItem("location", this.location);
        localStorage.setItem("money", this.money);
        localStorage.setItem("hull", this.hull);
        localStorage.setItem("hold", this.hold);
        localStorage.setItem("fuel", this.fuel);
        localStorage.setItem('cargo', JSON.stringify(this.cargo));
    }

    // Setters
    setCargoHold(cargo) {
        this.cargo = JSON.parse(cargo);
    }

    setCargo(name, amount) {
        for (var i = 0; i < this.cargo.length; i++)
            if (this.cargo[i][0] == name) {
                this.cargo[i].pop();
                this.cargo[i].push(amount);
                i = this.cargo.length;
                localStorage.setItem('cargo', JSON.stringify(this.cargo));
            }
    }

    // Getters
    getCargo(name) {
        for (var i = 0; i < this.cargo.length; i++)
            if (this.cargo[i][0] == name)
                return this.cargo[i];
        return null;
    }

    // checks if the cargo hold is full if the amount passed in is added
    isSpace(amount = 0){
        for (var i = 0; i < this.cargo.length; i++)
            amount += this.cargo[i][1];
        if (amount <= this.hold)
            return true;
        else
            return false;
    }

    // Getting a new ship
    newShip(hull, hold, fuel) {
        this.hull = hull;
        this.hold = hold;
        localStorage.setItem("hull", this.hull);
        localStorage.setItem("hold", this.hold);
    }

    outputCargo() {
        // write code here to display to the various html pages that needs it
    }
    
}

