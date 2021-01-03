# keycloak-signup-url

[![npm version](https://badge.fury.io/js/keycloak-signup-url.svg)](https://badge.fury.io/js/keycloak-signup-url)
![Test](https://github.com/onigra/keycloak-signup-url/workflows/Test/badge.svg)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/4477ce02246b4ede82d5bb2866e93401)](https://www.codacy.com/gh/onigra/keycloak-signup-url/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=onigra/keycloak-signup-url&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/4477ce02246b4ede82d5bb2866e93401)](https://www.codacy.com/gh/onigra/keycloak-signup-url/dashboard?utm_source=github.com&utm_medium=referral&utm_content=onigra/keycloak-signup-url&utm_campaign=Badge_Coverage)

Create signup url for [Keycloak](https://www.keycloak.org/).

# Installation

```sh
$ npm install keycloak-signup-url --save
```

# Usage

```js
import KeycloakSignupUrl from "keycloak-signup-url";

const config = {
  realm: "sample-realm",
  url: "http://localhost:8080/auth",
  clientId: "sample-client",
  redirectUrl: "http://localhost:3000/callbacks/signup"
};

const keycloak = new KeycloakSignupUrl(config);
keycloak.signupUrl();

// http://localhost:8080/auth/realms/sample-realm/protocol/openid-connect/registrations?client_id=sample-client&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallbacks%2Fsignup&scope=openid&state=d300138cf4de4f2cb226dbf40b0f5e4e&nonce=cd07e16ef94a41b688dd74cfa90cba22&response_mode=fragment&response_type=id_token%20token
```

# UseCase

TBD
