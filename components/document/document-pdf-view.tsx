"use client";

import dynamic from "next/dynamic";

export const DocumentPdfView = dynamic(
  () =>
    import("@/components/document/document-pdf").then((mod) => mod.DocumentPdf),
  { ssr: false },
);
