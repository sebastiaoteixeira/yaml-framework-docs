import { readdirSync, readFileSync } from "fs";
import { join } from "path";

export interface VersionOption {
  title: string;
  description?: string;
  url: string;
}

// Discovers versioned folders by scanning content/docs for subdirectories
// whose meta.json has "root": true. First folder found = latest.
// Adding a new versioned folder automatically includes it here.
function discoverVersions(): VersionOption[] {
  const docsDir = join(process.cwd(), "content", "docs");
  try {
    return readdirSync(docsDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .filter((entry) => {
        try {
          const meta = JSON.parse(
            readFileSync(join(docsDir, entry.name, "meta.json"), "utf-8")
          );
          return meta.root === true;
        } catch {
          return false;
        }
      })
      .sort((a, b) => b.name.localeCompare(a.name, undefined, { numeric: true }))
      .map((entry, idx) => ({
        title: entry.name,
        description: idx === 0 ? "Latest" : undefined,
        url: `/docs/${entry.name}/`,
      }));
  } catch {
    return [];
  }
}

export const versionOptions: VersionOption[] = discoverVersions();

export function getLatestVersionUrl(): string {
  return versionOptions[0]?.url ?? "/docs/";
}
