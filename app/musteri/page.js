import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cerezAdi, oturumCoz } from "@/lib/oturum";
import { kullaniciBul } from "@/lib/kayitlar";
import Cikis from "../components/Cikis";

export default async function MusteriPage() {
  const depo = await cookies();
  const oturum = await oturumCoz(depo.get(cerezAdi())?.value);
  if (!oturum || oturum.rol !== "musteri") redirect("/");

  const kullanici = kullaniciBul(oturum.id);
  if (!kullanici) redirect("/");

  const profil = kullanici.profil || {};
  const odemeler = profil.odemeler || [];

  return (
    <main style={{ minHeight: "100vh", padding: 24 }}>
      <p style={{ maxWidth: 760, margin: "0 auto 12px" }}>
        <a href="/" style={{ color: "#d4af37", fontWeight: 800 }}>← Eagle Software</a>
      </p>
      <section style={{ maxWidth: 760, margin: "0 auto", display: "grid", gap: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
          <div>
            <p style={{ margin: 0, color: "#fbbf24", fontSize: 12, fontWeight: 800 }}>MÜŞTERİ OTURUMU</p>
            <h1 style={{ margin: "6px 0 0", fontSize: 28 }}>{kullanici.adSoyad}</h1>
          </div>
          <Cikis />
        </div>
        <div style={kutu}>
          <Bilgi ad="E-posta" deger={kullanici.email} />
          <Bilgi ad="Telefon" deger={profil.telefon || "—"} />
          <Bilgi ad="Grup" deger={profil.grup || "—"} />
          <Bilgi ad="Üyelik" deger={profil.uyelik || "—"} />
          <Bilgi ad="Kayıt tarihi" deger={profil.kayitTarihi || "—"} />
        </div>
        <div style={kutu}>
          <h2 style={{ margin: "0 0 12px", fontSize: 18 }}>Ödemelerim</h2>
          {odemeler.length === 0 ? (
            <p style={{ margin: 0, color: "#94a3b8" }}>Kayıtlı ödeme yok.</p>
          ) : (
            odemeler.map((o) => (
              <div key={`${o.tarih}-${o.aciklama}`} style={{ display: "flex", justifyContent: "space-between", gap: 12, padding: "8px 0", borderTop: "1px solid #334155" }}>
                <span>{o.aciklama}<br /><small style={{ color: "#94a3b8" }}>{o.tarih}</small></span>
                <strong>{Number(o.tutar).toLocaleString("tr-TR")} ₺</strong>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

function Bilgi({ ad, deger }) {
  return (
    <p style={{ margin: "0 0 8px" }}>
      <span style={{ color: "#94a3b8", fontSize: 12, fontWeight: 800 }}>{ad}</span><br />
      {deger}
    </p>
  );
}

const kutu = {
  background: "#1e293b",
  border: "1px solid #334155",
  borderRadius: 20,
  padding: 18,
};
