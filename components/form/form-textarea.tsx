"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Plus } from "lucide-react";

import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const inputItems2 = [
  {
    name: "objectives",
    type: "textarea",
    label: "จุดประสงค์",
    placeholder: "จุดประสงค์การเรียนรู้",
  },
  {
    name: "activities",
    type: "textarea",
    label: "กิจกรรม",
    placeholder: "กิจกรรมการเรียนรู้",
  },
  {
    name: "assessment",
    type: "textarea",
    label: "วัดผล และประเมิน",
    placeholder: "วิธีการวัดและประเมินผล",
  },
];

export const FormTextarea = () => {
  const { control } = useFormContext();
  const [openInput, setOpenInput] = useState(false);

  return (
    <>
      {!openInput ? (
        <Button
          type="button"
          variant="outline"
          className="w-full cursor-pointer"
          onClick={() => setOpenInput(true)}
        >
          <Plus className="size-4" />
          เพิ่มจุดประสงค์ กิจกรรม และวัดผลการประเมิน
        </Button>
      ) : (
        inputItems2.map((item, i) => (
          <FormField
            key={i}
            control={control}
            name={item.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center">
                  {item.label}
                </FormLabel>
                <FormControl>
                  <Textarea placeholder={item.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))
      )}
    </>
  );
};
