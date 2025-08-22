"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

import { Config } from "@/lib/config";
import { routes } from "@/lib/routes";
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

export const SubjectAdd = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const form = useForm<SubjectType>({
    resolver: zodResolver(SubjectSchema),
    defaultValues: {
      subject: "",
    },
  });

  const onAdd = async (data: SubjectType) => {
    try {
      await axios.post(Config.API_URL + routes.api.subject, data);
      toast.success("เพิ่มวิชาเรียนสำเร็จ!");
      router.refresh();
      setOpen(false);
      form.reset();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button className="btn">
          <Plus className="size-4" />
          เพิ่มวิชาเรียน
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>เพิ่มรายชื่อวิชาเรียน :</AlertDialogTitle>
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
                            placeholder="เช่น ภาษาอังกฤษ"
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
            onClick={form.handleSubmit(onAdd)}
          >
            เพิ่ม
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
