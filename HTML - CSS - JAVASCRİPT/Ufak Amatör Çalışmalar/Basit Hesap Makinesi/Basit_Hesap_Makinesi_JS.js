function hesapla(){

    var sayi1 = parseFloat(document.getElementById("sayi1").value);
    var sayi2 = parseFloat(document.getElementById("sayi2").value);

    var islem = document.getElementsByName("islem")[0].value;

    var sonuc = 0;

    switch(islem){

        case "Toplama":
            sonuc = sayi1 + sayi2;
        break;

        case "Çıkarma":
            sonuc = sayi1 - sayi2;
        break;
        
        case "Çarpma":
            sonuc = sayi1 * sayi2;
        break;

        case "Bölme":
            sonuc = sayi1 / sayi2;
        break;

        default:
            sonuc = "Geçerli Değer Giriniz" ;
        break;
    }

    document.getElementById("sonuc").textContent = "Sonuç: " + sonuc;
}