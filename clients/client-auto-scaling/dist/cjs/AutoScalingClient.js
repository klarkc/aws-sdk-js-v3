"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoScalingClient = void 0;
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
 * <fullname>Amazon EC2 Auto Scaling</fullname>
 *
 *
 *
 *
 *
 *
 *         <p>Amazon EC2 Auto Scaling is designed to automatically launch or terminate EC2 instances
 *             based on user-defined scaling policies, scheduled actions, and health checks.</p>
 *         <p>For more information about Amazon EC2 Auto Scaling, see the <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html">Amazon EC2 Auto Scaling User Guide</a>. For information about granting IAM users required
 *             permissions for calls to Amazon EC2 Auto Scaling, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/ec2-auto-scaling-api-permissions.html">Granting
 *                 IAM users required permissions for Amazon EC2 Auto Scaling resources</a> in the
 *                 <i>Amazon EC2 Auto Scaling API Reference</i>.</p>
 */
class AutoScalingClient extends smithy_client_1.Client {
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
exports.AutoScalingClient = AutoScalingClient;
//# sourceMappingURL=AutoScalingClient.js.map
