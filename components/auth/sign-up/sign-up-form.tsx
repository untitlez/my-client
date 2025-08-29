"use client";

import { useFormContext } from "react-hook-form";

import { fieldItems } from "@/lib/constant-auth";

import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const SignUpForm = () => {
  const { control } = useFormContext();

  return (
    <>
      {fieldItems.signUp.map((item, i) => (
        <FormField
          key={i}
          control={control}
          name={item.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{item.label}</FormLabel>
              <FormControl>
                <Input
                  className="bg-input/30"
                  {...field}
                  type={item.type}
                  placeholder={item.placeholder}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </>
  );
};
