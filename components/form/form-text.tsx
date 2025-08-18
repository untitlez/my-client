"use client";

import { useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const inputItems = {
  name: "unitName",
  type: "text",
  label: "หน่วยการเรียนรู้",
  placeholder: "ชื่อหน่วยการเรียนรู้ ",
};

interface FormTextProps {
  fetchData: (values: string) => Promise<void>;
}

export const FormText = ({ fetchData }: FormTextProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={inputItems.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {inputItems.label}
            <span className="text-red-400">*</span>
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder={inputItems.placeholder}
              onBlur={() => {
                if (!field.value) return;
                fetchData(field.value);
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
