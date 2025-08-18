"use client";

import Image from "next/image";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Loader2, RefreshCcw } from "lucide-react";
import { toast } from "sonner";

import { FormType } from "@/validators/form.validator";

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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
  onSubmit: (formData: FormType) => Promise<void>;
  fetchData: (values: string) => Promise<void>;
  image: string | undefined;
  isLoading: boolean;
}

export const FormSubmit = ({
  onSubmit,
  fetchData,
  image,
  isLoading,
}: FormSubmitProps) => {
  const [open, setOpen] = useState(false);
  const { handleSubmit, formState, watch } = useFormContext<FormType>();

  const handleConfirm = (data: FormType) => {
    onSubmit(data);
    setOpen(false);
  };

  const allValue = watch();
  const classLevelValue = classLevelItems.find(
    (item) => item.value === allValue.classLevel
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
      {/* Submit Button  */}
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
              {allValue.unitName &&
                (isLoading ? (
                  <div className="aspect-video bg-muted rounded-xl flex items-center justify-center mb-3 sm:mb-6 gap-2">
                    <Loader2 className="size-4 animate-spin" />
                    กำลังค้นหารูปภาพ
                  </div>
                ) : (
                  <div className="relative aspect-video overflow-hidden bg-muted rounded-xl mb-3 sm:mb-6 shadow-md">
                    <Image
                      src={image ?? ""}
                      alt="images"
                      className="rounded-xl object-cover"
                      sizes="50vw"
                      fill
                    />
                  </div>
                ))}
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
          {/* Random Button  */}
          {allValue.unitName && (
            <Tooltip>
              <TooltipTrigger asChild>
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
              </TooltipTrigger>
              <TooltipContent>
                <p>เปลี่ยนรูปภาพ</p>
              </TooltipContent>
            </Tooltip>
          )}
          {/* Cancel Button  */}
          <AlertDialogCancel className="btn">ยกเลิก</AlertDialogCancel>
          {/* Confirm Button  */}
          <AlertDialogAction asChild className="btn">
            {formState.isSubmitting ? (
              <Button type="button" disabled>
                <Loader2 className="size-4 animate-spin" />
                บันทึก
              </Button>
            ) : (
              <Button
                type="submit"
                onClick={handleSubmit(handleConfirm, () =>
                  toast.error("กรุณากรอกข้อมูลให้ครบถ้วน")
                )}
              >
                บันทึก
              </Button>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
