import { Suspense } from "react";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import Template from "./Template";

export default function KcPage(props: { kcContext: KcContext }) {
  const { kcContext } = props;
  const i18n = useI18n({ kcContext });

  if (i18n === null) {
    return null;
  }

  return (
    <Suspense>
      <DefaultPage
        kcContext={kcContext}
        i18n={i18n}
        Template={Template}
        classes={{}}
      />
    </Suspense>
  );
}