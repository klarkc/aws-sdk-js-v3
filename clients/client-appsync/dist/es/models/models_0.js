import { __assign } from "tslib";
export var AccessDeniedException;
(function (AccessDeniedException) {
  /**
   * @internal
   */
  AccessDeniedException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AccessDeniedException || (AccessDeniedException = {}));
export var AuthenticationType;
(function (AuthenticationType) {
  AuthenticationType["AMAZON_COGNITO_USER_POOLS"] = "AMAZON_COGNITO_USER_POOLS";
  AuthenticationType["API_KEY"] = "API_KEY";
  AuthenticationType["AWS_IAM"] = "AWS_IAM";
  AuthenticationType["OPENID_CONNECT"] = "OPENID_CONNECT";
})(AuthenticationType || (AuthenticationType = {}));
export var OpenIDConnectConfig;
(function (OpenIDConnectConfig) {
  /**
   * @internal
   */
  OpenIDConnectConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(OpenIDConnectConfig || (OpenIDConnectConfig = {}));
export var CognitoUserPoolConfig;
(function (CognitoUserPoolConfig) {
  /**
   * @internal
   */
  CognitoUserPoolConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CognitoUserPoolConfig || (CognitoUserPoolConfig = {}));
export var AdditionalAuthenticationProvider;
(function (AdditionalAuthenticationProvider) {
  /**
   * @internal
   */
  AdditionalAuthenticationProvider.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AdditionalAuthenticationProvider || (AdditionalAuthenticationProvider = {}));
export var ApiCachingBehavior;
(function (ApiCachingBehavior) {
  ApiCachingBehavior["FULL_REQUEST_CACHING"] = "FULL_REQUEST_CACHING";
  ApiCachingBehavior["PER_RESOLVER_CACHING"] = "PER_RESOLVER_CACHING";
})(ApiCachingBehavior || (ApiCachingBehavior = {}));
export var ApiCacheStatus;
(function (ApiCacheStatus) {
  ApiCacheStatus["AVAILABLE"] = "AVAILABLE";
  ApiCacheStatus["CREATING"] = "CREATING";
  ApiCacheStatus["DELETING"] = "DELETING";
  ApiCacheStatus["FAILED"] = "FAILED";
  ApiCacheStatus["MODIFYING"] = "MODIFYING";
})(ApiCacheStatus || (ApiCacheStatus = {}));
export var ApiCacheType;
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
})(ApiCacheType || (ApiCacheType = {}));
export var ApiCache;
(function (ApiCache) {
  /**
   * @internal
   */
  ApiCache.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ApiCache || (ApiCache = {}));
export var ApiKey;
(function (ApiKey) {
  /**
   * @internal
   */
  ApiKey.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ApiKey || (ApiKey = {}));
export var ApiKeyLimitExceededException;
(function (ApiKeyLimitExceededException) {
  /**
   * @internal
   */
  ApiKeyLimitExceededException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ApiKeyLimitExceededException || (ApiKeyLimitExceededException = {}));
export var ApiKeyValidityOutOfBoundsException;
(function (ApiKeyValidityOutOfBoundsException) {
  /**
   * @internal
   */
  ApiKeyValidityOutOfBoundsException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ApiKeyValidityOutOfBoundsException || (ApiKeyValidityOutOfBoundsException = {}));
export var ApiLimitExceededException;
(function (ApiLimitExceededException) {
  /**
   * @internal
   */
  ApiLimitExceededException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ApiLimitExceededException || (ApiLimitExceededException = {}));
export var AuthorizationType;
(function (AuthorizationType) {
  AuthorizationType["AWS_IAM"] = "AWS_IAM";
})(AuthorizationType || (AuthorizationType = {}));
export var AwsIamConfig;
(function (AwsIamConfig) {
  /**
   * @internal
   */
  AwsIamConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AwsIamConfig || (AwsIamConfig = {}));
export var AuthorizationConfig;
(function (AuthorizationConfig) {
  /**
   * @internal
   */
  AuthorizationConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AuthorizationConfig || (AuthorizationConfig = {}));
export var BadRequestException;
(function (BadRequestException) {
  /**
   * @internal
   */
  BadRequestException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(BadRequestException || (BadRequestException = {}));
export var ConcurrentModificationException;
(function (ConcurrentModificationException) {
  /**
   * @internal
   */
  ConcurrentModificationException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConcurrentModificationException || (ConcurrentModificationException = {}));
export var CreateApiCacheRequest;
(function (CreateApiCacheRequest) {
  /**
   * @internal
   */
  CreateApiCacheRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateApiCacheRequest || (CreateApiCacheRequest = {}));
export var CreateApiCacheResponse;
(function (CreateApiCacheResponse) {
  /**
   * @internal
   */
  CreateApiCacheResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateApiCacheResponse || (CreateApiCacheResponse = {}));
export var InternalFailureException;
(function (InternalFailureException) {
  /**
   * @internal
   */
  InternalFailureException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InternalFailureException || (InternalFailureException = {}));
export var NotFoundException;
(function (NotFoundException) {
  /**
   * @internal
   */
  NotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(NotFoundException || (NotFoundException = {}));
export var UnauthorizedException;
(function (UnauthorizedException) {
  /**
   * @internal
   */
  UnauthorizedException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UnauthorizedException || (UnauthorizedException = {}));
export var CreateApiKeyRequest;
(function (CreateApiKeyRequest) {
  /**
   * @internal
   */
  CreateApiKeyRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateApiKeyRequest || (CreateApiKeyRequest = {}));
export var CreateApiKeyResponse;
(function (CreateApiKeyResponse) {
  /**
   * @internal
   */
  CreateApiKeyResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateApiKeyResponse || (CreateApiKeyResponse = {}));
export var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LimitExceededException || (LimitExceededException = {}));
export var DeltaSyncConfig;
(function (DeltaSyncConfig) {
  /**
   * @internal
   */
  DeltaSyncConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeltaSyncConfig || (DeltaSyncConfig = {}));
export var DynamodbDataSourceConfig;
(function (DynamodbDataSourceConfig) {
  /**
   * @internal
   */
  DynamodbDataSourceConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DynamodbDataSourceConfig || (DynamodbDataSourceConfig = {}));
export var ElasticsearchDataSourceConfig;
(function (ElasticsearchDataSourceConfig) {
  /**
   * @internal
   */
  ElasticsearchDataSourceConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ElasticsearchDataSourceConfig || (ElasticsearchDataSourceConfig = {}));
export var HttpDataSourceConfig;
(function (HttpDataSourceConfig) {
  /**
   * @internal
   */
  HttpDataSourceConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(HttpDataSourceConfig || (HttpDataSourceConfig = {}));
export var LambdaDataSourceConfig;
(function (LambdaDataSourceConfig) {
  /**
   * @internal
   */
  LambdaDataSourceConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LambdaDataSourceConfig || (LambdaDataSourceConfig = {}));
export var RdsHttpEndpointConfig;
(function (RdsHttpEndpointConfig) {
  /**
   * @internal
   */
  RdsHttpEndpointConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RdsHttpEndpointConfig || (RdsHttpEndpointConfig = {}));
export var RelationalDatabaseSourceType;
(function (RelationalDatabaseSourceType) {
  RelationalDatabaseSourceType["RDS_HTTP_ENDPOINT"] = "RDS_HTTP_ENDPOINT";
})(RelationalDatabaseSourceType || (RelationalDatabaseSourceType = {}));
export var RelationalDatabaseDataSourceConfig;
(function (RelationalDatabaseDataSourceConfig) {
  /**
   * @internal
   */
  RelationalDatabaseDataSourceConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RelationalDatabaseDataSourceConfig || (RelationalDatabaseDataSourceConfig = {}));
export var DataSourceType;
(function (DataSourceType) {
  DataSourceType["AMAZON_DYNAMODB"] = "AMAZON_DYNAMODB";
  DataSourceType["AMAZON_ELASTICSEARCH"] = "AMAZON_ELASTICSEARCH";
  DataSourceType["AWS_LAMBDA"] = "AWS_LAMBDA";
  DataSourceType["HTTP"] = "HTTP";
  DataSourceType["NONE"] = "NONE";
  DataSourceType["RELATIONAL_DATABASE"] = "RELATIONAL_DATABASE";
})(DataSourceType || (DataSourceType = {}));
export var CreateDataSourceRequest;
(function (CreateDataSourceRequest) {
  /**
   * @internal
   */
  CreateDataSourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateDataSourceRequest || (CreateDataSourceRequest = {}));
export var DataSource;
(function (DataSource) {
  /**
   * @internal
   */
  DataSource.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DataSource || (DataSource = {}));
export var CreateDataSourceResponse;
(function (CreateDataSourceResponse) {
  /**
   * @internal
   */
  CreateDataSourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateDataSourceResponse || (CreateDataSourceResponse = {}));
export var ConflictDetectionType;
(function (ConflictDetectionType) {
  ConflictDetectionType["NONE"] = "NONE";
  ConflictDetectionType["VERSION"] = "VERSION";
})(ConflictDetectionType || (ConflictDetectionType = {}));
export var ConflictHandlerType;
(function (ConflictHandlerType) {
  ConflictHandlerType["AUTOMERGE"] = "AUTOMERGE";
  ConflictHandlerType["LAMBDA"] = "LAMBDA";
  ConflictHandlerType["NONE"] = "NONE";
  ConflictHandlerType["OPTIMISTIC_CONCURRENCY"] = "OPTIMISTIC_CONCURRENCY";
})(ConflictHandlerType || (ConflictHandlerType = {}));
export var LambdaConflictHandlerConfig;
(function (LambdaConflictHandlerConfig) {
  /**
   * @internal
   */
  LambdaConflictHandlerConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LambdaConflictHandlerConfig || (LambdaConflictHandlerConfig = {}));
export var SyncConfig;
(function (SyncConfig) {
  /**
   * @internal
   */
  SyncConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SyncConfig || (SyncConfig = {}));
export var CreateFunctionRequest;
(function (CreateFunctionRequest) {
  /**
   * @internal
   */
  CreateFunctionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateFunctionRequest || (CreateFunctionRequest = {}));
export var FunctionConfiguration;
(function (FunctionConfiguration) {
  /**
   * @internal
   */
  FunctionConfiguration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(FunctionConfiguration || (FunctionConfiguration = {}));
export var CreateFunctionResponse;
(function (CreateFunctionResponse) {
  /**
   * @internal
   */
  CreateFunctionResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateFunctionResponse || (CreateFunctionResponse = {}));
export var FieldLogLevel;
(function (FieldLogLevel) {
  FieldLogLevel["ALL"] = "ALL";
  FieldLogLevel["ERROR"] = "ERROR";
  FieldLogLevel["NONE"] = "NONE";
})(FieldLogLevel || (FieldLogLevel = {}));
export var LogConfig;
(function (LogConfig) {
  /**
   * @internal
   */
  LogConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LogConfig || (LogConfig = {}));
export var DefaultAction;
(function (DefaultAction) {
  DefaultAction["ALLOW"] = "ALLOW";
  DefaultAction["DENY"] = "DENY";
})(DefaultAction || (DefaultAction = {}));
export var UserPoolConfig;
(function (UserPoolConfig) {
  /**
   * @internal
   */
  UserPoolConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UserPoolConfig || (UserPoolConfig = {}));
export var CreateGraphqlApiRequest;
(function (CreateGraphqlApiRequest) {
  /**
   * @internal
   */
  CreateGraphqlApiRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateGraphqlApiRequest || (CreateGraphqlApiRequest = {}));
export var GraphqlApi;
(function (GraphqlApi) {
  /**
   * @internal
   */
  GraphqlApi.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GraphqlApi || (GraphqlApi = {}));
export var CreateGraphqlApiResponse;
(function (CreateGraphqlApiResponse) {
  /**
   * @internal
   */
  CreateGraphqlApiResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateGraphqlApiResponse || (CreateGraphqlApiResponse = {}));
export var CachingConfig;
(function (CachingConfig) {
  /**
   * @internal
   */
  CachingConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CachingConfig || (CachingConfig = {}));
export var ResolverKind;
(function (ResolverKind) {
  ResolverKind["PIPELINE"] = "PIPELINE";
  ResolverKind["UNIT"] = "UNIT";
})(ResolverKind || (ResolverKind = {}));
export var PipelineConfig;
(function (PipelineConfig) {
  /**
   * @internal
   */
  PipelineConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PipelineConfig || (PipelineConfig = {}));
export var CreateResolverRequest;
(function (CreateResolverRequest) {
  /**
   * @internal
   */
  CreateResolverRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateResolverRequest || (CreateResolverRequest = {}));
export var Resolver;
(function (Resolver) {
  /**
   * @internal
   */
  Resolver.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Resolver || (Resolver = {}));
export var CreateResolverResponse;
(function (CreateResolverResponse) {
  /**
   * @internal
   */
  CreateResolverResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateResolverResponse || (CreateResolverResponse = {}));
export var TypeDefinitionFormat;
(function (TypeDefinitionFormat) {
  TypeDefinitionFormat["JSON"] = "JSON";
  TypeDefinitionFormat["SDL"] = "SDL";
})(TypeDefinitionFormat || (TypeDefinitionFormat = {}));
export var CreateTypeRequest;
(function (CreateTypeRequest) {
  /**
   * @internal
   */
  CreateTypeRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateTypeRequest || (CreateTypeRequest = {}));
export var Type;
(function (Type) {
  /**
   * @internal
   */
  Type.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Type || (Type = {}));
export var CreateTypeResponse;
(function (CreateTypeResponse) {
  /**
   * @internal
   */
  CreateTypeResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateTypeResponse || (CreateTypeResponse = {}));
export var DeleteApiCacheRequest;
(function (DeleteApiCacheRequest) {
  /**
   * @internal
   */
  DeleteApiCacheRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteApiCacheRequest || (DeleteApiCacheRequest = {}));
export var DeleteApiCacheResponse;
(function (DeleteApiCacheResponse) {
  /**
   * @internal
   */
  DeleteApiCacheResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteApiCacheResponse || (DeleteApiCacheResponse = {}));
export var DeleteApiKeyRequest;
(function (DeleteApiKeyRequest) {
  /**
   * @internal
   */
  DeleteApiKeyRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteApiKeyRequest || (DeleteApiKeyRequest = {}));
export var DeleteApiKeyResponse;
(function (DeleteApiKeyResponse) {
  /**
   * @internal
   */
  DeleteApiKeyResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteApiKeyResponse || (DeleteApiKeyResponse = {}));
export var DeleteDataSourceRequest;
(function (DeleteDataSourceRequest) {
  /**
   * @internal
   */
  DeleteDataSourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteDataSourceRequest || (DeleteDataSourceRequest = {}));
export var DeleteDataSourceResponse;
(function (DeleteDataSourceResponse) {
  /**
   * @internal
   */
  DeleteDataSourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteDataSourceResponse || (DeleteDataSourceResponse = {}));
export var DeleteFunctionRequest;
(function (DeleteFunctionRequest) {
  /**
   * @internal
   */
  DeleteFunctionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteFunctionRequest || (DeleteFunctionRequest = {}));
export var DeleteFunctionResponse;
(function (DeleteFunctionResponse) {
  /**
   * @internal
   */
  DeleteFunctionResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteFunctionResponse || (DeleteFunctionResponse = {}));
export var DeleteGraphqlApiRequest;
(function (DeleteGraphqlApiRequest) {
  /**
   * @internal
   */
  DeleteGraphqlApiRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteGraphqlApiRequest || (DeleteGraphqlApiRequest = {}));
export var DeleteGraphqlApiResponse;
(function (DeleteGraphqlApiResponse) {
  /**
   * @internal
   */
  DeleteGraphqlApiResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteGraphqlApiResponse || (DeleteGraphqlApiResponse = {}));
export var DeleteResolverRequest;
(function (DeleteResolverRequest) {
  /**
   * @internal
   */
  DeleteResolverRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteResolverRequest || (DeleteResolverRequest = {}));
export var DeleteResolverResponse;
(function (DeleteResolverResponse) {
  /**
   * @internal
   */
  DeleteResolverResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteResolverResponse || (DeleteResolverResponse = {}));
export var DeleteTypeRequest;
(function (DeleteTypeRequest) {
  /**
   * @internal
   */
  DeleteTypeRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteTypeRequest || (DeleteTypeRequest = {}));
export var DeleteTypeResponse;
(function (DeleteTypeResponse) {
  /**
   * @internal
   */
  DeleteTypeResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteTypeResponse || (DeleteTypeResponse = {}));
export var FlushApiCacheRequest;
(function (FlushApiCacheRequest) {
  /**
   * @internal
   */
  FlushApiCacheRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(FlushApiCacheRequest || (FlushApiCacheRequest = {}));
export var FlushApiCacheResponse;
(function (FlushApiCacheResponse) {
  /**
   * @internal
   */
  FlushApiCacheResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(FlushApiCacheResponse || (FlushApiCacheResponse = {}));
export var GetApiCacheRequest;
(function (GetApiCacheRequest) {
  /**
   * @internal
   */
  GetApiCacheRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetApiCacheRequest || (GetApiCacheRequest = {}));
export var GetApiCacheResponse;
(function (GetApiCacheResponse) {
  /**
   * @internal
   */
  GetApiCacheResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetApiCacheResponse || (GetApiCacheResponse = {}));
export var GetDataSourceRequest;
(function (GetDataSourceRequest) {
  /**
   * @internal
   */
  GetDataSourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetDataSourceRequest || (GetDataSourceRequest = {}));
export var GetDataSourceResponse;
(function (GetDataSourceResponse) {
  /**
   * @internal
   */
  GetDataSourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetDataSourceResponse || (GetDataSourceResponse = {}));
export var GetFunctionRequest;
(function (GetFunctionRequest) {
  /**
   * @internal
   */
  GetFunctionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetFunctionRequest || (GetFunctionRequest = {}));
export var GetFunctionResponse;
(function (GetFunctionResponse) {
  /**
   * @internal
   */
  GetFunctionResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetFunctionResponse || (GetFunctionResponse = {}));
export var GetGraphqlApiRequest;
(function (GetGraphqlApiRequest) {
  /**
   * @internal
   */
  GetGraphqlApiRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetGraphqlApiRequest || (GetGraphqlApiRequest = {}));
export var GetGraphqlApiResponse;
(function (GetGraphqlApiResponse) {
  /**
   * @internal
   */
  GetGraphqlApiResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetGraphqlApiResponse || (GetGraphqlApiResponse = {}));
export var OutputType;
(function (OutputType) {
  OutputType["JSON"] = "JSON";
  OutputType["SDL"] = "SDL";
})(OutputType || (OutputType = {}));
export var GetIntrospectionSchemaRequest;
(function (GetIntrospectionSchemaRequest) {
  /**
   * @internal
   */
  GetIntrospectionSchemaRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetIntrospectionSchemaRequest || (GetIntrospectionSchemaRequest = {}));
export var GetIntrospectionSchemaResponse;
(function (GetIntrospectionSchemaResponse) {
  /**
   * @internal
   */
  GetIntrospectionSchemaResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetIntrospectionSchemaResponse || (GetIntrospectionSchemaResponse = {}));
export var GraphQLSchemaException;
(function (GraphQLSchemaException) {
  /**
   * @internal
   */
  GraphQLSchemaException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GraphQLSchemaException || (GraphQLSchemaException = {}));
export var GetResolverRequest;
(function (GetResolverRequest) {
  /**
   * @internal
   */
  GetResolverRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetResolverRequest || (GetResolverRequest = {}));
export var GetResolverResponse;
(function (GetResolverResponse) {
  /**
   * @internal
   */
  GetResolverResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetResolverResponse || (GetResolverResponse = {}));
export var GetSchemaCreationStatusRequest;
(function (GetSchemaCreationStatusRequest) {
  /**
   * @internal
   */
  GetSchemaCreationStatusRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetSchemaCreationStatusRequest || (GetSchemaCreationStatusRequest = {}));
export var SchemaStatus;
(function (SchemaStatus) {
  SchemaStatus["Active"] = "ACTIVE";
  SchemaStatus["Deleting"] = "DELETING";
  SchemaStatus["Failed"] = "FAILED";
  SchemaStatus["NotApplicable"] = "NOT_APPLICABLE";
  SchemaStatus["Processing"] = "PROCESSING";
  SchemaStatus["Success"] = "SUCCESS";
})(SchemaStatus || (SchemaStatus = {}));
export var GetSchemaCreationStatusResponse;
(function (GetSchemaCreationStatusResponse) {
  /**
   * @internal
   */
  GetSchemaCreationStatusResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetSchemaCreationStatusResponse || (GetSchemaCreationStatusResponse = {}));
export var GetTypeRequest;
(function (GetTypeRequest) {
  /**
   * @internal
   */
  GetTypeRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetTypeRequest || (GetTypeRequest = {}));
export var GetTypeResponse;
(function (GetTypeResponse) {
  /**
   * @internal
   */
  GetTypeResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetTypeResponse || (GetTypeResponse = {}));
export var ListApiKeysRequest;
(function (ListApiKeysRequest) {
  /**
   * @internal
   */
  ListApiKeysRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListApiKeysRequest || (ListApiKeysRequest = {}));
export var ListApiKeysResponse;
(function (ListApiKeysResponse) {
  /**
   * @internal
   */
  ListApiKeysResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListApiKeysResponse || (ListApiKeysResponse = {}));
export var ListDataSourcesRequest;
(function (ListDataSourcesRequest) {
  /**
   * @internal
   */
  ListDataSourcesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListDataSourcesRequest || (ListDataSourcesRequest = {}));
export var ListDataSourcesResponse;
(function (ListDataSourcesResponse) {
  /**
   * @internal
   */
  ListDataSourcesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListDataSourcesResponse || (ListDataSourcesResponse = {}));
export var ListFunctionsRequest;
(function (ListFunctionsRequest) {
  /**
   * @internal
   */
  ListFunctionsRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListFunctionsRequest || (ListFunctionsRequest = {}));
export var ListFunctionsResponse;
(function (ListFunctionsResponse) {
  /**
   * @internal
   */
  ListFunctionsResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListFunctionsResponse || (ListFunctionsResponse = {}));
export var ListGraphqlApisRequest;
(function (ListGraphqlApisRequest) {
  /**
   * @internal
   */
  ListGraphqlApisRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListGraphqlApisRequest || (ListGraphqlApisRequest = {}));
export var ListGraphqlApisResponse;
(function (ListGraphqlApisResponse) {
  /**
   * @internal
   */
  ListGraphqlApisResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListGraphqlApisResponse || (ListGraphqlApisResponse = {}));
export var ListResolversRequest;
(function (ListResolversRequest) {
  /**
   * @internal
   */
  ListResolversRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListResolversRequest || (ListResolversRequest = {}));
export var ListResolversResponse;
(function (ListResolversResponse) {
  /**
   * @internal
   */
  ListResolversResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListResolversResponse || (ListResolversResponse = {}));
export var ListResolversByFunctionRequest;
(function (ListResolversByFunctionRequest) {
  /**
   * @internal
   */
  ListResolversByFunctionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListResolversByFunctionRequest || (ListResolversByFunctionRequest = {}));
export var ListResolversByFunctionResponse;
(function (ListResolversByFunctionResponse) {
  /**
   * @internal
   */
  ListResolversByFunctionResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListResolversByFunctionResponse || (ListResolversByFunctionResponse = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
  /**
   * @internal
   */
  ListTagsForResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
  /**
   * @internal
   */
  ListTagsForResourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var ListTypesRequest;
(function (ListTypesRequest) {
  /**
   * @internal
   */
  ListTypesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTypesRequest || (ListTypesRequest = {}));
export var ListTypesResponse;
(function (ListTypesResponse) {
  /**
   * @internal
   */
  ListTypesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTypesResponse || (ListTypesResponse = {}));
export var StartSchemaCreationRequest;
(function (StartSchemaCreationRequest) {
  /**
   * @internal
   */
  StartSchemaCreationRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StartSchemaCreationRequest || (StartSchemaCreationRequest = {}));
export var StartSchemaCreationResponse;
(function (StartSchemaCreationResponse) {
  /**
   * @internal
   */
  StartSchemaCreationResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StartSchemaCreationResponse || (StartSchemaCreationResponse = {}));
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
export var UntagResourceResponse;
(function (UntagResourceResponse) {
  /**
   * @internal
   */
  UntagResourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UntagResourceResponse || (UntagResourceResponse = {}));
export var UpdateApiCacheRequest;
(function (UpdateApiCacheRequest) {
  /**
   * @internal
   */
  UpdateApiCacheRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateApiCacheRequest || (UpdateApiCacheRequest = {}));
export var UpdateApiCacheResponse;
(function (UpdateApiCacheResponse) {
  /**
   * @internal
   */
  UpdateApiCacheResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateApiCacheResponse || (UpdateApiCacheResponse = {}));
export var UpdateApiKeyRequest;
(function (UpdateApiKeyRequest) {
  /**
   * @internal
   */
  UpdateApiKeyRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateApiKeyRequest || (UpdateApiKeyRequest = {}));
export var UpdateApiKeyResponse;
(function (UpdateApiKeyResponse) {
  /**
   * @internal
   */
  UpdateApiKeyResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateApiKeyResponse || (UpdateApiKeyResponse = {}));
export var UpdateDataSourceRequest;
(function (UpdateDataSourceRequest) {
  /**
   * @internal
   */
  UpdateDataSourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateDataSourceRequest || (UpdateDataSourceRequest = {}));
export var UpdateDataSourceResponse;
(function (UpdateDataSourceResponse) {
  /**
   * @internal
   */
  UpdateDataSourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateDataSourceResponse || (UpdateDataSourceResponse = {}));
export var UpdateFunctionRequest;
(function (UpdateFunctionRequest) {
  /**
   * @internal
   */
  UpdateFunctionRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateFunctionRequest || (UpdateFunctionRequest = {}));
export var UpdateFunctionResponse;
(function (UpdateFunctionResponse) {
  /**
   * @internal
   */
  UpdateFunctionResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateFunctionResponse || (UpdateFunctionResponse = {}));
export var UpdateGraphqlApiRequest;
(function (UpdateGraphqlApiRequest) {
  /**
   * @internal
   */
  UpdateGraphqlApiRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateGraphqlApiRequest || (UpdateGraphqlApiRequest = {}));
export var UpdateGraphqlApiResponse;
(function (UpdateGraphqlApiResponse) {
  /**
   * @internal
   */
  UpdateGraphqlApiResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateGraphqlApiResponse || (UpdateGraphqlApiResponse = {}));
export var UpdateResolverRequest;
(function (UpdateResolverRequest) {
  /**
   * @internal
   */
  UpdateResolverRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateResolverRequest || (UpdateResolverRequest = {}));
export var UpdateResolverResponse;
(function (UpdateResolverResponse) {
  /**
   * @internal
   */
  UpdateResolverResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateResolverResponse || (UpdateResolverResponse = {}));
export var UpdateTypeRequest;
(function (UpdateTypeRequest) {
  /**
   * @internal
   */
  UpdateTypeRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateTypeRequest || (UpdateTypeRequest = {}));
export var UpdateTypeResponse;
(function (UpdateTypeResponse) {
  /**
   * @internal
   */
  UpdateTypeResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateTypeResponse || (UpdateTypeResponse = {}));
//# sourceMappingURL=models_0.js.map
