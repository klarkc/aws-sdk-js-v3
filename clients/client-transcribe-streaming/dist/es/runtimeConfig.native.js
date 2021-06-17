import { __assign } from "tslib";
import { Sha256 } from "@aws-crypto/sha256-js";
import { WebSocketHandler, eventStreamPayloadHandler } from "@aws-sdk/middleware-sdk-transcribe-streaming";
import { ClientDefaultValues as BrowserDefaults } from "./runtimeConfig.browser";
/**
 * @internal
 */
export var ClientDefaultValues = __assign(__assign({}, BrowserDefaults), { runtime: "react-native", eventStreamPayloadHandlerProvider: function () { return eventStreamPayloadHandler; }, requestHandler: new WebSocketHandler(), sha256: Sha256 });
//# sourceMappingURL=runtimeConfig.native.js.map