"use client";

import Link from "next/link";
import { useFormContext } from "react-hook-form";
import { Loader2 } from "lucide-react";

import { routes } from "@/lib/routes";

import { Button } from "@/components/ui/button";

export const SignUpSubmit = () => {
  const { formState } = useFormContext();

  return (
    <div className="grid gap-3 py-2">
      <Button
        type="submit"
        className="cursor-pointer active:scale-95"
        disabled={!formState.isDirty || formState.isSubmitting}
      >
        {formState.isSubmitting ? (
          <div className="flex items-center gap-2">
            <Loader2 className="size-4 animate-spin" />
            กำลังสมัคร...
          </div>
        ) : (
          "สมัครสมาชิก"
        )}
      </Button>

      <Button
        asChild
        type="button"
        variant="outline"
        className="cursor-pointer active:scale-95"
      >
        <Link href={routes.pages.auth.signin}>กลับไปหน้าเข้าสู่ระบบ</Link>
      </Button>
    </div>
  );
};
