import { i18nBuilder } from "keycloakify/login/i18n";

export const { useI18n } = i18nBuilder.build();

export type I18n = ReturnType<typeof useI18n>;