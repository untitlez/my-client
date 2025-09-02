'use server'

import { redirect } from "next/navigation";

import { routes } from "@/lib/routes";
import { fetchLessonPlan, fetchProfile } from "@/lib/fetch";

import { AppSidebar } from "@/components/office/sidebar/app-sidebar";

export default async function AppSidebarViewer() {
  const data = await fetchLessonPlan();
  const count = data.length;

  const profile = await fetchProfile();

  if (!profile || profile.error) {
    redirect(routes.pages.home);
  }

  return <AppSidebar count={count} profile={profile} />;
}
