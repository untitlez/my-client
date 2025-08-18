"use client";

import { useFormContext } from "react-hook-form";

import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const inputItems = [
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
  return (
    <>
      {inputItems.map((item, i) => (
        <FormField
          key={i}
          control={control}
          name={item.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{item.label}</FormLabel>
              <FormControl>
                <Textarea placeholder={item.placeholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </>
  );
};
