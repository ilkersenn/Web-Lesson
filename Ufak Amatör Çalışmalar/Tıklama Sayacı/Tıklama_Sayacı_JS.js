var sayac = 0;

function tıkla(){

    sayac++;
    document.getElementById("sayac").textContent = "Toplam Tıklama: " + sayac;

}

function sıfırla(){
    
    sayac = 0;
    document.getElementById("sayac").textContent = "Tıklama Sayısı: " + sayac;
    alert("Sayaç Sıfırlandı");
    
}