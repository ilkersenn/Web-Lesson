function tersCevir(){

    var yazı = document.getElementById("yazı").value;

    var tersyazi = "";

    for (var i = yazı.length - 1 ; i >= 0; i--) {
        
        tersyazi += yazı[i];
    }

    document.getElementById("sonuc").textContent = "Çevirilen Metin: " + tersyazi;
}