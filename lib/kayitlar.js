import { readFileSync } from "fs";
import { scryptSync, timingSafeEqual } from "crypto";
import path from "path";

function dosya() {
  return path.join(process.cwd(), "data", "kayitlar.json");
}

export function kullanicilariGetir() {
  const ham = readFileSync(dosya(), "utf8");
  return JSON.parse(ham).kullanicilar || [];
}

export function sifreDogruMu(kullanici, sifre) {
  const gelen = scryptSync(String(sifre || ""), kullanici.sifreTuz, 32);
  const kayitli = Buffer.from(kullanici.sifreHash, "hex");
  if (gelen.length !== kayitli.length) return false;
  return timingSafeEqual(gelen, kayitli);
}

export function girisBul(email, sifre) {
  const hedef = String(email || "").trim().toLowerCase();
  const kullanici = kullanicilariGetir().find(
    (k) => String(k.email).toLowerCase() === hedef,
  );
  if (!kullanici || !sifreDogruMu(kullanici, sifre)) return null;
  return kullanici;
}

export function kullaniciBul(id) {
  return kullanicilariGetir().find((k) => k.id === id) || null;
}
