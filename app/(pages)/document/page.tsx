"use client";

import dynamic from "next/dynamic";

const DocumentViewerDynamic = dynamic(
  () =>
    import("@/components/document/document-pdf").then((mod) => mod.DocumentPdf),
  { ssr: false }
);

export default function DocumentPage() {
  return <DocumentViewerDynamic />;
}
