const urunler = [
    {
        isim: "Boing 737",
        aciklama: "Popüler kullanımdaki yolcu uçağı.",
        fiyat: 3200,
        gorsel: "boing.jpg"
    },
    {
        isim: "Airbus A380",
        aciklama: "Büyük boyutlu ve uzun menzilli yolcuğu uçağı.",
        fiyat: 4100,
        gorsel: "airbus.jpg"
    },
    {
        isim: "Cannessee TAYYARE",
        aciklama: "Küçük tayyere (CELAL ŞENGOR)",
        fiyat: 3900,
        gorsel: "canesse.jpg"
    }
];

function uyariGoster(metin, tip = "bilgi") {
    const uyari = document.getElementById("uyari");
    uyari.textContent = metin;
    uyari.style.background = tip === "hata" ? "#b71c1c" : "#1976d2";
    uyari.style.color = "#fff";
    uyari.style.padding = "8px";
    uyari.style.margin = "8px";
    uyari.style.borderRadius = "6px";
    setTimeout(() => { uyari.textContent = ""; uyari.style.padding = "0"; }, 2000);
}

function sekmeGoster(ad) {
    document.querySelectorAll("#menu button").forEach(btn => {
        btn.classList.toggle("aktif", btn.dataset.sekme === ad);
    });
    if (ad === "anasayfa") anaSayfa();
    else if (ad === "urunler") urunlerSayfa();
    else if (ad === "hakkinda") hakkindaSayfa();
    else if (ad === "iletisim") iletisimSayfa();
    else if (ad === "profil") profilSayfa();
}

function anaSayfa() {
    document.getElementById("icerik").innerHTML = `
        <h2>Hoşgeldiniz!</h2>
        <p>Uçak ve havacılık dünyasına hoşgeldiniz. En yeni modeller için takip etmeyi unutmayın!</p>
        <img src="ucak.png" alt="Uçak" title="Bayraktar TB3" style="border: 2px solid #1976d2; background: linear-gradient(90deg, #232b3e 60%, #1a2332 100%); width:1000px;display:block;margin:20px auto 0 auto; opacity:0.7;"><br> <p style="justify-content: center; align-items: center; text-align: left; margin: 0px; margin-left: 10px; font-family: arial, sans-serif; font-size:17px"><h4 style="margin-left: 5px; margin-bottom: 5px; margin: 0;">Bayraktar TB3</h4></p> <br>
        <pre>
        <b> Tip:</b> Taarruzi İnsansız Hava Aracı (TİHA)
        <b> Kalkış Ağırlığı:</b> ~1450 kg
        <b> Faydalı Yük Kapasitesi:</b> 280 kg
        <b> Havada Kalış Süresi:</b> 24+ saat
        <b> İletişim:</b> SATCOM (uydu kontrolü sayesinde menzil sınırı yok)
        <b> İniş/Kalkış:</b> Kısa pistli gemilere (örneğin TCG Anadolu) iniş/kalkış yapabilir
        <b> Görev:</b> Keşif, gözetleme, taarruz    
        <b> Silah Opsiyonları:</b> MAM-L, MAM-C gibi askıllı mühimmatları taşıyabilir
        <b> Kuyruk Tipi:</b> Ters V kuyruk (aerodinamik verimlilik)
        <b> İtki Sistemi:</b> Tek motorlu, pervaneli
        </pre> <br><hr><br> 
        
        <img src="kızılelma.png" alt="Uçak" title="Kızılelma" style="border: 2px solid #1976d2; background: linear-gradient(90deg, #232b3e 60%, #1a2332 100%); width:1000px;display:block;margin:20px auto 0 auto; opacity:0.7;"><br> <p style="justify-content: center; align-items: center; text-align: left; margin: 0px; margin-left: 10px; font-family: arial, sans-serif; font-size:17px"><h4 style="margin-left: 5px; margin-bottom: 5px; margin: 0;">Kızılelma</h4></p> <br>
        <pre>
        Tip: İnsansız savaş uçağı (Jet motorlu)

        Özellik: Radarda düşük görünürlük, hava-hava yeteneği

        İlk Uçuş: 2022

        Amaç: Jetlerle birlikte görev yapabilen yapay zekalı savaş uçağı

        Modeller: Kızılelma-A, Kızılelma-B (daha güçlü motor)

        </pre> <br>
        `;
}

function urunlerSayfa() {
    let kullanici = sessionStorage.getItem("kullanici");
    let html = `<h2>Ürünler</h2><div class="urun-listesi">`;
    urunler.forEach((u, i) => {
        html += `
        <div class="urun-kart">
            <img src="${u.gorsel}" alt="${u.isim}">
            <h3>${u.isim}</h3>
            <p>${u.aciklama}</p>
            <p><b>Fiyat:</b> ₺${u.fiyat}</p>
            <button onclick="sepeteEkle(${i})">Sepete Ekle</button>
        </div>
        `;
    });
    html += `</div>`;
    document.getElementById("icerik").innerHTML = html;
}

function hakkindaSayfa() {
    document.getElementById("icerik").innerHTML = `
        <h2>Hakkımızda</h2>
        <p style="
            background: linear-gradient(90deg, #232b3e 60%, #1a2332 100%);
            border-radius: 14px;
            padding: 22px 18px;
            box-shadow: 0 2px 16px #0a192f33;
            color: #e3eafc;
            font-size: 1.08em;
            line-height: 2.0;
            margin: 0 auto 18px auto;
            max-width: 700px;
            text-align: justify;
            ">Bu platform, havacılık tutkunlarını bir araya getirmek, gelişen insansız hava araçları teknolojilerini tanıtmak ve yenilikçi projeleri paylaşmak amacıyla oluşturulmuştur. Uçak ve hava aracı modellerini detaylı bir şekilde inceleyebilir, teknik bilgileri öğrenebilir ve toplulukla etkileşim kurabilirsiniz.

        Platformun temelini oluşturan Tulpar UAV projesi, tamamen yerli imkânlarla geliştirilmiş, modüler yapıya sahip yeni nesil bir insansız hava aracı çözümüdür. Hem keşif-gözetleme hem de özel görev modlarında kullanılmak üzere tasarlanmış olan Tulpar, yüksek irtifa ve uzun menzil performansıyla dikkat çekmektedir.

        Amacımız; genç mühendis adaylarını, teknoloji meraklılarını ve havacılık sevdalılarını bu dinamik alanda bir araya getirerek bilgi paylaşımını artırmak ve ülkemizin havacılık vizyonuna katkıda bulunmaktır. Geleceğin teknolojilerini bugünden deneyimlemek isteyen kullanıcılar için sürekli güncellenen içerikler, detaylı teknik veriler ve etkileşimli paylaşımlar sunuyoruz. Platformda yer alan bilgiler; eğitim amaçlı kullanımlar, projelere teknik destek sağlama ve genel havacılık farkındalığını artırma hedefiyle titizlikle hazırlanmaktadır.

        Ayrıca Tulpar UAV projemizle birlikte; yapay zekâ destekli uçuş kontrol sistemleri, otonom görev algoritmaları ve modüler parça değişim teknolojileri üzerine de çalışmalar yürütülmektedir. Yerli üretim ve mühendislik gücünü merkezine alan bu girişim, sadece bir hava aracı değil, aynı zamanda bir teknoloji ekosisteminin temellerini temsil etmektedir.</p>
    `;
}

function iletisimSayfa() {
    document.getElementById("icerik").innerHTML = `
        <h2>İletişim</h2>
        <form id="iletisimForm">
            <input type="text" name="ad" placeholder="Adınız" required>
            <input type="email" name="eposta" placeholder="E-posta" required>
            <textarea name="mesaj" placeholder="Mesajınız" required></textarea>
            <button type="submit">Gönder</button>
        </form>
        <div id="gonderilenMesajlar" style="margin-top:18px;"></div>
        <p style="text-align:center;">Lütfen Bizden Cevap Bekleyiniz...</p>
    `;
    document.getElementById("iletisimForm").onsubmit = function(e) {
        e.preventDefault();
        const ad = this.ad.value.trim();
        const eposta = this.eposta.value.trim();
        const mesaj = this.mesaj.value.trim();
        // Yeni mesaj kutusunu oluştur
        const mesajDiv = document.createElement("div");
        mesajDiv.style.background = "linear-gradient(90deg, #232b3e 60%, #1a2332 100%)";
        mesajDiv.style.borderRadius = "12px";
        mesajDiv.style.padding = "18px 14px";
        mesajDiv.style.boxShadow = "0 2px 12px #0a192f33";
        mesajDiv.style.color = "#e3eafc";
        mesajDiv.style.maxWidth = "500px";
        mesajDiv.style.margin = "0 auto 14px auto";
        mesajDiv.style.borderLeft = "4px solid #42a5f5";
        mesajDiv.innerHTML = `
            <b>Gönderilen Mesaj:</b><br>
            <b>Ad:</b> ${ad}<br>
            <b>E-posta:</b> ${eposta}<br>
            <b>Mesaj:</b><br>${mesaj}
        `;
        // Mesajlar alanına ekle
        document.getElementById("gonderilenMesajlar").prepend(mesajDiv);
        this.reset();
    };
}

function profilSayfa() {
    let kullanici = sessionStorage.getItem("kullanici");
    sepetArayuzHazirla();
    if (!kullanici) {
        // Varsayılan olarak giriş formu gösterilsin
        document.getElementById("icerik").innerHTML = `
            <div class="giris-kutu">
                <h2>Giriş Yap</h2>
                <form id="girisForm">
                    <input type="text" name="kullanici" placeholder="Kullanıcı Adı" required>
                    <input type="password" name="sifre" placeholder="Şifre" required>
                    <button type="submit">Giriş Yap</button>
                </form>
                <p style="margin-top:16px;font-size:0.98em;text-align:center;">
                    Hesabın yok mu? 
                    <a href="#" id="kayitOlLink" style="color:#42a5f5;text-decoration:underline;cursor:pointer;">Kayıt ol</a>
                </p>
            </div>
        `;
        document.getElementById("girisForm").onsubmit = function(e) {
            e.preventDefault();
            const k = this.kullanici.value.trim();
            const s = this.sifre.value;
            const kayitli = JSON.parse(localStorage.getItem("kullanicilar") || "[]");
            const giris = kayitli.find(u => u.kullanici === k && u.sifre === s);
            if (giris) {
                sessionStorage.setItem("kullanici", k);
                uyariGoster("Giriş başarılı!");
                profilSayfa();
            } else {
                uyariGoster("Kullanıcı adı veya şifre hatalı!", "hata");
            }
        };
        document.getElementById("kayitOlLink").onclick = function(e) {
            e.preventDefault();
            kayitFormuGoster();
        };
    } else {
        document.getElementById("icerik").innerHTML = `
            <h2>Hesap Merkezi</h2>
            <div style="
                background: linear-gradient(90deg, #232b3e 60%, #1a2332 100%);
                border-radius: 14px;
                padding: 28px 22px;
                box-shadow: 0 2px 16px #0a192f33;
                color: #e3eafc;
                font-size: 1.13em;
                line-height: 1.7;
                margin: 0 auto 18px auto;
                max-width: 500px;
                text-align: center;
            ">
                <h2>Profilim</h2>
                <p><b>Kullanıcı:</b> ${kullanici}</p>
                <button onclick="sessionStorage.removeItem('kullanici'); uyariGoster('Çıkış yapıldı!'); profilSayfa();">Çıkış Yap</button>
            </div>
        `;
        sepetGuncelle();
    }
}

// Kayıt formunu gösteren yardımcı fonksiyon
function kayitFormuGoster() {
    document.getElementById("icerik").innerHTML = `
        <div class="giris-kutu">
            <h2>Kayıt Ol</h2>
            <form id="kayitForm">
                <input type="text" name="kullanici" placeholder="Kullanıcı Adı" required>
                <input type="email" name="eposta" placeholder="E-posta" required>
                <input type="password" name="sifre" placeholder="Şifre" required>
                <button type="submit">Kayıt Ol</button>
            </form>
            <p style="margin-top:16px;font-size:0.98em;text-align:center;">
                Zaten hesabın var mı? 
                <a href="#" id="girisYapLink" style="color:#42a5f5;text-decoration:underline;cursor:pointer;">Giriş yap</a>
            </p>
        </div>
    `;
    document.getElementById("kayitForm").onsubmit = function(e) {
        e.preventDefault();
        const k = this.kullanici.value.trim();
        const eposta = this.eposta.value.trim();
        const s = this.sifre.value;
        let kayitli = JSON.parse(localStorage.getItem("kullanicilar") || "[]");
        if (kayitli.some(u => u.kullanici === k)) {
            uyariGoster("Bu kullanıcı adı zaten var!", "hata");
            return;
        }
        kayitli.push({ kullanici: k, eposta, sifre: s });
        localStorage.setItem("kullanicilar", JSON.stringify(kayitli));
        uyariGoster("Kayıt başarılı! Giriş yapabilirsiniz.");
        profilSayfa();
    };
    document.getElementById("girisYapLink").onclick = function(e) {
        e.preventDefault();
        profilSayfa();
    };
}

// Sepet işlemleri için localStorage kullanıyoruz
function sepetAl() {
    return JSON.parse(localStorage.getItem("sepet") || "[]");
}
function sepetKaydet(sepet) {
    localStorage.setItem("sepet", JSON.stringify(sepet));
}
function sepeteEkle(i) {
    let kullanici = sessionStorage.getItem("kullanici");
    if (!kullanici) {
        uyariGoster("Sepete eklemek için giriş yapmalısınız!", "hata");
        return;
    }
    let sepet = sepetAl();
    let urun = urunler[i];
    let varMi = sepet.find(u => u.isim === urun.isim);
    if (varMi) varMi.adet++;
    else sepet.push({ ...urun, adet: 1 });
    sepetKaydet(sepet);
    uyariGoster("Ürün sepete eklendi!");
    sepetGuncelle();
}
function sepettenCikar(i) {
    let sepet = sepetAl();
    sepet.splice(i, 1);
    sepetKaydet(sepet);
    sepetGuncelle();
}
function sepetTemizle() {
    sepetKaydet([]);
    sepetGuncelle();
    uyariGoster("Sepet temizlendi!");
}
function sepetGuncelle() {
    let kullanici = sessionStorage.getItem("kullanici");
    let ikon = document.getElementById("sepetIkon");
    let panel = document.getElementById("sepetPanel");
    if (!kullanici) {
        if (ikon) ikon.style.display = "none";
        if (panel) panel.classList.remove("aktif");
        return;
    }
    let sepet = sepetAl();
    if (ikon) ikon.style.display = "";
    if (panel) {
        if (panel.classList.contains("aktif")) {
            let html = "";
            if (sepet.length === 0) {
                html = `<div class="sepet-bos">Sepetiniz boş.</div>`;
            } else {
                sepet.forEach((u, i) => {
                    html += `
                    <div class="sepet-urun">
                        <img src="${u.gorsel}" alt="${u.isim}">
                        <div>
                            <div><b>${u.isim}</b></div>
                            <div>x${u.adet} - ₺${u.fiyat * u.adet}</div>
                        </div>
                        <button onclick="sepettenCikar(${i})">Kaldır</button>
                    </div>
                    `;
                });
                let toplam = sepet.reduce((a, b) => a + b.fiyat * b.adet, 0);
                html += `<div class="sepet-toplam">Toplam: ₺${toplam}</div>
                <button class="sepet-temizle" onclick="sepetTemizle()">Sepeti Temizle</button>`;
            }
            panel.innerHTML = `<h3>🛒 Sepetim</h3>` + html;
        }
    }
}

// Sepet ikonunu ve panelini ekle
function sepetArayuzHazirla() {
    if (!document.getElementById("sepetIkon")) {
        let ikon = document.createElement("div");
        ikon.id = "sepetIkon";
        ikon.className = "sepet-ikon";
        ikon.innerHTML = "🛒";
        ikon.title = "Sepetim";
        ikon.onclick = function() {
            let panel = document.getElementById("sepetPanel");
            panel.classList.toggle("aktif");
            sepetGuncelle();
        };
        document.body.appendChild(ikon);

        let panel = document.createElement("div");
        panel.id = "sepetPanel";
        panel.className = "sepet-panel";
        document.body.appendChild(panel);
    }
    sepetGuncelle();
}

// Giriş/Çıkışta sepet arayüzünü güncelle
function profilSayfa() {
    let kullanici = sessionStorage.getItem("kullanici");
    sepetArayuzHazirla();
    if (!kullanici) {
        // Varsayılan olarak giriş formu gösterilsin
        document.getElementById("icerik").innerHTML = `
            <div class="giris-kutu">
                <h2>Giriş Yap</h2>
                <form id="girisForm">
                    <input type="text" name="kullanici" placeholder="Kullanıcı Adı" required>
                    <input type="password" name="sifre" placeholder="Şifre" required>
                    <button type="submit">Giriş Yap</button>
                </form>
                <p style="margin-top:16px;font-size:0.98em;text-align:center;">
                    Hesabın yok mu? 
                    <a href="#" id="kayitOlLink" style="color:#42a5f5;text-decoration:underline;cursor:pointer;">Kayıt ol</a>
                </p>
            </div>
        `;
        document.getElementById("girisForm").onsubmit = function(e) {
            e.preventDefault();
            const k = this.kullanici.value.trim();
            const s = this.sifre.value;
            const kayitli = JSON.parse(localStorage.getItem("kullanicilar") || "[]");
            const giris = kayitli.find(u => u.kullanici === k && u.sifre === s);
            if (giris) {
                sessionStorage.setItem("kullanici", k);
                uyariGoster("Giriş başarılı!");
                profilSayfa();
            } else {
                uyariGoster("Kullanıcı adı veya şifre hatalı!", "hata");
            }
        };
        document.getElementById("kayitOlLink").onclick = function(e) {
            e.preventDefault();
            kayitFormuGoster();
        };
    } else {
        document.getElementById("icerik").innerHTML = `
            <h1>Hesap Merkezi</h1>
            <div style="
                background: linear-gradient(90deg, #232b3e 60%, #1a2332 100%);
                border-radius: 14px;
                padding: 28px 22px;
                box-shadow: 0 2px 16px #0a192f33;
                color: #e3eafc;
                font-size: 1.13em;
                line-height: 1.7;
                margin: 0 auto 18px auto;
                max-width: 500px;
                text-align: center;
            ">
                <h2>Profilim</h2>
                <p><b>Kullanıcı:</b> ${kullanici}</p>
                <button onclick="sessionStorage.removeItem('kullanici'); uyariGoster('Çıkış yapıldı!'); profilSayfa();">Çıkış Yap</button>
            </div>
        `;
        sepetGuncelle();
    }
}

// Sayfa açılışında sepet arayüzünü hazırla
window.addEventListener("DOMContentLoaded", sepetArayuzHazirla);

// Menü tıklama
document.querySelectorAll("#menu button").forEach(btn => {
    btn.onclick = () => sekmeGoster(btn.dataset.sekme);
});

// Sayfa ilk açılışta ana sayfa
sekmeGoster("anasayfa");