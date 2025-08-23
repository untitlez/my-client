import AppForm from "@/components/form/app-form";
import { fetchLessonPlan } from "@/lib/fetch";

export default async function LessonPlanPage() {
  const initImages = "cat";
  const data = await fetchLessonPlan();
  const latedData = data[data.length - 1];

  return <AppForm initImages={initImages} data={latedData} />;
}
