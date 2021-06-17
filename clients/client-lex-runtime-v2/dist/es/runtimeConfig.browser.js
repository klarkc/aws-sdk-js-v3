import { __assign } from "tslib";
import packageInfo from "./package.json";
import { Sha256 } from "@aws-crypto/sha256-browser";
import { eventStreamSerdeProvider } from "@aws-sdk/eventstream-serde-browser";
import { FetchHttpHandler, streamCollector } from "@aws-sdk/fetch-http-handler";
import { invalidFunction, invalidProvider } from "@aws-sdk/invalid-dependency";
import { DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE } from "@aws-sdk/middleware-retry";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64-browser";
import { calculateBodyLength } from "@aws-sdk/util-body-length-browser";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-browser";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-browser";
import { ClientSharedValues } from "./runtimeConfig.shared";
/**
 * @internal
 */
export var ClientDefaultValues = __assign(__assign({}, ClientSharedValues), { runtime: "browser", base64Decoder: fromBase64, base64Encoder: toBase64, bodyLengthChecker: calculateBodyLength, credentialDefaultProvider: function (_) { return function () { return Promise.reject(new Error("Credential is missing")); }; }, defaultUserAgentProvider: defaultUserAgent({
        serviceId: ClientSharedValues.serviceId,
        clientVersion: packageInfo.version,
    }), eventStreamPayloadHandlerProvider: function () { return ({
        handle: invalidFunction("event stream request is not supported in browser."),
    }); }, eventStreamSerdeProvider: eventStreamSerdeProvider, maxAttempts: DEFAULT_MAX_ATTEMPTS, region: invalidProvider("Region is missing"), requestHandler: new FetchHttpHandler(), retryModeProvider: function () { return Promise.resolve(DEFAULT_RETRY_MODE); }, sha256: Sha256, streamCollector: streamCollector, utf8Decoder: fromUtf8, utf8Encoder: toUtf8 });
//# sourceMappingURL=runtimeConfig.browser.js.map