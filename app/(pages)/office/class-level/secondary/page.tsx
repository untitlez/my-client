import { fetchLessonPlan } from "@/lib/fetch-lesson-plan";
import { FormType } from "@/validators/form.validator";

import { ContentTable } from "@/components/office/content/content-table";

export default async function SecondaryPage() {
  const data = await fetchLessonPlan();
  const findSecondary = data.filter((item: FormType) =>
    item.classLevel.startsWith("secondaryEd")
  );

  return (
    <div className="flex flex-col items-center">
      <ContentTable data={findSecondary} />
    </div>
  );
}
