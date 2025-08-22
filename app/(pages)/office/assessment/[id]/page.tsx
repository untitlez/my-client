import { fetchLessonPlanId } from "@/lib/fetch";
import { ContentCard } from "@/components/office/content/content-card";

interface AssessmentIdPageProps {
  params: {
    id: Promise<string>;
  };
}

export default async function AssessmentIdPage({
  params,
}: AssessmentIdPageProps) {
  const id = await params.id;
  const findAssessmentId = await fetchLessonPlanId(id);

  return (
    <div className="justify-items-center">
      <ContentCard data={findAssessmentId} />
    </div>
  );
}
