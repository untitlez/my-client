import { fetchLessonPlan } from "@/lib/fetch";
import { FormType } from "@/validators/form.validator";

import { ContentTable } from "@/components/office/content/content-table";

export default async function ObjectivesPage() {
  const data = await fetchLessonPlan();
  const findObjectives = data.filter((item: FormType) => item.objectives);

  return (
    <div className="flex flex-col items-center">
      <ContentTable data={findObjectives} />
    </div>
  );
}
