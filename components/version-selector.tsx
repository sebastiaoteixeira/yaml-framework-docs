"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

export interface VersionOption {
  title: string;
  description?: string;
  url: string;
}

function detectCurrentVersion(pathname: string, options: VersionOption[]): string {
  const match = pathname.match(/\/docs\/(v[\d.]+)\//);
  if (match) return match[1];
  if (options.length > 0) return options[0].title;
  return "";
}

export function VersionSelector({ versions }: { versions: VersionOption[] }) {
  const pathname = usePathname();
  const router = useRouter();
  const current = detectCurrentVersion(pathname, versions);

  const onValueChange = useCallback(
    (value: string) => {
      const option = versions.find((v) => v.title === value);
      if (!option) return;

      const versionPattern = /\/docs\/v[\d.]+\//;
      if (versionPattern.test(pathname)) {
        router.push(pathname.replace(versionPattern, `/docs/${value}/`));
      } else {
        router.push(option.url);
      }
    },
    [pathname, router, versions],
  );

  return (
    <select
      value={current}
      onChange={(e) => onValueChange(e.target.value)}
      className="rounded-md border border-fd-border bg-fd-card px-2.5 py-1.5 text-sm text-fd-foreground outline-none focus:ring-2 focus:ring-fd-primary"
    >
      {versions.map((v) => (
        <option key={v.title} value={v.title}>
          {v.title}
          {v.description ? ` (${v.description})` : ""}
        </option>
      ))}
    </select>
  );
}
