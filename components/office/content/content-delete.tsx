"use client";

import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

import { Config } from "@/lib/config";
import { routes } from "@/lib/routes";
import { useAuthHeader } from "@/hooks/use-auth-header";

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

interface ContentDeleteProps {
  id?: string;
}

export const ContentDelete = ({ id }: ContentDeleteProps) => {
  const router = useRouter();
  const header = useAuthHeader();

  const onDelete = async () => {
    try {
      await axios.delete(Config.API_URL + routes.api.lessonPlan + id, header);
      toast.success("ลบแผนการสอนสำเร็จ!");
      router.refresh();
    } catch {
      toast.error("ลบแผนการสอนไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="icon" variant="destructive" className="btn">
          <Trash2 className="size-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle> คุณต้องการลบข้อมูลนี้หรือไม่ ?</AlertDialogTitle>
          <AlertDialogDescription>
            การลบนี้ไม่สามารถย้อนกลับได้ ข้อมูลทั้งหมดจะถูกลบถาวร
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="btn">ยกเลิก</AlertDialogCancel>
          <AlertDialogAction className="btn" onClick={onDelete}>
            ลบ
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
