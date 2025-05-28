var rastgele = Math.floor(Math.random() * 100);
function bul(){

    var sayi = parseFloat(document.getElementById("sayi").value);
    var tahmin = document.getElementById("tahmin");

    if( sayi >= 0 && sayi < rastgele){
        tahmin = "Daha Yüksek Bir Sayı Girin"; 
    }
    else if(sayi > rastgele && sayi <= 100){
        tahmin = "Daha Düşük Bir Sayı Girin";
    }
    else if(sayi === rastgele){
        tahmin = "DOĞRU TAHMİN !";
    }
    else{
        tahmin = "Geçerli Bir Sayı Girin";
    }
    document.getElementById("tahmin").textContent = tahmin;
}