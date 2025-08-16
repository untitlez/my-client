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
    label: "Objectives",
    placeholder: "จุดประสงค์",
  },
  {
    name: "activities",
    type: "textarea",
    label: "Activities",
    placeholder: "กิจกรรม",
  },
  {
    name: "assessment",
    type: "textarea",
    label: "Assessment",
    placeholder: "วิธีการประเมิน",
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
