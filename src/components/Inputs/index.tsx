import { StyledInputText } from "./styles";

interface InputTextProps {
  pch: string;
  types?: "text" | "email" | "password";
  notfocus?: "disable" | "error";
  wd?: boolean;
}

export const InputText = (props: InputTextProps) => {
  return (
    <StyledInputText
      type={props.types}
      placeholder={props.pch}
      status={props.notfocus}
      wd={props.wd}
    />
  );
};
