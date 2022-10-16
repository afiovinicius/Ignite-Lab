import { useState } from "react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ContentBody } from "../../components/Content";
import { SideBar } from "../../components/SideBar";

import { Content } from "./styles";

export const Platform = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <Header isShowBar={handleToggle} />
      <Content defaultValue="aula01">
        <ContentBody />
        <SideBar showbar={{ "@initial": true, "@md": isActive }} />
      </Content>
      <Footer />
    </>
  );
};
