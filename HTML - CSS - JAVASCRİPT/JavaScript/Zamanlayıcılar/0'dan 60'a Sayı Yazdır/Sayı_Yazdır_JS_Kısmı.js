var count = 60;
var countdowndiv = document.getElementById("countdown");
var sayilarinyazimi = ["sıfır", "bir", "iki", "üç"];

function updateCountdown() {
    if (count >= 0) {

        if (count <= 3) {
            countdowndiv.innerHTML += sayilarinyazimi[count] + "<br>";
        } 

        else {
            countdowndiv.innerHTML += count + "<br>";
        }

        count--; 
        setTimeout(updateCountdown, 1000);  
    }
}

updateCountdown();
