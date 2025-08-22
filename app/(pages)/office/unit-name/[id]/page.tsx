import { fetchLessonPlanId } from "@/lib/fetch";
import { ContentCard } from "@/components/office/content/content-card";

interface UnitNameIdPageProps {
  params: {
    id: Promise<string>;
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
