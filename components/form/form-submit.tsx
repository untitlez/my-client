"use client";

import Image from "next/image";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Loader2, RefreshCcw } from "lucide-react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
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

const classLevelItems = [
  { value: "primaryEd_1", label: "ป.1" },
  { value: "primaryEd_2", label: "ป.2" },
  { value: "primaryEd_3", label: "ป.3" },
  { value: "primaryEd_4", label: "ป.4" },
  { value: "primaryEd_5", label: "ป.5" },
  { value: "primaryEd_6", label: "ป.6" },
  { value: "secondaryEd_1", label: "ม.1" },
  { value: "secondaryEd_2", label: "ม.2" },
  { value: "secondaryEd_3", label: "ม.3" },
  { value: "secondaryEd_4", label: "ม.4" },
  { value: "secondaryEd_5", label: "ม.5" },
  { value: "secondaryEd_6", label: "ม.6" },
];

interface FormSubmitProps {
  onSubmit: (formData: any) => Promise<void>;
  fetchData: (values: string) => Promise<void>;
  image: undefined;
}

export const FormSubmit = ({ onSubmit, fetchData, image }: FormSubmitProps) => {
  const [open, setOpen] = useState(false);
  const { handleSubmit, formState, watch } = useFormContext();

  const handleConfirm = (data: any) => {
    onSubmit(data);
    setOpen(false);
  };

  const allValue = watch();
  const classLevelValue = classLevelItems.find(
    (item) => item.value === allValue.classLevel,
  );

  const items = [
    { label: "ระดับชั้น", placeholder: classLevelValue?.label },
    { label: "วิชาเรียน", placeholder: allValue.subject },
    { label: "ชื่อหน่วย", placeholder: allValue.unitName },
    { label: "จุดประสงค์", placeholder: allValue.objectives },
    { label: "กิจกรรม", placeholder: allValue.activities },
    { label: "วิธีประเมิน", placeholder: allValue.assessment },
  ];

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          disabled={!formState.isDirty}
          type="button"
          className="btn ml-auto"
        >
          บันทึก
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle>
            คุณต้องการบันทึกข้อมูลนี้หรือไม่ ?
          </AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="flex flex-col gap-3 my-4">
              {allValue.unitName && (
                <div className="relative aspect-video overflow-hidden mb-3 sm:mb-6 shadow-md">
                  <Image
                    src={image ?? ""}
                    alt="images"
                    className="rounded-xl object-cover"
                    sizes="50vw"
                    fill
                  />
                </div>
              )}
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-wrap sm:grid sm:grid-cols-6 items-center gap-1 sm:gap-3"
                >
                  <Label className="flex text-center">{item.label}</Label>
                  <Input
                    disabled={!item.placeholder}
                    className="col-span-5 pointer-events-none bg-input/50"
                    placeholder={item.placeholder}
                  />
                </div>
              ))}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button
            variant="outline"
            className="btn sm:mr-auto"
            onClick={() => fetchData(allValue.unitName)}
          >
            <span>
              <RefreshCcw className="size-4" />
            </span>
            <span className="sm:hidden">เปลี่ยนรูปภาพ</span>
          </Button>
          <AlertDialogCancel className="btn">ยกเลิก</AlertDialogCancel>
          <AlertDialogAction asChild className="btn">
            {formState.isSubmitting ? (
              <Button type="button" disabled>
                <Loader2 className="size-4 animate-spin" />
                บันทึก
              </Button>
            ) : (
              <Button type="submit" onClick={handleSubmit(handleConfirm)}>
                บันทึก
              </Button>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
