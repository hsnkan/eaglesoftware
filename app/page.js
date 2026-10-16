import SiteKabuk from "./components/SiteKabuk";
import GirisFormu from "./components/GirisFormu";

export default function HomePage() {
  return (
    <SiteKabuk>
      <section className="sahne">
        <div>
          <img className="amblem" src="/eagle-logo.png" alt="Eagle Software amblemi" />
          <h1>EAGLE SOFTWARE</h1>
          <p className="alt">FREELANCE YAZILIM HİZMETLERİ</p>
          <p className="lead">
            İşletmeler için yazılım kurarız. Müşteri girişi bu sayfadadır.
            Programların açıklaması Ürünler sayfasındadır.
          </p>
        </div>
        <aside className="giris-kutu">
          <h2>Müşteri girişi</h2>
          <p>
            Deneme: ayse@ornek.com
            <br />
            Şifre: musteri123
          </p>
          <GirisFormu gomulu />
        </aside>
      </section>
    </SiteKabuk>
  );
}
