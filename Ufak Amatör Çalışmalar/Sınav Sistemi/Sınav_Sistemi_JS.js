function cevap() {
    // Doğru cevaplar
    const dogruCevaplar = {
        radio1: "29 Mayıs 1453",
        radio2: "Çin",
        radio3: "Hristiyanlık",
        radio4: "Fransa"
    };

    // Kullanıcı cevaplarını al
    const cevap1 = document.querySelector('input[name="radio1"]:checked');
    const cevap2 = document.querySelector('input[name="radio2"]:checked');
    const cevap3 = document.querySelector('input[name="radio3"]:checked');
    const cevap4 = document.querySelector('input[name="radio4"]:checked');

    // Cevaplar
    let dogruSayisi = 0;
    let yanlisSayisi = 0;
    let bosSayisi = 0;

    // 1. soru
    if (cevap1) {
        document.getElementById('cevap1').innerHTML = "Seçilen Cevap: " + cevap1.value;
        if (cevap1.value === dogruCevaplar.radio1) {
            dogruSayisi++;
            document.getElementById('cevap1').innerHTML = "Cevap Doğru: " + dogruCevaplar.radio1;
        } else {
            yanlisSayisi++;
            document.getElementById('cevap1').innerHTML = "Cevap Yanlış, Doğru Cevap: " + dogruCevaplar.radio1;
        }
    } else {
        document.getElementById('cevap1').innerHTML = "Cevap Verilmedi, Doğru Cevap: " + dogruCevaplar.radio1;
        bosSayisi++;
    }

    // 2. soru
    if (cevap2) {
        document.getElementById('cevap2').innerHTML = "Seçilen Cevap: " + cevap2.value;
        if (cevap2.value === dogruCevaplar.radio2) {
            dogruSayisi++;
            document.getElementById('cevap2').innerHTML = "Cevap Doğru: " + dogruCevaplar.radio2;
        } else {
            yanlisSayisi++;
            document.getElementById('cevap2').innerHTML = "Cevap Yanlış, Doğru Cevap: " + dogruCevaplar.radio2;
        }
    } else {
        document.getElementById('cevap2').innerHTML = "Cevap Verilmedi, Doğru Cevap: " + dogruCevaplar.radio2;
        bosSayisi++;
    }

    // 3. soru
    if (cevap3) {
        document.getElementById('cevap3').innerHTML = "Seçilen Cevap: " + cevap3.value;
        if (cevap3.value === dogruCevaplar.radio3) {
            dogruSayisi++;
            document.getElementById('cevap3').innerHTML = "Cevap Doğru: " + dogruCevaplar.radio3;
        } else {
            yanlisSayisi++;
            document.getElementById('cevap3').innerHTML = "Cevap Yanlış, Doğru Cevap: " + dogruCevaplar.radio3;
        }
    } else {
        document.getElementById('cevap3').innerHTML = "Cevap Verilmedi, Doğru Cevap: " + dogruCevaplar.radio3;
        bosSayisi++;
    }

    // 4. soru
    if (cevap4) {
        document.getElementById('cevap4').innerHTML = "Seçilen Cevap: " + cevap4.value;
        if (cevap4.value === dogruCevaplar.radio4) {
            dogruSayisi++;
            document.getElementById('cevap4').innerHTML = "Cevap Doğru: " + dogruCevaplar.radio4;
        } else {
            yanlisSayisi++;
            document.getElementById('cevap4').innerHTML = "Cevap Yanlış, Doğru Cevap: " + dogruCevaplar.radio4;
        }
    } else {
        document.getElementById('cevap4').innerHTML = "Cevap Verilmedi, Doğru Cevap: " + dogruCevaplar.radio4;
        bosSayisi++;
    }

    // Sonuçları göster
    document.getElementById('dogrusayisi').innerHTML = "Doğru Sayısı: " + dogruSayisi;
    document.getElementById('yanlissayisi').innerHTML = "Yanlış Sayısı: " + yanlisSayisi;
    document.getElementById('bossayisi').innerHTML = "Boş Cevap Sayısı: " + bosSayisi;
}
