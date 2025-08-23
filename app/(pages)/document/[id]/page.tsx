import { fetchLessonPlanId } from "@/lib/fetch";

import { DocumentPdfView } from "@/components/document/document-pdf-view";

interface DocumentPageProps {
  params: {
    id: Promise<string>;
  };
}

export default async function DocumentPage({ params }: DocumentPageProps) {
  const id = await params.id;
  const data = await fetchLessonPlanId(id);

  return <DocumentPdfView data={data} />;
}
