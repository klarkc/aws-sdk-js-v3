import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export interface AcceptInvitationRequest {
    /**
     * <p>The unique ID of the detector of the GuardDuty member account.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The account ID of the GuardDuty administrator account whose invitation you're accepting.</p>
     */
    MasterId: string | undefined;
    /**
     * <p>The value that is used to validate the administrator account to the member account.</p>
     */
    InvitationId: string | undefined;
}
export declare namespace AcceptInvitationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptInvitationRequest) => any;
}
export interface AcceptInvitationResponse {
}
export declare namespace AcceptInvitationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptInvitationResponse) => any;
}
/**
 * <p>A bad request exception object.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
    name: "BadRequestException";
    $fault: "client";
    /**
     * <p>The error message.</p>
     */
    Message?: string;
    /**
     * <p>The error type.</p>
     */
    Type?: string;
}
export declare namespace BadRequestException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BadRequestException) => any;
}
/**
 * <p>An internal server error exception object.</p>
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
    name: "InternalServerErrorException";
    $fault: "server";
    /**
     * <p>The error message.</p>
     */
    Message?: string;
    /**
     * <p>The error type.</p>
     */
    Type?: string;
}
export declare namespace InternalServerErrorException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServerErrorException) => any;
}
/**
 * <p>Contains information on the current access control policies for the bucket.</p>
 */
export interface AccessControlList {
    /**
     * <p>A value that indicates whether public read access for the bucket is enabled through an
     *       Access Control List (ACL).</p>
     */
    AllowsPublicReadAccess?: boolean;
    /**
     * <p>A value that indicates whether public write access for the bucket is enabled through an
     *       Access Control List (ACL).</p>
     */
    AllowsPublicWriteAccess?: boolean;
}
export declare namespace AccessControlList {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessControlList) => any;
}
/**
 * <p>Contains information about the access keys.</p>
 */
export interface AccessKeyDetails {
    /**
     * <p>The access key ID of the user.</p>
     */
    AccessKeyId?: string;
    /**
     * <p>The principal ID of the user.</p>
     */
    PrincipalId?: string;
    /**
     * <p>The name of the user.</p>
     */
    UserName?: string;
    /**
     * <p>The type of the user.</p>
     */
    UserType?: string;
}
export declare namespace AccessKeyDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessKeyDetails) => any;
}
/**
 * <p>Contains information about the account.</p>
 */
export interface AccountDetail {
    /**
     * <p>The member account ID.</p>
     */
    AccountId: string | undefined;
    /**
     * <p>The email address of the member account.</p>
     */
    Email: string | undefined;
}
export declare namespace AccountDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccountDetail) => any;
}
/**
 * <p>Contains information on how the bucker owner's S3 Block Public Access settings are being
 *       applied to the S3 bucket. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">S3 Block Public
 *         Access</a> for more information. </p>
 */
export interface BlockPublicAccess {
    /**
     * <p>Indicates if S3 Block Public Access is set to <code>IgnorePublicAcls</code>.</p>
     */
    IgnorePublicAcls?: boolean;
    /**
     * <p>Indicates if S3 Block Public Access is set to <code>RestrictPublicBuckets</code>.</p>
     */
    RestrictPublicBuckets?: boolean;
    /**
     * <p>Indicates if S3 Block Public Access is set to <code>BlockPublicAcls</code>.</p>
     */
    BlockPublicAcls?: boolean;
    /**
     * <p>Indicates if S3 Block Public Access is set to <code>BlockPublicPolicy</code>.</p>
     */
    BlockPublicPolicy?: boolean;
}
export declare namespace BlockPublicAccess {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BlockPublicAccess) => any;
}
/**
 * <p>Contains information about the account level permissions on the S3 bucket.</p>
 */
export interface AccountLevelPermissions {
    /**
     * <p>Describes the S3 Block Public Access settings of the bucket's parent account.</p>
     */
    BlockPublicAccess?: BlockPublicAccess;
}
export declare namespace AccountLevelPermissions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccountLevelPermissions) => any;
}
/**
 * <p>Contains information about the domain.</p>
 */
export interface DomainDetails {
    /**
     * <p>The domain information for the AWS API call.</p>
     */
    Domain?: string;
}
export declare namespace DomainDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DomainDetails) => any;
}
/**
 * <p>Contains information about the city associated with the IP address.</p>
 */
export interface City {
    /**
     * <p>The city name of the remote IP address.</p>
     */
    CityName?: string;
}
export declare namespace City {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: City) => any;
}
/**
 * <p>Contains information about the country where the remote IP address is located.</p>
 */
export interface Country {
    /**
     * <p>The country code of the remote IP address.</p>
     */
    CountryCode?: string;
    /**
     * <p>The country name of the remote IP address.</p>
     */
    CountryName?: string;
}
export declare namespace Country {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Country) => any;
}
/**
 * <p>Contains information about the location of the remote IP address.</p>
 */
export interface GeoLocation {
    /**
     * <p>The latitude information of the remote IP address.</p>
     */
    Lat?: number;
    /**
     * <p>The longitude information of the remote IP address.</p>
     */
    Lon?: number;
}
export declare namespace GeoLocation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GeoLocation) => any;
}
/**
 * <p>Contains information about the ISP organization of the remote IP address.</p>
 */
export interface Organization {
    /**
     * <p>The Autonomous System Number (ASN) of the internet provider of the remote IP
     *       address.</p>
     */
    Asn?: string;
    /**
     * <p>The organization that registered this ASN.</p>
     */
    AsnOrg?: string;
    /**
     * <p>The ISP information for the internet provider.</p>
     */
    Isp?: string;
    /**
     * <p>The name of the internet provider.</p>
     */
    Org?: string;
}
export declare namespace Organization {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Organization) => any;
}
/**
 * <p>Contains information about the remote IP address of the connection.</p>
 */
export interface RemoteIpDetails {
    /**
     * <p>The city information of the remote IP address.</p>
     */
    City?: City;
    /**
     * <p>The country code of the remote IP address.</p>
     */
    Country?: Country;
    /**
     * <p>The location information of the remote IP address.</p>
     */
    GeoLocation?: GeoLocation;
    /**
     * <p>The IPv4 remote address of the connection.</p>
     */
    IpAddressV4?: string;
    /**
     * <p>The ISP organization information of the remote IP address.</p>
     */
    Organization?: Organization;
}
export declare namespace RemoteIpDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RemoteIpDetails) => any;
}
/**
 * <p>Contains information about the API action.</p>
 */
export interface AwsApiCallAction {
    /**
     * <p>The AWS API name.</p>
     */
    Api?: string;
    /**
     * <p>The AWS API caller type.</p>
     */
    CallerType?: string;
    /**
     * <p>The domain information for the AWS API call.</p>
     */
    DomainDetails?: DomainDetails;
    /**
     * <p>The error code of the failed AWS API action.</p>
     */
    ErrorCode?: string;
    /**
     * <p>The remote IP information of the connection that initiated the AWS API call.</p>
     */
    RemoteIpDetails?: RemoteIpDetails;
    /**
     * <p>The AWS service name whose API was invoked.</p>
     */
    ServiceName?: string;
}
export declare namespace AwsApiCallAction {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AwsApiCallAction) => any;
}
/**
 * <p>Contains information about the DNS_REQUEST action described in this finding.</p>
 */
export interface DnsRequestAction {
    /**
     * <p>The domain information for the API request.</p>
     */
    Domain?: string;
}
export declare namespace DnsRequestAction {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DnsRequestAction) => any;
}
/**
 * <p>Contains information about the local IP address of the connection.</p>
 */
export interface LocalIpDetails {
    /**
     * <p>The IPv4 local address of the connection.</p>
     */
    IpAddressV4?: string;
}
export declare namespace LocalIpDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LocalIpDetails) => any;
}
/**
 * <p>Contains information about the port for the local connection.</p>
 */
export interface LocalPortDetails {
    /**
     * <p>The port number of the local connection.</p>
     */
    Port?: number;
    /**
     * <p>The port name of the local connection.</p>
     */
    PortName?: string;
}
export declare namespace LocalPortDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LocalPortDetails) => any;
}
/**
 * <p>Contains information about the remote port.</p>
 */
export interface RemotePortDetails {
    /**
     * <p>The port number of the remote connection.</p>
     */
    Port?: number;
    /**
     * <p>The port name of the remote connection.</p>
     */
    PortName?: string;
}
export declare namespace RemotePortDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RemotePortDetails) => any;
}
/**
 * <p>Contains information about the NETWORK_CONNECTION action described in the finding.</p>
 */
export interface NetworkConnectionAction {
    /**
     * <p>Indicates whether EC2 blocked the network connection to your instance.</p>
     */
    Blocked?: boolean;
    /**
     * <p>The network connection direction.</p>
     */
    ConnectionDirection?: string;
    /**
     * <p>The local port information of the connection.</p>
     */
    LocalPortDetails?: LocalPortDetails;
    /**
     * <p>The network connection protocol.</p>
     */
    Protocol?: string;
    /**
     * <p>The local IP information of the connection.</p>
     */
    LocalIpDetails?: LocalIpDetails;
    /**
     * <p>The remote IP information of the connection.</p>
     */
    RemoteIpDetails?: RemoteIpDetails;
    /**
     * <p>The remote port information of the connection.</p>
     */
    RemotePortDetails?: RemotePortDetails;
}
export declare namespace NetworkConnectionAction {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NetworkConnectionAction) => any;
}
/**
 * <p>Contains information about the port probe details.</p>
 */
export interface PortProbeDetail {
    /**
     * <p>The local port information of the connection.</p>
     */
    LocalPortDetails?: LocalPortDetails;
    /**
     * <p>The local IP information of the connection.</p>
     */
    LocalIpDetails?: LocalIpDetails;
    /**
     * <p>The remote IP information of the connection.</p>
     */
    RemoteIpDetails?: RemoteIpDetails;
}
export declare namespace PortProbeDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PortProbeDetail) => any;
}
/**
 * <p>Contains information about the PORT_PROBE action described in the finding.</p>
 */
export interface PortProbeAction {
    /**
     * <p>Indicates whether EC2 blocked the port probe to the instance, such as with an ACL.</p>
     */
    Blocked?: boolean;
    /**
     * <p>A list of objects related to port probe details.</p>
     */
    PortProbeDetails?: PortProbeDetail[];
}
export declare namespace PortProbeAction {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PortProbeAction) => any;
}
/**
 * <p>Contains information about actions.</p>
 */
export interface Action {
    /**
     * <p>The GuardDuty finding activity type.</p>
     */
    ActionType?: string;
    /**
     * <p>Information about the AWS_API_CALL action described in this finding.</p>
     */
    AwsApiCallAction?: AwsApiCallAction;
    /**
     * <p>Information about the DNS_REQUEST action described in this finding.</p>
     */
    DnsRequestAction?: DnsRequestAction;
    /**
     * <p>Information about the NETWORK_CONNECTION action described in this finding.</p>
     */
    NetworkConnectionAction?: NetworkConnectionAction;
    /**
     * <p>Information about the PORT_PROBE action described in this finding.</p>
     */
    PortProbeAction?: PortProbeAction;
}
export declare namespace Action {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Action) => any;
}
export declare enum AdminStatus {
    DISABLE_IN_PROGRESS = "DISABLE_IN_PROGRESS",
    ENABLED = "ENABLED"
}
/**
 * <p>The account within the organization specified as the GuardDuty delegated
 *       administrator.</p>
 */
export interface AdminAccount {
    /**
     * <p>The AWS account ID for the account.</p>
     */
    AdminAccountId?: string;
    /**
     * <p>Indicates whether the account is enabled as the delegated administrator.</p>
     */
    AdminStatus?: AdminStatus | string;
}
export declare namespace AdminAccount {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AdminAccount) => any;
}
export interface ArchiveFindingsRequest {
    /**
     * <p>The ID of the detector that specifies the GuardDuty service whose findings you want to
     *       archive.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The IDs of the findings that you want to archive.</p>
     */
    FindingIds: string[] | undefined;
}
export declare namespace ArchiveFindingsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ArchiveFindingsRequest) => any;
}
export interface ArchiveFindingsResponse {
}
export declare namespace ArchiveFindingsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ArchiveFindingsResponse) => any;
}
/**
 * <p>Contains information on the current bucket policies for the S3 bucket.</p>
 */
export interface BucketPolicy {
    /**
     * <p>A value that indicates whether public read access for the bucket is enabled through a
     *       bucket policy.</p>
     */
    AllowsPublicReadAccess?: boolean;
    /**
     * <p>A value that indicates whether public write access for the bucket is enabled through a
     *       bucket policy.</p>
     */
    AllowsPublicWriteAccess?: boolean;
}
export declare namespace BucketPolicy {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BucketPolicy) => any;
}
/**
 * <p>Contains information about the bucket level permissions for the S3 bucket.</p>
 */
export interface BucketLevelPermissions {
    /**
     * <p>Contains information on how Access Control Policies are applied to the bucket.</p>
     */
    AccessControlList?: AccessControlList;
    /**
     * <p>Contains information on the bucket policies for the S3 bucket.</p>
     */
    BucketPolicy?: BucketPolicy;
    /**
     * <p>Contains information on which account level S3 Block Public Access settings are applied to
     *       the S3 bucket.</p>
     */
    BlockPublicAccess?: BlockPublicAccess;
}
export declare namespace BucketLevelPermissions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BucketLevelPermissions) => any;
}
export declare enum DataSourceStatus {
    DISABLED = "DISABLED",
    ENABLED = "ENABLED"
}
/**
 * <p>Contains information on the status of CloudTrail as a data source for the detector.</p>
 */
export interface CloudTrailConfigurationResult {
    /**
     * <p>Describes whether CloudTrail is enabled as a data source for the detector.</p>
     */
    Status: DataSourceStatus | string | undefined;
}
export declare namespace CloudTrailConfigurationResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CloudTrailConfigurationResult) => any;
}
/**
 * <p>Contains information about the condition.</p>
 */
export interface Condition {
    /**
     * @deprecated
     *
     * <p>Represents the <i>equal</i> condition to be applied to a single field when
     *       querying for findings.</p>
     */
    Eq?: string[];
    /**
     * @deprecated
     *
     * <p>Represents the <i>not equal</i> condition to be applied to a single field
     *       when querying for findings.</p>
     */
    Neq?: string[];
    /**
     * @deprecated
     *
     * <p>Represents a <i>greater than</i> condition to be applied to a single field
     *       when querying for findings.</p>
     */
    Gt?: number;
    /**
     * @deprecated
     *
     * <p>Represents a <i>greater than or equal</i> condition to be applied to a
     *       single field when querying for findings.</p>
     */
    Gte?: number;
    /**
     * @deprecated
     *
     * <p>Represents a <i>less than</i> condition to be applied to a single field when
     *       querying for findings.</p>
     */
    Lt?: number;
    /**
     * @deprecated
     *
     * <p>Represents a <i>less than or equal</i> condition to be applied to a single
     *       field when querying for findings.</p>
     */
    Lte?: number;
    /**
     * <p>Represents an <i>equal</i>
     *             <b></b> condition to be applied to
     *       a single field when querying for findings.</p>
     */
    Equals?: string[];
    /**
     * <p>Represents a <i>not equal</i>
     *             <b></b> condition to be applied
     *       to a single field when querying for findings.</p>
     */
    NotEquals?: string[];
    /**
     * <p>Represents a <i>greater than</i> condition to be applied to a single field
     *       when querying for findings.</p>
     */
    GreaterThan?: number;
    /**
     * <p>Represents a <i>greater than or equal</i> condition to be applied to a
     *       single field when querying for findings.</p>
     */
    GreaterThanOrEqual?: number;
    /**
     * <p>Represents a <i>less than</i> condition to be applied to a single field when
     *       querying for findings.</p>
     */
    LessThan?: number;
    /**
     * <p>Represents a <i>less than or equal</i> condition to be applied to a single
     *       field when querying for findings.</p>
     */
    LessThanOrEqual?: number;
}
export declare namespace Condition {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Condition) => any;
}
/**
 * <p>Describes whether S3 data event logs will be enabled as a data source.</p>
 */
export interface S3LogsConfiguration {
    /**
     * <p> The status of S3 data event logs as a data source.</p>
     */
    Enable: boolean | undefined;
}
export declare namespace S3LogsConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3LogsConfiguration) => any;
}
/**
 * <p>Contains information about which data sources are enabled.</p>
 */
export interface DataSourceConfigurations {
    /**
     * <p>Describes whether S3 data event logs are enabled as a data source.</p>
     */
    S3Logs?: S3LogsConfiguration;
}
export declare namespace DataSourceConfigurations {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DataSourceConfigurations) => any;
}
export declare enum FindingPublishingFrequency {
    FIFTEEN_MINUTES = "FIFTEEN_MINUTES",
    ONE_HOUR = "ONE_HOUR",
    SIX_HOURS = "SIX_HOURS"
}
export interface CreateDetectorRequest {
    /**
     * <p>A Boolean value that specifies whether the detector is to be enabled.</p>
     */
    Enable: boolean | undefined;
    /**
     * <p>The idempotency token for the create request.</p>
     */
    ClientToken?: string;
    /**
     * <p>A value that specifies how frequently updated findings are exported.</p>
     */
    FindingPublishingFrequency?: FindingPublishingFrequency | string;
    /**
     * <p>Describes which data sources will be enabled for the detector.</p>
     */
    DataSources?: DataSourceConfigurations;
    /**
     * <p>The tags to be added to a new detector resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateDetectorRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDetectorRequest) => any;
}
export interface CreateDetectorResponse {
    /**
     * <p>The unique ID of the created detector.</p>
     */
    DetectorId?: string;
}
export declare namespace CreateDetectorResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDetectorResponse) => any;
}
export declare enum FilterAction {
    ARCHIVE = "ARCHIVE",
    NOOP = "NOOP"
}
/**
 * <p>Contains information about the criteria used for querying findings.</p>
 */
export interface FindingCriteria {
    /**
     * <p>Represents a map of finding properties that match specified conditions and values when
     *       querying findings.</p>
     */
    Criterion?: {
        [key: string]: Condition;
    };
}
export declare namespace FindingCriteria {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FindingCriteria) => any;
}
export interface CreateFilterRequest {
    /**
     * <p>The ID of the detector belonging to the GuardDuty account that you want to create a filter
     *       for.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The name of the filter. Minimum length of 3. Maximum length of 64. Valid characters include alphanumeric characters, dot (.), underscore (_), and dash (-). Spaces are not allowed.</p>
     */
    Name: string | undefined;
    /**
     * <p>The description of the filter.</p>
     */
    Description?: string;
    /**
     * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
     */
    Action?: FilterAction | string;
    /**
     * <p>Specifies the position of the filter in the list of current filters. Also specifies the
     *       order in which this filter is applied to the findings.</p>
     */
    Rank?: number;
    /**
     * <p>Represents the criteria to be used in the filter for querying findings.</p>
     *          <p>You can only use the following attributes to query findings:</p>
     *          <ul>
     *             <li>
     *                <p>accountId</p>
     *             </li>
     *             <li>
     *                <p>region</p>
     *             </li>
     *             <li>
     *                <p>confidence</p>
     *             </li>
     *             <li>
     *                <p>id</p>
     *             </li>
     *             <li>
     *                <p>resource.accessKeyDetails.accessKeyId</p>
     *             </li>
     *             <li>
     *                <p>resource.accessKeyDetails.principalId</p>
     *             </li>
     *             <li>
     *                <p>resource.accessKeyDetails.userName</p>
     *             </li>
     *             <li>
     *                <p>resource.accessKeyDetails.userType</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.iamInstanceProfile.id</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.imageId</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.instanceId</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.outpostArn</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.networkInterfaces.ipv6Addresses</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.networkInterfaces.privateIpAddresses.privateIpAddress</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.networkInterfaces.publicDnsName</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.networkInterfaces.publicIp</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.networkInterfaces.securityGroups.groupId</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.networkInterfaces.securityGroups.groupName</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.networkInterfaces.subnetId</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.networkInterfaces.vpcId</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.tags.key</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.tags.value</p>
     *             </li>
     *             <li>
     *                <p>resource.resourceType</p>
     *             </li>
     *             <li>
     *                <p>service.action.actionType</p>
     *             </li>
     *             <li>
     *                <p>service.action.awsApiCallAction.api</p>
     *             </li>
     *             <li>
     *                <p>service.action.awsApiCallAction.callerType</p>
     *             </li>
     *             <li>
     *                <p>service.action.awsApiCallAction.errorCode</p>
     *             </li>
     *             <li>
     *                <p>service.action.awsApiCallAction.remoteIpDetails.city.cityName</p>
     *             </li>
     *             <li>
     *                <p>service.action.awsApiCallAction.remoteIpDetails.country.countryName</p>
     *             </li>
     *             <li>
     *                <p>service.action.awsApiCallAction.remoteIpDetails.ipAddressV4</p>
     *             </li>
     *             <li>
     *                <p>service.action.awsApiCallAction.remoteIpDetails.organization.asn</p>
     *             </li>
     *             <li>
     *                <p>service.action.awsApiCallAction.remoteIpDetails.organization.asnOrg</p>
     *             </li>
     *             <li>
     *                <p>service.action.awsApiCallAction.serviceName</p>
     *             </li>
     *             <li>
     *                <p>service.action.dnsRequestAction.domain</p>
     *             </li>
     *             <li>
     *                <p>service.action.networkConnectionAction.blocked</p>
     *             </li>
     *             <li>
     *                <p>service.action.networkConnectionAction.connectionDirection</p>
     *             </li>
     *             <li>
     *                <p>service.action.networkConnectionAction.localPortDetails.port</p>
     *             </li>
     *             <li>
     *                <p>service.action.networkConnectionAction.protocol</p>
     *             </li>
     *             <li>
     *                <p>service.action.networkConnectionAction.localIpDetails.ipAddressV4</p>
     *             </li>
     *             <li>
     *                <p>service.action.networkConnectionAction.remoteIpDetails.city.cityName</p>
     *             </li>
     *             <li>
     *                <p>service.action.networkConnectionAction.remoteIpDetails.country.countryName</p>
     *             </li>
     *             <li>
     *                <p>service.action.networkConnectionAction.remoteIpDetails.ipAddressV4</p>
     *             </li>
     *             <li>
     *                <p>service.action.networkConnectionAction.remoteIpDetails.organization.asn</p>
     *             </li>
     *             <li>
     *                <p>service.action.networkConnectionAction.remoteIpDetails.organization.asnOrg</p>
     *             </li>
     *             <li>
     *                <p>service.action.networkConnectionAction.remotePortDetails.port</p>
     *             </li>
     *             <li>
     *                <p>service.additionalInfo.threatListName</p>
     *             </li>
     *             <li>
     *                <p>service.archived</p>
     *                <p>When this attribute is set to TRUE, only archived findings are listed. When it's set
     *           to FALSE, only unarchived findings are listed. When this attribute is not set, all
     *           existing findings are listed.</p>
     *             </li>
     *             <li>
     *                <p>service.resourceRole</p>
     *             </li>
     *             <li>
     *                <p>severity</p>
     *             </li>
     *             <li>
     *                <p>type</p>
     *             </li>
     *             <li>
     *                <p>updatedAt</p>
     *                <p>Type: ISO 8601 string format: YYYY-MM-DDTHH:MM:SS.SSSZ or YYYY-MM-DDTHH:MM:SSZ
     *           depending on whether the value contains milliseconds.</p>
     *             </li>
     *          </ul>
     */
    FindingCriteria: FindingCriteria | undefined;
    /**
     * <p>The idempotency token for the create request.</p>
     */
    ClientToken?: string;
    /**
     * <p>The tags to be added to a new filter resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateFilterRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateFilterRequest) => any;
}
export interface CreateFilterResponse {
    /**
     * <p>The name of the successfully created filter.</p>
     */
    Name: string | undefined;
}
export declare namespace CreateFilterResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateFilterResponse) => any;
}
export declare enum IpSetFormat {
    ALIEN_VAULT = "ALIEN_VAULT",
    FIRE_EYE = "FIRE_EYE",
    OTX_CSV = "OTX_CSV",
    PROOF_POINT = "PROOF_POINT",
    STIX = "STIX",
    TXT = "TXT"
}
export interface CreateIPSetRequest {
    /**
     * <p>The unique ID of the detector of the GuardDuty account that you want to create an IPSet
     *       for.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The user-friendly name to identify the IPSet.</p>
     *          <p> Allowed characters are alphanumerics, spaces, hyphens (-), and underscores (_).</p>
     */
    Name: string | undefined;
    /**
     * <p>The format of the file that contains the IPSet.</p>
     */
    Format: IpSetFormat | string | undefined;
    /**
     * <p>The URI of the file that contains the IPSet. For example:
     *       https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.</p>
     */
    Location: string | undefined;
    /**
     * <p>A Boolean value that indicates whether GuardDuty is to start using the uploaded
     *       IPSet.</p>
     */
    Activate: boolean | undefined;
    /**
     * <p>The idempotency token for the create request.</p>
     */
    ClientToken?: string;
    /**
     * <p>The tags to be added to a new IP set resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateIPSetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateIPSetRequest) => any;
}
export interface CreateIPSetResponse {
    /**
     * <p>The ID of the IPSet resource.</p>
     */
    IpSetId: string | undefined;
}
export declare namespace CreateIPSetResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateIPSetResponse) => any;
}
export interface CreateMembersRequest {
    /**
     * <p>The unique ID of the detector of the GuardDuty account that you want to associate member
     *       accounts with.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>A list of account ID and email address pairs of the accounts that you want to associate
     *       with the GuardDuty administrator account.</p>
     */
    AccountDetails: AccountDetail[] | undefined;
}
export declare namespace CreateMembersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateMembersRequest) => any;
}
/**
 * <p>Contains information about the accounts that weren't processed.</p>
 */
export interface UnprocessedAccount {
    /**
     * <p>The AWS account ID.</p>
     */
    AccountId: string | undefined;
    /**
     * <p>A reason why the account hasn't been processed.</p>
     */
    Result: string | undefined;
}
export declare namespace UnprocessedAccount {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnprocessedAccount) => any;
}
export interface CreateMembersResponse {
    /**
     * <p>A list of objects that include the <code>accountIds</code> of the unprocessed accounts and
     *       a result string that explains why each was unprocessed.</p>
     */
    UnprocessedAccounts: UnprocessedAccount[] | undefined;
}
export declare namespace CreateMembersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateMembersResponse) => any;
}
/**
 * <p>Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3
 *       bucket, and the ARN of the KMS key to use to encrypt published findings.</p>
 */
export interface DestinationProperties {
    /**
     * <p>The ARN of the resource to publish to.</p>
     */
    DestinationArn?: string;
    /**
     * <p>The ARN of the KMS key to use for encryption.</p>
     */
    KmsKeyArn?: string;
}
export declare namespace DestinationProperties {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DestinationProperties) => any;
}
export declare enum DestinationType {
    S3 = "S3"
}
export interface CreatePublishingDestinationRequest {
    /**
     * <p>The ID of the GuardDuty detector associated with the publishing destination.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The type of resource for the publishing destination. Currently only Amazon S3 buckets are
     *       supported.</p>
     */
    DestinationType: DestinationType | string | undefined;
    /**
     * <p>The properties of the publishing destination, including the ARNs for the destination and
     *       the KMS key used for encryption.</p>
     */
    DestinationProperties: DestinationProperties | undefined;
    /**
     * <p>The idempotency token for the request.</p>
     */
    ClientToken?: string;
}
export declare namespace CreatePublishingDestinationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreatePublishingDestinationRequest) => any;
}
export interface CreatePublishingDestinationResponse {
    /**
     * <p>The ID of the publishing destination that is created.</p>
     */
    DestinationId: string | undefined;
}
export declare namespace CreatePublishingDestinationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreatePublishingDestinationResponse) => any;
}
export interface CreateSampleFindingsRequest {
    /**
     * <p>The ID of the detector to create sample findings for.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The types of sample findings to generate.</p>
     */
    FindingTypes?: string[];
}
export declare namespace CreateSampleFindingsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSampleFindingsRequest) => any;
}
export interface CreateSampleFindingsResponse {
}
export declare namespace CreateSampleFindingsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSampleFindingsResponse) => any;
}
export declare enum ThreatIntelSetFormat {
    ALIEN_VAULT = "ALIEN_VAULT",
    FIRE_EYE = "FIRE_EYE",
    OTX_CSV = "OTX_CSV",
    PROOF_POINT = "PROOF_POINT",
    STIX = "STIX",
    TXT = "TXT"
}
export interface CreateThreatIntelSetRequest {
    /**
     * <p>The unique ID of the detector of the GuardDuty account that you want to create a
     *       threatIntelSet for.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>A user-friendly ThreatIntelSet name displayed in all findings that are generated by
     *       activity that involves IP addresses included in this ThreatIntelSet.</p>
     */
    Name: string | undefined;
    /**
     * <p>The format of the file that contains the ThreatIntelSet.</p>
     */
    Format: ThreatIntelSetFormat | string | undefined;
    /**
     * <p>The URI of the file that contains the ThreatIntelSet. For example:
     *       https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.</p>
     */
    Location: string | undefined;
    /**
     * <p>A Boolean value that indicates whether GuardDuty is to start using the uploaded
     *       ThreatIntelSet.</p>
     */
    Activate: boolean | undefined;
    /**
     * <p>The idempotency token for the create request.</p>
     */
    ClientToken?: string;
    /**
     * <p>The tags to be added to a new threat list resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateThreatIntelSetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateThreatIntelSetRequest) => any;
}
export interface CreateThreatIntelSetResponse {
    /**
     * <p>The ID of the ThreatIntelSet resource.</p>
     */
    ThreatIntelSetId: string | undefined;
}
export declare namespace CreateThreatIntelSetResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateThreatIntelSetResponse) => any;
}
export declare enum DataSource {
    CLOUD_TRAIL = "CLOUD_TRAIL",
    DNS_LOGS = "DNS_LOGS",
    FLOW_LOGS = "FLOW_LOGS",
    S3_LOGS = "S3_LOGS"
}
/**
 * <p>Contains information on the status of DNS logs as a data source.</p>
 */
export interface DNSLogsConfigurationResult {
    /**
     * <p>Denotes whether DNS logs is enabled as a data source.</p>
     */
    Status: DataSourceStatus | string | undefined;
}
export declare namespace DNSLogsConfigurationResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DNSLogsConfigurationResult) => any;
}
/**
 * <p>Contains information on the status of VPC flow logs as a data source.</p>
 */
export interface FlowLogsConfigurationResult {
    /**
     * <p>Denotes whether VPC flow logs is enabled as a data source.</p>
     */
    Status: DataSourceStatus | string | undefined;
}
export declare namespace FlowLogsConfigurationResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FlowLogsConfigurationResult) => any;
}
/**
 * <p>Describes whether S3 data event logs will be enabled as a data source.</p>
 */
export interface S3LogsConfigurationResult {
    /**
     * <p>A value that describes whether S3 data event logs are automatically enabled for new
     *       members of the organization.</p>
     */
    Status: DataSourceStatus | string | undefined;
}
export declare namespace S3LogsConfigurationResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3LogsConfigurationResult) => any;
}
/**
 * <p>Contains information on the status of data sources for the detector.</p>
 */
export interface DataSourceConfigurationsResult {
    /**
     * <p>An object that contains information on the status of CloudTrail as a data source.</p>
     */
    CloudTrail: CloudTrailConfigurationResult | undefined;
    /**
     * <p>An object that contains information on the status of DNS logs as a data source.</p>
     */
    DNSLogs: DNSLogsConfigurationResult | undefined;
    /**
     * <p>An object that contains information on the status of VPC flow logs as a data
     *       source.</p>
     */
    FlowLogs: FlowLogsConfigurationResult | undefined;
    /**
     * <p>An object that contains information on the status of S3 Data event logs as a data
     *       source.</p>
     */
    S3Logs: S3LogsConfigurationResult | undefined;
}
export declare namespace DataSourceConfigurationsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DataSourceConfigurationsResult) => any;
}
export interface DeclineInvitationsRequest {
    /**
     * <p>A list of account IDs of the AWS accounts that sent invitations to the current member
     *       account that you want to decline invitations from.</p>
     */
    AccountIds: string[] | undefined;
}
export declare namespace DeclineInvitationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeclineInvitationsRequest) => any;
}
export interface DeclineInvitationsResponse {
    /**
     * <p>A list of objects that contain the unprocessed account and a result string that explains
     *       why it was unprocessed.</p>
     */
    UnprocessedAccounts: UnprocessedAccount[] | undefined;
}
export declare namespace DeclineInvitationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeclineInvitationsResponse) => any;
}
/**
 * <p>Contains information on the server side encryption method used in the S3 bucket. See
 *       <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/serv-side-encryption.html">S3
 *         Server-Side Encryption</a> for more information.</p>
 */
export interface DefaultServerSideEncryption {
    /**
     * <p>The type of encryption used for objects within the S3 bucket.</p>
     */
    EncryptionType?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the KMS encryption key. Only available if the bucket
     *         <code>EncryptionType</code> is <code>aws:kms</code>.</p>
     */
    KmsMasterKeyArn?: string;
}
export declare namespace DefaultServerSideEncryption {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DefaultServerSideEncryption) => any;
}
export interface DeleteDetectorRequest {
    /**
     * <p>The unique ID of the detector that you want to delete.</p>
     */
    DetectorId: string | undefined;
}
export declare namespace DeleteDetectorRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDetectorRequest) => any;
}
export interface DeleteDetectorResponse {
}
export declare namespace DeleteDetectorResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDetectorResponse) => any;
}
export interface DeleteFilterRequest {
    /**
     * <p>The unique ID of the detector that the filter is associated with.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The name of the filter that you want to delete.</p>
     */
    FilterName: string | undefined;
}
export declare namespace DeleteFilterRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteFilterRequest) => any;
}
export interface DeleteFilterResponse {
}
export declare namespace DeleteFilterResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteFilterResponse) => any;
}
export interface DeleteInvitationsRequest {
    /**
     * <p>A list of account IDs of the AWS accounts that sent invitations to the current member
     *       account that you want to delete invitations from.</p>
     */
    AccountIds: string[] | undefined;
}
export declare namespace DeleteInvitationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteInvitationsRequest) => any;
}
export interface DeleteInvitationsResponse {
    /**
     * <p>A list of objects that contain the unprocessed account and a result string that explains
     *       why it was unprocessed.</p>
     */
    UnprocessedAccounts: UnprocessedAccount[] | undefined;
}
export declare namespace DeleteInvitationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteInvitationsResponse) => any;
}
export interface DeleteIPSetRequest {
    /**
     * <p>The unique ID of the detector associated with the IPSet.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The unique ID of the IPSet to delete.</p>
     */
    IpSetId: string | undefined;
}
export declare namespace DeleteIPSetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteIPSetRequest) => any;
}
export interface DeleteIPSetResponse {
}
export declare namespace DeleteIPSetResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteIPSetResponse) => any;
}
export interface DeleteMembersRequest {
    /**
     * <p>The unique ID of the detector of the GuardDuty account whose members you want to
     *       delete.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>A list of account IDs of the GuardDuty member accounts that you want to delete.</p>
     */
    AccountIds: string[] | undefined;
}
export declare namespace DeleteMembersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteMembersRequest) => any;
}
export interface DeleteMembersResponse {
    /**
     * <p>The accounts that could not be processed.</p>
     */
    UnprocessedAccounts: UnprocessedAccount[] | undefined;
}
export declare namespace DeleteMembersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteMembersResponse) => any;
}
export interface DeletePublishingDestinationRequest {
    /**
     * <p>The unique ID of the detector associated with the publishing destination to delete.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The ID of the publishing destination to delete.</p>
     */
    DestinationId: string | undefined;
}
export declare namespace DeletePublishingDestinationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeletePublishingDestinationRequest) => any;
}
export interface DeletePublishingDestinationResponse {
}
export declare namespace DeletePublishingDestinationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeletePublishingDestinationResponse) => any;
}
export interface DeleteThreatIntelSetRequest {
    /**
     * <p>The unique ID of the detector that the threatIntelSet is associated with.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The unique ID of the threatIntelSet that you want to delete.</p>
     */
    ThreatIntelSetId: string | undefined;
}
export declare namespace DeleteThreatIntelSetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteThreatIntelSetRequest) => any;
}
export interface DeleteThreatIntelSetResponse {
}
export declare namespace DeleteThreatIntelSetResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteThreatIntelSetResponse) => any;
}
export interface DescribeOrganizationConfigurationRequest {
    /**
     * <p>The ID of the detector to retrieve information about the delegated administrator
     *       from.</p>
     */
    DetectorId: string | undefined;
}
export declare namespace DescribeOrganizationConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeOrganizationConfigurationRequest) => any;
}
/**
 * <p>The current configuration of S3 data event logs as a data source for the
 *       organization.</p>
 */
export interface OrganizationS3LogsConfigurationResult {
    /**
     * <p>A value that describes whether S3 data event logs are automatically enabled for new
     *       members of the organization.</p>
     */
    AutoEnable: boolean | undefined;
}
export declare namespace OrganizationS3LogsConfigurationResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OrganizationS3LogsConfigurationResult) => any;
}
/**
 * <p>An object that contains information on which data sources are automatically enabled for
 *       new members within the organization.</p>
 */
export interface OrganizationDataSourceConfigurationsResult {
    /**
     * <p>Describes whether S3 data event logs are enabled as a data source.</p>
     */
    S3Logs: OrganizationS3LogsConfigurationResult | undefined;
}
export declare namespace OrganizationDataSourceConfigurationsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OrganizationDataSourceConfigurationsResult) => any;
}
export interface DescribeOrganizationConfigurationResponse {
    /**
     * <p>Indicates whether GuardDuty is automatically enabled for accounts added to the
     *       organization.</p>
     */
    AutoEnable: boolean | undefined;
    /**
     * <p>Indicates whether the maximum number of allowed member accounts are already associated
     *       with the delegated administrator account for your organization.</p>
     */
    MemberAccountLimitReached: boolean | undefined;
    /**
     * <p>Describes which data sources are enabled automatically for member
     *       accounts.</p>
     */
    DataSources?: OrganizationDataSourceConfigurationsResult;
}
export declare namespace DescribeOrganizationConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeOrganizationConfigurationResponse) => any;
}
export interface DescribePublishingDestinationRequest {
    /**
     * <p>The unique ID of the detector associated with the publishing destination to
     *       retrieve.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The ID of the publishing destination to retrieve.</p>
     */
    DestinationId: string | undefined;
}
export declare namespace DescribePublishingDestinationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribePublishingDestinationRequest) => any;
}
export declare enum PublishingStatus {
    PENDING_VERIFICATION = "PENDING_VERIFICATION",
    PUBLISHING = "PUBLISHING",
    STOPPED = "STOPPED",
    UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY = "UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY"
}
export interface DescribePublishingDestinationResponse {
    /**
     * <p>The ID of the publishing destination.</p>
     */
    DestinationId: string | undefined;
    /**
     * <p>The type of publishing destination. Currently, only Amazon S3 buckets are
     *       supported.</p>
     */
    DestinationType: DestinationType | string | undefined;
    /**
     * <p>The status of the publishing destination.</p>
     */
    Status: PublishingStatus | string | undefined;
    /**
     * <p>The time, in epoch millisecond format, at which GuardDuty was first unable to publish
     *       findings to the destination.</p>
     */
    PublishingFailureStartTimestamp: number | undefined;
    /**
     * <p>A <code>DestinationProperties</code> object that includes the <code>DestinationArn</code>
     *       and <code>KmsKeyArn</code> of the publishing destination.</p>
     */
    DestinationProperties: DestinationProperties | undefined;
}
export declare namespace DescribePublishingDestinationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribePublishingDestinationResponse) => any;
}
/**
 * <p>Contains information about the publishing destination, including the ID, type, and
 *       status.</p>
 */
export interface Destination {
    /**
     * <p>The unique ID of the publishing destination.</p>
     */
    DestinationId: string | undefined;
    /**
     * <p>The type of resource used for the publishing destination. Currently, only Amazon S3
     *       buckets are supported.</p>
     */
    DestinationType: DestinationType | string | undefined;
    /**
     * <p>The status of the publishing destination.</p>
     */
    Status: PublishingStatus | string | undefined;
}
export declare namespace Destination {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Destination) => any;
}
export declare enum DetectorStatus {
    DISABLED = "DISABLED",
    ENABLED = "ENABLED"
}
export interface DisableOrganizationAdminAccountRequest {
    /**
     * <p>The AWS Account ID for the organizations account to be disabled as a GuardDuty delegated
     *       administrator.</p>
     */
    AdminAccountId: string | undefined;
}
export declare namespace DisableOrganizationAdminAccountRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisableOrganizationAdminAccountRequest) => any;
}
export interface DisableOrganizationAdminAccountResponse {
}
export declare namespace DisableOrganizationAdminAccountResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisableOrganizationAdminAccountResponse) => any;
}
export interface DisassociateFromMasterAccountRequest {
    /**
     * <p>The unique ID of the detector of the GuardDuty member account.</p>
     */
    DetectorId: string | undefined;
}
export declare namespace DisassociateFromMasterAccountRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateFromMasterAccountRequest) => any;
}
export interface DisassociateFromMasterAccountResponse {
}
export declare namespace DisassociateFromMasterAccountResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateFromMasterAccountResponse) => any;
}
export interface DisassociateMembersRequest {
    /**
     * <p>The unique ID of the detector of the GuardDuty account whose members you want to
     *       disassociate from the administrator account.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>A list of account IDs of the GuardDuty member accounts that you want to disassociate from
     *       the administrator account.</p>
     */
    AccountIds: string[] | undefined;
}
export declare namespace DisassociateMembersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateMembersRequest) => any;
}
export interface DisassociateMembersResponse {
    /**
     * <p>A list of objects that contain the unprocessed account and a result string that explains
     *       why it was unprocessed.</p>
     */
    UnprocessedAccounts: UnprocessedAccount[] | undefined;
}
export declare namespace DisassociateMembersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateMembersResponse) => any;
}
export interface EnableOrganizationAdminAccountRequest {
    /**
     * <p>The AWS Account ID for the organization account to be enabled as a GuardDuty delegated
     *       administrator.</p>
     */
    AdminAccountId: string | undefined;
}
export declare namespace EnableOrganizationAdminAccountRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnableOrganizationAdminAccountRequest) => any;
}
export interface EnableOrganizationAdminAccountResponse {
}
export declare namespace EnableOrganizationAdminAccountResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnableOrganizationAdminAccountResponse) => any;
}
/**
 * <p>An instance of a threat intelligence detail that constitutes evidence for the
 *       finding.</p>
 */
export interface ThreatIntelligenceDetail {
    /**
     * <p>The name of the threat intelligence list that triggered the finding.</p>
     */
    ThreatListName?: string;
    /**
     * <p>A list of names of the threats in the threat intelligence list that triggered the
     *       finding.</p>
     */
    ThreatNames?: string[];
}
export declare namespace ThreatIntelligenceDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThreatIntelligenceDetail) => any;
}
/**
 * <p>Contains information about the reason that the finding was generated.</p>
 */
export interface Evidence {
    /**
     * <p>A list of threat intelligence details related to the evidence.</p>
     */
    ThreatIntelligenceDetails?: ThreatIntelligenceDetail[];
}
export declare namespace Evidence {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Evidence) => any;
}
export declare enum Feedback {
    NOT_USEFUL = "NOT_USEFUL",
    USEFUL = "USEFUL"
}
/**
 * <p>Contains information about the EC2 instance profile.</p>
 */
export interface IamInstanceProfile {
    /**
     * <p>The profile ARN of the EC2 instance.</p>
     */
    Arn?: string;
    /**
     * <p>The profile ID of the EC2 instance.</p>
     */
    Id?: string;
}
export declare namespace IamInstanceProfile {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IamInstanceProfile) => any;
}
/**
 * <p>Contains other private IP address information of the EC2 instance.</p>
 */
export interface PrivateIpAddressDetails {
    /**
     * <p>The private DNS name of the EC2 instance.</p>
     */
    PrivateDnsName?: string;
    /**
     * <p>The private IP address of the EC2 instance.</p>
     */
    PrivateIpAddress?: string;
}
export declare namespace PrivateIpAddressDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PrivateIpAddressDetails) => any;
}
/**
 * <p>Contains information about the security groups associated with the EC2 instance.</p>
 */
export interface SecurityGroup {
    /**
     * <p>The security group ID of the EC2 instance.</p>
     */
    GroupId?: string;
    /**
     * <p>The security group name of the EC2 instance.</p>
     */
    GroupName?: string;
}
export declare namespace SecurityGroup {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SecurityGroup) => any;
}
/**
 * <p>Contains information about the elastic network interface of the EC2 instance.</p>
 */
export interface NetworkInterface {
    /**
     * <p>A list of IPv6 addresses for the EC2 instance.</p>
     */
    Ipv6Addresses?: string[];
    /**
     * <p>The ID of the network interface.</p>
     */
    NetworkInterfaceId?: string;
    /**
     * <p>The private DNS name of the EC2 instance.</p>
     */
    PrivateDnsName?: string;
    /**
     * <p>The private IP address of the EC2 instance.</p>
     */
    PrivateIpAddress?: string;
    /**
     * <p>Other private IP address information of the EC2 instance.</p>
     */
    PrivateIpAddresses?: PrivateIpAddressDetails[];
    /**
     * <p>The public DNS name of the EC2 instance.</p>
     */
    PublicDnsName?: string;
    /**
     * <p>The public IP address of the EC2 instance.</p>
     */
    PublicIp?: string;
    /**
     * <p>The security groups associated with the EC2 instance.</p>
     */
    SecurityGroups?: SecurityGroup[];
    /**
     * <p>The subnet ID of the EC2 instance.</p>
     */
    SubnetId?: string;
    /**
     * <p>The VPC ID of the EC2 instance.</p>
     */
    VpcId?: string;
}
export declare namespace NetworkInterface {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NetworkInterface) => any;
}
/**
 * <p>Contains information about the product code for the EC2 instance.</p>
 */
export interface ProductCode {
    /**
     * <p>The product code information.</p>
     */
    Code?: string;
    /**
     * <p>The product code type.</p>
     */
    ProductType?: string;
}
export declare namespace ProductCode {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProductCode) => any;
}
/**
 * <p>Contains information about a tag associated with the EC2 instance.</p>
 */
export interface Tag {
    /**
     * <p>The EC2 instance tag key.</p>
     */
    Key?: string;
    /**
     * <p>The EC2 instance tag value.</p>
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
 * <p>Contains information about the details of an instance.</p>
 */
export interface InstanceDetails {
    /**
     * <p>The Availability Zone of the EC2 instance.</p>
     */
    AvailabilityZone?: string;
    /**
     * <p>The profile information of the EC2 instance.</p>
     */
    IamInstanceProfile?: IamInstanceProfile;
    /**
     * <p>The image description of the EC2 instance.</p>
     */
    ImageDescription?: string;
    /**
     * <p>The image ID of the EC2 instance.</p>
     */
    ImageId?: string;
    /**
     * <p>The ID of the EC2 instance.</p>
     */
    InstanceId?: string;
    /**
     * <p>The state of the EC2 instance.</p>
     */
    InstanceState?: string;
    /**
     * <p>The type of the EC2 instance.</p>
     */
    InstanceType?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the AWS Outpost. Only applicable to AWS Outposts
     *       instances.</p>
     */
    OutpostArn?: string;
    /**
     * <p>The launch time of the EC2 instance.</p>
     */
    LaunchTime?: string;
    /**
     * <p>The elastic network interface information of the EC2 instance.</p>
     */
    NetworkInterfaces?: NetworkInterface[];
    /**
     * <p>The platform of the EC2 instance.</p>
     */
    Platform?: string;
    /**
     * <p>The product code of the EC2 instance.</p>
     */
    ProductCodes?: ProductCode[];
    /**
     * <p>The tags of the EC2 instance.</p>
     */
    Tags?: Tag[];
}
export declare namespace InstanceDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceDetails) => any;
}
/**
 * <p>Contains information on the owner of the bucket.</p>
 */
export interface Owner {
    /**
     * <p>The canonical user ID of the bucket owner. For information about locating your canonical
     *       user ID see <a href="https://docs.aws.amazon.com/general/latest/gr/acct-identifiers.html#FindingCanonicalId">Finding Your Account
     *         Canonical User ID.</a>
     *          </p>
     */
    Id?: string;
}
export declare namespace Owner {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Owner) => any;
}
/**
 * <p>Contains information about how permissions are configured for the S3 bucket.</p>
 */
export interface PermissionConfiguration {
    /**
     * <p>Contains information about the bucket level permissions for the S3 bucket.</p>
     */
    BucketLevelPermissions?: BucketLevelPermissions;
    /**
     * <p>Contains information about the account level permissions on the S3 bucket.</p>
     */
    AccountLevelPermissions?: AccountLevelPermissions;
}
export declare namespace PermissionConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PermissionConfiguration) => any;
}
/**
 * <p>Describes the public access policies that apply to the S3 bucket.</p>
 */
export interface PublicAccess {
    /**
     * <p>Contains information about how permissions are configured for the S3 bucket.</p>
     */
    PermissionConfiguration?: PermissionConfiguration;
    /**
     * <p>Describes the effective permission on this bucket after factoring all attached
     *       policies.</p>
     */
    EffectivePermission?: string;
}
export declare namespace PublicAccess {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PublicAccess) => any;
}
/**
 * <p>Contains information on the S3 bucket.</p>
 */
export interface S3BucketDetail {
    /**
     * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
     */
    Arn?: string;
    /**
     * <p>The name of the S3 bucket.</p>
     */
    Name?: string;
    /**
     * <p>Describes whether the bucket is a source or destination bucket.</p>
     */
    Type?: string;
    /**
     * <p>The date and time the bucket was created at.</p>
     */
    CreatedAt?: Date;
    /**
     * <p>The owner of the S3 bucket.</p>
     */
    Owner?: Owner;
    /**
     * <p>All tags attached to the S3 bucket</p>
     */
    Tags?: Tag[];
    /**
     * <p>Describes the server side encryption method used in the S3 bucket.</p>
     */
    DefaultServerSideEncryption?: DefaultServerSideEncryption;
    /**
     * <p>Describes the public access policies that apply to the S3 bucket.</p>
     */
    PublicAccess?: PublicAccess;
}
export declare namespace S3BucketDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3BucketDetail) => any;
}
/**
 * <p>Contains information about the AWS resource associated with the activity that prompted
 *       GuardDuty to generate a finding.</p>
 */
export interface Resource {
    /**
     * <p>The IAM access key details (IAM user information) of a user that engaged in the activity
     *       that prompted GuardDuty to generate a finding.</p>
     */
    AccessKeyDetails?: AccessKeyDetails;
    /**
     * <p>Contains information on the S3 bucket.</p>
     */
    S3BucketDetails?: S3BucketDetail[];
    /**
     * <p>The information about the EC2 instance associated with the activity that prompted
     *       GuardDuty to generate a finding.</p>
     */
    InstanceDetails?: InstanceDetails;
    /**
     * <p>The type of AWS resource.</p>
     */
    ResourceType?: string;
}
export declare namespace Resource {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Resource) => any;
}
/**
 * <p>Contains additional information about the generated finding.</p>
 */
export interface Service {
    /**
     * <p>Information about the activity that is described in a finding.</p>
     */
    Action?: Action;
    /**
     * <p>An evidence object associated with the service.</p>
     */
    Evidence?: Evidence;
    /**
     * <p>Indicates whether this finding is archived.</p>
     */
    Archived?: boolean;
    /**
     * <p>The total count of the occurrences of this finding type.</p>
     */
    Count?: number;
    /**
     * <p>The detector ID for the GuardDuty service.</p>
     */
    DetectorId?: string;
    /**
     * <p>The first-seen timestamp of the activity that prompted GuardDuty to generate this
     *       finding.</p>
     */
    EventFirstSeen?: string;
    /**
     * <p>The last-seen timestamp of the activity that prompted GuardDuty to generate this
     *       finding.</p>
     */
    EventLastSeen?: string;
    /**
     * <p>The resource role information for this finding.</p>
     */
    ResourceRole?: string;
    /**
     * <p>The name of the AWS service (GuardDuty) that generated a finding.</p>
     */
    ServiceName?: string;
    /**
     * <p>Feedback that was submitted about the finding.</p>
     */
    UserFeedback?: string;
}
export declare namespace Service {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Service) => any;
}
/**
 * <p>Contains information about the finding, which is generated when abnormal or suspicious
 *       activity is detected.</p>
 */
export interface Finding {
    /**
     * <p>The ID of the account in which the finding was generated.</p>
     */
    AccountId: string | undefined;
    /**
     * <p>The ARN of the finding.</p>
     */
    Arn: string | undefined;
    /**
     * <p>The confidence score for the finding.</p>
     */
    Confidence?: number;
    /**
     * <p>The time and date when the finding was created.</p>
     */
    CreatedAt: string | undefined;
    /**
     * <p>The description of the finding.</p>
     */
    Description?: string;
    /**
     * <p>The ID of the finding.</p>
     */
    Id: string | undefined;
    /**
     * <p>The partition associated with the finding.</p>
     */
    Partition?: string;
    /**
     * <p>The Region where the finding was generated.</p>
     */
    Region: string | undefined;
    /**
     * <p>Contains information about the AWS resource associated with the activity that prompted
     *       GuardDuty to generate a finding.</p>
     */
    Resource: Resource | undefined;
    /**
     * <p>The version of the schema used for the finding.</p>
     */
    SchemaVersion: string | undefined;
    /**
     * <p>Contains additional information about the generated finding.</p>
     */
    Service?: Service;
    /**
     * <p>The severity of the finding.</p>
     */
    Severity: number | undefined;
    /**
     * <p>The title of the finding.</p>
     */
    Title?: string;
    /**
     * <p>The type of finding.</p>
     */
    Type: string | undefined;
    /**
     * <p>The time and date when the finding was last updated.</p>
     */
    UpdatedAt: string | undefined;
}
export declare namespace Finding {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Finding) => any;
}
/**
 * <p>Contains information about finding statistics.</p>
 */
export interface FindingStatistics {
    /**
     * <p>Represents a map of severity to count statistics for a set of findings.</p>
     */
    CountBySeverity?: {
        [key: string]: number;
    };
}
export declare namespace FindingStatistics {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FindingStatistics) => any;
}
export declare enum FindingStatisticType {
    COUNT_BY_SEVERITY = "COUNT_BY_SEVERITY"
}
export interface GetDetectorRequest {
    /**
     * <p>The unique ID of the detector that you want to get.</p>
     */
    DetectorId: string | undefined;
}
export declare namespace GetDetectorRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDetectorRequest) => any;
}
export interface GetDetectorResponse {
    /**
     * <p>The timestamp of when the detector was created.</p>
     */
    CreatedAt?: string;
    /**
     * <p>The publishing frequency of the finding.</p>
     */
    FindingPublishingFrequency?: FindingPublishingFrequency | string;
    /**
     * <p>The GuardDuty service role.</p>
     */
    ServiceRole: string | undefined;
    /**
     * <p>The detector status.</p>
     */
    Status: DetectorStatus | string | undefined;
    /**
     * <p>The last-updated timestamp for the detector.</p>
     */
    UpdatedAt?: string;
    /**
     * <p>Describes which data sources are enabled for the detector.</p>
     */
    DataSources?: DataSourceConfigurationsResult;
    /**
     * <p>The tags of the detector resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace GetDetectorResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDetectorResponse) => any;
}
export interface GetFilterRequest {
    /**
     * <p>The unique ID of the detector that the filter is associated with.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The name of the filter you want to get.</p>
     */
    FilterName: string | undefined;
}
export declare namespace GetFilterRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetFilterRequest) => any;
}
export interface GetFilterResponse {
    /**
     * <p>The name of the filter.</p>
     */
    Name: string | undefined;
    /**
     * <p>The description of the filter.</p>
     */
    Description?: string;
    /**
     * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
     */
    Action: FilterAction | string | undefined;
    /**
     * <p>Specifies the position of the filter in the list of current filters. Also specifies the
     *       order in which this filter is applied to the findings.</p>
     */
    Rank?: number;
    /**
     * <p>Represents the criteria to be used in the filter for querying findings.</p>
     */
    FindingCriteria: FindingCriteria | undefined;
    /**
     * <p>The tags of the filter resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace GetFilterResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetFilterResponse) => any;
}
export declare enum OrderBy {
    ASC = "ASC",
    DESC = "DESC"
}
/**
 * <p>Contains information about the criteria used for sorting findings.</p>
 */
export interface SortCriteria {
    /**
     * <p>Represents the finding attribute (for example, accountId) to sort findings by.</p>
     */
    AttributeName?: string;
    /**
     * <p>The order by which the sorted findings are to be displayed.</p>
     */
    OrderBy?: OrderBy | string;
}
export declare namespace SortCriteria {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SortCriteria) => any;
}
export interface GetFindingsRequest {
    /**
     * <p>The ID of the detector that specifies the GuardDuty service whose findings you want to
     *       retrieve.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The IDs of the findings that you want to retrieve.</p>
     */
    FindingIds: string[] | undefined;
    /**
     * <p>Represents the criteria used for sorting findings.</p>
     */
    SortCriteria?: SortCriteria;
}
export declare namespace GetFindingsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetFindingsRequest) => any;
}
export interface GetFindingsResponse {
    /**
     * <p>A list of findings.</p>
     */
    Findings: Finding[] | undefined;
}
export declare namespace GetFindingsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetFindingsResponse) => any;
}
export interface GetFindingsStatisticsRequest {
    /**
     * <p>The ID of the detector that specifies the GuardDuty service whose findings' statistics you
     *       want to retrieve.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The types of finding statistics to retrieve.</p>
     */
    FindingStatisticTypes: (FindingStatisticType | string)[] | undefined;
    /**
     * <p>Represents the criteria that is used for querying findings.</p>
     */
    FindingCriteria?: FindingCriteria;
}
export declare namespace GetFindingsStatisticsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetFindingsStatisticsRequest) => any;
}
export interface GetFindingsStatisticsResponse {
    /**
     * <p>The finding statistics object.</p>
     */
    FindingStatistics: FindingStatistics | undefined;
}
export declare namespace GetFindingsStatisticsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetFindingsStatisticsResponse) => any;
}
export interface GetInvitationsCountRequest {
}
export declare namespace GetInvitationsCountRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetInvitationsCountRequest) => any;
}
export interface GetInvitationsCountResponse {
    /**
     * <p>The number of received invitations.</p>
     */
    InvitationsCount?: number;
}
export declare namespace GetInvitationsCountResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetInvitationsCountResponse) => any;
}
export interface GetIPSetRequest {
    /**
     * <p>The unique ID of the detector that the IPSet is associated with.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The unique ID of the IPSet to retrieve.</p>
     */
    IpSetId: string | undefined;
}
export declare namespace GetIPSetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetIPSetRequest) => any;
}
export declare enum IpSetStatus {
    ACTIVATING = "ACTIVATING",
    ACTIVE = "ACTIVE",
    DEACTIVATING = "DEACTIVATING",
    DELETED = "DELETED",
    DELETE_PENDING = "DELETE_PENDING",
    ERROR = "ERROR",
    INACTIVE = "INACTIVE"
}
export interface GetIPSetResponse {
    /**
     * <p>The user-friendly name for the IPSet.</p>
     */
    Name: string | undefined;
    /**
     * <p>The format of the file that contains the IPSet.</p>
     */
    Format: IpSetFormat | string | undefined;
    /**
     * <p>The URI of the file that contains the IPSet. For example:
     *       https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.</p>
     */
    Location: string | undefined;
    /**
     * <p>The status of IPSet file that was uploaded.</p>
     */
    Status: IpSetStatus | string | undefined;
    /**
     * <p>The tags of the IPSet resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace GetIPSetResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetIPSetResponse) => any;
}
export interface GetMasterAccountRequest {
    /**
     * <p>The unique ID of the detector of the GuardDuty member account.</p>
     */
    DetectorId: string | undefined;
}
export declare namespace GetMasterAccountRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMasterAccountRequest) => any;
}
/**
 * <p>Contains information about the administrator account and invitation.</p>
 */
export interface Master {
    /**
     * <p>The ID of the account used as the administrator account.</p>
     */
    AccountId?: string;
    /**
     * <p>The value used to validate the administrator account to the member account.</p>
     */
    InvitationId?: string;
    /**
     * <p>The status of the relationship between the administrator and member accounts.</p>
     */
    RelationshipStatus?: string;
    /**
     * <p>The timestamp when the invitation was sent.</p>
     */
    InvitedAt?: string;
}
export declare namespace Master {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Master) => any;
}
export interface GetMasterAccountResponse {
    /**
     * <p>The administrator account details.</p>
     */
    Master: Master | undefined;
}
export declare namespace GetMasterAccountResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMasterAccountResponse) => any;
}
export interface GetMemberDetectorsRequest {
    /**
     * <p>The detector ID for the administrator account.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The account ID of the member account.</p>
     */
    AccountIds: string[] | undefined;
}
export declare namespace GetMemberDetectorsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMemberDetectorsRequest) => any;
}
/**
 * <p>Contains information on which data sources are enabled for a member account.</p>
 */
export interface MemberDataSourceConfiguration {
    /**
     * <p>The account ID for the member account.</p>
     */
    AccountId: string | undefined;
    /**
     * <p>Contains information on the status of data sources for the account.</p>
     */
    DataSources: DataSourceConfigurationsResult | undefined;
}
export declare namespace MemberDataSourceConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MemberDataSourceConfiguration) => any;
}
export interface GetMemberDetectorsResponse {
    /**
     * <p>An object that describes which data sources are enabled for a member account.</p>
     */
    MemberDataSourceConfigurations: MemberDataSourceConfiguration[] | undefined;
    /**
     * <p>A list of member account IDs that were unable to be processed along with an explanation
     *       for why they were not processed.</p>
     */
    UnprocessedAccounts: UnprocessedAccount[] | undefined;
}
export declare namespace GetMemberDetectorsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMemberDetectorsResponse) => any;
}
export interface GetMembersRequest {
    /**
     * <p>The unique ID of the detector of the GuardDuty account whose members you want to
     *       retrieve.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>A list of account IDs of the GuardDuty member accounts that you want to describe.</p>
     */
    AccountIds: string[] | undefined;
}
export declare namespace GetMembersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMembersRequest) => any;
}
/**
 * <p>Contains information about the member account. </p>
 */
export interface Member {
    /**
     * <p>The ID of the member account.</p>
     */
    AccountId: string | undefined;
    /**
     * <p>The detector ID of the member account.</p>
     */
    DetectorId?: string;
    /**
     * <p>The administrator account ID.</p>
     */
    MasterId: string | undefined;
    /**
     * <p>The email address of the member account.</p>
     */
    Email: string | undefined;
    /**
     * <p>The status of the relationship between the member and the administrator.</p>
     */
    RelationshipStatus: string | undefined;
    /**
     * <p>The timestamp when the invitation was sent.</p>
     */
    InvitedAt?: string;
    /**
     * <p>The last-updated timestamp of the member.</p>
     */
    UpdatedAt: string | undefined;
}
export declare namespace Member {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Member) => any;
}
export interface GetMembersResponse {
    /**
     * <p>A list of members.</p>
     */
    Members: Member[] | undefined;
    /**
     * <p>A list of objects that contain the unprocessed account and a result string that explains
     *       why it was unprocessed.</p>
     */
    UnprocessedAccounts: UnprocessedAccount[] | undefined;
}
export declare namespace GetMembersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetMembersResponse) => any;
}
export interface GetThreatIntelSetRequest {
    /**
     * <p>The unique ID of the detector that the threatIntelSet is associated with.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The unique ID of the threatIntelSet that you want to get.</p>
     */
    ThreatIntelSetId: string | undefined;
}
export declare namespace GetThreatIntelSetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetThreatIntelSetRequest) => any;
}
export declare enum ThreatIntelSetStatus {
    ACTIVATING = "ACTIVATING",
    ACTIVE = "ACTIVE",
    DEACTIVATING = "DEACTIVATING",
    DELETED = "DELETED",
    DELETE_PENDING = "DELETE_PENDING",
    ERROR = "ERROR",
    INACTIVE = "INACTIVE"
}
export interface GetThreatIntelSetResponse {
    /**
     * <p>A user-friendly ThreatIntelSet name displayed in all findings that are generated by
     *       activity that involves IP addresses included in this ThreatIntelSet.</p>
     */
    Name: string | undefined;
    /**
     * <p>The format of the threatIntelSet.</p>
     */
    Format: ThreatIntelSetFormat | string | undefined;
    /**
     * <p>The URI of the file that contains the ThreatIntelSet. For example:
     *       https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.</p>
     */
    Location: string | undefined;
    /**
     * <p>The status of threatIntelSet file uploaded.</p>
     */
    Status: ThreatIntelSetStatus | string | undefined;
    /**
     * <p>The tags of the threat list resource.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace GetThreatIntelSetResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetThreatIntelSetResponse) => any;
}
/**
 * <p>Contains information about the criteria used to query usage statistics.</p>
 */
export interface UsageCriteria {
    /**
     * <p>The account IDs to aggregate usage statistics from.</p>
     */
    AccountIds?: string[];
    /**
     * <p>The data sources to aggregate usage statistics from.</p>
     */
    DataSources: (DataSource | string)[] | undefined;
    /**
     * <p>The resources to aggregate usage statistics from. Only accepts exact resource
     *       names.</p>
     */
    Resources?: string[];
}
export declare namespace UsageCriteria {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UsageCriteria) => any;
}
export declare enum UsageStatisticType {
    SUM_BY_ACCOUNT = "SUM_BY_ACCOUNT",
    SUM_BY_DATA_SOURCE = "SUM_BY_DATA_SOURCE",
    SUM_BY_RESOURCE = "SUM_BY_RESOURCE",
    TOP_RESOURCES = "TOP_RESOURCES"
}
export interface GetUsageStatisticsRequest {
    /**
     * <p>The ID of the detector that specifies the GuardDuty service whose usage statistics you
     *       want to retrieve.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The type of usage statistics to retrieve.</p>
     */
    UsageStatisticType: UsageStatisticType | string | undefined;
    /**
     * <p>Represents the criteria used for querying usage.</p>
     */
    UsageCriteria: UsageCriteria | undefined;
    /**
     * <p>The currency unit you would like to view your usage statistics in. Current valid values
     *       are USD.</p>
     */
    Unit?: string;
    /**
     * <p>The maximum number of results to return in the response.</p>
     */
    MaxResults?: number;
    /**
     * <p>A token to use for paginating results that are returned in the response. Set the value of
     *       this parameter to null for the first request to a list action. For subsequent calls, use the
     *       NextToken value returned from the previous request to continue listing results after the first
     *       page.</p>
     */
    NextToken?: string;
}
export declare namespace GetUsageStatisticsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetUsageStatisticsRequest) => any;
}
/**
 * <p>Contains the total usage with the corresponding currency unit for that value.</p>
 */
export interface Total {
    /**
     * <p>The total usage.</p>
     */
    Amount?: string;
    /**
     * <p>The currency unit that the amount is given in.</p>
     */
    Unit?: string;
}
export declare namespace Total {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Total) => any;
}
/**
 * <p>Contains information on the total of usage based on account IDs.</p>
 */
export interface UsageAccountResult {
    /**
     * <p>The Account ID that generated usage.</p>
     */
    AccountId?: string;
    /**
     * <p>Represents the total of usage for the Account ID.</p>
     */
    Total?: Total;
}
export declare namespace UsageAccountResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UsageAccountResult) => any;
}
/**
 * <p>Contains information on the result of usage based on data source type.</p>
 */
export interface UsageDataSourceResult {
    /**
     * <p>The data source type that generated usage.</p>
     */
    DataSource?: DataSource | string;
    /**
     * <p>Represents the total of usage for the specified data source.</p>
     */
    Total?: Total;
}
export declare namespace UsageDataSourceResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UsageDataSourceResult) => any;
}
/**
 * <p>Contains information on the sum of usage based on an AWS resource.</p>
 */
export interface UsageResourceResult {
    /**
     * <p>The AWS resource that generated usage.</p>
     */
    Resource?: string;
    /**
     * <p>Represents the sum total of usage for the specified resource type.</p>
     */
    Total?: Total;
}
export declare namespace UsageResourceResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UsageResourceResult) => any;
}
/**
 * <p>Contains the result of GuardDuty usage. If a UsageStatisticType is provided the result for
 *       other types will be null. </p>
 */
export interface UsageStatistics {
    /**
     * <p>The usage statistic sum organized by account ID.</p>
     */
    SumByAccount?: UsageAccountResult[];
    /**
     * <p>The usage statistic sum organized by on data source.</p>
     */
    SumByDataSource?: UsageDataSourceResult[];
    /**
     * <p>The usage statistic sum organized by resource.</p>
     */
    SumByResource?: UsageResourceResult[];
    /**
     * <p>Lists the top 50 resources that have generated the most GuardDuty usage, in order from
     *       most to least expensive.</p>
     */
    TopResources?: UsageResourceResult[];
}
export declare namespace UsageStatistics {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UsageStatistics) => any;
}
export interface GetUsageStatisticsResponse {
    /**
     * <p>The usage statistics object. If a UsageStatisticType was provided, the objects
     *       representing other types will be null.</p>
     */
    UsageStatistics?: UsageStatistics;
    /**
     * <p>The pagination parameter to be used on the next list operation to retrieve more
     *       items.</p>
     */
    NextToken?: string;
}
export declare namespace GetUsageStatisticsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetUsageStatisticsResponse) => any;
}
export interface InviteMembersRequest {
    /**
     * <p>The unique ID of the detector of the GuardDuty account that you want to invite members
     *       with.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>A list of account IDs of the accounts that you want to invite to GuardDuty as
     *       members.</p>
     */
    AccountIds: string[] | undefined;
    /**
     * <p>A Boolean value that specifies whether you want to disable email notification to the accounts that you are inviting to GuardDuty as members.</p>
     */
    DisableEmailNotification?: boolean;
    /**
     * <p>The invitation message that you want to send to the accounts that you're inviting to
     *       GuardDuty as members.</p>
     */
    Message?: string;
}
export declare namespace InviteMembersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InviteMembersRequest) => any;
}
export interface InviteMembersResponse {
    /**
     * <p>A list of objects that contain the unprocessed account and a result string that explains
     *       why it was unprocessed.</p>
     */
    UnprocessedAccounts: UnprocessedAccount[] | undefined;
}
export declare namespace InviteMembersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InviteMembersResponse) => any;
}
export interface ListDetectorsRequest {
    /**
     * <p>You can use this parameter to indicate the maximum number of items that you want in the
     *       response. The default value is 50. The maximum value is 50.</p>
     */
    MaxResults?: number;
    /**
     * <p>You can use this parameter when paginating results. Set the value of this parameter to
     *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
     *       in the request with the value of NextToken from the previous response to continue listing
     *       data.</p>
     */
    NextToken?: string;
}
export declare namespace ListDetectorsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDetectorsRequest) => any;
}
export interface ListDetectorsResponse {
    /**
     * <p>A list of detector IDs.</p>
     */
    DetectorIds: string[] | undefined;
    /**
     * <p>The pagination parameter to be used on the next list operation to retrieve more
     *       items.</p>
     */
    NextToken?: string;
}
export declare namespace ListDetectorsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDetectorsResponse) => any;
}
export interface ListFiltersRequest {
    /**
     * <p>The unique ID of the detector that the filter is associated with.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>You can use this parameter to indicate the maximum number of items that you want in the
     *       response. The default value is 50. The maximum value is 50.</p>
     */
    MaxResults?: number;
    /**
     * <p>You can use this parameter when paginating results. Set the value of this parameter to
     *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
     *       in the request with the value of NextToken from the previous response to continue listing
     *       data.</p>
     */
    NextToken?: string;
}
export declare namespace ListFiltersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFiltersRequest) => any;
}
export interface ListFiltersResponse {
    /**
     * <p>A list of filter names.</p>
     */
    FilterNames: string[] | undefined;
    /**
     * <p>The pagination parameter to be used on the next list operation to retrieve more
     *       items.</p>
     */
    NextToken?: string;
}
export declare namespace ListFiltersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFiltersResponse) => any;
}
export interface ListFindingsRequest {
    /**
     * <p>The ID of the detector that specifies the GuardDuty service whose findings you want to
     *       list.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>Represents the criteria used for querying findings. Valid values include:</p>
     *          <ul>
     *             <li>
     *                <p>JSON field name</p>
     *             </li>
     *             <li>
     *                <p>accountId</p>
     *             </li>
     *             <li>
     *                <p>region</p>
     *             </li>
     *             <li>
     *                <p>confidence</p>
     *             </li>
     *             <li>
     *                <p>id</p>
     *             </li>
     *             <li>
     *                <p>resource.accessKeyDetails.accessKeyId</p>
     *             </li>
     *             <li>
     *                <p>resource.accessKeyDetails.principalId</p>
     *             </li>
     *             <li>
     *                <p>resource.accessKeyDetails.userName</p>
     *             </li>
     *             <li>
     *                <p>resource.accessKeyDetails.userType</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.iamInstanceProfile.id</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.imageId</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.instanceId</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.networkInterfaces.ipv6Addresses</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.networkInterfaces.privateIpAddresses.privateIpAddress</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.networkInterfaces.publicDnsName</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.networkInterfaces.publicIp</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.networkInterfaces.securityGroups.groupId</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.networkInterfaces.securityGroups.groupName</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.networkInterfaces.subnetId</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.networkInterfaces.vpcId</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.tags.key</p>
     *             </li>
     *             <li>
     *                <p>resource.instanceDetails.tags.value</p>
     *             </li>
     *             <li>
     *                <p>resource.resourceType</p>
     *             </li>
     *             <li>
     *                <p>service.action.actionType</p>
     *             </li>
     *             <li>
     *                <p>service.action.awsApiCallAction.api</p>
     *             </li>
     *             <li>
     *                <p>service.action.awsApiCallAction.callerType</p>
     *             </li>
     *             <li>
     *                <p>service.action.awsApiCallAction.remoteIpDetails.city.cityName</p>
     *             </li>
     *             <li>
     *                <p>service.action.awsApiCallAction.remoteIpDetails.country.countryName</p>
     *             </li>
     *             <li>
     *                <p>service.action.awsApiCallAction.remoteIpDetails.ipAddressV4</p>
     *             </li>
     *             <li>
     *                <p>service.action.awsApiCallAction.remoteIpDetails.organization.asn</p>
     *             </li>
     *             <li>
     *                <p>service.action.awsApiCallAction.remoteIpDetails.organization.asnOrg</p>
     *             </li>
     *             <li>
     *                <p>service.action.awsApiCallAction.serviceName</p>
     *             </li>
     *             <li>
     *                <p>service.action.dnsRequestAction.domain</p>
     *             </li>
     *             <li>
     *                <p>service.action.networkConnectionAction.blocked</p>
     *             </li>
     *             <li>
     *                <p>service.action.networkConnectionAction.connectionDirection</p>
     *             </li>
     *             <li>
     *                <p>service.action.networkConnectionAction.localPortDetails.port</p>
     *             </li>
     *             <li>
     *                <p>service.action.networkConnectionAction.protocol</p>
     *             </li>
     *             <li>
     *                <p>service.action.networkConnectionAction.remoteIpDetails.city.cityName</p>
     *             </li>
     *             <li>
     *                <p>service.action.networkConnectionAction.remoteIpDetails.country.countryName</p>
     *             </li>
     *             <li>
     *                <p>service.action.networkConnectionAction.remoteIpDetails.ipAddressV4</p>
     *             </li>
     *             <li>
     *                <p>service.action.networkConnectionAction.remoteIpDetails.organization.asn</p>
     *             </li>
     *             <li>
     *                <p>service.action.networkConnectionAction.remoteIpDetails.organization.asnOrg</p>
     *             </li>
     *             <li>
     *                <p>service.action.networkConnectionAction.remotePortDetails.port</p>
     *             </li>
     *             <li>
     *                <p>service.additionalInfo.threatListName</p>
     *             </li>
     *             <li>
     *                <p>service.archived</p>
     *                <p>When this attribute is set to 'true', only archived findings are listed. When it's set
     *           to 'false', only unarchived findings are listed. When this attribute is not set, all
     *           existing findings are listed.</p>
     *             </li>
     *             <li>
     *                <p>service.resourceRole</p>
     *             </li>
     *             <li>
     *                <p>severity</p>
     *             </li>
     *             <li>
     *                <p>type</p>
     *             </li>
     *             <li>
     *                <p>updatedAt</p>
     *                <p>Type: Timestamp in Unix Epoch millisecond format: 1486685375000</p>
     *             </li>
     *          </ul>
     */
    FindingCriteria?: FindingCriteria;
    /**
     * <p>Represents the criteria used for sorting findings.</p>
     */
    SortCriteria?: SortCriteria;
    /**
     * <p>You can use this parameter to indicate the maximum number of items you want in the
     *       response. The default value is 50. The maximum value is 50.</p>
     */
    MaxResults?: number;
    /**
     * <p>You can use this parameter when paginating results. Set the value of this parameter to
     *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
     *       in the request with the value of NextToken from the previous response to continue listing
     *       data.</p>
     */
    NextToken?: string;
}
export declare namespace ListFindingsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFindingsRequest) => any;
}
export interface ListFindingsResponse {
    /**
     * <p>The IDs of the findings that you're listing.</p>
     */
    FindingIds: string[] | undefined;
    /**
     * <p>The pagination parameter to be used on the next list operation to retrieve more
     *       items.</p>
     */
    NextToken?: string;
}
export declare namespace ListFindingsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFindingsResponse) => any;
}
export interface ListInvitationsRequest {
    /**
     * <p>You can use this parameter to indicate the maximum number of items that you want in the
     *       response. The default value is 50. The maximum value is 50.</p>
     */
    MaxResults?: number;
    /**
     * <p>You can use this parameter when paginating results. Set the value of this parameter to
     *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
     *       in the request with the value of NextToken from the previous response to continue listing
     *       data.</p>
     */
    NextToken?: string;
}
export declare namespace ListInvitationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListInvitationsRequest) => any;
}
/**
 * <p>Contains information about the invitation to become a member account.</p>
 */
export interface Invitation {
    /**
     * <p>The ID of the account that the invitation was sent from.</p>
     */
    AccountId?: string;
    /**
     * <p>The ID of the invitation. This value is used to validate the inviter account to the member
     *       account.</p>
     */
    InvitationId?: string;
    /**
     * <p>The status of the relationship between the inviter and invitee accounts.</p>
     */
    RelationshipStatus?: string;
    /**
     * <p>The timestamp when the invitation was sent.</p>
     */
    InvitedAt?: string;
}
export declare namespace Invitation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Invitation) => any;
}
export interface ListInvitationsResponse {
    /**
     * <p>A list of invitation descriptions.</p>
     */
    Invitations?: Invitation[];
    /**
     * <p>The pagination parameter to be used on the next list operation to retrieve more
     *       items.</p>
     */
    NextToken?: string;
}
export declare namespace ListInvitationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListInvitationsResponse) => any;
}
export interface ListIPSetsRequest {
    /**
     * <p>The unique ID of the detector that the IPSet is associated with.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>You can use this parameter to indicate the maximum number of items you want in the
     *       response. The default value is 50. The maximum value is 50.</p>
     */
    MaxResults?: number;
    /**
     * <p>You can use this parameter when paginating results. Set the value of this parameter to
     *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
     *       in the request with the value of NextToken from the previous response to continue listing
     *       data.</p>
     */
    NextToken?: string;
}
export declare namespace ListIPSetsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListIPSetsRequest) => any;
}
export interface ListIPSetsResponse {
    /**
     * <p>The IDs of the IPSet resources.</p>
     */
    IpSetIds: string[] | undefined;
    /**
     * <p>The pagination parameter to be used on the next list operation to retrieve more
     *       items.</p>
     */
    NextToken?: string;
}
export declare namespace ListIPSetsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListIPSetsResponse) => any;
}
export interface ListMembersRequest {
    /**
     * <p>The unique ID of the detector the member is associated with.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>You can use this parameter to indicate the maximum number of items you want in the
     *       response. The default value is 50. The maximum value is 50.</p>
     */
    MaxResults?: number;
    /**
     * <p>You can use this parameter when paginating results. Set the value of this parameter to
     *       null on your first call to the list action. For subsequent calls to the action, fill nextToken
     *       in the request with the value of NextToken from the previous response to continue listing
     *       data.</p>
     */
    NextToken?: string;
    /**
     * <p>Specifies whether to only return associated members or to return all members (including
     *       members who haven't been invited yet or have been disassociated).</p>
     */
    OnlyAssociated?: string;
}
export declare namespace ListMembersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListMembersRequest) => any;
}
export interface ListMembersResponse {
    /**
     * <p>A list of members.</p>
     */
    Members?: Member[];
    /**
     * <p>The pagination parameter to be used on the next list operation to retrieve more
     *       items.</p>
     */
    NextToken?: string;
}
export declare namespace ListMembersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListMembersResponse) => any;
}
export interface ListOrganizationAdminAccountsRequest {
    /**
     * <p>The maximum number of results to return in the response.</p>
     */
    MaxResults?: number;
    /**
     * <p>A token to use for paginating results that are returned in the response. Set the value of
     *       this parameter to null for the first request to a list action. For subsequent calls, use the
     *         <code>NextToken</code> value returned from the previous request to continue listing results
     *       after the first page.</p>
     */
    NextToken?: string;
}
export declare namespace ListOrganizationAdminAccountsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListOrganizationAdminAccountsRequest) => any;
}
export interface ListOrganizationAdminAccountsResponse {
    /**
     * <p>A list of accounts configured as GuardDuty delegated
     *       administrators.</p>
     */
    AdminAccounts?: AdminAccount[];
    /**
     * <p>The pagination parameter to be used on the next list operation to retrieve more
     *       items.</p>
     */
    NextToken?: string;
}
export declare namespace ListOrganizationAdminAccountsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListOrganizationAdminAccountsResponse) => any;
}
export interface ListPublishingDestinationsRequest {
    /**
     * <p>The ID of the detector to retrieve publishing destinations for.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The maximum number of results to return in the response.</p>
     */
    MaxResults?: number;
    /**
     * <p>A token to use for paginating results that are returned in the response. Set the value of
     *       this parameter to null for the first request to a list action. For subsequent calls, use the
     *         <code>NextToken</code> value returned from the previous request to continue listing results
     *       after the first page.</p>
     */
    NextToken?: string;
}
export declare namespace ListPublishingDestinationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPublishingDestinationsRequest) => any;
}
export interface ListPublishingDestinationsResponse {
    /**
     * <p>A <code>Destinations</code> object that includes information about each publishing
     *       destination returned.</p>
     */
    Destinations: Destination[] | undefined;
    /**
     * <p>A token to use for paginating results that are returned in the response. Set the value of
     *       this parameter to null for the first request to a list action. For subsequent calls, use the
     *         <code>NextToken</code> value returned from the previous request to continue listing results
     *       after the first page.</p>
     */
    NextToken?: string;
}
export declare namespace ListPublishingDestinationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPublishingDestinationsResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) for the given GuardDuty resource. </p>
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
     * <p>The tags associated with the resource.</p>
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
export interface ListThreatIntelSetsRequest {
    /**
     * <p>The unique ID of the detector that the threatIntelSet is associated with.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>You can use this parameter to indicate the maximum number of items that you want in the
     *       response. The default value is 50. The maximum value is 50.</p>
     */
    MaxResults?: number;
    /**
     * <p>You can use this parameter to paginate results in the response. Set the value of this
     *       parameter to null on your first call to the list action. For subsequent calls to the action,
     *       fill nextToken in the request with the value of NextToken from the previous response to
     *       continue listing data.</p>
     */
    NextToken?: string;
}
export declare namespace ListThreatIntelSetsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListThreatIntelSetsRequest) => any;
}
export interface ListThreatIntelSetsResponse {
    /**
     * <p>The IDs of the ThreatIntelSet resources.</p>
     */
    ThreatIntelSetIds: string[] | undefined;
    /**
     * <p>The pagination parameter to be used on the next list operation to retrieve more
     *       items.</p>
     */
    NextToken?: string;
}
export declare namespace ListThreatIntelSetsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListThreatIntelSetsResponse) => any;
}
export interface StartMonitoringMembersRequest {
    /**
     * <p>The unique ID of the detector of the GuardDuty administrator account associated with the member
     *       accounts to monitor.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>A list of account IDs of the GuardDuty member accounts to start monitoring.</p>
     */
    AccountIds: string[] | undefined;
}
export declare namespace StartMonitoringMembersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartMonitoringMembersRequest) => any;
}
export interface StartMonitoringMembersResponse {
    /**
     * <p>A list of objects that contain the unprocessed account and a result string that explains
     *       why it was unprocessed.</p>
     */
    UnprocessedAccounts: UnprocessedAccount[] | undefined;
}
export declare namespace StartMonitoringMembersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartMonitoringMembersResponse) => any;
}
export interface StopMonitoringMembersRequest {
    /**
     * <p>The unique ID of the detector associated with the GuardDuty administrator account that is
     *       monitoring member accounts.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>A list of account IDs for the member accounts to stop monitoring.</p>
     */
    AccountIds: string[] | undefined;
}
export declare namespace StopMonitoringMembersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopMonitoringMembersRequest) => any;
}
export interface StopMonitoringMembersResponse {
    /**
     * <p>A list of objects that contain an accountId for each account that could not be processed,
     *       and a result string that indicates why the account was not processed. </p>
     */
    UnprocessedAccounts: UnprocessedAccount[] | undefined;
}
export declare namespace StopMonitoringMembersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopMonitoringMembersResponse) => any;
}
export interface TagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) for the GuardDuty resource to apply a tag to.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The tags to be added to a resource.</p>
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
export interface UnarchiveFindingsRequest {
    /**
     * <p>The ID of the detector associated with the findings to unarchive.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The IDs of the findings to unarchive.</p>
     */
    FindingIds: string[] | undefined;
}
export declare namespace UnarchiveFindingsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnarchiveFindingsRequest) => any;
}
export interface UnarchiveFindingsResponse {
}
export declare namespace UnarchiveFindingsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnarchiveFindingsResponse) => any;
}
export interface UntagResourceRequest {
    /**
     * <p>The Amazon Resource Name (ARN) for the resource to remove tags from.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The tag keys to remove from the resource.</p>
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
export interface UpdateDetectorRequest {
    /**
     * <p>The unique ID of the detector to update.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>Specifies whether the detector is enabled or not enabled.</p>
     */
    Enable?: boolean;
    /**
     * <p>An enum value that specifies how frequently findings are exported, such as to CloudWatch
     *       Events.</p>
     */
    FindingPublishingFrequency?: FindingPublishingFrequency | string;
    /**
     * <p>Describes which data sources will be updated.</p>
     */
    DataSources?: DataSourceConfigurations;
}
export declare namespace UpdateDetectorRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDetectorRequest) => any;
}
export interface UpdateDetectorResponse {
}
export declare namespace UpdateDetectorResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDetectorResponse) => any;
}
export interface UpdateFilterRequest {
    /**
     * <p>The unique ID of the detector that specifies the GuardDuty service where you want to
     *       update a filter.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The name of the filter.</p>
     */
    FilterName: string | undefined;
    /**
     * <p>The description of the filter.</p>
     */
    Description?: string;
    /**
     * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
     */
    Action?: FilterAction | string;
    /**
     * <p>Specifies the position of the filter in the list of current filters. Also specifies the
     *       order in which this filter is applied to the findings.</p>
     */
    Rank?: number;
    /**
     * <p>Represents the criteria to be used in the filter for querying findings.</p>
     */
    FindingCriteria?: FindingCriteria;
}
export declare namespace UpdateFilterRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateFilterRequest) => any;
}
export interface UpdateFilterResponse {
    /**
     * <p>The name of the filter.</p>
     */
    Name: string | undefined;
}
export declare namespace UpdateFilterResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateFilterResponse) => any;
}
export interface UpdateFindingsFeedbackRequest {
    /**
     * <p>The ID of the detector associated with the findings to update feedback for.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The IDs of the findings that you want to mark as useful or not useful.</p>
     */
    FindingIds: string[] | undefined;
    /**
     * <p>The feedback for the finding.</p>
     */
    Feedback: Feedback | string | undefined;
    /**
     * <p>Additional feedback about the GuardDuty findings.</p>
     */
    Comments?: string;
}
export declare namespace UpdateFindingsFeedbackRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateFindingsFeedbackRequest) => any;
}
export interface UpdateFindingsFeedbackResponse {
}
export declare namespace UpdateFindingsFeedbackResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateFindingsFeedbackResponse) => any;
}
export interface UpdateIPSetRequest {
    /**
     * <p>The detectorID that specifies the GuardDuty service whose IPSet you want to update.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The unique ID that specifies the IPSet that you want to update.</p>
     */
    IpSetId: string | undefined;
    /**
     * <p>The unique ID that specifies the IPSet that you want to update.</p>
     */
    Name?: string;
    /**
     * <p>The updated URI of the file that contains the IPSet. For example:
     *       https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key.</p>
     */
    Location?: string;
    /**
     * <p>The updated Boolean value that specifies whether the IPSet is active or not.</p>
     */
    Activate?: boolean;
}
export declare namespace UpdateIPSetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateIPSetRequest) => any;
}
export interface UpdateIPSetResponse {
}
export declare namespace UpdateIPSetResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateIPSetResponse) => any;
}
export interface UpdateMemberDetectorsRequest {
    /**
     * <p>The detector ID of the administrator account.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>A list of member account IDs to be updated.</p>
     */
    AccountIds: string[] | undefined;
    /**
     * <p>Describes which data sources will be updated.</p>
     */
    DataSources?: DataSourceConfigurations;
}
export declare namespace UpdateMemberDetectorsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateMemberDetectorsRequest) => any;
}
export interface UpdateMemberDetectorsResponse {
    /**
     * <p>A list of member account IDs that were unable to be processed along with an explanation
     *       for why they were not processed.</p>
     */
    UnprocessedAccounts: UnprocessedAccount[] | undefined;
}
export declare namespace UpdateMemberDetectorsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateMemberDetectorsResponse) => any;
}
/**
 * <p>Describes whether S3 data event logs will be automatically enabled for new members of the
 *       organization.</p>
 */
export interface OrganizationS3LogsConfiguration {
    /**
     * <p>A value that contains information on whether S3 data event logs will be enabled
     *       automatically as a data source for the organization.</p>
     */
    AutoEnable: boolean | undefined;
}
export declare namespace OrganizationS3LogsConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OrganizationS3LogsConfiguration) => any;
}
/**
 * <p>An object that contains information on which data sources will be configured to be
 *       automatically enabled for new members within the organization.</p>
 */
export interface OrganizationDataSourceConfigurations {
    /**
     * <p>Describes whether S3 data event logs are enabled for new members of the
     *       organization.</p>
     */
    S3Logs?: OrganizationS3LogsConfiguration;
}
export declare namespace OrganizationDataSourceConfigurations {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OrganizationDataSourceConfigurations) => any;
}
export interface UpdateOrganizationConfigurationRequest {
    /**
     * <p>The ID of the detector to update the delegated administrator for.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>Indicates whether to automatically enable member accounts in the organization.</p>
     */
    AutoEnable: boolean | undefined;
    /**
     * <p>Describes which data sources will be updated.</p>
     */
    DataSources?: OrganizationDataSourceConfigurations;
}
export declare namespace UpdateOrganizationConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateOrganizationConfigurationRequest) => any;
}
export interface UpdateOrganizationConfigurationResponse {
}
export declare namespace UpdateOrganizationConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateOrganizationConfigurationResponse) => any;
}
export interface UpdatePublishingDestinationRequest {
    /**
     * <p>The ID of the detector associated with the publishing destinations to update.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The ID of the publishing destination to update.</p>
     */
    DestinationId: string | undefined;
    /**
     * <p>A <code>DestinationProperties</code> object that includes the <code>DestinationArn</code>
     *       and <code>KmsKeyArn</code> of the publishing destination.</p>
     */
    DestinationProperties?: DestinationProperties;
}
export declare namespace UpdatePublishingDestinationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePublishingDestinationRequest) => any;
}
export interface UpdatePublishingDestinationResponse {
}
export declare namespace UpdatePublishingDestinationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePublishingDestinationResponse) => any;
}
export interface UpdateThreatIntelSetRequest {
    /**
     * <p>The detectorID that specifies the GuardDuty service whose ThreatIntelSet you want to
     *       update.</p>
     */
    DetectorId: string | undefined;
    /**
     * <p>The unique ID that specifies the ThreatIntelSet that you want to update.</p>
     */
    ThreatIntelSetId: string | undefined;
    /**
     * <p>The unique ID that specifies the ThreatIntelSet that you want to update.</p>
     */
    Name?: string;
    /**
     * <p>The updated URI of the file that contains the ThreateIntelSet.</p>
     */
    Location?: string;
    /**
     * <p>The updated Boolean value that specifies whether the ThreateIntelSet is active or
     *       not.</p>
     */
    Activate?: boolean;
}
export declare namespace UpdateThreatIntelSetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateThreatIntelSetRequest) => any;
}
export interface UpdateThreatIntelSetResponse {
}
export declare namespace UpdateThreatIntelSetResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateThreatIntelSetResponse) => any;
}
