import { Router } from "./routes";
import { globalStyles } from "./styles/global";

export function App() {
  globalStyles();
  return (
    <>
      <Router />
    </>
  );
}
