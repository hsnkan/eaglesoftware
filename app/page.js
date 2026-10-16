import SiteKabuk from "./components/SiteKabuk";

export default function HomePage() {
  return (
    <SiteKabuk>
      <section className="hero">
        <div>
          <p className="kicker">YAZILIM ŞİRKETİ</p>
          <h1>İşletmenin işini taşıyan yazılım.</h1>
          <p className="lead">
            Eagle Software, salon, kurs ve benzeri işletmeler için kendi adıyla
            çalışan programlar kurar. Kayıt, ödeme ve personel aynı yerde durur.
            Müşteri kendi oturumunu açar, personel iş yeri programına bağlanır.
          </p>
          <div className="hero-actions">
            <a className="altin-buton" href="/urunler">Ürünü incele</a>
            <a className="cerceve-buton" href="/iletisim">Projeni konuşalım</a>
          </div>
          <div className="olculer">
            <div><strong>Özel kurulum</strong><span>İşletmenin kendi alan adı</span></div>
            <div><strong>Üye oturumu</strong><span>Müşteri yalnızca kendini görür</span></div>
            <div><strong>Canlı yayın</strong><span>İnternet sitesinde çalışan program</span></div>
          </div>
        </div>
        <div className="vitrin">
          <img className="kartvizit" src="/kartvizit.png" alt="Eagle Software kartvizit" />
        </div>
      </section>

      <section className="bolum">
        <div className="bolum-baslik">
          <p className="kicker">HİZMETLER</p>
          <h2>Yazılımı işletmenin günlük işine göre kurarız.</h2>
        </div>
        <div className="kartlar">
          <article className="ozellik">
            <span className="no">01</span>
            <h3>Özel yazılım</h3>
            <p>Hazır bir kalıp bırakmayız. Kayıt, aidat, yoklama ve personel akışını işletmenin kendi düzenine göre yerleştiririz.</p>
          </article>
          <article className="ozellik">
            <span className="no">02</span>
            <h3>Oturum ve yetki</h3>
            <p>Müşteri kendi bilgisine girer. Personel yönetim paneline bağlanır. İki taraf aynı ekranı görmez.</p>
          </article>
          <article className="ozellik">
            <span className="no">03</span>
            <h3>Yayın ve alan adı</h3>
            <p>Program internette açılır. İşletmenin alan adına bağlanır, tanıtım sitesinden denenebilir.</p>
          </article>
        </div>
      </section>

      <section className="urun-serit">
        <div>
          <p className="kicker">ÜRÜN</p>
          <h2>Eagle Üye Sistemi</h2>
          <p className="lead">
            Salon ve kurslar için ilk ürün. Üyelik ve ödemeler müşteri oturumunda
            durur. Bu siteden deneme hesabıyla açılabilir.
          </p>
          <a className="altin-buton" href="/urunler">Müşteri olarak dene</a>
        </div>
        <div className="ozellik">
          <h3>Deneme hesabı</h3>
          <p>ayse@ornek.com</p>
          <p>Şifre: musteri123</p>
        </div>
      </section>

      <section className="bolum">
        <div className="bolum-baslik">
          <p className="kicker">ÇALIŞMA</p>
          <h2>Üç adımda canlıya çıkar.</h2>
        </div>
        <div className="kartlar">
          <article className="adim">
            <span className="no">1</span>
            <h3>İhtiyaç</h3>
            <p>İşletmenin kayıt, ödeme ve personel akışını konuşuruz.</p>
          </article>
          <article className="adim">
            <span className="no">2</span>
            <h3>Kurulum</h3>
            <p>Programı o işletmeye ayırır, deneme oturumuyla kontrol ederiz.</p>
          </article>
          <article className="adim">
            <span className="no">3</span>
            <h3>Yayın</h3>
            <p>Site işletmenin alan adında açılır. Müşteri ve personel kendi kapısından girer.</p>
          </article>
        </div>
      </section>

      <section className="bolum">
        <div className="iki">
          <a className="ozellik" href="/misyon">
            <p className="kicker">MİSYON</p>
            <h3>İşletmenin işini sade yazılıma taşımak.</h3>
            <p>Kayıt ve ödeme dağınık defterde kalmasın. Program işletmenin kendi adıyla çalışsın.</p>
          </a>
          <a className="ozellik" href="/vizyon">
            <p className="kicker">VİZYON</p>
            <h3>Her işletmenin kendi yazılımı olsun.</h3>
            <p>Tanıtım sitesinden denenen ürün, sonra işletmenin alan adına bağlansın.</p>
          </a>
        </div>
      </section>
    </SiteKabuk>
  );
}
