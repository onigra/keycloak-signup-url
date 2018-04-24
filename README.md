# keycloak-signup-url

[![npm version](https://badge.fury.io/js/keycloak-signup-url.svg)](https://badge.fury.io/js/keycloak-signup-url)
[![Build Status](https://travis-ci.org/onigra/keycloak-signup-url.svg?branch=master)](https://travis-ci.org/onigra/keycloak-signup-url)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/aa6aa81a971f4a779af3110cefcb5adc)](https://www.codacy.com/app/onigra/keycloak-signup-url?utm_source=github.com&utm_medium=referral&utm_content=onigra/keycloak-signup-url&utm_campaign=Badge_Grade)

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
