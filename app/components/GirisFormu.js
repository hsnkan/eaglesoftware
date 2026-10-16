"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GirisFormu({ gomulu = false }) {
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
    <form onSubmit={gonder} style={{ display: "grid", gap: 12 }}>
      <label style={{ display: "grid", gap: 6, fontSize: 13, fontWeight: 700 }}>
        E-posta
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ornek@posta.com"
          style={inputStil}
        />
      </label>
      <label style={{ display: "grid", gap: 6, fontSize: 13, fontWeight: 700 }}>
        Şifre
        <input
          type="password"
          required
          value={sifre}
          onChange={(e) => setSifre(e.target.value)}
          style={inputStil}
        />
      </label>
      {hata ? (
        <p style={{ margin: 0, color: "#fecaca", fontSize: 13, fontWeight: 700 }}>{hata}</p>
      ) : null}
      <button type="submit" disabled={yukleniyor} style={butonStil}>
        {yukleniyor ? "Giriş yapılıyor..." : "Giriş yap"}
      </button>
      <button
        type="button"
        disabled={yukleniyor}
        onClick={() => {
          setEmail("ayse@ornek.com");
          setSifre("musteri123");
        }}
        style={{ ...butonStil, background: "transparent", color: "#f3d27a", border: "1px solid #d4af37" }}
      >
        Deneme müşteri bilgilerini doldur
      </button>
    </form>
  );
}

const inputStil = {
  width: "100%",
  border: "1px solid #334155",
  background: "#020617",
  color: "#f8fafc",
  borderRadius: 12,
  padding: "12px 14px",
};

const butonStil = {
  border: 0,
  borderRadius: 12,
  padding: "12px 14px",
  background: "#f59e0b",
  color: "#0f172a",
  fontWeight: 800,
  cursor: "pointer",
};
