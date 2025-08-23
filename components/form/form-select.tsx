"use client";

import { useFormContext } from "react-hook-form";

import { fieldItems } from "@/lib/constant-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const FormSelect = () => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={fieldItems.classLevel.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {fieldItems.classLevel.label}
            <span className="text-red-400">*</span>
          </FormLabel>

          <FormControl>
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={fieldItems.classLevel.placeholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel className="px-2 py-1 text-sm font-bold text-gray-500">
                    ประถมศึกษา
                  </SelectLabel>
                  {fieldItems.classLevel.options?.primaryEducation.map(
                    (opt, i) => (
                      <SelectItem key={i} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ),
                  )}
                  <SelectLabel className="px-2 py-1 text-sm font-bold text-gray-500">
                    มัธยมศึกษา
                  </SelectLabel>
                  {fieldItems.classLevel.options?.secondaryEducation.map(
                    (opt, i) => (
                      <SelectItem key={i} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ),
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
