import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";

const fumadocsSource = docs.toFumadocsSource();
// fumadocs-mdx v11 returns files as a function at runtime but types it as array;
// call it to satisfy fumadocs-core v15 which expects a plain array in buildContentStorage
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const resolvedFiles = (fumadocsSource as any).files();

export const source = loader({
  baseUrl: "/docs",
  source: { files: resolvedFiles } as typeof fumadocsSource,
});
