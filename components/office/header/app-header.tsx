"use client";

import { usePathname } from "next/navigation";
import { SidebarIcon } from "lucide-react";

import { pathNameItems } from "@/lib/constant-path-name";

import { HeaderInfo } from "./header-info";
import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function AppHeader() {
  const { toggleSidebar } = useSidebar();
  const pathName = usePathname().split("/").filter(Boolean);
  const translatePathName = (pathName: string) => {
    const match = pathNameItems.find((item) => item.path === pathName);
    return match ? match.label : "รายละเอียด";
  };

  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button>
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            {pathName.map((item, i) => (
              <div
                key={i}
                className="text-muted-foreground flex items-center gap-1.5 text-sm break-words sm:gap-2.5"
              >
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{translatePathName(item)}</BreadcrumbPage>
                </BreadcrumbItem>
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto mr-4">
          <HeaderInfo />
        </div>
      </div>
    </header>
  );
}
