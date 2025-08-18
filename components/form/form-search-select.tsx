"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const inputItems = {
  name: "subject",
  type: "text",
  label: "วิชา",
  placeholder: "ค้นหา",
  subjects: [
    { value: "ภาษาไทย" },
    { value: "คณิตศาสตร์" },
    { value: "วิทยาศาสตร์และเทคโนโลยี" },
    { value: "สังคมศึกษา ศาสนา และวัฒนธรรม" },
    { value: "สุขศึกษาและพลศึกษา" },
    { value: "ศิลปะ" },
    { value: "การงานอาชีพและเทคโนโลยี" },
    { value: "ภาษาต่างประเทศ" },
  ],
};

export function FormSearchSelect() {
  const { control, setValue } = useFormContext();
  const [open, setOpen] = useState(false);

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

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className={cn(
                    "w-full justify-between capitalize",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value
                    ? inputItems.subjects.find(
                        (subject) => subject.value === field.value
                      )?.value
                    : "เลือกวิชาเรียน"}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-full sm:w-72 p-0">
              <Command>
                <CommandInput
                  placeholder={inputItems.placeholder}
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>ไม่พบวิชาเรียน</CommandEmpty>
                  <CommandGroup>
                    {inputItems.subjects.map((subject) => (
                      <CommandItem
                        className="capitalize"
                        key={subject.value}
                        value={subject.value}
                        onSelect={() => {
                          setValue("subject", subject.value);
                        }}
                      >
                        {subject.value}
                        <Check
                          className={cn(
                            "ml-auto",
                            subject.value === field.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
