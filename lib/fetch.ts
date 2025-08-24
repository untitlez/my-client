import { Config } from "./config";
import { routes } from "./routes";

export const fetchLessonPlan = async () => {
  const res = await fetch(Config.API_URL + routes.api.lessonPlan, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export const fetchLessonPlanId = async (id: string) => {
  const res = await fetch(Config.API_URL + routes.api.lessonPlan + id, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export const fetchLessonPlanQuery = async (query: string) => {
  const res = await fetch(
    Config.API_URL + routes.api.lessonPlan + "?search=" + query,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};

export const fetchSubject = async () => {
  const res = await fetch(Config.API_URL + routes.api.subject, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export const fetchRole = async () => {
  const res = await fetch(Config.API_URL + routes.api.auth.admin, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};
