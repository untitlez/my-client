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
  objectives: z.string().trim().optional(),
  activities: z.string().trim().optional(),
  assessment: z.string().trim().optional(),
  image: z.string().trim().optional(),
});

export const ResponseFormSchema = z.array(
  FormSchema.partial().extend({
    _id: z.string,
  })
);

//
// Type
//
export type FormType = z.infer<typeof FormSchema>;
export type ResponseFormType = z.infer<typeof ResponseFormSchema>;
