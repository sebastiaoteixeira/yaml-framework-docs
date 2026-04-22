import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import { getVersionOptions } from "@/lib/versions";
import type { ReactNode } from "react";

const versionOptions = getVersionOptions();
const placeholder = `${versionOptions[0]?.title ?? "v?.?"} — Latest`;

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
