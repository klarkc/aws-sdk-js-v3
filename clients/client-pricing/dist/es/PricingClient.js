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
 * <p>AWS Price List Service API (AWS Price List Service) is a centralized and convenient way to
 *          programmatically query Amazon Web Services for services, products, and pricing information. The AWS Price List Service
 *          uses standardized product attributes such as <code>Location</code>, <code>Storage
 *             Class</code>, and <code>Operating System</code>, and provides prices at the SKU
 *          level. You can use the AWS Price List Service to build cost control and scenario planning tools, reconcile
 *          billing data, forecast future spend for budgeting purposes, and provide cost benefit
 *          analysis that compare your internal workloads with AWS.</p>
 *          <p>Use <code>GetServices</code> without a service code to retrieve the service codes for all AWS services, then
 *          <code>GetServices</code> with a service code to retreive the attribute names for
 *          that service. After you have the service code and attribute names, you can use <code>GetAttributeValues</code>
 *          to see what values are available for an attribute. With the service code and an attribute name and value,
 *          you can use <code>GetProducts</code> to find specific products that you're interested in, such as
 *          an <code>AmazonEC2</code> instance, with a <code>Provisioned IOPS</code>
 *             <code>volumeType</code>.</p>
 *          <p>Service Endpoint</p>
 *          <p>AWS Price List Service API provides the following two endpoints:</p>
 *          <ul>
 *             <li>
 *                <p>https://api.pricing.us-east-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>https://api.pricing.ap-south-1.amazonaws.com</p>
 *             </li>
 *          </ul>
 */
var PricingClient = /** @class */ (function (_super) {
    __extends(PricingClient, _super);
    function PricingClient(configuration) {
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
    PricingClient.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return PricingClient;
}(__Client));
export { PricingClient };
//# sourceMappingURL=PricingClient.js.map