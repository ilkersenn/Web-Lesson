var rastgeleSayi = Math.floor(Math.random() * 100) + 1;

var tahminGirdisi = document.getElementById("tahminGirdisi");
var tahminEtButonu = document.getElementById("tahminEtButonu"); // Butonun tanımlanması
var sonucParagrafi = document.getElementById("sonuc");

// tahmin sayacını başlatıyoruz.
let tahminSayisi = 0;

tahminEtButonu.addEventListener("click", function() {
    // kullanıcının girdiği tahmini alıyoruz.
    var tahmin = parseInt(tahminGirdisi.value);
    tahminSayisi++;

    if (isNaN(tahmin)) {
        sonucParagrafi.textContent = "Lütfen geçerli bir sayı girin.";
    } else if (tahmin === rastgeleSayi) {
        sonucParagrafi.textContent = "Tebrikler! Doğru tahmin ettiniz. Toplam tahmin sayınız: " + tahminSayisi;

    } else if (tahmin < rastgeleSayi) {
        sonucParagrafi.textContent = "Lütfen daha yüksek bir sayı giriniz.";
    } else {
        sonucParagrafi.textContent = "Lütfen daha küçük bir sayı giriniz.";
    }
    tahminGirdisi.value = "";
});