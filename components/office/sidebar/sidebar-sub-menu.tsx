"use client";

import Link from "next/link";

import { AppSidebarItems } from "./app-sidebar";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export const SidebarSubMenu = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>ทั้งหมด</SidebarGroupLabel>
      <SidebarMenu>
        {AppSidebarItems.subMenu.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              asChild
              className="cursor-pointer"
              tooltip={item.title}
            >
              <Link href={item.url ?? ""}>
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};
