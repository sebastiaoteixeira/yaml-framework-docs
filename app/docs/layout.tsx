import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import { versionOptions } from "@/lib/versions";
import type { ReactNode } from "react";

const placeholder = versionOptions[0]
  ? `${versionOptions[0].title} — Latest`
  : "Select version";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{ title: "yaml-api-generator" }}
      sidebar={{
        banner: <RootToggle options={versionOptions} placeholder={placeholder} />,
        tabs: false,
      }}
    >
      {children}
    </DocsLayout>
  );
}
