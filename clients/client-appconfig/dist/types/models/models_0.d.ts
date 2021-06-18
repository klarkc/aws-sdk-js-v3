import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export interface Application {
  /**
   * <p>The application ID.</p>
   */
  Id?: string;
  /**
   * <p>The application name.</p>
   */
  Name?: string;
  /**
   * <p>The description of the application.</p>
   */
  Description?: string;
}
export declare namespace Application {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Application) => any;
}
/**
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Message?: string;
}
export declare namespace BadRequestException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: BadRequestException) => any;
}
export interface CreateApplicationRequest {
  /**
   * <p>A name for the application.</p>
   */
  Name: string | undefined;
  /**
   * <p>A description of the application.</p>
   */
  Description?: string;
  /**
   * <p>Metadata to assign to the application. Tags help organize and categorize your AppConfig
   *          resources. Each tag consists of a key and an optional value, both of which you
   *          define.</p>
   */
  Tags?: {
    [key: string]: string;
  };
}
export declare namespace CreateApplicationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateApplicationRequest) => any;
}
/**
 * <p>There was an internal failure in the AppConfig service.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}
export declare namespace InternalServerException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: InternalServerException) => any;
}
export declare enum ValidatorType {
  JSON_SCHEMA = "JSON_SCHEMA",
  LAMBDA = "LAMBDA",
}
/**
 * <p>A validator provides a syntactic or semantic check to ensure the configuration you want
 *          to deploy functions as intended. To validate your application configuration data, you
 *          provide a schema or a Lambda function that runs against the configuration. The
 *          configuration deployment or update can only proceed when the configuration data is
 *          valid.</p>
 */
export interface Validator {
  /**
   * <p>AppConfig supports validators of type <code>JSON_SCHEMA</code> and
   *          <code>LAMBDA</code>
   *          </p>
   */
  Type: ValidatorType | string | undefined;
  /**
   * <p>Either the JSON Schema content or the Amazon Resource Name (ARN) of an AWS Lambda
   *          function.</p>
   */
  Content: string | undefined;
}
export declare namespace Validator {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Validator) => any;
}
export interface ConfigurationProfile {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId?: string;
  /**
   * <p>The configuration profile ID.</p>
   */
  Id?: string;
  /**
   * <p>The name of the configuration profile.</p>
   */
  Name?: string;
  /**
   * <p>The configuration profile description.</p>
   */
  Description?: string;
  /**
   * <p>The URI location of the configuration.</p>
   */
  LocationUri?: string;
  /**
   * <p>The ARN of an IAM role with permission to access the configuration at the specified
   *          LocationUri.</p>
   */
  RetrievalRoleArn?: string;
  /**
   * <p>A list of methods for validating the configuration.</p>
   */
  Validators?: Validator[];
}
export declare namespace ConfigurationProfile {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ConfigurationProfile) => any;
}
export interface CreateConfigurationProfileRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;
  /**
   * <p>A name for the configuration profile.</p>
   */
  Name: string | undefined;
  /**
   * <p>A description of the configuration profile.</p>
   */
  Description?: string;
  /**
   * <p>A URI to locate the configuration. You can specify a Systems Manager (SSM) document, an SSM
   *          Parameter Store parameter, or an Amazon S3 object. For an SSM document, specify either the
   *          document name in the format <code>ssm-document://<Document_name></code> or the Amazon
   *          Resource Name (ARN). For a parameter, specify either the parameter name in the format
   *             <code>ssm-parameter://<Parameter_name></code> or the ARN. For an Amazon S3 object,
   *          specify the URI in the following format: <code>s3://<bucket>/<objectKey>
   *          </code>. Here is an example: s3://my-bucket/my-app/us-east-1/my-config.json</p>
   */
  LocationUri: string | undefined;
  /**
   * <p>The ARN of an IAM role with permission to access the configuration at the specified
   *          LocationUri.</p>
   */
  RetrievalRoleArn?: string;
  /**
   * <p>A list of methods for validating the configuration.</p>
   */
  Validators?: Validator[];
  /**
   * <p>Metadata to assign to the configuration profile. Tags help organize and categorize your
   *          AppConfig resources. Each tag consists of a key and an optional value, both of which you
   *          define.</p>
   */
  Tags?: {
    [key: string]: string;
  };
}
export declare namespace CreateConfigurationProfileRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateConfigurationProfileRequest) => any;
}
/**
 * <p>The requested resource could not be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
  ResourceName?: string;
}
export declare namespace ResourceNotFoundException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
export declare enum GrowthType {
  EXPONENTIAL = "EXPONENTIAL",
  LINEAR = "LINEAR",
}
export declare enum ReplicateTo {
  NONE = "NONE",
  SSM_DOCUMENT = "SSM_DOCUMENT",
}
export interface CreateDeploymentStrategyRequest {
  /**
   * <p>A name for the deployment strategy.</p>
   */
  Name: string | undefined;
  /**
   * <p>A description of the deployment strategy.</p>
   */
  Description?: string;
  /**
   * <p>Total amount of time for a deployment to last.</p>
   */
  DeploymentDurationInMinutes: number | undefined;
  /**
   * <p>The amount of time AppConfig monitors for alarms before considering the deployment to be
   *          complete and no longer eligible for automatic roll back.</p>
   */
  FinalBakeTimeInMinutes?: number;
  /**
   * <p>The percentage of targets to receive a deployed configuration during each
   *          interval.</p>
   */
  GrowthFactor: number | undefined;
  /**
   * <p>The algorithm used to define how percentage grows over time. AWS AppConfig supports the
   *          following growth types:</p>
   *          <p>
   *             <b>Linear</b>: For this type, AppConfig processes the
   *          deployment by dividing the total number of targets by the value specified for <code>Step
   *             percentage</code>. For example, a linear deployment that uses a <code>Step
   *             percentage</code> of 10 deploys the configuration to 10 percent of the hosts. After
   *          those deployments are complete, the system deploys the configuration to the next 10
   *          percent. This continues until 100% of the targets have successfully received the
   *          configuration.</p>
   *
   *          <p>
   *             <b>Exponential</b>: For this type, AppConfig processes the
   *          deployment exponentially using the following formula: <code>G*(2^N)</code>. In this
   *          formula, <code>G</code> is the growth factor specified by the user and <code>N</code> is
   *          the number of steps until the configuration is deployed to all targets. For example, if you
   *          specify a growth factor of 2, then the system rolls out the configuration as
   *          follows:</p>
   *          <p>
   *             <code>2*(2^0)</code>
   *          </p>
   *          <p>
   *             <code>2*(2^1)</code>
   *          </p>
   *          <p>
   *             <code>2*(2^2)</code>
   *          </p>
   *          <p>Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the
   *          targets, 8% of the targets, and continues until the configuration has been deployed to all
   *          targets.</p>
   */
  GrowthType?: GrowthType | string;
  /**
   * <p>Save the deployment strategy to a Systems Manager (SSM) document.</p>
   */
  ReplicateTo: ReplicateTo | string | undefined;
  /**
   * <p>Metadata to assign to the deployment strategy. Tags help organize and categorize your
   *          AppConfig resources. Each tag consists of a key and an optional value, both of which you
   *          define.</p>
   */
  Tags?: {
    [key: string]: string;
  };
}
export declare namespace CreateDeploymentStrategyRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateDeploymentStrategyRequest) => any;
}
export interface DeploymentStrategy {
  /**
   * <p>The deployment strategy ID.</p>
   */
  Id?: string;
  /**
   * <p>The name of the deployment strategy.</p>
   */
  Name?: string;
  /**
   * <p>The description of the deployment strategy.</p>
   */
  Description?: string;
  /**
   * <p>Total amount of time the deployment lasted.</p>
   */
  DeploymentDurationInMinutes?: number;
  /**
   * <p>The algorithm used to define how percentage grew over time.</p>
   */
  GrowthType?: GrowthType | string;
  /**
   * <p>The percentage of targets that received a deployed configuration during each
   *          interval.</p>
   */
  GrowthFactor?: number;
  /**
   * <p>The amount of time AppConfig monitored for alarms before considering the deployment to be
   *          complete and no longer eligible for automatic roll back.</p>
   */
  FinalBakeTimeInMinutes?: number;
  /**
   * <p>Save the deployment strategy to a Systems Manager (SSM) document.</p>
   */
  ReplicateTo?: ReplicateTo | string;
}
export declare namespace DeploymentStrategy {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeploymentStrategy) => any;
}
/**
 * <p>Amazon CloudWatch alarms to monitor during the deployment process.</p>
 */
export interface Monitor {
  /**
   * <p>ARN of the Amazon CloudWatch alarm.</p>
   */
  AlarmArn?: string;
  /**
   * <p>ARN of an IAM role for AppConfig to monitor <code>AlarmArn</code>.</p>
   */
  AlarmRoleArn?: string;
}
export declare namespace Monitor {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Monitor) => any;
}
export interface CreateEnvironmentRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;
  /**
   * <p>A name for the environment.</p>
   */
  Name: string | undefined;
  /**
   * <p>A description of the environment.</p>
   */
  Description?: string;
  /**
   * <p>Amazon CloudWatch alarms to monitor during the deployment process.</p>
   */
  Monitors?: Monitor[];
  /**
   * <p>Metadata to assign to the environment. Tags help organize and categorize your AppConfig
   *          resources. Each tag consists of a key and an optional value, both of which you
   *          define.</p>
   */
  Tags?: {
    [key: string]: string;
  };
}
export declare namespace CreateEnvironmentRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateEnvironmentRequest) => any;
}
export declare enum EnvironmentState {
  DEPLOYING = "DEPLOYING",
  READY_FOR_DEPLOYMENT = "READY_FOR_DEPLOYMENT",
  ROLLED_BACK = "ROLLED_BACK",
  ROLLING_BACK = "ROLLING_BACK",
}
export interface Environment {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId?: string;
  /**
   * <p>The environment ID.</p>
   */
  Id?: string;
  /**
   * <p>The name of the environment.</p>
   */
  Name?: string;
  /**
   * <p>The description of the environment.</p>
   */
  Description?: string;
  /**
   * <p>The state of the environment. An environment can be in one of the following states:
   *             <code>READY_FOR_DEPLOYMENT</code>, <code>DEPLOYING</code>, <code>ROLLING_BACK</code>, or
   *             <code>ROLLED_BACK</code>
   *          </p>
   */
  State?: EnvironmentState | string;
  /**
   * <p>Amazon CloudWatch alarms monitored during the deployment.</p>
   */
  Monitors?: Monitor[];
}
export declare namespace Environment {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Environment) => any;
}
/**
 * <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}
export declare namespace ConflictException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ConflictException) => any;
}
export interface CreateHostedConfigurationVersionRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;
  /**
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId: string | undefined;
  /**
   * <p>A description of the configuration.</p>
   */
  Description?: string;
  /**
   * <p>The content of the configuration or the configuration data.</p>
   */
  Content: Uint8Array | undefined;
  /**
   * <p>A standard MIME type describing the format of the configuration content. For more
   *          information, see <a href="https://docs.aws.amazon.com/https:/www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</a>.</p>
   */
  ContentType: string | undefined;
  /**
   * <p>An optional locking token used to prevent race conditions from overwriting configuration
   *          updates when creating a new version. To ensure your data is not overwritten when creating
   *          multiple hosted configuration versions in rapid succession, specify the version of the
   *          latest hosted configuration version.</p>
   */
  LatestVersionNumber?: number;
}
export declare namespace CreateHostedConfigurationVersionRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: CreateHostedConfigurationVersionRequest) => any;
}
export interface HostedConfigurationVersion {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId?: string;
  /**
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId?: string;
  /**
   * <p>The configuration version.</p>
   */
  VersionNumber?: number;
  /**
   * <p>A description of the configuration.</p>
   */
  Description?: string;
  /**
   * <p>The content of the configuration or the configuration data.</p>
   */
  Content?: Uint8Array;
  /**
   * <p>A standard MIME type describing the format of the configuration content. For more
   *          information, see <a href="https://docs.aws.amazon.com/https:/www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</a>.</p>
   */
  ContentType?: string;
}
export declare namespace HostedConfigurationVersion {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: HostedConfigurationVersion) => any;
}
export declare enum BytesMeasure {
  KILOBYTES = "KILOBYTES",
}
/**
 * <p>The configuration size is too large.</p>
 */
export interface PayloadTooLargeException extends __SmithyException, $MetadataBearer {
  name: "PayloadTooLargeException";
  $fault: "client";
  Message?: string;
  Measure?: BytesMeasure | string;
  Limit?: number;
  Size?: number;
}
export declare namespace PayloadTooLargeException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: PayloadTooLargeException) => any;
}
/**
 * <p>The number of hosted configuration versions exceeds the limit for the AppConfig
 *          configuration store. Delete one or more versions and try again.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  Message?: string;
}
export declare namespace ServiceQuotaExceededException {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ServiceQuotaExceededException) => any;
}
export interface DeleteApplicationRequest {
  /**
   * <p>The ID of the application to delete.</p>
   */
  ApplicationId: string | undefined;
}
export declare namespace DeleteApplicationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteApplicationRequest) => any;
}
export interface DeleteConfigurationProfileRequest {
  /**
   * <p>The application ID that includes the configuration profile you want to delete.</p>
   */
  ApplicationId: string | undefined;
  /**
   * <p>The ID of the configuration profile you want to delete.</p>
   */
  ConfigurationProfileId: string | undefined;
}
export declare namespace DeleteConfigurationProfileRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteConfigurationProfileRequest) => any;
}
export interface DeleteDeploymentStrategyRequest {
  /**
   * <p>The ID of the deployment strategy you want to delete.</p>
   */
  DeploymentStrategyId: string | undefined;
}
export declare namespace DeleteDeploymentStrategyRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteDeploymentStrategyRequest) => any;
}
export interface DeleteEnvironmentRequest {
  /**
   * <p>The application ID that includes the environment you want to delete.</p>
   */
  ApplicationId: string | undefined;
  /**
   * <p>The ID of the environment you want to delete.</p>
   */
  EnvironmentId: string | undefined;
}
export declare namespace DeleteEnvironmentRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteEnvironmentRequest) => any;
}
export interface DeleteHostedConfigurationVersionRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;
  /**
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId: string | undefined;
  /**
   * <p>The versions number to delete.</p>
   */
  VersionNumber: number | undefined;
}
export declare namespace DeleteHostedConfigurationVersionRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeleteHostedConfigurationVersionRequest) => any;
}
export interface GetApplicationRequest {
  /**
   * <p>The ID of the application you want to get.</p>
   */
  ApplicationId: string | undefined;
}
export declare namespace GetApplicationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetApplicationRequest) => any;
}
export interface Configuration {
  /**
   * <p>The content of the configuration or the configuration data.</p>
   */
  Content?: Uint8Array;
  /**
   * <p>The configuration version.</p>
   */
  ConfigurationVersion?: string;
  /**
   * <p>A standard MIME type describing the format of the configuration content. For more
   *          information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</a>.</p>
   */
  ContentType?: string;
}
export declare namespace Configuration {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Configuration) => any;
}
export interface GetConfigurationRequest {
  /**
   * <p>The application to get. Specify either the application name or the application
   *          ID.</p>
   */
  Application: string | undefined;
  /**
   * <p>The environment to get. Specify either the environment name or the environment
   *          ID.</p>
   */
  Environment: string | undefined;
  /**
   * <p>The configuration to get. Specify either the configuration name or the configuration
   *          ID.</p>
   */
  Configuration: string | undefined;
  /**
   * <p>A unique ID to identify the client for the configuration. This ID enables AppConfig to
   *          deploy the configuration in intervals, as defined in the deployment strategy.</p>
   */
  ClientId: string | undefined;
  /**
   * <p>The configuration version returned in the most recent <code>GetConfiguration</code>
   *          response.</p>
   *          <important>
   *             <p>AWS AppConfig uses the value of the <code>ClientConfigurationVersion</code> parameter
   *             to identify the configuration version on your clients. If you don’t send
   *                <code>ClientConfigurationVersion</code> with each call to
   *                <code>GetConfiguration</code>, your clients receive the current configuration. You
   *             are charged each time your clients receive a configuration.</p>
   *             <p>To avoid excess charges, we recommend that you include the
   *                <code>ClientConfigurationVersion</code> value with every call to
   *                <code>GetConfiguration</code>. This value must be saved on your client. Subsequent
   *             calls to <code>GetConfiguration</code> must pass this value by using the
   *                <code>ClientConfigurationVersion</code> parameter. </p>
   *          </important>
   *          <p>For more information about working with configurations, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-retrieving-the-configuration.html">Retrieving the Configuration</a> in the
   *          <i>AWS AppConfig User Guide</i>.</p>
   */
  ClientConfigurationVersion?: string;
}
export declare namespace GetConfigurationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetConfigurationRequest) => any;
}
export interface GetConfigurationProfileRequest {
  /**
   * <p>The ID of the application that includes the configuration profile you want to
   *          get.</p>
   */
  ApplicationId: string | undefined;
  /**
   * <p>The ID of the configuration profile you want to get.</p>
   */
  ConfigurationProfileId: string | undefined;
}
export declare namespace GetConfigurationProfileRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetConfigurationProfileRequest) => any;
}
export declare enum DeploymentEventType {
  BAKE_TIME_STARTED = "BAKE_TIME_STARTED",
  DEPLOYMENT_COMPLETED = "DEPLOYMENT_COMPLETED",
  DEPLOYMENT_STARTED = "DEPLOYMENT_STARTED",
  PERCENTAGE_UPDATED = "PERCENTAGE_UPDATED",
  ROLLBACK_COMPLETED = "ROLLBACK_COMPLETED",
  ROLLBACK_STARTED = "ROLLBACK_STARTED",
}
export declare enum TriggeredBy {
  APPCONFIG = "APPCONFIG",
  CLOUDWATCH_ALARM = "CLOUDWATCH_ALARM",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  USER = "USER",
}
/**
 * <p>An object that describes a deployment event.</p>
 */
export interface DeploymentEvent {
  /**
   * <p>The type of deployment event. Deployment event types include the start, stop, or
   *          completion of a deployment; a percentage update; the start or stop of a bake period; the
   *          start or completion of a rollback.</p>
   */
  EventType?: DeploymentEventType | string;
  /**
   * <p>The entity that triggered the deployment event. Events can be triggered by a user, AWS
   *          AppConfig, an Amazon CloudWatch alarm, or an internal error.</p>
   */
  TriggeredBy?: TriggeredBy | string;
  /**
   * <p>A description of the deployment event. Descriptions include, but are not limited to, the
   *          user account or the CloudWatch alarm ARN that initiated a rollback, the percentage of hosts
   *          that received the deployment, or in the case of an internal error, a recommendation to
   *          attempt a new deployment.</p>
   */
  Description?: string;
  /**
   * <p>The date and time the event occurred.</p>
   */
  OccurredAt?: Date;
}
export declare namespace DeploymentEvent {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeploymentEvent) => any;
}
export declare enum DeploymentState {
  BAKING = "BAKING",
  COMPLETE = "COMPLETE",
  DEPLOYING = "DEPLOYING",
  ROLLED_BACK = "ROLLED_BACK",
  ROLLING_BACK = "ROLLING_BACK",
  VALIDATING = "VALIDATING",
}
export interface Deployment {
  /**
   * <p>The ID of the application that was deployed.</p>
   */
  ApplicationId?: string;
  /**
   * <p>The ID of the environment that was deployed.</p>
   */
  EnvironmentId?: string;
  /**
   * <p>The ID of the deployment strategy that was deployed.</p>
   */
  DeploymentStrategyId?: string;
  /**
   * <p>The ID of the configuration profile that was deployed.</p>
   */
  ConfigurationProfileId?: string;
  /**
   * <p>The sequence number of the deployment.</p>
   */
  DeploymentNumber?: number;
  /**
   * <p>The name of the configuration.</p>
   */
  ConfigurationName?: string;
  /**
   * <p>Information about the source location of the configuration.</p>
   */
  ConfigurationLocationUri?: string;
  /**
   * <p>The configuration version that was deployed.</p>
   */
  ConfigurationVersion?: string;
  /**
   * <p>The description of the deployment.</p>
   */
  Description?: string;
  /**
   * <p>Total amount of time the deployment lasted.</p>
   */
  DeploymentDurationInMinutes?: number;
  /**
   * <p>The algorithm used to define how percentage grew over time.</p>
   */
  GrowthType?: GrowthType | string;
  /**
   * <p>The percentage of targets to receive a deployed configuration during each
   *          interval.</p>
   */
  GrowthFactor?: number;
  /**
   * <p>The amount of time AppConfig monitored for alarms before considering the deployment to be
   *          complete and no longer eligible for automatic roll back.</p>
   */
  FinalBakeTimeInMinutes?: number;
  /**
   * <p>The state of the deployment.</p>
   */
  State?: DeploymentState | string;
  /**
   * <p>A list containing all events related to a deployment. The most recent events are
   *          displayed first.</p>
   */
  EventLog?: DeploymentEvent[];
  /**
   * <p>The percentage of targets for which the deployment is available.</p>
   */
  PercentageComplete?: number;
  /**
   * <p>The time the deployment started.</p>
   */
  StartedAt?: Date;
  /**
   * <p>The time the deployment completed. </p>
   */
  CompletedAt?: Date;
}
export declare namespace Deployment {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Deployment) => any;
}
export interface GetDeploymentRequest {
  /**
   * <p>The ID of the application that includes the deployment you want to get. </p>
   */
  ApplicationId: string | undefined;
  /**
   * <p>The ID of the environment that includes the deployment you want to get. </p>
   */
  EnvironmentId: string | undefined;
  /**
   * <p>The sequence number of the deployment.</p>
   */
  DeploymentNumber: number | undefined;
}
export declare namespace GetDeploymentRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetDeploymentRequest) => any;
}
export interface GetDeploymentStrategyRequest {
  /**
   * <p>The ID of the deployment strategy to get.</p>
   */
  DeploymentStrategyId: string | undefined;
}
export declare namespace GetDeploymentStrategyRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetDeploymentStrategyRequest) => any;
}
export interface GetEnvironmentRequest {
  /**
   * <p>The ID of the application that includes the environment you want to get.</p>
   */
  ApplicationId: string | undefined;
  /**
   * <p>The ID of the environment you wnat to get.</p>
   */
  EnvironmentId: string | undefined;
}
export declare namespace GetEnvironmentRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetEnvironmentRequest) => any;
}
export interface GetHostedConfigurationVersionRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;
  /**
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId: string | undefined;
  /**
   * <p>The version.</p>
   */
  VersionNumber: number | undefined;
}
export declare namespace GetHostedConfigurationVersionRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: GetHostedConfigurationVersionRequest) => any;
}
export interface Applications {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Application[];
  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}
export declare namespace Applications {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Applications) => any;
}
export interface ListApplicationsRequest {
  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;
  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListApplicationsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListApplicationsRequest) => any;
}
/**
 * <p>A summary of a configuration profile.</p>
 */
export interface ConfigurationProfileSummary {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId?: string;
  /**
   * <p>The ID of the configuration profile.</p>
   */
  Id?: string;
  /**
   * <p>The name of the configuration profile.</p>
   */
  Name?: string;
  /**
   * <p>The URI location of the configuration.</p>
   */
  LocationUri?: string;
  /**
   * <p>The types of validators in the configuration profile.</p>
   */
  ValidatorTypes?: (ValidatorType | string)[];
}
export declare namespace ConfigurationProfileSummary {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ConfigurationProfileSummary) => any;
}
export interface ConfigurationProfiles {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: ConfigurationProfileSummary[];
  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}
export declare namespace ConfigurationProfiles {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ConfigurationProfiles) => any;
}
export interface ListConfigurationProfilesRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;
  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;
  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListConfigurationProfilesRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListConfigurationProfilesRequest) => any;
}
/**
 * <p>Information about the deployment.</p>
 */
export interface DeploymentSummary {
  /**
   * <p>The sequence number of the deployment.</p>
   */
  DeploymentNumber?: number;
  /**
   * <p>The name of the configuration.</p>
   */
  ConfigurationName?: string;
  /**
   * <p>The version of the configuration.</p>
   */
  ConfigurationVersion?: string;
  /**
   * <p>Total amount of time the deployment lasted.</p>
   */
  DeploymentDurationInMinutes?: number;
  /**
   * <p>The algorithm used to define how percentage grows over time.</p>
   */
  GrowthType?: GrowthType | string;
  /**
   * <p>The percentage of targets to receive a deployed configuration during each
   *          interval.</p>
   */
  GrowthFactor?: number;
  /**
   * <p>The amount of time AppConfig monitors for alarms before considering the deployment to be
   *          complete and no longer eligible for automatic roll back.</p>
   */
  FinalBakeTimeInMinutes?: number;
  /**
   * <p>The state of the deployment.</p>
   */
  State?: DeploymentState | string;
  /**
   * <p>The percentage of targets for which the deployment is available.</p>
   */
  PercentageComplete?: number;
  /**
   * <p>Time the deployment started.</p>
   */
  StartedAt?: Date;
  /**
   * <p>Time the deployment completed.</p>
   */
  CompletedAt?: Date;
}
export declare namespace DeploymentSummary {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeploymentSummary) => any;
}
export interface Deployments {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: DeploymentSummary[];
  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}
export declare namespace Deployments {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Deployments) => any;
}
export interface ListDeploymentsRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;
  /**
   * <p>The environment ID.</p>
   */
  EnvironmentId: string | undefined;
  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;
  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListDeploymentsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListDeploymentsRequest) => any;
}
export interface DeploymentStrategies {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: DeploymentStrategy[];
  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}
export declare namespace DeploymentStrategies {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: DeploymentStrategies) => any;
}
export interface ListDeploymentStrategiesRequest {
  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;
  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListDeploymentStrategiesRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListDeploymentStrategiesRequest) => any;
}
export interface Environments {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: Environment[];
  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}
export declare namespace Environments {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: Environments) => any;
}
export interface ListEnvironmentsRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;
  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;
  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   */
  NextToken?: string;
}
export declare namespace ListEnvironmentsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListEnvironmentsRequest) => any;
}
/**
 * <p>Information about the configuration.</p>
 */
export interface HostedConfigurationVersionSummary {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId?: string;
  /**
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId?: string;
  /**
   * <p>The configuration version.</p>
   */
  VersionNumber?: number;
  /**
   * <p>A description of the configuration.</p>
   */
  Description?: string;
  /**
   * <p>A standard MIME type describing the format of the configuration content. For more
   *          information, see <a href="https://docs.aws.amazon.com/https:/www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">Content-Type</a>.</p>
   */
  ContentType?: string;
}
export declare namespace HostedConfigurationVersionSummary {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: HostedConfigurationVersionSummary) => any;
}
export interface HostedConfigurationVersions {
  /**
   * <p>The elements from this collection.</p>
   */
  Items?: HostedConfigurationVersionSummary[];
  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   */
  NextToken?: string;
}
export declare namespace HostedConfigurationVersions {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: HostedConfigurationVersions) => any;
}
export interface ListHostedConfigurationVersionsRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;
  /**
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId: string | undefined;
  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;
  /**
   * <p>A token to start the list. Use this token to get the next set of results. </p>
   */
  NextToken?: string;
}
export declare namespace ListHostedConfigurationVersionsRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListHostedConfigurationVersionsRequest) => any;
}
export interface ListTagsForResourceRequest {
  /**
   * <p>The resource ARN.</p>
   */
  ResourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ResourceTags {
  /**
   * <p>Metadata to assign to AppConfig resources. Tags help organize and categorize your
   *          AppConfig resources. Each tag consists of a key and an optional value, both of which you
   *          define.</p>
   */
  Tags?: {
    [key: string]: string;
  };
}
export declare namespace ResourceTags {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ResourceTags) => any;
}
export interface StartDeploymentRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;
  /**
   * <p>The environment ID.</p>
   */
  EnvironmentId: string | undefined;
  /**
   * <p>The deployment strategy ID.</p>
   */
  DeploymentStrategyId: string | undefined;
  /**
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId: string | undefined;
  /**
   * <p>The configuration version to deploy.</p>
   */
  ConfigurationVersion: string | undefined;
  /**
   * <p>A description of the deployment.</p>
   */
  Description?: string;
  /**
   * <p>Metadata to assign to the deployment. Tags help organize and categorize your AppConfig
   *          resources. Each tag consists of a key and an optional value, both of which you
   *          define.</p>
   */
  Tags?: {
    [key: string]: string;
  };
}
export declare namespace StartDeploymentRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: StartDeploymentRequest) => any;
}
export interface StopDeploymentRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;
  /**
   * <p>The environment ID.</p>
   */
  EnvironmentId: string | undefined;
  /**
   * <p>The sequence number of the deployment.</p>
   */
  DeploymentNumber: number | undefined;
}
export declare namespace StopDeploymentRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: StopDeploymentRequest) => any;
}
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource for which to retrieve tags.</p>
   */
  ResourceArn: string | undefined;
  /**
   * <p>The key-value string map. The valid character set is [a-zA-Z+-=._:/]. The tag key can be
   *          up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to
   *          256 characters.</p>
   */
  Tags:
    | {
        [key: string]: string;
      }
    | undefined;
}
export declare namespace TagResourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource for which to remove tags.</p>
   */
  ResourceArn: string | undefined;
  /**
   * <p>The tag keys to delete.</p>
   */
  TagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UpdateApplicationRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;
  /**
   * <p>The name of the application.</p>
   */
  Name?: string;
  /**
   * <p>A description of the application.</p>
   */
  Description?: string;
}
export declare namespace UpdateApplicationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateApplicationRequest) => any;
}
export interface UpdateConfigurationProfileRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;
  /**
   * <p>The ID of the configuration profile.</p>
   */
  ConfigurationProfileId: string | undefined;
  /**
   * <p>The name of the configuration profile.</p>
   */
  Name?: string;
  /**
   * <p>A description of the configuration profile.</p>
   */
  Description?: string;
  /**
   * <p>The ARN of an IAM role with permission to access the configuration at the specified
   *          LocationUri.</p>
   */
  RetrievalRoleArn?: string;
  /**
   * <p>A list of methods for validating the configuration.</p>
   */
  Validators?: Validator[];
}
export declare namespace UpdateConfigurationProfileRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateConfigurationProfileRequest) => any;
}
export interface UpdateDeploymentStrategyRequest {
  /**
   * <p>The deployment strategy ID.</p>
   */
  DeploymentStrategyId: string | undefined;
  /**
   * <p>A description of the deployment strategy.</p>
   */
  Description?: string;
  /**
   * <p>Total amount of time for a deployment to last.</p>
   */
  DeploymentDurationInMinutes?: number;
  /**
   * <p>The amount of time AppConfig monitors for alarms before considering the deployment to be
   *          complete and no longer eligible for automatic roll back.</p>
   */
  FinalBakeTimeInMinutes?: number;
  /**
   * <p>The percentage of targets to receive a deployed configuration during each
   *          interval.</p>
   */
  GrowthFactor?: number;
  /**
   * <p>The algorithm used to define how percentage grows over time. AWS AppConfig supports the
   *          following growth types:</p>
   *          <p>
   *             <b>Linear</b>: For this type, AppConfig processes the
   *          deployment by increments of the growth factor evenly distributed over the deployment time.
   *          For example, a linear deployment that uses a growth factor of 20 initially makes the
   *          configuration available to 20 percent of the targets. After 1/5th of the deployment time
   *          has passed, the system updates the percentage to 40 percent. This continues until 100% of
   *          the targets are set to receive the deployed configuration.</p>
   *
   *          <p>
   *             <b>Exponential</b>: For this type, AppConfig processes the
   *          deployment exponentially using the following formula: <code>G*(2^N)</code>. In this
   *          formula, <code>G</code> is the growth factor specified by the user and <code>N</code> is
   *          the number of steps until the configuration is deployed to all targets. For example, if you
   *          specify a growth factor of 2, then the system rolls out the configuration as
   *          follows:</p>
   *          <p>
   *             <code>2*(2^0)</code>
   *          </p>
   *          <p>
   *             <code>2*(2^1)</code>
   *          </p>
   *          <p>
   *             <code>2*(2^2)</code>
   *          </p>
   *          <p>Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the
   *          targets, 8% of the targets, and continues until the configuration has been deployed to all
   *          targets.</p>
   */
  GrowthType?: GrowthType | string;
}
export declare namespace UpdateDeploymentStrategyRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateDeploymentStrategyRequest) => any;
}
export interface UpdateEnvironmentRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;
  /**
   * <p>The environment ID.</p>
   */
  EnvironmentId: string | undefined;
  /**
   * <p>The name of the environment.</p>
   */
  Name?: string;
  /**
   * <p>A description of the environment.</p>
   */
  Description?: string;
  /**
   * <p>Amazon CloudWatch alarms to monitor during the deployment process.</p>
   */
  Monitors?: Monitor[];
}
export declare namespace UpdateEnvironmentRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: UpdateEnvironmentRequest) => any;
}
export interface ValidateConfigurationRequest {
  /**
   * <p>The application ID.</p>
   */
  ApplicationId: string | undefined;
  /**
   * <p>The configuration profile ID.</p>
   */
  ConfigurationProfileId: string | undefined;
  /**
   * <p>The version of the configuration to validate.</p>
   */
  ConfigurationVersion: string | undefined;
}
export declare namespace ValidateConfigurationRequest {
  /**
   * @internal
   */
  const filterSensitiveLog: (obj: ValidateConfigurationRequest) => any;
}
