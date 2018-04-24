import KeycloakConfig from "./KeycloakConfig";
import { ResponseMode } from "./ResponseMode";
export default class Signup {
    readonly realm: string;
    readonly url: string;
    readonly clientId: string;
    readonly redirectUrl: string;
    readonly scope: string;
    readonly responseMode: ResponseMode;
    readonly responseType: string;
    constructor(config: KeycloakConfig);
    signupUrl(): string;
}
