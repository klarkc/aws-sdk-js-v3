import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>The user is not authorized to access a resource.</p>
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
export declare enum AccessPropertyValue {
    ALLOW = "ALLOW",
    DENY = "DENY"
}
export declare enum DedicatedTenancySupportResultEnum {
    DISABLED = "DISABLED",
    ENABLED = "ENABLED"
}
export declare enum DedicatedTenancyModificationStateEnum {
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    PENDING = "PENDING"
}
/**
 * <p>Describes a modification to the configuration of Bring Your Own License (BYOL) for the
 *          specified account. </p>
 */
export interface AccountModification {
    /**
     * <p>The state of the modification to the configuration of BYOL.</p>
     */
    ModificationState?: DedicatedTenancyModificationStateEnum | string;
    /**
     * <p>The status of BYOL (whether BYOL is being enabled or disabled).</p>
     */
    DedicatedTenancySupport?: DedicatedTenancySupportResultEnum | string;
    /**
     * <p>The IP address range, specified as an IPv4 CIDR block, for the management network
     *          interface used for the account.</p>
     */
    DedicatedTenancyManagementCidrRange?: string;
    /**
     * <p>The timestamp when the modification of the BYOL configuration was started.</p>
     */
    StartTime?: Date;
    /**
     * <p>The error code that is returned if the configuration of BYOL cannot be modified.</p>
     */
    ErrorCode?: string;
    /**
     * <p>The text of the error message that is returned if the configuration of BYOL cannot be
     *          modified.</p>
     */
    ErrorMessage?: string;
}
export declare namespace AccountModification {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccountModification) => any;
}
export declare enum Application {
    Microsoft_Office_2016 = "Microsoft_Office_2016",
    Microsoft_Office_2019 = "Microsoft_Office_2019"
}
export interface AssociateConnectionAliasRequest {
    /**
     * <p>The identifier of the connection alias.</p>
     */
    AliasId: string | undefined;
    /**
     * <p>The identifier of the directory to associate the connection alias with.</p>
     */
    ResourceId: string | undefined;
}
export declare namespace AssociateConnectionAliasRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateConnectionAliasRequest) => any;
}
export interface AssociateConnectionAliasResult {
    /**
     * <p>The identifier of the connection alias association. You use the connection identifier in the DNS TXT record when
     *          you're configuring your DNS routing policies. </p>
     */
    ConnectionIdentifier?: string;
}
export declare namespace AssociateConnectionAliasResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateConnectionAliasResult) => any;
}
/**
 * <p>One or more parameter values are not valid.</p>
 */
export interface InvalidParameterValuesException extends __SmithyException, $MetadataBearer {
    name: "InvalidParameterValuesException";
    $fault: "client";
    /**
     * <p>The exception error message.</p>
     */
    message?: string;
}
export declare namespace InvalidParameterValuesException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidParameterValuesException) => any;
}
/**
 * <p>The state of the resource is not valid for this operation.</p>
 */
export interface InvalidResourceStateException extends __SmithyException, $MetadataBearer {
    name: "InvalidResourceStateException";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidResourceStateException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidResourceStateException) => any;
}
/**
 * <p>This operation is not supported.</p>
 */
export interface OperationNotSupportedException extends __SmithyException, $MetadataBearer {
    name: "OperationNotSupportedException";
    $fault: "client";
    message?: string;
}
export declare namespace OperationNotSupportedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OperationNotSupportedException) => any;
}
/**
 * <p>The resource is associated with a directory.</p>
 */
export interface ResourceAssociatedException extends __SmithyException, $MetadataBearer {
    name: "ResourceAssociatedException";
    $fault: "client";
    message?: string;
}
export declare namespace ResourceAssociatedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceAssociatedException) => any;
}
/**
 * <p>The resource could not be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    /**
     * <p>The resource could not be found.</p>
     */
    message?: string;
    /**
     * <p>The ID of the resource that could not be found.</p>
     */
    ResourceId?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
export interface AssociateIpGroupsRequest {
    /**
     * <p>The identifier of the directory.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The identifiers of one or more IP access control groups.</p>
     */
    GroupIds: string[] | undefined;
}
export declare namespace AssociateIpGroupsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateIpGroupsRequest) => any;
}
export interface AssociateIpGroupsResult {
}
export declare namespace AssociateIpGroupsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateIpGroupsResult) => any;
}
/**
 * <p>Your resource limits have been exceeded.</p>
 */
export interface ResourceLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "ResourceLimitExceededException";
    $fault: "client";
    /**
     * <p>The exception error message.</p>
     */
    message?: string;
}
export declare namespace ResourceLimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceLimitExceededException) => any;
}
export declare enum AssociationStatus {
    ASSOCIATED_WITH_OWNER_ACCOUNT = "ASSOCIATED_WITH_OWNER_ACCOUNT",
    ASSOCIATED_WITH_SHARED_ACCOUNT = "ASSOCIATED_WITH_SHARED_ACCOUNT",
    NOT_ASSOCIATED = "NOT_ASSOCIATED",
    PENDING_ASSOCIATION = "PENDING_ASSOCIATION",
    PENDING_DISASSOCIATION = "PENDING_DISASSOCIATION"
}
/**
 * <p>Describes a rule for an IP access control group.</p>
 */
export interface IpRuleItem {
    /**
     * <p>The IP address range, in CIDR notation.</p>
     */
    ipRule?: string;
    /**
     * <p>The description.</p>
     */
    ruleDesc?: string;
}
export declare namespace IpRuleItem {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: IpRuleItem) => any;
}
export interface AuthorizeIpRulesRequest {
    /**
     * <p>The identifier of the group.</p>
     */
    GroupId: string | undefined;
    /**
     * <p>The rules to add to the group.</p>
     */
    UserRules: IpRuleItem[] | undefined;
}
export declare namespace AuthorizeIpRulesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AuthorizeIpRulesRequest) => any;
}
export interface AuthorizeIpRulesResult {
}
export declare namespace AuthorizeIpRulesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AuthorizeIpRulesResult) => any;
}
export declare enum Compute {
    GRAPHICS = "GRAPHICS",
    GRAPHICSPRO = "GRAPHICSPRO",
    PERFORMANCE = "PERFORMANCE",
    POWER = "POWER",
    POWERPRO = "POWERPRO",
    STANDARD = "STANDARD",
    VALUE = "VALUE"
}
/**
 * <p>Describes the compute type of the bundle.</p>
 */
export interface ComputeType {
    /**
     * <p>The compute type.</p>
     */
    Name?: Compute | string;
}
export declare namespace ComputeType {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ComputeType) => any;
}
/**
 * <p>Describes the root volume for a WorkSpace bundle.</p>
 */
export interface RootStorage {
    /**
     * <p>The size of the root volume.</p>
     */
    Capacity?: string;
}
export declare namespace RootStorage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RootStorage) => any;
}
/**
 * <p>Describes the user volume for a WorkSpace bundle.</p>
 */
export interface UserStorage {
    /**
     * <p>The size of the user volume.</p>
     */
    Capacity?: string;
}
export declare namespace UserStorage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UserStorage) => any;
}
/**
 * <p>Describes a WorkSpace bundle.</p>
 */
export interface WorkspaceBundle {
    /**
     * <p>The identifier of the bundle.</p>
     */
    BundleId?: string;
    /**
     * <p>The name of the bundle.</p>
     */
    Name?: string;
    /**
     * <p>The owner of the bundle. This is the account identifier of the owner, or
     *          <code>AMAZON</code> if the bundle is provided by AWS.</p>
     */
    Owner?: string;
    /**
     * <p>The description of the bundle.</p>
     */
    Description?: string;
    /**
     * <p>The identifier of the image that was used to create the bundle.</p>
     */
    ImageId?: string;
    /**
     * <p>The size of the root volume.</p>
     */
    RootStorage?: RootStorage;
    /**
     * <p>The size of the user volume.</p>
     */
    UserStorage?: UserStorage;
    /**
     * <p>The compute type of the bundle. For more information, see
     *          <a href="http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles">Amazon WorkSpaces Bundles</a>.</p>
     */
    ComputeType?: ComputeType;
    /**
     * <p>The last time that the bundle was updated.</p>
     */
    LastUpdatedTime?: Date;
    /**
     * <p>The time when the bundle was created.</p>
     */
    CreationTime?: Date;
}
export declare namespace WorkspaceBundle {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WorkspaceBundle) => any;
}
export declare enum ReconnectEnum {
    DISABLED = "DISABLED",
    ENABLED = "ENABLED"
}
/**
 * <p>Describes an Amazon WorkSpaces client.</p>
 */
export interface ClientProperties {
    /**
     * <p>Specifies whether users can cache their credentials on the Amazon WorkSpaces client.
     *          When enabled, users can choose to reconnect to their WorkSpaces without re-entering their
     *          credentials. </p>
     */
    ReconnectEnabled?: ReconnectEnum | string;
}
export declare namespace ClientProperties {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClientProperties) => any;
}
/**
 * <p>Information about the Amazon WorkSpaces client.</p>
 */
export interface ClientPropertiesResult {
    /**
     * <p>The resource identifier, in the form of a directory ID.</p>
     */
    ResourceId?: string;
    /**
     * <p>Information about the Amazon WorkSpaces client.</p>
     */
    ClientProperties?: ClientProperties;
}
export declare namespace ClientPropertiesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ClientPropertiesResult) => any;
}
/**
 * <p>Describes a connection alias association that is used for cross-Region redirection. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
 *          Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
 */
export interface ConnectionAliasAssociation {
    /**
     * <p>The association status of the connection alias.</p>
     */
    AssociationStatus?: AssociationStatus | string;
    /**
     * <p>The identifier of the AWS account that associated the connection alias with a directory.</p>
     */
    AssociatedAccountId?: string;
    /**
     * <p>The identifier of the directory associated with a connection alias.</p>
     */
    ResourceId?: string;
    /**
     * <p>The identifier of the connection alias association. You use the connection identifier in the DNS TXT record when
     *          you're configuring your DNS routing policies.</p>
     */
    ConnectionIdentifier?: string;
}
export declare namespace ConnectionAliasAssociation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConnectionAliasAssociation) => any;
}
export declare enum ConnectionAliasState {
    CREATED = "CREATED",
    CREATING = "CREATING",
    DELETING = "DELETING"
}
/**
 * <p>Describes a connection alias. Connection aliases are used for cross-Region redirection. For more information,
 *          see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
 *          Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
 */
export interface ConnectionAlias {
    /**
     * <p>The connection string specified for the connection alias. The connection string must be in the form of
     *          a fully qualified domain name (FQDN), such as <code>www.example.com</code>.</p>
     */
    ConnectionString?: string;
    /**
     * <p>The identifier of the connection alias.</p>
     */
    AliasId?: string;
    /**
     * <p>The current state of the connection alias.</p>
     */
    State?: ConnectionAliasState | string;
    /**
     * <p>The identifier of the AWS account that owns the connection alias.</p>
     */
    OwnerAccountId?: string;
    /**
     * <p>The association status of the connection alias.</p>
     */
    Associations?: ConnectionAliasAssociation[];
}
export declare namespace ConnectionAlias {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConnectionAlias) => any;
}
/**
 * <p>Describes the permissions for a connection alias. Connection aliases are used for cross-Region redirection.
 *          For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
 *          Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
 */
export interface ConnectionAliasPermission {
    /**
     * <p>The identifier of the AWS account that the connection alias is shared with.</p>
     */
    SharedAccountId: string | undefined;
    /**
     * <p>Indicates whether the specified AWS account is allowed to associate the connection alias with a directory.</p>
     */
    AllowAssociation: boolean | undefined;
}
export declare namespace ConnectionAliasPermission {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConnectionAliasPermission) => any;
}
export declare enum ConnectionState {
    CONNECTED = "CONNECTED",
    DISCONNECTED = "DISCONNECTED",
    UNKNOWN = "UNKNOWN"
}
/**
 * <p>Describes a tag.</p>
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
export interface CopyWorkspaceImageRequest {
    /**
     * <p>The name of the image.</p>
     */
    Name: string | undefined;
    /**
     * <p>A description of the image.</p>
     */
    Description?: string;
    /**
     * <p>The identifier of the source image.</p>
     */
    SourceImageId: string | undefined;
    /**
     * <p>The identifier of the source Region.</p>
     */
    SourceRegion: string | undefined;
    /**
     * <p>The tags for the image.</p>
     */
    Tags?: Tag[];
}
export declare namespace CopyWorkspaceImageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CopyWorkspaceImageRequest) => any;
}
export interface CopyWorkspaceImageResult {
    /**
     * <p>The identifier of the image.</p>
     */
    ImageId?: string;
}
export declare namespace CopyWorkspaceImageResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CopyWorkspaceImageResult) => any;
}
/**
 * <p>The specified resource already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
    name: "ResourceAlreadyExistsException";
    $fault: "client";
    message?: string;
}
export declare namespace ResourceAlreadyExistsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceAlreadyExistsException) => any;
}
/**
 * <p>The specified resource is not available.</p>
 */
export interface ResourceUnavailableException extends __SmithyException, $MetadataBearer {
    name: "ResourceUnavailableException";
    $fault: "client";
    /**
     * <p>The exception error message.</p>
     */
    message?: string;
    /**
     * <p>The identifier of the resource that is not available.</p>
     */
    ResourceId?: string;
}
export declare namespace ResourceUnavailableException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceUnavailableException) => any;
}
export interface CreateConnectionAliasRequest {
    /**
     * <p>A connection string in the form of a fully qualified domain name (FQDN), such as <code>www.example.com</code>.</p>
     *
     *          <important>
     *             <p>After you create a connection string, it is always associated to your AWS account. You cannot recreate the same
     *             connection string with a different account, even if you delete all instances of it from the original account. The
     *          connection string is globally reserved for your account.</p>
     *          </important>
     */
    ConnectionString: string | undefined;
    /**
     * <p>The tags to associate with the connection alias.</p>
     */
    Tags?: Tag[];
}
export declare namespace CreateConnectionAliasRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateConnectionAliasRequest) => any;
}
export interface CreateConnectionAliasResult {
    /**
     * <p>The identifier of the connection alias.</p>
     */
    AliasId?: string;
}
export declare namespace CreateConnectionAliasResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateConnectionAliasResult) => any;
}
export interface CreateIpGroupRequest {
    /**
     * <p>The name of the group.</p>
     */
    GroupName: string | undefined;
    /**
     * <p>The description of the group.</p>
     */
    GroupDesc?: string;
    /**
     * <p>The rules to add to the group.</p>
     */
    UserRules?: IpRuleItem[];
    /**
     * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags.</p>
     */
    Tags?: Tag[];
}
export declare namespace CreateIpGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateIpGroupRequest) => any;
}
export interface CreateIpGroupResult {
    /**
     * <p>The identifier of the group.</p>
     */
    GroupId?: string;
}
export declare namespace CreateIpGroupResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateIpGroupResult) => any;
}
/**
 * <p>The resource could not be created.</p>
 */
export interface ResourceCreationFailedException extends __SmithyException, $MetadataBearer {
    name: "ResourceCreationFailedException";
    $fault: "client";
    message?: string;
}
export declare namespace ResourceCreationFailedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceCreationFailedException) => any;
}
export interface CreateTagsRequest {
    /**
     * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
     *          registered directories, images, custom bundles, IP access control groups, and connection aliases.</p>
     */
    ResourceId: string | undefined;
    /**
     * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags.</p>
     */
    Tags: Tag[] | undefined;
}
export declare namespace CreateTagsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateTagsRequest) => any;
}
export interface CreateTagsResult {
}
export declare namespace CreateTagsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateTagsResult) => any;
}
export interface CreateWorkspaceBundleRequest {
    /**
     * <p>The name of the bundle.</p>
     */
    BundleName: string | undefined;
    /**
     * <p>The description of the bundle.</p>
     */
    BundleDescription: string | undefined;
    /**
     * <p>The identifier of the image that is used to create the bundle.</p>
     */
    ImageId: string | undefined;
    /**
     * <p>Describes the compute type of the bundle.</p>
     */
    ComputeType: ComputeType | undefined;
    /**
     * <p>Describes the user volume for a WorkSpace bundle.</p>
     */
    UserStorage: UserStorage | undefined;
    /**
     * <p>Describes the root volume for a WorkSpace bundle.</p>
     */
    RootStorage?: RootStorage;
    /**
     * <p>The tags associated with the bundle.</p>
     *
     *          <note>
     *             <p>To add tags at the same time when you're creating the bundle, you must create an IAM policy that
     *             grants your IAM user permissions to use <code>workspaces:CreateTags</code>. </p>
     *          </note>
     */
    Tags?: Tag[];
}
export declare namespace CreateWorkspaceBundleRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateWorkspaceBundleRequest) => any;
}
export interface CreateWorkspaceBundleResult {
    /**
     * <p>Describes a WorkSpace bundle.</p>
     */
    WorkspaceBundle?: WorkspaceBundle;
}
export declare namespace CreateWorkspaceBundleResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateWorkspaceBundleResult) => any;
}
export declare enum RunningMode {
    ALWAYS_ON = "ALWAYS_ON",
    AUTO_STOP = "AUTO_STOP"
}
/**
 * <p>Describes a WorkSpace.</p>
 */
export interface WorkspaceProperties {
    /**
     * <p>The running mode. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/running-mode.html">Manage the WorkSpace Running
     *             Mode</a>.</p>
     */
    RunningMode?: RunningMode | string;
    /**
     * <p>The time after a user logs off when WorkSpaces are automatically stopped. Configured in 60-minute intervals.</p>
     */
    RunningModeAutoStopTimeoutInMinutes?: number;
    /**
     * <p>The size of the root volume. For important information about how to modify the size of the root and user volumes, see
     *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html">Modify a WorkSpace</a>.</p>
     */
    RootVolumeSizeGib?: number;
    /**
     * <p>The size of the user storage. For important information about how to modify the size of the root and user volumes, see
     *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html">Modify a WorkSpace</a>.</p>
     */
    UserVolumeSizeGib?: number;
    /**
     * <p>The compute type. For more information, see <a href="http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles">Amazon WorkSpaces
     *          Bundles</a>.</p>
     */
    ComputeTypeName?: Compute | string;
}
export declare namespace WorkspaceProperties {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WorkspaceProperties) => any;
}
/**
 * <p>Describes the information used to create a WorkSpace.</p>
 */
export interface WorkspaceRequest {
    /**
     * <p>The identifier of the AWS Directory Service directory for the WorkSpace. You can use
     *             <a>DescribeWorkspaceDirectories</a> to list the available directories.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The user name of the user for the WorkSpace. This user name must exist in the AWS
     *          Directory Service directory for the WorkSpace.</p>
     */
    UserName: string | undefined;
    /**
     * <p>The identifier of the bundle for the WorkSpace. You can use <a>DescribeWorkspaceBundles</a> to list the available bundles.</p>
     */
    BundleId: string | undefined;
    /**
     * <p>The symmetric AWS KMS customer master key (CMK) used to encrypt data stored on your WorkSpace.
     *          Amazon WorkSpaces does not support asymmetric CMKs.</p>
     */
    VolumeEncryptionKey?: string;
    /**
     * <p>Indicates whether the data stored on the user volume is encrypted.</p>
     */
    UserVolumeEncryptionEnabled?: boolean;
    /**
     * <p>Indicates whether the data stored on the root volume is encrypted.</p>
     */
    RootVolumeEncryptionEnabled?: boolean;
    /**
     * <p>The WorkSpace properties.</p>
     */
    WorkspaceProperties?: WorkspaceProperties;
    /**
     * <p>The tags for the WorkSpace.</p>
     */
    Tags?: Tag[];
}
export declare namespace WorkspaceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WorkspaceRequest) => any;
}
export interface CreateWorkspacesRequest {
    /**
     * <p>The WorkSpaces to create. You can specify up to 25 WorkSpaces.</p>
     */
    Workspaces: WorkspaceRequest[] | undefined;
}
export declare namespace CreateWorkspacesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateWorkspacesRequest) => any;
}
/**
 * <p>Describes a WorkSpace that cannot be created.</p>
 */
export interface FailedCreateWorkspaceRequest {
    /**
     * <p>Information about the WorkSpace.</p>
     */
    WorkspaceRequest?: WorkspaceRequest;
    /**
     * <p>The error code that is returned if the WorkSpace cannot be created.</p>
     */
    ErrorCode?: string;
    /**
     * <p>The text of the error message that is returned if the WorkSpace cannot be
     *          created.</p>
     */
    ErrorMessage?: string;
}
export declare namespace FailedCreateWorkspaceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FailedCreateWorkspaceRequest) => any;
}
export declare enum ModificationResourceEnum {
    COMPUTE_TYPE = "COMPUTE_TYPE",
    ROOT_VOLUME = "ROOT_VOLUME",
    USER_VOLUME = "USER_VOLUME"
}
export declare enum ModificationStateEnum {
    UPDATE_INITIATED = "UPDATE_INITIATED",
    UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS"
}
/**
 * <p>Describes a WorkSpace modification.</p>
 */
export interface ModificationState {
    /**
     * <p>The resource.</p>
     */
    Resource?: ModificationResourceEnum | string;
    /**
     * <p>The modification state.</p>
     */
    State?: ModificationStateEnum | string;
}
export declare namespace ModificationState {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModificationState) => any;
}
export declare enum WorkspaceState {
    ADMIN_MAINTENANCE = "ADMIN_MAINTENANCE",
    AVAILABLE = "AVAILABLE",
    ERROR = "ERROR",
    IMPAIRED = "IMPAIRED",
    MAINTENANCE = "MAINTENANCE",
    PENDING = "PENDING",
    REBOOTING = "REBOOTING",
    REBUILDING = "REBUILDING",
    RESTORING = "RESTORING",
    STARTING = "STARTING",
    STOPPED = "STOPPED",
    STOPPING = "STOPPING",
    SUSPENDED = "SUSPENDED",
    TERMINATED = "TERMINATED",
    TERMINATING = "TERMINATING",
    UNHEALTHY = "UNHEALTHY",
    UPDATING = "UPDATING"
}
/**
 * <p>Describes a WorkSpace.</p>
 */
export interface Workspace {
    /**
     * <p>The identifier of the WorkSpace.</p>
     */
    WorkspaceId?: string;
    /**
     * <p>The identifier of the AWS Directory Service directory for the WorkSpace.</p>
     */
    DirectoryId?: string;
    /**
     * <p>The user for the WorkSpace.</p>
     */
    UserName?: string;
    /**
     * <p>The IP address of the WorkSpace.</p>
     */
    IpAddress?: string;
    /**
     * <p>The operational state of the WorkSpace.</p>
     *
     *          <note>
     *             <p>After a WorkSpace is terminated, the <code>TERMINATED</code> state is returned
     *             only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely
     *             returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using
     *             <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html">
     *                DescribeWorkSpaces</a>. If the WorkSpace ID isn't returned, then the WorkSpace has
     *             been successfully terminated.</p>
     *          </note>
     */
    State?: WorkspaceState | string;
    /**
     * <p>The identifier of the bundle used to create the WorkSpace.</p>
     */
    BundleId?: string;
    /**
     * <p>The identifier of the subnet for the WorkSpace.</p>
     */
    SubnetId?: string;
    /**
     * <p>The text of the error message that is returned if the WorkSpace cannot be
     *          created.</p>
     */
    ErrorMessage?: string;
    /**
     * <p>The error code that is returned if the WorkSpace cannot be created.</p>
     */
    ErrorCode?: string;
    /**
     * <p>The name of the WorkSpace, as seen by the operating system. The format of this name varies.
     *          For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/launch-workspaces-tutorials.html">
     *             Launch a WorkSpace</a>. </p>
     */
    ComputerName?: string;
    /**
     * <p>The symmetric AWS KMS customer master key (CMK) used to encrypt data stored on your WorkSpace.
     *          Amazon WorkSpaces does not support asymmetric CMKs.</p>
     */
    VolumeEncryptionKey?: string;
    /**
     * <p>Indicates whether the data stored on the user volume is encrypted.</p>
     */
    UserVolumeEncryptionEnabled?: boolean;
    /**
     * <p>Indicates whether the data stored on the root volume is encrypted.</p>
     */
    RootVolumeEncryptionEnabled?: boolean;
    /**
     * <p>The properties of the WorkSpace.</p>
     */
    WorkspaceProperties?: WorkspaceProperties;
    /**
     * <p>The modification states of the WorkSpace.</p>
     */
    ModificationStates?: ModificationState[];
}
export declare namespace Workspace {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Workspace) => any;
}
export interface CreateWorkspacesResult {
    /**
     * <p>Information about the WorkSpaces that could not be created.</p>
     */
    FailedRequests?: FailedCreateWorkspaceRequest[];
    /**
     * <p>Information about the WorkSpaces that were created.</p>
     *          <p>Because this operation is asynchronous, the identifier returned is not immediately
     *          available for use with other operations. For example, if you call <a>DescribeWorkspaces</a> before the WorkSpace is created, the information returned
     *          can be incomplete.</p>
     */
    PendingRequests?: Workspace[];
}
export declare namespace CreateWorkspacesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateWorkspacesResult) => any;
}
export declare enum DedicatedTenancySupportEnum {
    ENABLED = "ENABLED"
}
/**
 * <p>Describes the default values that are used to create WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>.</p>
 */
export interface DefaultWorkspaceCreationProperties {
    /**
     * <p>Specifies whether the directory is enabled for Amazon WorkDocs.</p>
     */
    EnableWorkDocs?: boolean;
    /**
     * <p>Specifies whether to automatically assign an Elastic public IP address to WorkSpaces in this directory by default.
     *          If enabled, the Elastic public IP address allows outbound internet access from your WorkSpaces when you’re using an
     *          internet gateway in the Amazon VPC in which your WorkSpaces are located. If you're using a Network Address
     *          Translation (NAT) gateway for outbound internet access from your VPC, or if your WorkSpaces are in public
     *          subnets and you manually assign them Elastic IP addresses, you should disable this setting. This setting
     *          applies to new WorkSpaces that you launch or to existing WorkSpaces that you rebuild. For more information,
     *          see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-vpc.html">
     *             Configure a VPC for Amazon WorkSpaces</a>.</p>
     */
    EnableInternetAccess?: boolean;
    /**
     * <p>The organizational unit (OU) in the directory for the WorkSpace machine accounts.</p>
     */
    DefaultOu?: string;
    /**
     * <p>The identifier of the default security group to apply to WorkSpaces when they are created.
     *          For more information, see
     *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-security-groups.html">
     *             Security Groups for Your WorkSpaces</a>.</p>
     */
    CustomSecurityGroupId?: string;
    /**
     * <p>Specifies whether WorkSpace users are local administrators on their WorkSpaces.</p>
     */
    UserEnabledAsLocalAdministrator?: boolean;
    /**
     * <p>Specifies whether maintenance mode is enabled for WorkSpaces. For more information, see
     *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspace-maintenance.html">WorkSpace
     *             Maintenance</a>.</p>
     */
    EnableMaintenanceMode?: boolean;
}
export declare namespace DefaultWorkspaceCreationProperties {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DefaultWorkspaceCreationProperties) => any;
}
export interface DeleteConnectionAliasRequest {
    /**
     * <p>The identifier of the connection alias to delete.</p>
     */
    AliasId: string | undefined;
}
export declare namespace DeleteConnectionAliasRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteConnectionAliasRequest) => any;
}
export interface DeleteConnectionAliasResult {
}
export declare namespace DeleteConnectionAliasResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteConnectionAliasResult) => any;
}
export interface DeleteIpGroupRequest {
    /**
     * <p>The identifier of the IP access control group.</p>
     */
    GroupId: string | undefined;
}
export declare namespace DeleteIpGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteIpGroupRequest) => any;
}
export interface DeleteIpGroupResult {
}
export declare namespace DeleteIpGroupResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteIpGroupResult) => any;
}
export interface DeleteTagsRequest {
    /**
     * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
     *          registered directories, images, custom bundles, IP access control groups, and connection aliases.</p>
     */
    ResourceId: string | undefined;
    /**
     * <p>The tag keys.</p>
     */
    TagKeys: string[] | undefined;
}
export declare namespace DeleteTagsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTagsRequest) => any;
}
export interface DeleteTagsResult {
}
export declare namespace DeleteTagsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteTagsResult) => any;
}
export interface DeleteWorkspaceBundleRequest {
    /**
     * <p>The identifier of the bundle.</p>
     */
    BundleId?: string;
}
export declare namespace DeleteWorkspaceBundleRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteWorkspaceBundleRequest) => any;
}
export interface DeleteWorkspaceBundleResult {
}
export declare namespace DeleteWorkspaceBundleResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteWorkspaceBundleResult) => any;
}
export interface DeleteWorkspaceImageRequest {
    /**
     * <p>The identifier of the image.</p>
     */
    ImageId: string | undefined;
}
export declare namespace DeleteWorkspaceImageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteWorkspaceImageRequest) => any;
}
export interface DeleteWorkspaceImageResult {
}
export declare namespace DeleteWorkspaceImageResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteWorkspaceImageResult) => any;
}
export interface DeregisterWorkspaceDirectoryRequest {
    /**
     * <p>The identifier of the directory. If any WorkSpaces are registered to this directory, you must
     *          remove them before you deregister the directory, or you will receive an OperationNotSupportedException
     *          error.</p>
     */
    DirectoryId: string | undefined;
}
export declare namespace DeregisterWorkspaceDirectoryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeregisterWorkspaceDirectoryRequest) => any;
}
export interface DeregisterWorkspaceDirectoryResult {
}
export declare namespace DeregisterWorkspaceDirectoryResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeregisterWorkspaceDirectoryResult) => any;
}
export interface DescribeAccountRequest {
}
export declare namespace DescribeAccountRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAccountRequest) => any;
}
export interface DescribeAccountResult {
    /**
     * <p>The status of BYOL (whether BYOL is enabled or disabled).</p>
     */
    DedicatedTenancySupport?: DedicatedTenancySupportResultEnum | string;
    /**
     * <p>The IP address range, specified as an IPv4 CIDR block, used for the management network
     *          interface.</p>
     *          <p>The management network interface is connected to a secure Amazon WorkSpaces management
     *          network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces
     *          clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
     */
    DedicatedTenancyManagementCidrRange?: string;
}
export declare namespace DescribeAccountResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAccountResult) => any;
}
export interface DescribeAccountModificationsRequest {
    /**
     * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
     *          provide this token to receive the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeAccountModificationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAccountModificationsRequest) => any;
}
export interface DescribeAccountModificationsResult {
    /**
     * <p>The list of modifications to the configuration of BYOL.</p>
     */
    AccountModifications?: AccountModification[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is null when there
     *          are no more results to return. </p>
     */
    NextToken?: string;
}
export declare namespace DescribeAccountModificationsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeAccountModificationsResult) => any;
}
export interface DescribeClientPropertiesRequest {
    /**
     * <p>The resource identifier, in the form of directory IDs.</p>
     */
    ResourceIds: string[] | undefined;
}
export declare namespace DescribeClientPropertiesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeClientPropertiesRequest) => any;
}
export interface DescribeClientPropertiesResult {
    /**
     * <p>Information about the specified Amazon WorkSpaces clients.</p>
     */
    ClientPropertiesList?: ClientPropertiesResult[];
}
export declare namespace DescribeClientPropertiesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeClientPropertiesResult) => any;
}
export interface DescribeConnectionAliasesRequest {
    /**
     * <p>The identifiers of the connection aliases to describe.</p>
     */
    AliasIds?: string[];
    /**
     * <p>The identifier of the directory associated with the connection alias.</p>
     */
    ResourceId?: string;
    /**
     * <p>The maximum number of connection aliases to return.</p>
     */
    Limit?: number;
    /**
     * <p>If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the
     *          next set of results. </p>
     */
    NextToken?: string;
}
export declare namespace DescribeConnectionAliasesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeConnectionAliasesRequest) => any;
}
export interface DescribeConnectionAliasesResult {
    /**
     * <p>Information about the specified connection aliases.</p>
     */
    ConnectionAliases?: ConnectionAlias[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return. </p>
     */
    NextToken?: string;
}
export declare namespace DescribeConnectionAliasesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeConnectionAliasesResult) => any;
}
export interface DescribeConnectionAliasPermissionsRequest {
    /**
     * <p>The identifier of the connection alias.</p>
     */
    AliasId: string | undefined;
    /**
     * <p>If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the
     *          next set of results. </p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to return.</p>
     */
    MaxResults?: number;
}
export declare namespace DescribeConnectionAliasPermissionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeConnectionAliasPermissionsRequest) => any;
}
export interface DescribeConnectionAliasPermissionsResult {
    /**
     * <p>The identifier of the connection alias.</p>
     */
    AliasId?: string;
    /**
     * <p>The permissions associated with a connection alias.</p>
     */
    ConnectionAliasPermissions?: ConnectionAliasPermission[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return. </p>
     */
    NextToken?: string;
}
export declare namespace DescribeConnectionAliasPermissionsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeConnectionAliasPermissionsResult) => any;
}
export interface DescribeIpGroupsRequest {
    /**
     * <p>The identifiers of one or more IP access control groups.</p>
     */
    GroupIds?: string[];
    /**
     * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
     *          provide this token to receive the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of items to return.</p>
     */
    MaxResults?: number;
}
export declare namespace DescribeIpGroupsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeIpGroupsRequest) => any;
}
/**
 * <p>Describes an IP access control group.</p>
 */
export interface WorkspacesIpGroup {
    /**
     * <p>The identifier of the group.</p>
     */
    groupId?: string;
    /**
     * <p>The name of the group.</p>
     */
    groupName?: string;
    /**
     * <p>The description of the group.</p>
     */
    groupDesc?: string;
    /**
     * <p>The rules.</p>
     */
    userRules?: IpRuleItem[];
}
export declare namespace WorkspacesIpGroup {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WorkspacesIpGroup) => any;
}
export interface DescribeIpGroupsResult {
    /**
     * <p>Information about the IP access control groups.</p>
     */
    Result?: WorkspacesIpGroup[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return. </p>
     */
    NextToken?: string;
}
export declare namespace DescribeIpGroupsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeIpGroupsResult) => any;
}
export interface DescribeTagsRequest {
    /**
     * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
     *          registered directories, images, custom bundles, IP access control groups, and connection aliases.</p>
     */
    ResourceId: string | undefined;
}
export declare namespace DescribeTagsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeTagsRequest) => any;
}
export interface DescribeTagsResult {
    /**
     * <p>The tags.</p>
     */
    TagList?: Tag[];
}
export declare namespace DescribeTagsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeTagsResult) => any;
}
export interface DescribeWorkspaceBundlesRequest {
    /**
     * <p>The identifiers of the bundles. You cannot combine this parameter with any other filter.</p>
     */
    BundleIds?: string[];
    /**
     * <p>The owner of the bundles. You cannot combine this parameter with any other filter.</p>
     *          <p>To describe the bundles provided by AWS, specify <code>AMAZON</code>. To describe the
     *          bundles that belong to your account, don't specify a value.</p>
     */
    Owner?: string;
    /**
     * <p>The token for the next set of results. (You received this token from a previous call.)</p>
     */
    NextToken?: string;
}
export declare namespace DescribeWorkspaceBundlesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeWorkspaceBundlesRequest) => any;
}
export interface DescribeWorkspaceBundlesResult {
    /**
     * <p>Information about the bundles.</p>
     */
    Bundles?: WorkspaceBundle[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is null when there are no more
     *          results to return. This token is valid for one day and must be used within that time
     *          frame.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeWorkspaceBundlesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeWorkspaceBundlesResult) => any;
}
export interface DescribeWorkspaceDirectoriesRequest {
    /**
     * <p>The identifiers of the directories. If the value is null, all directories are
     *          retrieved.</p>
     */
    DirectoryIds?: string[];
    /**
     * <p>The maximum number of directories to return.</p>
     */
    Limit?: number;
    /**
     * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
     *          provide this token to receive the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeWorkspaceDirectoriesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeWorkspaceDirectoriesRequest) => any;
}
export declare enum WorkspaceDirectoryType {
    AD_CONNECTOR = "AD_CONNECTOR",
    SIMPLE_AD = "SIMPLE_AD"
}
/**
 * <p>Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.</p>
 */
export interface SelfservicePermissions {
    /**
     * <p>Specifies whether users can restart their WorkSpace.</p>
     */
    RestartWorkspace?: ReconnectEnum | string;
    /**
     * <p>Specifies whether users can increase the volume size of the drives on their
     *          WorkSpace.</p>
     */
    IncreaseVolumeSize?: ReconnectEnum | string;
    /**
     * <p>Specifies whether users can change the compute type (bundle) for their WorkSpace.</p>
     */
    ChangeComputeType?: ReconnectEnum | string;
    /**
     * <p>Specifies whether users can switch the running mode of their WorkSpace.</p>
     */
    SwitchRunningMode?: ReconnectEnum | string;
    /**
     * <p>Specifies whether users can rebuild the operating system of a WorkSpace to its original
     *          state.</p>
     */
    RebuildWorkspace?: ReconnectEnum | string;
}
export declare namespace SelfservicePermissions {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SelfservicePermissions) => any;
}
export declare enum WorkspaceDirectoryState {
    DEREGISTERED = "DEREGISTERED",
    DEREGISTERING = "DEREGISTERING",
    ERROR = "ERROR",
    REGISTERED = "REGISTERED",
    REGISTERING = "REGISTERING"
}
export declare enum Tenancy {
    DEDICATED = "DEDICATED",
    SHARED = "SHARED"
}
/**
 * <p>The device types and operating systems that can be used to access a WorkSpace. For more
 *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon
 *             WorkSpaces Client Network Requirements</a>.</p>
 */
export interface WorkspaceAccessProperties {
    /**
     * <p>Indicates whether users can use Windows clients to access their WorkSpaces. To restrict
     *          WorkSpaces access to trusted devices (also known as managed devices) with valid
     *          certificates, specify a value of <code>TRUST</code>. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/trusted-devices.html">Restrict
     *             WorkSpaces Access to Trusted Devices</a>. </p>
     */
    DeviceTypeWindows?: AccessPropertyValue | string;
    /**
     * <p>Indicates whether users can use macOS clients to access their WorkSpaces. To restrict
     *          WorkSpaces access to trusted devices (also known as managed devices) with valid
     *          certificates, specify a value of <code>TRUST</code>. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/trusted-devices.html">Restrict
     *             WorkSpaces Access to Trusted Devices</a>. </p>
     */
    DeviceTypeOsx?: AccessPropertyValue | string;
    /**
     * <p>Indicates whether users can access their WorkSpaces through a web browser.</p>
     */
    DeviceTypeWeb?: AccessPropertyValue | string;
    /**
     * <p>Indicates whether users can use iOS devices to access their WorkSpaces.</p>
     */
    DeviceTypeIos?: AccessPropertyValue | string;
    /**
     * <p>Indicates whether users can use Android devices to access their WorkSpaces.</p>
     */
    DeviceTypeAndroid?: AccessPropertyValue | string;
    /**
     * <p>Indicates whether users can use Chromebooks to access their WorkSpaces.</p>
     */
    DeviceTypeChromeOs?: AccessPropertyValue | string;
    /**
     * <p>Indicates whether users can use zero client devices to access their WorkSpaces.</p>
     */
    DeviceTypeZeroClient?: AccessPropertyValue | string;
    /**
     * <p>Indicates whether users can use Linux clients to access their WorkSpaces.</p>
     */
    DeviceTypeLinux?: AccessPropertyValue | string;
}
export declare namespace WorkspaceAccessProperties {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WorkspaceAccessProperties) => any;
}
/**
 * <p>Describes a directory that is used with Amazon WorkSpaces.</p>
 */
export interface WorkspaceDirectory {
    /**
     * <p>The directory identifier.</p>
     */
    DirectoryId?: string;
    /**
     * <p>The directory alias.</p>
     */
    Alias?: string;
    /**
     * <p>The name of the directory.</p>
     */
    DirectoryName?: string;
    /**
     * <p>The registration code for the directory. This is the code that users enter in their
     *          Amazon WorkSpaces client application to connect to the directory.</p>
     */
    RegistrationCode?: string;
    /**
     * <p>The identifiers of the subnets used with the directory.</p>
     */
    SubnetIds?: string[];
    /**
     * <p>The IP addresses of the DNS servers for the directory.</p>
     */
    DnsIpAddresses?: string[];
    /**
     * <p>The user name for the service account.</p>
     */
    CustomerUserName?: string;
    /**
     * <p>The identifier of the IAM role. This is the role that allows Amazon WorkSpaces to make
     *          calls to other services, such as Amazon EC2, on your behalf.</p>
     */
    IamRoleId?: string;
    /**
     * <p>The directory type.</p>
     */
    DirectoryType?: WorkspaceDirectoryType | string;
    /**
     * <p>The identifier of the security group that is assigned to new WorkSpaces.</p>
     */
    WorkspaceSecurityGroupId?: string;
    /**
     * <p>The state of the directory's registration with Amazon WorkSpaces. After a directory is
     *          deregistered, the <code>DEREGISTERED</code> state is returned very briefly before the directory
     *          metadata is cleaned up, so this state is rarely returned. To confirm that a directory is deregistered,
     *          check for the directory ID by using
     *          <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceDirectories.html">
     *             DescribeWorkspaceDirectories</a>. If the directory ID isn't returned, then the directory has been
     *          successfully deregistered.</p>
     */
    State?: WorkspaceDirectoryState | string;
    /**
     * <p>The default creation properties for all WorkSpaces in the directory.</p>
     */
    WorkspaceCreationProperties?: DefaultWorkspaceCreationProperties;
    /**
     * <p>The identifiers of the IP access control groups associated with the directory.</p>
     */
    ipGroupIds?: string[];
    /**
     * <p>The devices and operating systems that users can use to access WorkSpaces.</p>
     */
    WorkspaceAccessProperties?: WorkspaceAccessProperties;
    /**
     * <p>Specifies whether the directory is dedicated or shared. To use Bring Your Own License
     *          (BYOL), this value must be set to <code>DEDICATED</code>. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring
     *             Your Own Windows Desktop Images</a>.</p>
     */
    Tenancy?: Tenancy | string;
    /**
     * <p>The default self-service permissions for WorkSpaces in the directory.</p>
     */
    SelfservicePermissions?: SelfservicePermissions;
}
export declare namespace WorkspaceDirectory {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WorkspaceDirectory) => any;
}
export interface DescribeWorkspaceDirectoriesResult {
    /**
     * <p>Information about the directories.</p>
     */
    Directories?: WorkspaceDirectory[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return. </p>
     */
    NextToken?: string;
}
export declare namespace DescribeWorkspaceDirectoriesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeWorkspaceDirectoriesResult) => any;
}
export interface DescribeWorkspaceImagePermissionsRequest {
    /**
     * <p>The identifier of the image.</p>
     */
    ImageId: string | undefined;
    /**
     * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
     *          provide this token to receive the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of items to return.</p>
     */
    MaxResults?: number;
}
export declare namespace DescribeWorkspaceImagePermissionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeWorkspaceImagePermissionsRequest) => any;
}
/**
 * <p>Describes the AWS accounts that have been granted permission to use a shared image. For more
 *          information about sharing images, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html">
 *             Share or Unshare a Custom WorkSpaces Image</a>.</p>
 */
export interface ImagePermission {
    /**
     * <p>The identifier of the AWS account that an image has been shared with.</p>
     */
    SharedAccountId?: string;
}
export declare namespace ImagePermission {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImagePermission) => any;
}
export interface DescribeWorkspaceImagePermissionsResult {
    /**
     * <p>The identifier of the image.</p>
     */
    ImageId?: string;
    /**
     * <p>The identifiers of the AWS accounts that the image has been shared with.</p>
     */
    ImagePermissions?: ImagePermission[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return. </p>
     */
    NextToken?: string;
}
export declare namespace DescribeWorkspaceImagePermissionsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeWorkspaceImagePermissionsResult) => any;
}
export declare enum ImageType {
    OWNED = "OWNED",
    SHARED = "SHARED"
}
export interface DescribeWorkspaceImagesRequest {
    /**
     * <p>The identifier of the image.</p>
     */
    ImageIds?: string[];
    /**
     * <p>The type (owned or shared) of the image.</p>
     */
    ImageType?: ImageType | string;
    /**
     * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
     *          provide this token to receive the next set of results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of items to return.</p>
     */
    MaxResults?: number;
}
export declare namespace DescribeWorkspaceImagesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeWorkspaceImagesRequest) => any;
}
export declare enum OperatingSystemType {
    LINUX = "LINUX",
    WINDOWS = "WINDOWS"
}
/**
 * <p>The operating system that the image is running.</p>
 */
export interface OperatingSystem {
    /**
     * <p>The operating system.</p>
     */
    Type?: OperatingSystemType | string;
}
export declare namespace OperatingSystem {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OperatingSystem) => any;
}
export declare enum WorkspaceImageRequiredTenancy {
    DEDICATED = "DEDICATED",
    DEFAULT = "DEFAULT"
}
export declare enum WorkspaceImageState {
    AVAILABLE = "AVAILABLE",
    ERROR = "ERROR",
    PENDING = "PENDING"
}
/**
 * <p>Describes a WorkSpace image.</p>
 */
export interface WorkspaceImage {
    /**
     * <p>The identifier of the image.</p>
     */
    ImageId?: string;
    /**
     * <p>The name of the image.</p>
     */
    Name?: string;
    /**
     * <p>The description of the image.</p>
     */
    Description?: string;
    /**
     * <p>The operating system that the image is running. </p>
     */
    OperatingSystem?: OperatingSystem;
    /**
     * <p>The status of the image.</p>
     */
    State?: WorkspaceImageState | string;
    /**
     * <p>Specifies whether the image is running on dedicated hardware. When Bring Your Own
     *          License (BYOL) is enabled, this value is set to <code>DEDICATED</code>. For more
     *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring Your Own Windows
     *             Desktop Images</a>.</p>
     */
    RequiredTenancy?: WorkspaceImageRequiredTenancy | string;
    /**
     * <p>The error code that is returned for the image.</p>
     */
    ErrorCode?: string;
    /**
     * <p>The text of the error message that is returned for the image.</p>
     */
    ErrorMessage?: string;
    /**
     * <p>The date when the image was created. If the image has been shared, the AWS account
     *          that the image has been shared with sees the original creation date of the image.</p>
     */
    Created?: Date;
    /**
     * <p>The identifier of the AWS account that owns the image.</p>
     */
    OwnerAccountId?: string;
}
export declare namespace WorkspaceImage {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WorkspaceImage) => any;
}
export interface DescribeWorkspaceImagesResult {
    /**
     * <p>Information about the images.</p>
     */
    Images?: WorkspaceImage[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return. </p>
     */
    NextToken?: string;
}
export declare namespace DescribeWorkspaceImagesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeWorkspaceImagesResult) => any;
}
export interface DescribeWorkspacesRequest {
    /**
     * <p>The identifiers of the WorkSpaces. You cannot combine this parameter with any other
     *          filter.</p>
     *          <p>Because the <a>CreateWorkspaces</a> operation is asynchronous, the identifier
     *          it returns is not immediately available. If you immediately call <a>DescribeWorkspaces</a> with this identifier, no information is returned.</p>
     */
    WorkspaceIds?: string[];
    /**
     * <p>The identifier of the directory. In addition, you can optionally specify a specific
     *          directory user (see <code>UserName</code>). You cannot combine this parameter with any
     *          other filter.</p>
     */
    DirectoryId?: string;
    /**
     * <p>The name of the directory user. You must specify this parameter with
     *             <code>DirectoryId</code>.</p>
     */
    UserName?: string;
    /**
     * <p>The identifier of the bundle. All WorkSpaces that are created from this bundle are
     *          retrieved. You cannot combine this parameter with any other filter.</p>
     */
    BundleId?: string;
    /**
     * <p>The maximum number of items to return.</p>
     */
    Limit?: number;
    /**
     * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
     *          provide this token to receive the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeWorkspacesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeWorkspacesRequest) => any;
}
export interface DescribeWorkspacesResult {
    /**
     * <p>Information about the WorkSpaces.</p>
     *          <p>Because <a>CreateWorkspaces</a> is an asynchronous operation, some of the
     *          returned information could be incomplete.</p>
     */
    Workspaces?: Workspace[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return. </p>
     */
    NextToken?: string;
}
export declare namespace DescribeWorkspacesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeWorkspacesResult) => any;
}
export interface DescribeWorkspacesConnectionStatusRequest {
    /**
     * <p>The identifiers of the WorkSpaces. You can specify up to 25 WorkSpaces.</p>
     */
    WorkspaceIds?: string[];
    /**
     * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
     *          provide this token to receive the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeWorkspacesConnectionStatusRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeWorkspacesConnectionStatusRequest) => any;
}
/**
 * <p>Describes the connection status of a WorkSpace.</p>
 */
export interface WorkspaceConnectionStatus {
    /**
     * <p>The identifier of the WorkSpace.</p>
     */
    WorkspaceId?: string;
    /**
     * <p>The connection state of the WorkSpace. The connection state is unknown if the WorkSpace
     *          is stopped.</p>
     */
    ConnectionState?: ConnectionState | string;
    /**
     * <p>The timestamp of the connection status check.</p>
     */
    ConnectionStateCheckTimestamp?: Date;
    /**
     * <p>The timestamp of the last known user connection.</p>
     */
    LastKnownUserConnectionTimestamp?: Date;
}
export declare namespace WorkspaceConnectionStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WorkspaceConnectionStatus) => any;
}
export interface DescribeWorkspacesConnectionStatusResult {
    /**
     * <p>Information about the connection status of the WorkSpace.</p>
     */
    WorkspacesConnectionStatus?: WorkspaceConnectionStatus[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return. </p>
     */
    NextToken?: string;
}
export declare namespace DescribeWorkspacesConnectionStatusResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeWorkspacesConnectionStatusResult) => any;
}
export interface DescribeWorkspaceSnapshotsRequest {
    /**
     * <p>The identifier of the WorkSpace.</p>
     */
    WorkspaceId: string | undefined;
}
export declare namespace DescribeWorkspaceSnapshotsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeWorkspaceSnapshotsRequest) => any;
}
/**
 * <p>Describes a snapshot.</p>
 */
export interface Snapshot {
    /**
     * <p>The time when the snapshot was created.</p>
     */
    SnapshotTime?: Date;
}
export declare namespace Snapshot {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Snapshot) => any;
}
export interface DescribeWorkspaceSnapshotsResult {
    /**
     * <p>Information about the snapshots that can be used to rebuild a WorkSpace. These snapshots include
     *          the user volume.</p>
     */
    RebuildSnapshots?: Snapshot[];
    /**
     * <p>Information about the snapshots that can be used to restore a WorkSpace. These snapshots
     *          include both the root volume and the user volume.</p>
     */
    RestoreSnapshots?: Snapshot[];
}
export declare namespace DescribeWorkspaceSnapshotsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeWorkspaceSnapshotsResult) => any;
}
export interface DisassociateConnectionAliasRequest {
    /**
     * <p>The identifier of the connection alias to disassociate.</p>
     */
    AliasId: string | undefined;
}
export declare namespace DisassociateConnectionAliasRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateConnectionAliasRequest) => any;
}
export interface DisassociateConnectionAliasResult {
}
export declare namespace DisassociateConnectionAliasResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateConnectionAliasResult) => any;
}
export interface DisassociateIpGroupsRequest {
    /**
     * <p>The identifier of the directory.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The identifiers of one or more IP access control groups.</p>
     */
    GroupIds: string[] | undefined;
}
export declare namespace DisassociateIpGroupsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateIpGroupsRequest) => any;
}
export interface DisassociateIpGroupsResult {
}
export declare namespace DisassociateIpGroupsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateIpGroupsResult) => any;
}
/**
 * <p>Describes a WorkSpace that could not be rebooted.
 *          (<a>RebootWorkspaces</a>), rebuilt (<a>RebuildWorkspaces</a>), restored (<a>RestoreWorkspace</a>), terminated
 *          (<a>TerminateWorkspaces</a>), started (<a>StartWorkspaces</a>), or stopped (<a>StopWorkspaces</a>).</p>
 */
export interface FailedWorkspaceChangeRequest {
    /**
     * <p>The identifier of the WorkSpace.</p>
     */
    WorkspaceId?: string;
    /**
     * <p>The error code that is returned if the WorkSpace cannot be rebooted.</p>
     */
    ErrorCode?: string;
    /**
     * <p>The text of the error message that is returned if the WorkSpace cannot be
     *          rebooted.</p>
     */
    ErrorMessage?: string;
}
export declare namespace FailedWorkspaceChangeRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FailedWorkspaceChangeRequest) => any;
}
export declare enum WorkspaceImageIngestionProcess {
    BYOL_GRAPHICS = "BYOL_GRAPHICS",
    BYOL_GRAPHICSPRO = "BYOL_GRAPHICSPRO",
    BYOL_REGULAR = "BYOL_REGULAR",
    BYOL_REGULAR_WSP = "BYOL_REGULAR_WSP"
}
export interface ImportWorkspaceImageRequest {
    /**
     * <p>The identifier of the EC2 image.</p>
     */
    Ec2ImageId: string | undefined;
    /**
     * <p>The ingestion process to be used when importing the image, depending on which protocol
     *          you want to use for your BYOL Workspace image, either PCoIP or WorkSpaces Streaming Protocol
     *          (WSP). To use WSP, specify a value that ends in <code>_WSP</code>. To use PCoIP, specify a value
     *          that does not end in <code>_WSP</code>. </p>
     *
     *          <p>For non-GPU-enabled bundles (bundles other than Graphics or GraphicsPro), specify
     *          <code>BYOL_REGULAR</code> or <code>BYOL_REGULAR_WSP</code>, depending on the protocol.</p>
     */
    IngestionProcess: WorkspaceImageIngestionProcess | string | undefined;
    /**
     * <p>The name of the WorkSpace image.</p>
     */
    ImageName: string | undefined;
    /**
     * <p>The description of the WorkSpace image.</p>
     */
    ImageDescription: string | undefined;
    /**
     * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags.</p>
     */
    Tags?: Tag[];
    /**
     * <p>If specified, the version of Microsoft Office to subscribe to. Valid only for Windows 10
     *          BYOL images. For more information about subscribing to Office for BYOL images, see
     *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">
     *             Bring Your Own Windows Desktop Licenses</a>.</p>
     *
     *          <note>
     *             <p>Although this parameter is an array, only one item is allowed at this time.</p>
     *          </note>
     */
    Applications?: (Application | string)[];
}
export declare namespace ImportWorkspaceImageRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImportWorkspaceImageRequest) => any;
}
export interface ImportWorkspaceImageResult {
    /**
     * <p>The identifier of the WorkSpace image.</p>
     */
    ImageId?: string;
}
export declare namespace ImportWorkspaceImageResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImportWorkspaceImageResult) => any;
}
export interface ListAvailableManagementCidrRangesRequest {
    /**
     * <p>The IP address range to search. Specify an IP address range that is compatible with your
     *          network and in CIDR notation (that is, specify the range as an IPv4 CIDR block).</p>
     */
    ManagementCidrRangeConstraint: string | undefined;
    /**
     * <p>The maximum number of items to return.</p>
     */
    MaxResults?: number;
    /**
     * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
     *          provide this token to receive the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace ListAvailableManagementCidrRangesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAvailableManagementCidrRangesRequest) => any;
}
export interface ListAvailableManagementCidrRangesResult {
    /**
     * <p>The list of available IP address ranges, specified as IPv4 CIDR blocks.</p>
     */
    ManagementCidrRanges?: string[];
    /**
     * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return. </p>
     */
    NextToken?: string;
}
export declare namespace ListAvailableManagementCidrRangesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAvailableManagementCidrRangesResult) => any;
}
export interface MigrateWorkspaceRequest {
    /**
     * <p>The identifier of the WorkSpace to migrate from.</p>
     */
    SourceWorkspaceId: string | undefined;
    /**
     * <p>The identifier of the target bundle type to migrate the WorkSpace to.</p>
     */
    BundleId: string | undefined;
}
export declare namespace MigrateWorkspaceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MigrateWorkspaceRequest) => any;
}
export interface MigrateWorkspaceResult {
    /**
     * <p>The original identifier of the WorkSpace that is being migrated.</p>
     */
    SourceWorkspaceId?: string;
    /**
     * <p>The new identifier of the WorkSpace that is being migrated. If the migration does not succeed,
     *          the target WorkSpace ID will not be used, and the WorkSpace will still have the original WorkSpace ID.</p>
     */
    TargetWorkspaceId?: string;
}
export declare namespace MigrateWorkspaceResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MigrateWorkspaceResult) => any;
}
/**
 * <p>The properties of this WorkSpace are currently being modified. Try again in a moment.</p>
 */
export interface OperationInProgressException extends __SmithyException, $MetadataBearer {
    name: "OperationInProgressException";
    $fault: "client";
    message?: string;
}
export declare namespace OperationInProgressException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OperationInProgressException) => any;
}
export interface ModifyAccountRequest {
    /**
     * <p>The status of BYOL.</p>
     */
    DedicatedTenancySupport?: DedicatedTenancySupportEnum | string;
    /**
     * <p>The IP address range, specified as an IPv4 CIDR block, for the management network
     *          interface. Specify an IP address range that is compatible with your network and in CIDR
     *          notation (that is, specify the range as an IPv4 CIDR block). The CIDR block size must be
     *          /16 (for example, 203.0.113.25/16). It must also be specified as available by the
     *             <code>ListAvailableManagementCidrRanges</code> operation.</p>
     */
    DedicatedTenancyManagementCidrRange?: string;
}
export declare namespace ModifyAccountRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModifyAccountRequest) => any;
}
export interface ModifyAccountResult {
}
export declare namespace ModifyAccountResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModifyAccountResult) => any;
}
export interface ModifyClientPropertiesRequest {
    /**
     * <p>The resource identifiers, in the form of directory IDs.</p>
     */
    ResourceId: string | undefined;
    /**
     * <p>Information about the Amazon WorkSpaces client.</p>
     */
    ClientProperties: ClientProperties | undefined;
}
export declare namespace ModifyClientPropertiesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModifyClientPropertiesRequest) => any;
}
export interface ModifyClientPropertiesResult {
}
export declare namespace ModifyClientPropertiesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModifyClientPropertiesResult) => any;
}
export interface ModifySelfservicePermissionsRequest {
    /**
     * <p>The identifier of the directory.</p>
     */
    ResourceId: string | undefined;
    /**
     * <p>The permissions to enable or disable self-service capabilities.</p>
     */
    SelfservicePermissions: SelfservicePermissions | undefined;
}
export declare namespace ModifySelfservicePermissionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModifySelfservicePermissionsRequest) => any;
}
export interface ModifySelfservicePermissionsResult {
}
export declare namespace ModifySelfservicePermissionsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModifySelfservicePermissionsResult) => any;
}
export interface ModifyWorkspaceAccessPropertiesRequest {
    /**
     * <p>The identifier of the directory.</p>
     */
    ResourceId: string | undefined;
    /**
     * <p>The device types and operating systems to enable or disable for access.</p>
     */
    WorkspaceAccessProperties: WorkspaceAccessProperties | undefined;
}
export declare namespace ModifyWorkspaceAccessPropertiesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModifyWorkspaceAccessPropertiesRequest) => any;
}
export interface ModifyWorkspaceAccessPropertiesResult {
}
export declare namespace ModifyWorkspaceAccessPropertiesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModifyWorkspaceAccessPropertiesResult) => any;
}
/**
 * <p>Describes the default properties that are used for creating WorkSpaces. For more
 *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory
 *             Details for Your WorkSpaces</a>. </p>
 */
export interface WorkspaceCreationProperties {
    /**
     * <p>Indicates whether Amazon WorkDocs is enabled for your WorkSpaces.</p>
     *
     *          <note>
     *             <p>If WorkDocs is already enabled for a WorkSpaces directory and you disable it, new WorkSpaces launched in the
     *             directory will not have WorkDocs enabled. However, WorkDocs remains enabled for any existing WorkSpaces, unless
     *             you either disable users' access to WorkDocs or you delete the WorkDocs site. To disable users' access to WorkDocs,
     *             see <a href="https://docs.aws.amazon.com/workdocs/latest/adminguide/inactive-user.html">Disabling Users</a> in the
     *             <i>Amazon WorkDocs Administration Guide</i>. To delete a WorkDocs site, see
     *             <a href="https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-sites.html">Deleting a Site</a> in the
     *             <i>Amazon WorkDocs Administration Guide</i>.</p>
     *
     *             <p>If you enable WorkDocs on a directory that already has existing WorkSpaces, the existing WorkSpaces and any
     *          new WorkSpaces that are launched in the directory will have WorkDocs enabled.</p>
     *          </note>
     */
    EnableWorkDocs?: boolean;
    /**
     * <p>Indicates whether internet access is enabled for your WorkSpaces.</p>
     */
    EnableInternetAccess?: boolean;
    /**
     * <p>The default organizational unit (OU) for your WorkSpaces directories. This string must be the full Lightweight
     *          Directory Access Protocol (LDAP) distinguished name for the target domain and OU. It must be in the form
     *          <code>"OU=<i>value</i>,DC=<i>value</i>,DC=<i>value</i>"</code>,
     *          where <i>value</i> is any string of characters, and the number of domain components (DCs) is
     *          two or more. For example, <code>OU=WorkSpaces_machines,DC=machines,DC=example,DC=com</code>. </p>
     *
     *          <important>
     *             <ul>
     *                <li>
     *                   <p>To avoid errors, certain characters in the distinguished name must be escaped. For more information,
     *                   see <a href="https://docs.microsoft.com/previous-versions/windows/desktop/ldap/distinguished-names">
     *                      Distinguished Names</a> in the Microsoft documentation.</p>
     *                </li>
     *                <li>
     *                   <p>The API doesn't validate whether the OU exists.</p>
     *                </li>
     *             </ul>
     *          </important>
     */
    DefaultOu?: string;
    /**
     * <p>The identifier of your custom security group.</p>
     */
    CustomSecurityGroupId?: string;
    /**
     * <p>Indicates whether users are local administrators of their WorkSpaces.</p>
     */
    UserEnabledAsLocalAdministrator?: boolean;
    /**
     * <p>Indicates whether maintenance mode is enabled for your WorkSpaces. For more information,
     *          see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspace-maintenance.html">WorkSpace
     *             Maintenance</a>. </p>
     */
    EnableMaintenanceMode?: boolean;
}
export declare namespace WorkspaceCreationProperties {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WorkspaceCreationProperties) => any;
}
export interface ModifyWorkspaceCreationPropertiesRequest {
    /**
     * <p>The identifier of the directory.</p>
     */
    ResourceId: string | undefined;
    /**
     * <p>The default properties for creating WorkSpaces.</p>
     */
    WorkspaceCreationProperties: WorkspaceCreationProperties | undefined;
}
export declare namespace ModifyWorkspaceCreationPropertiesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModifyWorkspaceCreationPropertiesRequest) => any;
}
export interface ModifyWorkspaceCreationPropertiesResult {
}
export declare namespace ModifyWorkspaceCreationPropertiesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModifyWorkspaceCreationPropertiesResult) => any;
}
export interface ModifyWorkspacePropertiesRequest {
    /**
     * <p>The identifier of the WorkSpace.</p>
     */
    WorkspaceId: string | undefined;
    /**
     * <p>The properties of the WorkSpace.</p>
     */
    WorkspaceProperties: WorkspaceProperties | undefined;
}
export declare namespace ModifyWorkspacePropertiesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModifyWorkspacePropertiesRequest) => any;
}
export interface ModifyWorkspacePropertiesResult {
}
export declare namespace ModifyWorkspacePropertiesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModifyWorkspacePropertiesResult) => any;
}
/**
 * <p>The configuration of this WorkSpace is not supported for this operation. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/required-service-components.html">Required
 *             Configuration and Service Components for WorkSpaces </a>.</p>
 */
export interface UnsupportedWorkspaceConfigurationException extends __SmithyException, $MetadataBearer {
    name: "UnsupportedWorkspaceConfigurationException";
    $fault: "client";
    message?: string;
}
export declare namespace UnsupportedWorkspaceConfigurationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnsupportedWorkspaceConfigurationException) => any;
}
export declare enum TargetWorkspaceState {
    ADMIN_MAINTENANCE = "ADMIN_MAINTENANCE",
    AVAILABLE = "AVAILABLE"
}
export interface ModifyWorkspaceStateRequest {
    /**
     * <p>The identifier of the WorkSpace.</p>
     */
    WorkspaceId: string | undefined;
    /**
     * <p>The WorkSpace state.</p>
     */
    WorkspaceState: TargetWorkspaceState | string | undefined;
}
export declare namespace ModifyWorkspaceStateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModifyWorkspaceStateRequest) => any;
}
export interface ModifyWorkspaceStateResult {
}
export declare namespace ModifyWorkspaceStateResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModifyWorkspaceStateResult) => any;
}
/**
 * <p>Describes the information used to reboot a WorkSpace.</p>
 */
export interface RebootRequest {
    /**
     * <p>The identifier of the WorkSpace.</p>
     */
    WorkspaceId: string | undefined;
}
export declare namespace RebootRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RebootRequest) => any;
}
export interface RebootWorkspacesRequest {
    /**
     * <p>The WorkSpaces to reboot. You can specify up to 25 WorkSpaces.</p>
     */
    RebootWorkspaceRequests: RebootRequest[] | undefined;
}
export declare namespace RebootWorkspacesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RebootWorkspacesRequest) => any;
}
export interface RebootWorkspacesResult {
    /**
     * <p>Information about the WorkSpaces that could not be rebooted.</p>
     */
    FailedRequests?: FailedWorkspaceChangeRequest[];
}
export declare namespace RebootWorkspacesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RebootWorkspacesResult) => any;
}
/**
 * <p>Describes the information used to rebuild a WorkSpace.</p>
 */
export interface RebuildRequest {
    /**
     * <p>The identifier of the WorkSpace.</p>
     */
    WorkspaceId: string | undefined;
}
export declare namespace RebuildRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RebuildRequest) => any;
}
export interface RebuildWorkspacesRequest {
    /**
     * <p>The WorkSpace to rebuild. You can specify a single WorkSpace.</p>
     */
    RebuildWorkspaceRequests: RebuildRequest[] | undefined;
}
export declare namespace RebuildWorkspacesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RebuildWorkspacesRequest) => any;
}
export interface RebuildWorkspacesResult {
    /**
     * <p>Information about the WorkSpace that could not be rebuilt.</p>
     */
    FailedRequests?: FailedWorkspaceChangeRequest[];
}
export declare namespace RebuildWorkspacesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RebuildWorkspacesResult) => any;
}
export interface RegisterWorkspaceDirectoryRequest {
    /**
     * <p>The identifier of the directory. You cannot register a directory if it does not have a status
     *          of Active. If the directory does not have a status of Active, you will receive an
     *          InvalidResourceStateException error. If you have already registered the maximum number of directories
     *          that you can register with Amazon WorkSpaces, you will receive a ResourceLimitExceededException error.
     *          Deregister directories that you are not using for WorkSpaces, and try again.</p>
     */
    DirectoryId: string | undefined;
    /**
     * <p>The identifiers of the subnets for your virtual private cloud (VPC). Make sure that the subnets
     *          are in supported Availability Zones. The subnets must also be in separate Availability Zones. If these
     *          conditions are not met, you will receive an OperationNotSupportedException error.</p>
     */
    SubnetIds?: string[];
    /**
     * <p>Indicates whether Amazon WorkDocs is enabled or disabled. If you have enabled this parameter and
     *          WorkDocs is not available in the Region, you will receive an OperationNotSupportedException error. Set
     *          <code>EnableWorkDocs</code> to disabled, and try again.</p>
     */
    EnableWorkDocs: boolean | undefined;
    /**
     * <p>Indicates whether self-service capabilities are enabled or disabled.</p>
     */
    EnableSelfService?: boolean;
    /**
     * <p>Indicates whether your WorkSpace directory is dedicated or shared. To use Bring Your Own
     *          License (BYOL) images, this value must be set to <code>DEDICATED</code> and your AWS account must be
     *          enabled for BYOL. If your account has not been enabled for BYOL, you will receive an
     *          InvalidParameterValuesException error. For more information about BYOL images, see
     *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring Your Own Windows Desktop Images</a>.</p>
     */
    Tenancy?: Tenancy | string;
    /**
     * <p>The tags associated with the directory.</p>
     */
    Tags?: Tag[];
}
export declare namespace RegisterWorkspaceDirectoryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RegisterWorkspaceDirectoryRequest) => any;
}
export interface RegisterWorkspaceDirectoryResult {
}
export declare namespace RegisterWorkspaceDirectoryResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RegisterWorkspaceDirectoryResult) => any;
}
/**
 * <p>The configuration of this network is not supported for this operation, or your network configuration
 *          conflicts with the Amazon WorkSpaces management network IP range. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-vpc.html">
 *             Configure a VPC for Amazon WorkSpaces</a>.</p>
 */
export interface UnsupportedNetworkConfigurationException extends __SmithyException, $MetadataBearer {
    name: "UnsupportedNetworkConfigurationException";
    $fault: "client";
    message?: string;
}
export declare namespace UnsupportedNetworkConfigurationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnsupportedNetworkConfigurationException) => any;
}
/**
 * <p>The workspaces_DefaultRole role could not be found. If this is the first time you are registering a directory, you
 *          will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role">Creating the workspaces_DefaultRole Role</a>.</p>
 */
export interface WorkspacesDefaultRoleNotFoundException extends __SmithyException, $MetadataBearer {
    name: "WorkspacesDefaultRoleNotFoundException";
    $fault: "client";
    message?: string;
}
export declare namespace WorkspacesDefaultRoleNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: WorkspacesDefaultRoleNotFoundException) => any;
}
export interface RestoreWorkspaceRequest {
    /**
     * <p>The identifier of the WorkSpace.</p>
     */
    WorkspaceId: string | undefined;
}
export declare namespace RestoreWorkspaceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RestoreWorkspaceRequest) => any;
}
export interface RestoreWorkspaceResult {
}
export declare namespace RestoreWorkspaceResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RestoreWorkspaceResult) => any;
}
export interface RevokeIpRulesRequest {
    /**
     * <p>The identifier of the group.</p>
     */
    GroupId: string | undefined;
    /**
     * <p>The rules to remove from the group.</p>
     */
    UserRules: string[] | undefined;
}
export declare namespace RevokeIpRulesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RevokeIpRulesRequest) => any;
}
export interface RevokeIpRulesResult {
}
export declare namespace RevokeIpRulesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RevokeIpRulesResult) => any;
}
/**
 * <p>Information used to start a WorkSpace.</p>
 */
export interface StartRequest {
    /**
     * <p>The identifier of the WorkSpace.</p>
     */
    WorkspaceId?: string;
}
export declare namespace StartRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartRequest) => any;
}
export interface StartWorkspacesRequest {
    /**
     * <p>The WorkSpaces to start. You can specify up to 25 WorkSpaces.</p>
     */
    StartWorkspaceRequests: StartRequest[] | undefined;
}
export declare namespace StartWorkspacesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartWorkspacesRequest) => any;
}
export interface StartWorkspacesResult {
    /**
     * <p>Information about the WorkSpaces that could not be started.</p>
     */
    FailedRequests?: FailedWorkspaceChangeRequest[];
}
export declare namespace StartWorkspacesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartWorkspacesResult) => any;
}
/**
 * <p>Describes the information used to stop a WorkSpace.</p>
 */
export interface StopRequest {
    /**
     * <p>The identifier of the WorkSpace.</p>
     */
    WorkspaceId?: string;
}
export declare namespace StopRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopRequest) => any;
}
export interface StopWorkspacesRequest {
    /**
     * <p>The WorkSpaces to stop. You can specify up to 25 WorkSpaces.</p>
     */
    StopWorkspaceRequests: StopRequest[] | undefined;
}
export declare namespace StopWorkspacesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopWorkspacesRequest) => any;
}
export interface StopWorkspacesResult {
    /**
     * <p>Information about the WorkSpaces that could not be stopped.</p>
     */
    FailedRequests?: FailedWorkspaceChangeRequest[];
}
export declare namespace StopWorkspacesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopWorkspacesResult) => any;
}
/**
 * <p>Describes the information used to terminate a WorkSpace.</p>
 */
export interface TerminateRequest {
    /**
     * <p>The identifier of the WorkSpace.</p>
     */
    WorkspaceId: string | undefined;
}
export declare namespace TerminateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TerminateRequest) => any;
}
export interface TerminateWorkspacesRequest {
    /**
     * <p>The WorkSpaces to terminate. You can specify up to 25 WorkSpaces.</p>
     */
    TerminateWorkspaceRequests: TerminateRequest[] | undefined;
}
export declare namespace TerminateWorkspacesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TerminateWorkspacesRequest) => any;
}
export interface TerminateWorkspacesResult {
    /**
     * <p>Information about the WorkSpaces that could not be terminated.</p>
     */
    FailedRequests?: FailedWorkspaceChangeRequest[];
}
export declare namespace TerminateWorkspacesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TerminateWorkspacesResult) => any;
}
export interface UpdateConnectionAliasPermissionRequest {
    /**
     * <p>The identifier of the connection alias that you want to update permissions for.</p>
     */
    AliasId: string | undefined;
    /**
     * <p>Indicates whether to share or unshare the connection alias with the specified AWS account.</p>
     */
    ConnectionAliasPermission: ConnectionAliasPermission | undefined;
}
export declare namespace UpdateConnectionAliasPermissionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateConnectionAliasPermissionRequest) => any;
}
export interface UpdateConnectionAliasPermissionResult {
}
export declare namespace UpdateConnectionAliasPermissionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateConnectionAliasPermissionResult) => any;
}
export interface UpdateRulesOfIpGroupRequest {
    /**
     * <p>The identifier of the group.</p>
     */
    GroupId: string | undefined;
    /**
     * <p>One or more rules.</p>
     */
    UserRules: IpRuleItem[] | undefined;
}
export declare namespace UpdateRulesOfIpGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateRulesOfIpGroupRequest) => any;
}
export interface UpdateRulesOfIpGroupResult {
}
export declare namespace UpdateRulesOfIpGroupResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateRulesOfIpGroupResult) => any;
}
export interface UpdateWorkspaceBundleRequest {
    /**
     * <p>The identifier of the bundle.</p>
     */
    BundleId?: string;
    /**
     * <p>The identifier of the image.</p>
     */
    ImageId?: string;
}
export declare namespace UpdateWorkspaceBundleRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateWorkspaceBundleRequest) => any;
}
export interface UpdateWorkspaceBundleResult {
}
export declare namespace UpdateWorkspaceBundleResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateWorkspaceBundleResult) => any;
}
export interface UpdateWorkspaceImagePermissionRequest {
    /**
     * <p>The identifier of the image.</p>
     */
    ImageId: string | undefined;
    /**
     * <p>The permission to copy the image. This permission can be revoked only after an image
     *       has been shared.</p>
     */
    AllowCopyImage: boolean | undefined;
    /**
     * <p>The identifier of the AWS account to share or unshare the image with.</p>
     *
     *          <important>
     *             <p>Before sharing the image, confirm that you are sharing to the correct AWS account ID.</p>
     *          </important>
     */
    SharedAccountId: string | undefined;
}
export declare namespace UpdateWorkspaceImagePermissionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateWorkspaceImagePermissionRequest) => any;
}
export interface UpdateWorkspaceImagePermissionResult {
}
export declare namespace UpdateWorkspaceImagePermissionResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateWorkspaceImagePermissionResult) => any;
}
