import { createContext, useState, ReactNode } from "react";
import { User } from "../models/User";

interface IAuthContext {
  user: User;
  setAuth: (user: User) => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const ProvideAuth = ({ children }: { children: ReactNode }) => {
  const getSession = (): User | any => {
    const localStorageUser = localStorage.getItem("session");
    if (!localStorageUser) {
      return null;
    }
    return JSON.parse(localStorageUser);
  };
  /**
   * setToken from localstorage
   */
  const setSessionInLocalStorage = (user: User) => {
    localStorage.setItem("session", JSON.stringify(user));
    return true;
  };
  const auth = getSession() as User;

  const [session, setSession] = useState(auth);
  const setAuth = (user: User) => {
    setSessionInLocalStorage(user);
    setSession(getSession() as User);
  };

  const user: User = session;
  return <AuthContext.Provider value={{ user, setAuth }}>{children}</AuthContext.Provider>;
};
