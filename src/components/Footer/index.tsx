import { Container } from "../../styles/global";
import { StyledFooter, Copy, LinkPolitic } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container Board={true}>
        <Copy className="copy">
          <img
            src="/assets/logo_rocketseat.svg"
            alt="Logo Rocketseat"
            loading="lazy"
          />
          <p>Rocketseat - Todos os direitos reservados</p>
        </Copy>
        <LinkPolitic to={"/"}>Políticas de privacidade</LinkPolitic>
      </Container>
    </StyledFooter>
  );
};
