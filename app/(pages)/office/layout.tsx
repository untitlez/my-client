import { AppSidebar } from "@/components/office/sidebar/app-sidebar";
import { AppHeader } from "@/components/office/header/app-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { fetchLessonPlan } from "@/lib/fetch";

export default async function OfficeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await fetchLessonPlan();
  const count = data.length;

  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <AppHeader />
        <div className="flex flex-1">
          <AppSidebar count={count} />
          <SidebarInset className="flex flex-1 flex-col gap-4 p-8 bg-neutral-200 dark:bg-background">
            {children}
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
