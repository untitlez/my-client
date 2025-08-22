"use client";

import Link from "next/link";
import { FileX, NotepadText } from "lucide-react";

import { routes } from "@/lib/routes";
import { ResponseFormType } from "@/validators/form.validator";

import { ContentModal } from "./content-modal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ContentDelete } from "./content-delete";

interface ContentTableProps {
  data: ResponseFormType;
}

export const ContentTable = ({ data }: ContentTableProps) => {
  return (
    <div className="overflow-hidden w-full rounded-lg border p-4 bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ลำดับ</TableHead>
            <TableHead>ระดับชั้น</TableHead>
            <TableHead>วิชาเรียน</TableHead>
            <TableHead>ชื่อหน่วย</TableHead>
            <TableHead>จุดประสงค์</TableHead>
            <TableHead>กิจกรรม</TableHead>
            <TableHead>วิธีประเมิน</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-background">
          {data.length > 0 ? (
            data.map((item, i) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{item.classLevel}</TableCell>
                <TableCell>{item.subject}</TableCell>
                <TableCell>{item.unitName}</TableCell>
                <TableCell>
                  {item.objectives ? (
                    <ContentModal title="จุดประสงค์" items={item.objectives} />
                  ) : (
                    "-"
                  )}
                </TableCell>
                <TableCell>
                  {item.activities ? (
                    <ContentModal title="กิจกรรม" items={item.activities} />
                  ) : (
                    "-"
                  )}
                </TableCell>
                <TableCell>
                  {item.assessment ? (
                    <ContentModal title="วิธีประเมิน" items={item.assessment} />
                  ) : (
                    "-"
                  )}
                </TableCell>
                <TableCell className="flex items-center gap-3">
                  <Tooltip>
                    <TooltipTrigger>
                      <Button
                        asChild
                        size="icon"
                        variant="default"
                        className="btn"
                      >
                        <Link href={routes.pages.office.objectives + item._id}>
                          <NotepadText className="size-4" />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="font-semibold">ดูข้อมูล</p>
                    </TooltipContent>
                  </Tooltip>
                  <ContentDelete id={item._id}/>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={8} className="justify-items-center py-6">
                <div className="flex items-center gap-2">
                  <FileX className="size-5" />
                  ไม่พบข้อมูล
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
