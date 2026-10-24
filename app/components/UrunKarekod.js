"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

export default function UrunKarekod({ adres }) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    QRCode.toDataURL(adres, {
      margin: 1,
      width: 128,
      color: { dark: "#0a0d12", light: "#ffffff" },
    }).then(setSrc);
  }, [adres]);

  if (!src) return <div className="w-20 h-20 rounded-lg bg-white" />;
  return <img src={src} alt="Ürün karekodu" width={80} height={80} className="w-20 h-20 rounded-lg bg-white p-1" />;
}
