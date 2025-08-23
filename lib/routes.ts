export const routes = {
  pages: {
    home: "/",
    auth: {
      login: "/auth/login/",
      signUp: "/auth/sign-up",
    },
    document: "/document/",
    lessonPlan: "/lesson-plan/",
    office: {
      home: "/office/",
      classLevel: {
        home: "/office/class-level/",
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
    auth: {
      admin: "/api/admin/",
      member: "/api/member/",
    },
    login: "/api/user/login/",
    user: "/api/user/",
    images: "/api/images/",
    lessonPlan: "/api/lesson-plan/",
    subject: "/api/subject/",
  },
};
