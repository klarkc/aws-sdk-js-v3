import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p> You don't have permissions to perform the requested operation. The user or role that is making the request must have at
 * 			least one IAM permissions policy attached that grants the required permissions. For more information, see
 * 			<a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the <i>IAM User Guide</i>. </p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "AccessDeniedException";
    $fault: "client";
    Message: string | undefined;
}
export declare namespace AccessDeniedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessDeniedException) => any;
}
/**
 * <p> Contains the Amazon Resource Name (ARN) of an Amazon Simple Notification Service topic. </p>
 *
 * 		       <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission
 * 				to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account.
 * 				For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions
 * 				for cross account Amazon SNS topics</a>.</p>
 * 				     <p>If you use an Amazon SNS topic that is encrypted by an AWS Key Management Service customer-managed key (CMK), then you must add permissions
 * 				to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for
 * 				AWS KMS–encrypted Amazon SNS topics</a>.</p>
 */
export interface SnsChannelConfig {
    /**
     * <p> The Amazon Resource Name (ARN) of an Amazon Simple Notification Service topic. </p>
     */
    TopicArn?: string;
}
export declare namespace SnsChannelConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SnsChannelConfig) => any;
}
/**
 * <p> Information about notification channels you have configured with DevOps Guru.
 * 			The one
 *       	supported notification channel is Amazon Simple Notification Service (Amazon SNS).</p>
 */
export interface NotificationChannelConfig {
    /**
     * <p>
     * 			Information about a notification channel configured in DevOps Guru to send notifications when insights are created.
     * 		</p>
     *
     * 		       <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission
     * 				to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account.
     * 				For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions
     * 				for cross account Amazon SNS topics</a>.</p>
     * 				     <p>If you use an Amazon SNS topic that is encrypted by an AWS Key Management Service customer-managed key (CMK), then you must add permissions
     * 				to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for
     * 				AWS KMS–encrypted Amazon SNS topics</a>.</p>
     */
    Sns: SnsChannelConfig | undefined;
}
export declare namespace NotificationChannelConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NotificationChannelConfig) => any;
}
export interface AddNotificationChannelRequest {
    /**
     * <p> A <code>NotificationChannelConfig</code> object that specifies what type of
     *    		notification channel to add. The one
     *       	supported notification channel is Amazon Simple Notification Service (Amazon SNS). </p>
     */
    Config: NotificationChannelConfig | undefined;
}
export declare namespace AddNotificationChannelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AddNotificationChannelRequest) => any;
}
export interface AddNotificationChannelResponse {
    /**
     * <p>
     *    		The ID of the added notification channel.
     *    	</p>
     */
    Id: string | undefined;
}
export declare namespace AddNotificationChannelResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AddNotificationChannelResponse) => any;
}
/**
 * <p>
 * 			An exception that is thrown when a conflict occurs.
 * 		</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    Message: string | undefined;
    /**
     * <p>
     * 			The ID of the AWS resource in which a conflict occurred.
     * 		</p>
     */
    ResourceId: string | undefined;
    /**
     * <p>
     * 			The type of the AWS resource in which a conflict occurred.
     * 		</p>
     */
    ResourceType: string | undefined;
}
export declare namespace ConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConflictException) => any;
}
/**
 * <p>An internal failure in an Amazon service occurred.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
    name: "InternalServerException";
    $fault: "server";
    Message: string | undefined;
    /**
     * <p>
     * 			The number of seconds after which the action that caused the internal server
     * 			exception can be retried.
     * 		</p>
     */
    RetryAfterSeconds?: number;
}
export declare namespace InternalServerException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServerException) => any;
}
/**
 * <p>A requested resource could not be found</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    Message: string | undefined;
    /**
     * <p>
     * 			The ID of the AWS resource that could not be found.
     * 		</p>
     */
    ResourceId: string | undefined;
    /**
     * <p>
     * 			The type of the AWS resource that could not be found.
     * 		</p>
     */
    ResourceType: string | undefined;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p>The request contains a value that exceeds a maximum quota.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
    name: "ServiceQuotaExceededException";
    $fault: "client";
    Message?: string;
}
export declare namespace ServiceQuotaExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceQuotaExceededException) => any;
}
/**
 * <p>The request was denied due to a request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
    name: "ThrottlingException";
    $fault: "client";
    Message: string | undefined;
    /**
     * <p>
     * 			The code of the quota that was exceeded, causing the throttling exception.
     * 		</p>
     */
    QuotaCode?: string;
    /**
     * <p>
     * 			The code of the service that caused the throttling exception.
     * 		</p>
     */
    ServiceCode?: string;
    /**
     * <p>
     * 			The number of seconds after which the action that caused the throttling
     * 			exception can be retried.
     * 		</p>
     */
    RetryAfterSeconds?: number;
}
export declare namespace ThrottlingException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThrottlingException) => any;
}
/**
 * <p>
 * 			The field associated with the validation exception.
 * 		</p>
 */
export interface ValidationExceptionField {
    /**
     * <p>
     * 			The name of the field.
     * 		</p>
     */
    Name: string | undefined;
    /**
     * <p>
     * 			The message associated with the validation exception with information to help
     * 			determine its cause.
     * 		</p>
     */
    Message: string | undefined;
}
export declare namespace ValidationExceptionField {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationExceptionField) => any;
}
export declare enum ValidationExceptionReason {
    CANNOT_PARSE = "CANNOT_PARSE",
    FIELD_VALIDATION_FAILED = "FIELD_VALIDATION_FAILED",
    OTHER = "OTHER",
    UNKNOWN_OPERATION = "UNKNOWN_OPERATION"
}
/**
 * <p>
 * 			Contains information about data passed in to a field during a request that is not valid.
 * 		</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
    name: "ValidationException";
    $fault: "client";
    /**
     * <p>
     * 			A message that describes the validation exception.
     * 		</p>
     */
    Message: string | undefined;
    /**
     * <p>
     * 			The reason the validation exception was thrown.
     * 		</p>
     */
    Reason?: ValidationExceptionReason | string;
    /**
     * <p>
     * 			An array of fields that are associated with the validation exception.
     * 		</p>
     */
    Fields?: ValidationExceptionField[];
}
export declare namespace ValidationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationException) => any;
}
export declare enum AnomalySeverity {
    HIGH = "HIGH",
    LOW = "LOW",
    MEDIUM = "MEDIUM"
}
/**
 * <p> The dimension of a Amazon CloudWatch metric that is used when DevOps Guru analyzes the resources in your
 * 			account for operational problems and anomalous behavior. A dimension is a name/value pair
 * 			that is part of the identity of a metric. A metric can have up to 10 dimensions. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension">Dimensions</a> in the <i>Amazon CloudWatch User Guide</i>. </p>
 */
export interface CloudWatchMetricsDimension {
    /**
     * <p>
     * 			The name of the CloudWatch dimension.
     * 		</p>
     */
    Name?: string;
    /**
     * <p>
     * 			The value of the CloudWatch dimension.
     * 		</p>
     */
    Value?: string;
}
export declare namespace CloudWatchMetricsDimension {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CloudWatchMetricsDimension) => any;
}
export declare enum CloudWatchMetricsStat {
    AVERAGE = "Average",
    MAXIMUM = "Maximum",
    MINIMUM = "Minimum",
    P50 = "p50",
    P90 = "p90",
    P99 = "p99",
    SAMPLE_COUNT = "SampleCount",
    SUM = "Sum"
}
/**
 * <p>
 * 			Information about an Amazon CloudWatch metric.
 * 		</p>
 */
export interface CloudWatchMetricsDetail {
    /**
     * <p>
     * 			The name of the CloudWatch metric.
     * 		</p>
     */
    MetricName?: string;
    /**
     * <p>
     * 			The namespace of the CloudWatch metric. A namespace is a container for CloudWatch metrics.
     * 		</p>
     */
    Namespace?: string;
    /**
     * <p>
     * 			An array of CloudWatch dimensions associated with
     * 		</p>
     */
    Dimensions?: CloudWatchMetricsDimension[];
    /**
     * <p>
     * 			The type of statistic associated with the CloudWatch metric. For more information, see
     * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic">Statistics</a> in the
     * 			<i>Amazon CloudWatch User Guide</i>.
     * 		</p>
     */
    Stat?: CloudWatchMetricsStat | string;
    /**
     * <p>
     * 			The unit of measure used for the CloudWatch metric. For example, <code>Bytes</code>, <code>Seconds</code>,
     * 			<code>Count</code>, and <code>Percent</code>.
     * 		</p>
     */
    Unit?: string;
    /**
     * <p>
     * 			The length of time associated with the CloudWatch metric in number of seconds.
     * 		</p>
     */
    Period?: number;
}
export declare namespace CloudWatchMetricsDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CloudWatchMetricsDetail) => any;
}
/**
 * <p> Details about the source of the anomalous operational data that triggered the anomaly. The
 * 			one supported source is Amazon CloudWatch metrics. </p>
 */
export interface AnomalySourceDetails {
    /**
     * <p> An array of <code>CloudWatchMetricsDetail</code> object that contains information
     * 			about the analyzed metrics that displayed anomalous behavior. </p>
     */
    CloudWatchMetrics?: CloudWatchMetricsDetail[];
}
export declare namespace AnomalySourceDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AnomalySourceDetails) => any;
}
export declare enum AnomalyStatus {
    CLOSED = "CLOSED",
    ONGOING = "ONGOING"
}
/**
 * <p>
 * 			A time range that specifies when the observed unusual behavior in an anomaly started and ended.
 * 		</p>
 */
export interface AnomalyTimeRange {
    /**
     * <p>
     * 			The time when the anomalous behavior started.
     * 		</p>
     */
    StartTime: Date | undefined;
    /**
     * <p> The time when the anomalous behavior ended. </p>
     */
    EndTime?: Date;
}
export declare namespace AnomalyTimeRange {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AnomalyTimeRange) => any;
}
export interface DescribeAccountHealthRequest {
}
export declare namespace DescribeAccountHealthRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAccountHealthRequest) => any;
}
export interface DescribeAccountHealthResponse {
    /**
     * <p>
     *    		An integer that specifies the number of open reactive insights in your AWS account.
     *    	</p>
     */
    OpenReactiveInsights: number | undefined;
    /**
     * <p>
     *    		An integer that specifies the number of open proactive insights in your AWS account.
     *    	</p>
     */
    OpenProactiveInsights: number | undefined;
    /**
     * <p>
     *    		An integer that specifies the number of metrics that have been analyzed in your AWS account.
     *    	</p>
     */
    MetricsAnalyzed: number | undefined;
    /**
     * <p>The number of Amazon DevOps Guru resource analysis hours billed to the current AWS account in the last hour.
     *  		</p>
     */
    ResourceHours: number | undefined;
}
export declare namespace DescribeAccountHealthResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAccountHealthResponse) => any;
}
export interface DescribeAccountOverviewRequest {
    /**
     * <p>
     *    		The start of the time range passed in. The start time granularity is at the
     *    		day level. The floor of the start time is used. Returned information occurred after this day.
     *    	</p>
     */
    FromTime: Date | undefined;
    /**
     * <p>
     *    		The end of the time range passed in. The start time granularity is at the
     *    		day level. The floor of the start time is used. Returned information occurred before this day. If this is not specified, then the current day is used.
     *    	</p>
     */
    ToTime?: Date;
}
export declare namespace DescribeAccountOverviewRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAccountOverviewRequest) => any;
}
export interface DescribeAccountOverviewResponse {
    /**
     * <p>
     *    		An integer that specifies the number of open reactive insights in your AWS account that were created during the
     *    		time range passed in.
     *    	</p>
     */
    ReactiveInsights: number | undefined;
    /**
     * <p>
     *    		An integer that specifies the number of open proactive insights in your AWS account that were created during the
     *    		time range passed in.
     *    	</p>
     */
    ProactiveInsights: number | undefined;
    /**
     * <p>
     *    		The Mean Time to Recover (MTTR) for all closed insights that were created during the
     *    		time range passed in.
     *    	</p>
     */
    MeanTimeToRecoverInMilliseconds: number | undefined;
}
export declare namespace DescribeAccountOverviewResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAccountOverviewResponse) => any;
}
export interface DescribeAnomalyRequest {
    /**
     * <p>
     *    		The ID of the anomaly.
     *    	</p>
     */
    Id: string | undefined;
}
export declare namespace DescribeAnomalyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAnomalyRequest) => any;
}
/**
 * <p>
 * 			The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.
 * 		</p>
 */
export interface PredictionTimeRange {
    /**
     * <p>
     * 			The time range during which a metric limit is expected to be exceeded. This applies to proactive insights only.
     * 		</p>
     */
    StartTime: Date | undefined;
    /**
     * <p>
     * 			The time when the behavior in a proactive insight is expected to end.
     * 		</p>
     */
    EndTime?: Date;
}
export declare namespace PredictionTimeRange {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PredictionTimeRange) => any;
}
/**
 * <p>
 * 			Information about AWS CloudFormation stacks. You can use up to 500 stacks to specify which AWS resources in your account to analyze.
 * 			For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a>
 * 			in the <i>AWS CloudFormation User Guide</i>.
 * 		</p>
 */
export interface CloudFormationCollection {
    /**
     * <p>
     * 			An array of CloudFormation stack names.
     * 		</p>
     */
    StackNames?: string[];
}
export declare namespace CloudFormationCollection {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CloudFormationCollection) => any;
}
/**
 * <p>
 * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
 *       	only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks.
 * 		</p>
 */
export interface ResourceCollection {
    /**
     * <p> An array of the names of AWS CloudFormation stacks. The stacks define AWS resources
     *    		that DevOps Guru analyzes. You can specify up to 500 AWS CloudFormation stacks.
     *    	</p>
     */
    CloudFormation?: CloudFormationCollection;
}
export declare namespace ResourceCollection {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceCollection) => any;
}
/**
 * <p>Information about an anomaly. This object is returned by <code>ListAnomalies</code>.</p>
 */
export interface ProactiveAnomaly {
    /**
     * <p>
     * 			The ID of a proactive anomaly.
     * 		</p>
     */
    Id?: string;
    /**
     * <p>
     * 			The severity of a proactive anomaly.
     * 		</p>
     */
    Severity?: AnomalySeverity | string;
    /**
     * <p>
     * 			The status of a proactive anomaly.
     * 		</p>
     */
    Status?: AnomalyStatus | string;
    /**
     * <p>
     * 			The time of the anomaly's most recent update.
     * 		</p>
     */
    UpdateTime?: Date;
    /**
     * <p>
     * 			A time range that specifies when the observed unusual behavior in an anomaly started and ended.
     * 		</p>
     */
    AnomalyTimeRange?: AnomalyTimeRange;
    /**
     * <p>
     * 			The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.
     * 		</p>
     */
    PredictionTimeRange?: PredictionTimeRange;
    /**
     * <p>
     * 			Details about the source of the analyzed operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics.
     * 		</p>
     */
    SourceDetails?: AnomalySourceDetails;
    /**
     * <p>
     * 			The ID of the insight that contains this anomaly. An insight is composed of related anomalies.
     * 		</p>
     */
    AssociatedInsightId?: string;
    /**
     * <p>
     * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
     *       	only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks.
     * 		</p>
     */
    ResourceCollection?: ResourceCollection;
    /**
     * <p>
     * 			A threshold that was exceeded by behavior in analyzed resources. Exceeding this
     * 			threshold is related to the anomalous behavior that generated this anomaly.
     * 		</p>
     */
    Limit?: number;
}
export declare namespace ProactiveAnomaly {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProactiveAnomaly) => any;
}
/**
 * <p>Details about a reactive anomaly.  This object is returned by <code>ListAnomalies</code>.</p>
 */
export interface ReactiveAnomaly {
    /**
     * <p>The ID of the reactive anomaly. </p>
     */
    Id?: string;
    /**
     * <p>The severity of the anomaly. </p>
     */
    Severity?: AnomalySeverity | string;
    /**
     * <p>
     * 			The status of the anomaly.
     * 		</p>
     */
    Status?: AnomalyStatus | string;
    /**
     * <p>
     * 			A time range that specifies when the observed unusual behavior in an anomaly started and ended.
     * 		</p>
     */
    AnomalyTimeRange?: AnomalyTimeRange;
    /**
     * <p>
     * 			Details about the source of the analyzed operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics.
     * 		</p>
     */
    SourceDetails?: AnomalySourceDetails;
    /**
     * <p>
     * 			The ID of the insight that contains this anomaly. An insight is composed of related anomalies.
     * 		</p>
     */
    AssociatedInsightId?: string;
    /**
     * <p>
     * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
     *       	only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks.
     * 		</p>
     */
    ResourceCollection?: ResourceCollection;
}
export declare namespace ReactiveAnomaly {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ReactiveAnomaly) => any;
}
export interface DescribeAnomalyResponse {
    /**
     * <p>
     * 			A <code>ReactiveAnomaly</code> object that represents the requested anomaly.
     * 		</p>
     */
    ProactiveAnomaly?: ProactiveAnomaly;
    /**
     * <p>
     * 			A <code>ProactiveAnomaly</code> object that represents the requested anomaly.
     * 		</p>
     */
    ReactiveAnomaly?: ReactiveAnomaly;
}
export declare namespace DescribeAnomalyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAnomalyResponse) => any;
}
export interface DescribeFeedbackRequest {
    /**
     * <p>
     * 			The ID of the insight for which the feedback was provided.
     * 		</p>
     */
    InsightId?: string;
}
export declare namespace DescribeFeedbackRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFeedbackRequest) => any;
}
export declare enum InsightFeedbackOption {
    ALERT_TOO_SENSITIVE = "ALERT_TOO_SENSITIVE",
    DATA_INCORRECT = "DATA_INCORRECT",
    DATA_NOISY_ANOMALY = "DATA_NOISY_ANOMALY",
    RECOMMENDATION_USEFUL = "RECOMMENDATION_USEFUL",
    VALID_COLLECTION = "VALID_COLLECTION"
}
/**
 * <p>
 *       	Information about insight feedback received from a customer.
 *       </p>
 */
export interface InsightFeedback {
    /**
     * <p>
     *       	The insight feedback ID.
     *       </p>
     */
    Id?: string;
    /**
     * <p>
     *       	The feedback provided by the customer.
     *       </p>
     */
    Feedback?: InsightFeedbackOption | string;
}
export declare namespace InsightFeedback {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InsightFeedback) => any;
}
export interface DescribeFeedbackResponse {
    /**
     * <p>
     *       	Information about insight feedback received from a customer.
     *       </p>
     */
    InsightFeedback?: InsightFeedback;
}
export declare namespace DescribeFeedbackResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeFeedbackResponse) => any;
}
export interface DescribeInsightRequest {
    /**
     * <p>
     *    		The ID of the insight.
     *    	</p>
     */
    Id: string | undefined;
}
export declare namespace DescribeInsightRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeInsightRequest) => any;
}
/**
 * <p> A time ranged that specifies when the observed behavior in an insight started and
 * 			ended. </p>
 */
export interface InsightTimeRange {
    /**
     * <p>
     * 			The time when the behavior described in an insight started.
     * 		</p>
     */
    StartTime: Date | undefined;
    /**
     * <p>
     * 			The time when the behavior described in an insight ended.
     * 		</p>
     */
    EndTime?: Date;
}
export declare namespace InsightTimeRange {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InsightTimeRange) => any;
}
export declare enum InsightSeverity {
    HIGH = "HIGH",
    LOW = "LOW",
    MEDIUM = "MEDIUM"
}
export declare enum InsightStatus {
    CLOSED = "CLOSED",
    ONGOING = "ONGOING"
}
/**
 * <p>Details about a proactive insight. This object is returned by <code>ListInsights</code>.</p>
 */
export interface ProactiveInsight {
    /**
     * <p>The ID of the proactive insight. </p>
     */
    Id?: string;
    /**
     * <p>The name of the proactive insight. </p>
     */
    Name?: string;
    /**
     * <p>The severity of the proactive insight. </p>
     */
    Severity?: InsightSeverity | string;
    /**
     * <p>The status of the proactive insight. </p>
     */
    Status?: InsightStatus | string;
    /**
     * <p> A time ranged that specifies when the observed behavior in an insight started and
     * 			ended. </p>
     */
    InsightTimeRange?: InsightTimeRange;
    /**
     * <p>
     * 			The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.
     * 		</p>
     */
    PredictionTimeRange?: PredictionTimeRange;
    /**
     * <p>
     * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
     *       	only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks.
     * 		</p>
     */
    ResourceCollection?: ResourceCollection;
    /**
     * <p>
     * 			The ID of the AWS System Manager OpsItem created for this insight. You must enable
     * 			the creation of OpstItems insights before they are created for each insight.
     * 		</p>
     */
    SsmOpsItemId?: string;
}
export declare namespace ProactiveInsight {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProactiveInsight) => any;
}
/**
 * <p>
 * 			Information about a reactive insight. This object is returned by <code>ListInsights</code>.
 * 		</p>
 */
export interface ReactiveInsight {
    /**
     * <p>
     * 			The ID of a reactive insight.
     * 		</p>
     */
    Id?: string;
    /**
     * <p>
     * 			The name of a reactive insight.
     * 		</p>
     */
    Name?: string;
    /**
     * <p>
     * 			The severity of a reactive insight.
     * 		</p>
     */
    Severity?: InsightSeverity | string;
    /**
     * <p>
     * 			The status of a reactive insight.
     * 		</p>
     */
    Status?: InsightStatus | string;
    /**
     * <p> A time ranged that specifies when the observed behavior in an insight started and
     * 			ended. </p>
     */
    InsightTimeRange?: InsightTimeRange;
    /**
     * <p>
     * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
     *       	only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks.
     * 		</p>
     */
    ResourceCollection?: ResourceCollection;
    /**
     * <p>
     * 			The ID of the AWS System Manager OpsItem created for this insight. You must enable
     * 			the creation of OpstItems insights before they are created for each insight.
     * 		</p>
     */
    SsmOpsItemId?: string;
}
export declare namespace ReactiveInsight {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ReactiveInsight) => any;
}
export interface DescribeInsightResponse {
    /**
     * <p>
     * 			A <code>ProactiveInsight</code> object that represents the requested insight.
     * 		</p>
     */
    ProactiveInsight?: ProactiveInsight;
    /**
     * <p>
     * 			A <code>ReactiveInsight</code> object that represents the requested insight.
     * 		</p>
     */
    ReactiveInsight?: ReactiveInsight;
}
export declare namespace DescribeInsightResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeInsightResponse) => any;
}
export declare enum ResourceCollectionType {
    AWS_CLOUD_FORMATION = "AWS_CLOUD_FORMATION",
    AWS_SERVICE = "AWS_SERVICE"
}
export interface DescribeResourceCollectionHealthRequest {
    /**
     * <p>
     *    		An AWS resource collection type. This type specifies how analyzed AWS resources are defined. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
     *       	only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks.
     *    	</p>
     */
    ResourceCollectionType: ResourceCollectionType | string | undefined;
    /**
     * <p>The pagination token to use to retrieve
     *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeResourceCollectionHealthRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeResourceCollectionHealthRequest) => any;
}
/**
 * <p>
 *       	Information about the number of open reactive and proactive insights that can be
 *       	used to gauge the health of your system.
 *       </p>
 */
export interface InsightHealth {
    /**
     * <p>
     *       	The number of open proactive insights.
     *       </p>
     */
    OpenProactiveInsights?: number;
    /**
     * <p>
     *       	The number of open reactive insights.
     *       </p>
     */
    OpenReactiveInsights?: number;
    /**
     * <p>
     *       	The Meant Time to Recover (MTTR) for the insight.
     *       </p>
     */
    MeanTimeToRecoverInMilliseconds?: number;
}
export declare namespace InsightHealth {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InsightHealth) => any;
}
/**
 * <p>
 *    		Information about the health of AWS resources in your account that are specified by an AWS CloudFormation stack.
 *    	</p>
 */
export interface CloudFormationHealth {
    /**
     * <p>
     *    		The name of the CloudFormation stack.
     *    	</p>
     */
    StackName?: string;
    /**
     * <p>
     *    		Information about the health of the AWS resources in your account that are specified by an AWS CloudFormation stack, including
     *    		the number of open proactive, open reactive insights, and the Mean Time to Recover (MTTR) of closed insights.
     *    	</p>
     */
    Insight?: InsightHealth;
}
export declare namespace CloudFormationHealth {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CloudFormationHealth) => any;
}
/**
 * <p>Contains the number of open proactive and reactive insights in an analyzed AWS service.</p>
 */
export interface ServiceInsightHealth {
    /**
     * <p>The number of open proactive insights in the AWS service</p>
     */
    OpenProactiveInsights?: number;
    /**
     * <p>The number of open reactive insights in the AWS service</p>
     */
    OpenReactiveInsights?: number;
}
export declare namespace ServiceInsightHealth {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceInsightHealth) => any;
}
export declare enum ServiceName {
    API_GATEWAY = "API_GATEWAY",
    APPLICATION_ELB = "APPLICATION_ELB",
    AUTO_SCALING_GROUP = "AUTO_SCALING_GROUP",
    CLOUD_FRONT = "CLOUD_FRONT",
    DYNAMO_DB = "DYNAMO_DB",
    EC2 = "EC2",
    ECS = "ECS",
    EKS = "EKS",
    ELASTIC_BEANSTALK = "ELASTIC_BEANSTALK",
    ELASTI_CACHE = "ELASTI_CACHE",
    ELB = "ELB",
    ES = "ES",
    KINESIS = "KINESIS",
    LAMBDA = "LAMBDA",
    NAT_GATEWAY = "NAT_GATEWAY",
    NETWORK_ELB = "NETWORK_ELB",
    RDS = "RDS",
    REDSHIFT = "REDSHIFT",
    ROUTE_53 = "ROUTE_53",
    S3 = "S3",
    SAGE_MAKER = "SAGE_MAKER",
    SNS = "SNS",
    SQS = "SQS",
    STEP_FUNCTIONS = "STEP_FUNCTIONS",
    SWF = "SWF"
}
/**
 * <p>Represents the health of an AWS service.</p>
 */
export interface ServiceHealth {
    /**
     * <p>The name of the AWS service.</p>
     */
    ServiceName?: ServiceName | string;
    /**
     * <p>Represents the health of an AWS service. This is a <code>ServiceInsightHealth</code> that
     * 		contains the number of open proactive and reactive insights for this service.</p>
     */
    Insight?: ServiceInsightHealth;
}
export declare namespace ServiceHealth {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceHealth) => any;
}
export interface DescribeResourceCollectionHealthResponse {
    /**
     * <p>
     *    		The returned <code>CloudFormationHealthOverview</code> object that contains an <code>InsightHealthOverview</code> object with
     *    		the requested system health information.
     *    	</p>
     */
    CloudFormation: CloudFormationHealth[] | undefined;
    /**
     * <p>An array of <code>ServiceHealth</code> objects that describes the health of the AWS services
     * 		associated with the resources in the collection.</p>
     */
    Service?: ServiceHealth[];
    /**
     * <p>The pagination token to use to retrieve
     *    the next page of results for this operation. If there are no more pages, this value is null.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeResourceCollectionHealthResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeResourceCollectionHealthResponse) => any;
}
export interface DescribeServiceIntegrationRequest {
}
export declare namespace DescribeServiceIntegrationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeServiceIntegrationRequest) => any;
}
export declare enum OptInStatus {
    DISABLED = "DISABLED",
    ENABLED = "ENABLED"
}
/**
 * <p>
 * 			Information about whether DevOps Guru is configured to create an OpsItem in AWS Systems Manager OpsCenter for each created insight.
 * 		</p>
 */
export interface OpsCenterIntegration {
    /**
     * <p>
     * 			Specifies if DevOps Guru is enabled to create an AWS Systems Manager OpsItem for each created insight.
     * 		</p>
     */
    OptInStatus?: OptInStatus | string;
}
export declare namespace OpsCenterIntegration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OpsCenterIntegration) => any;
}
/**
 * <p>
 * 			Information about the integration of DevOps Guru with another AWS service, such as AWS Systems Manager.
 * 		</p>
 */
export interface ServiceIntegrationConfig {
    /**
     * <p>
     * 			Information about whether DevOps Guru is configured to create an OpsItem in AWS Systems Manager OpsCenter for each created insight.
     * 		</p>
     */
    OpsCenter?: OpsCenterIntegration;
}
export declare namespace ServiceIntegrationConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceIntegrationConfig) => any;
}
export interface DescribeServiceIntegrationResponse {
    /**
     * <p>
     * 			Information about the integration of DevOps Guru with another AWS service, such as AWS Systems Manager.
     * 		</p>
     */
    ServiceIntegration?: ServiceIntegrationConfig;
}
export declare namespace DescribeServiceIntegrationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeServiceIntegrationResponse) => any;
}
export interface GetCostEstimationRequest {
    /**
     * <p>The pagination token to use to retrieve
     *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
}
export declare namespace GetCostEstimationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetCostEstimationRequest) => any;
}
export declare enum CostEstimationServiceResourceState {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}
/**
 * <p>An object that contains information about the estimated monthly cost to
 * 			analyze an AWS resource. For more information,
 * 			see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your
 * 			Amazon DevOps Guru costs</a> and
 * 			<a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.</p>
 */
export interface ServiceResourceCost {
    /**
     * <p>The type of the AWS resource.</p>
     */
    Type?: string;
    /**
     * <p>The state of the resource. The resource is <code>ACTIVE</code> if it produces metrics,
     * 			events, or logs within an hour, otherwise it is <code>INACTIVE</code>. You pay for
     * 			the number of active AWS resource hours analyzed for each resource. Inactive resources are
     * 			not charged.
     * 		</p>
     */
    State?: CostEstimationServiceResourceState | string;
    /**
     * <p>The number of active resources analyzed for this service to create a monthly cost
     * 			estimate.</p>
     */
    Count?: number;
    /**
     * <p>The price per hour to analyze the resources in the service.
     * 			For more information,
     * 			see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your
     * 			Amazon DevOps Guru costs</a> and
     * 			<a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.</p>
     */
    UnitCost?: number;
    /**
     * <p>The total estimated monthly cost to analyze the active resources for this resource.</p>
     */
    Cost?: number;
}
export declare namespace ServiceResourceCost {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceResourceCost) => any;
}
/**
 * <p>Information about an AWS CloudFormation stack used to create a monthly cost estimate for DevOps Guru to analyze
 * 		AWS resources. The maximum number of stacks you can specify for a cost estimate is one. The estimate created is for the cost
 * 		to analyze the AWS resources defined by the stack. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a>
 * 			in the <i>AWS CloudFormation User Guide</i>.</p>
 */
export interface CloudFormationCostEstimationResourceCollectionFilter {
    /**
     * <p>An array of CloudFormation stack names. Its size is fixed at 1 item.</p>
     */
    StackNames?: string[];
}
export declare namespace CloudFormationCostEstimationResourceCollectionFilter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CloudFormationCostEstimationResourceCollectionFilter) => any;
}
/**
 * <p>Information about a filter used to specify which AWS resources are analyzed to create
 * 			a monthly DevOps Guru cost estimate. For more information,
 * 			see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your
 * 			Amazon DevOps Guru costs</a> and
 * 			<a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.
 * 		</p>
 */
export interface CostEstimationResourceCollectionFilter {
    /**
     * <p>An object that specifies the CloudFormation stack that defines the AWS resources
     * 			used to create a monthly estimate for DevOps Guru.</p>
     */
    CloudFormation?: CloudFormationCostEstimationResourceCollectionFilter;
}
export declare namespace CostEstimationResourceCollectionFilter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CostEstimationResourceCollectionFilter) => any;
}
export declare enum CostEstimationStatus {
    COMPLETED = "COMPLETED",
    ONGOING = "ONGOING"
}
/**
 * <p>The time range of a cost estimation.</p>
 */
export interface CostEstimationTimeRange {
    /**
     * <p>The start time of the cost estimation.</p>
     */
    StartTime?: Date;
    /**
     * <p>The end time of the cost estimation.</p>
     */
    EndTime?: Date;
}
export declare namespace CostEstimationTimeRange {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CostEstimationTimeRange) => any;
}
export interface GetCostEstimationResponse {
    /**
     * <p>The collection of the AWS resources used to create your monthly DevOps Guru cost estimate.</p>
     */
    ResourceCollection?: CostEstimationResourceCollectionFilter;
    /**
     * <p>The status of creating this cost estimate. If it's still in progress, the status
     * 			<code>ONGOING</code> is returned. If it is finished, the status <code>COMPLETED</code> is returned.</p>
     */
    Status?: CostEstimationStatus | string;
    /**
     * <p>An array of <code>ResourceCost</code> objects that each contains details
     * 			about the monthly cost estimate to analyze one of your AWS resources.</p>
     */
    Costs?: ServiceResourceCost[];
    /**
     * <p>The start and end time of the cost estimation.</p>
     */
    TimeRange?: CostEstimationTimeRange;
    /**
     * <p>The estimated monthly cost to analyze the AWS resources.
     * 			This value is the sum of the estimated costs to analyze each resource in the <code>Costs</code>
     * 			object in this response.</p>
     */
    TotalCost?: number;
    /**
     * <p>The pagination token to use to retrieve
     *    the next page of results for this operation. If there are no more pages, this value is null.</p>
     */
    NextToken?: string;
}
export declare namespace GetCostEstimationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetCostEstimationResponse) => any;
}
export interface GetResourceCollectionRequest {
    /**
     * <p>
     *    		The type of AWS resource collections to return. The one valid value is <code>CLOUD_FORMATION</code> for
     *    		AWS CloudFormation stacks.
     *    	</p>
     */
    ResourceCollectionType: ResourceCollectionType | string | undefined;
    /**
     * <p>The pagination token to use to retrieve
     *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
}
export declare namespace GetResourceCollectionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetResourceCollectionRequest) => any;
}
/**
 * <p>
 * 			Information about AWS CloudFormation stacks. You can use up to 500 stacks to specify which AWS resources in your account to analyze.
 * 			For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a>
 * 			in the <i>AWS CloudFormation User Guide</i>.
 * 		</p>
 */
export interface CloudFormationCollectionFilter {
    /**
     * <p>
     * 			An array of CloudFormation stack names.
     * 		</p>
     */
    StackNames?: string[];
}
export declare namespace CloudFormationCollectionFilter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CloudFormationCollectionFilter) => any;
}
/**
 * <p>
 * 			Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru.
 * 		</p>
 */
export interface ResourceCollectionFilter {
    /**
     * <p>
     * 			Information about AWS CloudFormation stacks. You can use up to 500 stacks to specify which AWS resources in your account to analyze.
     * 			For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a>
     * 			in the <i>AWS CloudFormation User Guide</i>.
     * 		</p>
     */
    CloudFormation?: CloudFormationCollectionFilter;
}
export declare namespace ResourceCollectionFilter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceCollectionFilter) => any;
}
export interface GetResourceCollectionResponse {
    /**
     * <p>
     *    		The requested list of AWS resource collections. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
     *       	only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks.
     *    	</p>
     */
    ResourceCollection?: ResourceCollectionFilter;
    /**
     * <p>The pagination token to use to retrieve
     *    the next page of results for this operation. If there are no more pages, this value is null.</p>
     */
    NextToken?: string;
}
export declare namespace GetResourceCollectionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetResourceCollectionResponse) => any;
}
/**
 * <p>
 * 			A time range used to specify when the behavior of an insight or anomaly started.
 * 		</p>
 */
export interface StartTimeRange {
    /**
     * <p>
     * 			The start time of the time range.
     * 		</p>
     */
    FromTime?: Date;
    /**
     * <p>
     * 			The end time of the time range.
     * 		</p>
     */
    ToTime?: Date;
}
export declare namespace StartTimeRange {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartTimeRange) => any;
}
export interface ListAnomaliesForInsightRequest {
    /**
     * <p>
     * 			The ID of the insight. The returned anomalies belong to this insight.
     * 		</p>
     */
    InsightId: string | undefined;
    /**
     * <p>
     *    		A time range used to specify when the requested anomalies started. All returned anomalies started
     *    		during this time range.
     *    	</p>
     */
    StartTimeRange?: StartTimeRange;
    /**
     * <p>The maximum number of results to return with a single call.
     * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    MaxResults?: number;
    /**
     * <p>The pagination token to use to retrieve
     *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
}
export declare namespace ListAnomaliesForInsightRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAnomaliesForInsightRequest) => any;
}
/**
 * <p>Details about a proactive anomaly. This object is returned by
 * 			<code>DescribeAnomaly.</code>
 *          </p>
 */
export interface ProactiveAnomalySummary {
    /**
     * <p>The ID of the anomaly.</p>
     */
    Id?: string;
    /**
     * <p>The severity of the anomaly.</p>
     */
    Severity?: AnomalySeverity | string;
    /**
     * <p>The status of the anomaly.</p>
     */
    Status?: AnomalyStatus | string;
    /**
     * <p>
     * 			The time of the anomaly's most recent update.
     * 		</p>
     */
    UpdateTime?: Date;
    /**
     * <p>
     * 			A time range that specifies when the observed unusual behavior in an anomaly started and ended.
     * 		</p>
     */
    AnomalyTimeRange?: AnomalyTimeRange;
    /**
     * <p>
     * 			The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.
     * 		</p>
     */
    PredictionTimeRange?: PredictionTimeRange;
    /**
     * <p>
     * 			Details about the source of the analyzed operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics.
     * 		</p>
     */
    SourceDetails?: AnomalySourceDetails;
    /**
     * <p>
     * 			The ID of the insight that contains this anomaly. An insight is composed of related anomalies.
     * 		</p>
     */
    AssociatedInsightId?: string;
    /**
     * <p>
     * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
     *       	only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks.
     * 		</p>
     */
    ResourceCollection?: ResourceCollection;
    /**
     * <p>
     * 			A threshold that was exceeded by behavior in analyzed resources. Exceeding this
     * 			threshold is related to the anomalous behavior that generated this anomaly.
     * 		</p>
     */
    Limit?: number;
}
export declare namespace ProactiveAnomalySummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProactiveAnomalySummary) => any;
}
/**
 * <p>Details about a reactive anomaly. This object is returned by
 * 			<code>DescribeAnomaly.</code>
 *          </p>
 */
export interface ReactiveAnomalySummary {
    /**
     * <p>
     * 			The ID of the reactive anomaly.
     * 		</p>
     */
    Id?: string;
    /**
     * <p>
     * 			The severity of the reactive anomaly.
     * 		</p>
     */
    Severity?: AnomalySeverity | string;
    /**
     * <p>
     * 			The status of the reactive anomaly.
     * 		</p>
     */
    Status?: AnomalyStatus | string;
    /**
     * <p>
     * 			A time range that specifies when the observed unusual behavior in an anomaly started and ended.
     * 		</p>
     */
    AnomalyTimeRange?: AnomalyTimeRange;
    /**
     * <p>
     * 			Details about the source of the analyzed operational data that triggered the anomaly. The one supported source is Amazon CloudWatch metrics.
     * 		</p>
     */
    SourceDetails?: AnomalySourceDetails;
    /**
     * <p>
     * 			The ID of the insight that contains this anomaly. An insight is composed of related anomalies.
     * 		</p>
     */
    AssociatedInsightId?: string;
    /**
     * <p>
     * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
     *       	only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks.
     * 		</p>
     */
    ResourceCollection?: ResourceCollection;
}
export declare namespace ReactiveAnomalySummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ReactiveAnomalySummary) => any;
}
export interface ListAnomaliesForInsightResponse {
    /**
     * <p>
     * 			An array of <code>ProactiveAnomalySummary</code> objects that represent the requested anomalies
     * 		</p>
     */
    ProactiveAnomalies?: ProactiveAnomalySummary[];
    /**
     * <p>
     * 			An array of <code>ReactiveAnomalySummary</code> objects that represent the requested anomalies
     * 		</p>
     */
    ReactiveAnomalies?: ReactiveAnomalySummary[];
    /**
     * <p>The pagination token to use to retrieve
     *    the next page of results for this operation. If there are no more pages, this value is null.</p>
     */
    NextToken?: string;
}
export declare namespace ListAnomaliesForInsightResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAnomaliesForInsightResponse) => any;
}
export declare enum EventDataSource {
    AWS_CLOUD_TRAIL = "AWS_CLOUD_TRAIL",
    AWS_CODE_DEPLOY = "AWS_CODE_DEPLOY"
}
export declare enum EventClass {
    CONFIG_CHANGE = "CONFIG_CHANGE",
    DEPLOYMENT = "DEPLOYMENT",
    INFRASTRUCTURE = "INFRASTRUCTURE",
    SCHEMA_CHANGE = "SCHEMA_CHANGE",
    SECURITY_CHANGE = "SECURITY_CHANGE"
}
/**
 * <p>
 * 			The time range during which an AWS event occurred. AWS resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and
 * 			provide recommendations to improve your operational solutions.
 * 		</p>
 */
export interface EventTimeRange {
    /**
     * <p>
     * 			The time when the event started.
     * 		</p>
     */
    FromTime: Date | undefined;
    /**
     * <p>
     * 			The time when the event ended.
     * 		</p>
     */
    ToTime: Date | undefined;
}
export declare namespace EventTimeRange {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EventTimeRange) => any;
}
/**
 * <p>
 * 			Filters you can use to specify which events are returned when <code>ListEvents</code> is called.
 * 		</p>
 */
export interface ListEventsFilters {
    /**
     * <p>
     * 			An ID of an insight that is related to the events you want to filter for.
     * 		</p>
     */
    InsightId?: string;
    /**
     * <p> A time range during which you want the filtered events to have occurred. </p>
     */
    EventTimeRange?: EventTimeRange;
    /**
     * <p>
     * 			The class of the events you want to filter for, such as an infrastructure change, a deployment, or a schema change.
     * 		</p>
     */
    EventClass?: EventClass | string;
    /**
     * <p>
     * 			The AWS source that emitted the events you want to filter for.
     * 		</p>
     */
    EventSource?: string;
    /**
     * <p>
     * 			The source, <code>AWS_CLOUD_TRAIL</code> or <code>AWS_CODE_DEPLOY</code>, of the events you want returned.
     * 		</p>
     */
    DataSource?: EventDataSource | string;
    /**
     * <p>
     * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
     *       	only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks.
     * 		</p>
     */
    ResourceCollection?: ResourceCollection;
}
export declare namespace ListEventsFilters {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListEventsFilters) => any;
}
export interface ListEventsRequest {
    /**
     * <p>
     *    		A <code>ListEventsFilters</code> object used to specify which events to return.
     *    	</p>
     */
    Filters: ListEventsFilters | undefined;
    /**
     * <p>The maximum number of results to return with a single call.
     * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    MaxResults?: number;
    /**
     * <p>The pagination token to use to retrieve
     *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
}
export declare namespace ListEventsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListEventsRequest) => any;
}
/**
 * <p>
 * 			The AWS resource that emitted an event. AWS resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and
 * 			provide recommendations to improve your operational solutions.
 * 		</p>
 */
export interface EventResource {
    /**
     * <p>
     * 			The type of resource that emitted an event.
     * 		</p>
     */
    Type?: string;
    /**
     * <p>
     * 			The name of the resource that emitted an event.
     * 		</p>
     */
    Name?: string;
    /**
     * <p>
     * 			The Amazon Resource Name (ARN) of the resource that emitted an event.
     * 		</p>
     */
    Arn?: string;
}
export declare namespace EventResource {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EventResource) => any;
}
/**
 * <p>
 * 			An AWS resource event. AWS resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and
 * 			provide recommendations to improve your operational solutions.
 * 		</p>
 */
export interface Event {
    /**
     * <p>
     * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
     *       	only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks.
     * 		</p>
     */
    ResourceCollection?: ResourceCollection;
    /**
     * <p>
     * 			The ID of the event.
     * 		</p>
     */
    Id?: string;
    /**
     * <p> A <code>Timestamp</code> that specifies the time the event occurred. </p>
     */
    Time?: Date;
    /**
     * <p>
     * 			The AWS source that emitted the event.
     * 		</p>
     */
    EventSource?: string;
    /**
     * <p>
     * 			The name of the event.
     * 		</p>
     */
    Name?: string;
    /**
     * <p>
     * 			The source, <code>AWS_CLOUD_TRAIL</code> or <code>AWS_CODE_DEPLOY</code>, where DevOps Guru analysis found the event.
     * 		</p>
     */
    DataSource?: EventDataSource | string;
    /**
     * <p>
     * 			The class of the event. The class specifies what the event is related to, such as an infrastructure change, a deployment, or a schema change.
     * 		</p>
     */
    EventClass?: EventClass | string;
    /**
     * <p>
     * 			An <code>EventResource</code> object that contains information about the resource that emitted the event.
     * 		</p>
     */
    Resources?: EventResource[];
}
export declare namespace Event {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Event) => any;
}
export interface ListEventsResponse {
    /**
     * <p>
     *    		A list of the requested events.
     *    	</p>
     */
    Events: Event[] | undefined;
    /**
     * <p>The pagination token to use to retrieve
     *    the next page of results for this operation. If there are no more pages, this value is null.</p>
     */
    NextToken?: string;
}
export declare namespace ListEventsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListEventsResponse) => any;
}
export declare enum InsightType {
    PROACTIVE = "PROACTIVE",
    REACTIVE = "REACTIVE"
}
/**
 * <p>
 *    		Used to filter for insights that have any status.
 *    	</p>
 */
export interface ListInsightsAnyStatusFilter {
    /**
     * <p>
     *    		Use to filter for either <code>REACTIVE</code> or <code>PROACTIVE</code> insights.
     *    	</p>
     */
    Type: InsightType | string | undefined;
    /**
     * <p>
     *    		A time range used to specify when the behavior of the filtered insights started.
     *    	</p>
     */
    StartTimeRange: StartTimeRange | undefined;
}
export declare namespace ListInsightsAnyStatusFilter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListInsightsAnyStatusFilter) => any;
}
/**
 * <p>
 *       	A range of time that specifies when anomalous behavior in an anomaly or insight ended.
 *       </p>
 */
export interface EndTimeRange {
    /**
     * <p>
     *       	The earliest end time in the time range.
     *       </p>
     */
    FromTime?: Date;
    /**
     * <p>
     *       	The latest end time in the time range.
     *       </p>
     */
    ToTime?: Date;
}
export declare namespace EndTimeRange {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EndTimeRange) => any;
}
/**
 * <p>
 *    		Used to filter for insights that have the status <code>CLOSED</code>.
 *    	</p>
 */
export interface ListInsightsClosedStatusFilter {
    /**
     * <p>
     *       	Use to filter for either <code>REACTIVE</code> or <code>PROACTIVE</code> insights.
     *       </p>
     */
    Type: InsightType | string | undefined;
    /**
     * <p>
     *    		A time range used to specify when the behavior of the filtered insights ended.
     *    	</p>
     */
    EndTimeRange: EndTimeRange | undefined;
}
export declare namespace ListInsightsClosedStatusFilter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListInsightsClosedStatusFilter) => any;
}
/**
 * <p>
 *       	Used to filter for insights that have the status <code>ONGOING</code>.
 *       </p>
 */
export interface ListInsightsOngoingStatusFilter {
    /**
     * <p>
     *    		Use to filter for either <code>REACTIVE</code> or <code>PROACTIVE</code> insights.
     *    	</p>
     */
    Type: InsightType | string | undefined;
}
export declare namespace ListInsightsOngoingStatusFilter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListInsightsOngoingStatusFilter) => any;
}
/**
 * <p>
 *       	A filter used by <code>ListInsights</code> to specify which insights to return.
 *       </p>
 */
export interface ListInsightsStatusFilter {
    /**
     * <p>
     *       	A <code>ListInsightsAnyStatusFilter</code> that specifies ongoing insights
     *       	that are either <code>REACTIVE</code> or <code>PROACTIVE</code>.
     *       </p>
     */
    Ongoing?: ListInsightsOngoingStatusFilter;
    /**
     * <p>
     *    		A <code>ListInsightsClosedStatusFilter</code> that specifies closed insights that are
     *    		either <code>REACTIVE</code> or <code>PROACTIVE</code>.
     *    	</p>
     */
    Closed?: ListInsightsClosedStatusFilter;
    /**
     * <p>
     *    		A <code>ListInsightsAnyStatusFilter</code> that specifies insights of any status
     *    		that are either <code>REACTIVE</code> or <code>PROACTIVE</code>.
     *    	</p>
     */
    Any?: ListInsightsAnyStatusFilter;
}
export declare namespace ListInsightsStatusFilter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListInsightsStatusFilter) => any;
}
export interface ListInsightsRequest {
    /**
     * <p>
     *       	A filter used to filter the returned insights by their status. You can specify one status filter.
     *       </p>
     */
    StatusFilter: ListInsightsStatusFilter | undefined;
    /**
     * <p>The maximum number of results to return with a single call.
     * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    MaxResults?: number;
    /**
     * <p>The pagination token to use to retrieve
     *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
}
export declare namespace ListInsightsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListInsightsRequest) => any;
}
/**
 * <p>A collection of the names of AWS services.</p>
 */
export interface ServiceCollection {
    /**
     * <p>An array of strings that each specifies the name of an AWS service.</p>
     */
    ServiceNames?: (ServiceName | string)[];
}
export declare namespace ServiceCollection {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceCollection) => any;
}
/**
 * <p>Details about a proactive insight. This object is returned by
 * 			<code>DescribeInsight.</code>
 *          </p>
 */
export interface ProactiveInsightSummary {
    /**
     * <p>The ID of the proactive insight. </p>
     */
    Id?: string;
    /**
     * <p>The name of the proactive insight. </p>
     */
    Name?: string;
    /**
     * <p>The severity of the proactive insight. </p>
     */
    Severity?: InsightSeverity | string;
    /**
     * <p>The status of the proactive insight. </p>
     */
    Status?: InsightStatus | string;
    /**
     * <p> A time ranged that specifies when the observed behavior in an insight started and
     * 			ended. </p>
     */
    InsightTimeRange?: InsightTimeRange;
    /**
     * <p>
     * 			The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.
     * 		</p>
     */
    PredictionTimeRange?: PredictionTimeRange;
    /**
     * <p>
     * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
     *       	only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks.
     * 		</p>
     */
    ResourceCollection?: ResourceCollection;
    /**
     * <p>A collection of the names of AWS services.</p>
     */
    ServiceCollection?: ServiceCollection;
}
export declare namespace ProactiveInsightSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProactiveInsightSummary) => any;
}
/**
 * <p> Information about a reactive insight. This object is returned by
 * 				<code>DescribeInsight.</code>
 *          </p>
 */
export interface ReactiveInsightSummary {
    /**
     * <p>
     * 			The ID of a reactive summary.
     * 		</p>
     */
    Id?: string;
    /**
     * <p>
     * 			The name of a reactive insight.
     * 		</p>
     */
    Name?: string;
    /**
     * <p>
     * 			The severity of a reactive insight.
     * 		</p>
     */
    Severity?: InsightSeverity | string;
    /**
     * <p>
     * 			The status of a reactive insight.
     * 		</p>
     */
    Status?: InsightStatus | string;
    /**
     * <p> A time ranged that specifies when the observed behavior in an insight started and
     * 			ended. </p>
     */
    InsightTimeRange?: InsightTimeRange;
    /**
     * <p>
     * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
     *       	only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks.
     * 		</p>
     */
    ResourceCollection?: ResourceCollection;
    /**
     * <p>A collection of the names of AWS services.</p>
     */
    ServiceCollection?: ServiceCollection;
}
export declare namespace ReactiveInsightSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ReactiveInsightSummary) => any;
}
export interface ListInsightsResponse {
    /**
     * <p>
     * 			The returned list of proactive insights.
     * 		</p>
     */
    ProactiveInsights?: ProactiveInsightSummary[];
    /**
     * <p>
     * 			The returned list of reactive insights.
     * 		</p>
     */
    ReactiveInsights?: ReactiveInsightSummary[];
    /**
     * <p>The pagination token to use to retrieve
     *    the next page of results for this operation. If there are no more pages, this value is null.</p>
     */
    NextToken?: string;
}
export declare namespace ListInsightsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListInsightsResponse) => any;
}
export interface ListNotificationChannelsRequest {
    /**
     * <p>The pagination token to use to retrieve
     *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
}
export declare namespace ListNotificationChannelsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListNotificationChannelsRequest) => any;
}
/**
 * <p>
 * 			Information about a notification channel. A notification channel is used to notify you when DevOps Guru creates an insight.
 * 			The one
 *       	supported notification channel is Amazon Simple Notification Service (Amazon SNS).
 * 		</p>
 *
 * 		       <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission
 * 				to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account.
 * 				For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions
 * 				for cross account Amazon SNS topics</a>.</p>
 * 				     <p>If you use an Amazon SNS topic that is encrypted by an AWS Key Management Service customer-managed key (CMK), then you must add permissions
 * 				to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for
 * 				AWS KMS–encrypted Amazon SNS topics</a>.</p>
 */
export interface NotificationChannel {
    /**
     * <p>
     * 			The ID of a notification channel.
     * 		</p>
     */
    Id?: string;
    /**
     * <p>
     * 			A <code>NotificationChannelConfig</code> object that contains information about configured notification channels.
     * 		</p>
     */
    Config?: NotificationChannelConfig;
}
export declare namespace NotificationChannel {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NotificationChannel) => any;
}
export interface ListNotificationChannelsResponse {
    /**
     * <p>
     *    		An array that contains the requested notification channels.
     *    	</p>
     */
    Channels?: NotificationChannel[];
    /**
     * <p>The pagination token to use to retrieve
     *    the next page of results for this operation. If there are no more pages, this value is null.</p>
     */
    NextToken?: string;
}
export declare namespace ListNotificationChannelsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListNotificationChannelsResponse) => any;
}
export declare enum Locale {
    DE_DE = "DE_DE",
    EN_GB = "EN_GB",
    EN_US = "EN_US",
    ES_ES = "ES_ES",
    FR_FR = "FR_FR",
    IT_IT = "IT_IT",
    JA_JP = "JA_JP",
    KO_KR = "KO_KR",
    PT_BR = "PT_BR",
    ZH_CN = "ZH_CN",
    ZH_TW = "ZH_TW"
}
export interface ListRecommendationsRequest {
    /**
     * <p>
     * 			The ID of the requested insight.
     * 		</p>
     */
    InsightId: string | undefined;
    /**
     * <p>The pagination token to use to retrieve
     *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
    /**
     * <p>A locale that specifies the language to use for recommendations.</p>
     */
    Locale?: Locale | string;
}
export declare namespace ListRecommendationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRecommendationsRequest) => any;
}
/**
 * <p>
 * 			Information about a resource in which DevOps Guru detected anomalous behavior.
 * 		</p>
 */
export interface RecommendationRelatedAnomalyResource {
    /**
     * <p>
     * 			The name of the resource.
     * 		</p>
     */
    Name?: string;
    /**
     * <p>
     * 			The type of the resource.
     * 		</p>
     */
    Type?: string;
}
export declare namespace RecommendationRelatedAnomalyResource {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RecommendationRelatedAnomalyResource) => any;
}
/**
 * <p>
 * 			Information about an Amazon CloudWatch metric that is analyzed by DevOps Guru. It is one of many analyzed metrics
 * 			that are used to generate insights.
 * 		</p>
 */
export interface RecommendationRelatedCloudWatchMetricsSourceDetail {
    /**
     * <p>The name of the CloudWatch metric.</p>
     */
    MetricName?: string;
    /**
     * <p>The namespace of the CloudWatch metric. A namespace is a container for CloudWatch metrics.</p>
     */
    Namespace?: string;
}
export declare namespace RecommendationRelatedCloudWatchMetricsSourceDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RecommendationRelatedCloudWatchMetricsSourceDetail) => any;
}
/**
 * <p>
 * 			Contains an array of <code>RecommendationRelatedCloudWatchMetricsSourceDetail</code> objects that contain the name
 * 			and namespace of an Amazon CloudWatch metric.
 * 		</p>
 */
export interface RecommendationRelatedAnomalySourceDetail {
    /**
     * <p> An array of <code>CloudWatchMetricsDetail</code> objects that contains information
     * 			about the analyzed metrics that displayed anomalous behavior. </p>
     */
    CloudWatchMetrics?: RecommendationRelatedCloudWatchMetricsSourceDetail[];
}
export declare namespace RecommendationRelatedAnomalySourceDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RecommendationRelatedAnomalySourceDetail) => any;
}
/**
 * <p>
 * 			Information about an anomaly that is related to a recommendation.
 * 		</p>
 */
export interface RecommendationRelatedAnomaly {
    /**
     * <p>
     * 			An array of objects that represent resources in which DevOps Guru detected anomalous behavior. Each object contains the name
     * 			and type of the resource.
     * 		</p>
     */
    Resources?: RecommendationRelatedAnomalyResource[];
    /**
     * <p>
     * 			Information about where the anomalous behavior related the recommendation was found. For example, details in Amazon CloudWatch metrics.
     * 		</p>
     */
    SourceDetails?: RecommendationRelatedAnomalySourceDetail[];
}
export declare namespace RecommendationRelatedAnomaly {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RecommendationRelatedAnomaly) => any;
}
/**
 * <p>
 * 			Information about an AWS resource that emitted and event that is related to a recommendation in an insight.
 * 		</p>
 */
export interface RecommendationRelatedEventResource {
    /**
     * <p>
     * 			The name of the resource that emitted the event. This corresponds to the <code>Name</code> field in an
     * 			<code>EventResource</code> object.
     * 		</p>
     */
    Name?: string;
    /**
     * <p>
     * 			The type of the resource that emitted the event. This corresponds to the <code>Type</code> field in an
     * 			<code>EventResource</code> object.
     * 		</p>
     */
    Type?: string;
}
export declare namespace RecommendationRelatedEventResource {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RecommendationRelatedEventResource) => any;
}
/**
 * <p>
 * 			Information about an event that is related to a recommendation.
 * 		</p>
 */
export interface RecommendationRelatedEvent {
    /**
     * <p>
     * 			The name of the event. This corresponds to the <code>Name</code> field in an
     * 			<code>Event</code> object.
     * 		</p>
     */
    Name?: string;
    /**
     * <p>
     * 			A <code>ResourceCollection</code> object that contains arrays of the names of AWS
     * 			CloudFormation stacks. You can specify up to 500 AWS CloudFormation stacks.
     * 		</p>
     */
    Resources?: RecommendationRelatedEventResource[];
}
export declare namespace RecommendationRelatedEvent {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RecommendationRelatedEvent) => any;
}
/**
 * <p> Recommendation information to help you remediate detected anomalous behavior that
 * 			generated an insight. </p>
 */
export interface Recommendation {
    /**
     * <p>
     * 			A description of the problem.
     * 		</p>
     */
    Description?: string;
    /**
     * <p>
     * 			A hyperlink to information to help you address the problem.
     * 		</p>
     */
    Link?: string;
    /**
     * <p>
     * 			The name of the recommendation.
     * 		</p>
     */
    Name?: string;
    /**
     * <p>
     * 			The reason DevOps Guru flagged the anomalous behavior as a problem.
     * 		</p>
     */
    Reason?: string;
    /**
     * <p>
     * 			Events that are related to the problem. Use these events to learn more about what's happening and to help address the issue.
     * 		</p>
     */
    RelatedEvents?: RecommendationRelatedEvent[];
    /**
     * <p>
     * 			Anomalies that are related to the problem. Use these Anomalies to learn more about what's happening and to help address the issue.
     * 		</p>
     */
    RelatedAnomalies?: RecommendationRelatedAnomaly[];
}
export declare namespace Recommendation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Recommendation) => any;
}
export interface ListRecommendationsResponse {
    /**
     * <p>
     *    		An array of the requested recommendations.
     *    	</p>
     */
    Recommendations?: Recommendation[];
    /**
     * <p>The pagination token to use to retrieve
     *    the next page of results for this operation. If there are no more pages, this value is null.</p>
     */
    NextToken?: string;
}
export declare namespace ListRecommendationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRecommendationsResponse) => any;
}
export interface PutFeedbackRequest {
    /**
     * <p>
     *    		The feedback from customers is about the recommendations in this insight.
     *    	</p>
     */
    InsightFeedback?: InsightFeedback;
}
export declare namespace PutFeedbackRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutFeedbackRequest) => any;
}
export interface PutFeedbackResponse {
}
export declare namespace PutFeedbackResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutFeedbackResponse) => any;
}
export interface RemoveNotificationChannelRequest {
    /**
     * <p>
     *    		The ID of the notification channel to be removed.
     *    	</p>
     */
    Id: string | undefined;
}
export declare namespace RemoveNotificationChannelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RemoveNotificationChannelRequest) => any;
}
export interface RemoveNotificationChannelResponse {
}
export declare namespace RemoveNotificationChannelResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RemoveNotificationChannelResponse) => any;
}
/**
 * <p>
 *    		Specifies one or more severity values and one or more status values that are used to search
 *    		for insights.
 *    	</p>
 */
export interface SearchInsightsFilters {
    /**
     * <p>
     *    		An array of severity values used to search for insights.
     *    	</p>
     */
    Severities?: (InsightSeverity | string)[];
    /**
     * <p>
     *    		An array of status values used to search for insights.
     *    	</p>
     */
    Statuses?: (InsightStatus | string)[];
    /**
     * <p>
     * 			A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
     *       	only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks.
     * 		</p>
     */
    ResourceCollection?: ResourceCollection;
    /**
     * <p>A collection of the names of AWS services.</p>
     */
    ServiceCollection?: ServiceCollection;
}
export declare namespace SearchInsightsFilters {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SearchInsightsFilters) => any;
}
export interface SearchInsightsRequest {
    /**
     * <p>
     *    		The start of the time range passed in. Returned insights occurred after this time.
     *    	</p>
     */
    StartTimeRange: StartTimeRange | undefined;
    /**
     * <p>
     *    		A <code>SearchInsightsFilters</code> object that is used to set the severity and status filters on your insight search.
     *    	</p>
     */
    Filters?: SearchInsightsFilters;
    /**
     * <p>The maximum number of results to return with a single call.
     * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
     */
    MaxResults?: number;
    /**
     * <p>The pagination token to use to retrieve
     *    the next page of results for this operation. If this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
    /**
     * <p>
     *    		The type of insights you are searching for (<code>REACTIVE</code> or <code>PROACTIVE</code>).
     *    	</p>
     */
    Type: InsightType | string | undefined;
}
export declare namespace SearchInsightsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SearchInsightsRequest) => any;
}
export interface SearchInsightsResponse {
    /**
     * <p>
     * 			The returned proactive insights.
     * 		</p>
     */
    ProactiveInsights?: ProactiveInsightSummary[];
    /**
     * <p>
     * 			The returned reactive insights.
     * 		</p>
     */
    ReactiveInsights?: ReactiveInsightSummary[];
    /**
     * <p>The pagination token to use to retrieve
     *    the next page of results for this operation. If there are no more pages, this value is null.</p>
     */
    NextToken?: string;
}
export declare namespace SearchInsightsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SearchInsightsResponse) => any;
}
export interface StartCostEstimationRequest {
    /**
     * <p>The collection of AWS resources used to create a monthly DevOps Guru cost estimate.</p>
     */
    ResourceCollection: CostEstimationResourceCollectionFilter | undefined;
    /**
     * <p>The idempotency token used to identify each cost estimate request.</p>
     */
    ClientToken?: string;
}
export declare namespace StartCostEstimationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartCostEstimationRequest) => any;
}
export interface StartCostEstimationResponse {
}
export declare namespace StartCostEstimationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartCostEstimationResponse) => any;
}
export declare enum UpdateResourceCollectionAction {
    ADD = "ADD",
    REMOVE = "REMOVE"
}
/**
 * <p> Contains the names of AWS CloudFormation stacks used to update a collection of stacks. You can specify up to 500 AWS CloudFormation stacks.</p>
 */
export interface UpdateCloudFormationCollectionFilter {
    /**
     * <p>
     * 			An array of the names of the AWS CloudFormation stacks to update. You can specify up to 500 AWS CloudFormation stacks.
     * 		</p>
     */
    StackNames?: string[];
}
export declare namespace UpdateCloudFormationCollectionFilter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateCloudFormationCollectionFilter) => any;
}
/**
 * <p>
 * 			Contains information used to update a collection of AWS resources.
 * 		</p>
 */
export interface UpdateResourceCollectionFilter {
    /**
     * <p>
     * 			An collection of AWS CloudFormation stacks. You can specify up to 500 AWS CloudFormation stacks.
     * 		</p>
     */
    CloudFormation?: UpdateCloudFormationCollectionFilter;
}
export declare namespace UpdateResourceCollectionFilter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateResourceCollectionFilter) => any;
}
export interface UpdateResourceCollectionRequest {
    /**
     * <p>
     * 			Specifies if the resource collection in the request is added or deleted to the resource collection.
     * 		</p>
     */
    Action: UpdateResourceCollectionAction | string | undefined;
    /**
     * <p>
     * 			Contains information used to update a collection of AWS resources.
     * 		</p>
     */
    ResourceCollection: UpdateResourceCollectionFilter | undefined;
}
export declare namespace UpdateResourceCollectionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateResourceCollectionRequest) => any;
}
export interface UpdateResourceCollectionResponse {
}
export declare namespace UpdateResourceCollectionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateResourceCollectionResponse) => any;
}
/**
 * <p>
 * 			Information about whether DevOps Guru is configured to create an OpsItem in AWS Systems Manager OpsCenter for each created insight.
 * 		</p>
 */
export interface OpsCenterIntegrationConfig {
    /**
     * <p>
     * 			Specifies if DevOps Guru is enabled to create an AWS Systems Manager OpsItem for each created insight.
     * 		</p>
     */
    OptInStatus?: OptInStatus | string;
}
export declare namespace OpsCenterIntegrationConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OpsCenterIntegrationConfig) => any;
}
/**
 * <p>
 * 			Information about updating the integration status of an AWS service, such as AWS Systems Manager, with DevOps Guru.
 * 		</p>
 */
export interface UpdateServiceIntegrationConfig {
    /**
     * <p>
     * 			Information about whether DevOps Guru is configured to create an OpsItem in AWS Systems Manager OpsCenter for each created insight.
     * 		</p>
     */
    OpsCenter?: OpsCenterIntegrationConfig;
}
export declare namespace UpdateServiceIntegrationConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateServiceIntegrationConfig) => any;
}
export interface UpdateServiceIntegrationRequest {
    /**
     * <p>
     * 			An <code>IntegratedServiceConfig</code> object used to specify the integrated service you want to update, and whether you
     * 			want to update it to enabled or disabled.
     * 		</p>
     */
    ServiceIntegration: UpdateServiceIntegrationConfig | undefined;
}
export declare namespace UpdateServiceIntegrationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateServiceIntegrationRequest) => any;
}
export interface UpdateServiceIntegrationResponse {
}
export declare namespace UpdateServiceIntegrationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateServiceIntegrationResponse) => any;
}
