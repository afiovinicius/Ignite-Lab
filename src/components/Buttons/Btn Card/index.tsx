import { StyledButtons } from "../styles";
import type * as Stitches from "@stitches/react";
import { CaretRight, IconContext } from "phosphor-react";

export interface ButtonCardProps
  extends Stitches.VariantProps<typeof StyledButtons> {
  iconCard: JSX.Element | any;
  children?: any;
  textStrong: string;
  textParagraph: string;
  linkHref?: string;
  blank?: string;
}

export const ButtonCard = (props: ButtonCardProps) => {
  const ConfigIcon = IconContext.Provider;
  const Icon = () => props.iconCard;

  return (
    <StyledButtons
      styles={props.styles}
      href={props.linkHref}
      target={props.blank}
    >
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
          <strong>{props.textStrong}</strong>
          <p>{props.textParagraph}</p>
        </div>
        <CaretRight size={24} color={"hsla(196, 88%, 74%, 1)"} />
      </div>
      {props.children}
    </StyledButtons>
  );
};
