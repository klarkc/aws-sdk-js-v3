import { __extends } from "tslib";
import { MarketplaceMeteringClient } from "./MarketplaceMeteringClient";
import { BatchMeterUsageCommand, } from "./commands/BatchMeterUsageCommand";
import { MeterUsageCommand } from "./commands/MeterUsageCommand";
import { RegisterUsageCommand, } from "./commands/RegisterUsageCommand";
import { ResolveCustomerCommand, } from "./commands/ResolveCustomerCommand";
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
var MarketplaceMetering = /** @class */ (function (_super) {
    __extends(MarketplaceMetering, _super);
    function MarketplaceMetering() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarketplaceMetering.prototype.batchMeterUsage = function (args, optionsOrCb, cb) {
        var command = new BatchMeterUsageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MarketplaceMetering.prototype.meterUsage = function (args, optionsOrCb, cb) {
        var command = new MeterUsageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MarketplaceMetering.prototype.registerUsage = function (args, optionsOrCb, cb) {
        var command = new RegisterUsageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    MarketplaceMetering.prototype.resolveCustomer = function (args, optionsOrCb, cb) {
        var command = new ResolveCustomerCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return MarketplaceMetering;
}(MarketplaceMeteringClient));
export { MarketplaceMetering };
//# sourceMappingURL=MarketplaceMetering.js.map