/*
 * Copyright 2016 Red Hat, Inc. and/or its affiliates
 * and other contributors as indicated by the @author tags.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import crypto from "crypto";

function generateRandomData(len: ArrayBufferLike) : Uint8Array {
  const array = new Uint8Array(len);
  crypto.randomFillSync(array);
  return array;
}

function generateRandomString(len: ArrayBufferLike, alphabet: string) : string {
  const randomData = generateRandomData(len);
  let chars = new Array();

  randomData.forEach(element => {
    chars.push(alphabet.charCodeAt(element % alphabet.length));
  });

  return String.fromCharCode.apply(null, chars);
}

// https://github.com/keycloak/keycloak/blob/a766a1dd16fb3376e283308397f389ae6708803d/adapters/oidc/js/src/main/resources/keycloak.js#L1061L1069
export default function createUUID() : string {
  const hexDigits = '0123456789abcdef';
  let s = generateRandomString(new ArrayBuffer(36), hexDigits).split("");
  s[14] = '4';
  s[19] = hexDigits.substr((parseInt(s[19]) & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = '-'
  const uuid = s.join('');
  return uuid;
}
