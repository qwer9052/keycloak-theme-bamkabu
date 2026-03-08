import { createRoot } from "react-dom/client";
import { KcPage } from "./login";
import { getKcContext } from "./login/KcContext";

const { kcContext } = getKcContext({});

if (kcContext === undefined) {
  throw new Error("No Keycloak context");
}

createRoot(document.getElementById("root")!).render(<KcPage kcContext={kcContext} />);