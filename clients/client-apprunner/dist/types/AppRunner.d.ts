import { AppRunnerClient } from "./AppRunnerClient";
import {
  AssociateCustomDomainCommandInput,
  AssociateCustomDomainCommandOutput,
} from "./commands/AssociateCustomDomainCommand";
import {
  CreateAutoScalingConfigurationCommandInput,
  CreateAutoScalingConfigurationCommandOutput,
} from "./commands/CreateAutoScalingConfigurationCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "./commands/CreateConnectionCommand";
import { CreateServiceCommandInput, CreateServiceCommandOutput } from "./commands/CreateServiceCommand";
import {
  DeleteAutoScalingConfigurationCommandInput,
  DeleteAutoScalingConfigurationCommandOutput,
} from "./commands/DeleteAutoScalingConfigurationCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand";
import { DeleteServiceCommandInput, DeleteServiceCommandOutput } from "./commands/DeleteServiceCommand";
import {
  DescribeAutoScalingConfigurationCommandInput,
  DescribeAutoScalingConfigurationCommandOutput,
} from "./commands/DescribeAutoScalingConfigurationCommand";
import {
  DescribeCustomDomainsCommandInput,
  DescribeCustomDomainsCommandOutput,
} from "./commands/DescribeCustomDomainsCommand";
import { DescribeServiceCommandInput, DescribeServiceCommandOutput } from "./commands/DescribeServiceCommand";
import {
  DisassociateCustomDomainCommandInput,
  DisassociateCustomDomainCommandOutput,
} from "./commands/DisassociateCustomDomainCommand";
import {
  ListAutoScalingConfigurationsCommandInput,
  ListAutoScalingConfigurationsCommandOutput,
} from "./commands/ListAutoScalingConfigurationsCommand";
import { ListConnectionsCommandInput, ListConnectionsCommandOutput } from "./commands/ListConnectionsCommand";
import { ListOperationsCommandInput, ListOperationsCommandOutput } from "./commands/ListOperationsCommand";
import { ListServicesCommandInput, ListServicesCommandOutput } from "./commands/ListServicesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PauseServiceCommandInput, PauseServiceCommandOutput } from "./commands/PauseServiceCommand";
import { ResumeServiceCommandInput, ResumeServiceCommandOutput } from "./commands/ResumeServiceCommand";
import { StartDeploymentCommandInput, StartDeploymentCommandOutput } from "./commands/StartDeploymentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateServiceCommandInput, UpdateServiceCommandOutput } from "./commands/UpdateServiceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS App Runner</fullname>
 *
 *
 *
 *          <p>AWS App Runner is an application service that provides a fast, simple, and cost-effective way to go directly from an existing container image or source code
 *       to a running service in the AWS cloud in seconds. You don't need to learn new technologies, decide which compute service to use, or understand how to
 *       provision and configure AWS resources.</p>
 *          <p>App Runner connects directly to your container registry or source code repository. It provides an automatic delivery pipeline with fully managed operations,
 *       high performance, scalability, and security.</p>
 *          <p>For more information about App Runner, see the <a href="https://docs.aws.amazon.com/apprunner/latest/dg/">AWS App Runner Developer Guide</a>.
 *       For release information, see the <a href="https://docs.aws.amazon.com/apprunner/latest/relnotes/">AWS App Runner Release Notes</a>.</p>
 *          <p>
 *        To install the Software Development Kits (SDKs), Integrated
 *       Development Environment (IDE) Toolkits, and command line tools that you can use to access the API, see <a href="http://aws.amazon.com/tools/">Tools for
 *         Amazon Web Services</a>.</p>
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>For a list of Region-specific endpoints that App Runner supports, see <a href="https://docs.aws.amazon.com/general/latest/gr/apprunner.html">AWS App Runner
 *         endpoints and quotas</a> in the <i>AWS General Reference</i>.</p>
 */
export declare class AppRunner extends AppRunnerClient {
  /**
   * <p>Associate your own domain name with the AWS App Runner subdomain URL of your App Runner service.</p>
   *          <p>After you call <code>AssociateCustomDomain</code> and receive a successful response, use the information in the <a>CustomDomain</a> record
   *       that's returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or
   *       more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks
   *       domain validity in a certificate stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>.</p>
   */
  associateCustomDomain(
    args: AssociateCustomDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateCustomDomainCommandOutput>;
  associateCustomDomain(
    args: AssociateCustomDomainCommandInput,
    cb: (err: any, data?: AssociateCustomDomainCommandOutput) => void
  ): void;
  associateCustomDomain(
    args: AssociateCustomDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateCustomDomainCommandOutput) => void
  ): void;
  /**
   * <p>Create an AWS App Runner automatic scaling configuration resource. App Runner requires this resource
   *       when you create App Runner services that require non-default auto scaling settings. You can share an
   *       auto scaling configuration across multiple services.</p>
   *          <p>Create multiple revisions of a configuration by using the same <code>AutoScalingConfigurationName</code> and different
   *         <code>AutoScalingConfigurationRevision</code> values. When you create a service, you can set it to use the latest active revision of an auto scaling
   *       configuration or a specific revision.</p>
   *          <p>Configure a higher <code>MinSize</code> to increase the spread of your App Runner service over more Availability Zones in the AWS Region. The tradeoff is
   *       a higher minimal cost.</p>
   *          <p>Configure a lower <code>MaxSize</code> to control your cost. The tradeoff is lower responsiveness during peak demand.</p>
   */
  createAutoScalingConfiguration(
    args: CreateAutoScalingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAutoScalingConfigurationCommandOutput>;
  createAutoScalingConfiguration(
    args: CreateAutoScalingConfigurationCommandInput,
    cb: (err: any, data?: CreateAutoScalingConfigurationCommandOutput) => void
  ): void;
  createAutoScalingConfiguration(
    args: CreateAutoScalingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAutoScalingConfigurationCommandOutput) => void
  ): void;
  /**
   * <p>Create an AWS App Runner connection resource. App Runner requires a connection resource when you create App Runner services that access private repositories from
   *       certain third-party providers. You can share a connection across multiple services.</p>
   *          <p>A connection resource is needed to access GitHub repositories. GitHub requires a user interface approval process through the App Runner console before you
   *       can use the connection.</p>
   */
  createConnection(
    args: CreateConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectionCommandOutput>;
  createConnection(
    args: CreateConnectionCommandInput,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  createConnection(
    args: CreateConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  /**
   * <p>Create an AWS App Runner service. After the service is created, the action also automatically starts a deployment.</p>
   *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html">ListOperations</a> call to track the operation's progress.</p>
   */
  createService(args: CreateServiceCommandInput, options?: __HttpHandlerOptions): Promise<CreateServiceCommandOutput>;
  createService(args: CreateServiceCommandInput, cb: (err: any, data?: CreateServiceCommandOutput) => void): void;
  createService(
    args: CreateServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceCommandOutput) => void
  ): void;
  /**
   * <p>Delete an AWS App Runner automatic scaling configuration resource. You can delete a specific revision or the latest active revision. You can't delete a
   *       configuration that's used by one or more App Runner services.</p>
   */
  deleteAutoScalingConfiguration(
    args: DeleteAutoScalingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAutoScalingConfigurationCommandOutput>;
  deleteAutoScalingConfiguration(
    args: DeleteAutoScalingConfigurationCommandInput,
    cb: (err: any, data?: DeleteAutoScalingConfigurationCommandOutput) => void
  ): void;
  deleteAutoScalingConfiguration(
    args: DeleteAutoScalingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAutoScalingConfigurationCommandOutput) => void
  ): void;
  /**
   * <p>Delete an AWS App Runner connection. You must first ensure that there are no running App Runner services that use this connection. If there are any, the
   *         <code>DeleteConnection</code> action fails.</p>
   */
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionCommandOutput>;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  /**
   * <p>Delete an AWS App Runner service.</p>
   *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a>
   *       call to track the operation's progress.</p>
   */
  deleteService(args: DeleteServiceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteServiceCommandOutput>;
  deleteService(args: DeleteServiceCommandInput, cb: (err: any, data?: DeleteServiceCommandOutput) => void): void;
  deleteService(
    args: DeleteServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceCommandOutput) => void
  ): void;
  /**
   * <p>Return a full description of an AWS App Runner automatic scaling configuration resource.</p>
   */
  describeAutoScalingConfiguration(
    args: DescribeAutoScalingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAutoScalingConfigurationCommandOutput>;
  describeAutoScalingConfiguration(
    args: DescribeAutoScalingConfigurationCommandInput,
    cb: (err: any, data?: DescribeAutoScalingConfigurationCommandOutput) => void
  ): void;
  describeAutoScalingConfiguration(
    args: DescribeAutoScalingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAutoScalingConfigurationCommandOutput) => void
  ): void;
  /**
   * <p>Return a description of custom domain names that are associated with an AWS App Runner service.</p>
   */
  describeCustomDomains(
    args: DescribeCustomDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomDomainsCommandOutput>;
  describeCustomDomains(
    args: DescribeCustomDomainsCommandInput,
    cb: (err: any, data?: DescribeCustomDomainsCommandOutput) => void
  ): void;
  describeCustomDomains(
    args: DescribeCustomDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomDomainsCommandOutput) => void
  ): void;
  /**
   * <p>Return a full description of an AWS App Runner service.</p>
   */
  describeService(
    args: DescribeServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServiceCommandOutput>;
  describeService(args: DescribeServiceCommandInput, cb: (err: any, data?: DescribeServiceCommandOutput) => void): void;
  describeService(
    args: DescribeServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServiceCommandOutput) => void
  ): void;
  /**
   * <p>Disassociate a custom domain name from an AWS App Runner service.</p>
   *          <p>Certificates tracking domain validity are associated with a custom domain and are stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS
   *         Certificate Manager (ACM)</a>. These certificates aren't deleted as part of this action. App Runner delays certificate deletion for
   *       30 days after a domain is disassociated from your service.</p>
   */
  disassociateCustomDomain(
    args: DisassociateCustomDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateCustomDomainCommandOutput>;
  disassociateCustomDomain(
    args: DisassociateCustomDomainCommandInput,
    cb: (err: any, data?: DisassociateCustomDomainCommandOutput) => void
  ): void;
  disassociateCustomDomain(
    args: DisassociateCustomDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateCustomDomainCommandOutput) => void
  ): void;
  /**
   * <p>Returns a list of AWS App Runner automatic scaling configurations in your AWS account. You can query the revisions for a specific configuration name or
   *       the revisions for all configurations in your account. You can optionally query only the latest revision of each requested name.</p>
   */
  listAutoScalingConfigurations(
    args: ListAutoScalingConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAutoScalingConfigurationsCommandOutput>;
  listAutoScalingConfigurations(
    args: ListAutoScalingConfigurationsCommandInput,
    cb: (err: any, data?: ListAutoScalingConfigurationsCommandOutput) => void
  ): void;
  listAutoScalingConfigurations(
    args: ListAutoScalingConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAutoScalingConfigurationsCommandOutput) => void
  ): void;
  /**
   * <p>Returns a list of AWS App Runner connections that are associated with your AWS account.</p>
   */
  listConnections(
    args: ListConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectionsCommandOutput>;
  listConnections(args: ListConnectionsCommandInput, cb: (err: any, data?: ListConnectionsCommandOutput) => void): void;
  listConnections(
    args: ListConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectionsCommandOutput) => void
  ): void;
  /**
   * <p>Return a list of operations that occurred on an AWS App Runner service.</p>
   *          <p>The resulting list of <a>OperationSummary</a> objects is sorted in reverse chronological order. The first object on the list represents the
   *       last started operation.</p>
   */
  listOperations(
    args: ListOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOperationsCommandOutput>;
  listOperations(args: ListOperationsCommandInput, cb: (err: any, data?: ListOperationsCommandOutput) => void): void;
  listOperations(
    args: ListOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOperationsCommandOutput) => void
  ): void;
  /**
   * <p>Returns a list of running AWS App Runner services in your AWS account.</p>
   */
  listServices(args: ListServicesCommandInput, options?: __HttpHandlerOptions): Promise<ListServicesCommandOutput>;
  listServices(args: ListServicesCommandInput, cb: (err: any, data?: ListServicesCommandOutput) => void): void;
  listServices(
    args: ListServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServicesCommandOutput) => void
  ): void;
  /**
   * <p>List tags that are associated with for an AWS App Runner resource. The response contains a list of tag key-value pairs.</p>
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
   * <p>Pause an active AWS App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is
   *       removed).</p>
   *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a>
   *       call to track the operation's progress.</p>
   */
  pauseService(args: PauseServiceCommandInput, options?: __HttpHandlerOptions): Promise<PauseServiceCommandOutput>;
  pauseService(args: PauseServiceCommandInput, cb: (err: any, data?: PauseServiceCommandOutput) => void): void;
  pauseService(
    args: PauseServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PauseServiceCommandOutput) => void
  ): void;
  /**
   * <p>Resume an active AWS App Runner service. App Runner provisions compute capacity for the service.</p>
   *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a>
   *       call to track the operation's progress.</p>
   */
  resumeService(args: ResumeServiceCommandInput, options?: __HttpHandlerOptions): Promise<ResumeServiceCommandOutput>;
  resumeService(args: ResumeServiceCommandInput, cb: (err: any, data?: ResumeServiceCommandOutput) => void): void;
  resumeService(
    args: ResumeServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeServiceCommandOutput) => void
  ): void;
  /**
   * <p>Initiate a manual deployment of the latest commit in a source code repository or the latest image in a source image repository to an AWS App Runner
   *       service.</p>
   *          <p>For a source code repository, App Runner retrieves the commit and builds a Docker image. For a source image repository, App Runner retrieves the latest Docker
   *       image. In both cases, App Runner then deploys the new image to your service and starts a new container instance.</p>
   *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a>
   *       call to track the operation's progress.</p>
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
   * <p>Add tags to, or update the tag values of, an App Runner resource. A tag is a key-value pair.</p>
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  /**
   * <p>Remove tags from an App Runner resource.</p>
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  /**
   * <p>Update an AWS App Runner service. You can update the source configuration and instance configuration of the service. You can also update the ARN of the auto
   *       scaling configuration resource that's associated with the service. However, you can't change the name or the encryption configuration of the service.
   *       These can be set only when you create the service.</p>
   *          <p>To update the tags applied to your service, use the separate actions <a>TagResource</a> and <a>UntagResource</a>.</p>
   *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a>
   *       call to track the operation's progress.</p>
   */
  updateService(args: UpdateServiceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateServiceCommandOutput>;
  updateService(args: UpdateServiceCommandInput, cb: (err: any, data?: UpdateServiceCommandOutput) => void): void;
  updateService(
    args: UpdateServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceCommandOutput) => void
  ): void;
}
