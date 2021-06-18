import { ApiGatewayV2Client } from "./ApiGatewayV2Client";
import { CreateApiCommandInput, CreateApiCommandOutput } from "./commands/CreateApiCommand";
import { CreateApiMappingCommandInput, CreateApiMappingCommandOutput } from "./commands/CreateApiMappingCommand";
import { CreateAuthorizerCommandInput, CreateAuthorizerCommandOutput } from "./commands/CreateAuthorizerCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "./commands/CreateDeploymentCommand";
import { CreateDomainNameCommandInput, CreateDomainNameCommandOutput } from "./commands/CreateDomainNameCommand";
import { CreateIntegrationCommandInput, CreateIntegrationCommandOutput } from "./commands/CreateIntegrationCommand";
import {
  CreateIntegrationResponseCommandInput,
  CreateIntegrationResponseCommandOutput,
} from "./commands/CreateIntegrationResponseCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import { CreateRouteCommandInput, CreateRouteCommandOutput } from "./commands/CreateRouteCommand";
import {
  CreateRouteResponseCommandInput,
  CreateRouteResponseCommandOutput,
} from "./commands/CreateRouteResponseCommand";
import { CreateStageCommandInput, CreateStageCommandOutput } from "./commands/CreateStageCommand";
import { CreateVpcLinkCommandInput, CreateVpcLinkCommandOutput } from "./commands/CreateVpcLinkCommand";
import {
  DeleteAccessLogSettingsCommandInput,
  DeleteAccessLogSettingsCommandOutput,
} from "./commands/DeleteAccessLogSettingsCommand";
import { DeleteApiCommandInput, DeleteApiCommandOutput } from "./commands/DeleteApiCommand";
import { DeleteApiMappingCommandInput, DeleteApiMappingCommandOutput } from "./commands/DeleteApiMappingCommand";
import { DeleteAuthorizerCommandInput, DeleteAuthorizerCommandOutput } from "./commands/DeleteAuthorizerCommand";
import {
  DeleteCorsConfigurationCommandInput,
  DeleteCorsConfigurationCommandOutput,
} from "./commands/DeleteCorsConfigurationCommand";
import { DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput } from "./commands/DeleteDeploymentCommand";
import { DeleteDomainNameCommandInput, DeleteDomainNameCommandOutput } from "./commands/DeleteDomainNameCommand";
import { DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput } from "./commands/DeleteIntegrationCommand";
import {
  DeleteIntegrationResponseCommandInput,
  DeleteIntegrationResponseCommandOutput,
} from "./commands/DeleteIntegrationResponseCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import { DeleteRouteCommandInput, DeleteRouteCommandOutput } from "./commands/DeleteRouteCommand";
import {
  DeleteRouteRequestParameterCommandInput,
  DeleteRouteRequestParameterCommandOutput,
} from "./commands/DeleteRouteRequestParameterCommand";
import {
  DeleteRouteResponseCommandInput,
  DeleteRouteResponseCommandOutput,
} from "./commands/DeleteRouteResponseCommand";
import {
  DeleteRouteSettingsCommandInput,
  DeleteRouteSettingsCommandOutput,
} from "./commands/DeleteRouteSettingsCommand";
import { DeleteStageCommandInput, DeleteStageCommandOutput } from "./commands/DeleteStageCommand";
import { DeleteVpcLinkCommandInput, DeleteVpcLinkCommandOutput } from "./commands/DeleteVpcLinkCommand";
import { ExportApiCommandInput, ExportApiCommandOutput } from "./commands/ExportApiCommand";
import { GetApiCommandInput, GetApiCommandOutput } from "./commands/GetApiCommand";
import { GetApiMappingCommandInput, GetApiMappingCommandOutput } from "./commands/GetApiMappingCommand";
import { GetApiMappingsCommandInput, GetApiMappingsCommandOutput } from "./commands/GetApiMappingsCommand";
import { GetApisCommandInput, GetApisCommandOutput } from "./commands/GetApisCommand";
import { GetAuthorizerCommandInput, GetAuthorizerCommandOutput } from "./commands/GetAuthorizerCommand";
import { GetAuthorizersCommandInput, GetAuthorizersCommandOutput } from "./commands/GetAuthorizersCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "./commands/GetDeploymentCommand";
import { GetDeploymentsCommandInput, GetDeploymentsCommandOutput } from "./commands/GetDeploymentsCommand";
import { GetDomainNameCommandInput, GetDomainNameCommandOutput } from "./commands/GetDomainNameCommand";
import { GetDomainNamesCommandInput, GetDomainNamesCommandOutput } from "./commands/GetDomainNamesCommand";
import { GetIntegrationCommandInput, GetIntegrationCommandOutput } from "./commands/GetIntegrationCommand";
import {
  GetIntegrationResponseCommandInput,
  GetIntegrationResponseCommandOutput,
} from "./commands/GetIntegrationResponseCommand";
import {
  GetIntegrationResponsesCommandInput,
  GetIntegrationResponsesCommandOutput,
} from "./commands/GetIntegrationResponsesCommand";
import { GetIntegrationsCommandInput, GetIntegrationsCommandOutput } from "./commands/GetIntegrationsCommand";
import { GetModelCommandInput, GetModelCommandOutput } from "./commands/GetModelCommand";
import { GetModelTemplateCommandInput, GetModelTemplateCommandOutput } from "./commands/GetModelTemplateCommand";
import { GetModelsCommandInput, GetModelsCommandOutput } from "./commands/GetModelsCommand";
import { GetRouteCommandInput, GetRouteCommandOutput } from "./commands/GetRouteCommand";
import { GetRouteResponseCommandInput, GetRouteResponseCommandOutput } from "./commands/GetRouteResponseCommand";
import { GetRouteResponsesCommandInput, GetRouteResponsesCommandOutput } from "./commands/GetRouteResponsesCommand";
import { GetRoutesCommandInput, GetRoutesCommandOutput } from "./commands/GetRoutesCommand";
import { GetStageCommandInput, GetStageCommandOutput } from "./commands/GetStageCommand";
import { GetStagesCommandInput, GetStagesCommandOutput } from "./commands/GetStagesCommand";
import { GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import { GetVpcLinkCommandInput, GetVpcLinkCommandOutput } from "./commands/GetVpcLinkCommand";
import { GetVpcLinksCommandInput, GetVpcLinksCommandOutput } from "./commands/GetVpcLinksCommand";
import { ImportApiCommandInput, ImportApiCommandOutput } from "./commands/ImportApiCommand";
import { ReimportApiCommandInput, ReimportApiCommandOutput } from "./commands/ReimportApiCommand";
import {
  ResetAuthorizersCacheCommandInput,
  ResetAuthorizersCacheCommandOutput,
} from "./commands/ResetAuthorizersCacheCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateApiCommandInput, UpdateApiCommandOutput } from "./commands/UpdateApiCommand";
import { UpdateApiMappingCommandInput, UpdateApiMappingCommandOutput } from "./commands/UpdateApiMappingCommand";
import { UpdateAuthorizerCommandInput, UpdateAuthorizerCommandOutput } from "./commands/UpdateAuthorizerCommand";
import { UpdateDeploymentCommandInput, UpdateDeploymentCommandOutput } from "./commands/UpdateDeploymentCommand";
import { UpdateDomainNameCommandInput, UpdateDomainNameCommandOutput } from "./commands/UpdateDomainNameCommand";
import { UpdateIntegrationCommandInput, UpdateIntegrationCommandOutput } from "./commands/UpdateIntegrationCommand";
import {
  UpdateIntegrationResponseCommandInput,
  UpdateIntegrationResponseCommandOutput,
} from "./commands/UpdateIntegrationResponseCommand";
import { UpdateModelCommandInput, UpdateModelCommandOutput } from "./commands/UpdateModelCommand";
import { UpdateRouteCommandInput, UpdateRouteCommandOutput } from "./commands/UpdateRouteCommand";
import {
  UpdateRouteResponseCommandInput,
  UpdateRouteResponseCommandOutput,
} from "./commands/UpdateRouteResponseCommand";
import { UpdateStageCommandInput, UpdateStageCommandOutput } from "./commands/UpdateStageCommand";
import { UpdateVpcLinkCommandInput, UpdateVpcLinkCommandOutput } from "./commands/UpdateVpcLinkCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon API Gateway V2</p>
 */
export declare class ApiGatewayV2 extends ApiGatewayV2Client {
  /**
   * <p>Creates an Api resource.</p>
   */
  createApi(args: CreateApiCommandInput, options?: __HttpHandlerOptions): Promise<CreateApiCommandOutput>;
  createApi(args: CreateApiCommandInput, cb: (err: any, data?: CreateApiCommandOutput) => void): void;
  createApi(
    args: CreateApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApiCommandOutput) => void
  ): void;
  /**
   * <p>Creates an API mapping.</p>
   */
  createApiMapping(
    args: CreateApiMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApiMappingCommandOutput>;
  createApiMapping(
    args: CreateApiMappingCommandInput,
    cb: (err: any, data?: CreateApiMappingCommandOutput) => void
  ): void;
  createApiMapping(
    args: CreateApiMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApiMappingCommandOutput) => void
  ): void;
  /**
   * <p>Creates an Authorizer for an API.</p>
   */
  createAuthorizer(
    args: CreateAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAuthorizerCommandOutput>;
  createAuthorizer(
    args: CreateAuthorizerCommandInput,
    cb: (err: any, data?: CreateAuthorizerCommandOutput) => void
  ): void;
  createAuthorizer(
    args: CreateAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAuthorizerCommandOutput) => void
  ): void;
  /**
   * <p>Creates a Deployment for an API.</p>
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
   * <p>Creates a domain name.</p>
   */
  createDomainName(
    args: CreateDomainNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainNameCommandOutput>;
  createDomainName(
    args: CreateDomainNameCommandInput,
    cb: (err: any, data?: CreateDomainNameCommandOutput) => void
  ): void;
  createDomainName(
    args: CreateDomainNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainNameCommandOutput) => void
  ): void;
  /**
   * <p>Creates an Integration.</p>
   */
  createIntegration(
    args: CreateIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIntegrationCommandOutput>;
  createIntegration(
    args: CreateIntegrationCommandInput,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;
  createIntegration(
    args: CreateIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;
  /**
   * <p>Creates an IntegrationResponses.</p>
   */
  createIntegrationResponse(
    args: CreateIntegrationResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIntegrationResponseCommandOutput>;
  createIntegrationResponse(
    args: CreateIntegrationResponseCommandInput,
    cb: (err: any, data?: CreateIntegrationResponseCommandOutput) => void
  ): void;
  createIntegrationResponse(
    args: CreateIntegrationResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIntegrationResponseCommandOutput) => void
  ): void;
  /**
   * <p>Creates a Model for an API.</p>
   */
  createModel(args: CreateModelCommandInput, options?: __HttpHandlerOptions): Promise<CreateModelCommandOutput>;
  createModel(args: CreateModelCommandInput, cb: (err: any, data?: CreateModelCommandOutput) => void): void;
  createModel(
    args: CreateModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelCommandOutput) => void
  ): void;
  /**
   * <p>Creates a Route for an API.</p>
   */
  createRoute(args: CreateRouteCommandInput, options?: __HttpHandlerOptions): Promise<CreateRouteCommandOutput>;
  createRoute(args: CreateRouteCommandInput, cb: (err: any, data?: CreateRouteCommandOutput) => void): void;
  createRoute(
    args: CreateRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRouteCommandOutput) => void
  ): void;
  /**
   * <p>Creates a RouteResponse for a Route.</p>
   */
  createRouteResponse(
    args: CreateRouteResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRouteResponseCommandOutput>;
  createRouteResponse(
    args: CreateRouteResponseCommandInput,
    cb: (err: any, data?: CreateRouteResponseCommandOutput) => void
  ): void;
  createRouteResponse(
    args: CreateRouteResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRouteResponseCommandOutput) => void
  ): void;
  /**
   * <p>Creates a Stage for an API.</p>
   */
  createStage(args: CreateStageCommandInput, options?: __HttpHandlerOptions): Promise<CreateStageCommandOutput>;
  createStage(args: CreateStageCommandInput, cb: (err: any, data?: CreateStageCommandOutput) => void): void;
  createStage(
    args: CreateStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStageCommandOutput) => void
  ): void;
  /**
   * <p>Creates a VPC link.</p>
   */
  createVpcLink(args: CreateVpcLinkCommandInput, options?: __HttpHandlerOptions): Promise<CreateVpcLinkCommandOutput>;
  createVpcLink(args: CreateVpcLinkCommandInput, cb: (err: any, data?: CreateVpcLinkCommandOutput) => void): void;
  createVpcLink(
    args: CreateVpcLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcLinkCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.</p>
   */
  deleteAccessLogSettings(
    args: DeleteAccessLogSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessLogSettingsCommandOutput>;
  deleteAccessLogSettings(
    args: DeleteAccessLogSettingsCommandInput,
    cb: (err: any, data?: DeleteAccessLogSettingsCommandOutput) => void
  ): void;
  deleteAccessLogSettings(
    args: DeleteAccessLogSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessLogSettingsCommandOutput) => void
  ): void;
  /**
   * <p>Deletes an Api resource.</p>
   */
  deleteApi(args: DeleteApiCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApiCommandOutput>;
  deleteApi(args: DeleteApiCommandInput, cb: (err: any, data?: DeleteApiCommandOutput) => void): void;
  deleteApi(
    args: DeleteApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApiCommandOutput) => void
  ): void;
  /**
   * <p>Deletes an API mapping.</p>
   */
  deleteApiMapping(
    args: DeleteApiMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApiMappingCommandOutput>;
  deleteApiMapping(
    args: DeleteApiMappingCommandInput,
    cb: (err: any, data?: DeleteApiMappingCommandOutput) => void
  ): void;
  deleteApiMapping(
    args: DeleteApiMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApiMappingCommandOutput) => void
  ): void;
  /**
   * <p>Deletes an Authorizer.</p>
   */
  deleteAuthorizer(
    args: DeleteAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAuthorizerCommandOutput>;
  deleteAuthorizer(
    args: DeleteAuthorizerCommandInput,
    cb: (err: any, data?: DeleteAuthorizerCommandOutput) => void
  ): void;
  deleteAuthorizer(
    args: DeleteAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAuthorizerCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a CORS configuration.</p>
   */
  deleteCorsConfiguration(
    args: DeleteCorsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCorsConfigurationCommandOutput>;
  deleteCorsConfiguration(
    args: DeleteCorsConfigurationCommandInput,
    cb: (err: any, data?: DeleteCorsConfigurationCommandOutput) => void
  ): void;
  deleteCorsConfiguration(
    args: DeleteCorsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCorsConfigurationCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a Deployment.</p>
   */
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeploymentCommandOutput>;
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    cb: (err: any, data?: DeleteDeploymentCommandOutput) => void
  ): void;
  deleteDeployment(
    args: DeleteDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeploymentCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a domain name.</p>
   */
  deleteDomainName(
    args: DeleteDomainNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainNameCommandOutput>;
  deleteDomainName(
    args: DeleteDomainNameCommandInput,
    cb: (err: any, data?: DeleteDomainNameCommandOutput) => void
  ): void;
  deleteDomainName(
    args: DeleteDomainNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainNameCommandOutput) => void
  ): void;
  /**
   * <p>Deletes an Integration.</p>
   */
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIntegrationCommandOutput>;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  /**
   * <p>Deletes an IntegrationResponses.</p>
   */
  deleteIntegrationResponse(
    args: DeleteIntegrationResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIntegrationResponseCommandOutput>;
  deleteIntegrationResponse(
    args: DeleteIntegrationResponseCommandInput,
    cb: (err: any, data?: DeleteIntegrationResponseCommandOutput) => void
  ): void;
  deleteIntegrationResponse(
    args: DeleteIntegrationResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntegrationResponseCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a Model.</p>
   */
  deleteModel(args: DeleteModelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteModelCommandOutput>;
  deleteModel(args: DeleteModelCommandInput, cb: (err: any, data?: DeleteModelCommandOutput) => void): void;
  deleteModel(
    args: DeleteModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a Route.</p>
   */
  deleteRoute(args: DeleteRouteCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRouteCommandOutput>;
  deleteRoute(args: DeleteRouteCommandInput, cb: (err: any, data?: DeleteRouteCommandOutput) => void): void;
  deleteRoute(
    args: DeleteRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a route request parameter.</p>
   */
  deleteRouteRequestParameter(
    args: DeleteRouteRequestParameterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRouteRequestParameterCommandOutput>;
  deleteRouteRequestParameter(
    args: DeleteRouteRequestParameterCommandInput,
    cb: (err: any, data?: DeleteRouteRequestParameterCommandOutput) => void
  ): void;
  deleteRouteRequestParameter(
    args: DeleteRouteRequestParameterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteRequestParameterCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a RouteResponse.</p>
   */
  deleteRouteResponse(
    args: DeleteRouteResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRouteResponseCommandOutput>;
  deleteRouteResponse(
    args: DeleteRouteResponseCommandInput,
    cb: (err: any, data?: DeleteRouteResponseCommandOutput) => void
  ): void;
  deleteRouteResponse(
    args: DeleteRouteResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteResponseCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the RouteSettings for a stage.</p>
   */
  deleteRouteSettings(
    args: DeleteRouteSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRouteSettingsCommandOutput>;
  deleteRouteSettings(
    args: DeleteRouteSettingsCommandInput,
    cb: (err: any, data?: DeleteRouteSettingsCommandOutput) => void
  ): void;
  deleteRouteSettings(
    args: DeleteRouteSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteSettingsCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a Stage.</p>
   */
  deleteStage(args: DeleteStageCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStageCommandOutput>;
  deleteStage(args: DeleteStageCommandInput, cb: (err: any, data?: DeleteStageCommandOutput) => void): void;
  deleteStage(
    args: DeleteStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStageCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a VPC link.</p>
   */
  deleteVpcLink(args: DeleteVpcLinkCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVpcLinkCommandOutput>;
  deleteVpcLink(args: DeleteVpcLinkCommandInput, cb: (err: any, data?: DeleteVpcLinkCommandOutput) => void): void;
  deleteVpcLink(
    args: DeleteVpcLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcLinkCommandOutput) => void
  ): void;
  exportApi(args: ExportApiCommandInput, options?: __HttpHandlerOptions): Promise<ExportApiCommandOutput>;
  exportApi(args: ExportApiCommandInput, cb: (err: any, data?: ExportApiCommandOutput) => void): void;
  exportApi(
    args: ExportApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportApiCommandOutput) => void
  ): void;
  /**
   * <p>Gets an Api resource.</p>
   */
  getApi(args: GetApiCommandInput, options?: __HttpHandlerOptions): Promise<GetApiCommandOutput>;
  getApi(args: GetApiCommandInput, cb: (err: any, data?: GetApiCommandOutput) => void): void;
  getApi(
    args: GetApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiCommandOutput) => void
  ): void;
  /**
   * <p>Gets an API mapping.</p>
   */
  getApiMapping(args: GetApiMappingCommandInput, options?: __HttpHandlerOptions): Promise<GetApiMappingCommandOutput>;
  getApiMapping(args: GetApiMappingCommandInput, cb: (err: any, data?: GetApiMappingCommandOutput) => void): void;
  getApiMapping(
    args: GetApiMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiMappingCommandOutput) => void
  ): void;
  /**
   * <p>Gets API mappings.</p>
   */
  getApiMappings(
    args: GetApiMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApiMappingsCommandOutput>;
  getApiMappings(args: GetApiMappingsCommandInput, cb: (err: any, data?: GetApiMappingsCommandOutput) => void): void;
  getApiMappings(
    args: GetApiMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiMappingsCommandOutput) => void
  ): void;
  /**
   * <p>Gets a collection of Api resources.</p>
   */
  getApis(args: GetApisCommandInput, options?: __HttpHandlerOptions): Promise<GetApisCommandOutput>;
  getApis(args: GetApisCommandInput, cb: (err: any, data?: GetApisCommandOutput) => void): void;
  getApis(
    args: GetApisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApisCommandOutput) => void
  ): void;
  /**
   * <p>Gets an Authorizer.</p>
   */
  getAuthorizer(args: GetAuthorizerCommandInput, options?: __HttpHandlerOptions): Promise<GetAuthorizerCommandOutput>;
  getAuthorizer(args: GetAuthorizerCommandInput, cb: (err: any, data?: GetAuthorizerCommandOutput) => void): void;
  getAuthorizer(
    args: GetAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAuthorizerCommandOutput) => void
  ): void;
  /**
   * <p>Gets the Authorizers for an API.</p>
   */
  getAuthorizers(
    args: GetAuthorizersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAuthorizersCommandOutput>;
  getAuthorizers(args: GetAuthorizersCommandInput, cb: (err: any, data?: GetAuthorizersCommandOutput) => void): void;
  getAuthorizers(
    args: GetAuthorizersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAuthorizersCommandOutput) => void
  ): void;
  /**
   * <p>Gets a Deployment.</p>
   */
  getDeployment(args: GetDeploymentCommandInput, options?: __HttpHandlerOptions): Promise<GetDeploymentCommandOutput>;
  getDeployment(args: GetDeploymentCommandInput, cb: (err: any, data?: GetDeploymentCommandOutput) => void): void;
  getDeployment(
    args: GetDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;
  /**
   * <p>Gets the Deployments for an API.</p>
   */
  getDeployments(
    args: GetDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentsCommandOutput>;
  getDeployments(args: GetDeploymentsCommandInput, cb: (err: any, data?: GetDeploymentsCommandOutput) => void): void;
  getDeployments(
    args: GetDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentsCommandOutput) => void
  ): void;
  /**
   * <p>Gets a domain name.</p>
   */
  getDomainName(args: GetDomainNameCommandInput, options?: __HttpHandlerOptions): Promise<GetDomainNameCommandOutput>;
  getDomainName(args: GetDomainNameCommandInput, cb: (err: any, data?: GetDomainNameCommandOutput) => void): void;
  getDomainName(
    args: GetDomainNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainNameCommandOutput) => void
  ): void;
  /**
   * <p>Gets the domain names for an AWS account.</p>
   */
  getDomainNames(
    args: GetDomainNamesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainNamesCommandOutput>;
  getDomainNames(args: GetDomainNamesCommandInput, cb: (err: any, data?: GetDomainNamesCommandOutput) => void): void;
  getDomainNames(
    args: GetDomainNamesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainNamesCommandOutput) => void
  ): void;
  /**
   * <p>Gets an Integration.</p>
   */
  getIntegration(
    args: GetIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntegrationCommandOutput>;
  getIntegration(args: GetIntegrationCommandInput, cb: (err: any, data?: GetIntegrationCommandOutput) => void): void;
  getIntegration(
    args: GetIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;
  /**
   * <p>Gets an IntegrationResponses.</p>
   */
  getIntegrationResponse(
    args: GetIntegrationResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntegrationResponseCommandOutput>;
  getIntegrationResponse(
    args: GetIntegrationResponseCommandInput,
    cb: (err: any, data?: GetIntegrationResponseCommandOutput) => void
  ): void;
  getIntegrationResponse(
    args: GetIntegrationResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntegrationResponseCommandOutput) => void
  ): void;
  /**
   * <p>Gets the IntegrationResponses for an Integration.</p>
   */
  getIntegrationResponses(
    args: GetIntegrationResponsesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntegrationResponsesCommandOutput>;
  getIntegrationResponses(
    args: GetIntegrationResponsesCommandInput,
    cb: (err: any, data?: GetIntegrationResponsesCommandOutput) => void
  ): void;
  getIntegrationResponses(
    args: GetIntegrationResponsesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntegrationResponsesCommandOutput) => void
  ): void;
  /**
   * <p>Gets the Integrations for an API.</p>
   */
  getIntegrations(
    args: GetIntegrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntegrationsCommandOutput>;
  getIntegrations(args: GetIntegrationsCommandInput, cb: (err: any, data?: GetIntegrationsCommandOutput) => void): void;
  getIntegrations(
    args: GetIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntegrationsCommandOutput) => void
  ): void;
  /**
   * <p>Gets a Model.</p>
   */
  getModel(args: GetModelCommandInput, options?: __HttpHandlerOptions): Promise<GetModelCommandOutput>;
  getModel(args: GetModelCommandInput, cb: (err: any, data?: GetModelCommandOutput) => void): void;
  getModel(
    args: GetModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelCommandOutput) => void
  ): void;
  /**
   * <p>Gets the Models for an API.</p>
   */
  getModels(args: GetModelsCommandInput, options?: __HttpHandlerOptions): Promise<GetModelsCommandOutput>;
  getModels(args: GetModelsCommandInput, cb: (err: any, data?: GetModelsCommandOutput) => void): void;
  getModels(
    args: GetModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelsCommandOutput) => void
  ): void;
  /**
   * <p>Gets a model template.</p>
   */
  getModelTemplate(
    args: GetModelTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetModelTemplateCommandOutput>;
  getModelTemplate(
    args: GetModelTemplateCommandInput,
    cb: (err: any, data?: GetModelTemplateCommandOutput) => void
  ): void;
  getModelTemplate(
    args: GetModelTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelTemplateCommandOutput) => void
  ): void;
  /**
   * <p>Gets a Route.</p>
   */
  getRoute(args: GetRouteCommandInput, options?: __HttpHandlerOptions): Promise<GetRouteCommandOutput>;
  getRoute(args: GetRouteCommandInput, cb: (err: any, data?: GetRouteCommandOutput) => void): void;
  getRoute(
    args: GetRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRouteCommandOutput) => void
  ): void;
  /**
   * <p>Gets a RouteResponse.</p>
   */
  getRouteResponse(
    args: GetRouteResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRouteResponseCommandOutput>;
  getRouteResponse(
    args: GetRouteResponseCommandInput,
    cb: (err: any, data?: GetRouteResponseCommandOutput) => void
  ): void;
  getRouteResponse(
    args: GetRouteResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRouteResponseCommandOutput) => void
  ): void;
  /**
   * <p>Gets the RouteResponses for a Route.</p>
   */
  getRouteResponses(
    args: GetRouteResponsesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRouteResponsesCommandOutput>;
  getRouteResponses(
    args: GetRouteResponsesCommandInput,
    cb: (err: any, data?: GetRouteResponsesCommandOutput) => void
  ): void;
  getRouteResponses(
    args: GetRouteResponsesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRouteResponsesCommandOutput) => void
  ): void;
  /**
   * <p>Gets the Routes for an API.</p>
   */
  getRoutes(args: GetRoutesCommandInput, options?: __HttpHandlerOptions): Promise<GetRoutesCommandOutput>;
  getRoutes(args: GetRoutesCommandInput, cb: (err: any, data?: GetRoutesCommandOutput) => void): void;
  getRoutes(
    args: GetRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRoutesCommandOutput) => void
  ): void;
  /**
   * <p>Gets a Stage.</p>
   */
  getStage(args: GetStageCommandInput, options?: __HttpHandlerOptions): Promise<GetStageCommandOutput>;
  getStage(args: GetStageCommandInput, cb: (err: any, data?: GetStageCommandOutput) => void): void;
  getStage(
    args: GetStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStageCommandOutput) => void
  ): void;
  /**
   * <p>Gets the Stages for an API.</p>
   */
  getStages(args: GetStagesCommandInput, options?: __HttpHandlerOptions): Promise<GetStagesCommandOutput>;
  getStages(args: GetStagesCommandInput, cb: (err: any, data?: GetStagesCommandOutput) => void): void;
  getStages(
    args: GetStagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStagesCommandOutput) => void
  ): void;
  /**
   * <p>Gets a collection of Tag resources.</p>
   */
  getTags(args: GetTagsCommandInput, options?: __HttpHandlerOptions): Promise<GetTagsCommandOutput>;
  getTags(args: GetTagsCommandInput, cb: (err: any, data?: GetTagsCommandOutput) => void): void;
  getTags(
    args: GetTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTagsCommandOutput) => void
  ): void;
  /**
   * <p>Gets a VPC link.</p>
   */
  getVpcLink(args: GetVpcLinkCommandInput, options?: __HttpHandlerOptions): Promise<GetVpcLinkCommandOutput>;
  getVpcLink(args: GetVpcLinkCommandInput, cb: (err: any, data?: GetVpcLinkCommandOutput) => void): void;
  getVpcLink(
    args: GetVpcLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVpcLinkCommandOutput) => void
  ): void;
  /**
   * <p>Gets a collection of VPC links.</p>
   */
  getVpcLinks(args: GetVpcLinksCommandInput, options?: __HttpHandlerOptions): Promise<GetVpcLinksCommandOutput>;
  getVpcLinks(args: GetVpcLinksCommandInput, cb: (err: any, data?: GetVpcLinksCommandOutput) => void): void;
  getVpcLinks(
    args: GetVpcLinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVpcLinksCommandOutput) => void
  ): void;
  /**
   * <p>Imports an API.</p>
   */
  importApi(args: ImportApiCommandInput, options?: __HttpHandlerOptions): Promise<ImportApiCommandOutput>;
  importApi(args: ImportApiCommandInput, cb: (err: any, data?: ImportApiCommandOutput) => void): void;
  importApi(
    args: ImportApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportApiCommandOutput) => void
  ): void;
  /**
   * <p>Puts an Api resource.</p>
   */
  reimportApi(args: ReimportApiCommandInput, options?: __HttpHandlerOptions): Promise<ReimportApiCommandOutput>;
  reimportApi(args: ReimportApiCommandInput, cb: (err: any, data?: ReimportApiCommandOutput) => void): void;
  reimportApi(
    args: ReimportApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReimportApiCommandOutput) => void
  ): void;
  /**
   * <p>Resets all authorizer cache entries on a stage. Supported only for HTTP APIs.</p>
   */
  resetAuthorizersCache(
    args: ResetAuthorizersCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetAuthorizersCacheCommandOutput>;
  resetAuthorizersCache(
    args: ResetAuthorizersCacheCommandInput,
    cb: (err: any, data?: ResetAuthorizersCacheCommandOutput) => void
  ): void;
  resetAuthorizersCache(
    args: ResetAuthorizersCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetAuthorizersCacheCommandOutput) => void
  ): void;
  /**
   * <p>Creates a new Tag resource to represent a tag.</p>
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a Tag.</p>
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  /**
   * <p>Updates an Api resource.</p>
   */
  updateApi(args: UpdateApiCommandInput, options?: __HttpHandlerOptions): Promise<UpdateApiCommandOutput>;
  updateApi(args: UpdateApiCommandInput, cb: (err: any, data?: UpdateApiCommandOutput) => void): void;
  updateApi(
    args: UpdateApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApiCommandOutput) => void
  ): void;
  /**
   * <p>The API mapping.</p>
   */
  updateApiMapping(
    args: UpdateApiMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApiMappingCommandOutput>;
  updateApiMapping(
    args: UpdateApiMappingCommandInput,
    cb: (err: any, data?: UpdateApiMappingCommandOutput) => void
  ): void;
  updateApiMapping(
    args: UpdateApiMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApiMappingCommandOutput) => void
  ): void;
  /**
   * <p>Updates an Authorizer.</p>
   */
  updateAuthorizer(
    args: UpdateAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAuthorizerCommandOutput>;
  updateAuthorizer(
    args: UpdateAuthorizerCommandInput,
    cb: (err: any, data?: UpdateAuthorizerCommandOutput) => void
  ): void;
  updateAuthorizer(
    args: UpdateAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAuthorizerCommandOutput) => void
  ): void;
  /**
   * <p>Updates a Deployment.</p>
   */
  updateDeployment(
    args: UpdateDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeploymentCommandOutput>;
  updateDeployment(
    args: UpdateDeploymentCommandInput,
    cb: (err: any, data?: UpdateDeploymentCommandOutput) => void
  ): void;
  updateDeployment(
    args: UpdateDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeploymentCommandOutput) => void
  ): void;
  /**
   * <p>Updates a domain name.</p>
   */
  updateDomainName(
    args: UpdateDomainNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainNameCommandOutput>;
  updateDomainName(
    args: UpdateDomainNameCommandInput,
    cb: (err: any, data?: UpdateDomainNameCommandOutput) => void
  ): void;
  updateDomainName(
    args: UpdateDomainNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainNameCommandOutput) => void
  ): void;
  /**
   * <p>Updates an Integration.</p>
   */
  updateIntegration(
    args: UpdateIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIntegrationCommandOutput>;
  updateIntegration(
    args: UpdateIntegrationCommandInput,
    cb: (err: any, data?: UpdateIntegrationCommandOutput) => void
  ): void;
  updateIntegration(
    args: UpdateIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIntegrationCommandOutput) => void
  ): void;
  /**
   * <p>Updates an IntegrationResponses.</p>
   */
  updateIntegrationResponse(
    args: UpdateIntegrationResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIntegrationResponseCommandOutput>;
  updateIntegrationResponse(
    args: UpdateIntegrationResponseCommandInput,
    cb: (err: any, data?: UpdateIntegrationResponseCommandOutput) => void
  ): void;
  updateIntegrationResponse(
    args: UpdateIntegrationResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIntegrationResponseCommandOutput) => void
  ): void;
  /**
   * <p>Updates a Model.</p>
   */
  updateModel(args: UpdateModelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateModelCommandOutput>;
  updateModel(args: UpdateModelCommandInput, cb: (err: any, data?: UpdateModelCommandOutput) => void): void;
  updateModel(
    args: UpdateModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateModelCommandOutput) => void
  ): void;
  /**
   * <p>Updates a Route.</p>
   */
  updateRoute(args: UpdateRouteCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRouteCommandOutput>;
  updateRoute(args: UpdateRouteCommandInput, cb: (err: any, data?: UpdateRouteCommandOutput) => void): void;
  updateRoute(
    args: UpdateRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRouteCommandOutput) => void
  ): void;
  /**
   * <p>Updates a RouteResponse.</p>
   */
  updateRouteResponse(
    args: UpdateRouteResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRouteResponseCommandOutput>;
  updateRouteResponse(
    args: UpdateRouteResponseCommandInput,
    cb: (err: any, data?: UpdateRouteResponseCommandOutput) => void
  ): void;
  updateRouteResponse(
    args: UpdateRouteResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRouteResponseCommandOutput) => void
  ): void;
  /**
   * <p>Updates a Stage.</p>
   */
  updateStage(args: UpdateStageCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStageCommandOutput>;
  updateStage(args: UpdateStageCommandInput, cb: (err: any, data?: UpdateStageCommandOutput) => void): void;
  updateStage(
    args: UpdateStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStageCommandOutput) => void
  ): void;
  /**
   * <p>Updates a VPC link.</p>
   */
  updateVpcLink(args: UpdateVpcLinkCommandInput, options?: __HttpHandlerOptions): Promise<UpdateVpcLinkCommandOutput>;
  updateVpcLink(args: UpdateVpcLinkCommandInput, cb: (err: any, data?: UpdateVpcLinkCommandOutput) => void): void;
  updateVpcLink(
    args: UpdateVpcLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVpcLinkCommandOutput) => void
  ): void;
}
