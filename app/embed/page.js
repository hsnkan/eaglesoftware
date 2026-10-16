import GirisFormu from "../components/GirisFormu";

export default function EmbedPage() {
  return (
    <main style={{ minHeight: "100vh", padding: 12, background: "transparent" }}>
      <section
        style={{
          maxWidth: 420,
          margin: "0 auto",
          background: "#1e293b",
          border: "1px solid #334155",
          borderRadius: 20,
          padding: 18,
        }}
      >
        <h1 style={{ margin: "0 0 12px", fontSize: 20 }}>Üye girişi</h1>
        <GirisFormu gomulu />
      </section>
    </main>
  );
}
