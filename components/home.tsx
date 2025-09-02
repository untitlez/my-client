"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

import { Config } from "@/lib/config";
import { routes } from "@/lib/routes";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface HomeProps {
  initImages: string;
}

export const Home = ({ initImages }: HomeProps) => {
  const [image, setImage] = useState();

  const fetchImages = async (unitName: string) => {
    const { data } = await axios.get(Config.API_URL + routes.api.images, {
      params: { query: unitName },
    });
    setImage(data);
  };

  useEffect(() => {
    fetchImages(initImages);
  }, []);

  return (
    <div className="relative min-h-svh flex items-center justify-center bg-muted">
      {/* Background Image */}
      {image && (
        <Image
          src={image}
          alt="Lesson"
          className="object-cover"
          sizes="100vw"
          fill
          priority
        />
      )}

      <Card className="bg-background/80 backdrop-blur w-full max-w-md m-6">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">ยินดีต้อนรับ👋</CardTitle>
          <CardDescription className="text-base">
            เริ่มต้นการใช้งานระบบแผนการสอนได้เลย
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:gap-6">
          <Button asChild className="btn py-6 sm:py-8 text-base sm:text-lg">
            <Link href={routes.pages.lessonPlan}>สร้างแผนการสอน</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="btn py-6 sm:py-8 text-base sm:text-lg hover:text-chart-5"
          >
            <Link href={routes.pages.auth.signin}>เข้าสู่ระบบ</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
