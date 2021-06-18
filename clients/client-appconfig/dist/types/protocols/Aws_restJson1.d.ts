import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import {
  CreateConfigurationProfileCommandInput,
  CreateConfigurationProfileCommandOutput,
} from "../commands/CreateConfigurationProfileCommand";
import {
  CreateDeploymentStrategyCommandInput,
  CreateDeploymentStrategyCommandOutput,
} from "../commands/CreateDeploymentStrategyCommand";
import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "../commands/CreateEnvironmentCommand";
import {
  CreateHostedConfigurationVersionCommandInput,
  CreateHostedConfigurationVersionCommandOutput,
} from "../commands/CreateHostedConfigurationVersionCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "../commands/DeleteApplicationCommand";
import {
  DeleteConfigurationProfileCommandInput,
  DeleteConfigurationProfileCommandOutput,
} from "../commands/DeleteConfigurationProfileCommand";
import {
  DeleteDeploymentStrategyCommandInput,
  DeleteDeploymentStrategyCommandOutput,
} from "../commands/DeleteDeploymentStrategyCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "../commands/DeleteEnvironmentCommand";
import {
  DeleteHostedConfigurationVersionCommandInput,
  DeleteHostedConfigurationVersionCommandOutput,
} from "../commands/DeleteHostedConfigurationVersionCommand";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "../commands/GetApplicationCommand";
import { GetConfigurationCommandInput, GetConfigurationCommandOutput } from "../commands/GetConfigurationCommand";
import {
  GetConfigurationProfileCommandInput,
  GetConfigurationProfileCommandOutput,
} from "../commands/GetConfigurationProfileCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "../commands/GetDeploymentCommand";
import {
  GetDeploymentStrategyCommandInput,
  GetDeploymentStrategyCommandOutput,
} from "../commands/GetDeploymentStrategyCommand";
import { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "../commands/GetEnvironmentCommand";
import {
  GetHostedConfigurationVersionCommandInput,
  GetHostedConfigurationVersionCommandOutput,
} from "../commands/GetHostedConfigurationVersionCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import {
  ListConfigurationProfilesCommandInput,
  ListConfigurationProfilesCommandOutput,
} from "../commands/ListConfigurationProfilesCommand";
import {
  ListDeploymentStrategiesCommandInput,
  ListDeploymentStrategiesCommandOutput,
} from "../commands/ListDeploymentStrategiesCommand";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "../commands/ListDeploymentsCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "../commands/ListEnvironmentsCommand";
import {
  ListHostedConfigurationVersionsCommandInput,
  ListHostedConfigurationVersionsCommandOutput,
} from "../commands/ListHostedConfigurationVersionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartDeploymentCommandInput, StartDeploymentCommandOutput } from "../commands/StartDeploymentCommand";
import { StopDeploymentCommandInput, StopDeploymentCommandOutput } from "../commands/StopDeploymentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import {
  UpdateConfigurationProfileCommandInput,
  UpdateConfigurationProfileCommandOutput,
} from "../commands/UpdateConfigurationProfileCommand";
import {
  UpdateDeploymentStrategyCommandInput,
  UpdateDeploymentStrategyCommandOutput,
} from "../commands/UpdateDeploymentStrategyCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "../commands/UpdateEnvironmentCommand";
import {
  ValidateConfigurationCommandInput,
  ValidateConfigurationCommandOutput,
} from "../commands/ValidateConfigurationCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1CreateApplicationCommand: (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateConfigurationProfileCommand: (
  input: CreateConfigurationProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateDeploymentStrategyCommand: (
  input: CreateDeploymentStrategyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateEnvironmentCommand: (
  input: CreateEnvironmentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateHostedConfigurationVersionCommand: (
  input: CreateHostedConfigurationVersionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteApplicationCommand: (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteConfigurationProfileCommand: (
  input: DeleteConfigurationProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteDeploymentStrategyCommand: (
  input: DeleteDeploymentStrategyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteEnvironmentCommand: (
  input: DeleteEnvironmentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteHostedConfigurationVersionCommand: (
  input: DeleteHostedConfigurationVersionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetApplicationCommand: (
  input: GetApplicationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetConfigurationCommand: (
  input: GetConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetConfigurationProfileCommand: (
  input: GetConfigurationProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetDeploymentCommand: (
  input: GetDeploymentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetDeploymentStrategyCommand: (
  input: GetDeploymentStrategyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetEnvironmentCommand: (
  input: GetEnvironmentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetHostedConfigurationVersionCommand: (
  input: GetHostedConfigurationVersionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListApplicationsCommand: (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListConfigurationProfilesCommand: (
  input: ListConfigurationProfilesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListDeploymentsCommand: (
  input: ListDeploymentsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListDeploymentStrategiesCommand: (
  input: ListDeploymentStrategiesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListEnvironmentsCommand: (
  input: ListEnvironmentsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListHostedConfigurationVersionsCommand: (
  input: ListHostedConfigurationVersionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTagsForResourceCommand: (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StartDeploymentCommand: (
  input: StartDeploymentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StopDeploymentCommand: (
  input: StopDeploymentCommandInput,
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
export declare const serializeAws_restJson1UpdateApplicationCommand: (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateConfigurationProfileCommand: (
  input: UpdateConfigurationProfileCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateDeploymentStrategyCommand: (
  input: UpdateDeploymentStrategyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateEnvironmentCommand: (
  input: UpdateEnvironmentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ValidateConfigurationCommand: (
  input: ValidateConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1CreateApplicationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateApplicationCommandOutput>;
export declare const deserializeAws_restJson1CreateConfigurationProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateConfigurationProfileCommandOutput>;
export declare const deserializeAws_restJson1CreateDeploymentStrategyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateDeploymentStrategyCommandOutput>;
export declare const deserializeAws_restJson1CreateEnvironmentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateEnvironmentCommandOutput>;
export declare const deserializeAws_restJson1CreateHostedConfigurationVersionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateHostedConfigurationVersionCommandOutput>;
export declare const deserializeAws_restJson1DeleteApplicationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteApplicationCommandOutput>;
export declare const deserializeAws_restJson1DeleteConfigurationProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteConfigurationProfileCommandOutput>;
export declare const deserializeAws_restJson1DeleteDeploymentStrategyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteDeploymentStrategyCommandOutput>;
export declare const deserializeAws_restJson1DeleteEnvironmentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteEnvironmentCommandOutput>;
export declare const deserializeAws_restJson1DeleteHostedConfigurationVersionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteHostedConfigurationVersionCommandOutput>;
export declare const deserializeAws_restJson1GetApplicationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetApplicationCommandOutput>;
export declare const deserializeAws_restJson1GetConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetConfigurationCommandOutput>;
export declare const deserializeAws_restJson1GetConfigurationProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetConfigurationProfileCommandOutput>;
export declare const deserializeAws_restJson1GetDeploymentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetDeploymentCommandOutput>;
export declare const deserializeAws_restJson1GetDeploymentStrategyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetDeploymentStrategyCommandOutput>;
export declare const deserializeAws_restJson1GetEnvironmentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetEnvironmentCommandOutput>;
export declare const deserializeAws_restJson1GetHostedConfigurationVersionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetHostedConfigurationVersionCommandOutput>;
export declare const deserializeAws_restJson1ListApplicationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListApplicationsCommandOutput>;
export declare const deserializeAws_restJson1ListConfigurationProfilesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListConfigurationProfilesCommandOutput>;
export declare const deserializeAws_restJson1ListDeploymentsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListDeploymentsCommandOutput>;
export declare const deserializeAws_restJson1ListDeploymentStrategiesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListDeploymentStrategiesCommandOutput>;
export declare const deserializeAws_restJson1ListEnvironmentsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListEnvironmentsCommandOutput>;
export declare const deserializeAws_restJson1ListHostedConfigurationVersionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListHostedConfigurationVersionsCommandOutput>;
export declare const deserializeAws_restJson1ListTagsForResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_restJson1StartDeploymentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartDeploymentCommandOutput>;
export declare const deserializeAws_restJson1StopDeploymentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StopDeploymentCommandOutput>;
export declare const deserializeAws_restJson1TagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_restJson1UntagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_restJson1UpdateApplicationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateApplicationCommandOutput>;
export declare const deserializeAws_restJson1UpdateConfigurationProfileCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateConfigurationProfileCommandOutput>;
export declare const deserializeAws_restJson1UpdateDeploymentStrategyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateDeploymentStrategyCommandOutput>;
export declare const deserializeAws_restJson1UpdateEnvironmentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateEnvironmentCommandOutput>;
export declare const deserializeAws_restJson1ValidateConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ValidateConfigurationCommandOutput>;
