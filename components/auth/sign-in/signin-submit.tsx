"use client";

import Link from "next/link";
import { useFormContext } from "react-hook-form";
import { Loader2 } from "lucide-react";

import { routes } from "@/lib/routes";

import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";
import { Config } from "@/lib/config";

export const SignInSubmit = () => {
  const { formState, setValue } = useFormContext();

  const onFillMember = () => {
    setValue("username", Config.SIGNIN.MEMBER.USERNAME, { shouldDirty: true });
    setValue("password", Config.SIGNIN.MEMBER.PASSWORD, { shouldDirty: true });
  };

  const onFillAdmin = () => {
    setValue("username", Config.SIGNIN.ADMIN.USERNAME, { shouldDirty: true });
    setValue("password", Config.SIGNIN.ADMIN.PASSWORD, { shouldDirty: true });
  };

  return (
    <div className="grid gap-6 py-2">
      <div className="grid gap-3">
        <Button
          type="submit"
          className="cursor-pointer active:scale-95"
          disabled={!formState.isDirty || formState.isSubmitting}
        >
          {formState.isSubmitting ? (
            <div className="flex items-center gap-2">
              <Loader2 className="size-4 animate-spin" />
              เข้าสู่ระบบ...
            </div>
          ) : (
            "เข้าสู่ระบบ"
          )}
        </Button>
        <Button
          asChild
          type="button"
          variant="secondary"
          className="cursor-pointer active:scale-95"
          disabled={formState.isSubmitting}
        >
          <Link href={routes.pages.auth.signup}>สมัครสมาชิกใหม่</Link>
        </Button>
      </div>
      <div className="flex items-center gap-6 font-thin text-sm text-muted-foreground">
        <Separator className="flex-1" /> หรือ เข้าสู่ระบบด้วย{" "}
        <Separator className="flex-1" />
      </div>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          className="flex-1 cursor-pointer active:scale-95"
          disabled={formState.isSubmitting}
          onClick={onFillMember}
        >
          บัญชีสมาชิก
        </Button>
        <Button
          type="button"
          variant="outline"
          className="flex-1 cursor-pointer active:scale-95"
          disabled={formState.isSubmitting}
          onClick={onFillAdmin}
        >
          บัญชีผู้ดูแล
        </Button>
      </div>
    </div>
  );
};
