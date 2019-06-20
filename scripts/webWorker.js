var i = -1;
var textWW = ["Az", "sym", "edno", "shantavo", "syshtestvo", "-", "molq", "pomognete", "mi"];
var textBuild = "";

function timedCount() {
    if (i < 8) {
        i = i + 1;
        textBuild += (textWW[i] + " ");
        postMessage(textBuild);
    }
    setTimeout("timedCount()", 250);
}

timedCount();