function sayacYazdir(){

    var metin = document.getElementById("metin").value;

    var karaktersayisi = metin.length;

    var kelimeler = metin.trim().split(/\s+/).filter(Boolean);
    var kelimesayisi = kelimeler.length;

    var kalankarakter = 100 - karaktersayisi;

    document.getElementById("sonuc").textContent = karaktersayisi + " Karakter | " + kelimesayisi + " Kelime | " + kalankarakter + " Karakter Kaldı";
}