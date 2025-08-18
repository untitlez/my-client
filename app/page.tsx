"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

import { Config } from "@/lib/config";
import { FormSchema, FormType } from "@/validators/form.validator";

import { ThemeToggle } from "@/components/theme-toggle";
import { FormSelect } from "@/components/form/form-select";
import { FormSearchSelect } from "@/components/form/form-search-select";
import { FormText } from "@/components/form/form-text";
import { FormTextarea } from "@/components/form/form-textarea";
import { FormSubmit } from "@/components/form/form-submit";
import { FormDetail } from "@/components/form/form-detail";
import { Form } from "@/components/ui/form";

export default function Home() {
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(false);
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
    toast.info("กำลังอยู่ในช่วงทดลอง");
    // try {
    //   const response = await axios.get(Config.API_URL + "/api/exports", {
    // } catch (error) {
    //   console.error("Export PDF failed:", error);
    // }
  };

  const fetchData = async (unitName: string) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(Config.API_URL + "/api/images", {
        params: { query: unitName },
      });
      setImage(data);
      setIsLoading(false);
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
          <div className="flex flex-col justify-center gap- md:justify-start">
            <h1 className="text-xl sm:text-2xl font-semibold">
              สร้างแผนการสอน
            </h1>
            <h2 className="text-md sm:text-lg text-muted-foreground">
              Create A Lesson Plan
            </h2>
          </div>
          <ThemeToggle />
        </div>

        {/* Form  */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <FormProvider {...form}>
              <Form {...form}>
                <form className="space-y-6">
                  {/* Input  */}
                  <FormSelect />
                  <FormSearchSelect />
                  <FormText fetchData={fetchData} />
                  <FormTextarea />

                  {/* Button  */}
                  <div className="flex items-center justify-between gap-4 my-12">
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
                      isLoading={isLoading}
                    />
                  </div>
                </form>
              </Form>
            </FormProvider>
          </div>
        </div>
      </div>

      {/* Images  */}
      <div className="bg-muted relative hidden lg:block">
        {image ? (
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={image}
              alt="Lesson"
              className="object-cover"
              sizes="100vw"
              fill
            />
          </div>
        ) : (
          <div className="h-full w-full overflow-hidden flex items-center justify-center gap-2">
            <Loader2 className="size-4 animate-spin" />
            Loading...
          </div>
        )}
      </div>
    </div>
  );
}
