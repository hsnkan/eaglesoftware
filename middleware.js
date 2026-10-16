import { NextResponse } from "next/server";
import { cerezAdi, oturumCoz } from "@/lib/oturum";

export async function middleware(request) {
  const token = request.cookies.get(cerezAdi())?.value;
  const oturum = await oturumCoz(token);
  const yol = request.nextUrl.pathname;

  if (yol.startsWith("/musteri")) {
    if (!oturum) return NextResponse.redirect(new URL("/urunler", request.url));
    if (oturum.rol !== "musteri") {
      return NextResponse.redirect(new URL("/personel", request.url));
    }
  }

  if (yol.startsWith("/personel")) {
    if (!oturum) return NextResponse.redirect(new URL("/urunler", request.url));
    if (oturum.rol !== "personel") {
      return NextResponse.redirect(new URL("/musteri", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/musteri/:path*", "/personel/:path*"],
};
