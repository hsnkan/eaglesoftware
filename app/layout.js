import "./globals.css";
import SiteKabuk from "./components/SiteKabuk";

export const metadata = {
  title: "EAGLE SOFTWARE - Kurumsal Yazılım Çözümleri",
  description:
    "Eagle Software, kurs yönetimi, restoran menü QR, iş yeri randevu ve ihtiyaca göre tasarımlar sunar.",
  icons: { icon: "/eagle-logo.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-brushed min-h-screen flex flex-col justify-between">
        <SiteKabuk>{children}</SiteKabuk>
      </body>
    </html>
  );
}
