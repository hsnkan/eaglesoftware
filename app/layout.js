import "./globals.css";

export const metadata = {
  title: "Eagle Software",
  description:
    "Eagle Software, işletmelere özel yazılım kurar. Üye sistemi bu siteden denenebilir.",
  icons: { icon: "/eagle-logo.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
