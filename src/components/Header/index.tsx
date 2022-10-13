import { Container } from "../../styles/global";
import { BtnMobile, Logo, ButtonHamburguer, StyledHeader } from "./styles";

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
        <BtnMobile>
          Aulas
          <ButtonHamburguer>
            <span></span>
          </ButtonHamburguer>
        </BtnMobile>
      </Container>
    </StyledHeader>
  );
};
