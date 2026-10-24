import Link from "next/link";
import MenuKarekod from "./MenuKarekod";

export const metadata = {
  title: "Eagle Sofra · Menü",
  description: "Masadaki karekodla açılan restoran menüsü.",
};

const KATEGORILER = [
  {
    id: "corbalar",
    ad: "Çorbalar",
    urunler: [
      { ad: "Mercimek çorbası", yazi: "Kırmızı mercimek, nane ve limon", fiyat: 90 },
      { ad: "Ezogelin", yazi: "Bulgur, mercimek ve nar ekşisi", fiyat: 95 },
    ],
  },
  {
    id: "baslangic",
    ad: "Başlangıçlar",
    urunler: [
      { ad: "Humus", yazi: "Nohut, tahin, zeytinyağı", fiyat: 140 },
      { ad: "Sigara böreği", yazi: "İnce yufka, beyaz peynir", fiyat: 160 },
      { ad: "Atom", yazi: "Süzme yoğurt, isot yağı", fiyat: 150 },
    ],
  },
  {
    id: "ana",
    ad: "Ana yemekler",
    urunler: [
      { ad: "Karnıyarık", yazi: "Kıymalı patlıcan, pilav", fiyat: 360 },
      { ad: "Mantı", yazi: "Yoğurt ve tereyağlı sos", fiyat: 340 },
      { ad: "Tas kebabı", yazi: "Kuşbaşı et, sebze, pide", fiyat: 450 },
    ],
  },
  {
    id: "izgara",
    ad: "Izgaralar",
    urunler: [
      { ad: "Adana kebap", yazi: "Acılı kıyma, lavaş, köz biber", fiyat: 420 },
      { ad: "Tavuk şiş", yazi: "Marine tavuk, pilav, salata", fiyat: 390 },
      { ad: "Izgara köfte", yazi: "Dört adet, piyaz", fiyat: 380 },
    ],
  },
  {
    id: "tatli",
    ad: "Tatlılar",
    urunler: [
      { ad: "Künefe", yazi: "Antep fıstığı, kaymak", fiyat: 220 },
      { ad: "Fırın sütlaç", yazi: "Tarçın", fiyat: 140 },
    ],
  },
  {
    id: "icecek",
    ad: "İçecekler",
    urunler: [
      { ad: "Ayran", yazi: "Ev yapımı", fiyat: 50 },
      { ad: "Limonata", yazi: "Taze nane", fiyat: 90 },
      { ad: "Çay", yazi: "İnce belli", fiyat: 30 },
      { ad: "Türk kahvesi", yazi: "Lokum ile", fiyat: 80 },
    ],
  },
];

function lira(tutar) {
  return `${tutar.toLocaleString("tr-TR")} ₺`;
}

export default function RestoranMenu() {
  return (
    <div className="min-h-screen bg-[#f4efe6] text-[#1c1410]">
      <div className="max-w-5xl mx-auto flex flex-col lg:grid lg:grid-cols-[280px_1fr] lg:gap-8 lg:px-6 lg:py-8">
        <aside className="order-2 px-4 pb-10 lg:order-1 lg:px-0 lg:pb-0 lg:sticky lg:top-6 lg:self-start space-y-4">
          <Link href="/urunler" className="hidden lg:inline text-sm font-semibold text-[#8a5a2b]">
            ← Ürünler
          </Link>
          <MenuKarekod />
        </aside>

        <main className="order-1 pb-6 lg:pb-16">
          <header className="px-5 pt-6 pb-4">
            <Link href="/urunler" className="lg:hidden text-sm font-semibold text-[#8a5a2b]">
              ← Ürünler
            </Link>
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#8a5a2b] font-semibold mt-3 lg:mt-0">Masa 4</p>
            <h1 className="text-4xl mt-1" style={{ fontFamily: "Georgia, Palatino, serif" }}>
              Eagle Sofra
            </h1>
            <p className="text-sm text-[#6b5b4b] mt-2">Günün menüsü · fiyatlar masadaki karekodla açılan ekranda güncellenir.</p>
          </header>

          <nav className="sticky top-0 z-10 bg-[#f4efe6]/95 backdrop-blur border-y border-[#e6dccb] px-4 py-3 flex gap-2 overflow-x-auto">
            {KATEGORILER.map((k) => (
              <a
                key={k.id}
                href={`#${k.id}`}
                className="shrink-0 px-3 py-1.5 rounded-full bg-white border border-[#e6dccb] text-xs font-semibold text-[#1c1410]"
              >
                {k.ad}
              </a>
            ))}
          </nav>

          <div className="px-5">
            {KATEGORILER.map((k) => (
              <section key={k.id} id={k.id} className="pt-8">
                <h2 className="text-lg font-semibold border-b border-[#e6dccb] pb-2" style={{ fontFamily: "Georgia, Palatino, serif" }}>
                  {k.ad}
                </h2>
                <ul>
                  {k.urunler.map((u) => (
                    <li key={u.ad} className="py-4 border-b border-[#efe6d8] flex items-start justify-between gap-4">
                      <div>
                        <div className="font-semibold">{u.ad}</div>
                        <div className="text-sm text-[#6b5b4b] mt-0.5">{u.yazi}</div>
                      </div>
                      <div className="font-semibold text-[#8a5a2b] shrink-0">{lira(u.fiyat)}</div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
