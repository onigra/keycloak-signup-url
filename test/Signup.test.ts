import Signup from "../src/Signup";

describe("Signup", () => {
  test("Default config", () => {
    const config = {
      realm: "my-realm",
      url: "https://localhost:8080/auth",
      clientId: "my-realm-client",
      redirectUrl: "https://localhost:3000/callback/signup"
    };

    const urlRegexp =
      "https://localhost:8080" +
      "/auth/realms/my-realm/protocol/openid-connect/registrations" +
      "\\?client_id=my-realm-client" +
      "&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2Fcallback%2Fsignup" +
      "&scope=openid" +
      "&state=([0-9a-z]{32})" +
      "&nonce=([0-9a-z]{32})" +
      "&response_mode=fragment" +
      "&response_type=id_token%20token";
    const expected = new RegExp(urlRegexp);

    const keycloak = new Signup(config);
    expect(keycloak.signupUrl()).toMatch(expected);
  });

  test("Scope is openid & email", () => {
    const config = {
      realm: "my-realm",
      url: "https://localhost:8080/auth",
      clientId: "my-realm-client",
      redirectUrl: "https://localhost:3000/callback/signup"
      scope: "openid email"
    };

    const urlRegexp =
      "https://localhost:8080" +
      "/auth/realms/my-realm/protocol/openid-connect/registrations" +
      "\\?client_id=my-realm-client" +
      "&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2Fcallback%2Fsignup" +
      "&scope=openid%20email" +
      "&state=([0-9a-z]{32})" +
      "&nonce=([0-9a-z]{32})" +
      "&response_mode=fragment" +
      "&response_type=id_token%20token";
    const expected = new RegExp(urlRegexp);

    const keycloak = new Signup(config);
    expect(keycloak.signupUrl()).toMatch(expected);
  });

  test("ResponseMode is code", () => {
    const config = {
      realm: "my-realm",
      url: "https://localhost:8080/auth",
      clientId: "my-realm-client",
      redirectUrl: "https://localhost:3000/callback/signup"
      responseType: "code"
    };

    const urlRegexp =
      "https://localhost:8080" +
      "/auth/realms/my-realm/protocol/openid-connect/registrations" +
      "\\?client_id=my-realm-client" +
      "&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2Fcallback%2Fsignup" +
      "&scope=openid" +
      "&state=([0-9a-z]{32})" +
      "&nonce=([0-9a-z]{32})" +
      "&response_mode=fragment" +
      "&response_type=code";
    const expected = new RegExp(urlRegexp);

    const keycloak = new Signup(config);
    expect(keycloak.signupUrl()).toMatch(expected);
  });

  test("ResponseType is query", () => {
    const config = {
      realm: "my-realm",
      url: "https://localhost:8080/auth",
      clientId: "my-realm-client",
      redirectUrl: "https://localhost:3000/callback/signup"
      responseMode: "query"
    };

    const urlRegexp =
      "https://localhost:8080" +
      "/auth/realms/my-realm/protocol/openid-connect/registrations" +
      "\\?client_id=my-realm-client" +
      "&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2Fcallback%2Fsignup" +
      "&scope=openid" +
      "&state=([0-9a-z]{32})" +
      "&nonce=([0-9a-z]{32})" +
      "&response_mode=query" +
      "&response_type=id_token%20token";
    const expected = new RegExp(urlRegexp);

    const keycloak = new Signup(config);
    expect(keycloak.signupUrl()).toMatch(expected);
  });
});
