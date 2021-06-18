"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TlsConfig =
  exports.IntegrationResponse =
  exports.ContentHandlingStrategy =
  exports.ConnectionType =
  exports.CreateResourceRequest =
  exports.RequestValidator =
  exports.CreateRequestValidatorRequest =
  exports.Model =
  exports.CreateModelRequest =
  exports.DomainName =
  exports.MutualTlsAuthentication =
  exports.DomainNameStatus =
  exports.CreateDomainNameRequest =
  exports.MutualTlsAuthenticationInput =
  exports.EndpointConfiguration =
  exports.DocumentationVersion =
  exports.CreateDocumentationVersionRequest =
  exports.DocumentationPart =
  exports.CreateDocumentationPartRequest =
  exports.DocumentationPartLocation =
  exports.DocumentationPartType =
  exports.ServiceUnavailableException =
  exports.Deployment =
  exports.MethodSnapshot =
  exports.CreateDeploymentRequest =
  exports.DeploymentCanarySettings =
  exports.CacheClusterSize =
  exports.CreateBasePathMappingRequest =
  exports.BasePathMapping =
  exports.CreateAuthorizerRequest =
  exports.UnauthorizedException =
  exports.TooManyRequestsException =
  exports.NotFoundException =
  exports.LimitExceededException =
  exports.CreateApiKeyRequest =
  exports.StageKey =
  exports.ConflictException =
  exports.BadRequestException =
  exports.Authorizers =
  exports.Authorizer =
  exports.AuthorizerType =
  exports.ApiStage =
  exports.ApiKeySourceType =
  exports.ApiKeysFormat =
  exports.ApiKeys =
  exports.ApiKeyIds =
  exports.ApiKey =
  exports.Account =
  exports.ThrottleSettings =
  exports.AccessLogSettings =
    void 0;
exports.GetApiKeyRequest =
  exports.GetAccountRequest =
  exports.GenerateClientCertificateRequest =
  exports.ClientCertificate =
  exports.FlushStageCacheRequest =
  exports.FlushStageAuthorizersCacheRequest =
  exports.DeleteVpcLinkRequest =
  exports.DeleteUsagePlanKeyRequest =
  exports.DeleteUsagePlanRequest =
  exports.DeleteStageRequest =
  exports.DeleteRestApiRequest =
  exports.DeleteResourceRequest =
  exports.DeleteRequestValidatorRequest =
  exports.DeleteModelRequest =
  exports.DeleteMethodResponseRequest =
  exports.DeleteMethodRequest =
  exports.DeleteIntegrationResponseRequest =
  exports.DeleteIntegrationRequest =
  exports.DeleteGatewayResponseRequest =
  exports.GatewayResponseType =
  exports.DeleteDomainNameRequest =
  exports.DeleteDocumentationVersionRequest =
  exports.DeleteDocumentationPartRequest =
  exports.DeleteDeploymentRequest =
  exports.DeleteClientCertificateRequest =
  exports.DeleteBasePathMappingRequest =
  exports.DeleteAuthorizerRequest =
  exports.DeleteApiKeyRequest =
  exports.VpcLink =
  exports.VpcLinkStatus =
  exports.CreateVpcLinkRequest =
  exports.UsagePlanKey =
  exports.CreateUsagePlanKeyRequest =
  exports.UsagePlan =
  exports.CreateUsagePlanRequest =
  exports.QuotaSettings =
  exports.QuotaPeriodType =
  exports.Stage =
  exports.MethodSetting =
  exports.UnauthorizedCacheControlHeaderStrategy =
  exports.CacheClusterStatus =
  exports.CreateStageRequest =
  exports.CanarySettings =
  exports.RestApi =
  exports.CreateRestApiRequest =
  exports.Resource =
  exports.Method =
  exports.MethodResponse =
  exports.Integration =
  exports.IntegrationType =
    void 0;
exports.SdkConfigurationProperty =
  exports.GetSdkTypeRequest =
  exports.SdkResponse =
  exports.GetSdkRequest =
  exports.RestApis =
  exports.GetRestApisRequest =
  exports.GetRestApiRequest =
  exports.Resources =
  exports.GetResourcesRequest =
  exports.GetResourceRequest =
  exports.RequestValidators =
  exports.GetRequestValidatorsRequest =
  exports.GetRequestValidatorRequest =
  exports.Template =
  exports.GetModelTemplateRequest =
  exports.Models =
  exports.GetModelsRequest =
  exports.GetModelRequest =
  exports.GetMethodResponseRequest =
  exports.GetMethodRequest =
  exports.GetIntegrationResponseRequest =
  exports.GetIntegrationRequest =
  exports.GetGatewayResponsesRequest =
  exports.GatewayResponses =
  exports.GetGatewayResponseRequest =
  exports.GatewayResponse =
  exports.GetExportRequest =
  exports.ExportResponse =
  exports.GetDomainNamesRequest =
  exports.DomainNames =
  exports.GetDomainNameRequest =
  exports.GetDocumentationVersionsRequest =
  exports.DocumentationVersions =
  exports.GetDocumentationVersionRequest =
  exports.GetDocumentationPartsRequest =
  exports.LocationStatusType =
  exports.DocumentationParts =
  exports.GetDocumentationPartRequest =
  exports.GetDeploymentsRequest =
  exports.Deployments =
  exports.GetDeploymentRequest =
  exports.GetClientCertificatesRequest =
  exports.ClientCertificates =
  exports.GetClientCertificateRequest =
  exports.GetBasePathMappingsRequest =
  exports.BasePathMappings =
  exports.GetBasePathMappingRequest =
  exports.GetAuthorizersRequest =
  exports.GetAuthorizerRequest =
  exports.GetApiKeysRequest =
    void 0;
exports.UpdateMethodRequest =
  exports.UpdateIntegrationResponseRequest =
  exports.UpdateIntegrationRequest =
  exports.UpdateGatewayResponseRequest =
  exports.UpdateDomainNameRequest =
  exports.UpdateDocumentationVersionRequest =
  exports.UpdateDocumentationPartRequest =
  exports.UpdateDeploymentRequest =
  exports.UpdateClientCertificateRequest =
  exports.UpdateBasePathMappingRequest =
  exports.UpdateAuthorizerRequest =
  exports.UpdateApiKeyRequest =
  exports.UpdateAccountRequest =
  exports.PatchOperation =
  exports.UntagResourceRequest =
  exports.TestInvokeMethodResponse =
  exports.TestInvokeMethodRequest =
  exports.TestInvokeAuthorizerResponse =
  exports.TestInvokeAuthorizerRequest =
  exports.TagResourceRequest =
  exports.PutRestApiRequest =
  exports.PutMethodResponseRequest =
  exports.PutMethodRequest =
  exports.PutIntegrationResponseRequest =
  exports.PutIntegrationRequest =
  exports.PutGatewayResponseRequest =
  exports.ImportRestApiRequest =
  exports.ImportDocumentationPartsRequest =
  exports.PutMode =
  exports.DocumentationPartIds =
  exports.ImportApiKeysRequest =
  exports.VpcLinks =
  exports.GetVpcLinksRequest =
  exports.GetVpcLinkRequest =
  exports.UsagePlans =
  exports.GetUsagePlansRequest =
  exports.UsagePlanKeys =
  exports.GetUsagePlanKeysRequest =
  exports.GetUsagePlanKeyRequest =
  exports.GetUsagePlanRequest =
  exports.Usage =
  exports.GetUsageRequest =
  exports.Tags =
  exports.GetTagsRequest =
  exports.Stages =
  exports.GetStagesRequest =
  exports.GetStageRequest =
  exports.SdkTypes =
  exports.GetSdkTypesRequest =
  exports.SdkType =
    void 0;
exports.UpdateVpcLinkRequest =
  exports.UpdateUsagePlanRequest =
  exports.UpdateUsageRequest =
  exports.UpdateStageRequest =
  exports.UpdateRestApiRequest =
  exports.UpdateResourceRequest =
  exports.UpdateRequestValidatorRequest =
  exports.UpdateModelRequest =
  exports.UpdateMethodResponseRequest =
    void 0;
var AccessLogSettings;
(function (AccessLogSettings) {
  /**
   * @internal
   */
  AccessLogSettings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AccessLogSettings = exports.AccessLogSettings || (exports.AccessLogSettings = {})));
var ThrottleSettings;
(function (ThrottleSettings) {
  /**
   * @internal
   */
  ThrottleSettings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ThrottleSettings = exports.ThrottleSettings || (exports.ThrottleSettings = {})));
var Account;
(function (Account) {
  /**
   * @internal
   */
  Account.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Account = exports.Account || (exports.Account = {})));
var ApiKey;
(function (ApiKey) {
  /**
   * @internal
   */
  ApiKey.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ApiKey = exports.ApiKey || (exports.ApiKey = {})));
var ApiKeyIds;
(function (ApiKeyIds) {
  /**
   * @internal
   */
  ApiKeyIds.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ApiKeyIds = exports.ApiKeyIds || (exports.ApiKeyIds = {})));
var ApiKeys;
(function (ApiKeys) {
  /**
   * @internal
   */
  ApiKeys.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ApiKeys = exports.ApiKeys || (exports.ApiKeys = {})));
var ApiKeysFormat;
(function (ApiKeysFormat) {
  ApiKeysFormat["csv"] = "csv";
})((ApiKeysFormat = exports.ApiKeysFormat || (exports.ApiKeysFormat = {})));
var ApiKeySourceType;
(function (ApiKeySourceType) {
  ApiKeySourceType["AUTHORIZER"] = "AUTHORIZER";
  ApiKeySourceType["HEADER"] = "HEADER";
})((ApiKeySourceType = exports.ApiKeySourceType || (exports.ApiKeySourceType = {})));
var ApiStage;
(function (ApiStage) {
  /**
   * @internal
   */
  ApiStage.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ApiStage = exports.ApiStage || (exports.ApiStage = {})));
var AuthorizerType;
(function (AuthorizerType) {
  AuthorizerType["COGNITO_USER_POOLS"] = "COGNITO_USER_POOLS";
  AuthorizerType["REQUEST"] = "REQUEST";
  AuthorizerType["TOKEN"] = "TOKEN";
})((AuthorizerType = exports.AuthorizerType || (exports.AuthorizerType = {})));
var Authorizer;
(function (Authorizer) {
  /**
   * @internal
   */
  Authorizer.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Authorizer = exports.Authorizer || (exports.Authorizer = {})));
var Authorizers;
(function (Authorizers) {
  /**
   * @internal
   */
  Authorizers.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Authorizers = exports.Authorizers || (exports.Authorizers = {})));
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
var StageKey;
(function (StageKey) {
  /**
   * @internal
   */
  StageKey.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StageKey = exports.StageKey || (exports.StageKey = {})));
var CreateApiKeyRequest;
(function (CreateApiKeyRequest) {
  /**
   * @internal
   */
  CreateApiKeyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateApiKeyRequest = exports.CreateApiKeyRequest || (exports.CreateApiKeyRequest = {})));
var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {})));
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
var UnauthorizedException;
(function (UnauthorizedException) {
  /**
   * @internal
   */
  UnauthorizedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UnauthorizedException = exports.UnauthorizedException || (exports.UnauthorizedException = {})));
var CreateAuthorizerRequest;
(function (CreateAuthorizerRequest) {
  /**
   * @internal
   */
  CreateAuthorizerRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateAuthorizerRequest = exports.CreateAuthorizerRequest || (exports.CreateAuthorizerRequest = {})));
var BasePathMapping;
(function (BasePathMapping) {
  /**
   * @internal
   */
  BasePathMapping.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BasePathMapping = exports.BasePathMapping || (exports.BasePathMapping = {})));
var CreateBasePathMappingRequest;
(function (CreateBasePathMappingRequest) {
  /**
   * @internal
   */
  CreateBasePathMappingRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateBasePathMappingRequest = exports.CreateBasePathMappingRequest || (exports.CreateBasePathMappingRequest = {}))
);
var CacheClusterSize;
(function (CacheClusterSize) {
  CacheClusterSize["SIZE_0_POINT_5_GB"] = "0.5";
  CacheClusterSize["SIZE_118_GB"] = "118";
  CacheClusterSize["SIZE_13_POINT_5_GB"] = "13.5";
  CacheClusterSize["SIZE_1_POINT_6_GB"] = "1.6";
  CacheClusterSize["SIZE_237_GB"] = "237";
  CacheClusterSize["SIZE_28_POINT_4_GB"] = "28.4";
  CacheClusterSize["SIZE_58_POINT_2_GB"] = "58.2";
  CacheClusterSize["SIZE_6_POINT_1_GB"] = "6.1";
})((CacheClusterSize = exports.CacheClusterSize || (exports.CacheClusterSize = {})));
var DeploymentCanarySettings;
(function (DeploymentCanarySettings) {
  /**
   * @internal
   */
  DeploymentCanarySettings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeploymentCanarySettings = exports.DeploymentCanarySettings || (exports.DeploymentCanarySettings = {})));
var CreateDeploymentRequest;
(function (CreateDeploymentRequest) {
  /**
   * @internal
   */
  CreateDeploymentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateDeploymentRequest = exports.CreateDeploymentRequest || (exports.CreateDeploymentRequest = {})));
var MethodSnapshot;
(function (MethodSnapshot) {
  /**
   * @internal
   */
  MethodSnapshot.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MethodSnapshot = exports.MethodSnapshot || (exports.MethodSnapshot = {})));
var Deployment;
(function (Deployment) {
  /**
   * @internal
   */
  Deployment.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Deployment = exports.Deployment || (exports.Deployment = {})));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
  /**
   * @internal
   */
  ServiceUnavailableException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {})));
var DocumentationPartType;
(function (DocumentationPartType) {
  DocumentationPartType["API"] = "API";
  DocumentationPartType["AUTHORIZER"] = "AUTHORIZER";
  DocumentationPartType["METHOD"] = "METHOD";
  DocumentationPartType["MODEL"] = "MODEL";
  DocumentationPartType["PATH_PARAMETER"] = "PATH_PARAMETER";
  DocumentationPartType["QUERY_PARAMETER"] = "QUERY_PARAMETER";
  DocumentationPartType["REQUEST_BODY"] = "REQUEST_BODY";
  DocumentationPartType["REQUEST_HEADER"] = "REQUEST_HEADER";
  DocumentationPartType["RESOURCE"] = "RESOURCE";
  DocumentationPartType["RESPONSE"] = "RESPONSE";
  DocumentationPartType["RESPONSE_BODY"] = "RESPONSE_BODY";
  DocumentationPartType["RESPONSE_HEADER"] = "RESPONSE_HEADER";
})((DocumentationPartType = exports.DocumentationPartType || (exports.DocumentationPartType = {})));
var DocumentationPartLocation;
(function (DocumentationPartLocation) {
  /**
   * @internal
   */
  DocumentationPartLocation.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DocumentationPartLocation = exports.DocumentationPartLocation || (exports.DocumentationPartLocation = {})));
var CreateDocumentationPartRequest;
(function (CreateDocumentationPartRequest) {
  /**
   * @internal
   */
  CreateDocumentationPartRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateDocumentationPartRequest =
    exports.CreateDocumentationPartRequest || (exports.CreateDocumentationPartRequest = {}))
);
var DocumentationPart;
(function (DocumentationPart) {
  /**
   * @internal
   */
  DocumentationPart.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DocumentationPart = exports.DocumentationPart || (exports.DocumentationPart = {})));
var CreateDocumentationVersionRequest;
(function (CreateDocumentationVersionRequest) {
  /**
   * @internal
   */
  CreateDocumentationVersionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateDocumentationVersionRequest =
    exports.CreateDocumentationVersionRequest || (exports.CreateDocumentationVersionRequest = {}))
);
var DocumentationVersion;
(function (DocumentationVersion) {
  /**
   * @internal
   */
  DocumentationVersion.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DocumentationVersion = exports.DocumentationVersion || (exports.DocumentationVersion = {})));
var EndpointConfiguration;
(function (EndpointConfiguration) {
  /**
   * @internal
   */
  EndpointConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EndpointConfiguration = exports.EndpointConfiguration || (exports.EndpointConfiguration = {})));
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
var DomainNameStatus;
(function (DomainNameStatus) {
  DomainNameStatus["AVAILABLE"] = "AVAILABLE";
  DomainNameStatus["PENDING"] = "PENDING";
  DomainNameStatus["UPDATING"] = "UPDATING";
})((DomainNameStatus = exports.DomainNameStatus || (exports.DomainNameStatus = {})));
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
var CreateModelRequest;
(function (CreateModelRequest) {
  /**
   * @internal
   */
  CreateModelRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateModelRequest = exports.CreateModelRequest || (exports.CreateModelRequest = {})));
var Model;
(function (Model) {
  /**
   * @internal
   */
  Model.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Model = exports.Model || (exports.Model = {})));
var CreateRequestValidatorRequest;
(function (CreateRequestValidatorRequest) {
  /**
   * @internal
   */
  CreateRequestValidatorRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (CreateRequestValidatorRequest =
    exports.CreateRequestValidatorRequest || (exports.CreateRequestValidatorRequest = {}))
);
var RequestValidator;
(function (RequestValidator) {
  /**
   * @internal
   */
  RequestValidator.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RequestValidator = exports.RequestValidator || (exports.RequestValidator = {})));
var CreateResourceRequest;
(function (CreateResourceRequest) {
  /**
   * @internal
   */
  CreateResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateResourceRequest = exports.CreateResourceRequest || (exports.CreateResourceRequest = {})));
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
var IntegrationResponse;
(function (IntegrationResponse) {
  /**
   * @internal
   */
  IntegrationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((IntegrationResponse = exports.IntegrationResponse || (exports.IntegrationResponse = {})));
var TlsConfig;
(function (TlsConfig) {
  /**
   * @internal
   */
  TlsConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TlsConfig = exports.TlsConfig || (exports.TlsConfig = {})));
var IntegrationType;
(function (IntegrationType) {
  IntegrationType["AWS"] = "AWS";
  IntegrationType["AWS_PROXY"] = "AWS_PROXY";
  IntegrationType["HTTP"] = "HTTP";
  IntegrationType["HTTP_PROXY"] = "HTTP_PROXY";
  IntegrationType["MOCK"] = "MOCK";
})((IntegrationType = exports.IntegrationType || (exports.IntegrationType = {})));
var Integration;
(function (Integration) {
  /**
   * @internal
   */
  Integration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Integration = exports.Integration || (exports.Integration = {})));
var MethodResponse;
(function (MethodResponse) {
  /**
   * @internal
   */
  MethodResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MethodResponse = exports.MethodResponse || (exports.MethodResponse = {})));
var Method;
(function (Method) {
  /**
   * @internal
   */
  Method.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Method = exports.Method || (exports.Method = {})));
var Resource;
(function (Resource) {
  /**
   * @internal
   */
  Resource.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Resource = exports.Resource || (exports.Resource = {})));
var CreateRestApiRequest;
(function (CreateRestApiRequest) {
  /**
   * @internal
   */
  CreateRestApiRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateRestApiRequest = exports.CreateRestApiRequest || (exports.CreateRestApiRequest = {})));
var RestApi;
(function (RestApi) {
  /**
   * @internal
   */
  RestApi.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RestApi = exports.RestApi || (exports.RestApi = {})));
var CanarySettings;
(function (CanarySettings) {
  /**
   * @internal
   */
  CanarySettings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CanarySettings = exports.CanarySettings || (exports.CanarySettings = {})));
var CreateStageRequest;
(function (CreateStageRequest) {
  /**
   * @internal
   */
  CreateStageRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateStageRequest = exports.CreateStageRequest || (exports.CreateStageRequest = {})));
var CacheClusterStatus;
(function (CacheClusterStatus) {
  CacheClusterStatus["AVAILABLE"] = "AVAILABLE";
  CacheClusterStatus["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
  CacheClusterStatus["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
  CacheClusterStatus["FLUSH_IN_PROGRESS"] = "FLUSH_IN_PROGRESS";
  CacheClusterStatus["NOT_AVAILABLE"] = "NOT_AVAILABLE";
})((CacheClusterStatus = exports.CacheClusterStatus || (exports.CacheClusterStatus = {})));
var UnauthorizedCacheControlHeaderStrategy;
(function (UnauthorizedCacheControlHeaderStrategy) {
  UnauthorizedCacheControlHeaderStrategy["FAIL_WITH_403"] = "FAIL_WITH_403";
  UnauthorizedCacheControlHeaderStrategy["SUCCEED_WITHOUT_RESPONSE_HEADER"] = "SUCCEED_WITHOUT_RESPONSE_HEADER";
  UnauthorizedCacheControlHeaderStrategy["SUCCEED_WITH_RESPONSE_HEADER"] = "SUCCEED_WITH_RESPONSE_HEADER";
})(
  (UnauthorizedCacheControlHeaderStrategy =
    exports.UnauthorizedCacheControlHeaderStrategy || (exports.UnauthorizedCacheControlHeaderStrategy = {}))
);
var MethodSetting;
(function (MethodSetting) {
  /**
   * @internal
   */
  MethodSetting.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((MethodSetting = exports.MethodSetting || (exports.MethodSetting = {})));
var Stage;
(function (Stage) {
  /**
   * @internal
   */
  Stage.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Stage = exports.Stage || (exports.Stage = {})));
var QuotaPeriodType;
(function (QuotaPeriodType) {
  QuotaPeriodType["DAY"] = "DAY";
  QuotaPeriodType["MONTH"] = "MONTH";
  QuotaPeriodType["WEEK"] = "WEEK";
})((QuotaPeriodType = exports.QuotaPeriodType || (exports.QuotaPeriodType = {})));
var QuotaSettings;
(function (QuotaSettings) {
  /**
   * @internal
   */
  QuotaSettings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((QuotaSettings = exports.QuotaSettings || (exports.QuotaSettings = {})));
var CreateUsagePlanRequest;
(function (CreateUsagePlanRequest) {
  /**
   * @internal
   */
  CreateUsagePlanRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateUsagePlanRequest = exports.CreateUsagePlanRequest || (exports.CreateUsagePlanRequest = {})));
var UsagePlan;
(function (UsagePlan) {
  /**
   * @internal
   */
  UsagePlan.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UsagePlan = exports.UsagePlan || (exports.UsagePlan = {})));
var CreateUsagePlanKeyRequest;
(function (CreateUsagePlanKeyRequest) {
  /**
   * @internal
   */
  CreateUsagePlanKeyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateUsagePlanKeyRequest = exports.CreateUsagePlanKeyRequest || (exports.CreateUsagePlanKeyRequest = {})));
var UsagePlanKey;
(function (UsagePlanKey) {
  /**
   * @internal
   */
  UsagePlanKey.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UsagePlanKey = exports.UsagePlanKey || (exports.UsagePlanKey = {})));
var CreateVpcLinkRequest;
(function (CreateVpcLinkRequest) {
  /**
   * @internal
   */
  CreateVpcLinkRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateVpcLinkRequest = exports.CreateVpcLinkRequest || (exports.CreateVpcLinkRequest = {})));
var VpcLinkStatus;
(function (VpcLinkStatus) {
  VpcLinkStatus["AVAILABLE"] = "AVAILABLE";
  VpcLinkStatus["DELETING"] = "DELETING";
  VpcLinkStatus["FAILED"] = "FAILED";
  VpcLinkStatus["PENDING"] = "PENDING";
})((VpcLinkStatus = exports.VpcLinkStatus || (exports.VpcLinkStatus = {})));
var VpcLink;
(function (VpcLink) {
  /**
   * @internal
   */
  VpcLink.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VpcLink = exports.VpcLink || (exports.VpcLink = {})));
var DeleteApiKeyRequest;
(function (DeleteApiKeyRequest) {
  /**
   * @internal
   */
  DeleteApiKeyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteApiKeyRequest = exports.DeleteApiKeyRequest || (exports.DeleteApiKeyRequest = {})));
var DeleteAuthorizerRequest;
(function (DeleteAuthorizerRequest) {
  /**
   * @internal
   */
  DeleteAuthorizerRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteAuthorizerRequest = exports.DeleteAuthorizerRequest || (exports.DeleteAuthorizerRequest = {})));
var DeleteBasePathMappingRequest;
(function (DeleteBasePathMappingRequest) {
  /**
   * @internal
   */
  DeleteBasePathMappingRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteBasePathMappingRequest = exports.DeleteBasePathMappingRequest || (exports.DeleteBasePathMappingRequest = {}))
);
var DeleteClientCertificateRequest;
(function (DeleteClientCertificateRequest) {
  /**
   * @internal
   */
  DeleteClientCertificateRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteClientCertificateRequest =
    exports.DeleteClientCertificateRequest || (exports.DeleteClientCertificateRequest = {}))
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
var DeleteDocumentationPartRequest;
(function (DeleteDocumentationPartRequest) {
  /**
   * @internal
   */
  DeleteDocumentationPartRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteDocumentationPartRequest =
    exports.DeleteDocumentationPartRequest || (exports.DeleteDocumentationPartRequest = {}))
);
var DeleteDocumentationVersionRequest;
(function (DeleteDocumentationVersionRequest) {
  /**
   * @internal
   */
  DeleteDocumentationVersionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteDocumentationVersionRequest =
    exports.DeleteDocumentationVersionRequest || (exports.DeleteDocumentationVersionRequest = {}))
);
var DeleteDomainNameRequest;
(function (DeleteDomainNameRequest) {
  /**
   * @internal
   */
  DeleteDomainNameRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteDomainNameRequest = exports.DeleteDomainNameRequest || (exports.DeleteDomainNameRequest = {})));
var GatewayResponseType;
(function (GatewayResponseType) {
  GatewayResponseType["ACCESS_DENIED"] = "ACCESS_DENIED";
  GatewayResponseType["API_CONFIGURATION_ERROR"] = "API_CONFIGURATION_ERROR";
  GatewayResponseType["AUTHORIZER_CONFIGURATION_ERROR"] = "AUTHORIZER_CONFIGURATION_ERROR";
  GatewayResponseType["AUTHORIZER_FAILURE"] = "AUTHORIZER_FAILURE";
  GatewayResponseType["BAD_REQUEST_BODY"] = "BAD_REQUEST_BODY";
  GatewayResponseType["BAD_REQUEST_PARAMETERS"] = "BAD_REQUEST_PARAMETERS";
  GatewayResponseType["DEFAULT_4XX"] = "DEFAULT_4XX";
  GatewayResponseType["DEFAULT_5XX"] = "DEFAULT_5XX";
  GatewayResponseType["EXPIRED_TOKEN"] = "EXPIRED_TOKEN";
  GatewayResponseType["INTEGRATION_FAILURE"] = "INTEGRATION_FAILURE";
  GatewayResponseType["INTEGRATION_TIMEOUT"] = "INTEGRATION_TIMEOUT";
  GatewayResponseType["INVALID_API_KEY"] = "INVALID_API_KEY";
  GatewayResponseType["INVALID_SIGNATURE"] = "INVALID_SIGNATURE";
  GatewayResponseType["MISSING_AUTHENTICATION_TOKEN"] = "MISSING_AUTHENTICATION_TOKEN";
  GatewayResponseType["QUOTA_EXCEEDED"] = "QUOTA_EXCEEDED";
  GatewayResponseType["REQUEST_TOO_LARGE"] = "REQUEST_TOO_LARGE";
  GatewayResponseType["RESOURCE_NOT_FOUND"] = "RESOURCE_NOT_FOUND";
  GatewayResponseType["THROTTLED"] = "THROTTLED";
  GatewayResponseType["UNAUTHORIZED"] = "UNAUTHORIZED";
  GatewayResponseType["UNSUPPORTED_MEDIA_TYPE"] = "UNSUPPORTED_MEDIA_TYPE";
})((GatewayResponseType = exports.GatewayResponseType || (exports.GatewayResponseType = {})));
var DeleteGatewayResponseRequest;
(function (DeleteGatewayResponseRequest) {
  /**
   * @internal
   */
  DeleteGatewayResponseRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteGatewayResponseRequest = exports.DeleteGatewayResponseRequest || (exports.DeleteGatewayResponseRequest = {}))
);
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
var DeleteMethodRequest;
(function (DeleteMethodRequest) {
  /**
   * @internal
   */
  DeleteMethodRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteMethodRequest = exports.DeleteMethodRequest || (exports.DeleteMethodRequest = {})));
var DeleteMethodResponseRequest;
(function (DeleteMethodResponseRequest) {
  /**
   * @internal
   */
  DeleteMethodResponseRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteMethodResponseRequest = exports.DeleteMethodResponseRequest || (exports.DeleteMethodResponseRequest = {})));
var DeleteModelRequest;
(function (DeleteModelRequest) {
  /**
   * @internal
   */
  DeleteModelRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteModelRequest = exports.DeleteModelRequest || (exports.DeleteModelRequest = {})));
var DeleteRequestValidatorRequest;
(function (DeleteRequestValidatorRequest) {
  /**
   * @internal
   */
  DeleteRequestValidatorRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DeleteRequestValidatorRequest =
    exports.DeleteRequestValidatorRequest || (exports.DeleteRequestValidatorRequest = {}))
);
var DeleteResourceRequest;
(function (DeleteResourceRequest) {
  /**
   * @internal
   */
  DeleteResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteResourceRequest = exports.DeleteResourceRequest || (exports.DeleteResourceRequest = {})));
var DeleteRestApiRequest;
(function (DeleteRestApiRequest) {
  /**
   * @internal
   */
  DeleteRestApiRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteRestApiRequest = exports.DeleteRestApiRequest || (exports.DeleteRestApiRequest = {})));
var DeleteStageRequest;
(function (DeleteStageRequest) {
  /**
   * @internal
   */
  DeleteStageRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteStageRequest = exports.DeleteStageRequest || (exports.DeleteStageRequest = {})));
var DeleteUsagePlanRequest;
(function (DeleteUsagePlanRequest) {
  /**
   * @internal
   */
  DeleteUsagePlanRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteUsagePlanRequest = exports.DeleteUsagePlanRequest || (exports.DeleteUsagePlanRequest = {})));
var DeleteUsagePlanKeyRequest;
(function (DeleteUsagePlanKeyRequest) {
  /**
   * @internal
   */
  DeleteUsagePlanKeyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteUsagePlanKeyRequest = exports.DeleteUsagePlanKeyRequest || (exports.DeleteUsagePlanKeyRequest = {})));
var DeleteVpcLinkRequest;
(function (DeleteVpcLinkRequest) {
  /**
   * @internal
   */
  DeleteVpcLinkRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteVpcLinkRequest = exports.DeleteVpcLinkRequest || (exports.DeleteVpcLinkRequest = {})));
var FlushStageAuthorizersCacheRequest;
(function (FlushStageAuthorizersCacheRequest) {
  /**
   * @internal
   */
  FlushStageAuthorizersCacheRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (FlushStageAuthorizersCacheRequest =
    exports.FlushStageAuthorizersCacheRequest || (exports.FlushStageAuthorizersCacheRequest = {}))
);
var FlushStageCacheRequest;
(function (FlushStageCacheRequest) {
  /**
   * @internal
   */
  FlushStageCacheRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FlushStageCacheRequest = exports.FlushStageCacheRequest || (exports.FlushStageCacheRequest = {})));
var ClientCertificate;
(function (ClientCertificate) {
  /**
   * @internal
   */
  ClientCertificate.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ClientCertificate = exports.ClientCertificate || (exports.ClientCertificate = {})));
var GenerateClientCertificateRequest;
(function (GenerateClientCertificateRequest) {
  /**
   * @internal
   */
  GenerateClientCertificateRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GenerateClientCertificateRequest =
    exports.GenerateClientCertificateRequest || (exports.GenerateClientCertificateRequest = {}))
);
var GetAccountRequest;
(function (GetAccountRequest) {
  /**
   * @internal
   */
  GetAccountRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAccountRequest = exports.GetAccountRequest || (exports.GetAccountRequest = {})));
var GetApiKeyRequest;
(function (GetApiKeyRequest) {
  /**
   * @internal
   */
  GetApiKeyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetApiKeyRequest = exports.GetApiKeyRequest || (exports.GetApiKeyRequest = {})));
var GetApiKeysRequest;
(function (GetApiKeysRequest) {
  /**
   * @internal
   */
  GetApiKeysRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetApiKeysRequest = exports.GetApiKeysRequest || (exports.GetApiKeysRequest = {})));
var GetAuthorizerRequest;
(function (GetAuthorizerRequest) {
  /**
   * @internal
   */
  GetAuthorizerRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAuthorizerRequest = exports.GetAuthorizerRequest || (exports.GetAuthorizerRequest = {})));
var GetAuthorizersRequest;
(function (GetAuthorizersRequest) {
  /**
   * @internal
   */
  GetAuthorizersRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetAuthorizersRequest = exports.GetAuthorizersRequest || (exports.GetAuthorizersRequest = {})));
var GetBasePathMappingRequest;
(function (GetBasePathMappingRequest) {
  /**
   * @internal
   */
  GetBasePathMappingRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetBasePathMappingRequest = exports.GetBasePathMappingRequest || (exports.GetBasePathMappingRequest = {})));
var BasePathMappings;
(function (BasePathMappings) {
  /**
   * @internal
   */
  BasePathMappings.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BasePathMappings = exports.BasePathMappings || (exports.BasePathMappings = {})));
var GetBasePathMappingsRequest;
(function (GetBasePathMappingsRequest) {
  /**
   * @internal
   */
  GetBasePathMappingsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetBasePathMappingsRequest = exports.GetBasePathMappingsRequest || (exports.GetBasePathMappingsRequest = {})));
var GetClientCertificateRequest;
(function (GetClientCertificateRequest) {
  /**
   * @internal
   */
  GetClientCertificateRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetClientCertificateRequest = exports.GetClientCertificateRequest || (exports.GetClientCertificateRequest = {})));
var ClientCertificates;
(function (ClientCertificates) {
  /**
   * @internal
   */
  ClientCertificates.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ClientCertificates = exports.ClientCertificates || (exports.ClientCertificates = {})));
var GetClientCertificatesRequest;
(function (GetClientCertificatesRequest) {
  /**
   * @internal
   */
  GetClientCertificatesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetClientCertificatesRequest = exports.GetClientCertificatesRequest || (exports.GetClientCertificatesRequest = {}))
);
var GetDeploymentRequest;
(function (GetDeploymentRequest) {
  /**
   * @internal
   */
  GetDeploymentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDeploymentRequest = exports.GetDeploymentRequest || (exports.GetDeploymentRequest = {})));
var Deployments;
(function (Deployments) {
  /**
   * @internal
   */
  Deployments.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Deployments = exports.Deployments || (exports.Deployments = {})));
var GetDeploymentsRequest;
(function (GetDeploymentsRequest) {
  /**
   * @internal
   */
  GetDeploymentsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDeploymentsRequest = exports.GetDeploymentsRequest || (exports.GetDeploymentsRequest = {})));
var GetDocumentationPartRequest;
(function (GetDocumentationPartRequest) {
  /**
   * @internal
   */
  GetDocumentationPartRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDocumentationPartRequest = exports.GetDocumentationPartRequest || (exports.GetDocumentationPartRequest = {})));
var DocumentationParts;
(function (DocumentationParts) {
  /**
   * @internal
   */
  DocumentationParts.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DocumentationParts = exports.DocumentationParts || (exports.DocumentationParts = {})));
var LocationStatusType;
(function (LocationStatusType) {
  LocationStatusType["DOCUMENTED"] = "DOCUMENTED";
  LocationStatusType["UNDOCUMENTED"] = "UNDOCUMENTED";
})((LocationStatusType = exports.LocationStatusType || (exports.LocationStatusType = {})));
var GetDocumentationPartsRequest;
(function (GetDocumentationPartsRequest) {
  /**
   * @internal
   */
  GetDocumentationPartsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetDocumentationPartsRequest = exports.GetDocumentationPartsRequest || (exports.GetDocumentationPartsRequest = {}))
);
var GetDocumentationVersionRequest;
(function (GetDocumentationVersionRequest) {
  /**
   * @internal
   */
  GetDocumentationVersionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetDocumentationVersionRequest =
    exports.GetDocumentationVersionRequest || (exports.GetDocumentationVersionRequest = {}))
);
var DocumentationVersions;
(function (DocumentationVersions) {
  /**
   * @internal
   */
  DocumentationVersions.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DocumentationVersions = exports.DocumentationVersions || (exports.DocumentationVersions = {})));
var GetDocumentationVersionsRequest;
(function (GetDocumentationVersionsRequest) {
  /**
   * @internal
   */
  GetDocumentationVersionsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetDocumentationVersionsRequest =
    exports.GetDocumentationVersionsRequest || (exports.GetDocumentationVersionsRequest = {}))
);
var GetDomainNameRequest;
(function (GetDomainNameRequest) {
  /**
   * @internal
   */
  GetDomainNameRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDomainNameRequest = exports.GetDomainNameRequest || (exports.GetDomainNameRequest = {})));
var DomainNames;
(function (DomainNames) {
  /**
   * @internal
   */
  DomainNames.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DomainNames = exports.DomainNames || (exports.DomainNames = {})));
var GetDomainNamesRequest;
(function (GetDomainNamesRequest) {
  /**
   * @internal
   */
  GetDomainNamesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDomainNamesRequest = exports.GetDomainNamesRequest || (exports.GetDomainNamesRequest = {})));
var ExportResponse;
(function (ExportResponse) {
  /**
   * @internal
   */
  ExportResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ExportResponse = exports.ExportResponse || (exports.ExportResponse = {})));
var GetExportRequest;
(function (GetExportRequest) {
  /**
   * @internal
   */
  GetExportRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetExportRequest = exports.GetExportRequest || (exports.GetExportRequest = {})));
var GatewayResponse;
(function (GatewayResponse) {
  /**
   * @internal
   */
  GatewayResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GatewayResponse = exports.GatewayResponse || (exports.GatewayResponse = {})));
var GetGatewayResponseRequest;
(function (GetGatewayResponseRequest) {
  /**
   * @internal
   */
  GetGatewayResponseRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetGatewayResponseRequest = exports.GetGatewayResponseRequest || (exports.GetGatewayResponseRequest = {})));
var GatewayResponses;
(function (GatewayResponses) {
  /**
   * @internal
   */
  GatewayResponses.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GatewayResponses = exports.GatewayResponses || (exports.GatewayResponses = {})));
var GetGatewayResponsesRequest;
(function (GetGatewayResponsesRequest) {
  /**
   * @internal
   */
  GetGatewayResponsesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetGatewayResponsesRequest = exports.GetGatewayResponsesRequest || (exports.GetGatewayResponsesRequest = {})));
var GetIntegrationRequest;
(function (GetIntegrationRequest) {
  /**
   * @internal
   */
  GetIntegrationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetIntegrationRequest = exports.GetIntegrationRequest || (exports.GetIntegrationRequest = {})));
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
var GetMethodRequest;
(function (GetMethodRequest) {
  /**
   * @internal
   */
  GetMethodRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetMethodRequest = exports.GetMethodRequest || (exports.GetMethodRequest = {})));
var GetMethodResponseRequest;
(function (GetMethodResponseRequest) {
  /**
   * @internal
   */
  GetMethodResponseRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetMethodResponseRequest = exports.GetMethodResponseRequest || (exports.GetMethodResponseRequest = {})));
var GetModelRequest;
(function (GetModelRequest) {
  /**
   * @internal
   */
  GetModelRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetModelRequest = exports.GetModelRequest || (exports.GetModelRequest = {})));
var GetModelsRequest;
(function (GetModelsRequest) {
  /**
   * @internal
   */
  GetModelsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetModelsRequest = exports.GetModelsRequest || (exports.GetModelsRequest = {})));
var Models;
(function (Models) {
  /**
   * @internal
   */
  Models.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Models = exports.Models || (exports.Models = {})));
var GetModelTemplateRequest;
(function (GetModelTemplateRequest) {
  /**
   * @internal
   */
  GetModelTemplateRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetModelTemplateRequest = exports.GetModelTemplateRequest || (exports.GetModelTemplateRequest = {})));
var Template;
(function (Template) {
  /**
   * @internal
   */
  Template.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Template = exports.Template || (exports.Template = {})));
var GetRequestValidatorRequest;
(function (GetRequestValidatorRequest) {
  /**
   * @internal
   */
  GetRequestValidatorRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetRequestValidatorRequest = exports.GetRequestValidatorRequest || (exports.GetRequestValidatorRequest = {})));
var GetRequestValidatorsRequest;
(function (GetRequestValidatorsRequest) {
  /**
   * @internal
   */
  GetRequestValidatorsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetRequestValidatorsRequest = exports.GetRequestValidatorsRequest || (exports.GetRequestValidatorsRequest = {})));
var RequestValidators;
(function (RequestValidators) {
  /**
   * @internal
   */
  RequestValidators.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RequestValidators = exports.RequestValidators || (exports.RequestValidators = {})));
var GetResourceRequest;
(function (GetResourceRequest) {
  /**
   * @internal
   */
  GetResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetResourceRequest = exports.GetResourceRequest || (exports.GetResourceRequest = {})));
var GetResourcesRequest;
(function (GetResourcesRequest) {
  /**
   * @internal
   */
  GetResourcesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetResourcesRequest = exports.GetResourcesRequest || (exports.GetResourcesRequest = {})));
var Resources;
(function (Resources) {
  /**
   * @internal
   */
  Resources.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Resources = exports.Resources || (exports.Resources = {})));
var GetRestApiRequest;
(function (GetRestApiRequest) {
  /**
   * @internal
   */
  GetRestApiRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetRestApiRequest = exports.GetRestApiRequest || (exports.GetRestApiRequest = {})));
var GetRestApisRequest;
(function (GetRestApisRequest) {
  /**
   * @internal
   */
  GetRestApisRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetRestApisRequest = exports.GetRestApisRequest || (exports.GetRestApisRequest = {})));
var RestApis;
(function (RestApis) {
  /**
   * @internal
   */
  RestApis.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RestApis = exports.RestApis || (exports.RestApis = {})));
var GetSdkRequest;
(function (GetSdkRequest) {
  /**
   * @internal
   */
  GetSdkRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetSdkRequest = exports.GetSdkRequest || (exports.GetSdkRequest = {})));
var SdkResponse;
(function (SdkResponse) {
  /**
   * @internal
   */
  SdkResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SdkResponse = exports.SdkResponse || (exports.SdkResponse = {})));
var GetSdkTypeRequest;
(function (GetSdkTypeRequest) {
  /**
   * @internal
   */
  GetSdkTypeRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetSdkTypeRequest = exports.GetSdkTypeRequest || (exports.GetSdkTypeRequest = {})));
var SdkConfigurationProperty;
(function (SdkConfigurationProperty) {
  /**
   * @internal
   */
  SdkConfigurationProperty.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SdkConfigurationProperty = exports.SdkConfigurationProperty || (exports.SdkConfigurationProperty = {})));
var SdkType;
(function (SdkType) {
  /**
   * @internal
   */
  SdkType.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SdkType = exports.SdkType || (exports.SdkType = {})));
var GetSdkTypesRequest;
(function (GetSdkTypesRequest) {
  /**
   * @internal
   */
  GetSdkTypesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetSdkTypesRequest = exports.GetSdkTypesRequest || (exports.GetSdkTypesRequest = {})));
var SdkTypes;
(function (SdkTypes) {
  /**
   * @internal
   */
  SdkTypes.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SdkTypes = exports.SdkTypes || (exports.SdkTypes = {})));
var GetStageRequest;
(function (GetStageRequest) {
  /**
   * @internal
   */
  GetStageRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetStageRequest = exports.GetStageRequest || (exports.GetStageRequest = {})));
var GetStagesRequest;
(function (GetStagesRequest) {
  /**
   * @internal
   */
  GetStagesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetStagesRequest = exports.GetStagesRequest || (exports.GetStagesRequest = {})));
var Stages;
(function (Stages) {
  /**
   * @internal
   */
  Stages.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Stages = exports.Stages || (exports.Stages = {})));
var GetTagsRequest;
(function (GetTagsRequest) {
  /**
   * @internal
   */
  GetTagsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetTagsRequest = exports.GetTagsRequest || (exports.GetTagsRequest = {})));
var Tags;
(function (Tags) {
  /**
   * @internal
   */
  Tags.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Tags = exports.Tags || (exports.Tags = {})));
var GetUsageRequest;
(function (GetUsageRequest) {
  /**
   * @internal
   */
  GetUsageRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetUsageRequest = exports.GetUsageRequest || (exports.GetUsageRequest = {})));
var Usage;
(function (Usage) {
  /**
   * @internal
   */
  Usage.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Usage = exports.Usage || (exports.Usage = {})));
var GetUsagePlanRequest;
(function (GetUsagePlanRequest) {
  /**
   * @internal
   */
  GetUsagePlanRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetUsagePlanRequest = exports.GetUsagePlanRequest || (exports.GetUsagePlanRequest = {})));
var GetUsagePlanKeyRequest;
(function (GetUsagePlanKeyRequest) {
  /**
   * @internal
   */
  GetUsagePlanKeyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetUsagePlanKeyRequest = exports.GetUsagePlanKeyRequest || (exports.GetUsagePlanKeyRequest = {})));
var GetUsagePlanKeysRequest;
(function (GetUsagePlanKeysRequest) {
  /**
   * @internal
   */
  GetUsagePlanKeysRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetUsagePlanKeysRequest = exports.GetUsagePlanKeysRequest || (exports.GetUsagePlanKeysRequest = {})));
var UsagePlanKeys;
(function (UsagePlanKeys) {
  /**
   * @internal
   */
  UsagePlanKeys.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UsagePlanKeys = exports.UsagePlanKeys || (exports.UsagePlanKeys = {})));
var GetUsagePlansRequest;
(function (GetUsagePlansRequest) {
  /**
   * @internal
   */
  GetUsagePlansRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetUsagePlansRequest = exports.GetUsagePlansRequest || (exports.GetUsagePlansRequest = {})));
var UsagePlans;
(function (UsagePlans) {
  /**
   * @internal
   */
  UsagePlans.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UsagePlans = exports.UsagePlans || (exports.UsagePlans = {})));
var GetVpcLinkRequest;
(function (GetVpcLinkRequest) {
  /**
   * @internal
   */
  GetVpcLinkRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetVpcLinkRequest = exports.GetVpcLinkRequest || (exports.GetVpcLinkRequest = {})));
var GetVpcLinksRequest;
(function (GetVpcLinksRequest) {
  /**
   * @internal
   */
  GetVpcLinksRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetVpcLinksRequest = exports.GetVpcLinksRequest || (exports.GetVpcLinksRequest = {})));
var VpcLinks;
(function (VpcLinks) {
  /**
   * @internal
   */
  VpcLinks.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((VpcLinks = exports.VpcLinks || (exports.VpcLinks = {})));
var ImportApiKeysRequest;
(function (ImportApiKeysRequest) {
  /**
   * @internal
   */
  ImportApiKeysRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ImportApiKeysRequest = exports.ImportApiKeysRequest || (exports.ImportApiKeysRequest = {})));
var DocumentationPartIds;
(function (DocumentationPartIds) {
  /**
   * @internal
   */
  DocumentationPartIds.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DocumentationPartIds = exports.DocumentationPartIds || (exports.DocumentationPartIds = {})));
var PutMode;
(function (PutMode) {
  PutMode["Merge"] = "merge";
  PutMode["Overwrite"] = "overwrite";
})((PutMode = exports.PutMode || (exports.PutMode = {})));
var ImportDocumentationPartsRequest;
(function (ImportDocumentationPartsRequest) {
  /**
   * @internal
   */
  ImportDocumentationPartsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ImportDocumentationPartsRequest =
    exports.ImportDocumentationPartsRequest || (exports.ImportDocumentationPartsRequest = {}))
);
var ImportRestApiRequest;
(function (ImportRestApiRequest) {
  /**
   * @internal
   */
  ImportRestApiRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ImportRestApiRequest = exports.ImportRestApiRequest || (exports.ImportRestApiRequest = {})));
var PutGatewayResponseRequest;
(function (PutGatewayResponseRequest) {
  /**
   * @internal
   */
  PutGatewayResponseRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PutGatewayResponseRequest = exports.PutGatewayResponseRequest || (exports.PutGatewayResponseRequest = {})));
var PutIntegrationRequest;
(function (PutIntegrationRequest) {
  /**
   * @internal
   */
  PutIntegrationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PutIntegrationRequest = exports.PutIntegrationRequest || (exports.PutIntegrationRequest = {})));
var PutIntegrationResponseRequest;
(function (PutIntegrationResponseRequest) {
  /**
   * @internal
   */
  PutIntegrationResponseRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PutIntegrationResponseRequest =
    exports.PutIntegrationResponseRequest || (exports.PutIntegrationResponseRequest = {}))
);
var PutMethodRequest;
(function (PutMethodRequest) {
  /**
   * @internal
   */
  PutMethodRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PutMethodRequest = exports.PutMethodRequest || (exports.PutMethodRequest = {})));
var PutMethodResponseRequest;
(function (PutMethodResponseRequest) {
  /**
   * @internal
   */
  PutMethodResponseRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PutMethodResponseRequest = exports.PutMethodResponseRequest || (exports.PutMethodResponseRequest = {})));
var PutRestApiRequest;
(function (PutRestApiRequest) {
  /**
   * @internal
   */
  PutRestApiRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PutRestApiRequest = exports.PutRestApiRequest || (exports.PutRestApiRequest = {})));
var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {})));
var TestInvokeAuthorizerRequest;
(function (TestInvokeAuthorizerRequest) {
  /**
   * @internal
   */
  TestInvokeAuthorizerRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TestInvokeAuthorizerRequest = exports.TestInvokeAuthorizerRequest || (exports.TestInvokeAuthorizerRequest = {})));
var TestInvokeAuthorizerResponse;
(function (TestInvokeAuthorizerResponse) {
  /**
   * @internal
   */
  TestInvokeAuthorizerResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (TestInvokeAuthorizerResponse = exports.TestInvokeAuthorizerResponse || (exports.TestInvokeAuthorizerResponse = {}))
);
var TestInvokeMethodRequest;
(function (TestInvokeMethodRequest) {
  /**
   * @internal
   */
  TestInvokeMethodRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TestInvokeMethodRequest = exports.TestInvokeMethodRequest || (exports.TestInvokeMethodRequest = {})));
var TestInvokeMethodResponse;
(function (TestInvokeMethodResponse) {
  /**
   * @internal
   */
  TestInvokeMethodResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TestInvokeMethodResponse = exports.TestInvokeMethodResponse || (exports.TestInvokeMethodResponse = {})));
var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {})));
var PatchOperation;
(function (PatchOperation) {
  /**
   * @internal
   */
  PatchOperation.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PatchOperation = exports.PatchOperation || (exports.PatchOperation = {})));
var UpdateAccountRequest;
(function (UpdateAccountRequest) {
  /**
   * @internal
   */
  UpdateAccountRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateAccountRequest = exports.UpdateAccountRequest || (exports.UpdateAccountRequest = {})));
var UpdateApiKeyRequest;
(function (UpdateApiKeyRequest) {
  /**
   * @internal
   */
  UpdateApiKeyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateApiKeyRequest = exports.UpdateApiKeyRequest || (exports.UpdateApiKeyRequest = {})));
var UpdateAuthorizerRequest;
(function (UpdateAuthorizerRequest) {
  /**
   * @internal
   */
  UpdateAuthorizerRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateAuthorizerRequest = exports.UpdateAuthorizerRequest || (exports.UpdateAuthorizerRequest = {})));
var UpdateBasePathMappingRequest;
(function (UpdateBasePathMappingRequest) {
  /**
   * @internal
   */
  UpdateBasePathMappingRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateBasePathMappingRequest = exports.UpdateBasePathMappingRequest || (exports.UpdateBasePathMappingRequest = {}))
);
var UpdateClientCertificateRequest;
(function (UpdateClientCertificateRequest) {
  /**
   * @internal
   */
  UpdateClientCertificateRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateClientCertificateRequest =
    exports.UpdateClientCertificateRequest || (exports.UpdateClientCertificateRequest = {}))
);
var UpdateDeploymentRequest;
(function (UpdateDeploymentRequest) {
  /**
   * @internal
   */
  UpdateDeploymentRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateDeploymentRequest = exports.UpdateDeploymentRequest || (exports.UpdateDeploymentRequest = {})));
var UpdateDocumentationPartRequest;
(function (UpdateDocumentationPartRequest) {
  /**
   * @internal
   */
  UpdateDocumentationPartRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateDocumentationPartRequest =
    exports.UpdateDocumentationPartRequest || (exports.UpdateDocumentationPartRequest = {}))
);
var UpdateDocumentationVersionRequest;
(function (UpdateDocumentationVersionRequest) {
  /**
   * @internal
   */
  UpdateDocumentationVersionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateDocumentationVersionRequest =
    exports.UpdateDocumentationVersionRequest || (exports.UpdateDocumentationVersionRequest = {}))
);
var UpdateDomainNameRequest;
(function (UpdateDomainNameRequest) {
  /**
   * @internal
   */
  UpdateDomainNameRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateDomainNameRequest = exports.UpdateDomainNameRequest || (exports.UpdateDomainNameRequest = {})));
var UpdateGatewayResponseRequest;
(function (UpdateGatewayResponseRequest) {
  /**
   * @internal
   */
  UpdateGatewayResponseRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateGatewayResponseRequest = exports.UpdateGatewayResponseRequest || (exports.UpdateGatewayResponseRequest = {}))
);
var UpdateIntegrationRequest;
(function (UpdateIntegrationRequest) {
  /**
   * @internal
   */
  UpdateIntegrationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateIntegrationRequest = exports.UpdateIntegrationRequest || (exports.UpdateIntegrationRequest = {})));
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
var UpdateMethodRequest;
(function (UpdateMethodRequest) {
  /**
   * @internal
   */
  UpdateMethodRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateMethodRequest = exports.UpdateMethodRequest || (exports.UpdateMethodRequest = {})));
var UpdateMethodResponseRequest;
(function (UpdateMethodResponseRequest) {
  /**
   * @internal
   */
  UpdateMethodResponseRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateMethodResponseRequest = exports.UpdateMethodResponseRequest || (exports.UpdateMethodResponseRequest = {})));
var UpdateModelRequest;
(function (UpdateModelRequest) {
  /**
   * @internal
   */
  UpdateModelRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateModelRequest = exports.UpdateModelRequest || (exports.UpdateModelRequest = {})));
var UpdateRequestValidatorRequest;
(function (UpdateRequestValidatorRequest) {
  /**
   * @internal
   */
  UpdateRequestValidatorRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateRequestValidatorRequest =
    exports.UpdateRequestValidatorRequest || (exports.UpdateRequestValidatorRequest = {}))
);
var UpdateResourceRequest;
(function (UpdateResourceRequest) {
  /**
   * @internal
   */
  UpdateResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateResourceRequest = exports.UpdateResourceRequest || (exports.UpdateResourceRequest = {})));
var UpdateRestApiRequest;
(function (UpdateRestApiRequest) {
  /**
   * @internal
   */
  UpdateRestApiRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateRestApiRequest = exports.UpdateRestApiRequest || (exports.UpdateRestApiRequest = {})));
var UpdateStageRequest;
(function (UpdateStageRequest) {
  /**
   * @internal
   */
  UpdateStageRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateStageRequest = exports.UpdateStageRequest || (exports.UpdateStageRequest = {})));
var UpdateUsageRequest;
(function (UpdateUsageRequest) {
  /**
   * @internal
   */
  UpdateUsageRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateUsageRequest = exports.UpdateUsageRequest || (exports.UpdateUsageRequest = {})));
var UpdateUsagePlanRequest;
(function (UpdateUsagePlanRequest) {
  /**
   * @internal
   */
  UpdateUsagePlanRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateUsagePlanRequest = exports.UpdateUsagePlanRequest || (exports.UpdateUsagePlanRequest = {})));
var UpdateVpcLinkRequest;
(function (UpdateVpcLinkRequest) {
  /**
   * @internal
   */
  UpdateVpcLinkRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateVpcLinkRequest = exports.UpdateVpcLinkRequest || (exports.UpdateVpcLinkRequest = {})));
//# sourceMappingURL=models_0.js.map
