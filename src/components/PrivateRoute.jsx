import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AppContext from "../context/AppContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AppContext)
  return user ? children : <Navigate to="/"></Navigate>;
};

export default PrivateRoute;