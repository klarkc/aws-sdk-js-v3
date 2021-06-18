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
 * <p>Amazon Athena is an interactive query service that lets you use standard SQL to
 *             analyze data directly in Amazon S3. You can point Athena at your data in Amazon S3 and
 *             run ad-hoc queries and get results in seconds. Athena is serverless, so there is no
 *             infrastructure to set up or manage. You pay only for the queries you run. Athena scales
 *             automatically—executing queries in parallel—so results are fast, even with large
 *             datasets and complex queries. For more information, see <a href="http://docs.aws.amazon.com/athena/latest/ug/what-is.html">What is Amazon
 *                 Athena</a> in the <i>Amazon Athena User Guide</i>.</p>
 *         <p>If you connect to Athena using the JDBC driver, use version 1.1.0 of the driver or
 *             later with the Amazon Athena API. Earlier version drivers do not support the API. For
 *             more information and to download the driver, see <a href="https://docs.aws.amazon.com/athena/latest/ug/connect-with-jdbc.html">Accessing
 *                 Amazon Athena with JDBC</a>.</p>
 *         <p>For code samples using the AWS SDK for Java, see <a href="https://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
 *                 Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
 */
var AthenaClient = /** @class */ (function (_super) {
  __extends(AthenaClient, _super);
  function AthenaClient(configuration) {
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
  AthenaClient.prototype.destroy = function () {
    _super.prototype.destroy.call(this);
  };
  return AthenaClient;
})(__Client);
export { AthenaClient };
//# sourceMappingURL=AthenaClient.js.map
