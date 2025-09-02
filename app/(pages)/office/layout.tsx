import { redirect } from "next/navigation";

import { routes } from "@/lib/routes";
import { fetchProfile } from "@/lib/fetch";

import { AppHeader } from "@/components/office/header/app-header";
import AppSidebarViewer from "@/components/office/sidebar/app-sidebar-viewer";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default async function OfficeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const profile = await fetchProfile();

  if (!profile || profile.error) {
    redirect(routes.pages.home);
  }
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <AppHeader />
        <div className="flex flex-1">
          <AppSidebarViewer />
          <SidebarInset className="flex flex-1 flex-col gap-4 p-8 bg-neutral-200 dark:bg-background">
            {children}
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
