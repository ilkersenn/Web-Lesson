using Microsoft.AspNetCore.Mvc;
using MVC_KullaniciBilgileriProject.Models;

namespace MVC_KullanıcıBilgileriProject.Controllers
{
    public class KullaniciBilgiController : Controller{
    
        public IActionResult Form(){ //Form Ekranına gideriz.
            return View();
        }

        [HttpPost]

        public IActionResult Gönder(KullaniciBilgiModel model){ //KullanıcıBilgiModel'den bir model oluşturur bu model Ad Soyad ve Yaş gibi formdan gelen değerleri alır

            if(ModelState.IsValid){ //ModelState.IsValid formdan gelen değelerin null olup olmadığını kontrol eder.

                return View("Görüntü", model);//Görüntü Ekranını model başlangıç değeri ile açar.
            }
            return View("Gönder");//Eğer null değer varsa başa döner.
        }
    }
}