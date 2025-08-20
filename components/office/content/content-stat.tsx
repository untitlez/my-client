"use client";

import Link from "next/link";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ContentStatProps {
  items: {
    title?: string;
    description?: string;
    value?: number | string;
    href?: string;
  }[];
}

export const ContentStat = ({ items }: ContentStatProps) => {
  return (
    <>
      {items.map((item, i) => (
        <div key={i} className="btn">
          <Link href={item.href ?? ""}>
            <Card className="@container/card">
              <CardHeader>
                <CardDescription className="">{item.title}</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl text-primary">
                  {item.value}
                </CardTitle>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                {item.description}
              </CardFooter>
            </Card>
          </Link>
        </div>
      ))}
    </>
  );
};
