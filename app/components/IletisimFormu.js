"use client";

import { useState } from "react";

export default function IletisimFormu() {
  const [ok, setOk] = useState(false);

  function gonder(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const ad = form.get("ad") || "";
    const tel = form.get("telefon") || "";
    const mail = form.get("email") || "";
    const hizmet = form.get("hizmet") || "";
    const mesaj = form.get("mesaj") || "";
    const metin = `Merhaba, ${ad}. Tel: ${tel}. E-posta: ${mail}. Hizmet: ${hizmet}. ${mesaj}`;
    window.open(
      `https://wa.me/905377329384?text=${encodeURIComponent(metin)}`,
      "_blank",
    );
    setOk(true);
    e.target.reset();
    setTimeout(() => setOk(false), 5000);
  }

  return (
    <form onSubmit={gonder} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
        <label className="block text-xs font-medium text-gray-300 mb-2">İlgilendiğiniz Hizmet / Ürün</label>
        <select name="hizmet" className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border focus:border-brand-gold focus:outline-none text-sm text-gray-300">
          <option>Web tabanlı iş yeri paneli</option>
          <option>Kurs yönetimi</option>
          <option>Otel yönetimi</option>
          <option>İş yeri yönetimi</option>
          <option>Öğrenci Yönetimi</option>
          <option>NFC / Kartlı Yoklama</option>
          <option>Aidat ve Kasa</option>
          <option>Görevli Takip</option>
          <option>Üye Oturumu</option>
          <option>İş yerime özel internet adresi</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-300 mb-2">Mesajınız *</label>
        <textarea name="mesaj" rows={4} required placeholder="Projeniz veya talebiniz hakkında kısa bilgi verin..." className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border focus:border-brand-gold focus:outline-none text-sm text-white" />
      </div>
      <button type="submit" className="w-full py-4 rounded-xl font-title text-xs font-bold uppercase tracking-wider text-black gold-gradient-bg hover:brightness-110 transition-all shadow-lg shadow-brand-gold/20 flex items-center justify-center gap-2">
        <i className="fa-solid fa-paper-plane" /> Mesajı Gönder
      </button>
      {ok ? (
        <div className="p-4 rounded-xl bg-emerald-900/50 border border-emerald-500/50 text-emerald-300 text-xs text-center">
          <i className="fa-solid fa-circle-check text-emerald-400 mr-1 text-sm" /> WhatsApp açıldı. Mesajınızı oradan gönderebilirsiniz.
        </div>
      ) : null}
    </form>
  );
}
