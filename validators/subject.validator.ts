import { z } from "zod";

export const SubjectSchema = z.object({
  _id: z.string().optional(),
  subject: z
    .string()
    .trim()
    .min(1, "กรุณากรอกวิชาเรียน")
    .max(100, "ชื่อวิชายาวเกินไป (สูงสุด 100 ตัวอักษร)"),
});

export type SubjectType = z.infer<typeof SubjectSchema>;
