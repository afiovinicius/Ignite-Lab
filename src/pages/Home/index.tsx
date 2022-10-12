import { Link } from "react-router-dom";
import { Container } from "../../styles/global";

export const Home = () => {
  return (
    <Container>
      <h1>Hello Wolrd</h1>
      <Link to={"/platform"}>Button</Link>
    </Container>
  );
};
