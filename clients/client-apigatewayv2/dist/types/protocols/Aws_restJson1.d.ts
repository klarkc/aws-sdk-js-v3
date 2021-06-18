import { CreateApiCommandInput, CreateApiCommandOutput } from "../commands/CreateApiCommand";
import { CreateApiMappingCommandInput, CreateApiMappingCommandOutput } from "../commands/CreateApiMappingCommand";
import { CreateAuthorizerCommandInput, CreateAuthorizerCommandOutput } from "../commands/CreateAuthorizerCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "../commands/CreateDeploymentCommand";
import { CreateDomainNameCommandInput, CreateDomainNameCommandOutput } from "../commands/CreateDomainNameCommand";
import { CreateIntegrationCommandInput, CreateIntegrationCommandOutput } from "../commands/CreateIntegrationCommand";
import {
  CreateIntegrationResponseCommandInput,
  CreateIntegrationResponseCommandOutput,
} from "../commands/CreateIntegrationResponseCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "../commands/CreateModelCommand";
import { CreateRouteCommandInput, CreateRouteCommandOutput } from "../commands/CreateRouteCommand";
import {
  CreateRouteResponseCommandInput,
  CreateRouteResponseCommandOutput,
} from "../commands/CreateRouteResponseCommand";
import { CreateStageCommandInput, CreateStageCommandOutput } from "../commands/CreateStageCommand";
import { CreateVpcLinkCommandInput, CreateVpcLinkCommandOutput } from "../commands/CreateVpcLinkCommand";
import {
  DeleteAccessLogSettingsCommandInput,
  DeleteAccessLogSettingsCommandOutput,
} from "../commands/DeleteAccessLogSettingsCommand";
import { DeleteApiCommandInput, DeleteApiCommandOutput } from "../commands/DeleteApiCommand";
import { DeleteApiMappingCommandInput, DeleteApiMappingCommandOutput } from "../commands/DeleteApiMappingCommand";
import { DeleteAuthorizerCommandInput, DeleteAuthorizerCommandOutput } from "../commands/DeleteAuthorizerCommand";
import {
  DeleteCorsConfigurationCommandInput,
  DeleteCorsConfigurationCommandOutput,
} from "../commands/DeleteCorsConfigurationCommand";
import { DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput } from "../commands/DeleteDeploymentCommand";
import { DeleteDomainNameCommandInput, DeleteDomainNameCommandOutput } from "../commands/DeleteDomainNameCommand";
import { DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput } from "../commands/DeleteIntegrationCommand";
import {
  DeleteIntegrationResponseCommandInput,
  DeleteIntegrationResponseCommandOutput,
} from "../commands/DeleteIntegrationResponseCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "../commands/DeleteModelCommand";
import { DeleteRouteCommandInput, DeleteRouteCommandOutput } from "../commands/DeleteRouteCommand";
import {
  DeleteRouteRequestParameterCommandInput,
  DeleteRouteRequestParameterCommandOutput,
} from "../commands/DeleteRouteRequestParameterCommand";
import {
  DeleteRouteResponseCommandInput,
  DeleteRouteResponseCommandOutput,
} from "../commands/DeleteRouteResponseCommand";
import {
  DeleteRouteSettingsCommandInput,
  DeleteRouteSettingsCommandOutput,
} from "../commands/DeleteRouteSettingsCommand";
import { DeleteStageCommandInput, DeleteStageCommandOutput } from "../commands/DeleteStageCommand";
import { DeleteVpcLinkCommandInput, DeleteVpcLinkCommandOutput } from "../commands/DeleteVpcLinkCommand";
import { ExportApiCommandInput, ExportApiCommandOutput } from "../commands/ExportApiCommand";
import { GetApiCommandInput, GetApiCommandOutput } from "../commands/GetApiCommand";
import { GetApiMappingCommandInput, GetApiMappingCommandOutput } from "../commands/GetApiMappingCommand";
import { GetApiMappingsCommandInput, GetApiMappingsCommandOutput } from "../commands/GetApiMappingsCommand";
import { GetApisCommandInput, GetApisCommandOutput } from "../commands/GetApisCommand";
import { GetAuthorizerCommandInput, GetAuthorizerCommandOutput } from "../commands/GetAuthorizerCommand";
import { GetAuthorizersCommandInput, GetAuthorizersCommandOutput } from "../commands/GetAuthorizersCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "../commands/GetDeploymentCommand";
import { GetDeploymentsCommandInput, GetDeploymentsCommandOutput } from "../commands/GetDeploymentsCommand";
import { GetDomainNameCommandInput, GetDomainNameCommandOutput } from "../commands/GetDomainNameCommand";
import { GetDomainNamesCommandInput, GetDomainNamesCommandOutput } from "../commands/GetDomainNamesCommand";
import { GetIntegrationCommandInput, GetIntegrationCommandOutput } from "../commands/GetIntegrationCommand";
import {
  GetIntegrationResponseCommandInput,
  GetIntegrationResponseCommandOutput,
} from "../commands/GetIntegrationResponseCommand";
import {
  GetIntegrationResponsesCommandInput,
  GetIntegrationResponsesCommandOutput,
} from "../commands/GetIntegrationResponsesCommand";
import { GetIntegrationsCommandInput, GetIntegrationsCommandOutput } from "../commands/GetIntegrationsCommand";
import { GetModelCommandInput, GetModelCommandOutput } from "../commands/GetModelCommand";
import { GetModelTemplateCommandInput, GetModelTemplateCommandOutput } from "../commands/GetModelTemplateCommand";
import { GetModelsCommandInput, GetModelsCommandOutput } from "../commands/GetModelsCommand";
import { GetRouteCommandInput, GetRouteCommandOutput } from "../commands/GetRouteCommand";
import { GetRouteResponseCommandInput, GetRouteResponseCommandOutput } from "../commands/GetRouteResponseCommand";
import { GetRouteResponsesCommandInput, GetRouteResponsesCommandOutput } from "../commands/GetRouteResponsesCommand";
import { GetRoutesCommandInput, GetRoutesCommandOutput } from "../commands/GetRoutesCommand";
import { GetStageCommandInput, GetStageCommandOutput } from "../commands/GetStageCommand";
import { GetStagesCommandInput, GetStagesCommandOutput } from "../commands/GetStagesCommand";
import { GetTagsCommandInput, GetTagsCommandOutput } from "../commands/GetTagsCommand";
import { GetVpcLinkCommandInput, GetVpcLinkCommandOutput } from "../commands/GetVpcLinkCommand";
import { GetVpcLinksCommandInput, GetVpcLinksCommandOutput } from "../commands/GetVpcLinksCommand";
import { ImportApiCommandInput, ImportApiCommandOutput } from "../commands/ImportApiCommand";
import { ReimportApiCommandInput, ReimportApiCommandOutput } from "../commands/ReimportApiCommand";
import {
  ResetAuthorizersCacheCommandInput,
  ResetAuthorizersCacheCommandOutput,
} from "../commands/ResetAuthorizersCacheCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApiCommandInput, UpdateApiCommandOutput } from "../commands/UpdateApiCommand";
import { UpdateApiMappingCommandInput, UpdateApiMappingCommandOutput } from "../commands/UpdateApiMappingCommand";
import { UpdateAuthorizerCommandInput, UpdateAuthorizerCommandOutput } from "../commands/UpdateAuthorizerCommand";
import { UpdateDeploymentCommandInput, UpdateDeploymentCommandOutput } from "../commands/UpdateDeploymentCommand";
import { UpdateDomainNameCommandInput, UpdateDomainNameCommandOutput } from "../commands/UpdateDomainNameCommand";
import { UpdateIntegrationCommandInput, UpdateIntegrationCommandOutput } from "../commands/UpdateIntegrationCommand";
import {
  UpdateIntegrationResponseCommandInput,
  UpdateIntegrationResponseCommandOutput,
} from "../commands/UpdateIntegrationResponseCommand";
import { UpdateModelCommandInput, UpdateModelCommandOutput } from "../commands/UpdateModelCommand";
import { UpdateRouteCommandInput, UpdateRouteCommandOutput } from "../commands/UpdateRouteCommand";
import {
  UpdateRouteResponseCommandInput,
  UpdateRouteResponseCommandOutput,
} from "../commands/UpdateRouteResponseCommand";
import { UpdateStageCommandInput, UpdateStageCommandOutput } from "../commands/UpdateStageCommand";
import { UpdateVpcLinkCommandInput, UpdateVpcLinkCommandOutput } from "../commands/UpdateVpcLinkCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1CreateApiCommand: (
  input: CreateApiCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateApiMappingCommand: (
  input: CreateApiMappingCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateAuthorizerCommand: (
  input: CreateAuthorizerCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateDeploymentCommand: (
  input: CreateDeploymentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateDomainNameCommand: (
  input: CreateDomainNameCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateIntegrationCommand: (
  input: CreateIntegrationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateIntegrationResponseCommand: (
  input: CreateIntegrationResponseCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateModelCommand: (
  input: CreateModelCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateRouteCommand: (
  input: CreateRouteCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateRouteResponseCommand: (
  input: CreateRouteResponseCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateStageCommand: (
  input: CreateStageCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateVpcLinkCommand: (
  input: CreateVpcLinkCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteAccessLogSettingsCommand: (
  input: DeleteAccessLogSettingsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteApiCommand: (
  input: DeleteApiCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteApiMappingCommand: (
  input: DeleteApiMappingCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteAuthorizerCommand: (
  input: DeleteAuthorizerCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteCorsConfigurationCommand: (
  input: DeleteCorsConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteDeploymentCommand: (
  input: DeleteDeploymentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteDomainNameCommand: (
  input: DeleteDomainNameCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteIntegrationCommand: (
  input: DeleteIntegrationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteIntegrationResponseCommand: (
  input: DeleteIntegrationResponseCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteModelCommand: (
  input: DeleteModelCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteRouteCommand: (
  input: DeleteRouteCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteRouteRequestParameterCommand: (
  input: DeleteRouteRequestParameterCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteRouteResponseCommand: (
  input: DeleteRouteResponseCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteRouteSettingsCommand: (
  input: DeleteRouteSettingsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteStageCommand: (
  input: DeleteStageCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteVpcLinkCommand: (
  input: DeleteVpcLinkCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ExportApiCommand: (
  input: ExportApiCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetApiCommand: (
  input: GetApiCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetApiMappingCommand: (
  input: GetApiMappingCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetApiMappingsCommand: (
  input: GetApiMappingsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetApisCommand: (
  input: GetApisCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetAuthorizerCommand: (
  input: GetAuthorizerCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetAuthorizersCommand: (
  input: GetAuthorizersCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetDeploymentCommand: (
  input: GetDeploymentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetDeploymentsCommand: (
  input: GetDeploymentsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetDomainNameCommand: (
  input: GetDomainNameCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetDomainNamesCommand: (
  input: GetDomainNamesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetIntegrationCommand: (
  input: GetIntegrationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetIntegrationResponseCommand: (
  input: GetIntegrationResponseCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetIntegrationResponsesCommand: (
  input: GetIntegrationResponsesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetIntegrationsCommand: (
  input: GetIntegrationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetModelCommand: (
  input: GetModelCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetModelsCommand: (
  input: GetModelsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetModelTemplateCommand: (
  input: GetModelTemplateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetRouteCommand: (
  input: GetRouteCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetRouteResponseCommand: (
  input: GetRouteResponseCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetRouteResponsesCommand: (
  input: GetRouteResponsesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetRoutesCommand: (
  input: GetRoutesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetStageCommand: (
  input: GetStageCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetStagesCommand: (
  input: GetStagesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetTagsCommand: (
  input: GetTagsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetVpcLinkCommand: (
  input: GetVpcLinkCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetVpcLinksCommand: (
  input: GetVpcLinksCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ImportApiCommand: (
  input: ImportApiCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ReimportApiCommand: (
  input: ReimportApiCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ResetAuthorizersCacheCommand: (
  input: ResetAuthorizersCacheCommandInput,
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
export declare const serializeAws_restJson1UpdateApiCommand: (
  input: UpdateApiCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateApiMappingCommand: (
  input: UpdateApiMappingCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateAuthorizerCommand: (
  input: UpdateAuthorizerCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateDeploymentCommand: (
  input: UpdateDeploymentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateDomainNameCommand: (
  input: UpdateDomainNameCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateIntegrationCommand: (
  input: UpdateIntegrationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateIntegrationResponseCommand: (
  input: UpdateIntegrationResponseCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateModelCommand: (
  input: UpdateModelCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateRouteCommand: (
  input: UpdateRouteCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateRouteResponseCommand: (
  input: UpdateRouteResponseCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateStageCommand: (
  input: UpdateStageCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateVpcLinkCommand: (
  input: UpdateVpcLinkCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1CreateApiCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateApiCommandOutput>;
export declare const deserializeAws_restJson1CreateApiMappingCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateApiMappingCommandOutput>;
export declare const deserializeAws_restJson1CreateAuthorizerCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateAuthorizerCommandOutput>;
export declare const deserializeAws_restJson1CreateDeploymentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateDeploymentCommandOutput>;
export declare const deserializeAws_restJson1CreateDomainNameCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateDomainNameCommandOutput>;
export declare const deserializeAws_restJson1CreateIntegrationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateIntegrationCommandOutput>;
export declare const deserializeAws_restJson1CreateIntegrationResponseCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateIntegrationResponseCommandOutput>;
export declare const deserializeAws_restJson1CreateModelCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateModelCommandOutput>;
export declare const deserializeAws_restJson1CreateRouteCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateRouteCommandOutput>;
export declare const deserializeAws_restJson1CreateRouteResponseCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateRouteResponseCommandOutput>;
export declare const deserializeAws_restJson1CreateStageCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateStageCommandOutput>;
export declare const deserializeAws_restJson1CreateVpcLinkCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateVpcLinkCommandOutput>;
export declare const deserializeAws_restJson1DeleteAccessLogSettingsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteAccessLogSettingsCommandOutput>;
export declare const deserializeAws_restJson1DeleteApiCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteApiCommandOutput>;
export declare const deserializeAws_restJson1DeleteApiMappingCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteApiMappingCommandOutput>;
export declare const deserializeAws_restJson1DeleteAuthorizerCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteAuthorizerCommandOutput>;
export declare const deserializeAws_restJson1DeleteCorsConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteCorsConfigurationCommandOutput>;
export declare const deserializeAws_restJson1DeleteDeploymentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteDeploymentCommandOutput>;
export declare const deserializeAws_restJson1DeleteDomainNameCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteDomainNameCommandOutput>;
export declare const deserializeAws_restJson1DeleteIntegrationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteIntegrationCommandOutput>;
export declare const deserializeAws_restJson1DeleteIntegrationResponseCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteIntegrationResponseCommandOutput>;
export declare const deserializeAws_restJson1DeleteModelCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteModelCommandOutput>;
export declare const deserializeAws_restJson1DeleteRouteCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteRouteCommandOutput>;
export declare const deserializeAws_restJson1DeleteRouteRequestParameterCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteRouteRequestParameterCommandOutput>;
export declare const deserializeAws_restJson1DeleteRouteResponseCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteRouteResponseCommandOutput>;
export declare const deserializeAws_restJson1DeleteRouteSettingsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteRouteSettingsCommandOutput>;
export declare const deserializeAws_restJson1DeleteStageCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteStageCommandOutput>;
export declare const deserializeAws_restJson1DeleteVpcLinkCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteVpcLinkCommandOutput>;
export declare const deserializeAws_restJson1ExportApiCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ExportApiCommandOutput>;
export declare const deserializeAws_restJson1GetApiCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetApiCommandOutput>;
export declare const deserializeAws_restJson1GetApiMappingCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetApiMappingCommandOutput>;
export declare const deserializeAws_restJson1GetApiMappingsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetApiMappingsCommandOutput>;
export declare const deserializeAws_restJson1GetApisCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetApisCommandOutput>;
export declare const deserializeAws_restJson1GetAuthorizerCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetAuthorizerCommandOutput>;
export declare const deserializeAws_restJson1GetAuthorizersCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetAuthorizersCommandOutput>;
export declare const deserializeAws_restJson1GetDeploymentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetDeploymentCommandOutput>;
export declare const deserializeAws_restJson1GetDeploymentsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetDeploymentsCommandOutput>;
export declare const deserializeAws_restJson1GetDomainNameCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetDomainNameCommandOutput>;
export declare const deserializeAws_restJson1GetDomainNamesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetDomainNamesCommandOutput>;
export declare const deserializeAws_restJson1GetIntegrationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetIntegrationCommandOutput>;
export declare const deserializeAws_restJson1GetIntegrationResponseCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetIntegrationResponseCommandOutput>;
export declare const deserializeAws_restJson1GetIntegrationResponsesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetIntegrationResponsesCommandOutput>;
export declare const deserializeAws_restJson1GetIntegrationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetIntegrationsCommandOutput>;
export declare const deserializeAws_restJson1GetModelCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetModelCommandOutput>;
export declare const deserializeAws_restJson1GetModelsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetModelsCommandOutput>;
export declare const deserializeAws_restJson1GetModelTemplateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetModelTemplateCommandOutput>;
export declare const deserializeAws_restJson1GetRouteCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetRouteCommandOutput>;
export declare const deserializeAws_restJson1GetRouteResponseCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetRouteResponseCommandOutput>;
export declare const deserializeAws_restJson1GetRouteResponsesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetRouteResponsesCommandOutput>;
export declare const deserializeAws_restJson1GetRoutesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetRoutesCommandOutput>;
export declare const deserializeAws_restJson1GetStageCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetStageCommandOutput>;
export declare const deserializeAws_restJson1GetStagesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetStagesCommandOutput>;
export declare const deserializeAws_restJson1GetTagsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetTagsCommandOutput>;
export declare const deserializeAws_restJson1GetVpcLinkCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetVpcLinkCommandOutput>;
export declare const deserializeAws_restJson1GetVpcLinksCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetVpcLinksCommandOutput>;
export declare const deserializeAws_restJson1ImportApiCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ImportApiCommandOutput>;
export declare const deserializeAws_restJson1ReimportApiCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ReimportApiCommandOutput>;
export declare const deserializeAws_restJson1ResetAuthorizersCacheCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ResetAuthorizersCacheCommandOutput>;
export declare const deserializeAws_restJson1TagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_restJson1UntagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_restJson1UpdateApiCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateApiCommandOutput>;
export declare const deserializeAws_restJson1UpdateApiMappingCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateApiMappingCommandOutput>;
export declare const deserializeAws_restJson1UpdateAuthorizerCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateAuthorizerCommandOutput>;
export declare const deserializeAws_restJson1UpdateDeploymentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateDeploymentCommandOutput>;
export declare const deserializeAws_restJson1UpdateDomainNameCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateDomainNameCommandOutput>;
export declare const deserializeAws_restJson1UpdateIntegrationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateIntegrationCommandOutput>;
export declare const deserializeAws_restJson1UpdateIntegrationResponseCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateIntegrationResponseCommandOutput>;
export declare const deserializeAws_restJson1UpdateModelCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateModelCommandOutput>;
export declare const deserializeAws_restJson1UpdateRouteCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateRouteCommandOutput>;
export declare const deserializeAws_restJson1UpdateRouteResponseCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateRouteResponseCommandOutput>;
export declare const deserializeAws_restJson1UpdateStageCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateStageCommandOutput>;
export declare const deserializeAws_restJson1UpdateVpcLinkCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateVpcLinkCommandOutput>;
