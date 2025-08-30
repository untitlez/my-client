export const routes = {
  pages: {
    home: "/",
    auth: {
      signin: "/auth/sign-in/",
      signup: "/auth/sign-up",
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
      signin: "/api/signin/",
      signup: "/api/signup/",
      signout: "/api/signout/",
    },
    user: "/api/user/",
    images: "/api/images/",
    lessonPlan: "/api/lesson-plan/",
    subject: "/api/subject/",
    guest: "/api/lesson-plan/guest",
  },
};
