"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { routes } from "@/lib/routes";
import { fieldItems } from "@/lib/constant-form";
import { FormType } from "@/validators/form.validator";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";

interface ContentCardProps {
  data: FormType;
}

export const ContentCard = ({ data }: ContentCardProps) => {
  const router = useRouter();
  const onBack = () => router.back();

  const items = [
    { label: fieldItems.classLevel.label, placeholder: data.classLevel },
    { label: fieldItems.subject.label, placeholder: data.subject },
    { label: fieldItems.unitName.label, placeholder: data.unitName },
    { label: fieldItems.objectives.label, placeholder: data.objectives },
    { label: fieldItems.activities.label, placeholder: data.activities },
    { label: fieldItems.assessment.label, placeholder: data.assessment },
  ];

  return (
    <Card className="w-full max-w-screen-sm">
      <CardHeader>
        <CardTitle className="text-lg">รายละเอียดแผนการสอน :</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>
            <div className="relative aspect-video overflow-hidden mb-3 sm:mb-6 border rounded-xl shadow-md bg-muted dark:bg-background">
              <Image
                src={data.image ?? ""}
                alt="images"
                className="rounded-xl object-cover"
                sizes="50vw"
                fill
              />
            </div>
          </TableCaption>
          <TableBody className="font-light">
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
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          type="button"
          className="btn sm:mr-auto"
          onClick={onBack}
        >
          กลับ
        </Button>
        <Button asChild type="button" className="btn">
          <Link href={routes.pages.document + data._id}>บันทึกไฟล์ PDF</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
