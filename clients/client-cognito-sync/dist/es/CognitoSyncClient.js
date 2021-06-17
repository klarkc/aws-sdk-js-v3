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
 * <fullname>Amazon Cognito Sync</fullname>
 *       <p>Amazon Cognito Sync provides an AWS service and client library that enable cross-device syncing of
 *          application-related user data. High-level client libraries are available for both iOS and
 *          Android. You can use these libraries to persist data locally so that it's available even if
 *          the device is offline. Developer credentials don't need to be stored on the mobile device
 *          to access the service. You can use Amazon Cognito to obtain a normalized user ID and
 *          credentials. User data is persisted in a dataset that can store up to 1 MB of key-value
 *          pairs, and you can have up to 20 datasets per user identity.</p>
 *       <p>With Amazon Cognito Sync, the data stored for each identity is accessible only to
 *          credentials assigned to that identity. In order to use the Cognito Sync service, you need
 *          to make API calls using credentials retrieved with <a href="http://docs.aws.amazon.com/cognitoidentity/latest/APIReference/Welcome.html">Amazon Cognito Identity service</a>.</p>
 *       <p>If you want to use Cognito Sync in an Android or iOS application, you will probably want to
 *          make API calls via the AWS Mobile SDK. To learn more, see the <a href="http://docs.aws.amazon.com/mobile/sdkforandroid/developerguide/cognito-sync.html">Developer Guide for Android</a> and the <a href="http://docs.aws.amazon.com/mobile/sdkforios/developerguide/cognito-sync.html">Developer Guide for iOS</a>.</p>
 */
var CognitoSyncClient = /** @class */ (function (_super) {
    __extends(CognitoSyncClient, _super);
    function CognitoSyncClient(configuration) {
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
    CognitoSyncClient.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return CognitoSyncClient;
}(__Client));
export { CognitoSyncClient };
//# sourceMappingURL=CognitoSyncClient.js.map