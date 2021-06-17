import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>Information about the <code>AccessLog</code> attribute.</p>
 */
export interface AccessLog {
    /**
     * <p>Specifies whether access logs are enabled for the load balancer.</p>
     */
    Enabled: boolean | undefined;
    /**
     * <p>The name of the Amazon S3 bucket where the access logs are stored.</p>
     */
    S3BucketName?: string;
    /**
     * <p>The interval for publishing the access logs. You can specify an interval of either 5 minutes or 60 minutes.</p>
     *         <p>Default: 60 minutes</p>
     */
    EmitInterval?: number;
    /**
     * <p>The logical hierarchy you created for your Amazon S3 bucket, for example <code>my-bucket-prefix/prod</code>.
     *             If the prefix is not provided, the log is placed at the root level of the bucket.</p>
     */
    S3BucketPrefix?: string;
}
export declare namespace AccessLog {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessLog) => any;
}
/**
 * <p>The specified load balancer does not exist.</p>
 */
export interface AccessPointNotFoundException extends __SmithyException, $MetadataBearer {
    name: "AccessPointNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace AccessPointNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessPointNotFoundException) => any;
}
/**
 * <p>Contains the parameters for EnableAvailabilityZonesForLoadBalancer.</p>
 */
export interface AddAvailabilityZonesInput {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName: string | undefined;
    /**
     * <p>The Availability Zones. These must be in the same region as the load balancer.</p>
     */
    AvailabilityZones: string[] | undefined;
}
export declare namespace AddAvailabilityZonesInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AddAvailabilityZonesInput) => any;
}
/**
 * <p>Contains the output of EnableAvailabilityZonesForLoadBalancer.</p>
 */
export interface AddAvailabilityZonesOutput {
    /**
     * <p>The updated list of Availability Zones for the load balancer.</p>
     */
    AvailabilityZones?: string[];
}
export declare namespace AddAvailabilityZonesOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AddAvailabilityZonesOutput) => any;
}
/**
 * <p>Information about additional load balancer attributes.</p>
 */
export interface AdditionalAttribute {
    /**
     * <p>The name of the attribute.</p>
     *         <p>The following attribute is supported.</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>elb.http.desyncmitigationmode</code> - Determines how the load balancer handles requests that
     *                     might pose a security risk to your application. The possible values are <code>monitor</code>,
     *                     <code>defensive</code>, and <code>strictest</code>. The default is <code>defensive</code>.</p>
     *             </li>
     *          </ul>
     */
    Key?: string;
    /**
     * <p>This value of the attribute.</p>
     */
    Value?: string;
}
export declare namespace AdditionalAttribute {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AdditionalAttribute) => any;
}
/**
 * <p>Information about a tag.</p>
 */
export interface Tag {
    /**
     * <p>The key of the tag.</p>
     */
    Key: string | undefined;
    /**
     * <p>The value of the tag.</p>
     */
    Value?: string;
}
export declare namespace Tag {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Tag) => any;
}
/**
 * <p>Contains the parameters for AddTags.</p>
 */
export interface AddTagsInput {
    /**
     * <p>The name of the load balancer. You can specify one load balancer only.</p>
     */
    LoadBalancerNames: string[] | undefined;
    /**
     * <p>The tags.</p>
     */
    Tags: Tag[] | undefined;
}
export declare namespace AddTagsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AddTagsInput) => any;
}
/**
 * <p>Contains the output of AddTags.</p>
 */
export interface AddTagsOutput {
}
export declare namespace AddTagsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AddTagsOutput) => any;
}
/**
 * <p>A tag key was specified more than once.</p>
 */
export interface DuplicateTagKeysException extends __SmithyException, $MetadataBearer {
    name: "DuplicateTagKeysException";
    $fault: "client";
    Message?: string;
}
export declare namespace DuplicateTagKeysException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DuplicateTagKeysException) => any;
}
/**
 * <p>The quota for the number of tags that can be assigned to a load balancer has been reached.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
    name: "TooManyTagsException";
    $fault: "client";
    Message?: string;
}
export declare namespace TooManyTagsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TooManyTagsException) => any;
}
/**
 * <p>Information about a policy for application-controlled session stickiness.</p>
 */
export interface AppCookieStickinessPolicy {
    /**
     * <p>The mnemonic name for the policy being created. The name must be unique within a set of policies for this load balancer.</p>
     */
    PolicyName?: string;
    /**
     * <p>The name of the application cookie used for stickiness.</p>
     */
    CookieName?: string;
}
export declare namespace AppCookieStickinessPolicy {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AppCookieStickinessPolicy) => any;
}
/**
 * <p>Contains the parameters for ApplySecurityGroupsToLoadBalancer.</p>
 */
export interface ApplySecurityGroupsToLoadBalancerInput {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName: string | undefined;
    /**
     * <p>The IDs of the security groups to associate with the load balancer. Note that you cannot specify the name of the security group.</p>
     */
    SecurityGroups: string[] | undefined;
}
export declare namespace ApplySecurityGroupsToLoadBalancerInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ApplySecurityGroupsToLoadBalancerInput) => any;
}
/**
 * <p>Contains the output of ApplySecurityGroupsToLoadBalancer.</p>
 */
export interface ApplySecurityGroupsToLoadBalancerOutput {
    /**
     * <p>The IDs of the security groups associated with the load balancer.</p>
     */
    SecurityGroups?: string[];
}
export declare namespace ApplySecurityGroupsToLoadBalancerOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ApplySecurityGroupsToLoadBalancerOutput) => any;
}
/**
 * <p>The requested configuration change is not valid.</p>
 */
export interface InvalidConfigurationRequestException extends __SmithyException, $MetadataBearer {
    name: "InvalidConfigurationRequestException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidConfigurationRequestException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidConfigurationRequestException) => any;
}
/**
 * <p>One or more of the specified security groups do not exist.</p>
 */
export interface InvalidSecurityGroupException extends __SmithyException, $MetadataBearer {
    name: "InvalidSecurityGroupException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidSecurityGroupException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidSecurityGroupException) => any;
}
/**
 * <p>Contains the parameters for AttachLoaBalancerToSubnets.</p>
 */
export interface AttachLoadBalancerToSubnetsInput {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName: string | undefined;
    /**
     * <p>The IDs of the subnets to add. You can add only one subnet per Availability Zone.</p>
     */
    Subnets: string[] | undefined;
}
export declare namespace AttachLoadBalancerToSubnetsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AttachLoadBalancerToSubnetsInput) => any;
}
/**
 * <p>Contains the output of AttachLoadBalancerToSubnets.</p>
 */
export interface AttachLoadBalancerToSubnetsOutput {
    /**
     * <p>The IDs of the subnets attached to the load balancer.</p>
     */
    Subnets?: string[];
}
export declare namespace AttachLoadBalancerToSubnetsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AttachLoadBalancerToSubnetsOutput) => any;
}
/**
 * <p>The specified VPC has no associated Internet gateway.</p>
 */
export interface InvalidSubnetException extends __SmithyException, $MetadataBearer {
    name: "InvalidSubnetException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidSubnetException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidSubnetException) => any;
}
/**
 * <p>One or more of the specified subnets do not exist.</p>
 */
export interface SubnetNotFoundException extends __SmithyException, $MetadataBearer {
    name: "SubnetNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace SubnetNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SubnetNotFoundException) => any;
}
/**
 * <p>Information about the configuration of an EC2 instance.</p>
 */
export interface BackendServerDescription {
    /**
     * <p>The port on which the EC2 instance is listening.</p>
     */
    InstancePort?: number;
    /**
     * <p>The names of the policies enabled for the EC2 instance.</p>
     */
    PolicyNames?: string[];
}
export declare namespace BackendServerDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BackendServerDescription) => any;
}
/**
 * <p>The specified ARN does not refer to a valid SSL certificate in AWS Identity and Access Management (IAM)
 *             or AWS Certificate Manager (ACM). Note that if you recently uploaded the certificate to IAM, this error might
 *             indicate that the certificate is not fully available yet.</p>
 */
export interface CertificateNotFoundException extends __SmithyException, $MetadataBearer {
    name: "CertificateNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace CertificateNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CertificateNotFoundException) => any;
}
/**
 * <p>Information about a health check.</p>
 */
export interface HealthCheck {
    /**
     * <p>The instance being checked. The protocol is either TCP, HTTP, HTTPS, or SSL. The range of valid ports is one (1) through 65535.</p>
     *         <p>TCP is the default, specified as a TCP: port pair, for example "TCP:5000". In this case, a health check simply attempts to open a TCP connection to the instance on the specified port. Failure to connect within the configured timeout is considered unhealthy.</p>
     *         <p>SSL is also specified as SSL: port pair, for example, SSL:5000.</p>
     *         <p>For HTTP/HTTPS, you must include a ping path in the string. HTTP is specified as a HTTP:port;/;PathToPing; grouping, for example "HTTP:80/weather/us/wa/seattle". In this case, a HTTP GET request is issued to the instance on the given port and path. Any answer other than "200 OK" within the timeout period is considered unhealthy.</p>
     *          <p>The total length of the HTTP ping target must be 1024 16-bit Unicode characters or less.</p>
     */
    Target: string | undefined;
    /**
     * <p>The approximate interval, in seconds, between health checks of an individual instance.</p>
     */
    Interval: number | undefined;
    /**
     * <p>The amount of time, in seconds, during which no response means a failed health check.</p>
     *         <p>This value must be less than the <code>Interval</code> value.</p>
     */
    Timeout: number | undefined;
    /**
     * <p>The number of consecutive health check failures required before moving the instance to the <code>Unhealthy</code> state.</p>
     */
    UnhealthyThreshold: number | undefined;
    /**
     * <p>The number of consecutive health checks successes required before moving the instance to the <code>Healthy</code> state.</p>
     */
    HealthyThreshold: number | undefined;
}
export declare namespace HealthCheck {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: HealthCheck) => any;
}
/**
 * <p>Contains the parameters for ConfigureHealthCheck.</p>
 */
export interface ConfigureHealthCheckInput {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName: string | undefined;
    /**
     * <p>The configuration information.</p>
     */
    HealthCheck: HealthCheck | undefined;
}
export declare namespace ConfigureHealthCheckInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConfigureHealthCheckInput) => any;
}
/**
 * <p>Contains the output of ConfigureHealthCheck.</p>
 */
export interface ConfigureHealthCheckOutput {
    /**
     * <p>The updated health check.</p>
     */
    HealthCheck?: HealthCheck;
}
export declare namespace ConfigureHealthCheckOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConfigureHealthCheckOutput) => any;
}
/**
 * <p>Information about the <code>ConnectionDraining</code> attribute.</p>
 */
export interface ConnectionDraining {
    /**
     * <p>Specifies whether connection draining is enabled for the load balancer.</p>
     */
    Enabled: boolean | undefined;
    /**
     * <p>The maximum time, in seconds, to keep the existing connections open before deregistering the instances.</p>
     */
    Timeout?: number;
}
export declare namespace ConnectionDraining {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConnectionDraining) => any;
}
/**
 * <p>Information about the <code>ConnectionSettings</code> attribute.</p>
 */
export interface ConnectionSettings {
    /**
     * <p>The time, in seconds, that the connection is allowed to be idle (no data has been sent over the connection) before it is closed by the load balancer.</p>
     */
    IdleTimeout: number | undefined;
}
export declare namespace ConnectionSettings {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConnectionSettings) => any;
}
/**
 * <p>Information about a listener.</p>
 *         <p>For information about the protocols and the ports supported by Elastic Load Balancing, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 */
export interface Listener {
    /**
     * <p>The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL.</p>
     */
    Protocol: string | undefined;
    /**
     * <p>The port on which the load balancer is listening. On EC2-VPC, you can specify any port from the range 1-65535. On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587, 1024-65535.</p>
     */
    LoadBalancerPort: number | undefined;
    /**
     * <p>The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL.</p>
     *          <p>If the front-end protocol is TCP or SSL, the back-end protocol must be TCP or SSL.
     *            If the front-end protocol is HTTP or HTTPS, the back-end protocol must be HTTP or HTTPS.</p>
     *          <p>If there is another listener with the same <code>InstancePort</code> whose <code>InstanceProtocol</code> is secure,
     *           (HTTPS or SSL), the listener's <code>InstanceProtocol</code> must also be secure.</p>
     *         <p>If there is another listener with the same <code>InstancePort</code> whose <code>InstanceProtocol</code> is HTTP or TCP,
     *            the listener's <code>InstanceProtocol</code> must be HTTP or TCP.</p>
     */
    InstanceProtocol?: string;
    /**
     * <p>The port on which the instance is listening.</p>
     */
    InstancePort: number | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the server certificate.</p>
     */
    SSLCertificateId?: string;
}
export declare namespace Listener {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Listener) => any;
}
/**
 * <p>Contains the parameters for CreateLoadBalancer.</p>
 */
export interface CreateAccessPointInput {
    /**
     * <p>The name of the load balancer.</p>
     *         <p>This name must be unique within your set of load balancers for the region, must have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and cannot begin or end with a hyphen.</p>
     */
    LoadBalancerName: string | undefined;
    /**
     * <p>The listeners.</p>
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a>
     *             in the <i>Classic Load Balancers Guide</i>.</p>
     */
    Listeners: Listener[] | undefined;
    /**
     * <p>One or more Availability Zones from the same region as the load balancer.</p>
     *         <p>You must specify at least one Availability Zone.</p>
     *         <p>You can add more Availability Zones after you create the load balancer using
     *             <a>EnableAvailabilityZonesForLoadBalancer</a>.</p>
     */
    AvailabilityZones?: string[];
    /**
     * <p>The IDs of the subnets in your VPC to attach to the load balancer.
     *             Specify one subnet per Availability Zone specified in <code>AvailabilityZones</code>.</p>
     */
    Subnets?: string[];
    /**
     * <p>The IDs of the security groups to assign to the load balancer.</p>
     */
    SecurityGroups?: string[];
    /**
     * <p>The type of a load balancer. Valid only for load balancers in a VPC.</p>
     *         <p>By default, Elastic Load Balancing creates an Internet-facing load balancer with a DNS name that resolves to public IP addresses.
     *             For more information about Internet-facing and Internal load balancers, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html#load-balancer-scheme">Load Balancer Scheme</a>
     *             in the <i>Elastic Load Balancing User Guide</i>.</p>
     *         <p>Specify <code>internal</code> to create a load balancer with a DNS name that resolves to private IP addresses.</p>
     */
    Scheme?: string;
    /**
     * <p>A list of tags to assign to the load balancer.</p>
     *         <p>For more information about tagging your load balancer, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/add-remove-tags.html">Tag Your Classic Load Balancer</a>
     *             in the <i>Classic Load Balancers Guide</i>.</p>
     */
    Tags?: Tag[];
}
export declare namespace CreateAccessPointInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateAccessPointInput) => any;
}
/**
 * <p>Contains the output for CreateLoadBalancer.</p>
 */
export interface CreateAccessPointOutput {
    /**
     * <p>The DNS name of the load balancer.</p>
     */
    DNSName?: string;
}
export declare namespace CreateAccessPointOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateAccessPointOutput) => any;
}
/**
 * <p>Contains the parameters for CreateAppCookieStickinessPolicy.</p>
 */
export interface CreateAppCookieStickinessPolicyInput {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName: string | undefined;
    /**
     * <p>The name of the policy being created. Policy names must consist of alphanumeric characters and dashes (-). This name must be unique within the set of policies for this load balancer.</p>
     */
    PolicyName: string | undefined;
    /**
     * <p>The name of the application cookie used for stickiness.</p>
     */
    CookieName: string | undefined;
}
export declare namespace CreateAppCookieStickinessPolicyInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateAppCookieStickinessPolicyInput) => any;
}
/**
 * <p>Contains the output for CreateAppCookieStickinessPolicy.</p>
 */
export interface CreateAppCookieStickinessPolicyOutput {
}
export declare namespace CreateAppCookieStickinessPolicyOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateAppCookieStickinessPolicyOutput) => any;
}
/**
 * <p>A policy with the specified name already exists for this load balancer.</p>
 */
export interface DuplicatePolicyNameException extends __SmithyException, $MetadataBearer {
    name: "DuplicatePolicyNameException";
    $fault: "client";
    Message?: string;
}
export declare namespace DuplicatePolicyNameException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DuplicatePolicyNameException) => any;
}
/**
 * <p>The quota for the number of policies for this load balancer has been reached.</p>
 */
export interface TooManyPoliciesException extends __SmithyException, $MetadataBearer {
    name: "TooManyPoliciesException";
    $fault: "client";
    Message?: string;
}
export declare namespace TooManyPoliciesException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TooManyPoliciesException) => any;
}
/**
 * <p>Contains the parameters for CreateLBCookieStickinessPolicy.</p>
 */
export interface CreateLBCookieStickinessPolicyInput {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName: string | undefined;
    /**
     * <p>The name of the policy being created. Policy names must consist of alphanumeric characters and dashes (-). This name must be unique within the set of policies for this load balancer.</p>
     */
    PolicyName: string | undefined;
    /**
     * <p>The time period, in seconds, after which the cookie should be considered stale. If you do not specify this parameter, the default value is 0, which indicates that the sticky session should last for the duration of the browser session.</p>
     */
    CookieExpirationPeriod?: number;
}
export declare namespace CreateLBCookieStickinessPolicyInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLBCookieStickinessPolicyInput) => any;
}
/**
 * <p>Contains the output for CreateLBCookieStickinessPolicy.</p>
 */
export interface CreateLBCookieStickinessPolicyOutput {
}
export declare namespace CreateLBCookieStickinessPolicyOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLBCookieStickinessPolicyOutput) => any;
}
/**
 * <p>The specified load balancer name already exists for this account.</p>
 */
export interface DuplicateAccessPointNameException extends __SmithyException, $MetadataBearer {
    name: "DuplicateAccessPointNameException";
    $fault: "client";
    Message?: string;
}
export declare namespace DuplicateAccessPointNameException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DuplicateAccessPointNameException) => any;
}
/**
 * <p>The specified value for the schema is not valid. You can only specify a scheme for load balancers in a VPC.</p>
 */
export interface InvalidSchemeException extends __SmithyException, $MetadataBearer {
    name: "InvalidSchemeException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidSchemeException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidSchemeException) => any;
}
/**
 * <p>This operation is not allowed.</p>
 */
export interface OperationNotPermittedException extends __SmithyException, $MetadataBearer {
    name: "OperationNotPermittedException";
    $fault: "client";
    Message?: string;
}
export declare namespace OperationNotPermittedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OperationNotPermittedException) => any;
}
/**
 * <p>The quota for the number of load balancers has been reached.</p>
 */
export interface TooManyAccessPointsException extends __SmithyException, $MetadataBearer {
    name: "TooManyAccessPointsException";
    $fault: "client";
    Message?: string;
}
export declare namespace TooManyAccessPointsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TooManyAccessPointsException) => any;
}
/**
 * <p>The specified protocol or signature version is not supported.</p>
 */
export interface UnsupportedProtocolException extends __SmithyException, $MetadataBearer {
    name: "UnsupportedProtocolException";
    $fault: "client";
    Message?: string;
}
export declare namespace UnsupportedProtocolException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnsupportedProtocolException) => any;
}
/**
 * <p>Contains the parameters for CreateLoadBalancerListeners.</p>
 */
export interface CreateLoadBalancerListenerInput {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName: string | undefined;
    /**
     * <p>The listeners.</p>
     */
    Listeners: Listener[] | undefined;
}
export declare namespace CreateLoadBalancerListenerInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLoadBalancerListenerInput) => any;
}
/**
 * <p>Contains the parameters for CreateLoadBalancerListener.</p>
 */
export interface CreateLoadBalancerListenerOutput {
}
export declare namespace CreateLoadBalancerListenerOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLoadBalancerListenerOutput) => any;
}
/**
 * <p>A listener already exists for the specified load balancer name and port, but with a different instance port, protocol, or SSL certificate.</p>
 */
export interface DuplicateListenerException extends __SmithyException, $MetadataBearer {
    name: "DuplicateListenerException";
    $fault: "client";
    Message?: string;
}
export declare namespace DuplicateListenerException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DuplicateListenerException) => any;
}
/**
 * <p>Information about a policy attribute.</p>
 */
export interface PolicyAttribute {
    /**
     * <p>The name of the attribute.</p>
     */
    AttributeName?: string;
    /**
     * <p>The value of the attribute.</p>
     */
    AttributeValue?: string;
}
export declare namespace PolicyAttribute {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PolicyAttribute) => any;
}
/**
 * <p>Contains the parameters for CreateLoadBalancerPolicy.</p>
 */
export interface CreateLoadBalancerPolicyInput {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName: string | undefined;
    /**
     * <p>The name of the load balancer policy to be created. This name must be unique within the set of policies for this load balancer.</p>
     */
    PolicyName: string | undefined;
    /**
     * <p>The name of the base policy type.
     *    	   To get the list of policy types, use <a>DescribeLoadBalancerPolicyTypes</a>.</p>
     */
    PolicyTypeName: string | undefined;
    /**
     * <p>The policy attributes.</p>
     */
    PolicyAttributes?: PolicyAttribute[];
}
export declare namespace CreateLoadBalancerPolicyInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLoadBalancerPolicyInput) => any;
}
/**
 * <p>Contains the output of CreateLoadBalancerPolicy.</p>
 */
export interface CreateLoadBalancerPolicyOutput {
}
export declare namespace CreateLoadBalancerPolicyOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLoadBalancerPolicyOutput) => any;
}
/**
 * <p>One or more of the specified policy types do not exist.</p>
 */
export interface PolicyTypeNotFoundException extends __SmithyException, $MetadataBearer {
    name: "PolicyTypeNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace PolicyTypeNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PolicyTypeNotFoundException) => any;
}
/**
 * <p>Information about the <code>CrossZoneLoadBalancing</code> attribute.</p>
 */
export interface CrossZoneLoadBalancing {
    /**
     * <p>Specifies whether cross-zone load balancing is enabled for the load balancer.</p>
     */
    Enabled: boolean | undefined;
}
export declare namespace CrossZoneLoadBalancing {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CrossZoneLoadBalancing) => any;
}
/**
 * <p>Contains the parameters for DeleteLoadBalancer.</p>
 */
export interface DeleteAccessPointInput {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName: string | undefined;
}
export declare namespace DeleteAccessPointInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteAccessPointInput) => any;
}
/**
 * <p>Contains the output of DeleteLoadBalancer.</p>
 */
export interface DeleteAccessPointOutput {
}
export declare namespace DeleteAccessPointOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteAccessPointOutput) => any;
}
/**
 * <p>Contains the parameters for DeleteLoadBalancerListeners.</p>
 */
export interface DeleteLoadBalancerListenerInput {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName: string | undefined;
    /**
     * <p>The client port numbers of the listeners.</p>
     */
    LoadBalancerPorts: number[] | undefined;
}
export declare namespace DeleteLoadBalancerListenerInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLoadBalancerListenerInput) => any;
}
/**
 * <p>Contains the output of DeleteLoadBalancerListeners.</p>
 */
export interface DeleteLoadBalancerListenerOutput {
}
export declare namespace DeleteLoadBalancerListenerOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLoadBalancerListenerOutput) => any;
}
/**
 * <p>Contains the parameters for DeleteLoadBalancerPolicy.</p>
 */
export interface DeleteLoadBalancerPolicyInput {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName: string | undefined;
    /**
     * <p>The name of the policy.</p>
     */
    PolicyName: string | undefined;
}
export declare namespace DeleteLoadBalancerPolicyInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLoadBalancerPolicyInput) => any;
}
/**
 * <p>Contains the output of DeleteLoadBalancerPolicy.</p>
 */
export interface DeleteLoadBalancerPolicyOutput {
}
export declare namespace DeleteLoadBalancerPolicyOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLoadBalancerPolicyOutput) => any;
}
/**
 * <p>A request made by Elastic Load Balancing to another service exceeds the maximum request rate permitted for your account.</p>
 */
export interface DependencyThrottleException extends __SmithyException, $MetadataBearer {
    name: "DependencyThrottleException";
    $fault: "client";
    Message?: string;
}
export declare namespace DependencyThrottleException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DependencyThrottleException) => any;
}
/**
 * <p>The ID of an EC2 instance.</p>
 */
export interface Instance {
    /**
     * <p>The instance ID.</p>
     */
    InstanceId?: string;
}
export declare namespace Instance {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Instance) => any;
}
/**
 * <p>Contains the parameters for DeregisterInstancesFromLoadBalancer.</p>
 */
export interface DeregisterEndPointsInput {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName: string | undefined;
    /**
     * <p>The IDs of the instances.</p>
     */
    Instances: Instance[] | undefined;
}
export declare namespace DeregisterEndPointsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeregisterEndPointsInput) => any;
}
/**
 * <p>Contains the output of DeregisterInstancesFromLoadBalancer.</p>
 */
export interface DeregisterEndPointsOutput {
    /**
     * <p>The remaining instances registered with the load balancer.</p>
     */
    Instances?: Instance[];
}
export declare namespace DeregisterEndPointsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeregisterEndPointsOutput) => any;
}
/**
 * <p>The specified endpoint is not valid.</p>
 */
export interface InvalidEndPointException extends __SmithyException, $MetadataBearer {
    name: "InvalidEndPointException";
    $fault: "client";
    Message?: string;
}
export declare namespace InvalidEndPointException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidEndPointException) => any;
}
/**
 * <p>Contains the parameters for DescribeLoadBalancers.</p>
 */
export interface DescribeAccessPointsInput {
    /**
     * <p>The names of the load balancers.</p>
     */
    LoadBalancerNames?: string[];
    /**
     * <p>The marker for the next set of results. (You received this marker from a previous call.)</p>
     */
    Marker?: string;
    /**
     * <p>The maximum number of results to return with this call (a number from 1 to 400). The default is 400.</p>
     */
    PageSize?: number;
}
export declare namespace DescribeAccessPointsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAccessPointsInput) => any;
}
/**
 * <p>The policies enabled for a listener.</p>
 */
export interface ListenerDescription {
    /**
     * <p>The listener.</p>
     */
    Listener?: Listener;
    /**
     * <p>The policies. If there are no policies enabled, the list is empty.</p>
     */
    PolicyNames?: string[];
}
export declare namespace ListenerDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListenerDescription) => any;
}
/**
 * <p>Information about a policy for duration-based session stickiness.</p>
 */
export interface LBCookieStickinessPolicy {
    /**
     * <p>The name of the policy. This name must be unique within the set of policies for this load balancer.</p>
     */
    PolicyName?: string;
    /**
     * <p>The time period, in seconds, after which the cookie should be considered stale. If this parameter is not specified, the stickiness session lasts for the duration of the browser session.</p>
     */
    CookieExpirationPeriod?: number;
}
export declare namespace LBCookieStickinessPolicy {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LBCookieStickinessPolicy) => any;
}
/**
 * <p>The policies for a load balancer.</p>
 */
export interface Policies {
    /**
     * <p>The stickiness policies created using <a>CreateAppCookieStickinessPolicy</a>.</p>
     */
    AppCookieStickinessPolicies?: AppCookieStickinessPolicy[];
    /**
     * <p>The stickiness policies created using <a>CreateLBCookieStickinessPolicy</a>.</p>
     */
    LBCookieStickinessPolicies?: LBCookieStickinessPolicy[];
    /**
     * <p>The policies other than the stickiness policies.</p>
     */
    OtherPolicies?: string[];
}
export declare namespace Policies {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Policies) => any;
}
/**
 * <p>Information about a source security group.</p>
 */
export interface SourceSecurityGroup {
    /**
     * <p>The owner of the security group.</p>
     */
    OwnerAlias?: string;
    /**
     * <p>The name of the security group.</p>
     */
    GroupName?: string;
}
export declare namespace SourceSecurityGroup {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SourceSecurityGroup) => any;
}
/**
 * <p>Information about a load balancer.</p>
 */
export interface LoadBalancerDescription {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName?: string;
    /**
     * <p>The DNS name of the load balancer.</p>
     */
    DNSName?: string;
    /**
     * <p>The DNS name of the load balancer.</p>
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/using-domain-names-with-elb.html">Configure a Custom Domain Name</a>
     *             in the <i>Classic Load Balancers Guide</i>.</p>
     */
    CanonicalHostedZoneName?: string;
    /**
     * <p>The ID of the Amazon Route 53 hosted zone for the load balancer.</p>
     */
    CanonicalHostedZoneNameID?: string;
    /**
     * <p>The listeners for the load balancer.</p>
     */
    ListenerDescriptions?: ListenerDescription[];
    /**
     * <p>The policies defined for the load balancer.</p>
     */
    Policies?: Policies;
    /**
     * <p>Information about your EC2 instances.</p>
     */
    BackendServerDescriptions?: BackendServerDescription[];
    /**
     * <p>The Availability Zones for the load balancer.</p>
     */
    AvailabilityZones?: string[];
    /**
     * <p>The IDs of the subnets for the load balancer.</p>
     */
    Subnets?: string[];
    /**
     * <p>The ID of the VPC for the load balancer.</p>
     */
    VPCId?: string;
    /**
     * <p>The IDs of the instances for the load balancer.</p>
     */
    Instances?: Instance[];
    /**
     * <p>Information about the health checks conducted on the load balancer.</p>
     */
    HealthCheck?: HealthCheck;
    /**
     * <p>The security group for the load balancer, which you can use as part of your inbound rules for your registered instances.
     *             To only allow traffic from load balancers, add a security group rule that specifies this source security group as the inbound source.</p>
     */
    SourceSecurityGroup?: SourceSecurityGroup;
    /**
     * <p>The security groups for the load balancer. Valid only for load balancers in a VPC.</p>
     */
    SecurityGroups?: string[];
    /**
     * <p>The date and time the load balancer was created.</p>
     */
    CreatedTime?: Date;
    /**
     * <p>The type of load balancer. Valid only for load balancers in a VPC.</p>
     *          <p>If <code>Scheme</code> is <code>internet-facing</code>, the load balancer
     *            has a public DNS name that resolves to a public IP address.</p>
     *         <p>If <code>Scheme</code> is <code>internal</code>, the load balancer has a public
     *            DNS name that resolves to a private IP address.</p>
     */
    Scheme?: string;
}
export declare namespace LoadBalancerDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LoadBalancerDescription) => any;
}
/**
 * <p>Contains the parameters for DescribeLoadBalancers.</p>
 */
export interface DescribeAccessPointsOutput {
    /**
     * <p>Information about the load balancers.</p>
     */
    LoadBalancerDescriptions?: LoadBalancerDescription[];
    /**
     * <p>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</p>
     */
    NextMarker?: string;
}
export declare namespace DescribeAccessPointsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAccessPointsOutput) => any;
}
export interface DescribeAccountLimitsInput {
    /**
     * <p>The marker for the next set of results. (You received this marker from a previous call.)</p>
     */
    Marker?: string;
    /**
     * <p>The maximum number of results to return with this call.</p>
     */
    PageSize?: number;
}
export declare namespace DescribeAccountLimitsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAccountLimitsInput) => any;
}
/**
 * <p>Information about an Elastic Load Balancing resource limit for your AWS account.</p>
 */
export interface Limit {
    /**
     * <p>The name of the limit. The possible values are:</p>
     *         <ul>
     *             <li>
     *                 <p>classic-listeners</p>
     *             </li>
     *             <li>
     *                 <p>classic-load-balancers</p>
     *             </li>
     *             <li>
     *                 <p>classic-registered-instances</p>
     *             </li>
     *          </ul>
     */
    Name?: string;
    /**
     * <p>The maximum value of the limit.</p>
     */
    Max?: string;
}
export declare namespace Limit {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Limit) => any;
}
export interface DescribeAccountLimitsOutput {
    /**
     * <p>Information about the limits.</p>
     */
    Limits?: Limit[];
    /**
     * <p>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</p>
     */
    NextMarker?: string;
}
export declare namespace DescribeAccountLimitsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAccountLimitsOutput) => any;
}
/**
 * <p>Contains the parameters for DescribeInstanceHealth.</p>
 */
export interface DescribeEndPointStateInput {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName: string | undefined;
    /**
     * <p>The IDs of the instances.</p>
     */
    Instances?: Instance[];
}
export declare namespace DescribeEndPointStateInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeEndPointStateInput) => any;
}
/**
 * <p>Information about the state of an EC2 instance.</p>
 */
export interface InstanceState {
    /**
     * <p>The ID of the instance.</p>
     */
    InstanceId?: string;
    /**
     * <p>The current state of the instance.</p>
     *         <p>Valid values: <code>InService</code> | <code>OutOfService</code> | <code>Unknown</code>
     *          </p>
     */
    State?: string;
    /**
     * <p>Information about the cause of <code>OutOfService</code> instances.
     *          Specifically, whether the cause is Elastic Load Balancing or the instance.</p>
     *         <p>Valid values: <code>ELB</code> | <code>Instance</code> | <code>N/A</code>
     *          </p>
     */
    ReasonCode?: string;
    /**
     * <p>A description of the instance state. This string can contain one or more of the following messages.</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>N/A</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>A transient error occurred. Please try again later.</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Instance has failed at least the UnhealthyThreshold number of health checks consecutively.</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Instance has not passed the configured HealthyThreshold number of health checks consecutively.</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Instance registration is still in progress.</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Instance is in the EC2 Availability Zone for which LoadBalancer is not configured to route traffic to.</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Instance is not currently registered with the LoadBalancer.</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Instance deregistration currently in progress.</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Disable Availability Zone is currently in progress.</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Instance is in pending state.</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Instance is in stopped state.</code>
     *                </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Instance is in terminated state.</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    Description?: string;
}
export declare namespace InstanceState {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceState) => any;
}
/**
 * <p>Contains the output for DescribeInstanceHealth.</p>
 */
export interface DescribeEndPointStateOutput {
    /**
     * <p>Information about the health of the instances.</p>
     */
    InstanceStates?: InstanceState[];
}
export declare namespace DescribeEndPointStateOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeEndPointStateOutput) => any;
}
/**
 * <p>Contains the parameters for DescribeLoadBalancerAttributes.</p>
 */
export interface DescribeLoadBalancerAttributesInput {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName: string | undefined;
}
export declare namespace DescribeLoadBalancerAttributesInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeLoadBalancerAttributesInput) => any;
}
/**
 * <p>The attributes for a load balancer.</p>
 */
export interface LoadBalancerAttributes {
    /**
     * <p>If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones.</p>
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html">Configure Cross-Zone Load Balancing</a>
     *             in the <i>Classic Load Balancers Guide</i>.</p>
     */
    CrossZoneLoadBalancing?: CrossZoneLoadBalancing;
    /**
     * <p>If enabled, the load balancer captures detailed information of all requests and delivers the information to the Amazon S3 bucket that you specify.</p>
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-access-logs.html">Enable Access Logs</a>
     *             in the <i>Classic Load Balancers Guide</i>.</p>
     */
    AccessLog?: AccessLog;
    /**
     * <p>If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance.</p>
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html">Configure Connection Draining</a>
     *             in the <i>Classic Load Balancers Guide</i>.</p>
     */
    ConnectionDraining?: ConnectionDraining;
    /**
     * <p>If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration.</p>
     *         <p>By default, Elastic Load Balancing maintains a 60-second idle connection timeout for both front-end and back-end connections of your load balancer.
     *             For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html">Configure Idle Connection Timeout</a>
     *             in the <i>Classic Load Balancers Guide</i>.</p>
     */
    ConnectionSettings?: ConnectionSettings;
    /**
     * <p>Any additional attributes.</p>
     */
    AdditionalAttributes?: AdditionalAttribute[];
}
export declare namespace LoadBalancerAttributes {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LoadBalancerAttributes) => any;
}
/**
 * <p>Contains the output of DescribeLoadBalancerAttributes.</p>
 */
export interface DescribeLoadBalancerAttributesOutput {
    /**
     * <p>Information about the load balancer attributes.</p>
     */
    LoadBalancerAttributes?: LoadBalancerAttributes;
}
export declare namespace DescribeLoadBalancerAttributesOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeLoadBalancerAttributesOutput) => any;
}
/**
 * <p>The specified load balancer attribute does not exist.</p>
 */
export interface LoadBalancerAttributeNotFoundException extends __SmithyException, $MetadataBearer {
    name: "LoadBalancerAttributeNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace LoadBalancerAttributeNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LoadBalancerAttributeNotFoundException) => any;
}
/**
 * <p>Contains the parameters for DescribeLoadBalancerPolicies.</p>
 */
export interface DescribeLoadBalancerPoliciesInput {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName?: string;
    /**
     * <p>The names of the policies.</p>
     */
    PolicyNames?: string[];
}
export declare namespace DescribeLoadBalancerPoliciesInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeLoadBalancerPoliciesInput) => any;
}
/**
 * <p>Information about a policy attribute.</p>
 */
export interface PolicyAttributeDescription {
    /**
     * <p>The name of the attribute.</p>
     */
    AttributeName?: string;
    /**
     * <p>The value of the attribute.</p>
     */
    AttributeValue?: string;
}
export declare namespace PolicyAttributeDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PolicyAttributeDescription) => any;
}
/**
 * <p>Information about a policy.</p>
 */
export interface PolicyDescription {
    /**
     * <p>The name of the policy.</p>
     */
    PolicyName?: string;
    /**
     * <p>The name of the policy type.</p>
     */
    PolicyTypeName?: string;
    /**
     * <p>The policy attributes.</p>
     */
    PolicyAttributeDescriptions?: PolicyAttributeDescription[];
}
export declare namespace PolicyDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PolicyDescription) => any;
}
/**
 * <p>Contains the output of DescribeLoadBalancerPolicies.</p>
 */
export interface DescribeLoadBalancerPoliciesOutput {
    /**
     * <p>Information about the policies.</p>
     */
    PolicyDescriptions?: PolicyDescription[];
}
export declare namespace DescribeLoadBalancerPoliciesOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeLoadBalancerPoliciesOutput) => any;
}
/**
 * <p>One or more of the specified policies do not exist.</p>
 */
export interface PolicyNotFoundException extends __SmithyException, $MetadataBearer {
    name: "PolicyNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace PolicyNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PolicyNotFoundException) => any;
}
/**
 * <p>Contains the parameters for DescribeLoadBalancerPolicyTypes.</p>
 */
export interface DescribeLoadBalancerPolicyTypesInput {
    /**
     * <p>The names of the policy types. If no names are specified, describes all policy types defined by Elastic Load Balancing.</p>
     */
    PolicyTypeNames?: string[];
}
export declare namespace DescribeLoadBalancerPolicyTypesInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeLoadBalancerPolicyTypesInput) => any;
}
/**
 * <p>Information about a policy attribute type.</p>
 */
export interface PolicyAttributeTypeDescription {
    /**
     * <p>The name of the attribute.</p>
     */
    AttributeName?: string;
    /**
     * <p>The type of the attribute. For example, <code>Boolean</code> or <code>Integer</code>.</p>
     */
    AttributeType?: string;
    /**
     * <p>A description of the attribute.</p>
     */
    Description?: string;
    /**
     * <p>The default value of the attribute, if applicable.</p>
     */
    DefaultValue?: string;
    /**
     * <p>The cardinality of the attribute.</p>
     *         <p>Valid values:</p>
     *             <ul>
     *             <li>
     *                <p>ONE(1) : Single value required</p>
     *             </li>
     *             <li>
     *                <p>ZERO_OR_ONE(0..1) : Up to one value is allowed</p>
     *             </li>
     *             <li>
     *                <p>ZERO_OR_MORE(0..*) : Optional. Multiple values are allowed</p>
     *             </li>
     *             <li>
     *                <p>ONE_OR_MORE(1..*0) : Required. Multiple values are allowed</p>
     *             </li>
     *          </ul>
     */
    Cardinality?: string;
}
export declare namespace PolicyAttributeTypeDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PolicyAttributeTypeDescription) => any;
}
/**
 * <p>Information about a policy type.</p>
 */
export interface PolicyTypeDescription {
    /**
     * <p>The name of the policy type.</p>
     */
    PolicyTypeName?: string;
    /**
     * <p>A description of the policy type.</p>
     */
    Description?: string;
    /**
     * <p>The description of the policy attributes associated with the policies defined by Elastic Load Balancing.</p>
     */
    PolicyAttributeTypeDescriptions?: PolicyAttributeTypeDescription[];
}
export declare namespace PolicyTypeDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PolicyTypeDescription) => any;
}
/**
 * <p>Contains the output of DescribeLoadBalancerPolicyTypes.</p>
 */
export interface DescribeLoadBalancerPolicyTypesOutput {
    /**
     * <p>Information about the policy types.</p>
     */
    PolicyTypeDescriptions?: PolicyTypeDescription[];
}
export declare namespace DescribeLoadBalancerPolicyTypesOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeLoadBalancerPolicyTypesOutput) => any;
}
/**
 * <p>Contains the parameters for DescribeTags.</p>
 */
export interface DescribeTagsInput {
    /**
     * <p>The names of the load balancers.</p>
     */
    LoadBalancerNames: string[] | undefined;
}
export declare namespace DescribeTagsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeTagsInput) => any;
}
/**
 * <p>The tags associated with a load balancer.</p>
 */
export interface TagDescription {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName?: string;
    /**
     * <p>The tags.</p>
     */
    Tags?: Tag[];
}
export declare namespace TagDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagDescription) => any;
}
/**
 * <p>Contains the output for DescribeTags.</p>
 */
export interface DescribeTagsOutput {
    /**
     * <p>Information about the tags.</p>
     */
    TagDescriptions?: TagDescription[];
}
export declare namespace DescribeTagsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeTagsOutput) => any;
}
/**
 * <p>Contains the parameters for DetachLoadBalancerFromSubnets.</p>
 */
export interface DetachLoadBalancerFromSubnetsInput {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName: string | undefined;
    /**
     * <p>The IDs of the subnets.</p>
     */
    Subnets: string[] | undefined;
}
export declare namespace DetachLoadBalancerFromSubnetsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DetachLoadBalancerFromSubnetsInput) => any;
}
/**
 * <p>Contains the output of DetachLoadBalancerFromSubnets.</p>
 */
export interface DetachLoadBalancerFromSubnetsOutput {
    /**
     * <p>The IDs of the remaining subnets for the load balancer.</p>
     */
    Subnets?: string[];
}
export declare namespace DetachLoadBalancerFromSubnetsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DetachLoadBalancerFromSubnetsOutput) => any;
}
/**
 * <p>Contains the parameters for DisableAvailabilityZonesForLoadBalancer.</p>
 */
export interface RemoveAvailabilityZonesInput {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName: string | undefined;
    /**
     * <p>The Availability Zones.</p>
     */
    AvailabilityZones: string[] | undefined;
}
export declare namespace RemoveAvailabilityZonesInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RemoveAvailabilityZonesInput) => any;
}
/**
 * <p>Contains the output for DisableAvailabilityZonesForLoadBalancer.</p>
 */
export interface RemoveAvailabilityZonesOutput {
    /**
     * <p>The remaining Availability Zones for the load balancer.</p>
     */
    AvailabilityZones?: string[];
}
export declare namespace RemoveAvailabilityZonesOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RemoveAvailabilityZonesOutput) => any;
}
/**
 * <p>Contains the parameters for ModifyLoadBalancerAttributes.</p>
 */
export interface ModifyLoadBalancerAttributesInput {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName: string | undefined;
    /**
     * <p>The attributes for the load balancer.</p>
     */
    LoadBalancerAttributes: LoadBalancerAttributes | undefined;
}
export declare namespace ModifyLoadBalancerAttributesInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModifyLoadBalancerAttributesInput) => any;
}
/**
 * <p>Contains the output of ModifyLoadBalancerAttributes.</p>
 */
export interface ModifyLoadBalancerAttributesOutput {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName?: string;
    /**
     * <p>Information about the load balancer attributes.</p>
     */
    LoadBalancerAttributes?: LoadBalancerAttributes;
}
export declare namespace ModifyLoadBalancerAttributesOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModifyLoadBalancerAttributesOutput) => any;
}
/**
 * <p>Contains the parameters for RegisterInstancesWithLoadBalancer.</p>
 */
export interface RegisterEndPointsInput {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName: string | undefined;
    /**
     * <p>The IDs of the instances.</p>
     */
    Instances: Instance[] | undefined;
}
export declare namespace RegisterEndPointsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RegisterEndPointsInput) => any;
}
/**
 * <p>Contains the output of RegisterInstancesWithLoadBalancer.</p>
 */
export interface RegisterEndPointsOutput {
    /**
     * <p>The updated list of instances for the load balancer.</p>
     */
    Instances?: Instance[];
}
export declare namespace RegisterEndPointsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RegisterEndPointsOutput) => any;
}
/**
 * <p>The key of a tag.</p>
 */
export interface TagKeyOnly {
    /**
     * <p>The name of the key.</p>
     */
    Key?: string;
}
export declare namespace TagKeyOnly {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagKeyOnly) => any;
}
/**
 * <p>Contains the parameters for RemoveTags.</p>
 */
export interface RemoveTagsInput {
    /**
     * <p>The name of the load balancer. You can specify a maximum of one load balancer name.</p>
     */
    LoadBalancerNames: string[] | undefined;
    /**
     * <p>The list of tag keys to remove.</p>
     */
    Tags: TagKeyOnly[] | undefined;
}
export declare namespace RemoveTagsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RemoveTagsInput) => any;
}
/**
 * <p>Contains the output of RemoveTags.</p>
 */
export interface RemoveTagsOutput {
}
export declare namespace RemoveTagsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RemoveTagsOutput) => any;
}
/**
 * <p>The load balancer does not have a listener configured at the specified port.</p>
 */
export interface ListenerNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ListenerNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace ListenerNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListenerNotFoundException) => any;
}
/**
 * <p>Contains the parameters for SetLoadBalancerListenerSSLCertificate.</p>
 */
export interface SetLoadBalancerListenerSSLCertificateInput {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName: string | undefined;
    /**
     * <p>The port that uses the specified SSL certificate.</p>
     */
    LoadBalancerPort: number | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the SSL certificate.</p>
     */
    SSLCertificateId: string | undefined;
}
export declare namespace SetLoadBalancerListenerSSLCertificateInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SetLoadBalancerListenerSSLCertificateInput) => any;
}
/**
 * <p>Contains the output of SetLoadBalancerListenerSSLCertificate.</p>
 */
export interface SetLoadBalancerListenerSSLCertificateOutput {
}
export declare namespace SetLoadBalancerListenerSSLCertificateOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SetLoadBalancerListenerSSLCertificateOutput) => any;
}
/**
 * <p>Contains the parameters for SetLoadBalancerPoliciesForBackendServer.</p>
 */
export interface SetLoadBalancerPoliciesForBackendServerInput {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName: string | undefined;
    /**
     * <p>The port number associated with the EC2 instance.</p>
     */
    InstancePort: number | undefined;
    /**
     * <p>The names of the policies. If the list is empty, then all current polices are removed from the EC2 instance.</p>
     */
    PolicyNames: string[] | undefined;
}
export declare namespace SetLoadBalancerPoliciesForBackendServerInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SetLoadBalancerPoliciesForBackendServerInput) => any;
}
/**
 * <p>Contains the output of SetLoadBalancerPoliciesForBackendServer.</p>
 */
export interface SetLoadBalancerPoliciesForBackendServerOutput {
}
export declare namespace SetLoadBalancerPoliciesForBackendServerOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SetLoadBalancerPoliciesForBackendServerOutput) => any;
}
/**
 * <p>Contains the parameters for SetLoadBalancePoliciesOfListener.</p>
 */
export interface SetLoadBalancerPoliciesOfListenerInput {
    /**
     * <p>The name of the load balancer.</p>
     */
    LoadBalancerName: string | undefined;
    /**
     * <p>The external port of the load balancer.</p>
     */
    LoadBalancerPort: number | undefined;
    /**
     * <p>The names of the policies. This list must include all policies to be enabled. If you omit a policy that is currently enabled, it is disabled. If the list is empty, all current policies are disabled.</p>
     */
    PolicyNames: string[] | undefined;
}
export declare namespace SetLoadBalancerPoliciesOfListenerInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SetLoadBalancerPoliciesOfListenerInput) => any;
}
/**
 * <p>Contains the output of SetLoadBalancePoliciesOfListener.</p>
 */
export interface SetLoadBalancerPoliciesOfListenerOutput {
}
export declare namespace SetLoadBalancerPoliciesOfListenerOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SetLoadBalancerPoliciesOfListenerOutput) => any;
}
