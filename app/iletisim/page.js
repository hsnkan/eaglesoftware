import SiteKabuk from "../components/SiteKabuk";

export const metadata = { title: "İletişim · Eagle Software" };

export default function IletisimPage() {
  return (
    <SiteKabuk>
      <section className="sayfa">
        <p className="alt">İLETİŞİM</p>
        <h1>Eagle Software</h1>
        <p className="lead">Freelance yazılım hizmetleri. Kartvizitteki hatlar:</p>
        <div className="kartlar">
          <article className="ozellik">
            <h3>Telefon</h3>
            <p>
              <a href="tel:+905377329384">0537 732 93 84</a>
            </p>
          </article>
          <article className="ozellik">
            <h3>E-posta</h3>
            <p>
              <a href="mailto:eaglesoftware.global@gmail.com">
                eaglesoftware.global@gmail.com
              </a>
            </p>
          </article>
          <article className="ozellik">
            <h3>WhatsApp</h3>
            <p>
              <a href="https://wa.me/905377329384" target="_blank" rel="noreferrer">
                0537 732 93 84
              </a>
            </p>
          </article>
        </div>
        <img
          className="kartvizit"
          src="/kartvizit.png"
          alt="Eagle Software kartvizit"
          style={{ marginTop: 22 }}
        />
      </section>
    </SiteKabuk>
  );
}
