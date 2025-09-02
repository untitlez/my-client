"use client";

import { useEffect, useState } from "react";

export const useAuthHeader = () => {
  const [token, setToken] = useState({});

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) setToken(getToken);
  }, []);

  return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
};
