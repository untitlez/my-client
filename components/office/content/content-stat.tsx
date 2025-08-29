"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { routes } from "@/lib/routes";
import { fetchProfile } from "@/lib/fetch";
import { SubjectType } from "@/validators/subject.validator";
import { UserType } from "@/validators/user.validator";

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
  const [profile, setProfile] = useState<UserType>();

  const match = (subject: string) => {
    return data.filter((item) => item === subject).length;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProfile();
      setProfile(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {subjects.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 active:scale-95 transform duration-300"
        >
          <Card className="h-full">
            <CardHeader className="relative flex-1">
              <Link
                className="absolute inset-0"
                href={`${routes.pages.office.subject}/subject-list?subject=${item.subject}`}
              />
              <CardTitle className="break-all">{item.subject}</CardTitle>
              <CardDescription className="break-all">
                แผนการสอนวิชา {item.subject} ทั้งหมด
              </CardDescription>
              <CardAction className="text-primary text-xl">
                {match(item.subject)}
              </CardAction>
            </CardHeader>
            {profile?.role === "ADMIN" ? (
              <CardFooter className="flex items-center justify-between gap-4">
                <SubjectDelete id={item._id} subject={item.subject} />
                <SubjectEdit id={item._id} subject={item.subject} />
              </CardFooter>
            ) : (
              ""
            )}
          </Card>
        </div>
      ))}
    </>
  );
};
