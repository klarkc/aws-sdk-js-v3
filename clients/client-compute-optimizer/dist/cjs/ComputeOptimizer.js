"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputeOptimizer = void 0;
const ComputeOptimizerClient_1 = require("./ComputeOptimizerClient");
const DescribeRecommendationExportJobsCommand_1 = require("./commands/DescribeRecommendationExportJobsCommand");
const ExportAutoScalingGroupRecommendationsCommand_1 = require("./commands/ExportAutoScalingGroupRecommendationsCommand");
const ExportEBSVolumeRecommendationsCommand_1 = require("./commands/ExportEBSVolumeRecommendationsCommand");
const ExportEC2InstanceRecommendationsCommand_1 = require("./commands/ExportEC2InstanceRecommendationsCommand");
const ExportLambdaFunctionRecommendationsCommand_1 = require("./commands/ExportLambdaFunctionRecommendationsCommand");
const GetAutoScalingGroupRecommendationsCommand_1 = require("./commands/GetAutoScalingGroupRecommendationsCommand");
const GetEBSVolumeRecommendationsCommand_1 = require("./commands/GetEBSVolumeRecommendationsCommand");
const GetEC2InstanceRecommendationsCommand_1 = require("./commands/GetEC2InstanceRecommendationsCommand");
const GetEC2RecommendationProjectedMetricsCommand_1 = require("./commands/GetEC2RecommendationProjectedMetricsCommand");
const GetEnrollmentStatusCommand_1 = require("./commands/GetEnrollmentStatusCommand");
const GetLambdaFunctionRecommendationsCommand_1 = require("./commands/GetLambdaFunctionRecommendationsCommand");
const GetRecommendationSummariesCommand_1 = require("./commands/GetRecommendationSummariesCommand");
const UpdateEnrollmentStatusCommand_1 = require("./commands/UpdateEnrollmentStatusCommand");
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
class ComputeOptimizer extends ComputeOptimizerClient_1.ComputeOptimizerClient {
    describeRecommendationExportJobs(args, optionsOrCb, cb) {
        const command = new DescribeRecommendationExportJobsCommand_1.DescribeRecommendationExportJobsCommand(args);
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
    exportAutoScalingGroupRecommendations(args, optionsOrCb, cb) {
        const command = new ExportAutoScalingGroupRecommendationsCommand_1.ExportAutoScalingGroupRecommendationsCommand(args);
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
    exportEBSVolumeRecommendations(args, optionsOrCb, cb) {
        const command = new ExportEBSVolumeRecommendationsCommand_1.ExportEBSVolumeRecommendationsCommand(args);
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
    exportEC2InstanceRecommendations(args, optionsOrCb, cb) {
        const command = new ExportEC2InstanceRecommendationsCommand_1.ExportEC2InstanceRecommendationsCommand(args);
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
    exportLambdaFunctionRecommendations(args, optionsOrCb, cb) {
        const command = new ExportLambdaFunctionRecommendationsCommand_1.ExportLambdaFunctionRecommendationsCommand(args);
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
    getAutoScalingGroupRecommendations(args, optionsOrCb, cb) {
        const command = new GetAutoScalingGroupRecommendationsCommand_1.GetAutoScalingGroupRecommendationsCommand(args);
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
    getEBSVolumeRecommendations(args, optionsOrCb, cb) {
        const command = new GetEBSVolumeRecommendationsCommand_1.GetEBSVolumeRecommendationsCommand(args);
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
    getEC2InstanceRecommendations(args, optionsOrCb, cb) {
        const command = new GetEC2InstanceRecommendationsCommand_1.GetEC2InstanceRecommendationsCommand(args);
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
    getEC2RecommendationProjectedMetrics(args, optionsOrCb, cb) {
        const command = new GetEC2RecommendationProjectedMetricsCommand_1.GetEC2RecommendationProjectedMetricsCommand(args);
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
    getEnrollmentStatus(args, optionsOrCb, cb) {
        const command = new GetEnrollmentStatusCommand_1.GetEnrollmentStatusCommand(args);
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
    getLambdaFunctionRecommendations(args, optionsOrCb, cb) {
        const command = new GetLambdaFunctionRecommendationsCommand_1.GetLambdaFunctionRecommendationsCommand(args);
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
    getRecommendationSummaries(args, optionsOrCb, cb) {
        const command = new GetRecommendationSummariesCommand_1.GetRecommendationSummariesCommand(args);
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
    updateEnrollmentStatus(args, optionsOrCb, cb) {
        const command = new UpdateEnrollmentStatusCommand_1.UpdateEnrollmentStatusCommand(args);
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
exports.ComputeOptimizer = ComputeOptimizer;
//# sourceMappingURL=ComputeOptimizer.js.map