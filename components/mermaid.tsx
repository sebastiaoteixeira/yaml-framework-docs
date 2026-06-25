import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { renderMermaidSVG } from "beautiful-mermaid";

// Rendered at build time (static export) into inline SVG. CSS variables let the
// diagram follow the active light/dark theme without re-rendering.
export function Mermaid({ chart }: { chart: string }) {
  try {
    const svg = renderMermaidSVG(chart, {
      bg: "var(--color-fd-background)",
      fg: "var(--color-fd-foreground)",
      transparent: true,
    });
    return (
      <div
        className="my-4 overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    );
  } catch {
    return (
      <CodeBlock title="mermaid">
        <Pre>{chart}</Pre>
      </CodeBlock>
    );
  }
}
