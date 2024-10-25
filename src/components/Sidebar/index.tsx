// LIBS
import React from "react";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import { Power, User } from "@phosphor-icons/react";
import { IconButton } from "../Buttons/IconButton";

// STYLES
import * as Style from "./styles";
import { useAuth } from "@/context/Auth/UseAuthContext";
import { img } from "@/assets/img";
import { theme } from "@/styles/theme";

export interface ISidebarContent {
  icon: React.ReactNode;
  url: string;
  label: string;
}

export const Sidebar = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const iconColor = theme.color.primary;
  const iconSize = theme.size["4"];

  const sidebarContent: ISidebarContent[] = [
    {
      icon: <User color={iconColor} size={iconSize} />,
      url: "/users",
      label: "Usuáriosfdsdddddddddddddddddddddddddd",
    },
    {
      icon: <User color={iconColor} size={iconSize} />,
      url: "/teusers",
      label: "Usuáriosaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
  ];

  const handleSignOut = () => {
    signOut();
    navigate("/login");
  };

  return (
    <Style.SidebarBody>
      <Style.SidebarHeader>
        <Style.ImageContainer>
          <img src={img.react} alt="Logo do sistema" />
        </Style.ImageContainer>
      </Style.SidebarHeader>

      <Style.SidebarContent>
        {sidebarContent.map((element, i: number) => (
          <React.Fragment key={element.url}>
            <Style.SidebarButton
              $selected={window.location.pathname.startsWith(element.url)}
              to={element.url}
            >
              {element.icon}
              <p className="p3">{element.label}</p>
            </Style.SidebarButton>

            {i === sidebarContent.length - 1 && (
              <IconButton
                icon={Power}
                labelConfig={{ position: "right" }}
                label="Sair"
                opacity="0.4"
                iconConfig={{ color: iconColor, size: iconSize }}
                onClick={handleSignOut}
              />
            )}
          </React.Fragment>
        ))}
      </Style.SidebarContent>
    </Style.SidebarBody>
  );
};
