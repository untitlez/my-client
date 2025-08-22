import { fetchLessonPlanId } from "@/lib/fetch";
import { ContentCard } from "@/components/office/content/content-card";

interface PrimaryIdPageProps {
  params: {
    id: Promise<string>;
  };
}

export default async function PrimaryIdPage({ params }: PrimaryIdPageProps) {
  const id = await params.id;
  const findPrimaryId = await fetchLessonPlanId(id);

  return (
    <div className="justify-items-center">
      <ContentCard data={findPrimaryId} />
    </div>
  );
}
