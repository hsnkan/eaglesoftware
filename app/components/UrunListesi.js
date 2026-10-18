"use client";

import { useState } from "react";
import GirisFormu from "./GirisFormu";

const FILTRELER = [
  { id: "all", label: "Tüm Modüller" },
  { id: "panel", label: "İş Yeri Paneli" },
  { id: "yoklama", label: "Yoklama" },
  { id: "uye", label: "Üye & İletişim" },
];

function Kart({ kategori, ikon, etiket, renk, baslik, yazi, etiketler, surum, wa, children }) {
  return (
    <div
      data-category={kategori}
      className="product-card bg-brand-card rounded-2xl border border-brand-border overflow-hidden flex flex-col justify-between"
    >
      <div>
        <div className="h-48 bg-gradient-to-br from-gray-900 to-brand-dark p-6 relative flex items-center justify-center border-b border-brand-border">
          <i className={`fa-solid ${ikon} text-6xl ${renk === "cyan" ? "text-brand-cyan/40" : "text-brand-gold/40"}`} />
          <span
            className={
              renk === "cyan"
                ? "absolute top-4 right-4 bg-brand-cyan/20 text-brand-cyan text-[10px] font-title font-bold px-2.5 py-1 rounded-full border border-brand-cyan/30"
                : "absolute top-4 right-4 bg-brand-gold/20 text-brand-gold text-[10px] font-title font-bold px-2.5 py-1 rounded-full border border-brand-gold/30"
            }
          >
            {etiket}
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold font-title text-white mb-2">{baslik}</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{yazi}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {etiketler.map((e) => (
              <span
                key={e}
                className="text-[11px] bg-brand-dark px-2.5 py-1 rounded text-gray-300 border border-brand-border"
              >
                {e}
              </span>
            ))}
          </div>
          {children}
        </div>
      </div>
      <div className="px-6 pb-6 pt-2 border-t border-brand-border/40 flex items-center justify-between">
        <span className="text-xs text-brand-cyan font-mono">{surum}</span>
        <a
          href={wa}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-lg text-xs font-bold font-title bg-brand-gold/20 text-brand-gold hover:bg-brand-gold hover:text-black transition-all"
        >
          Detay & Demo
        </a>
      </div>
    </div>
  );
}

export default function UrunListesi() {
  const [filtre, setFiltre] = useState("all");

  function goster(kategori) {
    return filtre === "all" || kategori === filtre;
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {FILTRELER.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFiltre(f.id)}
            className={
              filtre === f.id
                ? "px-5 py-2 rounded-xl text-xs font-title font-bold uppercase bg-brand-gold text-black"
                : "px-5 py-2 rounded-xl text-xs font-title font-bold uppercase bg-brand-card text-gray-300 hover:text-white border border-brand-border"
            }
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {goster("uye") ? (
          <div className="product-card bg-brand-card rounded-2xl border border-brand-gold/40 overflow-hidden flex flex-col lg:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-6">
                <span className="bg-brand-gold/20 text-brand-gold text-[10px] font-title font-bold px-2.5 py-1 rounded-full border border-brand-gold/30">
                  WEB / İŞ YERİ ADRESİ
                </span>
                <h3 className="text-xl font-bold font-title text-white mt-3 mb-2">Eagle İş Yeri Paneli</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Kurs, otel ve iş yeri yönetimi kendi internet adresinden açılan
                  web panelde çalışır. Üye kendi kaydını ve ödemelerini görür.
                  Personel girişi yönetim programına bağlanır.
                </p>
                <p className="text-xs text-brand-gold mb-4">
                  Üye denemesi: ayse@ornek.com / musteri123
                </p>
              </div>
              <div className="p-6 bg-brand-dark/50">
                <GirisFormu />
              </div>
            </div>
          </div>
        ) : null}

        {goster("panel") ? (
          <Kart
            kategori="panel"
            ikon="fa-user-graduate"
            etiket="ÖĞRENCİ"
            renk="gold"
            baslik="Öğrenci Yönetimi"
            yazi="Kayıt, grup, arşiv ve kart eşleştirme. Üye listesi işletmenin kendi internet adresindeki web panelde durur."
            etiketler={["Kayıt", "Grup", "Arşiv"]}
            surum="İş yeri paneli"
            wa="https://wa.me/905377329384?text=Merhaba,%20web%20tabanlı%20öğrenci%20yönetimi%20hakkında%20bilgi%20almak%20istiyorum."
          />
        ) : null}

        {goster("yoklama") ? (
          <Kart
            kategori="yoklama"
            ikon="fa-id-card"
            etiket="YOKLAMA"
            renk="cyan"
            baslik="NFC / Kartlı Yoklama"
            yazi="Öğrenci yoklaması kart okuyucu ile alınır. Aynı ekrandan ders katılımı iş yerine ait adreste tutulur."
            etiketler={["Kart okuyucu", "Yoklama kaydı"]}
            surum="İş yeri paneli"
            wa="https://wa.me/905377329384?text=Merhaba,%20kartlı%20yoklama%20hakkında%20bilgi%20almak%20istiyorum."
          />
        ) : null}

        {goster("panel") ? (
          <Kart
            kategori="panel"
            ikon="fa-wallet"
            etiket="KASA"
            renk="gold"
            baslik="Aidat ve Kasa"
            yazi="Tahsilat, aidat ve kasa hareketleri tek panelde izlenir. Üye kendi ödeme dökümünü üye oturumundan görür."
            etiketler={["Tahsilat", "Aidat", "Kasa"]}
            surum="İş yeri paneli"
            wa="https://wa.me/905377329384?text=Merhaba,%20aidat%20ve%20kasa%20takibi%20hakkında%20bilgi%20almak%20istiyorum."
          />
        ) : null}

        {goster("yoklama") ? (
          <Kart
            kategori="yoklama"
            ikon="fa-chalkboard-user"
            etiket="GÖREVLİ"
            renk="cyan"
            baslik="Görevli Takip"
            yazi="Öğretmen ve görevli giriş-çıkışı ile çalışma süresi, iş yeri panelinden takip edilir."
            etiketler={["Giriş-çıkış", "Çalışma süresi"]}
            surum="İş yeri paneli"
            wa="https://wa.me/905377329384?text=Merhaba,%20görevli%20takibi%20hakkında%20bilgi%20almak%20istiyorum."
          />
        ) : null}

        {goster("uye") ? (
          <Kart
            kategori="uye"
            ikon="fa-bullhorn"
            etiket="DUYURU"
            renk="gold"
            baslik="Duyurular ve WhatsApp"
            yazi="İş yeri, kayıtlı üyelere duyuru ve toplu mesaj kampanyasını kendi panelinden hazırlar."
            etiketler={["Duyuru", "WhatsApp"]}
            surum="İş yeri paneli"
            wa="https://wa.me/905377329384?text=Merhaba,%20duyuru%20ve%20WhatsApp%20hakkında%20bilgi%20almak%20istiyorum."
          />
        ) : null}

        {goster("panel") ? (
          <Kart
            kategori="panel"
            ikon="fa-file-lines"
            etiket="RAPOR"
            renk="cyan"
            baslik="Raporlar ve İşlem Geçmişi"
            yazi="Yoklama özeti ve panelde kim ne yaptı kaydı, iş yerinin kendi adresindeki raporda durur."
            etiketler={["Yoklama raporu", "İşlem geçmişi"]}
            surum="İş yeri paneli"
            wa="https://wa.me/905377329384?text=Merhaba,%20raporlar%20hakkında%20bilgi%20almak%20istiyorum."
          />
        ) : null}

        {filtre === "all" ? (
          <div className="product-card bg-gradient-to-br from-brand-card via-brand-dark to-brand-card rounded-2xl border-2 border-dashed border-brand-gold/50 p-8 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center text-3xl mb-4">
              <i className="fa-solid fa-globe" />
            </div>
            <h3 className="text-xl font-bold font-title text-white mb-2">İş yerinize özel adres</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Kurs, otel veya iş yeri kendi internet adresini alır. Logo, açılacak
              modüller ve şube ayrımı kurulumda netleşir. Bir şubenin kaydı diğerine yazılmaz.
            </p>
            <a
              href="https://wa.me/905377329384?text=Merhaba,%20iş%20yerim%20için%20internet%20adresi%20ve%20web%20paneli%20kurulumu%20görüşmek%20istiyorum."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl font-title text-xs font-bold uppercase text-black gold-gradient-bg hover:brightness-110 transition-all shadow-lg"
            >
              Kurumsal Başvuru
            </a>
          </div>
        ) : null}
      </div>
    </>
  );
}
