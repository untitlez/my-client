"use client";

import {
  User2,
  School,
  BookOpen,
  Layers,
  Target,
  Activity,
  ListCheck,
  FolderOpen,
  Home,
  ClipboardCheck,
} from "lucide-react";

import { routes } from "@/lib/routes";

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

export const AppSidebarItems = {
  account: {
    name: "example",
    role: "member",
    avatar: "/avatars/shadcn.jpg",
    icon: User2,
  },
  mainMenu: [
    {
      title: "ระดับชั้น",
      icon: School,
      isActive: true,
      menu: [
        {
          title: "ประถมศึกษา",
          url: routes.pages.office.classLevel.primary,
        },
        {
          title: "มัธนมศึกษา",
          url: routes.pages.office.classLevel.secondary,
        },
      ],
    },
    {
      title: "วิชาเรียน",
      url: routes.pages.office.subject,
      icon: BookOpen,
    },
    {
      title: "หน่วยการเรียนรู้",
      url: routes.pages.office.unitName,
      icon: Layers,
    },
    {
      title: "จุดประสงค์",
      url: routes.pages.office.objectives,
      icon: Target,
    },
    {
      title: "กิจกรรม",
      url: routes.pages.office.activities,
      icon: Activity,
    },
    {
      title: "วัดผล และประเมิน",
      url: routes.pages.office.assessment,
      icon: ListCheck,
    },
  ],
  subMenu: [
    {
      title: "แผนการสอนทั้งหมด",
      url: routes.pages.office.home,
      icon: FolderOpen,
    },
  ],
  footerMenu: [
    {
      title: "หน้าแรก",
      url: routes.pages.home,
      icon: Home,
    },
    {
      title: "สร้างแผนการสอน",
      url: routes.pages.home,
      icon: ClipboardCheck,
    },
  ],
};

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
