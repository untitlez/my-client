import { fetchLessonPlanId } from "@/lib/fetch-lesson-plan";
import { ContentCard } from "@/components/office/content/content-card";

interface UnitNameIdPageProps {
  params: {
    id: string;
  };
}

export default async function UnitNameIdPage({ params }: UnitNameIdPageProps) {
  const id = await params.id;
  const findUnitNameId = await fetchLessonPlanId(id);

  return (
    <div className="justify-items-center">
      <ContentCard data={findUnitNameId} />
    </div>
  );
}
