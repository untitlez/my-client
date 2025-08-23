import { fetchLessonPlan, fetchRole } from "@/lib/fetch";

import { ContentTable } from "@/components/office/content/content-table";

export default async function OfficePage() {
  const data = await fetchLessonPlan();
  const role = await fetchRole()
  console.log('role', role)

  return (
    <div className="flex flex-col items-center">
      <ContentTable data={data} />
    </div>
  );
}
