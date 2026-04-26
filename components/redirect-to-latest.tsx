"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function RedirectToLatest({ url }: { url: string }) {
  const router = useRouter();
  useEffect(() => {
    router.replace(url);
  }, [router, url]);
  return <p>Redirecting to latest version...</p>;
}
