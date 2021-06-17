import { __extends } from "tslib";
import { CostAndUsageReportServiceClient } from "./CostAndUsageReportServiceClient";
import { DeleteReportDefinitionCommand, } from "./commands/DeleteReportDefinitionCommand";
import { DescribeReportDefinitionsCommand, } from "./commands/DescribeReportDefinitionsCommand";
import { ModifyReportDefinitionCommand, } from "./commands/ModifyReportDefinitionCommand";
import { PutReportDefinitionCommand, } from "./commands/PutReportDefinitionCommand";
/**
 * <p>The AWS Cost and Usage Report API enables you to programmatically create, query, and delete
 *         AWS Cost and Usage report definitions.</p>
 *          <p>AWS Cost and Usage reports track the monthly AWS costs and usage
 *    associated with your AWS account.
 *
 *         The report contains line items for each unique combination of AWS product,
 *         usage type, and operation that your AWS account uses.
 *
 *         You can configure the AWS Cost and Usage report to show only the data that you want, using the
 *         AWS Cost and Usage API.</p>
 *
 *          <p>Service Endpoint</p>
 *          <p>The AWS Cost and Usage Report API provides the following endpoint:</p>
 *          <ul>
 *             <li>
 *                <p>cur.us-east-1.amazonaws.com</p>
 *             </li>
 *          </ul>
 */
var CostAndUsageReportService = /** @class */ (function (_super) {
    __extends(CostAndUsageReportService, _super);
    function CostAndUsageReportService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CostAndUsageReportService.prototype.deleteReportDefinition = function (args, optionsOrCb, cb) {
        var command = new DeleteReportDefinitionCommand(args);
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
    CostAndUsageReportService.prototype.describeReportDefinitions = function (args, optionsOrCb, cb) {
        var command = new DescribeReportDefinitionsCommand(args);
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
    CostAndUsageReportService.prototype.modifyReportDefinition = function (args, optionsOrCb, cb) {
        var command = new ModifyReportDefinitionCommand(args);
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
    CostAndUsageReportService.prototype.putReportDefinition = function (args, optionsOrCb, cb) {
        var command = new PutReportDefinitionCommand(args);
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
    return CostAndUsageReportService;
}(CostAndUsageReportServiceClient));
export { CostAndUsageReportService };
//# sourceMappingURL=CostAndUsageReportService.js.map