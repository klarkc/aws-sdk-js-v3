import { __assign, __extends } from "tslib";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import { resolveEndpointsConfig, resolveRegionConfig, } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { getHostHeaderPlugin, resolveHostHeaderConfig, } from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import { getAwsAuthPlugin, resolveAwsAuthConfig, } from "@aws-sdk/middleware-signing";
import { getUserAgentPlugin, resolveUserAgentConfig, } from "@aws-sdk/middleware-user-agent";
import { Client as __Client, } from "@aws-sdk/smithy-client";
/**
 * <p>Amazon Lex provides both build and runtime endpoints. Each endpoint
 *       provides a set of operations (API). Your conversational bot uses the
 *       runtime API to understand user utterances (user input text or voice). For
 *       example, suppose a user says "I want pizza", your bot sends this input to
 *       Amazon Lex using the runtime API. Amazon Lex recognizes that the user
 *       request is for the OrderPizza intent (one of the intents defined in the
 *       bot). Then Amazon Lex engages in user conversation on behalf of the bot to
 *       elicit required information (slot values, such as pizza size and crust
 *       type), and then performs fulfillment activity (that you configured when
 *       you created the bot). You use the build-time API to create and manage your
 *       Amazon Lex bot. For a list of build-time operations, see the build-time
 *       API, . </p>
 */
var LexRuntimeServiceClient = /** @class */ (function (_super) {
    __extends(LexRuntimeServiceClient, _super);
    function LexRuntimeServiceClient(configuration) {
        var _this = this;
        var _config_0 = __assign(__assign({}, __ClientDefaultValues), configuration);
        var _config_1 = resolveRegionConfig(_config_0);
        var _config_2 = resolveEndpointsConfig(_config_1);
        var _config_3 = resolveRetryConfig(_config_2);
        var _config_4 = resolveHostHeaderConfig(_config_3);
        var _config_5 = resolveAwsAuthConfig(_config_4);
        var _config_6 = resolveUserAgentConfig(_config_5);
        _this = _super.call(this, _config_6) || this;
        _this.config = _config_6;
        _this.middlewareStack.use(getRetryPlugin(_this.config));
        _this.middlewareStack.use(getContentLengthPlugin(_this.config));
        _this.middlewareStack.use(getHostHeaderPlugin(_this.config));
        _this.middlewareStack.use(getLoggerPlugin(_this.config));
        _this.middlewareStack.use(getAwsAuthPlugin(_this.config));
        _this.middlewareStack.use(getUserAgentPlugin(_this.config));
        return _this;
    }
    /**
     * Destroy underlying resources, like sockets. It's usually not necessary to do this.
     * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
     * Otherwise, sockets might stay open for quite a long time before the server terminates them.
     */
    LexRuntimeServiceClient.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return LexRuntimeServiceClient;
}(__Client));
export { LexRuntimeServiceClient };
//# sourceMappingURL=LexRuntimeServiceClient.js.map