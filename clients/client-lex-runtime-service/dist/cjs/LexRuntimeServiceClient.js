"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LexRuntimeServiceClient = void 0;
const runtimeConfig_1 = require("./runtimeConfig");
const config_resolver_1 = require("@aws-sdk/config-resolver");
const middleware_content_length_1 = require("@aws-sdk/middleware-content-length");
const middleware_host_header_1 = require("@aws-sdk/middleware-host-header");
const middleware_logger_1 = require("@aws-sdk/middleware-logger");
const middleware_retry_1 = require("@aws-sdk/middleware-retry");
const middleware_signing_1 = require("@aws-sdk/middleware-signing");
const middleware_user_agent_1 = require("@aws-sdk/middleware-user-agent");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class LexRuntimeServiceClient extends smithy_client_1.Client {
    constructor(configuration) {
        let _config_0 = {
            ...runtimeConfig_1.ClientDefaultValues,
            ...configuration,
        };
        let _config_1 = config_resolver_1.resolveRegionConfig(_config_0);
        let _config_2 = config_resolver_1.resolveEndpointsConfig(_config_1);
        let _config_3 = middleware_retry_1.resolveRetryConfig(_config_2);
        let _config_4 = middleware_host_header_1.resolveHostHeaderConfig(_config_3);
        let _config_5 = middleware_signing_1.resolveAwsAuthConfig(_config_4);
        let _config_6 = middleware_user_agent_1.resolveUserAgentConfig(_config_5);
        super(_config_6);
        this.config = _config_6;
        this.middlewareStack.use(middleware_retry_1.getRetryPlugin(this.config));
        this.middlewareStack.use(middleware_content_length_1.getContentLengthPlugin(this.config));
        this.middlewareStack.use(middleware_host_header_1.getHostHeaderPlugin(this.config));
        this.middlewareStack.use(middleware_logger_1.getLoggerPlugin(this.config));
        this.middlewareStack.use(middleware_signing_1.getAwsAuthPlugin(this.config));
        this.middlewareStack.use(middleware_user_agent_1.getUserAgentPlugin(this.config));
    }
    /**
     * Destroy underlying resources, like sockets. It's usually not necessary to do this.
     * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
     * Otherwise, sockets might stay open for quite a long time before the server terminates them.
     */
    destroy() {
        super.destroy();
    }
}
exports.LexRuntimeServiceClient = LexRuntimeServiceClient;
//# sourceMappingURL=LexRuntimeServiceClient.js.map