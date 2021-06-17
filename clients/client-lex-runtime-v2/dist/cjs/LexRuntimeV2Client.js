"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LexRuntimeV2Client = void 0;
const runtimeConfig_1 = require("./runtimeConfig");
const config_resolver_1 = require("@aws-sdk/config-resolver");
const eventstream_serde_config_resolver_1 = require("@aws-sdk/eventstream-serde-config-resolver");
const middleware_content_length_1 = require("@aws-sdk/middleware-content-length");
const middleware_eventstream_1 = require("@aws-sdk/middleware-eventstream");
const middleware_host_header_1 = require("@aws-sdk/middleware-host-header");
const middleware_logger_1 = require("@aws-sdk/middleware-logger");
const middleware_retry_1 = require("@aws-sdk/middleware-retry");
const middleware_signing_1 = require("@aws-sdk/middleware-signing");
const middleware_user_agent_1 = require("@aws-sdk/middleware-user-agent");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p></p>
 */
class LexRuntimeV2Client extends smithy_client_1.Client {
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
        let _config_6 = middleware_eventstream_1.resolveEventStreamConfig(_config_5);
        let _config_7 = middleware_user_agent_1.resolveUserAgentConfig(_config_6);
        let _config_8 = eventstream_serde_config_resolver_1.resolveEventStreamSerdeConfig(_config_7);
        super(_config_8);
        this.config = _config_8;
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
exports.LexRuntimeV2Client = LexRuntimeV2Client;
//# sourceMappingURL=LexRuntimeV2Client.js.map