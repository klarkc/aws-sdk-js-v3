import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>Exception that indicates the specified <code>AttackId</code> does not exist, or the requester does not have the appropriate permissions to access the <code>AttackId</code>.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "AccessDeniedException";
    $fault: "client";
    message?: string;
}
export declare namespace AccessDeniedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessDeniedException) => any;
}
/**
 * <p>In order to grant the necessary access to the DDoS Response Team (DRT), the user submitting the request must have the <code>iam:PassRole</code> permission. This error indicates the user did not have the appropriate permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a User Permissions to Pass a Role to an AWS Service</a>. </p>
 */
export interface AccessDeniedForDependencyException extends __SmithyException, $MetadataBearer {
    name: "AccessDeniedForDependencyException";
    $fault: "client";
    message?: string;
}
export declare namespace AccessDeniedForDependencyException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessDeniedForDependencyException) => any;
}
export interface AssociateDRTLogBucketRequest {
    /**
     * <p>The Amazon S3 bucket that contains your AWS WAF logs.</p>
     */
    LogBucket: string | undefined;
}
export declare namespace AssociateDRTLogBucketRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateDRTLogBucketRequest) => any;
}
export interface AssociateDRTLogBucketResponse {
}
export declare namespace AssociateDRTLogBucketResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateDRTLogBucketResponse) => any;
}
/**
 * <p>Exception that indicates that a problem occurred with the service infrastructure. You
 *          can retry the request.</p>
 */
export interface InternalErrorException extends __SmithyException, $MetadataBearer {
    name: "InternalErrorException";
    $fault: "server";
    message?: string;
}
export declare namespace InternalErrorException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalErrorException) => any;
}
/**
 * <p>Exception that indicates that the operation would not cause any change to occur.</p>
 */
export interface InvalidOperationException extends __SmithyException, $MetadataBearer {
    name: "InvalidOperationException";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidOperationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidOperationException) => any;
}
/**
 * <p>Provides information about a particular parameter passed inside a request that resulted in an exception.</p>
 */
export interface ValidationExceptionField {
    /**
     * <p>The name of the parameter that failed validation.</p>
     */
    name: string | undefined;
    /**
     * <p>The message describing why the parameter failed validation.</p>
     */
    message: string | undefined;
}
export declare namespace ValidationExceptionField {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationExceptionField) => any;
}
export declare enum ValidationExceptionReason {
    FIELD_VALIDATION_FAILED = "FIELD_VALIDATION_FAILED",
    OTHER = "OTHER"
}
/**
 * <p>Exception that indicates that the parameters passed to the API are invalid. If available, this exception includes details in additional properties. </p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
    name: "InvalidParameterException";
    $fault: "client";
    message?: string;
    /**
     * <p>Additional information about the exception.</p>
     */
    reason?: ValidationExceptionReason | string;
    /**
     * <p>Fields that caused the exception.</p>
     */
    fields?: ValidationExceptionField[];
}
export declare namespace InvalidParameterException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidParameterException) => any;
}
/**
 * <p>Exception that indicates that the operation would exceed a limit.</p>
 */
export interface LimitsExceededException extends __SmithyException, $MetadataBearer {
    name: "LimitsExceededException";
    $fault: "client";
    message?: string;
    /**
     * <p>The type of limit that would be exceeded.</p>
     */
    Type?: string;
    /**
     * <p>The threshold that would be exceeded.</p>
     */
    Limit?: number;
}
export declare namespace LimitsExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LimitsExceededException) => any;
}
/**
 * <p>The ARN of the role that you specifed does not exist.</p>
 */
export interface NoAssociatedRoleException extends __SmithyException, $MetadataBearer {
    name: "NoAssociatedRoleException";
    $fault: "client";
    message?: string;
}
export declare namespace NoAssociatedRoleException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NoAssociatedRoleException) => any;
}
/**
 * <p>Exception that indicates that the resource state has been modified by another
 *          client. Retrieve the resource and then retry your request.</p>
 */
export interface OptimisticLockException extends __SmithyException, $MetadataBearer {
    name: "OptimisticLockException";
    $fault: "client";
    message?: string;
}
export declare namespace OptimisticLockException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OptimisticLockException) => any;
}
/**
 * <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    message?: string;
    /**
     * <p>Type of resource.</p>
     */
    resourceType?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
export interface AssociateDRTRoleRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the role the DRT will use to access your AWS account.</p>
     * 	        <p>Prior to making the <code>AssociateDRTRole</code> request, you must attach the <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy">AWSShieldDRTAccessPolicy</a> managed policy to this role.  For more information see <a href=" https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html">Attaching and Detaching IAM Policies</a>.</p>
     */
    RoleArn: string | undefined;
}
export declare namespace AssociateDRTRoleRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateDRTRoleRequest) => any;
}
export interface AssociateDRTRoleResponse {
}
export declare namespace AssociateDRTRoleResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateDRTRoleResponse) => any;
}
export interface AssociateHealthCheckRequest {
    /**
     * <p>The unique identifier (ID) for the <a>Protection</a> object to add the health check association to. </p>
     */
    ProtectionId: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the health check to associate with the protection.</p>
     */
    HealthCheckArn: string | undefined;
}
export declare namespace AssociateHealthCheckRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateHealthCheckRequest) => any;
}
export interface AssociateHealthCheckResponse {
}
export declare namespace AssociateHealthCheckResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateHealthCheckResponse) => any;
}
/**
 * <p>Contact information that the DRT can use to contact you if you have proactive engagement enabled, for escalations to the DRT and to initiate proactive customer support.</p>
 */
export interface EmergencyContact {
    /**
     * <p>The email address for the contact.</p>
     */
    EmailAddress: string | undefined;
    /**
     * <p>The phone number for the contact.</p>
     */
    PhoneNumber?: string;
    /**
     * <p>Additional notes regarding the contact. </p>
     */
    ContactNotes?: string;
}
export declare namespace EmergencyContact {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EmergencyContact) => any;
}
export interface AssociateProactiveEngagementDetailsRequest {
    /**
     * <p>A list of email addresses and phone numbers that the DDoS Response Team (DRT) can use to contact you for escalations to the DRT and to initiate proactive customer support. </p>
     *          <p>To enable proactive engagement, the contact list must include at least one phone number.</p>
     *          <note>
     *             <p>The contacts that you provide here replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using <code>DescribeEmergencyContactSettings</code> and then provide it here.  </p>
     *          </note>
     */
    EmergencyContactList: EmergencyContact[] | undefined;
}
export declare namespace AssociateProactiveEngagementDetailsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateProactiveEngagementDetailsRequest) => any;
}
export interface AssociateProactiveEngagementDetailsResponse {
}
export declare namespace AssociateProactiveEngagementDetailsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateProactiveEngagementDetailsResponse) => any;
}
/**
 * <p>The counter that describes a DDoS attack.</p>
 */
export interface SummarizedCounter {
    /**
     * <p>The counter name.</p>
     */
    Name?: string;
    /**
     * <p>The maximum value of the counter for a specified time period.</p>
     */
    Max?: number;
    /**
     * <p>The average value of the counter for a specified time period.</p>
     */
    Average?: number;
    /**
     * <p>The total of counter values for a specified time period.</p>
     */
    Sum?: number;
    /**
     * <p>The number of counters for a specified time period.</p>
     */
    N?: number;
    /**
     * <p>The unit of the counters.</p>
     */
    Unit?: string;
}
export declare namespace SummarizedCounter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SummarizedCounter) => any;
}
export declare enum AttackLayer {
    APPLICATION = "APPLICATION",
    NETWORK = "NETWORK"
}
export declare enum AttackPropertyIdentifier {
    DESTINATION_URL = "DESTINATION_URL",
    REFERRER = "REFERRER",
    SOURCE_ASN = "SOURCE_ASN",
    SOURCE_COUNTRY = "SOURCE_COUNTRY",
    SOURCE_IP_ADDRESS = "SOURCE_IP_ADDRESS",
    SOURCE_USER_AGENT = "SOURCE_USER_AGENT",
    WORDPRESS_PINGBACK_REFLECTOR = "WORDPRESS_PINGBACK_REFLECTOR",
    WORDPRESS_PINGBACK_SOURCE = "WORDPRESS_PINGBACK_SOURCE"
}
/**
 * <p>A contributor to the attack and their contribution.</p>
 */
export interface Contributor {
    /**
     * <p>The name of the contributor. This is dependent on the <code>AttackPropertyIdentifier</code>. For example, if the <code>AttackPropertyIdentifier</code> is <code>SOURCE_COUNTRY</code>, the <code>Name</code> could be <code>United States</code>.</p>
     */
    Name?: string;
    /**
     * <p>The contribution of this contributor expressed in <a>Protection</a> units. For example <code>10,000</code>.</p>
     */
    Value?: number;
}
export declare namespace Contributor {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Contributor) => any;
}
export declare enum Unit {
    BITS = "BITS",
    BYTES = "BYTES",
    PACKETS = "PACKETS",
    REQUESTS = "REQUESTS"
}
/**
 * <p>Details of the described attack.</p>
 */
export interface AttackProperty {
    /**
     * <p>The type of distributed denial of service (DDoS) event that was observed.
     *             <code>NETWORK</code> indicates layer 3 and layer 4 events and <code>APPLICATION</code>
     *          indicates layer 7 events.</p>
     */
    AttackLayer?: AttackLayer | string;
    /**
     * <p>Defines the DDoS attack property information that is provided. The
     *             <code>WORDPRESS_PINGBACK_REFLECTOR</code> and <code>WORDPRESS_PINGBACK_SOURCE</code>
     *          values are valid only for WordPress reflective pingback DDoS attacks.</p>
     */
    AttackPropertyIdentifier?: AttackPropertyIdentifier | string;
    /**
     * <p>The array of contributor objects that includes the top five contributors to an attack. </p>
     */
    TopContributors?: Contributor[];
    /**
     * <p>The unit of the <code>Value</code> of the contributions.</p>
     */
    Unit?: Unit | string;
    /**
     * <p>The total contributions made to this attack by all contributors, not just the five listed in the <code>TopContributors</code> list.</p>
     */
    Total?: number;
}
export declare namespace AttackProperty {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AttackProperty) => any;
}
/**
 * <p>The mitigation applied to a DDoS attack.</p>
 */
export interface Mitigation {
    /**
     * <p>The name of the mitigation taken for this attack.</p>
     */
    MitigationName?: string;
}
export declare namespace Mitigation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Mitigation) => any;
}
/**
 * <p>A summary of information about the attack.</p>
 */
export interface SummarizedAttackVector {
    /**
     * <p>The attack type, for example, SNMP reflection or SYN flood.</p>
     */
    VectorType: string | undefined;
    /**
     * <p>The list of counters that describe the details of the attack.</p>
     */
    VectorCounters?: SummarizedCounter[];
}
export declare namespace SummarizedAttackVector {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SummarizedAttackVector) => any;
}
export declare enum SubResourceType {
    IP = "IP",
    URL = "URL"
}
/**
 * <p>The attack information for the specified SubResource.</p>
 */
export interface SubResourceSummary {
    /**
     * <p>The <code>SubResource</code> type.</p>
     */
    Type?: SubResourceType | string;
    /**
     * <p>The unique identifier (ID) of the <code>SubResource</code>.</p>
     */
    Id?: string;
    /**
     * <p>The list of attack types and associated counters.</p>
     */
    AttackVectors?: SummarizedAttackVector[];
    /**
     * <p>The counters that describe the details of the attack.</p>
     */
    Counters?: SummarizedCounter[];
}
export declare namespace SubResourceSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SubResourceSummary) => any;
}
/**
 * <p>The details of a DDoS attack.</p>
 */
export interface AttackDetail {
    /**
     * <p>The unique identifier (ID) of the attack.</p>
     */
    AttackId?: string;
    /**
     * <p>The ARN (Amazon Resource Name) of the resource that was attacked.</p>
     */
    ResourceArn?: string;
    /**
     * <p>If applicable, additional detail about the resource being attacked, for example, IP address or URL.</p>
     */
    SubResources?: SubResourceSummary[];
    /**
     * <p>The time the attack started, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
     */
    StartTime?: Date;
    /**
     * <p>The time the attack ended, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
     */
    EndTime?: Date;
    /**
     * <p>List of counters that describe the attack for the specified time period.</p>
     */
    AttackCounters?: SummarizedCounter[];
    /**
     * <p>The array of <a>AttackProperty</a> objects.</p>
     */
    AttackProperties?: AttackProperty[];
    /**
     * <p>List of mitigation actions taken for the attack.</p>
     */
    Mitigations?: Mitigation[];
}
export declare namespace AttackDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AttackDetail) => any;
}
/**
 * <p>Statistics objects for the various data types in <a>AttackVolume</a>. </p>
 */
export interface AttackVolumeStatistics {
    /**
     * <p>The maximum attack volume observed for the given unit.</p>
     */
    Max: number | undefined;
}
export declare namespace AttackVolumeStatistics {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AttackVolumeStatistics) => any;
}
/**
 * <p>Information about the volume of attacks during the time period, included in an <a>AttackStatisticsDataItem</a>. If the accompanying <code>AttackCount</code> in the statistics object is zero, this setting might be empty.</p>
 */
export interface AttackVolume {
    /**
     * <p>A statistics object that uses bits per second as the unit. This is included for network level attacks. </p>
     */
    BitsPerSecond?: AttackVolumeStatistics;
    /**
     * <p>A statistics object that uses packets per second as the unit. This is included for network level attacks. </p>
     */
    PacketsPerSecond?: AttackVolumeStatistics;
    /**
     * <p>A statistics object that uses requests per second as the unit. This is included for application level attacks, and is only available for accounts that are subscribed to Shield Advanced.</p>
     */
    RequestsPerSecond?: AttackVolumeStatistics;
}
export declare namespace AttackVolume {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AttackVolume) => any;
}
/**
 * <p>A single attack statistics data record. This is returned by <a>DescribeAttackStatistics</a> along with a time range indicating the time period that the attack statistics apply to.  </p>
 */
export interface AttackStatisticsDataItem {
    /**
     * <p>Information about the volume of attacks during the time period. If the accompanying <code>AttackCount</code> is zero, this setting might be empty.</p>
     */
    AttackVolume?: AttackVolume;
    /**
     * <p>The number of attacks detected during the time period. This is always present, but might be zero. </p>
     */
    AttackCount: number | undefined;
}
export declare namespace AttackStatisticsDataItem {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AttackStatisticsDataItem) => any;
}
/**
 * <p>Describes the attack.</p>
 */
export interface AttackVectorDescription {
    /**
     * <p>The attack type. Valid values:</p>
     * 	        <ul>
     *             <li>
     *                <p>UDP_TRAFFIC</p>
     *             </li>
     *             <li>
     *                <p>UDP_FRAGMENT</p>
     *             </li>
     *             <li>
     *                <p>GENERIC_UDP_REFLECTION</p>
     *             </li>
     *             <li>
     *                <p>DNS_REFLECTION</p>
     *             </li>
     *             <li>
     *                <p>NTP_REFLECTION</p>
     *             </li>
     *             <li>
     *                <p>CHARGEN_REFLECTION</p>
     *             </li>
     *             <li>
     *                <p>SSDP_REFLECTION</p>
     *             </li>
     *             <li>
     *                <p>PORT_MAPPER</p>
     *             </li>
     *             <li>
     *                <p>RIP_REFLECTION</p>
     *             </li>
     *             <li>
     *                <p>SNMP_REFLECTION</p>
     *             </li>
     *             <li>
     *                <p>MSSQL_REFLECTION</p>
     *             </li>
     *             <li>
     *                <p>NET_BIOS_REFLECTION</p>
     *             </li>
     *             <li>
     *                <p>SYN_FLOOD</p>
     *             </li>
     *             <li>
     *                <p>ACK_FLOOD</p>
     *             </li>
     *             <li>
     *                <p>REQUEST_FLOOD</p>
     *             </li>
     *             <li>
     *                <p>HTTP_REFLECTION</p>
     *             </li>
     *             <li>
     *                <p>UDS_REFLECTION</p>
     *             </li>
     *             <li>
     *                <p>MEMCACHED_REFLECTION</p>
     *             </li>
     *          </ul>
     */
    VectorType: string | undefined;
}
export declare namespace AttackVectorDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AttackVectorDescription) => any;
}
/**
 * <p>Summarizes all DDoS attacks for a specified time period.</p>
 */
export interface AttackSummary {
    /**
     * <p>The unique identifier (ID) of the attack.</p>
     */
    AttackId?: string;
    /**
     * <p>The ARN (Amazon Resource Name) of the resource that was attacked.</p>
     */
    ResourceArn?: string;
    /**
     * <p>The start time of the attack, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
     */
    StartTime?: Date;
    /**
     * <p>The end time of the attack, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
     */
    EndTime?: Date;
    /**
     * <p>The list of attacks for a specified time period.</p>
     */
    AttackVectors?: AttackVectorDescription[];
}
export declare namespace AttackSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AttackSummary) => any;
}
export declare enum AutoRenew {
    DISABLED = "DISABLED",
    ENABLED = "ENABLED"
}
/**
 * <p>A tag associated with an AWS resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing or other management. Typically, the tag key represents a category, such as "environment", and the tag value represents a specific value within that category, such as "test," "development," or "production". Or you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each AWS resource, up to 50 tags for a resource.</p>
 */
export interface Tag {
    /**
     * <p>Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.</p>
     */
    Key?: string;
    /**
     * <p>Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.</p>
     */
    Value?: string;
}
export declare namespace Tag {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Tag) => any;
}
export interface CreateProtectionRequest {
    /**
     * <p>Friendly name for the <code>Protection</code> you are creating.</p>
     */
    Name: string | undefined;
    /**
     * <p>The ARN (Amazon Resource Name) of the resource to be protected.</p>
     *          <p>The ARN should be in one of the following formats:</p>
     *          <ul>
     *             <li>
     *                <p>For an Application Load Balancer: <code>arn:aws:elasticloadbalancing:<i>region</i>:<i>account-id</i>:loadbalancer/app/<i>load-balancer-name</i>/<i>load-balancer-id</i>
     *                   </code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>For an Elastic Load Balancer (Classic Load Balancer): <code>arn:aws:elasticloadbalancing:<i>region</i>:<i>account-id</i>:loadbalancer/<i>load-balancer-name</i>
     *                   </code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>For an AWS CloudFront distribution: <code>arn:aws:cloudfront::<i>account-id</i>:distribution/<i>distribution-id</i>
     *                   </code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>For an AWS Global Accelerator accelerator: <code>arn:aws:globalaccelerator::<i>account-id</i>:accelerator/<i>accelerator-id</i>
     *                   </code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>For Amazon Route 53: <code>arn:aws:route53:::hostedzone/<i>hosted-zone-id</i>
     *                   </code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>For an Elastic IP address: <code>arn:aws:ec2:<i>region</i>:<i>account-id</i>:eip-allocation/<i>allocation-id</i>
     *                   </code>
     *                </p>
     *             </li>
     *          </ul>
     */
    ResourceArn: string | undefined;
    /**
     * <p>One or more tag key-value pairs for the <a>Protection</a> object that is created.</p>
     */
    Tags?: Tag[];
}
export declare namespace CreateProtectionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateProtectionRequest) => any;
}
export interface CreateProtectionResponse {
    /**
     * <p>The unique identifier (ID) for the <a>Protection</a> object that is created.</p>
     */
    ProtectionId?: string;
}
export declare namespace CreateProtectionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateProtectionResponse) => any;
}
/**
 * <p>Exception that indicates that the resource is invalid. You might not have access to the resource, or the resource might not exist.</p>
 */
export interface InvalidResourceException extends __SmithyException, $MetadataBearer {
    name: "InvalidResourceException";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidResourceException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidResourceException) => any;
}
/**
 * <p>Exception indicating the specified resource already exists. If available, this exception includes details in additional properties. </p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
    name: "ResourceAlreadyExistsException";
    $fault: "client";
    message?: string;
    /**
     * <p>The type of resource that already exists.</p>
     */
    resourceType?: string;
}
export declare namespace ResourceAlreadyExistsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceAlreadyExistsException) => any;
}
export declare enum ProtectionGroupAggregation {
    MAX = "MAX",
    MEAN = "MEAN",
    SUM = "SUM"
}
export declare enum ProtectionGroupPattern {
    ALL = "ALL",
    ARBITRARY = "ARBITRARY",
    BY_RESOURCE_TYPE = "BY_RESOURCE_TYPE"
}
export declare enum ProtectedResourceType {
    APPLICATION_LOAD_BALANCER = "APPLICATION_LOAD_BALANCER",
    CLASSIC_LOAD_BALANCER = "CLASSIC_LOAD_BALANCER",
    CLOUDFRONT_DISTRIBUTION = "CLOUDFRONT_DISTRIBUTION",
    ELASTIC_IP_ALLOCATION = "ELASTIC_IP_ALLOCATION",
    GLOBAL_ACCELERATOR = "GLOBAL_ACCELERATOR",
    ROUTE_53_HOSTED_ZONE = "ROUTE_53_HOSTED_ZONE"
}
export interface CreateProtectionGroupRequest {
    /**
     * <p>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. </p>
     */
    ProtectionGroupId: string | undefined;
    /**
     * <p>Defines how AWS Shield combines resource data for the group in order to detect, mitigate, and report events.</p>
     *          <ul>
     *             <li>
     *                <p>Sum - Use the total traffic across the group. This is a good choice for most cases. Examples include Elastic IP addresses for EC2 instances that scale manually or automatically.</p>
     *             </li>
     *             <li>
     *                <p>Mean - Use the average of the traffic across the group. This is a good choice for resources that share traffic uniformly. Examples include accelerators and load balancers.</p>
     *             </li>
     *             <li>
     *                <p>Max - Use the highest traffic from each resource. This is useful for resources that don't share traffic and for resources that share that traffic in a non-uniform way. Examples include CloudFront distributions and origin resources for CloudFront distributions.</p>
     *             </li>
     *          </ul>
     */
    Aggregation: ProtectionGroupAggregation | string | undefined;
    /**
     * <p>The criteria to use to choose the protected resources for inclusion in the group. You can include all resources that have protections, provide a list of resource Amazon Resource Names (ARNs), or include all resources of a specified resource type. </p>
     */
    Pattern: ProtectionGroupPattern | string | undefined;
    /**
     * <p>The resource type to include in the protection group. All protected resources of this type are included in the protection group. Newly protected resources of this type are automatically added to the group.
     *            You must set this when you set <code>Pattern</code> to <code>BY_RESOURCE_TYPE</code> and you must not set it for any other <code>Pattern</code> setting. </p>
     */
    ResourceType?: ProtectedResourceType | string;
    /**
     * <p>The Amazon Resource Names (ARNs) of the resources to include in the protection group. You must set this when you set <code>Pattern</code> to <code>ARBITRARY</code> and you must not set it for any other <code>Pattern</code> setting. </p>
     */
    Members?: string[];
    /**
     * <p>One or more tag key-value pairs for the protection group.</p>
     */
    Tags?: Tag[];
}
export declare namespace CreateProtectionGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateProtectionGroupRequest) => any;
}
export interface CreateProtectionGroupResponse {
}
export declare namespace CreateProtectionGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateProtectionGroupResponse) => any;
}
export interface CreateSubscriptionRequest {
}
export declare namespace CreateSubscriptionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSubscriptionRequest) => any;
}
export interface CreateSubscriptionResponse {
}
export declare namespace CreateSubscriptionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSubscriptionResponse) => any;
}
export interface DeleteProtectionRequest {
    /**
     * <p>The unique identifier (ID) for the <a>Protection</a> object to be
     *          deleted.</p>
     */
    ProtectionId: string | undefined;
}
export declare namespace DeleteProtectionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteProtectionRequest) => any;
}
export interface DeleteProtectionResponse {
}
export declare namespace DeleteProtectionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteProtectionResponse) => any;
}
export interface DeleteProtectionGroupRequest {
    /**
     * <p>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. </p>
     */
    ProtectionGroupId: string | undefined;
}
export declare namespace DeleteProtectionGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteProtectionGroupRequest) => any;
}
export interface DeleteProtectionGroupResponse {
}
export declare namespace DeleteProtectionGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteProtectionGroupResponse) => any;
}
export interface DeleteSubscriptionRequest {
}
export declare namespace DeleteSubscriptionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSubscriptionRequest) => any;
}
export interface DeleteSubscriptionResponse {
}
export declare namespace DeleteSubscriptionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSubscriptionResponse) => any;
}
/**
 * <p>You are trying to update a subscription that has not yet completed the 1-year commitment. You can change the <code>AutoRenew</code> parameter during the last 30 days of your subscription. This exception indicates that you are attempting to change <code>AutoRenew</code> prior to that period.</p>
 */
export interface LockedSubscriptionException extends __SmithyException, $MetadataBearer {
    name: "LockedSubscriptionException";
    $fault: "client";
    message?: string;
}
export declare namespace LockedSubscriptionException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LockedSubscriptionException) => any;
}
export interface DescribeAttackRequest {
    /**
     * <p>The unique identifier (ID) for the attack that to be described.</p>
     */
    AttackId: string | undefined;
}
export declare namespace DescribeAttackRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAttackRequest) => any;
}
export interface DescribeAttackResponse {
    /**
     * <p>The attack that is described.</p>
     */
    Attack?: AttackDetail;
}
export declare namespace DescribeAttackResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAttackResponse) => any;
}
export interface DescribeAttackStatisticsRequest {
}
export declare namespace DescribeAttackStatisticsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAttackStatisticsRequest) => any;
}
/**
 * <p>The time range. </p>
 */
export interface TimeRange {
    /**
     * <p>The start time, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
     */
    FromInclusive?: Date;
    /**
     * <p>The end time, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
     */
    ToExclusive?: Date;
}
export declare namespace TimeRange {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TimeRange) => any;
}
export interface DescribeAttackStatisticsResponse {
    /**
     * <p>The time range. </p>
     */
    TimeRange: TimeRange | undefined;
    /**
     * <p>The data that describes the attacks detected during the time period.</p>
     */
    DataItems: AttackStatisticsDataItem[] | undefined;
}
export declare namespace DescribeAttackStatisticsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAttackStatisticsResponse) => any;
}
export interface DescribeDRTAccessRequest {
}
export declare namespace DescribeDRTAccessRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDRTAccessRequest) => any;
}
export interface DescribeDRTAccessResponse {
    /**
     * <p>The Amazon Resource Name (ARN) of the role the DRT used to access your AWS account.</p>
     */
    RoleArn?: string;
    /**
     * <p>The list of Amazon S3 buckets accessed by the DRT.</p>
     */
    LogBucketList?: string[];
}
export declare namespace DescribeDRTAccessResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDRTAccessResponse) => any;
}
export interface DescribeEmergencyContactSettingsRequest {
}
export declare namespace DescribeEmergencyContactSettingsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeEmergencyContactSettingsRequest) => any;
}
export interface DescribeEmergencyContactSettingsResponse {
    /**
     * <p>A list of email addresses and phone numbers that the DDoS Response Team (DRT) can use to contact you if you have proactive engagement enabled, for escalations to the DRT and to initiate proactive customer support.</p>
     */
    EmergencyContactList?: EmergencyContact[];
}
export declare namespace DescribeEmergencyContactSettingsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeEmergencyContactSettingsResponse) => any;
}
export interface DescribeProtectionRequest {
    /**
     * <p>The unique identifier (ID) for the <a>Protection</a> object that is
     *          described. When submitting the <code>DescribeProtection</code> request you must provide either the <code>ResourceArn</code> or the <code>ProtectionID</code>, but not both.</p>
     */
    ProtectionId?: string;
    /**
     * <p>The ARN (Amazon Resource Name) of the AWS resource for the <a>Protection</a> object that is
     *          described. When submitting the <code>DescribeProtection</code> request you must provide either the <code>ResourceArn</code> or the <code>ProtectionID</code>, but not both.</p>
     */
    ResourceArn?: string;
}
export declare namespace DescribeProtectionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProtectionRequest) => any;
}
/**
 * <p>An object that represents a resource that is under DDoS protection.</p>
 */
export interface Protection {
    /**
     * <p>The unique identifier (ID) of the protection.</p>
     */
    Id?: string;
    /**
     * <p>The name of the protection. For example, <code>My CloudFront distributions</code>.</p>
     */
    Name?: string;
    /**
     * <p>The ARN (Amazon Resource Name) of the AWS resource that is protected.</p>
     */
    ResourceArn?: string;
    /**
     * <p>The unique identifier (ID) for the Route 53 health check that's associated with the protection. </p>
     */
    HealthCheckIds?: string[];
    /**
     * <p>The ARN (Amazon Resource Name) of the protection.</p>
     */
    ProtectionArn?: string;
}
export declare namespace Protection {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Protection) => any;
}
export interface DescribeProtectionResponse {
    /**
     * <p>The <a>Protection</a> object that is described.</p>
     */
    Protection?: Protection;
}
export declare namespace DescribeProtectionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProtectionResponse) => any;
}
export interface DescribeProtectionGroupRequest {
    /**
     * <p>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. </p>
     */
    ProtectionGroupId: string | undefined;
}
export declare namespace DescribeProtectionGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProtectionGroupRequest) => any;
}
/**
 * <p>A grouping of protected resources that you and AWS Shield Advanced can monitor as a collective. This resource grouping improves the accuracy of detection and reduces false positives. </p>
 */
export interface ProtectionGroup {
    /**
     * <p>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. </p>
     */
    ProtectionGroupId: string | undefined;
    /**
     * <p>Defines how AWS Shield combines resource data for the group in order to detect, mitigate, and report events.</p>
     *          <ul>
     *             <li>
     *                <p>Sum - Use the total traffic across the group. This is a good choice for most cases. Examples include Elastic IP addresses for EC2 instances that scale manually or automatically.</p>
     *             </li>
     *             <li>
     *                <p>Mean - Use the average of the traffic across the group. This is a good choice for resources that share traffic uniformly. Examples include accelerators and load balancers.</p>
     *             </li>
     *             <li>
     *                <p>Max - Use the highest traffic from each resource. This is useful for resources that don't share traffic and for resources that share that traffic in a non-uniform way. Examples include CloudFront distributions and origin resources for CloudFront distributions.</p>
     *             </li>
     *          </ul>
     */
    Aggregation: ProtectionGroupAggregation | string | undefined;
    /**
     * <p>The criteria to use to choose the protected resources for inclusion in the group. You can include all resources that have protections, provide a list of resource Amazon Resource Names (ARNs), or include all resources of a specified resource type.</p>
     */
    Pattern: ProtectionGroupPattern | string | undefined;
    /**
     * <p>The resource type to include in the protection group. All protected resources of this type are included in the protection group.
     *            You must set this when you set <code>Pattern</code> to <code>BY_RESOURCE_TYPE</code> and you must not set it for any other <code>Pattern</code> setting. </p>
     */
    ResourceType?: ProtectedResourceType | string;
    /**
     * <p>The Amazon Resource Names (ARNs) of the resources to include in the protection group. You must set this when you set <code>Pattern</code> to <code>ARBITRARY</code> and you must not set it for any other <code>Pattern</code> setting. </p>
     */
    Members: string[] | undefined;
    /**
     * <p>The ARN (Amazon Resource Name) of the protection group.</p>
     */
    ProtectionGroupArn?: string;
}
export declare namespace ProtectionGroup {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProtectionGroup) => any;
}
export interface DescribeProtectionGroupResponse {
    /**
     * <p>A grouping of protected resources that you and AWS Shield Advanced can monitor as a collective. This resource grouping improves the accuracy of detection and reduces false positives. </p>
     */
    ProtectionGroup: ProtectionGroup | undefined;
}
export declare namespace DescribeProtectionGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProtectionGroupResponse) => any;
}
export interface DescribeSubscriptionRequest {
}
export declare namespace DescribeSubscriptionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeSubscriptionRequest) => any;
}
/**
 * <p>Specifies how many protections of a given type you can create.</p>
 */
export interface Limit {
    /**
     * <p>The type of protection.</p>
     */
    Type?: string;
    /**
     * <p>The maximum number of protections that can be created for the specified <code>Type</code>.</p>
     */
    Max?: number;
}
export declare namespace Limit {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Limit) => any;
}
export declare enum ProactiveEngagementStatus {
    DISABLED = "DISABLED",
    ENABLED = "ENABLED",
    PENDING = "PENDING"
}
/**
 * <p>Limits settings on protection groups with arbitrary pattern type. </p>
 */
export interface ProtectionGroupArbitraryPatternLimits {
    /**
     * <p>The maximum number of resources you can specify for a single arbitrary pattern in a protection group.</p>
     */
    MaxMembers: number | undefined;
}
export declare namespace ProtectionGroupArbitraryPatternLimits {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProtectionGroupArbitraryPatternLimits) => any;
}
/**
 * <p>Limits settings by pattern type in the protection groups for your subscription. </p>
 */
export interface ProtectionGroupPatternTypeLimits {
    /**
     * <p>Limits settings on protection groups with arbitrary pattern type. </p>
     */
    ArbitraryPatternLimits: ProtectionGroupArbitraryPatternLimits | undefined;
}
export declare namespace ProtectionGroupPatternTypeLimits {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProtectionGroupPatternTypeLimits) => any;
}
/**
 * <p>Limits settings on protection groups for your subscription. </p>
 */
export interface ProtectionGroupLimits {
    /**
     * <p>The maximum number of protection groups that you can have at one time. </p>
     */
    MaxProtectionGroups: number | undefined;
    /**
     * <p>Limits settings by pattern type in the protection groups for your subscription. </p>
     */
    PatternTypeLimits: ProtectionGroupPatternTypeLimits | undefined;
}
export declare namespace ProtectionGroupLimits {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProtectionGroupLimits) => any;
}
/**
 * <p>Limits settings on protections for your subscription. </p>
 */
export interface ProtectionLimits {
    /**
     * <p>The maximum number of resource types that you can specify in a protection.</p>
     */
    ProtectedResourceTypeLimits: Limit[] | undefined;
}
export declare namespace ProtectionLimits {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProtectionLimits) => any;
}
/**
 * <p>Limits settings for your subscription. </p>
 */
export interface SubscriptionLimits {
    /**
     * <p>Limits settings on protections for your subscription. </p>
     */
    ProtectionLimits: ProtectionLimits | undefined;
    /**
     * <p>Limits settings on protection groups for your subscription. </p>
     */
    ProtectionGroupLimits: ProtectionGroupLimits | undefined;
}
export declare namespace SubscriptionLimits {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SubscriptionLimits) => any;
}
/**
 * <p>Information about the AWS Shield Advanced subscription for an account.</p>
 */
export interface Subscription {
    /**
     * <p>The start time of the subscription, in Unix time in seconds. For more information see <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp</a>.</p>
     */
    StartTime?: Date;
    /**
     * <p>The date and time your subscription will end.</p>
     */
    EndTime?: Date;
    /**
     * <p>The length, in seconds, of the AWS Shield Advanced subscription for the account.</p>
     */
    TimeCommitmentInSeconds?: number;
    /**
     * <p>If <code>ENABLED</code>, the subscription will be automatically renewed at the end of the existing subscription period.</p>
     *          <p>When you initally create a subscription, <code>AutoRenew</code> is set to <code>ENABLED</code>. You can change this by submitting an <code>UpdateSubscription</code> request. If the <code>UpdateSubscription</code> request does not included a value for <code>AutoRenew</code>, the existing value for <code>AutoRenew</code> remains unchanged.</p>
     */
    AutoRenew?: AutoRenew | string;
    /**
     * <p>Specifies how many protections of a given type you can create.</p>
     */
    Limits?: Limit[];
    /**
     * <p>If <code>ENABLED</code>, the DDoS Response Team (DRT) will use email and phone to notify contacts about escalations to the DRT and to initiate proactive customer support.</p>
     *          <p>If <code>PENDING</code>, you have requested proactive engagement and the request is pending. The status changes to <code>ENABLED</code> when your request is fully processed.</p>
     *          <p>If <code>DISABLED</code>, the DRT will not proactively notify contacts about escalations or to initiate proactive customer support. </p>
     */
    ProactiveEngagementStatus?: ProactiveEngagementStatus | string;
    /**
     * <p>Limits settings for your subscription. </p>
     */
    SubscriptionLimits: SubscriptionLimits | undefined;
    /**
     * <p>The ARN (Amazon Resource Name) of the subscription.</p>
     */
    SubscriptionArn?: string;
}
export declare namespace Subscription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Subscription) => any;
}
export interface DescribeSubscriptionResponse {
    /**
     * <p>The AWS Shield Advanced subscription details for an account.</p>
     */
    Subscription?: Subscription;
}
export declare namespace DescribeSubscriptionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeSubscriptionResponse) => any;
}
export interface DisableProactiveEngagementRequest {
}
export declare namespace DisableProactiveEngagementRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisableProactiveEngagementRequest) => any;
}
export interface DisableProactiveEngagementResponse {
}
export declare namespace DisableProactiveEngagementResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisableProactiveEngagementResponse) => any;
}
export interface DisassociateDRTLogBucketRequest {
    /**
     * <p>The Amazon S3 bucket that contains your AWS WAF logs.</p>
     */
    LogBucket: string | undefined;
}
export declare namespace DisassociateDRTLogBucketRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateDRTLogBucketRequest) => any;
}
export interface DisassociateDRTLogBucketResponse {
}
export declare namespace DisassociateDRTLogBucketResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateDRTLogBucketResponse) => any;
}
export interface DisassociateDRTRoleRequest {
}
export declare namespace DisassociateDRTRoleRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateDRTRoleRequest) => any;
}
export interface DisassociateDRTRoleResponse {
}
export declare namespace DisassociateDRTRoleResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateDRTRoleResponse) => any;
}
export interface DisassociateHealthCheckRequest {
    /**
     * <p>The unique identifier (ID) for the <a>Protection</a> object to remove the health check association from. </p>
     */
    ProtectionId: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the health check that is associated with the protection.</p>
     */
    HealthCheckArn: string | undefined;
}
export declare namespace DisassociateHealthCheckRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateHealthCheckRequest) => any;
}
export interface DisassociateHealthCheckResponse {
}
export declare namespace DisassociateHealthCheckResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateHealthCheckResponse) => any;
}
export interface EnableProactiveEngagementRequest {
}
export declare namespace EnableProactiveEngagementRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnableProactiveEngagementRequest) => any;
}
export interface EnableProactiveEngagementResponse {
}
export declare namespace EnableProactiveEngagementResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnableProactiveEngagementResponse) => any;
}
export interface GetSubscriptionStateRequest {
}
export declare namespace GetSubscriptionStateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSubscriptionStateRequest) => any;
}
export declare enum SubscriptionState {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}
export interface GetSubscriptionStateResponse {
    /**
     * <p>The status of the subscription.</p>
     */
    SubscriptionState: SubscriptionState | string | undefined;
}
export declare namespace GetSubscriptionStateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSubscriptionStateResponse) => any;
}
export interface ListAttacksRequest {
    /**
     * <p>The ARN (Amazon Resource Name) of the resource that was attacked. If this is left
     *          blank, all applicable resources for this account will be included.</p>
     */
    ResourceArns?: string[];
    /**
     * <p>The start of the time period for the attacks. This is a <code>timestamp</code> type. The sample request above indicates a <code>number</code> type because the default used by WAF is Unix time in seconds. However any valid <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp format</a>  is allowed.  </p>
     */
    StartTime?: TimeRange;
    /**
     * <p>The end of the time period for the attacks. This is a <code>timestamp</code> type. The sample request above indicates a <code>number</code> type because the default used by WAF is Unix time in seconds. However any valid <a href="http://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#parameter-types">timestamp format</a>  is allowed.  </p>
     */
    EndTime?: TimeRange;
    /**
     * <p>The <code>ListAttacksRequest.NextMarker</code> value from a previous call to <code>ListAttacksRequest</code>. Pass null if this is the first call.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of <a>AttackSummary</a> objects to return. If you leave this blank,
     *          Shield Advanced returns the first 20 results.</p>
     *          <p>This is a maximum value. Shield Advanced might return the results in smaller batches. That is, the number of objects returned could be less than <code>MaxResults</code>, even if there are still more objects yet to return. If there are more objects to return, Shield Advanced returns a value in <code>NextToken</code> that you can use in your next request, to get the next batch of objects.</p>
     */
    MaxResults?: number;
}
export declare namespace ListAttacksRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAttacksRequest) => any;
}
export interface ListAttacksResponse {
    /**
     * <p>The attack information for the specified time range.</p>
     */
    AttackSummaries?: AttackSummary[];
    /**
     * <p>The token returned by a previous call to indicate that there is more data available.
     *          If not null, more results are available. Pass this value for the <code>NextMarker</code>
     *          parameter in a subsequent call to <code>ListAttacks</code> to retrieve the next set of
     *          items.</p>
     *          <p>Shield Advanced might return the list of <a>AttackSummary</a> objects in batches smaller than the number specified by MaxResults. If there are more attack summary objects to return, Shield Advanced will always also return a <code>NextToken</code>.</p>
     */
    NextToken?: string;
}
export declare namespace ListAttacksResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAttacksResponse) => any;
}
/**
 * <p>Exception that indicates that the NextToken specified in the request is invalid. Submit the request using the NextToken value that was returned in the response.</p>
 */
export interface InvalidPaginationTokenException extends __SmithyException, $MetadataBearer {
    name: "InvalidPaginationTokenException";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidPaginationTokenException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidPaginationTokenException) => any;
}
export interface ListProtectionGroupsRequest {
    /**
     * <p>The next token value from a previous call to <code>ListProtectionGroups</code>. Pass null if this is the first call.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of <a>ProtectionGroup</a> objects to return. If you leave this blank,
     *          Shield Advanced returns the first 20 results.</p>
     *          <p>This is a maximum value. Shield Advanced might return the results in smaller batches. That is, the number of objects returned could be less than <code>MaxResults</code>, even if there are still more objects yet to return. If there are more objects to return, Shield Advanced returns a value in <code>NextToken</code> that you can use in your next request, to get the next batch of objects.</p>
     */
    MaxResults?: number;
}
export declare namespace ListProtectionGroupsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProtectionGroupsRequest) => any;
}
export interface ListProtectionGroupsResponse {
    /**
     * <p></p>
     */
    ProtectionGroups: ProtectionGroup[] | undefined;
    /**
     * <p>If you specify a value for <code>MaxResults</code> and you have more protection groups than the value of MaxResults, AWS Shield Advanced returns this token that you can use in your next request, to get the next batch of objects. </p>
     */
    NextToken?: string;
}
export declare namespace ListProtectionGroupsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProtectionGroupsResponse) => any;
}
export interface ListProtectionsRequest {
    /**
     * <p>The <code>ListProtectionsRequest.NextToken</code> value from a previous call to <code>ListProtections</code>. Pass null if this is the first call.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of <a>Protection</a> objects to return. If you leave this blank,
     *          Shield Advanced returns the first 20 results.</p>
     *          <p>This is a maximum value. Shield Advanced might return the results in smaller batches. That is, the number of objects returned could be less than <code>MaxResults</code>, even if there are still more objects yet to return. If there are more objects to return, Shield Advanced returns a value in <code>NextToken</code> that you can use in your next request, to get the next batch of objects.</p>
     */
    MaxResults?: number;
}
export declare namespace ListProtectionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProtectionsRequest) => any;
}
export interface ListProtectionsResponse {
    /**
     * <p>The array of enabled <a>Protection</a> objects.</p>
     */
    Protections?: Protection[];
    /**
     * <p>If you specify a value for <code>MaxResults</code> and you have more Protections than the value of MaxResults, AWS Shield Advanced returns a NextToken value in the response that allows you to list another group of Protections. For the second and subsequent ListProtections requests, specify the value of NextToken from the previous response to get information about another batch of Protections.</p>
     *          <p>Shield Advanced might return the list of <a>Protection</a> objects in batches smaller than the number specified by MaxResults. If there are more <a>Protection</a> objects to return, Shield Advanced will always also return a <code>NextToken</code>.</p>
     */
    NextToken?: string;
}
export declare namespace ListProtectionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProtectionsResponse) => any;
}
export interface ListResourcesInProtectionGroupRequest {
    /**
     * <p>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. </p>
     */
    ProtectionGroupId: string | undefined;
    /**
     * <p>The next token value from a previous call to <code>ListResourcesInProtectionGroup</code>. Pass null if this is the first call.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of resource ARN objects to return. If you leave this blank,
     *          Shield Advanced returns the first 20 results.</p>
     *          <p>This is a maximum value. Shield Advanced might return the results in smaller batches. That is, the number of objects returned could be less than <code>MaxResults</code>, even if there are still more objects yet to return. If there are more objects to return, Shield Advanced returns a value in <code>NextToken</code> that you can use in your next request, to get the next batch of objects.</p>
     */
    MaxResults?: number;
}
export declare namespace ListResourcesInProtectionGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListResourcesInProtectionGroupRequest) => any;
}
export interface ListResourcesInProtectionGroupResponse {
    /**
     * <p>The Amazon Resource Names (ARNs) of the resources that are included in the protection group.</p>
     */
    ResourceArns: string[] | undefined;
    /**
     * <p>If you specify a value for <code>MaxResults</code> and you have more resources in the protection group than the value of MaxResults, AWS Shield Advanced returns this token that you can use in your next request, to get the next batch of objects. </p>
     */
    NextToken?: string;
}
export declare namespace ListResourcesInProtectionGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListResourcesInProtectionGroupResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource to get tags for.</p>
     */
    ResourceARN: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResponse {
    /**
     * <p>A list of tag key and value pairs associated with the specified resource.</p>
     */
    Tags?: Tag[];
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource that you want to add or update tags for.</p>
     */
    ResourceARN: string | undefined;
    /**
     * <p>The tags that you want to modify or add to the resource.</p>
     */
    Tags: Tag[] | undefined;
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
     * <p>The Amazon Resource Name (ARN) of the resource that you want to remove tags from.</p>
     */
    ResourceARN: string | undefined;
    /**
     * <p>The tag key for each tag that you want to remove from the resource.</p>
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
export interface UpdateEmergencyContactSettingsRequest {
    /**
     * <p>A list of email addresses and phone numbers that the DDoS Response Team (DRT) can use to contact you if you have proactive engagement enabled, for escalations to the DRT and to initiate proactive customer support.</p>
     *          <p>If you have proactive engagement enabled, the contact list must include at least one phone number.</p>
     */
    EmergencyContactList?: EmergencyContact[];
}
export declare namespace UpdateEmergencyContactSettingsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateEmergencyContactSettingsRequest) => any;
}
export interface UpdateEmergencyContactSettingsResponse {
}
export declare namespace UpdateEmergencyContactSettingsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateEmergencyContactSettingsResponse) => any;
}
export interface UpdateProtectionGroupRequest {
    /**
     * <p>The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it. </p>
     */
    ProtectionGroupId: string | undefined;
    /**
     * <p>Defines how AWS Shield combines resource data for the group in order to detect, mitigate, and report events.</p>
     *          <ul>
     *             <li>
     *                <p>Sum - Use the total traffic across the group. This is a good choice for most cases. Examples include Elastic IP addresses for EC2 instances that scale manually or automatically.</p>
     *             </li>
     *             <li>
     *                <p>Mean - Use the average of the traffic across the group. This is a good choice for resources that share traffic uniformly. Examples include accelerators and load balancers.</p>
     *             </li>
     *             <li>
     *                <p>Max - Use the highest traffic from each resource. This is useful for resources that don't share traffic and for resources that share that traffic in a non-uniform way. Examples include CloudFront distributions and origin resources for CloudFront distributions.</p>
     *             </li>
     *          </ul>
     */
    Aggregation: ProtectionGroupAggregation | string | undefined;
    /**
     * <p>The criteria to use to choose the protected resources for inclusion in the group. You can include all resources that have protections, provide a list of resource Amazon Resource Names (ARNs), or include all resources of a specified resource type.</p>
     */
    Pattern: ProtectionGroupPattern | string | undefined;
    /**
     * <p>The resource type to include in the protection group. All protected resources of this type are included in the protection group.
     *            You must set this when you set <code>Pattern</code> to <code>BY_RESOURCE_TYPE</code> and you must not set it for any other <code>Pattern</code> setting. </p>
     */
    ResourceType?: ProtectedResourceType | string;
    /**
     * <p>The Amazon Resource Names (ARNs) of the resources to include in the protection group. You must set this when you set <code>Pattern</code> to <code>ARBITRARY</code> and you must not set it for any other <code>Pattern</code> setting. </p>
     */
    Members?: string[];
}
export declare namespace UpdateProtectionGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateProtectionGroupRequest) => any;
}
export interface UpdateProtectionGroupResponse {
}
export declare namespace UpdateProtectionGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateProtectionGroupResponse) => any;
}
export interface UpdateSubscriptionRequest {
    /**
     * <p>When you initally create a subscription, <code>AutoRenew</code> is set to <code>ENABLED</code>. If <code>ENABLED</code>, the subscription will be automatically renewed at the end of the existing subscription period. You can change this by submitting an <code>UpdateSubscription</code> request. If the <code>UpdateSubscription</code> request does not included a value for <code>AutoRenew</code>, the existing value for <code>AutoRenew</code> remains unchanged.</p>
     */
    AutoRenew?: AutoRenew | string;
}
export declare namespace UpdateSubscriptionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateSubscriptionRequest) => any;
}
export interface UpdateSubscriptionResponse {
}
export declare namespace UpdateSubscriptionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateSubscriptionResponse) => any;
}
