"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, Loader2, LockKeyhole } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

import { Config } from "@/lib/config";
import { routes } from "@/lib/routes";
import { setCookie } from "@/lib/cookies";
import { UserSchema, UserType } from "@/validators/user.validator";

import { ThemeToggle } from "@/components/theme-toggle";
import { SignInForm } from "@/components/auth/sign-in/signin-form";
import { SignInSubmit } from "@/components/auth/sign-in/signin-submit";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AppSignInProps {
  initImages: string;
}

export default function AppSignIn({ initImages }: AppSignInProps) {
  const router = useRouter();
  const [image, setImage] = useState();

  const form = useForm<UserType>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSignIn = async (formData: UserType) => {
    try {
      const { data } = await axios.post(
        Config.API_URL + routes.api.auth.signin,
        formData,
      );

      if (!data) toast.error(data.error);

      localStorage.setItem("token", data.token);
      await setCookie(data.token);

      router.push(routes.pages.lessonPlan);
      form.reset();
      toast.success("เข้าสู่ระบบสำเร็จ !");
    } catch {
      toast.error("ชื่อผู้ใช้ หรือรหัสผ่านไม่ถูกต้อง");
    }
  };

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
      {image ? (
        <Image
          src={image}
          alt="Lesson"
          className="object-cover"
          sizes="100vw"
          fill
          priority
        />
      ) : (
        <div className="absolute inset-0 w-1/2 flex items-center justify-center gap-2 bg-muted">
          <Loader2 className="animate-spin text-primary" />
          Loading...
        </div>
      )}

      <div className="absolute inset-0 lg:left-1/2 bg-background lg:bg-background/80 backdrop-blur lg:rounded-3xl flex flex-col items-center justify-center p-6 lg:p-10 lg:m-8">
        {/* Header  */}
        <div className="w-full flex items-center justify-between">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="btn"
                onClick={() => router.back()}
              >
                <ChevronLeft className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>กลับ</TooltipContent>
          </Tooltip>
          <ThemeToggle />
        </div>

        {/* Form  */}
        <FormProvider {...form}>
          <Form {...form}>
            <form
              className="space-y-6 w-full max-w-md my-auto"
              onSubmit={form.handleSubmit(onSignIn)}
            >
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex items-center gap-3">
                  <LockKeyhole />
                  <h1 className="text-2xl font-semibold">เข้าสู่ระบบ</h1>
                </div>
                <p className="text-muted-foreground text-balance">
                  กรอกชื่อผู้ใช้และรหัสผ่านเพื่อเข้าสู่ระบบ
                </p>
              </div>

              <SignInForm />
              <SignInSubmit />
            </form>
          </Form>
        </FormProvider>
      </div>
    </div>
  );
}
