"use client";

import { useFormContext } from "react-hook-form";

import { fieldItems } from "@/lib/constant-auth";

import { SignInPopup } from "@/components/auth/sign-in/signin-popup";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const SignInForm = () => {
  const { control } = useFormContext();

  return (
    <>
      {fieldItems.signIn.map((item, i) => (
        <FormField
          key={i}
          control={control}
          name={item.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {item.label}
                {item.name === "password" && (
                  <div className="ml-auto">
                    <SignInPopup />
                  </div>
                )}
              </FormLabel>
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
