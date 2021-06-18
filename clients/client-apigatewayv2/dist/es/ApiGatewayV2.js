import { __extends } from "tslib";
import { ApiGatewayV2Client } from "./ApiGatewayV2Client";
import { CreateApiCommand } from "./commands/CreateApiCommand";
import { CreateApiMappingCommand } from "./commands/CreateApiMappingCommand";
import { CreateAuthorizerCommand } from "./commands/CreateAuthorizerCommand";
import { CreateDeploymentCommand } from "./commands/CreateDeploymentCommand";
import { CreateDomainNameCommand } from "./commands/CreateDomainNameCommand";
import { CreateIntegrationCommand } from "./commands/CreateIntegrationCommand";
import { CreateIntegrationResponseCommand } from "./commands/CreateIntegrationResponseCommand";
import { CreateModelCommand } from "./commands/CreateModelCommand";
import { CreateRouteCommand } from "./commands/CreateRouteCommand";
import { CreateRouteResponseCommand } from "./commands/CreateRouteResponseCommand";
import { CreateStageCommand } from "./commands/CreateStageCommand";
import { CreateVpcLinkCommand } from "./commands/CreateVpcLinkCommand";
import { DeleteAccessLogSettingsCommand } from "./commands/DeleteAccessLogSettingsCommand";
import { DeleteApiCommand } from "./commands/DeleteApiCommand";
import { DeleteApiMappingCommand } from "./commands/DeleteApiMappingCommand";
import { DeleteAuthorizerCommand } from "./commands/DeleteAuthorizerCommand";
import { DeleteCorsConfigurationCommand } from "./commands/DeleteCorsConfigurationCommand";
import { DeleteDeploymentCommand } from "./commands/DeleteDeploymentCommand";
import { DeleteDomainNameCommand } from "./commands/DeleteDomainNameCommand";
import { DeleteIntegrationCommand } from "./commands/DeleteIntegrationCommand";
import { DeleteIntegrationResponseCommand } from "./commands/DeleteIntegrationResponseCommand";
import { DeleteModelCommand } from "./commands/DeleteModelCommand";
import { DeleteRouteCommand } from "./commands/DeleteRouteCommand";
import { DeleteRouteRequestParameterCommand } from "./commands/DeleteRouteRequestParameterCommand";
import { DeleteRouteResponseCommand } from "./commands/DeleteRouteResponseCommand";
import { DeleteRouteSettingsCommand } from "./commands/DeleteRouteSettingsCommand";
import { DeleteStageCommand } from "./commands/DeleteStageCommand";
import { DeleteVpcLinkCommand } from "./commands/DeleteVpcLinkCommand";
import { ExportApiCommand } from "./commands/ExportApiCommand";
import { GetApiCommand } from "./commands/GetApiCommand";
import { GetApiMappingCommand } from "./commands/GetApiMappingCommand";
import { GetApiMappingsCommand } from "./commands/GetApiMappingsCommand";
import { GetApisCommand } from "./commands/GetApisCommand";
import { GetAuthorizerCommand } from "./commands/GetAuthorizerCommand";
import { GetAuthorizersCommand } from "./commands/GetAuthorizersCommand";
import { GetDeploymentCommand } from "./commands/GetDeploymentCommand";
import { GetDeploymentsCommand } from "./commands/GetDeploymentsCommand";
import { GetDomainNameCommand } from "./commands/GetDomainNameCommand";
import { GetDomainNamesCommand } from "./commands/GetDomainNamesCommand";
import { GetIntegrationCommand } from "./commands/GetIntegrationCommand";
import { GetIntegrationResponseCommand } from "./commands/GetIntegrationResponseCommand";
import { GetIntegrationResponsesCommand } from "./commands/GetIntegrationResponsesCommand";
import { GetIntegrationsCommand } from "./commands/GetIntegrationsCommand";
import { GetModelCommand } from "./commands/GetModelCommand";
import { GetModelTemplateCommand } from "./commands/GetModelTemplateCommand";
import { GetModelsCommand } from "./commands/GetModelsCommand";
import { GetRouteCommand } from "./commands/GetRouteCommand";
import { GetRouteResponseCommand } from "./commands/GetRouteResponseCommand";
import { GetRouteResponsesCommand } from "./commands/GetRouteResponsesCommand";
import { GetRoutesCommand } from "./commands/GetRoutesCommand";
import { GetStageCommand } from "./commands/GetStageCommand";
import { GetStagesCommand } from "./commands/GetStagesCommand";
import { GetTagsCommand } from "./commands/GetTagsCommand";
import { GetVpcLinkCommand } from "./commands/GetVpcLinkCommand";
import { GetVpcLinksCommand } from "./commands/GetVpcLinksCommand";
import { ImportApiCommand } from "./commands/ImportApiCommand";
import { ReimportApiCommand } from "./commands/ReimportApiCommand";
import { ResetAuthorizersCacheCommand } from "./commands/ResetAuthorizersCacheCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateApiCommand } from "./commands/UpdateApiCommand";
import { UpdateApiMappingCommand } from "./commands/UpdateApiMappingCommand";
import { UpdateAuthorizerCommand } from "./commands/UpdateAuthorizerCommand";
import { UpdateDeploymentCommand } from "./commands/UpdateDeploymentCommand";
import { UpdateDomainNameCommand } from "./commands/UpdateDomainNameCommand";
import { UpdateIntegrationCommand } from "./commands/UpdateIntegrationCommand";
import { UpdateIntegrationResponseCommand } from "./commands/UpdateIntegrationResponseCommand";
import { UpdateModelCommand } from "./commands/UpdateModelCommand";
import { UpdateRouteCommand } from "./commands/UpdateRouteCommand";
import { UpdateRouteResponseCommand } from "./commands/UpdateRouteResponseCommand";
import { UpdateStageCommand } from "./commands/UpdateStageCommand";
import { UpdateVpcLinkCommand } from "./commands/UpdateVpcLinkCommand";
/**
 * <p>Amazon API Gateway V2</p>
 */
var ApiGatewayV2 = /** @class */ (function (_super) {
  __extends(ApiGatewayV2, _super);
  function ApiGatewayV2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ApiGatewayV2.prototype.createApi = function (args, optionsOrCb, cb) {
    var command = new CreateApiCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.createApiMapping = function (args, optionsOrCb, cb) {
    var command = new CreateApiMappingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.createAuthorizer = function (args, optionsOrCb, cb) {
    var command = new CreateAuthorizerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.createDeployment = function (args, optionsOrCb, cb) {
    var command = new CreateDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.createDomainName = function (args, optionsOrCb, cb) {
    var command = new CreateDomainNameCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.createIntegration = function (args, optionsOrCb, cb) {
    var command = new CreateIntegrationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.createIntegrationResponse = function (args, optionsOrCb, cb) {
    var command = new CreateIntegrationResponseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.createModel = function (args, optionsOrCb, cb) {
    var command = new CreateModelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.createRoute = function (args, optionsOrCb, cb) {
    var command = new CreateRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.createRouteResponse = function (args, optionsOrCb, cb) {
    var command = new CreateRouteResponseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.createStage = function (args, optionsOrCb, cb) {
    var command = new CreateStageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.createVpcLink = function (args, optionsOrCb, cb) {
    var command = new CreateVpcLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.deleteAccessLogSettings = function (args, optionsOrCb, cb) {
    var command = new DeleteAccessLogSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.deleteApi = function (args, optionsOrCb, cb) {
    var command = new DeleteApiCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.deleteApiMapping = function (args, optionsOrCb, cb) {
    var command = new DeleteApiMappingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.deleteAuthorizer = function (args, optionsOrCb, cb) {
    var command = new DeleteAuthorizerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.deleteCorsConfiguration = function (args, optionsOrCb, cb) {
    var command = new DeleteCorsConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.deleteDeployment = function (args, optionsOrCb, cb) {
    var command = new DeleteDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.deleteDomainName = function (args, optionsOrCb, cb) {
    var command = new DeleteDomainNameCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.deleteIntegration = function (args, optionsOrCb, cb) {
    var command = new DeleteIntegrationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.deleteIntegrationResponse = function (args, optionsOrCb, cb) {
    var command = new DeleteIntegrationResponseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.deleteModel = function (args, optionsOrCb, cb) {
    var command = new DeleteModelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.deleteRoute = function (args, optionsOrCb, cb) {
    var command = new DeleteRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.deleteRouteRequestParameter = function (args, optionsOrCb, cb) {
    var command = new DeleteRouteRequestParameterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.deleteRouteResponse = function (args, optionsOrCb, cb) {
    var command = new DeleteRouteResponseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.deleteRouteSettings = function (args, optionsOrCb, cb) {
    var command = new DeleteRouteSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.deleteStage = function (args, optionsOrCb, cb) {
    var command = new DeleteStageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.deleteVpcLink = function (args, optionsOrCb, cb) {
    var command = new DeleteVpcLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.exportApi = function (args, optionsOrCb, cb) {
    var command = new ExportApiCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getApi = function (args, optionsOrCb, cb) {
    var command = new GetApiCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getApiMapping = function (args, optionsOrCb, cb) {
    var command = new GetApiMappingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getApiMappings = function (args, optionsOrCb, cb) {
    var command = new GetApiMappingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getApis = function (args, optionsOrCb, cb) {
    var command = new GetApisCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getAuthorizer = function (args, optionsOrCb, cb) {
    var command = new GetAuthorizerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getAuthorizers = function (args, optionsOrCb, cb) {
    var command = new GetAuthorizersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getDeployment = function (args, optionsOrCb, cb) {
    var command = new GetDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getDeployments = function (args, optionsOrCb, cb) {
    var command = new GetDeploymentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getDomainName = function (args, optionsOrCb, cb) {
    var command = new GetDomainNameCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getDomainNames = function (args, optionsOrCb, cb) {
    var command = new GetDomainNamesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getIntegration = function (args, optionsOrCb, cb) {
    var command = new GetIntegrationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getIntegrationResponse = function (args, optionsOrCb, cb) {
    var command = new GetIntegrationResponseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getIntegrationResponses = function (args, optionsOrCb, cb) {
    var command = new GetIntegrationResponsesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getIntegrations = function (args, optionsOrCb, cb) {
    var command = new GetIntegrationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getModel = function (args, optionsOrCb, cb) {
    var command = new GetModelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getModels = function (args, optionsOrCb, cb) {
    var command = new GetModelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getModelTemplate = function (args, optionsOrCb, cb) {
    var command = new GetModelTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getRoute = function (args, optionsOrCb, cb) {
    var command = new GetRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getRouteResponse = function (args, optionsOrCb, cb) {
    var command = new GetRouteResponseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getRouteResponses = function (args, optionsOrCb, cb) {
    var command = new GetRouteResponsesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getRoutes = function (args, optionsOrCb, cb) {
    var command = new GetRoutesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getStage = function (args, optionsOrCb, cb) {
    var command = new GetStageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getStages = function (args, optionsOrCb, cb) {
    var command = new GetStagesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getTags = function (args, optionsOrCb, cb) {
    var command = new GetTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getVpcLink = function (args, optionsOrCb, cb) {
    var command = new GetVpcLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.getVpcLinks = function (args, optionsOrCb, cb) {
    var command = new GetVpcLinksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.importApi = function (args, optionsOrCb, cb) {
    var command = new ImportApiCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.reimportApi = function (args, optionsOrCb, cb) {
    var command = new ReimportApiCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.resetAuthorizersCache = function (args, optionsOrCb, cb) {
    var command = new ResetAuthorizersCacheCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.tagResource = function (args, optionsOrCb, cb) {
    var command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.untagResource = function (args, optionsOrCb, cb) {
    var command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.updateApi = function (args, optionsOrCb, cb) {
    var command = new UpdateApiCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.updateApiMapping = function (args, optionsOrCb, cb) {
    var command = new UpdateApiMappingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.updateAuthorizer = function (args, optionsOrCb, cb) {
    var command = new UpdateAuthorizerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.updateDeployment = function (args, optionsOrCb, cb) {
    var command = new UpdateDeploymentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.updateDomainName = function (args, optionsOrCb, cb) {
    var command = new UpdateDomainNameCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.updateIntegration = function (args, optionsOrCb, cb) {
    var command = new UpdateIntegrationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.updateIntegrationResponse = function (args, optionsOrCb, cb) {
    var command = new UpdateIntegrationResponseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.updateModel = function (args, optionsOrCb, cb) {
    var command = new UpdateModelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.updateRoute = function (args, optionsOrCb, cb) {
    var command = new UpdateRouteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.updateRouteResponse = function (args, optionsOrCb, cb) {
    var command = new UpdateRouteResponseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.updateStage = function (args, optionsOrCb, cb) {
    var command = new UpdateStageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  ApiGatewayV2.prototype.updateVpcLink = function (args, optionsOrCb, cb) {
    var command = new UpdateVpcLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error("Expect http options but get " + typeof optionsOrCb);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  };
  return ApiGatewayV2;
})(ApiGatewayV2Client);
export { ApiGatewayV2 };
//# sourceMappingURL=ApiGatewayV2.js.map
