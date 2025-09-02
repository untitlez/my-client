"use client";

import { useEffect, useState } from "react";

export const useToken = () => {
  const [isToken, setIsToken] = useState("");

  useEffect(() => {
    const getToken = () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      setIsToken(token);
    };
    getToken();
  }, []);

  return isToken;
};
