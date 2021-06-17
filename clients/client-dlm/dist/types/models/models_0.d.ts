import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>Specifies the encryption settings for shared snapshots that are copied across Regions.</p>
 */
export interface EncryptionConfiguration {
    /**
     * <p>To encrypt a copy of an unencrypted snapshot when encryption by default is not enabled, enable
     * 			encryption using this parameter. Copies of encrypted snapshots are encrypted, even if this
     * 			parameter is false or when encryption by default is not enabled.</p>
     */
    Encrypted: boolean | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the AWS KMS customer master key (CMK) to use for EBS
     * 			encryption. If this parameter is not specified, your AWS managed CMK for EBS is used.</p>
     */
    CmkArn?: string;
}
export declare namespace EncryptionConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EncryptionConfiguration) => any;
}
export declare enum RetentionIntervalUnitValues {
    DAYS = "DAYS",
    MONTHS = "MONTHS",
    WEEKS = "WEEKS",
    YEARS = "YEARS"
}
/**
 * <p>Specifies the retention rule for cross-Region snapshot copies.</p>
 */
export interface CrossRegionCopyRetainRule {
    /**
     * <p>The amount of time to retain each snapshot. The maximum is 100 years. This is
     * 			equivalent to 1200 months, 5200 weeks, or 36500 days.</p>
     */
    Interval?: number;
    /**
     * <p>The unit of time for time-based retention.</p>
     */
    IntervalUnit?: RetentionIntervalUnitValues | string;
}
export declare namespace CrossRegionCopyRetainRule {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CrossRegionCopyRetainRule) => any;
}
/**
 * <p>Specifies a rule for copying shared snapshots across Regions.</p>
 */
export interface CrossRegionCopyAction {
    /**
     * <p>The target Region.</p>
     */
    Target: string | undefined;
    /**
     * <p>The encryption settings for the copied snapshot.</p>
     */
    EncryptionConfiguration: EncryptionConfiguration | undefined;
    /**
     * <p>Specifies the retention rule for cross-Region snapshot copies.</p>
     */
    RetainRule?: CrossRegionCopyRetainRule;
}
export declare namespace CrossRegionCopyAction {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CrossRegionCopyAction) => any;
}
/**
 * <p>Specifies an action for an event-based policy.</p>
 */
export interface Action {
    /**
     * <p>A descriptive name for the action.</p>
     */
    Name: string | undefined;
    /**
     * <p>The rule for copying shared snapshots across Regions.</p>
     */
    CrossRegionCopy: CrossRegionCopyAction[] | undefined;
}
export declare namespace Action {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Action) => any;
}
export declare enum EventTypeValues {
    SHARE_SNAPSHOT = "shareSnapshot"
}
/**
 * <p>Specifies an event that triggers an event-based policy.</p>
 */
export interface EventParameters {
    /**
     * <p>The type of event. Currently, only snapshot sharing events are supported.</p>
     */
    EventType: EventTypeValues | string | undefined;
    /**
     * <p>The IDs of the AWS accounts that can trigger policy by sharing snapshots with your account. The
     * 			policy only runs if one of the specified AWS accounts shares a snapshot with your account.</p>
     */
    SnapshotOwner: string[] | undefined;
    /**
     * <p>The snapshot description that can trigger the policy. The description pattern is specified using
     * 			a regular expression. The policy runs only if a snapshot with a description that matches the
     * 			specified pattern is shared with your account.</p>
     * 		       <p>For example, specifying <code>^.*Created for policy: policy-1234567890abcdef0.*$</code>
     * 			configures the policy to run only if snapshots created by policy <code>policy-1234567890abcdef0</code>
     * 			are shared with your account.</p>
     */
    DescriptionRegex: string | undefined;
}
export declare namespace EventParameters {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EventParameters) => any;
}
export declare enum EventSourceValues {
    MANAGED_CWE = "MANAGED_CWE"
}
/**
 * <p>Specifies an event that triggers an event-based policy.</p>
 */
export interface EventSource {
    /**
     * <p>The source of the event. Currently only managed AWS CloudWatch Events rules are supported.</p>
     */
    Type: EventSourceValues | string | undefined;
    /**
     * <p>Information about the event.</p>
     */
    Parameters?: EventParameters;
}
export declare namespace EventSource {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EventSource) => any;
}
/**
 * <p>Specifies optional parameters to add to a policy. The set of valid parameters depends
 * 			on the combination of policy type and resource type.</p>
 */
export interface _Parameters {
    /**
     * <p>[EBS Snapshot Management – Instance policies only] Indicates whether to exclude the
     * 			root volume from snapshots created using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSnapshots.html">CreateSnapshots</a>.
     * 			The default is false.</p>
     */
    ExcludeBootVolume?: boolean;
    /**
     * <p>Applies to AMI lifecycle policies only. Indicates whether targeted instances are rebooted when the lifecycle
     * 			policy runs. <code>true</code> indicates that targeted instances are not rebooted when the policy
     * 			runs. <code>false</code> indicates that target instances are rebooted when the policy runs. The
     * 			default is <code>true</code> (instances are not rebooted).</p>
     */
    NoReboot?: boolean;
}
export declare namespace _Parameters {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: _Parameters) => any;
}
export declare enum PolicyTypeValues {
    EBS_SNAPSHOT_MANAGEMENT = "EBS_SNAPSHOT_MANAGEMENT",
    EVENT_BASED_POLICY = "EVENT_BASED_POLICY",
    IMAGE_MANAGEMENT = "IMAGE_MANAGEMENT"
}
export declare enum ResourceLocationValues {
    CLOUD = "CLOUD",
    OUTPOST = "OUTPOST"
}
export declare enum ResourceTypeValues {
    INSTANCE = "INSTANCE",
    VOLUME = "VOLUME"
}
export declare enum IntervalUnitValues {
    HOURS = "HOURS"
}
export declare enum LocationValues {
    CLOUD = "CLOUD",
    OUTPOST_LOCAL = "OUTPOST_LOCAL"
}
/**
 * <p>Specifies when to create snapshots of EBS volumes.</p>
 * 		       <p>You must specify either a Cron expression or an interval, interval unit, and start
 * 			time. You cannot specify both.</p>
 */
export interface CreateRule {
    /**
     * <p>Specifies the destination for snapshots created by the policy. To create snapshots in the same
     * 			Region as the source resource, specify <code>CLOUD</code>. To create snapshots on the same
     * 			Outpost as the source resource, specify <code>OUTPOST_LOCAL</code>. If you omit this
     * 			parameter, <code>CLOUD</code> is used by default.</p>
     * 		       <p>If the policy targets resources in an AWS Region, then you must create snapshots in the same
     * 			Region as the source resource. </p>
     * 		       <p>If the policy targets resources on an Outpost, then you can create snapshots on the same Outpost
     * 			as the source resource, or in the Region of that Outpost.</p>
     */
    Location?: LocationValues | string;
    /**
     * <p>The interval between snapshots. The supported values are 1, 2, 3, 4, 6, 8, 12, and
     * 			24.</p>
     */
    Interval?: number;
    /**
     * <p>The interval unit.</p>
     */
    IntervalUnit?: IntervalUnitValues | string;
    /**
     * <p>The time, in UTC, to start the operation. The supported format is hh:mm.</p>
     * 		       <p>The operation occurs within a one-hour window following the specified time. If you do
     * 			not specify a time, Amazon DLM selects a time within the next 24 hours.</p>
     */
    Times?: string[];
    /**
     * <p>The schedule, as a Cron expression. The schedule interval must be between 1 hour and 1
     * 			year. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions">Cron
     * 				expressions</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
     */
    CronExpression?: string;
}
export declare namespace CreateRule {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateRule) => any;
}
/**
 * <p>Specifies a rule for cross-Region snapshot copies.</p>
 */
export interface CrossRegionCopyRule {
    /**
     * <p>The target Region for the snapshot copies.</p>
     * 		       <p>If you specify a target Region, you must omit <b>Target</b>. You cannot
     * 			specify a target Region and a target Outpost in the same rule.</p>
     */
    TargetRegion?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the target AWS Outpost for the snapshot copies.</p>
     * 		       <p>If you specify an ARN, you must omit <b>TargetRegion</b>. You cannot
     * 			specify a target Region and a target Outpost in the same rule.</p>
     */
    Target?: string;
    /**
     * <p>To encrypt a copy of an unencrypted snapshot if encryption by default is not enabled,
     * 			enable encryption using this parameter. Copies of encrypted snapshots are encrypted,
     * 			even if this parameter is false or if encryption by default is not enabled.</p>
     */
    Encrypted: boolean | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the AWS KMS customer master key (CMK) to use for EBS
     * 			encryption. If this parameter is not specified, your AWS managed CMK for EBS is
     * 			used.</p>
     */
    CmkArn?: string;
    /**
     * <p>Copy all user-defined tags from the source snapshot to the copied snapshot.</p>
     */
    CopyTags?: boolean;
    /**
     * <p>The retention rule.</p>
     */
    RetainRule?: CrossRegionCopyRetainRule;
}
export declare namespace CrossRegionCopyRule {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CrossRegionCopyRule) => any;
}
/**
 * <p>Specifies a rule for enabling fast snapshot restore. You can enable fast snapshot
 * 			restore based on either a count or a time interval.</p>
 */
export interface FastRestoreRule {
    /**
     * <p>The number of snapshots to be enabled with fast snapshot restore.</p>
     */
    Count?: number;
    /**
     * <p>The amount of time to enable fast snapshot restore. The maximum is 100 years. This is
     * 			equivalent to 1200 months, 5200 weeks, or 36500 days.</p>
     */
    Interval?: number;
    /**
     * <p>The unit of time for enabling fast snapshot restore.</p>
     */
    IntervalUnit?: RetentionIntervalUnitValues | string;
    /**
     * <p>The Availability Zones in which to enable fast snapshot restore.</p>
     */
    AvailabilityZones: string[] | undefined;
}
export declare namespace FastRestoreRule {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FastRestoreRule) => any;
}
/**
 * <p>Specifies the retention rule for a lifecycle policy. You can retain snapshots based on
 * 			either a count or a time interval.</p>
 */
export interface RetainRule {
    /**
     * <p>The number of snapshots to retain for each volume, up to a maximum of 1000.</p>
     */
    Count?: number;
    /**
     * <p>The amount of time to retain each snapshot. The maximum is 100 years. This is
     * 			equivalent to 1200 months, 5200 weeks, or 36500 days.</p>
     */
    Interval?: number;
    /**
     * <p>The unit of time for time-based retention.</p>
     */
    IntervalUnit?: RetentionIntervalUnitValues | string;
}
export declare namespace RetainRule {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RetainRule) => any;
}
/**
 * <p>Specifies a rule for sharing snapshots across AWS accounts.</p>
 */
export interface ShareRule {
    /**
     * <p>The IDs of the AWS accounts with which to share the snapshots.</p>
     */
    TargetAccounts: string[] | undefined;
    /**
     * <p>The period after which snapshots that are shared with other AWS accounts are automatically unshared.</p>
     */
    UnshareInterval?: number;
    /**
     * <p>The unit of time for the automatic unsharing interval.</p>
     */
    UnshareIntervalUnit?: RetentionIntervalUnitValues | string;
}
export declare namespace ShareRule {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ShareRule) => any;
}
/**
 * <p>Specifies a tag for a resource.</p>
 */
export interface Tag {
    /**
     * <p>The tag key.</p>
     */
    Key: string | undefined;
    /**
     * <p>The tag value.</p>
     */
    Value: string | undefined;
}
export declare namespace Tag {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Tag) => any;
}
/**
 * <p>Specifies a backup schedule for a snapshot or AMI lifecycle policy.</p>
 */
export interface Schedule {
    /**
     * <p>The name of the schedule.</p>
     */
    Name?: string;
    /**
     * <p>Copy all user-defined tags on a source volume to snapshots of the volume created by
     * 			this policy.</p>
     */
    CopyTags?: boolean;
    /**
     * <p>The tags to apply to policy-created resources. These user-defined tags are in addition
     * 			to the AWS-added lifecycle tags.</p>
     */
    TagsToAdd?: Tag[];
    /**
     * <p>A collection of key/value pairs with values determined dynamically when the policy is
     * 			executed. Keys may be any valid Amazon EC2 tag key. Values must be in one of the two
     * 			following formats: <code>$(instance-id)</code> or <code>$(timestamp)</code>. Variable
     * 			tags are only valid for EBS Snapshot Management – Instance policies.</p>
     */
    VariableTags?: Tag[];
    /**
     * <p>The creation rule.</p>
     */
    CreateRule?: CreateRule;
    /**
     * <p>The retention rule.</p>
     */
    RetainRule?: RetainRule;
    /**
     * <p>The rule for enabling fast snapshot restore.</p>
     */
    FastRestoreRule?: FastRestoreRule;
    /**
     * <p>The rule for cross-Region snapshot copies.</p>
     * 		       <p>You can only specify cross-Region copy rules for policies that create snapshots in a Region.
     * 			If the policy creates snapshots on an Outpost, then you cannot copy the snapshots to a Region or
     * 			to an Outpost. If the policy creates snapshots in a Region, then snapshots can be copied to up to three
     * 			Regions or Outposts.</p>
     */
    CrossRegionCopyRules?: CrossRegionCopyRule[];
    /**
     * <p>The rule for sharing snapshots with other AWS accounts.</p>
     */
    ShareRules?: ShareRule[];
}
export declare namespace Schedule {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Schedule) => any;
}
/**
 * <p>Specifies the configuration of a lifecycle policy.</p>
 */
export interface PolicyDetails {
    /**
     * <p>The valid target resource types and actions a policy can manage. Specify <code>EBS_SNAPSHOT_MANAGEMENT</code>
     * 			to create a lifecycle policy that manages the lifecycle of Amazon EBS snapshots. Specify <code>IMAGE_MANAGEMENT</code>
     * 			to create a lifecycle policy that manages the lifecycle of EBS-backed AMIs. Specify <code>EVENT_BASED_POLICY </code>
     * 			to create an event-based policy that performs specific actions when a defined event occurs in your AWS account.</p>
     * 		       <p>The default is <code>EBS_SNAPSHOT_MANAGEMENT</code>.</p>
     */
    PolicyType?: PolicyTypeValues | string;
    /**
     * <p>The target resource type for snapshot and AMI lifecycle policies. Use <code>VOLUME </code>to
     * 			create snapshots of individual volumes or use <code>INSTANCE</code> to create multi-volume
     * 			snapshots from the volumes for an instance.</p>
     * 		       <p>This parameter is required for snapshot and AMI policies only. If you are creating an event-based policy, omit this parameter.</p>
     */
    ResourceTypes?: (ResourceTypeValues | string)[];
    /**
     * <p>The location of the resources to backup. If the source resources are located in an AWS Region, specify
     * 			<code>CLOUD</code>. If the source resources are located on an AWS Outpost
     * 			in your account, specify <code>OUTPOST</code>. </p>
     * 			      <p>If you specify <code>OUTPOST</code>, Amazon Data Lifecycle Manager backs up all resources
     * 				of the specified type with matching target tags across all of the Outposts in your account.</p>
     */
    ResourceLocations?: (ResourceLocationValues | string)[];
    /**
     * <p>The single tag that identifies targeted resources for this policy.</p>
     * 		       <p>This parameter is required for snapshot and AMI policies only. If you are creating an event-based policy, omit this parameter.</p>
     */
    TargetTags?: Tag[];
    /**
     * <p>The schedules of policy-defined actions for snapshot and AMI lifecycle policies. A policy
     * 			can have up to four schedules—one mandatory schedule and up to three optional schedules.</p>
     * 		       <p>This parameter is required for snapshot and AMI policies only. If you are creating an event-based policy, omit this parameter.</p>
     */
    Schedules?: Schedule[];
    /**
     * <p>A set of optional parameters for snapshot and AMI lifecycle policies. </p>
     * 		       <p>This parameter is required for snapshot and AMI policies only. If you are creating an event-based policy, omit this parameter.</p>
     */
    Parameters?: _Parameters;
    /**
     * <p>The event that triggers the event-based policy. </p>
     * 		       <p>This parameter is required for event-based policies only. If you are creating a snapshot or AMI policy, omit this parameter.</p>
     */
    EventSource?: EventSource;
    /**
     * <p>The actions to be performed when the event-based policy is triggered. You can specify
     * 		only one action per policy.</p>
     * 		       <p>This parameter is required for event-based policies only. If you are creating a snapshot or AMI policy, omit this parameter.</p>
     */
    Actions?: Action[];
}
export declare namespace PolicyDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PolicyDetails) => any;
}
export declare enum SettablePolicyStateValues {
    DISABLED = "DISABLED",
    ENABLED = "ENABLED"
}
export interface CreateLifecyclePolicyRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by
     * 			the lifecycle policy.</p>
     */
    ExecutionRoleArn: string | undefined;
    /**
     * <p>A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are
     * 			supported.</p>
     */
    Description: string | undefined;
    /**
     * <p>The desired activation state of the lifecycle policy after creation.</p>
     */
    State: SettablePolicyStateValues | string | undefined;
    /**
     * <p>The configuration details of the lifecycle policy.</p>
     */
    PolicyDetails: PolicyDetails | undefined;
    /**
     * <p>The tags to apply to the lifecycle policy during creation.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateLifecyclePolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLifecyclePolicyRequest) => any;
}
export interface CreateLifecyclePolicyResponse {
    /**
     * <p>The identifier of the lifecycle policy.</p>
     */
    PolicyId?: string;
}
export declare namespace CreateLifecyclePolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLifecyclePolicyResponse) => any;
}
/**
 * <p>The service failed in an unexpected way.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
    name: "InternalServerException";
    $fault: "server";
    Message?: string;
    Code?: string;
}
export declare namespace InternalServerException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServerException) => any;
}
/**
 * <p>Bad request. The request is missing required parameters or has invalid
 * 			parameters.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
    name: "InvalidRequestException";
    $fault: "client";
    Message?: string;
    Code?: string;
    /**
     * <p>The request omitted one or more required parameters.</p>
     */
    RequiredParameters?: string[];
    /**
     * <p>The request included parameters that cannot be provided together.</p>
     */
    MutuallyExclusiveParameters?: string[];
}
export declare namespace InvalidRequestException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidRequestException) => any;
}
/**
 * <p>The request failed because a limit was exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
    name: "LimitExceededException";
    $fault: "client";
    Message?: string;
    Code?: string;
    /**
     * <p>Value is the type of resource for which a limit was exceeded.</p>
     */
    ResourceType?: string;
}
export declare namespace LimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LimitExceededException) => any;
}
export interface DeleteLifecyclePolicyRequest {
    /**
     * <p>The identifier of the lifecycle policy.</p>
     */
    PolicyId: string | undefined;
}
export declare namespace DeleteLifecyclePolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLifecyclePolicyRequest) => any;
}
export interface DeleteLifecyclePolicyResponse {
}
export declare namespace DeleteLifecyclePolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLifecyclePolicyResponse) => any;
}
/**
 * <p>A requested resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    Message?: string;
    Code?: string;
    /**
     * <p>Value is the type of resource that was not found.</p>
     */
    ResourceType?: string;
    /**
     * <p>Value is a list of resource IDs that were not found.</p>
     */
    ResourceIds?: string[];
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
export declare enum GettablePolicyStateValues {
    DISABLED = "DISABLED",
    ENABLED = "ENABLED",
    ERROR = "ERROR"
}
export interface GetLifecyclePoliciesRequest {
    /**
     * <p>The identifiers of the data lifecycle policies.</p>
     */
    PolicyIds?: string[];
    /**
     * <p>The activation state.</p>
     */
    State?: GettablePolicyStateValues | string;
    /**
     * <p>The resource type.</p>
     */
    ResourceTypes?: (ResourceTypeValues | string)[];
    /**
     * <p>The target tag for a policy.</p>
     * 		       <p>Tags are strings in the format <code>key=value</code>.</p>
     */
    TargetTags?: string[];
    /**
     * <p>The tags to add to objects created by the policy.</p>
     * 		       <p>Tags are strings in the format <code>key=value</code>.</p>
     * 		       <p>These user-defined tags are added in addition to the AWS-added lifecycle tags.</p>
     */
    TagsToAdd?: string[];
}
export declare namespace GetLifecyclePoliciesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLifecyclePoliciesRequest) => any;
}
/**
 * <p>Summary information about a lifecycle policy.</p>
 */
export interface LifecyclePolicySummary {
    /**
     * <p>The identifier of the lifecycle policy.</p>
     */
    PolicyId?: string;
    /**
     * <p>The description of the lifecycle policy.</p>
     */
    Description?: string;
    /**
     * <p>The activation state of the lifecycle policy.</p>
     */
    State?: GettablePolicyStateValues | string;
    /**
     * <p>The tags.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The type of policy. <code>EBS_SNAPSHOT_MANAGEMENT</code> indicates that the policy
     * 			manages the lifecycle of Amazon EBS snapshots. <code>IMAGE_MANAGEMENT</code>
     * 			indicates that the policy manages the lifecycle of EBS-backed AMIs.</p>
     */
    PolicyType?: PolicyTypeValues | string;
}
export declare namespace LifecyclePolicySummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LifecyclePolicySummary) => any;
}
export interface GetLifecyclePoliciesResponse {
    /**
     * <p>Summary information about the lifecycle policies.</p>
     */
    Policies?: LifecyclePolicySummary[];
}
export declare namespace GetLifecyclePoliciesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLifecyclePoliciesResponse) => any;
}
export interface GetLifecyclePolicyRequest {
    /**
     * <p>The identifier of the lifecycle policy.</p>
     */
    PolicyId: string | undefined;
}
export declare namespace GetLifecyclePolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLifecyclePolicyRequest) => any;
}
/**
 * <p>Detailed information about a lifecycle policy.</p>
 */
export interface LifecyclePolicy {
    /**
     * <p>The identifier of the lifecycle policy.</p>
     */
    PolicyId?: string;
    /**
     * <p>The description of the lifecycle policy.</p>
     */
    Description?: string;
    /**
     * <p>The activation state of the lifecycle policy.</p>
     */
    State?: GettablePolicyStateValues | string;
    /**
     * <p>The description of the status.</p>
     */
    StatusMessage?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by
     * 			the lifecycle policy.</p>
     */
    ExecutionRoleArn?: string;
    /**
     * <p>The local date and time when the lifecycle policy was created.</p>
     */
    DateCreated?: Date;
    /**
     * <p>The local date and time when the lifecycle policy was last modified.</p>
     */
    DateModified?: Date;
    /**
     * <p>The configuration of the lifecycle policy</p>
     */
    PolicyDetails?: PolicyDetails;
    /**
     * <p>The tags.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The Amazon Resource Name (ARN) of the policy.</p>
     */
    PolicyArn?: string;
}
export declare namespace LifecyclePolicy {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LifecyclePolicy) => any;
}
export interface GetLifecyclePolicyResponse {
    /**
     * <p>Detailed information about the lifecycle policy.</p>
     */
    Policy?: LifecyclePolicy;
}
export declare namespace GetLifecyclePolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLifecyclePolicyResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    ResourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResponse {
    /**
     * <p>Information about the tags.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>One or more tags.</p>
     */
    Tags: {
        [key: string]: string;
    } | undefined;
}
export declare namespace TagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface TagResourceResponse {
}
export declare namespace TagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceResponse) => any;
}
export interface UntagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The tag keys.</p>
     */
    TagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UntagResourceResponse {
}
export declare namespace UntagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceResponse) => any;
}
export interface UpdateLifecyclePolicyRequest {
    /**
     * <p>The identifier of the lifecycle policy.</p>
     */
    PolicyId: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by
     * 			the lifecycle policy.</p>
     */
    ExecutionRoleArn?: string;
    /**
     * <p>The desired activation state of the lifecycle policy after creation.</p>
     */
    State?: SettablePolicyStateValues | string;
    /**
     * <p>A description of the lifecycle policy.</p>
     */
    Description?: string;
    /**
     * <p>The configuration of the lifecycle policy. You cannot update the policy type or the
     * 			resource type.</p>
     */
    PolicyDetails?: PolicyDetails;
}
export declare namespace UpdateLifecyclePolicyRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLifecyclePolicyRequest) => any;
}
export interface UpdateLifecyclePolicyResponse {
}
export declare namespace UpdateLifecyclePolicyResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLifecyclePolicyResponse) => any;
}
