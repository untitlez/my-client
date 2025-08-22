"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
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

interface SubjectDeleteProps {
  id?: string;
  subject: string;
}

export const SubjectDelete = ({ id, subject }: SubjectDeleteProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onDelete = async () => {
    try {
      await axios.delete(Config.API_URL + routes.api.subject + id);
      toast.success("ลบวิชาเรียนสำเร็จ!");
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer text-destructive">
          <Trash2 className="size-4" />
          ลบ
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            คุณต้องการลบวิชา <span className="text-primary">{subject}</span>{" "}
            หรือไม่?
          </AlertDialogTitle>
          <AlertDialogDescription>
            การลบนี้ไม่สามารถย้อนกลับได้
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="btn">ยกเลิก</AlertDialogCancel>
          <AlertDialogAction className="btn ml-auto" onClick={onDelete}>
            ลบ
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
