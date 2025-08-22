import { fetchLessonPlan, fetchSubject } from "@/lib/fetch";
import { FormType } from "@/validators/form.validator";

import { ContentStat } from "@/components/office/content/content-stat";
import { SubjectAdd } from "@/components/office/content/subject/subject-add";

export default async function SubjectPage() {
  const data = await fetchLessonPlan();
  const findSubject = data.map((item: FormType) => item.subject);

  const subjects = await fetchSubject();

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-full">
        <SubjectAdd />
      </div>
      <div className="w-full grid auto-rows-min gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <ContentStat data={findSubject} subjects={subjects} />
      </div>
    </div>
  );
}
