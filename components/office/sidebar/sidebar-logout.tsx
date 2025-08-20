"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

import { routes } from "@/lib/routes";

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

export function SidebarLogout() {
  const router = useRouter();

  const onLogout = () => {
    router.push(routes.pages.home);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="lg" variant="outline" className="w-full cursor-pointer">
          <LogOut className="size-4" />
          ออกจากระบบ
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>ยืนยันออกจากระบบ</AlertDialogTitle>
          <AlertDialogDescription>
            คุณต้องการยืนยันเพื่อออกจากระบบใช่หรือไม่
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>ยกเลิก</AlertDialogCancel>
          <AlertDialogAction onClick={onLogout}>ยืนยัน</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
