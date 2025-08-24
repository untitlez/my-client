"use client";

import Link from "next/link";
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
    <div
      className="min-h-svh flex flex-col items-center justify-center gap-6 p-6 md:p-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Card className="bg-background/80 backdrop-blur w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">ยินดีต้อนรับ👋</CardTitle>
          <CardDescription className="text-base">
            เริ่มต้นการใช้งานระบบแผนการสอนได้เลย
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <Button asChild className="btn py-6 sm:py-8 text-base sm:text-lg">
            <Link href={routes.pages.lessonPlan}>สร้างแผนการสอน</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="btn py-6 sm:py-8 text-base sm:text-lg hover:text-chart-5"
          >
            <Link href={routes.pages.auth.login}>เข้าสู่ระบบ</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
