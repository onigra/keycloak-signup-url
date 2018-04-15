import { ResponseMode } from "./ResponseMode";

export default interface KeycloakConfig {
  realm: string;
  url: string;
  clientId: string;
  redirectUrl: string;
  scope?: string;
  responseMode?: ResponseMode;
  responseType?: string;
};
