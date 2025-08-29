import { fetchLessonPlanId, fetchProfile } from "@/lib/fetch";
import { DocumentPdf } from "@/components/document/document-pdf";

interface DocumentPageProps {
  params: Promise<{ id: string }>;
}

export default async function DocumentPage({ params }: DocumentPageProps) {
  const { id } = await params;
  const data = await fetchLessonPlanId(id);

  const profile = await fetchProfile();

  return <DocumentPdf data={data} profile={profile} />;
}
