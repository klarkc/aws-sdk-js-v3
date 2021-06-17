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
 * <fullname>Amazon Elastic Container Service</fullname>
 * 		       <p>Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, container management service that makes
 * 			it easy to run, stop, and manage Docker containers on a cluster. You can host your
 * 			cluster on a serverless infrastructure that is managed by Amazon ECS by launching your
 * 			services or tasks on AWS Fargate. For more control, you can host your tasks on a cluster
 * 			of Amazon Elastic Compute Cloud (Amazon EC2) instances that you manage.</p>
 * 		       <p>Amazon ECS makes it easy to launch and stop container-based applications with simple API
 * 			calls, allows you to get the state of your cluster from a centralized service, and gives
 * 			you access to many familiar Amazon EC2 features.</p>
 * 		       <p>You can use Amazon ECS to schedule the placement of containers across your cluster based on
 * 			your resource needs, isolation policies, and availability requirements. Amazon ECS eliminates
 * 			the need for you to operate your own cluster management and configuration management
 * 			systems or worry about scaling your management infrastructure.</p>
 */
var ECSClient = /** @class */ (function (_super) {
    __extends(ECSClient, _super);
    function ECSClient(configuration) {
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
    ECSClient.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return ECSClient;
}(__Client));
export { ECSClient };
//# sourceMappingURL=ECSClient.js.map