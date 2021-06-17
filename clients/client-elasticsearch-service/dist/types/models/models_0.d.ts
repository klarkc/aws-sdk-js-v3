import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>Container for the parameters to the <code><a>AcceptInboundCrossClusterSearchConnection</a></code> operation.</p>
 */
export interface AcceptInboundCrossClusterSearchConnectionRequest {
    /**
     * <p>The id of the inbound connection that you want to accept.</p>
     */
    CrossClusterSearchConnectionId: string | undefined;
}
export declare namespace AcceptInboundCrossClusterSearchConnectionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptInboundCrossClusterSearchConnectionRequest) => any;
}
export declare enum InboundCrossClusterSearchConnectionStatusCode {
    APPROVED = "APPROVED",
    DELETED = "DELETED",
    DELETING = "DELETING",
    PENDING_ACCEPTANCE = "PENDING_ACCEPTANCE",
    REJECTED = "REJECTED",
    REJECTING = "REJECTING"
}
/**
 * <p>Specifies the coonection status of an inbound cross-cluster search connection.</p>
 */
export interface InboundCrossClusterSearchConnectionStatus {
    /**
     * <p>The state code for inbound connection. This can be one of the following:</p>
     *     <ul>
     *       <li>PENDING_ACCEPTANCE: Inbound connection is not yet accepted by destination domain owner.</li>
     *       <li>APPROVED: Inbound connection is pending acceptance by destination domain owner.</li>
     *       <li>REJECTING: Inbound connection rejection is in process.</li>
     *       <li>REJECTED: Inbound connection is rejected.</li>
     *       <li>DELETING: Inbound connection deletion is in progress.</li>
     *       <li>DELETED: Inbound connection is deleted and cannot be used further.</li>
     *     </ul>
     */
    StatusCode?: InboundCrossClusterSearchConnectionStatusCode | string;
    /**
     * <p>Specifies verbose information for the inbound connection status.</p>
     */
    Message?: string;
}
export declare namespace InboundCrossClusterSearchConnectionStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InboundCrossClusterSearchConnectionStatus) => any;
}
export interface DomainInformation {
    OwnerId?: string;
    /**
     * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
     */
    DomainName: string | undefined;
    Region?: string;
}
export declare namespace DomainInformation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DomainInformation) => any;
}
/**
 * <p>Specifies details of an inbound connection.</p>
 */
export interface InboundCrossClusterSearchConnection {
    /**
     * <p>Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.</p>
     */
    SourceDomainInfo?: DomainInformation;
    /**
     * <p>Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.</p>
     */
    DestinationDomainInfo?: DomainInformation;
    /**
     * <p>Specifies the connection id for the inbound cross-cluster search connection.</p>
     */
    CrossClusterSearchConnectionId?: string;
    /**
     * <p>Specifies the <code><a>InboundCrossClusterSearchConnectionStatus</a></code> for the outbound connection.</p>
     */
    ConnectionStatus?: InboundCrossClusterSearchConnectionStatus;
}
export declare namespace InboundCrossClusterSearchConnection {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InboundCrossClusterSearchConnection) => any;
}
/**
 * <p>The result of a <code><a>AcceptInboundCrossClusterSearchConnection</a></code> operation. Contains details of accepted inbound connection.</p>
 */
export interface AcceptInboundCrossClusterSearchConnectionResponse {
    /**
     * <p>Specifies the <code><a>InboundCrossClusterSearchConnection</a></code> of accepted inbound connection. </p>
     */
    CrossClusterSearchConnection?: InboundCrossClusterSearchConnection;
}
export declare namespace AcceptInboundCrossClusterSearchConnectionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AcceptInboundCrossClusterSearchConnectionResponse) => any;
}
/**
 * <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 */
export interface DisabledOperationException extends __SmithyException, $MetadataBearer {
    name: "DisabledOperationException";
    $fault: "client";
    /**
     * <p>A description of the error.</p>
     */
    message?: string;
}
export declare namespace DisabledOperationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisabledOperationException) => any;
}
/**
 * <p>An exception for trying to create more than allowed resources or sub-resources. Gives http status code of 409.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
    name: "LimitExceededException";
    $fault: "client";
    /**
     * <p>A description of the error.</p>
     */
    message?: string;
}
export declare namespace LimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LimitExceededException) => any;
}
/**
 * <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    /**
     * <p>A description of the error.</p>
     */
    message?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
/**
 * <p>An error occurred because user does not have permissions to access the resource. Returns HTTP status code 403.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "AccessDeniedException";
    $fault: "client";
    /**
     * <p>A description of the error.</p>
     */
    message?: string;
}
export declare namespace AccessDeniedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessDeniedException) => any;
}
export declare type OptionState = "Active" | "Processing" | "RequiresIndexDocuments";
/**
 * <p>Provides the current status of the entity.</p>
 */
export interface OptionStatus {
    /**
     * <p>Timestamp which tells the creation date for the entity.</p>
     */
    CreationDate: Date | undefined;
    /**
     * <p>Timestamp which tells the last updated time for the entity.</p>
     */
    UpdateDate: Date | undefined;
    /**
     * <p>Specifies the latest version for the entity.</p>
     */
    UpdateVersion?: number;
    /**
     * <p>Provides the <code>OptionState</code> for the Elasticsearch domain.</p>
     */
    State: OptionState | string | undefined;
    /**
     * <p>Indicates whether the Elasticsearch domain is being deleted.</p>
     */
    PendingDeletion?: boolean;
}
export declare namespace OptionStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OptionStatus) => any;
}
/**
 * <p>The configured access rules for the domain's document and search endpoints, and the current status of those rules.</p>
 */
export interface AccessPoliciesStatus {
    /**
     * <p>The access policy configured for the Elasticsearch domain.  Access policies may be resource-based, IP-based, or IAM-based.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">
     *            Configuring Access Policies</a>for more information.</p>
     */
    Options: string | undefined;
    /**
     * <p>The status of the access policy for the Elasticsearch domain. See <code>OptionStatus</code> for the status information that's included. </p>
     */
    Status: OptionStatus | undefined;
}
export declare namespace AccessPoliciesStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessPoliciesStatus) => any;
}
/**
 * <p>
 *       List of limits that are specific to a given InstanceType and for each of it's
 *       <code>
 *         <a>InstanceRole</a>
 *       </code>
 *       .
 *     </p>
 */
export interface AdditionalLimit {
    /**
     * <p>
     *       Name of Additional Limit is specific to a given InstanceType and for each of it's
     *       <code>
     *         <a>InstanceRole</a>
     *       </code>
     *       etc.
     *       <br></br>
     *       Attributes and their details:
     *       <br></br>
     *       <ul>
     *         <li>MaximumNumberOfDataNodesSupported</li>
     *         This attribute will be present in Master node only to specify how
     *         much data nodes upto which given
     *         <code>
     *           <a>ESPartitionInstanceType</a>
     *         </code>
     *         can support as master node.
     *         <li>MaximumNumberOfDataNodesWithoutMasterNode</li>
     *         This attribute will be present in Data node only to specify how much
     *         data nodes of given
     *         <code>
     *           <a>ESPartitionInstanceType</a>
     *         </code>
     *         upto which you don't need any master nodes to govern them.
     *       </ul>
     *     </p>
     */
    LimitName?: string;
    /**
     * <p>
     *     Value for given
     *     <code>
     *       <a>AdditionalLimit$LimitName</a>
     *     </code>
     *     .
     *   </p>
     */
    LimitValues?: string[];
}
export declare namespace AdditionalLimit {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AdditionalLimit) => any;
}
/**
 * <p>Specifies a key value pair for a resource tag.</p>
 */
export interface Tag {
    /**
     * <p>Specifies the <code>TagKey</code>, the name of the tag.  Tag keys must be unique for the Elasticsearch domain to which they are attached.</p>
     */
    Key: string | undefined;
    /**
     * <p>Specifies the <code>TagValue</code>, the value assigned to the corresponding tag key.  Tag values can be null and do not have to be unique in a tag set.  For example, you can have a key value
     *        pair in a tag set of <code>project : Trinity</code> and <code>cost-center : Trinity</code></p>
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
 * <p>Container for the parameters to the <code><a>AddTags</a></code> operation. Specify the tags that you want to attach to the Elasticsearch domain.</p>
 */
export interface AddTagsRequest {
    /**
     * <p> Specify the <code>ARN</code> for which you want to add the tags.</p>
     */
    ARN: string | undefined;
    /**
     * <p> List of <code>Tag</code> that need to be added for the Elasticsearch domain. </p>
     */
    TagList: Tag[] | undefined;
}
export declare namespace AddTagsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AddTagsRequest) => any;
}
/**
 * <p>An error occurred while processing the request.</p>
 */
export interface BaseException extends __SmithyException, $MetadataBearer {
    name: "BaseException";
    $fault: "client";
    /**
     * <p>A description of the error.</p>
     */
    message?: string;
}
export declare namespace BaseException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BaseException) => any;
}
/**
 * <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 */
export interface InternalException extends __SmithyException, $MetadataBearer {
    name: "InternalException";
    $fault: "server";
    /**
     * <p>A description of the error.</p>
     */
    message?: string;
}
export declare namespace InternalException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalException) => any;
}
/**
 * <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
    name: "ValidationException";
    $fault: "client";
    /**
     * <p>A description of the error.</p>
     */
    message?: string;
}
export declare namespace ValidationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationException) => any;
}
/**
 * <p> Status of the advanced options for the specified Elasticsearch domain. Currently, the following advanced options are available:</p>
 *        <ul>
 *            <li>Option to allow references to indices in an HTTP request body.  Must be <code>false</code> when configuring access to individual sub-resources.  By default, the value is <code>true</code>.
 *                See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li>
 *            <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li>
 *        </ul>
 *        <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p>
 */
export interface AdvancedOptionsStatus {
    /**
     * <p> Specifies the status of advanced options for the specified Elasticsearch domain.</p>
     */
    Options: {
        [key: string]: string;
    } | undefined;
    /**
     * <p> Specifies the status of <code>OptionStatus</code> for advanced options for the specified Elasticsearch domain.</p>
     */
    Status: OptionStatus | undefined;
}
export declare namespace AdvancedOptionsStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AdvancedOptionsStatus) => any;
}
/**
 * <p>Specifies the SAML Identity Provider's information.</p>
 */
export interface SAMLIdp {
    /**
     * <p>The Metadata of the SAML application in xml format.</p>
     */
    MetadataContent: string | undefined;
    /**
     * <p>The unique Entity ID of the application in SAML Identity Provider.</p>
     */
    EntityId: string | undefined;
}
export declare namespace SAMLIdp {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SAMLIdp) => any;
}
/**
 * <p>Describes the SAML application configured for the domain.</p>
 */
export interface SAMLOptionsOutput {
    /**
     * <p>True if SAML is enabled.</p>
     */
    Enabled?: boolean;
    /**
     * <p>Describes the SAML Identity Provider's information.</p>
     */
    Idp?: SAMLIdp;
    /**
     * <p>The key used for matching the SAML Subject attribute.</p>
     */
    SubjectKey?: string;
    /**
     * <p>The key used for matching the SAML Roles attribute.</p>
     */
    RolesKey?: string;
    /**
     * <p>The duration, in minutes, after which a user session becomes inactive.</p>
     */
    SessionTimeoutMinutes?: number;
}
export declare namespace SAMLOptionsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SAMLOptionsOutput) => any;
}
/**
 * <p>Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled.</p>
 */
export interface AdvancedSecurityOptions {
    /**
     * <p>True if advanced security is enabled.</p>
     */
    Enabled?: boolean;
    /**
     * <p>True if the internal user database is enabled.</p>
     */
    InternalUserDatabaseEnabled?: boolean;
    /**
     * <p>Describes the SAML application configured for a domain.</p>
     */
    SAMLOptions?: SAMLOptionsOutput;
}
export declare namespace AdvancedSecurityOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AdvancedSecurityOptions) => any;
}
/**
 * <p>Credentials for the master user: username and password, ARN, or both.</p>
 */
export interface MasterUserOptions {
    /**
     * <p>ARN for the master user (if IAM is enabled).</p>
     */
    MasterUserARN?: string;
    /**
     * <p>The master user's username, which is stored in the Amazon Elasticsearch Service domain's internal database.</p>
     */
    MasterUserName?: string;
    /**
     * <p>The master user's password, which is stored in the Amazon Elasticsearch Service domain's internal database.</p>
     */
    MasterUserPassword?: string;
}
export declare namespace MasterUserOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MasterUserOptions) => any;
}
/**
 * <p>Specifies the SAML application configuration for the domain.</p>
 */
export interface SAMLOptionsInput {
    /**
     * <p>True if SAML is enabled.</p>
     */
    Enabled?: boolean;
    /**
     * <p>Specifies the SAML Identity Provider's information.</p>
     */
    Idp?: SAMLIdp;
    /**
     * <p>The SAML master username, which is stored in the Amazon Elasticsearch Service domain's internal database.</p>
     */
    MasterUserName?: string;
    /**
     * <p>The backend role to which the SAML master user is mapped to.</p>
     */
    MasterBackendRole?: string;
    /**
     * <p>The key to use for matching the SAML Subject attribute.</p>
     */
    SubjectKey?: string;
    /**
     * <p>The key to use for matching the SAML Roles attribute.</p>
     */
    RolesKey?: string;
    /**
     * <p>The duration, in minutes, after which a user session becomes inactive. Acceptable values are between 1 and 1440, and the default value is 60.</p>
     */
    SessionTimeoutMinutes?: number;
}
export declare namespace SAMLOptionsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SAMLOptionsInput) => any;
}
/**
 * <p>Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled).</p>
 */
export interface AdvancedSecurityOptionsInput {
    /**
     * <p>True if advanced security is enabled.</p>
     */
    Enabled?: boolean;
    /**
     * <p>True if the internal user database is enabled.</p>
     */
    InternalUserDatabaseEnabled?: boolean;
    /**
     * <p>Credentials for the master user: username and password, ARN, or both.</p>
     */
    MasterUserOptions?: MasterUserOptions;
    /**
     * <p>Specifies the SAML application configuration for the domain.</p>
     */
    SAMLOptions?: SAMLOptionsInput;
}
export declare namespace AdvancedSecurityOptionsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AdvancedSecurityOptionsInput) => any;
}
/**
 * <p> Specifies the status of advanced security options for the specified Elasticsearch domain.</p>
 */
export interface AdvancedSecurityOptionsStatus {
    /**
     * <p> Specifies advanced security options for the specified Elasticsearch domain.</p>
     */
    Options: AdvancedSecurityOptions | undefined;
    /**
     * <p> Status of the advanced security options for the specified Elasticsearch domain.</p>
     */
    Status: OptionStatus | undefined;
}
export declare namespace AdvancedSecurityOptionsStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AdvancedSecurityOptionsStatus) => any;
}
/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>AssociatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface AssociatePackageRequest {
    /**
     * <p>Internal ID of the package that you want to associate with a domain. Use <code>DescribePackages</code> to find this value.</p>
     */
    PackageID: string | undefined;
    /**
     * <p>Name of the domain that you want to associate the package with.</p>
     */
    DomainName: string | undefined;
}
export declare namespace AssociatePackageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociatePackageRequest) => any;
}
export declare type DomainPackageStatus = "ACTIVE" | "ASSOCIATING" | "ASSOCIATION_FAILED" | "DISSOCIATING" | "DISSOCIATION_FAILED";
export interface ErrorDetails {
    ErrorType?: string;
    ErrorMessage?: string;
}
export declare namespace ErrorDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ErrorDetails) => any;
}
export declare type PackageType = "TXT-DICTIONARY";
/**
 * <p>Information on a package that is associated with a domain.</p>
 */
export interface DomainPackageDetails {
    /**
     * <p>Internal ID of the package.</p>
     */
    PackageID?: string;
    /**
     * <p>User specified name of the package.</p>
     */
    PackageName?: string;
    /**
     * <p>Currently supports only TXT-DICTIONARY.</p>
     */
    PackageType?: PackageType | string;
    /**
     * <p>Timestamp of the most-recent update to the association status.</p>
     */
    LastUpdated?: Date;
    /**
     * <p>Name of the domain you've associated a package with.</p>
     */
    DomainName?: string;
    /**
     * <p>State of the association. Values are ASSOCIATING/ASSOCIATION_FAILED/ACTIVE/DISSOCIATING/DISSOCIATION_FAILED.</p>
     */
    DomainPackageStatus?: DomainPackageStatus | string;
    PackageVersion?: string;
    /**
     * <p>The relative path on Amazon ES nodes, which can be used as synonym_path when the package is synonym file.</p>
     */
    ReferencePath?: string;
    /**
     * <p>Additional information if the package is in an error state. Null otherwise.</p>
     */
    ErrorDetails?: ErrorDetails;
}
export declare namespace DomainPackageDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DomainPackageDetails) => any;
}
/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>AssociatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface AssociatePackageResponse {
    /**
     * <p><code>DomainPackageDetails</code></p>
     */
    DomainPackageDetails?: DomainPackageDetails;
}
export declare namespace AssociatePackageResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociatePackageResponse) => any;
}
/**
 * <p>An error occurred because the client attempts to remove a resource that is currently in use. Returns HTTP status code 409.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    /**
     * <p>A description of the error.</p>
     */
    message?: string;
}
export declare namespace ConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConflictException) => any;
}
/**
 * <p>Container for the parameters to the <code><a>CancelElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to cancel a service software update on.</p>
 */
export interface CancelElasticsearchServiceSoftwareUpdateRequest {
    /**
     * <p>The name of the domain that you want to stop the latest service software update on.</p>
     */
    DomainName: string | undefined;
}
export declare namespace CancelElasticsearchServiceSoftwareUpdateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelElasticsearchServiceSoftwareUpdateRequest) => any;
}
export declare type DeploymentStatus = "COMPLETED" | "ELIGIBLE" | "IN_PROGRESS" | "NOT_ELIGIBLE" | "PENDING_UPDATE";
/**
 * <p>The current options of an Elasticsearch domain service software options.</p>
 */
export interface ServiceSoftwareOptions {
    /**
     * <p>The current service software version that is present on the domain.</p>
     */
    CurrentVersion?: string;
    /**
     * <p>The new service software version if one is available.</p>
     */
    NewVersion?: string;
    /**
     * <p><code>True</code> if you are able to update you service software version. <code>False</code> if you are not able to update your service software version. </p>
     */
    UpdateAvailable?: boolean;
    /**
     * <p><code>True</code> if you are able to cancel your service software version update. <code>False</code> if you are not able to cancel your service software version. </p>
     */
    Cancellable?: boolean;
    /**
     * <p>The status of your service software update. This field can take the following values: <code>ELIGIBLE</code>, <code>PENDING_UPDATE</code>, <code>IN_PROGRESS</code>, <code>COMPLETED</code>, and <code>NOT_ELIGIBLE</code>.</p>
     */
    UpdateStatus?: DeploymentStatus | string;
    /**
     * <p>The description of the <code>UpdateStatus</code>.</p>
     */
    Description?: string;
    /**
     * <p>Timestamp, in Epoch time, until which you can manually request a service software update. After this date, we automatically update your service software.</p>
     */
    AutomatedUpdateDate?: Date;
    /**
     * <p><code>True</code> if a service software is never automatically updated. <code>False</code> if a service software is automatically updated after <code>AutomatedUpdateDate</code>.  </p>
     */
    OptionalDeployment?: boolean;
}
export declare namespace ServiceSoftwareOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServiceSoftwareOptions) => any;
}
/**
 * <p>The result of a <code>CancelElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update.</p>
 */
export interface CancelElasticsearchServiceSoftwareUpdateResponse {
    /**
     * <p>The current status of the Elasticsearch service software update.</p>
     */
    ServiceSoftwareOptions?: ServiceSoftwareOptions;
}
export declare namespace CancelElasticsearchServiceSoftwareUpdateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CancelElasticsearchServiceSoftwareUpdateResponse) => any;
}
export declare enum AutoTuneDesiredState {
    DISABLED = "DISABLED",
    ENABLED = "ENABLED"
}
export declare enum TimeUnit {
    HOURS = "HOURS"
}
/**
 * <p>Specifies maintenance schedule duration: duration value and duration unit. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
 */
export interface Duration {
    /**
     * <p> Integer to specify the value of a maintenance schedule duration. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
     */
    Value?: number;
    /**
     * <p>Specifies the unit of a maintenance schedule duration. Valid value is HOURS. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
     */
    Unit?: TimeUnit | string;
}
export declare namespace Duration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Duration) => any;
}
/**
 * <p>Specifies Auto-Tune maitenance schedule. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
 */
export interface AutoTuneMaintenanceSchedule {
    /**
     * <p>Specifies timestamp at which Auto-Tune maintenance schedule start. </p>
     */
    StartAt?: Date;
    /**
     * <p>Specifies maintenance schedule duration: duration value and duration unit. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
     */
    Duration?: Duration;
    /**
     * <p>Specifies cron expression for a recurring maintenance schedule. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
     */
    CronExpressionForRecurrence?: string;
}
export declare namespace AutoTuneMaintenanceSchedule {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AutoTuneMaintenanceSchedule) => any;
}
/**
 * <p>Specifies the Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules.</p>
 */
export interface AutoTuneOptionsInput {
    /**
     * <p>Specifies the Auto-Tune desired state. Valid values are ENABLED, DISABLED. </p>
     */
    DesiredState?: AutoTuneDesiredState | string;
    /**
     * <p>Specifies list of maitenance schedules. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
     */
    MaintenanceSchedules?: AutoTuneMaintenanceSchedule[];
}
export declare namespace AutoTuneOptionsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AutoTuneOptionsInput) => any;
}
/**
 * <p>Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
 */
export interface CognitoOptions {
    /**
     * <p>Specifies the option to enable Cognito for Kibana authentication.</p>
     */
    Enabled?: boolean;
    /**
     * <p>Specifies the Cognito user pool ID for Kibana authentication.</p>
     */
    UserPoolId?: string;
    /**
     * <p>Specifies the Cognito identity pool ID for Kibana authentication.</p>
     */
    IdentityPoolId?: string;
    /**
     * <p>Specifies the role ARN that provides Elasticsearch permissions for accessing Cognito resources.</p>
     */
    RoleArn?: string;
}
export declare namespace CognitoOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CognitoOptions) => any;
}
export declare enum TLSSecurityPolicy {
    POLICY_MIN_TLS_1_0_2019_07 = "Policy-Min-TLS-1-0-2019-07",
    POLICY_MIN_TLS_1_2_2019_07 = "Policy-Min-TLS-1-2-2019-07"
}
/**
 * <p>Options to configure endpoint for the Elasticsearch domain.</p>
 */
export interface DomainEndpointOptions {
    /**
     * <p>Specify if only HTTPS endpoint should be enabled for the Elasticsearch domain.</p>
     */
    EnforceHTTPS?: boolean;
    /**
     * <p>Specify the TLS security policy that needs to be applied to the HTTPS endpoint of Elasticsearch domain.
     *         <br></br> It can be one of the following values:
     *         <ul>
     *             <li><b>Policy-Min-TLS-1-0-2019-07: </b> TLS security policy which supports TLSv1.0 and higher.</li>
     *             <li><b>Policy-Min-TLS-1-2-2019-07: </b> TLS security policy which supports only TLSv1.2</li>
     *         </ul>
     *     </p>
     */
    TLSSecurityPolicy?: TLSSecurityPolicy | string;
    /**
     * <p>Specify if custom endpoint should be enabled for the Elasticsearch domain.</p>
     */
    CustomEndpointEnabled?: boolean;
    /**
     * <p>Specify the fully qualified domain for your custom endpoint.</p>
     */
    CustomEndpoint?: string;
    /**
     * <p>Specify ACM certificate ARN for your custom endpoint.</p>
     */
    CustomEndpointCertificateArn?: string;
}
export declare namespace DomainEndpointOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DomainEndpointOptions) => any;
}
export declare type VolumeType = "gp2" | "io1" | "standard";
/**
 * <p>Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>.</p>
 */
export interface EBSOptions {
    /**
     * <p>Specifies whether EBS-based storage is enabled.</p>
     */
    EBSEnabled?: boolean;
    /**
     * <p> Specifies the volume type for EBS-based storage.</p>
     */
    VolumeType?: VolumeType | string;
    /**
     * <p> Integer to specify the size of an EBS volume.</p>
     */
    VolumeSize?: number;
    /**
     * <p>Specifies the IOPD for a Provisioned IOPS EBS volume (SSD).</p>
     */
    Iops?: number;
}
export declare namespace EBSOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EBSOptions) => any;
}
/**
 * <p>Specifies settings for cold storage.</p>
 */
export interface ColdStorageOptions {
    /**
     * <p>True to enable cold storage for an Elasticsearch domain.</p>
     */
    Enabled: boolean | undefined;
}
export declare namespace ColdStorageOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ColdStorageOptions) => any;
}
export declare type ESPartitionInstanceType = "c4.2xlarge.elasticsearch" | "c4.4xlarge.elasticsearch" | "c4.8xlarge.elasticsearch" | "c4.large.elasticsearch" | "c4.xlarge.elasticsearch" | "c5.18xlarge.elasticsearch" | "c5.2xlarge.elasticsearch" | "c5.4xlarge.elasticsearch" | "c5.9xlarge.elasticsearch" | "c5.large.elasticsearch" | "c5.xlarge.elasticsearch" | "d2.2xlarge.elasticsearch" | "d2.4xlarge.elasticsearch" | "d2.8xlarge.elasticsearch" | "d2.xlarge.elasticsearch" | "i2.2xlarge.elasticsearch" | "i2.xlarge.elasticsearch" | "i3.16xlarge.elasticsearch" | "i3.2xlarge.elasticsearch" | "i3.4xlarge.elasticsearch" | "i3.8xlarge.elasticsearch" | "i3.large.elasticsearch" | "i3.xlarge.elasticsearch" | "m3.2xlarge.elasticsearch" | "m3.large.elasticsearch" | "m3.medium.elasticsearch" | "m3.xlarge.elasticsearch" | "m4.10xlarge.elasticsearch" | "m4.2xlarge.elasticsearch" | "m4.4xlarge.elasticsearch" | "m4.large.elasticsearch" | "m4.xlarge.elasticsearch" | "m5.12xlarge.elasticsearch" | "m5.2xlarge.elasticsearch" | "m5.4xlarge.elasticsearch" | "m5.large.elasticsearch" | "m5.xlarge.elasticsearch" | "r3.2xlarge.elasticsearch" | "r3.4xlarge.elasticsearch" | "r3.8xlarge.elasticsearch" | "r3.large.elasticsearch" | "r3.xlarge.elasticsearch" | "r4.16xlarge.elasticsearch" | "r4.2xlarge.elasticsearch" | "r4.4xlarge.elasticsearch" | "r4.8xlarge.elasticsearch" | "r4.large.elasticsearch" | "r4.xlarge.elasticsearch" | "r5.12xlarge.elasticsearch" | "r5.2xlarge.elasticsearch" | "r5.4xlarge.elasticsearch" | "r5.large.elasticsearch" | "r5.xlarge.elasticsearch" | "t2.medium.elasticsearch" | "t2.micro.elasticsearch" | "t2.small.elasticsearch" | "ultrawarm1.large.elasticsearch" | "ultrawarm1.medium.elasticsearch";
export declare type ESWarmPartitionInstanceType = "ultrawarm1.large.elasticsearch" | "ultrawarm1.medium.elasticsearch";
/**
 * <p>Specifies the zone awareness configuration for the domain cluster, such as the number of availability zones.</p>
 */
export interface ZoneAwarenessConfig {
    /**
     * <p>An integer value to indicate the number of availability zones for a domain when zone awareness is enabled. This should be equal to number of subnets if VPC endpoints is enabled</p>
     */
    AvailabilityZoneCount?: number;
}
export declare namespace ZoneAwarenessConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ZoneAwarenessConfig) => any;
}
/**
 * <p>Specifies the configuration for the domain cluster, such as the type and number of instances.</p>
 */
export interface ElasticsearchClusterConfig {
    /**
     * <p>The instance type for an Elasticsearch cluster. UltraWarm instance types are not supported for data instances.</p>
     */
    InstanceType?: ESPartitionInstanceType | string;
    /**
     * <p>The number of instances in the specified domain cluster.</p>
     */
    InstanceCount?: number;
    /**
     * <p>A boolean value to indicate whether a dedicated master node is enabled.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-dedicatedmasternodes" target="_blank">About Dedicated Master Nodes</a> for more information.</p>
     */
    DedicatedMasterEnabled?: boolean;
    /**
     * <p>A boolean value to indicate whether zone awareness is enabled.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-zoneawareness" target="_blank">About Zone Awareness</a> for more information.</p>
     */
    ZoneAwarenessEnabled?: boolean;
    /**
     * <p>Specifies the zone awareness configuration for a domain when zone awareness is enabled.</p>
     */
    ZoneAwarenessConfig?: ZoneAwarenessConfig;
    /**
     * <p>The instance type for a dedicated master node.</p>
     */
    DedicatedMasterType?: ESPartitionInstanceType | string;
    /**
     * <p>Total number of dedicated master nodes, active and on standby, for the cluster.</p>
     */
    DedicatedMasterCount?: number;
    /**
     * <p>True to enable warm storage.</p>
     */
    WarmEnabled?: boolean;
    /**
     * <p>The instance type for the Elasticsearch cluster's warm nodes.</p>
     */
    WarmType?: ESWarmPartitionInstanceType | string;
    /**
     * <p>The number of warm nodes in the cluster.</p>
     */
    WarmCount?: number;
    /**
     * <p>Specifies the <code>ColdStorageOptions</code> configuration for an Elasticsearch domain.</p>
     */
    ColdStorageOptions?: ColdStorageOptions;
}
export declare namespace ElasticsearchClusterConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ElasticsearchClusterConfig) => any;
}
/**
 * <p>Specifies the Encryption At Rest Options.</p>
 */
export interface EncryptionAtRestOptions {
    /**
     * <p>Specifies the option to enable Encryption At Rest.</p>
     */
    Enabled?: boolean;
    /**
     * <p> Specifies the KMS Key ID for Encryption At Rest options.</p>
     */
    KmsKeyId?: string;
}
export declare namespace EncryptionAtRestOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EncryptionAtRestOptions) => any;
}
export declare type LogType = "AUDIT_LOGS" | "ES_APPLICATION_LOGS" | "INDEX_SLOW_LOGS" | "SEARCH_SLOW_LOGS";
/**
 * <p>Log Publishing option that is set for given domain.
 *        <br></br>Attributes and their details:
 *      <ul>
 *        <li>CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.</li>
 *        <li>Enabled: Whether the log publishing for given log type is enabled or not</li>
 *      </ul>
 *    </p>
 */
export interface LogPublishingOption {
    /**
     * <p>ARN of the Cloudwatch log group to which log needs to be published.</p>
     */
    CloudWatchLogsLogGroupArn?: string;
    /**
     * <p> Specifies whether given log publishing option is enabled or not.</p>
     */
    Enabled?: boolean;
}
export declare namespace LogPublishingOption {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LogPublishingOption) => any;
}
/**
 * <p>Specifies the node-to-node encryption options.</p>
 */
export interface NodeToNodeEncryptionOptions {
    /**
     * <p>Specify true to enable node-to-node encryption.</p>
     */
    Enabled?: boolean;
}
export declare namespace NodeToNodeEncryptionOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NodeToNodeEncryptionOptions) => any;
}
/**
 * <p>Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.</p>
 */
export interface SnapshotOptions {
    /**
     * <p>Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.</p>
     */
    AutomatedSnapshotStartHour?: number;
}
export declare namespace SnapshotOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SnapshotOptions) => any;
}
/**
 * <p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
 */
export interface VPCOptions {
    /**
     * <p>Specifies the subnets for VPC endpoint.</p>
     */
    SubnetIds?: string[];
    /**
     * <p>Specifies the security groups for VPC endpoint.</p>
     */
    SecurityGroupIds?: string[];
}
export declare namespace VPCOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VPCOptions) => any;
}
export interface CreateElasticsearchDomainRequest {
    /**
     * <p>The name of the Elasticsearch domain that you are creating. Domain names are unique across the domains owned by an account within an AWS region. Domain names must start with a lowercase letter and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
     */
    DomainName: string | undefined;
    /**
     * <p>String of format X.Y to specify version for the Elasticsearch domain eg. "1.5" or "2.3". For more information,
     *           see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.</p>
     */
    ElasticsearchVersion?: string;
    /**
     * <p>Configuration options for an Elasticsearch domain. Specifies the instance type and number of instances in the domain cluster. </p>
     */
    ElasticsearchClusterConfig?: ElasticsearchClusterConfig;
    /**
     * <p>Options to enable, disable and specify the type and size of EBS storage volumes. </p>
     */
    EBSOptions?: EBSOptions;
    /**
     * <p> IAM access policy as a JSON-formatted string.</p>
     */
    AccessPolicies?: string;
    /**
     * <p>Option to set time, in UTC format, of the daily automated snapshot. Default value is 0 hours. </p>
     */
    SnapshotOptions?: SnapshotOptions;
    /**
     * <p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-creating-vpc" target="_blank">Creating a VPC</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i></p>
     */
    VPCOptions?: VPCOptions;
    /**
     * <p>Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
     */
    CognitoOptions?: CognitoOptions;
    /**
     * <p>Specifies the Encryption At Rest Options.</p>
     */
    EncryptionAtRestOptions?: EncryptionAtRestOptions;
    /**
     * <p>Specifies the NodeToNodeEncryptionOptions.</p>
     */
    NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
    /**
     * <p> Option to allow references to indices in an HTTP request body.  Must be <code>false</code> when configuring access to individual sub-resources.  By default, the value is <code>true</code>.
     *           See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</p>
     */
    AdvancedOptions?: {
        [key: string]: string;
    };
    /**
     * <p>Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log.</p>
     */
    LogPublishingOptions?: {
        [key: string]: LogPublishingOption;
    };
    /**
     * <p>Options to specify configuration that will be applied to the domain endpoint.</p>
     */
    DomainEndpointOptions?: DomainEndpointOptions;
    /**
     * <p>Specifies advanced security options.</p>
     */
    AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;
    /**
     * <p>Specifies Auto-Tune options.</p>
     */
    AutoTuneOptions?: AutoTuneOptionsInput;
    /**
     * <p>A list of <code>Tag</code> added during domain creation.</p>
     */
    TagList?: Tag[];
}
export declare namespace CreateElasticsearchDomainRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateElasticsearchDomainRequest) => any;
}
export declare enum AutoTuneState {
    DISABLED = "DISABLED",
    DISABLED_AND_ROLLBACK_COMPLETE = "DISABLED_AND_ROLLBACK_COMPLETE",
    DISABLED_AND_ROLLBACK_ERROR = "DISABLED_AND_ROLLBACK_ERROR",
    DISABLED_AND_ROLLBACK_IN_PROGRESS = "DISABLED_AND_ROLLBACK_IN_PROGRESS",
    DISABLED_AND_ROLLBACK_SCHEDULED = "DISABLED_AND_ROLLBACK_SCHEDULED",
    DISABLE_IN_PROGRESS = "DISABLE_IN_PROGRESS",
    ENABLED = "ENABLED",
    ENABLE_IN_PROGRESS = "ENABLE_IN_PROGRESS",
    ERROR = "ERROR"
}
/**
 * <p>Specifies the Auto-Tune options: the Auto-Tune desired state for the domain and list of maintenance schedules.</p>
 */
export interface AutoTuneOptionsOutput {
    /**
     * <p>Specifies the <code>AutoTuneState</code> for the Elasticsearch domain.</p>
     */
    State?: AutoTuneState | string;
    /**
     * <p>Specifies the error message while enabling or disabling the Auto-Tune.</p>
     */
    ErrorMessage?: string;
}
export declare namespace AutoTuneOptionsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AutoTuneOptionsOutput) => any;
}
/**
 * <p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
 */
export interface VPCDerivedInfo {
    /**
     * <p>The VPC Id for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.</p>
     */
    VPCId?: string;
    /**
     * <p>Specifies the subnets for VPC endpoint.</p>
     */
    SubnetIds?: string[];
    /**
     * <p>The availability zones for the Elasticsearch domain. Exists only if the domain was created with VPCOptions.</p>
     */
    AvailabilityZones?: string[];
    /**
     * <p>Specifies the security groups for VPC endpoint.</p>
     */
    SecurityGroupIds?: string[];
}
export declare namespace VPCDerivedInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VPCDerivedInfo) => any;
}
/**
 * <p>The current status of an Elasticsearch domain.</p>
 */
export interface ElasticsearchDomainStatus {
    /**
     * <p>The unique identifier for the specified Elasticsearch domain.</p>
     */
    DomainId: string | undefined;
    /**
     * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
     */
    DomainName: string | undefined;
    /**
     * <p>The Amazon resource name (ARN) of an Elasticsearch domain.  See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.</p>
     */
    ARN: string | undefined;
    /**
     * <p>The domain creation status. <code>True</code> if the creation of an Elasticsearch domain is complete. <code>False</code> if domain creation is still in progress.</p>
     */
    Created?: boolean;
    /**
     * <p>The domain deletion status. <code>True</code> if a delete request has been received for the domain but resource cleanup is still in progress. <code>False</code> if the domain has not been deleted. Once domain deletion is complete, the status of the domain is no longer returned.</p>
     */
    Deleted?: boolean;
    /**
     * <p>The Elasticsearch domain endpoint that you use to submit index and search requests.</p>
     */
    Endpoint?: string;
    /**
     * <p>Map containing the Elasticsearch domain endpoints used to submit index and search requests. Example <code>key, value</code>: <code>'vpc','vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com'</code>.</p>
     */
    Endpoints?: {
        [key: string]: string;
    };
    /**
     * <p>The status of the Elasticsearch domain configuration. <code>True</code> if Amazon Elasticsearch Service is processing configuration changes. <code>False</code> if the configuration is active.</p>
     */
    Processing?: boolean;
    /**
     * <p>The status of an Elasticsearch domain version upgrade. <code>True</code> if Amazon Elasticsearch Service is undergoing a version upgrade. <code>False</code> if the configuration is active.</p>
     */
    UpgradeProcessing?: boolean;
    ElasticsearchVersion?: string;
    /**
     * <p>The type and number of instances in the domain cluster.</p>
     */
    ElasticsearchClusterConfig: ElasticsearchClusterConfig | undefined;
    /**
     * <p>The <code>EBSOptions</code> for the specified domain.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a> for more information.</p>
     */
    EBSOptions?: EBSOptions;
    /**
     * <p> IAM access policy as a JSON-formatted string.</p>
     */
    AccessPolicies?: string;
    /**
     * <p>Specifies the status of the <code>SnapshotOptions</code></p>
     */
    SnapshotOptions?: SnapshotOptions;
    /**
     * <p>The <code>VPCOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank">VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
     */
    VPCOptions?: VPCDerivedInfo;
    /**
     * <p>The <code>CognitoOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
     */
    CognitoOptions?: CognitoOptions;
    /**
     * <p> Specifies the status of the <code>EncryptionAtRestOptions</code>.</p>
     */
    EncryptionAtRestOptions?: EncryptionAtRestOptions;
    /**
     * <p>Specifies the status of the <code>NodeToNodeEncryptionOptions</code>.</p>
     */
    NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
    /**
     * <p>Specifies the status of the <code>AdvancedOptions</code></p>
     */
    AdvancedOptions?: {
        [key: string]: string;
    };
    /**
     * <p>Log publishing options for the given domain.</p>
     */
    LogPublishingOptions?: {
        [key: string]: LogPublishingOption;
    };
    /**
     * <p>The current status of the Elasticsearch domain's service software.</p>
     */
    ServiceSoftwareOptions?: ServiceSoftwareOptions;
    /**
     * <p>The current status of the Elasticsearch domain's endpoint options.</p>
     */
    DomainEndpointOptions?: DomainEndpointOptions;
    /**
     * <p>The current status of the Elasticsearch domain's advanced security options.</p>
     */
    AdvancedSecurityOptions?: AdvancedSecurityOptions;
    /**
     * <p>The current status of the Elasticsearch domain's Auto-Tune options.</p>
     */
    AutoTuneOptions?: AutoTuneOptionsOutput;
}
export declare namespace ElasticsearchDomainStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ElasticsearchDomainStatus) => any;
}
/**
 * <p>The result of a <code>CreateElasticsearchDomain</code> operation. Contains the status of the newly created Elasticsearch domain.</p>
 */
export interface CreateElasticsearchDomainResponse {
    /**
     * <p>The status of the newly created Elasticsearch domain. </p>
     */
    DomainStatus?: ElasticsearchDomainStatus;
}
export declare namespace CreateElasticsearchDomainResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateElasticsearchDomainResponse) => any;
}
/**
 * <p>An exception for trying to create or access sub-resource that is either invalid or not supported. Gives http status code of 409.</p>
 */
export interface InvalidTypeException extends __SmithyException, $MetadataBearer {
    name: "InvalidTypeException";
    $fault: "client";
    /**
     * <p>A description of the error.</p>
     */
    message?: string;
}
export declare namespace InvalidTypeException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidTypeException) => any;
}
/**
 * <p>An exception for creating a resource that already exists. Gives http status code of 400.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
    name: "ResourceAlreadyExistsException";
    $fault: "client";
    /**
     * <p>A description of the error.</p>
     */
    message?: string;
}
export declare namespace ResourceAlreadyExistsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceAlreadyExistsException) => any;
}
/**
 * <p>Container for the parameters to the <code><a>CreateOutboundCrossClusterSearchConnection</a></code> operation.</p>
 */
export interface CreateOutboundCrossClusterSearchConnectionRequest {
    /**
     * <p>Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.</p>
     */
    SourceDomainInfo: DomainInformation | undefined;
    /**
     * <p>Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.</p>
     */
    DestinationDomainInfo: DomainInformation | undefined;
    /**
     * <p>Specifies the connection alias that will be used by the customer for this connection.</p>
     */
    ConnectionAlias: string | undefined;
}
export declare namespace CreateOutboundCrossClusterSearchConnectionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateOutboundCrossClusterSearchConnectionRequest) => any;
}
export declare enum OutboundCrossClusterSearchConnectionStatusCode {
    ACTIVE = "ACTIVE",
    DELETED = "DELETED",
    DELETING = "DELETING",
    PENDING_ACCEPTANCE = "PENDING_ACCEPTANCE",
    PROVISIONING = "PROVISIONING",
    REJECTED = "REJECTED",
    VALIDATING = "VALIDATING",
    VALIDATION_FAILED = "VALIDATION_FAILED"
}
/**
 * <p>Specifies the connection status of an outbound cross-cluster search connection.</p>
 */
export interface OutboundCrossClusterSearchConnectionStatus {
    /**
     * <p>The state code for outbound connection. This can be one of the following:</p>
     *     <ul>
     *       <li>VALIDATING: The outbound connection request is being validated.</li>
     *       <li>VALIDATION_FAILED: Validation failed for the connection request.</li>
     *       <li>PENDING_ACCEPTANCE: Outbound connection request is validated and is not yet accepted by destination domain owner.</li>
     *       <li>PROVISIONING: Outbound connection request is in process.</li>
     *       <li>ACTIVE: Outbound connection is active and ready to use.</li>
     *       <li>REJECTED: Outbound connection request is rejected by destination domain owner.</li>
     *       <li>DELETING: Outbound connection deletion is in progress.</li>
     *       <li>DELETED: Outbound connection is deleted and cannot be used further.</li>
     *     </ul>
     */
    StatusCode?: OutboundCrossClusterSearchConnectionStatusCode | string;
    /**
     * <p>Specifies verbose information for the outbound connection status.</p>
     */
    Message?: string;
}
export declare namespace OutboundCrossClusterSearchConnectionStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OutboundCrossClusterSearchConnectionStatus) => any;
}
/**
 * <p>The result of a <code><a>CreateOutboundCrossClusterSearchConnection</a></code> request. Contains the details of the newly created cross-cluster search connection.</p>
 */
export interface CreateOutboundCrossClusterSearchConnectionResponse {
    /**
     * <p>Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.</p>
     */
    SourceDomainInfo?: DomainInformation;
    /**
     * <p>Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.</p>
     */
    DestinationDomainInfo?: DomainInformation;
    /**
     * <p>Specifies the connection alias provided during the create connection request.</p>
     */
    ConnectionAlias?: string;
    /**
     * <p>Specifies the <code><a>OutboundCrossClusterSearchConnectionStatus</a></code> for the newly created connection.</p>
     */
    ConnectionStatus?: OutboundCrossClusterSearchConnectionStatus;
    /**
     * <p>Unique id for the created outbound connection, which is used for subsequent operations on connection.</p>
     */
    CrossClusterSearchConnectionId?: string;
}
export declare namespace CreateOutboundCrossClusterSearchConnectionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateOutboundCrossClusterSearchConnectionResponse) => any;
}
/**
 * <p>The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code></p>
 */
export interface PackageSource {
    /**
     * <p>Name of the bucket containing the package.</p>
     */
    S3BucketName?: string;
    /**
     * <p>Key (file name) of the package.</p>
     */
    S3Key?: string;
}
export declare namespace PackageSource {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PackageSource) => any;
}
/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>CreatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface CreatePackageRequest {
    /**
     * <p>Unique identifier for the package.</p>
     */
    PackageName: string | undefined;
    /**
     * <p>Type of package. Currently supports only TXT-DICTIONARY.</p>
     */
    PackageType: PackageType | string | undefined;
    /**
     * <p>Description of the package.</p>
     */
    PackageDescription?: string;
    /**
     * <p>The customer S3 location <code>PackageSource</code> for importing the package.</p>
     */
    PackageSource: PackageSource | undefined;
}
export declare namespace CreatePackageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreatePackageRequest) => any;
}
export declare type PackageStatus = "AVAILABLE" | "COPYING" | "COPY_FAILED" | "DELETED" | "DELETE_FAILED" | "DELETING" | "VALIDATING" | "VALIDATION_FAILED";
/**
 * <p>Basic information about a package.</p>
 */
export interface PackageDetails {
    /**
     * <p>Internal ID of the package.</p>
     */
    PackageID?: string;
    /**
     * <p>User specified name of the package.</p>
     */
    PackageName?: string;
    /**
     * <p>Currently supports only TXT-DICTIONARY.</p>
     */
    PackageType?: PackageType | string;
    /**
     * <p>User-specified description of the package.</p>
     */
    PackageDescription?: string;
    /**
     * <p>Current state of the package. Values are COPYING/COPY_FAILED/AVAILABLE/DELETING/DELETE_FAILED</p>
     */
    PackageStatus?: PackageStatus | string;
    /**
     * <p>Timestamp which tells creation date of the package.</p>
     */
    CreatedAt?: Date;
    LastUpdatedAt?: Date;
    AvailablePackageVersion?: string;
    /**
     * <p>Additional information if the package is in an error state. Null otherwise.</p>
     */
    ErrorDetails?: ErrorDetails;
}
export declare namespace PackageDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PackageDetails) => any;
}
/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>CreatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface CreatePackageResponse {
    /**
     * <p>Information about the package <code>PackageDetails</code>.</p>
     */
    PackageDetails?: PackageDetails;
}
export declare namespace CreatePackageResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreatePackageResponse) => any;
}
/**
 * <p>Container for the parameters to the <code><a>DeleteElasticsearchDomain</a></code> operation. Specifies the name of the Elasticsearch domain that you want to delete.</p>
 */
export interface DeleteElasticsearchDomainRequest {
    /**
     * <p>The name of the Elasticsearch domain that you want to permanently delete.</p>
     */
    DomainName: string | undefined;
}
export declare namespace DeleteElasticsearchDomainRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteElasticsearchDomainRequest) => any;
}
/**
 * <p>The result of a <code>DeleteElasticsearchDomain</code> request. Contains the status of the pending deletion, or no status if the domain and all of its resources have been deleted.</p>
 */
export interface DeleteElasticsearchDomainResponse {
    /**
     * <p>The status of the Elasticsearch domain being deleted.</p>
     */
    DomainStatus?: ElasticsearchDomainStatus;
}
export declare namespace DeleteElasticsearchDomainResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteElasticsearchDomainResponse) => any;
}
/**
 * <p>Container for the parameters to the <code><a>DeleteInboundCrossClusterSearchConnection</a></code> operation.</p>
 */
export interface DeleteInboundCrossClusterSearchConnectionRequest {
    /**
     * <p>The id of the inbound connection that you want to permanently delete.</p>
     */
    CrossClusterSearchConnectionId: string | undefined;
}
export declare namespace DeleteInboundCrossClusterSearchConnectionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteInboundCrossClusterSearchConnectionRequest) => any;
}
/**
 * <p>The result of a <code><a>DeleteInboundCrossClusterSearchConnection</a></code> operation. Contains details of deleted inbound connection.</p>
 */
export interface DeleteInboundCrossClusterSearchConnectionResponse {
    /**
     * <p>Specifies the <code><a>InboundCrossClusterSearchConnection</a></code> of deleted inbound connection. </p>
     */
    CrossClusterSearchConnection?: InboundCrossClusterSearchConnection;
}
export declare namespace DeleteInboundCrossClusterSearchConnectionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteInboundCrossClusterSearchConnectionResponse) => any;
}
/**
 * <p>Container for the parameters to the <code><a>DeleteOutboundCrossClusterSearchConnection</a></code> operation.</p>
 */
export interface DeleteOutboundCrossClusterSearchConnectionRequest {
    /**
     * <p>The id of the outbound connection that you want to permanently delete.</p>
     */
    CrossClusterSearchConnectionId: string | undefined;
}
export declare namespace DeleteOutboundCrossClusterSearchConnectionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteOutboundCrossClusterSearchConnectionRequest) => any;
}
/**
 * <p>Specifies details of an outbound connection.</p>
 */
export interface OutboundCrossClusterSearchConnection {
    /**
     * <p>Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.</p>
     */
    SourceDomainInfo?: DomainInformation;
    /**
     * <p>Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.</p>
     */
    DestinationDomainInfo?: DomainInformation;
    /**
     * <p>Specifies the connection id for the outbound cross-cluster search connection.</p>
     */
    CrossClusterSearchConnectionId?: string;
    /**
     * <p>Specifies the connection alias for the outbound cross-cluster search connection.</p>
     */
    ConnectionAlias?: string;
    /**
     * <p>Specifies the <code><a>OutboundCrossClusterSearchConnectionStatus</a></code> for the outbound connection.</p>
     */
    ConnectionStatus?: OutboundCrossClusterSearchConnectionStatus;
}
export declare namespace OutboundCrossClusterSearchConnection {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OutboundCrossClusterSearchConnection) => any;
}
/**
 * <p>The result of a <code><a>DeleteOutboundCrossClusterSearchConnection</a></code> operation. Contains details of deleted outbound connection.</p>
 */
export interface DeleteOutboundCrossClusterSearchConnectionResponse {
    /**
     * <p>Specifies the <code><a>OutboundCrossClusterSearchConnection</a></code> of deleted outbound connection. </p>
     */
    CrossClusterSearchConnection?: OutboundCrossClusterSearchConnection;
}
export declare namespace DeleteOutboundCrossClusterSearchConnectionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteOutboundCrossClusterSearchConnectionResponse) => any;
}
/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>DeletePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DeletePackageRequest {
    /**
     * <p>Internal ID of the package that you want to delete. Use <code>DescribePackages</code> to find this value.</p>
     */
    PackageID: string | undefined;
}
export declare namespace DeletePackageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeletePackageRequest) => any;
}
/**
 * <p>
 *       Container for response parameters to
 *       <code>
 *         <a>DeletePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DeletePackageResponse {
    /**
     * <p><code>PackageDetails</code></p>
     */
    PackageDetails?: PackageDetails;
}
export declare namespace DeletePackageResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeletePackageResponse) => any;
}
/**
 * <p>Container for the parameters to the <code>DescribeDomainAutoTunes</code> operation.</p>
 */
export interface DescribeDomainAutoTunesRequest {
    /**
     * <p>Specifies the domain name for which you want Auto-Tune action details.</p>
     */
    DomainName: string | undefined;
    /**
     * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
     */
    MaxResults?: number;
    /**
     * <p>NextToken is sent in case the earlier API call results contain the NextToken. It is used for pagination.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeDomainAutoTunesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDomainAutoTunesRequest) => any;
}
export declare enum ScheduledAutoTuneActionType {
    JVM_HEAP_SIZE_TUNING = "JVM_HEAP_SIZE_TUNING",
    JVM_YOUNG_GEN_TUNING = "JVM_YOUNG_GEN_TUNING"
}
export declare enum ScheduledAutoTuneSeverityType {
    HIGH = "HIGH",
    LOW = "LOW",
    MEDIUM = "MEDIUM"
}
/**
 * <p>Specifies details of the scheduled Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. </p>
 */
export interface ScheduledAutoTuneDetails {
    /**
     * <p>Specifies timestamp for the Auto-Tune action scheduled for the domain. </p>
     */
    Date?: Date;
    /**
     * <p>Specifies Auto-Tune action type. Valid values are JVM_HEAP_SIZE_TUNING and JVM_YOUNG_GEN_TUNING. </p>
     */
    ActionType?: ScheduledAutoTuneActionType | string;
    /**
     * <p>Specifies Auto-Tune action description. </p>
     */
    Action?: string;
    /**
     * <p>Specifies Auto-Tune action severity. Valid values are LOW, MEDIUM and HIGH. </p>
     */
    Severity?: ScheduledAutoTuneSeverityType | string;
}
export declare namespace ScheduledAutoTuneDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ScheduledAutoTuneDetails) => any;
}
/**
 * <p>Specifies details of the Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. </p>
 */
export interface AutoTuneDetails {
    /**
     * <p>Specifies details of the scheduled Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. </p>
     */
    ScheduledAutoTuneDetails?: ScheduledAutoTuneDetails;
}
export declare namespace AutoTuneDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AutoTuneDetails) => any;
}
export declare enum AutoTuneType {
    SCHEDULED_ACTION = "SCHEDULED_ACTION"
}
/**
 * <p>Specifies Auto-Tune type and Auto-Tune action details. </p>
 */
export interface AutoTune {
    /**
     * <p>Specifies Auto-Tune type. Valid value is SCHEDULED_ACTION. </p>
     */
    AutoTuneType?: AutoTuneType | string;
    /**
     * <p>Specifies details of the Auto-Tune action. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. </p>
     */
    AutoTuneDetails?: AutoTuneDetails;
}
export declare namespace AutoTune {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AutoTune) => any;
}
/**
 * <p>The result of <code>DescribeDomainAutoTunes</code> request. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information. </p>
 */
export interface DescribeDomainAutoTunesResponse {
    /**
     * <p>Specifies the list of setting adjustments that Auto-Tune has made to the domain. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
     */
    AutoTunes?: AutoTune[];
    /**
     * <p>Specifies an identifier to allow retrieval of paginated results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeDomainAutoTunesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeDomainAutoTunesResponse) => any;
}
/**
 * <p>Container for the parameters to the <code><a>DescribeElasticsearchDomain</a></code> operation.</p>
 */
export interface DescribeElasticsearchDomainRequest {
    /**
     * <p>The name of the Elasticsearch domain for which you want information.</p>
     */
    DomainName: string | undefined;
}
export declare namespace DescribeElasticsearchDomainRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeElasticsearchDomainRequest) => any;
}
/**
 * <p>The result of a <code>DescribeElasticsearchDomain</code> request. Contains the status of the domain specified in the request.</p>
 */
export interface DescribeElasticsearchDomainResponse {
    /**
     * <p>The current status of the Elasticsearch domain.</p>
     */
    DomainStatus: ElasticsearchDomainStatus | undefined;
}
export declare namespace DescribeElasticsearchDomainResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeElasticsearchDomainResponse) => any;
}
/**
 * <p> Container for the parameters to the <code>DescribeElasticsearchDomainConfig</code> operation. Specifies the domain name for which you want configuration information.</p>
 */
export interface DescribeElasticsearchDomainConfigRequest {
    /**
     * <p>The Elasticsearch domain that you want to get information about.</p>
     */
    DomainName: string | undefined;
}
export declare namespace DescribeElasticsearchDomainConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeElasticsearchDomainConfigRequest) => any;
}
export declare enum RollbackOnDisable {
    DEFAULT_ROLLBACK = "DEFAULT_ROLLBACK",
    NO_ROLLBACK = "NO_ROLLBACK"
}
/**
 * <p>Specifies the Auto-Tune options: the Auto-Tune desired state for the domain, rollback state when disabling Auto-Tune options and list of maintenance schedules.</p>
 */
export interface AutoTuneOptions {
    /**
     * <p>Specifies the Auto-Tune desired state. Valid values are ENABLED, DISABLED. </p>
     */
    DesiredState?: AutoTuneDesiredState | string;
    /**
     * <p>Specifies the rollback state while disabling Auto-Tune for the domain. Valid values are NO_ROLLBACK, DEFAULT_ROLLBACK. </p>
     */
    RollbackOnDisable?: RollbackOnDisable | string;
    /**
     * <p>Specifies list of maitenance schedules. See the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/auto-tune.html" target="_blank">Developer Guide</a> for more information.</p>
     */
    MaintenanceSchedules?: AutoTuneMaintenanceSchedule[];
}
export declare namespace AutoTuneOptions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AutoTuneOptions) => any;
}
/**
 * <p>Provides the current status of the Auto-Tune options. </p>
 */
export interface AutoTuneStatus {
    /**
     * <p>Timestamp which tells Auto-Tune options creation date .</p>
     */
    CreationDate: Date | undefined;
    /**
     * <p>Timestamp which tells Auto-Tune options last updated time.</p>
     */
    UpdateDate: Date | undefined;
    /**
     * <p>Specifies the Auto-Tune options latest version.</p>
     */
    UpdateVersion?: number;
    /**
     * <p>Specifies the <code>AutoTuneState</code> for the Elasticsearch domain.</p>
     */
    State: AutoTuneState | string | undefined;
    /**
     * <p>Specifies the error message while enabling or disabling the Auto-Tune options.</p>
     */
    ErrorMessage?: string;
    /**
     * <p>Indicates whether the Elasticsearch domain is being deleted.</p>
     */
    PendingDeletion?: boolean;
}
export declare namespace AutoTuneStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AutoTuneStatus) => any;
}
/**
 * <p> Specifies the status of Auto-Tune options for the specified Elasticsearch domain.</p>
 */
export interface AutoTuneOptionsStatus {
    /**
     * <p> Specifies Auto-Tune options for the specified Elasticsearch domain.</p>
     */
    Options?: AutoTuneOptions;
    /**
     * <p> Specifies Status of the Auto-Tune options for the specified Elasticsearch domain.</p>
     */
    Status?: AutoTuneStatus;
}
export declare namespace AutoTuneOptionsStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AutoTuneOptionsStatus) => any;
}
/**
 * <p>Status of the Cognito options for the specified Elasticsearch domain.</p>
 */
export interface CognitoOptionsStatus {
    /**
     * <p>Specifies the Cognito options for the specified Elasticsearch domain.</p>
     */
    Options: CognitoOptions | undefined;
    /**
     * <p>Specifies the status of the Cognito options for the specified Elasticsearch domain.</p>
     */
    Status: OptionStatus | undefined;
}
export declare namespace CognitoOptionsStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CognitoOptionsStatus) => any;
}
/**
 * <p>The configured endpoint options for the domain and their current status.</p>
 */
export interface DomainEndpointOptionsStatus {
    /**
     * <p>Options to configure endpoint for the Elasticsearch domain.</p>
     */
    Options: DomainEndpointOptions | undefined;
    /**
     * <p>The status of the endpoint options for the Elasticsearch domain. See <code>OptionStatus</code> for the status information that's included. </p>
     */
    Status: OptionStatus | undefined;
}
export declare namespace DomainEndpointOptionsStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DomainEndpointOptionsStatus) => any;
}
/**
 * <p> Status of the EBS options for the specified Elasticsearch domain.</p>
 */
export interface EBSOptionsStatus {
    /**
     * <p> Specifies the EBS options for the specified Elasticsearch domain.</p>
     */
    Options: EBSOptions | undefined;
    /**
     * <p> Specifies the status of the EBS options for the specified Elasticsearch domain.</p>
     */
    Status: OptionStatus | undefined;
}
export declare namespace EBSOptionsStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EBSOptionsStatus) => any;
}
/**
 * <p> Specifies the configuration status for the specified Elasticsearch domain.</p>
 */
export interface ElasticsearchClusterConfigStatus {
    /**
     * <p> Specifies the cluster configuration for the specified Elasticsearch domain.</p>
     */
    Options: ElasticsearchClusterConfig | undefined;
    /**
     * <p> Specifies the status of the configuration for the specified Elasticsearch domain.</p>
     */
    Status: OptionStatus | undefined;
}
export declare namespace ElasticsearchClusterConfigStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ElasticsearchClusterConfigStatus) => any;
}
/**
 * <p> Status of the Elasticsearch version options for the specified Elasticsearch domain.</p>
 */
export interface ElasticsearchVersionStatus {
    /**
     * <p> Specifies the Elasticsearch version for the specified Elasticsearch domain.</p>
     */
    Options: string | undefined;
    /**
     * <p> Specifies the status of the Elasticsearch version options for the specified Elasticsearch domain.</p>
     */
    Status: OptionStatus | undefined;
}
export declare namespace ElasticsearchVersionStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ElasticsearchVersionStatus) => any;
}
/**
 * <p> Status of the Encryption At Rest options for the specified Elasticsearch domain.</p>
 */
export interface EncryptionAtRestOptionsStatus {
    /**
     * <p> Specifies the Encryption At Rest options for the specified Elasticsearch domain.</p>
     */
    Options: EncryptionAtRestOptions | undefined;
    /**
     * <p> Specifies the status of the Encryption At Rest options for the specified Elasticsearch domain.</p>
     */
    Status: OptionStatus | undefined;
}
export declare namespace EncryptionAtRestOptionsStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: EncryptionAtRestOptionsStatus) => any;
}
/**
 * <p>The configured log publishing options for the domain and their current status.</p>
 */
export interface LogPublishingOptionsStatus {
    /**
     * <p>The log publishing options configured for the Elasticsearch domain.</p>
     */
    Options?: {
        [key: string]: LogPublishingOption;
    };
    /**
     * <p>The status of the log publishing options for the Elasticsearch domain. See <code>OptionStatus</code> for the status information that's included. </p>
     */
    Status?: OptionStatus;
}
export declare namespace LogPublishingOptionsStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LogPublishingOptionsStatus) => any;
}
/**
 * <p>Status of the node-to-node encryption options for the specified Elasticsearch domain.</p>
 */
export interface NodeToNodeEncryptionOptionsStatus {
    /**
     * <p>Specifies the node-to-node encryption options for the specified Elasticsearch domain.</p>
     */
    Options: NodeToNodeEncryptionOptions | undefined;
    /**
     * <p>Specifies the status of the node-to-node encryption options for the specified Elasticsearch domain.</p>
     */
    Status: OptionStatus | undefined;
}
export declare namespace NodeToNodeEncryptionOptionsStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NodeToNodeEncryptionOptionsStatus) => any;
}
/**
 * <p>Status of a daily automated snapshot.</p>
 */
export interface SnapshotOptionsStatus {
    /**
     * <p>Specifies the daily snapshot options specified for the Elasticsearch domain.</p>
     */
    Options: SnapshotOptions | undefined;
    /**
     * <p>Specifies the status of a daily automated snapshot.</p>
     */
    Status: OptionStatus | undefined;
}
export declare namespace SnapshotOptionsStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SnapshotOptionsStatus) => any;
}
/**
 * <p> Status of the VPC options for the specified Elasticsearch domain.</p>
 */
export interface VPCDerivedInfoStatus {
    /**
     * <p> Specifies the VPC options for the specified Elasticsearch domain.</p>
     */
    Options: VPCDerivedInfo | undefined;
    /**
     * <p> Specifies the status of the VPC options for the specified Elasticsearch domain.</p>
     */
    Status: OptionStatus | undefined;
}
export declare namespace VPCDerivedInfoStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VPCDerivedInfoStatus) => any;
}
/**
 * <p>The configuration of an Elasticsearch domain.</p>
 */
export interface ElasticsearchDomainConfig {
    /**
     * <p>String of format X.Y to specify version for the Elasticsearch domain.</p>
     */
    ElasticsearchVersion?: ElasticsearchVersionStatus;
    /**
     * <p>Specifies the <code>ElasticsearchClusterConfig</code> for the Elasticsearch domain.</p>
     */
    ElasticsearchClusterConfig?: ElasticsearchClusterConfigStatus;
    /**
     * <p>Specifies the <code>EBSOptions</code> for the Elasticsearch domain.</p>
     */
    EBSOptions?: EBSOptionsStatus;
    /**
     * <p>IAM access policy as a JSON-formatted string.</p>
     */
    AccessPolicies?: AccessPoliciesStatus;
    /**
     * <p>Specifies the <code>SnapshotOptions</code> for the Elasticsearch domain.</p>
     */
    SnapshotOptions?: SnapshotOptionsStatus;
    /**
     * <p>The <code>VPCOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank">VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
     */
    VPCOptions?: VPCDerivedInfoStatus;
    /**
     * <p>The <code>CognitoOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
     */
    CognitoOptions?: CognitoOptionsStatus;
    /**
     * <p>Specifies the <code>EncryptionAtRestOptions</code> for the Elasticsearch domain.</p>
     */
    EncryptionAtRestOptions?: EncryptionAtRestOptionsStatus;
    /**
     * <p>Specifies the <code>NodeToNodeEncryptionOptions</code> for the Elasticsearch domain.</p>
     */
    NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsStatus;
    /**
     * <p>Specifies the <code>AdvancedOptions</code> for the domain.  See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuring Advanced Options</a> for more information.</p>
     */
    AdvancedOptions?: AdvancedOptionsStatus;
    /**
     * <p>Log publishing options for the given domain.</p>
     */
    LogPublishingOptions?: LogPublishingOptionsStatus;
    /**
     * <p>Specifies the <code>DomainEndpointOptions</code> for the Elasticsearch domain.</p>
     */
    DomainEndpointOptions?: DomainEndpointOptionsStatus;
    /**
     * <p>Specifies <code>AdvancedSecurityOptions</code> for the domain. </p>
     */
    AdvancedSecurityOptions?: AdvancedSecurityOptionsStatus;
    /**
     * <p>Specifies <code>AutoTuneOptions</code> for the domain. </p>
     */
    AutoTuneOptions?: AutoTuneOptionsStatus;
}
export declare namespace ElasticsearchDomainConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ElasticsearchDomainConfig) => any;
}
/**
 * <p>The result of a <code>DescribeElasticsearchDomainConfig</code> request. Contains the configuration information of the requested domain.</p>
 */
export interface DescribeElasticsearchDomainConfigResponse {
    /**
     * <p>The configuration information of the domain requested in the <code>DescribeElasticsearchDomainConfig</code> request.</p>
     */
    DomainConfig: ElasticsearchDomainConfig | undefined;
}
export declare namespace DescribeElasticsearchDomainConfigResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeElasticsearchDomainConfigResponse) => any;
}
/**
 * <p>Container for the parameters to the <code><a>DescribeElasticsearchDomains</a></code> operation. By default, the API returns the status of all Elasticsearch domains.</p>
 */
export interface DescribeElasticsearchDomainsRequest {
    /**
     * <p>The Elasticsearch domains for which you want information.</p>
     */
    DomainNames: string[] | undefined;
}
export declare namespace DescribeElasticsearchDomainsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeElasticsearchDomainsRequest) => any;
}
/**
 * <p>The result of a <code>DescribeElasticsearchDomains</code> request. Contains the status of the specified domains or all domains owned by the account.</p>
 */
export interface DescribeElasticsearchDomainsResponse {
    /**
     * <p>The status of the domains requested in the <code>DescribeElasticsearchDomains</code> request.</p>
     */
    DomainStatusList: ElasticsearchDomainStatus[] | undefined;
}
export declare namespace DescribeElasticsearchDomainsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeElasticsearchDomainsResponse) => any;
}
/**
 * <p>
 *       Container for the parameters to
 *       <code>
 *         <a>DescribeElasticsearchInstanceTypeLimits</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DescribeElasticsearchInstanceTypeLimitsRequest {
    /**
     * <p>
     *       DomainName represents the name of the Domain that we are trying to
     *       modify. This should be present only if we are
     *       querying for Elasticsearch
     *       <code>
     *         <a>Limits</a>
     *       </code>
     *       for existing domain.
     *     </p>
     */
    DomainName?: string;
    /**
     * <p>
     *       The instance type for an Elasticsearch cluster for which Elasticsearch
     *       <code>
     *         <a>Limits</a>
     *       </code>
     *       are needed.
     *     </p>
     */
    InstanceType: ESPartitionInstanceType | string | undefined;
    /**
     * <p>
     *       Version of Elasticsearch for which
     *       <code>
     *         <a>Limits</a>
     *       </code>
     *       are needed.
     *     </p>
     */
    ElasticsearchVersion: string | undefined;
}
export declare namespace DescribeElasticsearchInstanceTypeLimitsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeElasticsearchInstanceTypeLimitsRequest) => any;
}
/**
 * <p>
 *       InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for
 *       given InstanceType.
 *     </p>
 */
export interface InstanceCountLimits {
    /**
     * <p>
     *       Minimum number of Instances that can be instantiated for given InstanceType.
     *     </p>
     */
    MinimumInstanceCount?: number;
    /**
     * <p>
     *       Maximum number of Instances that can be instantiated for given InstanceType.
     *     </p>
     */
    MaximumInstanceCount?: number;
}
export declare namespace InstanceCountLimits {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceCountLimits) => any;
}
/**
 * <p>InstanceLimits represents the list of instance related attributes that are available for given InstanceType.
 *     </p>
 */
export interface InstanceLimits {
    /**
     * <p>
     *       InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for
     *       given InstanceType.
     *     </p>
     */
    InstanceCountLimits?: InstanceCountLimits;
}
export declare namespace InstanceLimits {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InstanceLimits) => any;
}
/**
 * <p>Limits that are applicable for given storage type.
 *     </p>
 */
export interface StorageTypeLimit {
    /**
     * <p>
     *     Name of storage limits that are applicable for given storage type.
     *     If
     *     <code>
     *       <a>StorageType</a>
     *     </code>
     *     is ebs, following storage options are applicable
     *     <ol>
     *       <li>MinimumVolumeSize</li>
     *       Minimum amount of volume size that is applicable for given storage type.It can be empty if it is not applicable.
     *       <li>MaximumVolumeSize</li>
     *       Maximum amount of volume size that is applicable for given storage type.It can be empty if it is not applicable.
     *       <li>MaximumIops</li>
     *       Maximum amount of Iops that is applicable for given storage type.It can be empty if it is not applicable.
     *       <li>MinimumIops</li>
     *       Minimum amount of Iops that is applicable for given storage type.It can be empty if it is not applicable.
     *     </ol>
     *   </p>
     */
    LimitName?: string;
    /**
     * <p>
     *       Values for the
     *       <code>
     *         <a>StorageTypeLimit$LimitName</a>
     *       </code>
     *       .
     *     </p>
     */
    LimitValues?: string[];
}
export declare namespace StorageTypeLimit {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StorageTypeLimit) => any;
}
/**
 * <p>StorageTypes represents the list of storage related types and their attributes
 *       that are available for given InstanceType.
 *     </p>
 */
export interface StorageType {
    /**
     * <p>
     *   Type of the storage.
     *   List of available storage options:
     *   <ol>
     *     <li>instance</li> Inbuilt storage available for the given Instance
     *     <li>ebs</li> Elastic block storage that would be attached to the given Instance
     *   </ol>
     *     </p>
     */
    StorageTypeName?: string;
    /**
     * <p>
     *       SubType of the given storage type.
     *       List of available sub-storage options:
     *       For "instance" storageType we wont have any storageSubType,
     *       in case of "ebs" storageType we will have following valid storageSubTypes
     *       <ol>
     *         <li>standard</li>
     *         <li>gp2</li>
     *         <li>io1</li>
     *       </ol>
     *       Refer <code><a>VolumeType</a></code> for more information regarding above EBS storage options.
     *     </p>
     */
    StorageSubTypeName?: string;
    /**
     * <p>List of limits that are applicable for given storage type.
     *     </p>
     */
    StorageTypeLimits?: StorageTypeLimit[];
}
export declare namespace StorageType {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StorageType) => any;
}
/**
 * <p>
 *       Limits for given InstanceType and for each of it's role.
 *       <br></br>
 *       Limits contains following
 *       <code>
 *         <a>StorageTypes,</a>
 *       </code>
 *       <code>
 *         <a>InstanceLimits</a>
 *       </code>
 *       and
 *       <code>
 *         <a>AdditionalLimits</a>
 *       </code>
 *     </p>
 */
export interface Limits {
    /**
     * <p>StorageType represents the list of storage related types and attributes
     *       that are available for given InstanceType.
     *     </p>
     */
    StorageTypes?: StorageType[];
    /**
     * <p>InstanceLimits represents the list of instance related attributes that are available for given InstanceType.
     *     </p>
     */
    InstanceLimits?: InstanceLimits;
    /**
     * <p>
     *       List of additional limits that are specific to a given InstanceType and for each of it's
     *       <code>
     *         <a>InstanceRole</a>
     *       </code>
     *       .
     *     </p>
     */
    AdditionalLimits?: AdditionalLimit[];
}
export declare namespace Limits {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Limits) => any;
}
/**
 * <p>
 *       Container for the parameters received from
 *       <code>
 *         <a>DescribeElasticsearchInstanceTypeLimits</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DescribeElasticsearchInstanceTypeLimitsResponse {
    /**
     * <p>
     *       Map of Role of the Instance and Limits that are applicable.
     *       Role performed by given Instance in Elasticsearch
     *       can be one of the following:
     *       <ul>
     *         <li>data: If the given InstanceType is used as data node</li>
     *         <li>master: If the given InstanceType is used as master node</li>
     *         <li>ultra_warm: If the given InstanceType is used as warm node</li>
     *       </ul>
     *     </p>
     */
    LimitsByRole?: {
        [key: string]: Limits;
    };
}
export declare namespace DescribeElasticsearchInstanceTypeLimitsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeElasticsearchInstanceTypeLimitsResponse) => any;
}
/**
 * <p>
 *       A filter used to limit results when describing inbound or outbound cross-cluster search connections.
 *       Multiple values can be specified per filter.
 *       A cross-cluster search connection must match at least one of the specified values for it to be
 *       returned from an operation.
 *     </p>
 */
export interface Filter {
    /**
     * <p>
     *       Specifies the name of the filter.
     *     </p>
     */
    Name?: string;
    /**
     * <p>
     *       Contains one or more values for the filter.
     *     </p>
     */
    Values?: string[];
}
export declare namespace Filter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Filter) => any;
}
/**
 * <p>Container for the parameters to the <code><a>DescribeInboundCrossClusterSearchConnections</a></code> operation.</p>
 */
export interface DescribeInboundCrossClusterSearchConnectionsRequest {
    /**
     * <p>
     *       A list of filters used to match properties for inbound cross-cluster search connection.
     *       Available <code><a>Filter</a></code> names for this operation are:
     *       <ul>
     *         <li>cross-cluster-search-connection-id</li>
     *         <li>source-domain-info.domain-name</li>
     *         <li>source-domain-info.owner-id</li>
     *         <li>source-domain-info.region</li>
     *         <li>destination-domain-info.domain-name</li>
     *       </ul>
     *     </p>
     */
    Filters?: Filter[];
    /**
     * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
     */
    MaxResults?: number;
    /**
     * <p> NextToken is sent in case the earlier API call results contain the NextToken. It is used for pagination.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeInboundCrossClusterSearchConnectionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeInboundCrossClusterSearchConnectionsRequest) => any;
}
/**
 * <p>The result of a <code><a>DescribeInboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria.</p>
 */
export interface DescribeInboundCrossClusterSearchConnectionsResponse {
    /**
     * <p>Consists of list of <code><a>InboundCrossClusterSearchConnection</a></code> matching the specified filter criteria.</p>
     */
    CrossClusterSearchConnections?: InboundCrossClusterSearchConnection[];
    /**
     * <p>If more results are available and NextToken is present, make the next request to the same API with the received NextToken to paginate the remaining results.
     *     </p>
     */
    NextToken?: string;
}
export declare namespace DescribeInboundCrossClusterSearchConnectionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeInboundCrossClusterSearchConnectionsResponse) => any;
}
/**
 * <p>The request processing has failed because of invalid pagination token provided by customer. Returns an HTTP status code of 400. </p>
 */
export interface InvalidPaginationTokenException extends __SmithyException, $MetadataBearer {
    name: "InvalidPaginationTokenException";
    $fault: "client";
    /**
     * <p>A description of the error.</p>
     */
    message?: string;
}
export declare namespace InvalidPaginationTokenException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidPaginationTokenException) => any;
}
/**
 * <p>Container for the parameters to the <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> operation.</p>
 */
export interface DescribeOutboundCrossClusterSearchConnectionsRequest {
    /**
     * <p>
     *       A list of filters used to match properties for outbound cross-cluster search connection.
     *       Available <code><a>Filter</a></code> names for this operation are:
     *       <ul>
     *         <li>cross-cluster-search-connection-id</li>
     *         <li>destination-domain-info.domain-name</li>
     *         <li>destination-domain-info.owner-id</li>
     *         <li>destination-domain-info.region</li>
     *         <li>source-domain-info.domain-name</li>
     *       </ul>
     *     </p>
     */
    Filters?: Filter[];
    /**
     * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
     */
    MaxResults?: number;
    /**
     * <p> NextToken is sent in case the earlier API call results contain the NextToken. It is used for pagination.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeOutboundCrossClusterSearchConnectionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeOutboundCrossClusterSearchConnectionsRequest) => any;
}
/**
 * <p>The result of a <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria.</p>
 */
export interface DescribeOutboundCrossClusterSearchConnectionsResponse {
    /**
     * <p>Consists of list of <code><a>OutboundCrossClusterSearchConnection</a></code> matching the specified filter criteria.</p>
     */
    CrossClusterSearchConnections?: OutboundCrossClusterSearchConnection[];
    /**
     * <p>If more results are available and NextToken is present, make the next request to the same API with the received NextToken to paginate the remaining results.
     *     </p>
     */
    NextToken?: string;
}
export declare namespace DescribeOutboundCrossClusterSearchConnectionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeOutboundCrossClusterSearchConnectionsResponse) => any;
}
export declare enum DescribePackagesFilterName {
    PackageID = "PackageID",
    PackageName = "PackageName",
    PackageStatus = "PackageStatus"
}
/**
 * <p>Filter to apply in <code>DescribePackage</code> response.</p>
 */
export interface DescribePackagesFilter {
    /**
     * <p>Any field from <code>PackageDetails</code>.</p>
     */
    Name?: DescribePackagesFilterName | string;
    /**
     * <p>A list of values for the specified field.</p>
     */
    Value?: string[];
}
export declare namespace DescribePackagesFilter {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribePackagesFilter) => any;
}
/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>DescribePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DescribePackagesRequest {
    /**
     * <p>Only returns packages that match the <code>DescribePackagesFilterList</code> values.</p>
     */
    Filters?: DescribePackagesFilter[];
    /**
     * <p>Limits results to a maximum number of packages.</p>
     */
    MaxResults?: number;
    /**
     * <p>Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.</p>
     */
    NextToken?: string;
}
export declare namespace DescribePackagesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribePackagesRequest) => any;
}
/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>DescribePackages</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DescribePackagesResponse {
    /**
     * <p>List of <code>PackageDetails</code> objects.</p>
     */
    PackageDetailsList?: PackageDetails[];
    NextToken?: string;
}
export declare namespace DescribePackagesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribePackagesResponse) => any;
}
/**
 * <p>Container for parameters to <code>DescribeReservedElasticsearchInstanceOfferings</code></p>
 */
export interface DescribeReservedElasticsearchInstanceOfferingsRequest {
    /**
     * <p>The offering identifier filter value. Use this parameter to show only the available offering that matches the specified reservation identifier.</p>
     */
    ReservedElasticsearchInstanceOfferingId?: string;
    /**
     * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
     */
    MaxResults?: number;
    /**
     * <p>NextToken should be sent in case if earlier API call produced result
     * 		containing NextToken. It is used for pagination.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeReservedElasticsearchInstanceOfferingsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeReservedElasticsearchInstanceOfferingsRequest) => any;
}
export declare type ReservedElasticsearchInstancePaymentOption = "ALL_UPFRONT" | "NO_UPFRONT" | "PARTIAL_UPFRONT";
/**
 * <p>Contains the specific price and frequency of a recurring charges for a reserved Elasticsearch instance, or for a reserved Elasticsearch instance offering.</p>
 */
export interface RecurringCharge {
    /**
     * <p>The monetary amount of the recurring charge.</p>
     */
    RecurringChargeAmount?: number;
    /**
     * <p>The frequency of the recurring charge.</p>
     */
    RecurringChargeFrequency?: string;
}
export declare namespace RecurringCharge {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RecurringCharge) => any;
}
/**
 * <p>Details of a reserved Elasticsearch instance offering.</p>
 */
export interface ReservedElasticsearchInstanceOffering {
    /**
     * <p>The Elasticsearch reserved instance offering identifier.</p>
     */
    ReservedElasticsearchInstanceOfferingId?: string;
    /**
     * <p>The Elasticsearch instance type offered by the reserved instance offering.</p>
     */
    ElasticsearchInstanceType?: ESPartitionInstanceType | string;
    /**
     * <p>The duration, in seconds, for which the offering will reserve the Elasticsearch instance.</p>
     */
    Duration?: number;
    /**
     * <p>The upfront fixed charge you will pay to purchase the specific reserved Elasticsearch instance offering. </p>
     */
    FixedPrice?: number;
    /**
     * <p>The rate you are charged for each hour the domain that is using the offering is running.</p>
     */
    UsagePrice?: number;
    /**
     * <p>The currency code for the reserved Elasticsearch instance offering.</p>
     */
    CurrencyCode?: string;
    /**
     * <p>Payment option for the reserved Elasticsearch instance offering</p>
     */
    PaymentOption?: ReservedElasticsearchInstancePaymentOption | string;
    /**
     * <p>The charge to your account regardless of whether you are creating any domains using the instance offering.</p>
     */
    RecurringCharges?: RecurringCharge[];
}
export declare namespace ReservedElasticsearchInstanceOffering {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ReservedElasticsearchInstanceOffering) => any;
}
/**
 * <p>Container for results from <code>DescribeReservedElasticsearchInstanceOfferings</code></p>
 */
export interface DescribeReservedElasticsearchInstanceOfferingsResponse {
    /**
     * <p>Provides an identifier to allow retrieval of paginated results.</p>
     */
    NextToken?: string;
    /**
     * <p>List of reserved Elasticsearch instance offerings</p>
     */
    ReservedElasticsearchInstanceOfferings?: ReservedElasticsearchInstanceOffering[];
}
export declare namespace DescribeReservedElasticsearchInstanceOfferingsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeReservedElasticsearchInstanceOfferingsResponse) => any;
}
/**
 * <p>Container for parameters to <code>DescribeReservedElasticsearchInstances</code></p>
 */
export interface DescribeReservedElasticsearchInstancesRequest {
    /**
     * <p>The reserved instance identifier filter value. Use this parameter to show only the reservation that matches the specified reserved Elasticsearch instance ID.</p>
     */
    ReservedElasticsearchInstanceId?: string;
    /**
     * <p>Set this value to limit the number of results returned. If not specified, defaults to 100.</p>
     */
    MaxResults?: number;
    /**
     * <p>NextToken should be sent in case if earlier API call produced result
     * 		containing NextToken. It is used for pagination.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeReservedElasticsearchInstancesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeReservedElasticsearchInstancesRequest) => any;
}
/**
 * <p>Details of a reserved Elasticsearch instance.</p>
 */
export interface ReservedElasticsearchInstance {
    /**
     * <p>The customer-specified identifier to track this reservation.</p>
     */
    ReservationName?: string;
    /**
     * <p>The unique identifier for the reservation.</p>
     */
    ReservedElasticsearchInstanceId?: string;
    /**
     * <p>The offering identifier.</p>
     */
    ReservedElasticsearchInstanceOfferingId?: string;
    /**
     * <p>The Elasticsearch instance type offered by the reserved instance offering.</p>
     */
    ElasticsearchInstanceType?: ESPartitionInstanceType | string;
    /**
     * <p>The time the reservation started.</p>
     */
    StartTime?: Date;
    /**
     * <p>The duration, in seconds, for which the Elasticsearch instance is reserved.</p>
     */
    Duration?: number;
    /**
     * <p>The upfront fixed charge you will paid to purchase the specific reserved Elasticsearch instance offering. </p>
     */
    FixedPrice?: number;
    /**
     * <p>The rate you are charged for each hour for the domain that is using this reserved instance.</p>
     */
    UsagePrice?: number;
    /**
     * <p>The currency code for the reserved Elasticsearch instance offering.</p>
     */
    CurrencyCode?: string;
    /**
     * <p>The number of Elasticsearch instances that have been reserved.</p>
     */
    ElasticsearchInstanceCount?: number;
    /**
     * <p>The state of the reserved Elasticsearch instance.</p>
     */
    State?: string;
    /**
     * <p>The payment option as defined in the reserved Elasticsearch instance offering.</p>
     */
    PaymentOption?: ReservedElasticsearchInstancePaymentOption | string;
    /**
     * <p>The charge to your account regardless of whether you are creating any domains using the instance offering.</p>
     */
    RecurringCharges?: RecurringCharge[];
}
export declare namespace ReservedElasticsearchInstance {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ReservedElasticsearchInstance) => any;
}
/**
 * <p>Container for results from <code>DescribeReservedElasticsearchInstances</code></p>
 */
export interface DescribeReservedElasticsearchInstancesResponse {
    /**
     * <p>Provides an identifier to allow retrieval of paginated results.</p>
     */
    NextToken?: string;
    /**
     * <p>List of reserved Elasticsearch instances.</p>
     */
    ReservedElasticsearchInstances?: ReservedElasticsearchInstance[];
}
export declare namespace DescribeReservedElasticsearchInstancesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeReservedElasticsearchInstancesResponse) => any;
}
/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>DissociatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DissociatePackageRequest {
    /**
     * <p>Internal ID of the package that you want to associate with a domain. Use <code>DescribePackages</code> to find this value.</p>
     */
    PackageID: string | undefined;
    /**
     * <p>Name of the domain that you want to associate the package with.</p>
     */
    DomainName: string | undefined;
}
export declare namespace DissociatePackageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DissociatePackageRequest) => any;
}
/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>DissociatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface DissociatePackageResponse {
    /**
     * <p><code>DomainPackageDetails</code></p>
     */
    DomainPackageDetails?: DomainPackageDetails;
}
export declare namespace DissociatePackageResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DissociatePackageResponse) => any;
}
/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>GetCompatibleElasticsearchVersions</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetCompatibleElasticsearchVersionsRequest {
    /**
     * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
     */
    DomainName?: string;
}
export declare namespace GetCompatibleElasticsearchVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetCompatibleElasticsearchVersionsRequest) => any;
}
/**
 * <p>
 *       A map from an
 *       <code>
 *         <a>ElasticsearchVersion</a>
 *       </code>
 *       to a list of compatible
 *       <code>
 *         <a>ElasticsearchVersion</a>
 *       </code>
 *       s to which the domain can be upgraded.
 *     </p>
 */
export interface CompatibleVersionsMap {
    /**
     * <p>The current version of Elasticsearch on which a domain is.</p>
     */
    SourceVersion?: string;
    /**
     * <p>List of supported elastic search versions.
     *     </p>
     */
    TargetVersions?: string[];
}
export declare namespace CompatibleVersionsMap {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CompatibleVersionsMap) => any;
}
/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>GetCompatibleElasticsearchVersions</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetCompatibleElasticsearchVersionsResponse {
    /**
     * <p>
     *       A map of compatible Elasticsearch versions returned as part of the
     *       <code>
     *         <a>GetCompatibleElasticsearchVersions</a>
     *       </code>
     *       operation.
     *     </p>
     */
    CompatibleElasticsearchVersions?: CompatibleVersionsMap[];
}
export declare namespace GetCompatibleElasticsearchVersionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetCompatibleElasticsearchVersionsResponse) => any;
}
/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>GetPackageVersionHistory</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetPackageVersionHistoryRequest {
    /**
     * <p>Returns an audit history of versions of the package.</p>
     */
    PackageID: string | undefined;
    /**
     * <p>Limits results to a maximum number of versions.</p>
     */
    MaxResults?: number;
    /**
     * <p>Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.</p>
     */
    NextToken?: string;
}
export declare namespace GetPackageVersionHistoryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPackageVersionHistoryRequest) => any;
}
/**
 * <p>Details of a package version.</p>
 */
export interface PackageVersionHistory {
    /**
     * <p>Version of the package.</p>
     */
    PackageVersion?: string;
    /**
     * <p>A message associated with the version.</p>
     */
    CommitMessage?: string;
    /**
     * <p>Timestamp which tells creation time of the package version.</p>
     */
    CreatedAt?: Date;
}
export declare namespace PackageVersionHistory {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PackageVersionHistory) => any;
}
/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>GetPackageVersionHistory</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetPackageVersionHistoryResponse {
    PackageID?: string;
    /**
     * <p>List of <code>PackageVersionHistory</code> objects.</p>
     */
    PackageVersionHistoryList?: PackageVersionHistory[];
    NextToken?: string;
}
export declare namespace GetPackageVersionHistoryResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetPackageVersionHistoryResponse) => any;
}
/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>GetUpgradeHistory</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetUpgradeHistoryRequest {
    /**
     * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
     */
    DomainName: string | undefined;
    /**
     * <p>
     *       Set this value to limit the number of results returned.
     *     </p>
     */
    MaxResults?: number;
    /**
     * <p>
     *       Paginated APIs accepts NextToken input to returns next page results and provides
     *       a NextToken output in the response which can be used by the client to retrieve more results.
     *     </p>
     */
    NextToken?: string;
}
export declare namespace GetUpgradeHistoryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetUpgradeHistoryRequest) => any;
}
export declare type UpgradeStep = "PRE_UPGRADE_CHECK" | "SNAPSHOT" | "UPGRADE";
export declare type UpgradeStatus = "FAILED" | "IN_PROGRESS" | "SUCCEEDED" | "SUCCEEDED_WITH_ISSUES";
/**
 * <p>Represents a single step of the Upgrade or Upgrade Eligibility Check workflow.</p>
 */
export interface UpgradeStepItem {
    /**
     * <p>
     *       Represents one of 3 steps that an Upgrade or Upgrade Eligibility Check does through:
     *       <ul>
     *         <li>PreUpgradeCheck</li>
     *         <li>Snapshot</li>
     *         <li>Upgrade</li>
     *       </ul>
     *     </p>
     */
    UpgradeStep?: UpgradeStep | string;
    /**
     * <p>
     *       The status of a particular step during an upgrade. The status can take one of the following values:
     *       <ul>
     *         <li>In Progress</li>
     *         <li>Succeeded</li>
     *         <li>Succeeded with Issues</li>
     *         <li>Failed</li>
     *       </ul>
     *     </p>
     */
    UpgradeStepStatus?: UpgradeStatus | string;
    /**
     * <p>A list of strings containing detailed information about the errors encountered in a particular step.</p>
     */
    Issues?: string[];
    /**
     * <p>The Floating point value representing progress percentage of a particular step.</p>
     */
    ProgressPercent?: number;
}
export declare namespace UpgradeStepItem {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpgradeStepItem) => any;
}
/**
 * <p>History of the last 10 Upgrades and Upgrade Eligibility Checks.</p>
 */
export interface UpgradeHistory {
    /**
     * <p>A string that describes the update briefly</p>
     */
    UpgradeName?: string;
    /**
     * <p>UTC Timestamp at which the Upgrade API call was made in "yyyy-MM-ddTHH:mm:ssZ" format.</p>
     */
    StartTimestamp?: Date;
    /**
     * <p>
     *       The overall status of the update. The status can take one of the following values:
     *       <ul>
     *         <li>In Progress</li>
     *         <li>Succeeded</li>
     *         <li>Succeeded with Issues</li>
     *         <li>Failed</li>
     *       </ul>
     *     </p>
     */
    UpgradeStatus?: UpgradeStatus | string;
    /**
     * <p>
     *       A list of
     *       <code>
     *         <a>UpgradeStepItem</a>
     *       </code>
     *       s representing information about each step performed as pard of a specific Upgrade or Upgrade Eligibility Check.
     *     </p>
     */
    StepsList?: UpgradeStepItem[];
}
export declare namespace UpgradeHistory {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpgradeHistory) => any;
}
/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>GetUpgradeHistory</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetUpgradeHistoryResponse {
    /**
     * <p>
     *       A list of
     *       <code>
     *         <a>UpgradeHistory</a>
     *       </code>
     *       objects corresponding to each Upgrade or Upgrade Eligibility Check performed on a domain returned as part of
     *       <code>
     *         <a>GetUpgradeHistoryResponse</a>
     *       </code>
     *       object.
     *     </p>
     */
    UpgradeHistories?: UpgradeHistory[];
    /**
     * <p>Pagination token that needs to be supplied to the next call to get the next page of results</p>
     */
    NextToken?: string;
}
export declare namespace GetUpgradeHistoryResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetUpgradeHistoryResponse) => any;
}
/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>GetUpgradeStatus</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetUpgradeStatusRequest {
    /**
     * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
     */
    DomainName: string | undefined;
}
export declare namespace GetUpgradeStatusRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetUpgradeStatusRequest) => any;
}
/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>GetUpgradeStatus</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface GetUpgradeStatusResponse {
    /**
     * <p>
     *       Represents one of 3 steps that an Upgrade or Upgrade Eligibility Check does through:
     *       <ul>
     *         <li>PreUpgradeCheck</li>
     *         <li>Snapshot</li>
     *         <li>Upgrade</li>
     *       </ul>
     *     </p>
     */
    UpgradeStep?: UpgradeStep | string;
    /**
     * <p>
     *       One of 4 statuses that a step can go through returned as part of the
     *       <code>
     *         <a>GetUpgradeStatusResponse</a>
     *       </code>
     *       object. The status can take one of the following values:
     *       <ul>
     *         <li>In Progress</li>
     *         <li>Succeeded</li>
     *         <li>Succeeded with Issues</li>
     *         <li>Failed</li>
     *       </ul>
     *     </p>
     */
    StepStatus?: UpgradeStatus | string;
    /**
     * <p>A string that describes the update briefly</p>
     */
    UpgradeName?: string;
}
export declare namespace GetUpgradeStatusResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetUpgradeStatusResponse) => any;
}
export interface DomainInfo {
    /**
     * <p> Specifies the <code>DomainName</code>.</p>
     */
    DomainName?: string;
}
export declare namespace DomainInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DomainInfo) => any;
}
/**
 * <p>The result of a <code>ListDomainNames</code> operation. Contains the names of all Elasticsearch domains owned by this account.</p>
 */
export interface ListDomainNamesResponse {
    /**
     * <p>List of Elasticsearch domain names.</p>
     */
    DomainNames?: DomainInfo[];
}
export declare namespace ListDomainNamesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDomainNamesResponse) => any;
}
/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>ListDomainsForPackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface ListDomainsForPackageRequest {
    /**
     * <p>The package for which to list domains.</p>
     */
    PackageID: string | undefined;
    /**
     * <p>Limits results to a maximum number of domains.</p>
     */
    MaxResults?: number;
    /**
     * <p>Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.</p>
     */
    NextToken?: string;
}
export declare namespace ListDomainsForPackageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDomainsForPackageRequest) => any;
}
/**
 * <p>
 *       Container for response parameters to
 *       <code>
 *         <a>ListDomainsForPackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface ListDomainsForPackageResponse {
    /**
     * <p>List of <code>DomainPackageDetails</code> objects.</p>
     */
    DomainPackageDetailsList?: DomainPackageDetails[];
    NextToken?: string;
}
export declare namespace ListDomainsForPackageResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDomainsForPackageResponse) => any;
}
/**
 * <p>
 *       Container for the parameters to the
 *       <code>
 *         <a>ListElasticsearchInstanceTypes</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface ListElasticsearchInstanceTypesRequest {
    /**
     * <p>Version of Elasticsearch for which list of supported elasticsearch
     *       instance types are needed.
     *     </p>
     */
    ElasticsearchVersion: string | undefined;
    /**
     * <p>DomainName represents the name of the Domain that we are trying to modify. This should be present only if we are
     *       querying for list of available Elasticsearch instance types when modifying existing domain.
     *     </p>
     */
    DomainName?: string;
    /**
     * <p>
     *     Set this value to limit the number of results returned.
     *     Value provided must be greater than 30 else it wont be honored.
     *   </p>
     */
    MaxResults?: number;
    /**
     * <p>NextToken should be sent in case if earlier API call produced result
     *       containing NextToken. It is used for pagination.
     *     </p>
     */
    NextToken?: string;
}
export declare namespace ListElasticsearchInstanceTypesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListElasticsearchInstanceTypesRequest) => any;
}
/**
 * <p>
 *       Container for the parameters returned by
 *       <code>
 *         <a>ListElasticsearchInstanceTypes</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface ListElasticsearchInstanceTypesResponse {
    /**
     * <p>
     *       List of instance types supported by Amazon Elasticsearch service for
     *       given
     *       <code>
     *         <a>ElasticsearchVersion</a>
     *       </code>
     *     </p>
     */
    ElasticsearchInstanceTypes?: (ESPartitionInstanceType | string)[];
    /**
     * <p>In case if there are more results available NextToken would be
     *       present, make further request to the same API with
     *       received NextToken to paginate remaining results.
     *     </p>
     */
    NextToken?: string;
}
export declare namespace ListElasticsearchInstanceTypesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListElasticsearchInstanceTypesResponse) => any;
}
/**
 * <p>
 *       Container for the parameters to the
 *       <code>
 *         <a>ListElasticsearchVersions</a>
 *       </code>
 *       operation.
 *       <p>
 *         Use
 *         <code>
 *           <a>MaxResults</a>
 *         </code>
 *         to control the maximum number of results to retrieve in a single
 *         call.
 *       </p>
 *       <p>
 *         Use
 *         <code>
 *           <a>NextToken</a>
 *         </code>
 *         in response to retrieve more results. If the received response does
 *         not contain a NextToken, then there are no more results to retrieve.
 *       </p>
 *     </p>
 */
export interface ListElasticsearchVersionsRequest {
    /**
     * <p>
     *       Set this value to limit the number of results returned.
     *       Value provided must be greater than 10 else it wont be honored.
     *     </p>
     */
    MaxResults?: number;
    /**
     * <p>
     *       Paginated APIs accepts NextToken input to returns next page results and provides
     *       a NextToken output in the response which can be used by the client to retrieve more results.
     *     </p>
     */
    NextToken?: string;
}
export declare namespace ListElasticsearchVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListElasticsearchVersionsRequest) => any;
}
/**
 * <p>
 *       Container for the parameters for response received from
 *       <code>
 *         <a>ListElasticsearchVersions</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface ListElasticsearchVersionsResponse {
    /**
     * <p>List of supported elastic search versions.
     *     </p>
     */
    ElasticsearchVersions?: string[];
    /**
     * <p>
     *       Paginated APIs accepts NextToken input to returns next page results and provides
     *       a NextToken output in the response which can be used by the client to retrieve more results.
     *     </p>
     */
    NextToken?: string;
}
export declare namespace ListElasticsearchVersionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListElasticsearchVersionsResponse) => any;
}
/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>ListPackagesForDomain</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface ListPackagesForDomainRequest {
    /**
     * <p>The name of the domain for which you want to list associated packages.</p>
     */
    DomainName: string | undefined;
    /**
     * <p>Limits results to a maximum number of packages.</p>
     */
    MaxResults?: number;
    /**
     * <p>Used for pagination. Only necessary if a previous API call includes a non-null NextToken value. If provided, returns results for the next page.</p>
     */
    NextToken?: string;
}
export declare namespace ListPackagesForDomainRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPackagesForDomainRequest) => any;
}
/**
 * <p>
 *       Container for response parameters to
 *       <code>
 *         <a>ListPackagesForDomain</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface ListPackagesForDomainResponse {
    /**
     * <p>List of <code>DomainPackageDetails</code> objects.</p>
     */
    DomainPackageDetailsList?: DomainPackageDetails[];
    /**
     * <p>Pagination token that needs to be supplied to the next call to get the next page of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListPackagesForDomainResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListPackagesForDomainResponse) => any;
}
/**
 * <p>Container for the parameters to the <code><a>ListTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view are attached.</p>
 */
export interface ListTagsRequest {
    /**
     * <p> Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view.</p>
     */
    ARN: string | undefined;
}
export declare namespace ListTagsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsRequest) => any;
}
/**
 * <p>The result of a <code>ListTags</code> operation. Contains tags for all requested Elasticsearch domains.</p>
 */
export interface ListTagsResponse {
    /**
     * <p> List of <code>Tag</code> for the requested Elasticsearch domain.</p>
     */
    TagList?: Tag[];
}
export declare namespace ListTagsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsResponse) => any;
}
/**
 * <p>Container for parameters to <code>PurchaseReservedElasticsearchInstanceOffering</code></p>
 */
export interface PurchaseReservedElasticsearchInstanceOfferingRequest {
    /**
     * <p>The ID of the reserved Elasticsearch instance offering to purchase.</p>
     */
    ReservedElasticsearchInstanceOfferingId: string | undefined;
    /**
     * <p>A customer-specified identifier to track this reservation.</p>
     */
    ReservationName: string | undefined;
    /**
     * <p>The number of Elasticsearch instances to reserve.</p>
     */
    InstanceCount?: number;
}
export declare namespace PurchaseReservedElasticsearchInstanceOfferingRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PurchaseReservedElasticsearchInstanceOfferingRequest) => any;
}
/**
 * <p>Represents the output of a <code>PurchaseReservedElasticsearchInstanceOffering</code> operation.</p>
 */
export interface PurchaseReservedElasticsearchInstanceOfferingResponse {
    /**
     * <p>Details of the reserved Elasticsearch instance which was purchased.</p>
     */
    ReservedElasticsearchInstanceId?: string;
    /**
     * <p>The customer-specified identifier used to track this reservation.</p>
     */
    ReservationName?: string;
}
export declare namespace PurchaseReservedElasticsearchInstanceOfferingResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PurchaseReservedElasticsearchInstanceOfferingResponse) => any;
}
/**
 * <p>Container for the parameters to the <code><a>RejectInboundCrossClusterSearchConnection</a></code> operation.</p>
 */
export interface RejectInboundCrossClusterSearchConnectionRequest {
    /**
     * <p>The id of the inbound connection that you want to reject.</p>
     */
    CrossClusterSearchConnectionId: string | undefined;
}
export declare namespace RejectInboundCrossClusterSearchConnectionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RejectInboundCrossClusterSearchConnectionRequest) => any;
}
/**
 * <p>The result of a <code><a>RejectInboundCrossClusterSearchConnection</a></code> operation. Contains details of rejected inbound connection.</p>
 */
export interface RejectInboundCrossClusterSearchConnectionResponse {
    /**
     * <p>Specifies the <code><a>InboundCrossClusterSearchConnection</a></code> of rejected inbound connection. </p>
     */
    CrossClusterSearchConnection?: InboundCrossClusterSearchConnection;
}
export declare namespace RejectInboundCrossClusterSearchConnectionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RejectInboundCrossClusterSearchConnectionResponse) => any;
}
/**
 * <p>Container for the parameters to the <code><a>RemoveTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain from which you want to remove the specified <code>TagKey</code>.</p>
 */
export interface RemoveTagsRequest {
    /**
     * <p>Specifies the <code>ARN</code> for the Elasticsearch domain from which you want to delete the specified tags.</p>
     */
    ARN: string | undefined;
    /**
     * <p>Specifies the <code>TagKey</code> list which you want to remove from the Elasticsearch domain.</p>
     */
    TagKeys: string[] | undefined;
}
export declare namespace RemoveTagsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RemoveTagsRequest) => any;
}
/**
 * <p>Container for the parameters to the <code><a>StartElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to schedule a service software update on.</p>
 */
export interface StartElasticsearchServiceSoftwareUpdateRequest {
    /**
     * <p>The name of the domain that you want to update to the latest service software.</p>
     */
    DomainName: string | undefined;
}
export declare namespace StartElasticsearchServiceSoftwareUpdateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartElasticsearchServiceSoftwareUpdateRequest) => any;
}
/**
 * <p>The result of a <code>StartElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update.</p>
 */
export interface StartElasticsearchServiceSoftwareUpdateResponse {
    /**
     * <p>The current status of the Elasticsearch service software update.</p>
     */
    ServiceSoftwareOptions?: ServiceSoftwareOptions;
}
export declare namespace StartElasticsearchServiceSoftwareUpdateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartElasticsearchServiceSoftwareUpdateResponse) => any;
}
/**
 * <p>Container for the parameters to the <code><a>UpdateElasticsearchDomain</a></code> operation. Specifies the type and number of instances in the domain cluster.</p>
 */
export interface UpdateElasticsearchDomainConfigRequest {
    /**
     * <p>The name of the Elasticsearch domain that you are updating. </p>
     */
    DomainName: string | undefined;
    /**
     * <p>The type and number of instances to instantiate for the domain cluster.</p>
     */
    ElasticsearchClusterConfig?: ElasticsearchClusterConfig;
    /**
     * <p>Specify the type and size of the EBS volume that you want to use. </p>
     */
    EBSOptions?: EBSOptions;
    /**
     * <p>Option to set the time, in UTC format, for the daily automated snapshot. Default value is <code>0</code> hours. </p>
     */
    SnapshotOptions?: SnapshotOptions;
    /**
     * <p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-creating-vpc" target="_blank">Creating a VPC</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i></p>
     */
    VPCOptions?: VPCOptions;
    /**
     * <p>Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
     */
    CognitoOptions?: CognitoOptions;
    /**
     * <p>Modifies the advanced option to allow references to indices in an HTTP request body.  Must be <code>false</code> when configuring access to individual sub-resources.  By default, the value is <code>true</code>.
     *        See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</p>
     */
    AdvancedOptions?: {
        [key: string]: string;
    };
    /**
     * <p>IAM access policy as a JSON-formatted string.</p>
     */
    AccessPolicies?: string;
    /**
     * <p>Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log.</p>
     */
    LogPublishingOptions?: {
        [key: string]: LogPublishingOption;
    };
    /**
     * <p>Options to specify configuration that will be applied to the domain endpoint.</p>
     */
    DomainEndpointOptions?: DomainEndpointOptions;
    /**
     * <p>Specifies advanced security options.</p>
     */
    AdvancedSecurityOptions?: AdvancedSecurityOptionsInput;
    /**
     * <p>Specifies the NodeToNodeEncryptionOptions.</p>
     */
    NodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptions;
    /**
     * <p>Specifies the Encryption At Rest Options.</p>
     */
    EncryptionAtRestOptions?: EncryptionAtRestOptions;
    /**
     * <p>Specifies Auto-Tune options.</p>
     */
    AutoTuneOptions?: AutoTuneOptions;
}
export declare namespace UpdateElasticsearchDomainConfigRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateElasticsearchDomainConfigRequest) => any;
}
/**
 * <p>The result of an <code>UpdateElasticsearchDomain</code> request. Contains the status of the Elasticsearch domain being updated.</p>
 */
export interface UpdateElasticsearchDomainConfigResponse {
    /**
     * <p>The status of the updated Elasticsearch domain. </p>
     */
    DomainConfig: ElasticsearchDomainConfig | undefined;
}
export declare namespace UpdateElasticsearchDomainConfigResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateElasticsearchDomainConfigResponse) => any;
}
/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>UpdatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface UpdatePackageRequest {
    /**
     * <p>Unique identifier for the package.</p>
     */
    PackageID: string | undefined;
    /**
     * <p>The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code></p>
     */
    PackageSource: PackageSource | undefined;
    /**
     * <p>New description of the package.</p>
     */
    PackageDescription?: string;
    /**
     * <p>An info message for the new version which will be shown as part of <code>GetPackageVersionHistoryResponse</code>.</p>
     */
    CommitMessage?: string;
}
export declare namespace UpdatePackageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePackageRequest) => any;
}
/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>UpdatePackage</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface UpdatePackageResponse {
    /**
     * <p>Information about the package <code>PackageDetails</code>.</p>
     */
    PackageDetails?: PackageDetails;
}
export declare namespace UpdatePackageResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdatePackageResponse) => any;
}
/**
 * <p>
 *       Container for request parameters to
 *       <code>
 *         <a>UpgradeElasticsearchDomain</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface UpgradeElasticsearchDomainRequest {
    /**
     * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
     */
    DomainName: string | undefined;
    /**
     * <p>The version of Elasticsearch that you intend to upgrade the domain to.</p>
     */
    TargetVersion: string | undefined;
    /**
     * <p>
     *       This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed.
     *       This will not actually perform the Upgrade.
     *     </p>
     */
    PerformCheckOnly?: boolean;
}
export declare namespace UpgradeElasticsearchDomainRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpgradeElasticsearchDomainRequest) => any;
}
/**
 * <p>
 *       Container for response returned by
 *       <code>
 *         <a>UpgradeElasticsearchDomain</a>
 *       </code>
 *       operation.
 *     </p>
 */
export interface UpgradeElasticsearchDomainResponse {
    /**
     * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
     */
    DomainName?: string;
    /**
     * <p>The version of Elasticsearch that you intend to upgrade the domain to.</p>
     */
    TargetVersion?: string;
    /**
     * <p>
     *       This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed.
     *       This will not actually perform the Upgrade.
     *     </p>
     */
    PerformCheckOnly?: boolean;
}
export declare namespace UpgradeElasticsearchDomainResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpgradeElasticsearchDomainResponse) => any;
}
