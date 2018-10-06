class Timer{

    constructor(time = 0) {
        this.time = time;
        localStorage.setItem("time", time);
    }

    setTime(newTime) {
        this.time = newTime;
        localStorage.setItem("time", newTime);
    }

}

