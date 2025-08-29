"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { format } from "date-fns";
import { th } from "date-fns/locale";

import { FormType } from "@/validators/form.validator";
import { UserType } from "@/validators/user.validator";

import { Button } from "../ui/button";

interface DocumentPdfProps {
  data: FormType & {
    createdAt: Date;
  };
  profile: UserType;
}

export const DocumentPdf = ({ data, profile }: DocumentPdfProps) => {
  const router = useRouter();
  const onBack = () => router.back();

  const currentYear = new Date(data.createdAt).getFullYear() + 543;
  const date = format(data.createdAt, "dd MMMM", { locale: th });

  const image = data.image?.split("/")[2];

  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({ contentRef });

  useEffect(() => {
    handlePrint();
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Overlay  */}
      <div className="absolute inset-0 z-10 grid place-content-center bg-background">
        <div className="flex items-center gap-4">
          <Button
            size="lg"
            variant="outline"
            className="btn sm:text-md"
            onClick={handlePrint}
          >
            ลองใหม่อีกครั้ง
          </Button>
          <Button
            size="lg"
            variant="default"
            className="btn sm:text-md"
            onClick={onBack}
          >
            กลับหน้าเดิม
          </Button>
        </div>
      </div>

      {/* Print PDF  */}
      <div
        ref={contentRef}
        className="bg-white text-black p-12 font-sans leading-relaxed flex flex-col"
        style={{ width: "210mm", minHeight: "297mm" }}
      >
        {/* Header */}
        <h2 className="text-xl font-bold text-center mb-8">
          แผนการจัดการเรียนรู้ที่ :
        </h2>

        {/* Title */}
        <div className="flex justify-between border-b-1 border-black/60 pb-8">
          <div className="space-y-1">
            <p>กลุ่มสาระการเรียนรู้วิชา: {data.subject}</p>
            <p className="break-all">
              หน่วยการเรียนรู้: เรื่อง {data.unitName}
            </p>
            <p>ระดับชั้น: {data.classLevel}</p>
          </div>
          <div className="text-right space-y-1">
            <p>
              วันที่ : {date} {currentYear}
            </p>
            <p className="mt-8">
              ผู้สอน {profile?.fullName ?? "____________________"}
            </p>
          </div>
        </div>

        {/* Optional */}
        <div className="space-y-4 my-8">
          <div>
            <p className="font-semibold">1. จุดประสงค์ :</p>
            <p className="ml-6 text-black/80 break-all">{data.objectives}</p>
          </div>
          <div>
            <p className="font-semibold">2. กิจกรรม :</p>
            <p className="ml-6 text-black/80 break-all">{data.activities}</p>
          </div>
          <div>
            <p className="font-semibold">3. วัดผล และประเมิน :</p>
            <p className="ml-6 text-black/80 break-all">{data.assessment}</p>
          </div>
        </div>

        {/* Image */}
        {data.image && (
          <div className="mt-auto space-y-2 break-inside-avoid pt-12">
            <div className="relative aspect-video overflow-hidden border border-black/60 rounded-xl">
              <Image
                src={data.image}
                alt="ประกอบการสอน"
                className="rounded-xl object-cover"
                sizes="100vw"
                fill
              />
            </div>
            <p className="text-sm text-center text-black/60">
              รูปภาพประกอบ อ้างอิงจาก https://{image}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
