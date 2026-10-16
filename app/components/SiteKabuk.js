export default function SiteKabuk({ children }) {
  return (
    <>
      <div className="cizgiler" aria-hidden="true">
        <svg viewBox="0 0 1200 280" preserveAspectRatio="none">
          <path d="M-20 40 C 180 10, 280 120, 460 70 S 760 10, 980 80 1220 20, 1220 20" fill="none" stroke="#49e0ea" strokeWidth="1.4" opacity="0.85" />
          <path d="M-20 70 C 200 30, 320 150, 520 90 S 820 20, 1040 100 1220 40, 1220 40" fill="none" stroke="#e8c872" strokeWidth="1.3" opacity="0.8" />
          <path d="M-20 110 C 160 80, 340 190, 560 120 S 860 50, 1100 130 1220 70, 1220 70" fill="none" stroke="#49e0ea" strokeWidth="1.2" opacity="0.55" />
          <path d="M-20 150 C 220 120, 400 220, 640 150 S 900 80, 1220 150" fill="none" stroke="#e8c872" strokeWidth="1.1" opacity="0.45" />
          <path d="M80 220 C 260 180, 420 250, 640 200 S 920 150, 1160 210" fill="none" stroke="#49e0ea" strokeWidth="1" opacity="0.35" />
        </svg>
      </div>
      <header className="site-header">
        <a className="marka" href="/">
          <img src="/eagle-logo.png" alt="" />
          Eagle Software
        </a>
        <nav className="menu">
          <a href="/">Ana sayfa</a>
          <a href="/urunler">Ürünler</a>
          <a href="/misyon">Misyon</a>
          <a href="/vizyon">Vizyon</a>
          <a href="/iletisim">İletişim</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <span>Eagle Software · Freelance yazılım hizmetleri</span>
        <span>
          <a href="tel:+905377329384">0537 732 93 84</a>
          {" · "}
          <a href="mailto:eaglesoftware.global@gmail.com">eaglesoftware.global@gmail.com</a>
        </span>
      </footer>
    </>
  );
}
