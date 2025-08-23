"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon } from "lucide-react";

import { sidebarItems } from "@/lib/constant-sidebar";
import { Switch } from "@/components/ui/switch";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export const SidebarFooterMenu = () => {
  const { theme, setTheme } = useTheme();
  const [checkTheme, setCheckTheme] = useState(false);

  useEffect(() => {
    setCheckTheme(true);
  }, []);

  if (!checkTheme) return null;

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {sidebarItems.footerMenu.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild className="active:opacity-80">
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}

          {/* Theme Toggle */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <div className="justify-between">
                <div className="flex items-center gap-2">
                  <Moon className="size-4" />
                  <span>Dark Mode</span>
                </div>
                <Switch
                  className="cursor-pointer"
                  checked={theme === "dark"}
                  onCheckedChange={(checked) =>
                    setTheme(checked ? "dark" : "light")
                  }
                />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
