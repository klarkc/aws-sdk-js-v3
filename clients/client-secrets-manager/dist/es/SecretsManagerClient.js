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
 * <fullname>AWS Secrets Manager API Reference</fullname>
 *          <p>AWS Secrets Manager provides a service to enable you to store, manage, and retrieve, secrets.</p>
 *
 *          <p>This guide provides descriptions of the Secrets Manager API. For more information about using this
 *       service, see the <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/introduction.html">AWS Secrets Manager User Guide</a>.</p>
 *
 *          <p>
 *             <b>API Version</b>
 *          </p>
 *
 *          <p>This version of the Secrets Manager API Reference documents the Secrets Manager API version 2017-10-17.</p>
 *          <note>
 *             <p>As an alternative to using the API, you can use one of the AWS SDKs, which consist of
 *         libraries and sample code for various programming languages and platforms such as Java,
 *         Ruby, .NET, iOS, and Android. The SDKs provide a convenient way to create programmatic
 *         access to AWS Secrets Manager. For example, the SDKs provide cryptographically signing requests,
 *         managing errors, and retrying requests automatically. For more information about the AWS
 *         SDKs, including downloading and installing them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          </note>
 *          <p>We recommend you use the AWS SDKs to make programmatic API calls to Secrets Manager. However, you
 *       also can use the Secrets Manager HTTP Query API to make direct calls to the Secrets Manager web service. To learn
 *       more about the Secrets Manager HTTP Query API, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/query-requests.html">Making Query Requests</a> in the
 *         <i>AWS Secrets Manager User Guide</i>. </p>
 *          <p>Secrets Manager API supports GET and POST requests for all actions, and doesn't require you to use
 *       GET for some actions and POST for others. However, GET requests are subject to the limitation
 *       size of a URL. Therefore, for operations that require larger sizes, use a POST request.</p>
 *
 *
 *
 *
 *
 *
 *
 *          <p>
 *             <b>Support and Feedback for AWS Secrets Manager</b>
 *          </p>
 *
 *          <p>We welcome your feedback. Send your comments to <a href="mailto:awssecretsmanager-feedback@amazon.com">awssecretsmanager-feedback@amazon.com</a>, or post your feedback and questions in the <a href="http://forums.aws.amazon.com/forum.jspa?forumID=296">AWS Secrets Manager Discussion Forum</a>. For more
 *       information about the AWS Discussion Forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums
 *         Help</a>.</p>
 *
 *          <p>
 *             <b>How examples are presented</b>
 *          </p>
 *
 *          <p>The JSON that AWS Secrets Manager expects as your request parameters and the service returns as a
 *       response to HTTP query requests contain single, long strings without line breaks or white
 *       space formatting. The JSON shown in the examples displays the code formatted with both line
 *       breaks and white space to improve readability. When example input parameters can also cause
 *       long strings extending beyond the screen, you can insert line breaks to enhance readability.
 *       You should always submit the input as a single JSON text string.</p>
 *
 *
 *          <p>
 *             <b>Logging API Requests</b>
 *          </p>
 *          <p>AWS Secrets Manager supports AWS CloudTrail, a service that records AWS API calls for your AWS
 *       account and delivers log files to an Amazon S3 bucket. By using information that's collected
 *       by AWS CloudTrail, you can determine the requests successfully made to Secrets Manager, who made the
 *       request, when it was made, and so on. For more about AWS Secrets Manager and support for AWS
 *       CloudTrail, see <a href="http://docs.aws.amazon.com/secretsmanager/latest/userguide/monitoring.html#monitoring_cloudtrail">Logging
 *         AWS Secrets Manager Events with AWS CloudTrail</a> in the <i>AWS Secrets Manager User Guide</i>.
 *       To learn more about CloudTrail, including enabling it and find your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">AWS CloudTrail User Guide</a>.</p>
 */
var SecretsManagerClient = /** @class */ (function (_super) {
    __extends(SecretsManagerClient, _super);
    function SecretsManagerClient(configuration) {
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
    SecretsManagerClient.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return SecretsManagerClient;
}(__Client));
export { SecretsManagerClient };
//# sourceMappingURL=SecretsManagerClient.js.map