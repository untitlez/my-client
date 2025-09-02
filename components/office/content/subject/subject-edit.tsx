"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

import { Config } from "@/lib/config";
import { routes } from "@/lib/routes";
import { useAuthHeader } from "@/hooks/use-auth-header";
import { SubjectSchema, SubjectType } from "@/validators/subject.validator";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

interface SubjectEditProps {
  id?: string;
  subject: string;
}

export const SubjectEdit = ({ id, subject }: SubjectEditProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const header = useAuthHeader();

  const form = useForm<SubjectType>({
    resolver: zodResolver(SubjectSchema),
    defaultValues: {
      subject: subject,
    },
  });

  const onEdit = async (data: SubjectType) => {
    try {
      await axios.put(Config.API_URL + routes.api.subject + id, data, header);
      toast.success("แก้ไขวิชาเรียนสำเร็จ!");
      router.refresh();
      setOpen(false);
      form.reset();
    } catch {
      toast.success("แก้ไขวิชาเรียนไม่สำเร็จ ลองใหม่อีกครั้ง");
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          <Edit className="size-4" />
          แก้ไข
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>แก้ไขรายชื่อวิชาเรียน :</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="my-1.5">
              <Form {...form}>
                <form>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-2">
                        <FormControl>
                          <Input
                            {...field}
                            autoFocus
                            placeholder="กรอกชื่อวิชา"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="btn">ยกเลิก</AlertDialogCancel>
          <AlertDialogAction
            type="submit"
            className="btn ml-auto"
            disabled={!form.formState.isDirty}
            onClick={form.handleSubmit(onEdit)}
          >
            บันทึก
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
