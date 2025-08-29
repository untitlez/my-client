"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

import { Config } from "@/lib/config";
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

export const SidebarSignOut = () => {
  const router = useRouter();

  const onSignOut = async () => {
    try {
      await axios.post(
        Config.API_URL + routes.api.auth.signout,
        {},
        { withCredentials: true }
      );
      router.push(routes.pages.home);
      toast.success("ออกจากระบบสำเร็จ !");
    } catch {
      toast.error("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
    }
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
          <AlertDialogCancel className="btn">ยกเลิก</AlertDialogCancel>
          <AlertDialogAction className="btn" onClick={onSignOut}>
            ยืนยัน
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
