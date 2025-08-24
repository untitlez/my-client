import AppForm from "@/components/form/app-form";
import { fetchLessonPlan, fetchSubject } from "@/lib/fetch";

export default async function LessonPlanPage() {
  const initImages = "education";
  const data = await fetchLessonPlan();
  const latedData = data[data.length - 1];

  const subjects = await fetchSubject();

  return (
    <AppForm initImages={initImages} data={latedData} subjects={subjects} />
  );
}
