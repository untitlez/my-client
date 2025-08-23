import { fetchLessonPlan } from "@/lib/fetch";
import { FormType } from "@/validators/form.validator";

import { ContentTable } from "@/components/office/content/content-table";

export default async function AssessmentPage() {
  const data = await fetchLessonPlan();
  const findAssessment = data.filter((item: FormType) => item.assessment);

  return (
    <div className="flex flex-col items-center">
      <ContentTable data={findAssessment} />
    </div>
  );
}
