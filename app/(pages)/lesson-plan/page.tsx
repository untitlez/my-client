// import { fetchLatedLessonPlan, fetchProfile, fetchSubject } from "@/lib/fetch";

// import AppForm from "@/components/form/app-form";

// export default async function LessonPlanPage() {
//   const initImages = "education";
//   const data = await fetchLatedLessonPlan();
//   const subjects = await fetchSubject();
//   const profile = await fetchProfile();

//   return (
//     <AppForm
//       initImages={initImages}
//       data={data}
//       subjects={subjects}
//       profile={profile}
//     />
//   );
// }
"use client";

import AppForm from "@/components/form/app-form";
import { Config } from "@/lib/config";
import { routes } from "@/lib/routes";
import { UserType } from "@/validators/user.validator";
import axios from "axios";
import { useEffect, useState } from "react";

export default function LessonPlanPage() {
  const [profile, setProfile] = useState<UserType>();

  console.log("cookie", profile)
  
  const fetchData = async () => {
    try {
      const { data } = await axios.get(Config.API_URL + routes.api.user + "68aa1f82d59121bce33e268c", {
        withCredentials: true,
      });
      setProfile(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <AppForm profile={profile} />;
}
