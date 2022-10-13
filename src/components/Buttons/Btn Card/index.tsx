import { StyledButtons } from "../styles";
import type * as Stitches from "@stitches/react";
import { CaretRight, IconContext } from "phosphor-react";

interface ButtonsProps extends Stitches.VariantProps<typeof StyledButtons> {
  iconCard: JSX.Element | any;
  children?: any;
}

export const ButtonCard = (props: ButtonsProps) => {
  const ConfigIcon = IconContext.Provider;
  const Icon = () => props.iconCard;

  return (
    <StyledButtons styles={props.styles}>
      <div className="icon_card">
        <ConfigIcon
          value={{
            size: 38,
            weight: "regular",
            color: "hsla(240, 9%, 89%, 1)",
          }}
        >
          <Icon />
        </ConfigIcon>
      </div>
      <div className="content_button">
        <div className="text_button">
          <strong>Wallpapers do evento</strong>
          <p>
            Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
            máquina
          </p>
        </div>
        <CaretRight size={24} color={"hsla(196, 88%, 74%, 1)"} />
      </div>
      {props.children}
    </StyledButtons>
  );
};
