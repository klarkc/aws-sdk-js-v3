import { CreateAppCommandInput, CreateAppCommandOutput } from "../commands/CreateAppCommand";
import {
  CreateBackendEnvironmentCommandInput,
  CreateBackendEnvironmentCommandOutput,
} from "../commands/CreateBackendEnvironmentCommand";
import { CreateBranchCommandInput, CreateBranchCommandOutput } from "../commands/CreateBranchCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "../commands/CreateDeploymentCommand";
import {
  CreateDomainAssociationCommandInput,
  CreateDomainAssociationCommandOutput,
} from "../commands/CreateDomainAssociationCommand";
import { CreateWebhookCommandInput, CreateWebhookCommandOutput } from "../commands/CreateWebhookCommand";
import { DeleteAppCommandInput, DeleteAppCommandOutput } from "../commands/DeleteAppCommand";
import {
  DeleteBackendEnvironmentCommandInput,
  DeleteBackendEnvironmentCommandOutput,
} from "../commands/DeleteBackendEnvironmentCommand";
import { DeleteBranchCommandInput, DeleteBranchCommandOutput } from "../commands/DeleteBranchCommand";
import {
  DeleteDomainAssociationCommandInput,
  DeleteDomainAssociationCommandOutput,
} from "../commands/DeleteDomainAssociationCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "../commands/DeleteJobCommand";
import { DeleteWebhookCommandInput, DeleteWebhookCommandOutput } from "../commands/DeleteWebhookCommand";
import { GenerateAccessLogsCommandInput, GenerateAccessLogsCommandOutput } from "../commands/GenerateAccessLogsCommand";
import { GetAppCommandInput, GetAppCommandOutput } from "../commands/GetAppCommand";
import { GetArtifactUrlCommandInput, GetArtifactUrlCommandOutput } from "../commands/GetArtifactUrlCommand";
import {
  GetBackendEnvironmentCommandInput,
  GetBackendEnvironmentCommandOutput,
} from "../commands/GetBackendEnvironmentCommand";
import { GetBranchCommandInput, GetBranchCommandOutput } from "../commands/GetBranchCommand";
import {
  GetDomainAssociationCommandInput,
  GetDomainAssociationCommandOutput,
} from "../commands/GetDomainAssociationCommand";
import { GetJobCommandInput, GetJobCommandOutput } from "../commands/GetJobCommand";
import { GetWebhookCommandInput, GetWebhookCommandOutput } from "../commands/GetWebhookCommand";
import { ListAppsCommandInput, ListAppsCommandOutput } from "../commands/ListAppsCommand";
import { ListArtifactsCommandInput, ListArtifactsCommandOutput } from "../commands/ListArtifactsCommand";
import {
  ListBackendEnvironmentsCommandInput,
  ListBackendEnvironmentsCommandOutput,
} from "../commands/ListBackendEnvironmentsCommand";
import { ListBranchesCommandInput, ListBranchesCommandOutput } from "../commands/ListBranchesCommand";
import {
  ListDomainAssociationsCommandInput,
  ListDomainAssociationsCommandOutput,
} from "../commands/ListDomainAssociationsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListWebhooksCommandInput, ListWebhooksCommandOutput } from "../commands/ListWebhooksCommand";
import { StartDeploymentCommandInput, StartDeploymentCommandOutput } from "../commands/StartDeploymentCommand";
import { StartJobCommandInput, StartJobCommandOutput } from "../commands/StartJobCommand";
import { StopJobCommandInput, StopJobCommandOutput } from "../commands/StopJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAppCommandInput, UpdateAppCommandOutput } from "../commands/UpdateAppCommand";
import { UpdateBranchCommandInput, UpdateBranchCommandOutput } from "../commands/UpdateBranchCommand";
import {
  UpdateDomainAssociationCommandInput,
  UpdateDomainAssociationCommandOutput,
} from "../commands/UpdateDomainAssociationCommand";
import { UpdateWebhookCommandInput, UpdateWebhookCommandOutput } from "../commands/UpdateWebhookCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1CreateAppCommand: (
  input: CreateAppCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateBackendEnvironmentCommand: (
  input: CreateBackendEnvironmentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateBranchCommand: (
  input: CreateBranchCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateDeploymentCommand: (
  input: CreateDeploymentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateDomainAssociationCommand: (
  input: CreateDomainAssociationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateWebhookCommand: (
  input: CreateWebhookCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteAppCommand: (
  input: DeleteAppCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteBackendEnvironmentCommand: (
  input: DeleteBackendEnvironmentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteBranchCommand: (
  input: DeleteBranchCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteDomainAssociationCommand: (
  input: DeleteDomainAssociationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteJobCommand: (
  input: DeleteJobCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteWebhookCommand: (
  input: DeleteWebhookCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GenerateAccessLogsCommand: (
  input: GenerateAccessLogsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetAppCommand: (
  input: GetAppCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetArtifactUrlCommand: (
  input: GetArtifactUrlCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetBackendEnvironmentCommand: (
  input: GetBackendEnvironmentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetBranchCommand: (
  input: GetBranchCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetDomainAssociationCommand: (
  input: GetDomainAssociationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetJobCommand: (
  input: GetJobCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetWebhookCommand: (
  input: GetWebhookCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListAppsCommand: (
  input: ListAppsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListArtifactsCommand: (
  input: ListArtifactsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListBackendEnvironmentsCommand: (
  input: ListBackendEnvironmentsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListBranchesCommand: (
  input: ListBranchesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListDomainAssociationsCommand: (
  input: ListDomainAssociationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListJobsCommand: (
  input: ListJobsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTagsForResourceCommand: (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListWebhooksCommand: (
  input: ListWebhooksCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StartDeploymentCommand: (
  input: StartDeploymentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StartJobCommand: (
  input: StartJobCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StopJobCommand: (
  input: StopJobCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1TagResourceCommand: (
  input: TagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UntagResourceCommand: (
  input: UntagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateAppCommand: (
  input: UpdateAppCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateBranchCommand: (
  input: UpdateBranchCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateDomainAssociationCommand: (
  input: UpdateDomainAssociationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateWebhookCommand: (
  input: UpdateWebhookCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1CreateAppCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateAppCommandOutput>;
export declare const deserializeAws_restJson1CreateBackendEnvironmentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateBackendEnvironmentCommandOutput>;
export declare const deserializeAws_restJson1CreateBranchCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateBranchCommandOutput>;
export declare const deserializeAws_restJson1CreateDeploymentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateDeploymentCommandOutput>;
export declare const deserializeAws_restJson1CreateDomainAssociationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateDomainAssociationCommandOutput>;
export declare const deserializeAws_restJson1CreateWebhookCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateWebhookCommandOutput>;
export declare const deserializeAws_restJson1DeleteAppCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteAppCommandOutput>;
export declare const deserializeAws_restJson1DeleteBackendEnvironmentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBackendEnvironmentCommandOutput>;
export declare const deserializeAws_restJson1DeleteBranchCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteBranchCommandOutput>;
export declare const deserializeAws_restJson1DeleteDomainAssociationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteDomainAssociationCommandOutput>;
export declare const deserializeAws_restJson1DeleteJobCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteJobCommandOutput>;
export declare const deserializeAws_restJson1DeleteWebhookCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteWebhookCommandOutput>;
export declare const deserializeAws_restJson1GenerateAccessLogsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GenerateAccessLogsCommandOutput>;
export declare const deserializeAws_restJson1GetAppCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetAppCommandOutput>;
export declare const deserializeAws_restJson1GetArtifactUrlCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetArtifactUrlCommandOutput>;
export declare const deserializeAws_restJson1GetBackendEnvironmentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBackendEnvironmentCommandOutput>;
export declare const deserializeAws_restJson1GetBranchCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetBranchCommandOutput>;
export declare const deserializeAws_restJson1GetDomainAssociationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetDomainAssociationCommandOutput>;
export declare const deserializeAws_restJson1GetJobCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetJobCommandOutput>;
export declare const deserializeAws_restJson1GetWebhookCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetWebhookCommandOutput>;
export declare const deserializeAws_restJson1ListAppsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListAppsCommandOutput>;
export declare const deserializeAws_restJson1ListArtifactsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListArtifactsCommandOutput>;
export declare const deserializeAws_restJson1ListBackendEnvironmentsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListBackendEnvironmentsCommandOutput>;
export declare const deserializeAws_restJson1ListBranchesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListBranchesCommandOutput>;
export declare const deserializeAws_restJson1ListDomainAssociationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListDomainAssociationsCommandOutput>;
export declare const deserializeAws_restJson1ListJobsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListJobsCommandOutput>;
export declare const deserializeAws_restJson1ListTagsForResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_restJson1ListWebhooksCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListWebhooksCommandOutput>;
export declare const deserializeAws_restJson1StartDeploymentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartDeploymentCommandOutput>;
export declare const deserializeAws_restJson1StartJobCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartJobCommandOutput>;
export declare const deserializeAws_restJson1StopJobCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StopJobCommandOutput>;
export declare const deserializeAws_restJson1TagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_restJson1UntagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_restJson1UpdateAppCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateAppCommandOutput>;
export declare const deserializeAws_restJson1UpdateBranchCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateBranchCommandOutput>;
export declare const deserializeAws_restJson1UpdateDomainAssociationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateDomainAssociationCommandOutput>;
export declare const deserializeAws_restJson1UpdateWebhookCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateWebhookCommandOutput>;
