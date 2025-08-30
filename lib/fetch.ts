"use server";

import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

import { Config } from "./config";
import { routes } from "./routes";

//
// Private Endpoint
//
export const fetchProfile = async () => {
  console.log("6.1");
  const cookieStore = await cookies();
  console.log("6.2", cookieStore);
  const token = cookieStore.get("token")?.value;
  console.log("token", token);
  
  if (!token) return;

  const decoded = jwtDecode<{ _id: string }>(token);
  const id = decoded._id;

  const res = await fetch(Config.API_URL + routes.api.user + id, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export const fetchLessonPlan = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const res = await fetch(Config.API_URL + routes.api.lessonPlan, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export const fetchLessonPlanId = async (id: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const res = await fetch(Config.API_URL + routes.api.lessonPlan + id, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

//
// Public Endpoint
//
export const fetchSubject = async () => {
  const res = await fetch(Config.API_URL + routes.api.subject, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export const fetchLatedLessonPlan = async () => {
  const res = await fetch(Config.API_URL + routes.api.guest, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};
