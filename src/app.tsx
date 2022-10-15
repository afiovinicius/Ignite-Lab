import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/index";
import { globalStyles } from "./styles/global";

export function App() {
  globalStyles();
  return (
    <Router>
      <Routes />
    </Router>
  );
}
