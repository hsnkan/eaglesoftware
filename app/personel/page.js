import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cerezAdi, oturumCoz } from "@/lib/oturum";
import { kullaniciBul } from "@/lib/kayitlar";
import Cikis from "../components/Cikis";

export default async function PersonelPage() {
  const depo = await cookies();
  const oturum = await oturumCoz(depo.get(cerezAdi())?.value);
  if (!oturum || oturum.rol !== "personel") redirect("/");

  const kullanici = kullaniciBul(oturum.id);
  if (!kullanici) redirect("/");

  const program = process.env.ISYERI_PROGRAM_URL || "https://eagle-software-global.vercel.app";

  return (
    <main style={{ minHeight: "100vh", padding: 24 }}>
      <p style={{ maxWidth: 760, margin: "0 auto 12px" }}>
        <a href="/" style={{ color: "#d4af37", fontWeight: 800 }}>← Eagle Software</a>
      </p>
      <section style={{ maxWidth: 760, margin: "0 auto", display: "grid", gap: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
          <div>
            <p style={{ margin: 0, color: "#fbbf24", fontSize: 12, fontWeight: 800 }}>PERSONEL OTURUMU</p>
            <h1 style={{ margin: "6px 0 0", fontSize: 28 }}>{kullanici.adSoyad}</h1>
            <p style={{ margin: "6px 0 0", color: "#94a3b8" }}>{kullanici.unvan || "Personel"}</p>
          </div>
          <Cikis />
        </div>
        <div style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 20, padding: 18 }}>
          <h2 style={{ marginTop: 0 }}>İş yeri yönetim programı</h2>
          <p style={{ color: "#cbd5e1", lineHeight: 1.6 }}>
            Bu oturum sizi personel olarak tanıdı. İş yeri kayıtları, öğrenciler ve kasa
            Kurs Yönetim programındadır. Program kendi girişini kullanır.
          </p>
          <a
            href={program}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              marginTop: 8,
              background: "#f59e0b",
              color: "#0f172a",
              fontWeight: 800,
              textDecoration: "none",
              borderRadius: 12,
              padding: "12px 16px",
            }}
          >
            İş yeri programını aç
          </a>
        </div>
      </section>
    </main>
  );
}
