"use client";

import Link from "next/link";
import Image from "next/image";
import { ClipboardCheck } from "lucide-react";

import { routes } from "@/lib/routes";
import { fieldItems } from "@/lib/constant-form";
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

interface FormDetailProps {
  formDetail: FormType;
  image: string | undefined;
}

export const FormDetail = ({ formDetail, image }: FormDetailProps) => {
  const items = [
    { label: fieldItems.classLevel.label, placeholder: formDetail.classLevel },
    { label: fieldItems.subject.label, placeholder: formDetail.subject },
    { label: fieldItems.unitName.label, placeholder: formDetail.unitName },
    { label: fieldItems.objectives.label, placeholder: formDetail.objectives },
    { label: fieldItems.activities.label, placeholder: formDetail.activities },
    { label: fieldItems.assessment.label, placeholder: formDetail.assessment },
  ];

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="btn">
          <ClipboardCheck className="size-4" />
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
          <AlertDialogAction asChild className="btn">
            <Link href={routes.pages.document} target="_blank">
              บันทึกไฟล์ PDF
            </Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
