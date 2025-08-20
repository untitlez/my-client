export const routes = {
  pages: {
    home: "/",
    auth: "/auth",
    document: "/document",
    office: {
      home: "/office",
      classLevel: {
        home: "/office/class-level",
        primary: "/office/class-level/primary/",
        secondary: "/office/class-level/secondary/",
      },
      subject: "/office/subject/",
      unitName: "/office/unit-name/",
      objectives: "/office/objectives/",
      activities: "/office/activities/",
      assessment: "/office/assessment/",
    },
  },
  api: {
    images: "/api/images/",
    user: "/api/user/",
    lessonPlan: "/api/lesson-plan/",
  },
};
