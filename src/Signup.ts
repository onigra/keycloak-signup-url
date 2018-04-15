import KeycloakConfig from "./KeycloakConfig";
import random from "./random";

export default class Signup {
  readonly realm: string;
  readonly url: string;
  readonly clientId: string;
  readonly redirectUrl: string;

  constructor(config: KeycloakConfig) {
    this.realm = config.realm;
    this.url = config.url;
    this.clientId = config.clientId;
    this.redirectUrl = config.redirectUrl;
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
      encodeURIComponent("openid") +
      "&state=" +
      encodeURIComponent(random()) +
      "&nonce=" +
      encodeURIComponent(random()) +
      "&response_mode=" +
      encodeURIComponent("fragment") +
      "&response_type=" +
      encodeURIComponent("id_token token")
    );
  }
}
