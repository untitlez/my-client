"use client";

import { Info } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const SignInPopup = () => {
  return (
    <Popover>
      <PopoverTrigger className="underline-offset-4 hover:underline text-sm cursor-pointer">
        ลืมรหัสผ่าน?
      </PopoverTrigger>
      <PopoverContent
        side="top"
        className="font-light text-sm w-full flex items-center gap-2"
      >
        <Info className="size-4" />
        หากลืมรหัสผ่าน กรุณาเข้าสู่ระบบด้วยบัญชีสมาชิก
      </PopoverContent>
    </Popover>
  );
};
