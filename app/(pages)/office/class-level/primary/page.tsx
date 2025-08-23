import { fetchLessonPlan } from "@/lib/fetch";
import { FormType } from "@/validators/form.validator";

import { ContentTable } from "@/components/office/content/content-table";

export default async function PrimaryPage() {
  const data = await fetchLessonPlan();
  const findPrimary = data.filter((item: FormType) =>
    item.classLevel.startsWith("ประถมศึกษา"),
  );

  return (
    <div className="flex flex-col items-center">
      <ContentTable data={findPrimary} />
    </div>
  );
}
