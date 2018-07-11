function timer(minutes) {
    var seconds = 60;
    var mins = minutes

    function clock() {
        //This script expects an element with an ID = "counter".
        var counter = document.getElementById("counter");
        var current_minutes = mins - 1
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            if (mins > 1) {
                countdown(mins - 1);
            }
        }
        if (seconds == 0 && current_minutes == 0) {
            alert("TIME UP")
        }
    }

    clock();
}



