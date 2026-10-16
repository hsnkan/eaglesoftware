import SiteKabuk from "../components/SiteKabuk";

export const metadata = { title: "Ürünler · Eagle Software" };

export default function UrunlerPage() {
  return (
    <SiteKabuk>
      <section className="sayfa">
        <p className="alt">ÜRÜNLER</p>
        <h1>Programlar</h1>
        <p className="lead">
          İki program vardır. Müşteri kendi bilgisine girer. Personel iş yerinin
          yönetim programına bağlanır.
        </p>
        <div className="kartlar">
          <article className="ozellik">
            <h2>Eagle Üye Sistemi</h2>
            <p>
              Salon ve kurs müşterisi içindir. Giriş yapan kişi kendi üyelik,
              grup ve ödeme bilgilerini görür. Başka bir müşterinin kaydı açılmaz.
            </p>
            <p>
              Deneme ana sayfadaki müşteri girişindedir: ayse@ornek.com / musteri123
            </p>
            <p><a className="deneme" href="/">Müşteri girişine dön</a></p>
          </article>
          <article className="ozellik">
            <h2>İş yeri yönetim programı</h2>
            <p>
              Personel içindir. Öğrenci kaydı, aidat, kasa ve yoklama bu programda
              tutulur. Personel hesabı açılınca programa bağlanır.
            </p>
            <p>Personel denemesi: gorevli@ornek.com / personel123</p>
            <p>Giriş ana sayfadaki formdan yapılır.</p>
          </article>
        </div>
      </section>
    </SiteKabuk>
  );
}
