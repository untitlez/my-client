"use client";

import Link from "next/link";

import { routes } from "@/lib/routes";
import { UserType } from "@/validators/user.validator";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface FormToolsProps {
  profile?: UserType;
}

export const FormTools = ({ profile }: FormToolsProps) => {
  return (
    <div className="flex items-center gap-3">
      {profile?._id ? (
        <Button asChild variant="outline" className="btn">
          <Link href={routes.pages.office.home}>แฟ้มแผนการสอน</Link>
        </Button>
      ) : (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="btn">
              แฟ้มแผนการสอน
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>เฉพาะสมาชิกเท่านั้น</AlertDialogTitle>
              <AlertDialogDescription>
                กรุณาลงชื่อเข้าใช้งาน
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="btn">ยกเลิก</AlertDialogCancel>
              <AlertDialogAction asChild className="btn">
                <Link href={routes.pages.auth.signin}>ลงชื่อเข้าใช้</Link>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
      <ThemeToggle />
    </div>
  );
};
