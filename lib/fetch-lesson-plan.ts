import { Config } from "./config";
import { routes } from "./routes";

export const fetchLessonPlan = async () => {
  const res = await fetch(Config.API_URL + routes.api.lessonPlan);
  const data = await res.json();
  return data;
};

export const fetchLessonPlanId = async (id: string) => {
  const res = await fetch(Config.API_URL + routes.api.lessonPlan + id);
  const data = await res.json();
  return data;
};
