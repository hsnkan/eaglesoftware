export default function SiteKabuk({ children }) {
  return (
    <>
      <header className="site-header">
        <a className="marka" href="/">
          <img src="/eagle-logo.png" alt="Eagle Software" />
          <span>Eagle Software</span>
        </a>
        <nav className="menu">
          <a href="/">Ana sayfa</a>
          <a href="/misyon">Misyon</a>
          <a href="/vizyon">Vizyon</a>
          <a href="/urunler">Ürünler</a>
          <a href="/iletisim">İletişim</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div>
          Eagle Software · Freelance Yazılım Hizmetleri
          <br />
          eaglesoftware.com.tr
        </div>
        <div>
          0537 732 93 84
          <br />
          eaglesoftware.global@gmail.com
        </div>
      </footer>
    </>
  );
}
