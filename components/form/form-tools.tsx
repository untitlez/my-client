"use client";

import Link from "next/link";

import { routes } from "@/lib/routes";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export const FormTools = () => {
  return (
    <div className="flex items-center gap-3">
      <Button asChild variant="outline" className="btn">
        <Link href={routes.pages.office.home}>แฟ้มแผนการสอน</Link>
      </Button>
      <ThemeToggle />
    </div>
  );
};
