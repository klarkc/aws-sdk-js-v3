import { __extends } from "tslib";
import { MarketplaceCommerceAnalyticsClient } from "./MarketplaceCommerceAnalyticsClient";
import { GenerateDataSetCommand, } from "./commands/GenerateDataSetCommand";
import { StartSupportDataExportCommand, } from "./commands/StartSupportDataExportCommand";
/**
 * Provides AWS Marketplace business intelligence data on-demand.
 */
var MarketplaceCommerceAnalytics = /** @class */ (function (_super) {
    __extends(MarketplaceCommerceAnalytics, _super);
    function MarketplaceCommerceAnalytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarketplaceCommerceAnalytics.prototype.generateDataSet = function (args, optionsOrCb, cb) {
        var command = new GenerateDataSetCommand(args);
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
    MarketplaceCommerceAnalytics.prototype.startSupportDataExport = function (args, optionsOrCb, cb) {
        var command = new StartSupportDataExportCommand(args);
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
    return MarketplaceCommerceAnalytics;
}(MarketplaceCommerceAnalyticsClient));
export { MarketplaceCommerceAnalytics };
//# sourceMappingURL=MarketplaceCommerceAnalytics.js.map