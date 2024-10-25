// UI
import { X } from "@phosphor-icons/react";
import * as Style from "./styles";

// TYPES
import { IModal } from "./types";
import { IconButton } from "../Buttons/IconButton";
import { ImageComponent } from "../ImageComponent";
import { Heading } from "../Text";

export const Modal = ({
  children,
  setModal,
  title,
  bodyWidth,
  titleIcon,
}: IModal) => (
  <Style.Background
    id="background"
    onMouseDown={(evt: any) => {
      if (evt.target.id === "background") setModal(false);
    }}
  >
    <Style.Body $bodyWidth={bodyWidth}>
      <Style.Header>
        <Style.HeaderLeftSide>
          {titleIcon && (
            <ImageComponent
              src={titleIcon}
              alt="Icone do titulo do modal"
              size="24px"
            />
          )}
          <Heading>{title}</Heading>
        </Style.HeaderLeftSide>
        <IconButton
          icon={X}
          iconConfig={{
            size: 24,
          }}
          onClick={() => {
            setModal(false);
          }}
        />
      </Style.Header>
      {children}
    </Style.Body>
  </Style.Background>
);
