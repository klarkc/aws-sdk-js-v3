import { __extends } from "tslib";
import { ComputeOptimizerClient } from "./ComputeOptimizerClient";
import { DescribeRecommendationExportJobsCommand, } from "./commands/DescribeRecommendationExportJobsCommand";
import { ExportAutoScalingGroupRecommendationsCommand, } from "./commands/ExportAutoScalingGroupRecommendationsCommand";
import { ExportEBSVolumeRecommendationsCommand, } from "./commands/ExportEBSVolumeRecommendationsCommand";
import { ExportEC2InstanceRecommendationsCommand, } from "./commands/ExportEC2InstanceRecommendationsCommand";
import { ExportLambdaFunctionRecommendationsCommand, } from "./commands/ExportLambdaFunctionRecommendationsCommand";
import { GetAutoScalingGroupRecommendationsCommand, } from "./commands/GetAutoScalingGroupRecommendationsCommand";
import { GetEBSVolumeRecommendationsCommand, } from "./commands/GetEBSVolumeRecommendationsCommand";
import { GetEC2InstanceRecommendationsCommand, } from "./commands/GetEC2InstanceRecommendationsCommand";
import { GetEC2RecommendationProjectedMetricsCommand, } from "./commands/GetEC2RecommendationProjectedMetricsCommand";
import { GetEnrollmentStatusCommand, } from "./commands/GetEnrollmentStatusCommand";
import { GetLambdaFunctionRecommendationsCommand, } from "./commands/GetLambdaFunctionRecommendationsCommand";
import { GetRecommendationSummariesCommand, } from "./commands/GetRecommendationSummariesCommand";
import { UpdateEnrollmentStatusCommand, } from "./commands/UpdateEnrollmentStatusCommand";
/**
 * <p>AWS Compute Optimizer is a service that analyzes the configuration and utilization
 *             metrics of your AWS compute resources, such as EC2 instances, Auto Scaling groups, AWS Lambda
 *             functions, and Amazon EBS volumes. It reports whether your resources are optimal, and
 *             generates optimization recommendations to reduce the cost and improve the performance of
 *             your workloads. Compute Optimizer also provides recent utilization metric data, as well as projected
 *             utilization metric data for the recommendations, which you can use to evaluate which
 *             recommendation provides the best price-performance trade-off. The analysis of your usage
 *             patterns can help you decide when to move or resize your running resources, and still
 *             meet your performance and capacity requirements. For more information about Compute Optimizer,
 *             including the required permissions to use the service, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/">AWS Compute Optimizer User
 *             Guide</a>.</p>
 */
var ComputeOptimizer = /** @class */ (function (_super) {
    __extends(ComputeOptimizer, _super);
    function ComputeOptimizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComputeOptimizer.prototype.describeRecommendationExportJobs = function (args, optionsOrCb, cb) {
        var command = new DescribeRecommendationExportJobsCommand(args);
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
    ComputeOptimizer.prototype.exportAutoScalingGroupRecommendations = function (args, optionsOrCb, cb) {
        var command = new ExportAutoScalingGroupRecommendationsCommand(args);
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
    ComputeOptimizer.prototype.exportEBSVolumeRecommendations = function (args, optionsOrCb, cb) {
        var command = new ExportEBSVolumeRecommendationsCommand(args);
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
    ComputeOptimizer.prototype.exportEC2InstanceRecommendations = function (args, optionsOrCb, cb) {
        var command = new ExportEC2InstanceRecommendationsCommand(args);
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
    ComputeOptimizer.prototype.exportLambdaFunctionRecommendations = function (args, optionsOrCb, cb) {
        var command = new ExportLambdaFunctionRecommendationsCommand(args);
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
    ComputeOptimizer.prototype.getAutoScalingGroupRecommendations = function (args, optionsOrCb, cb) {
        var command = new GetAutoScalingGroupRecommendationsCommand(args);
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
    ComputeOptimizer.prototype.getEBSVolumeRecommendations = function (args, optionsOrCb, cb) {
        var command = new GetEBSVolumeRecommendationsCommand(args);
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
    ComputeOptimizer.prototype.getEC2InstanceRecommendations = function (args, optionsOrCb, cb) {
        var command = new GetEC2InstanceRecommendationsCommand(args);
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
    ComputeOptimizer.prototype.getEC2RecommendationProjectedMetrics = function (args, optionsOrCb, cb) {
        var command = new GetEC2RecommendationProjectedMetricsCommand(args);
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
    ComputeOptimizer.prototype.getEnrollmentStatus = function (args, optionsOrCb, cb) {
        var command = new GetEnrollmentStatusCommand(args);
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
    ComputeOptimizer.prototype.getLambdaFunctionRecommendations = function (args, optionsOrCb, cb) {
        var command = new GetLambdaFunctionRecommendationsCommand(args);
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
    ComputeOptimizer.prototype.getRecommendationSummaries = function (args, optionsOrCb, cb) {
        var command = new GetRecommendationSummariesCommand(args);
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
    ComputeOptimizer.prototype.updateEnrollmentStatus = function (args, optionsOrCb, cb) {
        var command = new UpdateEnrollmentStatusCommand(args);
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
    return ComputeOptimizer;
}(ComputeOptimizerClient));
export { ComputeOptimizer };
//# sourceMappingURL=ComputeOptimizer.js.map