"use server";

import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

import { Config } from "./config";
import { routes } from "./routes";

//
// Private Endpoint
//
export const fetchToken = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  return token;
};

export const fetchProfile = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

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
