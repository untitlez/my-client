import { fetchLessonPlanId } from "@/lib/fetch";
import { ContentCard } from "@/components/office/content/content-card";

interface OfficeIdPageProps {
  params: {
    id: Promise<string>;
  };
}

export default async function OfficeIdPage({ params }: OfficeIdPageProps) {
  const id = await params.id;
  const findOfficeIdPage = await fetchLessonPlanId(id);

  return (
    <div className="justify-items-center">
      <ContentCard data={findOfficeIdPage} />
    </div>
  );
}
