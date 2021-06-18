"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationAutoScalingClient = void 0;
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
 * <p>With Application Auto Scaling, you can configure automatic scaling for the following
 *       resources:</p>
 *          <ul>
 *             <li>
 *                <p>Amazon ECS services</p>
 *             </li>
 *             <li>
 *                <p>Amazon EC2 Spot Fleet requests</p>
 *             </li>
 *             <li>
 *                <p>Amazon EMR clusters</p>
 *             </li>
 *             <li>
 *                <p>Amazon AppStream 2.0 fleets</p>
 *             </li>
 *             <li>
 *                <p>Amazon DynamoDB tables and global secondary indexes throughput capacity</p>
 *             </li>
 *             <li>
 *                <p>Amazon Aurora Replicas</p>
 *             </li>
 *             <li>
 *                <p>Amazon SageMaker endpoint variants</p>
 *             </li>
 *             <li>
 *                <p>Custom resources provided by your own applications or services</p>
 *             </li>
 *             <li>
 *                <p>Amazon Comprehend document classification and entity recognizer endpoints</p>
 *             </li>
 *             <li>
 *                <p>AWS Lambda function provisioned concurrency</p>
 *             </li>
 *             <li>
 *                <p>Amazon Keyspaces (for Apache Cassandra) tables</p>
 *             </li>
 *             <li>
 *                <p>Amazon Managed Streaming for Apache Kafka broker storage</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>API Summary</b>
 *          </p>
 *          <p>The Application Auto Scaling service API includes three key sets of actions: </p>
 *          <ul>
 *             <li>
 *                <p>Register and manage scalable targets - Register AWS or custom resources as scalable
 *           targets (a resource that Application Auto Scaling can scale), set minimum and maximum capacity limits, and
 *           retrieve information on existing scalable targets.</p>
 *             </li>
 *             <li>
 *                <p>Configure and manage automatic scaling - Define scaling policies to dynamically scale
 *           your resources in response to CloudWatch alarms, schedule one-time or recurring scaling actions,
 *           and retrieve your recent scaling activity history.</p>
 *             </li>
 *             <li>
 *                <p>Suspend and resume scaling - Temporarily suspend and later resume automatic scaling by
 *           calling the <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html">RegisterScalableTarget</a> API action for any Application Auto Scaling scalable target. You can
 *           suspend and resume (individually or in combination) scale-out activities that are
 *           triggered by a scaling policy, scale-in activities that are triggered by a scaling policy,
 *           and scheduled scaling.</p>
 *             </li>
 *          </ul>
 *
 *
 *          <p>To learn more about Application Auto Scaling, including information about granting IAM users required
 *       permissions for Application Auto Scaling actions, see the <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html">Application Auto Scaling User
 *         Guide</a>.</p>
 */
class ApplicationAutoScalingClient extends smithy_client_1.Client {
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
exports.ApplicationAutoScalingClient = ApplicationAutoScalingClient;
//# sourceMappingURL=ApplicationAutoScalingClient.js.map
