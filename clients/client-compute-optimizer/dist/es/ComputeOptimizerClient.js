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
 * <p>AWS Compute Optimizer is a service that analyzes the configuration and utilization
 *             metrics of your AWS compute resources, such as EC2 instances, Auto Scaling groups, AWS Lambda
 *             functions, and Amazon EBS volumes. It reports whether your resources are optimal, and
 *             generates optimization recommendations to reduce the cost and improve the performance of
 *             your workloads. Compute Optimizer also provides recent utilization metric data, as well as projected
 *             utilization metric data for the recommendations, which you can use to evaluate which
 *             recommendation provides the best price-performance trade-off. The analysis of your usage
 *             patterns can help you decide when to move or resize your running resources, and still
 *             meet your performance and capacity requirements. For more information about Compute Optimizer,
 *             including the required permissions to use the service, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/">AWS Compute Optimizer User
 *             Guide</a>.</p>
 */
var ComputeOptimizerClient = /** @class */ (function (_super) {
    __extends(ComputeOptimizerClient, _super);
    function ComputeOptimizerClient(configuration) {
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
    ComputeOptimizerClient.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return ComputeOptimizerClient;
}(__Client));
export { ComputeOptimizerClient };
//# sourceMappingURL=ComputeOptimizerClient.js.map