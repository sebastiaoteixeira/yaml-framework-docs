import { source } from "@/lib/source";
import { notFound, redirect } from "next/navigation";
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from "fumadocs-ui/page";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { getLatestVersionUrl, versionOptions } from "@/lib/versions";
import type { Metadata } from "next";
import type { PageTree } from "fumadocs-core/server";

function findFirstPageUrl(node: PageTree.Node): string | undefined {
  if (node.type === "page") return node.url;
  if ("children" in node) {
    for (const child of node.children) {
      const url = findFirstPageUrl(child);
      if (url) return url;
    }
  }
  return undefined;
}

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    redirect(getLatestVersionUrl());
  }

  const isVersionIndex =
    slug.length === 1 &&
    versionOptions.some((v) => v.title === slug[0]);

  if (isVersionIndex) {
    const versionFolder = source.pageTree.children.find(
      (child): child is PageTree.Folder =>
        child.type === "folder" && child.name === slug![0]
    );
    if (versionFolder) {
      const firstUrl = findFirstPageUrl(versionFolder);
      if (firstUrl) redirect(firstUrl);
    }
  }

  const page = source.getPage(slug);

  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = source.getPage(slug);

  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
