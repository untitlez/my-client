"use client";

import Link from "next/link";

import { routes } from "@/lib/routes";
import { SubjectType } from "@/validators/subject.validator";

import { SubjectEdit } from "./subject/subject-edit";
import { SubjectDelete } from "./subject/subject-delete";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ContentStatProps {
  data: string[];
  subjects: SubjectType[];
}

export const ContentStat = ({ data, subjects }: ContentStatProps) => {
  const match = (subject: string) => {
    return data.filter((item) => item === subject).length;
  };

  return (
    <>
      {subjects.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 active:scale-95 transform duration-300"
        >
          <Link
            href={`${routes.pages.office.subject}/subject-list?subject=${item.subject}`}
          >
            <Card className="h-full">
              <CardHeader className="flex-1">
                <CardTitle>{item.subject}</CardTitle>
                <CardDescription>
                  แผนการสอนวิชา {item.subject} ทั้งหมด
                </CardDescription>
                <CardAction className="text-primary text-xl">
                  {match(item.subject)}
                </CardAction>
              </CardHeader>
              <CardFooter className="flex items-center justify-between gap-4">
                <SubjectDelete id={item._id} subject={item.subject} />
                <SubjectEdit id={item._id} subject={item.subject} />
              </CardFooter>
            </Card>
          </Link>
        </div>
      ))}
    </>
  );
};
