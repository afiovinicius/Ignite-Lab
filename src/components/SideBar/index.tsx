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
      <Cards
        isblocked={false}
        valueTab="aula01"
        styleTab="Conteúdo liberado"
        statsTab="Aula Prática"
        dhTab="Segunda-Feira • 10 De Outubro • 19h45"
        nameTab="Aula 01 | Estrutura visual do Design System"
      />
      <Cards
        isblocked={false}
        valueTab="aula02"
        styleTab="Conteúdo liberado"
        statsTab="Aula Prática"
        dhTab="Terça-Feira • 11 De Outubro • 19h00"
        nameTab="Aula 02 | Do Figma ao React, criando aplicação"
      />
      <Cards
        isblocked={false}
        valueTab="aula03"
        styleTab="Em breve"
        statsTab="Ao Vivo"
        dhTab="Quarta-Feira • 12 De Outubro • 19h00"
        nameTab="Aula 03 | Testando e automatizando"
      />
      <Cards
        isblocked={true}
        valueTab="aula04"
        styleTab="Em breve"
        statsTab="Ao Vivo"
        dhTab="Em Breve"
        nameTab="Aula 04 | Em Breve"
      />
    </StyledSideBar>
  );
};
