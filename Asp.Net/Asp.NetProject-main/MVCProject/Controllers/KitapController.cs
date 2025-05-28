using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using MVCProject.Models;
public class KitapController: Controller
{
 //Geçici Kitap Listesi

 private static List<KitapModel> kitaplar = new List<KitapModel>(); //KitapModel'in içinden kitaplar adında yeni bir KitapModel oluşturduk.

 public IActionResult Giris(){  // Giris'in görüntüsünü döndürdük.
   return View();
 }

 [HttpPost]
 public IActionResult Giris(KullaniciModel model) //Giris'i KullaniciModel parametresi ile döndürüyoruz.
 {
   if(model.KullaniciAdi=="admin" && model.Sifre=="1234"){ //Model'de KullaniciModel'in boş kalmaması için şartlı olarak admin ve 1234 değerlerini tanımlıyoruz.
      return RedirectToAction("Ekle"); //Eğer Doğru ise Ekle.cshtml ekranına yönlendirilicez.
   }
   ViewBag.Hata="Hatalı Giriş!"; //İf şartı sağlanmazsa ViewBag aracılığıyla bir Hata Değişkeni oluşturup içine string olarak Hatalı Giriş! ifadesini atıyoruz.
   return View(); //Else şartı sağlanırsa Hatalı Giriş View Kısmında ekrana verilecek.
 }
 public IActionResult Ekle() //View'de Eklediğimiz Ekle Görünümünü açıyoruz.
 {
   return View();
 }
 [HttpPost]
 public IActionResult Ekle(KitapModel kitap) //Ekle View'ındayken KitapModel'den kitap adında bir parametre oluşturuyoruz.
 {
   kitaplar.Add(kitap); //KitapModel'den oluşturduğumuz kitaplar'ın içine kitap'ı ekliyoruz.
   return RedirectToAction("Liste"); //Liste View'ı açılacak.
 }
public IActionResult Liste(){ 
   return View(kitaplar); //Liste View'ında Kitaplar görüntülenecek.
}
}