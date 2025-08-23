import { fetchLessonPlanId } from "@/lib/fetch";

import { DocumentPdfView } from "@/components/document/document-pdf-view";

interface DocumentPageProps {
  params: Promise<{ id: string }>;
}

export default async function DocumentPage({ params }: DocumentPageProps) {
  const { id } = await params;
  const data = await fetchLessonPlanId(id);

  return <DocumentPdfView data={data} />;
}
