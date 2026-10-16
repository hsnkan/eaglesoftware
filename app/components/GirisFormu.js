"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GirisFormu() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");
  const [hata, setHata] = useState("");
  const [yukleniyor, setYukleniyor] = useState(false);

  async function gonder(e) {
    e.preventDefault();
    setHata("");
    setYukleniyor(true);
    try {
      const res = await fetch("/api/giris", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, sifre }),
      });
      const data = await res.json();
      if (!data.success) {
        setHata(data.error || "Giriş yapılamadı.");
        return;
      }
      router.push(data.hedef);
      router.refresh();
    } catch {
      setHata("Bağlantı hatası.");
    } finally {
      setYukleniyor(false);
    }
  }

  return (
    <form onSubmit={gonder} className="space-y-3">
      <label className="block text-xs font-medium text-gray-300">
        E-posta
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ornek@posta.com"
          className="mt-1 w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border focus:border-brand-gold focus:outline-none text-sm text-white"
        />
      </label>
      <label className="block text-xs font-medium text-gray-300">
        Şifre
        <input
          type="password"
          required
          value={sifre}
          onChange={(e) => setSifre(e.target.value)}
          className="mt-1 w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border focus:border-brand-gold focus:outline-none text-sm text-white"
        />
      </label>
      {hata ? <p className="text-xs font-bold text-red-300">{hata}</p> : null}
      <button
        type="submit"
        disabled={yukleniyor}
        className="w-full py-3 rounded-xl font-title text-xs font-bold uppercase text-black gold-gradient-bg disabled:opacity-60"
      >
        {yukleniyor ? "Giriş yapılıyor..." : "Giriş yap"}
      </button>
      <button
        type="button"
        disabled={yukleniyor}
        onClick={() => {
          setEmail("ayse@ornek.com");
          setSifre("musteri123");
        }}
        className="w-full py-3 rounded-xl text-xs font-bold uppercase text-brand-gold border border-brand-gold/40"
      >
        Deneme müşteri bilgilerini doldur
      </button>
    </form>
  );
}
