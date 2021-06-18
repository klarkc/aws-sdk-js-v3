"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGraphqlApiRequest =
  exports.UserPoolConfig =
  exports.DefaultAction =
  exports.LogConfig =
  exports.FieldLogLevel =
  exports.CreateFunctionResponse =
  exports.FunctionConfiguration =
  exports.CreateFunctionRequest =
  exports.SyncConfig =
  exports.LambdaConflictHandlerConfig =
  exports.ConflictHandlerType =
  exports.ConflictDetectionType =
  exports.CreateDataSourceResponse =
  exports.DataSource =
  exports.CreateDataSourceRequest =
  exports.DataSourceType =
  exports.RelationalDatabaseDataSourceConfig =
  exports.RelationalDatabaseSourceType =
  exports.RdsHttpEndpointConfig =
  exports.LambdaDataSourceConfig =
  exports.HttpDataSourceConfig =
  exports.ElasticsearchDataSourceConfig =
  exports.DynamodbDataSourceConfig =
  exports.DeltaSyncConfig =
  exports.LimitExceededException =
  exports.CreateApiKeyResponse =
  exports.CreateApiKeyRequest =
  exports.UnauthorizedException =
  exports.NotFoundException =
  exports.InternalFailureException =
  exports.CreateApiCacheResponse =
  exports.CreateApiCacheRequest =
  exports.ConcurrentModificationException =
  exports.BadRequestException =
  exports.AuthorizationConfig =
  exports.AwsIamConfig =
  exports.AuthorizationType =
  exports.ApiLimitExceededException =
  exports.ApiKeyValidityOutOfBoundsException =
  exports.ApiKeyLimitExceededException =
  exports.ApiKey =
  exports.ApiCache =
  exports.ApiCacheType =
  exports.ApiCacheStatus =
  exports.ApiCachingBehavior =
  exports.AdditionalAuthenticationProvider =
  exports.CognitoUserPoolConfig =
  exports.OpenIDConnectConfig =
  exports.AuthenticationType =
  exports.AccessDeniedException =
    void 0;
exports.ListDataSourcesRequest =
  exports.ListApiKeysResponse =
  exports.ListApiKeysRequest =
  exports.GetTypeResponse =
  exports.GetTypeRequest =
  exports.GetSchemaCreationStatusResponse =
  exports.SchemaStatus =
  exports.GetSchemaCreationStatusRequest =
  exports.GetResolverResponse =
  exports.GetResolverRequest =
  exports.GraphQLSchemaException =
  exports.GetIntrospectionSchemaResponse =
  exports.GetIntrospectionSchemaRequest =
  exports.OutputType =
  exports.GetGraphqlApiResponse =
  exports.GetGraphqlApiRequest =
  exports.GetFunctionResponse =
  exports.GetFunctionRequest =
  exports.GetDataSourceResponse =
  exports.GetDataSourceRequest =
  exports.GetApiCacheResponse =
  exports.GetApiCacheRequest =
  exports.FlushApiCacheResponse =
  exports.FlushApiCacheRequest =
  exports.DeleteTypeResponse =
  exports.DeleteTypeRequest =
  exports.DeleteResolverResponse =
  exports.DeleteResolverRequest =
  exports.DeleteGraphqlApiResponse =
  exports.DeleteGraphqlApiRequest =
  exports.DeleteFunctionResponse =
  exports.DeleteFunctionRequest =
  exports.DeleteDataSourceResponse =
  exports.DeleteDataSourceRequest =
  exports.DeleteApiKeyResponse =
  exports.DeleteApiKeyRequest =
  exports.DeleteApiCacheResponse =
  exports.DeleteApiCacheRequest =
  exports.CreateTypeResponse =
  exports.Type =
  exports.CreateTypeRequest =
  exports.TypeDefinitionFormat =
  exports.CreateResolverResponse =
  exports.Resolver =
  exports.CreateResolverRequest =
  exports.PipelineConfig =
  exports.ResolverKind =
  exports.CachingConfig =
  exports.CreateGraphqlApiResponse =
  exports.GraphqlApi =
    void 0;
exports.UpdateTypeResponse =
  exports.UpdateTypeRequest =
  exports.UpdateResolverResponse =
  exports.UpdateResolverRequest =
  exports.UpdateGraphqlApiResponse =
  exports.UpdateGraphqlApiRequest =
  exports.UpdateFunctionResponse =
  exports.UpdateFunctionRequest =
  exports.UpdateDataSourceResponse =
  exports.UpdateDataSourceRequest =
  exports.UpdateApiKeyResponse =
  exports.UpdateApiKeyRequest =
  exports.UpdateApiCacheResponse =
  exports.UpdateApiCacheRequest =
  exports.UntagResourceResponse =
  exports.UntagResourceRequest =
  exports.TagResourceResponse =
  exports.TagResourceRequest =
  exports.StartSchemaCreationResponse =
  exports.StartSchemaCreationRequest =
  exports.ListTypesResponse =
  exports.ListTypesRequest =
  exports.ListTagsForResourceResponse =
  exports.ListTagsForResourceRequest =
  exports.ListResolversByFunctionResponse =
  exports.ListResolversByFunctionRequest =
  exports.ListResolversResponse =
  exports.ListResolversRequest =
  exports.ListGraphqlApisResponse =
  exports.ListGraphqlApisRequest =
  exports.ListFunctionsResponse =
  exports.ListFunctionsRequest =
  exports.ListDataSourcesResponse =
    void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
  /**
   * @internal
   */
  AccessDeniedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {})));
var AuthenticationType;
(function (AuthenticationType) {
  AuthenticationType["AMAZON_COGNITO_USER_POOLS"] = "AMAZON_COGNITO_USER_POOLS";
  AuthenticationType["API_KEY"] = "API_KEY";
  AuthenticationType["AWS_IAM"] = "AWS_IAM";
  AuthenticationType["OPENID_CONNECT"] = "OPENID_CONNECT";
})((AuthenticationType = exports.AuthenticationType || (exports.AuthenticationType = {})));
var OpenIDConnectConfig;
(function (OpenIDConnectConfig) {
  /**
   * @internal
   */
  OpenIDConnectConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((OpenIDConnectConfig = exports.OpenIDConnectConfig || (exports.OpenIDConnectConfig = {})));
var CognitoUserPoolConfig;
(function (CognitoUserPoolConfig) {
  /**
   * @internal
   */
  CognitoUserPoolConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CognitoUserPoolConfig = exports.CognitoUserPoolConfig || (exports.CognitoUserPoolConfig = {})));
var AdditionalAuthenticationProvider;
(function (AdditionalAuthenticationProvider) {
  /**
   * @internal
   */
  AdditionalAuthenticationProvider.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AdditionalAuthenticationProvider =
    exports.AdditionalAuthenticationProvider || (exports.AdditionalAuthenticationProvider = {}))
);
var ApiCachingBehavior;
(function (ApiCachingBehavior) {
  ApiCachingBehavior["FULL_REQUEST_CACHING"] = "FULL_REQUEST_CACHING";
  ApiCachingBehavior["PER_RESOLVER_CACHING"] = "PER_RESOLVER_CACHING";
})((ApiCachingBehavior = exports.ApiCachingBehavior || (exports.ApiCachingBehavior = {})));
var ApiCacheStatus;
(function (ApiCacheStatus) {
  ApiCacheStatus["AVAILABLE"] = "AVAILABLE";
  ApiCacheStatus["CREATING"] = "CREATING";
  ApiCacheStatus["DELETING"] = "DELETING";
  ApiCacheStatus["FAILED"] = "FAILED";
  ApiCacheStatus["MODIFYING"] = "MODIFYING";
})((ApiCacheStatus = exports.ApiCacheStatus || (exports.ApiCacheStatus = {})));
var ApiCacheType;
(function (ApiCacheType) {
  ApiCacheType["LARGE"] = "LARGE";
  ApiCacheType["LARGE_12X"] = "LARGE_12X";
  ApiCacheType["LARGE_2X"] = "LARGE_2X";
  ApiCacheType["LARGE_4X"] = "LARGE_4X";
  ApiCacheType["LARGE_8X"] = "LARGE_8X";
  ApiCacheType["MEDIUM"] = "MEDIUM";
  ApiCacheType["R4_2XLARGE"] = "R4_2XLARGE";
  ApiCacheType["R4_4XLARGE"] = "R4_4XLARGE";
  ApiCacheType["R4_8XLARGE"] = "R4_8XLARGE";
  ApiCacheType["R4_LARGE"] = "R4_LARGE";
  ApiCacheType["R4_XLARGE"] = "R4_XLARGE";
  ApiCacheType["SMALL"] = "SMALL";
  ApiCacheType["T2_MEDIUM"] = "T2_MEDIUM";
  ApiCacheType["T2_SMALL"] = "T2_SMALL";
  ApiCacheType["XLARGE"] = "XLARGE";
})((ApiCacheType = exports.ApiCacheType || (exports.ApiCacheType = {})));
var ApiCache;
(function (ApiCache) {
  /**
   * @internal
   */
  ApiCache.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ApiCache = exports.ApiCache || (exports.ApiCache = {})));
var ApiKey;
(function (ApiKey) {
  /**
   * @internal
   */
  ApiKey.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ApiKey = exports.ApiKey || (exports.ApiKey = {})));
var ApiKeyLimitExceededException;
(function (ApiKeyLimitExceededException) {
  /**
   * @internal
   */
  ApiKeyLimitExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ApiKeyLimitExceededException = exports.ApiKeyLimitExceededException || (exports.ApiKeyLimitExceededException = {}))
);
var ApiKeyValidityOutOfBoundsException;
(function (ApiKeyValidityOutOfBoundsException) {
  /**
   * @internal
   */
  ApiKeyValidityOutOfBoundsException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ApiKeyValidityOutOfBoundsException =
    exports.ApiKeyValidityOutOfBoundsException || (exports.ApiKeyValidityOutOfBoundsException = {}))
);
var ApiLimitExceededException;
(function (ApiLimitExceededException) {
  /**
   * @internal
   */
  ApiLimitExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ApiLimitExceededException = exports.ApiLimitExceededException || (exports.ApiLimitExceededException = {})));
var AuthorizationType;
(function (AuthorizationType) {
  AuthorizationType["AWS_IAM"] = "AWS_IAM";
})((AuthorizationType = exports.AuthorizationType || (exports.AuthorizationType = {})));
var AwsIamConfig;
(function (AwsIamConfig) {
  /**
   * @internal
   */
  AwsIamConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AwsIamConfig = exports.AwsIamConfig || (exports.AwsIamConfig = {})));
var AuthorizationConfig;
(function (AuthorizationConfig) {
  /**
   * @internal
   */
  AuthorizationConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AuthorizationConfig = exports.AuthorizationConfig || (exports.AuthorizationConfig = {})));
var BadRequestException;
(function (BadRequestException) {
  /**
   * @internal
   */
  BadRequestException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BadRequestException = exports.BadRequestException || (exports.BadRequestException = {})));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
  /**
   * @internal
   */
  ConcurrentModificationException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ConcurrentModificationException =
    exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}))
);
var CreateApiCacheRequest;
(function (CreateApiCacheRequest) {
  /**
   * @internal
   */
  CreateApiCacheRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateApiCacheRequest = exports.CreateApiCacheRequest || (exports.CreateApiCacheRequest = {})));
var CreateApiCacheResponse;
(function (CreateApiCacheResponse) {
  /**
   * @internal
   */
  CreateApiCacheResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateApiCacheResponse = exports.CreateApiCacheResponse || (exports.CreateApiCacheResponse = {})));
var InternalFailureException;
(function (InternalFailureException) {
  /**
   * @internal
   */
  InternalFailureException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InternalFailureException = exports.InternalFailureException || (exports.InternalFailureException = {})));
var NotFoundException;
(function (NotFoundException) {
  /**
   * @internal
   */
  NotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NotFoundException = exports.NotFoundException || (exports.NotFoundException = {})));
var UnauthorizedException;
(function (UnauthorizedException) {
  /**
   * @internal
   */
  UnauthorizedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UnauthorizedException = exports.UnauthorizedException || (exports.UnauthorizedException = {})));
var CreateApiKeyRequest;
(function (CreateApiKeyRequest) {
  /**
   * @internal
   */
  CreateApiKeyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateApiKeyRequest = exports.CreateApiKeyRequest || (exports.CreateApiKeyRequest = {})));
var CreateApiKeyResponse;
(function (CreateApiKeyResponse) {
  /**
   * @internal
   */
  CreateApiKeyResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateApiKeyResponse = exports.CreateApiKeyResponse || (exports.CreateApiKeyResponse = {})));
var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {})));
var DeltaSyncConfig;
(function (DeltaSyncConfig) {
  /**
   * @internal
   */
  DeltaSyncConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeltaSyncConfig = exports.DeltaSyncConfig || (exports.DeltaSyncConfig = {})));
var DynamodbDataSourceConfig;
(function (DynamodbDataSourceConfig) {
  /**
   * @internal
   */
  DynamodbDataSourceConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DynamodbDataSourceConfig = exports.DynamodbDataSourceConfig || (exports.DynamodbDataSourceConfig = {})));
var ElasticsearchDataSourceConfig;
(function (ElasticsearchDataSourceConfig) {
  /**
   * @internal
   */
  ElasticsearchDataSourceConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ElasticsearchDataSourceConfig =
    exports.ElasticsearchDataSourceConfig || (exports.ElasticsearchDataSourceConfig = {}))
);
var HttpDataSourceConfig;
(function (HttpDataSourceConfig) {
  /**
   * @internal
   */
  HttpDataSourceConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((HttpDataSourceConfig = exports.HttpDataSourceConfig || (exports.HttpDataSourceConfig = {})));
var LambdaDataSourceConfig;
(function (LambdaDataSourceConfig) {
  /**
   * @internal
   */
  LambdaDataSourceConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LambdaDataSourceConfig = exports.LambdaDataSourceConfig || (exports.LambdaDataSourceConfig = {})));
var RdsHttpEndpointConfig;
(function (RdsHttpEndpointConfig) {
  /**
   * @internal
   */
  RdsHttpEndpointConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RdsHttpEndpointConfig = exports.RdsHttpEndpointConfig || (exports.RdsHttpEndpointConfig = {})));
var RelationalDatabaseSourceType;
(function (RelationalDatabaseSourceType) {
  RelationalDatabaseSourceType["RDS_HTTP_ENDPOINT"] = "RDS_HTTP_ENDPOINT";
})(
  (RelationalDatabaseSourceType = exports.RelationalDatabaseSourceType || (exports.RelationalDatabaseSourceType = {}))
);
var RelationalDatabaseDataSourceConfig;
(function (RelationalDatabaseDataSourceConfig) {
  /**
   * @internal
   */
  RelationalDatabaseDataSourceConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (RelationalDatabaseDataSourceConfig =
    exports.RelationalDatabaseDataSourceConfig || (exports.RelationalDatabaseDataSourceConfig = {}))
);
var DataSourceType;
(function (DataSourceType) {
  DataSourceType["AMAZON_DYNAMODB"] = "AMAZON_DYNAMODB";
  DataSourceType["AMAZON_ELASTICSEARCH"] = "AMAZON_ELASTICSEARCH";
  DataSourceType["AWS_LAMBDA"] = "AWS_LAMBDA";
  DataSourceType["HTTP"] = "HTTP";
  DataSourceType["NONE"] = "NONE";
  DataSourceType["RELATIONAL_DATABASE"] = "RELATIONAL_DATABASE";
})((DataSourceType = exports.DataSourceType || (exports.DataSourceType = {})));
var CreateDataSourceRequest;
(function (CreateDataSourceRequest) {
  /**
   * @internal
   */
  CreateDataSourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateDataSourceRequest = exports.CreateDataSourceRequest || (exports.CreateDataSourceRequest = {})));
var DataSource;
(function (DataSource) {
  /**
   * @internal
   */
  DataSource.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DataSource = exports.DataSource || (exports.DataSource = {})));
var CreateDataSourceResponse;
(function (CreateDataSourceResponse) {
  /**
   * @internal
   */
  CreateDataSourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateDataSourceResponse = exports.CreateDataSourceResponse || (exports.CreateDataSourceResponse = {})));
var ConflictDetectionType;
(function (ConflictDetectionType) {
  ConflictDetectionType["NONE"] = "NONE";
  ConflictDetectionType["VERSION"] = "VERSION";
})((ConflictDetectionType = exports.ConflictDetectionType || (exports.ConflictDetectionType = {})));
var ConflictHandlerType;
(function (ConflictHandlerType) {
  ConflictHandlerType["AUTOMERGE"] = "AUTOMERGE";
  ConflictHandlerType["LAMBDA"] = "LAMBDA";
  ConflictHandlerType["NONE"] = "NONE";
  ConflictHandlerType["OPTIMISTIC_CONCURRENCY"] = "OPTIMISTIC_CONCURRENCY";
})((ConflictHandlerType = exports.ConflictHandlerType || (exports.ConflictHandlerType = {})));
var LambdaConflictHandlerConfig;
(function (LambdaConflictHandlerConfig) {
  /**
   * @internal
   */
  LambdaConflictHandlerConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LambdaConflictHandlerConfig = exports.LambdaConflictHandlerConfig || (exports.LambdaConflictHandlerConfig = {})));
var SyncConfig;
(function (SyncConfig) {
  /**
   * @internal
   */
  SyncConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SyncConfig = exports.SyncConfig || (exports.SyncConfig = {})));
var CreateFunctionRequest;
(function (CreateFunctionRequest) {
  /**
   * @internal
   */
  CreateFunctionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateFunctionRequest = exports.CreateFunctionRequest || (exports.CreateFunctionRequest = {})));
var FunctionConfiguration;
(function (FunctionConfiguration) {
  /**
   * @internal
   */
  FunctionConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FunctionConfiguration = exports.FunctionConfiguration || (exports.FunctionConfiguration = {})));
var CreateFunctionResponse;
(function (CreateFunctionResponse) {
  /**
   * @internal
   */
  CreateFunctionResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateFunctionResponse = exports.CreateFunctionResponse || (exports.CreateFunctionResponse = {})));
var FieldLogLevel;
(function (FieldLogLevel) {
  FieldLogLevel["ALL"] = "ALL";
  FieldLogLevel["ERROR"] = "ERROR";
  FieldLogLevel["NONE"] = "NONE";
})((FieldLogLevel = exports.FieldLogLevel || (exports.FieldLogLevel = {})));
var LogConfig;
(function (LogConfig) {
  /**
   * @internal
   */
  LogConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LogConfig = exports.LogConfig || (exports.LogConfig = {})));
var DefaultAction;
(function (DefaultAction) {
  DefaultAction["ALLOW"] = "ALLOW";
  DefaultAction["DENY"] = "DENY";
})((DefaultAction = exports.DefaultAction || (exports.DefaultAction = {})));
var UserPoolConfig;
(function (UserPoolConfig) {
  /**
   * @internal
   */
  UserPoolConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UserPoolConfig = exports.UserPoolConfig || (exports.UserPoolConfig = {})));
var CreateGraphqlApiRequest;
(function (CreateGraphqlApiRequest) {
  /**
   * @internal
   */
  CreateGraphqlApiRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateGraphqlApiRequest = exports.CreateGraphqlApiRequest || (exports.CreateGraphqlApiRequest = {})));
var GraphqlApi;
(function (GraphqlApi) {
  /**
   * @internal
   */
  GraphqlApi.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GraphqlApi = exports.GraphqlApi || (exports.GraphqlApi = {})));
var CreateGraphqlApiResponse;
(function (CreateGraphqlApiResponse) {
  /**
   * @internal
   */
  CreateGraphqlApiResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateGraphqlApiResponse = exports.CreateGraphqlApiResponse || (exports.CreateGraphqlApiResponse = {})));
var CachingConfig;
(function (CachingConfig) {
  /**
   * @internal
   */
  CachingConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CachingConfig = exports.CachingConfig || (exports.CachingConfig = {})));
var ResolverKind;
(function (ResolverKind) {
  ResolverKind["PIPELINE"] = "PIPELINE";
  ResolverKind["UNIT"] = "UNIT";
})((ResolverKind = exports.ResolverKind || (exports.ResolverKind = {})));
var PipelineConfig;
(function (PipelineConfig) {
  /**
   * @internal
   */
  PipelineConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PipelineConfig = exports.PipelineConfig || (exports.PipelineConfig = {})));
var CreateResolverRequest;
(function (CreateResolverRequest) {
  /**
   * @internal
   */
  CreateResolverRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateResolverRequest = exports.CreateResolverRequest || (exports.CreateResolverRequest = {})));
var Resolver;
(function (Resolver) {
  /**
   * @internal
   */
  Resolver.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Resolver = exports.Resolver || (exports.Resolver = {})));
var CreateResolverResponse;
(function (CreateResolverResponse) {
  /**
   * @internal
   */
  CreateResolverResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateResolverResponse = exports.CreateResolverResponse || (exports.CreateResolverResponse = {})));
var TypeDefinitionFormat;
(function (TypeDefinitionFormat) {
  TypeDefinitionFormat["JSON"] = "JSON";
  TypeDefinitionFormat["SDL"] = "SDL";
})((TypeDefinitionFormat = exports.TypeDefinitionFormat || (exports.TypeDefinitionFormat = {})));
var CreateTypeRequest;
(function (CreateTypeRequest) {
  /**
   * @internal
   */
  CreateTypeRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateTypeRequest = exports.CreateTypeRequest || (exports.CreateTypeRequest = {})));
var Type;
(function (Type) {
  /**
   * @internal
   */
  Type.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Type = exports.Type || (exports.Type = {})));
var CreateTypeResponse;
(function (CreateTypeResponse) {
  /**
   * @internal
   */
  CreateTypeResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateTypeResponse = exports.CreateTypeResponse || (exports.CreateTypeResponse = {})));
var DeleteApiCacheRequest;
(function (DeleteApiCacheRequest) {
  /**
   * @internal
   */
  DeleteApiCacheRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteApiCacheRequest = exports.DeleteApiCacheRequest || (exports.DeleteApiCacheRequest = {})));
var DeleteApiCacheResponse;
(function (DeleteApiCacheResponse) {
  /**
   * @internal
   */
  DeleteApiCacheResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteApiCacheResponse = exports.DeleteApiCacheResponse || (exports.DeleteApiCacheResponse = {})));
var DeleteApiKeyRequest;
(function (DeleteApiKeyRequest) {
  /**
   * @internal
   */
  DeleteApiKeyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteApiKeyRequest = exports.DeleteApiKeyRequest || (exports.DeleteApiKeyRequest = {})));
var DeleteApiKeyResponse;
(function (DeleteApiKeyResponse) {
  /**
   * @internal
   */
  DeleteApiKeyResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteApiKeyResponse = exports.DeleteApiKeyResponse || (exports.DeleteApiKeyResponse = {})));
var DeleteDataSourceRequest;
(function (DeleteDataSourceRequest) {
  /**
   * @internal
   */
  DeleteDataSourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteDataSourceRequest = exports.DeleteDataSourceRequest || (exports.DeleteDataSourceRequest = {})));
var DeleteDataSourceResponse;
(function (DeleteDataSourceResponse) {
  /**
   * @internal
   */
  DeleteDataSourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteDataSourceResponse = exports.DeleteDataSourceResponse || (exports.DeleteDataSourceResponse = {})));
var DeleteFunctionRequest;
(function (DeleteFunctionRequest) {
  /**
   * @internal
   */
  DeleteFunctionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteFunctionRequest = exports.DeleteFunctionRequest || (exports.DeleteFunctionRequest = {})));
var DeleteFunctionResponse;
(function (DeleteFunctionResponse) {
  /**
   * @internal
   */
  DeleteFunctionResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteFunctionResponse = exports.DeleteFunctionResponse || (exports.DeleteFunctionResponse = {})));
var DeleteGraphqlApiRequest;
(function (DeleteGraphqlApiRequest) {
  /**
   * @internal
   */
  DeleteGraphqlApiRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteGraphqlApiRequest = exports.DeleteGraphqlApiRequest || (exports.DeleteGraphqlApiRequest = {})));
var DeleteGraphqlApiResponse;
(function (DeleteGraphqlApiResponse) {
  /**
   * @internal
   */
  DeleteGraphqlApiResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteGraphqlApiResponse = exports.DeleteGraphqlApiResponse || (exports.DeleteGraphqlApiResponse = {})));
var DeleteResolverRequest;
(function (DeleteResolverRequest) {
  /**
   * @internal
   */
  DeleteResolverRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteResolverRequest = exports.DeleteResolverRequest || (exports.DeleteResolverRequest = {})));
var DeleteResolverResponse;
(function (DeleteResolverResponse) {
  /**
   * @internal
   */
  DeleteResolverResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteResolverResponse = exports.DeleteResolverResponse || (exports.DeleteResolverResponse = {})));
var DeleteTypeRequest;
(function (DeleteTypeRequest) {
  /**
   * @internal
   */
  DeleteTypeRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteTypeRequest = exports.DeleteTypeRequest || (exports.DeleteTypeRequest = {})));
var DeleteTypeResponse;
(function (DeleteTypeResponse) {
  /**
   * @internal
   */
  DeleteTypeResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteTypeResponse = exports.DeleteTypeResponse || (exports.DeleteTypeResponse = {})));
var FlushApiCacheRequest;
(function (FlushApiCacheRequest) {
  /**
   * @internal
   */
  FlushApiCacheRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FlushApiCacheRequest = exports.FlushApiCacheRequest || (exports.FlushApiCacheRequest = {})));
var FlushApiCacheResponse;
(function (FlushApiCacheResponse) {
  /**
   * @internal
   */
  FlushApiCacheResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((FlushApiCacheResponse = exports.FlushApiCacheResponse || (exports.FlushApiCacheResponse = {})));
var GetApiCacheRequest;
(function (GetApiCacheRequest) {
  /**
   * @internal
   */
  GetApiCacheRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetApiCacheRequest = exports.GetApiCacheRequest || (exports.GetApiCacheRequest = {})));
var GetApiCacheResponse;
(function (GetApiCacheResponse) {
  /**
   * @internal
   */
  GetApiCacheResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetApiCacheResponse = exports.GetApiCacheResponse || (exports.GetApiCacheResponse = {})));
var GetDataSourceRequest;
(function (GetDataSourceRequest) {
  /**
   * @internal
   */
  GetDataSourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDataSourceRequest = exports.GetDataSourceRequest || (exports.GetDataSourceRequest = {})));
var GetDataSourceResponse;
(function (GetDataSourceResponse) {
  /**
   * @internal
   */
  GetDataSourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDataSourceResponse = exports.GetDataSourceResponse || (exports.GetDataSourceResponse = {})));
var GetFunctionRequest;
(function (GetFunctionRequest) {
  /**
   * @internal
   */
  GetFunctionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetFunctionRequest = exports.GetFunctionRequest || (exports.GetFunctionRequest = {})));
var GetFunctionResponse;
(function (GetFunctionResponse) {
  /**
   * @internal
   */
  GetFunctionResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetFunctionResponse = exports.GetFunctionResponse || (exports.GetFunctionResponse = {})));
var GetGraphqlApiRequest;
(function (GetGraphqlApiRequest) {
  /**
   * @internal
   */
  GetGraphqlApiRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetGraphqlApiRequest = exports.GetGraphqlApiRequest || (exports.GetGraphqlApiRequest = {})));
var GetGraphqlApiResponse;
(function (GetGraphqlApiResponse) {
  /**
   * @internal
   */
  GetGraphqlApiResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetGraphqlApiResponse = exports.GetGraphqlApiResponse || (exports.GetGraphqlApiResponse = {})));
var OutputType;
(function (OutputType) {
  OutputType["JSON"] = "JSON";
  OutputType["SDL"] = "SDL";
})((OutputType = exports.OutputType || (exports.OutputType = {})));
var GetIntrospectionSchemaRequest;
(function (GetIntrospectionSchemaRequest) {
  /**
   * @internal
   */
  GetIntrospectionSchemaRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetIntrospectionSchemaRequest =
    exports.GetIntrospectionSchemaRequest || (exports.GetIntrospectionSchemaRequest = {}))
);
var GetIntrospectionSchemaResponse;
(function (GetIntrospectionSchemaResponse) {
  /**
   * @internal
   */
  GetIntrospectionSchemaResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetIntrospectionSchemaResponse =
    exports.GetIntrospectionSchemaResponse || (exports.GetIntrospectionSchemaResponse = {}))
);
var GraphQLSchemaException;
(function (GraphQLSchemaException) {
  /**
   * @internal
   */
  GraphQLSchemaException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GraphQLSchemaException = exports.GraphQLSchemaException || (exports.GraphQLSchemaException = {})));
var GetResolverRequest;
(function (GetResolverRequest) {
  /**
   * @internal
   */
  GetResolverRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetResolverRequest = exports.GetResolverRequest || (exports.GetResolverRequest = {})));
var GetResolverResponse;
(function (GetResolverResponse) {
  /**
   * @internal
   */
  GetResolverResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetResolverResponse = exports.GetResolverResponse || (exports.GetResolverResponse = {})));
var GetSchemaCreationStatusRequest;
(function (GetSchemaCreationStatusRequest) {
  /**
   * @internal
   */
  GetSchemaCreationStatusRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetSchemaCreationStatusRequest =
    exports.GetSchemaCreationStatusRequest || (exports.GetSchemaCreationStatusRequest = {}))
);
var SchemaStatus;
(function (SchemaStatus) {
  SchemaStatus["Active"] = "ACTIVE";
  SchemaStatus["Deleting"] = "DELETING";
  SchemaStatus["Failed"] = "FAILED";
  SchemaStatus["NotApplicable"] = "NOT_APPLICABLE";
  SchemaStatus["Processing"] = "PROCESSING";
  SchemaStatus["Success"] = "SUCCESS";
})((SchemaStatus = exports.SchemaStatus || (exports.SchemaStatus = {})));
var GetSchemaCreationStatusResponse;
(function (GetSchemaCreationStatusResponse) {
  /**
   * @internal
   */
  GetSchemaCreationStatusResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (GetSchemaCreationStatusResponse =
    exports.GetSchemaCreationStatusResponse || (exports.GetSchemaCreationStatusResponse = {}))
);
var GetTypeRequest;
(function (GetTypeRequest) {
  /**
   * @internal
   */
  GetTypeRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetTypeRequest = exports.GetTypeRequest || (exports.GetTypeRequest = {})));
var GetTypeResponse;
(function (GetTypeResponse) {
  /**
   * @internal
   */
  GetTypeResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetTypeResponse = exports.GetTypeResponse || (exports.GetTypeResponse = {})));
var ListApiKeysRequest;
(function (ListApiKeysRequest) {
  /**
   * @internal
   */
  ListApiKeysRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListApiKeysRequest = exports.ListApiKeysRequest || (exports.ListApiKeysRequest = {})));
var ListApiKeysResponse;
(function (ListApiKeysResponse) {
  /**
   * @internal
   */
  ListApiKeysResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListApiKeysResponse = exports.ListApiKeysResponse || (exports.ListApiKeysResponse = {})));
var ListDataSourcesRequest;
(function (ListDataSourcesRequest) {
  /**
   * @internal
   */
  ListDataSourcesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListDataSourcesRequest = exports.ListDataSourcesRequest || (exports.ListDataSourcesRequest = {})));
var ListDataSourcesResponse;
(function (ListDataSourcesResponse) {
  /**
   * @internal
   */
  ListDataSourcesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListDataSourcesResponse = exports.ListDataSourcesResponse || (exports.ListDataSourcesResponse = {})));
var ListFunctionsRequest;
(function (ListFunctionsRequest) {
  /**
   * @internal
   */
  ListFunctionsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListFunctionsRequest = exports.ListFunctionsRequest || (exports.ListFunctionsRequest = {})));
var ListFunctionsResponse;
(function (ListFunctionsResponse) {
  /**
   * @internal
   */
  ListFunctionsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListFunctionsResponse = exports.ListFunctionsResponse || (exports.ListFunctionsResponse = {})));
var ListGraphqlApisRequest;
(function (ListGraphqlApisRequest) {
  /**
   * @internal
   */
  ListGraphqlApisRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListGraphqlApisRequest = exports.ListGraphqlApisRequest || (exports.ListGraphqlApisRequest = {})));
var ListGraphqlApisResponse;
(function (ListGraphqlApisResponse) {
  /**
   * @internal
   */
  ListGraphqlApisResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListGraphqlApisResponse = exports.ListGraphqlApisResponse || (exports.ListGraphqlApisResponse = {})));
var ListResolversRequest;
(function (ListResolversRequest) {
  /**
   * @internal
   */
  ListResolversRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListResolversRequest = exports.ListResolversRequest || (exports.ListResolversRequest = {})));
var ListResolversResponse;
(function (ListResolversResponse) {
  /**
   * @internal
   */
  ListResolversResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListResolversResponse = exports.ListResolversResponse || (exports.ListResolversResponse = {})));
var ListResolversByFunctionRequest;
(function (ListResolversByFunctionRequest) {
  /**
   * @internal
   */
  ListResolversByFunctionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListResolversByFunctionRequest =
    exports.ListResolversByFunctionRequest || (exports.ListResolversByFunctionRequest = {}))
);
var ListResolversByFunctionResponse;
(function (ListResolversByFunctionResponse) {
  /**
   * @internal
   */
  ListResolversByFunctionResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListResolversByFunctionResponse =
    exports.ListResolversByFunctionResponse || (exports.ListResolversByFunctionResponse = {}))
);
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
  /**
   * @internal
   */
  ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {})));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
  /**
   * @internal
   */
  ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {})));
var ListTypesRequest;
(function (ListTypesRequest) {
  /**
   * @internal
   */
  ListTypesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTypesRequest = exports.ListTypesRequest || (exports.ListTypesRequest = {})));
var ListTypesResponse;
(function (ListTypesResponse) {
  /**
   * @internal
   */
  ListTypesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTypesResponse = exports.ListTypesResponse || (exports.ListTypesResponse = {})));
var StartSchemaCreationRequest;
(function (StartSchemaCreationRequest) {
  /**
   * @internal
   */
  StartSchemaCreationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartSchemaCreationRequest = exports.StartSchemaCreationRequest || (exports.StartSchemaCreationRequest = {})));
var StartSchemaCreationResponse;
(function (StartSchemaCreationResponse) {
  /**
   * @internal
   */
  StartSchemaCreationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartSchemaCreationResponse = exports.StartSchemaCreationResponse || (exports.StartSchemaCreationResponse = {})));
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
var UntagResourceResponse;
(function (UntagResourceResponse) {
  /**
   * @internal
   */
  UntagResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {})));
var UpdateApiCacheRequest;
(function (UpdateApiCacheRequest) {
  /**
   * @internal
   */
  UpdateApiCacheRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateApiCacheRequest = exports.UpdateApiCacheRequest || (exports.UpdateApiCacheRequest = {})));
var UpdateApiCacheResponse;
(function (UpdateApiCacheResponse) {
  /**
   * @internal
   */
  UpdateApiCacheResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateApiCacheResponse = exports.UpdateApiCacheResponse || (exports.UpdateApiCacheResponse = {})));
var UpdateApiKeyRequest;
(function (UpdateApiKeyRequest) {
  /**
   * @internal
   */
  UpdateApiKeyRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateApiKeyRequest = exports.UpdateApiKeyRequest || (exports.UpdateApiKeyRequest = {})));
var UpdateApiKeyResponse;
(function (UpdateApiKeyResponse) {
  /**
   * @internal
   */
  UpdateApiKeyResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateApiKeyResponse = exports.UpdateApiKeyResponse || (exports.UpdateApiKeyResponse = {})));
var UpdateDataSourceRequest;
(function (UpdateDataSourceRequest) {
  /**
   * @internal
   */
  UpdateDataSourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateDataSourceRequest = exports.UpdateDataSourceRequest || (exports.UpdateDataSourceRequest = {})));
var UpdateDataSourceResponse;
(function (UpdateDataSourceResponse) {
  /**
   * @internal
   */
  UpdateDataSourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateDataSourceResponse = exports.UpdateDataSourceResponse || (exports.UpdateDataSourceResponse = {})));
var UpdateFunctionRequest;
(function (UpdateFunctionRequest) {
  /**
   * @internal
   */
  UpdateFunctionRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateFunctionRequest = exports.UpdateFunctionRequest || (exports.UpdateFunctionRequest = {})));
var UpdateFunctionResponse;
(function (UpdateFunctionResponse) {
  /**
   * @internal
   */
  UpdateFunctionResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateFunctionResponse = exports.UpdateFunctionResponse || (exports.UpdateFunctionResponse = {})));
var UpdateGraphqlApiRequest;
(function (UpdateGraphqlApiRequest) {
  /**
   * @internal
   */
  UpdateGraphqlApiRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateGraphqlApiRequest = exports.UpdateGraphqlApiRequest || (exports.UpdateGraphqlApiRequest = {})));
var UpdateGraphqlApiResponse;
(function (UpdateGraphqlApiResponse) {
  /**
   * @internal
   */
  UpdateGraphqlApiResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateGraphqlApiResponse = exports.UpdateGraphqlApiResponse || (exports.UpdateGraphqlApiResponse = {})));
var UpdateResolverRequest;
(function (UpdateResolverRequest) {
  /**
   * @internal
   */
  UpdateResolverRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateResolverRequest = exports.UpdateResolverRequest || (exports.UpdateResolverRequest = {})));
var UpdateResolverResponse;
(function (UpdateResolverResponse) {
  /**
   * @internal
   */
  UpdateResolverResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateResolverResponse = exports.UpdateResolverResponse || (exports.UpdateResolverResponse = {})));
var UpdateTypeRequest;
(function (UpdateTypeRequest) {
  /**
   * @internal
   */
  UpdateTypeRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateTypeRequest = exports.UpdateTypeRequest || (exports.UpdateTypeRequest = {})));
var UpdateTypeResponse;
(function (UpdateTypeResponse) {
  /**
   * @internal
   */
  UpdateTypeResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateTypeResponse = exports.UpdateTypeResponse || (exports.UpdateTypeResponse = {})));
//# sourceMappingURL=models_0.js.map
