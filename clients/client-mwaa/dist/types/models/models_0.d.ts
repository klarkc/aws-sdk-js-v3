import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>Access to the Airflow Web UI or CLI has been Denied. Please follow the MWAA user guide to setup permissions to access the Web UI and CLI functionality.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "AccessDeniedException";
    $fault: "client";
    Message?: string;
}
export declare namespace AccessDeniedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessDeniedException) => any;
}
export interface CreateCliTokenRequest {
    /**
     * <p>Create a CLI token request for a MWAA environment.</p>
     */
    Name: string | undefined;
}
export declare namespace CreateCliTokenRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateCliTokenRequest) => any;
}
export interface CreateCliTokenResponse {
    /**
     * <p>Create an Airflow CLI login token response for the provided JWT token.</p>
     */
    CliToken?: string;
    /**
     * <p>Create an Airflow CLI login token response for the provided webserver hostname.</p>
     */
    WebServerHostname?: string;
}
export declare namespace CreateCliTokenResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateCliTokenResponse) => any;
}
/**
 * <p>ResourceNotFoundException: The resource is not available.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    message?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
export declare enum LoggingLevel {
    CRITICAL = "CRITICAL",
    DEBUG = "DEBUG",
    ERROR = "ERROR",
    INFO = "INFO",
    WARNING = "WARNING"
}
/**
 * <p>Defines the type of logs to send for the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>). Valid values: <code>CloudWatchLogGroupArn</code>, <code>Enabled</code>, <code>LogLevel</code>.</p>
 */
export interface ModuleLoggingConfigurationInput {
    /**
     * <p>Indicates whether to enable the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>) in CloudWatch Logs.</p>
     */
    Enabled: boolean | undefined;
    /**
     * <p>Defines the Apache Airflow logs to send for the log type (e.g. <code>DagProcessingLogs</code>) to CloudWatch Logs. Valid values: <code>CRITICAL</code>, <code>ERROR</code>, <code>WARNING</code>, <code>INFO</code>.</p>
     */
    LogLevel: LoggingLevel | string | undefined;
}
export declare namespace ModuleLoggingConfigurationInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModuleLoggingConfigurationInput) => any;
}
/**
 * <p>Defines the Apache Airflow logs to send to CloudWatch Logs: <code>DagProcessingLogs</code>, <code>SchedulerLogs</code>, <code>TaskLogs</code>, <code>WebserverLogs</code>, <code>WorkerLogs</code>.</p>
 */
export interface LoggingConfigurationInput {
    /**
     * <p>Defines the type of logs to send for the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>). Valid values: <code>CloudWatchLogGroupArn</code>, <code>Enabled</code>, <code>LogLevel</code>.</p>
     */
    DagProcessingLogs?: ModuleLoggingConfigurationInput;
    /**
     * <p>Defines the type of logs to send for the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>). Valid values: <code>CloudWatchLogGroupArn</code>, <code>Enabled</code>, <code>LogLevel</code>.</p>
     */
    SchedulerLogs?: ModuleLoggingConfigurationInput;
    /**
     * <p>Defines the type of logs to send for the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>). Valid values: <code>CloudWatchLogGroupArn</code>, <code>Enabled</code>, <code>LogLevel</code>.</p>
     */
    WebserverLogs?: ModuleLoggingConfigurationInput;
    /**
     * <p>Defines the type of logs to send for the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>). Valid values: <code>CloudWatchLogGroupArn</code>, <code>Enabled</code>, <code>LogLevel</code>.</p>
     */
    WorkerLogs?: ModuleLoggingConfigurationInput;
    /**
     * <p>Defines the type of logs to send for the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>). Valid values: <code>CloudWatchLogGroupArn</code>, <code>Enabled</code>, <code>LogLevel</code>.</p>
     */
    TaskLogs?: ModuleLoggingConfigurationInput;
}
export declare namespace LoggingConfigurationInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LoggingConfigurationInput) => any;
}
/**
 * <p>The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.</p>
 */
export interface NetworkConfiguration {
    /**
     * <p>A list of 2 subnet IDs. <b>Required</b> to create an environment. Must be private subnets in two different availability zones. A subnet must be attached to the same VPC as the security group.</p>
     */
    SubnetIds?: string[];
    /**
     * <p>A list of 1 or more security group IDs. Accepts up to 5 security group IDs. A security group must be attached to the same VPC as the subnets. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/vpc-security.html">Security in your VPC on Amazon MWAA</a>.</p>
     */
    SecurityGroupIds?: string[];
}
export declare namespace NetworkConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NetworkConfiguration) => any;
}
export declare enum WebserverAccessMode {
    PRIVATE_ONLY = "PRIVATE_ONLY",
    PUBLIC_ONLY = "PUBLIC_ONLY"
}
/**
 * <p>This section contains the Amazon Managed Workflows for Apache Airflow (MWAA) API reference documentation to create an environment. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/get-started.html">Get started with Amazon Managed Workflows for Apache Airflow</a>.</p>
 */
export interface CreateEnvironmentInput {
    /**
     * <p>The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
     */
    Name: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the execution role for your environment. An execution role is an AWS Identity and Access Management (IAM) role that grants MWAA permission to access AWS services and resources used by your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.</p>
     */
    ExecutionRoleArn: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.</p>
     */
    SourceBucketArn: string | undefined;
    /**
     * <p>The relative path to the DAGs folder on your Amazon S3 bucket. For example, <code>dags</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.</p>
     */
    DagS3Path: string | undefined;
    /**
     * <p>The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.</p>
     */
    NetworkConfiguration: NetworkConfiguration | undefined;
    /**
     * <p>The relative path to the <code>plugins.zip</code> file on your Amazon S3 bucket. For example, <code>plugins.zip</code>. If specified, then the plugins.zip version is required. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.</p>
     */
    PluginsS3Path?: string;
    /**
     * <p>The version of the plugins.zip file on your Amazon S3 bucket. A version must be specified each time a plugins.zip file is updated. To learn more, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.</p>
     */
    PluginsS3ObjectVersion?: string;
    /**
     * <p>The relative path to the <code>requirements.txt</code> file on your Amazon S3 bucket. For example, <code>requirements.txt</code>. If specified, then a file version is required. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.</p>
     */
    RequirementsS3Path?: string;
    /**
     * <p>The version of the requirements.txt file on your Amazon S3 bucket. A version must be specified each time a requirements.txt file is updated. To learn more, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.</p>
     */
    RequirementsS3ObjectVersion?: string;
    /**
     * <p>A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>.</p>
     */
    AirflowConfigurationOptions?: {
        [key: string]: string;
    };
    /**
     * <p>The environment class type. Valid values: <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>.</p>
     */
    EnvironmentClass?: string;
    /**
     * <p>The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. For example, <code>20</code>. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in <code>MinWorkers</code>.</p>
     */
    MaxWorkers?: number;
    /**
     * <p>The AWS Key Management Service (KMS) key to encrypt the data in your environment. You can use an AWS owned CMK, or a Customer managed CMK (advanced). To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/get-started.html">Get started with Amazon Managed Workflows for Apache Airflow</a>.</p>
     */
    KmsKey?: string;
    /**
     * <p>The Apache Airflow version for your environment. For example, <code>v1.10.12</code>. If no value is specified, defaults to the latest version. Valid values: <code>v1.10.12</code>.</p>
     */
    AirflowVersion?: string;
    /**
     * <p>Defines the Apache Airflow logs to send to CloudWatch Logs: <code>DagProcessingLogs</code>, <code>SchedulerLogs</code>, <code>TaskLogs</code>, <code>WebserverLogs</code>, <code>WorkerLogs</code>.</p>
     */
    LoggingConfiguration?: LoggingConfigurationInput;
    /**
     * <p>The day and time of the week to start weekly maintenance updates of your environment in the following format: <code>DAY:HH:MM</code>. For example: <code>TUE:03:30</code>. You can specify a start time in 30 minute increments only. Supported input includes the following:</p>
     *         <ul>
     *             <li>
     *                 <p>MON|TUE|WED|THU|FRI|SAT|SUN:([01]\\d|2[0-3]):(00|30)</p>
     *             </li>
     *          </ul>
     */
    WeeklyMaintenanceWindowStart?: string;
    /**
     * <p>The key-value tag pairs you want to associate to your environment. For example, <code>"Environment": "Staging"</code>. To learn more, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS resources</a>.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The Apache Airflow <i>Web server</i> access mode. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>.</p>
     */
    WebserverAccessMode?: WebserverAccessMode | string;
    /**
     * <p>The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the <code>MinWorkers</code> field. For example, <code>2</code>.</p>
     */
    MinWorkers?: number;
    /**
     * <p>The number of Apache Airflow schedulers to run in your environment.</p>
     */
    Schedulers?: number;
}
export declare namespace CreateEnvironmentInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateEnvironmentInput) => any;
}
export interface CreateEnvironmentOutput {
    /**
     * <p>The Amazon Resource Name (ARN) returned in the response for the environment.</p>
     */
    Arn?: string;
}
export declare namespace CreateEnvironmentOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateEnvironmentOutput) => any;
}
/**
 * <p>InternalServerException: An internal error has occurred.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
    name: "InternalServerException";
    $fault: "server";
    message?: string;
}
export declare namespace InternalServerException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServerException) => any;
}
/**
 * <p>ValidationException: The provided input is not valid.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
    name: "ValidationException";
    $fault: "client";
    message?: string;
}
export declare namespace ValidationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationException) => any;
}
export interface CreateWebLoginTokenRequest {
    /**
     * <p>Create an Airflow Web UI login token request for a MWAA environment.</p>
     */
    Name: string | undefined;
}
export declare namespace CreateWebLoginTokenRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateWebLoginTokenRequest) => any;
}
export interface CreateWebLoginTokenResponse {
    /**
     * <p>Create an Airflow Web UI login token response for the provided JWT token.</p>
     */
    WebToken?: string;
    /**
     * <p>Create an Airflow Web UI login token response for the provided webserver hostname.</p>
     */
    WebServerHostname?: string;
}
export declare namespace CreateWebLoginTokenResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateWebLoginTokenResponse) => any;
}
export interface DeleteEnvironmentInput {
    /**
     * <p>The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteEnvironmentInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteEnvironmentInput) => any;
}
export interface DeleteEnvironmentOutput {
}
export declare namespace DeleteEnvironmentOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteEnvironmentOutput) => any;
}
export interface GetEnvironmentInput {
    /**
     * <p>The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
     */
    Name: string | undefined;
}
export declare namespace GetEnvironmentInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetEnvironmentInput) => any;
}
/**
 * <p>An object containing the error encountered with the last update: <code>ErrorCode</code>, <code>ErrorMessage</code>.</p>
 */
export interface UpdateError {
    /**
     * <p>The error code that corresponds to the error with the last update.</p>
     */
    ErrorCode?: string;
    /**
     * <p>The error message that corresponds to the error code.</p>
     */
    ErrorMessage?: string;
}
export declare namespace UpdateError {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateError) => any;
}
export declare enum UpdateStatus {
    FAILED = "FAILED",
    PENDING = "PENDING",
    SUCCESS = "SUCCESS"
}
/**
 * <p>The status of the last update on the environment, and any errors that were encountered.</p>
 */
export interface LastUpdate {
    /**
     * <p>The status of the last update on the environment. Valid values: <code>SUCCESS</code>, <code>PENDING</code>, <code>FAILED</code>.</p>
     */
    Status?: UpdateStatus | string;
    /**
     * <p>The day and time of the last update on the environment.</p>
     */
    CreatedAt?: Date;
    /**
     * <p>The error that was encountered during the last update of the environment.</p>
     */
    Error?: UpdateError;
}
export declare namespace LastUpdate {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LastUpdate) => any;
}
/**
 * <p>Defines the type of logs to send for the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>). Valid values: <code>CloudWatchLogGroupArn</code>, <code>Enabled</code>, <code>LogLevel</code>.</p>
 */
export interface ModuleLoggingConfiguration {
    /**
     * <p>Indicates whether to enable the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>) in CloudWatch Logs.</p>
     */
    Enabled?: boolean;
    /**
     * <p>Defines the Apache Airflow logs to send for the log type (e.g. <code>DagProcessingLogs</code>) to CloudWatch Logs. Valid values: <code>CRITICAL</code>, <code>ERROR</code>, <code>WARNING</code>, <code>INFO</code>.</p>
     */
    LogLevel?: LoggingLevel | string;
    /**
     * <p>The Amazon Resource Name (ARN) for the CloudWatch Logs group where the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>) is published. For example, <code>arn:aws:logs:us-east-1:123456789012:log-group:airflow-MyMWAAEnvironment-MwaaEnvironment-DAGProcessing:*</code>.</p>
     */
    CloudWatchLogGroupArn?: string;
}
export declare namespace ModuleLoggingConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ModuleLoggingConfiguration) => any;
}
/**
 * <p>Defines the Apache Airflow logs to send to CloudWatch Logs: <code>DagProcessingLogs</code>, <code>SchedulerLogs</code>, <code>TaskLogs</code>, <code>WebserverLogs</code>, <code>WorkerLogs</code>.</p>
 */
export interface LoggingConfiguration {
    /**
     * <p>Defines the type of logs to send for the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>). Valid values: <code>CloudWatchLogGroupArn</code>, <code>Enabled</code>, <code>LogLevel</code>.</p>
     */
    DagProcessingLogs?: ModuleLoggingConfiguration;
    /**
     * <p>Defines the type of logs to send for the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>). Valid values: <code>CloudWatchLogGroupArn</code>, <code>Enabled</code>, <code>LogLevel</code>.</p>
     */
    SchedulerLogs?: ModuleLoggingConfiguration;
    /**
     * <p>Defines the type of logs to send for the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>). Valid values: <code>CloudWatchLogGroupArn</code>, <code>Enabled</code>, <code>LogLevel</code>.</p>
     */
    WebserverLogs?: ModuleLoggingConfiguration;
    /**
     * <p>Defines the type of logs to send for the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>). Valid values: <code>CloudWatchLogGroupArn</code>, <code>Enabled</code>, <code>LogLevel</code>.</p>
     */
    WorkerLogs?: ModuleLoggingConfiguration;
    /**
     * <p>Defines the type of logs to send for the Apache Airflow log type (e.g. <code>DagProcessingLogs</code>). Valid values: <code>CloudWatchLogGroupArn</code>, <code>Enabled</code>, <code>LogLevel</code>.</p>
     */
    TaskLogs?: ModuleLoggingConfiguration;
}
export declare namespace LoggingConfiguration {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LoggingConfiguration) => any;
}
export declare enum EnvironmentStatus {
    AVAILABLE = "AVAILABLE",
    CREATE_FAILED = "CREATE_FAILED",
    CREATING = "CREATING",
    DELETED = "DELETED",
    DELETING = "DELETING",
    UNAVAILABLE = "UNAVAILABLE",
    UPDATE_FAILED = "UPDATE_FAILED",
    UPDATING = "UPDATING"
}
/**
 * <p>The Amazon Managed Workflows for Apache Airflow (MWAA) environment.</p>
 */
export interface Environment {
    /**
     * <p>The name of the Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
     */
    Name?: string;
    /**
     * <p>The status of the Amazon MWAA environment. Valid values:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>CREATING</code> - Indicates the request to create the environment is in progress.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>CREATE_FAILED</code> - Indicates the request to create the environment failed, and the environment could not be created.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>AVAILABLE</code> - Indicates the request was successful and the environment is ready to use.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>UPDATING</code> - Indicates the request to update the environment is in progress.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>DELETING</code> - Indicates the request to delete the environment is in progress.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>DELETED</code> - Indicates the request to delete the environment is complete, and the environment has been deleted.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>UNAVAILABLE</code> - Indicates the request failed, but the environment was unable to rollback and is not in a stable state.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>UPDATE_FAILED</code> - Indicates the request to update the environment failed, and the environment has rolled back successfully and is ready to use.</p>
     *             </li>
     *          </ul>
     *         <p>We recommend reviewing our troubleshooting guide for a list of common errors and their solutions. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/troubleshooting.html">Amazon MWAA troubleshooting</a>.</p>
     */
    Status?: EnvironmentStatus | string;
    /**
     * <p>The Amazon Resource Name (ARN) of the Amazon MWAA environment.</p>
     */
    Arn?: string;
    /**
     * <p>The day and time the environment was created.</p>
     */
    CreatedAt?: Date;
    /**
     * <p>The Apache Airflow <i>Web server</i> host name for the Amazon MWAA environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/access-airflow-ui.html">Accessing the Apache Airflow UI</a>.</p>
     */
    WebserverUrl?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the execution role in IAM that allows MWAA to access AWS resources in your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.</p>
     */
    ExecutionRoleArn?: string;
    /**
     * <p>The Amazon Resource Name (ARN) for the service-linked role of the environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-slr.html">Amazon MWAA Service-linked role</a>.</p>
     */
    ServiceRoleArn?: string;
    /**
     * <p>The Key Management Service (KMS) encryption key used to encrypt the data in your environment.</p>
     */
    KmsKey?: string;
    /**
     * <p>The Apache Airflow version on your environment. For example, <code>v1.10.12</code>.</p>
     */
    AirflowVersion?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.</p>
     */
    SourceBucketArn?: string;
    /**
     * <p>The relative path to the DAGs folder on your Amazon S3 bucket. For example, <code>dags</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.</p>
     */
    DagS3Path?: string;
    /**
     * <p>The relative path to the <code>plugins.zip</code> file on your Amazon S3 bucket. For example, <code>plugins.zip</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.</p>
     */
    PluginsS3Path?: string;
    /**
     * <p>The version of the plugins.zip file on your Amazon S3 bucket. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.</p>
     */
    PluginsS3ObjectVersion?: string;
    /**
     * <p>The relative path to the <code>requirements.txt</code> file on your Amazon S3 bucket. For example, <code>requirements.txt</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.</p>
     */
    RequirementsS3Path?: string;
    /**
     * <p>The version of the requirements.txt file on your Amazon S3 bucket. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.</p>
     */
    RequirementsS3ObjectVersion?: string;
    /**
     * <p>A list of key-value pairs containing the Apache Airflow configuration options attached to your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>.</p>
     */
    AirflowConfigurationOptions?: {
        [key: string]: string;
    };
    /**
     * <p>The environment class type. Valid values: <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>.</p>
     */
    EnvironmentClass?: string;
    /**
     * <p>The maximum number of workers that run in your environment. For example, <code>20</code>.</p>
     */
    MaxWorkers?: number;
    /**
     * <p>The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.</p>
     */
    NetworkConfiguration?: NetworkConfiguration;
    /**
     * <p>The Apache Airflow logs being sent to CloudWatch Logs: <code>DagProcessingLogs</code>, <code>SchedulerLogs</code>, <code>TaskLogs</code>, <code>WebserverLogs</code>, <code>WorkerLogs</code>.</p>
     */
    LoggingConfiguration?: LoggingConfiguration;
    /**
     * <p>The status of the last update on the environment, and any errors that were encountered.</p>
     */
    LastUpdate?: LastUpdate;
    /**
     * <p>The day and time of the week that weekly maintenance updates are scheduled. For example: <code>TUE:03:30</code>.</p>
     */
    WeeklyMaintenanceWindowStart?: string;
    /**
     * <p>The key-value tag pairs associated to your environment. For example, <code>"Environment": "Staging"</code>. To learn more, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS resources</a>.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The Apache Airflow <i>Web server</i> access mode. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>.</p>
     */
    WebserverAccessMode?: WebserverAccessMode | string;
    /**
     * <p>The minimum number of workers that run in your environment. For example, <code>2</code>.</p>
     */
    MinWorkers?: number;
    /**
     * <p>The number of Apache Airflow schedulers that run in your Amazon MWAA environment.</p>
     */
    Schedulers?: number;
}
export declare namespace Environment {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Environment) => any;
}
export interface GetEnvironmentOutput {
    /**
     * <p>An object containing all available details about the environment.</p>
     */
    Environment?: Environment;
}
export declare namespace GetEnvironmentOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GetEnvironmentOutput) => any;
}
export interface ListEnvironmentsInput {
    /**
     * <p>Retrieves the next page of the results.</p>
     */
    NextToken?: string;
    /**
     * <p>The maximum number of results to retrieve per page. For example, <code>5</code> environments per page.</p>
     */
    MaxResults?: number;
}
export declare namespace ListEnvironmentsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListEnvironmentsInput) => any;
}
export interface ListEnvironmentsOutput {
    /**
     * <p>Returns the list of Amazon MWAA environments.</p>
     */
    Environments: string[] | undefined;
    /**
     * <p>Retrieves the next page of the results.</p>
     */
    NextToken?: string;
}
export declare namespace ListEnvironmentsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListEnvironmentsOutput) => any;
}
export interface ListTagsForResourceInput {
    /**
     * <p>The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.</p>
     */
    ResourceArn: string | undefined;
}
export declare namespace ListTagsForResourceInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceInput) => any;
}
export interface ListTagsForResourceOutput {
    /**
     * <p>The key-value tag pairs associated to your environment. To learn more, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS resources</a>.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceOutput) => any;
}
/**
 * <p>Internal only API.</p>
 */
export interface Dimension {
    /**
     * <p>Internal only API.</p>
     */
    Name: string | undefined;
    /**
     * <p>Internal only API.</p>
     */
    Value: string | undefined;
}
export declare namespace Dimension {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Dimension) => any;
}
/**
 * <p>Internal only API.</p>
 */
export interface StatisticSet {
    /**
     * <p>Internal only API.</p>
     */
    SampleCount?: number;
    /**
     * <p>Internal only API.</p>
     */
    Sum?: number;
    /**
     * <p>Internal only API.</p>
     */
    Minimum?: number;
    /**
     * <p>Internal only API.</p>
     */
    Maximum?: number;
}
export declare namespace StatisticSet {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: StatisticSet) => any;
}
export declare enum Unit {
    BITS = "Bits",
    BITS_PER_SECOND = "Bits/Second",
    BYTES = "Bytes",
    BYTES_PER_SECOND = "Bytes/Second",
    COUNT = "Count",
    COUNT_PER_SECOND = "Count/Second",
    GIGABITS = "Gigabits",
    GIGABITS_PER_SECOND = "Gigabits/Second",
    GIGABYTES = "Gigabytes",
    GIGABYTES_PER_SECOND = "Gigabytes/Second",
    KILOBITS = "Kilobits",
    KILOBITS_PER_SECOND = "Kilobits/Second",
    KILOBYTES = "Kilobytes",
    KILOBYTES_PER_SECOND = "Kilobytes/Second",
    MEGABITS = "Megabits",
    MEGABITS_PER_SECOND = "Megabits/Second",
    MEGABYTES = "Megabytes",
    MEGABYTES_PER_SECOND = "Megabytes/Second",
    MICROSECONDS = "Microseconds",
    MILLISECONDS = "Milliseconds",
    NONE = "None",
    PERCENT = "Percent",
    SECONDS = "Seconds",
    TERABITS = "Terabits",
    TERABITS_PER_SECOND = "Terabits/Second",
    TERABYTES = "Terabytes",
    TERABYTES_PER_SECOND = "Terabytes/Second"
}
/**
 * <p>Internal only API.</p>
 */
export interface MetricDatum {
    /**
     * <p>Internal only API.</p>
     */
    MetricName: string | undefined;
    /**
     * <p>Internal only API.</p>
     */
    Timestamp: Date | undefined;
    /**
     * <p>Internal only API.</p>
     */
    Dimensions?: Dimension[];
    /**
     * <p>Internal only API.</p>
     */
    Value?: number;
    /**
     * Unit
     */
    Unit?: Unit | string;
    /**
     * <p>Internal only API.</p>
     */
    StatisticValues?: StatisticSet;
}
export declare namespace MetricDatum {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MetricDatum) => any;
}
export interface PublishMetricsInput {
    /**
     * <p>Publishes environment metric data to Amazon CloudWatch.</p>
     */
    EnvironmentName: string | undefined;
    /**
     * <p>Publishes metric data points to Amazon CloudWatch. CloudWatch associates the data points with the specified metrica.</p>
     */
    MetricData: MetricDatum[] | undefined;
}
export declare namespace PublishMetricsInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PublishMetricsInput) => any;
}
export interface PublishMetricsOutput {
}
export declare namespace PublishMetricsOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PublishMetricsOutput) => any;
}
export interface TagResourceInput {
    /**
     * <p>The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The key-value tag pairs you want to associate to your environment. For example, <code>"Environment": "Staging"</code>. To learn more, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS resources</a>.</p>
     */
    Tags: {
        [key: string]: string;
    } | undefined;
}
export declare namespace TagResourceInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceInput) => any;
}
export interface TagResourceOutput {
}
export declare namespace TagResourceOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceOutput) => any;
}
export interface UntagResourceInput {
    /**
     * <p>The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The key-value tag pair you want to remove. For example, <code>"Environment": "Staging"</code>. </p>
     */
    tagKeys: string[] | undefined;
}
export declare namespace UntagResourceInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceInput) => any;
}
export interface UntagResourceOutput {
}
export declare namespace UntagResourceOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceOutput) => any;
}
/**
 * <p>The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.</p>
 */
export interface UpdateNetworkConfigurationInput {
    /**
     * <p>A list of 1 or more security group IDs. Accepts up to 5 security group IDs. A security group must be attached to the same VPC as the subnets. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/vpc-security.html">Security in your VPC on Amazon MWAA</a>.</p>
     */
    SecurityGroupIds: string[] | undefined;
}
export declare namespace UpdateNetworkConfigurationInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateNetworkConfigurationInput) => any;
}
export interface UpdateEnvironmentInput {
    /**
     * <p>The name of your Amazon MWAA environment. For example, <code>MyMWAAEnvironment</code>.</p>
     */
    Name: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the execution role in IAM that allows MWAA to access AWS resources in your environment. For example, <code>arn:aws:iam::123456789:role/my-execution-role</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html">Amazon MWAA Execution role</a>.</p>
     */
    ExecutionRoleArn?: string;
    /**
     * <p>The Apache Airflow version for your environment. For example, <code>v1.10.12</code>. If no value is specified, defaults to the latest version. Valid values: <code>v1.10.12</code>.</p>
     */
    AirflowVersion?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, <code>arn:aws:s3:::my-airflow-bucket-unique-name</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html">Create an Amazon S3 bucket for Amazon MWAA</a>.</p>
     */
    SourceBucketArn?: string;
    /**
     * <p>The relative path to the DAGs folder on your Amazon S3 bucket. For example, <code>dags</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html">Adding or updating DAGs</a>.</p>
     */
    DagS3Path?: string;
    /**
     * <p>The relative path to the <code>plugins.zip</code> file on your Amazon S3 bucket. For example, <code>plugins.zip</code>. If specified, then the plugins.zip version is required. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html">Installing custom plugins</a>.</p>
     */
    PluginsS3Path?: string;
    /**
     * <p>The version of the plugins.zip file on your Amazon S3 bucket. A version must be specified each time a plugins.zip file is updated. To learn more, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.</p>
     */
    PluginsS3ObjectVersion?: string;
    /**
     * <p>The relative path to the <code>requirements.txt</code> file on your Amazon S3 bucket. For example, <code>requirements.txt</code>. If specified, then a file version is required. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html">Installing Python dependencies</a>.</p>
     */
    RequirementsS3Path?: string;
    /**
     * <p>The version of the requirements.txt file on your Amazon S3 bucket. A version must be specified each time a requirements.txt file is updated. To learn more, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html">How S3 Versioning works</a>.</p>
     */
    RequirementsS3ObjectVersion?: string;
    /**
     * <p>A list of key-value pairs containing the Apache Airflow configuration options you want to attach to your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html">Apache Airflow configuration options</a>.</p>
     */
    AirflowConfigurationOptions?: {
        [key: string]: string;
    };
    /**
     * <p>The environment class type. Valid values: <code>mw1.small</code>, <code>mw1.medium</code>, <code>mw1.large</code>. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html">Amazon MWAA environment class</a>.</p>
     */
    EnvironmentClass?: string;
    /**
     * <p>The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. For example, <code>20</code>. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in <code>MinWorkers</code>.</p>
     */
    MaxWorkers?: number;
    /**
     * <p>The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.</p>
     */
    NetworkConfiguration?: UpdateNetworkConfigurationInput;
    /**
     * <p>Defines the Apache Airflow logs to send to CloudWatch Logs: <code>DagProcessingLogs</code>, <code>SchedulerLogs</code>, <code>TaskLogs</code>, <code>WebserverLogs</code>, <code>WorkerLogs</code>.</p>
     */
    LoggingConfiguration?: LoggingConfigurationInput;
    /**
     * <p>The day and time of the week to start weekly maintenance updates of your environment in the following format: <code>DAY:HH:MM</code>. For example: <code>TUE:03:30</code>. You can specify a start time in 30 minute increments only. Supported input includes the following:</p>
     *         <ul>
     *             <li>
     *                 <p>MON|TUE|WED|THU|FRI|SAT|SUN:([01]\\d|2[0-3]):(00|30)</p>
     *             </li>
     *          </ul>
     */
    WeeklyMaintenanceWindowStart?: string;
    /**
     * <p>The Apache Airflow <i>Web server</i> access mode. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html">Apache Airflow access modes</a>.</p>
     */
    WebserverAccessMode?: WebserverAccessMode | string;
    /**
     * <p>The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the <code>MaxWorkers</code> field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the <code>MinWorkers</code> field. For example, <code>2</code>.</p>
     */
    MinWorkers?: number;
    /**
     * <p>The number of Apache Airflow schedulers to run in your Amazon MWAA environment.</p>
     */
    Schedulers?: number;
}
export declare namespace UpdateEnvironmentInput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateEnvironmentInput) => any;
}
export interface UpdateEnvironmentOutput {
    /**
     * <p>The Amazon Resource Name (ARN) of the Amazon MWAA environment. For example, <code>arn:aws:airflow:us-east-1:123456789012:environment/MyMWAAEnvironment</code>.</p>
     */
    Arn?: string;
}
export declare namespace UpdateEnvironmentOutput {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateEnvironmentOutput) => any;
}
