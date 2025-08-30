import { fetchLatedLessonPlan, fetchProfile, fetchSubject } from "@/lib/fetch";

import AppForm from "@/components/form/app-form";

export default async function LessonPlanPage() {
  console.log("5");
  const initImages = "education";
  const data = await fetchLatedLessonPlan();
  const subjects = await fetchSubject();
  console.log("6");
  const profile = await fetchProfile();

  return (
    <AppForm
      initImages={initImages}
      data={data}
      subjects={subjects}
      profile={profile}
    />
  );
}
