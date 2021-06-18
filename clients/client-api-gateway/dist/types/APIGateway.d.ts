import { APIGatewayClient } from "./APIGatewayClient";
import { CreateApiKeyCommandInput, CreateApiKeyCommandOutput } from "./commands/CreateApiKeyCommand";
import { CreateAuthorizerCommandInput, CreateAuthorizerCommandOutput } from "./commands/CreateAuthorizerCommand";
import {
  CreateBasePathMappingCommandInput,
  CreateBasePathMappingCommandOutput,
} from "./commands/CreateBasePathMappingCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "./commands/CreateDeploymentCommand";
import {
  CreateDocumentationPartCommandInput,
  CreateDocumentationPartCommandOutput,
} from "./commands/CreateDocumentationPartCommand";
import {
  CreateDocumentationVersionCommandInput,
  CreateDocumentationVersionCommandOutput,
} from "./commands/CreateDocumentationVersionCommand";
import { CreateDomainNameCommandInput, CreateDomainNameCommandOutput } from "./commands/CreateDomainNameCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import {
  CreateRequestValidatorCommandInput,
  CreateRequestValidatorCommandOutput,
} from "./commands/CreateRequestValidatorCommand";
import { CreateResourceCommandInput, CreateResourceCommandOutput } from "./commands/CreateResourceCommand";
import { CreateRestApiCommandInput, CreateRestApiCommandOutput } from "./commands/CreateRestApiCommand";
import { CreateStageCommandInput, CreateStageCommandOutput } from "./commands/CreateStageCommand";
import { CreateUsagePlanCommandInput, CreateUsagePlanCommandOutput } from "./commands/CreateUsagePlanCommand";
import { CreateUsagePlanKeyCommandInput, CreateUsagePlanKeyCommandOutput } from "./commands/CreateUsagePlanKeyCommand";
import { CreateVpcLinkCommandInput, CreateVpcLinkCommandOutput } from "./commands/CreateVpcLinkCommand";
import { DeleteApiKeyCommandInput, DeleteApiKeyCommandOutput } from "./commands/DeleteApiKeyCommand";
import { DeleteAuthorizerCommandInput, DeleteAuthorizerCommandOutput } from "./commands/DeleteAuthorizerCommand";
import {
  DeleteBasePathMappingCommandInput,
  DeleteBasePathMappingCommandOutput,
} from "./commands/DeleteBasePathMappingCommand";
import {
  DeleteClientCertificateCommandInput,
  DeleteClientCertificateCommandOutput,
} from "./commands/DeleteClientCertificateCommand";
import { DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput } from "./commands/DeleteDeploymentCommand";
import {
  DeleteDocumentationPartCommandInput,
  DeleteDocumentationPartCommandOutput,
} from "./commands/DeleteDocumentationPartCommand";
import {
  DeleteDocumentationVersionCommandInput,
  DeleteDocumentationVersionCommandOutput,
} from "./commands/DeleteDocumentationVersionCommand";
import { DeleteDomainNameCommandInput, DeleteDomainNameCommandOutput } from "./commands/DeleteDomainNameCommand";
import {
  DeleteGatewayResponseCommandInput,
  DeleteGatewayResponseCommandOutput,
} from "./commands/DeleteGatewayResponseCommand";
import { DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput } from "./commands/DeleteIntegrationCommand";
import {
  DeleteIntegrationResponseCommandInput,
  DeleteIntegrationResponseCommandOutput,
} from "./commands/DeleteIntegrationResponseCommand";
import { DeleteMethodCommandInput, DeleteMethodCommandOutput } from "./commands/DeleteMethodCommand";
import {
  DeleteMethodResponseCommandInput,
  DeleteMethodResponseCommandOutput,
} from "./commands/DeleteMethodResponseCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import {
  DeleteRequestValidatorCommandInput,
  DeleteRequestValidatorCommandOutput,
} from "./commands/DeleteRequestValidatorCommand";
import { DeleteResourceCommandInput, DeleteResourceCommandOutput } from "./commands/DeleteResourceCommand";
import { DeleteRestApiCommandInput, DeleteRestApiCommandOutput } from "./commands/DeleteRestApiCommand";
import { DeleteStageCommandInput, DeleteStageCommandOutput } from "./commands/DeleteStageCommand";
import { DeleteUsagePlanCommandInput, DeleteUsagePlanCommandOutput } from "./commands/DeleteUsagePlanCommand";
import { DeleteUsagePlanKeyCommandInput, DeleteUsagePlanKeyCommandOutput } from "./commands/DeleteUsagePlanKeyCommand";
import { DeleteVpcLinkCommandInput, DeleteVpcLinkCommandOutput } from "./commands/DeleteVpcLinkCommand";
import {
  FlushStageAuthorizersCacheCommandInput,
  FlushStageAuthorizersCacheCommandOutput,
} from "./commands/FlushStageAuthorizersCacheCommand";
import { FlushStageCacheCommandInput, FlushStageCacheCommandOutput } from "./commands/FlushStageCacheCommand";
import {
  GenerateClientCertificateCommandInput,
  GenerateClientCertificateCommandOutput,
} from "./commands/GenerateClientCertificateCommand";
import { GetAccountCommandInput, GetAccountCommandOutput } from "./commands/GetAccountCommand";
import { GetApiKeyCommandInput, GetApiKeyCommandOutput } from "./commands/GetApiKeyCommand";
import { GetApiKeysCommandInput, GetApiKeysCommandOutput } from "./commands/GetApiKeysCommand";
import { GetAuthorizerCommandInput, GetAuthorizerCommandOutput } from "./commands/GetAuthorizerCommand";
import { GetAuthorizersCommandInput, GetAuthorizersCommandOutput } from "./commands/GetAuthorizersCommand";
import { GetBasePathMappingCommandInput, GetBasePathMappingCommandOutput } from "./commands/GetBasePathMappingCommand";
import {
  GetBasePathMappingsCommandInput,
  GetBasePathMappingsCommandOutput,
} from "./commands/GetBasePathMappingsCommand";
import {
  GetClientCertificateCommandInput,
  GetClientCertificateCommandOutput,
} from "./commands/GetClientCertificateCommand";
import {
  GetClientCertificatesCommandInput,
  GetClientCertificatesCommandOutput,
} from "./commands/GetClientCertificatesCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "./commands/GetDeploymentCommand";
import { GetDeploymentsCommandInput, GetDeploymentsCommandOutput } from "./commands/GetDeploymentsCommand";
import {
  GetDocumentationPartCommandInput,
  GetDocumentationPartCommandOutput,
} from "./commands/GetDocumentationPartCommand";
import {
  GetDocumentationPartsCommandInput,
  GetDocumentationPartsCommandOutput,
} from "./commands/GetDocumentationPartsCommand";
import {
  GetDocumentationVersionCommandInput,
  GetDocumentationVersionCommandOutput,
} from "./commands/GetDocumentationVersionCommand";
import {
  GetDocumentationVersionsCommandInput,
  GetDocumentationVersionsCommandOutput,
} from "./commands/GetDocumentationVersionsCommand";
import { GetDomainNameCommandInput, GetDomainNameCommandOutput } from "./commands/GetDomainNameCommand";
import { GetDomainNamesCommandInput, GetDomainNamesCommandOutput } from "./commands/GetDomainNamesCommand";
import { GetExportCommandInput, GetExportCommandOutput } from "./commands/GetExportCommand";
import { GetGatewayResponseCommandInput, GetGatewayResponseCommandOutput } from "./commands/GetGatewayResponseCommand";
import {
  GetGatewayResponsesCommandInput,
  GetGatewayResponsesCommandOutput,
} from "./commands/GetGatewayResponsesCommand";
import { GetIntegrationCommandInput, GetIntegrationCommandOutput } from "./commands/GetIntegrationCommand";
import {
  GetIntegrationResponseCommandInput,
  GetIntegrationResponseCommandOutput,
} from "./commands/GetIntegrationResponseCommand";
import { GetMethodCommandInput, GetMethodCommandOutput } from "./commands/GetMethodCommand";
import { GetMethodResponseCommandInput, GetMethodResponseCommandOutput } from "./commands/GetMethodResponseCommand";
import { GetModelCommandInput, GetModelCommandOutput } from "./commands/GetModelCommand";
import { GetModelTemplateCommandInput, GetModelTemplateCommandOutput } from "./commands/GetModelTemplateCommand";
import { GetModelsCommandInput, GetModelsCommandOutput } from "./commands/GetModelsCommand";
import {
  GetRequestValidatorCommandInput,
  GetRequestValidatorCommandOutput,
} from "./commands/GetRequestValidatorCommand";
import {
  GetRequestValidatorsCommandInput,
  GetRequestValidatorsCommandOutput,
} from "./commands/GetRequestValidatorsCommand";
import { GetResourceCommandInput, GetResourceCommandOutput } from "./commands/GetResourceCommand";
import { GetResourcesCommandInput, GetResourcesCommandOutput } from "./commands/GetResourcesCommand";
import { GetRestApiCommandInput, GetRestApiCommandOutput } from "./commands/GetRestApiCommand";
import { GetRestApisCommandInput, GetRestApisCommandOutput } from "./commands/GetRestApisCommand";
import { GetSdkCommandInput, GetSdkCommandOutput } from "./commands/GetSdkCommand";
import { GetSdkTypeCommandInput, GetSdkTypeCommandOutput } from "./commands/GetSdkTypeCommand";
import { GetSdkTypesCommandInput, GetSdkTypesCommandOutput } from "./commands/GetSdkTypesCommand";
import { GetStageCommandInput, GetStageCommandOutput } from "./commands/GetStageCommand";
import { GetStagesCommandInput, GetStagesCommandOutput } from "./commands/GetStagesCommand";
import { GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import { GetUsageCommandInput, GetUsageCommandOutput } from "./commands/GetUsageCommand";
import { GetUsagePlanCommandInput, GetUsagePlanCommandOutput } from "./commands/GetUsagePlanCommand";
import { GetUsagePlanKeyCommandInput, GetUsagePlanKeyCommandOutput } from "./commands/GetUsagePlanKeyCommand";
import { GetUsagePlanKeysCommandInput, GetUsagePlanKeysCommandOutput } from "./commands/GetUsagePlanKeysCommand";
import { GetUsagePlansCommandInput, GetUsagePlansCommandOutput } from "./commands/GetUsagePlansCommand";
import { GetVpcLinkCommandInput, GetVpcLinkCommandOutput } from "./commands/GetVpcLinkCommand";
import { GetVpcLinksCommandInput, GetVpcLinksCommandOutput } from "./commands/GetVpcLinksCommand";
import { ImportApiKeysCommandInput, ImportApiKeysCommandOutput } from "./commands/ImportApiKeysCommand";
import {
  ImportDocumentationPartsCommandInput,
  ImportDocumentationPartsCommandOutput,
} from "./commands/ImportDocumentationPartsCommand";
import { ImportRestApiCommandInput, ImportRestApiCommandOutput } from "./commands/ImportRestApiCommand";
import { PutGatewayResponseCommandInput, PutGatewayResponseCommandOutput } from "./commands/PutGatewayResponseCommand";
import { PutIntegrationCommandInput, PutIntegrationCommandOutput } from "./commands/PutIntegrationCommand";
import {
  PutIntegrationResponseCommandInput,
  PutIntegrationResponseCommandOutput,
} from "./commands/PutIntegrationResponseCommand";
import { PutMethodCommandInput, PutMethodCommandOutput } from "./commands/PutMethodCommand";
import { PutMethodResponseCommandInput, PutMethodResponseCommandOutput } from "./commands/PutMethodResponseCommand";
import { PutRestApiCommandInput, PutRestApiCommandOutput } from "./commands/PutRestApiCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestInvokeAuthorizerCommandInput,
  TestInvokeAuthorizerCommandOutput,
} from "./commands/TestInvokeAuthorizerCommand";
import { TestInvokeMethodCommandInput, TestInvokeMethodCommandOutput } from "./commands/TestInvokeMethodCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAccountCommandInput, UpdateAccountCommandOutput } from "./commands/UpdateAccountCommand";
import { UpdateApiKeyCommandInput, UpdateApiKeyCommandOutput } from "./commands/UpdateApiKeyCommand";
import { UpdateAuthorizerCommandInput, UpdateAuthorizerCommandOutput } from "./commands/UpdateAuthorizerCommand";
import {
  UpdateBasePathMappingCommandInput,
  UpdateBasePathMappingCommandOutput,
} from "./commands/UpdateBasePathMappingCommand";
import {
  UpdateClientCertificateCommandInput,
  UpdateClientCertificateCommandOutput,
} from "./commands/UpdateClientCertificateCommand";
import { UpdateDeploymentCommandInput, UpdateDeploymentCommandOutput } from "./commands/UpdateDeploymentCommand";
import {
  UpdateDocumentationPartCommandInput,
  UpdateDocumentationPartCommandOutput,
} from "./commands/UpdateDocumentationPartCommand";
import {
  UpdateDocumentationVersionCommandInput,
  UpdateDocumentationVersionCommandOutput,
} from "./commands/UpdateDocumentationVersionCommand";
import { UpdateDomainNameCommandInput, UpdateDomainNameCommandOutput } from "./commands/UpdateDomainNameCommand";
import {
  UpdateGatewayResponseCommandInput,
  UpdateGatewayResponseCommandOutput,
} from "./commands/UpdateGatewayResponseCommand";
import { UpdateIntegrationCommandInput, UpdateIntegrationCommandOutput } from "./commands/UpdateIntegrationCommand";
import {
  UpdateIntegrationResponseCommandInput,
  UpdateIntegrationResponseCommandOutput,
} from "./commands/UpdateIntegrationResponseCommand";
import { UpdateMethodCommandInput, UpdateMethodCommandOutput } from "./commands/UpdateMethodCommand";
import {
  UpdateMethodResponseCommandInput,
  UpdateMethodResponseCommandOutput,
} from "./commands/UpdateMethodResponseCommand";
import { UpdateModelCommandInput, UpdateModelCommandOutput } from "./commands/UpdateModelCommand";
import {
  UpdateRequestValidatorCommandInput,
  UpdateRequestValidatorCommandOutput,
} from "./commands/UpdateRequestValidatorCommand";
import { UpdateResourceCommandInput, UpdateResourceCommandOutput } from "./commands/UpdateResourceCommand";
import { UpdateRestApiCommandInput, UpdateRestApiCommandOutput } from "./commands/UpdateRestApiCommand";
import { UpdateStageCommandInput, UpdateStageCommandOutput } from "./commands/UpdateStageCommand";
import { UpdateUsageCommandInput, UpdateUsageCommandOutput } from "./commands/UpdateUsageCommand";
import { UpdateUsagePlanCommandInput, UpdateUsagePlanCommandOutput } from "./commands/UpdateUsagePlanCommand";
import { UpdateVpcLinkCommandInput, UpdateVpcLinkCommandOutput } from "./commands/UpdateVpcLinkCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon API Gateway</fullname>
 *         <p>Amazon API Gateway helps developers deliver robust, secure, and scalable mobile and web application back ends. API Gateway allows developers to securely connect mobile and web applications to APIs that run on AWS Lambda, Amazon EC2, or other publicly addressable web services that are hosted outside of AWS.</p>
 */
export declare class APIGateway extends APIGatewayClient {
  /**
   * <p>Create an <a>ApiKey</a> resource. </p>
   *         <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/create-api-key.html">AWS CLI</a></div>
   */
  createApiKey(args: CreateApiKeyCommandInput, options?: __HttpHandlerOptions): Promise<CreateApiKeyCommandOutput>;
  createApiKey(args: CreateApiKeyCommandInput, cb: (err: any, data?: CreateApiKeyCommandOutput) => void): void;
  createApiKey(
    args: CreateApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApiKeyCommandOutput) => void
  ): void;
  /**
   * <p>Adds a new <a>Authorizer</a> resource to an existing <a>RestApi</a> resource.</p>
   *         <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/create-authorizer.html">AWS CLI</a></div>
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
   * <p>Creates a new <a>BasePathMapping</a> resource.</p>
   */
  createBasePathMapping(
    args: CreateBasePathMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBasePathMappingCommandOutput>;
  createBasePathMapping(
    args: CreateBasePathMappingCommandInput,
    cb: (err: any, data?: CreateBasePathMappingCommandOutput) => void
  ): void;
  createBasePathMapping(
    args: CreateBasePathMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBasePathMappingCommandOutput) => void
  ): void;
  /**
   * <p>Creates a <a>Deployment</a> resource, which makes a specified <a>RestApi</a> callable over the internet.</p>
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
  createDocumentationPart(
    args: CreateDocumentationPartCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDocumentationPartCommandOutput>;
  createDocumentationPart(
    args: CreateDocumentationPartCommandInput,
    cb: (err: any, data?: CreateDocumentationPartCommandOutput) => void
  ): void;
  createDocumentationPart(
    args: CreateDocumentationPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDocumentationPartCommandOutput) => void
  ): void;
  createDocumentationVersion(
    args: CreateDocumentationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDocumentationVersionCommandOutput>;
  createDocumentationVersion(
    args: CreateDocumentationVersionCommandInput,
    cb: (err: any, data?: CreateDocumentationVersionCommandOutput) => void
  ): void;
  createDocumentationVersion(
    args: CreateDocumentationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDocumentationVersionCommandOutput) => void
  ): void;
  /**
   * <p>Creates a new domain name.</p>
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
   * <p>Adds a new <a>Model</a> resource to an existing <a>RestApi</a> resource.</p>
   */
  createModel(args: CreateModelCommandInput, options?: __HttpHandlerOptions): Promise<CreateModelCommandOutput>;
  createModel(args: CreateModelCommandInput, cb: (err: any, data?: CreateModelCommandOutput) => void): void;
  createModel(
    args: CreateModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelCommandOutput) => void
  ): void;
  /**
   * <p>Creates a <a>ReqeustValidator</a> of a given <a>RestApi</a>.</p>
   */
  createRequestValidator(
    args: CreateRequestValidatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRequestValidatorCommandOutput>;
  createRequestValidator(
    args: CreateRequestValidatorCommandInput,
    cb: (err: any, data?: CreateRequestValidatorCommandOutput) => void
  ): void;
  createRequestValidator(
    args: CreateRequestValidatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRequestValidatorCommandOutput) => void
  ): void;
  /**
   * <p>Creates a <a>Resource</a> resource.</p>
   */
  createResource(
    args: CreateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceCommandOutput>;
  createResource(args: CreateResourceCommandInput, cb: (err: any, data?: CreateResourceCommandOutput) => void): void;
  createResource(
    args: CreateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceCommandOutput) => void
  ): void;
  /**
   * <p>Creates a new <a>RestApi</a> resource.</p>
   */
  createRestApi(args: CreateRestApiCommandInput, options?: __HttpHandlerOptions): Promise<CreateRestApiCommandOutput>;
  createRestApi(args: CreateRestApiCommandInput, cb: (err: any, data?: CreateRestApiCommandOutput) => void): void;
  createRestApi(
    args: CreateRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRestApiCommandOutput) => void
  ): void;
  /**
   * <p>Creates a new <a>Stage</a> resource that references a pre-existing <a>Deployment</a> for the API. </p>
   *         <!--   <p>Creates a <a>Stage</a> resource.</p>  -->
   */
  createStage(args: CreateStageCommandInput, options?: __HttpHandlerOptions): Promise<CreateStageCommandOutput>;
  createStage(args: CreateStageCommandInput, cb: (err: any, data?: CreateStageCommandOutput) => void): void;
  createStage(
    args: CreateStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStageCommandOutput) => void
  ): void;
  /**
   * <p>Creates a usage plan with the throttle and quota limits, as well as the associated API stages, specified in the payload. </p>
   */
  createUsagePlan(
    args: CreateUsagePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUsagePlanCommandOutput>;
  createUsagePlan(args: CreateUsagePlanCommandInput, cb: (err: any, data?: CreateUsagePlanCommandOutput) => void): void;
  createUsagePlan(
    args: CreateUsagePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUsagePlanCommandOutput) => void
  ): void;
  /**
   * <p>Creates a usage plan key for adding an existing API key to a usage plan.</p>
   */
  createUsagePlanKey(
    args: CreateUsagePlanKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUsagePlanKeyCommandOutput>;
  createUsagePlanKey(
    args: CreateUsagePlanKeyCommandInput,
    cb: (err: any, data?: CreateUsagePlanKeyCommandOutput) => void
  ): void;
  createUsagePlanKey(
    args: CreateUsagePlanKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUsagePlanKeyCommandOutput) => void
  ): void;
  /**
   * <p>Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.</p>
   */
  createVpcLink(args: CreateVpcLinkCommandInput, options?: __HttpHandlerOptions): Promise<CreateVpcLinkCommandOutput>;
  createVpcLink(args: CreateVpcLinkCommandInput, cb: (err: any, data?: CreateVpcLinkCommandOutput) => void): void;
  createVpcLink(
    args: CreateVpcLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcLinkCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the <a>ApiKey</a> resource.</p>
   */
  deleteApiKey(args: DeleteApiKeyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApiKeyCommandOutput>;
  deleteApiKey(args: DeleteApiKeyCommandInput, cb: (err: any, data?: DeleteApiKeyCommandOutput) => void): void;
  deleteApiKey(
    args: DeleteApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApiKeyCommandOutput) => void
  ): void;
  /**
   * <p>Deletes an existing <a>Authorizer</a> resource.</p>
   *         <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/delete-authorizer.html">AWS CLI</a></div>
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
   * <p>Deletes the <a>BasePathMapping</a> resource.</p>
   */
  deleteBasePathMapping(
    args: DeleteBasePathMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBasePathMappingCommandOutput>;
  deleteBasePathMapping(
    args: DeleteBasePathMappingCommandInput,
    cb: (err: any, data?: DeleteBasePathMappingCommandOutput) => void
  ): void;
  deleteBasePathMapping(
    args: DeleteBasePathMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBasePathMappingCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the <a>ClientCertificate</a> resource.</p>
   */
  deleteClientCertificate(
    args: DeleteClientCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClientCertificateCommandOutput>;
  deleteClientCertificate(
    args: DeleteClientCertificateCommandInput,
    cb: (err: any, data?: DeleteClientCertificateCommandOutput) => void
  ): void;
  deleteClientCertificate(
    args: DeleteClientCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClientCertificateCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a <a>Deployment</a> resource. Deleting a deployment will only succeed if there are no <a>Stage</a> resources associated with it.</p>
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
  deleteDocumentationPart(
    args: DeleteDocumentationPartCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDocumentationPartCommandOutput>;
  deleteDocumentationPart(
    args: DeleteDocumentationPartCommandInput,
    cb: (err: any, data?: DeleteDocumentationPartCommandOutput) => void
  ): void;
  deleteDocumentationPart(
    args: DeleteDocumentationPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDocumentationPartCommandOutput) => void
  ): void;
  deleteDocumentationVersion(
    args: DeleteDocumentationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDocumentationVersionCommandOutput>;
  deleteDocumentationVersion(
    args: DeleteDocumentationVersionCommandInput,
    cb: (err: any, data?: DeleteDocumentationVersionCommandOutput) => void
  ): void;
  deleteDocumentationVersion(
    args: DeleteDocumentationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDocumentationVersionCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the <a>DomainName</a> resource.</p>
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
   * <p>Clears any customization of a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a> and resets it with the default settings.</p>
   */
  deleteGatewayResponse(
    args: DeleteGatewayResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGatewayResponseCommandOutput>;
  deleteGatewayResponse(
    args: DeleteGatewayResponseCommandInput,
    cb: (err: any, data?: DeleteGatewayResponseCommandOutput) => void
  ): void;
  deleteGatewayResponse(
    args: DeleteGatewayResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGatewayResponseCommandOutput) => void
  ): void;
  /**
   * <p>Represents a delete integration.</p>
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
   * <p>Represents a delete integration response.</p>
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
   * <p>Deletes an existing <a>Method</a> resource.</p>
   */
  deleteMethod(args: DeleteMethodCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMethodCommandOutput>;
  deleteMethod(args: DeleteMethodCommandInput, cb: (err: any, data?: DeleteMethodCommandOutput) => void): void;
  deleteMethod(
    args: DeleteMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMethodCommandOutput) => void
  ): void;
  /**
   * <p>Deletes an existing <a>MethodResponse</a> resource.</p>
   */
  deleteMethodResponse(
    args: DeleteMethodResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMethodResponseCommandOutput>;
  deleteMethodResponse(
    args: DeleteMethodResponseCommandInput,
    cb: (err: any, data?: DeleteMethodResponseCommandOutput) => void
  ): void;
  deleteMethodResponse(
    args: DeleteMethodResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMethodResponseCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a model.</p>
   */
  deleteModel(args: DeleteModelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteModelCommandOutput>;
  deleteModel(args: DeleteModelCommandInput, cb: (err: any, data?: DeleteModelCommandOutput) => void): void;
  deleteModel(
    args: DeleteModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>
   */
  deleteRequestValidator(
    args: DeleteRequestValidatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRequestValidatorCommandOutput>;
  deleteRequestValidator(
    args: DeleteRequestValidatorCommandInput,
    cb: (err: any, data?: DeleteRequestValidatorCommandOutput) => void
  ): void;
  deleteRequestValidator(
    args: DeleteRequestValidatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRequestValidatorCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a <a>Resource</a> resource.</p>
   */
  deleteResource(
    args: DeleteResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceCommandOutput>;
  deleteResource(args: DeleteResourceCommandInput, cb: (err: any, data?: DeleteResourceCommandOutput) => void): void;
  deleteResource(
    args: DeleteResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the specified API.</p>
   */
  deleteRestApi(args: DeleteRestApiCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRestApiCommandOutput>;
  deleteRestApi(args: DeleteRestApiCommandInput, cb: (err: any, data?: DeleteRestApiCommandOutput) => void): void;
  deleteRestApi(
    args: DeleteRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRestApiCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a <a>Stage</a> resource.</p>
   */
  deleteStage(args: DeleteStageCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStageCommandOutput>;
  deleteStage(args: DeleteStageCommandInput, cb: (err: any, data?: DeleteStageCommandOutput) => void): void;
  deleteStage(
    args: DeleteStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStageCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a usage plan of a given plan Id.</p>
   */
  deleteUsagePlan(
    args: DeleteUsagePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUsagePlanCommandOutput>;
  deleteUsagePlan(args: DeleteUsagePlanCommandInput, cb: (err: any, data?: DeleteUsagePlanCommandOutput) => void): void;
  deleteUsagePlan(
    args: DeleteUsagePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUsagePlanCommandOutput) => void
  ): void;
  /**
   * <p>Deletes a usage plan key  and remove the underlying API key from the associated usage plan.</p>
   */
  deleteUsagePlanKey(
    args: DeleteUsagePlanKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUsagePlanKeyCommandOutput>;
  deleteUsagePlanKey(
    args: DeleteUsagePlanKeyCommandInput,
    cb: (err: any, data?: DeleteUsagePlanKeyCommandOutput) => void
  ): void;
  deleteUsagePlanKey(
    args: DeleteUsagePlanKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUsagePlanKeyCommandOutput) => void
  ): void;
  /**
   * <p>Deletes an existing <a>VpcLink</a> of a specified identifier.</p>
   */
  deleteVpcLink(args: DeleteVpcLinkCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVpcLinkCommandOutput>;
  deleteVpcLink(args: DeleteVpcLinkCommandInput, cb: (err: any, data?: DeleteVpcLinkCommandOutput) => void): void;
  deleteVpcLink(
    args: DeleteVpcLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcLinkCommandOutput) => void
  ): void;
  /**
   * <p>Flushes all authorizer cache entries on a stage.</p>
   */
  flushStageAuthorizersCache(
    args: FlushStageAuthorizersCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FlushStageAuthorizersCacheCommandOutput>;
  flushStageAuthorizersCache(
    args: FlushStageAuthorizersCacheCommandInput,
    cb: (err: any, data?: FlushStageAuthorizersCacheCommandOutput) => void
  ): void;
  flushStageAuthorizersCache(
    args: FlushStageAuthorizersCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FlushStageAuthorizersCacheCommandOutput) => void
  ): void;
  /**
   * <p>Flushes a stage's cache.</p>
   */
  flushStageCache(
    args: FlushStageCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FlushStageCacheCommandOutput>;
  flushStageCache(args: FlushStageCacheCommandInput, cb: (err: any, data?: FlushStageCacheCommandOutput) => void): void;
  flushStageCache(
    args: FlushStageCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FlushStageCacheCommandOutput) => void
  ): void;
  /**
   * <p>Generates a <a>ClientCertificate</a> resource.</p>
   */
  generateClientCertificate(
    args: GenerateClientCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateClientCertificateCommandOutput>;
  generateClientCertificate(
    args: GenerateClientCertificateCommandInput,
    cb: (err: any, data?: GenerateClientCertificateCommandOutput) => void
  ): void;
  generateClientCertificate(
    args: GenerateClientCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateClientCertificateCommandOutput) => void
  ): void;
  /**
   * <p>Gets information about the current <a>Account</a> resource.</p>
   */
  getAccount(args: GetAccountCommandInput, options?: __HttpHandlerOptions): Promise<GetAccountCommandOutput>;
  getAccount(args: GetAccountCommandInput, cb: (err: any, data?: GetAccountCommandOutput) => void): void;
  getAccount(
    args: GetAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountCommandOutput) => void
  ): void;
  /**
   * <p>Gets information about the current <a>ApiKey</a> resource.</p>
   */
  getApiKey(args: GetApiKeyCommandInput, options?: __HttpHandlerOptions): Promise<GetApiKeyCommandOutput>;
  getApiKey(args: GetApiKeyCommandInput, cb: (err: any, data?: GetApiKeyCommandOutput) => void): void;
  getApiKey(
    args: GetApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiKeyCommandOutput) => void
  ): void;
  /**
   * <p>Gets information about the current <a>ApiKeys</a> resource.</p>
   */
  getApiKeys(args: GetApiKeysCommandInput, options?: __HttpHandlerOptions): Promise<GetApiKeysCommandOutput>;
  getApiKeys(args: GetApiKeysCommandInput, cb: (err: any, data?: GetApiKeysCommandOutput) => void): void;
  getApiKeys(
    args: GetApiKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiKeysCommandOutput) => void
  ): void;
  /**
   * <p>Describe an existing <a>Authorizer</a> resource.</p>
   *         <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-authorizer.html">AWS CLI</a></div>
   */
  getAuthorizer(args: GetAuthorizerCommandInput, options?: __HttpHandlerOptions): Promise<GetAuthorizerCommandOutput>;
  getAuthorizer(args: GetAuthorizerCommandInput, cb: (err: any, data?: GetAuthorizerCommandOutput) => void): void;
  getAuthorizer(
    args: GetAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAuthorizerCommandOutput) => void
  ): void;
  /**
   * <p>Describe an existing <a>Authorizers</a> resource.</p>
   *         <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-authorizers.html">AWS CLI</a></div>
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
   * <p>Describe a <a>BasePathMapping</a> resource.</p>
   */
  getBasePathMapping(
    args: GetBasePathMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBasePathMappingCommandOutput>;
  getBasePathMapping(
    args: GetBasePathMappingCommandInput,
    cb: (err: any, data?: GetBasePathMappingCommandOutput) => void
  ): void;
  getBasePathMapping(
    args: GetBasePathMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBasePathMappingCommandOutput) => void
  ): void;
  /**
   * <p>Represents a collection of <a>BasePathMapping</a> resources.</p>
   */
  getBasePathMappings(
    args: GetBasePathMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBasePathMappingsCommandOutput>;
  getBasePathMappings(
    args: GetBasePathMappingsCommandInput,
    cb: (err: any, data?: GetBasePathMappingsCommandOutput) => void
  ): void;
  getBasePathMappings(
    args: GetBasePathMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBasePathMappingsCommandOutput) => void
  ): void;
  /**
   * <p>Gets information about the current <a>ClientCertificate</a> resource.</p>
   */
  getClientCertificate(
    args: GetClientCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClientCertificateCommandOutput>;
  getClientCertificate(
    args: GetClientCertificateCommandInput,
    cb: (err: any, data?: GetClientCertificateCommandOutput) => void
  ): void;
  getClientCertificate(
    args: GetClientCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClientCertificateCommandOutput) => void
  ): void;
  /**
   * <p>Gets a collection of <a>ClientCertificate</a> resources.</p>
   */
  getClientCertificates(
    args: GetClientCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClientCertificatesCommandOutput>;
  getClientCertificates(
    args: GetClientCertificatesCommandInput,
    cb: (err: any, data?: GetClientCertificatesCommandOutput) => void
  ): void;
  getClientCertificates(
    args: GetClientCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClientCertificatesCommandOutput) => void
  ): void;
  /**
   * <p>Gets information about a <a>Deployment</a> resource.</p>
   */
  getDeployment(args: GetDeploymentCommandInput, options?: __HttpHandlerOptions): Promise<GetDeploymentCommandOutput>;
  getDeployment(args: GetDeploymentCommandInput, cb: (err: any, data?: GetDeploymentCommandOutput) => void): void;
  getDeployment(
    args: GetDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;
  /**
   * <p>Gets information about a <a>Deployments</a> collection.</p>
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
  getDocumentationPart(
    args: GetDocumentationPartCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentationPartCommandOutput>;
  getDocumentationPart(
    args: GetDocumentationPartCommandInput,
    cb: (err: any, data?: GetDocumentationPartCommandOutput) => void
  ): void;
  getDocumentationPart(
    args: GetDocumentationPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentationPartCommandOutput) => void
  ): void;
  getDocumentationParts(
    args: GetDocumentationPartsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentationPartsCommandOutput>;
  getDocumentationParts(
    args: GetDocumentationPartsCommandInput,
    cb: (err: any, data?: GetDocumentationPartsCommandOutput) => void
  ): void;
  getDocumentationParts(
    args: GetDocumentationPartsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentationPartsCommandOutput) => void
  ): void;
  getDocumentationVersion(
    args: GetDocumentationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentationVersionCommandOutput>;
  getDocumentationVersion(
    args: GetDocumentationVersionCommandInput,
    cb: (err: any, data?: GetDocumentationVersionCommandOutput) => void
  ): void;
  getDocumentationVersion(
    args: GetDocumentationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentationVersionCommandOutput) => void
  ): void;
  getDocumentationVersions(
    args: GetDocumentationVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentationVersionsCommandOutput>;
  getDocumentationVersions(
    args: GetDocumentationVersionsCommandInput,
    cb: (err: any, data?: GetDocumentationVersionsCommandOutput) => void
  ): void;
  getDocumentationVersions(
    args: GetDocumentationVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentationVersionsCommandOutput) => void
  ): void;
  /**
   * <p>Represents a domain name that is contained in a simpler, more intuitive URL that can be called.</p>
   */
  getDomainName(args: GetDomainNameCommandInput, options?: __HttpHandlerOptions): Promise<GetDomainNameCommandOutput>;
  getDomainName(args: GetDomainNameCommandInput, cb: (err: any, data?: GetDomainNameCommandOutput) => void): void;
  getDomainName(
    args: GetDomainNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainNameCommandOutput) => void
  ): void;
  /**
   * <p>Represents a collection of <a>DomainName</a> resources.</p>
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
   * <p>Exports a deployed version of a <a>RestApi</a> in a specified format.</p>
   */
  getExport(args: GetExportCommandInput, options?: __HttpHandlerOptions): Promise<GetExportCommandOutput>;
  getExport(args: GetExportCommandInput, cb: (err: any, data?: GetExportCommandOutput) => void): void;
  getExport(
    args: GetExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExportCommandOutput) => void
  ): void;
  /**
   * <p>Gets a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.</p>
   */
  getGatewayResponse(
    args: GetGatewayResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGatewayResponseCommandOutput>;
  getGatewayResponse(
    args: GetGatewayResponseCommandInput,
    cb: (err: any, data?: GetGatewayResponseCommandOutput) => void
  ): void;
  getGatewayResponse(
    args: GetGatewayResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGatewayResponseCommandOutput) => void
  ): void;
  /**
   * <p>Gets the <a>GatewayResponses</a> collection on the given <a>RestApi</a>. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default <a>GatewayResponses</a> collection for the supported response types.</p>
   */
  getGatewayResponses(
    args: GetGatewayResponsesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGatewayResponsesCommandOutput>;
  getGatewayResponses(
    args: GetGatewayResponsesCommandInput,
    cb: (err: any, data?: GetGatewayResponsesCommandOutput) => void
  ): void;
  getGatewayResponses(
    args: GetGatewayResponsesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGatewayResponsesCommandOutput) => void
  ): void;
  /**
   * <p>Get the integration settings.</p>
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
   * <p>Represents a get integration response.</p>
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
   * <p>Describe an existing <a>Method</a> resource.</p>
   */
  getMethod(args: GetMethodCommandInput, options?: __HttpHandlerOptions): Promise<GetMethodCommandOutput>;
  getMethod(args: GetMethodCommandInput, cb: (err: any, data?: GetMethodCommandOutput) => void): void;
  getMethod(
    args: GetMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMethodCommandOutput) => void
  ): void;
  /**
   * <p>Describes a <a>MethodResponse</a> resource.</p>
   */
  getMethodResponse(
    args: GetMethodResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMethodResponseCommandOutput>;
  getMethodResponse(
    args: GetMethodResponseCommandInput,
    cb: (err: any, data?: GetMethodResponseCommandOutput) => void
  ): void;
  getMethodResponse(
    args: GetMethodResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMethodResponseCommandOutput) => void
  ): void;
  /**
   * <p>Describes an existing model defined for a <a>RestApi</a> resource.</p>
   */
  getModel(args: GetModelCommandInput, options?: __HttpHandlerOptions): Promise<GetModelCommandOutput>;
  getModel(args: GetModelCommandInput, cb: (err: any, data?: GetModelCommandOutput) => void): void;
  getModel(
    args: GetModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelCommandOutput) => void
  ): void;
  /**
   * <p>Describes existing <a>Models</a> defined for a <a>RestApi</a> resource.</p>
   */
  getModels(args: GetModelsCommandInput, options?: __HttpHandlerOptions): Promise<GetModelsCommandOutput>;
  getModels(args: GetModelsCommandInput, cb: (err: any, data?: GetModelsCommandOutput) => void): void;
  getModels(
    args: GetModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelsCommandOutput) => void
  ): void;
  /**
   * <p>Generates a sample mapping template that can be used to transform a payload into the structure of a model.</p>
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
   * <p>Gets a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>
   */
  getRequestValidator(
    args: GetRequestValidatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRequestValidatorCommandOutput>;
  getRequestValidator(
    args: GetRequestValidatorCommandInput,
    cb: (err: any, data?: GetRequestValidatorCommandOutput) => void
  ): void;
  getRequestValidator(
    args: GetRequestValidatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRequestValidatorCommandOutput) => void
  ): void;
  /**
   * <p>Gets the <a>RequestValidators</a> collection of a given <a>RestApi</a>.</p>
   */
  getRequestValidators(
    args: GetRequestValidatorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRequestValidatorsCommandOutput>;
  getRequestValidators(
    args: GetRequestValidatorsCommandInput,
    cb: (err: any, data?: GetRequestValidatorsCommandOutput) => void
  ): void;
  getRequestValidators(
    args: GetRequestValidatorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRequestValidatorsCommandOutput) => void
  ): void;
  /**
   * <p>Lists information about a resource.</p>
   */
  getResource(args: GetResourceCommandInput, options?: __HttpHandlerOptions): Promise<GetResourceCommandOutput>;
  getResource(args: GetResourceCommandInput, cb: (err: any, data?: GetResourceCommandOutput) => void): void;
  getResource(
    args: GetResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceCommandOutput) => void
  ): void;
  /**
   * <p>Lists information about a collection of <a>Resource</a> resources.</p>
   */
  getResources(args: GetResourcesCommandInput, options?: __HttpHandlerOptions): Promise<GetResourcesCommandOutput>;
  getResources(args: GetResourcesCommandInput, cb: (err: any, data?: GetResourcesCommandOutput) => void): void;
  getResources(
    args: GetResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcesCommandOutput) => void
  ): void;
  /**
   * <p>Lists the <a>RestApi</a> resource in the collection.</p>
   */
  getRestApi(args: GetRestApiCommandInput, options?: __HttpHandlerOptions): Promise<GetRestApiCommandOutput>;
  getRestApi(args: GetRestApiCommandInput, cb: (err: any, data?: GetRestApiCommandOutput) => void): void;
  getRestApi(
    args: GetRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRestApiCommandOutput) => void
  ): void;
  /**
   * <p>Lists the <a>RestApis</a> resources for your collection.</p>
   */
  getRestApis(args: GetRestApisCommandInput, options?: __HttpHandlerOptions): Promise<GetRestApisCommandOutput>;
  getRestApis(args: GetRestApisCommandInput, cb: (err: any, data?: GetRestApisCommandOutput) => void): void;
  getRestApis(
    args: GetRestApisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRestApisCommandOutput) => void
  ): void;
  /**
   * <p>Generates a client SDK for a <a>RestApi</a> and <a>Stage</a>.</p>
   */
  getSdk(args: GetSdkCommandInput, options?: __HttpHandlerOptions): Promise<GetSdkCommandOutput>;
  getSdk(args: GetSdkCommandInput, cb: (err: any, data?: GetSdkCommandOutput) => void): void;
  getSdk(
    args: GetSdkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSdkCommandOutput) => void
  ): void;
  getSdkType(args: GetSdkTypeCommandInput, options?: __HttpHandlerOptions): Promise<GetSdkTypeCommandOutput>;
  getSdkType(args: GetSdkTypeCommandInput, cb: (err: any, data?: GetSdkTypeCommandOutput) => void): void;
  getSdkType(
    args: GetSdkTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSdkTypeCommandOutput) => void
  ): void;
  getSdkTypes(args: GetSdkTypesCommandInput, options?: __HttpHandlerOptions): Promise<GetSdkTypesCommandOutput>;
  getSdkTypes(args: GetSdkTypesCommandInput, cb: (err: any, data?: GetSdkTypesCommandOutput) => void): void;
  getSdkTypes(
    args: GetSdkTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSdkTypesCommandOutput) => void
  ): void;
  /**
   * <p>Gets information about a <a>Stage</a> resource.</p>
   */
  getStage(args: GetStageCommandInput, options?: __HttpHandlerOptions): Promise<GetStageCommandOutput>;
  getStage(args: GetStageCommandInput, cb: (err: any, data?: GetStageCommandOutput) => void): void;
  getStage(
    args: GetStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStageCommandOutput) => void
  ): void;
  /**
   * <p>Gets information about one or more <a>Stage</a> resources.</p>
   */
  getStages(args: GetStagesCommandInput, options?: __HttpHandlerOptions): Promise<GetStagesCommandOutput>;
  getStages(args: GetStagesCommandInput, cb: (err: any, data?: GetStagesCommandOutput) => void): void;
  getStages(
    args: GetStagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStagesCommandOutput) => void
  ): void;
  /**
   * <p>Gets the <a>Tags</a> collection for a given resource.</p>
   */
  getTags(args: GetTagsCommandInput, options?: __HttpHandlerOptions): Promise<GetTagsCommandOutput>;
  getTags(args: GetTagsCommandInput, cb: (err: any, data?: GetTagsCommandOutput) => void): void;
  getTags(
    args: GetTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTagsCommandOutput) => void
  ): void;
  /**
   * <p>Gets the usage data of a usage plan in a specified time interval.</p>
   */
  getUsage(args: GetUsageCommandInput, options?: __HttpHandlerOptions): Promise<GetUsageCommandOutput>;
  getUsage(args: GetUsageCommandInput, cb: (err: any, data?: GetUsageCommandOutput) => void): void;
  getUsage(
    args: GetUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsageCommandOutput) => void
  ): void;
  /**
   * <p>Gets a usage plan of a given plan identifier.</p>
   */
  getUsagePlan(args: GetUsagePlanCommandInput, options?: __HttpHandlerOptions): Promise<GetUsagePlanCommandOutput>;
  getUsagePlan(args: GetUsagePlanCommandInput, cb: (err: any, data?: GetUsagePlanCommandOutput) => void): void;
  getUsagePlan(
    args: GetUsagePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsagePlanCommandOutput) => void
  ): void;
  /**
   * <p>Gets a usage plan key of a given key identifier.</p>
   */
  getUsagePlanKey(
    args: GetUsagePlanKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsagePlanKeyCommandOutput>;
  getUsagePlanKey(args: GetUsagePlanKeyCommandInput, cb: (err: any, data?: GetUsagePlanKeyCommandOutput) => void): void;
  getUsagePlanKey(
    args: GetUsagePlanKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsagePlanKeyCommandOutput) => void
  ): void;
  /**
   * <p>Gets all the usage plan keys representing the API keys added to a specified usage plan.</p>
   */
  getUsagePlanKeys(
    args: GetUsagePlanKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsagePlanKeysCommandOutput>;
  getUsagePlanKeys(
    args: GetUsagePlanKeysCommandInput,
    cb: (err: any, data?: GetUsagePlanKeysCommandOutput) => void
  ): void;
  getUsagePlanKeys(
    args: GetUsagePlanKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsagePlanKeysCommandOutput) => void
  ): void;
  /**
   * <p>Gets all the usage plans of the caller's account.</p>
   */
  getUsagePlans(args: GetUsagePlansCommandInput, options?: __HttpHandlerOptions): Promise<GetUsagePlansCommandOutput>;
  getUsagePlans(args: GetUsagePlansCommandInput, cb: (err: any, data?: GetUsagePlansCommandOutput) => void): void;
  getUsagePlans(
    args: GetUsagePlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsagePlansCommandOutput) => void
  ): void;
  /**
   * <p>Gets a specified VPC link under the caller's account in a region.</p>
   */
  getVpcLink(args: GetVpcLinkCommandInput, options?: __HttpHandlerOptions): Promise<GetVpcLinkCommandOutput>;
  getVpcLink(args: GetVpcLinkCommandInput, cb: (err: any, data?: GetVpcLinkCommandOutput) => void): void;
  getVpcLink(
    args: GetVpcLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVpcLinkCommandOutput) => void
  ): void;
  /**
   * <p>Gets the <a>VpcLinks</a> collection under the caller's account in a selected region.</p>
   */
  getVpcLinks(args: GetVpcLinksCommandInput, options?: __HttpHandlerOptions): Promise<GetVpcLinksCommandOutput>;
  getVpcLinks(args: GetVpcLinksCommandInput, cb: (err: any, data?: GetVpcLinksCommandOutput) => void): void;
  getVpcLinks(
    args: GetVpcLinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVpcLinksCommandOutput) => void
  ): void;
  /**
   * <p>Import API keys from an external source, such as a CSV-formatted file.</p>
   */
  importApiKeys(args: ImportApiKeysCommandInput, options?: __HttpHandlerOptions): Promise<ImportApiKeysCommandOutput>;
  importApiKeys(args: ImportApiKeysCommandInput, cb: (err: any, data?: ImportApiKeysCommandOutput) => void): void;
  importApiKeys(
    args: ImportApiKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportApiKeysCommandOutput) => void
  ): void;
  importDocumentationParts(
    args: ImportDocumentationPartsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportDocumentationPartsCommandOutput>;
  importDocumentationParts(
    args: ImportDocumentationPartsCommandInput,
    cb: (err: any, data?: ImportDocumentationPartsCommandOutput) => void
  ): void;
  importDocumentationParts(
    args: ImportDocumentationPartsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportDocumentationPartsCommandOutput) => void
  ): void;
  /**
   * <p>A feature of the API Gateway control service for creating a new API from an external API definition file.</p>
   */
  importRestApi(args: ImportRestApiCommandInput, options?: __HttpHandlerOptions): Promise<ImportRestApiCommandOutput>;
  importRestApi(args: ImportRestApiCommandInput, cb: (err: any, data?: ImportRestApiCommandOutput) => void): void;
  importRestApi(
    args: ImportRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportRestApiCommandOutput) => void
  ): void;
  /**
   * <p>Creates a customization of a <a>GatewayResponse</a> of a specified response type and status code on the given <a>RestApi</a>.</p>
   */
  putGatewayResponse(
    args: PutGatewayResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutGatewayResponseCommandOutput>;
  putGatewayResponse(
    args: PutGatewayResponseCommandInput,
    cb: (err: any, data?: PutGatewayResponseCommandOutput) => void
  ): void;
  putGatewayResponse(
    args: PutGatewayResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutGatewayResponseCommandOutput) => void
  ): void;
  /**
   * <p>Sets up a method's integration.</p>
   */
  putIntegration(
    args: PutIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutIntegrationCommandOutput>;
  putIntegration(args: PutIntegrationCommandInput, cb: (err: any, data?: PutIntegrationCommandOutput) => void): void;
  putIntegration(
    args: PutIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutIntegrationCommandOutput) => void
  ): void;
  /**
   * <p>Represents a put integration.</p>
   */
  putIntegrationResponse(
    args: PutIntegrationResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutIntegrationResponseCommandOutput>;
  putIntegrationResponse(
    args: PutIntegrationResponseCommandInput,
    cb: (err: any, data?: PutIntegrationResponseCommandOutput) => void
  ): void;
  putIntegrationResponse(
    args: PutIntegrationResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutIntegrationResponseCommandOutput) => void
  ): void;
  /**
   * <p>Add a method to an existing <a>Resource</a> resource.</p>
   */
  putMethod(args: PutMethodCommandInput, options?: __HttpHandlerOptions): Promise<PutMethodCommandOutput>;
  putMethod(args: PutMethodCommandInput, cb: (err: any, data?: PutMethodCommandOutput) => void): void;
  putMethod(
    args: PutMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMethodCommandOutput) => void
  ): void;
  /**
   * <p>Adds a <a>MethodResponse</a> to an existing <a>Method</a> resource.</p>
   */
  putMethodResponse(
    args: PutMethodResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMethodResponseCommandOutput>;
  putMethodResponse(
    args: PutMethodResponseCommandInput,
    cb: (err: any, data?: PutMethodResponseCommandOutput) => void
  ): void;
  putMethodResponse(
    args: PutMethodResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMethodResponseCommandOutput) => void
  ): void;
  /**
   * <p>A feature of the API Gateway control service for updating an existing API with an input of external API definitions.
   *             The update can take the form of merging the supplied definition into the existing API or overwriting the existing API.</p>
   */
  putRestApi(args: PutRestApiCommandInput, options?: __HttpHandlerOptions): Promise<PutRestApiCommandOutput>;
  putRestApi(args: PutRestApiCommandInput, cb: (err: any, data?: PutRestApiCommandOutput) => void): void;
  putRestApi(
    args: PutRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRestApiCommandOutput) => void
  ): void;
  /**
   * <p>Adds or updates a tag on a given resource.</p>
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  /**
   * <p>Simulate the execution of an <a>Authorizer</a> in your <a>RestApi</a> with headers, parameters, and an incoming request body.</p>
   *       <div class="seeAlso">
   *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a>
   *         <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a>
   *       </div>
   */
  testInvokeAuthorizer(
    args: TestInvokeAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestInvokeAuthorizerCommandOutput>;
  testInvokeAuthorizer(
    args: TestInvokeAuthorizerCommandInput,
    cb: (err: any, data?: TestInvokeAuthorizerCommandOutput) => void
  ): void;
  testInvokeAuthorizer(
    args: TestInvokeAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestInvokeAuthorizerCommandOutput) => void
  ): void;
  /**
   * <p>Simulate the execution of a <a>Method</a> in your <a>RestApi</a> with headers, parameters, and an incoming request body.</p>
   */
  testInvokeMethod(
    args: TestInvokeMethodCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestInvokeMethodCommandOutput>;
  testInvokeMethod(
    args: TestInvokeMethodCommandInput,
    cb: (err: any, data?: TestInvokeMethodCommandOutput) => void
  ): void;
  testInvokeMethod(
    args: TestInvokeMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestInvokeMethodCommandOutput) => void
  ): void;
  /**
   * <p>Removes a tag from a given resource.</p>
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  /**
   * <p>Changes information about the current <a>Account</a> resource.</p>
   */
  updateAccount(args: UpdateAccountCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAccountCommandOutput>;
  updateAccount(args: UpdateAccountCommandInput, cb: (err: any, data?: UpdateAccountCommandOutput) => void): void;
  updateAccount(
    args: UpdateAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountCommandOutput) => void
  ): void;
  /**
   * <p>Changes information about an <a>ApiKey</a> resource.</p>
   */
  updateApiKey(args: UpdateApiKeyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateApiKeyCommandOutput>;
  updateApiKey(args: UpdateApiKeyCommandInput, cb: (err: any, data?: UpdateApiKeyCommandOutput) => void): void;
  updateApiKey(
    args: UpdateApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApiKeyCommandOutput) => void
  ): void;
  /**
   * <p>Updates an existing <a>Authorizer</a> resource.</p>
   *         <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/update-authorizer.html">AWS CLI</a></div>
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
   * <p>Changes information about the <a>BasePathMapping</a> resource.</p>
   */
  updateBasePathMapping(
    args: UpdateBasePathMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBasePathMappingCommandOutput>;
  updateBasePathMapping(
    args: UpdateBasePathMappingCommandInput,
    cb: (err: any, data?: UpdateBasePathMappingCommandOutput) => void
  ): void;
  updateBasePathMapping(
    args: UpdateBasePathMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBasePathMappingCommandOutput) => void
  ): void;
  /**
   * <p>Changes information about an <a>ClientCertificate</a> resource.</p>
   */
  updateClientCertificate(
    args: UpdateClientCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClientCertificateCommandOutput>;
  updateClientCertificate(
    args: UpdateClientCertificateCommandInput,
    cb: (err: any, data?: UpdateClientCertificateCommandOutput) => void
  ): void;
  updateClientCertificate(
    args: UpdateClientCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClientCertificateCommandOutput) => void
  ): void;
  /**
   * <p>Changes information about a <a>Deployment</a> resource.</p>
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
  updateDocumentationPart(
    args: UpdateDocumentationPartCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDocumentationPartCommandOutput>;
  updateDocumentationPart(
    args: UpdateDocumentationPartCommandInput,
    cb: (err: any, data?: UpdateDocumentationPartCommandOutput) => void
  ): void;
  updateDocumentationPart(
    args: UpdateDocumentationPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDocumentationPartCommandOutput) => void
  ): void;
  updateDocumentationVersion(
    args: UpdateDocumentationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDocumentationVersionCommandOutput>;
  updateDocumentationVersion(
    args: UpdateDocumentationVersionCommandInput,
    cb: (err: any, data?: UpdateDocumentationVersionCommandOutput) => void
  ): void;
  updateDocumentationVersion(
    args: UpdateDocumentationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDocumentationVersionCommandOutput) => void
  ): void;
  /**
   * <p>Changes information about the <a>DomainName</a> resource.</p>
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
   * <p>Updates a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.</p>
   */
  updateGatewayResponse(
    args: UpdateGatewayResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewayResponseCommandOutput>;
  updateGatewayResponse(
    args: UpdateGatewayResponseCommandInput,
    cb: (err: any, data?: UpdateGatewayResponseCommandOutput) => void
  ): void;
  updateGatewayResponse(
    args: UpdateGatewayResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewayResponseCommandOutput) => void
  ): void;
  /**
   * <p>Represents an update integration.</p>
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
   * <p>Represents an update integration response.</p>
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
   * <p>Updates an existing <a>Method</a> resource.</p>
   */
  updateMethod(args: UpdateMethodCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMethodCommandOutput>;
  updateMethod(args: UpdateMethodCommandInput, cb: (err: any, data?: UpdateMethodCommandOutput) => void): void;
  updateMethod(
    args: UpdateMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMethodCommandOutput) => void
  ): void;
  /**
   * <p>Updates an existing <a>MethodResponse</a> resource.</p>
   */
  updateMethodResponse(
    args: UpdateMethodResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMethodResponseCommandOutput>;
  updateMethodResponse(
    args: UpdateMethodResponseCommandInput,
    cb: (err: any, data?: UpdateMethodResponseCommandOutput) => void
  ): void;
  updateMethodResponse(
    args: UpdateMethodResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMethodResponseCommandOutput) => void
  ): void;
  /**
   * <p>Changes information about a model.</p>
   */
  updateModel(args: UpdateModelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateModelCommandOutput>;
  updateModel(args: UpdateModelCommandInput, cb: (err: any, data?: UpdateModelCommandOutput) => void): void;
  updateModel(
    args: UpdateModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateModelCommandOutput) => void
  ): void;
  /**
   * <p>Updates a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>
   */
  updateRequestValidator(
    args: UpdateRequestValidatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRequestValidatorCommandOutput>;
  updateRequestValidator(
    args: UpdateRequestValidatorCommandInput,
    cb: (err: any, data?: UpdateRequestValidatorCommandOutput) => void
  ): void;
  updateRequestValidator(
    args: UpdateRequestValidatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRequestValidatorCommandOutput) => void
  ): void;
  /**
   * <p>Changes information about a <a>Resource</a> resource.</p>
   */
  updateResource(
    args: UpdateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceCommandOutput>;
  updateResource(args: UpdateResourceCommandInput, cb: (err: any, data?: UpdateResourceCommandOutput) => void): void;
  updateResource(
    args: UpdateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceCommandOutput) => void
  ): void;
  /**
   * <p>Changes information about the specified API.</p>
   */
  updateRestApi(args: UpdateRestApiCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRestApiCommandOutput>;
  updateRestApi(args: UpdateRestApiCommandInput, cb: (err: any, data?: UpdateRestApiCommandOutput) => void): void;
  updateRestApi(
    args: UpdateRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRestApiCommandOutput) => void
  ): void;
  /**
   * <p>Changes information about a <a>Stage</a> resource.</p>
   */
  updateStage(args: UpdateStageCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStageCommandOutput>;
  updateStage(args: UpdateStageCommandInput, cb: (err: any, data?: UpdateStageCommandOutput) => void): void;
  updateStage(
    args: UpdateStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStageCommandOutput) => void
  ): void;
  /**
   * <p>Grants a temporary extension to the remaining quota of a usage plan associated with a specified API key.</p>
   */
  updateUsage(args: UpdateUsageCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUsageCommandOutput>;
  updateUsage(args: UpdateUsageCommandInput, cb: (err: any, data?: UpdateUsageCommandOutput) => void): void;
  updateUsage(
    args: UpdateUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUsageCommandOutput) => void
  ): void;
  /**
   * <p>Updates a usage plan of a given plan Id.</p>
   */
  updateUsagePlan(
    args: UpdateUsagePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUsagePlanCommandOutput>;
  updateUsagePlan(args: UpdateUsagePlanCommandInput, cb: (err: any, data?: UpdateUsagePlanCommandOutput) => void): void;
  updateUsagePlan(
    args: UpdateUsagePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUsagePlanCommandOutput) => void
  ): void;
  /**
   * <p>Updates an existing <a>VpcLink</a> of a specified identifier.</p>
   */
  updateVpcLink(args: UpdateVpcLinkCommandInput, options?: __HttpHandlerOptions): Promise<UpdateVpcLinkCommandOutput>;
  updateVpcLink(args: UpdateVpcLinkCommandInput, cb: (err: any, data?: UpdateVpcLinkCommandOutput) => void): void;
  updateVpcLink(
    args: UpdateVpcLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVpcLinkCommandOutput) => void
  ): void;
}
