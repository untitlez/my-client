"use client";

import Image from "next/image";
import { NotepadText } from "lucide-react";

import { FormType } from "@/validators/form.validator";

import { Button } from "../ui/button";
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
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";

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
  image: string | undefined;
  exportPDF: () => Promise<void>;
}

export const FormDetail = ({
  formDetail,
  image,
  exportPDF,
}: FormDetailProps) => {
  const classLevelValue = classLevelItems.find(
    (item) => item.value === formDetail.classLevel
  );

  const items = [
    { label: "ระดับชั้น", placeholder: classLevelValue?.label },
    { label: "วิชาเรียน", placeholder: formDetail.subject },
    { label: "ชื่อหน่วย", placeholder: formDetail.unitName },
    { label: "จุดประสงค์", placeholder: formDetail.objectives },
    { label: "กิจกรรม", placeholder: formDetail.activities },
    { label: "วิธีประเมิน", placeholder: formDetail.assessment },
  ];

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
          <AlertDialogDescription asChild className="my-4">
            <Table>
              <TableCaption>
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
              </TableCaption>
              <TableBody>
                {items.map((item, i) => (
                  <TableRow key={i}>
                    <TableHead className="w-1/4">{item.label} :</TableHead>
                    <TableCell className="text-center">
                      {item.placeholder}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="btn sm:mr-auto">ปิด</AlertDialogCancel>
          <AlertDialogAction className="btn" onClick={exportPDF}>
            บันทึกไฟล์ PDF
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
