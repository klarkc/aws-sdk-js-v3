"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientDefaultValues = void 0;
const sha256_js_1 = require("@aws-crypto/sha256-js");
const middleware_sdk_transcribe_streaming_1 = require("@aws-sdk/middleware-sdk-transcribe-streaming");
const runtimeConfig_browser_1 = require("./runtimeConfig.browser");
/**
 * @internal
 */
exports.ClientDefaultValues = {
    ...runtimeConfig_browser_1.ClientDefaultValues,
    runtime: "react-native",
    eventStreamPayloadHandlerProvider: () => middleware_sdk_transcribe_streaming_1.eventStreamPayloadHandler,
    requestHandler: new middleware_sdk_transcribe_streaming_1.WebSocketHandler(),
    sha256: sha256_js_1.Sha256,
};
//# sourceMappingURL=runtimeConfig.native.js.map