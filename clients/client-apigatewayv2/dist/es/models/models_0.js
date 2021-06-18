import { __assign } from "tslib";
export var Cors;
(function (Cors) {
  /**
   * @internal
   */
  Cors.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Cors || (Cors = {}));
export var ProtocolType;
(function (ProtocolType) {
  ProtocolType["HTTP"] = "HTTP";
  ProtocolType["WEBSOCKET"] = "WEBSOCKET";
})(ProtocolType || (ProtocolType = {}));
export var Api;
(function (Api) {
  /**
   * @internal
   */
  Api.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Api || (Api = {}));
export var ApiMapping;
(function (ApiMapping) {
  /**
   * @internal
   */
  ApiMapping.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ApiMapping || (ApiMapping = {}));
export var AuthorizerType;
(function (AuthorizerType) {
  AuthorizerType["JWT"] = "JWT";
  AuthorizerType["REQUEST"] = "REQUEST";
})(AuthorizerType || (AuthorizerType = {}));
export var JWTConfiguration;
(function (JWTConfiguration) {
  /**
   * @internal
   */
  JWTConfiguration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(JWTConfiguration || (JWTConfiguration = {}));
export var Authorizer;
(function (Authorizer) {
  /**
   * @internal
   */
  Authorizer.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Authorizer || (Authorizer = {}));
export var DeploymentStatus;
(function (DeploymentStatus) {
  DeploymentStatus["DEPLOYED"] = "DEPLOYED";
  DeploymentStatus["FAILED"] = "FAILED";
  DeploymentStatus["PENDING"] = "PENDING";
})(DeploymentStatus || (DeploymentStatus = {}));
export var Deployment;
(function (Deployment) {
  /**
   * @internal
   */
  Deployment.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Deployment || (Deployment = {}));
export var DomainNameStatus;
(function (DomainNameStatus) {
  DomainNameStatus["AVAILABLE"] = "AVAILABLE";
  DomainNameStatus["UPDATING"] = "UPDATING";
})(DomainNameStatus || (DomainNameStatus = {}));
export var EndpointType;
(function (EndpointType) {
  EndpointType["EDGE"] = "EDGE";
  EndpointType["REGIONAL"] = "REGIONAL";
})(EndpointType || (EndpointType = {}));
export var SecurityPolicy;
(function (SecurityPolicy) {
  SecurityPolicy["TLS_1_0"] = "TLS_1_0";
  SecurityPolicy["TLS_1_2"] = "TLS_1_2";
})(SecurityPolicy || (SecurityPolicy = {}));
export var DomainNameConfiguration;
(function (DomainNameConfiguration) {
  /**
   * @internal
   */
  DomainNameConfiguration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DomainNameConfiguration || (DomainNameConfiguration = {}));
export var MutualTlsAuthentication;
(function (MutualTlsAuthentication) {
  /**
   * @internal
   */
  MutualTlsAuthentication.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(MutualTlsAuthentication || (MutualTlsAuthentication = {}));
export var DomainName;
(function (DomainName) {
  /**
   * @internal
   */
  DomainName.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DomainName || (DomainName = {}));
export var ConnectionType;
(function (ConnectionType) {
  ConnectionType["INTERNET"] = "INTERNET";
  ConnectionType["VPC_LINK"] = "VPC_LINK";
})(ConnectionType || (ConnectionType = {}));
export var ContentHandlingStrategy;
(function (ContentHandlingStrategy) {
  ContentHandlingStrategy["CONVERT_TO_BINARY"] = "CONVERT_TO_BINARY";
  ContentHandlingStrategy["CONVERT_TO_TEXT"] = "CONVERT_TO_TEXT";
})(ContentHandlingStrategy || (ContentHandlingStrategy = {}));
export var IntegrationType;
(function (IntegrationType) {
  IntegrationType["AWS"] = "AWS";
  IntegrationType["AWS_PROXY"] = "AWS_PROXY";
  IntegrationType["HTTP"] = "HTTP";
  IntegrationType["HTTP_PROXY"] = "HTTP_PROXY";
  IntegrationType["MOCK"] = "MOCK";
})(IntegrationType || (IntegrationType = {}));
export var PassthroughBehavior;
(function (PassthroughBehavior) {
  PassthroughBehavior["NEVER"] = "NEVER";
  PassthroughBehavior["WHEN_NO_MATCH"] = "WHEN_NO_MATCH";
  PassthroughBehavior["WHEN_NO_TEMPLATES"] = "WHEN_NO_TEMPLATES";
})(PassthroughBehavior || (PassthroughBehavior = {}));
export var TlsConfig;
(function (TlsConfig) {
  /**
   * @internal
   */
  TlsConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TlsConfig || (TlsConfig = {}));
export var Integration;
(function (Integration) {
  /**
   * @internal
   */
  Integration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Integration || (Integration = {}));
export var IntegrationResponse;
(function (IntegrationResponse) {
  /**
   * @internal
   */
  IntegrationResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(IntegrationResponse || (IntegrationResponse = {}));
export var Model;
(function (Model) {
  /**
   * @internal
   */
  Model.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Model || (Model = {}));
export var AuthorizationType;
(function (AuthorizationType) {
  AuthorizationType["AWS_IAM"] = "AWS_IAM";
  AuthorizationType["CUSTOM"] = "CUSTOM";
  AuthorizationType["JWT"] = "JWT";
  AuthorizationType["NONE"] = "NONE";
})(AuthorizationType || (AuthorizationType = {}));
export var ParameterConstraints;
(function (ParameterConstraints) {
  /**
   * @internal
   */
  ParameterConstraints.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ParameterConstraints || (ParameterConstraints = {}));
export var Route;
(function (Route) {
  /**
   * @internal
   */
  Route.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Route || (Route = {}));
export var RouteResponse;
(function (RouteResponse) {
  /**
   * @internal
   */
  RouteResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RouteResponse || (RouteResponse = {}));
export var AccessLogSettings;
(function (AccessLogSettings) {
  /**
   * @internal
   */
  AccessLogSettings.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AccessLogSettings || (AccessLogSettings = {}));
export var LoggingLevel;
(function (LoggingLevel) {
  LoggingLevel["ERROR"] = "ERROR";
  LoggingLevel["INFO"] = "INFO";
  LoggingLevel["OFF"] = "OFF";
})(LoggingLevel || (LoggingLevel = {}));
export var RouteSettings;
(function (RouteSettings) {
  /**
   * @internal
   */
  RouteSettings.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RouteSettings || (RouteSettings = {}));
export var Stage;
(function (Stage) {
  /**
   * @internal
   */
  Stage.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Stage || (Stage = {}));
export var VpcLinkStatus;
(function (VpcLinkStatus) {
  VpcLinkStatus["AVAILABLE"] = "AVAILABLE";
  VpcLinkStatus["DELETING"] = "DELETING";
  VpcLinkStatus["FAILED"] = "FAILED";
  VpcLinkStatus["INACTIVE"] = "INACTIVE";
  VpcLinkStatus["PENDING"] = "PENDING";
})(VpcLinkStatus || (VpcLinkStatus = {}));
export var VpcLinkVersion;
(function (VpcLinkVersion) {
  VpcLinkVersion["V2"] = "V2";
})(VpcLinkVersion || (VpcLinkVersion = {}));
export var VpcLink;
(function (VpcLink) {
  /**
   * @internal
   */
  VpcLink.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(VpcLink || (VpcLink = {}));
export var AccessDeniedException;
(function (AccessDeniedException) {
  /**
   * @internal
   */
  AccessDeniedException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AccessDeniedException || (AccessDeniedException = {}));
export var BadRequestException;
(function (BadRequestException) {
  /**
   * @internal
   */
  BadRequestException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BadRequestException || (BadRequestException = {}));
export var ConflictException;
(function (ConflictException) {
  /**
   * @internal
   */
  ConflictException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConflictException || (ConflictException = {}));
export var CreateApiRequest;
(function (CreateApiRequest) {
  /**
   * @internal
   */
  CreateApiRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateApiRequest || (CreateApiRequest = {}));
export var CreateApiResponse;
(function (CreateApiResponse) {
  /**
   * @internal
   */
  CreateApiResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateApiResponse || (CreateApiResponse = {}));
export var NotFoundException;
(function (NotFoundException) {
  /**
   * @internal
   */
  NotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(NotFoundException || (NotFoundException = {}));
export var TooManyRequestsException;
(function (TooManyRequestsException) {
  /**
   * @internal
   */
  TooManyRequestsException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TooManyRequestsException || (TooManyRequestsException = {}));
export var CreateApiMappingRequest;
(function (CreateApiMappingRequest) {
  /**
   * @internal
   */
  CreateApiMappingRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateApiMappingRequest || (CreateApiMappingRequest = {}));
export var CreateApiMappingResponse;
(function (CreateApiMappingResponse) {
  /**
   * @internal
   */
  CreateApiMappingResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateApiMappingResponse || (CreateApiMappingResponse = {}));
export var CreateAuthorizerRequest;
(function (CreateAuthorizerRequest) {
  /**
   * @internal
   */
  CreateAuthorizerRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateAuthorizerRequest || (CreateAuthorizerRequest = {}));
export var CreateAuthorizerResponse;
(function (CreateAuthorizerResponse) {
  /**
   * @internal
   */
  CreateAuthorizerResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateAuthorizerResponse || (CreateAuthorizerResponse = {}));
export var CreateDeploymentRequest;
(function (CreateDeploymentRequest) {
  /**
   * @internal
   */
  CreateDeploymentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateDeploymentRequest || (CreateDeploymentRequest = {}));
export var CreateDeploymentResponse;
(function (CreateDeploymentResponse) {
  /**
   * @internal
   */
  CreateDeploymentResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateDeploymentResponse || (CreateDeploymentResponse = {}));
export var MutualTlsAuthenticationInput;
(function (MutualTlsAuthenticationInput) {
  /**
   * @internal
   */
  MutualTlsAuthenticationInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(MutualTlsAuthenticationInput || (MutualTlsAuthenticationInput = {}));
export var CreateDomainNameRequest;
(function (CreateDomainNameRequest) {
  /**
   * @internal
   */
  CreateDomainNameRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateDomainNameRequest || (CreateDomainNameRequest = {}));
export var CreateDomainNameResponse;
(function (CreateDomainNameResponse) {
  /**
   * @internal
   */
  CreateDomainNameResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateDomainNameResponse || (CreateDomainNameResponse = {}));
export var TlsConfigInput;
(function (TlsConfigInput) {
  /**
   * @internal
   */
  TlsConfigInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TlsConfigInput || (TlsConfigInput = {}));
export var CreateIntegrationRequest;
(function (CreateIntegrationRequest) {
  /**
   * @internal
   */
  CreateIntegrationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateIntegrationRequest || (CreateIntegrationRequest = {}));
export var CreateIntegrationResult;
(function (CreateIntegrationResult) {
  /**
   * @internal
   */
  CreateIntegrationResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateIntegrationResult || (CreateIntegrationResult = {}));
export var CreateIntegrationResponseRequest;
(function (CreateIntegrationResponseRequest) {
  /**
   * @internal
   */
  CreateIntegrationResponseRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateIntegrationResponseRequest || (CreateIntegrationResponseRequest = {}));
export var CreateIntegrationResponseResponse;
(function (CreateIntegrationResponseResponse) {
  /**
   * @internal
   */
  CreateIntegrationResponseResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateIntegrationResponseResponse || (CreateIntegrationResponseResponse = {}));
export var CreateModelRequest;
(function (CreateModelRequest) {
  /**
   * @internal
   */
  CreateModelRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateModelRequest || (CreateModelRequest = {}));
export var CreateModelResponse;
(function (CreateModelResponse) {
  /**
   * @internal
   */
  CreateModelResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateModelResponse || (CreateModelResponse = {}));
export var CreateRouteRequest;
(function (CreateRouteRequest) {
  /**
   * @internal
   */
  CreateRouteRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateRouteRequest || (CreateRouteRequest = {}));
export var CreateRouteResult;
(function (CreateRouteResult) {
  /**
   * @internal
   */
  CreateRouteResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateRouteResult || (CreateRouteResult = {}));
export var CreateRouteResponseRequest;
(function (CreateRouteResponseRequest) {
  /**
   * @internal
   */
  CreateRouteResponseRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateRouteResponseRequest || (CreateRouteResponseRequest = {}));
export var CreateRouteResponseResponse;
(function (CreateRouteResponseResponse) {
  /**
   * @internal
   */
  CreateRouteResponseResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateRouteResponseResponse || (CreateRouteResponseResponse = {}));
export var CreateStageRequest;
(function (CreateStageRequest) {
  /**
   * @internal
   */
  CreateStageRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateStageRequest || (CreateStageRequest = {}));
export var CreateStageResponse;
(function (CreateStageResponse) {
  /**
   * @internal
   */
  CreateStageResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateStageResponse || (CreateStageResponse = {}));
export var CreateVpcLinkRequest;
(function (CreateVpcLinkRequest) {
  /**
   * @internal
   */
  CreateVpcLinkRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateVpcLinkRequest || (CreateVpcLinkRequest = {}));
export var CreateVpcLinkResponse;
(function (CreateVpcLinkResponse) {
  /**
   * @internal
   */
  CreateVpcLinkResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateVpcLinkResponse || (CreateVpcLinkResponse = {}));
export var DeleteAccessLogSettingsRequest;
(function (DeleteAccessLogSettingsRequest) {
  /**
   * @internal
   */
  DeleteAccessLogSettingsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteAccessLogSettingsRequest || (DeleteAccessLogSettingsRequest = {}));
export var DeleteApiRequest;
(function (DeleteApiRequest) {
  /**
   * @internal
   */
  DeleteApiRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteApiRequest || (DeleteApiRequest = {}));
export var DeleteApiMappingRequest;
(function (DeleteApiMappingRequest) {
  /**
   * @internal
   */
  DeleteApiMappingRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteApiMappingRequest || (DeleteApiMappingRequest = {}));
export var DeleteAuthorizerRequest;
(function (DeleteAuthorizerRequest) {
  /**
   * @internal
   */
  DeleteAuthorizerRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteAuthorizerRequest || (DeleteAuthorizerRequest = {}));
export var DeleteCorsConfigurationRequest;
(function (DeleteCorsConfigurationRequest) {
  /**
   * @internal
   */
  DeleteCorsConfigurationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteCorsConfigurationRequest || (DeleteCorsConfigurationRequest = {}));
export var DeleteDeploymentRequest;
(function (DeleteDeploymentRequest) {
  /**
   * @internal
   */
  DeleteDeploymentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteDeploymentRequest || (DeleteDeploymentRequest = {}));
export var DeleteDomainNameRequest;
(function (DeleteDomainNameRequest) {
  /**
   * @internal
   */
  DeleteDomainNameRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteDomainNameRequest || (DeleteDomainNameRequest = {}));
export var DeleteIntegrationRequest;
(function (DeleteIntegrationRequest) {
  /**
   * @internal
   */
  DeleteIntegrationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteIntegrationRequest || (DeleteIntegrationRequest = {}));
export var DeleteIntegrationResponseRequest;
(function (DeleteIntegrationResponseRequest) {
  /**
   * @internal
   */
  DeleteIntegrationResponseRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteIntegrationResponseRequest || (DeleteIntegrationResponseRequest = {}));
export var DeleteModelRequest;
(function (DeleteModelRequest) {
  /**
   * @internal
   */
  DeleteModelRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteModelRequest || (DeleteModelRequest = {}));
export var DeleteRouteRequest;
(function (DeleteRouteRequest) {
  /**
   * @internal
   */
  DeleteRouteRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteRouteRequest || (DeleteRouteRequest = {}));
export var DeleteRouteRequestParameterRequest;
(function (DeleteRouteRequestParameterRequest) {
  /**
   * @internal
   */
  DeleteRouteRequestParameterRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteRouteRequestParameterRequest || (DeleteRouteRequestParameterRequest = {}));
export var DeleteRouteResponseRequest;
(function (DeleteRouteResponseRequest) {
  /**
   * @internal
   */
  DeleteRouteResponseRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteRouteResponseRequest || (DeleteRouteResponseRequest = {}));
export var DeleteRouteSettingsRequest;
(function (DeleteRouteSettingsRequest) {
  /**
   * @internal
   */
  DeleteRouteSettingsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteRouteSettingsRequest || (DeleteRouteSettingsRequest = {}));
export var DeleteStageRequest;
(function (DeleteStageRequest) {
  /**
   * @internal
   */
  DeleteStageRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteStageRequest || (DeleteStageRequest = {}));
export var DeleteVpcLinkRequest;
(function (DeleteVpcLinkRequest) {
  /**
   * @internal
   */
  DeleteVpcLinkRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteVpcLinkRequest || (DeleteVpcLinkRequest = {}));
export var DeleteVpcLinkResponse;
(function (DeleteVpcLinkResponse) {
  /**
   * @internal
   */
  DeleteVpcLinkResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteVpcLinkResponse || (DeleteVpcLinkResponse = {}));
export var ExportApiRequest;
(function (ExportApiRequest) {
  /**
   * @internal
   */
  ExportApiRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ExportApiRequest || (ExportApiRequest = {}));
export var ExportApiResponse;
(function (ExportApiResponse) {
  /**
   * @internal
   */
  ExportApiResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ExportApiResponse || (ExportApiResponse = {}));
export var GetApiRequest;
(function (GetApiRequest) {
  /**
   * @internal
   */
  GetApiRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetApiRequest || (GetApiRequest = {}));
export var GetApiResponse;
(function (GetApiResponse) {
  /**
   * @internal
   */
  GetApiResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetApiResponse || (GetApiResponse = {}));
export var GetApiMappingRequest;
(function (GetApiMappingRequest) {
  /**
   * @internal
   */
  GetApiMappingRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetApiMappingRequest || (GetApiMappingRequest = {}));
export var GetApiMappingResponse;
(function (GetApiMappingResponse) {
  /**
   * @internal
   */
  GetApiMappingResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetApiMappingResponse || (GetApiMappingResponse = {}));
export var GetApiMappingsRequest;
(function (GetApiMappingsRequest) {
  /**
   * @internal
   */
  GetApiMappingsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetApiMappingsRequest || (GetApiMappingsRequest = {}));
export var GetApiMappingsResponse;
(function (GetApiMappingsResponse) {
  /**
   * @internal
   */
  GetApiMappingsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetApiMappingsResponse || (GetApiMappingsResponse = {}));
export var GetApisRequest;
(function (GetApisRequest) {
  /**
   * @internal
   */
  GetApisRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetApisRequest || (GetApisRequest = {}));
export var GetApisResponse;
(function (GetApisResponse) {
  /**
   * @internal
   */
  GetApisResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetApisResponse || (GetApisResponse = {}));
export var GetAuthorizerRequest;
(function (GetAuthorizerRequest) {
  /**
   * @internal
   */
  GetAuthorizerRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAuthorizerRequest || (GetAuthorizerRequest = {}));
export var GetAuthorizerResponse;
(function (GetAuthorizerResponse) {
  /**
   * @internal
   */
  GetAuthorizerResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAuthorizerResponse || (GetAuthorizerResponse = {}));
export var GetAuthorizersRequest;
(function (GetAuthorizersRequest) {
  /**
   * @internal
   */
  GetAuthorizersRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAuthorizersRequest || (GetAuthorizersRequest = {}));
export var GetAuthorizersResponse;
(function (GetAuthorizersResponse) {
  /**
   * @internal
   */
  GetAuthorizersResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetAuthorizersResponse || (GetAuthorizersResponse = {}));
export var GetDeploymentRequest;
(function (GetDeploymentRequest) {
  /**
   * @internal
   */
  GetDeploymentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetDeploymentRequest || (GetDeploymentRequest = {}));
export var GetDeploymentResponse;
(function (GetDeploymentResponse) {
  /**
   * @internal
   */
  GetDeploymentResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetDeploymentResponse || (GetDeploymentResponse = {}));
export var GetDeploymentsRequest;
(function (GetDeploymentsRequest) {
  /**
   * @internal
   */
  GetDeploymentsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetDeploymentsRequest || (GetDeploymentsRequest = {}));
export var GetDeploymentsResponse;
(function (GetDeploymentsResponse) {
  /**
   * @internal
   */
  GetDeploymentsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetDeploymentsResponse || (GetDeploymentsResponse = {}));
export var GetDomainNameRequest;
(function (GetDomainNameRequest) {
  /**
   * @internal
   */
  GetDomainNameRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetDomainNameRequest || (GetDomainNameRequest = {}));
export var GetDomainNameResponse;
(function (GetDomainNameResponse) {
  /**
   * @internal
   */
  GetDomainNameResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetDomainNameResponse || (GetDomainNameResponse = {}));
export var GetDomainNamesRequest;
(function (GetDomainNamesRequest) {
  /**
   * @internal
   */
  GetDomainNamesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetDomainNamesRequest || (GetDomainNamesRequest = {}));
export var GetDomainNamesResponse;
(function (GetDomainNamesResponse) {
  /**
   * @internal
   */
  GetDomainNamesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetDomainNamesResponse || (GetDomainNamesResponse = {}));
export var GetIntegrationRequest;
(function (GetIntegrationRequest) {
  /**
   * @internal
   */
  GetIntegrationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetIntegrationRequest || (GetIntegrationRequest = {}));
export var GetIntegrationResult;
(function (GetIntegrationResult) {
  /**
   * @internal
   */
  GetIntegrationResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetIntegrationResult || (GetIntegrationResult = {}));
export var GetIntegrationResponseRequest;
(function (GetIntegrationResponseRequest) {
  /**
   * @internal
   */
  GetIntegrationResponseRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetIntegrationResponseRequest || (GetIntegrationResponseRequest = {}));
export var GetIntegrationResponseResponse;
(function (GetIntegrationResponseResponse) {
  /**
   * @internal
   */
  GetIntegrationResponseResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetIntegrationResponseResponse || (GetIntegrationResponseResponse = {}));
export var GetIntegrationResponsesRequest;
(function (GetIntegrationResponsesRequest) {
  /**
   * @internal
   */
  GetIntegrationResponsesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetIntegrationResponsesRequest || (GetIntegrationResponsesRequest = {}));
export var GetIntegrationResponsesResponse;
(function (GetIntegrationResponsesResponse) {
  /**
   * @internal
   */
  GetIntegrationResponsesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetIntegrationResponsesResponse || (GetIntegrationResponsesResponse = {}));
export var GetIntegrationsRequest;
(function (GetIntegrationsRequest) {
  /**
   * @internal
   */
  GetIntegrationsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetIntegrationsRequest || (GetIntegrationsRequest = {}));
export var GetIntegrationsResponse;
(function (GetIntegrationsResponse) {
  /**
   * @internal
   */
  GetIntegrationsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetIntegrationsResponse || (GetIntegrationsResponse = {}));
export var GetModelRequest;
(function (GetModelRequest) {
  /**
   * @internal
   */
  GetModelRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetModelRequest || (GetModelRequest = {}));
export var GetModelResponse;
(function (GetModelResponse) {
  /**
   * @internal
   */
  GetModelResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetModelResponse || (GetModelResponse = {}));
export var GetModelsRequest;
(function (GetModelsRequest) {
  /**
   * @internal
   */
  GetModelsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetModelsRequest || (GetModelsRequest = {}));
export var GetModelsResponse;
(function (GetModelsResponse) {
  /**
   * @internal
   */
  GetModelsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetModelsResponse || (GetModelsResponse = {}));
export var GetModelTemplateRequest;
(function (GetModelTemplateRequest) {
  /**
   * @internal
   */
  GetModelTemplateRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetModelTemplateRequest || (GetModelTemplateRequest = {}));
export var GetModelTemplateResponse;
(function (GetModelTemplateResponse) {
  /**
   * @internal
   */
  GetModelTemplateResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetModelTemplateResponse || (GetModelTemplateResponse = {}));
export var GetRouteRequest;
(function (GetRouteRequest) {
  /**
   * @internal
   */
  GetRouteRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetRouteRequest || (GetRouteRequest = {}));
export var GetRouteResult;
(function (GetRouteResult) {
  /**
   * @internal
   */
  GetRouteResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetRouteResult || (GetRouteResult = {}));
export var GetRouteResponseRequest;
(function (GetRouteResponseRequest) {
  /**
   * @internal
   */
  GetRouteResponseRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetRouteResponseRequest || (GetRouteResponseRequest = {}));
export var GetRouteResponseResponse;
(function (GetRouteResponseResponse) {
  /**
   * @internal
   */
  GetRouteResponseResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetRouteResponseResponse || (GetRouteResponseResponse = {}));
export var GetRouteResponsesRequest;
(function (GetRouteResponsesRequest) {
  /**
   * @internal
   */
  GetRouteResponsesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetRouteResponsesRequest || (GetRouteResponsesRequest = {}));
export var GetRouteResponsesResponse;
(function (GetRouteResponsesResponse) {
  /**
   * @internal
   */
  GetRouteResponsesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetRouteResponsesResponse || (GetRouteResponsesResponse = {}));
export var GetRoutesRequest;
(function (GetRoutesRequest) {
  /**
   * @internal
   */
  GetRoutesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetRoutesRequest || (GetRoutesRequest = {}));
export var GetRoutesResponse;
(function (GetRoutesResponse) {
  /**
   * @internal
   */
  GetRoutesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetRoutesResponse || (GetRoutesResponse = {}));
export var GetStageRequest;
(function (GetStageRequest) {
  /**
   * @internal
   */
  GetStageRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetStageRequest || (GetStageRequest = {}));
export var GetStageResponse;
(function (GetStageResponse) {
  /**
   * @internal
   */
  GetStageResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetStageResponse || (GetStageResponse = {}));
export var GetStagesRequest;
(function (GetStagesRequest) {
  /**
   * @internal
   */
  GetStagesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetStagesRequest || (GetStagesRequest = {}));
export var GetStagesResponse;
(function (GetStagesResponse) {
  /**
   * @internal
   */
  GetStagesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetStagesResponse || (GetStagesResponse = {}));
export var GetTagsRequest;
(function (GetTagsRequest) {
  /**
   * @internal
   */
  GetTagsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetTagsRequest || (GetTagsRequest = {}));
export var GetTagsResponse;
(function (GetTagsResponse) {
  /**
   * @internal
   */
  GetTagsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetTagsResponse || (GetTagsResponse = {}));
export var GetVpcLinkRequest;
(function (GetVpcLinkRequest) {
  /**
   * @internal
   */
  GetVpcLinkRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetVpcLinkRequest || (GetVpcLinkRequest = {}));
export var GetVpcLinkResponse;
(function (GetVpcLinkResponse) {
  /**
   * @internal
   */
  GetVpcLinkResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetVpcLinkResponse || (GetVpcLinkResponse = {}));
export var GetVpcLinksRequest;
(function (GetVpcLinksRequest) {
  /**
   * @internal
   */
  GetVpcLinksRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetVpcLinksRequest || (GetVpcLinksRequest = {}));
export var GetVpcLinksResponse;
(function (GetVpcLinksResponse) {
  /**
   * @internal
   */
  GetVpcLinksResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetVpcLinksResponse || (GetVpcLinksResponse = {}));
export var ImportApiRequest;
(function (ImportApiRequest) {
  /**
   * @internal
   */
  ImportApiRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ImportApiRequest || (ImportApiRequest = {}));
export var ImportApiResponse;
(function (ImportApiResponse) {
  /**
   * @internal
   */
  ImportApiResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ImportApiResponse || (ImportApiResponse = {}));
export var ReimportApiRequest;
(function (ReimportApiRequest) {
  /**
   * @internal
   */
  ReimportApiRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ReimportApiRequest || (ReimportApiRequest = {}));
export var ReimportApiResponse;
(function (ReimportApiResponse) {
  /**
   * @internal
   */
  ReimportApiResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ReimportApiResponse || (ReimportApiResponse = {}));
export var ResetAuthorizersCacheRequest;
(function (ResetAuthorizersCacheRequest) {
  /**
   * @internal
   */
  ResetAuthorizersCacheRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResetAuthorizersCacheRequest || (ResetAuthorizersCacheRequest = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
  /**
   * @internal
   */
  TagResourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagResourceResponse || (TagResourceResponse = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UpdateApiRequest;
(function (UpdateApiRequest) {
  /**
   * @internal
   */
  UpdateApiRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateApiRequest || (UpdateApiRequest = {}));
export var UpdateApiResponse;
(function (UpdateApiResponse) {
  /**
   * @internal
   */
  UpdateApiResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateApiResponse || (UpdateApiResponse = {}));
export var UpdateApiMappingRequest;
(function (UpdateApiMappingRequest) {
  /**
   * @internal
   */
  UpdateApiMappingRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateApiMappingRequest || (UpdateApiMappingRequest = {}));
export var UpdateApiMappingResponse;
(function (UpdateApiMappingResponse) {
  /**
   * @internal
   */
  UpdateApiMappingResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateApiMappingResponse || (UpdateApiMappingResponse = {}));
export var UpdateAuthorizerRequest;
(function (UpdateAuthorizerRequest) {
  /**
   * @internal
   */
  UpdateAuthorizerRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateAuthorizerRequest || (UpdateAuthorizerRequest = {}));
export var UpdateAuthorizerResponse;
(function (UpdateAuthorizerResponse) {
  /**
   * @internal
   */
  UpdateAuthorizerResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateAuthorizerResponse || (UpdateAuthorizerResponse = {}));
export var UpdateDeploymentRequest;
(function (UpdateDeploymentRequest) {
  /**
   * @internal
   */
  UpdateDeploymentRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateDeploymentRequest || (UpdateDeploymentRequest = {}));
export var UpdateDeploymentResponse;
(function (UpdateDeploymentResponse) {
  /**
   * @internal
   */
  UpdateDeploymentResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateDeploymentResponse || (UpdateDeploymentResponse = {}));
export var UpdateDomainNameRequest;
(function (UpdateDomainNameRequest) {
  /**
   * @internal
   */
  UpdateDomainNameRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateDomainNameRequest || (UpdateDomainNameRequest = {}));
export var UpdateDomainNameResponse;
(function (UpdateDomainNameResponse) {
  /**
   * @internal
   */
  UpdateDomainNameResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateDomainNameResponse || (UpdateDomainNameResponse = {}));
export var UpdateIntegrationRequest;
(function (UpdateIntegrationRequest) {
  /**
   * @internal
   */
  UpdateIntegrationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateIntegrationRequest || (UpdateIntegrationRequest = {}));
export var UpdateIntegrationResult;
(function (UpdateIntegrationResult) {
  /**
   * @internal
   */
  UpdateIntegrationResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateIntegrationResult || (UpdateIntegrationResult = {}));
export var UpdateIntegrationResponseRequest;
(function (UpdateIntegrationResponseRequest) {
  /**
   * @internal
   */
  UpdateIntegrationResponseRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateIntegrationResponseRequest || (UpdateIntegrationResponseRequest = {}));
export var UpdateIntegrationResponseResponse;
(function (UpdateIntegrationResponseResponse) {
  /**
   * @internal
   */
  UpdateIntegrationResponseResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateIntegrationResponseResponse || (UpdateIntegrationResponseResponse = {}));
export var UpdateModelRequest;
(function (UpdateModelRequest) {
  /**
   * @internal
   */
  UpdateModelRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateModelRequest || (UpdateModelRequest = {}));
export var UpdateModelResponse;
(function (UpdateModelResponse) {
  /**
   * @internal
   */
  UpdateModelResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateModelResponse || (UpdateModelResponse = {}));
export var UpdateRouteRequest;
(function (UpdateRouteRequest) {
  /**
   * @internal
   */
  UpdateRouteRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateRouteRequest || (UpdateRouteRequest = {}));
export var UpdateRouteResult;
(function (UpdateRouteResult) {
  /**
   * @internal
   */
  UpdateRouteResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateRouteResult || (UpdateRouteResult = {}));
export var UpdateRouteResponseRequest;
(function (UpdateRouteResponseRequest) {
  /**
   * @internal
   */
  UpdateRouteResponseRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateRouteResponseRequest || (UpdateRouteResponseRequest = {}));
export var UpdateRouteResponseResponse;
(function (UpdateRouteResponseResponse) {
  /**
   * @internal
   */
  UpdateRouteResponseResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateRouteResponseResponse || (UpdateRouteResponseResponse = {}));
export var UpdateStageRequest;
(function (UpdateStageRequest) {
  /**
   * @internal
   */
  UpdateStageRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateStageRequest || (UpdateStageRequest = {}));
export var UpdateStageResponse;
(function (UpdateStageResponse) {
  /**
   * @internal
   */
  UpdateStageResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateStageResponse || (UpdateStageResponse = {}));
export var UpdateVpcLinkRequest;
(function (UpdateVpcLinkRequest) {
  /**
   * @internal
   */
  UpdateVpcLinkRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateVpcLinkRequest || (UpdateVpcLinkRequest = {}));
export var UpdateVpcLinkResponse;
(function (UpdateVpcLinkResponse) {
  /**
   * @internal
   */
  UpdateVpcLinkResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateVpcLinkResponse || (UpdateVpcLinkResponse = {}));
//# sourceMappingURL=models_0.js.map
