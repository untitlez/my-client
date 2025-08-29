"use client";

import { UserType } from "@/validators/user.validator";

import { SidebarAccount } from "./sidebar-account";
import { SidebarMainMenu } from "./sidebar-main-menu";
import { SidebarSubMenu } from "./sidebar-sub-menu";
import { SidebarFooterMenu } from "./sidebar-footer-menu";
import { SidebarSignOut } from "./sidebar-sign-out";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  count: number;
  profile: UserType;
}

export const AppSidebar = ({ count, profile }: AppSidebarProps) => {
  return (
    <Sidebar className="top-(--header-height) h-[calc(100svh-var(--header-height))]!">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarAccount profile={profile} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMainMenu />
        <SidebarSubMenu count={count} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarFooterMenu />
        <SidebarSignOut />
      </SidebarFooter>
    </Sidebar>
  );
};
