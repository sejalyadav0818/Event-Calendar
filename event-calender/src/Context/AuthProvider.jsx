import React from "react";
import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";
const AuthProvider = ({ children }) => {
  const [isLogin, setisLogin] = useState(true);

  const logIn = () => {
    setisLogin(true);
    Navigate("/home",{ replace: true });
  };

  const logOut = () => {
    setisLogin(false);
    Navigate("/",{ replace: true });
  };

  const value = {
    isLogin,
    logIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
 