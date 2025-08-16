"use client";

import Image from "next/image";
import { NotepadText } from "lucide-react";

import { FormType } from "@/validators/form.validator";

import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
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

interface FormDetailProps {
  formDetail: FormType;
  image: undefined;
  exportPDF: () => Promise<void>;
}

export const FormDetail = ({
  formDetail,
  image,
  exportPDF,
}: FormDetailProps) => {
  const classLevelValue = classLevelItems.find(
    (item) => item.value === formDetail.classLevel,
  );

  const items = [
    { label: "ระดับชั้น", placeholder: classLevelValue?.label },
    { label: "วิชาเรียน", placeholder: formDetail.subject },
    { label: "ชื่อหน่วย", placeholder: formDetail.unitName },
    { label: "จุดประสงค์", placeholder: formDetail.objectives },
    { label: "กิจกรรม", placeholder: formDetail.activities },
    { label: "วิธีประเมิน", placeholder: formDetail.assessment },
  ];
  console.log("formDetail", formDetail);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="btn">
          <NotepadText className="size-4" />
          เอกสาร
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle>ข้อมูลแผนการสอน :</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="flex flex-col gap-3 my-4">
              {formDetail.unitName && (
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
                  <Label className="flex  text-center">{item.label}</Label>
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
        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel className="btn sm:mr-auto">ปิด</AlertDialogCancel>
          <AlertDialogAction className="btn" onClick={exportPDF}>
            Export PDF
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
