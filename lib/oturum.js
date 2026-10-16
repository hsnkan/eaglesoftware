const CEREZ = "web_oturum";

function baytlar(metin) {
  return new TextEncoder().encode(metin);
}

function b64url(metin) {
  const bytes = baytlar(metin);
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function b64urlCoz(kod) {
  const padded = kod.replace(/-/g, "+").replace(/_/g, "/");
  const pad = padded.length % 4 === 0 ? "" : "=".repeat(4 - (padded.length % 4));
  const binary = atob(padded + pad);
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

async function imza(govde, secret) {
  const key = await crypto.subtle.importKey(
    "raw",
    baytlar(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const mac = await crypto.subtle.sign("HMAC", key, baytlar(govde));
  const bytes = new Uint8Array(mac);
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

export function cerezAdi() {
  return CEREZ;
}

export function gizliAnahtar() {
  return process.env.OTURUM_SECRET || "";
}

export async function oturumOlustur(veri) {
  const govde = b64url(
    JSON.stringify({
      ...veri,
      exp: Date.now() + 7 * 24 * 60 * 60 * 1000,
    }),
  );
  const mac = await imza(govde, gizliAnahtar());
  return `${govde}.${mac}`;
}

export async function oturumCoz(token) {
  if (!token || !gizliAnahtar()) return null;
  const [govde, mac] = String(token).split(".");
  if (!govde || !mac) return null;
  const beklenen = await imza(govde, gizliAnahtar());
  if (beklenen.length !== mac.length) return null;
  let fark = 0;
  for (let i = 0; i < beklenen.length; i += 1) {
    fark |= beklenen.charCodeAt(i) ^ mac.charCodeAt(i);
  }
  if (fark !== 0) return null;
  try {
    const veri = JSON.parse(b64urlCoz(govde));
    if (!veri?.id || !veri?.rol || !veri?.exp) return null;
    if (veri.exp < Date.now()) return null;
    return veri;
  } catch {
    return null;
  }
}
