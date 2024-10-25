// LIBS
import { useState } from "react";

// TYPES
import { AuthContext } from "./AuthContext";
import { ISignIn, IUser } from "./types";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const signIn = async ({ token }: ISignIn) => {
    localStorage.setItem("authToken", token);
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
