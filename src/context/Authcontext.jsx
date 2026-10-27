
import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  let loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  let registered = JSON.parse(localStorage.getItem("users"));
  const [registeredUser, setRegisteredUser] = useState(registered || []);
  const [loggedInUser, setLoggedInUser] = useState(loggedIn);

  return (
    <Auth.Provider
      value={{
        registeredUser,
        setRegisteredUser,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
