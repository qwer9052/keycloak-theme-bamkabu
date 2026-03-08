import { createRoot } from "react-dom/client";
import { KcPage, type KcContext } from "./kc.gen";

const kcContext = window.kcContext;

if (kcContext === undefined) {
  throw new Error("No Keycloak context");
}

createRoot(document.getElementById("root")!).render(<KcPage kcContext={kcContext} />);