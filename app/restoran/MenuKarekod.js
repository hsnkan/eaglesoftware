"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

export default function MenuKarekod() {
  const [src, setSrc] = useState("");

  useEffect(() => {
    const adres = `${window.location.origin}/restoran`;
    QRCode.toDataURL(adres, {
      margin: 1,
      width: 220,
      color: { dark: "#1c1410", light: "#fffaf3" },
    }).then(setSrc);
  }, []);

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm border border-[#e6dccb]">
      {src ? (
        <img src={src} alt="Menüyü açan karekod" width={220} height={220} className="w-full h-auto" />
      ) : (
        <div className="aspect-square bg-[#f4efe6]" />
      )}
      <p className="text-xs text-center text-[#6b5b4b] mt-3 leading-relaxed">
        Masadaki karekod bu menüyü açar. Telefonunuzla okutarak deneyebilirsiniz.
      </p>
    </div>
  );
}
