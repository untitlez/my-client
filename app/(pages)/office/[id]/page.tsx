import { fetchLessonPlanId } from "@/lib/fetch";
import { ContentCard } from "@/components/office/content/content-card";

interface OfficeIdPageProps {
  params: Promise<{ id: string }>;
}

export default async function OfficeIdPage({ params }: OfficeIdPageProps) {
  const { id } = await params;
  const findOfficeIdPage = await fetchLessonPlanId(id);

  return (
    <div className="justify-items-center">
      <ContentCard data={findOfficeIdPage} />
    </div>
  );
}
