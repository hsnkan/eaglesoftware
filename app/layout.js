import "./globals.css";

export const metadata = {
  title: "Eagle Software",
  description:
    "Eagle Software salon ve kurs yönetim yazılımı. Müşteri oturumunu eaglesoftware.com.tr üzerinde deneyin.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
