export default function SiteKabuk({ children }) {
  return (
    <>
      <header className="site-header">
        <a className="marka" href="/">
          <img src="/eagle-logo.png" alt="Eagle Software" />
          <span>
            Eagle Software
            <small>FREELANCE YAZILIM HİZMETLERİ</small>
          </span>
        </a>
        <nav className="menu">
          <a href="/">Ana sayfa</a>
          <a href="/misyon">Misyon</a>
          <a href="/vizyon">Vizyon</a>
          <a href="/urunler">Ürünler</a>
          <a href="/iletisim">İletişim</a>
          <a className="altin-buton" href="/iletisim">
            Görüşme
          </a>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div>
          <strong>Eagle Software</strong>
          <br />
          İşletmeye özel yazılım
          <br />
          eaglesoftware.com.tr
        </div>
        <div>
          <strong>İletişim</strong>
          <br />
          0537 732 93 84
          <br />
          eaglesoftware.global@gmail.com
        </div>
      </footer>
    </>
  );
}
