import { Container } from "../../styles/global";
import { Footer } from "../../components/Footer";
import { InputText } from "../../components/Inputs";
import { Button } from "../../components/Buttons";
import { StyledHome } from "./styles";

export const Home = () => {
  return (
    <>
      <StyledHome>
        <Container>
          <div className="content">
            <div className="text_home">
              <img
                className="logo_home"
                src="/public/assets/logo_ignitelab.svg"
                alt="Logo igniteLab"
                loading="lazy"
              />
              <h1>
                Construa uma <b>aplicação completa</b>, do zero, com{" "}
                <b>React JS</b>
              </h1>
              <p>
                Em apenas uma semana você vai dominar na prática uma das
                tecnologias mais utilizadas e com alta demanda para acessar as
                melhores oportunidades do mercado.
              </p>
            </div>
            <form>
              <p>Inscreva-se gratuitamente</p>
              <InputText types="text" pch="Seu nome completo" wd={true} />
              <InputText types="email" pch="Digite seu email" wd={true} />
              <Button
                styles={"solid"}
                textButton={"Garantir minha vaga"}
                linkHref={"/platform"}
                wd={true}
              />
            </form>
          </div>
          <div className="illust_screencode">
            <img
              src="/public/assets/tray.svg"
              alt="Tray Icones"
              className="tray"
              loading="lazy"
            />
            <img
              src="/public/assets/card_react.svg"
              alt="Icone Reactjs"
              className="card_react"
              loading="lazy"
            />
            <img
              src="/public/assets/card_person.svg"
              alt="Card usuários"
              className="card_person"
              loading="lazy"
            />
            <img
              src="/public/assets/screen.png"
              alt="Tela VsCode"
              className="screen"
              loading="lazy"
            />
          </div>
        </Container>
      </StyledHome>
      <Footer />
    </>
  );
};
