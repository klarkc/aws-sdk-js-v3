import { __extends } from "tslib";
import { LookoutMetricsClient } from "./LookoutMetricsClient";
import { ActivateAnomalyDetectorCommand, } from "./commands/ActivateAnomalyDetectorCommand";
import { BackTestAnomalyDetectorCommand, } from "./commands/BackTestAnomalyDetectorCommand";
import { CreateAlertCommand } from "./commands/CreateAlertCommand";
import { CreateAnomalyDetectorCommand, } from "./commands/CreateAnomalyDetectorCommand";
import { CreateMetricSetCommand, } from "./commands/CreateMetricSetCommand";
import { DeleteAlertCommand } from "./commands/DeleteAlertCommand";
import { DeleteAnomalyDetectorCommand, } from "./commands/DeleteAnomalyDetectorCommand";
import { DescribeAlertCommand, } from "./commands/DescribeAlertCommand";
import { DescribeAnomalyDetectionExecutionsCommand, } from "./commands/DescribeAnomalyDetectionExecutionsCommand";
import { DescribeAnomalyDetectorCommand, } from "./commands/DescribeAnomalyDetectorCommand";
import { DescribeMetricSetCommand, } from "./commands/DescribeMetricSetCommand";
import { GetAnomalyGroupCommand, } from "./commands/GetAnomalyGroupCommand";
import { GetFeedbackCommand } from "./commands/GetFeedbackCommand";
import { GetSampleDataCommand, } from "./commands/GetSampleDataCommand";
import { ListAlertsCommand } from "./commands/ListAlertsCommand";
import { ListAnomalyDetectorsCommand, } from "./commands/ListAnomalyDetectorsCommand";
import { ListAnomalyGroupSummariesCommand, } from "./commands/ListAnomalyGroupSummariesCommand";
import { ListAnomalyGroupTimeSeriesCommand, } from "./commands/ListAnomalyGroupTimeSeriesCommand";
import { ListMetricSetsCommand, } from "./commands/ListMetricSetsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { PutFeedbackCommand } from "./commands/PutFeedbackCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateAnomalyDetectorCommand, } from "./commands/UpdateAnomalyDetectorCommand";
import { UpdateMetricSetCommand, } from "./commands/UpdateMetricSetCommand";
/**
 * <p>This is the <i>Amazon Lookout for Metrics API Reference</i>. For an introduction to the service
 *       with tutorials for getting started, visit <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev">Amazon
 *         Lookout for Metrics Developer Guide</a>.</p>
 */
var LookoutMetrics = /** @class */ (function (_super) {
    __extends(LookoutMetrics, _super);
    function LookoutMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LookoutMetrics.prototype.activateAnomalyDetector = function (args, optionsOrCb, cb) {
        var command = new ActivateAnomalyDetectorCommand(args);
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
    LookoutMetrics.prototype.backTestAnomalyDetector = function (args, optionsOrCb, cb) {
        var command = new BackTestAnomalyDetectorCommand(args);
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
    LookoutMetrics.prototype.createAlert = function (args, optionsOrCb, cb) {
        var command = new CreateAlertCommand(args);
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
    LookoutMetrics.prototype.createAnomalyDetector = function (args, optionsOrCb, cb) {
        var command = new CreateAnomalyDetectorCommand(args);
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
    LookoutMetrics.prototype.createMetricSet = function (args, optionsOrCb, cb) {
        var command = new CreateMetricSetCommand(args);
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
    LookoutMetrics.prototype.deleteAlert = function (args, optionsOrCb, cb) {
        var command = new DeleteAlertCommand(args);
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
    LookoutMetrics.prototype.deleteAnomalyDetector = function (args, optionsOrCb, cb) {
        var command = new DeleteAnomalyDetectorCommand(args);
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
    LookoutMetrics.prototype.describeAlert = function (args, optionsOrCb, cb) {
        var command = new DescribeAlertCommand(args);
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
    LookoutMetrics.prototype.describeAnomalyDetectionExecutions = function (args, optionsOrCb, cb) {
        var command = new DescribeAnomalyDetectionExecutionsCommand(args);
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
    LookoutMetrics.prototype.describeAnomalyDetector = function (args, optionsOrCb, cb) {
        var command = new DescribeAnomalyDetectorCommand(args);
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
    LookoutMetrics.prototype.describeMetricSet = function (args, optionsOrCb, cb) {
        var command = new DescribeMetricSetCommand(args);
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
    LookoutMetrics.prototype.getAnomalyGroup = function (args, optionsOrCb, cb) {
        var command = new GetAnomalyGroupCommand(args);
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
    LookoutMetrics.prototype.getFeedback = function (args, optionsOrCb, cb) {
        var command = new GetFeedbackCommand(args);
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
    LookoutMetrics.prototype.getSampleData = function (args, optionsOrCb, cb) {
        var command = new GetSampleDataCommand(args);
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
    LookoutMetrics.prototype.listAlerts = function (args, optionsOrCb, cb) {
        var command = new ListAlertsCommand(args);
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
    LookoutMetrics.prototype.listAnomalyDetectors = function (args, optionsOrCb, cb) {
        var command = new ListAnomalyDetectorsCommand(args);
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
    LookoutMetrics.prototype.listAnomalyGroupSummaries = function (args, optionsOrCb, cb) {
        var command = new ListAnomalyGroupSummariesCommand(args);
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
    LookoutMetrics.prototype.listAnomalyGroupTimeSeries = function (args, optionsOrCb, cb) {
        var command = new ListAnomalyGroupTimeSeriesCommand(args);
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
    LookoutMetrics.prototype.listMetricSets = function (args, optionsOrCb, cb) {
        var command = new ListMetricSetsCommand(args);
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
    LookoutMetrics.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    LookoutMetrics.prototype.putFeedback = function (args, optionsOrCb, cb) {
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
    LookoutMetrics.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    LookoutMetrics.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    LookoutMetrics.prototype.updateAnomalyDetector = function (args, optionsOrCb, cb) {
        var command = new UpdateAnomalyDetectorCommand(args);
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
    LookoutMetrics.prototype.updateMetricSet = function (args, optionsOrCb, cb) {
        var command = new UpdateMetricSetCommand(args);
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
    return LookoutMetrics;
}(LookoutMetricsClient));
export { LookoutMetrics };
//# sourceMappingURL=LookoutMetrics.js.map