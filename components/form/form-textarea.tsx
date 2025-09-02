"use client";

import { useFormContext } from "react-hook-form";

import { fieldItems } from "@/lib/constant-form";

import { Textarea } from "../ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const inputItems = [
  fieldItems.objectives,
  fieldItems.activities,
  fieldItems.assessment,
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
              <FormLabel className="flex items-center">{item.label}</FormLabel>
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
