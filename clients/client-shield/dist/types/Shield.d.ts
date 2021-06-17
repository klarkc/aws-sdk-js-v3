import { ShieldClient } from "./ShieldClient";
import { AssociateDRTLogBucketCommandInput, AssociateDRTLogBucketCommandOutput } from "./commands/AssociateDRTLogBucketCommand";
import { AssociateDRTRoleCommandInput, AssociateDRTRoleCommandOutput } from "./commands/AssociateDRTRoleCommand";
import { AssociateHealthCheckCommandInput, AssociateHealthCheckCommandOutput } from "./commands/AssociateHealthCheckCommand";
import { AssociateProactiveEngagementDetailsCommandInput, AssociateProactiveEngagementDetailsCommandOutput } from "./commands/AssociateProactiveEngagementDetailsCommand";
import { CreateProtectionCommandInput, CreateProtectionCommandOutput } from "./commands/CreateProtectionCommand";
import { CreateProtectionGroupCommandInput, CreateProtectionGroupCommandOutput } from "./commands/CreateProtectionGroupCommand";
import { CreateSubscriptionCommandInput, CreateSubscriptionCommandOutput } from "./commands/CreateSubscriptionCommand";
import { DeleteProtectionCommandInput, DeleteProtectionCommandOutput } from "./commands/DeleteProtectionCommand";
import { DeleteProtectionGroupCommandInput, DeleteProtectionGroupCommandOutput } from "./commands/DeleteProtectionGroupCommand";
import { DeleteSubscriptionCommandInput, DeleteSubscriptionCommandOutput } from "./commands/DeleteSubscriptionCommand";
import { DescribeAttackCommandInput, DescribeAttackCommandOutput } from "./commands/DescribeAttackCommand";
import { DescribeAttackStatisticsCommandInput, DescribeAttackStatisticsCommandOutput } from "./commands/DescribeAttackStatisticsCommand";
import { DescribeDRTAccessCommandInput, DescribeDRTAccessCommandOutput } from "./commands/DescribeDRTAccessCommand";
import { DescribeEmergencyContactSettingsCommandInput, DescribeEmergencyContactSettingsCommandOutput } from "./commands/DescribeEmergencyContactSettingsCommand";
import { DescribeProtectionCommandInput, DescribeProtectionCommandOutput } from "./commands/DescribeProtectionCommand";
import { DescribeProtectionGroupCommandInput, DescribeProtectionGroupCommandOutput } from "./commands/DescribeProtectionGroupCommand";
import { DescribeSubscriptionCommandInput, DescribeSubscriptionCommandOutput } from "./commands/DescribeSubscriptionCommand";
import { DisableProactiveEngagementCommandInput, DisableProactiveEngagementCommandOutput } from "./commands/DisableProactiveEngagementCommand";
import { DisassociateDRTLogBucketCommandInput, DisassociateDRTLogBucketCommandOutput } from "./commands/DisassociateDRTLogBucketCommand";
import { DisassociateDRTRoleCommandInput, DisassociateDRTRoleCommandOutput } from "./commands/DisassociateDRTRoleCommand";
import { DisassociateHealthCheckCommandInput, DisassociateHealthCheckCommandOutput } from "./commands/DisassociateHealthCheckCommand";
import { EnableProactiveEngagementCommandInput, EnableProactiveEngagementCommandOutput } from "./commands/EnableProactiveEngagementCommand";
import { GetSubscriptionStateCommandInput, GetSubscriptionStateCommandOutput } from "./commands/GetSubscriptionStateCommand";
import { ListAttacksCommandInput, ListAttacksCommandOutput } from "./commands/ListAttacksCommand";
import { ListProtectionGroupsCommandInput, ListProtectionGroupsCommandOutput } from "./commands/ListProtectionGroupsCommand";
import { ListProtectionsCommandInput, ListProtectionsCommandOutput } from "./commands/ListProtectionsCommand";
import { ListResourcesInProtectionGroupCommandInput, ListResourcesInProtectionGroupCommandOutput } from "./commands/ListResourcesInProtectionGroupCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateEmergencyContactSettingsCommandInput, UpdateEmergencyContactSettingsCommandOutput } from "./commands/UpdateEmergencyContactSettingsCommand";
import { UpdateProtectionGroupCommandInput, UpdateProtectionGroupCommandOutput } from "./commands/UpdateProtectionGroupCommand";
import { UpdateSubscriptionCommandInput, UpdateSubscriptionCommandOutput } from "./commands/UpdateSubscriptionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Shield Advanced</fullname>
 *          <p>This is the <i>AWS Shield Advanced API Reference</i>. This guide is for developers who need detailed information about the AWS Shield Advanced API actions,
 *          data types, and errors. For detailed information about AWS WAF and AWS Shield Advanced features and an overview of how to use the AWS WAF and AWS Shield Advanced APIs, see the
 *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF and AWS Shield Developer Guide</a>.</p>
 */
export declare class Shield extends ShieldClient {
    /**
     * <p>Authorizes the DDoS Response Team (DRT) to access the specified Amazon S3 bucket containing your AWS WAF logs. You can associate up to 10 Amazon S3 buckets with your subscription.</p>
     * 	        <p>To use the services of the DRT and make an <code>AssociateDRTLogBucket</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
     */
    associateDRTLogBucket(args: AssociateDRTLogBucketCommandInput, options?: __HttpHandlerOptions): Promise<AssociateDRTLogBucketCommandOutput>;
    associateDRTLogBucket(args: AssociateDRTLogBucketCommandInput, cb: (err: any, data?: AssociateDRTLogBucketCommandOutput) => void): void;
    associateDRTLogBucket(args: AssociateDRTLogBucketCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateDRTLogBucketCommandOutput) => void): void;
    /**
     * <p>Authorizes the DDoS Response Team (DRT), using the specified role, to access your AWS account to assist with DDoS attack mitigation during potential attacks. This enables the DRT to inspect your AWS WAF configuration and create or update AWS WAF rules and web ACLs.</p>
     *          <p>You can associate only one <code>RoleArn</code> with your subscription. If you submit an <code>AssociateDRTRole</code> request for an account that already has an associated role, the new <code>RoleArn</code> will replace the existing <code>RoleArn</code>. </p>
     *          <p>Prior to making the <code>AssociateDRTRole</code> request, you must attach the <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy">AWSShieldDRTAccessPolicy</a> managed policy to the role you will specify in the request. For more information see <a href=" https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html">Attaching and Detaching IAM Policies</a>. The role must also trust the service principal <code> drt.shield.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">IAM JSON Policy Elements: Principal</a>.</p>
     *
     *          <p>The DRT will have access only to your AWS WAF and Shield resources. By submitting this request, you authorize the DRT to inspect your AWS WAF and Shield configuration and create and update AWS WAF rules and web ACLs on your behalf. The DRT takes these actions only if explicitly authorized by you.</p>
     *          <p>You must have the <code>iam:PassRole</code> permission to make an <code>AssociateDRTRole</code> request. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a User Permissions to Pass a Role to an AWS Service</a>. </p>
     *          <p>To use the services of the DRT and make an <code>AssociateDRTRole</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
     */
    associateDRTRole(args: AssociateDRTRoleCommandInput, options?: __HttpHandlerOptions): Promise<AssociateDRTRoleCommandOutput>;
    associateDRTRole(args: AssociateDRTRoleCommandInput, cb: (err: any, data?: AssociateDRTRoleCommandOutput) => void): void;
    associateDRTRole(args: AssociateDRTRoleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateDRTRoleCommandOutput) => void): void;
    /**
     * <p>Adds health-based detection to the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your AWS resource to improve responsiveness and accuracy in attack detection and mitigation.  </p>
     *          <p>You define the health check in Route 53 and then associate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF and AWS Shield Developer Guide</a>. </p>
     */
    associateHealthCheck(args: AssociateHealthCheckCommandInput, options?: __HttpHandlerOptions): Promise<AssociateHealthCheckCommandOutput>;
    associateHealthCheck(args: AssociateHealthCheckCommandInput, cb: (err: any, data?: AssociateHealthCheckCommandOutput) => void): void;
    associateHealthCheck(args: AssociateHealthCheckCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateHealthCheckCommandOutput) => void): void;
    /**
     * <p>Initializes proactive engagement and sets the list of contacts for the DDoS Response Team (DRT) to use. You must provide at least one phone number in the emergency contact list. </p>
     *          <p>After you have initialized proactive engagement using this call, to disable or enable proactive engagement, use the calls <code>DisableProactiveEngagement</code> and <code>EnableProactiveEngagement</code>.  </p>
     *          <note>
     *             <p>This call defines the list of email addresses and phone numbers that the DDoS Response Team (DRT) can use to contact you for escalations to the DRT and to initiate proactive customer support.</p>
     *             <p>The contacts that you provide in the request replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using <code>DescribeEmergencyContactSettings</code> and then provide it to this call.  </p>
     *          </note>
     */
    associateProactiveEngagementDetails(args: AssociateProactiveEngagementDetailsCommandInput, options?: __HttpHandlerOptions): Promise<AssociateProactiveEngagementDetailsCommandOutput>;
    associateProactiveEngagementDetails(args: AssociateProactiveEngagementDetailsCommandInput, cb: (err: any, data?: AssociateProactiveEngagementDetailsCommandOutput) => void): void;
    associateProactiveEngagementDetails(args: AssociateProactiveEngagementDetailsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateProactiveEngagementDetailsCommandOutput) => void): void;
    /**
     * <p>Enables AWS Shield Advanced for a specific AWS resource. The resource can be an Amazon
     *          CloudFront distribution, Elastic Load Balancing load balancer, AWS Global Accelerator accelerator, Elastic IP Address, or an Amazon Route 53 hosted zone.</p>
     *          <p>You can add protection to only a single resource with each CreateProtection request. If you want to add protection to multiple resources at once, use the <a href="https://console.aws.amazon.com/waf/">AWS WAF console</a>. For more information see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with AWS Shield Advanced</a> and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/configure-new-protection.html">Add AWS Shield Advanced Protection to more AWS Resources</a>.</p>
     */
    createProtection(args: CreateProtectionCommandInput, options?: __HttpHandlerOptions): Promise<CreateProtectionCommandOutput>;
    createProtection(args: CreateProtectionCommandInput, cb: (err: any, data?: CreateProtectionCommandOutput) => void): void;
    createProtection(args: CreateProtectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProtectionCommandOutput) => void): void;
    /**
     * <p>Creates a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. </p>
     */
    createProtectionGroup(args: CreateProtectionGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateProtectionGroupCommandOutput>;
    createProtectionGroup(args: CreateProtectionGroupCommandInput, cb: (err: any, data?: CreateProtectionGroupCommandOutput) => void): void;
    createProtectionGroup(args: CreateProtectionGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProtectionGroupCommandOutput) => void): void;
    /**
     * <p>Activates AWS Shield Advanced for an account.</p>
     *
     *          <p>When you initally create a subscription, your subscription is set to be automatically renewed at the end of the existing subscription period.  You can change this by submitting an <code>UpdateSubscription</code> request. </p>
     */
    createSubscription(args: CreateSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<CreateSubscriptionCommandOutput>;
    createSubscription(args: CreateSubscriptionCommandInput, cb: (err: any, data?: CreateSubscriptionCommandOutput) => void): void;
    createSubscription(args: CreateSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSubscriptionCommandOutput) => void): void;
    /**
     * <p>Deletes an AWS Shield Advanced <a>Protection</a>.</p>
     */
    deleteProtection(args: DeleteProtectionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProtectionCommandOutput>;
    deleteProtection(args: DeleteProtectionCommandInput, cb: (err: any, data?: DeleteProtectionCommandOutput) => void): void;
    deleteProtection(args: DeleteProtectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProtectionCommandOutput) => void): void;
    /**
     * <p>Removes the specified protection group.</p>
     */
    deleteProtectionGroup(args: DeleteProtectionGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProtectionGroupCommandOutput>;
    deleteProtectionGroup(args: DeleteProtectionGroupCommandInput, cb: (err: any, data?: DeleteProtectionGroupCommandOutput) => void): void;
    deleteProtectionGroup(args: DeleteProtectionGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProtectionGroupCommandOutput) => void): void;
    /**
     * @deprecated
     *
     * <p>Removes AWS Shield Advanced from an account. AWS Shield Advanced requires a 1-year subscription commitment. You cannot delete a subscription prior to the completion of that commitment. </p>
     */
    deleteSubscription(args: DeleteSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSubscriptionCommandOutput>;
    deleteSubscription(args: DeleteSubscriptionCommandInput, cb: (err: any, data?: DeleteSubscriptionCommandOutput) => void): void;
    deleteSubscription(args: DeleteSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSubscriptionCommandOutput) => void): void;
    /**
     * <p>Describes the details of a DDoS attack. </p>
     */
    describeAttack(args: DescribeAttackCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAttackCommandOutput>;
    describeAttack(args: DescribeAttackCommandInput, cb: (err: any, data?: DescribeAttackCommandOutput) => void): void;
    describeAttack(args: DescribeAttackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAttackCommandOutput) => void): void;
    /**
     * <p>Provides information about the number and type of attacks AWS Shield has detected in the last year for all resources that belong to your account, regardless of whether you've defined Shield protections for them. This operation is available to Shield customers as well as to Shield Advanced customers.</p>
     *          <p>The operation returns data for the time range of midnight UTC, one year ago, to midnight UTC, today. For example, if the current time is <code>2020-10-26 15:39:32 PDT</code>, equal to <code>2020-10-26 22:39:32 UTC</code>, then the time range for the attack data returned is from <code>2019-10-26 00:00:00 UTC</code> to <code>2020-10-26 00:00:00 UTC</code>. </p>
     *          <p>The time range indicates the period covered by the attack statistics data items.</p>
     */
    describeAttackStatistics(args: DescribeAttackStatisticsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAttackStatisticsCommandOutput>;
    describeAttackStatistics(args: DescribeAttackStatisticsCommandInput, cb: (err: any, data?: DescribeAttackStatisticsCommandOutput) => void): void;
    describeAttackStatistics(args: DescribeAttackStatisticsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAttackStatisticsCommandOutput) => void): void;
    /**
     * <p>Returns the current role and list of Amazon S3 log buckets used by the DDoS Response Team (DRT) to access your AWS account while assisting with attack mitigation.</p>
     */
    describeDRTAccess(args: DescribeDRTAccessCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDRTAccessCommandOutput>;
    describeDRTAccess(args: DescribeDRTAccessCommandInput, cb: (err: any, data?: DescribeDRTAccessCommandOutput) => void): void;
    describeDRTAccess(args: DescribeDRTAccessCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDRTAccessCommandOutput) => void): void;
    /**
     * <p>A list of email addresses and phone numbers that the DDoS Response Team (DRT) can use to contact you if you have proactive engagement enabled, for escalations to the DRT and to initiate proactive customer support.</p>
     */
    describeEmergencyContactSettings(args: DescribeEmergencyContactSettingsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEmergencyContactSettingsCommandOutput>;
    describeEmergencyContactSettings(args: DescribeEmergencyContactSettingsCommandInput, cb: (err: any, data?: DescribeEmergencyContactSettingsCommandOutput) => void): void;
    describeEmergencyContactSettings(args: DescribeEmergencyContactSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEmergencyContactSettingsCommandOutput) => void): void;
    /**
     * <p>Lists the details of a <a>Protection</a> object.</p>
     */
    describeProtection(args: DescribeProtectionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProtectionCommandOutput>;
    describeProtection(args: DescribeProtectionCommandInput, cb: (err: any, data?: DescribeProtectionCommandOutput) => void): void;
    describeProtection(args: DescribeProtectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProtectionCommandOutput) => void): void;
    /**
     * <p>Returns the specification for the specified protection group.</p>
     */
    describeProtectionGroup(args: DescribeProtectionGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProtectionGroupCommandOutput>;
    describeProtectionGroup(args: DescribeProtectionGroupCommandInput, cb: (err: any, data?: DescribeProtectionGroupCommandOutput) => void): void;
    describeProtectionGroup(args: DescribeProtectionGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProtectionGroupCommandOutput) => void): void;
    /**
     * <p>Provides details about the AWS Shield Advanced subscription for an account.</p>
     */
    describeSubscription(args: DescribeSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSubscriptionCommandOutput>;
    describeSubscription(args: DescribeSubscriptionCommandInput, cb: (err: any, data?: DescribeSubscriptionCommandOutput) => void): void;
    describeSubscription(args: DescribeSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSubscriptionCommandOutput) => void): void;
    /**
     * <p>Removes authorization from the DDoS Response Team (DRT) to notify contacts about escalations to the DRT and to initiate proactive customer support.</p>
     */
    disableProactiveEngagement(args: DisableProactiveEngagementCommandInput, options?: __HttpHandlerOptions): Promise<DisableProactiveEngagementCommandOutput>;
    disableProactiveEngagement(args: DisableProactiveEngagementCommandInput, cb: (err: any, data?: DisableProactiveEngagementCommandOutput) => void): void;
    disableProactiveEngagement(args: DisableProactiveEngagementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableProactiveEngagementCommandOutput) => void): void;
    /**
     * <p>Removes the DDoS Response Team's (DRT) access to the specified Amazon S3 bucket containing your AWS WAF logs.</p>
     * 	        <p>To make a <code>DisassociateDRTLogBucket</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>. However, if you are not subscribed to one of these support plans, but had been previously and had granted the DRT access to your account, you can submit a <code>DisassociateDRTLogBucket</code> request to remove this access.</p>
     */
    disassociateDRTLogBucket(args: DisassociateDRTLogBucketCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateDRTLogBucketCommandOutput>;
    disassociateDRTLogBucket(args: DisassociateDRTLogBucketCommandInput, cb: (err: any, data?: DisassociateDRTLogBucketCommandOutput) => void): void;
    disassociateDRTLogBucket(args: DisassociateDRTLogBucketCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateDRTLogBucketCommandOutput) => void): void;
    /**
     * <p>Removes the DDoS Response Team's (DRT) access to your AWS account.</p>
     * 	        <p>To make a <code>DisassociateDRTRole</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>. However, if you are not subscribed to one of these support plans, but had been previously and had granted the DRT access to your account, you can submit a <code>DisassociateDRTRole</code> request to remove this access.</p>
     */
    disassociateDRTRole(args: DisassociateDRTRoleCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateDRTRoleCommandOutput>;
    disassociateDRTRole(args: DisassociateDRTRoleCommandInput, cb: (err: any, data?: DisassociateDRTRoleCommandOutput) => void): void;
    disassociateDRTRole(args: DisassociateDRTRoleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateDRTRoleCommandOutput) => void): void;
    /**
     * <p>Removes health-based detection from the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your AWS resource to improve responsiveness and accuracy in attack detection and mitigation. </p>
     *          <p>You define the health check in Route 53 and then associate or disassociate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF and AWS Shield Developer Guide</a>. </p>
     */
    disassociateHealthCheck(args: DisassociateHealthCheckCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateHealthCheckCommandOutput>;
    disassociateHealthCheck(args: DisassociateHealthCheckCommandInput, cb: (err: any, data?: DisassociateHealthCheckCommandOutput) => void): void;
    disassociateHealthCheck(args: DisassociateHealthCheckCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateHealthCheckCommandOutput) => void): void;
    /**
     * <p>Authorizes the DDoS Response Team (DRT) to use email and phone to notify contacts about escalations to the DRT and to initiate proactive customer support.</p>
     */
    enableProactiveEngagement(args: EnableProactiveEngagementCommandInput, options?: __HttpHandlerOptions): Promise<EnableProactiveEngagementCommandOutput>;
    enableProactiveEngagement(args: EnableProactiveEngagementCommandInput, cb: (err: any, data?: EnableProactiveEngagementCommandOutput) => void): void;
    enableProactiveEngagement(args: EnableProactiveEngagementCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableProactiveEngagementCommandOutput) => void): void;
    /**
     * <p>Returns the <code>SubscriptionState</code>, either <code>Active</code> or <code>Inactive</code>.</p>
     */
    getSubscriptionState(args: GetSubscriptionStateCommandInput, options?: __HttpHandlerOptions): Promise<GetSubscriptionStateCommandOutput>;
    getSubscriptionState(args: GetSubscriptionStateCommandInput, cb: (err: any, data?: GetSubscriptionStateCommandOutput) => void): void;
    getSubscriptionState(args: GetSubscriptionStateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSubscriptionStateCommandOutput) => void): void;
    /**
     * <p>Returns all ongoing DDoS attacks or all DDoS attacks during a specified time
     *          period.</p>
     */
    listAttacks(args: ListAttacksCommandInput, options?: __HttpHandlerOptions): Promise<ListAttacksCommandOutput>;
    listAttacks(args: ListAttacksCommandInput, cb: (err: any, data?: ListAttacksCommandOutput) => void): void;
    listAttacks(args: ListAttacksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAttacksCommandOutput) => void): void;
    /**
     * <p>Retrieves the <a>ProtectionGroup</a> objects for the account.</p>
     */
    listProtectionGroups(args: ListProtectionGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListProtectionGroupsCommandOutput>;
    listProtectionGroups(args: ListProtectionGroupsCommandInput, cb: (err: any, data?: ListProtectionGroupsCommandOutput) => void): void;
    listProtectionGroups(args: ListProtectionGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProtectionGroupsCommandOutput) => void): void;
    /**
     * <p>Lists all <a>Protection</a> objects for the account.</p>
     */
    listProtections(args: ListProtectionsCommandInput, options?: __HttpHandlerOptions): Promise<ListProtectionsCommandOutput>;
    listProtections(args: ListProtectionsCommandInput, cb: (err: any, data?: ListProtectionsCommandOutput) => void): void;
    listProtections(args: ListProtectionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProtectionsCommandOutput) => void): void;
    /**
     * <p>Retrieves the resources that are included in the protection group. </p>
     */
    listResourcesInProtectionGroup(args: ListResourcesInProtectionGroupCommandInput, options?: __HttpHandlerOptions): Promise<ListResourcesInProtectionGroupCommandOutput>;
    listResourcesInProtectionGroup(args: ListResourcesInProtectionGroupCommandInput, cb: (err: any, data?: ListResourcesInProtectionGroupCommandOutput) => void): void;
    listResourcesInProtectionGroup(args: ListResourcesInProtectionGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResourcesInProtectionGroupCommandOutput) => void): void;
    /**
     * <p>Gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS Shield.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Adds or updates tags for a resource in AWS Shield.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes tags from a resource in AWS Shield.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the details of the list of email addresses and phone numbers that the DDoS Response Team (DRT) can use to contact you if you have proactive engagement enabled, for escalations to the DRT and to initiate proactive customer support.</p>
     */
    updateEmergencyContactSettings(args: UpdateEmergencyContactSettingsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateEmergencyContactSettingsCommandOutput>;
    updateEmergencyContactSettings(args: UpdateEmergencyContactSettingsCommandInput, cb: (err: any, data?: UpdateEmergencyContactSettingsCommandOutput) => void): void;
    updateEmergencyContactSettings(args: UpdateEmergencyContactSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateEmergencyContactSettingsCommandOutput) => void): void;
    /**
     * <p>Updates an existing protection group. A protection group is a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. </p>
     */
    updateProtectionGroup(args: UpdateProtectionGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProtectionGroupCommandOutput>;
    updateProtectionGroup(args: UpdateProtectionGroupCommandInput, cb: (err: any, data?: UpdateProtectionGroupCommandOutput) => void): void;
    updateProtectionGroup(args: UpdateProtectionGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateProtectionGroupCommandOutput) => void): void;
    /**
     * <p>Updates the details of an existing subscription. Only enter values for parameters you want to change. Empty parameters are not updated.</p>
     */
    updateSubscription(args: UpdateSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSubscriptionCommandOutput>;
    updateSubscription(args: UpdateSubscriptionCommandInput, cb: (err: any, data?: UpdateSubscriptionCommandOutput) => void): void;
    updateSubscription(args: UpdateSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateSubscriptionCommandOutput) => void): void;
}
