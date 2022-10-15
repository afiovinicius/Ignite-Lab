import { Container } from "../../styles/global";
import { MobileToggle, Logo, ButtonHamburguer, StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <Container Board={true}>
        <Logo
          to={"/"}
          sizes={{ "@initial": "large", "@media (max-width: 60rem)": "small" }}
        >
          <img
            src="/assets/logo_ignitelab.svg"
            alt="Logo igniteLab"
            loading="lazy"
          />
        </Logo>
        <MobileToggle>
          Aulas
          <ButtonHamburguer>
            <span></span>
          </ButtonHamburguer>
        </MobileToggle>
      </Container>
    </StyledHeader>
  );
};
