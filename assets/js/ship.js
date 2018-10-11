// temp
// because of firebase array handling, should get list of goods before writing functions for them
const defaultCargo = [["Cheese",0], ["Olive Oil",0], ["Fish",0], ["Arms",0]];

class Ship {

    constructor(location = "Houston", hull = 5000, money = 10000, hold = 100, fuel = 100, cargo = defaultCargo) {
        this.location = location;
        this.hull = hull;
        this.money = money;
        this.hold = hold;
        this.fuel = fuel;
        if (cargo === defaultCargo)
            this.cargo = cargo;
        else
            this.setCargoHold(cargo);
        localStorage.setItem("location", this.location);
        localStorage.setItem("money", this.money);
        localStorage.setItem("hull", this.hull);
        localStorage.setItem("hold", this.hold);
        localStorage.setItem("fuel", this.fuel);
        localStorage.setItem('cargo', JSON.stringify(this.cargo));
        $('#your-money').html(this.money);
    }

    // Setters
    setCargoHold(cargo) {
        this.cargo = JSON.parse(cargo);
    }

    setItem(item, value) {
        switch (item) {
            case "location":
                this.location = value;
                localStorage.setItem(item, value);
                break;
            case "hull":
                this.hull = value;
                localStorage.setItem(item, value);
                break;
            case "money":
                this.money = value;
                localStorage.setItem(item, value);
                $('#your-money').html(value);
                break;
            case "hold":
                this.hold = value;
                localStorage.setItem(item, value);
                break;
            case "fuel":
                this.fuel = value;
                localStorage.setItem(item, value);
                break;
            default:
                console.log("Invalid item - " + item);
        }
    }

    setCargo(name, amount) {
        for (var i = 0; i < this.cargo.length; i++)
            if (this.cargo[i][0] == name) {
                console.log(amount);
                this.cargo[i].pop();
                this.cargo[i].push(amount);
                i = this.cargo.length;
                console.log(this.cargo);
                localStorage.setItem('cargo', JSON.stringify(this.cargo));
            }
    }

    // Getters
    getCargo(name) {
        for (var i = 0; i < this.cargo.length; i++)
            if (this.cargo[i][0] == name) {
                return this.cargo[i][1];
            }
        return null;
    }

    // checks if the cargo hold is full if the amount passed in is added
    isSpace(amount){
        for (var i = 0; i < this.cargo.length; i++) {
            amount += this.cargo[i][1];
        }
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

    static outputCargo(cargo) {
        // write code here to display to the various html pages that needs it
        document.querySelector('#money-inv').innerHTML = "$" + localStorage.getItem("money");
        document.querySelector('#cheese-inv').innerHTML = cargo[0][1];
        document.querySelector('#olive-inv').innerHTML = cargo[1][1];
        document.querySelector('#fish-inv').innerHTML = cargo[2][1];
        document.querySelector('#arms-inv').innerHTML = cargo[3][1];
    }
    
}


