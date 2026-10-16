import SiteKabuk from "../components/SiteKabuk";

export const metadata = { title: "Misyon · Eagle Software" };

export default function MisyonPage() {
  return (
    <SiteKabuk>
      <section className="sayfa">
        <p className="kicker">MİSYON</p>
        <h1>İşletmenin işini sade yazılıma taşımak.</h1>
        <p className="lead">
          Eagle Software, freelance yazılım hizmeti verir. Amaç, işletmenin kayıt,
          ödeme ve personel takibini dağınık defterlerden çıkarıp tek programda
          toplamak ve bunu işletmenin kendi adıyla çalışır hale getirmektir.
        </p>
        <p className="lead">
          Müşteri kendi oturumundan yalnızca kendi bilgisini görür. Personel,
          iş yerinin yönetim programına bağlanır. İletişim de kartvizitteki gibi
          doğrudan kurulur: telefon ve e-posta.
        </p>
      </section>
    </SiteKabuk>
  );
}
