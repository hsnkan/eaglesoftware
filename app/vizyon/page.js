import SiteKabuk from "../components/SiteKabuk";

export const metadata = { title: "Vizyon · Eagle Software" };

export default function VizyonPage() {
  return (
    <SiteKabuk>
      <section className="sayfa">
        <p className="alt">VİZYON</p>
        <h1>Vizyon</h1>
        <p className="lead">
          Kartvizitteki kartal ve kod çizgisi bunu anlatır: yazılım gösteriş için
          değil, işletmenin işini taşımak için vardır. Eagle Software’in yönü,
          tanıtım sitesinden denenebilen, sonra işletmenin kendi alan adına
          bağlanan ürünler üretmektir.
        </p>
        <p className="lead">
          İlk ürün salon ve kurs yönetimidir. Müşteri bu siteden deneyebilir.
          Aynı çizgi, isteyen başka işletmeler için ayrı kurulum olarak sürer.
        </p>
      </section>
    </SiteKabuk>
  );
}
