import { fetchLessonPlan } from "@/lib/fetch";
import { FormType } from "@/validators/form.validator";

import { ContentTable } from "@/components/office/content/content-table";

export default async function ActivitiesPage() {
  const data = await fetchLessonPlan();
  const findActivities = data.filter((item: FormType) => item.activities);

  return (
    <div className="flex flex-col items-center">
      <ContentTable data={findActivities} />
    </div>
  );
}
