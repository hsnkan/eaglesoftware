import TasarimBilgiFormu from "./TasarimBilgiFormu";
import UrunKarekod from "./UrunKarekod";

const URUNLER = [
  {
    no: "01",
    ikon: "fa-graduation-cap",
    baslik: "Kurs Yönetim Programı",
    yazi: "Kurs işletmesi öğrenci, yoklama, görevli ve kasa kayıtlarını kendi internet adresinden yönetir. Aşağıdaki adresten ürünü deneyebilirsiniz.",
    test: "https://eagle-software-global.vercel.app/",
    girisler: [
      { rol: "İş yeri sahibi", kullanici: "eaglesahip", sifre: "Eaglesahip2026!" },
      { rol: "Sekreter oturumu", kullanici: "eagle", sifre: "eagle2026!" },
    ],
  },
  {
    no: "02",
    ikon: "fa-qrcode",
    baslik: "Restoran Menü QR Programı",
    yazi: "Müşteri masadaki karekodu okutunca restoranın güncel menüsünü açar. Ürün, fiyat ve kategori restoran panelinden düzenlenir.",
    baglanti: "https://restoran-menu-three.vercel.app",
    baglantiAd: "MENÜ",
  },
  {
    no: "03",
    ikon: "fa-calendar-check",
    baslik: "İş Yeri Randevu Sistemi",
    yazi: "Müşteri gün ve saat seçerek randevu alır. İş yeri doluluk, personel ve randevu listesini kendi panelinden yönetir.",
    baglanti: "https://is-yeri-randevu.vercel.app",
    baglantiAd: "RANDEVU",
  },
  {
    no: "04",
    ikon: "fa-pen-ruler",
    baslik: "İhtiyaçlarınıza Göre Tasarımlar",
    yazi: "İşletmenin kendi sürecine göre ekran, akış ve internet adresi birlikte tasarlanır.",
    bilgiFormu: true,
  },
];

export default function UrunListesi() {
  return (
    <ol className="space-y-4">
      {URUNLER.map((urun) => (
        <li
          key={urun.no}
          className="bg-brand-card rounded-2xl border border-brand-border p-6 sm:p-8"
        >
          <div className="flex gap-4 sm:gap-6">
            <span className="font-title text-sm font-bold text-brand-gold tracking-widest shrink-0 pt-1">
              {urun.no}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="text-xl font-bold font-title text-white flex items-center gap-3">
                <i className={`fa-solid ${urun.ikon} text-brand-cyan text-base`} />
                {urun.baslik}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mt-3">{urun.yazi}</p>

              {urun.test ? (
                <a
                  href={urun.test}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-brand-gold hover:text-white break-all"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
                  {urun.gorunen || urun.test}
                </a>
              ) : null}

              {urun.baglanti ? (
                <div className="mt-4 flex items-center gap-4">
                  <a
                    href={urun.baglanti}
                    target="_blank"
                    rel="noreferrer"
                    className="font-title text-sm font-bold tracking-[0.22em] text-brand-gold hover:text-white"
                  >
                    {urun.baglantiAd}
                  </a>
                  <UrunKarekod adres={urun.baglanti} />
                </div>
              ) : urun.bilgiFormu ? (
                <TasarimBilgiFormu />
              ) : urun.girisler ? (
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {urun.girisler.map((g) => (
                    <div key={g.rol} className="rounded-xl border border-brand-border bg-brand-dark px-4 py-3">
                      <div className="text-[11px] uppercase tracking-wider text-brand-cyan font-semibold">{g.rol}</div>
                      <p className="text-sm text-gray-200 mt-2">
                        Kullanıcı adı: <span className="font-mono text-white">{g.kullanici}</span>
                      </p>
                      <p className="text-sm text-gray-200 mt-1">
                        Şifre: <span className="font-mono text-white">{g.sifre}</span>
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <a
                  href={`https://wa.me/905377329384?text=${encodeURIComponent(`Merhaba, ${urun.baslik} hakkında bilgi almak istiyorum.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex mt-4 px-4 py-2 rounded-lg text-xs font-bold font-title bg-brand-gold/20 text-brand-gold hover:bg-brand-gold hover:text-black transition-all"
                >
                  Bilgi alın
                </a>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
