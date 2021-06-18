"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDomainNameResponse =
  exports.CreateDomainNameRequest =
  exports.MutualTlsAuthenticationInput =
  exports.CreateDeploymentResponse =
  exports.CreateDeploymentRequest =
  exports.CreateAuthorizerResponse =
  exports.CreateAuthorizerRequest =
  exports.CreateApiMappingResponse =
  exports.CreateApiMappingRequest =
  exports.TooManyRequestsException =
  exports.NotFoundException =
  exports.CreateApiResponse =
  exports.CreateApiRequest =
  exports.ConflictException =
  exports.BadRequestException =
  exports.AccessDeniedException =
  exports.VpcLink =
  exports.VpcLinkVersion =
  exports.VpcLinkStatus =
  exports.Stage =
  exports.RouteSettings =
  exports.LoggingLevel =
  exports.AccessLogSettings =
  exports.RouteResponse =
  exports.Route =
  exports.ParameterConstraints =
  exports.AuthorizationType =
  exports.Model =
  exports.IntegrationResponse =
  exports.Integration =
  exports.TlsConfig =
  exports.PassthroughBehavior =
  exports.IntegrationType =
  exports.ContentHandlingStrategy =
  exports.ConnectionType =
  exports.DomainName =
  exports.MutualTlsAuthentication =
  exports.DomainNameConfiguration =
  exports.SecurityPolicy =
  exports.EndpointType =
  exports.DomainNameStatus =
  exports.Deployment =
  exports.DeploymentStatus =
  exports.Authorizer =
  exports.JWTConfiguration =
  exports.AuthorizerType =
  exports.ApiMapping =
  exports.Api =
  exports.ProtocolType =
  exports.Cors =
    void 0;
exports.GetDeploymentsResponse =
  exports.GetDeploymentsRequest =
  exports.GetDeploymentResponse =
  exports.GetDeploymentRequest =
  exports.GetAuthorizersResponse =
  exports.GetAuthorizersRequest =
  exports.GetAuthorizerResponse =
  exports.GetAuthorizerRequest =
  exports.GetApisResponse =
  exports.GetApisRequest =
  exports.GetApiMappingsResponse =
  exports.GetApiMappingsRequest =
  exports.GetApiMappingResponse =
  exports.GetApiMappingRequest =
  exports.GetApiResponse =
  exports.GetApiRequest =
  exports.ExportApiResponse =
  exports.ExportApiRequest =
  exports.DeleteVpcLinkResponse =
  exports.DeleteVpcLinkRequest =
  exports.DeleteStageRequest =
  exports.DeleteRouteSettingsRequest =
  exports.DeleteRouteResponseRequest =
  exports.DeleteRouteRequestParameterRequest =
  exports.DeleteRouteRequest =
  exports.DeleteModelRequest =
  exports.DeleteIntegrationResponseRequest =
  exports.DeleteIntegrationRequest =
  exports.DeleteDomainNameRequest =
  exports.DeleteDeploymentRequest =
  exports.DeleteCorsConfigurationRequest =
  exports.DeleteAuthorizerRequest =
  exports.DeleteApiMappingRequest =
  exports.DeleteApiRequest =
  exports.DeleteAccessLogSettingsRequest =
  exports.CreateVpcLinkResponse =
  exports.CreateVpcLinkRequest =
  exports.CreateStageResponse =
  exports.CreateStageRequest =
  exports.CreateRouteResponseResponse =
  exports.CreateRouteResponseRequest =
  exports.CreateRouteResult =
  exports.CreateRouteRequest =
  exports.CreateModelResponse =
  exports.CreateModelRequest =
  exports.CreateIntegrationResponseResponse =
  exports.CreateIntegrationResponseRequest =
  exports.CreateIntegrationResult =
  exports.CreateIntegrationRequest =
  exports.TlsConfigInput =
    void 0;
exports.UpdateAuthorizerResponse =
  exports.UpdateAuthorizerRequest =
  exports.UpdateApiMappingResponse =
  exports.UpdateApiMappingRequest =
  exports.UpdateApiResponse =
  exports.UpdateApiRequest =
  exports.UntagResourceRequest =
  exports.TagResourceResponse =
  exports.TagResourceRequest =
  exports.ResetAuthorizersCacheRequest =
  exports.ReimportApiResponse =
  exports.ReimportApiRequest =
  exports.ImportApiResponse =
  exports.ImportApiRequest =
  exports.GetVpcLinksResponse =
  exports.GetVpcLinksRequest =
  exports.GetVpcLinkResponse =
  exports.GetVpcLinkRequest =
  exports.GetTagsResponse =
  exports.GetTagsRequest =
  exports.GetStagesResponse =
  exports.GetStagesRequest =
  exports.GetStageResponse =
  exports.GetStageRequest =
  exports.GetRoutesResponse =
  exports.GetRoutesRequest =
  exports.GetRouteResponsesResponse =
  exports.GetRouteResponsesRequest =
  exports.GetRouteResponseResponse =
  exports.GetRouteResponseRequest =
  exports.GetRouteResult =
  exports.GetRouteRequest =
  exports.GetModelTemplateResponse =
  exports.GetModelTemplateRequest =
  exports.GetModelsResponse =
  exports.GetModelsRequest =
  exports.GetModelResponse =
  exports.GetModelRequest =
  exports.GetIntegrationsResponse =
  exports.GetIntegrationsRequest =
  exports.GetIntegrationResponsesResponse =
  exports.GetIntegrationResponsesRequest =
  exports.GetIntegrationResponseResponse =
  exports.GetIntegrationResponseRequest =
  exports.GetIntegrationResult =
  exports.GetIntegrationRequest =
  exports.GetDomainNamesResponse =
  exports.GetDomainNamesRequest =
  exports.GetDomainNameResponse =
  exports.GetDomainNameRequest =
    void 0;
exports.UpdateVpcLinkResponse =
  exports.UpdateVpcLinkRequest =
  exports.UpdateStageResponse =
  exports.UpdateStageRequest =
  exports.UpdateRouteResponseResponse =
  exports.UpdateRouteResponseRequest =
  exports.UpdateRouteResult =
  exports.UpdateRouteRequest =
  exports.UpdateModelResponse =
  exports.UpdateModelRequest =
  exports.UpdateIntegrationResponseResponse =
  exports.UpdateIntegrationResponseRequest =
  exports.UpdateIntegrationResult =
  exports.UpdateIntegrationRequest =
  exports.UpdateDomainNameResponse =
  exports.UpdateDomainNameRequest =
  exports.UpdateDeploymentResponse =
  exports.UpdateDeploymentRequest =
    void 0;
var Cors;
(function (Cors) {
  /**
   * @internal
   */
  Cors.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Cors = exports.Cors || (exports.Cors = {})));
var ProtocolType;
(function (ProtocolType) {
  ProtocolType["HTTP"] = "HTTP";
  ProtocolType["WEBSOCKET"] = "WEBSOCKET";
})((ProtocolType = exports.ProtocolType || (exports.ProtocolType = {})));
var Api;
(function (Api) {
  /**
   * @internal
   */
  Api.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Api = exports.Api || (exports.Api = {})));
var ApiMapping;
(function (ApiMapping) {
  /**
   * @internal
   */
  ApiMapping.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ApiMapping = exports.ApiMapping || (exports.ApiMapping = {})));
var AuthorizerType;
(function (AuthorizerType) {
  AuthorizerType["JWT"] = "JWT";
  AuthorizerType["REQUEST"] = "REQUEST";
})((AuthorizerType = exports.AuthorizerType || (exports.AuthorizerType = {})));
var JWTConfiguration;
(function (JWTConfiguration) {
  /**
   * @internal
   */
  JWTConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((JWTConfiguration = exports.JWTConfiguration || (exports.JWTConfiguration = {})));
var Authorizer;
(function (Authorizer) {
  /**
   * @internal
   */
  Authorizer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Authorizer = exports.Authorizer || (exports.Authorizer = {})));
var DeploymentStatus;
(function (DeploymentStatus) {
  DeploymentStatus["DEPLOYED"] = "DEPLOYED";
  DeploymentStatus["FAILED"] = "FAILED";
  DeploymentStatus["PENDING"] = "PENDING";
})((DeploymentStatus = exports.DeploymentStatus || (exports.DeploymentStatus = {})));
var Deployment;
(function (Deployment) {
  /**
   * @internal
   */
  Deployment.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Deployment = exports.Deployment || (exports.Deployment = {})));
var DomainNameStatus;
(function (DomainNameStatus) {
  DomainNameStatus["AVAILABLE"] = "AVAILABLE";
  DomainNameStatus["UPDATING"] = "UPDATING";
})((DomainNameStatus = exports.DomainNameStatus || (exports.DomainNameStatus = {})));
var EndpointType;
(function (EndpointType) {
  EndpointType["EDGE"] = "EDGE";
  EndpointType["REGIONAL"] = "REGIONAL";
})((EndpointType = exports.EndpointType || (exports.EndpointType = {})));
var SecurityPolicy;
(function (SecurityPolicy) {
  SecurityPolicy["TLS_1_0"] = "TLS_1_0";
  SecurityPolicy["TLS_1_2"] = "TLS_1_2";
})((SecurityPolicy = exports.SecurityPolicy || (exports.SecurityPolicy = {})));
var DomainNameConfiguration;
(function (DomainNameConfiguration) {
  /**
   * @internal
   */
  DomainNameConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DomainNameConfiguration = exports.DomainNameConfiguration || (exports.DomainNameConfiguration = {})));
var MutualTlsAuthentication;
(function (MutualTlsAuthentication) {
  /**
   * @internal
   */
  MutualTlsAuthentication.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MutualTlsAuthentication = exports.MutualTlsAuthentication || (exports.MutualTlsAuthentication = {})));
var DomainName;
(function (DomainName) {
  /**
   * @internal
   */
  DomainName.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DomainName = exports.DomainName || (exports.DomainName = {})));
var ConnectionType;
(function (ConnectionType) {
  ConnectionType["INTERNET"] = "INTERNET";
  ConnectionType["VPC_LINK"] = "VPC_LINK";
})((ConnectionType = exports.ConnectionType || (exports.ConnectionType = {})));
var ContentHandlingStrategy;
(function (ContentHandlingStrategy) {
  ContentHandlingStrategy["CONVERT_TO_BINARY"] = "CONVERT_TO_BINARY";
  ContentHandlingStrategy["CONVERT_TO_TEXT"] = "CONVERT_TO_TEXT";
})((ContentHandlingStrategy = exports.ContentHandlingStrategy || (exports.ContentHandlingStrategy = {})));
var IntegrationType;
(function (IntegrationType) {
  IntegrationType["AWS"] = "AWS";
  IntegrationType["AWS_PROXY"] = "AWS_PROXY";
  IntegrationType["HTTP"] = "HTTP";
  IntegrationType["HTTP_PROXY"] = "HTTP_PROXY";
  IntegrationType["MOCK"] = "MOCK";
})((IntegrationType = exports.IntegrationType || (exports.IntegrationType = {})));
var PassthroughBehavior;
(function (PassthroughBehavior) {
  PassthroughBehavior["NEVER"] = "NEVER";
  PassthroughBehavior["WHEN_NO_MATCH"] = "WHEN_NO_MATCH";
  PassthroughBehavior["WHEN_NO_TEMPLATES"] = "WHEN_NO_TEMPLATES";
})((PassthroughBehavior = exports.PassthroughBehavior || (exports.PassthroughBehavior = {})));
var TlsConfig;
(function (TlsConfig) {
  /**
   * @internal
   */
  TlsConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TlsConfig = exports.TlsConfig || (exports.TlsConfig = {})));
var Integration;
(function (Integration) {
  /**
   * @internal
   */
  Integration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Integration = exports.Integration || (exports.Integration = {})));
var IntegrationResponse;
(function (IntegrationResponse) {
  /**
   * @internal
   */
  IntegrationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((IntegrationResponse = exports.IntegrationResponse || (exports.IntegrationResponse = {})));
var Model;
(function (Model) {
  /**
   * @internal
   */
  Model.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Model = exports.Model || (exports.Model = {})));
var AuthorizationType;
(function (AuthorizationType) {
  AuthorizationType["AWS_IAM"] = "AWS_IAM";
  AuthorizationType["CUSTOM"] = "CUSTOM";
  AuthorizationType["JWT"] = "JWT";
  AuthorizationType["NONE"] = "NONE";
})((AuthorizationType = exports.AuthorizationType || (exports.AuthorizationType = {})));
var ParameterConstraints;
(function (ParameterConstraints) {
  /**
   * @internal
   */
  ParameterConstraints.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ParameterConstraints = exports.ParameterConstraints || (exports.ParameterConstraints = {})));
var Route;
(function (Route) {
  /**
   * @internal
   */
  Route.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Route = exports.Route || (exports.Route = {})));
var RouteResponse;
(function (RouteResponse) {
  /**
   * @internal
   */
  RouteResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RouteResponse = exports.RouteResponse || (exports.RouteResponse = {})));
var AccessLogSettings;
(function (AccessLogSettings) {
  /**
   * @internal
   */
  AccessLogSettings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AccessLogSettings = exports.AccessLogSettings || (exports.AccessLogSettings = {})));
var LoggingLevel;
(function (LoggingLevel) {
  LoggingLevel["ERROR"] = "ERROR";
  LoggingLevel["INFO"] = "INFO";
  LoggingLevel["OFF"] = "OFF";
})((LoggingLevel = exports.LoggingLevel || (exports.LoggingLevel = {})));
var RouteSettings;
(function (RouteSettings) {
  /**
   * @internal
   */
  RouteSettings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RouteSettings = exports.RouteSettings || (exports.RouteSettings = {})));
var Stage;
(function (Stage) {
  /**
   * @internal
   */
  Stage.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Stage = exports.Stage || (exports.Stage = {})));
var VpcLinkStatus;
(function (VpcLinkStatus) {
  VpcLinkStatus["AVAILABLE"] = "AVAILABLE";
  VpcLinkStatus["DELETING"] = "DELETING";
  VpcLinkStatus["FAILED"] = "FAILED";
  VpcLinkStatus["INACTIVE"] = "INACTIVE";
  VpcLinkStatus["PENDING"] = "PENDING";
})((VpcLinkStatus = exports.VpcLinkStatus || (exports.VpcLinkStatus = {})));
var VpcLinkVersion;
(function (VpcLinkVersion) {
  VpcLinkVersion["V2"] = "V2";
})((VpcLinkVersion = exports.VpcLinkVersion || (exports.VpcLinkVersion = {})));
var VpcLink;
(function (VpcLink) {
  /**
   * @internal
   */
  VpcLink.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VpcLink = exports.VpcLink || (exports.VpcLink = {})));
var AccessDeniedException;
(function (AccessDeniedException) {
  /**
   * @internal
   */
  AccessDeniedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {})));
var BadRequestException;
(function (BadRequestException) {
  /**
   * @internal
   */
  BadRequestException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BadRequestException = exports.BadRequestException || (exports.BadRequestException = {})));
var ConflictException;
(function (ConflictException) {
  /**
   * @internal
   */
  ConflictException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConflictException = exports.ConflictException || (exports.ConflictException = {})));
var CreateApiRequest;
(function (CreateApiRequest) {
  /**
   * @internal
   */
  CreateApiRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateApiRequest = exports.CreateApiRequest || (exports.CreateApiRequest = {})));
var CreateApiResponse;
(function (CreateApiResponse) {
  /**
   * @internal
   */
  CreateApiResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateApiResponse = exports.CreateApiResponse || (exports.CreateApiResponse = {})));
var NotFoundException;
(function (NotFoundException) {
  /**
   * @internal
   */
  NotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NotFoundException = exports.NotFoundException || (exports.NotFoundException = {})));
var TooManyRequestsException;
(function (TooManyRequestsException) {
  /**
   * @internal
   */
  TooManyRequestsException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {})));
var CreateApiMappingRequest;
(function (CreateApiMappingRequest) {
  /**
   * @internal
   */
  CreateApiMappingRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateApiMappingRequest = exports.CreateApiMappingRequest || (exports.CreateApiMappingRequest = {})));
var CreateApiMappingResponse;
(function (CreateApiMappingResponse) {
  /**
   * @internal
   */
  CreateApiMappingResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateApiMappingResponse = exports.CreateApiMappingResponse || (exports.CreateApiMappingResponse = {})));
var CreateAuthorizerRequest;
(function (CreateAuthorizerRequest) {
  /**
   * @internal
   */
  CreateAuthorizerRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateAuthorizerRequest = exports.CreateAuthorizerRequest || (exports.CreateAuthorizerRequest = {})));
var CreateAuthorizerResponse;
(function (CreateAuthorizerResponse) {
  /**
   * @internal
   */
  CreateAuthorizerResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateAuthorizerResponse = exports.CreateAuthorizerResponse || (exports.CreateAuthorizerResponse = {})));
var CreateDeploymentRequest;
(function (CreateDeploymentRequest) {
  /**
   * @internal
   */
  CreateDeploymentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateDeploymentRequest = exports.CreateDeploymentRequest || (exports.CreateDeploymentRequest = {})));
var CreateDeploymentResponse;
(function (CreateDeploymentResponse) {
  /**
   * @internal
   */
  CreateDeploymentResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateDeploymentResponse = exports.CreateDeploymentResponse || (exports.CreateDeploymentResponse = {})));
var MutualTlsAuthenticationInput;
(function (MutualTlsAuthenticationInput) {
  /**
   * @internal
   */
  MutualTlsAuthenticationInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (MutualTlsAuthenticationInput = exports.MutualTlsAuthenticationInput || (exports.MutualTlsAuthenticationInput = {}))
);
var CreateDomainNameRequest;
(function (CreateDomainNameRequest) {
  /**
   * @internal
   */
  CreateDomainNameRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateDomainNameRequest = exports.CreateDomainNameRequest || (exports.CreateDomainNameRequest = {})));
var CreateDomainNameResponse;
(function (CreateDomainNameResponse) {
  /**
   * @internal
   */
  CreateDomainNameResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateDomainNameResponse = exports.CreateDomainNameResponse || (exports.CreateDomainNameResponse = {})));
var TlsConfigInput;
(function (TlsConfigInput) {
  /**
   * @internal
   */
  TlsConfigInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TlsConfigInput = exports.TlsConfigInput || (exports.TlsConfigInput = {})));
var CreateIntegrationRequest;
(function (CreateIntegrationRequest) {
  /**
   * @internal
   */
  CreateIntegrationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateIntegrationRequest = exports.CreateIntegrationRequest || (exports.CreateIntegrationRequest = {})));
var CreateIntegrationResult;
(function (CreateIntegrationResult) {
  /**
   * @internal
   */
  CreateIntegrationResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateIntegrationResult = exports.CreateIntegrationResult || (exports.CreateIntegrationResult = {})));
var CreateIntegrationResponseRequest;
(function (CreateIntegrationResponseRequest) {
  /**
   * @internal
   */
  CreateIntegrationResponseRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateIntegrationResponseRequest =
    exports.CreateIntegrationResponseRequest || (exports.CreateIntegrationResponseRequest = {}))
);
var CreateIntegrationResponseResponse;
(function (CreateIntegrationResponseResponse) {
  /**
   * @internal
   */
  CreateIntegrationResponseResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateIntegrationResponseResponse =
    exports.CreateIntegrationResponseResponse || (exports.CreateIntegrationResponseResponse = {}))
);
var CreateModelRequest;
(function (CreateModelRequest) {
  /**
   * @internal
   */
  CreateModelRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateModelRequest = exports.CreateModelRequest || (exports.CreateModelRequest = {})));
var CreateModelResponse;
(function (CreateModelResponse) {
  /**
   * @internal
   */
  CreateModelResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateModelResponse = exports.CreateModelResponse || (exports.CreateModelResponse = {})));
var CreateRouteRequest;
(function (CreateRouteRequest) {
  /**
   * @internal
   */
  CreateRouteRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateRouteRequest = exports.CreateRouteRequest || (exports.CreateRouteRequest = {})));
var CreateRouteResult;
(function (CreateRouteResult) {
  /**
   * @internal
   */
  CreateRouteResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateRouteResult = exports.CreateRouteResult || (exports.CreateRouteResult = {})));
var CreateRouteResponseRequest;
(function (CreateRouteResponseRequest) {
  /**
   * @internal
   */
  CreateRouteResponseRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateRouteResponseRequest = exports.CreateRouteResponseRequest || (exports.CreateRouteResponseRequest = {})));
var CreateRouteResponseResponse;
(function (CreateRouteResponseResponse) {
  /**
   * @internal
   */
  CreateRouteResponseResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateRouteResponseResponse = exports.CreateRouteResponseResponse || (exports.CreateRouteResponseResponse = {})));
var CreateStageRequest;
(function (CreateStageRequest) {
  /**
   * @internal
   */
  CreateStageRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateStageRequest = exports.CreateStageRequest || (exports.CreateStageRequest = {})));
var CreateStageResponse;
(function (CreateStageResponse) {
  /**
   * @internal
   */
  CreateStageResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateStageResponse = exports.CreateStageResponse || (exports.CreateStageResponse = {})));
var CreateVpcLinkRequest;
(function (CreateVpcLinkRequest) {
  /**
   * @internal
   */
  CreateVpcLinkRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateVpcLinkRequest = exports.CreateVpcLinkRequest || (exports.CreateVpcLinkRequest = {})));
var CreateVpcLinkResponse;
(function (CreateVpcLinkResponse) {
  /**
   * @internal
   */
  CreateVpcLinkResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateVpcLinkResponse = exports.CreateVpcLinkResponse || (exports.CreateVpcLinkResponse = {})));
var DeleteAccessLogSettingsRequest;
(function (DeleteAccessLogSettingsRequest) {
  /**
   * @internal
   */
  DeleteAccessLogSettingsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteAccessLogSettingsRequest =
    exports.DeleteAccessLogSettingsRequest || (exports.DeleteAccessLogSettingsRequest = {}))
);
var DeleteApiRequest;
(function (DeleteApiRequest) {
  /**
   * @internal
   */
  DeleteApiRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteApiRequest = exports.DeleteApiRequest || (exports.DeleteApiRequest = {})));
var DeleteApiMappingRequest;
(function (DeleteApiMappingRequest) {
  /**
   * @internal
   */
  DeleteApiMappingRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteApiMappingRequest = exports.DeleteApiMappingRequest || (exports.DeleteApiMappingRequest = {})));
var DeleteAuthorizerRequest;
(function (DeleteAuthorizerRequest) {
  /**
   * @internal
   */
  DeleteAuthorizerRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteAuthorizerRequest = exports.DeleteAuthorizerRequest || (exports.DeleteAuthorizerRequest = {})));
var DeleteCorsConfigurationRequest;
(function (DeleteCorsConfigurationRequest) {
  /**
   * @internal
   */
  DeleteCorsConfigurationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteCorsConfigurationRequest =
    exports.DeleteCorsConfigurationRequest || (exports.DeleteCorsConfigurationRequest = {}))
);
var DeleteDeploymentRequest;
(function (DeleteDeploymentRequest) {
  /**
   * @internal
   */
  DeleteDeploymentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteDeploymentRequest = exports.DeleteDeploymentRequest || (exports.DeleteDeploymentRequest = {})));
var DeleteDomainNameRequest;
(function (DeleteDomainNameRequest) {
  /**
   * @internal
   */
  DeleteDomainNameRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteDomainNameRequest = exports.DeleteDomainNameRequest || (exports.DeleteDomainNameRequest = {})));
var DeleteIntegrationRequest;
(function (DeleteIntegrationRequest) {
  /**
   * @internal
   */
  DeleteIntegrationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteIntegrationRequest = exports.DeleteIntegrationRequest || (exports.DeleteIntegrationRequest = {})));
var DeleteIntegrationResponseRequest;
(function (DeleteIntegrationResponseRequest) {
  /**
   * @internal
   */
  DeleteIntegrationResponseRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteIntegrationResponseRequest =
    exports.DeleteIntegrationResponseRequest || (exports.DeleteIntegrationResponseRequest = {}))
);
var DeleteModelRequest;
(function (DeleteModelRequest) {
  /**
   * @internal
   */
  DeleteModelRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteModelRequest = exports.DeleteModelRequest || (exports.DeleteModelRequest = {})));
var DeleteRouteRequest;
(function (DeleteRouteRequest) {
  /**
   * @internal
   */
  DeleteRouteRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteRouteRequest = exports.DeleteRouteRequest || (exports.DeleteRouteRequest = {})));
var DeleteRouteRequestParameterRequest;
(function (DeleteRouteRequestParameterRequest) {
  /**
   * @internal
   */
  DeleteRouteRequestParameterRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteRouteRequestParameterRequest =
    exports.DeleteRouteRequestParameterRequest || (exports.DeleteRouteRequestParameterRequest = {}))
);
var DeleteRouteResponseRequest;
(function (DeleteRouteResponseRequest) {
  /**
   * @internal
   */
  DeleteRouteResponseRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteRouteResponseRequest = exports.DeleteRouteResponseRequest || (exports.DeleteRouteResponseRequest = {})));
var DeleteRouteSettingsRequest;
(function (DeleteRouteSettingsRequest) {
  /**
   * @internal
   */
  DeleteRouteSettingsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteRouteSettingsRequest = exports.DeleteRouteSettingsRequest || (exports.DeleteRouteSettingsRequest = {})));
var DeleteStageRequest;
(function (DeleteStageRequest) {
  /**
   * @internal
   */
  DeleteStageRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteStageRequest = exports.DeleteStageRequest || (exports.DeleteStageRequest = {})));
var DeleteVpcLinkRequest;
(function (DeleteVpcLinkRequest) {
  /**
   * @internal
   */
  DeleteVpcLinkRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteVpcLinkRequest = exports.DeleteVpcLinkRequest || (exports.DeleteVpcLinkRequest = {})));
var DeleteVpcLinkResponse;
(function (DeleteVpcLinkResponse) {
  /**
   * @internal
   */
  DeleteVpcLinkResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteVpcLinkResponse = exports.DeleteVpcLinkResponse || (exports.DeleteVpcLinkResponse = {})));
var ExportApiRequest;
(function (ExportApiRequest) {
  /**
   * @internal
   */
  ExportApiRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ExportApiRequest = exports.ExportApiRequest || (exports.ExportApiRequest = {})));
var ExportApiResponse;
(function (ExportApiResponse) {
  /**
   * @internal
   */
  ExportApiResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ExportApiResponse = exports.ExportApiResponse || (exports.ExportApiResponse = {})));
var GetApiRequest;
(function (GetApiRequest) {
  /**
   * @internal
   */
  GetApiRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetApiRequest = exports.GetApiRequest || (exports.GetApiRequest = {})));
var GetApiResponse;
(function (GetApiResponse) {
  /**
   * @internal
   */
  GetApiResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetApiResponse = exports.GetApiResponse || (exports.GetApiResponse = {})));
var GetApiMappingRequest;
(function (GetApiMappingRequest) {
  /**
   * @internal
   */
  GetApiMappingRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetApiMappingRequest = exports.GetApiMappingRequest || (exports.GetApiMappingRequest = {})));
var GetApiMappingResponse;
(function (GetApiMappingResponse) {
  /**
   * @internal
   */
  GetApiMappingResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetApiMappingResponse = exports.GetApiMappingResponse || (exports.GetApiMappingResponse = {})));
var GetApiMappingsRequest;
(function (GetApiMappingsRequest) {
  /**
   * @internal
   */
  GetApiMappingsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetApiMappingsRequest = exports.GetApiMappingsRequest || (exports.GetApiMappingsRequest = {})));
var GetApiMappingsResponse;
(function (GetApiMappingsResponse) {
  /**
   * @internal
   */
  GetApiMappingsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetApiMappingsResponse = exports.GetApiMappingsResponse || (exports.GetApiMappingsResponse = {})));
var GetApisRequest;
(function (GetApisRequest) {
  /**
   * @internal
   */
  GetApisRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetApisRequest = exports.GetApisRequest || (exports.GetApisRequest = {})));
var GetApisResponse;
(function (GetApisResponse) {
  /**
   * @internal
   */
  GetApisResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetApisResponse = exports.GetApisResponse || (exports.GetApisResponse = {})));
var GetAuthorizerRequest;
(function (GetAuthorizerRequest) {
  /**
   * @internal
   */
  GetAuthorizerRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAuthorizerRequest = exports.GetAuthorizerRequest || (exports.GetAuthorizerRequest = {})));
var GetAuthorizerResponse;
(function (GetAuthorizerResponse) {
  /**
   * @internal
   */
  GetAuthorizerResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAuthorizerResponse = exports.GetAuthorizerResponse || (exports.GetAuthorizerResponse = {})));
var GetAuthorizersRequest;
(function (GetAuthorizersRequest) {
  /**
   * @internal
   */
  GetAuthorizersRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAuthorizersRequest = exports.GetAuthorizersRequest || (exports.GetAuthorizersRequest = {})));
var GetAuthorizersResponse;
(function (GetAuthorizersResponse) {
  /**
   * @internal
   */
  GetAuthorizersResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAuthorizersResponse = exports.GetAuthorizersResponse || (exports.GetAuthorizersResponse = {})));
var GetDeploymentRequest;
(function (GetDeploymentRequest) {
  /**
   * @internal
   */
  GetDeploymentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDeploymentRequest = exports.GetDeploymentRequest || (exports.GetDeploymentRequest = {})));
var GetDeploymentResponse;
(function (GetDeploymentResponse) {
  /**
   * @internal
   */
  GetDeploymentResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDeploymentResponse = exports.GetDeploymentResponse || (exports.GetDeploymentResponse = {})));
var GetDeploymentsRequest;
(function (GetDeploymentsRequest) {
  /**
   * @internal
   */
  GetDeploymentsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDeploymentsRequest = exports.GetDeploymentsRequest || (exports.GetDeploymentsRequest = {})));
var GetDeploymentsResponse;
(function (GetDeploymentsResponse) {
  /**
   * @internal
   */
  GetDeploymentsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDeploymentsResponse = exports.GetDeploymentsResponse || (exports.GetDeploymentsResponse = {})));
var GetDomainNameRequest;
(function (GetDomainNameRequest) {
  /**
   * @internal
   */
  GetDomainNameRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDomainNameRequest = exports.GetDomainNameRequest || (exports.GetDomainNameRequest = {})));
var GetDomainNameResponse;
(function (GetDomainNameResponse) {
  /**
   * @internal
   */
  GetDomainNameResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDomainNameResponse = exports.GetDomainNameResponse || (exports.GetDomainNameResponse = {})));
var GetDomainNamesRequest;
(function (GetDomainNamesRequest) {
  /**
   * @internal
   */
  GetDomainNamesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDomainNamesRequest = exports.GetDomainNamesRequest || (exports.GetDomainNamesRequest = {})));
var GetDomainNamesResponse;
(function (GetDomainNamesResponse) {
  /**
   * @internal
   */
  GetDomainNamesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDomainNamesResponse = exports.GetDomainNamesResponse || (exports.GetDomainNamesResponse = {})));
var GetIntegrationRequest;
(function (GetIntegrationRequest) {
  /**
   * @internal
   */
  GetIntegrationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetIntegrationRequest = exports.GetIntegrationRequest || (exports.GetIntegrationRequest = {})));
var GetIntegrationResult;
(function (GetIntegrationResult) {
  /**
   * @internal
   */
  GetIntegrationResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetIntegrationResult = exports.GetIntegrationResult || (exports.GetIntegrationResult = {})));
var GetIntegrationResponseRequest;
(function (GetIntegrationResponseRequest) {
  /**
   * @internal
   */
  GetIntegrationResponseRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetIntegrationResponseRequest =
    exports.GetIntegrationResponseRequest || (exports.GetIntegrationResponseRequest = {}))
);
var GetIntegrationResponseResponse;
(function (GetIntegrationResponseResponse) {
  /**
   * @internal
   */
  GetIntegrationResponseResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetIntegrationResponseResponse =
    exports.GetIntegrationResponseResponse || (exports.GetIntegrationResponseResponse = {}))
);
var GetIntegrationResponsesRequest;
(function (GetIntegrationResponsesRequest) {
  /**
   * @internal
   */
  GetIntegrationResponsesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetIntegrationResponsesRequest =
    exports.GetIntegrationResponsesRequest || (exports.GetIntegrationResponsesRequest = {}))
);
var GetIntegrationResponsesResponse;
(function (GetIntegrationResponsesResponse) {
  /**
   * @internal
   */
  GetIntegrationResponsesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetIntegrationResponsesResponse =
    exports.GetIntegrationResponsesResponse || (exports.GetIntegrationResponsesResponse = {}))
);
var GetIntegrationsRequest;
(function (GetIntegrationsRequest) {
  /**
   * @internal
   */
  GetIntegrationsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetIntegrationsRequest = exports.GetIntegrationsRequest || (exports.GetIntegrationsRequest = {})));
var GetIntegrationsResponse;
(function (GetIntegrationsResponse) {
  /**
   * @internal
   */
  GetIntegrationsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetIntegrationsResponse = exports.GetIntegrationsResponse || (exports.GetIntegrationsResponse = {})));
var GetModelRequest;
(function (GetModelRequest) {
  /**
   * @internal
   */
  GetModelRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetModelRequest = exports.GetModelRequest || (exports.GetModelRequest = {})));
var GetModelResponse;
(function (GetModelResponse) {
  /**
   * @internal
   */
  GetModelResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetModelResponse = exports.GetModelResponse || (exports.GetModelResponse = {})));
var GetModelsRequest;
(function (GetModelsRequest) {
  /**
   * @internal
   */
  GetModelsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetModelsRequest = exports.GetModelsRequest || (exports.GetModelsRequest = {})));
var GetModelsResponse;
(function (GetModelsResponse) {
  /**
   * @internal
   */
  GetModelsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetModelsResponse = exports.GetModelsResponse || (exports.GetModelsResponse = {})));
var GetModelTemplateRequest;
(function (GetModelTemplateRequest) {
  /**
   * @internal
   */
  GetModelTemplateRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetModelTemplateRequest = exports.GetModelTemplateRequest || (exports.GetModelTemplateRequest = {})));
var GetModelTemplateResponse;
(function (GetModelTemplateResponse) {
  /**
   * @internal
   */
  GetModelTemplateResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetModelTemplateResponse = exports.GetModelTemplateResponse || (exports.GetModelTemplateResponse = {})));
var GetRouteRequest;
(function (GetRouteRequest) {
  /**
   * @internal
   */
  GetRouteRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetRouteRequest = exports.GetRouteRequest || (exports.GetRouteRequest = {})));
var GetRouteResult;
(function (GetRouteResult) {
  /**
   * @internal
   */
  GetRouteResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetRouteResult = exports.GetRouteResult || (exports.GetRouteResult = {})));
var GetRouteResponseRequest;
(function (GetRouteResponseRequest) {
  /**
   * @internal
   */
  GetRouteResponseRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetRouteResponseRequest = exports.GetRouteResponseRequest || (exports.GetRouteResponseRequest = {})));
var GetRouteResponseResponse;
(function (GetRouteResponseResponse) {
  /**
   * @internal
   */
  GetRouteResponseResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetRouteResponseResponse = exports.GetRouteResponseResponse || (exports.GetRouteResponseResponse = {})));
var GetRouteResponsesRequest;
(function (GetRouteResponsesRequest) {
  /**
   * @internal
   */
  GetRouteResponsesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetRouteResponsesRequest = exports.GetRouteResponsesRequest || (exports.GetRouteResponsesRequest = {})));
var GetRouteResponsesResponse;
(function (GetRouteResponsesResponse) {
  /**
   * @internal
   */
  GetRouteResponsesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetRouteResponsesResponse = exports.GetRouteResponsesResponse || (exports.GetRouteResponsesResponse = {})));
var GetRoutesRequest;
(function (GetRoutesRequest) {
  /**
   * @internal
   */
  GetRoutesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetRoutesRequest = exports.GetRoutesRequest || (exports.GetRoutesRequest = {})));
var GetRoutesResponse;
(function (GetRoutesResponse) {
  /**
   * @internal
   */
  GetRoutesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetRoutesResponse = exports.GetRoutesResponse || (exports.GetRoutesResponse = {})));
var GetStageRequest;
(function (GetStageRequest) {
  /**
   * @internal
   */
  GetStageRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetStageRequest = exports.GetStageRequest || (exports.GetStageRequest = {})));
var GetStageResponse;
(function (GetStageResponse) {
  /**
   * @internal
   */
  GetStageResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetStageResponse = exports.GetStageResponse || (exports.GetStageResponse = {})));
var GetStagesRequest;
(function (GetStagesRequest) {
  /**
   * @internal
   */
  GetStagesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetStagesRequest = exports.GetStagesRequest || (exports.GetStagesRequest = {})));
var GetStagesResponse;
(function (GetStagesResponse) {
  /**
   * @internal
   */
  GetStagesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetStagesResponse = exports.GetStagesResponse || (exports.GetStagesResponse = {})));
var GetTagsRequest;
(function (GetTagsRequest) {
  /**
   * @internal
   */
  GetTagsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetTagsRequest = exports.GetTagsRequest || (exports.GetTagsRequest = {})));
var GetTagsResponse;
(function (GetTagsResponse) {
  /**
   * @internal
   */
  GetTagsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetTagsResponse = exports.GetTagsResponse || (exports.GetTagsResponse = {})));
var GetVpcLinkRequest;
(function (GetVpcLinkRequest) {
  /**
   * @internal
   */
  GetVpcLinkRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetVpcLinkRequest = exports.GetVpcLinkRequest || (exports.GetVpcLinkRequest = {})));
var GetVpcLinkResponse;
(function (GetVpcLinkResponse) {
  /**
   * @internal
   */
  GetVpcLinkResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetVpcLinkResponse = exports.GetVpcLinkResponse || (exports.GetVpcLinkResponse = {})));
var GetVpcLinksRequest;
(function (GetVpcLinksRequest) {
  /**
   * @internal
   */
  GetVpcLinksRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetVpcLinksRequest = exports.GetVpcLinksRequest || (exports.GetVpcLinksRequest = {})));
var GetVpcLinksResponse;
(function (GetVpcLinksResponse) {
  /**
   * @internal
   */
  GetVpcLinksResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetVpcLinksResponse = exports.GetVpcLinksResponse || (exports.GetVpcLinksResponse = {})));
var ImportApiRequest;
(function (ImportApiRequest) {
  /**
   * @internal
   */
  ImportApiRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ImportApiRequest = exports.ImportApiRequest || (exports.ImportApiRequest = {})));
var ImportApiResponse;
(function (ImportApiResponse) {
  /**
   * @internal
   */
  ImportApiResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ImportApiResponse = exports.ImportApiResponse || (exports.ImportApiResponse = {})));
var ReimportApiRequest;
(function (ReimportApiRequest) {
  /**
   * @internal
   */
  ReimportApiRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ReimportApiRequest = exports.ReimportApiRequest || (exports.ReimportApiRequest = {})));
var ReimportApiResponse;
(function (ReimportApiResponse) {
  /**
   * @internal
   */
  ReimportApiResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ReimportApiResponse = exports.ReimportApiResponse || (exports.ReimportApiResponse = {})));
var ResetAuthorizersCacheRequest;
(function (ResetAuthorizersCacheRequest) {
  /**
   * @internal
   */
  ResetAuthorizersCacheRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ResetAuthorizersCacheRequest = exports.ResetAuthorizersCacheRequest || (exports.ResetAuthorizersCacheRequest = {}))
);
var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {})));
var TagResourceResponse;
(function (TagResourceResponse) {
  /**
   * @internal
   */
  TagResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {})));
var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {})));
var UpdateApiRequest;
(function (UpdateApiRequest) {
  /**
   * @internal
   */
  UpdateApiRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateApiRequest = exports.UpdateApiRequest || (exports.UpdateApiRequest = {})));
var UpdateApiResponse;
(function (UpdateApiResponse) {
  /**
   * @internal
   */
  UpdateApiResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateApiResponse = exports.UpdateApiResponse || (exports.UpdateApiResponse = {})));
var UpdateApiMappingRequest;
(function (UpdateApiMappingRequest) {
  /**
   * @internal
   */
  UpdateApiMappingRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateApiMappingRequest = exports.UpdateApiMappingRequest || (exports.UpdateApiMappingRequest = {})));
var UpdateApiMappingResponse;
(function (UpdateApiMappingResponse) {
  /**
   * @internal
   */
  UpdateApiMappingResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateApiMappingResponse = exports.UpdateApiMappingResponse || (exports.UpdateApiMappingResponse = {})));
var UpdateAuthorizerRequest;
(function (UpdateAuthorizerRequest) {
  /**
   * @internal
   */
  UpdateAuthorizerRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateAuthorizerRequest = exports.UpdateAuthorizerRequest || (exports.UpdateAuthorizerRequest = {})));
var UpdateAuthorizerResponse;
(function (UpdateAuthorizerResponse) {
  /**
   * @internal
   */
  UpdateAuthorizerResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateAuthorizerResponse = exports.UpdateAuthorizerResponse || (exports.UpdateAuthorizerResponse = {})));
var UpdateDeploymentRequest;
(function (UpdateDeploymentRequest) {
  /**
   * @internal
   */
  UpdateDeploymentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateDeploymentRequest = exports.UpdateDeploymentRequest || (exports.UpdateDeploymentRequest = {})));
var UpdateDeploymentResponse;
(function (UpdateDeploymentResponse) {
  /**
   * @internal
   */
  UpdateDeploymentResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateDeploymentResponse = exports.UpdateDeploymentResponse || (exports.UpdateDeploymentResponse = {})));
var UpdateDomainNameRequest;
(function (UpdateDomainNameRequest) {
  /**
   * @internal
   */
  UpdateDomainNameRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateDomainNameRequest = exports.UpdateDomainNameRequest || (exports.UpdateDomainNameRequest = {})));
var UpdateDomainNameResponse;
(function (UpdateDomainNameResponse) {
  /**
   * @internal
   */
  UpdateDomainNameResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateDomainNameResponse = exports.UpdateDomainNameResponse || (exports.UpdateDomainNameResponse = {})));
var UpdateIntegrationRequest;
(function (UpdateIntegrationRequest) {
  /**
   * @internal
   */
  UpdateIntegrationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateIntegrationRequest = exports.UpdateIntegrationRequest || (exports.UpdateIntegrationRequest = {})));
var UpdateIntegrationResult;
(function (UpdateIntegrationResult) {
  /**
   * @internal
   */
  UpdateIntegrationResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateIntegrationResult = exports.UpdateIntegrationResult || (exports.UpdateIntegrationResult = {})));
var UpdateIntegrationResponseRequest;
(function (UpdateIntegrationResponseRequest) {
  /**
   * @internal
   */
  UpdateIntegrationResponseRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateIntegrationResponseRequest =
    exports.UpdateIntegrationResponseRequest || (exports.UpdateIntegrationResponseRequest = {}))
);
var UpdateIntegrationResponseResponse;
(function (UpdateIntegrationResponseResponse) {
  /**
   * @internal
   */
  UpdateIntegrationResponseResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateIntegrationResponseResponse =
    exports.UpdateIntegrationResponseResponse || (exports.UpdateIntegrationResponseResponse = {}))
);
var UpdateModelRequest;
(function (UpdateModelRequest) {
  /**
   * @internal
   */
  UpdateModelRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateModelRequest = exports.UpdateModelRequest || (exports.UpdateModelRequest = {})));
var UpdateModelResponse;
(function (UpdateModelResponse) {
  /**
   * @internal
   */
  UpdateModelResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateModelResponse = exports.UpdateModelResponse || (exports.UpdateModelResponse = {})));
var UpdateRouteRequest;
(function (UpdateRouteRequest) {
  /**
   * @internal
   */
  UpdateRouteRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateRouteRequest = exports.UpdateRouteRequest || (exports.UpdateRouteRequest = {})));
var UpdateRouteResult;
(function (UpdateRouteResult) {
  /**
   * @internal
   */
  UpdateRouteResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateRouteResult = exports.UpdateRouteResult || (exports.UpdateRouteResult = {})));
var UpdateRouteResponseRequest;
(function (UpdateRouteResponseRequest) {
  /**
   * @internal
   */
  UpdateRouteResponseRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateRouteResponseRequest = exports.UpdateRouteResponseRequest || (exports.UpdateRouteResponseRequest = {})));
var UpdateRouteResponseResponse;
(function (UpdateRouteResponseResponse) {
  /**
   * @internal
   */
  UpdateRouteResponseResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateRouteResponseResponse = exports.UpdateRouteResponseResponse || (exports.UpdateRouteResponseResponse = {})));
var UpdateStageRequest;
(function (UpdateStageRequest) {
  /**
   * @internal
   */
  UpdateStageRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateStageRequest = exports.UpdateStageRequest || (exports.UpdateStageRequest = {})));
var UpdateStageResponse;
(function (UpdateStageResponse) {
  /**
   * @internal
   */
  UpdateStageResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateStageResponse = exports.UpdateStageResponse || (exports.UpdateStageResponse = {})));
var UpdateVpcLinkRequest;
(function (UpdateVpcLinkRequest) {
  /**
   * @internal
   */
  UpdateVpcLinkRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateVpcLinkRequest = exports.UpdateVpcLinkRequest || (exports.UpdateVpcLinkRequest = {})));
var UpdateVpcLinkResponse;
(function (UpdateVpcLinkResponse) {
  /**
   * @internal
   */
  UpdateVpcLinkResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateVpcLinkResponse = exports.UpdateVpcLinkResponse || (exports.UpdateVpcLinkResponse = {})));
//# sourceMappingURL=models_0.js.map
