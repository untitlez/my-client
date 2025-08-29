"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, UserRoundPlus } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

import { Config } from "@/lib/config";
import { routes } from "@/lib/routes";
import { CreateUserSchema, CreateUserType } from "@/validators/user.validator";

import { SignUpForm } from "./sign-up-form";
import { SignUpSubmit } from "./sign-up-submit";
import { ThemeToggle } from "@/components/theme-toggle";
import { Form } from "@/components/ui/form";

interface AppSignUpProps {
  initImages: string;
}

export default function AppSignUp({ initImages }: AppSignUpProps) {
  const router = useRouter();
  const [image, setImage] = useState();

  const form = useForm<CreateUserType>({
    resolver: zodResolver(CreateUserSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSignUp = async (formData: CreateUserType) => {
    try {
      await axios.post(Config.API_URL + routes.api.user, formData);
      router.push(routes.pages.auth.signin);
      form.reset();
      toast.success("สมัครสมาชิกสำเร็จ !");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 409) {
          toast.error("Username นี้มีผู้ใช้งานแล้ว กรุณาใช้ชื่ออื่น");
        } else {
          toast.error("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
        }
      } else {
        toast.error("ไม่ทราบสาเหตุของข้อผิดพลาด");
      }
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
        <div className="ml-auto">
          <ThemeToggle />
        </div>

        {/* Form  */}
        <FormProvider {...form}>
          <Form {...form}>
            <form
              className="space-y-6 w-full max-w-md my-auto"
              onSubmit={form.handleSubmit(onSignUp)}
            >
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex items-center gap-3">
                  <UserRoundPlus />
                  <h1 className="text-2xl font-semibold">สมัครสมาชิก</h1>
                </div>
                <p className="text-muted-foreground text-sm text-balance">
                  สร้างบัญชีใหม่เพื่อเข้าใช้งานระบบ
                </p>
              </div>

              <SignUpForm />
              <SignUpSubmit />
            </form>
          </Form>
        </FormProvider>
      </div>
    </div>
  );
}
