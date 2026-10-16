"use client";

import { useRouter } from "next/navigation";

export default function Cikis() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={async () => {
        await fetch("/api/cikis", { method: "POST" });
        router.push("/");
        router.refresh();
      }}
      style={{
        border: "1px solid #334155",
        background: "transparent",
        color: "#e2e8f0",
        borderRadius: 12,
        padding: "10px 14px",
        fontWeight: 700,
        cursor: "pointer",
      }}
    >
      Çıkış
    </button>
  );
}
