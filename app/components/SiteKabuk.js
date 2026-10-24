"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const LINKS = [
  { href: "/", id: "home", icon: "fa-house", label: "Ana Sayfa" },
  { href: "/urunler", id: "products", icon: "fa-cubes", label: "Ürünlerimiz" },
  { href: "/misyon", id: "about", icon: "fa-compass", label: "Misyon & Vizyon" },
  { href: "/iletisim", id: "contact", icon: "fa-headset", label: "İletişim" },
];

function aktifMi(pathname, href) {
  if (href === "/") return pathname === "/";
  if (href === "/misyon") return pathname === "/misyon" || pathname === "/vizyon";
  return pathname.startsWith(href);
}

export default function SiteKabuk({ children }) {
  const pathname = usePathname();
  const [acik, setAcik] = useState(false);

  if (pathname === "/restoran") {
    return <main className="flex-grow">{children}</main>;
  }

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-brand-dark/80 border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-brand-gold via-brand-cyan to-brand-gold-light flex items-center justify-center shadow-lg shadow-brand-gold/20 group-hover:scale-105 transition-transform">
              <img
                src="/eagle-logo.png"
                alt="Eagle Software Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <span className="font-title text-xl font-black tracking-wider text-white block leading-none group-hover:text-brand-gold transition-colors">
                EAGLE <span className="gold-gradient-text">SOFTWARE</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] text-brand-cyan font-semibold uppercase block mt-1">
                Kurumsal Yazılım
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {LINKS.map((l) => {
              const aktif = aktifMi(pathname, l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={
                    aktif
                      ? "px-4 py-2 rounded-lg text-sm font-medium text-brand-gold bg-brand-card/80 border border-brand-gold/40 transition-all"
                      : "px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-brand-card/50 transition-all"
                  }
                >
                  <i className={`fa-solid ${l.icon} mr-1.5 text-xs`} /> {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/iletisim"
              className="px-4 py-2 rounded-lg text-xs font-bold font-title tracking-wider uppercase text-black gold-gradient-bg hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-brand-gold/20"
            >
              <i className="fa-solid fa-building text-sm" /> Kurumsal İletişim
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setAcik((v) => !v)}
            className="md:hidden text-gray-300 hover:text-white text-2xl"
          >
            <i className={`fa-solid ${acik ? "fa-xmark" : "fa-bars"}`} />
          </button>
        </div>

        {acik ? (
          <div className="md:hidden bg-brand-card/95 border-b border-brand-border px-4 pt-3 pb-6 space-y-2">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setAcik(false)}
                className="w-full block text-left px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:bg-brand-dark/50"
              >
                <i className={`fa-solid ${l.icon} mr-2`} /> {l.label}
              </Link>
            ))}
            <Link
              href="/iletisim"
              onClick={() => setAcik(false)}
              className="w-full text-center px-4 py-3 rounded-lg text-xs font-bold font-title uppercase text-black gold-gradient-bg block mt-4"
            >
              <i className="fa-solid fa-building mr-1 text-sm" /> Kurumsal İletişim
            </Link>
          </div>
        ) : null}
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-brand-dark border-t border-brand-border/60 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-brand-border/40 pb-8">
            <div className="md:col-span-5 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-brand-gold to-brand-cyan flex items-center justify-center shrink-0">
                <img
                  src="/eagle-logo.png"
                  alt="Eagle Software Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <div className="font-title text-xl font-black text-white">
                  EAGLE <span className="gold-gradient-text">SOFTWARE</span>
                </div>
                <div className="text-xs text-brand-cyan uppercase tracking-widest mt-0.5">
                  Kurumsal Yazılım Çözümleri
                </div>
              </div>
            </div>
            <div className="md:col-span-7 flex flex-wrap items-center justify-start md:justify-end gap-6 text-xs text-gray-400">
              {LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-brand-gold transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
            <div>© 2026 EAGLE SOFTWARE. Tüm hakları saklıdır.</div>
            <div className="flex items-center gap-4 font-mono">
              <a href="tel:+905377329384" className="hover:text-brand-gold">
                <i className="fa-solid fa-phone mr-1" /> 0537 732 93 84
              </a>
              <span>•</span>
              <a href="mailto:eaglesoftware.global@gmail.com" className="hover:text-brand-cyan">
                <i className="fa-solid fa-envelope mr-1" /> eaglesoftware.global@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
