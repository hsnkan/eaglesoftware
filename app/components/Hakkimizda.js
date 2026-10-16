export default function Hakkimizda() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card border border-brand-gold/30 text-xs font-semibold text-brand-gold mb-3">
            <i className="fa-solid fa-building" /> Kurumsal Profilimiz
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-title text-white">
            Eagle Software <span className="gold-gradient-text">Hakkında</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Teknolojiye yön veren tutkumuz, disiplinli çalışma anlayışımız ve
            yüksek kalite standartlarımızla yazılım dünyasındayız.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-brand-card p-8 rounded-3xl border border-brand-gold/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl group-hover:bg-brand-gold/15 transition-all" />
            <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center text-2xl mb-6 border border-brand-gold/20">
              <i className="fa-solid fa-bullseye" />
            </div>
            <h3 className="text-2xl font-bold font-title text-white mb-4">Misyonumuz</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              İşletmelerin dijital dönüşüm süreçlerinde en güvenilir yol arkadaşı
              olmak; karmaşık süreçleri sadeleştiren, kullanıcı dostu, güvenilir ve
              yüksek performanslı yazılım çözümleri üreterek müşterilerimizin iş
              verimliliğini maksimum seviyeye çıkarmaktır.
            </p>
          </div>
          <div className="bg-brand-card p-8 rounded-3xl border border-brand-cyan/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-2xl group-hover:bg-brand-cyan/15 transition-all" />
            <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 text-brand-cyan flex items-center justify-center text-2xl mb-6 border border-brand-cyan/20">
              <i className="fa-solid fa-eye" />
            </div>
            <h3 className="text-2xl font-bold font-title text-white mb-4">Vizyonumuz</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Freelance yazılım ekosisteminde yenilikçi teknolojilere öncülük eden,
              ulusal ve uluslararası ölçekte tanınan, kalitesiyle referans gösterilen
              ve teknolojik gelişmeleri anında ürünlerine entegre edebilen lider bir
              yazılım markası olmaktır.
            </p>
          </div>
        </div>

        <div className="bg-brand-card/80 rounded-3xl border border-brand-border p-8 lg:p-12">
          <h3 className="text-2xl font-bold font-title text-center text-white mb-10">
            Temel <span className="gold-gradient-text">Çalışma İlkelerimiz</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Ilke ikon="fa-code-merge" renk="gold" baslik="Temiz Kod" yazi="Sürdürülebilir, modüler ve kolay geliştirilebilir altyapı." />
            <Ilke ikon="fa-clock" renk="cyan" baslik="Zamanında Teslim" yazi="Belirlenen takvime sadık kalarak eksiksiz teslimat." />
            <Ilke ikon="fa-user-shield" renk="gold" baslik="Gizlilik & Güvenlik" yazi="Proje fikirleriniz ve verileriniz tam güvence altında." />
            <Ilke ikon="fa-handshake" renk="cyan" baslik="Sürekli İletişim" yazi="Geliştirme sürecinin her aşamasında şeffaf bilgilendirme." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Ilke({ ikon, renk, baslik, yazi }) {
  const cerceve = renk === "cyan" ? "border-brand-cyan/40 text-brand-cyan" : "border-brand-gold/40 text-brand-gold";
  return (
    <div className="text-center p-4">
      <div className={`w-12 h-12 mx-auto rounded-full bg-brand-dark border ${cerceve} flex items-center justify-center text-xl mb-3`}>
        <i className={`fa-solid ${ikon}`} />
      </div>
      <h4 className="font-bold text-white mb-1">{baslik}</h4>
      <p className="text-xs text-gray-400">{yazi}</p>
    </div>
  );
}
