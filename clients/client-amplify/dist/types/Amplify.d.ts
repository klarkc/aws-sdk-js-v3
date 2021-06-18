import { AmplifyClient } from "./AmplifyClient";
import { CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand";
import {
  CreateBackendEnvironmentCommandInput,
  CreateBackendEnvironmentCommandOutput,
} from "./commands/CreateBackendEnvironmentCommand";
import { CreateBranchCommandInput, CreateBranchCommandOutput } from "./commands/CreateBranchCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "./commands/CreateDeploymentCommand";
import {
  CreateDomainAssociationCommandInput,
  CreateDomainAssociationCommandOutput,
} from "./commands/CreateDomainAssociationCommand";
import { CreateWebhookCommandInput, CreateWebhookCommandOutput } from "./commands/CreateWebhookCommand";
import { DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand";
import {
  DeleteBackendEnvironmentCommandInput,
  DeleteBackendEnvironmentCommandOutput,
} from "./commands/DeleteBackendEnvironmentCommand";
import { DeleteBranchCommandInput, DeleteBranchCommandOutput } from "./commands/DeleteBranchCommand";
import {
  DeleteDomainAssociationCommandInput,
  DeleteDomainAssociationCommandOutput,
} from "./commands/DeleteDomainAssociationCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import { DeleteWebhookCommandInput, DeleteWebhookCommandOutput } from "./commands/DeleteWebhookCommand";
import { GenerateAccessLogsCommandInput, GenerateAccessLogsCommandOutput } from "./commands/GenerateAccessLogsCommand";
import { GetAppCommandInput, GetAppCommandOutput } from "./commands/GetAppCommand";
import { GetArtifactUrlCommandInput, GetArtifactUrlCommandOutput } from "./commands/GetArtifactUrlCommand";
import {
  GetBackendEnvironmentCommandInput,
  GetBackendEnvironmentCommandOutput,
} from "./commands/GetBackendEnvironmentCommand";
import { GetBranchCommandInput, GetBranchCommandOutput } from "./commands/GetBranchCommand";
import {
  GetDomainAssociationCommandInput,
  GetDomainAssociationCommandOutput,
} from "./commands/GetDomainAssociationCommand";
import { GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand";
import { GetWebhookCommandInput, GetWebhookCommandOutput } from "./commands/GetWebhookCommand";
import { ListAppsCommandInput, ListAppsCommandOutput } from "./commands/ListAppsCommand";
import { ListArtifactsCommandInput, ListArtifactsCommandOutput } from "./commands/ListArtifactsCommand";
import {
  ListBackendEnvironmentsCommandInput,
  ListBackendEnvironmentsCommandOutput,
} from "./commands/ListBackendEnvironmentsCommand";
import { ListBranchesCommandInput, ListBranchesCommandOutput } from "./commands/ListBranchesCommand";
import {
  ListDomainAssociationsCommandInput,
  ListDomainAssociationsCommandOutput,
} from "./commands/ListDomainAssociationsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListWebhooksCommandInput, ListWebhooksCommandOutput } from "./commands/ListWebhooksCommand";
import { StartDeploymentCommandInput, StartDeploymentCommandOutput } from "./commands/StartDeploymentCommand";
import { StartJobCommandInput, StartJobCommandOutput } from "./commands/StartJobCommand";
import { StopJobCommandInput, StopJobCommandOutput } from "./commands/StopJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAppCommandInput, UpdateAppCommandOutput } from "./commands/UpdateAppCommand";
import { UpdateBranchCommandInput, UpdateBranchCommandOutput } from "./commands/UpdateBranchCommand";
import {
  UpdateDomainAssociationCommandInput,
  UpdateDomainAssociationCommandOutput,
} from "./commands/UpdateDomainAssociationCommand";
import { UpdateWebhookCommandInput, UpdateWebhookCommandOutput } from "./commands/UpdateWebhookCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amplify enables developers to develop and deploy cloud-powered mobile and web apps.
 *             The Amplify Console provides a continuous delivery and hosting service for web
 *             applications. For more information, see the <a href="https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html">Amplify Console User Guide</a>. The
 *             Amplify Framework is a comprehensive set of SDKs, libraries, tools, and documentation
 *             for client app development. For more information, see the <a href="https://docs.amplify.aws/">Amplify Framework.</a>
 *          </p>
 */
export declare class Amplify extends AmplifyClient {
  /**
   * <p> Creates a new Amplify app. </p>
   */
  createApp(args: CreateAppCommandInput, options?: __HttpHandlerOptions): Promise<CreateAppCommandOutput>;
  createApp(args: CreateAppCommandInput, cb: (err: any, data?: CreateAppCommandOutput) => void): void;
  createApp(
    args: CreateAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppCommandOutput) => void
  ): void;
  /**
   * <p> Creates a new backend environment for an Amplify app. </p>
   */
  createBackendEnvironment(
    args: CreateBackendEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackendEnvironmentCommandOutput>;
  createBackendEnvironment(
    args: CreateBackendEnvironmentCommandInput,
    cb: (err: any, data?: CreateBackendEnvironmentCommandOutput) => void
  ): void;
  createBackendEnvironment(
    args: CreateBackendEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackendEnvironmentCommandOutput) => void
  ): void;
  /**
   * <p> Creates a new branch for an Amplify app. </p>
   */
  createBranch(args: CreateBranchCommandInput, options?: __HttpHandlerOptions): Promise<CreateBranchCommandOutput>;
  createBranch(args: CreateBranchCommandInput, cb: (err: any, data?: CreateBranchCommandOutput) => void): void;
  createBranch(
    args: CreateBranchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBranchCommandOutput) => void
  ): void;
  /**
   * <p> Creates a deployment for a manually deployed Amplify app. Manually deployed apps are
   *             not connected to a repository. </p>
   */
  createDeployment(
    args: CreateDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentCommandOutput>;
  createDeployment(
    args: CreateDeploymentCommandInput,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  createDeployment(
    args: CreateDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  /**
   * <p> Creates a new domain association for an Amplify app. This action associates a custom
   *             domain with the Amplify app </p>
   */
  createDomainAssociation(
    args: CreateDomainAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainAssociationCommandOutput>;
  createDomainAssociation(
    args: CreateDomainAssociationCommandInput,
    cb: (err: any, data?: CreateDomainAssociationCommandOutput) => void
  ): void;
  createDomainAssociation(
    args: CreateDomainAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainAssociationCommandOutput) => void
  ): void;
  /**
   * <p> Creates a new webhook on an Amplify app. </p>
   */
  createWebhook(args: CreateWebhookCommandInput, options?: __HttpHandlerOptions): Promise<CreateWebhookCommandOutput>;
  createWebhook(args: CreateWebhookCommandInput, cb: (err: any, data?: CreateWebhookCommandOutput) => void): void;
  createWebhook(
    args: CreateWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWebhookCommandOutput) => void
  ): void;
  /**
   * <p> Deletes an existing Amplify app specified by an app ID. </p>
   */
  deleteApp(args: DeleteAppCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAppCommandOutput>;
  deleteApp(args: DeleteAppCommandInput, cb: (err: any, data?: DeleteAppCommandOutput) => void): void;
  deleteApp(
    args: DeleteAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppCommandOutput) => void
  ): void;
  /**
   * <p> Deletes a backend environment for an Amplify app. </p>
   */
  deleteBackendEnvironment(
    args: DeleteBackendEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackendEnvironmentCommandOutput>;
  deleteBackendEnvironment(
    args: DeleteBackendEnvironmentCommandInput,
    cb: (err: any, data?: DeleteBackendEnvironmentCommandOutput) => void
  ): void;
  deleteBackendEnvironment(
    args: DeleteBackendEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackendEnvironmentCommandOutput) => void
  ): void;
  /**
   * <p> Deletes a branch for an Amplify app. </p>
   */
  deleteBranch(args: DeleteBranchCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBranchCommandOutput>;
  deleteBranch(args: DeleteBranchCommandInput, cb: (err: any, data?: DeleteBranchCommandOutput) => void): void;
  deleteBranch(
    args: DeleteBranchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBranchCommandOutput) => void
  ): void;
  /**
   * <p> Deletes a domain association for an Amplify app. </p>
   */
  deleteDomainAssociation(
    args: DeleteDomainAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainAssociationCommandOutput>;
  deleteDomainAssociation(
    args: DeleteDomainAssociationCommandInput,
    cb: (err: any, data?: DeleteDomainAssociationCommandOutput) => void
  ): void;
  deleteDomainAssociation(
    args: DeleteDomainAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainAssociationCommandOutput) => void
  ): void;
  /**
   * <p> Deletes a job for a branch of an Amplify app. </p>
   */
  deleteJob(args: DeleteJobCommandInput, options?: __HttpHandlerOptions): Promise<DeleteJobCommandOutput>;
  deleteJob(args: DeleteJobCommandInput, cb: (err: any, data?: DeleteJobCommandOutput) => void): void;
  deleteJob(
    args: DeleteJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJobCommandOutput) => void
  ): void;
  /**
   * <p> Deletes a webhook. </p>
   */
  deleteWebhook(args: DeleteWebhookCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWebhookCommandOutput>;
  deleteWebhook(args: DeleteWebhookCommandInput, cb: (err: any, data?: DeleteWebhookCommandOutput) => void): void;
  deleteWebhook(
    args: DeleteWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWebhookCommandOutput) => void
  ): void;
  /**
   * <p> Returns the website access logs for a specific time range using a presigned URL.
   *         </p>
   */
  generateAccessLogs(
    args: GenerateAccessLogsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateAccessLogsCommandOutput>;
  generateAccessLogs(
    args: GenerateAccessLogsCommandInput,
    cb: (err: any, data?: GenerateAccessLogsCommandOutput) => void
  ): void;
  generateAccessLogs(
    args: GenerateAccessLogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateAccessLogsCommandOutput) => void
  ): void;
  /**
   * <p> Returns an existing Amplify app by appID. </p>
   */
  getApp(args: GetAppCommandInput, options?: __HttpHandlerOptions): Promise<GetAppCommandOutput>;
  getApp(args: GetAppCommandInput, cb: (err: any, data?: GetAppCommandOutput) => void): void;
  getApp(
    args: GetAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppCommandOutput) => void
  ): void;
  /**
   * <p> Returns the artifact info that corresponds to an artifact id. </p>
   */
  getArtifactUrl(
    args: GetArtifactUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetArtifactUrlCommandOutput>;
  getArtifactUrl(args: GetArtifactUrlCommandInput, cb: (err: any, data?: GetArtifactUrlCommandOutput) => void): void;
  getArtifactUrl(
    args: GetArtifactUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetArtifactUrlCommandOutput) => void
  ): void;
  /**
   * <p> Returns a backend environment for an Amplify app. </p>
   */
  getBackendEnvironment(
    args: GetBackendEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackendEnvironmentCommandOutput>;
  getBackendEnvironment(
    args: GetBackendEnvironmentCommandInput,
    cb: (err: any, data?: GetBackendEnvironmentCommandOutput) => void
  ): void;
  getBackendEnvironment(
    args: GetBackendEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackendEnvironmentCommandOutput) => void
  ): void;
  /**
   * <p> Returns a branch for an Amplify app. </p>
   */
  getBranch(args: GetBranchCommandInput, options?: __HttpHandlerOptions): Promise<GetBranchCommandOutput>;
  getBranch(args: GetBranchCommandInput, cb: (err: any, data?: GetBranchCommandOutput) => void): void;
  getBranch(
    args: GetBranchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBranchCommandOutput) => void
  ): void;
  /**
   * <p> Returns the domain information for an Amplify app. </p>
   */
  getDomainAssociation(
    args: GetDomainAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainAssociationCommandOutput>;
  getDomainAssociation(
    args: GetDomainAssociationCommandInput,
    cb: (err: any, data?: GetDomainAssociationCommandOutput) => void
  ): void;
  getDomainAssociation(
    args: GetDomainAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainAssociationCommandOutput) => void
  ): void;
  /**
   * <p> Returns a job for a branch of an Amplify app. </p>
   */
  getJob(args: GetJobCommandInput, options?: __HttpHandlerOptions): Promise<GetJobCommandOutput>;
  getJob(args: GetJobCommandInput, cb: (err: any, data?: GetJobCommandOutput) => void): void;
  getJob(
    args: GetJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobCommandOutput) => void
  ): void;
  /**
   * <p> Returns the webhook information that corresponds to a specified webhook ID. </p>
   */
  getWebhook(args: GetWebhookCommandInput, options?: __HttpHandlerOptions): Promise<GetWebhookCommandOutput>;
  getWebhook(args: GetWebhookCommandInput, cb: (err: any, data?: GetWebhookCommandOutput) => void): void;
  getWebhook(
    args: GetWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWebhookCommandOutput) => void
  ): void;
  /**
   * <p> Returns a list of the existing Amplify apps. </p>
   */
  listApps(args: ListAppsCommandInput, options?: __HttpHandlerOptions): Promise<ListAppsCommandOutput>;
  listApps(args: ListAppsCommandInput, cb: (err: any, data?: ListAppsCommandOutput) => void): void;
  listApps(
    args: ListAppsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppsCommandOutput) => void
  ): void;
  /**
   * <p> Returns a list of artifacts for a specified app, branch, and job. </p>
   */
  listArtifacts(args: ListArtifactsCommandInput, options?: __HttpHandlerOptions): Promise<ListArtifactsCommandOutput>;
  listArtifacts(args: ListArtifactsCommandInput, cb: (err: any, data?: ListArtifactsCommandOutput) => void): void;
  listArtifacts(
    args: ListArtifactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListArtifactsCommandOutput) => void
  ): void;
  /**
   * <p> Lists the backend environments for an Amplify app. </p>
   */
  listBackendEnvironments(
    args: ListBackendEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBackendEnvironmentsCommandOutput>;
  listBackendEnvironments(
    args: ListBackendEnvironmentsCommandInput,
    cb: (err: any, data?: ListBackendEnvironmentsCommandOutput) => void
  ): void;
  listBackendEnvironments(
    args: ListBackendEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBackendEnvironmentsCommandOutput) => void
  ): void;
  /**
   * <p> Lists the branches of an Amplify app. </p>
   */
  listBranches(args: ListBranchesCommandInput, options?: __HttpHandlerOptions): Promise<ListBranchesCommandOutput>;
  listBranches(args: ListBranchesCommandInput, cb: (err: any, data?: ListBranchesCommandOutput) => void): void;
  listBranches(
    args: ListBranchesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBranchesCommandOutput) => void
  ): void;
  /**
   * <p> Returns the domain associations for an Amplify app. </p>
   */
  listDomainAssociations(
    args: ListDomainAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainAssociationsCommandOutput>;
  listDomainAssociations(
    args: ListDomainAssociationsCommandInput,
    cb: (err: any, data?: ListDomainAssociationsCommandOutput) => void
  ): void;
  listDomainAssociations(
    args: ListDomainAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainAssociationsCommandOutput) => void
  ): void;
  /**
   * <p> Lists the jobs for a branch of an Amplify app. </p>
   */
  listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
  listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
  listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  /**
   * <p> Returns a list of tags for a specified Amazon Resource Name (ARN). </p>
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
   * <p> Returns a list of webhooks for an Amplify app. </p>
   */
  listWebhooks(args: ListWebhooksCommandInput, options?: __HttpHandlerOptions): Promise<ListWebhooksCommandOutput>;
  listWebhooks(args: ListWebhooksCommandInput, cb: (err: any, data?: ListWebhooksCommandOutput) => void): void;
  listWebhooks(
    args: ListWebhooksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWebhooksCommandOutput) => void
  ): void;
  /**
   * <p> Starts a deployment for a manually deployed app. Manually deployed apps are not
   *             connected to a repository. </p>
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
   * <p> Starts a new job for a branch of an Amplify app. </p>
   */
  startJob(args: StartJobCommandInput, options?: __HttpHandlerOptions): Promise<StartJobCommandOutput>;
  startJob(args: StartJobCommandInput, cb: (err: any, data?: StartJobCommandOutput) => void): void;
  startJob(
    args: StartJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartJobCommandOutput) => void
  ): void;
  /**
   * <p> Stops a job that is in progress for a branch of an Amplify app. </p>
   */
  stopJob(args: StopJobCommandInput, options?: __HttpHandlerOptions): Promise<StopJobCommandOutput>;
  stopJob(args: StopJobCommandInput, cb: (err: any, data?: StopJobCommandOutput) => void): void;
  stopJob(
    args: StopJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopJobCommandOutput) => void
  ): void;
  /**
   * <p> Tags the resource with a tag key and value. </p>
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  /**
   * <p> Untags a resource with a specified Amazon Resource Name (ARN). </p>
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  /**
   * <p> Updates an existing Amplify app. </p>
   */
  updateApp(args: UpdateAppCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAppCommandOutput>;
  updateApp(args: UpdateAppCommandInput, cb: (err: any, data?: UpdateAppCommandOutput) => void): void;
  updateApp(
    args: UpdateAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppCommandOutput) => void
  ): void;
  /**
   * <p> Updates a branch for an Amplify app. </p>
   */
  updateBranch(args: UpdateBranchCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBranchCommandOutput>;
  updateBranch(args: UpdateBranchCommandInput, cb: (err: any, data?: UpdateBranchCommandOutput) => void): void;
  updateBranch(
    args: UpdateBranchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBranchCommandOutput) => void
  ): void;
  /**
   * <p> Creates a new domain association for an Amplify app.</p>
   */
  updateDomainAssociation(
    args: UpdateDomainAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainAssociationCommandOutput>;
  updateDomainAssociation(
    args: UpdateDomainAssociationCommandInput,
    cb: (err: any, data?: UpdateDomainAssociationCommandOutput) => void
  ): void;
  updateDomainAssociation(
    args: UpdateDomainAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainAssociationCommandOutput) => void
  ): void;
  /**
   * <p> Updates a webhook. </p>
   */
  updateWebhook(args: UpdateWebhookCommandInput, options?: __HttpHandlerOptions): Promise<UpdateWebhookCommandOutput>;
  updateWebhook(args: UpdateWebhookCommandInput, cb: (err: any, data?: UpdateWebhookCommandOutput) => void): void;
  updateWebhook(
    args: UpdateWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWebhookCommandOutput) => void
  ): void;
}
