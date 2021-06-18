"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppflowClient = void 0;
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
 * <p>Welcome to the Amazon AppFlow API reference. This guide is for developers who need detailed information about the Amazon AppFlow API operations, data types, and errors. </p>
 *
 *          <p>Amazon AppFlow is a fully managed integration service that enables you to securely transfer data between software as a service (SaaS) applications like Salesforce, Marketo, Slack, and ServiceNow, and AWS services like Amazon S3 and Amazon Redshift. </p>
 *
 *
 *
 *          <p>Use the following links to get started on the Amazon AppFlow API:</p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all Amazon AppFlow API operations.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Types.html">Data types</a>: An alphabetical list of all Amazon AppFlow data types.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all Query operations can use.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonErrors.html">Common errors</a>: Client and server errors that all operations can return.</p>
 *             </li>
 *          </ul>
 *
 *          <p>If you're new to Amazon AppFlow, we recommend that you review the <a href="https://docs.aws.amazon.com/appflow/latest/userguide/what-is-appflow.html">Amazon AppFlow User Guide</a>.</p>
 *          <p>Amazon AppFlow API users can use vendor-specific mechanisms for OAuth, and include applicable OAuth attributes (such as <code>auth-code</code> and <code>redirecturi</code>) with the connector-specific <code>ConnectorProfileProperties</code> when creating a new connector profile using Amazon AppFlow API operations. For example, Salesforce users can refer to the <a href="https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm">
 *                <i>Authorize Apps with OAuth</i>
 *             </a> documentation.</p>
 */
class AppflowClient extends smithy_client_1.Client {
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
exports.AppflowClient = AppflowClient;
//# sourceMappingURL=AppflowClient.js.map
