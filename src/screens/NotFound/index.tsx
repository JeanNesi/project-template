import { useNavigate } from "react-router-dom";
import { Button, Heading, ImageComponent } from "@/components";
import * as Style from "./styles";
import { img } from "@/assets/img";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <Style.Container>
      <Style.ImgWrapper>
        <ImageComponent src={img.notFound} width="100%" height="100%" />
      </Style.ImgWrapper>

      <Style.TextWrapper>
        <Heading as="h5">Página não encontrada</Heading>
        <p className="p6">
          Desculpe, a página que você está procurando não existe.
        </p>
      </Style.TextWrapper>

      <Button type="button" size="extraSmall" onClick={handleReturn}>
        Retornar
      </Button>
    </Style.Container>
  );
};
