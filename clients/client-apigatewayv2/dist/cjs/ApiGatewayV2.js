"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGatewayV2 = void 0;
const ApiGatewayV2Client_1 = require("./ApiGatewayV2Client");
const CreateApiCommand_1 = require("./commands/CreateApiCommand");
const CreateApiMappingCommand_1 = require("./commands/CreateApiMappingCommand");
const CreateAuthorizerCommand_1 = require("./commands/CreateAuthorizerCommand");
const CreateDeploymentCommand_1 = require("./commands/CreateDeploymentCommand");
const CreateDomainNameCommand_1 = require("./commands/CreateDomainNameCommand");
const CreateIntegrationCommand_1 = require("./commands/CreateIntegrationCommand");
const CreateIntegrationResponseCommand_1 = require("./commands/CreateIntegrationResponseCommand");
const CreateModelCommand_1 = require("./commands/CreateModelCommand");
const CreateRouteCommand_1 = require("./commands/CreateRouteCommand");
const CreateRouteResponseCommand_1 = require("./commands/CreateRouteResponseCommand");
const CreateStageCommand_1 = require("./commands/CreateStageCommand");
const CreateVpcLinkCommand_1 = require("./commands/CreateVpcLinkCommand");
const DeleteAccessLogSettingsCommand_1 = require("./commands/DeleteAccessLogSettingsCommand");
const DeleteApiCommand_1 = require("./commands/DeleteApiCommand");
const DeleteApiMappingCommand_1 = require("./commands/DeleteApiMappingCommand");
const DeleteAuthorizerCommand_1 = require("./commands/DeleteAuthorizerCommand");
const DeleteCorsConfigurationCommand_1 = require("./commands/DeleteCorsConfigurationCommand");
const DeleteDeploymentCommand_1 = require("./commands/DeleteDeploymentCommand");
const DeleteDomainNameCommand_1 = require("./commands/DeleteDomainNameCommand");
const DeleteIntegrationCommand_1 = require("./commands/DeleteIntegrationCommand");
const DeleteIntegrationResponseCommand_1 = require("./commands/DeleteIntegrationResponseCommand");
const DeleteModelCommand_1 = require("./commands/DeleteModelCommand");
const DeleteRouteCommand_1 = require("./commands/DeleteRouteCommand");
const DeleteRouteRequestParameterCommand_1 = require("./commands/DeleteRouteRequestParameterCommand");
const DeleteRouteResponseCommand_1 = require("./commands/DeleteRouteResponseCommand");
const DeleteRouteSettingsCommand_1 = require("./commands/DeleteRouteSettingsCommand");
const DeleteStageCommand_1 = require("./commands/DeleteStageCommand");
const DeleteVpcLinkCommand_1 = require("./commands/DeleteVpcLinkCommand");
const ExportApiCommand_1 = require("./commands/ExportApiCommand");
const GetApiCommand_1 = require("./commands/GetApiCommand");
const GetApiMappingCommand_1 = require("./commands/GetApiMappingCommand");
const GetApiMappingsCommand_1 = require("./commands/GetApiMappingsCommand");
const GetApisCommand_1 = require("./commands/GetApisCommand");
const GetAuthorizerCommand_1 = require("./commands/GetAuthorizerCommand");
const GetAuthorizersCommand_1 = require("./commands/GetAuthorizersCommand");
const GetDeploymentCommand_1 = require("./commands/GetDeploymentCommand");
const GetDeploymentsCommand_1 = require("./commands/GetDeploymentsCommand");
const GetDomainNameCommand_1 = require("./commands/GetDomainNameCommand");
const GetDomainNamesCommand_1 = require("./commands/GetDomainNamesCommand");
const GetIntegrationCommand_1 = require("./commands/GetIntegrationCommand");
const GetIntegrationResponseCommand_1 = require("./commands/GetIntegrationResponseCommand");
const GetIntegrationResponsesCommand_1 = require("./commands/GetIntegrationResponsesCommand");
const GetIntegrationsCommand_1 = require("./commands/GetIntegrationsCommand");
const GetModelCommand_1 = require("./commands/GetModelCommand");
const GetModelTemplateCommand_1 = require("./commands/GetModelTemplateCommand");
const GetModelsCommand_1 = require("./commands/GetModelsCommand");
const GetRouteCommand_1 = require("./commands/GetRouteCommand");
const GetRouteResponseCommand_1 = require("./commands/GetRouteResponseCommand");
const GetRouteResponsesCommand_1 = require("./commands/GetRouteResponsesCommand");
const GetRoutesCommand_1 = require("./commands/GetRoutesCommand");
const GetStageCommand_1 = require("./commands/GetStageCommand");
const GetStagesCommand_1 = require("./commands/GetStagesCommand");
const GetTagsCommand_1 = require("./commands/GetTagsCommand");
const GetVpcLinkCommand_1 = require("./commands/GetVpcLinkCommand");
const GetVpcLinksCommand_1 = require("./commands/GetVpcLinksCommand");
const ImportApiCommand_1 = require("./commands/ImportApiCommand");
const ReimportApiCommand_1 = require("./commands/ReimportApiCommand");
const ResetAuthorizersCacheCommand_1 = require("./commands/ResetAuthorizersCacheCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateApiCommand_1 = require("./commands/UpdateApiCommand");
const UpdateApiMappingCommand_1 = require("./commands/UpdateApiMappingCommand");
const UpdateAuthorizerCommand_1 = require("./commands/UpdateAuthorizerCommand");
const UpdateDeploymentCommand_1 = require("./commands/UpdateDeploymentCommand");
const UpdateDomainNameCommand_1 = require("./commands/UpdateDomainNameCommand");
const UpdateIntegrationCommand_1 = require("./commands/UpdateIntegrationCommand");
const UpdateIntegrationResponseCommand_1 = require("./commands/UpdateIntegrationResponseCommand");
const UpdateModelCommand_1 = require("./commands/UpdateModelCommand");
const UpdateRouteCommand_1 = require("./commands/UpdateRouteCommand");
const UpdateRouteResponseCommand_1 = require("./commands/UpdateRouteResponseCommand");
const UpdateStageCommand_1 = require("./commands/UpdateStageCommand");
const UpdateVpcLinkCommand_1 = require("./commands/UpdateVpcLinkCommand");
/**
 * <p>Amazon API Gateway V2</p>
 */
class ApiGatewayV2 extends ApiGatewayV2Client_1.ApiGatewayV2Client {
  createApi(args, optionsOrCb, cb) {
    const command = new CreateApiCommand_1.CreateApiCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createApiMapping(args, optionsOrCb, cb) {
    const command = new CreateApiMappingCommand_1.CreateApiMappingCommand(args);
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
  createIntegration(args, optionsOrCb, cb) {
    const command = new CreateIntegrationCommand_1.CreateIntegrationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createIntegrationResponse(args, optionsOrCb, cb) {
    const command = new CreateIntegrationResponseCommand_1.CreateIntegrationResponseCommand(args);
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
  createRoute(args, optionsOrCb, cb) {
    const command = new CreateRouteCommand_1.CreateRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  createRouteResponse(args, optionsOrCb, cb) {
    const command = new CreateRouteResponseCommand_1.CreateRouteResponseCommand(args);
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
  deleteAccessLogSettings(args, optionsOrCb, cb) {
    const command = new DeleteAccessLogSettingsCommand_1.DeleteAccessLogSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteApi(args, optionsOrCb, cb) {
    const command = new DeleteApiCommand_1.DeleteApiCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteApiMapping(args, optionsOrCb, cb) {
    const command = new DeleteApiMappingCommand_1.DeleteApiMappingCommand(args);
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
  deleteCorsConfiguration(args, optionsOrCb, cb) {
    const command = new DeleteCorsConfigurationCommand_1.DeleteCorsConfigurationCommand(args);
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
  deleteRoute(args, optionsOrCb, cb) {
    const command = new DeleteRouteCommand_1.DeleteRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteRouteRequestParameter(args, optionsOrCb, cb) {
    const command = new DeleteRouteRequestParameterCommand_1.DeleteRouteRequestParameterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteRouteResponse(args, optionsOrCb, cb) {
    const command = new DeleteRouteResponseCommand_1.DeleteRouteResponseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  deleteRouteSettings(args, optionsOrCb, cb) {
    const command = new DeleteRouteSettingsCommand_1.DeleteRouteSettingsCommand(args);
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
  exportApi(args, optionsOrCb, cb) {
    const command = new ExportApiCommand_1.ExportApiCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getApi(args, optionsOrCb, cb) {
    const command = new GetApiCommand_1.GetApiCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getApiMapping(args, optionsOrCb, cb) {
    const command = new GetApiMappingCommand_1.GetApiMappingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getApiMappings(args, optionsOrCb, cb) {
    const command = new GetApiMappingsCommand_1.GetApiMappingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getApis(args, optionsOrCb, cb) {
    const command = new GetApisCommand_1.GetApisCommand(args);
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
  getIntegrationResponses(args, optionsOrCb, cb) {
    const command = new GetIntegrationResponsesCommand_1.GetIntegrationResponsesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getIntegrations(args, optionsOrCb, cb) {
    const command = new GetIntegrationsCommand_1.GetIntegrationsCommand(args);
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
  getRoute(args, optionsOrCb, cb) {
    const command = new GetRouteCommand_1.GetRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getRouteResponse(args, optionsOrCb, cb) {
    const command = new GetRouteResponseCommand_1.GetRouteResponseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getRouteResponses(args, optionsOrCb, cb) {
    const command = new GetRouteResponsesCommand_1.GetRouteResponsesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  getRoutes(args, optionsOrCb, cb) {
    const command = new GetRoutesCommand_1.GetRoutesCommand(args);
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
  importApi(args, optionsOrCb, cb) {
    const command = new ImportApiCommand_1.ImportApiCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  reimportApi(args, optionsOrCb, cb) {
    const command = new ReimportApiCommand_1.ReimportApiCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  resetAuthorizersCache(args, optionsOrCb, cb) {
    const command = new ResetAuthorizersCacheCommand_1.ResetAuthorizersCacheCommand(args);
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
  updateApi(args, optionsOrCb, cb) {
    const command = new UpdateApiCommand_1.UpdateApiCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateApiMapping(args, optionsOrCb, cb) {
    const command = new UpdateApiMappingCommand_1.UpdateApiMappingCommand(args);
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
  updateRoute(args, optionsOrCb, cb) {
    const command = new UpdateRouteCommand_1.UpdateRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
  updateRouteResponse(args, optionsOrCb, cb) {
    const command = new UpdateRouteResponseCommand_1.UpdateRouteResponseCommand(args);
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
exports.ApiGatewayV2 = ApiGatewayV2;
//# sourceMappingURL=ApiGatewayV2.js.map
