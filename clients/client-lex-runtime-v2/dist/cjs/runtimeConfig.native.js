"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientDefaultValues = void 0;
const sha256_js_1 = require("@aws-crypto/sha256-js");
const invalid_dependency_1 = require("@aws-sdk/invalid-dependency");
const runtimeConfig_browser_1 = require("./runtimeConfig.browser");
/**
 * @internal
 */
exports.ClientDefaultValues = {
    ...runtimeConfig_browser_1.ClientDefaultValues,
    runtime: "react-native",
    eventStreamPayloadHandlerProvider: () => ({
        handle: invalid_dependency_1.invalidFunction("event stream request is not supported in ReactNative."),
    }),
    sha256: sha256_js_1.Sha256,
};
//# sourceMappingURL=runtimeConfig.native.js.map