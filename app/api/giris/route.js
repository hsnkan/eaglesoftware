import { NextResponse } from "next/server";
import { girisBul } from "@/lib/kayitlar";
import { cerezAdi, oturumOlustur } from "@/lib/oturum";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const kullanici = girisBul(body.email, body.sifre);
  if (!kullanici) {
    return NextResponse.json(
      { success: false, error: "E-posta veya şifre hatalı." },
      { status: 401 },
    );
  }

  const token = await oturumOlustur({
    id: kullanici.id,
    rol: kullanici.rol,
    adSoyad: kullanici.adSoyad,
  });

  const hedef = kullanici.rol === "personel" ? "/personel" : "/musteri";
  const res = NextResponse.json({ success: true, hedef, rol: kullanici.rol });
  res.cookies.set(cerezAdi(), token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
