import { AppConfigClient } from "./AppConfigClient";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand";
import {
  CreateConfigurationProfileCommandInput,
  CreateConfigurationProfileCommandOutput,
} from "./commands/CreateConfigurationProfileCommand";
import {
  CreateDeploymentStrategyCommandInput,
  CreateDeploymentStrategyCommandOutput,
} from "./commands/CreateDeploymentStrategyCommand";
import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "./commands/CreateEnvironmentCommand";
import {
  CreateHostedConfigurationVersionCommandInput,
  CreateHostedConfigurationVersionCommandOutput,
} from "./commands/CreateHostedConfigurationVersionCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand";
import {
  DeleteConfigurationProfileCommandInput,
  DeleteConfigurationProfileCommandOutput,
} from "./commands/DeleteConfigurationProfileCommand";
import {
  DeleteDeploymentStrategyCommandInput,
  DeleteDeploymentStrategyCommandOutput,
} from "./commands/DeleteDeploymentStrategyCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "./commands/DeleteEnvironmentCommand";
import {
  DeleteHostedConfigurationVersionCommandInput,
  DeleteHostedConfigurationVersionCommandOutput,
} from "./commands/DeleteHostedConfigurationVersionCommand";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "./commands/GetApplicationCommand";
import { GetConfigurationCommandInput, GetConfigurationCommandOutput } from "./commands/GetConfigurationCommand";
import {
  GetConfigurationProfileCommandInput,
  GetConfigurationProfileCommandOutput,
} from "./commands/GetConfigurationProfileCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "./commands/GetDeploymentCommand";
import {
  GetDeploymentStrategyCommandInput,
  GetDeploymentStrategyCommandOutput,
} from "./commands/GetDeploymentStrategyCommand";
import { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "./commands/GetEnvironmentCommand";
import {
  GetHostedConfigurationVersionCommandInput,
  GetHostedConfigurationVersionCommandOutput,
} from "./commands/GetHostedConfigurationVersionCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand";
import {
  ListConfigurationProfilesCommandInput,
  ListConfigurationProfilesCommandOutput,
} from "./commands/ListConfigurationProfilesCommand";
import {
  ListDeploymentStrategiesCommandInput,
  ListDeploymentStrategiesCommandOutput,
} from "./commands/ListDeploymentStrategiesCommand";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "./commands/ListDeploymentsCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "./commands/ListEnvironmentsCommand";
import {
  ListHostedConfigurationVersionsCommandInput,
  ListHostedConfigurationVersionsCommandOutput,
} from "./commands/ListHostedConfigurationVersionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { StartDeploymentCommandInput, StartDeploymentCommandOutput } from "./commands/StartDeploymentCommand";
import { StopDeploymentCommandInput, StopDeploymentCommandOutput } from "./commands/StopDeploymentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand";
import {
  UpdateConfigurationProfileCommandInput,
  UpdateConfigurationProfileCommandOutput,
} from "./commands/UpdateConfigurationProfileCommand";
import {
  UpdateDeploymentStrategyCommandInput,
  UpdateDeploymentStrategyCommandOutput,
} from "./commands/UpdateDeploymentStrategyCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "./commands/UpdateEnvironmentCommand";
import {
  ValidateConfigurationCommandInput,
  ValidateConfigurationCommandOutput,
} from "./commands/ValidateConfigurationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS AppConfig</fullname>
 *          <p>Use AWS AppConfig, a capability of AWS Systems Manager, to create, manage, and quickly deploy
 *          application configurations. AppConfig supports controlled deployments to applications of any
 *          size and includes built-in validation checks and monitoring. You can use AppConfig with
 *          applications hosted on Amazon EC2 instances, AWS Lambda, containers, mobile applications, or IoT
 *          devices.</p>
 *
 *          <p>To prevent errors when deploying application configurations, especially for production
 *          systems where a simple typo could cause an unexpected outage, AppConfig includes validators.
 *          A validator provides a syntactic or semantic check to ensure that the configuration you
 *          want to deploy works as intended. To validate your application configuration data, you
 *          provide a schema or a Lambda function that runs against the configuration. The
 *          configuration deployment or update can only proceed when the configuration data is
 *          valid.</p>
 *
 *          <p>During a configuration deployment, AppConfig monitors the application to ensure that the
 *          deployment is successful. If the system encounters an error, AppConfig rolls back the change
 *          to minimize impact for your application users. You can configure a deployment strategy for
 *          each application or environment that includes deployment criteria, including velocity, bake
 *          time, and alarms to monitor. Similar to error monitoring, if a deployment triggers an
 *          alarm, AppConfig automatically rolls back to the previous version. </p>
 *
 *          <p>AppConfig supports multiple use cases. Here are some examples.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Application tuning</b>: Use AppConfig to carefully
 *                introduce changes to your application that can only be tested with production
 *                traffic.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Feature toggle</b>: Use AppConfig to turn on new
 *                features that require a timely deployment, such as a product launch or announcement.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Allow list</b>: Use AppConfig to allow premium
 *                subscribers to access paid content. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Operational issues</b>: Use AppConfig to reduce stress
 *                on your application when a dependency or other external factor impacts the
 *                system.</p>
 *             </li>
 *          </ul>
 *          <p>This reference is intended to be used with the <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig.html">AWS AppConfig User Guide</a>.</p>
 */
export declare class AppConfig extends AppConfigClient {
  /**
   * <p>An application in AppConfig is a logical unit of code that provides capabilities for your
   *          customers. For example, an application can be a microservice that runs on Amazon EC2 instances,
   *          a mobile application installed by your users, a serverless application using Amazon API
   *          Gateway and AWS Lambda, or any system you run on behalf of others.</p>
   */
  createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  /**
   * <p>Information that enables AppConfig to access the configuration source. Valid
   *          configuration sources include Systems Manager (SSM) documents, SSM Parameter Store parameters, and
   *          Amazon S3 objects. A configuration profile includes the following information.</p>
   *          <ul>
   *             <li>
   *                <p>The Uri location of the configuration data.</p>
   *             </li>
   *             <li>
   *                <p>The AWS Identity and Access Management (IAM) role that provides access to the configuration data.</p>
   *             </li>
   *             <li>
   *                <p>A validator for the configuration data. Available validators include either a JSON
   *                Schema or an AWS Lambda function.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/appconfig-creating-configuration-and-profile.html">Create a
   *             Configuration and a Configuration Profile</a> in the
   *             <i>AWS AppConfig User Guide</i>.</p>
   */
  createConfigurationProfile(
    args: CreateConfigurationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationProfileCommandOutput>;
  createConfigurationProfile(
    args: CreateConfigurationProfileCommandInput,
    cb: (err: any, data?: CreateConfigurationProfileCommandOutput) => void
  ): void;
  createConfigurationProfile(
    args: CreateConfigurationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationProfileCommandOutput) => void
  ): void;
  /**
   * <p>A deployment strategy defines important criteria for rolling out your configuration to
   *          the designated targets. A deployment strategy includes: the overall duration required, a
   *          percentage of targets to receive the deployment during each interval, an algorithm that
   *          defines how percentage grows, and bake time.</p>
   */
  createDeploymentStrategy(
    args: CreateDeploymentStrategyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentStrategyCommandOutput>;
  createDeploymentStrategy(
    args: CreateDeploymentStrategyCommandInput,
    cb: (err: any, data?: CreateDeploymentStrategyCommandOutput) => void
  ): void;
  createDeploymentStrategy(
    args: CreateDeploymentStrategyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentStrategyCommandOutput) => void
  ): void;
  /**
   * <p>For each application, you define one or more environments. An environment is a logical
   *          deployment group of AppConfig targets, such as applications in a <code>Beta</code> or
   *             <code>Production</code> environment. You can also define environments for application
   *          subcomponents such as the <code>Web</code>, <code>Mobile</code> and <code>Back-end</code>
   *          components for your application. You can configure Amazon CloudWatch alarms for each environment.
   *          The system monitors alarms during a configuration deployment. If an alarm is triggered, the
   *          system rolls back the configuration.</p>
   */
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentCommandOutput>;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;
  /**
   * <p>Create a new configuration in the AppConfig configuration store.</p>
   */
  createHostedConfigurationVersion(
    args: CreateHostedConfigurationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHostedConfigurationVersionCommandOutput>;
  createHostedConfigurationVersion(
    args: CreateHostedConfigurationVersionCommandInput,
    cb: (err: any, data?: CreateHostedConfigurationVersionCommandOutput) => void
  ): void;
  createHostedConfigurationVersion(
    args: CreateHostedConfigurationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHostedConfigurationVersionCommandOutput) => void
  ): void;
  /**
   * <p>Delete an application. Deleting an application does not delete a configuration from a
   *          host.</p>
   */
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  /**
   * <p>Delete a configuration profile. Deleting a configuration profile does not delete a
   *          configuration from a host.</p>
   */
  deleteConfigurationProfile(
    args: DeleteConfigurationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationProfileCommandOutput>;
  deleteConfigurationProfile(
    args: DeleteConfigurationProfileCommandInput,
    cb: (err: any, data?: DeleteConfigurationProfileCommandOutput) => void
  ): void;
  deleteConfigurationProfile(
    args: DeleteConfigurationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationProfileCommandOutput) => void
  ): void;
  /**
   * <p>Delete a deployment strategy. Deleting a deployment strategy does not delete a
   *          configuration from a host.</p>
   */
  deleteDeploymentStrategy(
    args: DeleteDeploymentStrategyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeploymentStrategyCommandOutput>;
  deleteDeploymentStrategy(
    args: DeleteDeploymentStrategyCommandInput,
    cb: (err: any, data?: DeleteDeploymentStrategyCommandOutput) => void
  ): void;
  deleteDeploymentStrategy(
    args: DeleteDeploymentStrategyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeploymentStrategyCommandOutput) => void
  ): void;
  /**
   * <p>Delete an environment. Deleting an environment does not delete a configuration from a
   *          host.</p>
   */
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentCommandOutput>;
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;
  /**
   * <p>Delete a version of a configuration from the AppConfig configuration store.</p>
   */
  deleteHostedConfigurationVersion(
    args: DeleteHostedConfigurationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHostedConfigurationVersionCommandOutput>;
  deleteHostedConfigurationVersion(
    args: DeleteHostedConfigurationVersionCommandInput,
    cb: (err: any, data?: DeleteHostedConfigurationVersionCommandOutput) => void
  ): void;
  deleteHostedConfigurationVersion(
    args: DeleteHostedConfigurationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHostedConfigurationVersionCommandOutput) => void
  ): void;
  /**
   * <p>Retrieve information about an application.</p>
   */
  getApplication(
    args: GetApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationCommandOutput>;
  getApplication(args: GetApplicationCommandInput, cb: (err: any, data?: GetApplicationCommandOutput) => void): void;
  getApplication(
    args: GetApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;
  /**
   * <p>Receive information about a configuration.</p>
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
   */
  getConfiguration(
    args: GetConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationCommandOutput>;
  getConfiguration(
    args: GetConfigurationCommandInput,
    cb: (err: any, data?: GetConfigurationCommandOutput) => void
  ): void;
  getConfiguration(
    args: GetConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationCommandOutput) => void
  ): void;
  /**
   * <p>Retrieve information about a configuration profile.</p>
   */
  getConfigurationProfile(
    args: GetConfigurationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationProfileCommandOutput>;
  getConfigurationProfile(
    args: GetConfigurationProfileCommandInput,
    cb: (err: any, data?: GetConfigurationProfileCommandOutput) => void
  ): void;
  getConfigurationProfile(
    args: GetConfigurationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationProfileCommandOutput) => void
  ): void;
  /**
   * <p>Retrieve information about a configuration deployment.</p>
   */
  getDeployment(args: GetDeploymentCommandInput, options?: __HttpHandlerOptions): Promise<GetDeploymentCommandOutput>;
  getDeployment(args: GetDeploymentCommandInput, cb: (err: any, data?: GetDeploymentCommandOutput) => void): void;
  getDeployment(
    args: GetDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;
  /**
   * <p>Retrieve information about a deployment strategy. A deployment strategy defines
   *          important criteria for rolling out your configuration to the designated targets. A
   *          deployment strategy includes: the overall duration required, a percentage of targets to
   *          receive the deployment during each interval, an algorithm that defines how percentage
   *          grows, and bake time.</p>
   */
  getDeploymentStrategy(
    args: GetDeploymentStrategyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentStrategyCommandOutput>;
  getDeploymentStrategy(
    args: GetDeploymentStrategyCommandInput,
    cb: (err: any, data?: GetDeploymentStrategyCommandOutput) => void
  ): void;
  getDeploymentStrategy(
    args: GetDeploymentStrategyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentStrategyCommandOutput) => void
  ): void;
  /**
   * <p>Retrieve information about an environment. An environment is a logical deployment group
   *          of AppConfig applications, such as applications in a <code>Production</code> environment or
   *          in an <code>EU_Region</code> environment. Each configuration deployment targets an
   *          environment. You can enable one or more Amazon CloudWatch alarms for an environment. If an alarm is
   *          triggered during a deployment, AppConfig roles back the configuration.</p>
   */
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentCommandOutput>;
  getEnvironment(args: GetEnvironmentCommandInput, cb: (err: any, data?: GetEnvironmentCommandOutput) => void): void;
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;
  /**
   * <p>Get information about a specific configuration version.</p>
   */
  getHostedConfigurationVersion(
    args: GetHostedConfigurationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHostedConfigurationVersionCommandOutput>;
  getHostedConfigurationVersion(
    args: GetHostedConfigurationVersionCommandInput,
    cb: (err: any, data?: GetHostedConfigurationVersionCommandOutput) => void
  ): void;
  getHostedConfigurationVersion(
    args: GetHostedConfigurationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHostedConfigurationVersionCommandOutput) => void
  ): void;
  /**
   * <p>List all applications in your AWS account.</p>
   */
  listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  /**
   * <p>Lists the configuration profiles for an application.</p>
   */
  listConfigurationProfiles(
    args: ListConfigurationProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationProfilesCommandOutput>;
  listConfigurationProfiles(
    args: ListConfigurationProfilesCommandInput,
    cb: (err: any, data?: ListConfigurationProfilesCommandOutput) => void
  ): void;
  listConfigurationProfiles(
    args: ListConfigurationProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationProfilesCommandOutput) => void
  ): void;
  /**
   * <p>Lists the deployments for an environment.</p>
   */
  listDeployments(
    args: ListDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentsCommandOutput>;
  listDeployments(args: ListDeploymentsCommandInput, cb: (err: any, data?: ListDeploymentsCommandOutput) => void): void;
  listDeployments(
    args: ListDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentsCommandOutput) => void
  ): void;
  /**
   * <p>List deployment strategies.</p>
   */
  listDeploymentStrategies(
    args: ListDeploymentStrategiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeploymentStrategiesCommandOutput>;
  listDeploymentStrategies(
    args: ListDeploymentStrategiesCommandInput,
    cb: (err: any, data?: ListDeploymentStrategiesCommandOutput) => void
  ): void;
  listDeploymentStrategies(
    args: ListDeploymentStrategiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeploymentStrategiesCommandOutput) => void
  ): void;
  /**
   * <p>List the environments for an application.</p>
   */
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentsCommandOutput>;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;
  /**
   * <p>View a list of configurations stored in the AppConfig configuration store by
   *          version.</p>
   */
  listHostedConfigurationVersions(
    args: ListHostedConfigurationVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHostedConfigurationVersionsCommandOutput>;
  listHostedConfigurationVersions(
    args: ListHostedConfigurationVersionsCommandInput,
    cb: (err: any, data?: ListHostedConfigurationVersionsCommandOutput) => void
  ): void;
  listHostedConfigurationVersions(
    args: ListHostedConfigurationVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHostedConfigurationVersionsCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves the list of key-value tags assigned to the resource.</p>
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  /**
   * <p>Starts a deployment.</p>
   */
  startDeployment(
    args: StartDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDeploymentCommandOutput>;
  startDeployment(args: StartDeploymentCommandInput, cb: (err: any, data?: StartDeploymentCommandOutput) => void): void;
  startDeployment(
    args: StartDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDeploymentCommandOutput) => void
  ): void;
  /**
   * <p>Stops a deployment. This API action works only on deployments that have a status of
   *             <code>DEPLOYING</code>. This action moves the deployment to a status of
   *             <code>ROLLED_BACK</code>.</p>
   */
  stopDeployment(
    args: StopDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDeploymentCommandOutput>;
  stopDeployment(args: StopDeploymentCommandInput, cb: (err: any, data?: StopDeploymentCommandOutput) => void): void;
  stopDeployment(
    args: StopDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDeploymentCommandOutput) => void
  ): void;
  /**
   * <p>Metadata to assign to an AppConfig resource. Tags help organize and categorize your
   *          AppConfig resources. Each tag consists of a key and an optional value, both of which you
   *          define. You can specify a maximum of 50 tags for a resource.</p>
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a tag key and value from an AppConfig resource.</p>
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  /**
   * <p>Updates an application.</p>
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  /**
   * <p>Updates a configuration profile.</p>
   */
  updateConfigurationProfile(
    args: UpdateConfigurationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationProfileCommandOutput>;
  updateConfigurationProfile(
    args: UpdateConfigurationProfileCommandInput,
    cb: (err: any, data?: UpdateConfigurationProfileCommandOutput) => void
  ): void;
  updateConfigurationProfile(
    args: UpdateConfigurationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationProfileCommandOutput) => void
  ): void;
  /**
   * <p>Updates a deployment strategy.</p>
   */
  updateDeploymentStrategy(
    args: UpdateDeploymentStrategyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeploymentStrategyCommandOutput>;
  updateDeploymentStrategy(
    args: UpdateDeploymentStrategyCommandInput,
    cb: (err: any, data?: UpdateDeploymentStrategyCommandOutput) => void
  ): void;
  updateDeploymentStrategy(
    args: UpdateDeploymentStrategyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeploymentStrategyCommandOutput) => void
  ): void;
  /**
   * <p>Updates an environment.</p>
   */
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentCommandOutput>;
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;
  /**
   * <p>Uses the validators in a configuration profile to validate a configuration.</p>
   */
  validateConfiguration(
    args: ValidateConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateConfigurationCommandOutput>;
  validateConfiguration(
    args: ValidateConfigurationCommandInput,
    cb: (err: any, data?: ValidateConfigurationCommandOutput) => void
  ): void;
  validateConfiguration(
    args: ValidateConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateConfigurationCommandOutput) => void
  ): void;
}
