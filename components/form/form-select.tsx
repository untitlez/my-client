"use client";

import { useFormContext } from "react-hook-form";

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

const inputItems = {
  name: "classLevel",
  type: "select",
  label: "ระดับชั้น",
  placeholder: "เลือกระดับชั้น (ป.1 - ม.6)",
  options: {
    primaryEducation: [
      { value: "primaryEd_1", label: "ป.1" },
      { value: "primaryEd_2", label: "ป.2" },
      { value: "primaryEd_3", label: "ป.3" },
      { value: "primaryEd_4", label: "ป.4" },
      { value: "primaryEd_5", label: "ป.5" },
      { value: "primaryEd_6", label: "ป.6" },
    ],

    secondaryEducation: [
      { value: "secondaryEd_1", label: "ม.1" },
      { value: "secondaryEd_2", label: "ม.2" },
      { value: "secondaryEd_3", label: "ม.3" },
      { value: "secondaryEd_4", label: "ม.4" },
      { value: "secondaryEd_5", label: "ม.5" },
      { value: "secondaryEd_6", label: "ม.6" },
    ],
  },
};

export const FormSelect = () => {
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
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={inputItems.placeholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel className="px-2 py-1 text-sm font-bold text-gray-500">
                    ประถมศึกษา
                  </SelectLabel>
                  {inputItems.options?.primaryEducation.map((opt, i) => (
                    <SelectItem key={i} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                  <SelectLabel className="px-2 py-1 text-sm font-bold text-gray-500">
                    มัธยมศึกษา
                  </SelectLabel>
                  {inputItems.options?.secondaryEducation.map((opt, i) => (
                    <SelectItem key={i} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
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
