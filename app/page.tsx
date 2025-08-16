"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";

import { Config } from "@/libs/config";
import { FormSchema, FormType } from "@/validators/form.validator";

import { ThemeToggle } from "@/components/theme-toggle";
import { FormSelect } from "@/components/form/form-select";
import { FormTextarea } from "@/components/form/form-textarea";
import { FormText } from "@/components/form/form-text";
import { FormSubmit } from "@/components/form/form-submit";
import { FormDetail } from "@/components/form/form-detail";
import { Form } from "@/components/ui/form";

export default function Home() {
  const [image, setImage] = useState();
  const [formDetail, setFormDetail] = useState<FormType | null>(null);

  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      classLevel: "",
      subject: "",
      unitName: "",
      objectives: "",
      activities: "",
      assessment: "",
    },
  });

  const onSubmit = async (formData: FormType) => {
    try {
      setFormDetail(formData);
      form.reset();
      toast.success("บันทึกแผนการสอนสำเร็จ !");
    } catch (error) {
      console.log("error", error);
    }
  };

  const exportPDF = async () => {
    toast.info("กำลังอยู่ในช่วงทดลอง")
    // try {
    //   const response = await axios.get(Config.API_URL + "/api/exports", {
    // } catch (error) {
    //   console.error("Export PDF failed:", error);
    // }
  };

  const fetchData = async (unitName: string) => {
    try {
      const { data } = await axios.get(Config.API_URL + "/api/images", {
        params: { query: unitName },
      });
      setImage(data);
    } catch (error: unknown) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData("cat");
  }, []);

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-8 p-6 md:p-10">
        {/* Header  */}
        <div className="flex justify-between">
          <div className="flex flex-col justify-center gap-1 md:justify-start">
            <h1 className="text-xl font-semibold">Create A Lesson Plan</h1>
            <h2 className="text-md text-muted-foreground">สร้างแผนการสอน</h2>
          </div>
          <ThemeToggle />
        </div>

        {/* Form  */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <FormProvider {...form}>
              <Form {...form}>
                <form className="space-y-6">
                  <FormSelect />
                  <FormText fetchData={fetchData} />
                  <FormTextarea />
                  <div className="col-span-1 flex items-center justify-between gap-4 my-12">
                    {formDetail && !form.formState.isDirty && (
                      <FormDetail
                        formDetail={formDetail}
                        image={image}
                        exportPDF={exportPDF}
                      />
                    )}
                    <FormSubmit
                      onSubmit={onSubmit}
                      fetchData={fetchData}
                      image={image}
                    />
                  </div>
                </form>
              </Form>
            </FormProvider>
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        {image && (
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={image}
              alt="Lesson"
              className="object-cover"
              sizes="100vw"
              fill
            />
          </div>
        )}
      </div>
    </div>
  );
}
