import * as Icon from "phosphor-react";

import { Container } from "../../styles/global";
import { Button } from "../../components/Buttons";
import { ButtonCard } from "../../components/Buttons/Btn Card";

import {
  ContentRoom,
  InforTeacher,
  MaterialClass,
  Player,
  ContentTab,
} from "./styles";

export const ContentBody = (props: any) => {
  return (
    <>
      <Container Board={true}>
        <ContentTab value="aula01">
          <Player>
            <iframe
              title="Aula"
              src="https://www.youtube-nocookie.com/embed/T8jUiXu8ISw"
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Player>
          <ContentRoom>
            <div className="description">
              <h2>Aula 01 | Estrutura visual do Design System</h2>
              <p>
                Primeiros passos! Nessa aula vamos criar a base visual do Design
                System no Figma, definir quais tokens utilizaremos e os
                componentes que farão parte da biblioteca em React.
              </p>
            </div>
            <div className="btns_acess">
              <Button
                textButton="Comunidade no Discord"
                styles={"solid"}
                icon={<Icon.DiscordLogo />}
                wd={true}
                linkHref={"https://discord.gg/SwnRMjQqYw"}
                blank={"_blank"}
              />
              <Button
                textButton="Acesse o desafio"
                styles={"outline"}
                icon={<Icon.Lightning />}
                wd={true}
                linkHref={"/"}
              />
            </div>
          </ContentRoom>
          <InforTeacher>
            <img
              src="/assets/avatar.png"
              alt="Avatar"
              className="avatar"
              loading="lazy"
            />
            <div className="name_office">
              <strong>Diego Fernandes</strong>
              <p>Co-fundador e CTO na Rocketseat </p>
            </div>
          </InforTeacher>
          <MaterialClass>
            <ButtonCard
              styles={"card"}
              linkHref="https://drive.google.com/uc?export=download&id=17oSeKZU2y-SGOtrj-0XLsJdewklAyNWC"
              blank="_blank"
              iconCard={<Icon.Image />}
              textStrong="Wallpapers do evento"
              textParagraph="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
            />
          </MaterialClass>
        </ContentTab>
        <ContentTab value="aula02">
          <Player>
            <iframe
              title="Aula"
              src="https://www.youtube-nocookie.com/embed/jEQuAsqPhcU"
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Player>
          <ContentRoom>
            <div className="description">
              <h2>Aula 02 | Do Figma ao React, criando aplicação</h2>
              <p>
                Mão na massa! Na segunda aula iremos exportar os tokens e
                componentes do Figma para o código criando a base do projeto em
                React e a documentação utilizando Storybook.
              </p>
            </div>
            <div className="btns_acess">
              <Button
                textButton="Comunidade no Discord"
                styles={"solid"}
                icon={<Icon.DiscordLogo />}
                wd={true}
                linkHref={"https://discord.gg/SwnRMjQqYw"}
                blank={"_blank"}
              />
              <Button
                textButton="Acesse o desafio"
                styles={"outline"}
                icon={<Icon.Lightning />}
                wd={true}
                linkHref={"/"}
              />
            </div>
          </ContentRoom>
          <InforTeacher>
            <img
              src="/assets/avatar.png"
              alt="Avatar"
              className="avatar"
              loading="lazy"
            />
            <div className="name_office">
              <strong>Diego Fernandes</strong>
              <p>Co-fundador e CTO na Rocketseat </p>
            </div>
          </InforTeacher>
          <MaterialClass>
            <ButtonCard
              styles={"card"}
              linkHref="https://afiovinicius.notion.site/Ignite-Lab-Design-System-2f811f03ad434229b8919bd236bb0017"
              blank="_blank"
              iconCard={<Icon.FileArrowDown />}
              textStrong="Material complementar"
              textParagraph="Acesse o material complementar para acelerar o seu desenvolvimento"
            />
            <ButtonCard
              styles={"card"}
              linkHref="https://drive.google.com/uc?export=download&id=17oSeKZU2y-SGOtrj-0XLsJdewklAyNWC"
              blank="_blank"
              iconCard={<Icon.Image />}
              textStrong="Wallpapers do evento"
              textParagraph="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
            />
          </MaterialClass>
        </ContentTab>
        <ContentTab value="aula03">
          <Player>
            <iframe
              title="Aula"
              src="https://www.youtube-nocookie.com/embed/sV-WK3Lv60c"
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Player>
          <ContentRoom>
            <div className="description">
              <h2>Aula 03 | Testando e automatizando</h2>
              <p>
                Bora finalizar nosso projeto! Na última aula aprenderemos como
                criar testes automatizados para o Design System e simular
                interações do usuário. Além disso, vamos automatizar o processo
                de deploy.
              </p>
            </div>
            <div className="btns_acess">
              <Button
                textButton="Comunidade no Discord"
                styles={"solid"}
                icon={<Icon.DiscordLogo />}
                wd={true}
                linkHref={"https://discord.gg/SwnRMjQqYw"}
                blank={"_blank"}
              />
              <Button
                textButton="Acesse o desafio"
                styles={"outline"}
                icon={<Icon.Lightning />}
                wd={true}
                linkHref={"/"}
              />
            </div>
          </ContentRoom>
          <InforTeacher>
            <img
              src="/assets/avatar.png"
              alt="Avatar"
              className="avatar"
              loading="lazy"
            />
            <div className="name_office">
              <strong>Diego Fernandes</strong>
              <p>Co-fundador e CTO na Rocketseat </p>
            </div>
          </InforTeacher>
          <MaterialClass>
            <ButtonCard
              styles={"card"}
              linkHref="https://afiovinicius.notion.site/Ignite-Lab-Design-System-2f811f03ad434229b8919bd236bb0017"
              blank="_blank"
              iconCard={<Icon.FileArrowDown />}
              textStrong="Material complementar"
              textParagraph="Acesse o material complementar para acelerar o seu desenvolvimento"
            />
          </MaterialClass>
        </ContentTab>
      </Container>
    </>
  );
};
