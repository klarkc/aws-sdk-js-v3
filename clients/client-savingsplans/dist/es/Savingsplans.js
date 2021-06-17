import { __extends } from "tslib";
import { SavingsplansClient } from "./SavingsplansClient";
import { CreateSavingsPlanCommand, } from "./commands/CreateSavingsPlanCommand";
import { DeleteQueuedSavingsPlanCommand, } from "./commands/DeleteQueuedSavingsPlanCommand";
import { DescribeSavingsPlanRatesCommand, } from "./commands/DescribeSavingsPlanRatesCommand";
import { DescribeSavingsPlansCommand, } from "./commands/DescribeSavingsPlansCommand";
import { DescribeSavingsPlansOfferingRatesCommand, } from "./commands/DescribeSavingsPlansOfferingRatesCommand";
import { DescribeSavingsPlansOfferingsCommand, } from "./commands/DescribeSavingsPlansOfferingsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
/**
 * <p>Savings Plans are a pricing model that offer significant savings on AWS usage (for
 *         example, on Amazon EC2 instances). You commit to a consistent amount of usage, in USD
 *         per hour, for a term of 1 or 3 years, and receive a lower price for that usage. For
 *         more information, see the <a href="https://docs.aws.amazon.com/savingsplans/latest/userguide/">AWS Savings Plans User Guide</a>.</p>
 */
var Savingsplans = /** @class */ (function (_super) {
    __extends(Savingsplans, _super);
    function Savingsplans() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Savingsplans.prototype.createSavingsPlan = function (args, optionsOrCb, cb) {
        var command = new CreateSavingsPlanCommand(args);
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
    Savingsplans.prototype.deleteQueuedSavingsPlan = function (args, optionsOrCb, cb) {
        var command = new DeleteQueuedSavingsPlanCommand(args);
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
    Savingsplans.prototype.describeSavingsPlanRates = function (args, optionsOrCb, cb) {
        var command = new DescribeSavingsPlanRatesCommand(args);
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
    Savingsplans.prototype.describeSavingsPlans = function (args, optionsOrCb, cb) {
        var command = new DescribeSavingsPlansCommand(args);
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
    Savingsplans.prototype.describeSavingsPlansOfferingRates = function (args, optionsOrCb, cb) {
        var command = new DescribeSavingsPlansOfferingRatesCommand(args);
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
    Savingsplans.prototype.describeSavingsPlansOfferings = function (args, optionsOrCb, cb) {
        var command = new DescribeSavingsPlansOfferingsCommand(args);
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
    Savingsplans.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
        var command = new ListTagsForResourceCommand(args);
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
    Savingsplans.prototype.tagResource = function (args, optionsOrCb, cb) {
        var command = new TagResourceCommand(args);
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
    Savingsplans.prototype.untagResource = function (args, optionsOrCb, cb) {
        var command = new UntagResourceCommand(args);
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
    return Savingsplans;
}(SavingsplansClient));
export { Savingsplans };
//# sourceMappingURL=Savingsplans.js.map