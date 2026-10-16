import SiteKabuk from "./components/SiteKabuk";

export default function HomePage() {
  return (
    <SiteKabuk>
      <section className="hero">
        <div>
          <p className="kicker">EAGLE SOFTWARE</p>
          <h1>Freelance yazılım hizmetleri.</h1>
          <p className="lead">
            Eagle Software, işletmenin kendi işine göre yazılım üretir. Kartvizitteki
            çizgi burada da aynıdır: sade, ulaşılabilir ve doğrudan çalışan ürün.
          </p>
          <div className="hero-actions">
            <a className="altin-buton" href="/urunler">
              Ürünleri gör
            </a>
            <a className="cerceve-buton" href="/iletisim">
              İletişim
            </a>
          </div>
        </div>
        <img className="kartvizit" src="/kartvizit.png" alt="Eagle Software kartvizit" />
      </section>

      <section className="bolum">
        <p className="kicker">ŞİRKET</p>
        <h2>Ne yapıyoruz</h2>
        <div className="kartlar">
          <article className="ozellik">
            <h3>İşletmeye özel yazılım</h3>
            <p>Hazır kalıbı işletmenin günlük işine göre kurar, kendi alanında çalışır hale getiririz.</p>
          </article>
          <article className="ozellik">
            <h3>Müşteri kendi oturumunda</h3>
            <p>Giriş yapan kişi yalnızca kendine ait bilgileri görür. Personel iş yeri programına bağlanır.</p>
          </article>
          <article className="ozellik">
            <h3>Doğrudan iletişim</h3>
            <p>Telefon ve e-posta kartvizitteki gibidir. Araya başka bir hat koyulmaz.</p>
          </article>
        </div>
        <div className="hero-actions" style={{ marginTop: 18 }}>
          <a className="cerceve-buton" href="/misyon">Misyon</a>
          <a className="cerceve-buton" href="/vizyon">Vizyon</a>
        </div>
      </section>
    </SiteKabuk>
  );
}
