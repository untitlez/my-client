"use client";

import Link from "next/link";

import { sidebarItems } from "@/lib/constant-sidebar";

import { Skeleton } from "@/components/ui/skeleton";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface SidebarSubMenuProps {
  count: number;
}

export const SidebarSubMenu = ({ count }: SidebarSubMenuProps) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>ทั้งหมด</SidebarGroupLabel>
      <SidebarMenu>
        {sidebarItems.subMenu.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              asChild
              className="active:opacity-80"
              tooltip={item.title}
            >
              <Link href={item.url ?? ""}>
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
            {count ? (
              <SidebarMenuBadge>{count}</SidebarMenuBadge>
            ) : (
              <SidebarMenuBadge>
                <Skeleton className="size-4" />
              </SidebarMenuBadge>
            )}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};
