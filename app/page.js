import Link from "next/link";

export default function HomePage() {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-gold/30 text-xs font-medium text-brand-gold">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              Geleceğin Yazılım Çözümleri Burada
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-title leading-tight tracking-tight text-white">
              YÜKSEK PERFORMANSLI <br />
              <span className="gold-gradient-text">YAZILIM ÇÖZÜMLERİ</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
              <strong>Eagle Software</strong> olarak kurumsal ihtiyaçlarınıza özel,
              yüksek hızlı, güvenli ve modern masaüstü, web ve mobil yazılım
              sistemleri geliştiriyoruz. Projelerinizi en son teknolojilerle
              gerçeğe dönüştürüyoruz.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/urunler"
                className="px-7 py-3.5 rounded-xl font-title text-xs font-bold uppercase tracking-wider text-black gold-gradient-bg hover:scale-105 transition-all shadow-lg shadow-brand-gold/25 flex items-center gap-2"
              >
                <i className="fa-solid fa-rocket" /> Ürünlerimizi İnceleyin
              </Link>
              <Link
                href="/iletisim"
                className="px-7 py-3.5 rounded-xl font-title text-xs font-bold uppercase tracking-wider text-white bg-brand-card hover:bg-brand-border border border-brand-border hover:border-brand-cyan transition-all flex items-center gap-2"
              >
                <i className="fa-solid fa-paper-plane" /> Bize Ulaşın
              </Link>
            </div>
            <div className="pt-8 border-t border-brand-border/60 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-black font-title gold-gradient-text">50+</div>
                <div className="text-xs text-gray-400 font-medium mt-1">Tamamlanan Proje</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black font-title text-brand-cyan">%99.9</div>
                <div className="text-xs text-gray-400 font-medium mt-1">Müşteri Memnuniyeti</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black font-title gold-gradient-text">7/24</div>
                <div className="text-xs text-gray-400 font-medium mt-1">Teknik Destek</div>
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

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-brand-card/60 p-6 rounded-2xl border border-brand-border hover:border-brand-gold/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center text-xl mb-4">
              <i className="fa-solid fa-shield-halved" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-title">Güvenli & Stabil Altyapı</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Yazılımlarımız en son güvenlik standartlarına uygun olarak kodlanır.
              Kesintisiz performans ve veri güvenliği önceliğimizdir.
            </p>
          </div>
          <div className="bg-brand-card/60 p-6 rounded-2xl border border-brand-border hover:border-brand-cyan/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center text-xl mb-4">
              <i className="fa-solid fa-wand-magic-sparkles" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-title">Özel Terzi Usulü Çözümler</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Hazır şablonlar yerine doğrudan iş süreçlerinize özel fonksiyonel ve
              modern yazılımlar tasarlayıp geliştiriyoruz.
            </p>
          </div>
          <div className="bg-brand-card/60 p-6 rounded-2xl border border-brand-border hover:border-brand-gold/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center text-xl mb-4">
              <i className="fa-solid fa-headset" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-title">Devamlı Destek & Güncelleme</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Yazılımın tesliminden sonra da yanınızdayız. Düzenli güncellemeler ve
              teknik destek ile sistemlerinizi güncel tutuyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
