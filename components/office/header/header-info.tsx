"use client";

import { Info } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const HeaderInfo = () => {
  return (
    <Popover>
      <PopoverTrigger className="cursor-help">
        <Info className="size-4" />
      </PopoverTrigger>
      <PopoverContent side="top" className="font-light text-sm text-center">
        สำหรับ Admin เท่านั้นที่สามารถแก้ไขได้
      </PopoverContent>
    </Popover>
  );
};
