import React, { createContext, useEffect, useState } from "react";
import { clearLocalStorage } from "../lib/storageLib";

export const AuthContext = createContext<{
  token: string;
  user_id: number;
  setToken: (value: string) => void;
  setUserId: (value: number) => void;
  resetToken: () => void;
}>({
  token: "",
  user_id: 0,
  setToken: () => {},
  setUserId: () => {},
  resetToken: () => {},
});

const AuthProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState("");
  const [user_id, setUserId] = useState(0);

  useEffect(() => {
    if (!token && localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken") ?? "");
    }
  }, []);

  const resetToken = () => {
    setToken("");
    clearLocalStorage();
  };

  return (
    <AuthContext.Provider
      value={{ setToken, token, resetToken, setUserId, user_id }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
