import { StyledCardTab } from "./styles";

interface CardsProps {
  valueTab: string;
  nameTab: string;
}

export const Cards = (props: CardsProps) => {
  return <StyledCardTab value={props.valueTab}>{props.nameTab}</StyledCardTab>;
};
