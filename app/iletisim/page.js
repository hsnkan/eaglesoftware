import IletisimFormu from "../components/IletisimFormu";

export const metadata = { title: "İletişim · Eagle Software" };

export default function IletisimPage() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card border border-brand-gold/30 text-xs font-semibold text-brand-gold mb-3">
            <i className="fa-solid fa-headset" /> İletişim & Destek
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-title text-white">
            Bizimle <span className="gold-gradient-text">İletişime Geçin</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Kurs, otel veya iş yeri paneliniz için internet adresi, demo ve modül
            seçimi hakkında bize yazabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-card p-6 rounded-2xl border border-brand-gold/30 hover:border-brand-gold transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center text-xl shrink-0">
                  <i className="fa-solid fa-phone" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase font-mono tracking-wider">Telefon & WhatsApp</div>
                  <a href="tel:+905377329384" className="text-lg font-bold text-white hover:text-brand-gold font-mono">
                    0537 732 93 84
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-brand-card p-6 rounded-2xl border border-brand-cyan/30 hover:border-brand-cyan transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center text-xl shrink-0">
                  <i className="fa-solid fa-envelope" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs text-gray-400 uppercase font-mono tracking-wider">E-Posta Adresi</div>
                  <a href="mailto:eaglesoftware.global@gmail.com" className="text-base font-bold text-white hover:text-brand-cyan font-mono truncate block">
                    eaglesoftware.global@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-brand-card p-6 rounded-2xl border border-brand-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-dark text-brand-gold flex items-center justify-center text-xl shrink-0 border border-brand-gold/20">
                  <i className="fa-solid fa-laptop-code" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase font-mono tracking-wider">Şirket</div>
                  <div className="text-sm font-bold text-white font-title">KURUMSAL YAZILIM ÇÖZÜMLERİ</div>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/905377329384"
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-between shadow-xl hover:brightness-110 transition-all block"
            >
              <div className="flex items-center gap-3">
                <i className="fa-brands fa-whatsapp text-3xl" />
                <div>
                  <div className="font-bold font-title text-sm">WhatsApp Anlık Mesajlaşın</div>
                  <div className="text-xs text-emerald-100">7/24 hızlı yanıt alabilirsiniz.</div>
                </div>
              </div>
              <i className="fa-solid fa-chevron-right text-sm" />
            </a>
          </div>

          <div className="lg:col-span-7 bg-brand-card p-8 rounded-3xl border border-brand-border">
            <h3 className="text-xl font-bold font-title text-white mb-6 flex items-center gap-2">
              <i className="fa-solid fa-paper-plane text-brand-gold" /> Mesaj Gönderin
            </h3>
            <IletisimFormu />
          </div>
        </div>
      </div>
    </section>
  );
}
