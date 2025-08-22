import { fetchLessonPlan } from "@/lib/fetch";
import { FormType } from "@/validators/form.validator";

import { ContentTable } from "@/components/office/content/content-table";

export default async function UnitNamePage() {
  const data = await fetchLessonPlan();
  const findUnitName = data.filter((item: FormType) => item.unitName);

  return (
    <div className="flex flex-col items-center">
      <ContentTable data={findUnitName} />
    </div>
  );
}
