
var renkler = ["#FF5733","#33FF57", "#3357FF", "#F1C40F", 
               "#8E44AD", "#1ABC9C", "#E74C3C", "#34495E"];

function degistir(){

    var randomIndex = Math.floor(Math.random() * renkler.length);
    var secilenrenk = renkler[randomIndex];

    document.getElementById("container").style.backgroundColor = secilenrenk;
    document.getElementById("renk").textContent = "Şu Anki Renk: " + secilenrenk;
}