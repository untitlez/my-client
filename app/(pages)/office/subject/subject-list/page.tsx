import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { routes } from "@/lib/routes";
import { fetchLessonPlan } from "@/lib/fetch";
import { FormType } from "@/validators/form.validator";

import { ContentTable } from "@/components/office/content/content-table";
import { Button } from "@/components/ui/button";

interface SubjectListPageProps {
  searchParams: Promise<{ [key: string]: string }>;
}

export default async function SubjectListPage({
  searchParams,
}: SubjectListPageProps) {
  const query = await searchParams;

  const data = await fetchLessonPlan();
  const findSubjectList = data.filter(
    (item: FormType) => item.subject === query.subject,
  );

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-full">
        <Button asChild className="btn">
          <Link href={routes.pages.office.subject}>
            <ChevronLeft className="size-4" />
            กลับ
          </Link>
        </Button>
      </div>
      <ContentTable data={findSubjectList} />
    </div>
  );
}
