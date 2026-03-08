import { createGetKcContext } from "keycloakify/login";

export type KcContextExtension = {};

export const { getKcContext } = createGetKcContext<KcContextExtension>({});

export const { kcContext } = getKcContext({});

export type KcContext = NonNullable<typeof kcContext>;