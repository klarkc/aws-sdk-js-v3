import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * Information about a Greengrass core's connectivity.
 */
export interface ConnectivityInfo {
    /**
     * The endpoint for the Greengrass core. Can be an IP address or DNS.
     */
    HostAddress?: string;
    /**
     * The ID of the connectivity information.
     */
    Id?: string;
    /**
     * Metadata for this endpoint.
     */
    Metadata?: string;
    /**
     * The port of the Greengrass core. Usually 8883.
     */
    PortNumber?: number;
}
export declare namespace ConnectivityInfo {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConnectivityInfo) => any;
}
/**
 * Information about a connector. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
 */
export interface Connector {
    /**
     * The ARN of the connector.
     */
    ConnectorArn: string | undefined;
    /**
     * A descriptive or arbitrary ID for the connector. This value must be unique within the connector definition version. Max length is 128 characters with pattern [a-zA-Z0-9:_-]+.
     */
    Id: string | undefined;
    /**
     * The parameters or configuration that the connector uses.
     */
    Parameters?: {
        [key: string]: string;
    };
}
export declare namespace Connector {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Connector) => any;
}
/**
 * Information about a core.
 */
export interface Core {
    /**
     * The ARN of the certificate associated with the core.
     */
    CertificateArn: string | undefined;
    /**
     * A descriptive or arbitrary ID for the core. This value must be unique within the core definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
     */
    Id: string | undefined;
    /**
     * If true, the core's local shadow is automatically synced with the cloud.
     */
    SyncShadow?: boolean;
    /**
     * The ARN of the thing which is the core.
     */
    ThingArn: string | undefined;
}
export declare namespace Core {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Core) => any;
}
/**
 * Information about a definition.
 */
export interface DefinitionInformation {
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
    /**
     * Tag(s) attached to the resource arn.
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace DefinitionInformation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DefinitionInformation) => any;
}
/**
 * Information about a device.
 */
export interface Device {
    /**
     * The ARN of the certificate associated with the device.
     */
    CertificateArn: string | undefined;
    /**
     * A descriptive or arbitrary ID for the device. This value must be unique within the device definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
     */
    Id: string | undefined;
    /**
     * If true, the device's local shadow will be automatically synced with the cloud.
     */
    SyncShadow?: boolean;
    /**
     * The thing ARN of the device.
     */
    ThingArn: string | undefined;
}
export declare namespace Device {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Device) => any;
}
export declare enum EncodingType {
    binary = "binary",
    json = "json"
}
export declare enum FunctionIsolationMode {
    GreengrassContainer = "GreengrassContainer",
    NoContainer = "NoContainer"
}
/**
 * Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
 */
export interface FunctionRunAsConfig {
    /**
     * The group ID whose permissions are used to run a Lambda function.
     */
    Gid?: number;
    /**
     * The user ID whose permissions are used to run a Lambda function.
     */
    Uid?: number;
}
export declare namespace FunctionRunAsConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FunctionRunAsConfig) => any;
}
/**
 * Configuration information that specifies how a Lambda function runs.
 */
export interface FunctionExecutionConfig {
    /**
     * Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group.
     */
    IsolationMode?: FunctionIsolationMode | string;
    /**
     * Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
     */
    RunAs?: FunctionRunAsConfig;
}
export declare namespace FunctionExecutionConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FunctionExecutionConfig) => any;
}
export declare enum Permission {
    ro = "ro",
    rw = "rw"
}
/**
 * A policy used by the function to access a resource.
 */
export interface ResourceAccessPolicy {
    /**
     * The permissions that the Lambda function has to the resource. Can be one of ''rw'' (read/write) or ''ro'' (read-only).
     */
    Permission?: Permission | string;
    /**
     * The ID of the resource. (This ID is assigned to the resource when you create the resource definiton.)
     */
    ResourceId: string | undefined;
}
export declare namespace ResourceAccessPolicy {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceAccessPolicy) => any;
}
/**
 * The environment configuration of the function.
 */
export interface FunctionConfigurationEnvironment {
    /**
     * If true, the Lambda function is allowed to access the host's /sys folder. Use this when the Lambda function needs to read device information from /sys. This setting applies only when you run the Lambda function in a Greengrass container.
     */
    AccessSysfs?: boolean;
    /**
     * Configuration related to executing the Lambda function
     */
    Execution?: FunctionExecutionConfig;
    /**
     * A list of the resources, with their permissions, to which the Lambda function will be granted access. A Lambda function can have at most 10 resources. ResourceAccessPolicies apply only when you run the Lambda function in a Greengrass container.
     */
    ResourceAccessPolicies?: ResourceAccessPolicy[];
    /**
     * Environment variables for the Lambda function's configuration.
     */
    Variables?: {
        [key: string]: string;
    };
}
export declare namespace FunctionConfigurationEnvironment {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FunctionConfigurationEnvironment) => any;
}
/**
 * The configuration of the Lambda function.
 */
export interface FunctionConfiguration {
    /**
     * The expected encoding type of the input payload for the function. The default is ''json''.
     */
    EncodingType?: EncodingType | string;
    /**
     * The environment configuration of the function.
     */
    Environment?: FunctionConfigurationEnvironment;
    /**
     * The execution arguments.
     */
    ExecArgs?: string;
    /**
     * The name of the function executable.
     */
    Executable?: string;
    /**
     * The memory size, in KB, which the function requires. This setting is not applicable and should be cleared when you run the Lambda function without containerization.
     */
    MemorySize?: number;
    /**
     * True if the function is pinned. Pinned means the function is long-lived and starts when the core starts.
     */
    Pinned?: boolean;
    /**
     * The allowed function execution time, after which Lambda should terminate the function. This timeout still applies to pinned Lambda functions for each request.
     */
    Timeout?: number;
}
export declare namespace FunctionConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FunctionConfiguration) => any;
}
/**
 * Information about a Lambda function.
 */
export interface Function {
    /**
     * The ARN of the Lambda function.
     */
    FunctionArn?: string;
    /**
     * The configuration of the Lambda function.
     */
    FunctionConfiguration?: FunctionConfiguration;
    /**
     * A descriptive or arbitrary ID for the function. This value must be unique within the function definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
     */
    Id: string | undefined;
}
export declare namespace Function {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Function) => any;
}
/**
 * Information about a certificate authority for a group.
 */
export interface GroupCertificateAuthorityProperties {
    /**
     * The ARN of the certificate authority for the group.
     */
    GroupCertificateAuthorityArn?: string;
    /**
     * The ID of the certificate authority for the group.
     */
    GroupCertificateAuthorityId?: string;
}
export declare namespace GroupCertificateAuthorityProperties {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GroupCertificateAuthorityProperties) => any;
}
/**
 * Information about a group.
 */
export interface GroupInformation {
    /**
     * The ARN of the group.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the group was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the group.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the group was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the group.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the group.
     */
    LatestVersionArn?: string;
    /**
     * The name of the group.
     */
    Name?: string;
}
export declare namespace GroupInformation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GroupInformation) => any;
}
export declare enum LoggerComponent {
    GreengrassSystem = "GreengrassSystem",
    Lambda = "Lambda"
}
export declare enum LoggerLevel {
    DEBUG = "DEBUG",
    ERROR = "ERROR",
    FATAL = "FATAL",
    INFO = "INFO",
    WARN = "WARN"
}
export declare enum LoggerType {
    AWSCloudWatch = "AWSCloudWatch",
    FileSystem = "FileSystem"
}
/**
 * Information about a logger
 */
export interface Logger {
    /**
     * The component that will be subject to logging.
     */
    Component: LoggerComponent | string | undefined;
    /**
     * A descriptive or arbitrary ID for the logger. This value must be unique within the logger definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
     */
    Id: string | undefined;
    /**
     * The level of the logs.
     */
    Level: LoggerLevel | string | undefined;
    /**
     * The amount of file space, in KB, to use if the local file system is used for logging purposes.
     */
    Space?: number;
    /**
     * The type of log output which will be used.
     */
    Type: LoggerType | string | undefined;
}
export declare namespace Logger {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Logger) => any;
}
/**
 * Group owner related settings for local resources.
 */
export interface GroupOwnerSetting {
    /**
     * If true, AWS IoT Greengrass automatically adds the specified Linux OS group owner of the resource to the Lambda process privileges. Thus the Lambda process will have the file access permissions of the added Linux group.
     */
    AutoAddGroupOwner?: boolean;
    /**
     * The name of the Linux OS group whose privileges will be added to the Lambda process. This field is optional.
     */
    GroupOwner?: string;
}
export declare namespace GroupOwnerSetting {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GroupOwnerSetting) => any;
}
/**
 * Attributes that define a local device resource.
 */
export interface LocalDeviceResourceData {
    /**
     * Group/owner related settings for local resources.
     */
    GroupOwnerSetting?: GroupOwnerSetting;
    /**
     * The local absolute path of the device resource. The source path for a device resource can refer only to a character device or block device under ''/dev''.
     */
    SourcePath?: string;
}
export declare namespace LocalDeviceResourceData {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LocalDeviceResourceData) => any;
}
/**
 * Attributes that define a local volume resource.
 */
export interface LocalVolumeResourceData {
    /**
     * The absolute local path of the resource inside the Lambda environment.
     */
    DestinationPath?: string;
    /**
     * Allows you to configure additional group privileges for the Lambda process. This field is optional.
     */
    GroupOwnerSetting?: GroupOwnerSetting;
    /**
     * The local absolute path of the volume resource on the host. The source path for a volume resource type cannot start with ''/sys''.
     */
    SourcePath?: string;
}
export declare namespace LocalVolumeResourceData {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LocalVolumeResourceData) => any;
}
/**
 * The owner setting for downloaded machine learning resources.
 */
export interface ResourceDownloadOwnerSetting {
    /**
     * The group owner of the resource. This is the name of an existing Linux OS group on the system or a GID. The group's permissions are added to the Lambda process.
     */
    GroupOwner: string | undefined;
    /**
     * The permissions that the group owner has to the resource. Valid values are ''rw'' (read/write) or ''ro'' (read-only).
     */
    GroupPermission: Permission | string | undefined;
}
export declare namespace ResourceDownloadOwnerSetting {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceDownloadOwnerSetting) => any;
}
/**
 * Attributes that define an Amazon S3 machine learning resource.
 */
export interface S3MachineLearningModelResourceData {
    /**
     * The absolute local path of the resource inside the Lambda environment.
     */
    DestinationPath?: string;
    /**
     * The owner setting for downloaded machine learning resources.
     */
    OwnerSetting?: ResourceDownloadOwnerSetting;
    /**
     * The URI of the source model in an S3 bucket. The model package must be in tar.gz or .zip format.
     */
    S3Uri?: string;
}
export declare namespace S3MachineLearningModelResourceData {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3MachineLearningModelResourceData) => any;
}
/**
 * Attributes that define an Amazon SageMaker machine learning resource.
 */
export interface SageMakerMachineLearningModelResourceData {
    /**
     * The absolute local path of the resource inside the Lambda environment.
     */
    DestinationPath?: string;
    /**
     * The owner setting for downloaded machine learning resources.
     */
    OwnerSetting?: ResourceDownloadOwnerSetting;
    /**
     * The ARN of the Amazon SageMaker training job that represents the source model.
     */
    SageMakerJobArn?: string;
}
export declare namespace SageMakerMachineLearningModelResourceData {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SageMakerMachineLearningModelResourceData) => any;
}
/**
 * Attributes that define a secret resource, which references a secret from AWS Secrets Manager. AWS IoT Greengrass stores a local, encrypted copy of the secret on the Greengrass core, where it can be securely accessed by connectors and Lambda functions.
 */
export interface SecretsManagerSecretResourceData {
    /**
     * The ARN of the Secrets Manager secret to make available on the core. The value of the secret's latest version (represented by the ''AWSCURRENT'' staging label) is included by default.
     */
    ARN?: string;
    /**
     * Optional. The staging labels whose values you want to make available on the core, in addition to ''AWSCURRENT''.
     */
    AdditionalStagingLabelsToDownload?: string[];
}
export declare namespace SecretsManagerSecretResourceData {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SecretsManagerSecretResourceData) => any;
}
/**
 * A container for resource data. The container takes only one of the following supported resource data types: ''LocalDeviceResourceData'', ''LocalVolumeResourceData'', ''SageMakerMachineLearningModelResourceData'', ''S3MachineLearningModelResourceData'', ''SecretsManagerSecretResourceData''.
 */
export interface ResourceDataContainer {
    /**
     * Attributes that define the local device resource.
     */
    LocalDeviceResourceData?: LocalDeviceResourceData;
    /**
     * Attributes that define the local volume resource.
     */
    LocalVolumeResourceData?: LocalVolumeResourceData;
    /**
     * Attributes that define an Amazon S3 machine learning resource.
     */
    S3MachineLearningModelResourceData?: S3MachineLearningModelResourceData;
    /**
     * Attributes that define an Amazon SageMaker machine learning resource.
     */
    SageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceData;
    /**
     * Attributes that define a secret resource, which references a secret from AWS Secrets Manager.
     */
    SecretsManagerSecretResourceData?: SecretsManagerSecretResourceData;
}
export declare namespace ResourceDataContainer {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceDataContainer) => any;
}
/**
 * Information about a resource.
 */
export interface Resource {
    /**
     * The resource ID, used to refer to a resource in the Lambda function configuration. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''. This must be unique within a Greengrass group.
     */
    Id: string | undefined;
    /**
     * The descriptive resource name, which is displayed on the AWS IoT Greengrass console. Max length 128 characters with pattern ''[a-zA-Z0-9:_-]+''. This must be unique within a Greengrass group.
     */
    Name: string | undefined;
    /**
     * A container of data for all resource types.
     */
    ResourceDataContainer: ResourceDataContainer | undefined;
}
export declare namespace Resource {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Resource) => any;
}
/**
 * Information about a subscription.
 */
export interface Subscription {
    /**
     * A descriptive or arbitrary ID for the subscription. This value must be unique within the subscription definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
     */
    Id: string | undefined;
    /**
     * The source of the subscription. Can be a thing ARN, a Lambda function ARN, a connector ARN, 'cloud' (which represents the AWS IoT cloud), or 'GGShadowService'.
     */
    Source: string | undefined;
    /**
     * The MQTT topic used to route the message.
     */
    Subject: string | undefined;
    /**
     * Where the message is sent to. Can be a thing ARN, a Lambda function ARN, a connector ARN, 'cloud' (which represents the AWS IoT cloud), or 'GGShadowService'.
     */
    Target: string | undefined;
}
export declare namespace Subscription {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Subscription) => any;
}
/**
 * Information about a version.
 */
export interface VersionInformation {
    /**
     * The ARN of the version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the version was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the parent definition that the version is associated with.
     */
    Id?: string;
    /**
     * The ID of the version.
     */
    Version?: string;
}
export declare namespace VersionInformation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: VersionInformation) => any;
}
export interface AssociateRoleToGroupRequest {
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
    /**
     * The ARN of the role you wish to associate with this group. The existence of the role is not validated.
     */
    RoleArn: string | undefined;
}
export declare namespace AssociateRoleToGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateRoleToGroupRequest) => any;
}
export interface AssociateRoleToGroupResponse {
    /**
     * The time, in milliseconds since the epoch, when the role ARN was associated with the group.
     */
    AssociatedAt?: string;
}
export declare namespace AssociateRoleToGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateRoleToGroupResponse) => any;
}
/**
 * Details about the error.
 */
export interface ErrorDetail {
    /**
     * A detailed error code.
     */
    DetailedErrorCode?: string;
    /**
     * A detailed error message.
     */
    DetailedErrorMessage?: string;
}
export declare namespace ErrorDetail {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ErrorDetail) => any;
}
/**
 * General error information.
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
    name: "BadRequestException";
    $fault: "client";
    /**
     * Details about the error.
     */
    ErrorDetails?: ErrorDetail[];
    /**
     * A message containing information about the error.
     */
    Message?: string;
}
export declare namespace BadRequestException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BadRequestException) => any;
}
/**
 * General error information.
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
    name: "InternalServerErrorException";
    $fault: "server";
    /**
     * Details about the error.
     */
    ErrorDetails?: ErrorDetail[];
    /**
     * A message containing information about the error.
     */
    Message?: string;
}
export declare namespace InternalServerErrorException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServerErrorException) => any;
}
export interface AssociateServiceRoleToAccountRequest {
    /**
     * The ARN of the service role you wish to associate with your account.
     */
    RoleArn: string | undefined;
}
export declare namespace AssociateServiceRoleToAccountRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateServiceRoleToAccountRequest) => any;
}
export interface AssociateServiceRoleToAccountResponse {
    /**
     * The time when the service role was associated with the account.
     */
    AssociatedAt?: string;
}
export declare namespace AssociateServiceRoleToAccountResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateServiceRoleToAccountResponse) => any;
}
/**
 * Information about a bulk deployment. You cannot start a new bulk deployment while another one is still running or in a non-terminal state.
 */
export interface BulkDeployment {
    /**
     * The ARN of the bulk deployment.
     */
    BulkDeploymentArn?: string;
    /**
     * The ID of the bulk deployment.
     */
    BulkDeploymentId?: string;
    /**
     * The time, in ISO format, when the deployment was created.
     */
    CreatedAt?: string;
}
export declare namespace BulkDeployment {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BulkDeployment) => any;
}
/**
 * Relevant metrics on input records processed during bulk deployment.
 */
export interface BulkDeploymentMetrics {
    /**
     * The total number of records that returned a non-retryable error. For example, this can occur if a group record from the input file uses an invalid format or specifies a nonexistent group version, or if the execution role doesn't grant permission to deploy a group or group version.
     */
    InvalidInputRecords?: number;
    /**
     * The total number of group records from the input file that have been processed so far, or attempted.
     */
    RecordsProcessed?: number;
    /**
     * The total number of deployment attempts that returned a retryable error. For example, a retry is triggered if the attempt to deploy a group returns a throttling error. ''StartBulkDeployment'' retries a group deployment up to five times.
     */
    RetryAttempts?: number;
}
export declare namespace BulkDeploymentMetrics {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BulkDeploymentMetrics) => any;
}
export declare enum DeploymentType {
    ForceResetDeployment = "ForceResetDeployment",
    NewDeployment = "NewDeployment",
    Redeployment = "Redeployment",
    ResetDeployment = "ResetDeployment"
}
/**
 * Information about an individual group deployment in a bulk deployment operation.
 */
export interface BulkDeploymentResult {
    /**
     * The time, in ISO format, when the deployment was created.
     */
    CreatedAt?: string;
    /**
     * The ARN of the group deployment.
     */
    DeploymentArn?: string;
    /**
     * The ID of the group deployment.
     */
    DeploymentId?: string;
    /**
     * The current status of the group deployment: ''InProgress'', ''Building'', ''Success'', or ''Failure''.
     */
    DeploymentStatus?: string;
    /**
     * The type of the deployment.
     */
    DeploymentType?: DeploymentType | string;
    /**
     * Details about the error.
     */
    ErrorDetails?: ErrorDetail[];
    /**
     * The error message for a failed deployment
     */
    ErrorMessage?: string;
    /**
     * The ARN of the Greengrass group.
     */
    GroupArn?: string;
}
export declare namespace BulkDeploymentResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: BulkDeploymentResult) => any;
}
export declare enum BulkDeploymentStatus {
    Completed = "Completed",
    Failed = "Failed",
    Initializing = "Initializing",
    Running = "Running",
    Stopped = "Stopped",
    Stopping = "Stopping"
}
export declare enum ConfigurationSyncStatus {
    InSync = "InSync",
    OutOfSync = "OutOfSync"
}
/**
 * Information about the connector definition version, which is a container for connectors.
 */
export interface ConnectorDefinitionVersion {
    /**
     * A list of references to connectors in this version, with their corresponding configuration settings.
     */
    Connectors?: Connector[];
}
export declare namespace ConnectorDefinitionVersion {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConnectorDefinitionVersion) => any;
}
/**
 * Information about a core definition version.
 */
export interface CoreDefinitionVersion {
    /**
     * A list of cores in the core definition version.
     */
    Cores?: Core[];
}
export declare namespace CoreDefinitionVersion {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CoreDefinitionVersion) => any;
}
export interface CreateConnectorDefinitionRequest {
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * Information about the initial version of the connector definition.
     */
    InitialVersion?: ConnectorDefinitionVersion;
    /**
     * The name of the connector definition.
     */
    Name?: string;
    /**
     * Tag(s) to add to the new resource.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateConnectorDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateConnectorDefinitionRequest) => any;
}
export interface CreateConnectorDefinitionResponse {
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace CreateConnectorDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateConnectorDefinitionResponse) => any;
}
export interface CreateConnectorDefinitionVersionRequest {
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The ID of the connector definition.
     */
    ConnectorDefinitionId: string | undefined;
    /**
     * A list of references to connectors in this version, with their corresponding configuration settings.
     */
    Connectors?: Connector[];
}
export declare namespace CreateConnectorDefinitionVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateConnectorDefinitionVersionRequest) => any;
}
export interface CreateConnectorDefinitionVersionResponse {
    /**
     * The ARN of the version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the version was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the parent definition that the version is associated with.
     */
    Id?: string;
    /**
     * The ID of the version.
     */
    Version?: string;
}
export declare namespace CreateConnectorDefinitionVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateConnectorDefinitionVersionResponse) => any;
}
/**
 * Information needed to create a core definition.
 */
export interface CreateCoreDefinitionRequest {
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * Information about the initial version of the core definition.
     */
    InitialVersion?: CoreDefinitionVersion;
    /**
     * The name of the core definition.
     */
    Name?: string;
    /**
     * Tag(s) to add to the new resource.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateCoreDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateCoreDefinitionRequest) => any;
}
export interface CreateCoreDefinitionResponse {
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace CreateCoreDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateCoreDefinitionResponse) => any;
}
export interface CreateCoreDefinitionVersionRequest {
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The ID of the core definition.
     */
    CoreDefinitionId: string | undefined;
    /**
     * A list of cores in the core definition version.
     */
    Cores?: Core[];
}
export declare namespace CreateCoreDefinitionVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateCoreDefinitionVersionRequest) => any;
}
export interface CreateCoreDefinitionVersionResponse {
    /**
     * The ARN of the version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the version was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the parent definition that the version is associated with.
     */
    Id?: string;
    /**
     * The ID of the version.
     */
    Version?: string;
}
export declare namespace CreateCoreDefinitionVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateCoreDefinitionVersionResponse) => any;
}
export interface CreateDeploymentRequest {
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The ID of the deployment if you wish to redeploy a previous deployment.
     */
    DeploymentId?: string;
    /**
     * The type of deployment. When used for ''CreateDeployment'', only ''NewDeployment'' and ''Redeployment'' are valid.
     */
    DeploymentType: DeploymentType | string | undefined;
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
    /**
     * The ID of the group version to be deployed.
     */
    GroupVersionId?: string;
}
export declare namespace CreateDeploymentRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDeploymentRequest) => any;
}
export interface CreateDeploymentResponse {
    /**
     * The ARN of the deployment.
     */
    DeploymentArn?: string;
    /**
     * The ID of the deployment.
     */
    DeploymentId?: string;
}
export declare namespace CreateDeploymentResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDeploymentResponse) => any;
}
/**
 * Information about a device definition version.
 */
export interface DeviceDefinitionVersion {
    /**
     * A list of devices in the definition version.
     */
    Devices?: Device[];
}
export declare namespace DeviceDefinitionVersion {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeviceDefinitionVersion) => any;
}
export interface CreateDeviceDefinitionRequest {
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * Information about the initial version of the device definition.
     */
    InitialVersion?: DeviceDefinitionVersion;
    /**
     * The name of the device definition.
     */
    Name?: string;
    /**
     * Tag(s) to add to the new resource.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateDeviceDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDeviceDefinitionRequest) => any;
}
export interface CreateDeviceDefinitionResponse {
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace CreateDeviceDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDeviceDefinitionResponse) => any;
}
export interface CreateDeviceDefinitionVersionRequest {
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The ID of the device definition.
     */
    DeviceDefinitionId: string | undefined;
    /**
     * A list of devices in the definition version.
     */
    Devices?: Device[];
}
export declare namespace CreateDeviceDefinitionVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDeviceDefinitionVersionRequest) => any;
}
export interface CreateDeviceDefinitionVersionResponse {
    /**
     * The ARN of the version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the version was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the parent definition that the version is associated with.
     */
    Id?: string;
    /**
     * The ID of the version.
     */
    Version?: string;
}
export declare namespace CreateDeviceDefinitionVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateDeviceDefinitionVersionResponse) => any;
}
/**
 * Configuration information that specifies how a Lambda function runs.
 */
export interface FunctionDefaultExecutionConfig {
    /**
     * Specifies whether the Lambda function runs in a Greengrass container (default) or without containerization. Unless your scenario requires that you run without containerization, we recommend that you run in a Greengrass container. Omit this value to run the Lambda function with the default containerization for the group.
     */
    IsolationMode?: FunctionIsolationMode | string;
    /**
     * Specifies the user and group whose permissions are used when running the Lambda function. You can specify one or both values to override the default values. We recommend that you avoid running as root unless absolutely necessary to minimize the risk of unintended changes or malicious attacks. To run as root, you must set ''IsolationMode'' to ''NoContainer'' and update config.json in ''greengrass-root/config'' to set ''allowFunctionsToRunAsRoot'' to ''yes''.
     */
    RunAs?: FunctionRunAsConfig;
}
export declare namespace FunctionDefaultExecutionConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FunctionDefaultExecutionConfig) => any;
}
/**
 * The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
 */
export interface FunctionDefaultConfig {
    /**
     * Configuration information that specifies how a Lambda function runs.
     */
    Execution?: FunctionDefaultExecutionConfig;
}
export declare namespace FunctionDefaultConfig {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FunctionDefaultConfig) => any;
}
/**
 * Information about a function definition version.
 */
export interface FunctionDefinitionVersion {
    /**
     * The default configuration that applies to all Lambda functions in this function definition version. Individual Lambda functions can override these settings.
     */
    DefaultConfig?: FunctionDefaultConfig;
    /**
     * A list of Lambda functions in this function definition version.
     */
    Functions?: Function[];
}
export declare namespace FunctionDefinitionVersion {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: FunctionDefinitionVersion) => any;
}
export interface CreateFunctionDefinitionRequest {
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * Information about the initial version of the function definition.
     */
    InitialVersion?: FunctionDefinitionVersion;
    /**
     * The name of the function definition.
     */
    Name?: string;
    /**
     * Tag(s) to add to the new resource.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateFunctionDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateFunctionDefinitionRequest) => any;
}
export interface CreateFunctionDefinitionResponse {
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace CreateFunctionDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateFunctionDefinitionResponse) => any;
}
/**
 * Information needed to create a function definition version.
 */
export interface CreateFunctionDefinitionVersionRequest {
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The default configuration that applies to all Lambda functions in this function definition version. Individual Lambda functions can override these settings.
     */
    DefaultConfig?: FunctionDefaultConfig;
    /**
     * The ID of the Lambda function definition.
     */
    FunctionDefinitionId: string | undefined;
    /**
     * A list of Lambda functions in this function definition version.
     */
    Functions?: Function[];
}
export declare namespace CreateFunctionDefinitionVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateFunctionDefinitionVersionRequest) => any;
}
export interface CreateFunctionDefinitionVersionResponse {
    /**
     * The ARN of the version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the version was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the parent definition that the version is associated with.
     */
    Id?: string;
    /**
     * The ID of the version.
     */
    Version?: string;
}
export declare namespace CreateFunctionDefinitionVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateFunctionDefinitionVersionResponse) => any;
}
/**
 * Information about a group version.
 */
export interface GroupVersion {
    /**
     * The ARN of the connector definition version for this group.
     */
    ConnectorDefinitionVersionArn?: string;
    /**
     * The ARN of the core definition version for this group.
     */
    CoreDefinitionVersionArn?: string;
    /**
     * The ARN of the device definition version for this group.
     */
    DeviceDefinitionVersionArn?: string;
    /**
     * The ARN of the function definition version for this group.
     */
    FunctionDefinitionVersionArn?: string;
    /**
     * The ARN of the logger definition version for this group.
     */
    LoggerDefinitionVersionArn?: string;
    /**
     * The ARN of the resource definition version for this group.
     */
    ResourceDefinitionVersionArn?: string;
    /**
     * The ARN of the subscription definition version for this group.
     */
    SubscriptionDefinitionVersionArn?: string;
}
export declare namespace GroupVersion {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GroupVersion) => any;
}
export interface CreateGroupRequest {
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * Information about the initial version of the group.
     */
    InitialVersion?: GroupVersion;
    /**
     * The name of the group.
     */
    Name: string | undefined;
    /**
     * Tag(s) to add to the new resource.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateGroupRequest) => any;
}
export interface CreateGroupResponse {
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace CreateGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateGroupResponse) => any;
}
export interface CreateGroupCertificateAuthorityRequest {
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
}
export declare namespace CreateGroupCertificateAuthorityRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateGroupCertificateAuthorityRequest) => any;
}
export interface CreateGroupCertificateAuthorityResponse {
    /**
     * The ARN of the group certificate authority.
     */
    GroupCertificateAuthorityArn?: string;
}
export declare namespace CreateGroupCertificateAuthorityResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateGroupCertificateAuthorityResponse) => any;
}
export interface CreateGroupVersionRequest {
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The ARN of the connector definition version for this group.
     */
    ConnectorDefinitionVersionArn?: string;
    /**
     * The ARN of the core definition version for this group.
     */
    CoreDefinitionVersionArn?: string;
    /**
     * The ARN of the device definition version for this group.
     */
    DeviceDefinitionVersionArn?: string;
    /**
     * The ARN of the function definition version for this group.
     */
    FunctionDefinitionVersionArn?: string;
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
    /**
     * The ARN of the logger definition version for this group.
     */
    LoggerDefinitionVersionArn?: string;
    /**
     * The ARN of the resource definition version for this group.
     */
    ResourceDefinitionVersionArn?: string;
    /**
     * The ARN of the subscription definition version for this group.
     */
    SubscriptionDefinitionVersionArn?: string;
}
export declare namespace CreateGroupVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateGroupVersionRequest) => any;
}
export interface CreateGroupVersionResponse {
    /**
     * The ARN of the version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the version was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the parent definition that the version is associated with.
     */
    Id?: string;
    /**
     * The ID of the version.
     */
    Version?: string;
}
export declare namespace CreateGroupVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateGroupVersionResponse) => any;
}
/**
 * Information about a logger definition version.
 */
export interface LoggerDefinitionVersion {
    /**
     * A list of loggers.
     */
    Loggers?: Logger[];
}
export declare namespace LoggerDefinitionVersion {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LoggerDefinitionVersion) => any;
}
export interface CreateLoggerDefinitionRequest {
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * Information about the initial version of the logger definition.
     */
    InitialVersion?: LoggerDefinitionVersion;
    /**
     * The name of the logger definition.
     */
    Name?: string;
    /**
     * Tag(s) to add to the new resource.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateLoggerDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLoggerDefinitionRequest) => any;
}
export interface CreateLoggerDefinitionResponse {
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace CreateLoggerDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLoggerDefinitionResponse) => any;
}
export interface CreateLoggerDefinitionVersionRequest {
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The ID of the logger definition.
     */
    LoggerDefinitionId: string | undefined;
    /**
     * A list of loggers.
     */
    Loggers?: Logger[];
}
export declare namespace CreateLoggerDefinitionVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLoggerDefinitionVersionRequest) => any;
}
export interface CreateLoggerDefinitionVersionResponse {
    /**
     * The ARN of the version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the version was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the parent definition that the version is associated with.
     */
    Id?: string;
    /**
     * The ID of the version.
     */
    Version?: string;
}
export declare namespace CreateLoggerDefinitionVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateLoggerDefinitionVersionResponse) => any;
}
/**
 * Information about a resource definition version.
 */
export interface ResourceDefinitionVersion {
    /**
     * A list of resources.
     */
    Resources?: Resource[];
}
export declare namespace ResourceDefinitionVersion {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceDefinitionVersion) => any;
}
export interface CreateResourceDefinitionRequest {
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * Information about the initial version of the resource definition.
     */
    InitialVersion?: ResourceDefinitionVersion;
    /**
     * The name of the resource definition.
     */
    Name?: string;
    /**
     * Tag(s) to add to the new resource.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateResourceDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateResourceDefinitionRequest) => any;
}
export interface CreateResourceDefinitionResponse {
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace CreateResourceDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateResourceDefinitionResponse) => any;
}
export interface CreateResourceDefinitionVersionRequest {
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The ID of the resource definition.
     */
    ResourceDefinitionId: string | undefined;
    /**
     * A list of resources.
     */
    Resources?: Resource[];
}
export declare namespace CreateResourceDefinitionVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateResourceDefinitionVersionRequest) => any;
}
export interface CreateResourceDefinitionVersionResponse {
    /**
     * The ARN of the version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the version was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the parent definition that the version is associated with.
     */
    Id?: string;
    /**
     * The ID of the version.
     */
    Version?: string;
}
export declare namespace CreateResourceDefinitionVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateResourceDefinitionVersionResponse) => any;
}
export declare enum SoftwareToUpdate {
    core = "core",
    ota_agent = "ota_agent"
}
export declare enum UpdateAgentLogLevel {
    DEBUG = "DEBUG",
    ERROR = "ERROR",
    FATAL = "FATAL",
    INFO = "INFO",
    NONE = "NONE",
    TRACE = "TRACE",
    VERBOSE = "VERBOSE",
    WARN = "WARN"
}
export declare enum UpdateTargetsArchitecture {
    aarch64 = "aarch64",
    armv6l = "armv6l",
    armv7l = "armv7l",
    x86_64 = "x86_64"
}
export declare enum UpdateTargetsOperatingSystem {
    amazon_linux = "amazon_linux",
    openwrt = "openwrt",
    raspbian = "raspbian",
    ubuntu = "ubuntu"
}
export interface CreateSoftwareUpdateJobRequest {
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The IAM Role that Greengrass will use to create pre-signed URLs pointing towards the update artifact.
     */
    S3UrlSignerRole: string | undefined;
    /**
     * The piece of software on the Greengrass core that will be updated.
     */
    SoftwareToUpdate: SoftwareToUpdate | string | undefined;
    /**
     * The minimum level of log statements that should be logged by the OTA Agent during an update.
     */
    UpdateAgentLogLevel?: UpdateAgentLogLevel | string;
    /**
     * The ARNs of the targets (IoT things or IoT thing groups) that this update will be applied to.
     */
    UpdateTargets: string[] | undefined;
    /**
     * The architecture of the cores which are the targets of an update.
     */
    UpdateTargetsArchitecture: UpdateTargetsArchitecture | string | undefined;
    /**
     * The operating system of the cores which are the targets of an update.
     */
    UpdateTargetsOperatingSystem: UpdateTargetsOperatingSystem | string | undefined;
}
export declare namespace CreateSoftwareUpdateJobRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSoftwareUpdateJobRequest) => any;
}
export interface CreateSoftwareUpdateJobResponse {
    /**
     * The IoT Job ARN corresponding to this update.
     */
    IotJobArn?: string;
    /**
     * The IoT Job Id corresponding to this update.
     */
    IotJobId?: string;
    /**
     * The software version installed on the device or devices after the update.
     */
    PlatformSoftwareVersion?: string;
}
export declare namespace CreateSoftwareUpdateJobResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSoftwareUpdateJobResponse) => any;
}
/**
 * Information about a subscription definition version.
 */
export interface SubscriptionDefinitionVersion {
    /**
     * A list of subscriptions.
     */
    Subscriptions?: Subscription[];
}
export declare namespace SubscriptionDefinitionVersion {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SubscriptionDefinitionVersion) => any;
}
export interface CreateSubscriptionDefinitionRequest {
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * Information about the initial version of the subscription definition.
     */
    InitialVersion?: SubscriptionDefinitionVersion;
    /**
     * The name of the subscription definition.
     */
    Name?: string;
    /**
     * Tag(s) to add to the new resource.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateSubscriptionDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSubscriptionDefinitionRequest) => any;
}
export interface CreateSubscriptionDefinitionResponse {
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace CreateSubscriptionDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSubscriptionDefinitionResponse) => any;
}
export interface CreateSubscriptionDefinitionVersionRequest {
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The ID of the subscription definition.
     */
    SubscriptionDefinitionId: string | undefined;
    /**
     * A list of subscriptions.
     */
    Subscriptions?: Subscription[];
}
export declare namespace CreateSubscriptionDefinitionVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSubscriptionDefinitionVersionRequest) => any;
}
export interface CreateSubscriptionDefinitionVersionResponse {
    /**
     * The ARN of the version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the version was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the parent definition that the version is associated with.
     */
    Id?: string;
    /**
     * The ID of the version.
     */
    Version?: string;
}
export declare namespace CreateSubscriptionDefinitionVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateSubscriptionDefinitionVersionResponse) => any;
}
export interface DeleteConnectorDefinitionRequest {
    /**
     * The ID of the connector definition.
     */
    ConnectorDefinitionId: string | undefined;
}
export declare namespace DeleteConnectorDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteConnectorDefinitionRequest) => any;
}
export interface DeleteConnectorDefinitionResponse {
}
export declare namespace DeleteConnectorDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteConnectorDefinitionResponse) => any;
}
export interface DeleteCoreDefinitionRequest {
    /**
     * The ID of the core definition.
     */
    CoreDefinitionId: string | undefined;
}
export declare namespace DeleteCoreDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteCoreDefinitionRequest) => any;
}
export interface DeleteCoreDefinitionResponse {
}
export declare namespace DeleteCoreDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteCoreDefinitionResponse) => any;
}
export interface DeleteDeviceDefinitionRequest {
    /**
     * The ID of the device definition.
     */
    DeviceDefinitionId: string | undefined;
}
export declare namespace DeleteDeviceDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDeviceDefinitionRequest) => any;
}
export interface DeleteDeviceDefinitionResponse {
}
export declare namespace DeleteDeviceDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteDeviceDefinitionResponse) => any;
}
export interface DeleteFunctionDefinitionRequest {
    /**
     * The ID of the Lambda function definition.
     */
    FunctionDefinitionId: string | undefined;
}
export declare namespace DeleteFunctionDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteFunctionDefinitionRequest) => any;
}
export interface DeleteFunctionDefinitionResponse {
}
export declare namespace DeleteFunctionDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteFunctionDefinitionResponse) => any;
}
export interface DeleteGroupRequest {
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
}
export declare namespace DeleteGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteGroupRequest) => any;
}
export interface DeleteGroupResponse {
}
export declare namespace DeleteGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteGroupResponse) => any;
}
export interface DeleteLoggerDefinitionRequest {
    /**
     * The ID of the logger definition.
     */
    LoggerDefinitionId: string | undefined;
}
export declare namespace DeleteLoggerDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLoggerDefinitionRequest) => any;
}
export interface DeleteLoggerDefinitionResponse {
}
export declare namespace DeleteLoggerDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteLoggerDefinitionResponse) => any;
}
export interface DeleteResourceDefinitionRequest {
    /**
     * The ID of the resource definition.
     */
    ResourceDefinitionId: string | undefined;
}
export declare namespace DeleteResourceDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteResourceDefinitionRequest) => any;
}
export interface DeleteResourceDefinitionResponse {
}
export declare namespace DeleteResourceDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteResourceDefinitionResponse) => any;
}
export interface DeleteSubscriptionDefinitionRequest {
    /**
     * The ID of the subscription definition.
     */
    SubscriptionDefinitionId: string | undefined;
}
export declare namespace DeleteSubscriptionDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSubscriptionDefinitionRequest) => any;
}
export interface DeleteSubscriptionDefinitionResponse {
}
export declare namespace DeleteSubscriptionDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteSubscriptionDefinitionResponse) => any;
}
/**
 * Information about a deployment.
 */
export interface Deployment {
    /**
     * The time, in milliseconds since the epoch, when the deployment was created.
     */
    CreatedAt?: string;
    /**
     * The ARN of the deployment.
     */
    DeploymentArn?: string;
    /**
     * The ID of the deployment.
     */
    DeploymentId?: string;
    /**
     * The type of the deployment.
     */
    DeploymentType?: DeploymentType | string;
    /**
     * The ARN of the group for this deployment.
     */
    GroupArn?: string;
}
export declare namespace Deployment {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Deployment) => any;
}
export interface DisassociateRoleFromGroupRequest {
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
}
export declare namespace DisassociateRoleFromGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateRoleFromGroupRequest) => any;
}
export interface DisassociateRoleFromGroupResponse {
    /**
     * The time, in milliseconds since the epoch, when the role was disassociated from the group.
     */
    DisassociatedAt?: string;
}
export declare namespace DisassociateRoleFromGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateRoleFromGroupResponse) => any;
}
export interface DisassociateServiceRoleFromAccountRequest {
}
export declare namespace DisassociateServiceRoleFromAccountRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateServiceRoleFromAccountRequest) => any;
}
export interface DisassociateServiceRoleFromAccountResponse {
    /**
     * The time when the service role was disassociated from the account.
     */
    DisassociatedAt?: string;
}
export declare namespace DisassociateServiceRoleFromAccountResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateServiceRoleFromAccountResponse) => any;
}
export interface GetAssociatedRoleRequest {
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
}
export declare namespace GetAssociatedRoleRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAssociatedRoleRequest) => any;
}
export interface GetAssociatedRoleResponse {
    /**
     * The time when the role was associated with the group.
     */
    AssociatedAt?: string;
    /**
     * The ARN of the role that is associated with the group.
     */
    RoleArn?: string;
}
export declare namespace GetAssociatedRoleResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetAssociatedRoleResponse) => any;
}
export interface GetBulkDeploymentStatusRequest {
    /**
     * The ID of the bulk deployment.
     */
    BulkDeploymentId: string | undefined;
}
export declare namespace GetBulkDeploymentStatusRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetBulkDeploymentStatusRequest) => any;
}
export interface GetBulkDeploymentStatusResponse {
    /**
     * Relevant metrics on input records processed during bulk deployment.
     */
    BulkDeploymentMetrics?: BulkDeploymentMetrics;
    /**
     * The status of the bulk deployment.
     */
    BulkDeploymentStatus?: BulkDeploymentStatus | string;
    /**
     * The time, in ISO format, when the deployment was created.
     */
    CreatedAt?: string;
    /**
     * Error details
     */
    ErrorDetails?: ErrorDetail[];
    /**
     * Error message
     */
    ErrorMessage?: string;
    /**
     * Tag(s) attached to the resource arn.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetBulkDeploymentStatusResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetBulkDeploymentStatusResponse) => any;
}
export interface GetConnectivityInfoRequest {
    /**
     * The thing name.
     */
    ThingName: string | undefined;
}
export declare namespace GetConnectivityInfoRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetConnectivityInfoRequest) => any;
}
export interface GetConnectivityInfoResponse {
    /**
     * Connectivity info list.
     */
    ConnectivityInfo?: ConnectivityInfo[];
    /**
     * A message about the connectivity info request.
     */
    Message?: string;
}
export declare namespace GetConnectivityInfoResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetConnectivityInfoResponse) => any;
}
export interface GetConnectorDefinitionRequest {
    /**
     * The ID of the connector definition.
     */
    ConnectorDefinitionId: string | undefined;
}
export declare namespace GetConnectorDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetConnectorDefinitionRequest) => any;
}
export interface GetConnectorDefinitionResponse {
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
    /**
     * Tag(s) attached to the resource arn.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetConnectorDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetConnectorDefinitionResponse) => any;
}
export interface GetConnectorDefinitionVersionRequest {
    /**
     * The ID of the connector definition.
     */
    ConnectorDefinitionId: string | undefined;
    /**
     * The ID of the connector definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListConnectorDefinitionVersions'' requests. If the version is the last one that was associated with a connector definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
     */
    ConnectorDefinitionVersionId: string | undefined;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace GetConnectorDefinitionVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetConnectorDefinitionVersionRequest) => any;
}
export interface GetConnectorDefinitionVersionResponse {
    /**
     * The ARN of the connector definition version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the connector definition version was created.
     */
    CreationTimestamp?: string;
    /**
     * Information about the connector definition version.
     */
    Definition?: ConnectorDefinitionVersion;
    /**
     * The ID of the connector definition version.
     */
    Id?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * The version of the connector definition version.
     */
    Version?: string;
}
export declare namespace GetConnectorDefinitionVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetConnectorDefinitionVersionResponse) => any;
}
export interface GetCoreDefinitionRequest {
    /**
     * The ID of the core definition.
     */
    CoreDefinitionId: string | undefined;
}
export declare namespace GetCoreDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetCoreDefinitionRequest) => any;
}
export interface GetCoreDefinitionResponse {
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
    /**
     * Tag(s) attached to the resource arn.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetCoreDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetCoreDefinitionResponse) => any;
}
export interface GetCoreDefinitionVersionRequest {
    /**
     * The ID of the core definition.
     */
    CoreDefinitionId: string | undefined;
    /**
     * The ID of the core definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListCoreDefinitionVersions'' requests. If the version is the last one that was associated with a core definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
     */
    CoreDefinitionVersionId: string | undefined;
}
export declare namespace GetCoreDefinitionVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetCoreDefinitionVersionRequest) => any;
}
export interface GetCoreDefinitionVersionResponse {
    /**
     * The ARN of the core definition version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the core definition version was created.
     */
    CreationTimestamp?: string;
    /**
     * Information about the core definition version.
     */
    Definition?: CoreDefinitionVersion;
    /**
     * The ID of the core definition version.
     */
    Id?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * The version of the core definition version.
     */
    Version?: string;
}
export declare namespace GetCoreDefinitionVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetCoreDefinitionVersionResponse) => any;
}
export interface GetDeploymentStatusRequest {
    /**
     * The ID of the deployment.
     */
    DeploymentId: string | undefined;
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
}
export declare namespace GetDeploymentStatusRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDeploymentStatusRequest) => any;
}
export interface GetDeploymentStatusResponse {
    /**
     * The status of the deployment: ''InProgress'', ''Building'', ''Success'', or ''Failure''.
     */
    DeploymentStatus?: string;
    /**
     * The type of the deployment.
     */
    DeploymentType?: DeploymentType | string;
    /**
     * Error details
     */
    ErrorDetails?: ErrorDetail[];
    /**
     * Error message
     */
    ErrorMessage?: string;
    /**
     * The time, in milliseconds since the epoch, when the deployment status was updated.
     */
    UpdatedAt?: string;
}
export declare namespace GetDeploymentStatusResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDeploymentStatusResponse) => any;
}
export interface GetDeviceDefinitionRequest {
    /**
     * The ID of the device definition.
     */
    DeviceDefinitionId: string | undefined;
}
export declare namespace GetDeviceDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDeviceDefinitionRequest) => any;
}
export interface GetDeviceDefinitionResponse {
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
    /**
     * Tag(s) attached to the resource arn.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetDeviceDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDeviceDefinitionResponse) => any;
}
export interface GetDeviceDefinitionVersionRequest {
    /**
     * The ID of the device definition.
     */
    DeviceDefinitionId: string | undefined;
    /**
     * The ID of the device definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListDeviceDefinitionVersions'' requests. If the version is the last one that was associated with a device definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
     */
    DeviceDefinitionVersionId: string | undefined;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace GetDeviceDefinitionVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDeviceDefinitionVersionRequest) => any;
}
export interface GetDeviceDefinitionVersionResponse {
    /**
     * The ARN of the device definition version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the device definition version was created.
     */
    CreationTimestamp?: string;
    /**
     * Information about the device definition version.
     */
    Definition?: DeviceDefinitionVersion;
    /**
     * The ID of the device definition version.
     */
    Id?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * The version of the device definition version.
     */
    Version?: string;
}
export declare namespace GetDeviceDefinitionVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetDeviceDefinitionVersionResponse) => any;
}
export interface GetFunctionDefinitionRequest {
    /**
     * The ID of the Lambda function definition.
     */
    FunctionDefinitionId: string | undefined;
}
export declare namespace GetFunctionDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetFunctionDefinitionRequest) => any;
}
export interface GetFunctionDefinitionResponse {
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
    /**
     * Tag(s) attached to the resource arn.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetFunctionDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetFunctionDefinitionResponse) => any;
}
export interface GetFunctionDefinitionVersionRequest {
    /**
     * The ID of the Lambda function definition.
     */
    FunctionDefinitionId: string | undefined;
    /**
     * The ID of the function definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListFunctionDefinitionVersions'' requests. If the version is the last one that was associated with a function definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
     */
    FunctionDefinitionVersionId: string | undefined;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace GetFunctionDefinitionVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetFunctionDefinitionVersionRequest) => any;
}
export interface GetFunctionDefinitionVersionResponse {
    /**
     * The ARN of the function definition version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the function definition version was created.
     */
    CreationTimestamp?: string;
    /**
     * Information on the definition.
     */
    Definition?: FunctionDefinitionVersion;
    /**
     * The ID of the function definition version.
     */
    Id?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * The version of the function definition version.
     */
    Version?: string;
}
export declare namespace GetFunctionDefinitionVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetFunctionDefinitionVersionResponse) => any;
}
export interface GetGroupRequest {
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
}
export declare namespace GetGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetGroupRequest) => any;
}
export interface GetGroupResponse {
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
    /**
     * Tag(s) attached to the resource arn.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetGroupResponse) => any;
}
export interface GetGroupCertificateAuthorityRequest {
    /**
     * The ID of the certificate authority.
     */
    CertificateAuthorityId: string | undefined;
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
}
export declare namespace GetGroupCertificateAuthorityRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetGroupCertificateAuthorityRequest) => any;
}
export interface GetGroupCertificateAuthorityResponse {
    /**
     * The ARN of the certificate authority for the group.
     */
    GroupCertificateAuthorityArn?: string;
    /**
     * The ID of the certificate authority for the group.
     */
    GroupCertificateAuthorityId?: string;
    /**
     * The PEM encoded certificate for the group.
     */
    PemEncodedCertificate?: string;
}
export declare namespace GetGroupCertificateAuthorityResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetGroupCertificateAuthorityResponse) => any;
}
export interface GetGroupCertificateConfigurationRequest {
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
}
export declare namespace GetGroupCertificateConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetGroupCertificateConfigurationRequest) => any;
}
export interface GetGroupCertificateConfigurationResponse {
    /**
     * The amount of time remaining before the certificate authority expires, in milliseconds.
     */
    CertificateAuthorityExpiryInMilliseconds?: string;
    /**
     * The amount of time remaining before the certificate expires, in milliseconds.
     */
    CertificateExpiryInMilliseconds?: string;
    /**
     * The ID of the group certificate configuration.
     */
    GroupId?: string;
}
export declare namespace GetGroupCertificateConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetGroupCertificateConfigurationResponse) => any;
}
export interface GetGroupVersionRequest {
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
    /**
     * The ID of the group version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListGroupVersions'' requests. If the version is the last one that was associated with a group, the value also maps to the ''LatestVersion'' property of the corresponding ''GroupInformation'' object.
     */
    GroupVersionId: string | undefined;
}
export declare namespace GetGroupVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetGroupVersionRequest) => any;
}
export interface GetGroupVersionResponse {
    /**
     * The ARN of the group version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the group version was created.
     */
    CreationTimestamp?: string;
    /**
     * Information about the group version definition.
     */
    Definition?: GroupVersion;
    /**
     * The ID of the group that the version is associated with.
     */
    Id?: string;
    /**
     * The ID of the group version.
     */
    Version?: string;
}
export declare namespace GetGroupVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetGroupVersionResponse) => any;
}
export interface GetLoggerDefinitionRequest {
    /**
     * The ID of the logger definition.
     */
    LoggerDefinitionId: string | undefined;
}
export declare namespace GetLoggerDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLoggerDefinitionRequest) => any;
}
export interface GetLoggerDefinitionResponse {
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
    /**
     * Tag(s) attached to the resource arn.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetLoggerDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLoggerDefinitionResponse) => any;
}
export interface GetLoggerDefinitionVersionRequest {
    /**
     * The ID of the logger definition.
     */
    LoggerDefinitionId: string | undefined;
    /**
     * The ID of the logger definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListLoggerDefinitionVersions'' requests. If the version is the last one that was associated with a logger definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
     */
    LoggerDefinitionVersionId: string | undefined;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace GetLoggerDefinitionVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLoggerDefinitionVersionRequest) => any;
}
export interface GetLoggerDefinitionVersionResponse {
    /**
     * The ARN of the logger definition version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the logger definition version was created.
     */
    CreationTimestamp?: string;
    /**
     * Information about the logger definition version.
     */
    Definition?: LoggerDefinitionVersion;
    /**
     * The ID of the logger definition version.
     */
    Id?: string;
    /**
     * The version of the logger definition version.
     */
    Version?: string;
}
export declare namespace GetLoggerDefinitionVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetLoggerDefinitionVersionResponse) => any;
}
export interface GetResourceDefinitionRequest {
    /**
     * The ID of the resource definition.
     */
    ResourceDefinitionId: string | undefined;
}
export declare namespace GetResourceDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetResourceDefinitionRequest) => any;
}
export interface GetResourceDefinitionResponse {
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
    /**
     * Tag(s) attached to the resource arn.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetResourceDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetResourceDefinitionResponse) => any;
}
export interface GetResourceDefinitionVersionRequest {
    /**
     * The ID of the resource definition.
     */
    ResourceDefinitionId: string | undefined;
    /**
     * The ID of the resource definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListResourceDefinitionVersions'' requests. If the version is the last one that was associated with a resource definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
     */
    ResourceDefinitionVersionId: string | undefined;
}
export declare namespace GetResourceDefinitionVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetResourceDefinitionVersionRequest) => any;
}
export interface GetResourceDefinitionVersionResponse {
    /**
     * Arn of the resource definition version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the resource definition version was created.
     */
    CreationTimestamp?: string;
    /**
     * Information about the definition.
     */
    Definition?: ResourceDefinitionVersion;
    /**
     * The ID of the resource definition version.
     */
    Id?: string;
    /**
     * The version of the resource definition version.
     */
    Version?: string;
}
export declare namespace GetResourceDefinitionVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetResourceDefinitionVersionResponse) => any;
}
export interface GetServiceRoleForAccountRequest {
}
export declare namespace GetServiceRoleForAccountRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetServiceRoleForAccountRequest) => any;
}
export interface GetServiceRoleForAccountResponse {
    /**
     * The time when the service role was associated with the account.
     */
    AssociatedAt?: string;
    /**
     * The ARN of the role which is associated with the account.
     */
    RoleArn?: string;
}
export declare namespace GetServiceRoleForAccountResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetServiceRoleForAccountResponse) => any;
}
export interface GetSubscriptionDefinitionRequest {
    /**
     * The ID of the subscription definition.
     */
    SubscriptionDefinitionId: string | undefined;
}
export declare namespace GetSubscriptionDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSubscriptionDefinitionRequest) => any;
}
export interface GetSubscriptionDefinitionResponse {
    /**
     * The ARN of the definition.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was created.
     */
    CreationTimestamp?: string;
    /**
     * The ID of the definition.
     */
    Id?: string;
    /**
     * The time, in milliseconds since the epoch, when the definition was last updated.
     */
    LastUpdatedTimestamp?: string;
    /**
     * The ID of the latest version associated with the definition.
     */
    LatestVersion?: string;
    /**
     * The ARN of the latest version associated with the definition.
     */
    LatestVersionArn?: string;
    /**
     * The name of the definition.
     */
    Name?: string;
    /**
     * Tag(s) attached to the resource arn.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetSubscriptionDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSubscriptionDefinitionResponse) => any;
}
export interface GetSubscriptionDefinitionVersionRequest {
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * The ID of the subscription definition.
     */
    SubscriptionDefinitionId: string | undefined;
    /**
     * The ID of the subscription definition version. This value maps to the ''Version'' property of the corresponding ''VersionInformation'' object, which is returned by ''ListSubscriptionDefinitionVersions'' requests. If the version is the last one that was associated with a subscription definition, the value also maps to the ''LatestVersion'' property of the corresponding ''DefinitionInformation'' object.
     */
    SubscriptionDefinitionVersionId: string | undefined;
}
export declare namespace GetSubscriptionDefinitionVersionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSubscriptionDefinitionVersionRequest) => any;
}
export interface GetSubscriptionDefinitionVersionResponse {
    /**
     * The ARN of the subscription definition version.
     */
    Arn?: string;
    /**
     * The time, in milliseconds since the epoch, when the subscription definition version was created.
     */
    CreationTimestamp?: string;
    /**
     * Information about the subscription definition version.
     */
    Definition?: SubscriptionDefinitionVersion;
    /**
     * The ID of the subscription definition version.
     */
    Id?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * The version of the subscription definition version.
     */
    Version?: string;
}
export declare namespace GetSubscriptionDefinitionVersionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetSubscriptionDefinitionVersionResponse) => any;
}
export interface GetThingRuntimeConfigurationRequest {
    /**
     * The thing name.
     */
    ThingName: string | undefined;
}
export declare namespace GetThingRuntimeConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetThingRuntimeConfigurationRequest) => any;
}
export declare enum Telemetry {
    Off = "Off",
    On = "On"
}
/**
 * Configuration settings for running telemetry.
 */
export interface TelemetryConfiguration {
    /**
     * Synchronization status of the device reported configuration with the desired configuration.
     */
    ConfigurationSyncStatus?: ConfigurationSyncStatus | string;
    /**
     * Configure telemetry to be on or off.
     */
    Telemetry: Telemetry | string | undefined;
}
export declare namespace TelemetryConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TelemetryConfiguration) => any;
}
/**
 * Runtime configuration for a thing.
 */
export interface RuntimeConfiguration {
    /**
     * Configuration for telemetry service.
     */
    TelemetryConfiguration?: TelemetryConfiguration;
}
export declare namespace RuntimeConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RuntimeConfiguration) => any;
}
export interface GetThingRuntimeConfigurationResponse {
    /**
     * Runtime configuration for a thing.
     */
    RuntimeConfiguration?: RuntimeConfiguration;
}
export declare namespace GetThingRuntimeConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetThingRuntimeConfigurationResponse) => any;
}
export interface ListBulkDeploymentDetailedReportsRequest {
    /**
     * The ID of the bulk deployment.
     */
    BulkDeploymentId: string | undefined;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListBulkDeploymentDetailedReportsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListBulkDeploymentDetailedReportsRequest) => any;
}
export interface ListBulkDeploymentDetailedReportsResponse {
    /**
     * A list of the individual group deployments in the bulk deployment operation.
     */
    Deployments?: BulkDeploymentResult[];
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListBulkDeploymentDetailedReportsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListBulkDeploymentDetailedReportsResponse) => any;
}
export interface ListBulkDeploymentsRequest {
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListBulkDeploymentsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListBulkDeploymentsRequest) => any;
}
export interface ListBulkDeploymentsResponse {
    /**
     * A list of bulk deployments.
     */
    BulkDeployments?: BulkDeployment[];
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListBulkDeploymentsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListBulkDeploymentsResponse) => any;
}
export interface ListConnectorDefinitionsRequest {
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListConnectorDefinitionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListConnectorDefinitionsRequest) => any;
}
export interface ListConnectorDefinitionsResponse {
    /**
     * Information about a definition.
     */
    Definitions?: DefinitionInformation[];
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListConnectorDefinitionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListConnectorDefinitionsResponse) => any;
}
export interface ListConnectorDefinitionVersionsRequest {
    /**
     * The ID of the connector definition.
     */
    ConnectorDefinitionId: string | undefined;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListConnectorDefinitionVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListConnectorDefinitionVersionsRequest) => any;
}
export interface ListConnectorDefinitionVersionsResponse {
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * Information about a version.
     */
    Versions?: VersionInformation[];
}
export declare namespace ListConnectorDefinitionVersionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListConnectorDefinitionVersionsResponse) => any;
}
export interface ListCoreDefinitionsRequest {
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListCoreDefinitionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListCoreDefinitionsRequest) => any;
}
export interface ListCoreDefinitionsResponse {
    /**
     * Information about a definition.
     */
    Definitions?: DefinitionInformation[];
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListCoreDefinitionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListCoreDefinitionsResponse) => any;
}
export interface ListCoreDefinitionVersionsRequest {
    /**
     * The ID of the core definition.
     */
    CoreDefinitionId: string | undefined;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListCoreDefinitionVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListCoreDefinitionVersionsRequest) => any;
}
export interface ListCoreDefinitionVersionsResponse {
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * Information about a version.
     */
    Versions?: VersionInformation[];
}
export declare namespace ListCoreDefinitionVersionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListCoreDefinitionVersionsResponse) => any;
}
export interface ListDeploymentsRequest {
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListDeploymentsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDeploymentsRequest) => any;
}
export interface ListDeploymentsResponse {
    /**
     * A list of deployments for the requested groups.
     */
    Deployments?: Deployment[];
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListDeploymentsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDeploymentsResponse) => any;
}
export interface ListDeviceDefinitionsRequest {
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListDeviceDefinitionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDeviceDefinitionsRequest) => any;
}
export interface ListDeviceDefinitionsResponse {
    /**
     * Information about a definition.
     */
    Definitions?: DefinitionInformation[];
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListDeviceDefinitionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDeviceDefinitionsResponse) => any;
}
export interface ListDeviceDefinitionVersionsRequest {
    /**
     * The ID of the device definition.
     */
    DeviceDefinitionId: string | undefined;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListDeviceDefinitionVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDeviceDefinitionVersionsRequest) => any;
}
export interface ListDeviceDefinitionVersionsResponse {
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * Information about a version.
     */
    Versions?: VersionInformation[];
}
export declare namespace ListDeviceDefinitionVersionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListDeviceDefinitionVersionsResponse) => any;
}
export interface ListFunctionDefinitionsRequest {
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListFunctionDefinitionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFunctionDefinitionsRequest) => any;
}
export interface ListFunctionDefinitionsResponse {
    /**
     * Information about a definition.
     */
    Definitions?: DefinitionInformation[];
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListFunctionDefinitionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFunctionDefinitionsResponse) => any;
}
export interface ListFunctionDefinitionVersionsRequest {
    /**
     * The ID of the Lambda function definition.
     */
    FunctionDefinitionId: string | undefined;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListFunctionDefinitionVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFunctionDefinitionVersionsRequest) => any;
}
export interface ListFunctionDefinitionVersionsResponse {
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * Information about a version.
     */
    Versions?: VersionInformation[];
}
export declare namespace ListFunctionDefinitionVersionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListFunctionDefinitionVersionsResponse) => any;
}
export interface ListGroupCertificateAuthoritiesRequest {
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
}
export declare namespace ListGroupCertificateAuthoritiesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListGroupCertificateAuthoritiesRequest) => any;
}
export interface ListGroupCertificateAuthoritiesResponse {
    /**
     * A list of certificate authorities associated with the group.
     */
    GroupCertificateAuthorities?: GroupCertificateAuthorityProperties[];
}
export declare namespace ListGroupCertificateAuthoritiesResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListGroupCertificateAuthoritiesResponse) => any;
}
export interface ListGroupsRequest {
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListGroupsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListGroupsRequest) => any;
}
export interface ListGroupsResponse {
    /**
     * Information about a group.
     */
    Groups?: GroupInformation[];
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListGroupsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListGroupsResponse) => any;
}
export interface ListGroupVersionsRequest {
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListGroupVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListGroupVersionsRequest) => any;
}
export interface ListGroupVersionsResponse {
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * Information about a version.
     */
    Versions?: VersionInformation[];
}
export declare namespace ListGroupVersionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListGroupVersionsResponse) => any;
}
export interface ListLoggerDefinitionsRequest {
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListLoggerDefinitionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLoggerDefinitionsRequest) => any;
}
export interface ListLoggerDefinitionsResponse {
    /**
     * Information about a definition.
     */
    Definitions?: DefinitionInformation[];
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListLoggerDefinitionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLoggerDefinitionsResponse) => any;
}
export interface ListLoggerDefinitionVersionsRequest {
    /**
     * The ID of the logger definition.
     */
    LoggerDefinitionId: string | undefined;
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListLoggerDefinitionVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLoggerDefinitionVersionsRequest) => any;
}
export interface ListLoggerDefinitionVersionsResponse {
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * Information about a version.
     */
    Versions?: VersionInformation[];
}
export declare namespace ListLoggerDefinitionVersionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListLoggerDefinitionVersionsResponse) => any;
}
export interface ListResourceDefinitionsRequest {
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListResourceDefinitionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListResourceDefinitionsRequest) => any;
}
export interface ListResourceDefinitionsResponse {
    /**
     * Information about a definition.
     */
    Definitions?: DefinitionInformation[];
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListResourceDefinitionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListResourceDefinitionsResponse) => any;
}
export interface ListResourceDefinitionVersionsRequest {
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * The ID of the resource definition.
     */
    ResourceDefinitionId: string | undefined;
}
export declare namespace ListResourceDefinitionVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListResourceDefinitionVersionsRequest) => any;
}
export interface ListResourceDefinitionVersionsResponse {
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * Information about a version.
     */
    Versions?: VersionInformation[];
}
export declare namespace ListResourceDefinitionVersionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListResourceDefinitionVersionsResponse) => any;
}
export interface ListSubscriptionDefinitionsRequest {
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListSubscriptionDefinitionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSubscriptionDefinitionsRequest) => any;
}
export interface ListSubscriptionDefinitionsResponse {
    /**
     * Information about a definition.
     */
    Definitions?: DefinitionInformation[];
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
}
export declare namespace ListSubscriptionDefinitionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSubscriptionDefinitionsResponse) => any;
}
export interface ListSubscriptionDefinitionVersionsRequest {
    /**
     * The maximum number of results to be returned per request.
     */
    MaxResults?: string;
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * The ID of the subscription definition.
     */
    SubscriptionDefinitionId: string | undefined;
}
export declare namespace ListSubscriptionDefinitionVersionsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSubscriptionDefinitionVersionsRequest) => any;
}
export interface ListSubscriptionDefinitionVersionsResponse {
    /**
     * The token for the next set of results, or ''null'' if there are no additional results.
     */
    NextToken?: string;
    /**
     * Information about a version.
     */
    Versions?: VersionInformation[];
}
export declare namespace ListSubscriptionDefinitionVersionsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListSubscriptionDefinitionVersionsResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
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
     * The key-value pair for the resource tag.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
/**
 * Information needed to reset deployments.
 */
export interface ResetDeploymentsRequest {
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * If true, performs a best-effort only core reset.
     */
    Force?: boolean;
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
}
export declare namespace ResetDeploymentsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResetDeploymentsRequest) => any;
}
export interface ResetDeploymentsResponse {
    /**
     * The ARN of the deployment.
     */
    DeploymentArn?: string;
    /**
     * The ID of the deployment.
     */
    DeploymentId?: string;
}
export declare namespace ResetDeploymentsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResetDeploymentsResponse) => any;
}
export interface StartBulkDeploymentRequest {
    /**
     * A client token used to correlate requests and responses.
     */
    AmznClientToken?: string;
    /**
     * The ARN of the execution role to associate with the bulk deployment operation. This IAM role must allow the ''greengrass:CreateDeployment'' action for all group versions that are listed in the input file. This IAM role must have access to the S3 bucket containing the input file.
     */
    ExecutionRoleArn: string | undefined;
    /**
     * The URI of the input file contained in the S3 bucket. The execution role must have ''getObject'' permissions on this bucket to access the input file. The input file is a JSON-serialized, line delimited file with UTF-8 encoding that provides a list of group and version IDs and the deployment type. This file must be less than 100 MB. Currently, AWS IoT Greengrass supports only ''NewDeployment'' deployment types.
     */
    InputFileUri: string | undefined;
    /**
     * Tag(s) to add to the new resource.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace StartBulkDeploymentRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartBulkDeploymentRequest) => any;
}
export interface StartBulkDeploymentResponse {
    /**
     * The ARN of the bulk deployment.
     */
    BulkDeploymentArn?: string;
    /**
     * The ID of the bulk deployment.
     */
    BulkDeploymentId?: string;
}
export declare namespace StartBulkDeploymentResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StartBulkDeploymentResponse) => any;
}
export interface StopBulkDeploymentRequest {
    /**
     * The ID of the bulk deployment.
     */
    BulkDeploymentId: string | undefined;
}
export declare namespace StopBulkDeploymentRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopBulkDeploymentRequest) => any;
}
export interface StopBulkDeploymentResponse {
}
export declare namespace StopBulkDeploymentResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StopBulkDeploymentResponse) => any;
}
/**
 * A map of the key-value pairs for the resource tag.
 */
export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    ResourceArn: string | undefined;
    /**
     * The key-value pair for the resource tag.
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace TagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    ResourceArn: string | undefined;
    /**
     * An array of tag keys to delete
     */
    TagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
/**
 * Connectivity information.
 */
export interface UpdateConnectivityInfoRequest {
    /**
     * A list of connectivity info.
     */
    ConnectivityInfo?: ConnectivityInfo[];
    /**
     * The thing name.
     */
    ThingName: string | undefined;
}
export declare namespace UpdateConnectivityInfoRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateConnectivityInfoRequest) => any;
}
export interface UpdateConnectivityInfoResponse {
    /**
     * A message about the connectivity info update request.
     */
    Message?: string;
    /**
     * The new version of the connectivity info.
     */
    Version?: string;
}
export declare namespace UpdateConnectivityInfoResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateConnectivityInfoResponse) => any;
}
export interface UpdateConnectorDefinitionRequest {
    /**
     * The ID of the connector definition.
     */
    ConnectorDefinitionId: string | undefined;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace UpdateConnectorDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateConnectorDefinitionRequest) => any;
}
export interface UpdateConnectorDefinitionResponse {
}
export declare namespace UpdateConnectorDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateConnectorDefinitionResponse) => any;
}
export interface UpdateCoreDefinitionRequest {
    /**
     * The ID of the core definition.
     */
    CoreDefinitionId: string | undefined;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace UpdateCoreDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateCoreDefinitionRequest) => any;
}
export interface UpdateCoreDefinitionResponse {
}
export declare namespace UpdateCoreDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateCoreDefinitionResponse) => any;
}
export interface UpdateDeviceDefinitionRequest {
    /**
     * The ID of the device definition.
     */
    DeviceDefinitionId: string | undefined;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace UpdateDeviceDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDeviceDefinitionRequest) => any;
}
export interface UpdateDeviceDefinitionResponse {
}
export declare namespace UpdateDeviceDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateDeviceDefinitionResponse) => any;
}
export interface UpdateFunctionDefinitionRequest {
    /**
     * The ID of the Lambda function definition.
     */
    FunctionDefinitionId: string | undefined;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace UpdateFunctionDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateFunctionDefinitionRequest) => any;
}
export interface UpdateFunctionDefinitionResponse {
}
export declare namespace UpdateFunctionDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateFunctionDefinitionResponse) => any;
}
export interface UpdateGroupRequest {
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace UpdateGroupRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateGroupRequest) => any;
}
export interface UpdateGroupResponse {
}
export declare namespace UpdateGroupResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateGroupResponse) => any;
}
export interface UpdateGroupCertificateConfigurationRequest {
    /**
     * The amount of time remaining before the certificate expires, in milliseconds.
     */
    CertificateExpiryInMilliseconds?: string;
    /**
     * The ID of the Greengrass group.
     */
    GroupId: string | undefined;
}
export declare namespace UpdateGroupCertificateConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateGroupCertificateConfigurationRequest) => any;
}
export interface UpdateGroupCertificateConfigurationResponse {
    /**
     * The amount of time remaining before the certificate authority expires, in milliseconds.
     */
    CertificateAuthorityExpiryInMilliseconds?: string;
    /**
     * The amount of time remaining before the certificate expires, in milliseconds.
     */
    CertificateExpiryInMilliseconds?: string;
    /**
     * The ID of the group certificate configuration.
     */
    GroupId?: string;
}
export declare namespace UpdateGroupCertificateConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateGroupCertificateConfigurationResponse) => any;
}
export interface UpdateLoggerDefinitionRequest {
    /**
     * The ID of the logger definition.
     */
    LoggerDefinitionId: string | undefined;
    /**
     * The name of the definition.
     */
    Name?: string;
}
export declare namespace UpdateLoggerDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLoggerDefinitionRequest) => any;
}
export interface UpdateLoggerDefinitionResponse {
}
export declare namespace UpdateLoggerDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateLoggerDefinitionResponse) => any;
}
export interface UpdateResourceDefinitionRequest {
    /**
     * The name of the definition.
     */
    Name?: string;
    /**
     * The ID of the resource definition.
     */
    ResourceDefinitionId: string | undefined;
}
export declare namespace UpdateResourceDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateResourceDefinitionRequest) => any;
}
export interface UpdateResourceDefinitionResponse {
}
export declare namespace UpdateResourceDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateResourceDefinitionResponse) => any;
}
export interface UpdateSubscriptionDefinitionRequest {
    /**
     * The name of the definition.
     */
    Name?: string;
    /**
     * The ID of the subscription definition.
     */
    SubscriptionDefinitionId: string | undefined;
}
export declare namespace UpdateSubscriptionDefinitionRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateSubscriptionDefinitionRequest) => any;
}
export interface UpdateSubscriptionDefinitionResponse {
}
export declare namespace UpdateSubscriptionDefinitionResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateSubscriptionDefinitionResponse) => any;
}
/**
 * Configuration settings for running telemetry.
 */
export interface TelemetryConfigurationUpdate {
    /**
     * Configure telemetry to be on or off.
     */
    Telemetry: Telemetry | string | undefined;
}
export declare namespace TelemetryConfigurationUpdate {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TelemetryConfigurationUpdate) => any;
}
export interface UpdateThingRuntimeConfigurationRequest {
    /**
     * Configuration for telemetry service.
     */
    TelemetryConfiguration?: TelemetryConfigurationUpdate;
    /**
     * The thing name.
     */
    ThingName: string | undefined;
}
export declare namespace UpdateThingRuntimeConfigurationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateThingRuntimeConfigurationRequest) => any;
}
export interface UpdateThingRuntimeConfigurationResponse {
}
export declare namespace UpdateThingRuntimeConfigurationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateThingRuntimeConfigurationResponse) => any;
}
