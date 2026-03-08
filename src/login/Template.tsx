import type { TemplateProps } from "keycloakify/login/TemplateProps";
import type { KcContext } from "./KcContext";
import type { I18n } from "./i18n";
import "./styles.css";

export default function Template(props: TemplateProps<KcContext, I18n>) {
  const { children, kcContext } = props;
  const { realm } = kcContext;

  return (
    <div className="bamkabu-container">
      <div className="bamkabu-background"></div>
      <div className="bamkabu-card">
        <div className="bamkabu-logo">
          <img src={`${import.meta.env.BASE_URL}bamkabu.png`} alt="Bamkabu" />
        </div>
        <h1 className="bamkabu-title">{realm.displayName || "STORY"}</h1>
        <div className="bamkabu-content">
          {children}
        </div>
      </div>
      <div className="bamkabu-hearts">
        <span className="heart">♥</span>
        <span className="heart">♥</span>
        <span className="heart">♥</span>
      </div>
    </div>
  );
}