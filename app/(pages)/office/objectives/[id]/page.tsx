import { fetchLessonPlanId } from "@/lib/fetch";
import { ContentCard } from "@/components/office/content/content-card";

interface ObjectivesIdPageProps {
  params: {
    id: string;
  };
}

export default async function ObjectivesIdPage({
  params,
}: ObjectivesIdPageProps) {
  const id = await params.id;
  const findObjectivesId = await fetchLessonPlanId(id)
  
  return (
    <div className="justify-items-center"><ContentCard data={findObjectivesId}/></div>
  )
}
