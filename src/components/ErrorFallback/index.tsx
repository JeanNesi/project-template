import { img } from "@/assets/img";
import { ImageComponent } from "../ImageComponent";
import * as Style from "./styles";
import { Heading } from "../Text";

export const ErrorFallback = () => (
  <Style.Background>
    <ImageComponent
      src={img.react}
      alt="Logo do sistema"
      height="120px"
      width="130px"
    />
    <Style.Content>
      <Heading>
        Oops! Encontramos um problema e nossa equipe foi notificada.
      </Heading>
    </Style.Content>
    <button
      type="button"
      onClick={() => {
        window.location.pathname = "/users";
      }}
    >
      Tentar novamente
    </button>
  </Style.Background>
);
