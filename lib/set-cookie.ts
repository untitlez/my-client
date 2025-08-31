"use server";

import { cookies } from "next/headers";
import { Config } from "./config";

export const setCookie = async (token: string) => {
  const cookieStore = await cookies();
  cookieStore.set("token", token, {
    httpOnly: true,
    secure: Config.NODE_ENV === "production",
    sameSite: Config.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 60 * 60 * 1000,
    path: "/",
  });
};
