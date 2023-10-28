import React from "react";
import { Navigate, Route } from "react-router-dom";

export const ProtectedRoute = ({ children, ...rest }) => {
  const token = localStorage.getItem("token") || [];

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <Route {...rest}>{children}</Route>;
};
