"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { fieldItems } from "@/lib/constant-form";
import { SubjectType } from "@/validators/subject.validator";

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

interface FormSearchSelectProps {
  subjects: SubjectType[];
}

export function FormSearchSelect({ subjects }: FormSearchSelectProps) {
  const { control, setValue } = useFormContext();
  const [open, setOpen] = useState(false);

  return (
    <FormField
      control={control}
      name={fieldItems.subject.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {fieldItems.subject.label}
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
                    !field.value && "text-muted-foreground",
                  )}
                >
                  {field.value
                    ? subjects.find(
                        (subject) => subject.subject === field.value,
                      )?.subject
                    : "เลือกวิชาเรียน"}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-full sm:w-72 p-0">
              <Command>
                <CommandInput
                  placeholder={fieldItems.subject.placeholder}
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>ไม่พบวิชาเรียน</CommandEmpty>
                  <CommandGroup>
                    {subjects.map((subject, i) => (
                      <CommandItem
                        className="capitalize"
                        key={i}
                        value={subject.subject}
                        onSelect={() => {
                          setValue("subject", subject.subject);
                        }}
                      >
                        {subject.subject}
                        <Check
                          className={cn(
                            "ml-auto",
                            subject.subject === field.value
                              ? "opacity-100"
                              : "opacity-0",
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
