"use client";

import { SidebarAccount } from "./sidebar-account";
import { SidebarMainMenu } from "./sidebar-main-menu";
import { SidebarSubMenu } from "./sidebar-sub-menu";
import { SidebarFooterMenu } from "./sidebar-footer-menu";
import { SidebarLogout } from "./sidebar-logout";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar className="top-(--header-height) h-[calc(100svh-var(--header-height))]!">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarAccount />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMainMenu />
        <SidebarSubMenu />
      </SidebarContent>
      <SidebarFooter>
        <SidebarFooterMenu />
        <SidebarLogout />
      </SidebarFooter>
    </Sidebar>
  );
}
