import SiteKabuk from "../components/SiteKabuk";
import GirisFormu from "../components/GirisFormu";

export const metadata = { title: "Ürünler · Eagle Software" };

export default function UrunlerPage() {
  return (
    <SiteKabuk>
      <section className="sayfa">
        <p className="kicker">ÜRÜNLER</p>
        <h1>Eagle Üye Sistemi</h1>
        <p className="lead">
          Salon ve kurslar için üye oturumu. Müşteri giriş yapınca kendi üyelik
          ve ödeme bilgilerini görür. Personel girişi, iş yeri yönetim programına bağlanır.
        </p>
      </section>
      <section className="giris-alani">
        <div>
          <h2>Müşteri olarak deneyin</h2>
          <p style={{ color: "#b7c3d4", lineHeight: 1.55 }}>
            Deneme hesabı gerçek bir müşteri oturumu açar. Başka bir müşterinin
            bilgisi görünmez.
          </p>
          <div className="deneme">
            Deneme müşteri: <strong>ayse@ornek.com</strong>
            <br />
            Şifre: <strong>musteri123</strong>
          </div>
        </div>
        <GirisFormu />
      </section>
    </SiteKabuk>
  );
}
