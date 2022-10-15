import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ContentBody } from "../../components/Content";
import { SideBar } from "../../components/SideBar";

import { Content } from "./styles";

export const Platform = () => {
  return (
    <>
      <Header />
      <Content defaultValue="aula01">
        <ContentBody />
        <SideBar showbar={{ "@initial": true, "@md": false }} />
      </Content>
      <Footer />
    </>
  );
};
