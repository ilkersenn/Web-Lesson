function formuGönder(){

    document.getElementById("benimFormum").submit();
    var sifre = document.getElementById("sifre").value;
    var sifretekrar = document.getElementById("sifretekrar").value;

    if( sifre != sifretekrar){
        alert("Şifre ile Şifre Tekrar Aynı Olmalı");
    }
    
}