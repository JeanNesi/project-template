import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components";
import * as Style from "./styles";

export const AuthLayout = () => (
  <Style.Container>
    <Sidebar />

    <Style.AppContent>
      <Outlet />
    </Style.AppContent>
  </Style.Container>
);
