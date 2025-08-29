import { z } from "zod";

export const UserSchema = z.object({
  _id: z.string().optional(),
  username: z
    .string()
    .min(3, { message: "ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร" })
    .max(30, { message: "ชื่อผู้ใช้ต้องไม่เกิน 30 ตัวอักษร" })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "ชื่อผู้ใช้ต้องเป็นตัวอักษร หรือตัวเลขเท่านั้น",
    }),
  password: z
    .string()
    .min(6, { message: "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร" })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "รหัสผ่านต้องเป็นตัวอักษร หรือตัวเลขเท่านั้น",
    }),
  role: z.string().optional(),
  fullName: z.string().optional(),
});

export const UpdateUserSchema = UserSchema.partial();
export const CreateUserSchema = UserSchema.extend({
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "รหัสผ่านไม่ตรงกัน",
  path: ["confirmPassword"],
});

//
// Type
//
export type UserType = z.infer<typeof UserSchema>;
export type UpdateUserType = z.infer<typeof UpdateUserSchema>;
export type CreateUserType = z.infer<typeof CreateUserSchema>;
