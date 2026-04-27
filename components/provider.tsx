"use client";
import { RootProvider } from "fumadocs-ui/provider";
import SearchDialog from "./search";
import type { ReactNode } from "react";

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      search={{
        SearchDialog,
        options: {
          api: "/yaml-framework-docs/api/search",
        },
      }}
    >
      {children}
    </RootProvider>
  );
}
