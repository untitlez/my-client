"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Plus } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

import { Config } from "@/lib/config";
import { routes } from "@/lib/routes";
import { SubjectType } from "@/validators/subject.validator";
import { FormSchema, FormType } from "@/validators/form.validator";
import { UserType } from "@/validators/user.validator";

import { FormTools } from "@/components/form/form-tools";
import { FormSelect } from "@/components/form/form-select";
import { FormSearchSelect } from "@/components/form/form-search-select";
import { FormText } from "@/components/form/form-text";
import { FormTextarea } from "@/components/form/form-textarea";
import { FormSubmit } from "@/components/form/form-submit";
import { FormDetail } from "@/components/form/form-detail";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

interface AppFormProps {
  initImages: string;
  data: FormType;
  subjects: SubjectType[];
  profile: UserType;
}

export default function AppForm({
  initImages,
  data,
  subjects,
  profile,
}: AppFormProps) {
  const router = useRouter();
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isShowFormDetail, setIsShowFormDetail] = useState(false);
  const [isShowInput, setIsShowInput] = useState(false);

  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      classLevel: "",
      subject: "",
      unitName: "",
      objectives: "",
      activities: "",
      assessment: "",
      image: image,
    },
  });

  const onSubmit = async (formData: FormType) => {
    try {
      await axios.post(Config.API_URL + routes.api.lessonPlan, formData);
      router.refresh();
      setIsShowFormDetail(true);
      form.reset();
      toast.success("บันทึกแผนการสอนสำเร็จ !");
    } catch {
      toast.error("ไม่สามารถบันทึกได้ กรุณาลองใหม่");
    }
  };

  const fetchImages = async (unitName: string) => {
    setIsLoading(true);
    const { data } = await axios.get(Config.API_URL + routes.api.images, {
      params: { query: unitName },
    });
    setImage(data);
    form.setValue("image", data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchImages(initImages);
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
          <FormTools profile={profile} />
        </div>

        {/* Form  */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <FormProvider {...form}>
              <Form {...form}>
                <form className="space-y-6">
                  {/* Input  */}
                  <FormSelect />
                  <FormSearchSelect subjects={subjects} />
                  <FormText fetchImages={fetchImages} />

                  {isShowInput ? (
                    <FormTextarea />
                  ) : (
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full cursor-pointer"
                      onClick={() => setIsShowInput(true)}
                    >
                      <Plus className="size-4" />
                      เพิ่มจุดประสงค์ กิจกรรม และวัดผลการประเมิน
                    </Button>
                  )}

                  {/* Button  */}
                  <div className="flex items-center justify-between gap-4 my-12">
                    {isShowFormDetail && (
                      <FormDetail data={data} image={image} />
                    )}
                    <FormSubmit
                      onSubmit={onSubmit}
                      fetchImages={fetchImages}
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
