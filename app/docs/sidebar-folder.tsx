'use client';
import {
  SidebarFolder,
  SidebarFolderContent,
  SidebarFolderLink,
  SidebarFolderTrigger,
} from "fumadocs-ui/components/layout/sidebar";
import type { PageTree } from "fumadocs-core/server";
import type { ReactNode } from "react";

export function VersionAwareSidebarFolder({
  item,
  children,
}: {
  item: PageTree.Folder;
  level: number;
  children: ReactNode;
}) {
  if (item.root) return null;

  return (
    <SidebarFolder>
      {item.index ? (
        <SidebarFolderLink href={item.index.url}>
          {item.icon}
          {item.name}
        </SidebarFolderLink>
      ) : (
        <SidebarFolderTrigger>
          {item.icon}
          {item.name}
        </SidebarFolderTrigger>
      )}
      <SidebarFolderContent>{children}</SidebarFolderContent>
    </SidebarFolder>
  );
}
