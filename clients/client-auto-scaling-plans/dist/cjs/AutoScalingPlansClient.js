"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoScalingPlansClient = void 0;
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
class AutoScalingPlansClient extends smithy_client_1.Client {
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
exports.AutoScalingPlansClient = AutoScalingPlansClient;
//# sourceMappingURL=AutoScalingPlansClient.js.map
