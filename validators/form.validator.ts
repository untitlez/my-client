import { z } from "zod";

export const FormSchema = z.object({
  classLevel: z.string().trim().min(1, { message: "กรุณาเลือกชั้นเรียน" }),
  subject: z
    .string()
    .trim()
    .min(1, "กรุณากรอกวิชาเรียน")
    .max(100, "ชื่อวิชายาวเกินไป (สูงสุด 100 ตัวอักษร)"),
  unitName: z
    .string()
    .trim()
    .min(1, "กรุณากรอกชื่อหน่วยการเรียนรู้")
    .max(100, "ชื่อหน่วยยาวเกินไป (สูงสุด 100 ตัวอักษร)"),
  objectives: z
    .string()
    .trim()
    .max(2000, "วัตถุประสงค์ยาวเกินไป (สูงสุด 2000 ตัวอักษร)")
    .optional(),
  activities: z
    .string()
    .trim()
    .max(4000, "กิจกรรมยาวเกินไป (สูงสุด 4000 ตัวอักษร)")
    .optional(),
  assessment: z
    .string()
    .trim()
    .max(2000, "การประเมินยาวเกินไป (สูงสุด 2000 ตัวอักษร)")
    .optional(),
});

export type FormType = z.infer<typeof FormSchema>;
