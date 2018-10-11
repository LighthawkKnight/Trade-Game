class Timer{

    constructor(time = 0) {
        this.time = time;
        localStorage.setItem("time", time);
        document.querySelector('#time-elapsed').innerHTML = " " + this.time + " days";
    }

    setTime(newTime) {
        this.time = newTime;
        localStorage.setItem("time", newTime);
        document.querySelector('#time-elapsed').innerHTML = " " + newTime + " days";
    }


}

