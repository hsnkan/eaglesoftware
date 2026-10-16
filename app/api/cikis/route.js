import { NextResponse } from "next/server";
import { cerezAdi } from "@/lib/oturum";

export async function POST() {
  const res = NextResponse.json({ success: true });
  res.cookies.set(cerezAdi(), "", { httpOnly: true, path: "/", maxAge: 0 });
  return res;
}
