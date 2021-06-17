import { AbortConfig, Action, ActiveViolation, AlertTarget, AuditCheckConfiguration, AuditCheckDetails, AuditFinding, AuditFrequency, AuditMitigationActionExecutionMetadata, AuditMitigationActionsExecutionStatus, AuditMitigationActionsTaskMetadata, AuditMitigationActionsTaskStatus, AuditMitigationActionsTaskTarget, AuditNotificationTarget, AuditSuppression, AuditTaskMetadata, AuditTaskStatus, AuditTaskType, AuthorizerConfig, AuthorizerDescription, AuthorizerStatus, AuthorizerSummary, AutoRegistrationStatus, AwsJobExecutionsRolloutConfig, AwsJobPresignedUrlConfig, Behavior, BillingGroupProperties, CustomMetricType, DayOfWeek, DimensionType, JobExecutionsRolloutConfig, LogLevel, MetricToRetain, MetricValue, MitigationActionParams, OTAUpdateFile, OTAUpdateStatus, Policy, PresignedUrlConfig, Protocol, ProvisioningHook, ResourceIdentifier, ServiceType, StreamFile, Tag, TargetSelection, TaskStatisticsForAuditCheck, ThingGroupProperties, ThingTypeProperties, TimeoutConfig, TopicRuleDestination, TopicRuleDestinationStatus, ViolationEventAdditionalInfo } from "./models_0";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export interface DeleteTopicRuleDestinationRequest {
    /**
     * <p>The ARN of the topic rule destination to delete.</p>
     */
    arn: string | undefined;
}
export declare namespace DeleteTopicRuleDestinationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTopicRuleDestinationRequest) => any;
}
export interface DeleteTopicRuleDestinationResponse {
}
export declare namespace DeleteTopicRuleDestinationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTopicRuleDestinationResponse) => any;
}
export declare enum LogTargetType {
    DEFAULT = "DEFAULT",
    THING_GROUP = "THING_GROUP"
}
export interface DeleteV2LoggingLevelRequest {
    /**
     * <p>The type of resource for which you are configuring logging. Must be
     *             <code>THING_Group</code>.</p>
     */
    targetType: LogTargetType | string | undefined;
    /**
     * <p>The name of the resource for which you are configuring logging.</p>
     */
    targetName: string | undefined;
}
export declare namespace DeleteV2LoggingLevelRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteV2LoggingLevelRequest) => any;
}
/**
 * <p>The input for the DeprecateThingType operation.</p>
 */
export interface DeprecateThingTypeRequest {
    /**
     * <p>The name of the thing type to deprecate.</p>
     */
    thingTypeName: string | undefined;
    /**
     * <p>Whether to undeprecate a deprecated thing type. If <b>true</b>, the thing type will not be deprecated anymore and you can
     * 			associate it with things.</p>
     */
    undoDeprecate?: boolean;
}
export declare namespace DeprecateThingTypeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeprecateThingTypeRequest) => any;
}
/**
 * <p>The output for the DeprecateThingType operation.</p>
 */
export interface DeprecateThingTypeResponse {
}
export declare namespace DeprecateThingTypeResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeprecateThingTypeResponse) => any;
}
export interface DescribeAccountAuditConfigurationRequest {
}
export declare namespace DescribeAccountAuditConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAccountAuditConfigurationRequest) => any;
}
export interface DescribeAccountAuditConfigurationResponse {
    /**
     * <p>The ARN of the role that grants permission to AWS IoT to access information
     *             about your devices, policies, certificates, and other items as required when
     *             performing an audit.</p>
     *           <p>On the first call to <code>UpdateAccountAuditConfiguration</code>,
     *             this parameter is required.</p>
     */
    roleArn?: string;
    /**
     * <p>Information about the targets to which audit notifications are sent for
     *             this account.</p>
     */
    auditNotificationTargetConfigurations?: {
        [key: string]: AuditNotificationTarget;
    };
    /**
     * <p>Which audit checks are enabled and disabled for this account.</p>
     */
    auditCheckConfigurations?: {
        [key: string]: AuditCheckConfiguration;
    };
}
export declare namespace DescribeAccountAuditConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAccountAuditConfigurationResponse) => any;
}
export interface DescribeAuditFindingRequest {
    /**
     * <p>A unique identifier for a single audit finding. You can use this identifier to apply mitigation actions to the finding.</p>
     */
    findingId: string | undefined;
}
export declare namespace DescribeAuditFindingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAuditFindingRequest) => any;
}
export interface DescribeAuditFindingResponse {
    /**
     * <p>The findings (results) of the audit.</p>
     */
    finding?: AuditFinding;
}
export declare namespace DescribeAuditFindingResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAuditFindingResponse) => any;
}
export interface DescribeAuditMitigationActionsTaskRequest {
    /**
     * <p>The unique identifier for the audit mitigation task.</p>
     */
    taskId: string | undefined;
}
export declare namespace DescribeAuditMitigationActionsTaskRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAuditMitigationActionsTaskRequest) => any;
}
/**
 * <p>Describes which changes should be applied as part of a mitigation action.</p>
 */
export interface MitigationAction {
    /**
     * <p>A user-friendly name for the mitigation action.</p>
     */
    name?: string;
    /**
     * <p>A unique identifier for the mitigation action.</p>
     */
    id?: string;
    /**
     * <p>The IAM role ARN used to apply this mitigation action.</p>
     */
    roleArn?: string;
    /**
     * <p>The set of parameters for this mitigation action. The parameters vary, depending on the kind of action you apply.</p>
     */
    actionParams?: MitigationActionParams;
}
export declare namespace MitigationAction {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MitigationAction) => any;
}
export interface DescribeAuditMitigationActionsTaskResponse {
    /**
     * <p>The current status of the task.</p>
     */
    taskStatus?: AuditMitigationActionsTaskStatus | string;
    /**
     * <p>The date and time when the task was started.</p>
     */
    startTime?: Date;
    /**
     * <p>The date and time when the task was completed or canceled.</p>
     */
    endTime?: Date;
    /**
     * <p>Aggregate counts of the results when the mitigation tasks were applied to the findings for this audit mitigation actions task.</p>
     */
    taskStatistics?: {
        [key: string]: TaskStatisticsForAuditCheck;
    };
    /**
     * <p>Identifies the findings to which the mitigation actions are applied. This can be by audit checks, by audit task, or a set of findings.</p>
     */
    target?: AuditMitigationActionsTaskTarget;
    /**
     * <p>Specifies the mitigation actions that should be applied to specific audit checks.</p>
     */
    auditCheckToActionsMapping?: {
        [key: string]: string[];
    };
    /**
     * <p>Specifies the mitigation actions and their parameters that are applied as part of this task.</p>
     */
    actionsDefinition?: MitigationAction[];
}
export declare namespace DescribeAuditMitigationActionsTaskResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAuditMitigationActionsTaskResponse) => any;
}
export interface DescribeAuditSuppressionRequest {
    /**
     * <p>An audit check name. Checks must be enabled
     *         for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
     *         of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
     *         to select which checks are enabled.)</p>
     */
    checkName: string | undefined;
    /**
     * <p>Information that identifies the noncompliant resource.</p>
     */
    resourceIdentifier: ResourceIdentifier | undefined;
}
export declare namespace DescribeAuditSuppressionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAuditSuppressionRequest) => any;
}
export interface DescribeAuditSuppressionResponse {
    /**
     * <p>An audit check name. Checks must be enabled
     *         for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
     *         of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
     *         to select which checks are enabled.)</p>
     */
    checkName?: string;
    /**
     * <p>Information that identifies the noncompliant resource.</p>
     */
    resourceIdentifier?: ResourceIdentifier;
    /**
     * <p>
     *       The epoch timestamp in seconds at which this suppression expires.
     *     </p>
     */
    expirationDate?: Date;
    /**
     * <p>
     *       Indicates whether a suppression should exist indefinitely or not.
     *     </p>
     */
    suppressIndefinitely?: boolean;
    /**
     * <p>
     *       The description of the audit suppression.
     *     </p>
     */
    description?: string;
}
export declare namespace DescribeAuditSuppressionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAuditSuppressionResponse) => any;
}
export interface DescribeAuditTaskRequest {
    /**
     * <p>The ID of the audit whose information you want to get.</p>
     */
    taskId: string | undefined;
}
export declare namespace DescribeAuditTaskRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAuditTaskRequest) => any;
}
/**
 * <p>Statistics for the checks performed during the audit.</p>
 */
export interface TaskStatistics {
    /**
     * <p>The number of checks in this audit.</p>
     */
    totalChecks?: number;
    /**
     * <p>The number of checks in progress.</p>
     */
    inProgressChecks?: number;
    /**
     * <p>The number of checks waiting for data collection.</p>
     */
    waitingForDataCollectionChecks?: number;
    /**
     * <p>The number of checks that found compliant resources.</p>
     */
    compliantChecks?: number;
    /**
     * <p>The number of checks that found noncompliant resources.</p>
     */
    nonCompliantChecks?: number;
    /**
     * <p>The number of checks.</p>
     */
    failedChecks?: number;
    /**
     * <p>The number of checks that did not run because the audit was canceled.</p>
     */
    canceledChecks?: number;
}
export declare namespace TaskStatistics {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TaskStatistics) => any;
}
export interface DescribeAuditTaskResponse {
    /**
     * <p>The status of the audit: one of "IN_PROGRESS", "COMPLETED",
     *             "FAILED", or "CANCELED".</p>
     */
    taskStatus?: AuditTaskStatus | string;
    /**
     * <p>The type of audit: "ON_DEMAND_AUDIT_TASK" or "SCHEDULED_AUDIT_TASK".</p>
     */
    taskType?: AuditTaskType | string;
    /**
     * <p>The time the audit started.</p>
     */
    taskStartTime?: Date;
    /**
     * <p>Statistical information about the audit.</p>
     */
    taskStatistics?: TaskStatistics;
    /**
     * <p>The name of the scheduled audit (only if the audit was a scheduled audit).</p>
     */
    scheduledAuditName?: string;
    /**
     * <p>Detailed information about each check performed during this audit.</p>
     */
    auditDetails?: {
        [key: string]: AuditCheckDetails;
    };
}
export declare namespace DescribeAuditTaskResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAuditTaskResponse) => any;
}
export interface DescribeAuthorizerRequest {
    /**
     * <p>The name of the authorizer to describe.</p>
     */
    authorizerName: string | undefined;
}
export declare namespace DescribeAuthorizerRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAuthorizerRequest) => any;
}
export interface DescribeAuthorizerResponse {
    /**
     * <p>The authorizer description.</p>
     */
    authorizerDescription?: AuthorizerDescription;
}
export declare namespace DescribeAuthorizerResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAuthorizerResponse) => any;
}
export interface DescribeBillingGroupRequest {
    /**
     * <p>The name of the billing group.</p>
     */
    billingGroupName: string | undefined;
}
export declare namespace DescribeBillingGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeBillingGroupRequest) => any;
}
/**
 * <p>Additional information about the billing group.</p>
 */
export interface BillingGroupMetadata {
    /**
     * <p>The date the billing group was created.</p>
     */
    creationDate?: Date;
}
export declare namespace BillingGroupMetadata {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BillingGroupMetadata) => any;
}
export interface DescribeBillingGroupResponse {
    /**
     * <p>The name of the billing group.</p>
     */
    billingGroupName?: string;
    /**
     * <p>The ID of the billing group.</p>
     */
    billingGroupId?: string;
    /**
     * <p>The ARN of the billing group.</p>
     */
    billingGroupArn?: string;
    /**
     * <p>The version of the billing group.</p>
     */
    version?: number;
    /**
     * <p>The properties of the billing group.</p>
     */
    billingGroupProperties?: BillingGroupProperties;
    /**
     * <p>Additional information about the billing group.</p>
     */
    billingGroupMetadata?: BillingGroupMetadata;
}
export declare namespace DescribeBillingGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeBillingGroupResponse) => any;
}
/**
 * <p>The input for the DescribeCACertificate operation.</p>
 */
export interface DescribeCACertificateRequest {
    /**
     * <p>The CA certificate identifier.</p>
     */
    certificateId: string | undefined;
}
export declare namespace DescribeCACertificateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCACertificateRequest) => any;
}
export declare enum CACertificateStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}
/**
 * <p>When the certificate is valid.</p>
 */
export interface CertificateValidity {
    /**
     * <p>The certificate is not valid before this date.</p>
     */
    notBefore?: Date;
    /**
     * <p>The certificate is not valid after this date.</p>
     */
    notAfter?: Date;
}
export declare namespace CertificateValidity {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CertificateValidity) => any;
}
/**
 * <p>Describes a CA certificate.</p>
 */
export interface CACertificateDescription {
    /**
     * <p>The CA certificate ARN.</p>
     */
    certificateArn?: string;
    /**
     * <p>The CA certificate ID.</p>
     */
    certificateId?: string;
    /**
     * <p>The status of a CA certificate.</p>
     */
    status?: CACertificateStatus | string;
    /**
     * <p>The CA certificate data, in PEM format.</p>
     */
    certificatePem?: string;
    /**
     * <p>The owner of the CA certificate.</p>
     */
    ownedBy?: string;
    /**
     * <p>The date the CA certificate was created.</p>
     */
    creationDate?: Date;
    /**
     * <p>Whether the CA certificate configured for auto registration of device certificates.
     *          Valid values are "ENABLE" and "DISABLE"</p>
     */
    autoRegistrationStatus?: AutoRegistrationStatus | string;
    /**
     * <p>The date the CA certificate was last modified.</p>
     */
    lastModifiedDate?: Date;
    /**
     * <p>The customer version of the CA certificate.</p>
     */
    customerVersion?: number;
    /**
     * <p>The generation ID of the CA certificate.</p>
     */
    generationId?: string;
    /**
     * <p>When the CA certificate is valid.</p>
     */
    validity?: CertificateValidity;
}
export declare namespace CACertificateDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CACertificateDescription) => any;
}
/**
 * <p>The registration configuration.</p>
 */
export interface RegistrationConfig {
    /**
     * <p>The template body.</p>
     */
    templateBody?: string;
    /**
     * <p>The ARN of the role.</p>
     */
    roleArn?: string;
}
export declare namespace RegistrationConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RegistrationConfig) => any;
}
/**
 * <p>The output from the DescribeCACertificate operation.</p>
 */
export interface DescribeCACertificateResponse {
    /**
     * <p>The CA certificate description.</p>
     */
    certificateDescription?: CACertificateDescription;
    /**
     * <p>Information about the registration configuration.</p>
     */
    registrationConfig?: RegistrationConfig;
}
export declare namespace DescribeCACertificateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCACertificateResponse) => any;
}
/**
 * <p>The input for the DescribeCertificate operation.</p>
 */
export interface DescribeCertificateRequest {
    /**
     * <p>The ID of the certificate. (The last part of the certificate ARN contains the
     *          certificate ID.)</p>
     */
    certificateId: string | undefined;
}
export declare namespace DescribeCertificateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCertificateRequest) => any;
}
export declare enum CertificateMode {
    DEFAULT = "DEFAULT",
    SNI_ONLY = "SNI_ONLY"
}
export declare enum CertificateStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    PENDING_ACTIVATION = "PENDING_ACTIVATION",
    PENDING_TRANSFER = "PENDING_TRANSFER",
    REGISTER_INACTIVE = "REGISTER_INACTIVE",
    REVOKED = "REVOKED"
}
/**
 * <p>Data used to transfer a certificate to an AWS account.</p>
 */
export interface TransferData {
    /**
     * <p>The transfer message.</p>
     */
    transferMessage?: string;
    /**
     * <p>The reason why the transfer was rejected.</p>
     */
    rejectReason?: string;
    /**
     * <p>The date the transfer took place.</p>
     */
    transferDate?: Date;
    /**
     * <p>The date the transfer was accepted.</p>
     */
    acceptDate?: Date;
    /**
     * <p>The date the transfer was rejected.</p>
     */
    rejectDate?: Date;
}
export declare namespace TransferData {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TransferData) => any;
}
/**
 * <p>Describes a certificate.</p>
 */
export interface CertificateDescription {
    /**
     * <p>The ARN of the certificate.</p>
     */
    certificateArn?: string;
    /**
     * <p>The ID of the certificate.</p>
     */
    certificateId?: string;
    /**
     * <p>The certificate ID of the CA certificate used to sign this certificate.</p>
     */
    caCertificateId?: string;
    /**
     * <p>The status of the certificate.</p>
     */
    status?: CertificateStatus | string;
    /**
     * <p>The certificate data, in PEM format.</p>
     */
    certificatePem?: string;
    /**
     * <p>The ID of the AWS account that owns the certificate.</p>
     */
    ownedBy?: string;
    /**
     * <p>The ID of the AWS account of the previous owner of the certificate.</p>
     */
    previousOwnedBy?: string;
    /**
     * <p>The date and time the certificate was created.</p>
     */
    creationDate?: Date;
    /**
     * <p>The date and time the certificate was last modified.</p>
     */
    lastModifiedDate?: Date;
    /**
     * <p>The customer version of the certificate.</p>
     */
    customerVersion?: number;
    /**
     * <p>The transfer data.</p>
     */
    transferData?: TransferData;
    /**
     * <p>The generation ID of the certificate.</p>
     */
    generationId?: string;
    /**
     * <p>When the certificate is valid.</p>
     */
    validity?: CertificateValidity;
    /**
     * <p>The mode of the certificate.</p>
     */
    certificateMode?: CertificateMode | string;
}
export declare namespace CertificateDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CertificateDescription) => any;
}
/**
 * <p>The output of the DescribeCertificate operation.</p>
 */
export interface DescribeCertificateResponse {
    /**
     * <p>The description of the certificate.</p>
     */
    certificateDescription?: CertificateDescription;
}
export declare namespace DescribeCertificateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCertificateResponse) => any;
}
export interface DescribeCustomMetricRequest {
    /**
     * <p>
     *       The name of the custom metric.
     *     </p>
     */
    metricName: string | undefined;
}
export declare namespace DescribeCustomMetricRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCustomMetricRequest) => any;
}
export interface DescribeCustomMetricResponse {
    /**
     * <p>
     *       The name of the custom metric.
     *     </p>
     */
    metricName?: string;
    /**
     * <p>
     *       The Amazon Resource Number (ARN) of the custom metric.
     *     </p>
     */
    metricArn?: string;
    /**
     * <p>
     *       The type of the custom metric. Types include <code>string-list</code>, <code>ip-address-list</code>, <code>number-list</code>, and <code>number</code>.
     *     </p>
     */
    metricType?: CustomMetricType | string;
    /**
     * <p>
     *       Field represents a friendly name in the console for the custom metric; doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. Can be updated.
     *     </p>
     */
    displayName?: string;
    /**
     * <p>
     *       The creation date of the custom metric in milliseconds since epoch.
     *     </p>
     */
    creationDate?: Date;
    /**
     * <p>
     *       The time the custom metric was last modified in milliseconds since epoch.
     *     </p>
     */
    lastModifiedDate?: Date;
}
export declare namespace DescribeCustomMetricResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCustomMetricResponse) => any;
}
export interface DescribeDefaultAuthorizerRequest {
}
export declare namespace DescribeDefaultAuthorizerRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDefaultAuthorizerRequest) => any;
}
export interface DescribeDefaultAuthorizerResponse {
    /**
     * <p>The default authorizer's description.</p>
     */
    authorizerDescription?: AuthorizerDescription;
}
export declare namespace DescribeDefaultAuthorizerResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDefaultAuthorizerResponse) => any;
}
export interface DescribeDetectMitigationActionsTaskRequest {
    /**
     * <p>
     *       The unique identifier of the task.
     *     </p>
     */
    taskId: string | undefined;
}
export declare namespace DescribeDetectMitigationActionsTaskRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDetectMitigationActionsTaskRequest) => any;
}
/**
 * <p>
 *             The target of a mitigation action task.
 *         </p>
 */
export interface DetectMitigationActionsTaskTarget {
    /**
     * <p>
     *             The unique identifiers of the violations.
     *         </p>
     */
    violationIds?: string[];
    /**
     * <p>
     *             The name of the security profile.
     *         </p>
     */
    securityProfileName?: string;
    /**
     * <p>
     *             The name of the behavior.
     *         </p>
     */
    behaviorName?: string;
}
export declare namespace DetectMitigationActionsTaskTarget {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DetectMitigationActionsTaskTarget) => any;
}
/**
 * <p>
 *             The statistics of a mitigation action task.
 *         </p>
 */
export interface DetectMitigationActionsTaskStatistics {
    /**
     * <p>
     *             The actions that were performed.
     *         </p>
     */
    actionsExecuted?: number;
    /**
     * <p>
     *             The actions that were skipped.
     *         </p>
     */
    actionsSkipped?: number;
    /**
     * <p>
     *             The actions that failed.
     *         </p>
     */
    actionsFailed?: number;
}
export declare namespace DetectMitigationActionsTaskStatistics {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DetectMitigationActionsTaskStatistics) => any;
}
export declare enum DetectMitigationActionsTaskStatus {
    CANCELED = "CANCELED",
    FAILED = "FAILED",
    IN_PROGRESS = "IN_PROGRESS",
    SUCCESSFUL = "SUCCESSFUL"
}
/**
 * <p>
 *             Specifies the time period of which violation events occurred between.
 *         </p>
 */
export interface ViolationEventOccurrenceRange {
    /**
     * <p>
     *             The start date and time of a time period in which violation events occurred.
     *         </p>
     */
    startTime: Date | undefined;
    /**
     * <p>
     *             The end date and time of a time period in which violation events occurred.
     *         </p>
     */
    endTime: Date | undefined;
}
export declare namespace ViolationEventOccurrenceRange {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ViolationEventOccurrenceRange) => any;
}
/**
 * <p>
 *             The summary of the mitigation action tasks.
 *         </p>
 */
export interface DetectMitigationActionsTaskSummary {
    /**
     * <p>
     *             The unique identifier of the task.
     *         </p>
     */
    taskId?: string;
    /**
     * <p>
     *             The status of the task.
     *         </p>
     */
    taskStatus?: DetectMitigationActionsTaskStatus | string;
    /**
     * <p>
     *             The date the task started.
     *         </p>
     */
    taskStartTime?: Date;
    /**
     * <p>
     *             The date the task ended.
     *         </p>
     */
    taskEndTime?: Date;
    /**
     * <p>
     *             Specifies the ML Detect findings to which the mitigation actions are applied.
     *         </p>
     */
    target?: DetectMitigationActionsTaskTarget;
    /**
     * <p>
     *             Specifies the time period of which violation events occurred between.
     *         </p>
     */
    violationEventOccurrenceRange?: ViolationEventOccurrenceRange;
    /**
     * <p>
     *             Includes only active violations.
     *         </p>
     */
    onlyActiveViolationsIncluded?: boolean;
    /**
     * <p>
     *             Includes suppressed alerts.
     *         </p>
     */
    suppressedAlertsIncluded?: boolean;
    /**
     * <p>
     *             The definition of the actions.
     *         </p>
     */
    actionsDefinition?: MitigationAction[];
    /**
     * <p>
     *             The statistics of a mitigation action task.
     *         </p>
     */
    taskStatistics?: DetectMitigationActionsTaskStatistics;
}
export declare namespace DetectMitigationActionsTaskSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DetectMitigationActionsTaskSummary) => any;
}
export interface DescribeDetectMitigationActionsTaskResponse {
    /**
     * <p>
     *       The description of a task.
     *     </p>
     */
    taskSummary?: DetectMitigationActionsTaskSummary;
}
export declare namespace DescribeDetectMitigationActionsTaskResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDetectMitigationActionsTaskResponse) => any;
}
export interface DescribeDimensionRequest {
    /**
     * <p>The unique identifier for the dimension.</p>
     */
    name: string | undefined;
}
export declare namespace DescribeDimensionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDimensionRequest) => any;
}
export interface DescribeDimensionResponse {
    /**
     * <p>The unique identifier for the dimension.</p>
     */
    name?: string;
    /**
     * <p>The Amazon Resource Name
     *       (ARN)
     *       for
     *       the dimension.</p>
     */
    arn?: string;
    /**
     * <p>The type of the dimension.</p>
     */
    type?: DimensionType | string;
    /**
     * <p>The value or list of values used to scope the dimension. For example, for topic filters, this is the pattern used to match the MQTT topic name.</p>
     */
    stringValues?: string[];
    /**
     * <p>The date the dimension was created.</p>
     */
    creationDate?: Date;
    /**
     * <p>The date the dimension was last modified.</p>
     */
    lastModifiedDate?: Date;
}
export declare namespace DescribeDimensionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDimensionResponse) => any;
}
export interface DescribeDomainConfigurationRequest {
    /**
     * <p>The name of the domain configuration.</p>
     */
    domainConfigurationName: string | undefined;
}
export declare namespace DescribeDomainConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDomainConfigurationRequest) => any;
}
export declare enum DomainConfigurationStatus {
    DISABLED = "DISABLED",
    ENABLED = "ENABLED"
}
export declare enum DomainType {
    AWS_MANAGED = "AWS_MANAGED",
    CUSTOMER_MANAGED = "CUSTOMER_MANAGED",
    ENDPOINT = "ENDPOINT"
}
export declare enum ServerCertificateStatus {
    INVALID = "INVALID",
    VALID = "VALID"
}
/**
 * <p>An object that contains information about a server certificate.</p>
 */
export interface ServerCertificateSummary {
    /**
     * <p>The ARN of the server certificate.</p>
     */
    serverCertificateArn?: string;
    /**
     * <p>The status of the server certificate.</p>
     */
    serverCertificateStatus?: ServerCertificateStatus | string;
    /**
     * <p>Details that explain the status of the server certificate.</p>
     */
    serverCertificateStatusDetail?: string;
}
export declare namespace ServerCertificateSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServerCertificateSummary) => any;
}
export interface DescribeDomainConfigurationResponse {
    /**
     * <p>The name of the domain configuration.</p>
     */
    domainConfigurationName?: string;
    /**
     * <p>The ARN of the domain configuration.</p>
     */
    domainConfigurationArn?: string;
    /**
     * <p>The name of the domain.</p>
     */
    domainName?: string;
    /**
     * <p>A list containing summary information about the server certificate included in the domain configuration.</p>
     */
    serverCertificates?: ServerCertificateSummary[];
    /**
     * <p>An object that specifies the authorization service for a domain.</p>
     */
    authorizerConfig?: AuthorizerConfig;
    /**
     * <p>A Boolean value that specifies the current state of the domain configuration.</p>
     */
    domainConfigurationStatus?: DomainConfigurationStatus | string;
    /**
     * <p>The type of service delivered by the endpoint.</p>
     */
    serviceType?: ServiceType | string;
    /**
     * <p>The type of the domain.</p>
     */
    domainType?: DomainType | string;
    /**
     * <p>The date and time the domain configuration's status was last changed.</p>
     */
    lastStatusChangeDate?: Date;
}
export declare namespace DescribeDomainConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDomainConfigurationResponse) => any;
}
/**
 * <p>The input for the DescribeEndpoint operation.</p>
 */
export interface DescribeEndpointRequest {
    /**
     * <p>The endpoint type. Valid endpoint types include:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>iot:Data</code> - Returns a VeriSign signed data endpoint.</p>
     *             </li>
     *          </ul>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>iot:Data-ATS</code> - Returns an ATS signed data endpoint.</p>
     *             </li>
     *          </ul>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>iot:CredentialProvider</code> - Returns an AWS IoT credentials provider API
     *                endpoint.</p>
     *             </li>
     *          </ul>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>iot:Jobs</code> - Returns an AWS IoT device management Jobs API
     *                endpoint.</p>
     *             </li>
     *          </ul>
     *          <p>We strongly recommend that customers use the newer <code>iot:Data-ATS</code> endpoint type to avoid
     *          issues related to the widespread distrust of Symantec certificate authorities.</p>
     */
    endpointType?: string;
}
export declare namespace DescribeEndpointRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeEndpointRequest) => any;
}
/**
 * <p>The output from the DescribeEndpoint operation.</p>
 */
export interface DescribeEndpointResponse {
    /**
     * <p>The endpoint. The format of the endpoint is as follows:
     *             <i>identifier</i>.iot.<i>region</i>.amazonaws.com.</p>
     */
    endpointAddress?: string;
}
export declare namespace DescribeEndpointResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeEndpointResponse) => any;
}
export interface DescribeEventConfigurationsRequest {
}
export declare namespace DescribeEventConfigurationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeEventConfigurationsRequest) => any;
}
export declare enum EventType {
    CA_CERTIFICATE = "CA_CERTIFICATE",
    CERTIFICATE = "CERTIFICATE",
    JOB = "JOB",
    JOB_EXECUTION = "JOB_EXECUTION",
    POLICY = "POLICY",
    THING = "THING",
    THING_GROUP = "THING_GROUP",
    THING_GROUP_HIERARCHY = "THING_GROUP_HIERARCHY",
    THING_GROUP_MEMBERSHIP = "THING_GROUP_MEMBERSHIP",
    THING_TYPE = "THING_TYPE",
    THING_TYPE_ASSOCIATION = "THING_TYPE_ASSOCIATION"
}
/**
 * <p>Configuration.</p>
 */
export interface Configuration {
    /**
     * <p>True to enable the configuration.</p>
     */
    Enabled?: boolean;
}
export declare namespace Configuration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Configuration) => any;
}
export interface DescribeEventConfigurationsResponse {
    /**
     * <p>The event configurations.</p>
     */
    eventConfigurations?: {
        [key: string]: Configuration;
    };
    /**
     * <p>The creation date of the event configuration.</p>
     */
    creationDate?: Date;
    /**
     * <p>The date the event configurations were last modified.</p>
     */
    lastModifiedDate?: Date;
}
export declare namespace DescribeEventConfigurationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeEventConfigurationsResponse) => any;
}
export interface DescribeIndexRequest {
    /**
     * <p>The index name.</p>
     */
    indexName: string | undefined;
}
export declare namespace DescribeIndexRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeIndexRequest) => any;
}
export declare enum IndexStatus {
    ACTIVE = "ACTIVE",
    BUILDING = "BUILDING",
    REBUILDING = "REBUILDING"
}
export interface DescribeIndexResponse {
    /**
     * <p>The index name.</p>
     */
    indexName?: string;
    /**
     * <p>The index status.</p>
     */
    indexStatus?: IndexStatus | string;
    /**
     * <p>Contains a value that specifies the type of indexing performed. Valid values
     *       are:</p>
     *          <ul>
     *             <li>
     *                <p>REGISTRY – Your thing index contains only registry data.</p>
     *             </li>
     *             <li>
     *                <p>REGISTRY_AND_SHADOW - Your thing index contains registry data and shadow data.</p>
     *             </li>
     *             <li>
     *                <p>REGISTRY_AND_CONNECTIVITY_STATUS - Your thing index contains registry data and
     *           thing connectivity status data.</p>
     *             </li>
     *             <li>
     *                <p>REGISTRY_AND_SHADOW_AND_CONNECTIVITY_STATUS - Your thing index contains registry
     *           data, shadow data, and thing connectivity status data.</p>
     *             </li>
     *          </ul>
     */
    schema?: string;
}
export declare namespace DescribeIndexResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeIndexResponse) => any;
}
export interface DescribeJobRequest {
    /**
     * <p>The unique identifier you assigned to this job when it was created.</p>
     */
    jobId: string | undefined;
}
export declare namespace DescribeJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeJobRequest) => any;
}
/**
 * <p>The job process details.</p>
 */
export interface JobProcessDetails {
    /**
     * <p>The target devices to which the job execution is being rolled out. This value will be null after the job execution has finished rolling out to all the target devices.</p>
     */
    processingTargets?: string[];
    /**
     * <p>The number of things that cancelled the job.</p>
     */
    numberOfCanceledThings?: number;
    /**
     * <p>The number of things which successfully completed the job.</p>
     */
    numberOfSucceededThings?: number;
    /**
     * <p>The number of things that failed executing the job.</p>
     */
    numberOfFailedThings?: number;
    /**
     * <p>The number of things that rejected the job.</p>
     */
    numberOfRejectedThings?: number;
    /**
     * <p>The number of things that are awaiting execution of the job.</p>
     */
    numberOfQueuedThings?: number;
    /**
     * <p>The number of things currently executing the job.</p>
     */
    numberOfInProgressThings?: number;
    /**
     * <p>The number of things that are no longer scheduled to execute the job because they have been deleted or
     *             have been removed from the group that was a target of the job.</p>
     */
    numberOfRemovedThings?: number;
    /**
     * <p>The number of things whose job execution status is <code>TIMED_OUT</code>.</p>
     */
    numberOfTimedOutThings?: number;
}
export declare namespace JobProcessDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobProcessDetails) => any;
}
export declare enum JobStatus {
    CANCELED = "CANCELED",
    COMPLETED = "COMPLETED",
    DELETION_IN_PROGRESS = "DELETION_IN_PROGRESS",
    IN_PROGRESS = "IN_PROGRESS"
}
/**
 * <p>The <code>Job</code> object contains details about a job.</p>
 */
export interface Job {
    /**
     * <p>An ARN identifying the job with format "arn:aws:iot:region:account:job/jobId".</p>
     */
    jobArn?: string;
    /**
     * <p>The unique identifier you assigned to this job when it was created.</p>
     */
    jobId?: string;
    /**
     * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things
     *             specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing
     *             when a change is detected in a target. For example, a job will run on a device when the thing representing
     *             the device is added to a target group, even after the job was completed by all things originally in the
     *             group. </p>
     */
    targetSelection?: TargetSelection | string;
    /**
     * <p>The status of the job, one of <code>IN_PROGRESS</code>, <code>CANCELED</code>,
     *             <code>DELETION_IN_PROGRESS</code> or <code>COMPLETED</code>. </p>
     */
    status?: JobStatus | string;
    /**
     * <p>Will be <code>true</code> if the job was canceled with the optional <code>force</code> parameter set to
     *           <code>true</code>.</p>
     */
    forceCanceled?: boolean;
    /**
     * <p>If the job was updated, provides the reason code for the update.</p>
     */
    reasonCode?: string;
    /**
     * <p>If the job was updated, describes the reason for the update.</p>
     */
    comment?: string;
    /**
     * <p>A list of IoT things and thing groups to which the job should be sent.</p>
     */
    targets?: string[];
    /**
     * <p>A short text description of the job.</p>
     */
    description?: string;
    /**
     * <p>Configuration for pre-signed S3 URLs.</p>
     */
    presignedUrlConfig?: PresignedUrlConfig;
    /**
     * <p>Allows you to create a staged rollout of a job.</p>
     */
    jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;
    /**
     * <p>Configuration for criteria to abort the job.</p>
     */
    abortConfig?: AbortConfig;
    /**
     * <p>The time, in seconds since the epoch, when the job was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The time, in seconds since the epoch, when the job was last updated.</p>
     */
    lastUpdatedAt?: Date;
    /**
     * <p>The time, in seconds since the epoch, when the job was completed.</p>
     */
    completedAt?: Date;
    /**
     * <p>Details about the job process.</p>
     */
    jobProcessDetails?: JobProcessDetails;
    /**
     * <p>Specifies the amount of time each device has to finish its execution of the job.  A timer
     *            is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job
     *            execution status is not set to another terminal state before the timer expires, it will
     *            be automatically set to <code>TIMED_OUT</code>.</p>
     */
    timeoutConfig?: TimeoutConfig;
    /**
     * <p>The namespace used to indicate that a job is a customer-managed job.</p>
     *         <p>When you specify a value for this parameter, AWS IoT Core sends jobs notifications to MQTT topics that
     *             contain the value in the following format.</p>
     *         <p>
     *             <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code>
     *          </p>
     *         <note>
     *             <p>The <code>namespaceId</code> feature is in public preview.</p>
     *          </note>
     */
    namespaceId?: string;
    /**
     * <p>The ARN of the job template used to create the job.</p>
     */
    jobTemplateArn?: string;
}
export declare namespace Job {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Job) => any;
}
export interface DescribeJobResponse {
    /**
     * <p>An S3 link to the job document.</p>
     */
    documentSource?: string;
    /**
     * <p>Information about the job.</p>
     */
    job?: Job;
}
export declare namespace DescribeJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeJobResponse) => any;
}
export interface DescribeJobExecutionRequest {
    /**
     * <p>The unique identifier you assigned to this job when it was created.</p>
     */
    jobId: string | undefined;
    /**
     * <p>The name of the thing on which the job execution is running.</p>
     */
    thingName: string | undefined;
    /**
     * <p>A string (consisting of the digits "0" through "9" which is used to specify a particular job execution
     *             on a particular device.</p>
     */
    executionNumber?: number;
}
export declare namespace DescribeJobExecutionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeJobExecutionRequest) => any;
}
export declare enum JobExecutionStatus {
    CANCELED = "CANCELED",
    FAILED = "FAILED",
    IN_PROGRESS = "IN_PROGRESS",
    QUEUED = "QUEUED",
    REJECTED = "REJECTED",
    REMOVED = "REMOVED",
    SUCCEEDED = "SUCCEEDED",
    TIMED_OUT = "TIMED_OUT"
}
/**
 * <p>Details of the job execution status.</p>
 */
export interface JobExecutionStatusDetails {
    /**
     * <p>The job execution status.</p>
     */
    detailsMap?: {
        [key: string]: string;
    };
}
export declare namespace JobExecutionStatusDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobExecutionStatusDetails) => any;
}
/**
 * <p>The job execution object represents the execution of a job on a particular device.</p>
 */
export interface JobExecution {
    /**
     * <p>The unique identifier you assigned to the job when it was created.</p>
     */
    jobId?: string;
    /**
     * <p>The status of the job execution (IN_PROGRESS, QUEUED, FAILED, SUCCEEDED, TIMED_OUT,
     *             CANCELED, or REJECTED).</p>
     */
    status?: JobExecutionStatus | string;
    /**
     * <p>Will be <code>true</code> if the job execution was canceled with the optional <code>force</code>
     *           parameter set to <code>true</code>.</p>
     */
    forceCanceled?: boolean;
    /**
     * <p>A collection of name/value pairs that describe the status of the job execution.</p>
     */
    statusDetails?: JobExecutionStatusDetails;
    /**
     * <p>The ARN of the thing on which the job execution is running.</p>
     */
    thingArn?: string;
    /**
     * <p>The time, in seconds since the epoch, when the job execution was queued.</p>
     */
    queuedAt?: Date;
    /**
     * <p>The time, in seconds since the epoch, when the job execution started.</p>
     */
    startedAt?: Date;
    /**
     * <p>The time, in seconds since the epoch, when the job execution was last updated.</p>
     */
    lastUpdatedAt?: Date;
    /**
     * <p>A string (consisting of the digits "0" through "9") which identifies this particular job execution on
     *             this particular device. It can be used in commands which return or update job execution information.
     *         </p>
     */
    executionNumber?: number;
    /**
     * <p>The version of the job execution. Job execution versions are incremented each time they are updated
     *       by a device.</p>
     */
    versionNumber?: number;
    /**
     * <p>The estimated number of seconds that remain before the job execution status will be
     *            changed to <code>TIMED_OUT</code>. The timeout interval can be anywhere between 1 minute and 7 days (1 to 10080 minutes).
     *            The actual job execution timeout can occur up to 60 seconds later than the estimated duration.
     *        This value will not be included if the job execution has reached a terminal status.</p>
     */
    approximateSecondsBeforeTimedOut?: number;
}
export declare namespace JobExecution {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobExecution) => any;
}
export interface DescribeJobExecutionResponse {
    /**
     * <p>Information about the job execution.</p>
     */
    execution?: JobExecution;
}
export declare namespace DescribeJobExecutionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeJobExecutionResponse) => any;
}
export interface DescribeJobTemplateRequest {
    /**
     * <p>The unique identifier of the job template.</p>
     */
    jobTemplateId: string | undefined;
}
export declare namespace DescribeJobTemplateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeJobTemplateRequest) => any;
}
export interface DescribeJobTemplateResponse {
    /**
     * <p>The ARN of the job template.</p>
     */
    jobTemplateArn?: string;
    /**
     * <p>The unique identifier of the job template.</p>
     */
    jobTemplateId?: string;
    /**
     * <p>A description of the job template.</p>
     */
    description?: string;
    /**
     * <p>An S3 link to the job document.</p>
     */
    documentSource?: string;
    /**
     * <p>The job document.</p>
     */
    document?: string;
    /**
     * <p>The time, in seconds since the epoch, when the job template was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>Configuration for pre-signed S3 URLs.</p>
     */
    presignedUrlConfig?: PresignedUrlConfig;
    /**
     * <p>Allows you to create a staged rollout of a job.</p>
     */
    jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;
    /**
     * <p>The criteria that determine when and how a job abort takes place.</p>
     */
    abortConfig?: AbortConfig;
    /**
     * <p>Specifies the amount of time each device has to finish its execution of the job.  A timer
     *            is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job
     *            execution status is not set to another terminal state before the timer expires, it will
     *            be automatically set to <code>TIMED_OUT</code>.</p>
     */
    timeoutConfig?: TimeoutConfig;
}
export declare namespace DescribeJobTemplateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeJobTemplateResponse) => any;
}
export interface DescribeMitigationActionRequest {
    /**
     * <p>The friendly name that uniquely identifies the mitigation action.</p>
     */
    actionName: string | undefined;
}
export declare namespace DescribeMitigationActionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeMitigationActionRequest) => any;
}
export declare enum MitigationActionType {
    ADD_THINGS_TO_THING_GROUP = "ADD_THINGS_TO_THING_GROUP",
    ENABLE_IOT_LOGGING = "ENABLE_IOT_LOGGING",
    PUBLISH_FINDING_TO_SNS = "PUBLISH_FINDING_TO_SNS",
    REPLACE_DEFAULT_POLICY_VERSION = "REPLACE_DEFAULT_POLICY_VERSION",
    UPDATE_CA_CERTIFICATE = "UPDATE_CA_CERTIFICATE",
    UPDATE_DEVICE_CERTIFICATE = "UPDATE_DEVICE_CERTIFICATE"
}
export interface DescribeMitigationActionResponse {
    /**
     * <p>The friendly name that uniquely identifies the mitigation action.</p>
     */
    actionName?: string;
    /**
     * <p>The type of mitigation action.</p>
     */
    actionType?: MitigationActionType | string;
    /**
     * <p>The ARN that identifies this migration action.</p>
     */
    actionArn?: string;
    /**
     * <p>A unique identifier for this action.</p>
     */
    actionId?: string;
    /**
     * <p>The ARN of the IAM role used to apply this action.</p>
     */
    roleArn?: string;
    /**
     * <p>Parameters that control how the mitigation action is applied, specific to the type of mitigation action.</p>
     */
    actionParams?: MitigationActionParams;
    /**
     * <p>The date and time when the mitigation action was added to your AWS account.</p>
     */
    creationDate?: Date;
    /**
     * <p>The date and time when the mitigation action was last changed.</p>
     */
    lastModifiedDate?: Date;
}
export declare namespace DescribeMitigationActionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeMitigationActionResponse) => any;
}
export interface DescribeProvisioningTemplateRequest {
    /**
     * <p>The name of the fleet provisioning template.</p>
     */
    templateName: string | undefined;
}
export declare namespace DescribeProvisioningTemplateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProvisioningTemplateRequest) => any;
}
export interface DescribeProvisioningTemplateResponse {
    /**
     * <p>The ARN of the fleet provisioning template.</p>
     */
    templateArn?: string;
    /**
     * <p>The name of the fleet provisioning template.</p>
     */
    templateName?: string;
    /**
     * <p>The description of the fleet provisioning template.</p>
     */
    description?: string;
    /**
     * <p>The date when the fleet provisioning template was created.</p>
     */
    creationDate?: Date;
    /**
     * <p>The date when the fleet provisioning template was last modified.</p>
     */
    lastModifiedDate?: Date;
    /**
     * <p>The default fleet template version ID.</p>
     */
    defaultVersionId?: number;
    /**
     * <p>The JSON formatted contents of the fleet provisioning template.</p>
     */
    templateBody?: string;
    /**
     * <p>True if the fleet provisioning template is enabled, otherwise false.</p>
     */
    enabled?: boolean;
    /**
     * <p>The ARN of the role associated with the provisioning template. This IoT role grants
     *          permission to provision a device.</p>
     */
    provisioningRoleArn?: string;
    /**
     * <p>Gets information about a pre-provisioned hook.</p>
     */
    preProvisioningHook?: ProvisioningHook;
}
export declare namespace DescribeProvisioningTemplateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProvisioningTemplateResponse) => any;
}
export interface DescribeProvisioningTemplateVersionRequest {
    /**
     * <p>The template name.</p>
     */
    templateName: string | undefined;
    /**
     * <p>The fleet provisioning template version ID.</p>
     */
    versionId: number | undefined;
}
export declare namespace DescribeProvisioningTemplateVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProvisioningTemplateVersionRequest) => any;
}
export interface DescribeProvisioningTemplateVersionResponse {
    /**
     * <p>The fleet provisioning template version ID.</p>
     */
    versionId?: number;
    /**
     * <p>The date when the fleet provisioning template version was created.</p>
     */
    creationDate?: Date;
    /**
     * <p>The JSON formatted contents of the fleet provisioning template version.</p>
     */
    templateBody?: string;
    /**
     * <p>True if the fleet provisioning template version is the default version.</p>
     */
    isDefaultVersion?: boolean;
}
export declare namespace DescribeProvisioningTemplateVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProvisioningTemplateVersionResponse) => any;
}
export interface DescribeRoleAliasRequest {
    /**
     * <p>The role alias to describe.</p>
     */
    roleAlias: string | undefined;
}
export declare namespace DescribeRoleAliasRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeRoleAliasRequest) => any;
}
/**
 * <p>Role alias description.</p>
 */
export interface RoleAliasDescription {
    /**
     * <p>The role alias.</p>
     */
    roleAlias?: string;
    /**
     * <p>The ARN of the role alias.</p>
     */
    roleAliasArn?: string;
    /**
     * <p>The role ARN.</p>
     */
    roleArn?: string;
    /**
     * <p>The role alias owner.</p>
     */
    owner?: string;
    /**
     * <p>The number of seconds for which the credential is valid.</p>
     */
    credentialDurationSeconds?: number;
    /**
     * <p>The UNIX timestamp of when the role alias was created.</p>
     */
    creationDate?: Date;
    /**
     * <p>The UNIX timestamp of when the role alias was last modified.</p>
     */
    lastModifiedDate?: Date;
}
export declare namespace RoleAliasDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RoleAliasDescription) => any;
}
export interface DescribeRoleAliasResponse {
    /**
     * <p>The role alias description.</p>
     */
    roleAliasDescription?: RoleAliasDescription;
}
export declare namespace DescribeRoleAliasResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeRoleAliasResponse) => any;
}
export interface DescribeScheduledAuditRequest {
    /**
     * <p>The name of the scheduled audit whose information you want to get.</p>
     */
    scheduledAuditName: string | undefined;
}
export declare namespace DescribeScheduledAuditRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeScheduledAuditRequest) => any;
}
export interface DescribeScheduledAuditResponse {
    /**
     * <p>How often the scheduled audit takes
     *       place, either
     *       one of <code>DAILY</code>,
     *             <code>WEEKLY</code>, <code>BIWEEKLY</code>, or <code>MONTHLY</code>. The start time of each audit is determined by the
     *       system.</p>
     */
    frequency?: AuditFrequency | string;
    /**
     * <p>The day of the month on which the scheduled audit takes place.
     *       This is
     *       will be <code>1</code>
     *             through <code>31</code> or <code>LAST</code>. If days
     *       <code>29</code>-<code>31</code>
     *       are specified, and the month does not have that many days, the audit takes place on the <code>LAST</code>
     *       day of the month.</p>
     */
    dayOfMonth?: string;
    /**
     * <p>The day of the week on which the scheduled audit takes
     *       place,
     *       either one of
     *             <code>SUN</code>, <code>MON</code>, <code>TUE</code>, <code>WED</code>, <code>THU</code>, <code>FRI</code>, or <code>SAT</code>.</p>
     */
    dayOfWeek?: DayOfWeek | string;
    /**
     * <p>Which checks are performed during the scheduled audit. Checks must be
     *             enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
     *             of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
     *             to select which checks are enabled.)</p>
     */
    targetCheckNames?: string[];
    /**
     * <p>The name of the scheduled audit.</p>
     */
    scheduledAuditName?: string;
    /**
     * <p>The ARN of the scheduled audit.</p>
     */
    scheduledAuditArn?: string;
}
export declare namespace DescribeScheduledAuditResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeScheduledAuditResponse) => any;
}
export interface DescribeSecurityProfileRequest {
    /**
     * <p>The name of the security profile
     *       whose information you want to get.</p>
     */
    securityProfileName: string | undefined;
}
export declare namespace DescribeSecurityProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeSecurityProfileRequest) => any;
}
export interface DescribeSecurityProfileResponse {
    /**
     * <p>The name of the security profile.</p>
     */
    securityProfileName?: string;
    /**
     * <p>The ARN of the security profile.</p>
     */
    securityProfileArn?: string;
    /**
     * <p>A description of the security profile (associated with the security profile
     *         when it was created or updated).</p>
     */
    securityProfileDescription?: string;
    /**
     * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
     */
    behaviors?: Behavior[];
    /**
     * <p>Where the alerts are sent. (Alerts are always sent to the console.)</p>
     */
    alertTargets?: {
        [key: string]: AlertTarget;
    };
    /**
     * @deprecated
     *
     * <p>
     *             <i>Please use
     *           <a>DescribeSecurityProfileResponse$additionalMetricsToRetainV2</a>
     *         instead.</i>
     *          </p>
     *          <p>A list of metrics
     *       whose data is retained (stored). By default, data is retained for any metric
     *       used in the profile's <code>behaviors</code>, but
     *       it is
     *       also retained for any metric specified here.</p>
     */
    additionalMetricsToRetain?: string[];
    /**
     * <p>A list of metrics whose data is retained (stored). By default, data is retained for any
     *       metric used in the profile's behaviors, but
     *       it is
     *       also retained for any metric specified here.</p>
     */
    additionalMetricsToRetainV2?: MetricToRetain[];
    /**
     * <p>The version of the security profile. A new version is generated whenever the
     *         security profile is updated.</p>
     */
    version?: number;
    /**
     * <p>The time the security profile was created.</p>
     */
    creationDate?: Date;
    /**
     * <p>The time the security profile was last modified.</p>
     */
    lastModifiedDate?: Date;
}
export declare namespace DescribeSecurityProfileResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeSecurityProfileResponse) => any;
}
export interface DescribeStreamRequest {
    /**
     * <p>The stream ID.</p>
     */
    streamId: string | undefined;
}
export declare namespace DescribeStreamRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeStreamRequest) => any;
}
/**
 * <p>Information about a stream.</p>
 */
export interface StreamInfo {
    /**
     * <p>The stream ID.</p>
     */
    streamId?: string;
    /**
     * <p>The stream ARN.</p>
     */
    streamArn?: string;
    /**
     * <p>The stream version.</p>
     */
    streamVersion?: number;
    /**
     * <p>The description of the stream.</p>
     */
    description?: string;
    /**
     * <p>The files to stream.</p>
     */
    files?: StreamFile[];
    /**
     * <p>The date when the stream was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The date when the stream was last updated.</p>
     */
    lastUpdatedAt?: Date;
    /**
     * <p>An IAM role AWS IoT assumes to access your S3 files.</p>
     */
    roleArn?: string;
}
export declare namespace StreamInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StreamInfo) => any;
}
export interface DescribeStreamResponse {
    /**
     * <p>Information about the stream.</p>
     */
    streamInfo?: StreamInfo;
}
export declare namespace DescribeStreamResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeStreamResponse) => any;
}
/**
 * <p>The input for the DescribeThing operation.</p>
 */
export interface DescribeThingRequest {
    /**
     * <p>The name of the thing.</p>
     */
    thingName: string | undefined;
}
export declare namespace DescribeThingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeThingRequest) => any;
}
/**
 * <p>The output from the DescribeThing operation.</p>
 */
export interface DescribeThingResponse {
    /**
     * <p>The default MQTT client ID. For a typical device, the thing name is also used as the default MQTT client ID.
     * 			Although we don’t require a mapping between a thing's registry name and its use of MQTT client IDs, certificates, or
     * 			shadow state, we recommend that you choose a thing name and use it as the MQTT client ID for the registry and the Device Shadow service.</p>
     * 		       <p>This lets you better organize your AWS IoT fleet without removing the flexibility of the underlying device certificate model or shadows.</p>
     */
    defaultClientId?: string;
    /**
     * <p>The name of the thing.</p>
     */
    thingName?: string;
    /**
     * <p>The ID of the thing to describe.</p>
     */
    thingId?: string;
    /**
     * <p>The ARN of the thing to describe.</p>
     */
    thingArn?: string;
    /**
     * <p>The thing type name.</p>
     */
    thingTypeName?: string;
    /**
     * <p>The thing attributes.</p>
     */
    attributes?: {
        [key: string]: string;
    };
    /**
     * <p>The current version of the thing record in the registry.</p>
     * 		       <note>
     * 			         <p>To avoid unintentional changes to the information in the registry, you can pass
     * 				the version information in the <code>expectedVersion</code> parameter of the
     * 					<code>UpdateThing</code> and <code>DeleteThing</code> calls.</p>
     * 		       </note>
     */
    version?: number;
    /**
     * <p>The name of the billing group the thing belongs to.</p>
     */
    billingGroupName?: string;
}
export declare namespace DescribeThingResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeThingResponse) => any;
}
export interface DescribeThingGroupRequest {
    /**
     * <p>The name of the thing group.</p>
     */
    thingGroupName: string | undefined;
}
export declare namespace DescribeThingGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeThingGroupRequest) => any;
}
export declare enum DynamicGroupStatus {
    ACTIVE = "ACTIVE",
    BUILDING = "BUILDING",
    REBUILDING = "REBUILDING"
}
/**
 * <p>The name and ARN of a group.</p>
 */
export interface GroupNameAndArn {
    /**
     * <p>The group name.</p>
     */
    groupName?: string;
    /**
     * <p>The group ARN.</p>
     */
    groupArn?: string;
}
export declare namespace GroupNameAndArn {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GroupNameAndArn) => any;
}
/**
 * <p>Thing group metadata.</p>
 */
export interface ThingGroupMetadata {
    /**
     * <p>The parent thing group name.</p>
     */
    parentGroupName?: string;
    /**
     * <p>The root parent thing group.</p>
     */
    rootToParentThingGroups?: GroupNameAndArn[];
    /**
     * <p>The UNIX timestamp of when the thing group was created.</p>
     */
    creationDate?: Date;
}
export declare namespace ThingGroupMetadata {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThingGroupMetadata) => any;
}
export interface DescribeThingGroupResponse {
    /**
     * <p>The name of the thing group.</p>
     */
    thingGroupName?: string;
    /**
     * <p>The thing group ID.</p>
     */
    thingGroupId?: string;
    /**
     * <p>The thing group ARN.</p>
     */
    thingGroupArn?: string;
    /**
     * <p>The version of the thing group.</p>
     */
    version?: number;
    /**
     * <p>The thing group properties.</p>
     */
    thingGroupProperties?: ThingGroupProperties;
    /**
     * <p>Thing group metadata.</p>
     */
    thingGroupMetadata?: ThingGroupMetadata;
    /**
     * <p>The dynamic thing group index name.</p>
     */
    indexName?: string;
    /**
     * <p>The dynamic thing group search query string.</p>
     */
    queryString?: string;
    /**
     * <p>The dynamic thing group query version.</p>
     */
    queryVersion?: string;
    /**
     * <p>The dynamic thing group status.</p>
     */
    status?: DynamicGroupStatus | string;
}
export declare namespace DescribeThingGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeThingGroupResponse) => any;
}
export interface DescribeThingRegistrationTaskRequest {
    /**
     * <p>The task ID.</p>
     */
    taskId: string | undefined;
}
export declare namespace DescribeThingRegistrationTaskRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeThingRegistrationTaskRequest) => any;
}
export declare enum Status {
    Cancelled = "Cancelled",
    Cancelling = "Cancelling",
    Completed = "Completed",
    Failed = "Failed",
    InProgress = "InProgress"
}
export interface DescribeThingRegistrationTaskResponse {
    /**
     * <p>The task ID.</p>
     */
    taskId?: string;
    /**
     * <p>The task creation date.</p>
     */
    creationDate?: Date;
    /**
     * <p>The date when the task was last modified.</p>
     */
    lastModifiedDate?: Date;
    /**
     * <p>The task's template.</p>
     */
    templateBody?: string;
    /**
     * <p>The S3 bucket that contains the input file.</p>
     */
    inputFileBucket?: string;
    /**
     * <p>The input file key.</p>
     */
    inputFileKey?: string;
    /**
     * <p>The role ARN that grants access to the input file bucket.</p>
     */
    roleArn?: string;
    /**
     * <p>The status of the bulk thing provisioning task.</p>
     */
    status?: Status | string;
    /**
     * <p>The message.</p>
     */
    message?: string;
    /**
     * <p>The number of things successfully provisioned.</p>
     */
    successCount?: number;
    /**
     * <p>The number of things that failed to be provisioned.</p>
     */
    failureCount?: number;
    /**
     * <p>The progress of the bulk provisioning task expressed as a percentage.</p>
     */
    percentageProgress?: number;
}
export declare namespace DescribeThingRegistrationTaskResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeThingRegistrationTaskResponse) => any;
}
/**
 * <p>The input for the DescribeThingType operation.</p>
 */
export interface DescribeThingTypeRequest {
    /**
     * <p>The name of the thing type.</p>
     */
    thingTypeName: string | undefined;
}
export declare namespace DescribeThingTypeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeThingTypeRequest) => any;
}
/**
 * <p>The ThingTypeMetadata contains additional information about the thing type including: creation date and
 * 			time, a value indicating whether the thing type is deprecated, and a date and time when time was
 * 			deprecated.</p>
 */
export interface ThingTypeMetadata {
    /**
     * <p>Whether the thing type is deprecated. If <b>true</b>, no new things could be
     * 			associated with this type.</p>
     */
    deprecated?: boolean;
    /**
     * <p>The date and time when the thing type was deprecated.</p>
     */
    deprecationDate?: Date;
    /**
     * <p>The date and time when the thing type was created.</p>
     */
    creationDate?: Date;
}
export declare namespace ThingTypeMetadata {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThingTypeMetadata) => any;
}
/**
 * <p>The output for the DescribeThingType operation.</p>
 */
export interface DescribeThingTypeResponse {
    /**
     * <p>The name of the thing type.</p>
     */
    thingTypeName?: string;
    /**
     * <p>The thing type ID.</p>
     */
    thingTypeId?: string;
    /**
     * <p>The thing type ARN.</p>
     */
    thingTypeArn?: string;
    /**
     * <p>The ThingTypeProperties contains information about the thing type including
     * 			description, and a list of searchable thing attribute names.</p>
     */
    thingTypeProperties?: ThingTypeProperties;
    /**
     * <p>The ThingTypeMetadata contains additional information about the thing type
     * 			including: creation date and time, a value indicating whether the thing type is
     * 			deprecated, and a date and time when it was deprecated.</p>
     */
    thingTypeMetadata?: ThingTypeMetadata;
}
export declare namespace DescribeThingTypeResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeThingTypeResponse) => any;
}
export interface DetachPolicyRequest {
    /**
     * <p>The policy to detach.</p>
     */
    policyName: string | undefined;
    /**
     * <p>The target from which the policy will be detached.</p>
     */
    target: string | undefined;
}
export declare namespace DetachPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DetachPolicyRequest) => any;
}
/**
 * <p>The input for the DetachPrincipalPolicy operation.</p>
 */
export interface DetachPrincipalPolicyRequest {
    /**
     * <p>The name of the policy to detach.</p>
     */
    policyName: string | undefined;
    /**
     * <p>The principal.</p>
     *          <p>Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
     */
    principal: string | undefined;
}
export declare namespace DetachPrincipalPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DetachPrincipalPolicyRequest) => any;
}
export interface DetachSecurityProfileRequest {
    /**
     * <p>The security profile that is detached.</p>
     */
    securityProfileName: string | undefined;
    /**
     * <p>The ARN of the thing group from which the security profile is detached.</p>
     */
    securityProfileTargetArn: string | undefined;
}
export declare namespace DetachSecurityProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DetachSecurityProfileRequest) => any;
}
export interface DetachSecurityProfileResponse {
}
export declare namespace DetachSecurityProfileResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DetachSecurityProfileResponse) => any;
}
/**
 * <p>The input for the DetachThingPrincipal operation.</p>
 */
export interface DetachThingPrincipalRequest {
    /**
     * <p>The name of the thing.</p>
     */
    thingName: string | undefined;
    /**
     * <p>If the principal is a certificate, this value must be ARN of the certificate. If
     * 			the principal is an Amazon Cognito identity, this value must be the ID of the Amazon
     * 			Cognito identity.</p>
     */
    principal: string | undefined;
}
export declare namespace DetachThingPrincipalRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DetachThingPrincipalRequest) => any;
}
/**
 * <p>The output from the DetachThingPrincipal operation.</p>
 */
export interface DetachThingPrincipalResponse {
}
export declare namespace DetachThingPrincipalResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DetachThingPrincipalResponse) => any;
}
/**
 * <p>The input for the DisableTopicRuleRequest operation.</p>
 */
export interface DisableTopicRuleRequest {
    /**
     * <p>The name of the rule to disable.</p>
     */
    ruleName: string | undefined;
}
export declare namespace DisableTopicRuleRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisableTopicRuleRequest) => any;
}
/**
 * <p>The input for the EnableTopicRuleRequest operation.</p>
 */
export interface EnableTopicRuleRequest {
    /**
     * <p>The name of the topic rule to enable.</p>
     */
    ruleName: string | undefined;
}
export declare namespace EnableTopicRuleRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnableTopicRuleRequest) => any;
}
export interface GetBehaviorModelTrainingSummariesRequest {
    /**
     * <p>
     *       The name of the security profile.
     *     </p>
     */
    securityProfileName?: string;
    /**
     * <p>
     *       The maximum number of results to return at one time. The default is 25.
     *     </p>
     */
    maxResults?: number;
    /**
     * <p>
     *       The token for the next set of results.
     *     </p>
     */
    nextToken?: string;
}
export declare namespace GetBehaviorModelTrainingSummariesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetBehaviorModelTrainingSummariesRequest) => any;
}
export declare enum ModelStatus {
    ACTIVE = "ACTIVE",
    EXPIRED = "EXPIRED",
    PENDING_BUILD = "PENDING_BUILD"
}
/**
 * <p>
 *             The summary of an ML Detect behavior model.
 *         </p>
 */
export interface BehaviorModelTrainingSummary {
    /**
     * <p>
     *             The name of the security profile.
     *         </p>
     */
    securityProfileName?: string;
    /**
     * <p>
     *             The name of the behavior.
     *         </p>
     */
    behaviorName?: string;
    /**
     * <p>
     *             The date a training model started collecting data.
     *         </p>
     */
    trainingDataCollectionStartDate?: Date;
    /**
     * <p>
     *             The status of the behavior model.
     *         </p>
     */
    modelStatus?: ModelStatus | string;
    /**
     * <p>
     *             The percentage of datapoints collected.
     *         </p>
     */
    datapointsCollectionPercentage?: number;
    /**
     * <p>
     *             The date the model was last refreshed.
     *         </p>
     */
    lastModelRefreshDate?: Date;
}
export declare namespace BehaviorModelTrainingSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BehaviorModelTrainingSummary) => any;
}
export interface GetBehaviorModelTrainingSummariesResponse {
    /**
     * <p>
     *       A list of all ML Detect behaviors and their model status for a given Security Profile.
     *     </p>
     */
    summaries?: BehaviorModelTrainingSummary[];
    /**
     * <p>
     *       A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.
     *     </p>
     */
    nextToken?: string;
}
export declare namespace GetBehaviorModelTrainingSummariesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetBehaviorModelTrainingSummariesResponse) => any;
}
export interface GetCardinalityRequest {
    /**
     * <p>The name of the index to search.</p>
     */
    indexName?: string;
    /**
     * <p>The search query.</p>
     */
    queryString: string | undefined;
    /**
     * <p>The field to aggregate.</p>
     */
    aggregationField?: string;
    /**
     * <p>The query version.</p>
     */
    queryVersion?: string;
}
export declare namespace GetCardinalityRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetCardinalityRequest) => any;
}
export interface GetCardinalityResponse {
    /**
     * <p>The approximate count of unique values that match the query.</p>
     */
    cardinality?: number;
}
export declare namespace GetCardinalityResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetCardinalityResponse) => any;
}
/**
 * <p>The index is not ready.</p>
 */
export interface IndexNotReadyException extends __SmithyException, $MetadataBearer {
    name: "IndexNotReadyException";
    $fault: "client";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace IndexNotReadyException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IndexNotReadyException) => any;
}
/**
 * <p>The aggregation is invalid.</p>
 */
export interface InvalidAggregationException extends __SmithyException, $MetadataBearer {
    name: "InvalidAggregationException";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidAggregationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidAggregationException) => any;
}
export interface GetEffectivePoliciesRequest {
    /**
     * <p>The principal. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
     */
    principal?: string;
    /**
     * <p>The Cognito identity pool ID.</p>
     */
    cognitoIdentityPoolId?: string;
    /**
     * <p>The thing name.</p>
     */
    thingName?: string;
}
export declare namespace GetEffectivePoliciesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetEffectivePoliciesRequest) => any;
}
/**
 * <p>The policy that has the effect on the authorization results.</p>
 */
export interface EffectivePolicy {
    /**
     * <p>The policy name.</p>
     */
    policyName?: string;
    /**
     * <p>The policy ARN.</p>
     */
    policyArn?: string;
    /**
     * <p>The IAM policy document.</p>
     */
    policyDocument?: string;
}
export declare namespace EffectivePolicy {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EffectivePolicy) => any;
}
export interface GetEffectivePoliciesResponse {
    /**
     * <p>The effective policies.</p>
     */
    effectivePolicies?: EffectivePolicy[];
}
export declare namespace GetEffectivePoliciesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetEffectivePoliciesResponse) => any;
}
export interface GetIndexingConfigurationRequest {
}
export declare namespace GetIndexingConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetIndexingConfigurationRequest) => any;
}
export declare enum FieldType {
    BOOLEAN = "Boolean",
    NUMBER = "Number",
    STRING = "String"
}
/**
 * <p>Describes the name and data type at a field.</p>
 */
export interface Field {
    /**
     * <p>The name of the field.</p>
     */
    name?: string;
    /**
     * <p>The datatype of the field.</p>
     */
    type?: FieldType | string;
}
export declare namespace Field {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Field) => any;
}
export declare enum ThingGroupIndexingMode {
    OFF = "OFF",
    ON = "ON"
}
/**
 * <p>Thing group indexing configuration.</p>
 */
export interface ThingGroupIndexingConfiguration {
    /**
     * <p>Thing group indexing mode.</p>
     */
    thingGroupIndexingMode: ThingGroupIndexingMode | string | undefined;
    /**
     * <p>Contains fields that are indexed and whose types are already known by the Fleet Indexing
     *       service.</p>
     */
    managedFields?: Field[];
    /**
     * <p>A list of thing group fields to index. This list cannot contain any managed fields. Use
     *       the GetIndexingConfiguration API to get a list of managed fields.</p>
     *          <p>Contains custom field names and their data type.</p>
     */
    customFields?: Field[];
}
export declare namespace ThingGroupIndexingConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThingGroupIndexingConfiguration) => any;
}
export declare enum ThingConnectivityIndexingMode {
    OFF = "OFF",
    STATUS = "STATUS"
}
export declare enum ThingIndexingMode {
    OFF = "OFF",
    REGISTRY = "REGISTRY",
    REGISTRY_AND_SHADOW = "REGISTRY_AND_SHADOW"
}
/**
 * <p>The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing
 *         Thing Indexing</a>.</p>
 */
export interface ThingIndexingConfiguration {
    /**
     * <p>Thing indexing mode. Valid values are:</p>
     *          <ul>
     *             <li>
     *                <p>REGISTRY – Your thing index contains registry data only.</p>
     *             </li>
     *             <li>
     *                <p>REGISTRY_AND_SHADOW - Your thing index contains registry and shadow data.</p>
     *             </li>
     *             <li>
     *                <p>OFF - Thing indexing is disabled.</p>
     *             </li>
     *          </ul>
     */
    thingIndexingMode: ThingIndexingMode | string | undefined;
    /**
     * <p>Thing connectivity indexing mode. Valid values are: </p>
     *          <ul>
     *             <li>
     *                <p>STATUS – Your thing index contains connectivity status. To enable thing
     *           connectivity indexing, thingIndexMode must not be set to OFF.</p>
     *             </li>
     *             <li>
     *                <p>OFF - Thing connectivity status indexing is disabled.</p>
     *             </li>
     *          </ul>
     */
    thingConnectivityIndexingMode?: ThingConnectivityIndexingMode | string;
    /**
     * <p>Contains fields that are indexed and whose types are already known by the Fleet Indexing
     *       service.</p>
     */
    managedFields?: Field[];
    /**
     * <p>Contains custom field names and their data type.</p>
     */
    customFields?: Field[];
}
export declare namespace ThingIndexingConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThingIndexingConfiguration) => any;
}
export interface GetIndexingConfigurationResponse {
    /**
     * <p>Thing indexing configuration.</p>
     */
    thingIndexingConfiguration?: ThingIndexingConfiguration;
    /**
     * <p>The index configuration.</p>
     */
    thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;
}
export declare namespace GetIndexingConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetIndexingConfigurationResponse) => any;
}
export interface GetJobDocumentRequest {
    /**
     * <p>The unique identifier you assigned to this job when it was created.</p>
     */
    jobId: string | undefined;
}
export declare namespace GetJobDocumentRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetJobDocumentRequest) => any;
}
export interface GetJobDocumentResponse {
    /**
     * <p>The job document content.</p>
     */
    document?: string;
}
export declare namespace GetJobDocumentResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetJobDocumentResponse) => any;
}
/**
 * <p>The input for the GetLoggingOptions operation.</p>
 */
export interface GetLoggingOptionsRequest {
}
export declare namespace GetLoggingOptionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLoggingOptionsRequest) => any;
}
/**
 * <p>The output from the GetLoggingOptions operation.</p>
 */
export interface GetLoggingOptionsResponse {
    /**
     * <p>The ARN of the IAM role that grants access.</p>
     */
    roleArn?: string;
    /**
     * <p>The logging level.</p>
     */
    logLevel?: LogLevel | string;
}
export declare namespace GetLoggingOptionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLoggingOptionsResponse) => any;
}
export interface GetOTAUpdateRequest {
    /**
     * <p>The OTA update ID.</p>
     */
    otaUpdateId: string | undefined;
}
export declare namespace GetOTAUpdateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetOTAUpdateRequest) => any;
}
/**
 * <p>Error information.</p>
 */
export interface ErrorInfo {
    /**
     * <p>The error code.</p>
     */
    code?: string;
    /**
     * <p>The error message.</p>
     */
    message?: string;
}
export declare namespace ErrorInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ErrorInfo) => any;
}
/**
 * <p>Information about an OTA update.</p>
 */
export interface OTAUpdateInfo {
    /**
     * <p>The OTA update ID.</p>
     */
    otaUpdateId?: string;
    /**
     * <p>The OTA update ARN.</p>
     */
    otaUpdateArn?: string;
    /**
     * <p>The date when the OTA update was created.</p>
     */
    creationDate?: Date;
    /**
     * <p>The date when the OTA update was last updated.</p>
     */
    lastModifiedDate?: Date;
    /**
     * <p>A description of the OTA update.</p>
     */
    description?: string;
    /**
     * <p>The targets of the OTA update.</p>
     */
    targets?: string[];
    /**
     * <p>The protocol used to transfer the OTA update image. Valid values are [HTTP], [MQTT], [HTTP, MQTT]. When both
     *              HTTP and MQTT are specified, the target device can choose the protocol.</p>
     */
    protocols?: (Protocol | string)[];
    /**
     * <p>Configuration for the rollout of OTA updates.</p>
     */
    awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;
    /**
     * <p>Configuration information for pre-signed URLs. Valid when <code>protocols</code>
     *              contains HTTP.</p>
     */
    awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;
    /**
     * <p>Specifies whether the OTA update will continue to run (CONTINUOUS), or will be complete after all those
     *             things specified as targets have completed the OTA update (SNAPSHOT). If continuous, the OTA update may also
     *             be run on a thing when a change is detected in a target. For example, an OTA update will run on a thing when
     *             the thing is added to a target group, even after the OTA update was completed by all things originally in
     *             the group. </p>
     */
    targetSelection?: TargetSelection | string;
    /**
     * <p>A list of files associated with the OTA update.</p>
     */
    otaUpdateFiles?: OTAUpdateFile[];
    /**
     * <p>The status of the OTA update.</p>
     */
    otaUpdateStatus?: OTAUpdateStatus | string;
    /**
     * <p>The AWS IoT job ID associated with the OTA update.</p>
     */
    awsIotJobId?: string;
    /**
     * <p>The AWS IoT job ARN associated with the OTA update.</p>
     */
    awsIotJobArn?: string;
    /**
     * <p>Error information associated with the OTA update.</p>
     */
    errorInfo?: ErrorInfo;
    /**
     * <p>A collection of name/value pairs</p>
     */
    additionalParameters?: {
        [key: string]: string;
    };
}
export declare namespace OTAUpdateInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OTAUpdateInfo) => any;
}
export interface GetOTAUpdateResponse {
    /**
     * <p>The OTA update info.</p>
     */
    otaUpdateInfo?: OTAUpdateInfo;
}
export declare namespace GetOTAUpdateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetOTAUpdateResponse) => any;
}
export interface GetPercentilesRequest {
    /**
     * <p>The name of the index to search.</p>
     */
    indexName?: string;
    /**
     * <p>The query string.</p>
     */
    queryString: string | undefined;
    /**
     * <p>The field to aggregate.</p>
     */
    aggregationField?: string;
    /**
     * <p>The query version.</p>
     */
    queryVersion?: string;
    /**
     * <p>The percentile groups returned.</p>
     */
    percents?: number[];
}
export declare namespace GetPercentilesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPercentilesRequest) => any;
}
/**
 * <p>Describes the percentile and percentile value.</p>
 */
export interface PercentPair {
    /**
     * <p>The percentile.</p>
     */
    percent?: number;
    /**
     * <p>The value of the percentile.</p>
     */
    value?: number;
}
export declare namespace PercentPair {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PercentPair) => any;
}
export interface GetPercentilesResponse {
    /**
     * <p>The percentile values of the aggregated fields.</p>
     */
    percentiles?: PercentPair[];
}
export declare namespace GetPercentilesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPercentilesResponse) => any;
}
/**
 * <p>The input for the GetPolicy operation.</p>
 */
export interface GetPolicyRequest {
    /**
     * <p>The name of the policy.</p>
     */
    policyName: string | undefined;
}
export declare namespace GetPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPolicyRequest) => any;
}
/**
 * <p>The output from the GetPolicy operation.</p>
 */
export interface GetPolicyResponse {
    /**
     * <p>The policy name.</p>
     */
    policyName?: string;
    /**
     * <p>The policy ARN.</p>
     */
    policyArn?: string;
    /**
     * <p>The JSON document that describes the policy.</p>
     */
    policyDocument?: string;
    /**
     * <p>The default policy version ID.</p>
     */
    defaultVersionId?: string;
    /**
     * <p>The date the policy was created.</p>
     */
    creationDate?: Date;
    /**
     * <p>The date the policy was last modified.</p>
     */
    lastModifiedDate?: Date;
    /**
     * <p>The generation ID of the policy.</p>
     */
    generationId?: string;
}
export declare namespace GetPolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPolicyResponse) => any;
}
/**
 * <p>The input for the GetPolicyVersion operation.</p>
 */
export interface GetPolicyVersionRequest {
    /**
     * <p>The name of the policy.</p>
     */
    policyName: string | undefined;
    /**
     * <p>The policy version ID.</p>
     */
    policyVersionId: string | undefined;
}
export declare namespace GetPolicyVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPolicyVersionRequest) => any;
}
/**
 * <p>The output from the GetPolicyVersion operation.</p>
 */
export interface GetPolicyVersionResponse {
    /**
     * <p>The policy ARN.</p>
     */
    policyArn?: string;
    /**
     * <p>The policy name.</p>
     */
    policyName?: string;
    /**
     * <p>The JSON document that describes the policy.</p>
     */
    policyDocument?: string;
    /**
     * <p>The policy version ID.</p>
     */
    policyVersionId?: string;
    /**
     * <p>Specifies whether the policy version is the default.</p>
     */
    isDefaultVersion?: boolean;
    /**
     * <p>The date the policy was created.</p>
     */
    creationDate?: Date;
    /**
     * <p>The date the policy was last modified.</p>
     */
    lastModifiedDate?: Date;
    /**
     * <p>The generation ID of the policy version.</p>
     */
    generationId?: string;
}
export declare namespace GetPolicyVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPolicyVersionResponse) => any;
}
/**
 * <p>The input to the GetRegistrationCode operation.</p>
 */
export interface GetRegistrationCodeRequest {
}
export declare namespace GetRegistrationCodeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetRegistrationCodeRequest) => any;
}
/**
 * <p>The output from the GetRegistrationCode operation.</p>
 */
export interface GetRegistrationCodeResponse {
    /**
     * <p>The CA certificate registration code.</p>
     */
    registrationCode?: string;
}
export declare namespace GetRegistrationCodeResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetRegistrationCodeResponse) => any;
}
export interface GetStatisticsRequest {
    /**
     * <p>The name of the index to search. The default value is <code>AWS_Things</code>.</p>
     */
    indexName?: string;
    /**
     * <p>The query used to search. You can specify "*" for the query string to get the count of all
     *       indexed things in your AWS account.</p>
     */
    queryString: string | undefined;
    /**
     * <p>The aggregation field name.</p>
     */
    aggregationField?: string;
    /**
     * <p>The version of the query used to search.</p>
     */
    queryVersion?: string;
}
export declare namespace GetStatisticsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetStatisticsRequest) => any;
}
/**
 * <p>A map of key-value pairs for all supported statistics. Currently, only count is
 *       supported.</p>
 */
export interface Statistics {
    /**
     * <p>The count of things that match the query.</p>
     */
    count?: number;
    /**
     * <p>The average of the aggregated field values.</p>
     */
    average?: number;
    /**
     * <p>The sum of the aggregated field values.</p>
     */
    sum?: number;
    /**
     * <p>The minimum aggregated field value.</p>
     */
    minimum?: number;
    /**
     * <p>The maximum aggregated field value.</p>
     */
    maximum?: number;
    /**
     * <p>The sum of the squares of the aggregated field values.</p>
     */
    sumOfSquares?: number;
    /**
     * <p>The variance of the aggregated field values.</p>
     */
    variance?: number;
    /**
     * <p>The standard deviation of the aggregated field values.</p>
     */
    stdDeviation?: number;
}
export declare namespace Statistics {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Statistics) => any;
}
export interface GetStatisticsResponse {
    /**
     * <p>The statistics returned by the Fleet Indexing service based on the query and aggregation
     *       field.</p>
     */
    statistics?: Statistics;
}
export declare namespace GetStatisticsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetStatisticsResponse) => any;
}
/**
 * <p>The input for the GetTopicRule operation.</p>
 */
export interface GetTopicRuleRequest {
    /**
     * <p>The name of the rule.</p>
     */
    ruleName: string | undefined;
}
export declare namespace GetTopicRuleRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetTopicRuleRequest) => any;
}
/**
 * <p>Describes a rule.</p>
 */
export interface TopicRule {
    /**
     * <p>The name of the rule.</p>
     */
    ruleName?: string;
    /**
     * <p>The SQL statement used to query the topic. When using a SQL query with multiple
     *          lines, be sure to escape the newline characters.</p>
     */
    sql?: string;
    /**
     * <p>The description of the rule.</p>
     */
    description?: string;
    /**
     * <p>The date and time the rule was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The actions associated with the rule.</p>
     */
    actions?: Action[];
    /**
     * <p>Specifies whether the rule is disabled.</p>
     */
    ruleDisabled?: boolean;
    /**
     * <p>The version of the SQL rules engine to use when evaluating the rule.</p>
     */
    awsIotSqlVersion?: string;
    /**
     * <p>The action to perform when an error occurs.</p>
     */
    errorAction?: Action;
}
export declare namespace TopicRule {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TopicRule) => any;
}
/**
 * <p>The output from the GetTopicRule operation.</p>
 */
export interface GetTopicRuleResponse {
    /**
     * <p>The rule ARN.</p>
     */
    ruleArn?: string;
    /**
     * <p>The rule.</p>
     */
    rule?: TopicRule;
}
export declare namespace GetTopicRuleResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetTopicRuleResponse) => any;
}
export interface GetTopicRuleDestinationRequest {
    /**
     * <p>The ARN of the topic rule destination.</p>
     */
    arn: string | undefined;
}
export declare namespace GetTopicRuleDestinationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetTopicRuleDestinationRequest) => any;
}
export interface GetTopicRuleDestinationResponse {
    /**
     * <p>The topic rule destination.</p>
     */
    topicRuleDestination?: TopicRuleDestination;
}
export declare namespace GetTopicRuleDestinationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetTopicRuleDestinationResponse) => any;
}
export interface GetV2LoggingOptionsRequest {
}
export declare namespace GetV2LoggingOptionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetV2LoggingOptionsRequest) => any;
}
export interface GetV2LoggingOptionsResponse {
    /**
     * <p>The IAM role ARN AWS IoT uses to write to your CloudWatch logs.</p>
     */
    roleArn?: string;
    /**
     * <p>The default log level.</p>
     */
    defaultLogLevel?: LogLevel | string;
    /**
     * <p>Disables all logs.</p>
     */
    disableAllLogs?: boolean;
}
export declare namespace GetV2LoggingOptionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetV2LoggingOptionsResponse) => any;
}
/**
 * <p>The resource is not configured.</p>
 */
export interface NotConfiguredException extends __SmithyException, $MetadataBearer {
    name: "NotConfiguredException";
    $fault: "client";
    /**
     * <p>The message for the exception.</p>
     */
    message?: string;
}
export declare namespace NotConfiguredException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NotConfiguredException) => any;
}
export declare enum BehaviorCriteriaType {
    MACHINE_LEARNING = "MACHINE_LEARNING",
    STATIC = "STATIC",
    STATISTICAL = "STATISTICAL"
}
export interface ListActiveViolationsRequest {
    /**
     * <p>The name of the thing whose active violations are listed.</p>
     */
    thingName?: string;
    /**
     * <p>The name of the Device Defender security profile for which violations are listed.</p>
     */
    securityProfileName?: string;
    /**
     * <p>
     *       The criteria for a behavior.
     *     </p>
     */
    behaviorCriteriaType?: BehaviorCriteriaType | string;
    /**
     * <p>
     *       A list of all suppressed alerts.
     *     </p>
     */
    listSuppressedAlerts?: boolean;
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return at one time.</p>
     */
    maxResults?: number;
}
export declare namespace ListActiveViolationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListActiveViolationsRequest) => any;
}
export interface ListActiveViolationsResponse {
    /**
     * <p>The list of active violations.</p>
     */
    activeViolations?: ActiveViolation[];
    /**
     * <p>A token that can be used to retrieve the next set of results,
     *             or <code>null</code> if there are no additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListActiveViolationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListActiveViolationsResponse) => any;
}
export interface ListAttachedPoliciesRequest {
    /**
     * <p>The group or principal for which the policies will be listed. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
     */
    target: string | undefined;
    /**
     * <p>When true, recursively list attached policies.</p>
     */
    recursive?: boolean;
    /**
     * <p>The token to retrieve the next set of results.</p>
     */
    marker?: string;
    /**
     * <p>The maximum number of results to be returned per request.</p>
     */
    pageSize?: number;
}
export declare namespace ListAttachedPoliciesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAttachedPoliciesRequest) => any;
}
export interface ListAttachedPoliciesResponse {
    /**
     * <p>The policies.</p>
     */
    policies?: Policy[];
    /**
     * <p>The token to retrieve the next set of results, or ``null`` if there are no more
     *          results.</p>
     */
    nextMarker?: string;
}
export declare namespace ListAttachedPoliciesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAttachedPoliciesResponse) => any;
}
export interface ListAuditFindingsRequest {
    /**
     * <p>A filter to limit results to the audit with the specified ID. You must
     *             specify either the taskId or the startTime and endTime, but not both.</p>
     */
    taskId?: string;
    /**
     * <p>A filter to limit results to the findings for the specified audit check.</p>
     */
    checkName?: string;
    /**
     * <p>Information identifying the noncompliant resource.</p>
     */
    resourceIdentifier?: ResourceIdentifier;
    /**
     * <p>The maximum number of results to return at one time. The default is 25.</p>
     */
    maxResults?: number;
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>A filter to limit results to those found after the specified time. You must
     *             specify either the startTime and endTime or the taskId, but not both.</p>
     */
    startTime?: Date;
    /**
     * <p>A filter to limit results to those found before the specified time. You must
     *             specify either the startTime and endTime or the taskId, but not both.</p>
     */
    endTime?: Date;
    /**
     * <p>
     *       Boolean flag indicating whether only the suppressed findings or the unsuppressed findings should be listed. If this parameter isn't provided, the response will list both suppressed and unsuppressed findings.
     *     </p>
     */
    listSuppressedFindings?: boolean;
}
export declare namespace ListAuditFindingsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAuditFindingsRequest) => any;
}
export interface ListAuditFindingsResponse {
    /**
     * <p>The findings (results) of the audit.</p>
     */
    findings?: AuditFinding[];
    /**
     * <p>A token that can be used to retrieve the next set of results, or <code>null</code>
     *             if there are no additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListAuditFindingsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAuditFindingsResponse) => any;
}
export interface ListAuditMitigationActionsExecutionsRequest {
    /**
     * <p>Specify this filter to limit results to actions for a specific audit mitigation actions task.</p>
     */
    taskId: string | undefined;
    /**
     * <p>Specify this filter to limit results to those with a specific status.</p>
     */
    actionStatus?: AuditMitigationActionsExecutionStatus | string;
    /**
     * <p>Specify this filter to limit results to those that were applied to a specific audit finding.</p>
     */
    findingId: string | undefined;
    /**
     * <p>The maximum number of results to return at one time. The default is 25.</p>
     */
    maxResults?: number;
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListAuditMitigationActionsExecutionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAuditMitigationActionsExecutionsRequest) => any;
}
export interface ListAuditMitigationActionsExecutionsResponse {
    /**
     * <p>A set of task execution results based on the input parameters. Details include the mitigation action applied, start time, and task status.</p>
     */
    actionsExecutions?: AuditMitigationActionExecutionMetadata[];
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListAuditMitigationActionsExecutionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAuditMitigationActionsExecutionsResponse) => any;
}
export interface ListAuditMitigationActionsTasksRequest {
    /**
     * <p>Specify this filter to limit results to tasks that were applied to results for a specific audit.</p>
     */
    auditTaskId?: string;
    /**
     * <p>Specify this filter to limit results to tasks that were applied to a specific audit finding.</p>
     */
    findingId?: string;
    /**
     * <p>Specify this filter to limit results to tasks that are in a specific state.</p>
     */
    taskStatus?: AuditMitigationActionsTaskStatus | string;
    /**
     * <p>The maximum number of results to return at one time. The default is 25.</p>
     */
    maxResults?: number;
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>Specify this filter to limit results to tasks that began on or after a specific date and time.</p>
     */
    startTime: Date | undefined;
    /**
     * <p>Specify this filter to limit results to tasks that were completed or canceled on or before a specific date and time.</p>
     */
    endTime: Date | undefined;
}
export declare namespace ListAuditMitigationActionsTasksRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAuditMitigationActionsTasksRequest) => any;
}
export interface ListAuditMitigationActionsTasksResponse {
    /**
     * <p>The collection of audit mitigation tasks that matched the filter criteria.</p>
     */
    tasks?: AuditMitigationActionsTaskMetadata[];
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListAuditMitigationActionsTasksResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAuditMitigationActionsTasksResponse) => any;
}
export interface ListAuditSuppressionsRequest {
    /**
     * <p>An audit check name. Checks must be enabled
     *         for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
     *         of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
     *         to select which checks are enabled.)</p>
     */
    checkName?: string;
    /**
     * <p>Information that identifies the noncompliant resource.</p>
     */
    resourceIdentifier?: ResourceIdentifier;
    /**
     * <p>
     *       Determines whether suppressions are listed in ascending order by expiration date or not. If parameter isn't provided, <code>ascendingOrder=true</code>.
     *     </p>
     */
    ascendingOrder?: boolean;
    /**
     * <p>
     *       The token for the next set of results.
     *     </p>
     */
    nextToken?: string;
    /**
     * <p>
     *       The maximum number of results to return at one time. The default is 25.
     *     </p>
     */
    maxResults?: number;
}
export declare namespace ListAuditSuppressionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAuditSuppressionsRequest) => any;
}
export interface ListAuditSuppressionsResponse {
    /**
     * <p>
     *       List of audit suppressions.
     *     </p>
     */
    suppressions?: AuditSuppression[];
    /**
     * <p>
     *       A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.
     *     </p>
     */
    nextToken?: string;
}
export declare namespace ListAuditSuppressionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAuditSuppressionsResponse) => any;
}
export interface ListAuditTasksRequest {
    /**
     * <p>The beginning of the time period. Audit information is retained for a
     *               limited time (90 days). Requesting a start time prior to what is retained
     *               results in an "InvalidRequestException".</p>
     */
    startTime: Date | undefined;
    /**
     * <p>The end of the time period.</p>
     */
    endTime: Date | undefined;
    /**
     * <p>A filter to limit the output to the specified type of audit: can be one of
     *             "ON_DEMAND_AUDIT_TASK" or "SCHEDULED__AUDIT_TASK".</p>
     */
    taskType?: AuditTaskType | string;
    /**
     * <p>A filter to limit the output to audits with the specified completion
     *             status: can be one of "IN_PROGRESS", "COMPLETED", "FAILED", or "CANCELED".</p>
     */
    taskStatus?: AuditTaskStatus | string;
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return at one time. The default is 25.</p>
     */
    maxResults?: number;
}
export declare namespace ListAuditTasksRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAuditTasksRequest) => any;
}
export interface ListAuditTasksResponse {
    /**
     * <p>The audits that were performed during the specified time period.</p>
     */
    tasks?: AuditTaskMetadata[];
    /**
     * <p>A token that can be used to retrieve the next set of results, or <code>null</code>
     *             if there are no additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListAuditTasksResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAuditTasksResponse) => any;
}
export interface ListAuthorizersRequest {
    /**
     * <p>The maximum number of results to return at one time.</p>
     */
    pageSize?: number;
    /**
     * <p>A marker used to get the next set of results.</p>
     */
    marker?: string;
    /**
     * <p>Return the list of authorizers in ascending alphabetical order.</p>
     */
    ascendingOrder?: boolean;
    /**
     * <p>The status of the list authorizers request.</p>
     */
    status?: AuthorizerStatus | string;
}
export declare namespace ListAuthorizersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAuthorizersRequest) => any;
}
export interface ListAuthorizersResponse {
    /**
     * <p>The authorizers.</p>
     */
    authorizers?: AuthorizerSummary[];
    /**
     * <p>A marker used to get the next set of results.</p>
     */
    nextMarker?: string;
}
export declare namespace ListAuthorizersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAuthorizersResponse) => any;
}
export interface ListBillingGroupsRequest {
    /**
     * <p>To retrieve the next set of results, the <code>nextToken</code>
     * 			value from a previous response; otherwise <b>null</b> to receive
     * 			the first set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return per request.</p>
     */
    maxResults?: number;
    /**
     * <p>Limit the results to billing groups whose names have the given prefix.</p>
     */
    namePrefixFilter?: string;
}
export declare namespace ListBillingGroupsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListBillingGroupsRequest) => any;
}
export interface ListBillingGroupsResponse {
    /**
     * <p>The list of billing groups.</p>
     */
    billingGroups?: GroupNameAndArn[];
    /**
     * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListBillingGroupsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListBillingGroupsResponse) => any;
}
/**
 * <p>Input for the ListCACertificates operation.</p>
 */
export interface ListCACertificatesRequest {
    /**
     * <p>The result page size.</p>
     */
    pageSize?: number;
    /**
     * <p>The marker for the next set of results.</p>
     */
    marker?: string;
    /**
     * <p>Determines the order of the results.</p>
     */
    ascendingOrder?: boolean;
}
export declare namespace ListCACertificatesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListCACertificatesRequest) => any;
}
/**
 * <p>A CA certificate.</p>
 */
export interface CACertificate {
    /**
     * <p>The ARN of the CA certificate.</p>
     */
    certificateArn?: string;
    /**
     * <p>The ID of the CA certificate.</p>
     */
    certificateId?: string;
    /**
     * <p>The status of the CA certificate.</p>
     *          <p>The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
     */
    status?: CACertificateStatus | string;
    /**
     * <p>The date the CA certificate was created.</p>
     */
    creationDate?: Date;
}
export declare namespace CACertificate {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CACertificate) => any;
}
/**
 * <p>The output from the ListCACertificates operation.</p>
 */
export interface ListCACertificatesResponse {
    /**
     * <p>The CA certificates registered in your AWS account.</p>
     */
    certificates?: CACertificate[];
    /**
     * <p>The current position within the list of CA certificates.</p>
     */
    nextMarker?: string;
}
export declare namespace ListCACertificatesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListCACertificatesResponse) => any;
}
/**
 * <p>The input for the ListCertificates operation.</p>
 */
export interface ListCertificatesRequest {
    /**
     * <p>The result page size.</p>
     */
    pageSize?: number;
    /**
     * <p>The marker for the next set of results.</p>
     */
    marker?: string;
    /**
     * <p>Specifies the order for results. If True, the results are returned in ascending
     *          order, based on the creation date.</p>
     */
    ascendingOrder?: boolean;
}
export declare namespace ListCertificatesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListCertificatesRequest) => any;
}
/**
 * <p>Information about a certificate.</p>
 */
export interface Certificate {
    /**
     * <p>The ARN of the certificate.</p>
     */
    certificateArn?: string;
    /**
     * <p>The ID of the certificate. (The last part of the certificate ARN contains the
     *          certificate ID.)</p>
     */
    certificateId?: string;
    /**
     * <p>The status of the certificate.</p>
     *          <p>The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
     */
    status?: CertificateStatus | string;
    /**
     * <p>The mode of the certificate.</p>
     */
    certificateMode?: CertificateMode | string;
    /**
     * <p>The date and time the certificate was created.</p>
     */
    creationDate?: Date;
}
export declare namespace Certificate {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Certificate) => any;
}
/**
 * <p>The output of the ListCertificates operation.</p>
 */
export interface ListCertificatesResponse {
    /**
     * <p>The descriptions of the certificates.</p>
     */
    certificates?: Certificate[];
    /**
     * <p>The marker for the next set of results, or null if there are no additional
     *          results.</p>
     */
    nextMarker?: string;
}
export declare namespace ListCertificatesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListCertificatesResponse) => any;
}
/**
 * <p>The input to the ListCertificatesByCA operation.</p>
 */
export interface ListCertificatesByCARequest {
    /**
     * <p>The ID of the CA certificate. This operation will list all registered device
     *          certificate that were signed by this CA certificate.</p>
     */
    caCertificateId: string | undefined;
    /**
     * <p>The result page size.</p>
     */
    pageSize?: number;
    /**
     * <p>The marker for the next set of results.</p>
     */
    marker?: string;
    /**
     * <p>Specifies the order for results. If True, the results are returned in ascending
     *          order, based on the creation date.</p>
     */
    ascendingOrder?: boolean;
}
export declare namespace ListCertificatesByCARequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListCertificatesByCARequest) => any;
}
/**
 * <p>The output of the ListCertificatesByCA operation.</p>
 */
export interface ListCertificatesByCAResponse {
    /**
     * <p>The device certificates signed by the specified CA certificate.</p>
     */
    certificates?: Certificate[];
    /**
     * <p>The marker for the next set of results, or null if there are no additional
     *          results.</p>
     */
    nextMarker?: string;
}
export declare namespace ListCertificatesByCAResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListCertificatesByCAResponse) => any;
}
export interface ListCustomMetricsRequest {
    /**
     * <p>
     *       The token for the next set of results.
     *     </p>
     */
    nextToken?: string;
    /**
     * <p>
     *       The maximum number of results to return at one time. The default is 25.
     *     </p>
     */
    maxResults?: number;
}
export declare namespace ListCustomMetricsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListCustomMetricsRequest) => any;
}
export interface ListCustomMetricsResponse {
    /**
     * <p>
     *       The name of the custom metric.
     *     </p>
     */
    metricNames?: string[];
    /**
     * <p>
     *       A token that can be used to retrieve the next set of results,
     *       or <code>null</code> if there are no additional results.
     *     </p>
     */
    nextToken?: string;
}
export declare namespace ListCustomMetricsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListCustomMetricsResponse) => any;
}
export interface ListDetectMitigationActionsExecutionsRequest {
    /**
     * <p>
     *       The unique identifier of the task.
     *     </p>
     */
    taskId?: string;
    /**
     * <p>
     *       The unique identifier of the violation.
     *     </p>
     */
    violationId?: string;
    /**
     * <p>
     *       The name of the thing whose mitigation actions are listed.
     *     </p>
     */
    thingName?: string;
    /**
     * <p>
     *       A filter to limit results to those found after the specified time. You must
     *       specify either the startTime and endTime or the taskId, but not both.
     *     </p>
     */
    startTime?: Date;
    /**
     * <p>
     *       The end of the time period for which ML Detect mitigation actions executions are returned.
     *     </p>
     */
    endTime?: Date;
    /**
     * <p>
     *       The maximum number of results to return at one time. The default is 25.
     *     </p>
     */
    maxResults?: number;
    /**
     * <p>
     *       The token for the next set of results.
     *     </p>
     */
    nextToken?: string;
}
export declare namespace ListDetectMitigationActionsExecutionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDetectMitigationActionsExecutionsRequest) => any;
}
export declare enum DetectMitigationActionExecutionStatus {
    FAILED = "FAILED",
    IN_PROGRESS = "IN_PROGRESS",
    SKIPPED = "SKIPPED",
    SUCCESSFUL = "SUCCESSFUL"
}
/**
 * <p>
 *             Describes which mitigation actions should be executed.
 *         </p>
 */
export interface DetectMitigationActionExecution {
    /**
     * <p>
     *             The unique identifier of the task.
     *         </p>
     */
    taskId?: string;
    /**
     * <p>
     *             The unique identifier of the violation.
     *         </p>
     */
    violationId?: string;
    /**
     * <p>
     *             The friendly name that uniquely identifies the mitigation action.
     *         </p>
     */
    actionName?: string;
    /**
     * <p>
     *             The name of the thing.
     *         </p>
     */
    thingName?: string;
    /**
     * <p>
     *             The date a mitigation action was started.
     *         </p>
     */
    executionStartDate?: Date;
    /**
     * <p>
     *             The date a mitigation action ended.
     *         </p>
     */
    executionEndDate?: Date;
    /**
     * <p>
     *             The status of a mitigation action.
     *         </p>
     */
    status?: DetectMitigationActionExecutionStatus | string;
    /**
     * <p>
     *             The error code of a mitigation action.
     *         </p>
     */
    errorCode?: string;
    /**
     * <p>
     *             The message of a mitigation action.
     *         </p>
     */
    message?: string;
}
export declare namespace DetectMitigationActionExecution {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DetectMitigationActionExecution) => any;
}
export interface ListDetectMitigationActionsExecutionsResponse {
    /**
     * <p>
     *       List of actions executions.
     *     </p>
     */
    actionsExecutions?: DetectMitigationActionExecution[];
    /**
     * <p>
     *       A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.
     *     </p>
     */
    nextToken?: string;
}
export declare namespace ListDetectMitigationActionsExecutionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDetectMitigationActionsExecutionsResponse) => any;
}
export interface ListDetectMitigationActionsTasksRequest {
    /**
     * <p>The maximum number of results to return at one time. The default is 25.</p>
     */
    maxResults?: number;
    /**
     * <p>
     *       The token for the next set of results.
     *     </p>
     */
    nextToken?: string;
    /**
     * <p>
     *       A filter to limit results to those found after the specified time. You must
     *       specify either the startTime and endTime or the taskId, but not both.
     *     </p>
     */
    startTime: Date | undefined;
    /**
     * <p>
     *       The end of the time period for which ML Detect mitigation actions tasks are returned.
     *     </p>
     */
    endTime: Date | undefined;
}
export declare namespace ListDetectMitigationActionsTasksRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDetectMitigationActionsTasksRequest) => any;
}
export interface ListDetectMitigationActionsTasksResponse {
    /**
     * <p>
     *       The collection of ML Detect mitigation tasks that matched the filter criteria.
     *     </p>
     */
    tasks?: DetectMitigationActionsTaskSummary[];
    /**
     * <p>
     *       A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.
     *     </p>
     */
    nextToken?: string;
}
export declare namespace ListDetectMitigationActionsTasksResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDetectMitigationActionsTasksResponse) => any;
}
export interface ListDimensionsRequest {
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to retrieve at one time.</p>
     */
    maxResults?: number;
}
export declare namespace ListDimensionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDimensionsRequest) => any;
}
export interface ListDimensionsResponse {
    /**
     * <p>A list of the names of the defined dimensions. Use <code>DescribeDimension</code> to get details for a dimension.</p>
     */
    dimensionNames?: string[];
    /**
     * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListDimensionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDimensionsResponse) => any;
}
export interface ListDomainConfigurationsRequest {
    /**
     * <p>The marker for the next set of results.</p>
     */
    marker?: string;
    /**
     * <p>The result page size.</p>
     */
    pageSize?: number;
    /**
     * <p>The type of service delivered by the endpoint.</p>
     */
    serviceType?: ServiceType | string;
}
export declare namespace ListDomainConfigurationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDomainConfigurationsRequest) => any;
}
/**
 * <p>The summary of a domain configuration. A domain configuration specifies custom IoT-specific information about a domain.
 *          A domain configuration can be associated with an AWS-managed domain
 *          (for example, dbc123defghijk.iot.us-west-2.amazonaws.com), a customer managed domain, or a default endpoint.</p>
 *          <ul>
 *             <li>
 *                <p>Data</p>
 *             </li>
 *             <li>
 *                <p>Jobs</p>
 *             </li>
 *             <li>
 *                <p>CredentialProvider</p>
 *             </li>
 *          </ul>
 */
export interface DomainConfigurationSummary {
    /**
     * <p>The name of the domain configuration. This value must be unique to a region.</p>
     */
    domainConfigurationName?: string;
    /**
     * <p>The ARN of the domain configuration.</p>
     */
    domainConfigurationArn?: string;
    /**
     * <p>The type of service delivered by the endpoint.</p>
     */
    serviceType?: ServiceType | string;
}
export declare namespace DomainConfigurationSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DomainConfigurationSummary) => any;
}
export interface ListDomainConfigurationsResponse {
    /**
     * <p>A list of objects that contain summary information about the user's domain configurations.</p>
     */
    domainConfigurations?: DomainConfigurationSummary[];
    /**
     * <p>The marker for the next set of results.</p>
     */
    nextMarker?: string;
}
export declare namespace ListDomainConfigurationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDomainConfigurationsResponse) => any;
}
export interface ListIndicesRequest {
    /**
     * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
     *       results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return at one time.</p>
     */
    maxResults?: number;
}
export declare namespace ListIndicesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListIndicesRequest) => any;
}
export interface ListIndicesResponse {
    /**
     * <p>The index names.</p>
     */
    indexNames?: string[];
    /**
     * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
     *       results.</p>
     */
    nextToken?: string;
}
export declare namespace ListIndicesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListIndicesResponse) => any;
}
export interface ListJobExecutionsForJobRequest {
    /**
     * <p>The unique identifier you assigned to this job when it was created.</p>
     */
    jobId: string | undefined;
    /**
     * <p>The status of the job.</p>
     */
    status?: JobExecutionStatus | string;
    /**
     * <p>The maximum number of results to be returned per request.</p>
     */
    maxResults?: number;
    /**
     * <p>The token to retrieve the next set of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListJobExecutionsForJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJobExecutionsForJobRequest) => any;
}
/**
 * <p>The job execution summary.</p>
 */
export interface JobExecutionSummary {
    /**
     * <p>The status of the job execution.</p>
     */
    status?: JobExecutionStatus | string;
    /**
     * <p>The time, in seconds since the epoch, when the job execution was queued.</p>
     */
    queuedAt?: Date;
    /**
     * <p>The time, in seconds since the epoch, when the job execution started.</p>
     */
    startedAt?: Date;
    /**
     * <p>The time, in seconds since the epoch, when the job execution was last updated.</p>
     */
    lastUpdatedAt?: Date;
    /**
     * <p>A string (consisting of the digits "0" through "9") which identifies this particular job execution on
     *             this particular device. It can be used later in commands which return or update job execution
     *             information.</p>
     */
    executionNumber?: number;
}
export declare namespace JobExecutionSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobExecutionSummary) => any;
}
/**
 * <p>Contains a summary of information about job executions for a specific job.</p>
 */
export interface JobExecutionSummaryForJob {
    /**
     * <p>The ARN of the thing on which the job execution is running.</p>
     */
    thingArn?: string;
    /**
     * <p>Contains a subset of information about a job execution.</p>
     */
    jobExecutionSummary?: JobExecutionSummary;
}
export declare namespace JobExecutionSummaryForJob {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobExecutionSummaryForJob) => any;
}
export interface ListJobExecutionsForJobResponse {
    /**
     * <p>A list of job execution summaries.</p>
     */
    executionSummaries?: JobExecutionSummaryForJob[];
    /**
     * <p>The token for the next set of results, or <b>null</b> if there are no
     *             additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListJobExecutionsForJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJobExecutionsForJobResponse) => any;
}
export interface ListJobExecutionsForThingRequest {
    /**
     * <p>The thing name.</p>
     */
    thingName: string | undefined;
    /**
     * <p>An optional filter that lets you search for jobs that have the specified status.</p>
     */
    status?: JobExecutionStatus | string;
    /**
     * <p>The namespace used to indicate that a job is a customer-managed job.</p>
     *         <p>When you specify a value for this parameter, AWS IoT Core sends jobs notifications to MQTT topics that
     *             contain the value in the following format.</p>
     *         <p>
     *             <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code>
     *          </p>
     *         <note>
     *             <p>The <code>namespaceId</code> feature is in public preview.</p>
     *          </note>
     */
    namespaceId?: string;
    /**
     * <p>The maximum number of results to be returned per request.</p>
     */
    maxResults?: number;
    /**
     * <p>The token to retrieve the next set of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListJobExecutionsForThingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJobExecutionsForThingRequest) => any;
}
/**
 * <p>The job execution summary for a thing.</p>
 */
export interface JobExecutionSummaryForThing {
    /**
     * <p>The unique identifier you assigned to this job when it was created.</p>
     */
    jobId?: string;
    /**
     * <p>Contains a subset of information about a job execution.</p>
     */
    jobExecutionSummary?: JobExecutionSummary;
}
export declare namespace JobExecutionSummaryForThing {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobExecutionSummaryForThing) => any;
}
export interface ListJobExecutionsForThingResponse {
    /**
     * <p>A list of job execution summaries.</p>
     */
    executionSummaries?: JobExecutionSummaryForThing[];
    /**
     * <p>The token for the next set of results, or <b>null</b> if there are no
     *             additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListJobExecutionsForThingResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJobExecutionsForThingResponse) => any;
}
export interface ListJobsRequest {
    /**
     * <p>An optional filter that lets you search for jobs that have the specified status.</p>
     */
    status?: JobStatus | string;
    /**
     * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things
     *             specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing
     *             when a change is detected in a target. For example, a job will run on a thing when the thing is added to a
     *             target group, even after the job was completed by all things originally in the group. </p>
     */
    targetSelection?: TargetSelection | string;
    /**
     * <p>The maximum number of results to return per request.</p>
     */
    maxResults?: number;
    /**
     * <p>The token to retrieve the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>A filter that limits the returned jobs to those for the specified group.</p>
     */
    thingGroupName?: string;
    /**
     * <p>A filter that limits the returned jobs to those for the specified group.</p>
     */
    thingGroupId?: string;
    /**
     * <p>The namespace used to indicate that a job is a customer-managed job.</p>
     *         <p>When you specify a value for this parameter, AWS IoT Core sends jobs notifications to MQTT topics that
     *             contain the value in the following format.</p>
     *         <p>
     *             <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code>
     *          </p>
     *         <note>
     *             <p>The <code>namespaceId</code> feature is in public preview.</p>
     *          </note>
     */
    namespaceId?: string;
}
export declare namespace ListJobsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJobsRequest) => any;
}
/**
 * <p>The job summary.</p>
 */
export interface JobSummary {
    /**
     * <p>The job ARN.</p>
     */
    jobArn?: string;
    /**
     * <p>The unique identifier you assigned to this job when it was created.</p>
     */
    jobId?: string;
    /**
     * <p>The ID of the thing group.</p>
     */
    thingGroupId?: string;
    /**
     * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things
     *             specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing
     *             when a change is detected in a target. For example, a job will run on a thing when the thing is added to a
     *             target group, even after the job was completed by all things originally in the group.</p>
     */
    targetSelection?: TargetSelection | string;
    /**
     * <p>The job summary status.</p>
     */
    status?: JobStatus | string;
    /**
     * <p>The time, in seconds since the epoch, when the job was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The time, in seconds since the epoch, when the job was last updated.</p>
     */
    lastUpdatedAt?: Date;
    /**
     * <p>The time, in seconds since the epoch, when the job completed.</p>
     */
    completedAt?: Date;
}
export declare namespace JobSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobSummary) => any;
}
export interface ListJobsResponse {
    /**
     * <p>A list of jobs.</p>
     */
    jobs?: JobSummary[];
    /**
     * <p>The token for the next set of results, or <b>null</b> if there are no
     *             additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListJobsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJobsResponse) => any;
}
export interface ListJobTemplatesRequest {
    /**
     * <p>The maximum number of results to return in the list.</p>
     */
    maxResults?: number;
    /**
     * <p>The token to use to return the next set of results in the list.</p>
     */
    nextToken?: string;
}
export declare namespace ListJobTemplatesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJobTemplatesRequest) => any;
}
/**
 * <p>An object that contains information about the job template.</p>
 */
export interface JobTemplateSummary {
    /**
     * <p>The ARN of the job template.</p>
     */
    jobTemplateArn?: string;
    /**
     * <p>The unique identifier of the job template.</p>
     */
    jobTemplateId?: string;
    /**
     * <p>A description of the job template.</p>
     */
    description?: string;
    /**
     * <p>The time, in seconds since the epoch, when the job template was created.</p>
     */
    createdAt?: Date;
}
export declare namespace JobTemplateSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: JobTemplateSummary) => any;
}
export interface ListJobTemplatesResponse {
    /**
     * <p>A list of objects that contain information about the job templates.</p>
     */
    jobTemplates?: JobTemplateSummary[];
    /**
     * <p>The token for the next set of results, or <b>null</b> if there are no
     *             additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListJobTemplatesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListJobTemplatesResponse) => any;
}
export interface ListMitigationActionsRequest {
    /**
     * <p>Specify a value to limit the result to mitigation actions with a specific action type.</p>
     */
    actionType?: MitigationActionType | string;
    /**
     * <p>The maximum number of results to return at one time. The default is 25.</p>
     */
    maxResults?: number;
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListMitigationActionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListMitigationActionsRequest) => any;
}
/**
 * <p>Information that identifies a mitigation action. This information is returned by ListMitigationActions.</p>
 */
export interface MitigationActionIdentifier {
    /**
     * <p>The friendly name of the mitigation action.</p>
     */
    actionName?: string;
    /**
     * <p>The IAM role ARN used to apply this mitigation action.</p>
     */
    actionArn?: string;
    /**
     * <p>The date when this mitigation action was created.</p>
     */
    creationDate?: Date;
}
export declare namespace MitigationActionIdentifier {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MitigationActionIdentifier) => any;
}
export interface ListMitigationActionsResponse {
    /**
     * <p>A set of actions that matched the specified filter criteria.</p>
     */
    actionIdentifiers?: MitigationActionIdentifier[];
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListMitigationActionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListMitigationActionsResponse) => any;
}
export interface ListOTAUpdatesRequest {
    /**
     * <p>The maximum number of results to return at one time.</p>
     */
    maxResults?: number;
    /**
     * <p>A token used to retrieve the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The OTA update job status.</p>
     */
    otaUpdateStatus?: OTAUpdateStatus | string;
}
export declare namespace ListOTAUpdatesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListOTAUpdatesRequest) => any;
}
/**
 * <p>An OTA update summary.</p>
 */
export interface OTAUpdateSummary {
    /**
     * <p>The OTA update ID.</p>
     */
    otaUpdateId?: string;
    /**
     * <p>The OTA update ARN.</p>
     */
    otaUpdateArn?: string;
    /**
     * <p>The date when the OTA update was created.</p>
     */
    creationDate?: Date;
}
export declare namespace OTAUpdateSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OTAUpdateSummary) => any;
}
export interface ListOTAUpdatesResponse {
    /**
     * <p>A list of OTA update jobs.</p>
     */
    otaUpdates?: OTAUpdateSummary[];
    /**
     * <p>A token to use to get the next set of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListOTAUpdatesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListOTAUpdatesResponse) => any;
}
/**
 * <p>The input to the ListOutgoingCertificates operation.</p>
 */
export interface ListOutgoingCertificatesRequest {
    /**
     * <p>The result page size.</p>
     */
    pageSize?: number;
    /**
     * <p>The marker for the next set of results.</p>
     */
    marker?: string;
    /**
     * <p>Specifies the order for results. If True, the results are returned in ascending
     *          order, based on the creation date.</p>
     */
    ascendingOrder?: boolean;
}
export declare namespace ListOutgoingCertificatesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListOutgoingCertificatesRequest) => any;
}
/**
 * <p>A certificate that has been transferred but not yet accepted.</p>
 */
export interface OutgoingCertificate {
    /**
     * <p>The certificate ARN.</p>
     */
    certificateArn?: string;
    /**
     * <p>The certificate ID.</p>
     */
    certificateId?: string;
    /**
     * <p>The AWS account to which the transfer was made.</p>
     */
    transferredTo?: string;
    /**
     * <p>The date the transfer was initiated.</p>
     */
    transferDate?: Date;
    /**
     * <p>The transfer message.</p>
     */
    transferMessage?: string;
    /**
     * <p>The certificate creation date.</p>
     */
    creationDate?: Date;
}
export declare namespace OutgoingCertificate {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OutgoingCertificate) => any;
}
/**
 * <p>The output from the ListOutgoingCertificates operation.</p>
 */
export interface ListOutgoingCertificatesResponse {
    /**
     * <p>The certificates that are being transferred but not yet accepted.</p>
     */
    outgoingCertificates?: OutgoingCertificate[];
    /**
     * <p>The marker for the next set of results.</p>
     */
    nextMarker?: string;
}
export declare namespace ListOutgoingCertificatesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListOutgoingCertificatesResponse) => any;
}
/**
 * <p>The input for the ListPolicies operation.</p>
 */
export interface ListPoliciesRequest {
    /**
     * <p>The marker for the next set of results.</p>
     */
    marker?: string;
    /**
     * <p>The result page size.</p>
     */
    pageSize?: number;
    /**
     * <p>Specifies the order for results. If true, the results are returned in ascending
     *          creation order.</p>
     */
    ascendingOrder?: boolean;
}
export declare namespace ListPoliciesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPoliciesRequest) => any;
}
/**
 * <p>The output from the ListPolicies operation.</p>
 */
export interface ListPoliciesResponse {
    /**
     * <p>The descriptions of the policies.</p>
     */
    policies?: Policy[];
    /**
     * <p>The marker for the next set of results, or null if there are no additional
     *          results.</p>
     */
    nextMarker?: string;
}
export declare namespace ListPoliciesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPoliciesResponse) => any;
}
/**
 * <p>The input for the ListPolicyPrincipals operation.</p>
 */
export interface ListPolicyPrincipalsRequest {
    /**
     * <p>The policy name.</p>
     */
    policyName: string | undefined;
    /**
     * <p>The marker for the next set of results.</p>
     */
    marker?: string;
    /**
     * <p>The result page size.</p>
     */
    pageSize?: number;
    /**
     * <p>Specifies the order for results. If true, the results are returned in ascending
     *          creation order.</p>
     */
    ascendingOrder?: boolean;
}
export declare namespace ListPolicyPrincipalsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPolicyPrincipalsRequest) => any;
}
/**
 * <p>The output from the ListPolicyPrincipals operation.</p>
 */
export interface ListPolicyPrincipalsResponse {
    /**
     * <p>The descriptions of the principals.</p>
     */
    principals?: string[];
    /**
     * <p>The marker for the next set of results, or null if there are no additional
     *          results.</p>
     */
    nextMarker?: string;
}
export declare namespace ListPolicyPrincipalsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPolicyPrincipalsResponse) => any;
}
/**
 * <p>The input for the ListPolicyVersions operation.</p>
 */
export interface ListPolicyVersionsRequest {
    /**
     * <p>The policy name.</p>
     */
    policyName: string | undefined;
}
export declare namespace ListPolicyVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPolicyVersionsRequest) => any;
}
/**
 * <p>Describes a policy version.</p>
 */
export interface PolicyVersion {
    /**
     * <p>The policy version ID.</p>
     */
    versionId?: string;
    /**
     * <p>Specifies whether the policy version is the default.</p>
     */
    isDefaultVersion?: boolean;
    /**
     * <p>The date and time the policy was created.</p>
     */
    createDate?: Date;
}
export declare namespace PolicyVersion {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PolicyVersion) => any;
}
/**
 * <p>The output from the ListPolicyVersions operation.</p>
 */
export interface ListPolicyVersionsResponse {
    /**
     * <p>The policy versions.</p>
     */
    policyVersions?: PolicyVersion[];
}
export declare namespace ListPolicyVersionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPolicyVersionsResponse) => any;
}
/**
 * <p>The input for the ListPrincipalPolicies operation.</p>
 */
export interface ListPrincipalPoliciesRequest {
    /**
     * <p>The principal. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
     */
    principal: string | undefined;
    /**
     * <p>The marker for the next set of results.</p>
     */
    marker?: string;
    /**
     * <p>The result page size.</p>
     */
    pageSize?: number;
    /**
     * <p>Specifies the order for results. If true, results are returned in ascending creation
     *          order.</p>
     */
    ascendingOrder?: boolean;
}
export declare namespace ListPrincipalPoliciesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPrincipalPoliciesRequest) => any;
}
/**
 * <p>The output from the ListPrincipalPolicies operation.</p>
 */
export interface ListPrincipalPoliciesResponse {
    /**
     * <p>The policies.</p>
     */
    policies?: Policy[];
    /**
     * <p>The marker for the next set of results, or null if there are no additional
     *          results.</p>
     */
    nextMarker?: string;
}
export declare namespace ListPrincipalPoliciesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPrincipalPoliciesResponse) => any;
}
/**
 * <p>The input for the ListPrincipalThings operation.</p>
 */
export interface ListPrincipalThingsRequest {
    /**
     * <p>To retrieve the next set of results, the <code>nextToken</code>
     * 			value from a previous response; otherwise <b>null</b> to receive
     * 			the first set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return in this operation.</p>
     */
    maxResults?: number;
    /**
     * <p>The principal.</p>
     */
    principal: string | undefined;
}
export declare namespace ListPrincipalThingsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPrincipalThingsRequest) => any;
}
/**
 * <p>The output from the ListPrincipalThings operation.</p>
 */
export interface ListPrincipalThingsResponse {
    /**
     * <p>The things.</p>
     */
    things?: string[];
    /**
     * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListPrincipalThingsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPrincipalThingsResponse) => any;
}
export interface ListProvisioningTemplatesRequest {
    /**
     * <p>The maximum number of results to return at one time.</p>
     */
    maxResults?: number;
    /**
     * <p>A token to retrieve the next set of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListProvisioningTemplatesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProvisioningTemplatesRequest) => any;
}
/**
 * <p>A summary of information about a fleet provisioning template.</p>
 */
export interface ProvisioningTemplateSummary {
    /**
     * <p>The ARN of the fleet provisioning template.</p>
     */
    templateArn?: string;
    /**
     * <p>The name of the fleet provisioning template.</p>
     */
    templateName?: string;
    /**
     * <p>The description of the fleet provisioning template.</p>
     */
    description?: string;
    /**
     * <p>The date when the fleet provisioning template summary was created.</p>
     */
    creationDate?: Date;
    /**
     * <p>The date when the fleet provisioning template summary was last modified.</p>
     */
    lastModifiedDate?: Date;
    /**
     * <p>True if the fleet provision template is enabled, otherwise false.</p>
     */
    enabled?: boolean;
}
export declare namespace ProvisioningTemplateSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProvisioningTemplateSummary) => any;
}
export interface ListProvisioningTemplatesResponse {
    /**
     * <p>A list of fleet provisioning templates</p>
     */
    templates?: ProvisioningTemplateSummary[];
    /**
     * <p>A token to retrieve the next set of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListProvisioningTemplatesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProvisioningTemplatesResponse) => any;
}
export interface ListProvisioningTemplateVersionsRequest {
    /**
     * <p>The name of the fleet provisioning template.</p>
     */
    templateName: string | undefined;
    /**
     * <p>The maximum number of results to return at one time.</p>
     */
    maxResults?: number;
    /**
     * <p>A token to retrieve the next set of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListProvisioningTemplateVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProvisioningTemplateVersionsRequest) => any;
}
/**
 * <p>A summary of information about a fleet provision template version.</p>
 */
export interface ProvisioningTemplateVersionSummary {
    /**
     * <p>The ID of the fleet privisioning template version.</p>
     */
    versionId?: number;
    /**
     * <p>The date when the fleet provisioning template version was created</p>
     */
    creationDate?: Date;
    /**
     * <p>True if the fleet provisioning template version is the default version, otherwise
     *          false.</p>
     */
    isDefaultVersion?: boolean;
}
export declare namespace ProvisioningTemplateVersionSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProvisioningTemplateVersionSummary) => any;
}
export interface ListProvisioningTemplateVersionsResponse {
    /**
     * <p>The list of fleet provisioning template versions.</p>
     */
    versions?: ProvisioningTemplateVersionSummary[];
    /**
     * <p>A token to retrieve the next set of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListProvisioningTemplateVersionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProvisioningTemplateVersionsResponse) => any;
}
export interface ListRoleAliasesRequest {
    /**
     * <p>The maximum number of results to return at one time.</p>
     */
    pageSize?: number;
    /**
     * <p>A marker used to get the next set of results.</p>
     */
    marker?: string;
    /**
     * <p>Return the list of role aliases in ascending alphabetical order.</p>
     */
    ascendingOrder?: boolean;
}
export declare namespace ListRoleAliasesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRoleAliasesRequest) => any;
}
export interface ListRoleAliasesResponse {
    /**
     * <p>The role aliases.</p>
     */
    roleAliases?: string[];
    /**
     * <p>A marker used to get the next set of results.</p>
     */
    nextMarker?: string;
}
export declare namespace ListRoleAliasesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRoleAliasesResponse) => any;
}
export interface ListScheduledAuditsRequest {
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return at one time. The default is 25.</p>
     */
    maxResults?: number;
}
export declare namespace ListScheduledAuditsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListScheduledAuditsRequest) => any;
}
/**
 * <p>Information about the scheduled audit.</p>
 */
export interface ScheduledAuditMetadata {
    /**
     * <p>The name of the scheduled audit.</p>
     */
    scheduledAuditName?: string;
    /**
     * <p>The ARN of the scheduled audit.</p>
     */
    scheduledAuditArn?: string;
    /**
     * <p>How often the scheduled audit occurs.</p>
     */
    frequency?: AuditFrequency | string;
    /**
     * <p>The day of the month on which the scheduled audit is run (if the
     *           <code>frequency</code> is "MONTHLY").
     *         If days 29-31 are specified, and the month does not have that many
     *         days, the audit takes place on the "LAST" day of the month.</p>
     */
    dayOfMonth?: string;
    /**
     * <p>The day of the week on which the scheduled audit is run (if the
     *           <code>frequency</code> is "WEEKLY" or "BIWEEKLY").</p>
     */
    dayOfWeek?: DayOfWeek | string;
}
export declare namespace ScheduledAuditMetadata {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ScheduledAuditMetadata) => any;
}
export interface ListScheduledAuditsResponse {
    /**
     * <p>The list of scheduled audits.</p>
     */
    scheduledAudits?: ScheduledAuditMetadata[];
    /**
     * <p>A token that can be used to retrieve the next set of results,
     *             or <code>null</code> if there are no additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListScheduledAuditsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListScheduledAuditsResponse) => any;
}
export interface ListSecurityProfilesRequest {
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return at one time.</p>
     */
    maxResults?: number;
    /**
     * <p>A filter to limit results to the security profiles that use the defined dimension.
     *       Cannot be used with <code>metricName</code>
     *          </p>
     */
    dimensionName?: string;
    /**
     * <p> The name of the custom metric.
     *       Cannot be used with <code>dimensionName</code>. </p>
     */
    metricName?: string;
}
export declare namespace ListSecurityProfilesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSecurityProfilesRequest) => any;
}
/**
 * <p>Identifying information for a Device Defender security profile.</p>
 */
export interface SecurityProfileIdentifier {
    /**
     * <p>The name you've given to the security profile.</p>
     */
    name: string | undefined;
    /**
     * <p>The ARN of the security profile.</p>
     */
    arn: string | undefined;
}
export declare namespace SecurityProfileIdentifier {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SecurityProfileIdentifier) => any;
}
export interface ListSecurityProfilesResponse {
    /**
     * <p>A list of security profile identifiers (names and ARNs).</p>
     */
    securityProfileIdentifiers?: SecurityProfileIdentifier[];
    /**
     * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
     *         additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListSecurityProfilesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSecurityProfilesResponse) => any;
}
export interface ListSecurityProfilesForTargetRequest {
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return at one time.</p>
     */
    maxResults?: number;
    /**
     * <p>If true, return child groups too.</p>
     */
    recursive?: boolean;
    /**
     * <p>The ARN of the target (thing group) whose attached security profiles you want to get.</p>
     */
    securityProfileTargetArn: string | undefined;
}
export declare namespace ListSecurityProfilesForTargetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSecurityProfilesForTargetRequest) => any;
}
/**
 * <p>A target to which an alert is sent when a security profile behavior is
 *           violated.</p>
 */
export interface SecurityProfileTarget {
    /**
     * <p>The ARN of the security profile.</p>
     */
    arn: string | undefined;
}
export declare namespace SecurityProfileTarget {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SecurityProfileTarget) => any;
}
/**
 * <p>Information about a security profile and the target associated with it.</p>
 */
export interface SecurityProfileTargetMapping {
    /**
     * <p>Information that identifies the security profile.</p>
     */
    securityProfileIdentifier?: SecurityProfileIdentifier;
    /**
     * <p>Information about the target (thing group) associated with the security profile.</p>
     */
    target?: SecurityProfileTarget;
}
export declare namespace SecurityProfileTargetMapping {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SecurityProfileTargetMapping) => any;
}
export interface ListSecurityProfilesForTargetResponse {
    /**
     * <p>A list of security profiles and their associated targets.</p>
     */
    securityProfileTargetMappings?: SecurityProfileTargetMapping[];
    /**
     * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
     *         additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListSecurityProfilesForTargetResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSecurityProfilesForTargetResponse) => any;
}
export interface ListStreamsRequest {
    /**
     * <p>The maximum number of results to return at a time.</p>
     */
    maxResults?: number;
    /**
     * <p>A token used to get the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>Set to true to return the list of streams in ascending order.</p>
     */
    ascendingOrder?: boolean;
}
export declare namespace ListStreamsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListStreamsRequest) => any;
}
/**
 * <p>A summary of a stream.</p>
 */
export interface StreamSummary {
    /**
     * <p>The stream ID.</p>
     */
    streamId?: string;
    /**
     * <p>The stream ARN.</p>
     */
    streamArn?: string;
    /**
     * <p>The stream version.</p>
     */
    streamVersion?: number;
    /**
     * <p>A description of the stream.</p>
     */
    description?: string;
}
export declare namespace StreamSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StreamSummary) => any;
}
export interface ListStreamsResponse {
    /**
     * <p>A list of streams.</p>
     */
    streams?: StreamSummary[];
    /**
     * <p>A token used to get the next set of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListStreamsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListStreamsResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The ARN of the resource.</p>
     */
    resourceArn: string | undefined;
    /**
     * <p>To retrieve the next set of results, the <code>nextToken</code>
     * 			value from a previous response; otherwise <b>null</b> to receive
     * 			the first set of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResponse {
    /**
     * <p>The list of tags assigned to the resource.</p>
     */
    tags?: Tag[];
    /**
     * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
export interface ListTargetsForPolicyRequest {
    /**
     * <p>The policy name.</p>
     */
    policyName: string | undefined;
    /**
     * <p>A marker used to get the next set of results.</p>
     */
    marker?: string;
    /**
     * <p>The maximum number of results to return at one time.</p>
     */
    pageSize?: number;
}
export declare namespace ListTargetsForPolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTargetsForPolicyRequest) => any;
}
export interface ListTargetsForPolicyResponse {
    /**
     * <p>The policy targets.</p>
     */
    targets?: string[];
    /**
     * <p>A marker used to get the next set of results.</p>
     */
    nextMarker?: string;
}
export declare namespace ListTargetsForPolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTargetsForPolicyResponse) => any;
}
export interface ListTargetsForSecurityProfileRequest {
    /**
     * <p>The security profile.</p>
     */
    securityProfileName: string | undefined;
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return at one time.</p>
     */
    maxResults?: number;
}
export declare namespace ListTargetsForSecurityProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTargetsForSecurityProfileRequest) => any;
}
export interface ListTargetsForSecurityProfileResponse {
    /**
     * <p>The thing groups to which the security profile is attached.</p>
     */
    securityProfileTargets?: SecurityProfileTarget[];
    /**
     * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
     *         additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListTargetsForSecurityProfileResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTargetsForSecurityProfileResponse) => any;
}
export interface ListThingGroupsRequest {
    /**
     * <p>To retrieve the next set of results, the <code>nextToken</code>
     * 			value from a previous response; otherwise <b>null</b> to receive
     * 			the first set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return at one time.</p>
     */
    maxResults?: number;
    /**
     * <p>A filter that limits the results to those with the specified parent group.</p>
     */
    parentGroup?: string;
    /**
     * <p>A filter that limits the results to those with the specified name prefix.</p>
     */
    namePrefixFilter?: string;
    /**
     * <p>If true, return child groups as well.</p>
     */
    recursive?: boolean;
}
export declare namespace ListThingGroupsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListThingGroupsRequest) => any;
}
export interface ListThingGroupsResponse {
    /**
     * <p>The thing groups.</p>
     */
    thingGroups?: GroupNameAndArn[];
    /**
     * <p>The token to use to get the next set of results. Will not be returned if operation has returned all results.</p>
     */
    nextToken?: string;
}
export declare namespace ListThingGroupsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListThingGroupsResponse) => any;
}
export interface ListThingGroupsForThingRequest {
    /**
     * <p>The thing name.</p>
     */
    thingName: string | undefined;
    /**
     * <p>To retrieve the next set of results, the <code>nextToken</code>
     * 			value from a previous response; otherwise <b>null</b> to receive
     * 			the first set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return at one time.</p>
     */
    maxResults?: number;
}
export declare namespace ListThingGroupsForThingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListThingGroupsForThingRequest) => any;
}
export interface ListThingGroupsForThingResponse {
    /**
     * <p>The thing groups.</p>
     */
    thingGroups?: GroupNameAndArn[];
    /**
     * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListThingGroupsForThingResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListThingGroupsForThingResponse) => any;
}
/**
 * <p>The input for the ListThingPrincipal operation.</p>
 */
export interface ListThingPrincipalsRequest {
    /**
     * <p>To retrieve the next set of results, the <code>nextToken</code>
     * 			value from a previous response; otherwise <b>null</b> to receive
     * 			the first set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return in this operation.</p>
     */
    maxResults?: number;
    /**
     * <p>The name of the thing.</p>
     */
    thingName: string | undefined;
}
export declare namespace ListThingPrincipalsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListThingPrincipalsRequest) => any;
}
/**
 * <p>The output from the ListThingPrincipals operation.</p>
 */
export interface ListThingPrincipalsResponse {
    /**
     * <p>The principals associated with the thing.</p>
     */
    principals?: string[];
    /**
     * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListThingPrincipalsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListThingPrincipalsResponse) => any;
}
export declare enum ReportType {
    ERRORS = "ERRORS",
    RESULTS = "RESULTS"
}
export interface ListThingRegistrationTaskReportsRequest {
    /**
     * <p>The id of the task.</p>
     */
    taskId: string | undefined;
    /**
     * <p>The type of task report.</p>
     */
    reportType: ReportType | string | undefined;
    /**
     * <p>To retrieve the next set of results, the <code>nextToken</code>
     * 			value from a previous response; otherwise <b>null</b> to receive
     * 		the first set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return per request.</p>
     */
    maxResults?: number;
}
export declare namespace ListThingRegistrationTaskReportsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListThingRegistrationTaskReportsRequest) => any;
}
export interface ListThingRegistrationTaskReportsResponse {
    /**
     * <p>Links to the task resources.</p>
     */
    resourceLinks?: string[];
    /**
     * <p>The type of task report.</p>
     */
    reportType?: ReportType | string;
    /**
     * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListThingRegistrationTaskReportsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListThingRegistrationTaskReportsResponse) => any;
}
export interface ListThingRegistrationTasksRequest {
    /**
     * <p>To retrieve the next set of results, the <code>nextToken</code>
     * 			value from a previous response; otherwise <b>null</b> to receive
     * 			the first set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return at one time.</p>
     */
    maxResults?: number;
    /**
     * <p>The status of the bulk thing provisioning task.</p>
     */
    status?: Status | string;
}
export declare namespace ListThingRegistrationTasksRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListThingRegistrationTasksRequest) => any;
}
export interface ListThingRegistrationTasksResponse {
    /**
     * <p>A list of bulk thing provisioning task IDs.</p>
     */
    taskIds?: string[];
    /**
     * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListThingRegistrationTasksResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListThingRegistrationTasksResponse) => any;
}
/**
 * <p>The input for the ListThings operation.</p>
 */
export interface ListThingsRequest {
    /**
     * <p>To retrieve the next set of results, the <code>nextToken</code>
     * 			value from a previous response; otherwise <b>null</b> to receive
     * 			the first set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return in this operation.</p>
     */
    maxResults?: number;
    /**
     * <p>The attribute name used to search for things.</p>
     */
    attributeName?: string;
    /**
     * <p>The attribute value used to search for things.</p>
     */
    attributeValue?: string;
    /**
     * <p>The name of the thing type used to search for things.</p>
     */
    thingTypeName?: string;
    /**
     * <p>When <code>true</code>, the action returns the thing resources with attribute values
     *                      that start with the <code>attributeValue</code> provided.</p>
     *             <p>When <code>false</code>, or not present, the action returns only the thing
     * 			resources with attribute values that match the entire <code>attributeValue</code>
     * 			provided. </p>
     */
    usePrefixAttributeValue?: boolean;
}
export declare namespace ListThingsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListThingsRequest) => any;
}
/**
 * <p>The properties of the thing, including thing name, thing type name, and a list of thing
 * 			attributes.</p>
 */
export interface ThingAttribute {
    /**
     * <p>The name of the thing.</p>
     */
    thingName?: string;
    /**
     * <p>The name of the thing type, if the thing has been associated with a type.</p>
     */
    thingTypeName?: string;
    /**
     * <p>The thing ARN.</p>
     */
    thingArn?: string;
    /**
     * <p>A list of thing attributes which are name-value pairs.</p>
     */
    attributes?: {
        [key: string]: string;
    };
    /**
     * <p>The version of the thing record in the registry.</p>
     */
    version?: number;
}
export declare namespace ThingAttribute {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThingAttribute) => any;
}
/**
 * <p>The output from the ListThings operation.</p>
 */
export interface ListThingsResponse {
    /**
     * <p>The things.</p>
     */
    things?: ThingAttribute[];
    /**
     * <p>The token to use to get the next set of results. Will not be returned if operation has returned all results.</p>
     */
    nextToken?: string;
}
export declare namespace ListThingsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListThingsResponse) => any;
}
export interface ListThingsInBillingGroupRequest {
    /**
     * <p>The name of the billing group.</p>
     */
    billingGroupName: string | undefined;
    /**
     * <p>To retrieve the next set of results, the <code>nextToken</code>
     * 			value from a previous response; otherwise <b>null</b> to receive
     * 			the first set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return per request.</p>
     */
    maxResults?: number;
}
export declare namespace ListThingsInBillingGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListThingsInBillingGroupRequest) => any;
}
export interface ListThingsInBillingGroupResponse {
    /**
     * <p>A list of things in the billing group.</p>
     */
    things?: string[];
    /**
     * <p>The token to use to get the next set of results. Will not be returned if operation has returned all results.</p>
     */
    nextToken?: string;
}
export declare namespace ListThingsInBillingGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListThingsInBillingGroupResponse) => any;
}
export interface ListThingsInThingGroupRequest {
    /**
     * <p>The thing group name.</p>
     */
    thingGroupName: string | undefined;
    /**
     * <p>When true, list things in this thing group and in all child groups as
     * 			well.</p>
     */
    recursive?: boolean;
    /**
     * <p>To retrieve the next set of results, the <code>nextToken</code>
     * 			value from a previous response; otherwise <b>null</b> to receive
     * 			the first set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return at one time.</p>
     */
    maxResults?: number;
}
export declare namespace ListThingsInThingGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListThingsInThingGroupRequest) => any;
}
export interface ListThingsInThingGroupResponse {
    /**
     * <p>The things in the specified thing group.</p>
     */
    things?: string[];
    /**
     * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListThingsInThingGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListThingsInThingGroupResponse) => any;
}
/**
 * <p>The input for the ListThingTypes operation.</p>
 */
export interface ListThingTypesRequest {
    /**
     * <p>To retrieve the next set of results, the <code>nextToken</code>
     * 			value from a previous response; otherwise <b>null</b> to receive
     * 			the first set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return in this operation.</p>
     */
    maxResults?: number;
    /**
     * <p>The name of the thing type.</p>
     */
    thingTypeName?: string;
}
export declare namespace ListThingTypesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListThingTypesRequest) => any;
}
/**
 * <p>The definition of the thing type, including thing type name and description.</p>
 */
export interface ThingTypeDefinition {
    /**
     * <p>The name of the thing type.</p>
     */
    thingTypeName?: string;
    /**
     * <p>The thing type ARN.</p>
     */
    thingTypeArn?: string;
    /**
     * <p>The ThingTypeProperties for the thing type.</p>
     */
    thingTypeProperties?: ThingTypeProperties;
    /**
     * <p>The ThingTypeMetadata contains additional information about the thing type including: creation date and
     * 			time, a value indicating whether the thing type is deprecated, and a date and time when it was
     * 			deprecated.</p>
     */
    thingTypeMetadata?: ThingTypeMetadata;
}
export declare namespace ThingTypeDefinition {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThingTypeDefinition) => any;
}
/**
 * <p>The output for the ListThingTypes operation.</p>
 */
export interface ListThingTypesResponse {
    /**
     * <p>The thing types.</p>
     */
    thingTypes?: ThingTypeDefinition[];
    /**
     * <p>The token for the next set of results. Will not be returned if operation has returned all results.</p>
     */
    nextToken?: string;
}
export declare namespace ListThingTypesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListThingTypesResponse) => any;
}
export interface ListTopicRuleDestinationsRequest {
    /**
     * <p>The maximum number of results to return at one time.</p>
     */
    maxResults?: number;
    /**
     * <p>To retrieve the next set of results, the <code>nextToken</code>
     *          value from a previous response; otherwise <b>null</b> to receive
     *          the first set of results.</p>
     */
    nextToken?: string;
}
export declare namespace ListTopicRuleDestinationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTopicRuleDestinationsRequest) => any;
}
/**
 * <p>Information about an HTTP URL destination.</p>
 */
export interface HttpUrlDestinationSummary {
    /**
     * <p>The URL used to confirm ownership of or access to the HTTP topic rule destination
     *          URL.</p>
     */
    confirmationUrl?: string;
}
export declare namespace HttpUrlDestinationSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HttpUrlDestinationSummary) => any;
}
/**
 * <p>The summary of a virtual private cloud (VPC) destination.</p>
 */
export interface VpcDestinationSummary {
    /**
     * <p>The subnet IDs of the VPC destination.</p>
     */
    subnetIds?: string[];
    /**
     * <p>The security groups of the VPC destination.</p>
     */
    securityGroups?: string[];
    /**
     * <p>The ID of the VPC.</p>
     */
    vpcId?: string;
    /**
     * <p>The ARN of a role that has permission to create and attach to elastic network interfaces (ENIs).</p>
     */
    roleArn?: string;
}
export declare namespace VpcDestinationSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VpcDestinationSummary) => any;
}
/**
 * <p>Information about the topic rule destination.</p>
 */
export interface TopicRuleDestinationSummary {
    /**
     * <p>The topic rule destination ARN.</p>
     */
    arn?: string;
    /**
     * <p>The status of the topic rule destination. Valid values are:</p>
     *          <dl>
     *             <dt>IN_PROGRESS</dt>
     *             <dd>
     *                <p>A topic rule destination was created but has not been confirmed. You can set
     *                      <code>status</code> to <code>IN_PROGRESS</code> by calling
     *                      <code>UpdateTopicRuleDestination</code>. Calling
     *                      <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to
     *                   be sent to your confirmation endpoint.</p>
     *             </dd>
     *             <dt>ENABLED</dt>
     *             <dd>
     *                <p>Confirmation was completed, and traffic to this destination is allowed. You can
     *                   set <code>status</code> to <code>DISABLED</code> by calling
     *                      <code>UpdateTopicRuleDestination</code>.</p>
     *             </dd>
     *             <dt>DISABLED</dt>
     *             <dd>
     *                <p>Confirmation was completed, and traffic to this destination is not allowed. You
     *                   can set <code>status</code> to <code>ENABLED</code> by calling
     *                      <code>UpdateTopicRuleDestination</code>.</p>
     *             </dd>
     *             <dt>ERROR</dt>
     *             <dd>
     *                <p>Confirmation could not be completed, for example if the confirmation timed out.
     *                   You can call <code>GetTopicRuleDestination</code> for details about the error. You
     *                   can set <code>status</code> to <code>IN_PROGRESS</code> by calling
     *                      <code>UpdateTopicRuleDestination</code>. Calling
     *                      <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to
     *                   be sent to your confirmation endpoint.</p>
     *             </dd>
     *          </dl>
     */
    status?: TopicRuleDestinationStatus | string;
    /**
     * <p>The date and time when the topic rule destination was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>The date and time when the topic rule destination was last updated.</p>
     */
    lastUpdatedAt?: Date;
    /**
     * <p>The reason the topic rule destination is in the current status.</p>
     */
    statusReason?: string;
    /**
     * <p>Information about the HTTP URL.</p>
     */
    httpUrlSummary?: HttpUrlDestinationSummary;
    /**
     * <p>Information about the virtual private cloud (VPC) connection.</p>
     */
    vpcDestinationSummary?: VpcDestinationSummary;
}
export declare namespace TopicRuleDestinationSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TopicRuleDestinationSummary) => any;
}
export interface ListTopicRuleDestinationsResponse {
    /**
     * <p>Information about a topic rule destination.</p>
     */
    destinationSummaries?: TopicRuleDestinationSummary[];
    /**
     * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListTopicRuleDestinationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTopicRuleDestinationsResponse) => any;
}
/**
 * <p>The input for the ListTopicRules operation.</p>
 */
export interface ListTopicRulesRequest {
    /**
     * <p>The topic.</p>
     */
    topic?: string;
    /**
     * <p>The maximum number of results to return.</p>
     */
    maxResults?: number;
    /**
     * <p>To retrieve the next set of results, the <code>nextToken</code>
     *          value from a previous response; otherwise <b>null</b> to receive
     *          the first set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>Specifies whether the rule is disabled.</p>
     */
    ruleDisabled?: boolean;
}
export declare namespace ListTopicRulesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTopicRulesRequest) => any;
}
/**
 * <p>Describes a rule.</p>
 */
export interface TopicRuleListItem {
    /**
     * <p>The rule ARN.</p>
     */
    ruleArn?: string;
    /**
     * <p>The name of the rule.</p>
     */
    ruleName?: string;
    /**
     * <p>The pattern for the topic names that apply.</p>
     */
    topicPattern?: string;
    /**
     * <p>The date and time the rule was created.</p>
     */
    createdAt?: Date;
    /**
     * <p>Specifies whether the rule is disabled.</p>
     */
    ruleDisabled?: boolean;
}
export declare namespace TopicRuleListItem {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TopicRuleListItem) => any;
}
/**
 * <p>The output from the ListTopicRules operation.</p>
 */
export interface ListTopicRulesResponse {
    /**
     * <p>The rules.</p>
     */
    rules?: TopicRuleListItem[];
    /**
     * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListTopicRulesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTopicRulesResponse) => any;
}
export interface ListV2LoggingLevelsRequest {
    /**
     * <p>The type of resource for which you are configuring logging. Must be
     *             <code>THING_Group</code>.</p>
     */
    targetType?: LogTargetType | string;
    /**
     * <p>To retrieve the next set of results, the <code>nextToken</code>
     *          value from a previous response; otherwise <b>null</b> to receive
     *          the first set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return at one time.</p>
     */
    maxResults?: number;
}
export declare namespace ListV2LoggingLevelsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListV2LoggingLevelsRequest) => any;
}
/**
 * <p>A log target.</p>
 */
export interface LogTarget {
    /**
     * <p>The target type.</p>
     */
    targetType: LogTargetType | string | undefined;
    /**
     * <p>The target name.</p>
     */
    targetName?: string;
}
export declare namespace LogTarget {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LogTarget) => any;
}
/**
 * <p>The target configuration.</p>
 */
export interface LogTargetConfiguration {
    /**
     * <p>A log target</p>
     */
    logTarget?: LogTarget;
    /**
     * <p>The logging level.</p>
     */
    logLevel?: LogLevel | string;
}
export declare namespace LogTargetConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LogTargetConfiguration) => any;
}
export interface ListV2LoggingLevelsResponse {
    /**
     * <p>The logging configuration for a target.</p>
     */
    logTargetConfigurations?: LogTargetConfiguration[];
    /**
     * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListV2LoggingLevelsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListV2LoggingLevelsResponse) => any;
}
export interface ListViolationEventsRequest {
    /**
     * <p>The start time for the alerts to be listed.</p>
     */
    startTime: Date | undefined;
    /**
     * <p>The end time for the alerts to be listed.</p>
     */
    endTime: Date | undefined;
    /**
     * <p>A filter to limit results to those alerts caused by the specified thing.</p>
     */
    thingName?: string;
    /**
     * <p>A filter to limit results to those alerts generated by the specified security profile.</p>
     */
    securityProfileName?: string;
    /**
     * <p>
     *       The criteria for a behavior.
     *     </p>
     */
    behaviorCriteriaType?: BehaviorCriteriaType | string;
    /**
     * <p>
     *       A list of all suppressed alerts.
     *     </p>
     */
    listSuppressedAlerts?: boolean;
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return at one time.</p>
     */
    maxResults?: number;
}
export declare namespace ListViolationEventsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListViolationEventsRequest) => any;
}
export declare enum ViolationEventType {
    ALARM_CLEARED = "alarm-cleared",
    ALARM_INVALIDATED = "alarm-invalidated",
    IN_ALARM = "in-alarm"
}
/**
 * <p>Information about a Device Defender security profile behavior violation.</p>
 */
export interface ViolationEvent {
    /**
     * <p>The ID of the violation event.</p>
     */
    violationId?: string;
    /**
     * <p>The name of the thing responsible for the violation event.</p>
     */
    thingName?: string;
    /**
     * <p>The name of the security profile whose behavior was violated.</p>
     */
    securityProfileName?: string;
    /**
     * <p>The behavior that was violated.</p>
     */
    behavior?: Behavior;
    /**
     * <p>The value of the metric (the measurement).</p>
     */
    metricValue?: MetricValue;
    /**
     * <p>
     *             The details of a violation event.
     *         </p>
     */
    violationEventAdditionalInfo?: ViolationEventAdditionalInfo;
    /**
     * <p>The type of violation event.</p>
     */
    violationEventType?: ViolationEventType | string;
    /**
     * <p>The time the violation event occurred.</p>
     */
    violationEventTime?: Date;
}
export declare namespace ViolationEvent {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ViolationEvent) => any;
}
export interface ListViolationEventsResponse {
    /**
     * <p>The security profile violation alerts issued for this account during the given time period,
     *       potentially filtered by security profile, behavior violated, or thing (device) violating.</p>
     */
    violationEvents?: ViolationEvent[];
    /**
     * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
     *         additional results.</p>
     */
    nextToken?: string;
}
export declare namespace ListViolationEventsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListViolationEventsResponse) => any;
}
