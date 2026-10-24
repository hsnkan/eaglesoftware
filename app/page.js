import Link from "next/link";

export default function HomePage() {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-gold/30 text-xs font-medium text-brand-gold">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              Eagle Software · Kurumsal yazılım şirketi
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-title leading-tight tracking-tight text-white">
              İŞ YERİNİZ <br />
              <span className="gold-gradient-text">KENDİ İNTERNET ADRESİNDE</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
              <strong>Eagle Software</strong>, kurs yönetimi, restoran menü QR,
              iş yeri randevu ve ihtiyaca göre tasarımlar sunar. Her işletme kendi
              internet adresinden çalışır.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/urunler"
                className="px-7 py-3.5 rounded-xl font-title text-xs font-bold uppercase tracking-wider text-black gold-gradient-bg hover:scale-105 transition-all shadow-lg shadow-brand-gold/25 flex items-center gap-2"
              >
                <i className="fa-solid fa-layer-group" /> Çözümlerimizi İnceleyin
              </Link>
              <Link
                href="/iletisim"
                className="px-7 py-3.5 rounded-xl font-title text-xs font-bold uppercase tracking-wider text-white bg-brand-card hover:bg-brand-border border border-brand-border hover:border-brand-cyan transition-all flex items-center gap-2"
              >
                <i className="fa-solid fa-building" /> Kurumsal İletişim
              </Link>
            </div>
            <div className="pt-8 border-t border-brand-border/60 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-black font-title gold-gradient-text">Web</div>
                <div className="text-xs text-gray-400 font-medium mt-1">Kurulum gerektirmez</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black font-title text-brand-cyan">1 adres</div>
                <div className="text-xs text-gray-400 font-medium mt-1">Her iş yerine ayrı</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black font-title gold-gradient-text">7/24</div>
                <div className="text-xs text-gray-400 font-medium mt-1">Panel erişimi</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-brand-gold via-brand-cyan to-brand-gold-light opacity-50 blur-xl group-hover:opacity-100 transition duration-1000" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full border-4 border-brand-gold/60 p-2 bg-brand-dark shadow-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="/eagle-logo.png"
                  alt="Eagle Software Emblem"
                  className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-gold mb-2">Profesyonel çözümler</p>
              <h2 className="text-2xl sm:text-3xl font-black font-title text-white">Sektörünüze göre yönetim paneli</h2>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              Aynı kurumsal altyapı, işletmenin işine göre açılır. Her çözüm kendi internet adresinde çalışır.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Cozum no="01" ikon="fa-graduation-cap" baslik="Kurs Yönetim Programı" yazi="Öğrenci, yoklama, görevli ve kasa kayıtları kursun kendi internet adresinde toplanır." />
            <Cozum no="02" href="https://restoran-menu-three.vercel.app" ikon="fa-qrcode" baslik="Restoran Menü QR" yazi="Müşteri masadaki karekodla güncel menüyü açar. Fiyat ve ürün restoran panelinden düzenlenir." />
            <Cozum no="03" href="https://is-yeri-randevu.vercel.app" ikon="fa-calendar-check" baslik="İş Yeri Randevu Sistemi" yazi="Müşteri gün ve saat seçer. İş yeri doluluk ve randevu listesini panelden yönetir." />
            <Cozum no="04" ikon="fa-pen-ruler" baslik="İhtiyaçlarınıza Göre Tasarımlar" yazi="İşletmenin kendi sürecine göre ekran, akış ve internet adresi birlikte tasarlanır." />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-brand-card/60 p-6 rounded-2xl border border-brand-border hover:border-brand-gold/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center text-xl mb-4">
              <i className="fa-solid fa-globe" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-title">Kendi internet adresiniz</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Program bilgisayara kurulmaz. İş yeri, personel ve üyeler tarayıcıdan
              size ayrılan internet adresine girerek çalışır.
            </p>
          </div>
          <div className="bg-brand-card/60 p-6 rounded-2xl border border-brand-border hover:border-brand-cyan/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center text-xl mb-4">
              <i className="fa-solid fa-users" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-title">Sektöre göre panel</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Kurs, restoran ve randevu ihtiyacına göre kayıt, menü veya randevu
              ekranı kendi internet adresinde açılır.
            </p>
          </div>
          <div className="bg-brand-card/60 p-6 rounded-2xl border border-brand-border hover:border-brand-gold/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center text-xl mb-4">
              <i className="fa-solid fa-id-card" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-title">Üye ve personel girişi</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Üye kendi kaydını ve ödemelerini görür. Personel girişi iş yeri
              yönetim programına bağlanır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cozum({ no, ikon, baslik, yazi, href }) {
  const kart = (
    <article className="bg-brand-card rounded-2xl border border-brand-border p-6 h-full">
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs font-title tracking-widest text-brand-gold">{no}</span>
        <i className={`fa-solid ${ikon} text-brand-cyan`} />
      </div>
      <h3 className="text-lg font-bold text-white font-title mb-2">{baslik}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{yazi}</p>
    </article>
  );
  if (!href) return kart;
  const disari = href.startsWith("http");
  if (disari) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block h-full hover:brightness-110 transition-all">
        {kart}
      </a>
    );
  }
  return (
    <Link href={href} className="block h-full hover:brightness-110 transition-all">
      {kart}
    </Link>
  );
}
