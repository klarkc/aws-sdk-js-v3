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
 * <fullname>AWS Marketplace Metering Service</fullname>
 *         <p>This reference provides descriptions of the low-level AWS Marketplace Metering
 *             Service API.</p>
 *         <p>AWS Marketplace sellers can use this API to submit usage data for custom usage
 *             dimensions.</p>
 *         <p>For information on the permissions you need to use this API, see
 *             <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/iam-user-policy-for-aws-marketplace-actions.html">AWS Marketing metering and entitlement API permissions</a> in the <i>AWS Marketplace Seller Guide.</i>
 *          </p>
 *         <p>
 *             <b>Submitting Metering Records</b>
 *         </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <i>MeterUsage</i>- Submits the metering record for a Marketplace
 *                     product. MeterUsage is called from an EC2 instance or a container running on EKS
 *                     or ECS.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <i>BatchMeterUsage</i>- Submits the metering record for a set of
 *                     customers. BatchMeterUsage is called from a software-as-a-service (SaaS)
 *                     application.</p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>Accepting New Customers</b>
 *         </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <i>ResolveCustomer</i>- Called by a SaaS application during the
 *                     registration process. When a buyer visits your website during the registration
 *                     process, the buyer submits a Registration Token through the browser. The
 *                     Registration Token is resolved through this API to obtain a CustomerIdentifier
 *                     and Product Code.</p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>Entitlement and Metering for Paid Container Products</b>
 *         </p>
 *         <ul>
 *             <li>
 *                 <p> Paid container software products sold through AWS Marketplace must
 *                     integrate with the AWS Marketplace Metering Service and call the RegisterUsage
 *                     operation for software entitlement and metering. Free and BYOL products for
 *                     Amazon ECS or Amazon EKS aren't required to call RegisterUsage, but you can do
 *                     so if you want to receive usage data in your seller reports. For more
 *                     information on using the RegisterUsage operation, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/container-based-products.html">Container-Based Products</a>. </p>
 *             </li>
 *          </ul>
 *         <p>BatchMeterUsage API calls are captured by AWS CloudTrail. You can use Cloudtrail to
 *             verify that the SaaS metering records that you sent are accurate by searching for
 *             records with the eventName of BatchMeterUsage. You can also use CloudTrail to audit
 *             records over time. For more information, see the <i>
 *                <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html">AWS CloudTrail User Guide</a>
 *             </i>.</p>
 */
var MarketplaceMeteringClient = /** @class */ (function (_super) {
    __extends(MarketplaceMeteringClient, _super);
    function MarketplaceMeteringClient(configuration) {
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
    MarketplaceMeteringClient.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return MarketplaceMeteringClient;
}(__Client));
export { MarketplaceMeteringClient };
//# sourceMappingURL=MarketplaceMeteringClient.js.map