import { __assign, __extends } from "tslib";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import { resolveEndpointsConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { getHostHeaderPlugin, resolveHostHeaderConfig } from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import { getAwsAuthPlugin, resolveAwsAuthConfig } from "@aws-sdk/middleware-signing";
import { getUserAgentPlugin, resolveUserAgentConfig } from "@aws-sdk/middleware-user-agent";
import { Client as __Client } from "@aws-sdk/smithy-client";
/**
 * <fullname>AWS Auto Scaling</fullname>
 *
 *
 *          <p>Use AWS Auto Scaling to create scaling plans for your applications to
 *          automatically scale your scalable AWS resources. </p>
 *          <p>
 *             <b>API Summary</b>
 *          </p>
 *          <p>You can use the AWS Auto Scaling service API to accomplish the following tasks:</p>
 *          <ul>
 *             <li>
 *                <p>Create and manage scaling plans</p>
 *             </li>
 *             <li>
 *                <p>Define target tracking scaling policies to dynamically scale your resources based
 *                on utilization</p>
 *             </li>
 *             <li>
 *                <p>Scale Amazon EC2 Auto Scaling groups using predictive scaling and dynamic scaling to scale your
 *                Amazon EC2 capacity faster</p>
 *             </li>
 *             <li>
 *                <p>Set minimum and maximum capacity limits</p>
 *             </li>
 *             <li>
 *                <p>Retrieve information on existing scaling plans</p>
 *             </li>
 *             <li>
 *                <p>Access current forecast data and historical forecast data for up to 56 days
 *                previous</p>
 *             </li>
 *          </ul>
 *
 *          <p>To learn more about AWS Auto Scaling, including information about granting IAM users required
 *          permissions for AWS Auto Scaling actions, see the <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/what-is-aws-auto-scaling.html">AWS Auto Scaling User Guide</a>. </p>
 */
var AutoScalingPlansClient = /** @class */ (function (_super) {
  __extends(AutoScalingPlansClient, _super);
  function AutoScalingPlansClient(configuration) {
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
  AutoScalingPlansClient.prototype.destroy = function () {
    _super.prototype.destroy.call(this);
  };
  return AutoScalingPlansClient;
})(__Client);
export { AutoScalingPlansClient };
//# sourceMappingURL=AutoScalingPlansClient.js.map
