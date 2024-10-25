import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const AuthMiddleware = () => {
  const navigate = useNavigate();

  const DEFAULT_REDIRECT = "/users";
  const DEFAULT_UNAUTHORIZED_REDIRECT = "/login";
  const PUBLIC_ROUTES = ["/login"];

  const authToken = localStorage.getItem("authToken");
  const currentRoute = window.location.pathname;

  const isPublicRoute = PUBLIC_ROUTES.includes(currentRoute);

  useEffect(() => {
    if (currentRoute === "/" && authToken) {
      navigate(DEFAULT_REDIRECT);
    }

    if (currentRoute === "/" && !authToken) {
      navigate(DEFAULT_UNAUTHORIZED_REDIRECT);
    }

    if (!authToken && !isPublicRoute) {
      navigate(DEFAULT_UNAUTHORIZED_REDIRECT);
    }

    if (authToken && isPublicRoute) {
      navigate(DEFAULT_REDIRECT);
    }
  }, []);

  return <Outlet />;
};
