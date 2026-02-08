import React, { useContext } from "react";
import { valueConText } from "../../RootLayout/RootLayout";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
//   console.log(children);
  const { user, loading } = useContext(valueConText);
  const location=useLocation()
  
  if (loading) {
    return <div>loading...................</div>;
  }
  if (!user || !user?.email) {
    return <Navigate state={{from:location.pathname}} to="/signin"></Navigate>;
  }
  return (
    <div>
      I am private route
      {children}
    </div>
  );
};

export default PrivateRoute;
