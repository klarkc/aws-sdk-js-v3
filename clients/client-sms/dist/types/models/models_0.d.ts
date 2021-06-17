import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export declare enum AppLaunchConfigurationStatus {
    Configured = "CONFIGURED",
    NotConfigured = "NOT_CONFIGURED"
}
export declare enum AppLaunchStatus {
    ConfigurationInProgress = "CONFIGURATION_IN_PROGRESS",
    ConfigurationInvalid = "CONFIGURATION_INVALID",
    DeltaLaunchFailed = "DELTA_LAUNCH_FAILED",
    DeltaLaunchInProgress = "DELTA_LAUNCH_IN_PROGRESS",
    LaunchFailed = "LAUNCH_FAILED",
    LaunchInProgress = "LAUNCH_IN_PROGRESS",
    LaunchPending = "LAUNCH_PENDING",
    Launched = "LAUNCHED",
    PartiallyLaunched = "PARTIALLY_LAUNCHED",
    ReadyForConfiguration = "READY_FOR_CONFIGURATION",
    ReadyForLaunch = "READY_FOR_LAUNCH",
    TerminateFailed = "TERMINATE_FAILED",
    TerminateInProgress = "TERMINATE_IN_PROGRESS",
    Terminated = "TERMINATED",
    ValidationInProgress = "VALIDATION_IN_PROGRESS"
}
export declare enum AppReplicationConfigurationStatus {
    Configured = "CONFIGURED",
    NotConfigured = "NOT_CONFIGURED"
}
export declare enum AppReplicationStatus {
    ConfigurationInProgress = "CONFIGURATION_IN_PROGRESS",
    ConfigurationInvalid = "CONFIGURATION_INVALID",
    DeltaReplicated = "DELTA_REPLICATED",
    DeltaReplicationFailed = "DELTA_REPLICATION_FAILED",
    DeltaReplicationInProgress = "DELTA_REPLICATION_IN_PROGRESS",
    PartiallyReplicated = "PARTIALLY_REPLICATED",
    ReadyForConfiguration = "READY_FOR_CONFIGURATION",
    ReadyForReplication = "READY_FOR_REPLICATION",
    Replicated = "REPLICATED",
    ReplicationFailed = "REPLICATION_FAILED",
    ReplicationInProgress = "REPLICATION_IN_PROGRESS",
    ReplicationPending = "REPLICATION_PENDING",
    ReplicationStopFailed = "REPLICATION_STOP_FAILED",
    ReplicationStopped = "REPLICATION_STOPPED",
    ReplicationStopping = "REPLICATION_STOPPING",
    ValidationInProgress = "VALIDATION_IN_PROGRESS"
}
/**
 * <p>Details about the latest launch of an application.</p>
 */
export interface LaunchDetails {
    /**
     * <p>The latest time that this application was launched successfully.</p>
     */
    latestLaunchTime?: Date;
    /**
     * <p>The name of the latest stack launched for this application.</p>
     */
    stackName?: string;
    /**
     * <p>The ID of the latest stack launched for this application.</p>
     */
    stackId?: string;
}
export declare namespace LaunchDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LaunchDetails) => any;
}
export declare enum AppStatus {
    Active = "ACTIVE",
    Creating = "CREATING",
    DELETE_FAILED = "DELETE_FAILED",
    Deleted = "DELETED",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * <p>Information about the application.</p>
 */
export interface AppSummary {
    /**
     * <p>The unique ID of the application.</p>
     */
    appId?: string;
    /**
     * <p>The ID of the application.</p>
     */
    importedAppId?: string;
    /**
     * <p>The name of the application.</p>
     */
    name?: string;
    /**
     * <p>The description of the application.</p>
     */
    description?: string;
    /**
     * <p>Status of the application.</p>
     */
    status?: AppStatus | string;
    /**
     * <p>A message related to the status of the application</p>
     */
    statusMessage?: string;
    /**
     * <p>Status of the replication configuration.</p>
     */
    replicationConfigurationStatus?: AppReplicationConfigurationStatus | string;
    /**
     * <p>The replication status of the application.</p>
     */
    replicationStatus?: AppReplicationStatus | string;
    /**
     * <p>A message related to the replication status of the application.</p>
     */
    replicationStatusMessage?: string;
    /**
     * <p>The timestamp of the application's most recent successful replication.</p>
     */
    latestReplicationTime?: Date;
    /**
     * <p>Status of the launch configuration.</p>
     */
    launchConfigurationStatus?: AppLaunchConfigurationStatus | string;
    /**
     * <p>The launch status of the application.</p>
     */
    launchStatus?: AppLaunchStatus | string;
    /**
     * <p>A message related to the launch status of the application.</p>
     */
    launchStatusMessage?: string;
    /**
     * <p>Details about the latest launch of the application.</p>
     */
    launchDetails?: LaunchDetails;
    /**
     * <p>The creation time of the application.</p>
     */
    creationTime?: Date;
    /**
     * <p>The last modified time of the application.</p>
     */
    lastModified?: Date;
    /**
     * <p>The name of the service role in the customer's account used by AWS SMS.</p>
     */
    roleName?: string;
    /**
     * <p>The number of server groups present in the application.</p>
     */
    totalServerGroups?: number;
    /**
     * <p>The number of servers present in the application.</p>
     */
    totalServers?: number;
}
export declare namespace AppSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AppSummary) => any;
}
export declare enum AppValidationStrategy {
    SSM = "SSM"
}
export declare enum ScriptType {
    POWERSHELL_SCRIPT = "POWERSHELL_SCRIPT",
    SHELL_SCRIPT = "SHELL_SCRIPT"
}
/**
 * <p>Location of an Amazon S3 object.</p>
 */
export interface S3Location {
    /**
     * <p>The Amazon S3 bucket name.</p>
     */
    bucket?: string;
    /**
     * <p>The Amazon S3 bucket key.</p>
     */
    key?: string;
}
export declare namespace S3Location {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3Location) => any;
}
/**
 * <p>Contains the location of a validation script.</p>
 */
export interface Source {
    /**
     * <p>Location of an Amazon S3 object.</p>
     */
    s3Location?: S3Location;
}
export declare namespace Source {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Source) => any;
}
/**
 * <p>Contains validation parameters.</p>
 */
export interface SSMValidationParameters {
    /**
     * <p>The location of the validation script.</p>
     */
    source?: Source;
    /**
     * <p>The ID of the instance. The instance must have the following tag: UserForSMSApplicationValidation=true.</p>
     */
    instanceId?: string;
    /**
     * <p>The type of validation script.</p>
     */
    scriptType?: ScriptType | string;
    /**
     * <p>The command to run the validation script</p>
     */
    command?: string;
    /**
     * <p>The timeout interval, in seconds.</p>
     */
    executionTimeoutSeconds?: number;
    /**
     * <p>The name of the S3 bucket for output.</p>
     */
    outputS3BucketName?: string;
}
export declare namespace SSMValidationParameters {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SSMValidationParameters) => any;
}
/**
 * <p>Configuration for validating an application.</p>
 */
export interface AppValidationConfiguration {
    /**
     * <p>The ID of the validation.</p>
     */
    validationId?: string;
    /**
     * <p>The name of the configuration.</p>
     */
    name?: string;
    /**
     * <p>The validation strategy.</p>
     */
    appValidationStrategy?: AppValidationStrategy | string;
    /**
     * <p>The validation parameters.</p>
     */
    ssmValidationParameters?: SSMValidationParameters;
}
export declare namespace AppValidationConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AppValidationConfiguration) => any;
}
/**
 * <p>Contains the location of validation output.</p>
 */
export interface SSMOutput {
    /**
     * <p>Location of an Amazon S3 object.</p>
     */
    s3Location?: S3Location;
}
export declare namespace SSMOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SSMOutput) => any;
}
/**
 * <p>Output from validating an application.</p>
 */
export interface AppValidationOutput {
    /**
     * <p>Output from using SSM to validate the application.</p>
     */
    ssmOutput?: SSMOutput;
}
export declare namespace AppValidationOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AppValidationOutput) => any;
}
export declare enum ServerType {
    VirtualMachine = "VIRTUAL_MACHINE"
}
export declare enum VmManagerType {
    hyperVManager = "HYPERV-MANAGER",
    scvmm = "SCVMM",
    vSphere = "VSPHERE"
}
/**
 * <p>Represents a VM server location.</p>
 */
export interface VmServerAddress {
    /**
     * <p>The ID of the VM manager.</p>
     */
    vmManagerId?: string;
    /**
     * <p>The ID of the VM.</p>
     */
    vmId?: string;
}
export declare namespace VmServerAddress {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VmServerAddress) => any;
}
/**
 * <p>Represents a VM server.</p>
 */
export interface VmServer {
    /**
     * <p>The VM server location.</p>
     */
    vmServerAddress?: VmServerAddress;
    /**
     * <p>The name of the VM.</p>
     */
    vmName?: string;
    /**
     * <p>The name of the VM manager.</p>
     */
    vmManagerName?: string;
    /**
     * <p>The type of VM management product.</p>
     */
    vmManagerType?: VmManagerType | string;
    /**
     * <p>The VM folder path in the vCenter Server virtual machine inventory tree.</p>
     */
    vmPath?: string;
}
export declare namespace VmServer {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VmServer) => any;
}
/**
 * <p>Represents a server.</p>
 */
export interface Server {
    /**
     * <p>The ID of the server.</p>
     */
    serverId?: string;
    /**
     * <p>The type of server.</p>
     */
    serverType?: ServerType | string;
    /**
     * <p>Information about the VM server.</p>
     */
    vmServer?: VmServer;
    /**
     * <p>The ID of the replication job.</p>
     */
    replicationJobId?: string;
    /**
     * <p>Indicates whether the replication job is deleted or failed.</p>
     */
    replicationJobTerminated?: boolean;
}
export declare namespace Server {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Server) => any;
}
/**
 * <p>Logical grouping of servers.</p>
 */
export interface ServerGroup {
    /**
     * <p>The ID of a server group.</p>
     */
    serverGroupId?: string;
    /**
     * <p>The name of a server group.</p>
     */
    name?: string;
    /**
     * <p>The servers that belong to a server group.</p>
     */
    serverList?: Server[];
}
export declare namespace ServerGroup {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServerGroup) => any;
}
/**
 * <p>Key/value pair that can be assigned to an application.</p>
 */
export interface Tag {
    /**
     * <p>The tag key.</p>
     */
    key?: string;
    /**
     * <p>The tag value.</p>
     */
    value?: string;
}
export declare namespace Tag {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Tag) => any;
}
export interface CreateAppRequest {
    /**
     * <p>The name of the new application.</p>
     */
    name?: string;
    /**
     * <p>The description of the new application</p>
     */
    description?: string;
    /**
     * <p>The name of the service role in the customer's account to be used by AWS SMS.</p>
     */
    roleName?: string;
    /**
     * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of
     *             application creation.</p>
     */
    clientToken?: string;
    /**
     * <p>The server groups to include in the application.</p>
     */
    serverGroups?: ServerGroup[];
    /**
     * <p>The tags to be associated with the application.</p>
     */
    tags?: Tag[];
}
export declare namespace CreateAppRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateAppRequest) => any;
}
export interface CreateAppResponse {
    /**
     * <p>A summary description of the application.</p>
     */
    appSummary?: AppSummary;
    /**
     * <p>The server groups included in the application.</p>
     */
    serverGroups?: ServerGroup[];
    /**
     * <p>The tags associated with the application.</p>
     */
    tags?: Tag[];
}
export declare namespace CreateAppResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateAppResponse) => any;
}
/**
 * <p>An internal error occurred.</p>
 */
export interface InternalError extends __SmithyException, $MetadataBearer {
    name: "InternalError";
    $fault: "server";
    message?: string;
}
export declare namespace InternalError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalError) => any;
}
/**
 * <p>A specified parameter is not valid.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
    name: "InvalidParameterException";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidParameterException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidParameterException) => any;
}
/**
 * <p>A required parameter is missing.</p>
 */
export interface MissingRequiredParameterException extends __SmithyException, $MetadataBearer {
    name: "MissingRequiredParameterException";
    $fault: "client";
    message?: string;
}
export declare namespace MissingRequiredParameterException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MissingRequiredParameterException) => any;
}
/**
 * <p>This operation is not allowed.</p>
 */
export interface OperationNotPermittedException extends __SmithyException, $MetadataBearer {
    name: "OperationNotPermittedException";
    $fault: "client";
    message?: string;
}
export declare namespace OperationNotPermittedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: OperationNotPermittedException) => any;
}
/**
 * <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 */
export interface UnauthorizedOperationException extends __SmithyException, $MetadataBearer {
    name: "UnauthorizedOperationException";
    $fault: "client";
    message?: string;
}
export declare namespace UnauthorizedOperationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UnauthorizedOperationException) => any;
}
export declare enum LicenseType {
    AWS = "AWS",
    BYOL = "BYOL"
}
export interface CreateReplicationJobRequest {
    /**
     * <p>The ID of the server.</p>
     */
    serverId: string | undefined;
    /**
     * <p>The seed replication time.</p>
     */
    seedReplicationTime: Date | undefined;
    /**
     * <p>The time between consecutive replication runs, in hours.</p>
     */
    frequency?: number;
    /**
     * <p>Indicates whether to run the replication job one time.</p>
     */
    runOnce?: boolean;
    /**
     * <p>The license type to be used for the AMI created by a successful replication
     *             run.</p>
     */
    licenseType?: LicenseType | string;
    /**
     * <p>The name of the IAM role to be used by the AWS SMS.</p>
     */
    roleName?: string;
    /**
     * <p>The description of the replication job.</p>
     */
    description?: string;
    /**
     * <p>The maximum number of SMS-created AMIs to retain. The oldest is deleted after the
     *             maximum number is reached and a new AMI is created.</p>
     */
    numberOfRecentAmisToKeep?: number;
    /**
     * <p>Indicates whether the replication job produces encrypted AMIs.</p>
     */
    encrypted?: boolean;
    /**
     * <p>The ID of the KMS key for replication jobs that produce encrypted AMIs.
     *             This value can be any of the following:</p>
     *         <ul>
     *             <li>
     *                 <p>KMS key ID</p>
     *             </li>
     *             <li>
     *                 <p>KMS key alias</p>
     *             </li>
     *             <li>
     *                 <p>ARN referring to the KMS key ID</p>
     *             </li>
     *             <li>
     *                 <p>ARN referring to the KMS key alias</p>
     *             </li>
     *          </ul>
     *         <p> If encrypted is <i>true</i> but a KMS key ID is not specified, the
     *             customer's default KMS key for Amazon EBS is used. </p>
     */
    kmsKeyId?: string;
}
export declare namespace CreateReplicationJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateReplicationJobRequest) => any;
}
export interface CreateReplicationJobResponse {
    /**
     * <p>The unique identifier of the replication job.</p>
     */
    replicationJobId?: string;
}
export declare namespace CreateReplicationJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateReplicationJobResponse) => any;
}
/**
 * <p>There are no connectors available.</p>
 */
export interface NoConnectorsAvailableException extends __SmithyException, $MetadataBearer {
    name: "NoConnectorsAvailableException";
    $fault: "client";
    message?: string;
}
export declare namespace NoConnectorsAvailableException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NoConnectorsAvailableException) => any;
}
/**
 * <p>The specified replication job already exists.</p>
 */
export interface ReplicationJobAlreadyExistsException extends __SmithyException, $MetadataBearer {
    name: "ReplicationJobAlreadyExistsException";
    $fault: "client";
    message?: string;
}
export declare namespace ReplicationJobAlreadyExistsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ReplicationJobAlreadyExistsException) => any;
}
/**
 * <p>The specified server cannot be replicated.</p>
 */
export interface ServerCannotBeReplicatedException extends __SmithyException, $MetadataBearer {
    name: "ServerCannotBeReplicatedException";
    $fault: "client";
    message?: string;
}
export declare namespace ServerCannotBeReplicatedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServerCannotBeReplicatedException) => any;
}
/**
 * <p>The service is temporarily unavailable.</p>
 */
export interface TemporarilyUnavailableException extends __SmithyException, $MetadataBearer {
    name: "TemporarilyUnavailableException";
    $fault: "server";
}
export declare namespace TemporarilyUnavailableException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TemporarilyUnavailableException) => any;
}
export interface DeleteAppRequest {
    /**
     * <p>The ID of the application.</p>
     */
    appId?: string;
    /**
     * <p>Indicates whether to stop all replication jobs corresponding to the servers
     *             in the application while deleting the application.</p>
     */
    forceStopAppReplication?: boolean;
    /**
     * <p>Indicates whether to terminate the stack corresponding to the
     *             application while deleting the application.</p>
     */
    forceTerminateApp?: boolean;
}
export declare namespace DeleteAppRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteAppRequest) => any;
}
export interface DeleteAppResponse {
}
export declare namespace DeleteAppResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteAppResponse) => any;
}
export interface DeleteAppLaunchConfigurationRequest {
    /**
     * <p>The ID of the application.</p>
     */
    appId?: string;
}
export declare namespace DeleteAppLaunchConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteAppLaunchConfigurationRequest) => any;
}
export interface DeleteAppLaunchConfigurationResponse {
}
export declare namespace DeleteAppLaunchConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteAppLaunchConfigurationResponse) => any;
}
export interface DeleteAppReplicationConfigurationRequest {
    /**
     * <p>The ID of the application.</p>
     */
    appId?: string;
}
export declare namespace DeleteAppReplicationConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteAppReplicationConfigurationRequest) => any;
}
export interface DeleteAppReplicationConfigurationResponse {
}
export declare namespace DeleteAppReplicationConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteAppReplicationConfigurationResponse) => any;
}
export interface DeleteAppValidationConfigurationRequest {
    /**
     * <p>The ID of the application.</p>
     */
    appId: string | undefined;
}
export declare namespace DeleteAppValidationConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteAppValidationConfigurationRequest) => any;
}
export interface DeleteAppValidationConfigurationResponse {
}
export declare namespace DeleteAppValidationConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteAppValidationConfigurationResponse) => any;
}
export interface DeleteReplicationJobRequest {
    /**
     * <p>The ID of the replication job.</p>
     */
    replicationJobId: string | undefined;
}
export declare namespace DeleteReplicationJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteReplicationJobRequest) => any;
}
export interface DeleteReplicationJobResponse {
}
export declare namespace DeleteReplicationJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteReplicationJobResponse) => any;
}
/**
 * <p>The specified replication job does not exist.</p>
 */
export interface ReplicationJobNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ReplicationJobNotFoundException";
    $fault: "client";
    message?: string;
}
export declare namespace ReplicationJobNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ReplicationJobNotFoundException) => any;
}
export interface DeleteServerCatalogRequest {
}
export declare namespace DeleteServerCatalogRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteServerCatalogRequest) => any;
}
export interface DeleteServerCatalogResponse {
}
export declare namespace DeleteServerCatalogResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteServerCatalogResponse) => any;
}
export interface DisassociateConnectorRequest {
    /**
     * <p>The ID of the connector.</p>
     */
    connectorId: string | undefined;
}
export declare namespace DisassociateConnectorRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateConnectorRequest) => any;
}
export interface DisassociateConnectorResponse {
}
export declare namespace DisassociateConnectorResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateConnectorResponse) => any;
}
export declare enum OutputFormat {
    JSON = "JSON",
    YAML = "YAML"
}
export interface GenerateChangeSetRequest {
    /**
     * <p>The ID of the application associated with the change set.</p>
     */
    appId?: string;
    /**
     * <p>The format for the change set.</p>
     */
    changesetFormat?: OutputFormat | string;
}
export declare namespace GenerateChangeSetRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GenerateChangeSetRequest) => any;
}
export interface GenerateChangeSetResponse {
    /**
     * <p>The location of the Amazon S3 object.</p>
     */
    s3Location?: S3Location;
}
export declare namespace GenerateChangeSetResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GenerateChangeSetResponse) => any;
}
export interface GenerateTemplateRequest {
    /**
     * <p>The ID of the application associated with the AWS CloudFormation template.</p>
     */
    appId?: string;
    /**
     * <p>The format for generating the AWS CloudFormation template.</p>
     */
    templateFormat?: OutputFormat | string;
}
export declare namespace GenerateTemplateRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GenerateTemplateRequest) => any;
}
export interface GenerateTemplateResponse {
    /**
     * <p>The location of the Amazon S3 object.</p>
     */
    s3Location?: S3Location;
}
export declare namespace GenerateTemplateResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GenerateTemplateResponse) => any;
}
export interface GetAppRequest {
    /**
     * <p>The ID of the application.</p>
     */
    appId?: string;
}
export declare namespace GetAppRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAppRequest) => any;
}
export interface GetAppResponse {
    /**
     * <p>Information about the application.</p>
     */
    appSummary?: AppSummary;
    /**
     * <p>The server groups that belong to the application.</p>
     */
    serverGroups?: ServerGroup[];
    /**
     * <p>The tags associated with the application.</p>
     */
    tags?: Tag[];
}
export declare namespace GetAppResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAppResponse) => any;
}
export interface GetAppLaunchConfigurationRequest {
    /**
     * <p>The ID of the application.</p>
     */
    appId?: string;
}
export declare namespace GetAppLaunchConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAppLaunchConfigurationRequest) => any;
}
/**
 * <p>A script that runs on first launch of an Amazon EC2 instance. Used for configuring the
 *             server during launch.</p>
 */
export interface UserData {
    /**
     * <p>Amazon S3 location of the user-data script.</p>
     */
    s3Location?: S3Location;
}
export declare namespace UserData {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UserData) => any;
}
/**
 * <p>Launch configuration for a server.</p>
 */
export interface ServerLaunchConfiguration {
    /**
     * <p>The ID of the server with which the launch configuration is associated.</p>
     */
    server?: Server;
    /**
     * <p>The logical ID of the server in the AWS CloudFormation template.</p>
     */
    logicalId?: string;
    /**
     * <p>The ID of the VPC into which the server should be launched.</p>
     */
    vpc?: string;
    /**
     * <p>The ID of the subnet the server should be launched into.</p>
     */
    subnet?: string;
    /**
     * <p>The ID of the security group that applies to the launched server.</p>
     */
    securityGroup?: string;
    /**
     * <p>The name of the Amazon EC2 SSH key to be used for connecting to the launched server.</p>
     */
    ec2KeyName?: string;
    /**
     * <p>Location of the user-data script to be executed when launching the server.</p>
     */
    userData?: UserData;
    /**
     * <p>The instance type to use when launching the server.</p>
     */
    instanceType?: string;
    /**
     * <p>Indicates whether a publicly accessible IP address is created when launching the server.</p>
     */
    associatePublicIpAddress?: boolean;
    /**
     * <p>The name of the IAM instance profile.</p>
     */
    iamInstanceProfileName?: string;
    /**
     * <p>Location of an Amazon S3 object.</p>
     */
    configureScript?: S3Location;
    /**
     * <p>The type of configuration script.</p>
     */
    configureScriptType?: ScriptType | string;
}
export declare namespace ServerLaunchConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServerLaunchConfiguration) => any;
}
/**
 * <p>Launch configuration for a server group.</p>
 */
export interface ServerGroupLaunchConfiguration {
    /**
     * <p>The ID of the server group with which the launch configuration is
     *             associated.</p>
     */
    serverGroupId?: string;
    /**
     * <p>The launch order of servers in the server group.</p>
     */
    launchOrder?: number;
    /**
     * <p>The launch configuration for servers in the server group.</p>
     */
    serverLaunchConfigurations?: ServerLaunchConfiguration[];
}
export declare namespace ServerGroupLaunchConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServerGroupLaunchConfiguration) => any;
}
export interface GetAppLaunchConfigurationResponse {
    /**
     * <p>The ID of the application.</p>
     */
    appId?: string;
    /**
     * <p>The name of the service role in the customer's account that AWS CloudFormation uses to launch the
     *             application.</p>
     */
    roleName?: string;
    /**
     * <p>Indicates whether the application is configured to launch automatically after replication is complete.</p>
     */
    autoLaunch?: boolean;
    /**
     * <p>The launch configurations for server groups in this application.</p>
     */
    serverGroupLaunchConfigurations?: ServerGroupLaunchConfiguration[];
}
export declare namespace GetAppLaunchConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAppLaunchConfigurationResponse) => any;
}
export interface GetAppReplicationConfigurationRequest {
    /**
     * <p>The ID of the application.</p>
     */
    appId?: string;
}
export declare namespace GetAppReplicationConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAppReplicationConfigurationRequest) => any;
}
/**
 * <p>The replication parameters for replicating a server.</p>
 */
export interface ServerReplicationParameters {
    /**
     * <p>The seed time for creating a replication job for the server.</p>
     */
    seedTime?: Date;
    /**
     * <p>The frequency of creating replication jobs for the server.</p>
     */
    frequency?: number;
    /**
     * <p>Indicates whether to run the replication job one time.</p>
     */
    runOnce?: boolean;
    /**
     * <p>The license type for creating a replication job for the server.</p>
     */
    licenseType?: LicenseType | string;
    /**
     * <p>The number of recent AMIs to keep when creating a replication job for this server.</p>
     */
    numberOfRecentAmisToKeep?: number;
    /**
     * <p>Indicates whether the replication job produces encrypted AMIs.</p>
     */
    encrypted?: boolean;
    /**
     * <p>The ID of the KMS key for replication jobs that produce encrypted AMIs.
     *             This value can be any of the following:</p>
     *         <ul>
     *             <li>
     *                 <p>KMS key ID</p>
     *             </li>
     *             <li>
     *                 <p>KMS key alias</p>
     *             </li>
     *             <li>
     *                 <p>ARN referring to the KMS key ID</p>
     *             </li>
     *             <li>
     *                 <p>ARN referring to the KMS key alias</p>
     *             </li>
     *          </ul>
     *         <p>If encrypted is enabled but a KMS key ID is not specified, the
     *             customer's default KMS key for Amazon EBS is used.</p>
     */
    kmsKeyId?: string;
}
export declare namespace ServerReplicationParameters {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServerReplicationParameters) => any;
}
/**
 * <p>Replication configuration of a server.</p>
 */
export interface ServerReplicationConfiguration {
    /**
     * <p>The ID of the server with which this replication configuration is
     *             associated.</p>
     */
    server?: Server;
    /**
     * <p>The parameters for replicating the server.</p>
     */
    serverReplicationParameters?: ServerReplicationParameters;
}
export declare namespace ServerReplicationConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServerReplicationConfiguration) => any;
}
/**
 * <p>Replication configuration for a server group.</p>
 */
export interface ServerGroupReplicationConfiguration {
    /**
     * <p>The ID of the server group with which this replication configuration is
     *             associated.</p>
     */
    serverGroupId?: string;
    /**
     * <p>The replication configuration for servers in the server group.</p>
     */
    serverReplicationConfigurations?: ServerReplicationConfiguration[];
}
export declare namespace ServerGroupReplicationConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServerGroupReplicationConfiguration) => any;
}
export interface GetAppReplicationConfigurationResponse {
    /**
     * <p>The replication configurations associated with server groups in this application.</p>
     */
    serverGroupReplicationConfigurations?: ServerGroupReplicationConfiguration[];
}
export declare namespace GetAppReplicationConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAppReplicationConfigurationResponse) => any;
}
export interface GetAppValidationConfigurationRequest {
    /**
     * <p>The ID of the application.</p>
     */
    appId: string | undefined;
}
export declare namespace GetAppValidationConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAppValidationConfigurationRequest) => any;
}
export declare enum ServerValidationStrategy {
    USERDATA = "USERDATA"
}
/**
 * <p>Contains validation parameters.</p>
 */
export interface UserDataValidationParameters {
    /**
     * <p>The location of the validation script.</p>
     */
    source?: Source;
    /**
     * <p>The type of validation script.</p>
     */
    scriptType?: ScriptType | string;
}
export declare namespace UserDataValidationParameters {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UserDataValidationParameters) => any;
}
/**
 * <p>Configuration for validating an instance.</p>
 */
export interface ServerValidationConfiguration {
    /**
     * <p>Represents a server.</p>
     */
    server?: Server;
    /**
     * <p>The ID of the validation.</p>
     */
    validationId?: string;
    /**
     * <p>The name of the configuration.</p>
     */
    name?: string;
    /**
     * <p>The validation strategy.</p>
     */
    serverValidationStrategy?: ServerValidationStrategy | string;
    /**
     * <p>The validation parameters.</p>
     */
    userDataValidationParameters?: UserDataValidationParameters;
}
export declare namespace ServerValidationConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServerValidationConfiguration) => any;
}
/**
 * <p>Configuration for validating an instance.</p>
 */
export interface ServerGroupValidationConfiguration {
    /**
     * <p>The ID of the server group.</p>
     */
    serverGroupId?: string;
    /**
     * <p>The validation configuration.</p>
     */
    serverValidationConfigurations?: ServerValidationConfiguration[];
}
export declare namespace ServerGroupValidationConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServerGroupValidationConfiguration) => any;
}
export interface GetAppValidationConfigurationResponse {
    /**
     * <p>The configuration for application validation.</p>
     */
    appValidationConfigurations?: AppValidationConfiguration[];
    /**
     * <p>The configuration for instance validation.</p>
     */
    serverGroupValidationConfigurations?: ServerGroupValidationConfiguration[];
}
export declare namespace GetAppValidationConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAppValidationConfigurationResponse) => any;
}
export interface GetAppValidationOutputRequest {
    /**
     * <p>The ID of the application.</p>
     */
    appId: string | undefined;
}
export declare namespace GetAppValidationOutputRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAppValidationOutputRequest) => any;
}
/**
 * <p>Contains output from validating an instance.</p>
 */
export interface ServerValidationOutput {
    /**
     * <p>Represents a server.</p>
     */
    server?: Server;
}
export declare namespace ServerValidationOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ServerValidationOutput) => any;
}
export declare enum ValidationStatus {
    Failed = "FAILED",
    InProgress = "IN_PROGRESS",
    Pending = "PENDING",
    ReadyForValidation = "READY_FOR_VALIDATION",
    Succeeded = "SUCCEEDED"
}
/**
 * <p>Contains validation output.</p>
 */
export interface ValidationOutput {
    /**
     * <p>The ID of the validation.</p>
     */
    validationId?: string;
    /**
     * <p>The name of the validation.</p>
     */
    name?: string;
    /**
     * <p>The status of the validation.</p>
     */
    status?: ValidationStatus | string;
    /**
     * <p>The status message.</p>
     */
    statusMessage?: string;
    /**
     * <p>The latest time that the validation was performed.</p>
     */
    latestValidationTime?: Date;
    /**
     * <p>The output from validating an application.</p>
     */
    appValidationOutput?: AppValidationOutput;
    /**
     * <p>The output from validation an instance.</p>
     */
    serverValidationOutput?: ServerValidationOutput;
}
export declare namespace ValidationOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationOutput) => any;
}
export interface GetAppValidationOutputResponse {
    /**
     * <p>The validation output.</p>
     */
    validationOutputList?: ValidationOutput[];
}
export declare namespace GetAppValidationOutputResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAppValidationOutputResponse) => any;
}
export interface GetConnectorsRequest {
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return in a single call. The default value is 50.
     *             To retrieve the remaining results, make another call with the returned
     *                 <code>NextToken</code> value.</p>
     */
    maxResults?: number;
}
export declare namespace GetConnectorsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetConnectorsRequest) => any;
}
export declare enum ConnectorCapability {
    hyperVManager = "HYPERV-MANAGER",
    scvmm = "SCVMM",
    smsOptimized = "SMS_OPTIMIZED",
    snapshotBatching = "SNAPSHOT_BATCHING",
    vSphere = "VSPHERE"
}
export declare enum ConnectorStatus {
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY"
}
/**
 * <p>Represents a connector.</p>
 */
export interface Connector {
    /**
     * <p>The ID of the connector.</p>
     */
    connectorId?: string;
    /**
     * <p>The connector version.</p>
     */
    version?: string;
    /**
     * <p>The status of the connector.</p>
     */
    status?: ConnectorStatus | string;
    /**
     * <p>The capabilities of the connector.</p>
     */
    capabilityList?: (ConnectorCapability | string)[];
    /**
     * <p>The name of the VM manager.</p>
     */
    vmManagerName?: string;
    /**
     * <p>The VM management product.</p>
     */
    vmManagerType?: VmManagerType | string;
    /**
     * <p>The ID of the VM manager.</p>
     */
    vmManagerId?: string;
    /**
     * <p>The IP address of the connector.</p>
     */
    ipAddress?: string;
    /**
     * <p>The MAC address of the connector.</p>
     */
    macAddress?: string;
    /**
     * <p>The time the connector was associated.</p>
     */
    associatedOn?: Date;
}
export declare namespace Connector {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Connector) => any;
}
export interface GetConnectorsResponse {
    /**
     * <p>Information about the registered connectors.</p>
     */
    connectorList?: Connector[];
    /**
     * <p>The token required to retrieve the next set of results. This value is null when
     *             there are no more results to return.</p>
     */
    nextToken?: string;
}
export declare namespace GetConnectorsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetConnectorsResponse) => any;
}
export interface GetReplicationJobsRequest {
    /**
     * <p>The ID of the replication job.</p>
     */
    replicationJobId?: string;
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return in a single call. The default value is 50.
     *             To retrieve the remaining results, make another call with the returned
     *                 <code>NextToken</code> value.</p>
     */
    maxResults?: number;
}
export declare namespace GetReplicationJobsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetReplicationJobsRequest) => any;
}
/**
 * <p>Details of the current stage of a replication run.</p>
 */
export interface ReplicationRunStageDetails {
    /**
     * <p>The current stage of a replication run.</p>
     */
    stage?: string;
    /**
     * <p>The progress of the current stage of a replication run.</p>
     */
    stageProgress?: string;
}
export declare namespace ReplicationRunStageDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ReplicationRunStageDetails) => any;
}
export declare enum ReplicationRunState {
    Active = "ACTIVE",
    Completed = "COMPLETED",
    Deleted = "DELETED",
    Deleting = "DELETING",
    Failed = "FAILED",
    Missed = "MISSED",
    Pending = "PENDING"
}
export declare enum ReplicationRunType {
    Automatic = "AUTOMATIC",
    OnDemand = "ON_DEMAND"
}
/**
 * <p>Represents a replication run.</p>
 */
export interface ReplicationRun {
    /**
     * <p>The ID of the replication run.</p>
     */
    replicationRunId?: string;
    /**
     * <p>The state of the replication run.</p>
     */
    state?: ReplicationRunState | string;
    /**
     * <p>The type of replication run.</p>
     */
    type?: ReplicationRunType | string;
    /**
     * <p>Details about the current stage of the replication run.</p>
     */
    stageDetails?: ReplicationRunStageDetails;
    /**
     * <p>The description of the current status of the replication job.</p>
     */
    statusMessage?: string;
    /**
     * <p>The ID of the Amazon Machine Image (AMI) from the replication
     *             run.</p>
     */
    amiId?: string;
    /**
     * <p>The start time of the next replication run.</p>
     */
    scheduledStartTime?: Date;
    /**
     * <p>The completion time of the last replication run.</p>
     */
    completedTime?: Date;
    /**
     * <p>The description of the replication run.</p>
     */
    description?: string;
    /**
     * <p>Indicates whether the replication run should produce an encrypted AMI.</p>
     */
    encrypted?: boolean;
    /**
     * <p>The ID of the KMS key for replication jobs that produce encrypted AMIs.
     *             This value can be any of the following:</p>
     *         <ul>
     *             <li>
     *                 <p>KMS key ID</p>
     *             </li>
     *             <li>
     *                 <p>KMS key alias</p>
     *             </li>
     *             <li>
     *                 <p>ARN referring to the KMS key ID</p>
     *             </li>
     *             <li>
     *                 <p>ARN referring to the KMS key alias</p>
     *             </li>
     *          </ul>
     *         <p> If encrypted is <i>true</i> but a KMS key ID is not specified, the
     *             customer's default KMS key for Amazon EBS is used. </p>
     */
    kmsKeyId?: string;
}
export declare namespace ReplicationRun {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ReplicationRun) => any;
}
export declare enum ReplicationJobState {
    Active = "ACTIVE",
    Completed = "COMPLETED",
    Deleted = "DELETED",
    Deleting = "DELETING",
    Failed = "FAILED",
    Failing = "FAILING",
    PausedOnFailure = "PAUSED_ON_FAILURE",
    Pending = "PENDING"
}
/**
 * <p>Represents a replication job.</p>
 */
export interface ReplicationJob {
    /**
     * <p>The ID of the replication job.</p>
     */
    replicationJobId?: string;
    /**
     * <p>The ID of the server.</p>
     */
    serverId?: string;
    /**
     * <p>The type of server.</p>
     */
    serverType?: ServerType | string;
    /**
     * <p>Information about the VM server.</p>
     */
    vmServer?: VmServer;
    /**
     * <p>The seed replication time.</p>
     */
    seedReplicationTime?: Date;
    /**
     * <p>The time between consecutive replication runs, in hours.</p>
     */
    frequency?: number;
    /**
     * <p>Indicates whether to run the replication job one time.</p>
     */
    runOnce?: boolean;
    /**
     * <p>The start time of the next replication run.</p>
     */
    nextReplicationRunStartTime?: Date;
    /**
     * <p>The license type to be used for the AMI created by a successful replication
     *             run.</p>
     */
    licenseType?: LicenseType | string;
    /**
     * <p>The name of the IAM role to be used by AWS SMS.</p>
     */
    roleName?: string;
    /**
     * <p>The ID of the latest Amazon Machine Image (AMI).</p>
     */
    latestAmiId?: string;
    /**
     * <p>The state of the replication job.</p>
     */
    state?: ReplicationJobState | string;
    /**
     * <p>The description of the current status of the replication job.</p>
     */
    statusMessage?: string;
    /**
     * <p>The description of the replication job.</p>
     */
    description?: string;
    /**
     * <p>The number of recent AMIs to keep in the customer's account for a replication job. By
     *             default, the value is set to zero, meaning that all AMIs are kept.</p>
     */
    numberOfRecentAmisToKeep?: number;
    /**
     * <p>Indicates whether the replication job should produce encrypted AMIs.</p>
     */
    encrypted?: boolean;
    /**
     * <p>The ID of the KMS key for replication jobs that produce encrypted AMIs.
     *             This value can be any of the following: </p>
     *         <ul>
     *             <li>
     *                 <p>KMS key ID</p>
     *             </li>
     *             <li>
     *                 <p>KMS key alias</p>
     *             </li>
     *             <li>
     *                 <p>ARN referring to the KMS key ID</p>
     *             </li>
     *             <li>
     *                 <p>ARN referring to the KMS key alias</p>
     *             </li>
     *          </ul>
     *         <p>If encrypted is enabled but a KMS key ID is not specified, the
     *             customer's default KMS key for Amazon EBS is used.</p>
     */
    kmsKeyId?: string;
    /**
     * <p>Information about the replication runs.</p>
     */
    replicationRunList?: ReplicationRun[];
}
export declare namespace ReplicationJob {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ReplicationJob) => any;
}
export interface GetReplicationJobsResponse {
    /**
     * <p>Information about the replication jobs.</p>
     */
    replicationJobList?: ReplicationJob[];
    /**
     * <p>The token required to retrieve the next set of results. This value is null when
     *             there are no more results to return.</p>
     */
    nextToken?: string;
}
export declare namespace GetReplicationJobsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetReplicationJobsResponse) => any;
}
export interface GetReplicationRunsRequest {
    /**
     * <p>The ID of the replication job.</p>
     */
    replicationJobId: string | undefined;
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return in a single call. The default value is 50.
     *             To retrieve the remaining results, make another call with the returned
     *                 <code>NextToken</code> value.</p>
     */
    maxResults?: number;
}
export declare namespace GetReplicationRunsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetReplicationRunsRequest) => any;
}
export interface GetReplicationRunsResponse {
    /**
     * <p>Information about the replication job.</p>
     */
    replicationJob?: ReplicationJob;
    /**
     * <p>Information about the replication runs.</p>
     */
    replicationRunList?: ReplicationRun[];
    /**
     * <p>The token required to retrieve the next set of results. This value is null when
     *             there are no more results to return.</p>
     */
    nextToken?: string;
}
export declare namespace GetReplicationRunsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetReplicationRunsResponse) => any;
}
export interface GetServersRequest {
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return in a single call. The default value is 50.
     *             To retrieve the remaining results, make another call with the returned
     *                 <code>NextToken</code> value.</p>
     */
    maxResults?: number;
    /**
     * <p>The server addresses.</p>
     */
    vmServerAddressList?: VmServerAddress[];
}
export declare namespace GetServersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetServersRequest) => any;
}
export declare enum ServerCatalogStatus {
    Available = "AVAILABLE",
    Deleted = "DELETED",
    Expired = "EXPIRED",
    Importing = "IMPORTING",
    NotImported = "NOT_IMPORTED"
}
export interface GetServersResponse {
    /**
     * <p>The time when the server was last modified.</p>
     */
    lastModifiedOn?: Date;
    /**
     * <p>The status of the server catalog.</p>
     */
    serverCatalogStatus?: ServerCatalogStatus | string;
    /**
     * <p>Information about the servers.</p>
     */
    serverList?: Server[];
    /**
     * <p>The token required to retrieve the next set of results. This value is null when
     *             there are no more results to return.</p>
     */
    nextToken?: string;
}
export declare namespace GetServersResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetServersResponse) => any;
}
export interface ImportAppCatalogRequest {
    /**
     * <p>The name of the service role. If you omit this parameter, we create a service-linked role
     *             for AWS Migration Hub in your account. Otherwise, the role that you provide must have the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/new-customer-setup.html#sms-managed">policy
     *             and trust policy</a> described in the <i>AWS Migration Hub User Guide</i>.</p>
     */
    roleName?: string;
}
export declare namespace ImportAppCatalogRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImportAppCatalogRequest) => any;
}
export interface ImportAppCatalogResponse {
}
export declare namespace ImportAppCatalogResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImportAppCatalogResponse) => any;
}
export interface ImportServerCatalogRequest {
}
export declare namespace ImportServerCatalogRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImportServerCatalogRequest) => any;
}
export interface ImportServerCatalogResponse {
}
export declare namespace ImportServerCatalogResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ImportServerCatalogResponse) => any;
}
export interface LaunchAppRequest {
    /**
     * <p>The ID of the application.</p>
     */
    appId?: string;
}
export declare namespace LaunchAppRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LaunchAppRequest) => any;
}
export interface LaunchAppResponse {
}
export declare namespace LaunchAppResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LaunchAppResponse) => any;
}
export interface ListAppsRequest {
    /**
     * <p>The unique application IDs.</p>
     */
    appIds?: string[];
    /**
     * <p>The token for the next set of results.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return in a single call. The default value is 100. To
     *             retrieve the remaining results, make another call with the returned
     *                 <code>NextToken</code> value. </p>
     */
    maxResults?: number;
}
export declare namespace ListAppsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAppsRequest) => any;
}
export interface ListAppsResponse {
    /**
     * <p>The application summaries.</p>
     */
    apps?: AppSummary[];
    /**
     * <p>The token required to retrieve the next set of results. This value is null when there
     *             are no more results to return.</p>
     */
    nextToken?: string;
}
export declare namespace ListAppsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListAppsResponse) => any;
}
/**
 * <p>Contains the status of validating an application.</p>
 */
export interface NotificationContext {
    /**
     * <p>The ID of the validation.</p>
     */
    validationId?: string;
    /**
     * <p>The status of the validation.</p>
     */
    status?: ValidationStatus | string;
    /**
     * <p>The status message.</p>
     */
    statusMessage?: string;
}
export declare namespace NotificationContext {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NotificationContext) => any;
}
export interface NotifyAppValidationOutputRequest {
    /**
     * <p>The ID of the application.</p>
     */
    appId: string | undefined;
    /**
     * <p>The notification information.</p>
     */
    notificationContext?: NotificationContext;
}
export declare namespace NotifyAppValidationOutputRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NotifyAppValidationOutputRequest) => any;
}
export interface NotifyAppValidationOutputResponse {
}
export declare namespace NotifyAppValidationOutputResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NotifyAppValidationOutputResponse) => any;
}
export interface PutAppLaunchConfigurationRequest {
    /**
     * <p>The ID of the application.</p>
     */
    appId?: string;
    /**
     * <p>The name of service role in the customer's account that AWS CloudFormation uses to launch the
     *             application.</p>
     */
    roleName?: string;
    /**
     * <p>Indicates whether the application is configured to launch automatically after replication is complete.</p>
     */
    autoLaunch?: boolean;
    /**
     * <p>Information about the launch configurations for server groups in the application.</p>
     */
    serverGroupLaunchConfigurations?: ServerGroupLaunchConfiguration[];
}
export declare namespace PutAppLaunchConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutAppLaunchConfigurationRequest) => any;
}
export interface PutAppLaunchConfigurationResponse {
}
export declare namespace PutAppLaunchConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutAppLaunchConfigurationResponse) => any;
}
export interface PutAppReplicationConfigurationRequest {
    /**
     * <p>The ID of the application.</p>
     */
    appId?: string;
    /**
     * <p>Information about the replication configurations for server groups in the application.</p>
     */
    serverGroupReplicationConfigurations?: ServerGroupReplicationConfiguration[];
}
export declare namespace PutAppReplicationConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutAppReplicationConfigurationRequest) => any;
}
export interface PutAppReplicationConfigurationResponse {
}
export declare namespace PutAppReplicationConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutAppReplicationConfigurationResponse) => any;
}
export interface PutAppValidationConfigurationRequest {
    /**
     * <p>The ID of the application.</p>
     */
    appId: string | undefined;
    /**
     * <p>The configuration for application validation.</p>
     */
    appValidationConfigurations?: AppValidationConfiguration[];
    /**
     * <p>The configuration for instance validation.</p>
     */
    serverGroupValidationConfigurations?: ServerGroupValidationConfiguration[];
}
export declare namespace PutAppValidationConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutAppValidationConfigurationRequest) => any;
}
export interface PutAppValidationConfigurationResponse {
}
export declare namespace PutAppValidationConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutAppValidationConfigurationResponse) => any;
}
export interface StartAppReplicationRequest {
    /**
     * <p>The ID of the application.</p>
     */
    appId?: string;
}
export declare namespace StartAppReplicationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartAppReplicationRequest) => any;
}
export interface StartAppReplicationResponse {
}
export declare namespace StartAppReplicationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartAppReplicationResponse) => any;
}
export interface StartOnDemandAppReplicationRequest {
    /**
     * <p>The ID of the application.</p>
     */
    appId: string | undefined;
    /**
     * <p>The description of the replication run.</p>
     */
    description?: string;
}
export declare namespace StartOnDemandAppReplicationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartOnDemandAppReplicationRequest) => any;
}
export interface StartOnDemandAppReplicationResponse {
}
export declare namespace StartOnDemandAppReplicationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartOnDemandAppReplicationResponse) => any;
}
/**
 * <p>The user has the required permissions, so the request would have succeeded,
 *             but a dry run was performed.</p>
 */
export interface DryRunOperationException extends __SmithyException, $MetadataBearer {
    name: "DryRunOperationException";
    $fault: "client";
    message?: string;
}
export declare namespace DryRunOperationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DryRunOperationException) => any;
}
/**
 * <p>You have exceeded the number of on-demand replication runs you can request in a
 *             24-hour period.</p>
 */
export interface ReplicationRunLimitExceededException extends __SmithyException, $MetadataBearer {
    name: "ReplicationRunLimitExceededException";
    $fault: "client";
    message?: string;
}
export declare namespace ReplicationRunLimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ReplicationRunLimitExceededException) => any;
}
export interface StartOnDemandReplicationRunRequest {
    /**
     * <p>The ID of the replication job.</p>
     */
    replicationJobId: string | undefined;
    /**
     * <p>The description of the replication run.</p>
     */
    description?: string;
}
export declare namespace StartOnDemandReplicationRunRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartOnDemandReplicationRunRequest) => any;
}
export interface StartOnDemandReplicationRunResponse {
    /**
     * <p>The ID of the replication run.</p>
     */
    replicationRunId?: string;
}
export declare namespace StartOnDemandReplicationRunResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartOnDemandReplicationRunResponse) => any;
}
export interface StopAppReplicationRequest {
    /**
     * <p>The ID of the application.</p>
     */
    appId?: string;
}
export declare namespace StopAppReplicationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopAppReplicationRequest) => any;
}
export interface StopAppReplicationResponse {
}
export declare namespace StopAppReplicationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopAppReplicationResponse) => any;
}
export interface TerminateAppRequest {
    /**
     * <p>The ID of the application.</p>
     */
    appId?: string;
}
export declare namespace TerminateAppRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TerminateAppRequest) => any;
}
export interface TerminateAppResponse {
}
export declare namespace TerminateAppResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TerminateAppResponse) => any;
}
export interface UpdateAppRequest {
    /**
     * <p>The ID of the application.</p>
     */
    appId?: string;
    /**
     * <p>The new name of the application.</p>
     */
    name?: string;
    /**
     * <p>The new description of the application.</p>
     */
    description?: string;
    /**
     * <p>The name of the service role in the customer's account used by AWS SMS.</p>
     */
    roleName?: string;
    /**
     * <p>The server groups in the application to update.</p>
     */
    serverGroups?: ServerGroup[];
    /**
     * <p>The tags to associate with the application.</p>
     */
    tags?: Tag[];
}
export declare namespace UpdateAppRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateAppRequest) => any;
}
export interface UpdateAppResponse {
    /**
     * <p>A summary description of the application.</p>
     */
    appSummary?: AppSummary;
    /**
     * <p>The updated server groups in the application.</p>
     */
    serverGroups?: ServerGroup[];
    /**
     * <p>The tags associated with the application.</p>
     */
    tags?: Tag[];
}
export declare namespace UpdateAppResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateAppResponse) => any;
}
export interface UpdateReplicationJobRequest {
    /**
     * <p>The ID of the replication job.</p>
     */
    replicationJobId: string | undefined;
    /**
     * <p>The time between consecutive replication runs, in hours.</p>
     */
    frequency?: number;
    /**
     * <p>The start time of the next replication run.</p>
     */
    nextReplicationRunStartTime?: Date;
    /**
     * <p>The license type to be used for the AMI created by a successful replication
     *             run.</p>
     */
    licenseType?: LicenseType | string;
    /**
     * <p>The name of the IAM role to be used by AWS SMS.</p>
     */
    roleName?: string;
    /**
     * <p>The description of the replication job.</p>
     */
    description?: string;
    /**
     * <p>The maximum number of SMS-created AMIs to retain. The oldest is deleted after the
     *             maximum number is reached and a new AMI is created.</p>
     */
    numberOfRecentAmisToKeep?: number;
    /**
     * <p>When true, the replication job produces encrypted AMIs. For more information,
     *                 <code>KmsKeyId</code>.</p>
     */
    encrypted?: boolean;
    /**
     * <p>The ID of the KMS key for replication jobs that produce encrypted AMIs.
     *             This value can be any of the following:</p>
     *         <ul>
     *             <li>
     *                 <p>KMS key ID</p>
     *             </li>
     *             <li>
     *                 <p>KMS key alias</p>
     *             </li>
     *             <li>
     *                 <p>ARN referring to the KMS key ID</p>
     *             </li>
     *             <li>
     *                 <p>ARN referring to the KMS key alias</p>
     *             </li>
     *          </ul>
     *         <p>If encrypted is enabled but a KMS key ID is not specified, the
     *             customer's default KMS key for Amazon EBS is used.</p>
     */
    kmsKeyId?: string;
}
export declare namespace UpdateReplicationJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateReplicationJobRequest) => any;
}
export interface UpdateReplicationJobResponse {
}
export declare namespace UpdateReplicationJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateReplicationJobResponse) => any;
}
