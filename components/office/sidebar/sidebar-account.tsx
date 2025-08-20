"use client";

import { AppSidebarItems } from "./app-sidebar";
import { SidebarMenuButton } from "@/components/ui/sidebar";

export const SidebarAccount = () => {
  return (
    <SidebarMenuButton size="lg" className="pointer-events-none">
      <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
        <AppSidebarItems.account.icon className="size-5 text-foreground dark:text-secondary" />
      </div>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate uppercase">
          {AppSidebarItems.account.name}
        </span>
        <span className="truncate text-muted-foreground capitalize">
          {AppSidebarItems.account.role}
        </span>
      </div>
    </SidebarMenuButton>
  );
};
