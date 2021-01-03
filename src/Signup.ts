import KeycloakConfig from "./KeycloakConfig";
import { ResponseMode } from "./ResponseMode";
import createUUID from "./uuid";

export default class Signup {
  readonly realm: string;
  readonly url: string;
  readonly clientId: string;
  readonly redirectUrl: string;
  readonly scope: string;
  readonly responseMode: ResponseMode;
  readonly responseType: string;

  constructor(config: KeycloakConfig) {
    this.realm = config.realm;
    this.url = config.url;
    this.clientId = config.clientId;
    this.redirectUrl = config.redirectUrl;
    this.scope = config.scope ? config.scope : "openid";
    this.responseMode = config.responseMode ? config.responseMode : "fragment";
    this.responseType = config.responseType
      ? config.responseType
      : "id_token token";
  }

  signupUrl() {
    return (
      this.url +
      "/realms/" +
      this.realm +
      "/protocol/openid-connect/registrations" +
      "?client_id=" +
      encodeURIComponent(this.clientId) +
      "&redirect_uri=" +
      encodeURIComponent(this.redirectUrl) +
      "&scope=" +
      encodeURIComponent(this.scope) +
      "&state=" +
      encodeURIComponent(createUUID()) +
      "&nonce=" +
      encodeURIComponent(createUUID()) +
      "&response_mode=" +
      encodeURIComponent(this.responseMode) +
      "&response_type=" +
      encodeURIComponent(this.responseType)
    );
  }
}
