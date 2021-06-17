import { __assign, __extends } from "tslib";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import { resolveEndpointsConfig, resolveRegionConfig, } from "@aws-sdk/config-resolver";
import { resolveEventStreamSerdeConfig, } from "@aws-sdk/eventstream-serde-config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { resolveEventStreamConfig, } from "@aws-sdk/middleware-eventstream";
import { getHostHeaderPlugin, resolveHostHeaderConfig, } from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import { getWebSocketPlugin, resolveWebSocketConfig, } from "@aws-sdk/middleware-sdk-transcribe-streaming";
import { getAwsAuthPlugin, resolveAwsAuthConfig, } from "@aws-sdk/middleware-signing";
import { getUserAgentPlugin, resolveUserAgentConfig, } from "@aws-sdk/middleware-user-agent";
import { Client as __Client, } from "@aws-sdk/smithy-client";
/**
 * <p>Operations and objects for transcribing streaming speech to text.</p>
 */
var TranscribeStreamingClient = /** @class */ (function (_super) {
    __extends(TranscribeStreamingClient, _super);
    function TranscribeStreamingClient(configuration) {
        var _this = this;
        var _config_0 = __assign(__assign({}, __ClientDefaultValues), configuration);
        var _config_1 = resolveRegionConfig(_config_0);
        var _config_2 = resolveEndpointsConfig(_config_1);
        var _config_3 = resolveRetryConfig(_config_2);
        var _config_4 = resolveHostHeaderConfig(_config_3);
        var _config_5 = resolveAwsAuthConfig(_config_4);
        var _config_6 = resolveEventStreamConfig(_config_5);
        var _config_7 = resolveWebSocketConfig(_config_6);
        var _config_8 = resolveUserAgentConfig(_config_7);
        var _config_9 = resolveEventStreamSerdeConfig(_config_8);
        _this = _super.call(this, _config_9) || this;
        _this.config = _config_9;
        _this.middlewareStack.use(getRetryPlugin(_this.config));
        _this.middlewareStack.use(getContentLengthPlugin(_this.config));
        _this.middlewareStack.use(getHostHeaderPlugin(_this.config));
        _this.middlewareStack.use(getLoggerPlugin(_this.config));
        _this.middlewareStack.use(getAwsAuthPlugin(_this.config));
        _this.middlewareStack.use(getWebSocketPlugin(_this.config));
        _this.middlewareStack.use(getUserAgentPlugin(_this.config));
        return _this;
    }
    /**
     * Destroy underlying resources, like sockets. It's usually not necessary to do this.
     * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
     * Otherwise, sockets might stay open for quite a long time before the server terminates them.
     */
    TranscribeStreamingClient.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return TranscribeStreamingClient;
}(__Client));
export { TranscribeStreamingClient };
//# sourceMappingURL=TranscribeStreamingClient.js.map