function hesapla() {
    const dogumTarihi = document.getElementById('date').value;

    if (!dogumTarihi) {
        alert("Lütfen doğum tarihinizi seçin.");
        return;
    }

    const dogum = new Date(dogumTarihi);
    const bugun = new Date();

    let yil = bugun.getFullYear() - dogum.getFullYear();
    let ay = bugun.getMonth() - dogum.getMonth();
    let gun = bugun.getDate() - dogum.getDate();

    if (gun < 0) {
        ay--;
        const oncekiAy = new Date(bugun.getFullYear(), bugun.getMonth(), 0).getDate();
        gun += oncekiAy;
    }

    if (ay < 0) {
        yil--;
        ay += 12;
    }

    let sonrakiDogum = new Date(bugun.getFullYear(), dogum.getMonth(), dogum.getDate());
    if (sonrakiDogum < bugun) {
        sonrakiDogum.setFullYear(bugun.getFullYear() + 1);
    }
    const kalanGun = Math.ceil((sonrakiDogum - bugun) / (1000 * 60 * 60 * 24));

    const farkMs = bugun - dogum;
    const toplamGun = Math.floor(farkMs / (1000 * 60 * 60 * 24));

    document.getElementById('yaş').textContent = `Yaşın: ${yil} yıl ${ay} ay ${gun} gün`;
    document.getElementById('bugünekadar').textContent = `Bugüne kadar ${toplamGun} gün yaşadın`;
    document.getElementById('doğumgünü').textContent = `Sonraki doğum gününe ${kalanGun} gün kaldı 🎂`;
}
