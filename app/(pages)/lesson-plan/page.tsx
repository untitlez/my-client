import { fetchLatedLessonPlan, fetchProfile, fetchSubject } from "@/lib/fetch";

import AppForm from "@/components/form/app-form";

export default async function LessonPlanPage() {
  const initImages = "education";
  const data = await fetchLatedLessonPlan();
  const subjects = await fetchSubject();
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
