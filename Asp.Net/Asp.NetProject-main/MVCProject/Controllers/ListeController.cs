using Microsoft.AspNetCore.Mvc;
public class ListeController: Controller
{
 public string Liste(int id) //Liste'yi id parametresiyle oluşturuyoruz.
 {
 return $"Parametreden gelen değer:{id}"; //id'ye verilen değer ekranda gözükecek.
 }
 
}
