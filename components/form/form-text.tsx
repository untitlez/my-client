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

const inputItems = [
  {
    name: "subject",
    type: "text",
    label: "Subject",
    placeholder: "วิชาเรียน",
  },
  {
    name: "unitName",
    type: "text",
    label: "Unit Name",
    placeholder: "ชื่อหน่วยการเรียนรู้ ",
  },
];

interface FormTextProps {
  fetchData: (values: string) => Promise<void>;
}

export const FormText = ({ fetchData }: FormTextProps) => {
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
                {item.name === "unitName" ? (
                  <Input
                    {...field}
                    placeholder={item.placeholder}
                    onBlur={() => fetchData(field.value)}
                  />
                ) : (
                  <Input placeholder={item.placeholder} {...field} />
                )}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </>
  );
};
