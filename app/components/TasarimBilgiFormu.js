"use client";

import { useState } from "react";

const EPOSTA = "eaglesoftware.global@gmail.com";
const WHATSAPP = "905377329384";

export default function TasarimBilgiFormu() {
  const [ok, setOk] = useState(false);

  function gonder(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const ad = String(form.get("ad") || "").trim();
    const tel = String(form.get("telefon") || "").trim();
    const mail = String(form.get("email") || "").trim();
    const mesaj = String(form.get("mesaj") || "").trim();
    const metin = [
      "İhtiyaçlarınıza Göre Tasarımlar bilgi talebi",
      `Ad: ${ad}`,
      `Telefon: ${tel}`,
      `E-posta: ${mail || "—"}`,
      `Mesaj: ${mesaj}`,
    ].join("\n");
    const konu = "İhtiyaçlarınıza Göre Tasarımlar bilgi talebi";
    const mailto = `mailto:${EPOSTA}?subject=${encodeURIComponent(konu)}&body=${encodeURIComponent(metin)}`;
    const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(metin)}`;

    window.open(wa, "_blank", "noopener,noreferrer");
    const baglanti = document.createElement("a");
    baglanti.href = mailto;
    document.body.appendChild(baglanti);
    baglanti.click();
    baglanti.remove();

    setOk(true);
    e.target.reset();
  }

  return (
    <form onSubmit={gonder} className="mt-5 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-2">Adınız Soyadınız *</label>
          <input name="ad" type="text" required placeholder="Ahmet Yılmaz" className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border focus:border-brand-gold focus:outline-none text-sm text-white" />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-2">Telefon Numaranız *</label>
          <input name="telefon" type="tel" required placeholder="05XX XXX XX XX" className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border focus:border-brand-gold focus:outline-none text-sm text-white" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-300 mb-2">E-Posta Adresiniz</label>
        <input name="email" type="email" placeholder="ornek@domain.com" className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border focus:border-brand-gold focus:outline-none text-sm text-white" />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-300 mb-2">İhtiyacınız *</label>
        <textarea name="mesaj" rows={4} required placeholder="Nasıl bir tasarım istediğinizi kısaca yazın..." className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border focus:border-brand-gold focus:outline-none text-sm text-white" />
      </div>
      <button type="submit" className="px-5 py-3 rounded-xl font-title text-xs font-bold uppercase tracking-wider text-black gold-gradient-bg hover:brightness-110 transition-all">
        Bilgi alın
      </button>
      {ok ? (
        <div className="p-4 rounded-xl bg-emerald-900/50 border border-emerald-500/50 text-emerald-300 text-xs">
          E-posta taslağı ve WhatsApp mesajı açıldı. Aynı talebi ikisinden de gönderin.
        </div>
      ) : null}
    </form>
  );
}
