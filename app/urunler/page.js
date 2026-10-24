import UrunListesi from "../components/UrunListesi";

export const metadata = { title: "Ürünlerimiz · Eagle Software" };

export default function UrunlerPage() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-card border border-brand-gold/30 text-xs font-semibold text-brand-gold mb-3">
            <i className="fa-solid fa-layer-group" /> Kurumsal çözümler
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-title text-white">
            Ürün <span className="gold-gradient-text">listesi</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Kurs yönetim programını listedeki adresten deneyebilirsiniz. Restoran
            menü QR, iş yeri randevu sistemi ve ihtiyaca göre tasarımlar diğer ürünlerdir.
          </p>
        </div>
        <UrunListesi />
      </div>
    </section>
  );
}
