import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { getSidebarTabs } from "fumadocs-ui/utils/get-sidebar-tabs";
import { VersionAwareSidebarFolder } from "./sidebar-folder";
import type { ReactNode } from "react";

const tabs = getSidebarTabs(source.pageTree);

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: "yaml-api-generator",
      }}
      sidebar={{
        tabs,
        components: { Folder: VersionAwareSidebarFolder },
      }}
    >
      {children}
    </DocsLayout>
  );
}
