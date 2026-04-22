import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import type { ReactNode } from "react";

const versionOptions = [
  { title: "v0.2", description: "Latest", url: "/docs/v0.2" },
  { title: "v0.1", url: "/docs/v0.1" },
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{ title: "yaml-api-generator" }}
      sidebar={{
        banner: <RootToggle options={versionOptions} />,
        tabs: false,
      }}
    >
      {children}
    </DocsLayout>
  );
}
