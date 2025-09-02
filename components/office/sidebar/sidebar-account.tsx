"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit2, User2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

import { Config } from "@/lib/config";
import { routes } from "@/lib/routes";
import { useAuthHeader } from "@/hooks/use-auth-header";
import {
  UpdateUserSchema,
  UpdateUserType,
  UserType,
} from "@/validators/user.validator";

import { SidebarMenuButton } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const inputItems = [
  { name: "fullName", label: "ชื่อ - นามสกุล", type: "text" },
  {
    name: "role",
    label: "บทบาทหน้าที่",
    type: "select",
    options: ["ADMIN", "MEMBER"],
  },
];

interface SidebarAccountProps {
  profile: UserType;
}

export const SidebarAccount = ({ profile }: SidebarAccountProps) => {
  const admin = profile.role === "ADMIN";
  const router = useRouter();
  const header = useAuthHeader();

  const form = useForm<UpdateUserType>({
    resolver: zodResolver(UpdateUserSchema),
    defaultValues: {
      fullName: profile.fullName ?? "-",
      role: profile.role ?? "",
    },
  });

  const onEdit = async (newData: UpdateUserType) => {
    try {
      await axios.put(
        Config.API_URL + routes.api.user + profile._id,
        newData,
        header,
      );
      router.refresh();
      toast.success("แก้ไขข้อมูลสำเร็จ !");
    } catch {
      toast.error("ไม่สามารถบันทึกได้ กรุณาลองใหม่");
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <SidebarMenuButton size="lg" className="cursor-pointer">
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <User2 className="size-5 text-foreground dark:text-secondary" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate capitalize">
              คุณ {profile.fullName ? profile.fullName : profile.username}
            </span>
            <span className="truncate text-muted-foreground capitalize">
              {profile.role}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs hover:text-primary">
            <Edit2 className="size-3" />
            แก้ไข
          </div>
        </SidebarMenuButton>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>ช้อมูลบัญชี :</SheetTitle>
          <SheetDescription>
            แก้ไขข้อมูลบัญชีของคุณ แล้วกดบันทึกเมื่อเสร็จสิ้น
          </SheetDescription>
        </SheetHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onEdit)}
            className="flex flex-1 flex-col gap-6 m-4"
          >
            {inputItems.map((item) => (
              <FormField
                key={item.name}
                control={form.control}
                name={item.name as keyof UpdateUserType}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">{item.label}</FormLabel>

                    {item.type === "text" ? (
                      <FormControl>
                        <Input
                          autoFocus={false}
                          {...field}
                          placeholder={field.value}
                        />
                      </FormControl>
                    ) : (
                      <Select
                        disabled={!admin}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full cursor-pointer">
                            <SelectValue placeholder={field.value} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {item.options?.map((option, i) => (
                            <SelectItem key={i} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}

                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <div className="mt-auto grid gap-3">
              <SheetClose asChild>
                <Button
                  disabled={!form.formState.isDirty}
                  type="submit"
                  className="cursor-pointer active:scale-95"
                >
                  บันทึกการแก้ไข
                </Button>
              </SheetClose>

              <SheetClose asChild>
                <Button variant="outline" className="cursor-pointer">
                  ปิด
                </Button>
              </SheetClose>
            </div>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};
