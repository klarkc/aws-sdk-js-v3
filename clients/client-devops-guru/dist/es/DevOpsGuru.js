import { __extends } from "tslib";
import { DevOpsGuruClient } from "./DevOpsGuruClient";
import { AddNotificationChannelCommand, } from "./commands/AddNotificationChannelCommand";
import { DescribeAccountHealthCommand, } from "./commands/DescribeAccountHealthCommand";
import { DescribeAccountOverviewCommand, } from "./commands/DescribeAccountOverviewCommand";
import { DescribeAnomalyCommand, } from "./commands/DescribeAnomalyCommand";
import { DescribeFeedbackCommand, } from "./commands/DescribeFeedbackCommand";
import { DescribeInsightCommand, } from "./commands/DescribeInsightCommand";
import { DescribeResourceCollectionHealthCommand, } from "./commands/DescribeResourceCollectionHealthCommand";
import { DescribeServiceIntegrationCommand, } from "./commands/DescribeServiceIntegrationCommand";
import { GetCostEstimationCommand, } from "./commands/GetCostEstimationCommand";
import { GetResourceCollectionCommand, } from "./commands/GetResourceCollectionCommand";
import { ListAnomaliesForInsightCommand, } from "./commands/ListAnomaliesForInsightCommand";
import { ListEventsCommand } from "./commands/ListEventsCommand";
import { ListInsightsCommand, } from "./commands/ListInsightsCommand";
import { ListNotificationChannelsCommand, } from "./commands/ListNotificationChannelsCommand";
import { ListRecommendationsCommand, } from "./commands/ListRecommendationsCommand";
import { PutFeedbackCommand } from "./commands/PutFeedbackCommand";
import { RemoveNotificationChannelCommand, } from "./commands/RemoveNotificationChannelCommand";
import { SearchInsightsCommand, } from "./commands/SearchInsightsCommand";
import { StartCostEstimationCommand, } from "./commands/StartCostEstimationCommand";
import { UpdateResourceCollectionCommand, } from "./commands/UpdateResourceCollectionCommand";
import { UpdateServiceIntegrationCommand, } from "./commands/UpdateServiceIntegrationCommand";
/**
 * <p> Amazon DevOps Guru is a fully managed service that helps you identify anomalous behavior in business
 * 			critical operational applications. You specify the AWS resources that you want DevOps Guru to cover,
 * 			then the Amazon CloudWatch metrics and AWS CloudTrail events related to those resources are analyzed. When
 * 			anomalous behavior is detected, DevOps Guru creates an <i>insight</i> that includes
 * 			recommendations, related events, and related metrics that can help you improve your
 * 			operational applications. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html">What is Amazon DevOps Guru</a>. </p>
 *
 * 		       <p>
 * 			You can specify 1 or 2 Amazon Simple Notification Service topics so you are notified every time a new insight is created. You can also enable DevOps Guru to generate
 * 			an OpsItem in AWS Systems Manager for each insight to help you manage and track your work addressing insights.
 * 		</p>
 *
 * 		       <p>
 * 			To learn about the DevOps Guru workflow, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html#how-it-works">How DevOps Guru works</a>. To
 * 			learn about DevOps Guru concepts, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/concepts.html">Concepts in DevOps Guru</a>.
 * 		</p>
 */
var DevOpsGuru = /** @class */ (function (_super) {
    __extends(DevOpsGuru, _super);
    function DevOpsGuru() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DevOpsGuru.prototype.addNotificationChannel = function (args, optionsOrCb, cb) {
        var command = new AddNotificationChannelCommand(args);
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
    DevOpsGuru.prototype.describeAccountHealth = function (args, optionsOrCb, cb) {
        var command = new DescribeAccountHealthCommand(args);
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
    DevOpsGuru.prototype.describeAccountOverview = function (args, optionsOrCb, cb) {
        var command = new DescribeAccountOverviewCommand(args);
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
    DevOpsGuru.prototype.describeAnomaly = function (args, optionsOrCb, cb) {
        var command = new DescribeAnomalyCommand(args);
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
    DevOpsGuru.prototype.describeFeedback = function (args, optionsOrCb, cb) {
        var command = new DescribeFeedbackCommand(args);
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
    DevOpsGuru.prototype.describeInsight = function (args, optionsOrCb, cb) {
        var command = new DescribeInsightCommand(args);
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
    DevOpsGuru.prototype.describeResourceCollectionHealth = function (args, optionsOrCb, cb) {
        var command = new DescribeResourceCollectionHealthCommand(args);
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
    DevOpsGuru.prototype.describeServiceIntegration = function (args, optionsOrCb, cb) {
        var command = new DescribeServiceIntegrationCommand(args);
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
    DevOpsGuru.prototype.getCostEstimation = function (args, optionsOrCb, cb) {
        var command = new GetCostEstimationCommand(args);
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
    DevOpsGuru.prototype.getResourceCollection = function (args, optionsOrCb, cb) {
        var command = new GetResourceCollectionCommand(args);
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
    DevOpsGuru.prototype.listAnomaliesForInsight = function (args, optionsOrCb, cb) {
        var command = new ListAnomaliesForInsightCommand(args);
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
    DevOpsGuru.prototype.listEvents = function (args, optionsOrCb, cb) {
        var command = new ListEventsCommand(args);
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
    DevOpsGuru.prototype.listInsights = function (args, optionsOrCb, cb) {
        var command = new ListInsightsCommand(args);
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
    DevOpsGuru.prototype.listNotificationChannels = function (args, optionsOrCb, cb) {
        var command = new ListNotificationChannelsCommand(args);
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
    DevOpsGuru.prototype.listRecommendations = function (args, optionsOrCb, cb) {
        var command = new ListRecommendationsCommand(args);
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
    DevOpsGuru.prototype.putFeedback = function (args, optionsOrCb, cb) {
        var command = new PutFeedbackCommand(args);
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
    DevOpsGuru.prototype.removeNotificationChannel = function (args, optionsOrCb, cb) {
        var command = new RemoveNotificationChannelCommand(args);
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
    DevOpsGuru.prototype.searchInsights = function (args, optionsOrCb, cb) {
        var command = new SearchInsightsCommand(args);
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
    DevOpsGuru.prototype.startCostEstimation = function (args, optionsOrCb, cb) {
        var command = new StartCostEstimationCommand(args);
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
    DevOpsGuru.prototype.updateResourceCollection = function (args, optionsOrCb, cb) {
        var command = new UpdateResourceCollectionCommand(args);
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
    DevOpsGuru.prototype.updateServiceIntegration = function (args, optionsOrCb, cb) {
        var command = new UpdateServiceIntegrationCommand(args);
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
    return DevOpsGuru;
}(DevOpsGuruClient));
export { DevOpsGuru };
//# sourceMappingURL=DevOpsGuru.js.map