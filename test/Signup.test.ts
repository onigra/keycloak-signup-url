import Signup from "../src/Signup";

describe("Signup", () => {
  const config = {
    realm: "my-realm",
    url: "https://localhost:8080/auth",
    clientId: "my-realm-client",
    redirectUrl: "https://localhost:3000/callback/signup"
  };

  test("signupUrl", () => {
    const urlRegexp =
      "https://localhost:8080" +
      "/auth/realms/my-realm/protocol/openid-connect/registrations" +
      "\\?client_id=my-realm-client" +
      "&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2Fcallback%2Fsignup" +
      "&scope=openid" +
      "&state=12345" +
      "&nonce=12345" +
      "&response_mode=fragment" +
      "&response_type=id_token%20token";
    const expected = new RegExp(urlRegexp);

    const keycloak = new Signup(config);
    expect(keycloak.signupUrl()).toMatch(expected);
  });
});
