import { Navigate, useLocation } from "react-router-dom";
import React from "react";
export const Authorized = ({ children }) => {
  const location = useLocation();

  if (localStorage.getItem("app_user")) {
    return children;
  } else {
    return (
      <Navigate to={`/login/${location.search}`} replace state={{ location }} />
    );
  }
};
