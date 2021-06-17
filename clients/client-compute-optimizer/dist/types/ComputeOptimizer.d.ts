import { ComputeOptimizerClient } from "./ComputeOptimizerClient";
import { DescribeRecommendationExportJobsCommandInput, DescribeRecommendationExportJobsCommandOutput } from "./commands/DescribeRecommendationExportJobsCommand";
import { ExportAutoScalingGroupRecommendationsCommandInput, ExportAutoScalingGroupRecommendationsCommandOutput } from "./commands/ExportAutoScalingGroupRecommendationsCommand";
import { ExportEBSVolumeRecommendationsCommandInput, ExportEBSVolumeRecommendationsCommandOutput } from "./commands/ExportEBSVolumeRecommendationsCommand";
import { ExportEC2InstanceRecommendationsCommandInput, ExportEC2InstanceRecommendationsCommandOutput } from "./commands/ExportEC2InstanceRecommendationsCommand";
import { ExportLambdaFunctionRecommendationsCommandInput, ExportLambdaFunctionRecommendationsCommandOutput } from "./commands/ExportLambdaFunctionRecommendationsCommand";
import { GetAutoScalingGroupRecommendationsCommandInput, GetAutoScalingGroupRecommendationsCommandOutput } from "./commands/GetAutoScalingGroupRecommendationsCommand";
import { GetEBSVolumeRecommendationsCommandInput, GetEBSVolumeRecommendationsCommandOutput } from "./commands/GetEBSVolumeRecommendationsCommand";
import { GetEC2InstanceRecommendationsCommandInput, GetEC2InstanceRecommendationsCommandOutput } from "./commands/GetEC2InstanceRecommendationsCommand";
import { GetEC2RecommendationProjectedMetricsCommandInput, GetEC2RecommendationProjectedMetricsCommandOutput } from "./commands/GetEC2RecommendationProjectedMetricsCommand";
import { GetEnrollmentStatusCommandInput, GetEnrollmentStatusCommandOutput } from "./commands/GetEnrollmentStatusCommand";
import { GetLambdaFunctionRecommendationsCommandInput, GetLambdaFunctionRecommendationsCommandOutput } from "./commands/GetLambdaFunctionRecommendationsCommand";
import { GetRecommendationSummariesCommandInput, GetRecommendationSummariesCommandOutput } from "./commands/GetRecommendationSummariesCommand";
import { UpdateEnrollmentStatusCommandInput, UpdateEnrollmentStatusCommandOutput } from "./commands/UpdateEnrollmentStatusCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
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
export declare class ComputeOptimizer extends ComputeOptimizerClient {
    /**
     * <p>Describes recommendation export jobs created in the last seven days.</p>
     *
     *         <p>Use the <code>ExportAutoScalingGroupRecommendations</code> or
     *                 <code>ExportEC2InstanceRecommendations</code> actions to request an export of your
     *             recommendations. Then use the <code>DescribeRecommendationExportJobs</code> action to
     *             view your export jobs.</p>
     */
    describeRecommendationExportJobs(args: DescribeRecommendationExportJobsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRecommendationExportJobsCommandOutput>;
    describeRecommendationExportJobs(args: DescribeRecommendationExportJobsCommandInput, cb: (err: any, data?: DescribeRecommendationExportJobsCommandOutput) => void): void;
    describeRecommendationExportJobs(args: DescribeRecommendationExportJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRecommendationExportJobsCommandOutput) => void): void;
    /**
     * <p>Exports optimization recommendations for Auto Scaling groups.</p>
     *
     *         <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata
     *             in a JavaScript Object Notation (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that
     *             you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
     *                 Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p>
     *
     *         <p>You can have only one Auto Scaling group export job in progress per AWS
     *             Region.</p>
     */
    exportAutoScalingGroupRecommendations(args: ExportAutoScalingGroupRecommendationsCommandInput, options?: __HttpHandlerOptions): Promise<ExportAutoScalingGroupRecommendationsCommandOutput>;
    exportAutoScalingGroupRecommendations(args: ExportAutoScalingGroupRecommendationsCommandInput, cb: (err: any, data?: ExportAutoScalingGroupRecommendationsCommandOutput) => void): void;
    exportAutoScalingGroupRecommendations(args: ExportAutoScalingGroupRecommendationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ExportAutoScalingGroupRecommendationsCommandOutput) => void): void;
    /**
     * <p>Exports optimization recommendations for Amazon EBS volumes.</p>
     *
     *         <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata
     *             in a JavaScript Object Notation (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that
     *             you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
     *                 Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p>
     *
     *         <p>You can have only one Amazon EBS volume export job in progress per AWS
     *             Region.</p>
     */
    exportEBSVolumeRecommendations(args: ExportEBSVolumeRecommendationsCommandInput, options?: __HttpHandlerOptions): Promise<ExportEBSVolumeRecommendationsCommandOutput>;
    exportEBSVolumeRecommendations(args: ExportEBSVolumeRecommendationsCommandInput, cb: (err: any, data?: ExportEBSVolumeRecommendationsCommandOutput) => void): void;
    exportEBSVolumeRecommendations(args: ExportEBSVolumeRecommendationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ExportEBSVolumeRecommendationsCommandOutput) => void): void;
    /**
     * <p>Exports optimization recommendations for Amazon EC2 instances.</p>
     *
     *         <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata
     *             in a JavaScript Object Notation (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that
     *             you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
     *                 Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p>
     *
     *         <p>You can have only one Amazon EC2 instance export job in progress per AWS
     *             Region.</p>
     */
    exportEC2InstanceRecommendations(args: ExportEC2InstanceRecommendationsCommandInput, options?: __HttpHandlerOptions): Promise<ExportEC2InstanceRecommendationsCommandOutput>;
    exportEC2InstanceRecommendations(args: ExportEC2InstanceRecommendationsCommandInput, cb: (err: any, data?: ExportEC2InstanceRecommendationsCommandOutput) => void): void;
    exportEC2InstanceRecommendations(args: ExportEC2InstanceRecommendationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ExportEC2InstanceRecommendationsCommandOutput) => void): void;
    /**
     * <p>Exports optimization recommendations for AWS Lambda functions.</p>
     *
     *
     *
     *         <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata
     *             in a JavaScript Object Notation (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that
     *             you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
     *                 Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p>
     *
     *         <p>You can have only one Lambda function export job in progress per AWS
     *             Region.</p>
     */
    exportLambdaFunctionRecommendations(args: ExportLambdaFunctionRecommendationsCommandInput, options?: __HttpHandlerOptions): Promise<ExportLambdaFunctionRecommendationsCommandOutput>;
    exportLambdaFunctionRecommendations(args: ExportLambdaFunctionRecommendationsCommandInput, cb: (err: any, data?: ExportLambdaFunctionRecommendationsCommandOutput) => void): void;
    exportLambdaFunctionRecommendations(args: ExportLambdaFunctionRecommendationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ExportLambdaFunctionRecommendationsCommandOutput) => void): void;
    /**
     * <p>Returns Auto Scaling group recommendations.</p>
     *
     *         <p>AWS Compute Optimizer generates recommendations for Amazon EC2 Auto Scaling groups that meet a specific
     *             set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and
     *                 requirements</a> in the <i>AWS Compute Optimizer User Guide</i>.</p>
     */
    getAutoScalingGroupRecommendations(args: GetAutoScalingGroupRecommendationsCommandInput, options?: __HttpHandlerOptions): Promise<GetAutoScalingGroupRecommendationsCommandOutput>;
    getAutoScalingGroupRecommendations(args: GetAutoScalingGroupRecommendationsCommandInput, cb: (err: any, data?: GetAutoScalingGroupRecommendationsCommandOutput) => void): void;
    getAutoScalingGroupRecommendations(args: GetAutoScalingGroupRecommendationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAutoScalingGroupRecommendationsCommandOutput) => void): void;
    /**
     * <p>Returns Amazon Elastic Block Store (Amazon EBS) volume recommendations.</p>
     *
     *         <p>AWS Compute Optimizer generates recommendations for Amazon EBS volumes that meet a specific
     *             set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and
     *                 requirements</a> in the <i>AWS Compute Optimizer User Guide</i>.</p>
     */
    getEBSVolumeRecommendations(args: GetEBSVolumeRecommendationsCommandInput, options?: __HttpHandlerOptions): Promise<GetEBSVolumeRecommendationsCommandOutput>;
    getEBSVolumeRecommendations(args: GetEBSVolumeRecommendationsCommandInput, cb: (err: any, data?: GetEBSVolumeRecommendationsCommandOutput) => void): void;
    getEBSVolumeRecommendations(args: GetEBSVolumeRecommendationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEBSVolumeRecommendationsCommandOutput) => void): void;
    /**
     * <p>Returns Amazon EC2 instance recommendations.</p>
     *
     *         <p>AWS Compute Optimizer generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) instances that meet
     *             a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported
     *                 resources and requirements</a> in the <i>AWS Compute Optimizer User
     *             Guide</i>.</p>
     */
    getEC2InstanceRecommendations(args: GetEC2InstanceRecommendationsCommandInput, options?: __HttpHandlerOptions): Promise<GetEC2InstanceRecommendationsCommandOutput>;
    getEC2InstanceRecommendations(args: GetEC2InstanceRecommendationsCommandInput, cb: (err: any, data?: GetEC2InstanceRecommendationsCommandOutput) => void): void;
    getEC2InstanceRecommendations(args: GetEC2InstanceRecommendationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEC2InstanceRecommendationsCommandOutput) => void): void;
    /**
     * <p>Returns the projected utilization metrics of Amazon EC2 instance recommendations.</p>
     *
     *         <note>
     *             <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected
     *                 utilization metrics returned when you run this action. Additionally, the
     *                     <code>Memory</code> metric is returned only for resources that have the unified
     *                 CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory
     *                     Utilization with the CloudWatch Agent</a>.</p>
     *         </note>
     */
    getEC2RecommendationProjectedMetrics(args: GetEC2RecommendationProjectedMetricsCommandInput, options?: __HttpHandlerOptions): Promise<GetEC2RecommendationProjectedMetricsCommandOutput>;
    getEC2RecommendationProjectedMetrics(args: GetEC2RecommendationProjectedMetricsCommandInput, cb: (err: any, data?: GetEC2RecommendationProjectedMetricsCommandOutput) => void): void;
    getEC2RecommendationProjectedMetrics(args: GetEC2RecommendationProjectedMetricsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEC2RecommendationProjectedMetricsCommandOutput) => void): void;
    /**
     * <p>Returns the enrollment (opt in) status of an account to the AWS Compute Optimizer
     *             service.</p>
     *
     *
     *
     *         <p>If the account is the management account of an organization, this action also confirms
     *             the enrollment status of member accounts within the organization.</p>
     */
    getEnrollmentStatus(args: GetEnrollmentStatusCommandInput, options?: __HttpHandlerOptions): Promise<GetEnrollmentStatusCommandOutput>;
    getEnrollmentStatus(args: GetEnrollmentStatusCommandInput, cb: (err: any, data?: GetEnrollmentStatusCommandOutput) => void): void;
    getEnrollmentStatus(args: GetEnrollmentStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEnrollmentStatusCommandOutput) => void): void;
    /**
     * <p>Returns AWS Lambda function recommendations.</p>
     *
     *
     *
     *         <p>AWS Compute Optimizer generates recommendations for functions that meet a specific set of
     *             requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and
     *                 requirements</a> in the <i>AWS Compute Optimizer User Guide</i>.</p>
     */
    getLambdaFunctionRecommendations(args: GetLambdaFunctionRecommendationsCommandInput, options?: __HttpHandlerOptions): Promise<GetLambdaFunctionRecommendationsCommandOutput>;
    getLambdaFunctionRecommendations(args: GetLambdaFunctionRecommendationsCommandInput, cb: (err: any, data?: GetLambdaFunctionRecommendationsCommandOutput) => void): void;
    getLambdaFunctionRecommendations(args: GetLambdaFunctionRecommendationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLambdaFunctionRecommendationsCommandOutput) => void): void;
    /**
     * <p>Returns the optimization findings for an account.</p>
     *         <p>It returns the number of:</p>
     *         <ul>
     *             <li>
     *                 <p>Amazon EC2 instances in an account that are <code>Underprovisioned</code>,
     *                         <code>Overprovisioned</code>, or <code>Optimized</code>.</p>
     *             </li>
     *             <li>
     *                 <p>Auto Scaling groups in an account that are <code>NotOptimized</code>, or
     *                         <code>Optimized</code>.</p>
     *             </li>
     *             <li>
     *                 <p>Amazon EBS volumes in an account that are <code>NotOptimized</code>, or
     *                         <code>Optimized</code>.</p>
     *             </li>
     *             <li>
     *                 <p>Lambda functions in an account that are <code>NotOptimized</code>, or
     *                         <code>Optimized</code>.</p>
     *             </li>
     *          </ul>
     */
    getRecommendationSummaries(args: GetRecommendationSummariesCommandInput, options?: __HttpHandlerOptions): Promise<GetRecommendationSummariesCommandOutput>;
    getRecommendationSummaries(args: GetRecommendationSummariesCommandInput, cb: (err: any, data?: GetRecommendationSummariesCommandOutput) => void): void;
    getRecommendationSummaries(args: GetRecommendationSummariesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRecommendationSummariesCommandOutput) => void): void;
    /**
     * <p>Updates the enrollment (opt in and opt out) status of an account to the
     *             AWS Compute Optimizer service.</p>
     *
     *
     *
     *         <p>If the account is a management account of an organization, this action can also be used
     *             to enroll member accounts within the organization.</p>
     *
     *         <p>You must have the appropriate permissions to opt in to Compute Optimizer, to view its
     *             recommendations, and to opt out. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html">Controlling access with AWS
     *                 Identity and Access Management</a> in the <i>AWS Compute Optimizer User
     *                 Guide</i>.</p>
     *
     *
     *
     *         <p>When you opt in, Compute Optimizer automatically creates a Service-Linked Role in your
     *             account to access its data. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/using-service-linked-roles.html">Using
     *                 Service-Linked Roles for AWS Compute Optimizer</a> in the <i>AWS Compute Optimizer User
     *                 Guide</i>.</p>
     */
    updateEnrollmentStatus(args: UpdateEnrollmentStatusCommandInput, options?: __HttpHandlerOptions): Promise<UpdateEnrollmentStatusCommandOutput>;
    updateEnrollmentStatus(args: UpdateEnrollmentStatusCommandInput, cb: (err: any, data?: UpdateEnrollmentStatusCommandOutput) => void): void;
    updateEnrollmentStatus(args: UpdateEnrollmentStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateEnrollmentStatusCommandOutput) => void): void;
}
