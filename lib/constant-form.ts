export const fieldItems = {
  classLevel: {
    name: "classLevel",
    type: "select",
    label: "ระดับชั้น",
    placeholder: "เลือกระดับชั้น (ป.1 - ม.6)",
    options: {
      primaryEducation: [
        { value: "ประถมศึกษา 1", label: "ป.1" },
        { value: "ประถมศึกษา 2", label: "ป.2" },
        { value: "ประถมศึกษา 3", label: "ป.3" },
        { value: "ประถมศึกษา 4", label: "ป.4" },
        { value: "ประถมศึกษา 5", label: "ป.5" },
        { value: "ประถมศึกษา 6", label: "ป.6" },
      ],
      secondaryEducation: [
        { value: "มัธยมศึกษา 1", label: "ม.1" },
        { value: "มัธยมศึกษา 2", label: "ม.2" },
        { value: "มัธยมศึกษา 3", label: "ม.3" },
        { value: "มัธยมศึกษา 4", label: "ม.4" },
        { value: "มัธยมศึกษา 5", label: "ม.5" },
        { value: "มัธยมศึกษา 6", label: "ม.6" },
      ],
    },
  },
  subject: {
    name: "subject",
    type: "text",
    label: "วิชา",
    placeholder: "ค้นหา",
  },
  unitName: {
    name: "unitName",
    type: "text",
    label: "หน่วยการเรียนรู้",
    placeholder: "ชื่อหน่วยการเรียนรู้ ",
  },
  objectives: {
    name: "objectives",
    type: "textarea",
    label: "จุดประสงค์",
    placeholder: "จุดประสงค์การเรียนรู้",
  },
  activities: {
    name: "activities",
    type: "textarea",
    label: "กิจกรรม",
    placeholder: "กิจกรรมการเรียนรู้",
  },
  assessment: {
    name: "assessment",
    type: "textarea",
    label: "วัดผล และประเมิน",
    placeholder: "วิธีการวัดและประเมินผล",
  },
};
