import { Routes, Route, useLocation } from "react-router-dom";

// COMPONENTS
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "@/context/Auth/AuthProvider";

import { Login } from "@/screens/Auth/Login";
import { Users } from "@/screens/Users";
import { NotFound } from "@/screens/NotFound";
import { AuthLayout } from "./layouts";
import { AuthMiddleware } from "./middleware/authMiddleware";

function AppRoutes() {
  const location = useLocation();
  return (
    <AuthProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<NotFound />} />
          <Route element={<AuthMiddleware />}>
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<AuthLayout />}>
              <Route index path="users" element={<Users />} />
            </Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </AuthProvider>
  );
}

export default AppRoutes;
