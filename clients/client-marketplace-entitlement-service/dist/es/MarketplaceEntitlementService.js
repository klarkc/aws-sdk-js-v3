import { __extends } from "tslib";
import { MarketplaceEntitlementServiceClient } from "./MarketplaceEntitlementServiceClient";
import { GetEntitlementsCommand, } from "./commands/GetEntitlementsCommand";
/**
 * <fullname>AWS Marketplace Entitlement Service</fullname>
 *          <p>This reference provides descriptions of the AWS Marketplace Entitlement Service
 *    API.</p>
 *          <p>AWS Marketplace Entitlement Service is used to determine the entitlement of a customer to
 *       a given product. An entitlement represents capacity in a product owned by the customer. For
 *       example, a customer might own some number of users or seats in an SaaS application or some
 *       amount of data capacity in a multi-tenant database.</p>
 *          <p>
 *             <b>Getting Entitlement Records</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>GetEntitlements</i>- Gets the entitlements for a Marketplace
 *      product.</p>
 *             </li>
 *          </ul>
 */
var MarketplaceEntitlementService = /** @class */ (function (_super) {
    __extends(MarketplaceEntitlementService, _super);
    function MarketplaceEntitlementService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarketplaceEntitlementService.prototype.getEntitlements = function (args, optionsOrCb, cb) {
        var command = new GetEntitlementsCommand(args);
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
    return MarketplaceEntitlementService;
}(MarketplaceEntitlementServiceClient));
export { MarketplaceEntitlementService };
//# sourceMappingURL=MarketplaceEntitlementService.js.map