import { StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <a href="/home" className="logo">
        <img
          src="/public/assets/logo_ignitelab.svg"
          alt="Logo igniteLab"
          loading="lazy"
        />
      </a>
    </StyledHeader>
  );
};
