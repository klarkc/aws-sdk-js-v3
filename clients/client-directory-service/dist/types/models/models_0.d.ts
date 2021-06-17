import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export interface AcceptSharedDirectoryRequest {
    /**
     * <p>Identifier of the shared directory in the directory consumer account. This identifier is
     *       different for each directory owner account. </p>
     */
    SharedDirectoryId: string | undefined;
}
export declare namespace AcceptSharedDirectoryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptSharedDirectoryRequest) => any;
}
export declare enum ShareMethod {
    HANDSHAKE = "HANDSHAKE",
    ORGANIZATIONS = "ORGANIZATIONS"
}
export declare enum ShareStatus {
    DELETED = "Deleted",
    DELETING = "Deleting",
    PENDING_ACCEPTANCE = "PendingAcceptance",
    REJECTED = "Rejected",
    REJECTING = "Rejecting",
    REJECT_FAILED = "RejectFailed",
    SHARED = "Shared",
    SHARE_FAILED = "ShareFailed",
    SHARING = "Sharing"
}
/**
 * <p>Details about the shared directory in the directory owner account for which the share
 *       request in the directory consumer account has been accepted.</p>
 */
export interface SharedDirectory {
    /**
     * <p>Identifier of the directory owner account, which contains the directory that has been
     *       shared to the consumer account.</p>
     */
    OwnerAccountId?: string;
    /**
     * <p>Identifier of the directory in the directory owner account. </p>
     */
    OwnerDirectoryId?: string;
    /**
     * <p>The method used when sharing a directory to determine whether the directory should be
     *       shared within your AWS organization (<code>ORGANIZATIONS</code>) or with any AWS account by
     *       sending a shared directory request (<code>HANDSHAKE</code>).</p>
     */
    ShareMethod?: ShareMethod | string;
    /**
     * <p>Identifier of the directory consumer account that has access to the shared directory
     *         (<code>OwnerDirectoryId</code>) in the directory owner account.</p>
     */
    SharedAccountId?: string;
    /**
     * <p>Identifier of the shared directory in the directory consumer account. This identifier is
     *       different for each directory owner account.</p>
     */
    SharedDirectoryId?: string;
    /**
     * <p>Current directory status of the shared AWS Managed Microsoft AD directory.</p>
     */
    ShareStatus?: ShareStatus | string;
    /**
     * <p>A directory share request that is sent by the directory owner to the directory consumer.
     *       The request includes a typed message to help the directory consumer administrator determine
     *       whether to approve or reject the share invitation.</p>
     */
    ShareNotes?: string;
    /**
     * <p>The date and time that the shared directory was created.</p>
     */
    CreatedDateTime?: Date;
    /**
     * <p>The date and time that the shared directory was last updated.</p>
     */
    LastUpdatedDateTime?: Date;
}
export declare namespace SharedDirectory {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SharedDirectory) => any;
}
export interface AcceptSharedDirectoryResult {
    /**
     * <p>The shared directory in the directory consumer account.</p>
     */
    SharedDirectory?: SharedDirectory;
}
export declare namespace AcceptSharedDirectoryResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptSharedDirectoryResult) => any;
}
/**
 * <p>A client exception has occurred.</p>
 */
export interface ClientException extends __SmithyException, $MetadataBearer {
    name: "ClientException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace ClientException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClientException) => any;
}
/**
 * <p>The specified directory has already been shared with this AWS account.</p>
 */
export interface DirectoryAlreadySharedException extends __SmithyException, $MetadataBearer {
    name: "DirectoryAlreadySharedException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace DirectoryAlreadySharedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DirectoryAlreadySharedException) => any;
}
/**
 * <p>The specified entity could not be found.</p>
 */
export interface EntityDoesNotExistException extends __SmithyException, $MetadataBearer {
    name: "EntityDoesNotExistException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace EntityDoesNotExistException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EntityDoesNotExistException) => any;
}
/**
 * <p>One or more parameters are not valid.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
    name: "InvalidParameterException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace InvalidParameterException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidParameterException) => any;
}
/**
 * <p>An exception has occurred in AWS Directory Service.</p>
 */
export interface ServiceException extends __SmithyException, $MetadataBearer {
    name: "ServiceException";
    $fault: "server";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace ServiceException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceException) => any;
}
/**
 * <p>Client authentication is not available in this region at this time.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "AccessDeniedException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace AccessDeniedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessDeniedException) => any;
}
/**
 * <p>IP address block. This is often the address block of the DNS server used for your on-premises domain. </p>
 */
export interface IpRoute {
    /**
     * <p>IP address block using CIDR format, for example 10.0.0.0/24. This is often the address block of the DNS server used for your on-premises domain. For a single IP address use a CIDR address block with /32. For example 10.0.0.0/32.</p>
     */
    CidrIp?: string;
    /**
     * <p>Description of the address block.</p>
     */
    Description?: string;
}
export declare namespace IpRoute {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IpRoute) => any;
}
export interface AddIpRoutesRequest {
    /**
     * <p>Identifier (ID) of the directory to which to add the address block.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>IP address blocks, using CIDR format, of the traffic to route. This is often the IP address block of the DNS server used for your on-premises domain.</p>
     */
    IpRoutes: IpRoute[] | undefined;
    /**
     * <p>If set to true, updates the inbound and outbound rules of the security group that has the description: "AWS created security group for <i>directory ID</i> directory controllers."
     *          Following are the new rules:
     *       </p>
     *          <p>Inbound:</p>
     *          <ul>
     *             <li>
     *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 88, Source: 0.0.0.0/0</p>
     *             </li>
     *             <li>
     *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 123, Source: 0.0.0.0/0</p>
     *             </li>
     *             <li>
     *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 138, Source: 0.0.0.0/0</p>
     *             </li>
     *             <li>
     *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 389, Source: 0.0.0.0/0</p>
     *             </li>
     *             <li>
     *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 464, Source: 0.0.0.0/0</p>
     *             </li>
     *             <li>
     *                <p>Type: Custom UDP Rule, Protocol: UDP, Range: 445, Source: 0.0.0.0/0</p>
     *             </li>
     *             <li>
     *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 88, Source: 0.0.0.0/0</p>
     *             </li>
     *             <li>
     *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 135, Source: 0.0.0.0/0</p>
     *             </li>
     *             <li>
     *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 445, Source: 0.0.0.0/0</p>
     *             </li>
     *             <li>
     *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 464, Source: 0.0.0.0/0</p>
     *             </li>
     *             <li>
     *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 636, Source: 0.0.0.0/0</p>
     *             </li>
     *             <li>
     *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 1024-65535, Source: 0.0.0.0/0</p>
     *             </li>
     *             <li>
     *                <p>Type: Custom TCP Rule, Protocol: TCP, Range: 3268-33269, Source: 0.0.0.0/0</p>
     *             </li>
     *             <li>
     *                <p>Type: DNS (UDP), Protocol: UDP, Range: 53, Source: 0.0.0.0/0</p>
     *             </li>
     *             <li>
     *                <p>Type: DNS (TCP), Protocol: TCP, Range: 53, Source: 0.0.0.0/0</p>
     *             </li>
     *             <li>
     *                <p>Type: LDAP, Protocol: TCP, Range: 389, Source: 0.0.0.0/0</p>
     *             </li>
     *             <li>
     *                <p>Type: All ICMP, Protocol: All, Range: N/A, Source: 0.0.0.0/0</p>
     *             </li>
     *          </ul>
     *
     *          <p></p>
     *          <p>Outbound:</p>
     *          <ul>
     *             <li>
     *                <p>Type: All traffic, Protocol: All, Range: All, Destination: 0.0.0.0/0</p>
     *             </li>
     *          </ul>
     *          <p>These security rules impact an internal network interface that is not exposed publicly.</p>
     */
    UpdateSecurityGroupForDirectoryControllers?: boolean;
}
export declare namespace AddIpRoutesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AddIpRoutesRequest) => any;
}
export interface AddIpRoutesResult {
}
export declare namespace AddIpRoutesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AddIpRoutesResult) => any;
}
/**
 * <p>The specified directory is unavailable or could not be found.</p>
 */
export interface DirectoryUnavailableException extends __SmithyException, $MetadataBearer {
    name: "DirectoryUnavailableException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace DirectoryUnavailableException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DirectoryUnavailableException) => any;
}
/**
 * <p>The specified entity already exists.</p>
 */
export interface EntityAlreadyExistsException extends __SmithyException, $MetadataBearer {
    name: "EntityAlreadyExistsException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace EntityAlreadyExistsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EntityAlreadyExistsException) => any;
}
/**
 * <p>The maximum allowed number of IP addresses was exceeded. The default limit is 100 IP address blocks.</p>
 */
export interface IpRouteLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "IpRouteLimitExceededException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace IpRouteLimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IpRouteLimitExceededException) => any;
}
/**
 * <p>Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.</p>
 */
export interface DirectoryVpcSettings {
    /**
     * <p>The identifier of the VPC in which to create the directory.</p>
     */
    VpcId: string | undefined;
    /**
     * <p>The identifiers of the subnets for the directory servers. The two subnets must be in
     *       different Availability Zones. AWS Directory Service creates a directory server and a DNS
     *       server in each of these subnets.</p>
     */
    SubnetIds: string[] | undefined;
}
export declare namespace DirectoryVpcSettings {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DirectoryVpcSettings) => any;
}
export interface AddRegionRequest {
    /**
     * <p>The identifier of the directory to which you want to add Region replication.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The name of the Region where you want to add domain controllers for replication. For
     *       example, <code>us-east-1</code>.</p>
     */
    RegionName: string | undefined;
    /**
     * <p>Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.</p>
     */
    VPCSettings: DirectoryVpcSettings | undefined;
}
export declare namespace AddRegionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AddRegionRequest) => any;
}
export interface AddRegionResult {
}
export declare namespace AddRegionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AddRegionResult) => any;
}
/**
 * <p>The Region you specified is the same Region where the AWS Managed Microsoft AD directory
 *       was created. Specify a different Region and try again.</p>
 */
export interface DirectoryAlreadyInRegionException extends __SmithyException, $MetadataBearer {
    name: "DirectoryAlreadyInRegionException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace DirectoryAlreadyInRegionException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DirectoryAlreadyInRegionException) => any;
}
/**
 * <p>The specified directory does not exist in the system.</p>
 */
export interface DirectoryDoesNotExistException extends __SmithyException, $MetadataBearer {
    name: "DirectoryDoesNotExistException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace DirectoryDoesNotExistException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DirectoryDoesNotExistException) => any;
}
/**
 * <p>You have reached the limit for maximum number of simultaneous Region replications per
 *       directory.</p>
 */
export interface RegionLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "RegionLimitExceededException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace RegionLimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RegionLimitExceededException) => any;
}
/**
 * <p>The operation is not supported.</p>
 */
export interface UnsupportedOperationException extends __SmithyException, $MetadataBearer {
    name: "UnsupportedOperationException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace UnsupportedOperationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnsupportedOperationException) => any;
}
/**
 * <p>Metadata assigned to a directory consisting of a key-value pair.</p>
 */
export interface Tag {
    /**
     * <p>Required name of the tag. The string value can be Unicode characters and cannot be prefixed with "aws:". The string can contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").</p>
     */
    Key: string | undefined;
    /**
     * <p>The optional value of the tag. The string value can be Unicode characters. The string can contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").</p>
     */
    Value: string | undefined;
}
export declare namespace Tag {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Tag) => any;
}
export interface AddTagsToResourceRequest {
    /**
     * <p>Identifier (ID) for the directory to which to add the tag.</p>
     */
    ResourceId: string | undefined;
    /**
     * <p>The tags to be assigned to the directory.</p>
     */
    Tags: Tag[] | undefined;
}
export declare namespace AddTagsToResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AddTagsToResourceRequest) => any;
}
export interface AddTagsToResourceResult {
}
export declare namespace AddTagsToResourceResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AddTagsToResourceResult) => any;
}
/**
 * <p>The maximum allowed number of tags was exceeded.</p>
 */
export interface TagLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "TagLimitExceededException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace TagLimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagLimitExceededException) => any;
}
/**
 * <p>Represents a named directory attribute.</p>
 */
export interface Attribute {
    /**
     * <p>The name of the attribute.</p>
     */
    Name?: string;
    /**
     * <p>The value of the attribute.</p>
     */
    Value?: string;
}
export declare namespace Attribute {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Attribute) => any;
}
/**
 * <p>An authentication error occurred.</p>
 */
export interface AuthenticationFailedException extends __SmithyException, $MetadataBearer {
    name: "AuthenticationFailedException";
    $fault: "client";
    /**
     * <p>The textual message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The identifier of the request that caused the exception.</p>
     */
    RequestId?: string;
}
export declare namespace AuthenticationFailedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AuthenticationFailedException) => any;
}
export interface CancelSchemaExtensionRequest {
    /**
     * <p>The identifier of the directory whose schema extension will be canceled.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The identifier of the schema extension that will be canceled.</p>
     */
    SchemaExtensionId: string | undefined;
}
export declare namespace CancelSchemaExtensionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelSchemaExtensionRequest) => any;
}
export interface CancelSchemaExtensionResult {
}
export declare namespace CancelSchemaExtensionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelSchemaExtensionResult) => any;
}
/**
 * <p>Contains information about the client certificate authentication settings for the <code>RegisterCertificate</code> and <code>DescribeCertificate</code> operations. </p>
 */
export interface ClientCertAuthSettings {
    /**
     * <p>Specifies the URL of the default OCSP server used to check for revocation status. A secondary value to any OCSP address found in the AIA extension of the user certificate.</p>
     */
    OCSPUrl?: string;
}
export declare namespace ClientCertAuthSettings {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClientCertAuthSettings) => any;
}
export declare enum CertificateState {
    DEREGISTERED = "Deregistered",
    DEREGISTERING = "Deregistering",
    DEREGISTER_FAILED = "DeregisterFailed",
    REGISTERED = "Registered",
    REGISTERING = "Registering",
    REGISTER_FAILED = "RegisterFailed"
}
export declare enum CertificateType {
    CLIENT_CERT_AUTH = "ClientCertAuth",
    CLIENT_LDAPS = "ClientLDAPS"
}
/**
 * <p>Information about the certificate.</p>
 */
export interface Certificate {
    /**
     * <p>The identifier of the certificate.</p>
     */
    CertificateId?: string;
    /**
     * <p>The state of the certificate.</p>
     */
    State?: CertificateState | string;
    /**
     * <p>Describes a state change for the certificate.</p>
     */
    StateReason?: string;
    /**
     * <p>The common name for the certificate.</p>
     */
    CommonName?: string;
    /**
     * <p>The date and time that the certificate was registered.</p>
     */
    RegisteredDateTime?: Date;
    /**
     * <p>The date and time when the certificate will expire.</p>
     */
    ExpiryDateTime?: Date;
    /**
     * <p>The function that the registered certificate performs. Valid values include <code>ClientLDAPS</code> or <code>ClientCertAuth</code>. The default value is <code>ClientLDAPS</code>.</p>
     */
    Type?: CertificateType | string;
    /**
     * <p>A <code>ClientCertAuthSettings</code> object that contains client certificate authentication settings.</p>
     */
    ClientCertAuthSettings?: ClientCertAuthSettings;
}
export declare namespace Certificate {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Certificate) => any;
}
/**
 * <p>The certificate has already been registered into the system.</p>
 */
export interface CertificateAlreadyExistsException extends __SmithyException, $MetadataBearer {
    name: "CertificateAlreadyExistsException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace CertificateAlreadyExistsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CertificateAlreadyExistsException) => any;
}
/**
 * <p>The certificate is not present in the system for describe or deregister activities.</p>
 */
export interface CertificateDoesNotExistException extends __SmithyException, $MetadataBearer {
    name: "CertificateDoesNotExistException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace CertificateDoesNotExistException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CertificateDoesNotExistException) => any;
}
/**
 * <p>Contains general information about a certificate.</p>
 */
export interface CertificateInfo {
    /**
     * <p>The identifier of the certificate.</p>
     */
    CertificateId?: string;
    /**
     * <p>The common name for the certificate.</p>
     */
    CommonName?: string;
    /**
     * <p>The state of the certificate.</p>
     */
    State?: CertificateState | string;
    /**
     * <p>The date and time when the certificate will expire.</p>
     */
    ExpiryDateTime?: Date;
    /**
     * <p>The function that the registered certificate performs. Valid values include <code>ClientLDAPS</code> or <code>ClientCertAuth</code>. The default value is <code>ClientLDAPS</code>.</p>
     */
    Type?: CertificateType | string;
}
export declare namespace CertificateInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CertificateInfo) => any;
}
/**
 * <p>The certificate is being used for the LDAP security connection and cannot be removed
 *       without disabling LDAP security.</p>
 */
export interface CertificateInUseException extends __SmithyException, $MetadataBearer {
    name: "CertificateInUseException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace CertificateInUseException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CertificateInUseException) => any;
}
/**
 * <p>The certificate could not be added because the certificate limit has been reached.</p>
 */
export interface CertificateLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "CertificateLimitExceededException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace CertificateLimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CertificateLimitExceededException) => any;
}
export declare enum ClientAuthenticationType {
    SMART_CARD = "SmartCard"
}
/**
 * <p>Contains information about a computer account in a directory.</p>
 */
export interface Computer {
    /**
     * <p>The identifier of the computer.</p>
     */
    ComputerId?: string;
    /**
     * <p>The computer name.</p>
     */
    ComputerName?: string;
    /**
     * <p>An array of <a>Attribute</a> objects containing the LDAP attributes that belong to the
     *             computer account.</p>
     */
    ComputerAttributes?: Attribute[];
}
export declare namespace Computer {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Computer) => any;
}
export declare enum ReplicationScope {
    Domain = "Domain"
}
/**
 * <p>Points to a remote domain with which you are setting up a trust relationship. Conditional forwarders are required in order to set up a trust relationship with another domain.</p>
 */
export interface ConditionalForwarder {
    /**
     * <p>The fully qualified domain name (FQDN) of the remote domains pointed to by the conditional forwarder.</p>
     */
    RemoteDomainName?: string;
    /**
     * <p>The IP addresses of the remote DNS server associated with RemoteDomainName. This is the IP address of the DNS server that your conditional forwarder points to.</p>
     */
    DnsIpAddrs?: string[];
    /**
     * <p>The replication scope of the conditional forwarder. The only allowed value is
     *                   <code>Domain</code>, which will replicate the conditional forwarder to all of the
     *                   domain controllers for your AWS directory.</p>
     */
    ReplicationScope?: ReplicationScope | string;
}
export declare namespace ConditionalForwarder {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConditionalForwarder) => any;
}
/**
 * <p>Contains information for the <a>ConnectDirectory</a> operation when an AD
 *       Connector directory is being created.</p>
 */
export interface DirectoryConnectSettings {
    /**
     * <p>The identifier of the VPC in which the AD Connector is created.</p>
     */
    VpcId: string | undefined;
    /**
     * <p>A list of subnet identifiers in the VPC in which the AD Connector is created.</p>
     */
    SubnetIds: string[] | undefined;
    /**
     * <p>A list of one or more IP addresses of DNS servers or domain controllers in the on-premises
     *       directory.</p>
     */
    CustomerDnsIps: string[] | undefined;
    /**
     * <p>The user name of an account in the on-premises directory that is used to connect to the
     *       directory. This account must have the following permissions:</p>
     *          <ul>
     *             <li>
     *                <p>Read users and groups</p>
     *             </li>
     *             <li>
     *                <p>Create computer objects</p>
     *             </li>
     *             <li>
     *                <p>Join computers to the domain</p>
     *             </li>
     *          </ul>
     */
    CustomerUserName: string | undefined;
}
export declare namespace DirectoryConnectSettings {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DirectoryConnectSettings) => any;
}
export declare enum DirectorySize {
    LARGE = "Large",
    SMALL = "Small"
}
/**
 * <p>Contains the inputs for the <a>ConnectDirectory</a> operation.</p>
 */
export interface ConnectDirectoryRequest {
    /**
     * <p>The fully qualified name of the on-premises directory, such as
     *         <code>corp.example.com</code>.</p>
     */
    Name: string | undefined;
    /**
     * <p>The NetBIOS name of the on-premises directory, such as <code>CORP</code>.</p>
     */
    ShortName?: string;
    /**
     * <p>The password for the on-premises user account.</p>
     */
    Password: string | undefined;
    /**
     * <p>A description for the directory.</p>
     */
    Description?: string;
    /**
     * <p>The size of the directory.</p>
     */
    Size: DirectorySize | string | undefined;
    /**
     * <p>A <a>DirectoryConnectSettings</a> object that contains additional information
     *       for the operation.</p>
     */
    ConnectSettings: DirectoryConnectSettings | undefined;
    /**
     * <p>The tags to be assigned to AD Connector.</p>
     */
    Tags?: Tag[];
}
export declare namespace ConnectDirectoryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConnectDirectoryRequest) => any;
}
/**
 * <p>Contains the results of the <a>ConnectDirectory</a> operation.</p>
 */
export interface ConnectDirectoryResult {
    /**
     * <p>The identifier of the new directory.</p>
     */
    DirectoryId?: string;
}
export declare namespace ConnectDirectoryResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConnectDirectoryResult) => any;
}
/**
 * <p>The maximum number of directories in the region has been reached. You can use the
 *             <a>GetDirectoryLimits</a> operation to determine your directory limits in the
 *             region.</p>
 */
export interface DirectoryLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "DirectoryLimitExceededException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace DirectoryLimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DirectoryLimitExceededException) => any;
}
/**
 * <p>Contains the inputs for the <a>CreateAlias</a> operation.</p>
 */
export interface CreateAliasRequest {
    /**
     * <p>The identifier of the directory for which to create the alias.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The requested alias.</p>
     *          <p>The alias must be unique amongst all aliases in AWS. This operation throws an
     *             <code>EntityAlreadyExistsException</code> error if the alias already exists.</p>
     */
    Alias: string | undefined;
}
export declare namespace CreateAliasRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateAliasRequest) => any;
}
/**
 * <p>Contains the results of the <a>CreateAlias</a> operation.</p>
 */
export interface CreateAliasResult {
    /**
     * <p>The identifier of the directory.</p>
     */
    DirectoryId?: string;
    /**
     * <p>The alias for the directory.</p>
     */
    Alias?: string;
}
export declare namespace CreateAliasResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateAliasResult) => any;
}
/**
 * <p>Contains the inputs for the <a>CreateComputer</a> operation.</p>
 */
export interface CreateComputerRequest {
    /**
     * <p>The identifier of the directory in which to create the computer account.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The name of the computer account.</p>
     */
    ComputerName: string | undefined;
    /**
     * <p>A one-time password that is used to join the computer to the directory. You should generate a random, strong password to use for this parameter.</p>
     */
    Password: string | undefined;
    /**
     * <p>The fully-qualified distinguished name of the organizational unit to place the computer account in.</p>
     */
    OrganizationalUnitDistinguishedName?: string;
    /**
     * <p>An array of <a>Attribute</a> objects that contain any LDAP attributes to apply to the
     *             computer account.</p>
     */
    ComputerAttributes?: Attribute[];
}
export declare namespace CreateComputerRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateComputerRequest) => any;
}
/**
 * <p>Contains the results for the <a>CreateComputer</a> operation.</p>
 */
export interface CreateComputerResult {
    /**
     * <p>A <a>Computer</a> object that represents the computer account.</p>
     */
    Computer?: Computer;
}
export declare namespace CreateComputerResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateComputerResult) => any;
}
/**
 * <p>Initiates the creation of a conditional forwarder for your AWS Directory Service for Microsoft Active Directory. Conditional forwarders are required in order to set up a trust relationship with another domain.</p>
 */
export interface CreateConditionalForwarderRequest {
    /**
     * <p>The directory ID of the AWS directory for which you are creating the conditional forwarder.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The fully qualified domain name (FQDN) of the remote domain with which you will set up a trust relationship.</p>
     */
    RemoteDomainName: string | undefined;
    /**
     * <p>The IP addresses of the remote DNS server associated with RemoteDomainName.</p>
     */
    DnsIpAddrs: string[] | undefined;
}
export declare namespace CreateConditionalForwarderRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateConditionalForwarderRequest) => any;
}
/**
 * <p>The result of a CreateConditinalForwarder request.</p>
 */
export interface CreateConditionalForwarderResult {
}
export declare namespace CreateConditionalForwarderResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateConditionalForwarderResult) => any;
}
/**
 * <p>Contains the inputs for the <a>CreateDirectory</a> operation. </p>
 */
export interface CreateDirectoryRequest {
    /**
     * <p>The fully qualified name for the directory, such as <code>corp.example.com</code>.</p>
     */
    Name: string | undefined;
    /**
     * <p>The NetBIOS name of the directory, such as <code>CORP</code>.</p>
     */
    ShortName?: string;
    /**
     * <p>The password for the directory administrator. The directory creation process creates a
     *       directory administrator account with the user name <code>Administrator</code> and this
     *       password.</p>
     *          <p>If you need to change the password for the administrator account, you can use the <a>ResetUserPassword</a> API call.</p>
     *          <p>The regex pattern for this string is made up of the following conditions:</p>
     *          <ul>
     *             <li>
     *                <p>Length (?=^.{8,64}$) – Must be between 8 and 64 characters</p>
     *             </li>
     *          </ul>
     *          <p>AND any 3 of the following password complexity rules required by Active Directory:</p>
     *          <ul>
     *             <li>
     *                <p>Numbers and upper case and lowercase (?=.*\d)(?=.*[A-Z])(?=.*[a-z])</p>
     *             </li>
     *             <li>
     *                <p>Numbers and special characters and lower case
     *           (?=.*\d)(?=.*[^A-Za-z0-9\s])(?=.*[a-z])</p>
     *             </li>
     *             <li>
     *                <p>Special characters and upper case and lower case
     *           (?=.*[^A-Za-z0-9\s])(?=.*[A-Z])(?=.*[a-z])</p>
     *             </li>
     *             <li>
     *                <p>Numbers and upper case and special characters
     *           (?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9\s])</p>
     *             </li>
     *          </ul>
     *          <p>For additional information about how Active Directory passwords are enforced, see <a href="https://docs.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/password-must-meet-complexity-requirements">Password must meet complexity requirements</a> on the Microsoft website.</p>
     */
    Password: string | undefined;
    /**
     * <p>A description for the directory.</p>
     */
    Description?: string;
    /**
     * <p>The size of the directory.</p>
     */
    Size: DirectorySize | string | undefined;
    /**
     * <p>A <a>DirectoryVpcSettings</a> object that contains additional information for
     *       the operation.</p>
     */
    VpcSettings?: DirectoryVpcSettings;
    /**
     * <p>The tags to be assigned to the Simple AD directory.</p>
     */
    Tags?: Tag[];
}
export declare namespace CreateDirectoryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDirectoryRequest) => any;
}
/**
 * <p>Contains the results of the <a>CreateDirectory</a> operation.</p>
 */
export interface CreateDirectoryResult {
    /**
     * <p>The identifier of the directory that was created.</p>
     */
    DirectoryId?: string;
}
export declare namespace CreateDirectoryResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDirectoryResult) => any;
}
export interface CreateLogSubscriptionRequest {
    /**
     * <p>Identifier of the directory to which you want to subscribe and receive real-time logs to
     *       your specified CloudWatch log group.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The name of the CloudWatch log group where the real-time domain controller logs are
     *       forwarded.</p>
     */
    LogGroupName: string | undefined;
}
export declare namespace CreateLogSubscriptionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLogSubscriptionRequest) => any;
}
export interface CreateLogSubscriptionResult {
}
export declare namespace CreateLogSubscriptionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLogSubscriptionResult) => any;
}
/**
 * <p>The account does not have sufficient permission to perform the operation.</p>
 */
export interface InsufficientPermissionsException extends __SmithyException, $MetadataBearer {
    name: "InsufficientPermissionsException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace InsufficientPermissionsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InsufficientPermissionsException) => any;
}
export declare enum DirectoryEdition {
    ENTERPRISE = "Enterprise",
    STANDARD = "Standard"
}
/**
 * <p>Creates an AWS Managed Microsoft AD directory.</p>
 */
export interface CreateMicrosoftADRequest {
    /**
     * <p>The fully qualified domain name for the AWS Managed Microsoft AD directory, such as
     *        <code>corp.example.com</code>. This name will resolve inside your VPC only. It does not need
     *        to be publicly resolvable.</p>
     */
    Name: string | undefined;
    /**
     * <p>The NetBIOS name for your domain, such as <code>CORP</code>. If you don't specify a NetBIOS name, it will default to the first part of your directory DNS. For example, <code>CORP</code> for the directory DNS <code>corp.example.com</code>. </p>
     */
    ShortName?: string;
    /**
     * <p>The password for the default administrative user named <code>Admin</code>.</p>
     *          <p>If you need to change the password for the administrator account, you can use the <a>ResetUserPassword</a> API call.</p>
     */
    Password: string | undefined;
    /**
     * <p>A description for the directory. This label will appear on the AWS console <code>Directory Details</code> page after the directory is created.</p>
     */
    Description?: string;
    /**
     * <p>Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.</p>
     */
    VpcSettings: DirectoryVpcSettings | undefined;
    /**
     * <p>AWS Managed Microsoft AD is available in two editions: <code>Standard</code> and <code>Enterprise</code>. <code>Enterprise</code> is the default.</p>
     */
    Edition?: DirectoryEdition | string;
    /**
     * <p>The tags to be assigned to the AWS Managed Microsoft AD directory.</p>
     */
    Tags?: Tag[];
}
export declare namespace CreateMicrosoftADRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateMicrosoftADRequest) => any;
}
/**
 * <p>Result of a CreateMicrosoftAD request.</p>
 */
export interface CreateMicrosoftADResult {
    /**
     * <p>The identifier of the directory that was created.</p>
     */
    DirectoryId?: string;
}
export declare namespace CreateMicrosoftADResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateMicrosoftADResult) => any;
}
/**
 * <p>Contains the inputs for the <a>CreateSnapshot</a> operation.</p>
 */
export interface CreateSnapshotRequest {
    /**
     * <p>The identifier of the directory of which to take a snapshot.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The descriptive name to apply to the snapshot.</p>
     */
    Name?: string;
}
export declare namespace CreateSnapshotRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSnapshotRequest) => any;
}
/**
 * <p>Contains the results of the <a>CreateSnapshot</a> operation.</p>
 */
export interface CreateSnapshotResult {
    /**
     * <p>The identifier of the snapshot that was created.</p>
     */
    SnapshotId?: string;
}
export declare namespace CreateSnapshotResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSnapshotResult) => any;
}
/**
 * <p>The maximum number of manual snapshots for the directory has been reached. You can
 *       use the <a>GetSnapshotLimits</a> operation to determine the snapshot limits for a
 *       directory.</p>
 */
export interface SnapshotLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "SnapshotLimitExceededException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace SnapshotLimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SnapshotLimitExceededException) => any;
}
export declare enum SelectiveAuth {
    DISABLED = "Disabled",
    ENABLED = "Enabled"
}
export declare enum TrustDirection {
    ONE_WAY_INCOMING = "One-Way: Incoming",
    ONE_WAY_OUTGOING = "One-Way: Outgoing",
    TWO_WAY = "Two-Way"
}
export declare enum TrustType {
    EXTERNAL = "External",
    FOREST = "Forest"
}
/**
 * <p>AWS Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your AWS Managed Microsoft AD directory, and your existing on-premises Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p>
 *          <p>This action initiates the creation of the AWS side of a trust relationship between an AWS Managed Microsoft AD directory and an external domain.</p>
 */
export interface CreateTrustRequest {
    /**
     * <p>The Directory ID of the AWS Managed Microsoft AD directory for which to establish the trust relationship.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The Fully Qualified Domain Name (FQDN) of the external domain for which to create the trust relationship.</p>
     */
    RemoteDomainName: string | undefined;
    /**
     * <p>The trust password. The must be the same password that was used when creating the trust relationship on the external domain.</p>
     */
    TrustPassword: string | undefined;
    /**
     * <p>The direction of the trust relationship.</p>
     */
    TrustDirection: TrustDirection | string | undefined;
    /**
     * <p>The trust relationship type. <code>Forest</code> is the default.</p>
     */
    TrustType?: TrustType | string;
    /**
     * <p>The IP addresses of the remote DNS server associated with RemoteDomainName.</p>
     */
    ConditionalForwarderIpAddrs?: string[];
    /**
     * <p>Optional parameter to enable selective authentication for the trust.</p>
     */
    SelectiveAuth?: SelectiveAuth | string;
}
export declare namespace CreateTrustRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateTrustRequest) => any;
}
/**
 * <p>The result of a CreateTrust request.</p>
 */
export interface CreateTrustResult {
    /**
     * <p>A unique identifier for the trust relationship that was created.</p>
     */
    TrustId?: string;
}
export declare namespace CreateTrustResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateTrustResult) => any;
}
/**
 * <p>Deletes a conditional forwarder.</p>
 */
export interface DeleteConditionalForwarderRequest {
    /**
     * <p>The directory ID for which you are deleting the conditional forwarder.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The fully qualified domain name (FQDN) of the remote domain with which you are deleting the conditional forwarder.</p>
     */
    RemoteDomainName: string | undefined;
}
export declare namespace DeleteConditionalForwarderRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteConditionalForwarderRequest) => any;
}
/**
 * <p>The result of a DeleteConditionalForwarder request.</p>
 */
export interface DeleteConditionalForwarderResult {
}
export declare namespace DeleteConditionalForwarderResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteConditionalForwarderResult) => any;
}
/**
 * <p>Contains the inputs for the <a>DeleteDirectory</a> operation.</p>
 */
export interface DeleteDirectoryRequest {
    /**
     * <p>The identifier of the directory to delete.</p>
     */
    DirectoryId: string | undefined;
}
export declare namespace DeleteDirectoryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDirectoryRequest) => any;
}
/**
 * <p>Contains the results of the <a>DeleteDirectory</a> operation.</p>
 */
export interface DeleteDirectoryResult {
    /**
     * <p>The directory identifier.</p>
     */
    DirectoryId?: string;
}
export declare namespace DeleteDirectoryResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDirectoryResult) => any;
}
export interface DeleteLogSubscriptionRequest {
    /**
     * <p>Identifier of the directory whose log subscription you want to delete.</p>
     */
    DirectoryId: string | undefined;
}
export declare namespace DeleteLogSubscriptionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLogSubscriptionRequest) => any;
}
export interface DeleteLogSubscriptionResult {
}
export declare namespace DeleteLogSubscriptionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLogSubscriptionResult) => any;
}
/**
 * <p>Contains the inputs for the <a>DeleteSnapshot</a> operation.</p>
 */
export interface DeleteSnapshotRequest {
    /**
     * <p>The identifier of the directory snapshot to be deleted.</p>
     */
    SnapshotId: string | undefined;
}
export declare namespace DeleteSnapshotRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSnapshotRequest) => any;
}
/**
 * <p>Contains the results of the <a>DeleteSnapshot</a> operation.</p>
 */
export interface DeleteSnapshotResult {
    /**
     * <p>The identifier of the directory snapshot that was deleted.</p>
     */
    SnapshotId?: string;
}
export declare namespace DeleteSnapshotResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSnapshotResult) => any;
}
/**
 * <p>Deletes the local side of an existing trust relationship between the AWS Managed Microsoft AD directory and the external domain.</p>
 */
export interface DeleteTrustRequest {
    /**
     * <p>The Trust ID of the trust relationship to be deleted.</p>
     */
    TrustId: string | undefined;
    /**
     * <p>Delete a conditional forwarder as part of a DeleteTrustRequest.</p>
     */
    DeleteAssociatedConditionalForwarder?: boolean;
}
export declare namespace DeleteTrustRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTrustRequest) => any;
}
/**
 * <p>The result of a DeleteTrust request.</p>
 */
export interface DeleteTrustResult {
    /**
     * <p>The Trust ID of the trust relationship that was deleted.</p>
     */
    TrustId?: string;
}
export declare namespace DeleteTrustResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTrustResult) => any;
}
export interface DeregisterCertificateRequest {
    /**
     * <p>The identifier of the directory.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The identifier of the certificate.</p>
     */
    CertificateId: string | undefined;
}
export declare namespace DeregisterCertificateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeregisterCertificateRequest) => any;
}
export interface DeregisterCertificateResult {
}
export declare namespace DeregisterCertificateResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeregisterCertificateResult) => any;
}
/**
 * <p>Removes the specified directory as a publisher to the specified SNS topic.</p>
 */
export interface DeregisterEventTopicRequest {
    /**
     * <p>The Directory ID to remove as a publisher. This directory will no longer send messages to the specified SNS topic.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The name of the SNS topic from which to remove the directory as a publisher.</p>
     */
    TopicName: string | undefined;
}
export declare namespace DeregisterEventTopicRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeregisterEventTopicRequest) => any;
}
/**
 * <p>The result of a DeregisterEventTopic request.</p>
 */
export interface DeregisterEventTopicResult {
}
export declare namespace DeregisterEventTopicResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeregisterEventTopicResult) => any;
}
export interface DescribeCertificateRequest {
    /**
     * <p>The identifier of the directory.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The identifier of the certificate.</p>
     */
    CertificateId: string | undefined;
}
export declare namespace DescribeCertificateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCertificateRequest) => any;
}
export interface DescribeCertificateResult {
    /**
     * <p>Information about the certificate, including registered date time, certificate state, the
     *       reason for the state, expiration date time, and certificate common name.</p>
     */
    Certificate?: Certificate;
}
export declare namespace DescribeCertificateResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCertificateResult) => any;
}
/**
 * <p>Describes a conditional forwarder.</p>
 */
export interface DescribeConditionalForwardersRequest {
    /**
     * <p>The directory ID for which to get the list of associated conditional forwarders.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The fully qualified domain names (FQDN) of the remote domains for which to get the list of associated conditional forwarders. If this member is null, all conditional forwarders are returned.</p>
     */
    RemoteDomainNames?: string[];
}
export declare namespace DescribeConditionalForwardersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeConditionalForwardersRequest) => any;
}
/**
 * <p>The result of a DescribeConditionalForwarder request.</p>
 */
export interface DescribeConditionalForwardersResult {
    /**
     * <p>The list of conditional forwarders that have been created.</p>
     */
    ConditionalForwarders?: ConditionalForwarder[];
}
export declare namespace DescribeConditionalForwardersResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeConditionalForwardersResult) => any;
}
/**
 * <p>Contains the inputs for the <a>DescribeDirectories</a> operation.</p>
 */
export interface DescribeDirectoriesRequest {
    /**
     * <p>A list of identifiers of the directories for which to obtain the information. If this
     *       member is null, all directories that belong to the current account are returned.</p>
     *          <p>An empty list results in an <code>InvalidParameterException</code> being thrown.</p>
     */
    DirectoryIds?: string[];
    /**
     * <p>The <code>DescribeDirectoriesResult.NextToken</code> value from a previous call to <a>DescribeDirectories</a>. Pass null if this is the first call.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of items to return. If this value is zero, the maximum number of items
     *       is specified by the limitations of the operation.</p>
     */
    Limit?: number;
}
export declare namespace DescribeDirectoriesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDirectoriesRequest) => any;
}
/**
 * <p>Contains information about an AD Connector directory.</p>
 */
export interface DirectoryConnectSettingsDescription {
    /**
     * <p>The identifier of the VPC that the AD Connector is in.</p>
     */
    VpcId?: string;
    /**
     * <p>A list of subnet identifiers in the VPC that the AD Connector is in.</p>
     */
    SubnetIds?: string[];
    /**
     * <p>The user name of the service account in the on-premises directory.</p>
     */
    CustomerUserName?: string;
    /**
     * <p>The security group identifier for the AD Connector directory.</p>
     */
    SecurityGroupId?: string;
    /**
     * <p>A list of the Availability Zones that the directory is in.</p>
     */
    AvailabilityZones?: string[];
    /**
     * <p>The IP addresses of the AD Connector servers.</p>
     */
    ConnectIps?: string[];
}
export declare namespace DirectoryConnectSettingsDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DirectoryConnectSettingsDescription) => any;
}
export declare enum RadiusAuthenticationProtocol {
    CHAP = "CHAP",
    MSCHAPV1 = "MS-CHAPv1",
    MSCHAPV2 = "MS-CHAPv2",
    PAP = "PAP"
}
/**
 * <p>Contains information about a Remote Authentication Dial In User Service (RADIUS) server.</p>
 */
export interface RadiusSettings {
    /**
     * <p>An array of strings that contains the fully qualified domain name (FQDN) or IP addresses of the RADIUS server endpoints, or the FQDN or IP addresses of your RADIUS server load balancer.</p>
     */
    RadiusServers?: string[];
    /**
     * <p>The port that your RADIUS server is using for communications. Your on-premises network must allow inbound traffic over this port from the AWS Directory Service servers.</p>
     */
    RadiusPort?: number;
    /**
     * <p>The amount of time, in seconds, to wait for the RADIUS server to respond.</p>
     */
    RadiusTimeout?: number;
    /**
     * <p>The maximum number of times that communication with the RADIUS server is attempted.</p>
     */
    RadiusRetries?: number;
    /**
     * <p>Required for enabling RADIUS on the directory.</p>
     */
    SharedSecret?: string;
    /**
     * <p>The protocol specified for your RADIUS endpoints.</p>
     */
    AuthenticationProtocol?: RadiusAuthenticationProtocol | string;
    /**
     * <p>Not currently used.</p>
     */
    DisplayLabel?: string;
    /**
     * <p>Not currently used.</p>
     */
    UseSameUsername?: boolean;
}
export declare namespace RadiusSettings {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RadiusSettings) => any;
}
export declare enum RadiusStatus {
    COMPLETED = "Completed",
    CREATING = "Creating",
    FAILED = "Failed"
}
/**
 * <p>Contains information about the directory.</p>
 */
export interface DirectoryVpcSettingsDescription {
    /**
     * <p>The identifier of the VPC that the directory is in.</p>
     */
    VpcId?: string;
    /**
     * <p>The identifiers of the subnets for the directory servers.</p>
     */
    SubnetIds?: string[];
    /**
     * <p>The domain controller security group identifier for the directory.</p>
     */
    SecurityGroupId?: string;
    /**
     * <p>The list of Availability Zones that the directory is in.</p>
     */
    AvailabilityZones?: string[];
}
export declare namespace DirectoryVpcSettingsDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DirectoryVpcSettingsDescription) => any;
}
/**
 * <p>Describes the directory owner account details that have been shared to the directory
 *       consumer account.</p>
 */
export interface OwnerDirectoryDescription {
    /**
     * <p>Identifier of the AWS Managed Microsoft AD directory in the directory owner
     *       account.</p>
     */
    DirectoryId?: string;
    /**
     * <p>Identifier of the directory owner account.</p>
     */
    AccountId?: string;
    /**
     * <p>IP address of the directory’s domain controllers.</p>
     */
    DnsIpAddrs?: string[];
    /**
     * <p>Information about the VPC settings for the directory.</p>
     */
    VpcSettings?: DirectoryVpcSettingsDescription;
    /**
     * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS
     *       server.</p>
     */
    RadiusSettings?: RadiusSettings;
    /**
     * <p>Information about the status of the RADIUS server.</p>
     */
    RadiusStatus?: RadiusStatus | string;
}
export declare namespace OwnerDirectoryDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OwnerDirectoryDescription) => any;
}
/**
 * <p>Provides information about the Regions that are configured for multi-Region
 *       replication.</p>
 */
export interface RegionsInfo {
    /**
     * <p>The Region where the AWS Managed Microsoft AD directory was originally created.</p>
     */
    PrimaryRegion?: string;
    /**
     * <p>Lists the Regions where the directory has been replicated, excluding the primary
     *       Region.</p>
     */
    AdditionalRegions?: string[];
}
export declare namespace RegionsInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RegionsInfo) => any;
}
export declare enum DirectoryStage {
    ACTIVE = "Active",
    CREATED = "Created",
    CREATING = "Creating",
    DELETED = "Deleted",
    DELETING = "Deleting",
    FAILED = "Failed",
    IMPAIRED = "Impaired",
    INOPERABLE = "Inoperable",
    REQUESTED = "Requested",
    RESTOREFAILED = "RestoreFailed",
    RESTORING = "Restoring"
}
export declare enum DirectoryType {
    AD_CONNECTOR = "ADConnector",
    MICROSOFT_AD = "MicrosoftAD",
    SHARED_MICROSOFT_AD = "SharedMicrosoftAD",
    SIMPLE_AD = "SimpleAD"
}
/**
 * <p>Contains information about an AWS Directory Service directory.</p>
 */
export interface DirectoryDescription {
    /**
     * <p>The directory identifier.</p>
     */
    DirectoryId?: string;
    /**
     * <p>The fully qualified name of the directory.</p>
     */
    Name?: string;
    /**
     * <p>The short name of the directory.</p>
     */
    ShortName?: string;
    /**
     * <p>The directory size.</p>
     */
    Size?: DirectorySize | string;
    /**
     * <p>The edition associated with this directory.</p>
     */
    Edition?: DirectoryEdition | string;
    /**
     * <p>The alias for the directory. If no alias has been created for the directory, the alias is
     *       the directory identifier, such as <code>d-XXXXXXXXXX</code>.</p>
     */
    Alias?: string;
    /**
     * <p>The access URL for the directory, such as
     *         <code>http://<alias>.awsapps.com</code>. If no alias has been created for the
     *       directory, <code><alias></code> is the directory identifier, such as
     *         <code>d-XXXXXXXXXX</code>.</p>
     */
    AccessUrl?: string;
    /**
     * <p>The description for the directory.</p>
     */
    Description?: string;
    /**
     * <p>The IP addresses of the DNS servers for the directory. For a Simple AD or Microsoft AD
     *       directory, these are the IP addresses of the Simple AD or Microsoft AD directory servers. For
     *       an AD Connector directory, these are the IP addresses of the DNS servers or domain controllers
     *       in the on-premises directory to which the AD Connector is connected.</p>
     */
    DnsIpAddrs?: string[];
    /**
     * <p>The current stage of the directory.</p>
     */
    Stage?: DirectoryStage | string;
    /**
     * <p>Current directory status of the shared AWS Managed Microsoft AD directory.</p>
     */
    ShareStatus?: ShareStatus | string;
    /**
     * <p>The method used when sharing a directory to determine whether the directory should be
     *       shared within your AWS organization (<code>ORGANIZATIONS</code>) or with any AWS account by
     *       sending a shared directory request (<code>HANDSHAKE</code>).</p>
     */
    ShareMethod?: ShareMethod | string;
    /**
     * <p>A directory share request that is sent by the directory owner to the directory consumer.
     *       The request includes a typed message to help the directory consumer administrator determine
     *       whether to approve or reject the share invitation.</p>
     */
    ShareNotes?: string;
    /**
     * <p>Specifies when the directory was created.</p>
     */
    LaunchTime?: Date;
    /**
     * <p>The date and time that the stage was last updated.</p>
     */
    StageLastUpdatedDateTime?: Date;
    /**
     * <p>The directory size.</p>
     */
    Type?: DirectoryType | string;
    /**
     * <p>A <a>DirectoryVpcSettingsDescription</a> object that contains additional
     *       information about a directory. This member is only present if the directory is a Simple AD or
     *       Managed AD directory.</p>
     */
    VpcSettings?: DirectoryVpcSettingsDescription;
    /**
     * <p>A <a>DirectoryConnectSettingsDescription</a> object that contains additional
     *       information about an AD Connector directory. This member is only present if the directory is
     *       an AD Connector directory.</p>
     */
    ConnectSettings?: DirectoryConnectSettingsDescription;
    /**
     * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS
     *       server configured for this directory.</p>
     */
    RadiusSettings?: RadiusSettings;
    /**
     * <p>The status of the RADIUS MFA server connection.</p>
     */
    RadiusStatus?: RadiusStatus | string;
    /**
     * <p>Additional information about the directory stage.</p>
     */
    StageReason?: string;
    /**
     * <p>Indicates if single sign-on is enabled for the directory. For more information, see <a>EnableSso</a> and <a>DisableSso</a>.</p>
     */
    SsoEnabled?: boolean;
    /**
     * <p>The desired number of domain controllers in the directory if the directory is Microsoft AD.</p>
     */
    DesiredNumberOfDomainControllers?: number;
    /**
     * <p>Describes the AWS Managed Microsoft AD directory in the directory owner account.</p>
     */
    OwnerDirectoryDescription?: OwnerDirectoryDescription;
    /**
     * <p>Lists the Regions where the directory has replicated.</p>
     */
    RegionsInfo?: RegionsInfo;
}
export declare namespace DirectoryDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DirectoryDescription) => any;
}
/**
 * <p>Contains the results of the <a>DescribeDirectories</a> operation.</p>
 */
export interface DescribeDirectoriesResult {
    /**
     * <p>The list of <a>DirectoryDescription</a> objects that were retrieved.</p>
     *          <p>It is possible that this list contains less than the number of items specified in the
     *         <code>Limit</code> member of the request. This occurs if there are less than the requested
     *       number of items left to retrieve, or if the limitations of the operation have been
     *       exceeded.</p>
     */
    DirectoryDescriptions?: DirectoryDescription[];
    /**
     * <p>If not null, more results are available. Pass this value for the <code>NextToken</code>
     *       parameter in a subsequent call to <a>DescribeDirectories</a> to retrieve the next
     *       set of items.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeDirectoriesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDirectoriesResult) => any;
}
/**
 * <p>The <code>NextToken</code> value is not valid.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
    name: "InvalidNextTokenException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace InvalidNextTokenException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidNextTokenException) => any;
}
export interface DescribeDomainControllersRequest {
    /**
     * <p>Identifier of the directory for which to retrieve the domain controller information.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>A list of identifiers for the domain controllers whose information will be provided.</p>
     */
    DomainControllerIds?: string[];
    /**
     * <p>The <i>DescribeDomainControllers.NextToken</i> value from a previous call to <a>DescribeDomainControllers</a>. Pass null if this is the first call. </p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of items to return.</p>
     */
    Limit?: number;
}
export declare namespace DescribeDomainControllersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDomainControllersRequest) => any;
}
export declare enum DomainControllerStatus {
    ACTIVE = "Active",
    CREATING = "Creating",
    DELETED = "Deleted",
    DELETING = "Deleting",
    FAILED = "Failed",
    IMPAIRED = "Impaired",
    RESTORING = "Restoring"
}
/**
 * <p>Contains information about the domain controllers for a specified directory.</p>
 */
export interface DomainController {
    /**
     * <p>Identifier of the directory where the domain controller resides.</p>
     */
    DirectoryId?: string;
    /**
     * <p>Identifies a specific domain controller in the directory.</p>
     */
    DomainControllerId?: string;
    /**
     * <p>The IP address of the domain controller.</p>
     */
    DnsIpAddr?: string;
    /**
     * <p>The identifier of the VPC that contains the domain controller.</p>
     */
    VpcId?: string;
    /**
     * <p>Identifier of the subnet in the VPC that contains the domain controller.</p>
     */
    SubnetId?: string;
    /**
     * <p>The Availability Zone where the domain controller is located.</p>
     */
    AvailabilityZone?: string;
    /**
     * <p>The status of the domain controller.</p>
     */
    Status?: DomainControllerStatus | string;
    /**
     * <p>A description of the domain controller state.</p>
     */
    StatusReason?: string;
    /**
     * <p>Specifies when the domain controller was created.</p>
     */
    LaunchTime?: Date;
    /**
     * <p>The date and time that the status was last updated.</p>
     */
    StatusLastUpdatedDateTime?: Date;
}
export declare namespace DomainController {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DomainController) => any;
}
export interface DescribeDomainControllersResult {
    /**
     * <p>List of the <a>DomainController</a> objects that were retrieved.</p>
     */
    DomainControllers?: DomainController[];
    /**
     * <p>If not null, more results are available. Pass this value for the <code>NextToken</code> parameter in a subsequent call to <a>DescribeDomainControllers</a> retrieve the next set of items.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeDomainControllersResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDomainControllersResult) => any;
}
/**
 * <p>Describes event topics.</p>
 */
export interface DescribeEventTopicsRequest {
    /**
     * <p>The Directory ID for which to get the list of associated SNS topics. If this member is null, associations for all Directory IDs are returned.</p>
     */
    DirectoryId?: string;
    /**
     * <p>A list of SNS topic names for which to obtain the information. If this member is null, all associations for the specified Directory ID are returned.</p>
     *          <p>An empty list results in an <code>InvalidParameterException</code> being thrown.</p>
     */
    TopicNames?: string[];
}
export declare namespace DescribeEventTopicsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeEventTopicsRequest) => any;
}
export declare enum TopicStatus {
    DELETED = "Deleted",
    FAILED = "Failed",
    REGISTERED = "Registered",
    TOPIC_NOT_FOUND = "Topic not found"
}
/**
 * <p>Information about SNS topic and AWS Directory Service directory associations.</p>
 */
export interface EventTopic {
    /**
     * <p>The Directory ID of an AWS Directory Service directory that will publish status messages to an SNS topic.</p>
     */
    DirectoryId?: string;
    /**
     * <p>The name of an AWS SNS topic the receives status messages from the directory.</p>
     */
    TopicName?: string;
    /**
     * <p>The SNS topic ARN (Amazon Resource Name).</p>
     */
    TopicArn?: string;
    /**
     * <p>The date and time of when you associated your directory with the SNS topic.</p>
     */
    CreatedDateTime?: Date;
    /**
     * <p>The topic registration status.</p>
     */
    Status?: TopicStatus | string;
}
export declare namespace EventTopic {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EventTopic) => any;
}
/**
 * <p>The result of a DescribeEventTopic request.</p>
 */
export interface DescribeEventTopicsResult {
    /**
     * <p>A list of SNS topic names that receive status messages from the specified Directory ID.</p>
     */
    EventTopics?: EventTopic[];
}
export declare namespace DescribeEventTopicsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeEventTopicsResult) => any;
}
export declare enum LDAPSType {
    CLIENT = "Client"
}
export interface DescribeLDAPSSettingsRequest {
    /**
     * <p>The identifier of the directory.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The type of LDAP security to enable. Currently only the value <code>Client</code> is
     *       supported.</p>
     */
    Type?: LDAPSType | string;
    /**
     * <p>The type of next token used for pagination.</p>
     */
    NextToken?: string;
    /**
     * <p>Specifies the number of items that should be displayed on one page.</p>
     */
    Limit?: number;
}
export declare namespace DescribeLDAPSSettingsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeLDAPSSettingsRequest) => any;
}
export declare enum LDAPSStatus {
    DISABLED = "Disabled",
    ENABLED = "Enabled",
    ENABLE_FAILED = "EnableFailed",
    ENABLING = "Enabling"
}
/**
 * <p>Contains general information about the LDAPS settings.</p>
 */
export interface LDAPSSettingInfo {
    /**
     * <p>The state of the LDAPS settings.</p>
     */
    LDAPSStatus?: LDAPSStatus | string;
    /**
     * <p>Describes a state change for LDAPS.</p>
     */
    LDAPSStatusReason?: string;
    /**
     * <p>The date and time when the LDAPS settings were last updated.</p>
     */
    LastUpdatedDateTime?: Date;
}
export declare namespace LDAPSSettingInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LDAPSSettingInfo) => any;
}
export interface DescribeLDAPSSettingsResult {
    /**
     * <p>Information about LDAP security for the specified directory, including status of
     *       enablement, state last updated date time, and the reason for the state.</p>
     */
    LDAPSSettingsInfo?: LDAPSSettingInfo[];
    /**
     * <p>The next token used to retrieve the LDAPS settings if the number of setting types exceeds
     *       page limit and there is another page.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeLDAPSSettingsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeLDAPSSettingsResult) => any;
}
export interface DescribeRegionsRequest {
    /**
     * <p>The identifier of the directory.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The name of the Region. For example, <code>us-east-1</code>.</p>
     */
    RegionName?: string;
    /**
     * <p>The <code>DescribeRegionsResult.NextToken</code> value from a previous call to <a>DescribeRegions</a>. Pass null if this is the first call.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeRegionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeRegionsRequest) => any;
}
export declare enum RegionType {
    ADDITIONAL = "Additional",
    PRIMARY = "Primary"
}
/**
 * <p>The replicated Region information for a directory.</p>
 */
export interface RegionDescription {
    /**
     * <p>The identifier of the directory.</p>
     */
    DirectoryId?: string;
    /**
     * <p>The name of the Region. For example, <code>us-east-1</code>.</p>
     */
    RegionName?: string;
    /**
     * <p>Specifies whether the Region is the primary Region or an additional Region.</p>
     */
    RegionType?: RegionType | string;
    /**
     * <p>The status of the replication process for the specified Region.</p>
     */
    Status?: DirectoryStage | string;
    /**
     * <p>Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.</p>
     */
    VpcSettings?: DirectoryVpcSettings;
    /**
     * <p>The desired number of domain controllers in the specified Region for the specified
     *       directory.</p>
     */
    DesiredNumberOfDomainControllers?: number;
    /**
     * <p>Specifies when the Region replication began.</p>
     */
    LaunchTime?: Date;
    /**
     * <p>The date and time that the Region status was last updated.</p>
     */
    StatusLastUpdatedDateTime?: Date;
    /**
     * <p>The date and time that the Region description was last updated.</p>
     */
    LastUpdatedDateTime?: Date;
}
export declare namespace RegionDescription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RegionDescription) => any;
}
export interface DescribeRegionsResult {
    /**
     * <p>List of Region information related to the directory for each replicated Region.</p>
     */
    RegionsDescription?: RegionDescription[];
    /**
     * <p>If not null, more results are available. Pass this value for the <code>NextToken</code>
     *       parameter in a subsequent call to <a>DescribeRegions</a> to retrieve the next set
     *       of items.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeRegionsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeRegionsResult) => any;
}
export interface DescribeSharedDirectoriesRequest {
    /**
     * <p>Returns the identifier of the directory in the directory owner account. </p>
     */
    OwnerDirectoryId: string | undefined;
    /**
     * <p>A list of identifiers of all shared directories in your account. </p>
     */
    SharedDirectoryIds?: string[];
    /**
     * <p>The <code>DescribeSharedDirectoriesResult.NextToken</code> value from a previous call to
     *         <a>DescribeSharedDirectories</a>. Pass null if this is the first call. </p>
     */
    NextToken?: string;
    /**
     * <p>The number of shared directories to return in the response object.</p>
     */
    Limit?: number;
}
export declare namespace DescribeSharedDirectoriesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeSharedDirectoriesRequest) => any;
}
export interface DescribeSharedDirectoriesResult {
    /**
     * <p>A list of all shared directories in your account.</p>
     */
    SharedDirectories?: SharedDirectory[];
    /**
     * <p>If not null, token that indicates that more results are available. Pass this value for the
     *         <code>NextToken</code> parameter in a subsequent call to <a>DescribeSharedDirectories</a> to retrieve the next set of items.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeSharedDirectoriesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeSharedDirectoriesResult) => any;
}
/**
 * <p>Contains the inputs for the <a>DescribeSnapshots</a> operation.</p>
 */
export interface DescribeSnapshotsRequest {
    /**
     * <p>The identifier of the directory for which to retrieve snapshot information.</p>
     */
    DirectoryId?: string;
    /**
     * <p>A list of identifiers of the snapshots to obtain the information for. If this member is
     *          null or empty, all snapshots are returned using the <i>Limit</i> and <i>NextToken</i>
     *          members.</p>
     */
    SnapshotIds?: string[];
    /**
     * <p>The <i>DescribeSnapshotsResult.NextToken</i> value from a previous call to
     *             <a>DescribeSnapshots</a>. Pass null if this is the first call.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of objects to return.</p>
     */
    Limit?: number;
}
export declare namespace DescribeSnapshotsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeSnapshotsRequest) => any;
}
export declare enum SnapshotStatus {
    COMPLETED = "Completed",
    CREATING = "Creating",
    FAILED = "Failed"
}
export declare enum SnapshotType {
    AUTO = "Auto",
    MANUAL = "Manual"
}
/**
 * <p>Describes a directory snapshot.</p>
 */
export interface Snapshot {
    /**
     * <p>The directory identifier.</p>
     */
    DirectoryId?: string;
    /**
     * <p>The snapshot identifier.</p>
     */
    SnapshotId?: string;
    /**
     * <p>The snapshot type.</p>
     */
    Type?: SnapshotType | string;
    /**
     * <p>The descriptive name of the snapshot.</p>
     */
    Name?: string;
    /**
     * <p>The snapshot status.</p>
     */
    Status?: SnapshotStatus | string;
    /**
     * <p>The date and time that the snapshot was taken.</p>
     */
    StartTime?: Date;
}
export declare namespace Snapshot {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Snapshot) => any;
}
/**
 * <p>Contains the results of the <a>DescribeSnapshots</a> operation.</p>
 */
export interface DescribeSnapshotsResult {
    /**
     * <p>The list of <a>Snapshot</a> objects that were retrieved.</p>
     *          <p>It is possible that this list contains less than the number of items specified in the
     *             <i>Limit</i> member of the request. This occurs if there are less than the requested
     *          number of items left to retrieve, or if the limitations of the operation have been
     *          exceeded.</p>
     */
    Snapshots?: Snapshot[];
    /**
     * <p>If not null, more results are available. Pass this value in the <i>NextToken</i> member of
     *          a subsequent call to <a>DescribeSnapshots</a>.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeSnapshotsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeSnapshotsResult) => any;
}
/**
 * <p>Describes the trust relationships for a particular AWS Managed Microsoft AD directory. If no input parameters are are provided, such as directory ID or trust ID, this request describes all the trust relationships.</p>
 */
export interface DescribeTrustsRequest {
    /**
     * <p>The Directory ID of the AWS directory that is a part of the requested trust relationship.</p>
     */
    DirectoryId?: string;
    /**
     * <p>A list of identifiers of the trust relationships for which to obtain the information. If this member is null, all trust relationships that belong to the current account are returned.</p>
     *          <p>An empty list results in an <code>InvalidParameterException</code> being thrown.</p>
     */
    TrustIds?: string[];
    /**
     * <p>The <i>DescribeTrustsResult.NextToken</i> value from a previous call to
     *       <a>DescribeTrusts</a>. Pass null if this is the first call.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of objects to return.</p>
     */
    Limit?: number;
}
export declare namespace DescribeTrustsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeTrustsRequest) => any;
}
export declare enum TrustState {
    CREATED = "Created",
    CREATING = "Creating",
    DELETED = "Deleted",
    DELETING = "Deleting",
    FAILED = "Failed",
    UPDATED = "Updated",
    UPDATE_FAILED = "UpdateFailed",
    UPDATING = "Updating",
    VERIFIED = "Verified",
    VERIFYING = "Verifying",
    VERIFY_FAILED = "VerifyFailed"
}
/**
 * <p>Describes a trust relationship between an AWS Managed Microsoft AD directory and an external domain.</p>
 */
export interface Trust {
    /**
     * <p>The Directory ID of the AWS directory involved in the trust relationship.</p>
     */
    DirectoryId?: string;
    /**
     * <p>The unique ID of the trust relationship.</p>
     */
    TrustId?: string;
    /**
     * <p>The Fully Qualified Domain Name (FQDN) of the external domain involved in the trust relationship.</p>
     */
    RemoteDomainName?: string;
    /**
     * <p>The trust relationship type. <code>Forest</code> is the default.</p>
     */
    TrustType?: TrustType | string;
    /**
     * <p>The trust relationship direction.</p>
     */
    TrustDirection?: TrustDirection | string;
    /**
     * <p>The trust relationship state.</p>
     */
    TrustState?: TrustState | string;
    /**
     * <p>The date and time that the trust relationship was created.</p>
     */
    CreatedDateTime?: Date;
    /**
     * <p>The date and time that the trust relationship was last updated.</p>
     */
    LastUpdatedDateTime?: Date;
    /**
     * <p>The date and time that the TrustState was last updated.</p>
     */
    StateLastUpdatedDateTime?: Date;
    /**
     * <p>The reason for the TrustState.</p>
     */
    TrustStateReason?: string;
    /**
     * <p>Current state of selective authentication for the trust.</p>
     */
    SelectiveAuth?: SelectiveAuth | string;
}
export declare namespace Trust {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Trust) => any;
}
/**
 * <p>The result of a DescribeTrust request.</p>
 */
export interface DescribeTrustsResult {
    /**
     * <p>The list of Trust objects that were retrieved.</p>
     *          <p>It is possible that this list contains less than the number of items specified in the
     *          <i>Limit</i> member of the request. This occurs if there are less than the requested
     *          number of items left to retrieve, or if the limitations of the operation have been
     *          exceeded.</p>
     */
    Trusts?: Trust[];
    /**
     * <p>If not null, more results are available. Pass this value for the <i>NextToken</i> parameter
     *       in a subsequent call to <a>DescribeTrusts</a> to retrieve the next set of items.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeTrustsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeTrustsResult) => any;
}
/**
 * <p>Contains directory limit information for a Region.</p>
 */
export interface DirectoryLimits {
    /**
     * <p>The maximum number of cloud directories allowed in the Region.</p>
     */
    CloudOnlyDirectoriesLimit?: number;
    /**
     * <p>The current number of cloud directories in the Region.</p>
     */
    CloudOnlyDirectoriesCurrentCount?: number;
    /**
     * <p>Indicates if the cloud directory limit has been reached.</p>
     */
    CloudOnlyDirectoriesLimitReached?: boolean;
    /**
     * <p>The maximum number of AWS Managed Microsoft AD directories allowed in the region.</p>
     */
    CloudOnlyMicrosoftADLimit?: number;
    /**
     * <p>The current number of AWS Managed Microsoft AD directories in the region.</p>
     */
    CloudOnlyMicrosoftADCurrentCount?: number;
    /**
     * <p>Indicates if the AWS Managed Microsoft AD directory limit has been reached.</p>
     */
    CloudOnlyMicrosoftADLimitReached?: boolean;
    /**
     * <p>The maximum number of connected directories allowed in the Region.</p>
     */
    ConnectedDirectoriesLimit?: number;
    /**
     * <p>The current number of connected directories in the Region.</p>
     */
    ConnectedDirectoriesCurrentCount?: number;
    /**
     * <p>Indicates if the connected directory limit has been reached.</p>
     */
    ConnectedDirectoriesLimitReached?: boolean;
}
export declare namespace DirectoryLimits {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DirectoryLimits) => any;
}
/**
 * <p>The specified directory has not been shared with this AWS account.</p>
 */
export interface DirectoryNotSharedException extends __SmithyException, $MetadataBearer {
    name: "DirectoryNotSharedException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace DirectoryNotSharedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DirectoryNotSharedException) => any;
}
export interface DisableClientAuthenticationRequest {
    /**
     * <p>The identifier of the directory </p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The type of client authentication to disable. Currently, only the parameter, <code>SmartCard</code> is supported.</p>
     */
    Type: ClientAuthenticationType | string | undefined;
}
export declare namespace DisableClientAuthenticationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisableClientAuthenticationRequest) => any;
}
export interface DisableClientAuthenticationResult {
}
export declare namespace DisableClientAuthenticationResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisableClientAuthenticationResult) => any;
}
/**
 * <p>Client authentication is already enabled.</p>
 */
export interface InvalidClientAuthStatusException extends __SmithyException, $MetadataBearer {
    name: "InvalidClientAuthStatusException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace InvalidClientAuthStatusException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidClientAuthStatusException) => any;
}
export interface DisableLDAPSRequest {
    /**
     * <p>The identifier of the directory.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The type of LDAP security to enable. Currently only the value <code>Client</code> is
     *       supported.</p>
     */
    Type: LDAPSType | string | undefined;
}
export declare namespace DisableLDAPSRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisableLDAPSRequest) => any;
}
export interface DisableLDAPSResult {
}
export declare namespace DisableLDAPSResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisableLDAPSResult) => any;
}
/**
 * <p>The LDAP activities could not be performed because they are limited by the LDAPS
 *       status.</p>
 */
export interface InvalidLDAPSStatusException extends __SmithyException, $MetadataBearer {
    name: "InvalidLDAPSStatusException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace InvalidLDAPSStatusException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidLDAPSStatusException) => any;
}
/**
 * <p>Contains the inputs for the <a>DisableRadius</a> operation.</p>
 */
export interface DisableRadiusRequest {
    /**
     * <p>The identifier of the directory for which to disable MFA.</p>
     */
    DirectoryId: string | undefined;
}
export declare namespace DisableRadiusRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisableRadiusRequest) => any;
}
/**
 * <p>Contains the results of the <a>DisableRadius</a> operation.</p>
 */
export interface DisableRadiusResult {
}
export declare namespace DisableRadiusResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisableRadiusResult) => any;
}
/**
 * <p>Contains the inputs for the <a>DisableSso</a> operation.</p>
 */
export interface DisableSsoRequest {
    /**
     * <p>The identifier of the directory for which to disable single-sign on.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The username of an alternate account to use to disable single-sign on. This is only used for AD Connector directories. This account must have privileges to remove a service principal name.</p>
     *          <p>If the AD Connector service account does not have privileges to remove a service principal
     *          name, you can specify an alternate account with the <i>UserName</i> and <i>Password</i>
     *          parameters. These credentials are only used to disable single sign-on and are not stored by
     *          the service. The AD Connector service account is not changed.</p>
     */
    UserName?: string;
    /**
     * <p>The password of an alternate account to use to disable single-sign on. This is only used
     *          for AD Connector directories. For more information, see the <i>UserName</i> parameter.</p>
     */
    Password?: string;
}
export declare namespace DisableSsoRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisableSsoRequest) => any;
}
/**
 * <p>Contains the results of the <a>DisableSso</a> operation.</p>
 */
export interface DisableSsoResult {
}
export declare namespace DisableSsoResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisableSsoResult) => any;
}
export interface EnableClientAuthenticationRequest {
    /**
     * <p>The identifier of the specified directory. </p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The type of client authentication to enable. Currently only the value <code>SmartCard</code> is
     *       supported. Smart card authentication in AD Connector requires that you enable Kerberos
     *       Constrained Delegation for the Service User to the LDAP service in the on-premises AD.
     *     </p>
     */
    Type: ClientAuthenticationType | string | undefined;
}
export declare namespace EnableClientAuthenticationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnableClientAuthenticationRequest) => any;
}
export interface EnableClientAuthenticationResult {
}
export declare namespace EnableClientAuthenticationResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnableClientAuthenticationResult) => any;
}
/**
 * <p>Client authentication setup could not be completed because at least one valid certificate must be
 *       registered in the system.</p>
 */
export interface NoAvailableCertificateException extends __SmithyException, $MetadataBearer {
    name: "NoAvailableCertificateException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace NoAvailableCertificateException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NoAvailableCertificateException) => any;
}
export interface EnableLDAPSRequest {
    /**
     * <p>The identifier of the directory.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The type of LDAP security to enable. Currently only the value <code>Client</code> is
     *       supported.</p>
     */
    Type: LDAPSType | string | undefined;
}
export declare namespace EnableLDAPSRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnableLDAPSRequest) => any;
}
export interface EnableLDAPSResult {
}
export declare namespace EnableLDAPSResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnableLDAPSResult) => any;
}
/**
 * <p>Contains the inputs for the <a>EnableRadius</a> operation.</p>
 */
export interface EnableRadiusRequest {
    /**
     * <p>The identifier of the directory for which to enable MFA.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS server.</p>
     */
    RadiusSettings: RadiusSettings | undefined;
}
export declare namespace EnableRadiusRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnableRadiusRequest) => any;
}
/**
 * <p>Contains the results of the <a>EnableRadius</a> operation.</p>
 */
export interface EnableRadiusResult {
}
export declare namespace EnableRadiusResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnableRadiusResult) => any;
}
/**
 * <p>Contains the inputs for the <a>EnableSso</a> operation.</p>
 */
export interface EnableSsoRequest {
    /**
     * <p>The identifier of the directory for which to enable single-sign on.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The username of an alternate account to use to enable single-sign on. This is only used for AD Connector directories. This account must have privileges to add a service principal name.</p>
     *          <p>If the AD Connector service account does not have privileges to add a service principal
     *          name, you can specify an alternate account with the <i>UserName</i> and <i>Password</i>
     *          parameters. These credentials are only used to enable single sign-on and are not stored by
     *          the service. The AD Connector service account is not changed.</p>
     */
    UserName?: string;
    /**
     * <p>The password of an alternate account to use to enable single-sign on. This is only used for
     *          AD Connector directories. For more information, see the <i>UserName</i> parameter.</p>
     */
    Password?: string;
}
export declare namespace EnableSsoRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnableSsoRequest) => any;
}
/**
 * <p>Contains the results of the <a>EnableSso</a> operation.</p>
 */
export interface EnableSsoResult {
}
export declare namespace EnableSsoResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EnableSsoResult) => any;
}
/**
 * <p>Contains the inputs for the <a>GetDirectoryLimits</a> operation.</p>
 */
export interface GetDirectoryLimitsRequest {
}
export declare namespace GetDirectoryLimitsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDirectoryLimitsRequest) => any;
}
/**
 * <p>Contains the results of the <a>GetDirectoryLimits</a> operation.</p>
 */
export interface GetDirectoryLimitsResult {
    /**
     * <p>A <a>DirectoryLimits</a> object that contains the directory limits for the
     *       current rRegion.</p>
     */
    DirectoryLimits?: DirectoryLimits;
}
export declare namespace GetDirectoryLimitsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDirectoryLimitsResult) => any;
}
/**
 * <p>Contains the inputs for the <a>GetSnapshotLimits</a> operation.</p>
 */
export interface GetSnapshotLimitsRequest {
    /**
     * <p>Contains the identifier of the directory to obtain the limits for.</p>
     */
    DirectoryId: string | undefined;
}
export declare namespace GetSnapshotLimitsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSnapshotLimitsRequest) => any;
}
/**
 * <p>Contains manual snapshot limit information for a directory.</p>
 */
export interface SnapshotLimits {
    /**
     * <p>The maximum number of manual snapshots allowed.</p>
     */
    ManualSnapshotsLimit?: number;
    /**
     * <p>The current number of manual snapshots of the directory.</p>
     */
    ManualSnapshotsCurrentCount?: number;
    /**
     * <p>Indicates if the manual snapshot limit has been reached.</p>
     */
    ManualSnapshotsLimitReached?: boolean;
}
export declare namespace SnapshotLimits {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SnapshotLimits) => any;
}
/**
 * <p>Contains the results of the <a>GetSnapshotLimits</a> operation.</p>
 */
export interface GetSnapshotLimitsResult {
    /**
     * <p>A <a>SnapshotLimits</a> object that contains the manual snapshot limits for the specified
     *          directory.</p>
     */
    SnapshotLimits?: SnapshotLimits;
}
export declare namespace GetSnapshotLimitsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSnapshotLimitsResult) => any;
}
export interface ListCertificatesRequest {
    /**
     * <p>The identifier of the directory.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>A token for requesting another page of certificates if the <code>NextToken</code> response
     *       element indicates that more certificates are available. Use the value of the returned
     *         <code>NextToken</code> element in your request until the token comes back as
     *         <code>null</code>. Pass <code>null</code> if this is the first call.</p>
     */
    NextToken?: string;
    /**
     * <p>The number of items that should show up on one page</p>
     */
    Limit?: number;
}
export declare namespace ListCertificatesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListCertificatesRequest) => any;
}
export interface ListCertificatesResult {
    /**
     * <p>Indicates whether another page of certificates is available when the number of available
     *       certificates exceeds the page limit.</p>
     */
    NextToken?: string;
    /**
     * <p>A list of certificates with basic details including certificate ID, certificate common
     *       name, certificate state.</p>
     */
    CertificatesInfo?: CertificateInfo[];
}
export declare namespace ListCertificatesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListCertificatesResult) => any;
}
export interface ListIpRoutesRequest {
    /**
     * <p>Identifier (ID) of the directory for which you want to retrieve the IP addresses.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The <i>ListIpRoutes.NextToken</i> value from a previous call to
     *          <a>ListIpRoutes</a>. Pass null if this is the first call.</p>
     */
    NextToken?: string;
    /**
     * <p>Maximum number of items to return. If this value is zero, the maximum number of items is specified by the limitations of the operation.</p>
     */
    Limit?: number;
}
export declare namespace ListIpRoutesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListIpRoutesRequest) => any;
}
export declare enum IpRouteStatusMsg {
    ADDED = "Added",
    ADDING = "Adding",
    ADD_FAILED = "AddFailed",
    REMOVED = "Removed",
    REMOVE_FAILED = "RemoveFailed",
    REMOVING = "Removing"
}
/**
 * <p>Information about one or more IP address blocks.</p>
 */
export interface IpRouteInfo {
    /**
     * <p>Identifier (ID) of the directory associated with the IP addresses.</p>
     */
    DirectoryId?: string;
    /**
     * <p>IP address block in the <a>IpRoute</a>.</p>
     */
    CidrIp?: string;
    /**
     * <p>The status of the IP address block.</p>
     */
    IpRouteStatusMsg?: IpRouteStatusMsg | string;
    /**
     * <p>The date and time the address block was added to the directory.</p>
     */
    AddedDateTime?: Date;
    /**
     * <p>The reason for the IpRouteStatusMsg.</p>
     */
    IpRouteStatusReason?: string;
    /**
     * <p>Description of the <a>IpRouteInfo</a>.</p>
     */
    Description?: string;
}
export declare namespace IpRouteInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IpRouteInfo) => any;
}
export interface ListIpRoutesResult {
    /**
     * <p>A list of <a>IpRoute</a>s.</p>
     */
    IpRoutesInfo?: IpRouteInfo[];
    /**
     * <p>If not null, more results are available. Pass this value for the <i>NextToken</i> parameter
     *          in a subsequent call to <a>ListIpRoutes</a> to retrieve the next set of items.</p>
     */
    NextToken?: string;
}
export declare namespace ListIpRoutesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListIpRoutesResult) => any;
}
export interface ListLogSubscriptionsRequest {
    /**
     * <p>If a <i>DirectoryID</i> is provided, lists only the log subscription
     *       associated with that directory. If no <i>DirectoryId</i> is provided, lists all
     *       log subscriptions associated with your AWS account. If there are no log subscriptions for the
     *       AWS account or the directory, an empty list will be returned.</p>
     */
    DirectoryId?: string;
    /**
     * <p>The token for the next set of items to return.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of items returned.</p>
     */
    Limit?: number;
}
export declare namespace ListLogSubscriptionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLogSubscriptionsRequest) => any;
}
/**
 * <p>Represents a log subscription, which tracks real-time data from a chosen log group to a
 *       specified destination.</p>
 */
export interface LogSubscription {
    /**
     * <p>Identifier (ID) of the directory that you want to associate with the log
     *       subscription.</p>
     */
    DirectoryId?: string;
    /**
     * <p>The name of the log group.</p>
     */
    LogGroupName?: string;
    /**
     * <p>The date and time that the log subscription was created.</p>
     */
    SubscriptionCreatedDateTime?: Date;
}
export declare namespace LogSubscription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LogSubscription) => any;
}
export interface ListLogSubscriptionsResult {
    /**
     * <p>A list of active <a>LogSubscription</a> objects for calling the AWS
     *       account.</p>
     */
    LogSubscriptions?: LogSubscription[];
    /**
     * <p>The token for the next set of items to return.</p>
     */
    NextToken?: string;
}
export declare namespace ListLogSubscriptionsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLogSubscriptionsResult) => any;
}
export interface ListSchemaExtensionsRequest {
    /**
     * <p>The identifier of the directory from which to retrieve the schema extension information.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The <code>ListSchemaExtensions.NextToken</code> value from a previous call to <code>ListSchemaExtensions</code>. Pass null if this is the first call.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of items to return.</p>
     */
    Limit?: number;
}
export declare namespace ListSchemaExtensionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSchemaExtensionsRequest) => any;
}
export declare enum SchemaExtensionStatus {
    CANCELLED = "Cancelled",
    CANCEL_IN_PROGRESS = "CancelInProgress",
    COMPLETED = "Completed",
    CREATING_SNAPSHOT = "CreatingSnapshot",
    FAILED = "Failed",
    INITIALIZING = "Initializing",
    REPLICATING = "Replicating",
    ROLLBACK_IN_PROGRESS = "RollbackInProgress",
    UPDATING_SCHEMA = "UpdatingSchema"
}
/**
 * <p>Information about a schema extension.</p>
 */
export interface SchemaExtensionInfo {
    /**
     * <p>The identifier of the directory to which the schema extension is applied.</p>
     */
    DirectoryId?: string;
    /**
     * <p>The identifier of the schema extension.</p>
     */
    SchemaExtensionId?: string;
    /**
     * <p>A description of the schema extension.</p>
     */
    Description?: string;
    /**
     * <p>The current status of the schema extension.</p>
     */
    SchemaExtensionStatus?: SchemaExtensionStatus | string;
    /**
     * <p>The reason for the <code>SchemaExtensionStatus</code>.</p>
     */
    SchemaExtensionStatusReason?: string;
    /**
     * <p>The date and time that the schema extension started being applied to the directory.</p>
     */
    StartDateTime?: Date;
    /**
     * <p>The date and time that the schema extension was completed.</p>
     */
    EndDateTime?: Date;
}
export declare namespace SchemaExtensionInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SchemaExtensionInfo) => any;
}
export interface ListSchemaExtensionsResult {
    /**
     * <p>Information about the schema extensions applied to the directory.</p>
     */
    SchemaExtensionsInfo?: SchemaExtensionInfo[];
    /**
     * <p>If not null, more results are available. Pass this value for the <code>NextToken</code> parameter in a subsequent call to <code>ListSchemaExtensions</code> to retrieve the next set of items.</p>
     */
    NextToken?: string;
}
export declare namespace ListSchemaExtensionsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSchemaExtensionsResult) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>Identifier (ID) of the directory for which you want to retrieve tags.</p>
     */
    ResourceId: string | undefined;
    /**
     * <p>Reserved for future use.</p>
     */
    NextToken?: string;
    /**
     * <p>Reserved for future use.</p>
     */
    Limit?: number;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResult {
    /**
     * <p>List of tags returned by the ListTagsForResource operation.</p>
     */
    Tags?: Tag[];
    /**
     * <p>Reserved for future use.</p>
     */
    NextToken?: string;
}
export declare namespace ListTagsForResourceResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResult) => any;
}
/**
 * <p>The certificate PEM that was provided has incorrect encoding.</p>
 */
export interface InvalidCertificateException extends __SmithyException, $MetadataBearer {
    name: "InvalidCertificateException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace InvalidCertificateException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidCertificateException) => any;
}
export interface RegisterCertificateRequest {
    /**
     * <p>The identifier of the directory.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The certificate PEM string that needs to be registered.</p>
     */
    CertificateData: string | undefined;
    /**
     * <p>The function that the registered certificate performs. Valid values include <code>ClientLDAPS</code> or <code>ClientCertAuth</code>. The default value is <code>ClientLDAPS</code>.</p>
     */
    Type?: CertificateType | string;
    /**
     * <p>A <code>ClientCertAuthSettings</code> object that contains client certificate authentication settings.</p>
     */
    ClientCertAuthSettings?: ClientCertAuthSettings;
}
export declare namespace RegisterCertificateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RegisterCertificateRequest) => any;
}
export interface RegisterCertificateResult {
    /**
     * <p>The identifier of the certificate.</p>
     */
    CertificateId?: string;
}
export declare namespace RegisterCertificateResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RegisterCertificateResult) => any;
}
/**
 * <p>Registers a new event topic.</p>
 */
export interface RegisterEventTopicRequest {
    /**
     * <p>The Directory ID that will publish status messages to the SNS topic.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The SNS topic name to which the directory will publish status messages. This SNS topic must be in the same region as the specified Directory ID.</p>
     */
    TopicName: string | undefined;
}
export declare namespace RegisterEventTopicRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RegisterEventTopicRequest) => any;
}
/**
 * <p>The result of a RegisterEventTopic request.</p>
 */
export interface RegisterEventTopicResult {
}
export declare namespace RegisterEventTopicResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RegisterEventTopicResult) => any;
}
export interface RejectSharedDirectoryRequest {
    /**
     * <p>Identifier of the shared directory in the directory consumer account. This identifier is
     *       different for each directory owner account.</p>
     */
    SharedDirectoryId: string | undefined;
}
export declare namespace RejectSharedDirectoryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RejectSharedDirectoryRequest) => any;
}
export interface RejectSharedDirectoryResult {
    /**
     * <p>Identifier of the shared directory in the directory consumer account.</p>
     */
    SharedDirectoryId?: string;
}
export declare namespace RejectSharedDirectoryResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RejectSharedDirectoryResult) => any;
}
export interface RemoveIpRoutesRequest {
    /**
     * <p>Identifier (ID) of the directory from which you want to remove the IP addresses.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>IP address blocks that you want to remove.</p>
     */
    CidrIps: string[] | undefined;
}
export declare namespace RemoveIpRoutesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RemoveIpRoutesRequest) => any;
}
export interface RemoveIpRoutesResult {
}
export declare namespace RemoveIpRoutesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RemoveIpRoutesResult) => any;
}
export interface RemoveRegionRequest {
    /**
     * <p>The identifier of the directory for which you want to remove Region replication.</p>
     */
    DirectoryId: string | undefined;
}
export declare namespace RemoveRegionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RemoveRegionRequest) => any;
}
export interface RemoveRegionResult {
}
export declare namespace RemoveRegionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RemoveRegionResult) => any;
}
export interface RemoveTagsFromResourceRequest {
    /**
     * <p>Identifier (ID) of the directory from which to remove the tag.</p>
     */
    ResourceId: string | undefined;
    /**
     * <p>The tag key (name) of the tag to be removed.</p>
     */
    TagKeys: string[] | undefined;
}
export declare namespace RemoveTagsFromResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RemoveTagsFromResourceRequest) => any;
}
export interface RemoveTagsFromResourceResult {
}
export declare namespace RemoveTagsFromResourceResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RemoveTagsFromResourceResult) => any;
}
/**
 * <p>The new password provided by the user does not meet the password complexity requirements defined in your directory.</p>
 */
export interface InvalidPasswordException extends __SmithyException, $MetadataBearer {
    name: "InvalidPasswordException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace InvalidPasswordException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidPasswordException) => any;
}
export interface ResetUserPasswordRequest {
    /**
     * <p>Identifier of the AWS Managed Microsoft AD or Simple AD directory in which the user
     *       resides.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The user name of the user whose password will be reset.</p>
     */
    UserName: string | undefined;
    /**
     * <p>The new password that will be reset.</p>
     */
    NewPassword: string | undefined;
}
export declare namespace ResetUserPasswordRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResetUserPasswordRequest) => any;
}
export interface ResetUserPasswordResult {
}
export declare namespace ResetUserPasswordResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResetUserPasswordResult) => any;
}
/**
 * <p>The user provided a username that does not exist in your directory.</p>
 */
export interface UserDoesNotExistException extends __SmithyException, $MetadataBearer {
    name: "UserDoesNotExistException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace UserDoesNotExistException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UserDoesNotExistException) => any;
}
/**
 * <p>An object representing the inputs for the <a>RestoreFromSnapshot</a> operation.</p>
 */
export interface RestoreFromSnapshotRequest {
    /**
     * <p>The identifier of the snapshot to restore from.</p>
     */
    SnapshotId: string | undefined;
}
export declare namespace RestoreFromSnapshotRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RestoreFromSnapshotRequest) => any;
}
/**
 * <p>Contains the results of the <a>RestoreFromSnapshot</a> operation.</p>
 */
export interface RestoreFromSnapshotResult {
}
export declare namespace RestoreFromSnapshotResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RestoreFromSnapshotResult) => any;
}
/**
 * <p>The specified shared target is not valid.</p>
 */
export interface InvalidTargetException extends __SmithyException, $MetadataBearer {
    name: "InvalidTargetException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace InvalidTargetException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidTargetException) => any;
}
/**
 * <p>Exception encountered while trying to access your AWS organization.</p>
 */
export interface OrganizationsException extends __SmithyException, $MetadataBearer {
    name: "OrganizationsException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace OrganizationsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OrganizationsException) => any;
}
export declare enum TargetType {
    ACCOUNT = "ACCOUNT"
}
/**
 * <p>Identifier that contains details about the directory consumer account.</p>
 */
export interface ShareTarget {
    /**
     * <p>Identifier of the directory consumer account.</p>
     */
    Id: string | undefined;
    /**
     * <p>Type of identifier to be used in the <code>Id</code> field.</p>
     */
    Type: TargetType | string | undefined;
}
export declare namespace ShareTarget {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ShareTarget) => any;
}
export interface ShareDirectoryRequest {
    /**
     * <p>Identifier of the AWS Managed Microsoft AD directory that you want to share with other AWS
     *       accounts.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>A directory share request that is sent by the directory owner to the directory consumer.
     *       The request includes a typed message to help the directory consumer administrator determine
     *       whether to approve or reject the share invitation.</p>
     */
    ShareNotes?: string;
    /**
     * <p>Identifier for the directory consumer account with whom the directory is to be
     *       shared.</p>
     */
    ShareTarget: ShareTarget | undefined;
    /**
     * <p>The method used when sharing a directory to determine whether the directory should be
     *       shared within your AWS organization (<code>ORGANIZATIONS</code>) or with any AWS account by
     *       sending a directory sharing request (<code>HANDSHAKE</code>).</p>
     */
    ShareMethod: ShareMethod | string | undefined;
}
export declare namespace ShareDirectoryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ShareDirectoryRequest) => any;
}
export interface ShareDirectoryResult {
    /**
     * <p>Identifier of the directory that is stored in the directory consumer account that is
     *       shared from the specified directory (<code>DirectoryId</code>).</p>
     */
    SharedDirectoryId?: string;
}
export declare namespace ShareDirectoryResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ShareDirectoryResult) => any;
}
/**
 * <p>The maximum number of AWS accounts that you can share with this directory has been reached.</p>
 */
export interface ShareLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "ShareLimitExceededException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace ShareLimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ShareLimitExceededException) => any;
}
export interface StartSchemaExtensionRequest {
    /**
     * <p>The identifier of the directory for which the schema extension will be applied to.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>If true, creates a snapshot of the directory before applying the schema extension.</p>
     */
    CreateSnapshotBeforeSchemaExtension: boolean | undefined;
    /**
     * <p>The LDIF file represented as a string. To construct the LdifContent string, precede each line as it would be formatted in an ldif file with \n. See the example request below for more details. The file size can be no larger than 1MB.</p>
     */
    LdifContent: string | undefined;
    /**
     * <p>A description of the schema extension.</p>
     */
    Description: string | undefined;
}
export declare namespace StartSchemaExtensionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartSchemaExtensionRequest) => any;
}
export interface StartSchemaExtensionResult {
    /**
     * <p>The identifier of the schema extension that will be applied.</p>
     */
    SchemaExtensionId?: string;
}
export declare namespace StartSchemaExtensionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartSchemaExtensionResult) => any;
}
/**
 * <p>Identifier that contains details about the directory consumer account with whom the
 *       directory is being unshared.</p>
 */
export interface UnshareTarget {
    /**
     * <p>Identifier of the directory consumer account.</p>
     */
    Id: string | undefined;
    /**
     * <p>Type of identifier to be used in the <i>Id</i> field.</p>
     */
    Type: TargetType | string | undefined;
}
export declare namespace UnshareTarget {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnshareTarget) => any;
}
export interface UnshareDirectoryRequest {
    /**
     * <p>The identifier of the AWS Managed Microsoft AD directory that you want to stop
     *       sharing.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>Identifier for the directory consumer account with whom the directory has to be
     *       unshared.</p>
     */
    UnshareTarget: UnshareTarget | undefined;
}
export declare namespace UnshareDirectoryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnshareDirectoryRequest) => any;
}
export interface UnshareDirectoryResult {
    /**
     * <p>Identifier of the directory stored in the directory consumer account that is to be
     *       unshared from the specified directory (<code>DirectoryId</code>).</p>
     */
    SharedDirectoryId?: string;
}
export declare namespace UnshareDirectoryResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnshareDirectoryResult) => any;
}
/**
 * <p>Updates a conditional forwarder.</p>
 */
export interface UpdateConditionalForwarderRequest {
    /**
     * <p>The directory ID of the AWS directory for which to update the conditional forwarder.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The fully qualified domain name (FQDN) of the remote domain with which you will set up a trust relationship.</p>
     */
    RemoteDomainName: string | undefined;
    /**
     * <p>The updated IP addresses of the remote DNS server associated with the conditional forwarder.</p>
     */
    DnsIpAddrs: string[] | undefined;
}
export declare namespace UpdateConditionalForwarderRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateConditionalForwarderRequest) => any;
}
/**
 * <p>The result of an UpdateConditionalForwarder request.</p>
 */
export interface UpdateConditionalForwarderResult {
}
export declare namespace UpdateConditionalForwarderResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateConditionalForwarderResult) => any;
}
/**
 * <p>The maximum allowed number of domain controllers per directory was exceeded. The default limit per directory is 20 domain controllers.</p>
 */
export interface DomainControllerLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "DomainControllerLimitExceededException";
    $fault: "client";
    /**
     * <p>The descriptive message for the exception.</p>
     */
    Message?: string;
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
}
export declare namespace DomainControllerLimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DomainControllerLimitExceededException) => any;
}
export interface UpdateNumberOfDomainControllersRequest {
    /**
     * <p>Identifier of the directory to which the domain controllers will be added or removed.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The number of domain controllers desired in the directory.</p>
     */
    DesiredNumber: number | undefined;
}
export declare namespace UpdateNumberOfDomainControllersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateNumberOfDomainControllersRequest) => any;
}
export interface UpdateNumberOfDomainControllersResult {
}
export declare namespace UpdateNumberOfDomainControllersResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateNumberOfDomainControllersResult) => any;
}
/**
 * <p>Contains the inputs for the <a>UpdateRadius</a> operation.</p>
 */
export interface UpdateRadiusRequest {
    /**
     * <p>The identifier of the directory for which to update the RADIUS server information.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>A <a>RadiusSettings</a> object that contains information about the RADIUS server.</p>
     */
    RadiusSettings: RadiusSettings | undefined;
}
export declare namespace UpdateRadiusRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateRadiusRequest) => any;
}
/**
 * <p>Contains the results of the <a>UpdateRadius</a> operation.</p>
 */
export interface UpdateRadiusResult {
}
export declare namespace UpdateRadiusResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateRadiusResult) => any;
}
export interface UpdateTrustRequest {
    /**
     * <p>Identifier of the trust relationship.</p>
     */
    TrustId: string | undefined;
    /**
     * <p>Updates selective authentication for the trust.</p>
     */
    SelectiveAuth?: SelectiveAuth | string;
}
export declare namespace UpdateTrustRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateTrustRequest) => any;
}
export interface UpdateTrustResult {
    /**
     * <p>The AWS request identifier.</p>
     */
    RequestId?: string;
    /**
     * <p>Identifier of the trust relationship.</p>
     */
    TrustId?: string;
}
export declare namespace UpdateTrustResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateTrustResult) => any;
}
/**
 * <p>Initiates the verification of an existing trust relationship between an AWS Managed Microsoft AD directory and an external domain.</p>
 */
export interface VerifyTrustRequest {
    /**
     * <p>The unique Trust ID of the trust relationship to verify.</p>
     */
    TrustId: string | undefined;
}
export declare namespace VerifyTrustRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VerifyTrustRequest) => any;
}
/**
 * <p>Result of a VerifyTrust request.</p>
 */
export interface VerifyTrustResult {
    /**
     * <p>The unique Trust ID of the trust relationship that was verified.</p>
     */
    TrustId?: string;
}
export declare namespace VerifyTrustResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VerifyTrustResult) => any;
}
