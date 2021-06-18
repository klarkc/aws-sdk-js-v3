"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIGateway = void 0;
const APIGatewayClient_1 = require("./APIGatewayClient");
const CreateApiKeyCommand_1 = require("./commands/CreateApiKeyCommand");
const CreateAuthorizerCommand_1 = require("./commands/CreateAuthorizerCommand");
const CreateBasePathMappingCommand_1 = require("./commands/CreateBasePathMappingCommand");
const CreateDeploymentCommand_1 = require("./commands/CreateDeploymentCommand");
const CreateDocumentationPartCommand_1 = require("./commands/CreateDocumentationPartCommand");
const CreateDocumentationVersionCommand_1 = require("./commands/CreateDocumentationVersionCommand");
const CreateDomainNameCommand_1 = require("./commands/CreateDomainNameCommand");
const CreateModelCommand_1 = require("./commands/CreateModelCommand");
const CreateRequestValidatorCommand_1 = require("./commands/CreateRequestValidatorCommand");
const CreateResourceCommand_1 = require("./commands/CreateResourceCommand");
const CreateRestApiCommand_1 = require("./commands/CreateRestApiCommand");
const CreateStageCommand_1 = require("./commands/CreateStageCommand");
const CreateUsagePlanCommand_1 = require("./commands/CreateUsagePlanCommand");
const CreateUsagePlanKeyCommand_1 = require("./commands/CreateUsagePlanKeyCommand");
const CreateVpcLinkCommand_1 = require("./commands/CreateVpcLinkCommand");
const DeleteApiKeyCommand_1 = require("./commands/DeleteApiKeyCommand");
const DeleteAuthorizerCommand_1 = require("./commands/DeleteAuthorizerCommand");
const DeleteBasePathMappingCommand_1 = require("./commands/DeleteBasePathMappingCommand");
const DeleteClientCertificateCommand_1 = require("./commands/DeleteClientCertificateCommand");
const DeleteDeploymentCommand_1 = require("./commands/DeleteDeploymentCommand");
const DeleteDocumentationPartCommand_1 = require("./commands/DeleteDocumentationPartCommand");
const DeleteDocumentationVersionCommand_1 = require("./commands/DeleteDocumentationVersionCommand");
const DeleteDomainNameCommand_1 = require("./commands/DeleteDomainNameCommand");
const DeleteGatewayResponseCommand_1 = require("./commands/DeleteGatewayResponseCommand");
const DeleteIntegrationCommand_1 = require("./commands/DeleteIntegrationCommand");
const DeleteIntegrationResponseCommand_1 = require("./commands/DeleteIntegrationResponseCommand");
const DeleteMethodCommand_1 = require("./commands/DeleteMethodCommand");
const DeleteMethodResponseCommand_1 = require("./commands/DeleteMethodResponseCommand");
const DeleteModelCommand_1 = require("./commands/DeleteModelCommand");
const DeleteRequestValidatorCommand_1 = require("./commands/DeleteRequestValidatorCommand");
const DeleteResourceCommand_1 = require("./commands/DeleteResourceCommand");
const DeleteRestApiCommand_1 = require("./commands/DeleteRestApiCommand");
const DeleteStageCommand_1 = require("./commands/DeleteStageCommand");
const DeleteUsagePlanCommand_1 = require("./commands/DeleteUsagePlanCommand");
const DeleteUsagePlanKeyCommand_1 = require("./commands/DeleteUsagePlanKeyCommand");
const DeleteVpcLinkCommand_1 = require("./commands/DeleteVpcLinkCommand");
const FlushStageAuthorizersCacheCommand_1 = require("./commands/FlushStageAuthorizersCacheCommand");
const FlushStageCacheCommand_1 = require("./commands/FlushStageCacheCommand");
const GenerateClientCertificateCommand_1 = require("./commands/GenerateClientCertificateCommand");
const GetAccountCommand_1 = require("./commands/GetAccountCommand");
const GetApiKeyCommand_1 = require("./commands/GetApiKeyCommand");
const GetApiKeysCommand_1 = require("./commands/GetApiKeysCommand");
const GetAuthorizerCommand_1 = require("./commands/GetAuthorizerCommand");
const GetAuthorizersCommand_1 = require("./commands/GetAuthorizersCommand");
const GetBasePathMappingCommand_1 = require("./commands/GetBasePathMappingCommand");
const GetBasePathMappingsCommand_1 = require("./commands/GetBasePathMappingsCommand");
const GetClientCertificateCommand_1 = require("./commands/GetClientCertificateCommand");
const GetClientCertificatesCommand_1 = require("./commands/GetClientCertificatesCommand");
const GetDeploymentCommand_1 = require("./commands/GetDeploymentCommand");
const GetDeploymentsCommand_1 = require("./commands/GetDeploymentsCommand");
const GetDocumentationPartCommand_1 = require("./commands/GetDocumentationPartCommand");
const GetDocumentationPartsCommand_1 = require("./commands/GetDocumentationPartsCommand");
const GetDocumentationVersionCommand_1 = require("./commands/GetDocumentationVersionCommand");
const GetDocumentationVersionsCommand_1 = require("./commands/GetDocumentationVersionsCommand");
const GetDomainNameCommand_1 = require("./commands/GetDomainNameCommand");
const GetDomainNamesCommand_1 = require("./commands/GetDomainNamesCommand");
const GetExportCommand_1 = require("./commands/GetExportCommand");
const GetGatewayResponseCommand_1 = require("./commands/GetGatewayResponseCommand");
const GetGatewayResponsesCommand_1 = require("./commands/GetGatewayResponsesCommand");
const GetIntegrationCommand_1 = require("./commands/GetIntegrationCommand");
const GetIntegrationResponseCommand_1 = require("./commands/GetIntegrationResponseCommand");
const GetMethodCommand_1 = require("./commands/GetMethodCommand");
const GetMethodResponseCommand_1 = require("./commands/GetMethodResponseCommand");
const GetModelCommand_1 = require("./commands/GetModelCommand");
const GetModelTemplateCommand_1 = require("./commands/GetModelTemplateCommand");
const GetModelsCommand_1 = require("./commands/GetModelsCommand");
const GetRequestValidatorCommand_1 = require("./commands/GetRequestValidatorCommand");
const GetRequestValidatorsCommand_1 = require("./commands/GetRequestValidatorsCommand");
const GetResourceCommand_1 = require("./commands/GetResourceCommand");
const GetResourcesCommand_1 = require("./commands/GetResourcesCommand");
const GetRestApiCommand_1 = require("./commands/GetRestApiCommand");
const GetRestApisCommand_1 = require("./commands/GetRestApisCommand");
const GetSdkCommand_1 = require("./commands/GetSdkCommand");
const GetSdkTypeCommand_1 = require("./commands/GetSdkTypeCommand");
const GetSdkTypesCommand_1 = require("./commands/GetSdkTypesCommand");
const GetStageCommand_1 = require("./commands/GetStageCommand");
const GetStagesCommand_1 = require("./commands/GetStagesCommand");
const GetTagsCommand_1 = require("./commands/GetTagsCommand");
const GetUsageCommand_1 = require("./commands/GetUsageCommand");
const GetUsagePlanCommand_1 = require("./commands/GetUsagePlanCommand");
const GetUsagePlanKeyCommand_1 = require("./commands/GetUsagePlanKeyCommand");
const GetUsagePlanKeysCommand_1 = require("./commands/GetUsagePlanKeysCommand");
const GetUsagePlansCommand_1 = require("./commands/GetUsagePlansCommand");
const GetVpcLinkCommand_1 = require("./commands/GetVpcLinkCommand");
const GetVpcLinksCommand_1 = require("./commands/GetVpcLinksCommand");
const ImportApiKeysCommand_1 = require("./commands/ImportApiKeysCommand");
const ImportDocumentationPartsCommand_1 = require("./commands/ImportDocumentationPartsCommand");
const ImportRestApiCommand_1 = require("./commands/ImportRestApiCommand");
const PutGatewayResponseCommand_1 = require("./commands/PutGatewayResponseCommand");
const PutIntegrationCommand_1 = require("./commands/PutIntegrationCommand");
const PutIntegrationResponseCommand_1 = require("./commands/PutIntegrationResponseCommand");
const PutMethodCommand_1 = require("./commands/PutMethodCommand");
const PutMethodResponseCommand_1 = require("./commands/PutMethodResponseCommand");
const PutRestApiCommand_1 = require("./commands/PutRestApiCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const TestInvokeAuthorizerCommand_1 = require("./commands/TestInvokeAuthorizerCommand");
const TestInvokeMethodCommand_1 = require("./commands/TestInvokeMethodCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateAccountCommand_1 = require("./commands/UpdateAccountCommand");
const UpdateApiKeyCommand_1 = require("./commands/UpdateApiKeyCommand");
const UpdateAuthorizerCommand_1 = require("./commands/UpdateAuthorizerCommand");
const UpdateBasePathMappingCommand_1 = require("./commands/UpdateBasePathMappingCommand");
const UpdateClientCertificateCommand_1 = require("./commands/UpdateClientCertificateCommand");
const UpdateDeploymentCommand_1 = require("./commands/UpdateDeploymentCommand");
const UpdateDocumentationPartCommand_1 = require("./commands/UpdateDocumentationPartCommand");
const UpdateDocumentationVersionCommand_1 = require("./commands/UpdateDocumentationVersionCommand");
const UpdateDomainNameCommand_1 = require("./commands/UpdateDomainNameCommand");
const UpdateGatewayResponseCommand_1 = require("./commands/UpdateGatewayResponseCommand");
const UpdateIntegrationCommand_1 = require("./commands/UpdateIntegrationCommand");
const UpdateIntegrationResponseCommand_1 = require("./commands/UpdateIntegrationResponseCommand");
const UpdateMethodCommand_1 = require("./commands/UpdateMethodCommand");
const UpdateMethodResponseCommand_1 = require("./commands/UpdateMethodResponseCommand");
const UpdateModelCommand_1 = require("./commands/UpdateModelCommand");
const UpdateRequestValidatorCommand_1 = require("./commands/UpdateRequestValidatorCommand");
const UpdateResourceCommand_1 = require("./commands/UpdateResourceCommand");
const UpdateRestApiCommand_1 = require("./commands/UpdateRestApiCommand");
const UpdateStageCommand_1 = require("./commands/UpdateStageCommand");
const UpdateUsageCommand_1 = require("./commands/UpdateUsageCommand");
const UpdateUsagePlanCommand_1 = require("./commands/UpdateUsagePlanCommand");
const UpdateVpcLinkCommand_1 = require("./commands/UpdateVpcLinkCommand");
/**
 * <fullname>Amazon API Gateway</fullname>
 *         <p>Amazon API Gateway helps developers deliver robust, secure, and scalable mobile and web application back ends. API Gateway allows developers to securely connect mobile and web applications to APIs that run on AWS Lambda, Amazon EC2, or other publicly addressable web services that are hosted outside of AWS.</p>
 */
class APIGateway extends APIGatewayClient_1.APIGatewayClient {
  createApiKey(args, optionsOrCb, cb) {
    const command = new CreateApiKeyCommand_1.CreateApiKeyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createAuthorizer(args, optionsOrCb, cb) {
    const command = new CreateAuthorizerCommand_1.CreateAuthorizerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createBasePathMapping(args, optionsOrCb, cb) {
    const command = new CreateBasePathMappingCommand_1.CreateBasePathMappingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createDeployment(args, optionsOrCb, cb) {
    const command = new CreateDeploymentCommand_1.CreateDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createDocumentationPart(args, optionsOrCb, cb) {
    const command = new CreateDocumentationPartCommand_1.CreateDocumentationPartCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createDocumentationVersion(args, optionsOrCb, cb) {
    const command = new CreateDocumentationVersionCommand_1.CreateDocumentationVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createDomainName(args, optionsOrCb, cb) {
    const command = new CreateDomainNameCommand_1.CreateDomainNameCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createModel(args, optionsOrCb, cb) {
    const command = new CreateModelCommand_1.CreateModelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createRequestValidator(args, optionsOrCb, cb) {
    const command = new CreateRequestValidatorCommand_1.CreateRequestValidatorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createResource(args, optionsOrCb, cb) {
    const command = new CreateResourceCommand_1.CreateResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createRestApi(args, optionsOrCb, cb) {
    const command = new CreateRestApiCommand_1.CreateRestApiCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createStage(args, optionsOrCb, cb) {
    const command = new CreateStageCommand_1.CreateStageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createUsagePlan(args, optionsOrCb, cb) {
    const command = new CreateUsagePlanCommand_1.CreateUsagePlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createUsagePlanKey(args, optionsOrCb, cb) {
    const command = new CreateUsagePlanKeyCommand_1.CreateUsagePlanKeyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createVpcLink(args, optionsOrCb, cb) {
    const command = new CreateVpcLinkCommand_1.CreateVpcLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteApiKey(args, optionsOrCb, cb) {
    const command = new DeleteApiKeyCommand_1.DeleteApiKeyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteAuthorizer(args, optionsOrCb, cb) {
    const command = new DeleteAuthorizerCommand_1.DeleteAuthorizerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteBasePathMapping(args, optionsOrCb, cb) {
    const command = new DeleteBasePathMappingCommand_1.DeleteBasePathMappingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteClientCertificate(args, optionsOrCb, cb) {
    const command = new DeleteClientCertificateCommand_1.DeleteClientCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteDeployment(args, optionsOrCb, cb) {
    const command = new DeleteDeploymentCommand_1.DeleteDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteDocumentationPart(args, optionsOrCb, cb) {
    const command = new DeleteDocumentationPartCommand_1.DeleteDocumentationPartCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteDocumentationVersion(args, optionsOrCb, cb) {
    const command = new DeleteDocumentationVersionCommand_1.DeleteDocumentationVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteDomainName(args, optionsOrCb, cb) {
    const command = new DeleteDomainNameCommand_1.DeleteDomainNameCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteGatewayResponse(args, optionsOrCb, cb) {
    const command = new DeleteGatewayResponseCommand_1.DeleteGatewayResponseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteIntegration(args, optionsOrCb, cb) {
    const command = new DeleteIntegrationCommand_1.DeleteIntegrationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteIntegrationResponse(args, optionsOrCb, cb) {
    const command = new DeleteIntegrationResponseCommand_1.DeleteIntegrationResponseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteMethod(args, optionsOrCb, cb) {
    const command = new DeleteMethodCommand_1.DeleteMethodCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteMethodResponse(args, optionsOrCb, cb) {
    const command = new DeleteMethodResponseCommand_1.DeleteMethodResponseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteModel(args, optionsOrCb, cb) {
    const command = new DeleteModelCommand_1.DeleteModelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteRequestValidator(args, optionsOrCb, cb) {
    const command = new DeleteRequestValidatorCommand_1.DeleteRequestValidatorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteResource(args, optionsOrCb, cb) {
    const command = new DeleteResourceCommand_1.DeleteResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteRestApi(args, optionsOrCb, cb) {
    const command = new DeleteRestApiCommand_1.DeleteRestApiCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteStage(args, optionsOrCb, cb) {
    const command = new DeleteStageCommand_1.DeleteStageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteUsagePlan(args, optionsOrCb, cb) {
    const command = new DeleteUsagePlanCommand_1.DeleteUsagePlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteUsagePlanKey(args, optionsOrCb, cb) {
    const command = new DeleteUsagePlanKeyCommand_1.DeleteUsagePlanKeyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteVpcLink(args, optionsOrCb, cb) {
    const command = new DeleteVpcLinkCommand_1.DeleteVpcLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  flushStageAuthorizersCache(args, optionsOrCb, cb) {
    const command = new FlushStageAuthorizersCacheCommand_1.FlushStageAuthorizersCacheCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  flushStageCache(args, optionsOrCb, cb) {
    const command = new FlushStageCacheCommand_1.FlushStageCacheCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  generateClientCertificate(args, optionsOrCb, cb) {
    const command = new GenerateClientCertificateCommand_1.GenerateClientCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getAccount(args, optionsOrCb, cb) {
    const command = new GetAccountCommand_1.GetAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getApiKey(args, optionsOrCb, cb) {
    const command = new GetApiKeyCommand_1.GetApiKeyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getApiKeys(args, optionsOrCb, cb) {
    const command = new GetApiKeysCommand_1.GetApiKeysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getAuthorizer(args, optionsOrCb, cb) {
    const command = new GetAuthorizerCommand_1.GetAuthorizerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getAuthorizers(args, optionsOrCb, cb) {
    const command = new GetAuthorizersCommand_1.GetAuthorizersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getBasePathMapping(args, optionsOrCb, cb) {
    const command = new GetBasePathMappingCommand_1.GetBasePathMappingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getBasePathMappings(args, optionsOrCb, cb) {
    const command = new GetBasePathMappingsCommand_1.GetBasePathMappingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getClientCertificate(args, optionsOrCb, cb) {
    const command = new GetClientCertificateCommand_1.GetClientCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getClientCertificates(args, optionsOrCb, cb) {
    const command = new GetClientCertificatesCommand_1.GetClientCertificatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getDeployment(args, optionsOrCb, cb) {
    const command = new GetDeploymentCommand_1.GetDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getDeployments(args, optionsOrCb, cb) {
    const command = new GetDeploymentsCommand_1.GetDeploymentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getDocumentationPart(args, optionsOrCb, cb) {
    const command = new GetDocumentationPartCommand_1.GetDocumentationPartCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getDocumentationParts(args, optionsOrCb, cb) {
    const command = new GetDocumentationPartsCommand_1.GetDocumentationPartsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getDocumentationVersion(args, optionsOrCb, cb) {
    const command = new GetDocumentationVersionCommand_1.GetDocumentationVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getDocumentationVersions(args, optionsOrCb, cb) {
    const command = new GetDocumentationVersionsCommand_1.GetDocumentationVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getDomainName(args, optionsOrCb, cb) {
    const command = new GetDomainNameCommand_1.GetDomainNameCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getDomainNames(args, optionsOrCb, cb) {
    const command = new GetDomainNamesCommand_1.GetDomainNamesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getExport(args, optionsOrCb, cb) {
    const command = new GetExportCommand_1.GetExportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getGatewayResponse(args, optionsOrCb, cb) {
    const command = new GetGatewayResponseCommand_1.GetGatewayResponseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getGatewayResponses(args, optionsOrCb, cb) {
    const command = new GetGatewayResponsesCommand_1.GetGatewayResponsesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getIntegration(args, optionsOrCb, cb) {
    const command = new GetIntegrationCommand_1.GetIntegrationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getIntegrationResponse(args, optionsOrCb, cb) {
    const command = new GetIntegrationResponseCommand_1.GetIntegrationResponseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getMethod(args, optionsOrCb, cb) {
    const command = new GetMethodCommand_1.GetMethodCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getMethodResponse(args, optionsOrCb, cb) {
    const command = new GetMethodResponseCommand_1.GetMethodResponseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getModel(args, optionsOrCb, cb) {
    const command = new GetModelCommand_1.GetModelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getModels(args, optionsOrCb, cb) {
    const command = new GetModelsCommand_1.GetModelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getModelTemplate(args, optionsOrCb, cb) {
    const command = new GetModelTemplateCommand_1.GetModelTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getRequestValidator(args, optionsOrCb, cb) {
    const command = new GetRequestValidatorCommand_1.GetRequestValidatorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getRequestValidators(args, optionsOrCb, cb) {
    const command = new GetRequestValidatorsCommand_1.GetRequestValidatorsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getResource(args, optionsOrCb, cb) {
    const command = new GetResourceCommand_1.GetResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getResources(args, optionsOrCb, cb) {
    const command = new GetResourcesCommand_1.GetResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getRestApi(args, optionsOrCb, cb) {
    const command = new GetRestApiCommand_1.GetRestApiCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getRestApis(args, optionsOrCb, cb) {
    const command = new GetRestApisCommand_1.GetRestApisCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getSdk(args, optionsOrCb, cb) {
    const command = new GetSdkCommand_1.GetSdkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getSdkType(args, optionsOrCb, cb) {
    const command = new GetSdkTypeCommand_1.GetSdkTypeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getSdkTypes(args, optionsOrCb, cb) {
    const command = new GetSdkTypesCommand_1.GetSdkTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getStage(args, optionsOrCb, cb) {
    const command = new GetStageCommand_1.GetStageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getStages(args, optionsOrCb, cb) {
    const command = new GetStagesCommand_1.GetStagesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getTags(args, optionsOrCb, cb) {
    const command = new GetTagsCommand_1.GetTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getUsage(args, optionsOrCb, cb) {
    const command = new GetUsageCommand_1.GetUsageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getUsagePlan(args, optionsOrCb, cb) {
    const command = new GetUsagePlanCommand_1.GetUsagePlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getUsagePlanKey(args, optionsOrCb, cb) {
    const command = new GetUsagePlanKeyCommand_1.GetUsagePlanKeyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getUsagePlanKeys(args, optionsOrCb, cb) {
    const command = new GetUsagePlanKeysCommand_1.GetUsagePlanKeysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getUsagePlans(args, optionsOrCb, cb) {
    const command = new GetUsagePlansCommand_1.GetUsagePlansCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getVpcLink(args, optionsOrCb, cb) {
    const command = new GetVpcLinkCommand_1.GetVpcLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getVpcLinks(args, optionsOrCb, cb) {
    const command = new GetVpcLinksCommand_1.GetVpcLinksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  importApiKeys(args, optionsOrCb, cb) {
    const command = new ImportApiKeysCommand_1.ImportApiKeysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  importDocumentationParts(args, optionsOrCb, cb) {
    const command = new ImportDocumentationPartsCommand_1.ImportDocumentationPartsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  importRestApi(args, optionsOrCb, cb) {
    const command = new ImportRestApiCommand_1.ImportRestApiCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  putGatewayResponse(args, optionsOrCb, cb) {
    const command = new PutGatewayResponseCommand_1.PutGatewayResponseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  putIntegration(args, optionsOrCb, cb) {
    const command = new PutIntegrationCommand_1.PutIntegrationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  putIntegrationResponse(args, optionsOrCb, cb) {
    const command = new PutIntegrationResponseCommand_1.PutIntegrationResponseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  putMethod(args, optionsOrCb, cb) {
    const command = new PutMethodCommand_1.PutMethodCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  putMethodResponse(args, optionsOrCb, cb) {
    const command = new PutMethodResponseCommand_1.PutMethodResponseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  putRestApi(args, optionsOrCb, cb) {
    const command = new PutRestApiCommand_1.PutRestApiCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  tagResource(args, optionsOrCb, cb) {
    const command = new TagResourceCommand_1.TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  testInvokeAuthorizer(args, optionsOrCb, cb) {
    const command = new TestInvokeAuthorizerCommand_1.TestInvokeAuthorizerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  testInvokeMethod(args, optionsOrCb, cb) {
    const command = new TestInvokeMethodCommand_1.TestInvokeMethodCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  untagResource(args, optionsOrCb, cb) {
    const command = new UntagResourceCommand_1.UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateAccount(args, optionsOrCb, cb) {
    const command = new UpdateAccountCommand_1.UpdateAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateApiKey(args, optionsOrCb, cb) {
    const command = new UpdateApiKeyCommand_1.UpdateApiKeyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateAuthorizer(args, optionsOrCb, cb) {
    const command = new UpdateAuthorizerCommand_1.UpdateAuthorizerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateBasePathMapping(args, optionsOrCb, cb) {
    const command = new UpdateBasePathMappingCommand_1.UpdateBasePathMappingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateClientCertificate(args, optionsOrCb, cb) {
    const command = new UpdateClientCertificateCommand_1.UpdateClientCertificateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateDeployment(args, optionsOrCb, cb) {
    const command = new UpdateDeploymentCommand_1.UpdateDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateDocumentationPart(args, optionsOrCb, cb) {
    const command = new UpdateDocumentationPartCommand_1.UpdateDocumentationPartCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateDocumentationVersion(args, optionsOrCb, cb) {
    const command = new UpdateDocumentationVersionCommand_1.UpdateDocumentationVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateDomainName(args, optionsOrCb, cb) {
    const command = new UpdateDomainNameCommand_1.UpdateDomainNameCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateGatewayResponse(args, optionsOrCb, cb) {
    const command = new UpdateGatewayResponseCommand_1.UpdateGatewayResponseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateIntegration(args, optionsOrCb, cb) {
    const command = new UpdateIntegrationCommand_1.UpdateIntegrationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateIntegrationResponse(args, optionsOrCb, cb) {
    const command = new UpdateIntegrationResponseCommand_1.UpdateIntegrationResponseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateMethod(args, optionsOrCb, cb) {
    const command = new UpdateMethodCommand_1.UpdateMethodCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateMethodResponse(args, optionsOrCb, cb) {
    const command = new UpdateMethodResponseCommand_1.UpdateMethodResponseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateModel(args, optionsOrCb, cb) {
    const command = new UpdateModelCommand_1.UpdateModelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateRequestValidator(args, optionsOrCb, cb) {
    const command = new UpdateRequestValidatorCommand_1.UpdateRequestValidatorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateResource(args, optionsOrCb, cb) {
    const command = new UpdateResourceCommand_1.UpdateResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateRestApi(args, optionsOrCb, cb) {
    const command = new UpdateRestApiCommand_1.UpdateRestApiCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateStage(args, optionsOrCb, cb) {
    const command = new UpdateStageCommand_1.UpdateStageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateUsage(args, optionsOrCb, cb) {
    const command = new UpdateUsageCommand_1.UpdateUsageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateUsagePlan(args, optionsOrCb, cb) {
    const command = new UpdateUsagePlanCommand_1.UpdateUsagePlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateVpcLink(args, optionsOrCb, cb) {
    const command = new UpdateVpcLinkCommand_1.UpdateVpcLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
exports.APIGateway = APIGateway;
//# sourceMappingURL=APIGateway.js.map
