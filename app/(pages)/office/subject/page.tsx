import { routes } from "@/lib/routes";
import { fetchLessonPlan } from "@/lib/fetch-lesson-plan";

import { ContentStat } from "@/components/office/content/content-stat";

export default async function SubjectPage() {
  const data = await fetchLessonPlan();

  const items = [
    {
      title: "ภาษาไทย",
      value: 1,
      description: "พัฒนาทักษะการอ่าน การเขียน การฟัง และการพูดภาษาไทย",
    },
    {
      title: "คณิตศาสตร์",
      value: 1,
      description: "ฝึกคิดเชิงตรรกะ การแก้ปัญหา และการคำนวณ",
    },
    {
      title: "วิทยาศาสตร์และเทคโนโลยี",
      value: 1,
      description: "เรียนรู้หลักการวิทยาศาสตร์ และนำเทคโนโลยีมาประยุกต์ใช้",
    },
    {
      title: "สังคมศึกษา ศาสนา และวัฒนธรรม",
      value: 1,
      description: "เข้าใจประวัติศาสตร์ สังคม วัฒนธรรม และศาสนา",
    },
    {
      title: "สุขศึกษาและพลศึกษา",
      value: 1,
      description: "ส่งเสริมสุขภาพร่างกาย จิตใจ และการออกกำลังกาย",
    },
    {
      title: "ศิลปะ",
      value: 1,
      description: "พัฒนาความคิดสร้างสรรค์และทักษะด้านศิลปะ",
    },
    {
      title: "การงานอาชีพและเทคโนโลยี",
      value: 1,
      description: "เรียนรู้ทักษะอาชีพและการใช้เทคโนโลยีในชีวิตจริง",
    },
    {
      title: "ภาษาต่างประเทศ",
      value: 1,
      description: "ฝึกทักษะการฟัง พูด อ่าน เขียนภาษาต่างประเทศ",
    },
  ];

  return (
    <div className="grid auto-rows-min gap-8 md:grid-cols-4">
      <ContentStat items={items} />
    </div>
  );
}
