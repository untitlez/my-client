"use client";

import Image from "next/image";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Loader2, RefreshCcw } from "lucide-react";
import { toast } from "sonner";

import { fieldItems } from "@/lib/constant-form";
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

interface FormSubmitProps {
  onSubmit: (formData: FormType) => Promise<void>;
  fetchImages: (values: string) => Promise<void>;
  image: string | undefined;
  isLoading: boolean;
}

export const FormSubmit = ({
  onSubmit,
  fetchImages,
  image,
  isLoading,
}: FormSubmitProps) => {
  const [open, setOpen] = useState(false);
  const { handleSubmit, formState, watch } = useFormContext<FormType>();

  const allValue = watch();

  const items = [
    { label: fieldItems.classLevel.label, placeholder: allValue.classLevel },
    { label: fieldItems.subject.label, placeholder: allValue.subject },
    { label: fieldItems.unitName.label, placeholder: allValue.unitName },
    { label: fieldItems.objectives.label, placeholder: allValue.objectives },
    { label: fieldItems.activities.label, placeholder: allValue.activities },
    { label: fieldItems.assessment.label, placeholder: allValue.assessment },
  ];

  const handleConfirm = (data: FormType) => {
    onSubmit(data);
    setOpen(false);
  };

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
                  <div className="aspect-video bg-muted border rounded-xl shadow-md flex items-center justify-center mb-3 sm:mb-6 gap-2">
                    <Loader2 className="size-4 animate-spin" />
                    กำลังค้นหารูปภาพ
                  </div>
                ) : (
                  <div className="relative aspect-video overflow-hidden bg-muted rounded-xl shadow-md mb-3 sm:mb-6">
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
                  className="flex flex-wrap sm:grid sm:grid-cols-4 items-center gap-1 sm:gap-3"
                >
                  <Label className="flex items-center">{item.label}</Label>
                  <Input
                    disabled={!item.placeholder}
                    className="col-span-3 pointer-events-none bg-input/50"
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
                  onClick={() => fetchImages(allValue.unitName)}
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
                  toast.error("กรุณากรอกข้อมูลให้ครบถ้วน"),
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
