"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevOpsGuru = void 0;
const DevOpsGuruClient_1 = require("./DevOpsGuruClient");
const AddNotificationChannelCommand_1 = require("./commands/AddNotificationChannelCommand");
const DescribeAccountHealthCommand_1 = require("./commands/DescribeAccountHealthCommand");
const DescribeAccountOverviewCommand_1 = require("./commands/DescribeAccountOverviewCommand");
const DescribeAnomalyCommand_1 = require("./commands/DescribeAnomalyCommand");
const DescribeFeedbackCommand_1 = require("./commands/DescribeFeedbackCommand");
const DescribeInsightCommand_1 = require("./commands/DescribeInsightCommand");
const DescribeResourceCollectionHealthCommand_1 = require("./commands/DescribeResourceCollectionHealthCommand");
const DescribeServiceIntegrationCommand_1 = require("./commands/DescribeServiceIntegrationCommand");
const GetCostEstimationCommand_1 = require("./commands/GetCostEstimationCommand");
const GetResourceCollectionCommand_1 = require("./commands/GetResourceCollectionCommand");
const ListAnomaliesForInsightCommand_1 = require("./commands/ListAnomaliesForInsightCommand");
const ListEventsCommand_1 = require("./commands/ListEventsCommand");
const ListInsightsCommand_1 = require("./commands/ListInsightsCommand");
const ListNotificationChannelsCommand_1 = require("./commands/ListNotificationChannelsCommand");
const ListRecommendationsCommand_1 = require("./commands/ListRecommendationsCommand");
const PutFeedbackCommand_1 = require("./commands/PutFeedbackCommand");
const RemoveNotificationChannelCommand_1 = require("./commands/RemoveNotificationChannelCommand");
const SearchInsightsCommand_1 = require("./commands/SearchInsightsCommand");
const StartCostEstimationCommand_1 = require("./commands/StartCostEstimationCommand");
const UpdateResourceCollectionCommand_1 = require("./commands/UpdateResourceCollectionCommand");
const UpdateServiceIntegrationCommand_1 = require("./commands/UpdateServiceIntegrationCommand");
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
class DevOpsGuru extends DevOpsGuruClient_1.DevOpsGuruClient {
    addNotificationChannel(args, optionsOrCb, cb) {
        const command = new AddNotificationChannelCommand_1.AddNotificationChannelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAccountHealth(args, optionsOrCb, cb) {
        const command = new DescribeAccountHealthCommand_1.DescribeAccountHealthCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAccountOverview(args, optionsOrCb, cb) {
        const command = new DescribeAccountOverviewCommand_1.DescribeAccountOverviewCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAnomaly(args, optionsOrCb, cb) {
        const command = new DescribeAnomalyCommand_1.DescribeAnomalyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFeedback(args, optionsOrCb, cb) {
        const command = new DescribeFeedbackCommand_1.DescribeFeedbackCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeInsight(args, optionsOrCb, cb) {
        const command = new DescribeInsightCommand_1.DescribeInsightCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeResourceCollectionHealth(args, optionsOrCb, cb) {
        const command = new DescribeResourceCollectionHealthCommand_1.DescribeResourceCollectionHealthCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeServiceIntegration(args, optionsOrCb, cb) {
        const command = new DescribeServiceIntegrationCommand_1.DescribeServiceIntegrationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getCostEstimation(args, optionsOrCb, cb) {
        const command = new GetCostEstimationCommand_1.GetCostEstimationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getResourceCollection(args, optionsOrCb, cb) {
        const command = new GetResourceCollectionCommand_1.GetResourceCollectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAnomaliesForInsight(args, optionsOrCb, cb) {
        const command = new ListAnomaliesForInsightCommand_1.ListAnomaliesForInsightCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listEvents(args, optionsOrCb, cb) {
        const command = new ListEventsCommand_1.ListEventsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listInsights(args, optionsOrCb, cb) {
        const command = new ListInsightsCommand_1.ListInsightsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listNotificationChannels(args, optionsOrCb, cb) {
        const command = new ListNotificationChannelsCommand_1.ListNotificationChannelsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listRecommendations(args, optionsOrCb, cb) {
        const command = new ListRecommendationsCommand_1.ListRecommendationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putFeedback(args, optionsOrCb, cb) {
        const command = new PutFeedbackCommand_1.PutFeedbackCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    removeNotificationChannel(args, optionsOrCb, cb) {
        const command = new RemoveNotificationChannelCommand_1.RemoveNotificationChannelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    searchInsights(args, optionsOrCb, cb) {
        const command = new SearchInsightsCommand_1.SearchInsightsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startCostEstimation(args, optionsOrCb, cb) {
        const command = new StartCostEstimationCommand_1.StartCostEstimationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateResourceCollection(args, optionsOrCb, cb) {
        const command = new UpdateResourceCollectionCommand_1.UpdateResourceCollectionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateServiceIntegration(args, optionsOrCb, cb) {
        const command = new UpdateServiceIntegrationCommand_1.UpdateServiceIntegrationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.DevOpsGuru = DevOpsGuru;
//# sourceMappingURL=DevOpsGuru.js.map