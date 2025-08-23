"use client";

import { useFormContext } from "react-hook-form";

import { fieldItems } from "@/lib/constant-form";

import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface FormTextProps {
  fetchImages: (values: string) => Promise<void>;
}

export const FormText = ({ fetchImages }: FormTextProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={fieldItems.unitName.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {fieldItems.unitName.label}
            <span className="text-red-400">*</span>
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder={fieldItems.unitName.placeholder}
              onBlur={() => {
                if (!field.value) return;
                fetchImages(field.value);
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
