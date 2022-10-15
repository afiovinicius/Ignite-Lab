import { StyledButtons } from "./styles";
import type * as Stitches from "@stitches/react";
import { IconContext } from "phosphor-react";

export interface ButtonsProps
  extends Stitches.VariantProps<typeof StyledButtons> {
  icon?: JSX.Element | any;
  textButton?: string;
  linkHref?: string;
  blank?: string;
}

export const Button = (props: ButtonsProps) => {
  const ConfigIcon = IconContext.Provider;
  const Icon = () => props.icon;

  return (
    <StyledButtons
      styles={props.styles}
      wd={props.wd}
      href={props.linkHref}
      target={props.blank}
    >
      <ConfigIcon value={{ size: 24, weight: "regular" }}>
        <Icon />
      </ConfigIcon>
      {props.textButton}
    </StyledButtons>
  );
};
