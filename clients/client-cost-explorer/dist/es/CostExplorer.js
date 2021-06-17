import { __extends } from "tslib";
import { CostExplorerClient } from "./CostExplorerClient";
import { CreateAnomalyMonitorCommand, } from "./commands/CreateAnomalyMonitorCommand";
import { CreateAnomalySubscriptionCommand, } from "./commands/CreateAnomalySubscriptionCommand";
import { CreateCostCategoryDefinitionCommand, } from "./commands/CreateCostCategoryDefinitionCommand";
import { DeleteAnomalyMonitorCommand, } from "./commands/DeleteAnomalyMonitorCommand";
import { DeleteAnomalySubscriptionCommand, } from "./commands/DeleteAnomalySubscriptionCommand";
import { DeleteCostCategoryDefinitionCommand, } from "./commands/DeleteCostCategoryDefinitionCommand";
import { DescribeCostCategoryDefinitionCommand, } from "./commands/DescribeCostCategoryDefinitionCommand";
import { GetAnomaliesCommand, } from "./commands/GetAnomaliesCommand";
import { GetAnomalyMonitorsCommand, } from "./commands/GetAnomalyMonitorsCommand";
import { GetAnomalySubscriptionsCommand, } from "./commands/GetAnomalySubscriptionsCommand";
import { GetCostAndUsageCommand, } from "./commands/GetCostAndUsageCommand";
import { GetCostAndUsageWithResourcesCommand, } from "./commands/GetCostAndUsageWithResourcesCommand";
import { GetCostCategoriesCommand, } from "./commands/GetCostCategoriesCommand";
import { GetCostForecastCommand, } from "./commands/GetCostForecastCommand";
import { GetDimensionValuesCommand, } from "./commands/GetDimensionValuesCommand";
import { GetReservationCoverageCommand, } from "./commands/GetReservationCoverageCommand";
import { GetReservationPurchaseRecommendationCommand, } from "./commands/GetReservationPurchaseRecommendationCommand";
import { GetReservationUtilizationCommand, } from "./commands/GetReservationUtilizationCommand";
import { GetRightsizingRecommendationCommand, } from "./commands/GetRightsizingRecommendationCommand";
import { GetSavingsPlansCoverageCommand, } from "./commands/GetSavingsPlansCoverageCommand";
import { GetSavingsPlansPurchaseRecommendationCommand, } from "./commands/GetSavingsPlansPurchaseRecommendationCommand";
import { GetSavingsPlansUtilizationCommand, } from "./commands/GetSavingsPlansUtilizationCommand";
import { GetSavingsPlansUtilizationDetailsCommand, } from "./commands/GetSavingsPlansUtilizationDetailsCommand";
import { GetTagsCommand } from "./commands/GetTagsCommand";
import { GetUsageForecastCommand, } from "./commands/GetUsageForecastCommand";
import { ListCostCategoryDefinitionsCommand, } from "./commands/ListCostCategoryDefinitionsCommand";
import { ProvideAnomalyFeedbackCommand, } from "./commands/ProvideAnomalyFeedbackCommand";
import { UpdateAnomalyMonitorCommand, } from "./commands/UpdateAnomalyMonitorCommand";
import { UpdateAnomalySubscriptionCommand, } from "./commands/UpdateAnomalySubscriptionCommand";
import { UpdateCostCategoryDefinitionCommand, } from "./commands/UpdateCostCategoryDefinitionCommand";
/**
 * <p>The Cost Explorer API enables you to programmatically query your cost and usage data. You can query for aggregated data
 * 			such as total monthly costs or total daily usage. You can also query for granular data, such as the number of
 * 			daily write operations for Amazon DynamoDB database tables in your production environment. </p>
 * 		       <p>Service Endpoint</p>
 * 		       <p>The Cost Explorer API provides the following endpoint:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>
 *                   <code>https://ce.us-east-1.amazonaws.com</code>
 *                </p>
 * 			         </li>
 *          </ul>
 * 		       <p>For information about costs associated with the Cost Explorer API, see
 * 			<a href="http://aws.amazon.com/aws-cost-management/pricing/">AWS Cost Management Pricing</a>.</p>
 */
var CostExplorer = /** @class */ (function (_super) {
    __extends(CostExplorer, _super);
    function CostExplorer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CostExplorer.prototype.createAnomalyMonitor = function (args, optionsOrCb, cb) {
        var command = new CreateAnomalyMonitorCommand(args);
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
    CostExplorer.prototype.createAnomalySubscription = function (args, optionsOrCb, cb) {
        var command = new CreateAnomalySubscriptionCommand(args);
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
    CostExplorer.prototype.createCostCategoryDefinition = function (args, optionsOrCb, cb) {
        var command = new CreateCostCategoryDefinitionCommand(args);
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
    CostExplorer.prototype.deleteAnomalyMonitor = function (args, optionsOrCb, cb) {
        var command = new DeleteAnomalyMonitorCommand(args);
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
    CostExplorer.prototype.deleteAnomalySubscription = function (args, optionsOrCb, cb) {
        var command = new DeleteAnomalySubscriptionCommand(args);
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
    CostExplorer.prototype.deleteCostCategoryDefinition = function (args, optionsOrCb, cb) {
        var command = new DeleteCostCategoryDefinitionCommand(args);
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
    CostExplorer.prototype.describeCostCategoryDefinition = function (args, optionsOrCb, cb) {
        var command = new DescribeCostCategoryDefinitionCommand(args);
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
    CostExplorer.prototype.getAnomalies = function (args, optionsOrCb, cb) {
        var command = new GetAnomaliesCommand(args);
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
    CostExplorer.prototype.getAnomalyMonitors = function (args, optionsOrCb, cb) {
        var command = new GetAnomalyMonitorsCommand(args);
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
    CostExplorer.prototype.getAnomalySubscriptions = function (args, optionsOrCb, cb) {
        var command = new GetAnomalySubscriptionsCommand(args);
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
    CostExplorer.prototype.getCostAndUsage = function (args, optionsOrCb, cb) {
        var command = new GetCostAndUsageCommand(args);
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
    CostExplorer.prototype.getCostAndUsageWithResources = function (args, optionsOrCb, cb) {
        var command = new GetCostAndUsageWithResourcesCommand(args);
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
    CostExplorer.prototype.getCostCategories = function (args, optionsOrCb, cb) {
        var command = new GetCostCategoriesCommand(args);
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
    CostExplorer.prototype.getCostForecast = function (args, optionsOrCb, cb) {
        var command = new GetCostForecastCommand(args);
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
    CostExplorer.prototype.getDimensionValues = function (args, optionsOrCb, cb) {
        var command = new GetDimensionValuesCommand(args);
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
    CostExplorer.prototype.getReservationCoverage = function (args, optionsOrCb, cb) {
        var command = new GetReservationCoverageCommand(args);
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
    CostExplorer.prototype.getReservationPurchaseRecommendation = function (args, optionsOrCb, cb) {
        var command = new GetReservationPurchaseRecommendationCommand(args);
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
    CostExplorer.prototype.getReservationUtilization = function (args, optionsOrCb, cb) {
        var command = new GetReservationUtilizationCommand(args);
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
    CostExplorer.prototype.getRightsizingRecommendation = function (args, optionsOrCb, cb) {
        var command = new GetRightsizingRecommendationCommand(args);
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
    CostExplorer.prototype.getSavingsPlansCoverage = function (args, optionsOrCb, cb) {
        var command = new GetSavingsPlansCoverageCommand(args);
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
    CostExplorer.prototype.getSavingsPlansPurchaseRecommendation = function (args, optionsOrCb, cb) {
        var command = new GetSavingsPlansPurchaseRecommendationCommand(args);
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
    CostExplorer.prototype.getSavingsPlansUtilization = function (args, optionsOrCb, cb) {
        var command = new GetSavingsPlansUtilizationCommand(args);
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
    CostExplorer.prototype.getSavingsPlansUtilizationDetails = function (args, optionsOrCb, cb) {
        var command = new GetSavingsPlansUtilizationDetailsCommand(args);
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
    CostExplorer.prototype.getTags = function (args, optionsOrCb, cb) {
        var command = new GetTagsCommand(args);
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
    CostExplorer.prototype.getUsageForecast = function (args, optionsOrCb, cb) {
        var command = new GetUsageForecastCommand(args);
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
    CostExplorer.prototype.listCostCategoryDefinitions = function (args, optionsOrCb, cb) {
        var command = new ListCostCategoryDefinitionsCommand(args);
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
    CostExplorer.prototype.provideAnomalyFeedback = function (args, optionsOrCb, cb) {
        var command = new ProvideAnomalyFeedbackCommand(args);
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
    CostExplorer.prototype.updateAnomalyMonitor = function (args, optionsOrCb, cb) {
        var command = new UpdateAnomalyMonitorCommand(args);
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
    CostExplorer.prototype.updateAnomalySubscription = function (args, optionsOrCb, cb) {
        var command = new UpdateAnomalySubscriptionCommand(args);
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
    CostExplorer.prototype.updateCostCategoryDefinition = function (args, optionsOrCb, cb) {
        var command = new UpdateCostCategoryDefinitionCommand(args);
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
    return CostExplorer;
}(CostExplorerClient));
export { CostExplorer };
//# sourceMappingURL=CostExplorer.js.map