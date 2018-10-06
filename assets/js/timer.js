class Timer{

    constructor(time = 0, ref = firebase.database().ref("/"+ accountName + "-" + playerName)) {
        this.time = time;
        this.ref = ref;
        this.setRef();
    }

    setTime(newTime) {
        this.time = newTime;
        this.setRef();
    }

    setRef(){
        this.ref.push().set({
            time: this.time
        });
    }

}

