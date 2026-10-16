"use client";

import { useState } from "react";
import GirisFormu from "./GirisFormu";

const FILTRELER = [
  { id: "all", label: "Tüm Ürünler" },
  { id: "erp", label: "Masaüstü & ERP" },
  { id: "web", label: "Web & E-Ticaret" },
  { id: "mobile", label: "Mobil Uygulamalar" },
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
        {goster("web") ? (
          <div className="product-card bg-brand-card rounded-2xl border border-brand-gold/40 overflow-hidden flex flex-col lg:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-6">
                <span className="bg-brand-gold/20 text-brand-gold text-[10px] font-title font-bold px-2.5 py-1 rounded-full border border-brand-gold/30">
                  WEB / ÜYE OTURUMU
                </span>
                <h3 className="text-xl font-bold font-title text-white mt-3 mb-2">Eagle Üye Sistemi</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Salon ve kurs müşterisi kendi üyelik, grup ve ödeme bilgilerini
                  görür. Personel girişi iş yeri yönetim programına bağlanır.
                </p>
                <p className="text-xs text-brand-gold mb-4">
                  Deneme: ayse@ornek.com / musteri123
                </p>
              </div>
              <div className="p-6 bg-brand-dark/50">
                <GirisFormu />
              </div>
            </div>
          </div>
        ) : null}

        {goster("erp") ? (
          <Kart
            kategori="erp"
            ikon="fa-chart-line"
            etiket="MASAÜSTÜ / ERP"
            renk="gold"
            baslik="Eagle ERP Pro"
            yazi="KOBİ'ler ve büyük işletmeler için stok, cari, fatura, gelir-gider ve personel yönetimini tek ekrandan sunan kapsamlı ERP sistemi."
            etiketler={["C# / .NET", "MSSQL", "Raporlama"]}
            surum="v3.4 Sürüm"
            wa="https://wa.me/905377329384?text=Merhaba,%20Eagle%20ERP%20Pro%20hakkında%20bilgi%20almak%20istiyorum."
          />
        ) : null}

        {goster("web") ? (
          <Kart
            kategori="web"
            ikon="fa-cart-shopping"
            etiket="WEB & B2B"
            renk="cyan"
            baslik="Eagle Commerce"
            yazi="Özel ödeme entegrasyonları, pazar yeri senkronizasyonları ve yüksek hıza sahip özelleştirilebilir E-Ticaret platformu."
            etiketler={["React / Next.js", "Node.js", "Iyzico/Sanal POS"]}
            surum="v2.1 Sürüm"
            wa="https://wa.me/905377329384?text=Merhaba,%20Eagle%20Commerce%20hakkında%20bilgi%20almak%20istiyorum."
          />
        ) : null}

        {goster("mobile") ? (
          <Kart
            kategori="mobile"
            ikon="fa-mobile-screen-button"
            etiket="MOBİL UYGULAMA"
            renk="gold"
            baslik="Eagle Field Mobile"
            yazi="Saha satış ekipleri, teknik servisler ve depo yönetimi için iOS ve Android uyumlu, çevrimdışı çalışabilen mobil uygulama."
            etiketler={["Flutter", "REST API", "GPS / Barkod"]}
            surum="v1.8 Sürüm"
            wa="https://wa.me/905377329384?text=Merhaba,%20Eagle%20Field%20Mobile%20hakkında%20bilgi%20almak%20istiyorum."
          />
        ) : null}

        {goster("erp") ? (
          <Kart
            kategori="erp"
            ikon="fa-hotel"
            etiket="OTOMASYON"
            renk="cyan"
            baslik="Eagle Otel & Rezervasyon"
            yazi="Otel, pansiyon ve konaklama tesisleri için oda takibi, adisyon, müşteri kayıt ve Kimlik Bildirim Sistemi (KBS) entegrasyonlu otomasyon."
            etiketler={["Desktop / Cloud", "KBS Entegre"]}
            surum="v4.0 Sürüm"
            wa="https://wa.me/905377329384?text=Merhaba,%20Otel%20Otomasyonu%20hakkında%20bilgi%20almak%20istiyorum."
          />
        ) : null}

        {goster("web") ? (
          <Kart
            kategori="web"
            ikon="fa-hospital-user"
            etiket="SAĞLIK / RANDEVU"
            renk="gold"
            baslik="Eagle Randevu & Müşteri"
            yazi="Klinikler, güzellik merkezleri ve danışmanlık firmaları için SMS hatırlatmalı online randevu ve danışan takip sistemi."
            etiketler={["Web Panel", "SMS Gateway"]}
            surum="v1.5 Sürüm"
            wa="https://wa.me/905377329384?text=Merhaba,%20Randevu%20Sistemi%20hakkında%20bilgi%20almak%20istiyorum."
          />
        ) : null}

        {filtre === "all" ? (
          <div className="product-card bg-gradient-to-br from-brand-card via-brand-dark to-brand-card rounded-2xl border-2 border-dashed border-brand-gold/50 p-8 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center text-3xl mb-4">
              <i className="fa-solid fa-code" />
            </div>
            <h3 className="text-xl font-bold font-title text-white mb-2">Özel Projeniz Mi Var?</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Aklınızdaki fikri veya ihtiyacınıza özel yazılım talebinizi bize iletin,
              en uygun mimari ile hayata geçirelim.
            </p>
            <a
              href="https://wa.me/905377329384?text=Merhaba,%20özel%20yazılım%20projem%20için%20görüşmek%20istiyorum."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl font-title text-xs font-bold uppercase text-black gold-gradient-bg hover:brightness-110 transition-all shadow-lg"
            >
              Özel Yazılım Talebi İlet
            </a>
          </div>
        ) : null}
      </div>
    </>
  );
}
