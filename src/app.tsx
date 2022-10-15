import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./routes";
import { globalStyles } from "./styles/global";

export function App() {
  globalStyles();
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
}
