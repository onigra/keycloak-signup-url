"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const random_1 = __importDefault(require("./random"));
class Signup {
    constructor(config) {
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
        return (this.url +
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
            encodeURIComponent(random_1.default()) +
            "&nonce=" +
            encodeURIComponent(random_1.default()) +
            "&response_mode=" +
            encodeURIComponent(this.responseMode) +
            "&response_type=" +
            encodeURIComponent(this.responseType));
    }
}
exports.default = Signup;
