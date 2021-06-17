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
 * <p>AWS Transfer Family is a fully managed service that enables the transfer of files over the
 *       File Transfer Protocol (FTP), File Transfer Protocol over SSL (FTPS), or Secure Shell (SSH)
 *       File Transfer Protocol (SFTP) directly into and out of Amazon Simple Storage Service (Amazon
 *       S3). AWS helps you seamlessly migrate your file transfer workflows to AWS Transfer Family by
 *       integrating with existing authentication systems, and providing DNS routing with Amazon Route
 *       53 so nothing changes for your customers and partners, or their applications. With your data
 *       in Amazon S3, you can use it with AWS services for processing, analytics, machine learning,
 *       and archiving. Getting started with AWS Transfer Family is easy since there is no
 *       infrastructure to buy and set up.</p>
 */
var TransferClient = /** @class */ (function (_super) {
    __extends(TransferClient, _super);
    function TransferClient(configuration) {
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
    TransferClient.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return TransferClient;
}(__Client));
export { TransferClient };
//# sourceMappingURL=TransferClient.js.map