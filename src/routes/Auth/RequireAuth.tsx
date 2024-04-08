import React, { FC, PropsWithChildren, useEffect } from "react";
import { useAuth } from "../../contexts";
import { useNavigate } from "react-router-dom";

type RequireAuthProps = {};

const RequireAuth: FC<PropsWithChildren<RequireAuthProps>> = ({ children }) => {
  const { loggedUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedUser) navigate(-1);
  }, [loggedUser, navigate]);
  return <>{children}</>;
};

export default RequireAuth;
