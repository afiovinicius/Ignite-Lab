import { StyledCardTab } from "./styles";

import type * as Stitches from "@stitches/react";

export interface CardsProps
  extends Stitches.VariantProps<typeof StyledCardTab> {
  valueTab: string;
  dhTab: string;
  nameTab: string;
  styleTab: string;
  statsTab: string;
}

export const Cards = (props: CardsProps) => {
  return (
    <StyledCardTab value={props.valueTab} isblocked={props.isblocked}>
      <p>{props.dhTab}</p>
      <div className="infor_card">
        <div className="text_infor">
          <div className="name_stats">
            <strong>{props.statsTab}</strong>
          </div>
          <span className="card_stats">{props.statsTab}</span>
        </div>
        <h4>{props.nameTab}</h4>
      </div>
    </StyledCardTab>
  );
};
