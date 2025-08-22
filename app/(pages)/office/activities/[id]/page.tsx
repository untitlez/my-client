import { fetchLessonPlanId } from "@/lib/fetch";
import { ContentCard } from "@/components/office/content/content-card";

interface ActivitiesIdPageProps {
  params: {
    id: Promise<string>;
  };
}

export default async function ActivitiesIdPage({
  params,
}: ActivitiesIdPageProps) {
  const id = await params.id;
  const findActivitiesIdPage = await fetchLessonPlanId(id);

  return (
    <div className="justify-items-center">
      <ContentCard data={findActivitiesIdPage} />
    </div>
  );
}
