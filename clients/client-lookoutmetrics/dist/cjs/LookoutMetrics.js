"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LookoutMetrics = void 0;
const LookoutMetricsClient_1 = require("./LookoutMetricsClient");
const ActivateAnomalyDetectorCommand_1 = require("./commands/ActivateAnomalyDetectorCommand");
const BackTestAnomalyDetectorCommand_1 = require("./commands/BackTestAnomalyDetectorCommand");
const CreateAlertCommand_1 = require("./commands/CreateAlertCommand");
const CreateAnomalyDetectorCommand_1 = require("./commands/CreateAnomalyDetectorCommand");
const CreateMetricSetCommand_1 = require("./commands/CreateMetricSetCommand");
const DeleteAlertCommand_1 = require("./commands/DeleteAlertCommand");
const DeleteAnomalyDetectorCommand_1 = require("./commands/DeleteAnomalyDetectorCommand");
const DescribeAlertCommand_1 = require("./commands/DescribeAlertCommand");
const DescribeAnomalyDetectionExecutionsCommand_1 = require("./commands/DescribeAnomalyDetectionExecutionsCommand");
const DescribeAnomalyDetectorCommand_1 = require("./commands/DescribeAnomalyDetectorCommand");
const DescribeMetricSetCommand_1 = require("./commands/DescribeMetricSetCommand");
const GetAnomalyGroupCommand_1 = require("./commands/GetAnomalyGroupCommand");
const GetFeedbackCommand_1 = require("./commands/GetFeedbackCommand");
const GetSampleDataCommand_1 = require("./commands/GetSampleDataCommand");
const ListAlertsCommand_1 = require("./commands/ListAlertsCommand");
const ListAnomalyDetectorsCommand_1 = require("./commands/ListAnomalyDetectorsCommand");
const ListAnomalyGroupSummariesCommand_1 = require("./commands/ListAnomalyGroupSummariesCommand");
const ListAnomalyGroupTimeSeriesCommand_1 = require("./commands/ListAnomalyGroupTimeSeriesCommand");
const ListMetricSetsCommand_1 = require("./commands/ListMetricSetsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const PutFeedbackCommand_1 = require("./commands/PutFeedbackCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateAnomalyDetectorCommand_1 = require("./commands/UpdateAnomalyDetectorCommand");
const UpdateMetricSetCommand_1 = require("./commands/UpdateMetricSetCommand");
/**
 * <p>This is the <i>Amazon Lookout for Metrics API Reference</i>. For an introduction to the service
 *       with tutorials for getting started, visit <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev">Amazon
 *         Lookout for Metrics Developer Guide</a>.</p>
 */
class LookoutMetrics extends LookoutMetricsClient_1.LookoutMetricsClient {
    activateAnomalyDetector(args, optionsOrCb, cb) {
        const command = new ActivateAnomalyDetectorCommand_1.ActivateAnomalyDetectorCommand(args);
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
    backTestAnomalyDetector(args, optionsOrCb, cb) {
        const command = new BackTestAnomalyDetectorCommand_1.BackTestAnomalyDetectorCommand(args);
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
    createAlert(args, optionsOrCb, cb) {
        const command = new CreateAlertCommand_1.CreateAlertCommand(args);
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
    createAnomalyDetector(args, optionsOrCb, cb) {
        const command = new CreateAnomalyDetectorCommand_1.CreateAnomalyDetectorCommand(args);
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
    createMetricSet(args, optionsOrCb, cb) {
        const command = new CreateMetricSetCommand_1.CreateMetricSetCommand(args);
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
    deleteAlert(args, optionsOrCb, cb) {
        const command = new DeleteAlertCommand_1.DeleteAlertCommand(args);
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
    deleteAnomalyDetector(args, optionsOrCb, cb) {
        const command = new DeleteAnomalyDetectorCommand_1.DeleteAnomalyDetectorCommand(args);
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
    describeAlert(args, optionsOrCb, cb) {
        const command = new DescribeAlertCommand_1.DescribeAlertCommand(args);
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
    describeAnomalyDetectionExecutions(args, optionsOrCb, cb) {
        const command = new DescribeAnomalyDetectionExecutionsCommand_1.DescribeAnomalyDetectionExecutionsCommand(args);
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
    describeAnomalyDetector(args, optionsOrCb, cb) {
        const command = new DescribeAnomalyDetectorCommand_1.DescribeAnomalyDetectorCommand(args);
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
    describeMetricSet(args, optionsOrCb, cb) {
        const command = new DescribeMetricSetCommand_1.DescribeMetricSetCommand(args);
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
    getAnomalyGroup(args, optionsOrCb, cb) {
        const command = new GetAnomalyGroupCommand_1.GetAnomalyGroupCommand(args);
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
    getFeedback(args, optionsOrCb, cb) {
        const command = new GetFeedbackCommand_1.GetFeedbackCommand(args);
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
    getSampleData(args, optionsOrCb, cb) {
        const command = new GetSampleDataCommand_1.GetSampleDataCommand(args);
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
    listAlerts(args, optionsOrCb, cb) {
        const command = new ListAlertsCommand_1.ListAlertsCommand(args);
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
    listAnomalyDetectors(args, optionsOrCb, cb) {
        const command = new ListAnomalyDetectorsCommand_1.ListAnomalyDetectorsCommand(args);
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
    listAnomalyGroupSummaries(args, optionsOrCb, cb) {
        const command = new ListAnomalyGroupSummariesCommand_1.ListAnomalyGroupSummariesCommand(args);
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
    listAnomalyGroupTimeSeries(args, optionsOrCb, cb) {
        const command = new ListAnomalyGroupTimeSeriesCommand_1.ListAnomalyGroupTimeSeriesCommand(args);
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
    listMetricSets(args, optionsOrCb, cb) {
        const command = new ListMetricSetsCommand_1.ListMetricSetsCommand(args);
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
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
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
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
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
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
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
    updateAnomalyDetector(args, optionsOrCb, cb) {
        const command = new UpdateAnomalyDetectorCommand_1.UpdateAnomalyDetectorCommand(args);
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
    updateMetricSet(args, optionsOrCb, cb) {
        const command = new UpdateMetricSetCommand_1.UpdateMetricSetCommand(args);
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
exports.LookoutMetrics = LookoutMetrics;
//# sourceMappingURL=LookoutMetrics.js.map