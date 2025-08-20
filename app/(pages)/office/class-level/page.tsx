import { routes } from "@/lib/routes";
import { fetchLessonPlan } from "@/lib/fetch-lesson-plan";
import { FormType } from "@/validators/form.validator";

import { ContentStat } from "@/components/office/content/content-stat";

export default async function ClassLevelPage() {
  const data = await fetchLessonPlan();

  const primaryEducation = data.filter((item: FormType) =>
    item.classLevel.startsWith("primaryEd")
  );
  const secondaryEducation = data.filter((item: FormType) =>
    item.classLevel.startsWith("secondaryEd")
  );

  const items = [
    {
      title: "ประถมศึกษา",
      description: "ดูข้อมูลตามระดับชั้น (ป.1-ป.6)",
      value: primaryEducation.length,
      href: routes.pages.office.classLevel.primary,
    },
    {
      title: "มัธยมศึกษา",
      description: "ดูข้อมูลตามระดับชั้น (ม.1-ม.6)",
      value: secondaryEducation.length,
      href: routes.pages.office.classLevel.secondary,
    },
  ];

  return (
    <div className="grid auto-rows-min gap-8 p-4 md:grid-cols-2">
      <ContentStat items={items} />
    </div>
  );
}
