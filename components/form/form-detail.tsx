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
  data: FormType;
  image: string | undefined;
}

export const FormDetail = ({ data }: FormDetailProps) => {
  const items = [
    { label: fieldItems.classLevel.label, placeholder: data.classLevel },
    { label: fieldItems.subject.label, placeholder: data.subject },
    { label: fieldItems.unitName.label, placeholder: data.unitName },
    { label: fieldItems.objectives.label, placeholder: data.objectives },
    { label: fieldItems.activities.label, placeholder: data.activities },
    { label: fieldItems.assessment.label, placeholder: data.assessment },
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
          <AlertDialogTitle>รายละเอียดแผนการสอน :</AlertDialogTitle>
          <AlertDialogDescription asChild className="my-4">
            <Table>
              <TableCaption>
                <div className="relative aspect-video overflow-hidden rounded-xl border mb-3 sm:mb-6 shadow-md">
                  <Image
                    src={data.image ?? ""}
                    alt="images"
                    className="rounded-xl object-cover"
                    sizes="50vw"
                    fill
                  />
                </div>
              </TableCaption>
              <TableBody>
                {items.map((item, i) => (
                  <TableRow key={i}>
                    <TableHead className="w-1/4">{item.label} :</TableHead>
                    <TableCell className="text-center max-w-xs break-words whitespace-normal">
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
            <Link href={routes.pages.document + data._id}>บันทึกไฟล์ PDF</Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
