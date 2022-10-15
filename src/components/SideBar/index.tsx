import { StyledSideBar } from "./styles";

import type * as Stitches from "@stitches/react";
import { Cards } from "../Cards";
type SideBarVariants = Stitches.VariantProps<typeof StyledSideBar>;

export const SideBar = (props: SideBarVariants) => {
  return (
    <StyledSideBar showbar={props.showbar}>
      <div className="title">
        <h2>Cronograma das aulas</h2>
      </div>
      <Cards nameTab="Aula 1" valueTab="aula01" />
      <Cards nameTab="Aula 2" valueTab="aula02" />
      <Cards nameTab="Aula 3" valueTab="aula03" />
    </StyledSideBar>
  );
};
