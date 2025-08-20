import { AppSidebar } from "@/components/office/sidebar/app-sidebar";
import { OfficeHeader } from "@/components/office/header/office-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function OfficeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <OfficeHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset className="flex flex-1 flex-col gap-4 p-8 bg-neutral-200 dark:bg-background">
            {children}
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
