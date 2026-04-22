import type { Folder } from "fumadocs-core/page-tree";
import { source } from "@/lib/source";

export interface VersionOption {
  title: string;
  description?: string;
  url: string;
}

// Derives version list from root folders in the page tree.
// First folder = latest. Add more versioned folders to docs/ and they appear automatically.
export function getVersionOptions(): VersionOption[] {
  const rootFolders = source.pageTree.children.filter(
    (node): node is Folder => node.type === "folder" && !!node.root
  );

  return rootFolders.map((node, idx) => ({
    title: String(node.name),
    description: idx === 0 ? "Latest" : undefined,
    url: node.index?.url ?? `/docs/${String(node.name)}/`,
  }));
}

export function getLatestVersionUrl(): string {
  return getVersionOptions()[0]?.url ?? "/docs/";
}
