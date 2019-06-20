var aud = document.getElementById("audioName");
var w;

function playAudio() {
    aud.play();
}

playAudio();

function websteros() {
    if (typeof(Worker) !== "undefined") {
        // Yes! Web worker support!
        if (typeof(w) == "undefined") {
            w = new Worker("./scripts/webWorker.js");
            w.onmessage = function(event) {
                document.getElementById("wwText").innerHTML = event.data;
            };
        }
    } else {
        // Sorry! No Web Worker support..
    }
}

function stopWorker() {
    w.terminate();
    w = undefined;
}