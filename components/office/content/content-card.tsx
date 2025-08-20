"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { routes } from "@/lib/routes";
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

interface ContentCardProps {
  data: FormType;
}

export const ContentCard = ({ data }: ContentCardProps) => {
  const router = useRouter();
  const onBack = () => router.back();
  const classLevelValue = classLevelItems.find(
    (item) => item.value === data.classLevel
  );

  const items = [
    { label: "ระดับชั้น", placeholder: classLevelValue?.label },
    { label: "วิชาเรียน", placeholder: data.subject },
    { label: "ชื่อหน่วย", placeholder: data.unitName },
    { label: "จุดประสงค์", placeholder: data.objectives },
    { label: "กิจกรรม", placeholder: data.activities },
    { label: "วิธีประเมิน", placeholder: data.assessment },
  ];
  return (
    <Card className="w-full max-w-screen-sm">
      <CardHeader>
        <CardTitle>รายละเอียดแผนการสอน :</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>
            <div className="relative aspect-video overflow-hidden mb-3 sm:mb-6 shadow-md">
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
                <TableCell className="text-center">
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
          <Link href={routes.pages.document} target="_blank">
            บันทึกไฟล์ PDF
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
