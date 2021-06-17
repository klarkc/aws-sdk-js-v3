"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentResponse = exports.EnvironmentError = exports.CreateFunctionRequest = exports.VpcConfig = exports.TracingConfig = exports.TracingMode = exports.Runtime = exports.PackageType = exports.ImageConfig = exports.FileSystemConfig = exports.Environment = exports.DeadLetterConfig = exports.FunctionCode = exports.CodeVerificationFailedException = exports.CodeStorageExceededException = exports.CodeSigningConfigNotFoundException = exports.EventSourceMappingConfiguration = exports.CreateEventSourceMappingRequest = exports.EventSourcePosition = exports.SourceAccessConfiguration = exports.SourceAccessType = exports.SelfManagedEventSource = exports.EndPointType = exports.FunctionResponseType = exports.DestinationConfig = exports.OnSuccess = exports.OnFailure = exports.CreateCodeSigningConfigResponse = exports.CodeSigningConfig = exports.CreateCodeSigningConfigRequest = exports.CodeSigningPolicies = exports.CodeSigningPolicy = exports.CreateAliasRequest = exports.AllowedPublishers = exports.AliasConfiguration = exports.AliasRoutingConfiguration = exports.AddPermissionResponse = exports.AddPermissionRequest = exports.TooManyRequestsException = exports.ThrottleReason = exports.ServiceException = exports.ResourceNotFoundException = exports.ResourceConflictException = exports.PreconditionFailedException = exports.PolicyLengthExceededException = exports.InvalidParameterValueException = exports.AddLayerVersionPermissionResponse = exports.AddLayerVersionPermissionRequest = exports.AccountUsage = exports.AccountLimit = void 0;
exports.GetProvisionedConcurrencyConfigResponse = exports.ProvisionedConcurrencyStatusEnum = exports.GetProvisionedConcurrencyConfigRequest = exports.GetPolicyResponse = exports.GetPolicyRequest = exports.GetLayerVersionPolicyResponse = exports.GetLayerVersionPolicyRequest = exports.GetLayerVersionByArnRequest = exports.GetLayerVersionResponse = exports.LayerVersionContentOutput = exports.GetLayerVersionRequest = exports.GetFunctionEventInvokeConfigRequest = exports.FunctionEventInvokeConfig = exports.GetFunctionConfigurationRequest = exports.GetFunctionConcurrencyResponse = exports.GetFunctionConcurrencyRequest = exports.GetFunctionCodeSigningConfigResponse = exports.GetFunctionCodeSigningConfigRequest = exports.GetFunctionResponse = exports.Concurrency = exports.FunctionCodeLocation = exports.GetFunctionRequest = exports.GetEventSourceMappingRequest = exports.GetCodeSigningConfigResponse = exports.GetCodeSigningConfigRequest = exports.GetAliasRequest = exports.GetAccountSettingsResponse = exports.GetAccountSettingsRequest = exports.DeleteProvisionedConcurrencyConfigRequest = exports.DeleteLayerVersionRequest = exports.DeleteFunctionEventInvokeConfigRequest = exports.DeleteFunctionConcurrencyRequest = exports.DeleteFunctionCodeSigningConfigRequest = exports.DeleteFunctionRequest = exports.ResourceInUseException = exports.DeleteEventSourceMappingRequest = exports.DeleteCodeSigningConfigResponse = exports.DeleteCodeSigningConfigRequest = exports.DeleteAliasRequest = exports.InvalidCodeSignatureException = exports.FunctionConfiguration = exports.VpcConfigResponse = exports.TracingConfigResponse = exports.StateReasonCode = exports.State = exports.Layer = exports.LastUpdateStatusReasonCode = exports.LastUpdateStatus = exports.ImageConfigResponse = exports.ImageConfigError = void 0;
exports.ListProvisionedConcurrencyConfigsResponse = exports.ProvisionedConcurrencyConfigListItem = exports.ListProvisionedConcurrencyConfigsRequest = exports.ListLayerVersionsResponse = exports.ListLayerVersionsRequest = exports.ListLayersResponse = exports.LayersListItem = exports.LayerVersionsListItem = exports.ListLayersRequest = exports.ListFunctionsByCodeSigningConfigResponse = exports.ListFunctionsByCodeSigningConfigRequest = exports.ListFunctionsResponse = exports.ListFunctionsRequest = exports.FunctionVersion = exports.ListFunctionEventInvokeConfigsResponse = exports.ListFunctionEventInvokeConfigsRequest = exports.ListEventSourceMappingsResponse = exports.ListEventSourceMappingsRequest = exports.ListCodeSigningConfigsResponse = exports.ListCodeSigningConfigsRequest = exports.ListAliasesResponse = exports.ListAliasesRequest = exports.InvokeAsyncResponse = exports.InvokeAsyncRequest = exports.UnsupportedMediaTypeException = exports.SubnetIPAddressLimitReachedException = exports.ResourceNotReadyException = exports.RequestTooLargeException = exports.KMSNotFoundException = exports.KMSInvalidStateException = exports.KMSDisabledException = exports.KMSAccessDeniedException = exports.InvocationResponse = exports.InvocationRequest = exports.LogType = exports.InvocationType = exports.InvalidZipFileException = exports.InvalidSubnetIDException = exports.InvalidSecurityGroupIDException = exports.InvalidRuntimeException = exports.InvalidRequestContentException = exports.ENILimitReachedException = exports.EFSMountTimeoutException = exports.EFSMountFailureException = exports.EFSMountConnectivityException = exports.EFSIOException = exports.EC2UnexpectedException = exports.EC2ThrottledException = exports.EC2AccessDeniedException = exports.ProvisionedConcurrencyConfigNotFoundException = void 0;
exports.UpdateFunctionEventInvokeConfigRequest = exports.UpdateFunctionConfigurationRequest = exports.UpdateFunctionCodeRequest = exports.UpdateEventSourceMappingRequest = exports.UpdateCodeSigningConfigResponse = exports.UpdateCodeSigningConfigRequest = exports.UpdateAliasRequest = exports.UntagResourceRequest = exports.TagResourceRequest = exports.RemovePermissionRequest = exports.RemoveLayerVersionPermissionRequest = exports.PutProvisionedConcurrencyConfigResponse = exports.PutProvisionedConcurrencyConfigRequest = exports.PutFunctionEventInvokeConfigRequest = exports.PutFunctionConcurrencyRequest = exports.PutFunctionCodeSigningConfigResponse = exports.PutFunctionCodeSigningConfigRequest = exports.PublishVersionRequest = exports.PublishLayerVersionResponse = exports.PublishLayerVersionRequest = exports.LayerVersionContentInput = exports.ListVersionsByFunctionResponse = exports.ListVersionsByFunctionRequest = exports.ListTagsResponse = exports.ListTagsRequest = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccountLimit;
(function (AccountLimit) {
    /**
     * @internal
     */
    AccountLimit.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountLimit = exports.AccountLimit || (exports.AccountLimit = {}));
var AccountUsage;
(function (AccountUsage) {
    /**
     * @internal
     */
    AccountUsage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccountUsage = exports.AccountUsage || (exports.AccountUsage = {}));
var AddLayerVersionPermissionRequest;
(function (AddLayerVersionPermissionRequest) {
    /**
     * @internal
     */
    AddLayerVersionPermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddLayerVersionPermissionRequest = exports.AddLayerVersionPermissionRequest || (exports.AddLayerVersionPermissionRequest = {}));
var AddLayerVersionPermissionResponse;
(function (AddLayerVersionPermissionResponse) {
    /**
     * @internal
     */
    AddLayerVersionPermissionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddLayerVersionPermissionResponse = exports.AddLayerVersionPermissionResponse || (exports.AddLayerVersionPermissionResponse = {}));
var InvalidParameterValueException;
(function (InvalidParameterValueException) {
    /**
     * @internal
     */
    InvalidParameterValueException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterValueException = exports.InvalidParameterValueException || (exports.InvalidParameterValueException = {}));
var PolicyLengthExceededException;
(function (PolicyLengthExceededException) {
    /**
     * @internal
     */
    PolicyLengthExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyLengthExceededException = exports.PolicyLengthExceededException || (exports.PolicyLengthExceededException = {}));
var PreconditionFailedException;
(function (PreconditionFailedException) {
    /**
     * @internal
     */
    PreconditionFailedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PreconditionFailedException = exports.PreconditionFailedException || (exports.PreconditionFailedException = {}));
var ResourceConflictException;
(function (ResourceConflictException) {
    /**
     * @internal
     */
    ResourceConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceConflictException = exports.ResourceConflictException || (exports.ResourceConflictException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ServiceException;
(function (ServiceException) {
    /**
     * @internal
     */
    ServiceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceException = exports.ServiceException || (exports.ServiceException = {}));
var ThrottleReason;
(function (ThrottleReason) {
    ThrottleReason["CallerRateLimitExceeded"] = "CallerRateLimitExceeded";
    ThrottleReason["ConcurrentInvocationLimitExceeded"] = "ConcurrentInvocationLimitExceeded";
    ThrottleReason["FunctionInvocationRateLimitExceeded"] = "FunctionInvocationRateLimitExceeded";
    ThrottleReason["ReservedFunctionConcurrentInvocationLimitExceeded"] = "ReservedFunctionConcurrentInvocationLimitExceeded";
    ThrottleReason["ReservedFunctionInvocationRateLimitExceeded"] = "ReservedFunctionInvocationRateLimitExceeded";
})(ThrottleReason = exports.ThrottleReason || (exports.ThrottleReason = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var AddPermissionRequest;
(function (AddPermissionRequest) {
    /**
     * @internal
     */
    AddPermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddPermissionRequest = exports.AddPermissionRequest || (exports.AddPermissionRequest = {}));
var AddPermissionResponse;
(function (AddPermissionResponse) {
    /**
     * @internal
     */
    AddPermissionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddPermissionResponse = exports.AddPermissionResponse || (exports.AddPermissionResponse = {}));
var AliasRoutingConfiguration;
(function (AliasRoutingConfiguration) {
    /**
     * @internal
     */
    AliasRoutingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AliasRoutingConfiguration = exports.AliasRoutingConfiguration || (exports.AliasRoutingConfiguration = {}));
var AliasConfiguration;
(function (AliasConfiguration) {
    /**
     * @internal
     */
    AliasConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AliasConfiguration = exports.AliasConfiguration || (exports.AliasConfiguration = {}));
var AllowedPublishers;
(function (AllowedPublishers) {
    /**
     * @internal
     */
    AllowedPublishers.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AllowedPublishers = exports.AllowedPublishers || (exports.AllowedPublishers = {}));
var CreateAliasRequest;
(function (CreateAliasRequest) {
    /**
     * @internal
     */
    CreateAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAliasRequest = exports.CreateAliasRequest || (exports.CreateAliasRequest = {}));
var CodeSigningPolicy;
(function (CodeSigningPolicy) {
    CodeSigningPolicy["Enforce"] = "Enforce";
    CodeSigningPolicy["Warn"] = "Warn";
})(CodeSigningPolicy = exports.CodeSigningPolicy || (exports.CodeSigningPolicy = {}));
var CodeSigningPolicies;
(function (CodeSigningPolicies) {
    /**
     * @internal
     */
    CodeSigningPolicies.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeSigningPolicies = exports.CodeSigningPolicies || (exports.CodeSigningPolicies = {}));
var CreateCodeSigningConfigRequest;
(function (CreateCodeSigningConfigRequest) {
    /**
     * @internal
     */
    CreateCodeSigningConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCodeSigningConfigRequest = exports.CreateCodeSigningConfigRequest || (exports.CreateCodeSigningConfigRequest = {}));
var CodeSigningConfig;
(function (CodeSigningConfig) {
    /**
     * @internal
     */
    CodeSigningConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeSigningConfig = exports.CodeSigningConfig || (exports.CodeSigningConfig = {}));
var CreateCodeSigningConfigResponse;
(function (CreateCodeSigningConfigResponse) {
    /**
     * @internal
     */
    CreateCodeSigningConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCodeSigningConfigResponse = exports.CreateCodeSigningConfigResponse || (exports.CreateCodeSigningConfigResponse = {}));
var OnFailure;
(function (OnFailure) {
    /**
     * @internal
     */
    OnFailure.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OnFailure = exports.OnFailure || (exports.OnFailure = {}));
var OnSuccess;
(function (OnSuccess) {
    /**
     * @internal
     */
    OnSuccess.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OnSuccess = exports.OnSuccess || (exports.OnSuccess = {}));
var DestinationConfig;
(function (DestinationConfig) {
    /**
     * @internal
     */
    DestinationConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DestinationConfig = exports.DestinationConfig || (exports.DestinationConfig = {}));
var FunctionResponseType;
(function (FunctionResponseType) {
    FunctionResponseType["ReportBatchItemFailures"] = "ReportBatchItemFailures";
})(FunctionResponseType = exports.FunctionResponseType || (exports.FunctionResponseType = {}));
var EndPointType;
(function (EndPointType) {
    EndPointType["KAFKA_BOOTSTRAP_SERVERS"] = "KAFKA_BOOTSTRAP_SERVERS";
})(EndPointType = exports.EndPointType || (exports.EndPointType = {}));
var SelfManagedEventSource;
(function (SelfManagedEventSource) {
    /**
     * @internal
     */
    SelfManagedEventSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SelfManagedEventSource = exports.SelfManagedEventSource || (exports.SelfManagedEventSource = {}));
var SourceAccessType;
(function (SourceAccessType) {
    SourceAccessType["BASIC_AUTH"] = "BASIC_AUTH";
    SourceAccessType["SASL_SCRAM_256_AUTH"] = "SASL_SCRAM_256_AUTH";
    SourceAccessType["SASL_SCRAM_512_AUTH"] = "SASL_SCRAM_512_AUTH";
    SourceAccessType["VPC_SECURITY_GROUP"] = "VPC_SECURITY_GROUP";
    SourceAccessType["VPC_SUBNET"] = "VPC_SUBNET";
})(SourceAccessType = exports.SourceAccessType || (exports.SourceAccessType = {}));
var SourceAccessConfiguration;
(function (SourceAccessConfiguration) {
    /**
     * @internal
     */
    SourceAccessConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceAccessConfiguration = exports.SourceAccessConfiguration || (exports.SourceAccessConfiguration = {}));
var EventSourcePosition;
(function (EventSourcePosition) {
    EventSourcePosition["AT_TIMESTAMP"] = "AT_TIMESTAMP";
    EventSourcePosition["LATEST"] = "LATEST";
    EventSourcePosition["TRIM_HORIZON"] = "TRIM_HORIZON";
})(EventSourcePosition = exports.EventSourcePosition || (exports.EventSourcePosition = {}));
var CreateEventSourceMappingRequest;
(function (CreateEventSourceMappingRequest) {
    /**
     * @internal
     */
    CreateEventSourceMappingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEventSourceMappingRequest = exports.CreateEventSourceMappingRequest || (exports.CreateEventSourceMappingRequest = {}));
var EventSourceMappingConfiguration;
(function (EventSourceMappingConfiguration) {
    /**
     * @internal
     */
    EventSourceMappingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventSourceMappingConfiguration = exports.EventSourceMappingConfiguration || (exports.EventSourceMappingConfiguration = {}));
var CodeSigningConfigNotFoundException;
(function (CodeSigningConfigNotFoundException) {
    /**
     * @internal
     */
    CodeSigningConfigNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeSigningConfigNotFoundException = exports.CodeSigningConfigNotFoundException || (exports.CodeSigningConfigNotFoundException = {}));
var CodeStorageExceededException;
(function (CodeStorageExceededException) {
    /**
     * @internal
     */
    CodeStorageExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeStorageExceededException = exports.CodeStorageExceededException || (exports.CodeStorageExceededException = {}));
var CodeVerificationFailedException;
(function (CodeVerificationFailedException) {
    /**
     * @internal
     */
    CodeVerificationFailedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeVerificationFailedException = exports.CodeVerificationFailedException || (exports.CodeVerificationFailedException = {}));
var FunctionCode;
(function (FunctionCode) {
    /**
     * @internal
     */
    FunctionCode.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ZipFile && { ZipFile: smithy_client_1.SENSITIVE_STRING }),
    });
})(FunctionCode = exports.FunctionCode || (exports.FunctionCode = {}));
var DeadLetterConfig;
(function (DeadLetterConfig) {
    /**
     * @internal
     */
    DeadLetterConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeadLetterConfig = exports.DeadLetterConfig || (exports.DeadLetterConfig = {}));
var Environment;
(function (Environment) {
    /**
     * @internal
     */
    Environment.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Variables && { Variables: smithy_client_1.SENSITIVE_STRING }),
    });
})(Environment = exports.Environment || (exports.Environment = {}));
var FileSystemConfig;
(function (FileSystemConfig) {
    /**
     * @internal
     */
    FileSystemConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FileSystemConfig = exports.FileSystemConfig || (exports.FileSystemConfig = {}));
var ImageConfig;
(function (ImageConfig) {
    /**
     * @internal
     */
    ImageConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageConfig = exports.ImageConfig || (exports.ImageConfig = {}));
var PackageType;
(function (PackageType) {
    PackageType["Image"] = "Image";
    PackageType["Zip"] = "Zip";
})(PackageType = exports.PackageType || (exports.PackageType = {}));
var Runtime;
(function (Runtime) {
    Runtime["dotnetcore10"] = "dotnetcore1.0";
    Runtime["dotnetcore20"] = "dotnetcore2.0";
    Runtime["dotnetcore21"] = "dotnetcore2.1";
    Runtime["dotnetcore31"] = "dotnetcore3.1";
    Runtime["go1x"] = "go1.x";
    Runtime["java11"] = "java11";
    Runtime["java8"] = "java8";
    Runtime["java8al2"] = "java8.al2";
    Runtime["nodejs"] = "nodejs";
    Runtime["nodejs10x"] = "nodejs10.x";
    Runtime["nodejs12x"] = "nodejs12.x";
    Runtime["nodejs14x"] = "nodejs14.x";
    Runtime["nodejs43"] = "nodejs4.3";
    Runtime["nodejs43edge"] = "nodejs4.3-edge";
    Runtime["nodejs610"] = "nodejs6.10";
    Runtime["nodejs810"] = "nodejs8.10";
    Runtime["provided"] = "provided";
    Runtime["providedal2"] = "provided.al2";
    Runtime["python27"] = "python2.7";
    Runtime["python36"] = "python3.6";
    Runtime["python37"] = "python3.7";
    Runtime["python38"] = "python3.8";
    Runtime["ruby25"] = "ruby2.5";
    Runtime["ruby27"] = "ruby2.7";
})(Runtime = exports.Runtime || (exports.Runtime = {}));
var TracingMode;
(function (TracingMode) {
    TracingMode["Active"] = "Active";
    TracingMode["PassThrough"] = "PassThrough";
})(TracingMode = exports.TracingMode || (exports.TracingMode = {}));
var TracingConfig;
(function (TracingConfig) {
    /**
     * @internal
     */
    TracingConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TracingConfig = exports.TracingConfig || (exports.TracingConfig = {}));
var VpcConfig;
(function (VpcConfig) {
    /**
     * @internal
     */
    VpcConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcConfig = exports.VpcConfig || (exports.VpcConfig = {}));
var CreateFunctionRequest;
(function (CreateFunctionRequest) {
    /**
     * @internal
     */
    CreateFunctionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Code && { Code: FunctionCode.filterSensitiveLog(obj.Code) }),
        ...(obj.Environment && { Environment: Environment.filterSensitiveLog(obj.Environment) }),
    });
})(CreateFunctionRequest = exports.CreateFunctionRequest || (exports.CreateFunctionRequest = {}));
var EnvironmentError;
(function (EnvironmentError) {
    /**
     * @internal
     */
    EnvironmentError.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Message && { Message: smithy_client_1.SENSITIVE_STRING }),
    });
})(EnvironmentError = exports.EnvironmentError || (exports.EnvironmentError = {}));
var EnvironmentResponse;
(function (EnvironmentResponse) {
    /**
     * @internal
     */
    EnvironmentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Variables && { Variables: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Error && { Error: EnvironmentError.filterSensitiveLog(obj.Error) }),
    });
})(EnvironmentResponse = exports.EnvironmentResponse || (exports.EnvironmentResponse = {}));
var ImageConfigError;
(function (ImageConfigError) {
    /**
     * @internal
     */
    ImageConfigError.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Message && { Message: smithy_client_1.SENSITIVE_STRING }),
    });
})(ImageConfigError = exports.ImageConfigError || (exports.ImageConfigError = {}));
var ImageConfigResponse;
(function (ImageConfigResponse) {
    /**
     * @internal
     */
    ImageConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Error && { Error: ImageConfigError.filterSensitiveLog(obj.Error) }),
    });
})(ImageConfigResponse = exports.ImageConfigResponse || (exports.ImageConfigResponse = {}));
var LastUpdateStatus;
(function (LastUpdateStatus) {
    LastUpdateStatus["Failed"] = "Failed";
    LastUpdateStatus["InProgress"] = "InProgress";
    LastUpdateStatus["Successful"] = "Successful";
})(LastUpdateStatus = exports.LastUpdateStatus || (exports.LastUpdateStatus = {}));
var LastUpdateStatusReasonCode;
(function (LastUpdateStatusReasonCode) {
    LastUpdateStatusReasonCode["EniLimitExceeded"] = "EniLimitExceeded";
    LastUpdateStatusReasonCode["ImageAccessDenied"] = "ImageAccessDenied";
    LastUpdateStatusReasonCode["ImageDeleted"] = "ImageDeleted";
    LastUpdateStatusReasonCode["InsufficientRolePermissions"] = "InsufficientRolePermissions";
    LastUpdateStatusReasonCode["InternalError"] = "InternalError";
    LastUpdateStatusReasonCode["InvalidConfiguration"] = "InvalidConfiguration";
    LastUpdateStatusReasonCode["InvalidImage"] = "InvalidImage";
    LastUpdateStatusReasonCode["InvalidSecurityGroup"] = "InvalidSecurityGroup";
    LastUpdateStatusReasonCode["InvalidSubnet"] = "InvalidSubnet";
    LastUpdateStatusReasonCode["SubnetOutOfIPAddresses"] = "SubnetOutOfIPAddresses";
})(LastUpdateStatusReasonCode = exports.LastUpdateStatusReasonCode || (exports.LastUpdateStatusReasonCode = {}));
var Layer;
(function (Layer) {
    /**
     * @internal
     */
    Layer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Layer = exports.Layer || (exports.Layer = {}));
var State;
(function (State) {
    State["Active"] = "Active";
    State["Failed"] = "Failed";
    State["Inactive"] = "Inactive";
    State["Pending"] = "Pending";
})(State = exports.State || (exports.State = {}));
var StateReasonCode;
(function (StateReasonCode) {
    StateReasonCode["Creating"] = "Creating";
    StateReasonCode["EniLimitExceeded"] = "EniLimitExceeded";
    StateReasonCode["Idle"] = "Idle";
    StateReasonCode["ImageAccessDenied"] = "ImageAccessDenied";
    StateReasonCode["ImageDeleted"] = "ImageDeleted";
    StateReasonCode["InsufficientRolePermissions"] = "InsufficientRolePermissions";
    StateReasonCode["InternalError"] = "InternalError";
    StateReasonCode["InvalidConfiguration"] = "InvalidConfiguration";
    StateReasonCode["InvalidImage"] = "InvalidImage";
    StateReasonCode["InvalidSecurityGroup"] = "InvalidSecurityGroup";
    StateReasonCode["InvalidSubnet"] = "InvalidSubnet";
    StateReasonCode["Restoring"] = "Restoring";
    StateReasonCode["SubnetOutOfIPAddresses"] = "SubnetOutOfIPAddresses";
})(StateReasonCode = exports.StateReasonCode || (exports.StateReasonCode = {}));
var TracingConfigResponse;
(function (TracingConfigResponse) {
    /**
     * @internal
     */
    TracingConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TracingConfigResponse = exports.TracingConfigResponse || (exports.TracingConfigResponse = {}));
var VpcConfigResponse;
(function (VpcConfigResponse) {
    /**
     * @internal
     */
    VpcConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VpcConfigResponse = exports.VpcConfigResponse || (exports.VpcConfigResponse = {}));
var FunctionConfiguration;
(function (FunctionConfiguration) {
    /**
     * @internal
     */
    FunctionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Environment && { Environment: EnvironmentResponse.filterSensitiveLog(obj.Environment) }),
        ...(obj.ImageConfigResponse && {
            ImageConfigResponse: ImageConfigResponse.filterSensitiveLog(obj.ImageConfigResponse),
        }),
    });
})(FunctionConfiguration = exports.FunctionConfiguration || (exports.FunctionConfiguration = {}));
var InvalidCodeSignatureException;
(function (InvalidCodeSignatureException) {
    /**
     * @internal
     */
    InvalidCodeSignatureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidCodeSignatureException = exports.InvalidCodeSignatureException || (exports.InvalidCodeSignatureException = {}));
var DeleteAliasRequest;
(function (DeleteAliasRequest) {
    /**
     * @internal
     */
    DeleteAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAliasRequest = exports.DeleteAliasRequest || (exports.DeleteAliasRequest = {}));
var DeleteCodeSigningConfigRequest;
(function (DeleteCodeSigningConfigRequest) {
    /**
     * @internal
     */
    DeleteCodeSigningConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCodeSigningConfigRequest = exports.DeleteCodeSigningConfigRequest || (exports.DeleteCodeSigningConfigRequest = {}));
var DeleteCodeSigningConfigResponse;
(function (DeleteCodeSigningConfigResponse) {
    /**
     * @internal
     */
    DeleteCodeSigningConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCodeSigningConfigResponse = exports.DeleteCodeSigningConfigResponse || (exports.DeleteCodeSigningConfigResponse = {}));
var DeleteEventSourceMappingRequest;
(function (DeleteEventSourceMappingRequest) {
    /**
     * @internal
     */
    DeleteEventSourceMappingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEventSourceMappingRequest = exports.DeleteEventSourceMappingRequest || (exports.DeleteEventSourceMappingRequest = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var DeleteFunctionRequest;
(function (DeleteFunctionRequest) {
    /**
     * @internal
     */
    DeleteFunctionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFunctionRequest = exports.DeleteFunctionRequest || (exports.DeleteFunctionRequest = {}));
var DeleteFunctionCodeSigningConfigRequest;
(function (DeleteFunctionCodeSigningConfigRequest) {
    /**
     * @internal
     */
    DeleteFunctionCodeSigningConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFunctionCodeSigningConfigRequest = exports.DeleteFunctionCodeSigningConfigRequest || (exports.DeleteFunctionCodeSigningConfigRequest = {}));
var DeleteFunctionConcurrencyRequest;
(function (DeleteFunctionConcurrencyRequest) {
    /**
     * @internal
     */
    DeleteFunctionConcurrencyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFunctionConcurrencyRequest = exports.DeleteFunctionConcurrencyRequest || (exports.DeleteFunctionConcurrencyRequest = {}));
var DeleteFunctionEventInvokeConfigRequest;
(function (DeleteFunctionEventInvokeConfigRequest) {
    /**
     * @internal
     */
    DeleteFunctionEventInvokeConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFunctionEventInvokeConfigRequest = exports.DeleteFunctionEventInvokeConfigRequest || (exports.DeleteFunctionEventInvokeConfigRequest = {}));
var DeleteLayerVersionRequest;
(function (DeleteLayerVersionRequest) {
    /**
     * @internal
     */
    DeleteLayerVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLayerVersionRequest = exports.DeleteLayerVersionRequest || (exports.DeleteLayerVersionRequest = {}));
var DeleteProvisionedConcurrencyConfigRequest;
(function (DeleteProvisionedConcurrencyConfigRequest) {
    /**
     * @internal
     */
    DeleteProvisionedConcurrencyConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProvisionedConcurrencyConfigRequest = exports.DeleteProvisionedConcurrencyConfigRequest || (exports.DeleteProvisionedConcurrencyConfigRequest = {}));
var GetAccountSettingsRequest;
(function (GetAccountSettingsRequest) {
    /**
     * @internal
     */
    GetAccountSettingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccountSettingsRequest = exports.GetAccountSettingsRequest || (exports.GetAccountSettingsRequest = {}));
var GetAccountSettingsResponse;
(function (GetAccountSettingsResponse) {
    /**
     * @internal
     */
    GetAccountSettingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccountSettingsResponse = exports.GetAccountSettingsResponse || (exports.GetAccountSettingsResponse = {}));
var GetAliasRequest;
(function (GetAliasRequest) {
    /**
     * @internal
     */
    GetAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAliasRequest = exports.GetAliasRequest || (exports.GetAliasRequest = {}));
var GetCodeSigningConfigRequest;
(function (GetCodeSigningConfigRequest) {
    /**
     * @internal
     */
    GetCodeSigningConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCodeSigningConfigRequest = exports.GetCodeSigningConfigRequest || (exports.GetCodeSigningConfigRequest = {}));
var GetCodeSigningConfigResponse;
(function (GetCodeSigningConfigResponse) {
    /**
     * @internal
     */
    GetCodeSigningConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCodeSigningConfigResponse = exports.GetCodeSigningConfigResponse || (exports.GetCodeSigningConfigResponse = {}));
var GetEventSourceMappingRequest;
(function (GetEventSourceMappingRequest) {
    /**
     * @internal
     */
    GetEventSourceMappingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEventSourceMappingRequest = exports.GetEventSourceMappingRequest || (exports.GetEventSourceMappingRequest = {}));
var GetFunctionRequest;
(function (GetFunctionRequest) {
    /**
     * @internal
     */
    GetFunctionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFunctionRequest = exports.GetFunctionRequest || (exports.GetFunctionRequest = {}));
var FunctionCodeLocation;
(function (FunctionCodeLocation) {
    /**
     * @internal
     */
    FunctionCodeLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FunctionCodeLocation = exports.FunctionCodeLocation || (exports.FunctionCodeLocation = {}));
var Concurrency;
(function (Concurrency) {
    /**
     * @internal
     */
    Concurrency.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Concurrency = exports.Concurrency || (exports.Concurrency = {}));
var GetFunctionResponse;
(function (GetFunctionResponse) {
    /**
     * @internal
     */
    GetFunctionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Configuration && { Configuration: FunctionConfiguration.filterSensitiveLog(obj.Configuration) }),
    });
})(GetFunctionResponse = exports.GetFunctionResponse || (exports.GetFunctionResponse = {}));
var GetFunctionCodeSigningConfigRequest;
(function (GetFunctionCodeSigningConfigRequest) {
    /**
     * @internal
     */
    GetFunctionCodeSigningConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFunctionCodeSigningConfigRequest = exports.GetFunctionCodeSigningConfigRequest || (exports.GetFunctionCodeSigningConfigRequest = {}));
var GetFunctionCodeSigningConfigResponse;
(function (GetFunctionCodeSigningConfigResponse) {
    /**
     * @internal
     */
    GetFunctionCodeSigningConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFunctionCodeSigningConfigResponse = exports.GetFunctionCodeSigningConfigResponse || (exports.GetFunctionCodeSigningConfigResponse = {}));
var GetFunctionConcurrencyRequest;
(function (GetFunctionConcurrencyRequest) {
    /**
     * @internal
     */
    GetFunctionConcurrencyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFunctionConcurrencyRequest = exports.GetFunctionConcurrencyRequest || (exports.GetFunctionConcurrencyRequest = {}));
var GetFunctionConcurrencyResponse;
(function (GetFunctionConcurrencyResponse) {
    /**
     * @internal
     */
    GetFunctionConcurrencyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFunctionConcurrencyResponse = exports.GetFunctionConcurrencyResponse || (exports.GetFunctionConcurrencyResponse = {}));
var GetFunctionConfigurationRequest;
(function (GetFunctionConfigurationRequest) {
    /**
     * @internal
     */
    GetFunctionConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFunctionConfigurationRequest = exports.GetFunctionConfigurationRequest || (exports.GetFunctionConfigurationRequest = {}));
var FunctionEventInvokeConfig;
(function (FunctionEventInvokeConfig) {
    /**
     * @internal
     */
    FunctionEventInvokeConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FunctionEventInvokeConfig = exports.FunctionEventInvokeConfig || (exports.FunctionEventInvokeConfig = {}));
var GetFunctionEventInvokeConfigRequest;
(function (GetFunctionEventInvokeConfigRequest) {
    /**
     * @internal
     */
    GetFunctionEventInvokeConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFunctionEventInvokeConfigRequest = exports.GetFunctionEventInvokeConfigRequest || (exports.GetFunctionEventInvokeConfigRequest = {}));
var GetLayerVersionRequest;
(function (GetLayerVersionRequest) {
    /**
     * @internal
     */
    GetLayerVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLayerVersionRequest = exports.GetLayerVersionRequest || (exports.GetLayerVersionRequest = {}));
var LayerVersionContentOutput;
(function (LayerVersionContentOutput) {
    /**
     * @internal
     */
    LayerVersionContentOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LayerVersionContentOutput = exports.LayerVersionContentOutput || (exports.LayerVersionContentOutput = {}));
var GetLayerVersionResponse;
(function (GetLayerVersionResponse) {
    /**
     * @internal
     */
    GetLayerVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLayerVersionResponse = exports.GetLayerVersionResponse || (exports.GetLayerVersionResponse = {}));
var GetLayerVersionByArnRequest;
(function (GetLayerVersionByArnRequest) {
    /**
     * @internal
     */
    GetLayerVersionByArnRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLayerVersionByArnRequest = exports.GetLayerVersionByArnRequest || (exports.GetLayerVersionByArnRequest = {}));
var GetLayerVersionPolicyRequest;
(function (GetLayerVersionPolicyRequest) {
    /**
     * @internal
     */
    GetLayerVersionPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLayerVersionPolicyRequest = exports.GetLayerVersionPolicyRequest || (exports.GetLayerVersionPolicyRequest = {}));
var GetLayerVersionPolicyResponse;
(function (GetLayerVersionPolicyResponse) {
    /**
     * @internal
     */
    GetLayerVersionPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLayerVersionPolicyResponse = exports.GetLayerVersionPolicyResponse || (exports.GetLayerVersionPolicyResponse = {}));
var GetPolicyRequest;
(function (GetPolicyRequest) {
    /**
     * @internal
     */
    GetPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPolicyRequest = exports.GetPolicyRequest || (exports.GetPolicyRequest = {}));
var GetPolicyResponse;
(function (GetPolicyResponse) {
    /**
     * @internal
     */
    GetPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPolicyResponse = exports.GetPolicyResponse || (exports.GetPolicyResponse = {}));
var GetProvisionedConcurrencyConfigRequest;
(function (GetProvisionedConcurrencyConfigRequest) {
    /**
     * @internal
     */
    GetProvisionedConcurrencyConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetProvisionedConcurrencyConfigRequest = exports.GetProvisionedConcurrencyConfigRequest || (exports.GetProvisionedConcurrencyConfigRequest = {}));
var ProvisionedConcurrencyStatusEnum;
(function (ProvisionedConcurrencyStatusEnum) {
    ProvisionedConcurrencyStatusEnum["FAILED"] = "FAILED";
    ProvisionedConcurrencyStatusEnum["IN_PROGRESS"] = "IN_PROGRESS";
    ProvisionedConcurrencyStatusEnum["READY"] = "READY";
})(ProvisionedConcurrencyStatusEnum = exports.ProvisionedConcurrencyStatusEnum || (exports.ProvisionedConcurrencyStatusEnum = {}));
var GetProvisionedConcurrencyConfigResponse;
(function (GetProvisionedConcurrencyConfigResponse) {
    /**
     * @internal
     */
    GetProvisionedConcurrencyConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetProvisionedConcurrencyConfigResponse = exports.GetProvisionedConcurrencyConfigResponse || (exports.GetProvisionedConcurrencyConfigResponse = {}));
var ProvisionedConcurrencyConfigNotFoundException;
(function (ProvisionedConcurrencyConfigNotFoundException) {
    /**
     * @internal
     */
    ProvisionedConcurrencyConfigNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisionedConcurrencyConfigNotFoundException = exports.ProvisionedConcurrencyConfigNotFoundException || (exports.ProvisionedConcurrencyConfigNotFoundException = {}));
var EC2AccessDeniedException;
(function (EC2AccessDeniedException) {
    /**
     * @internal
     */
    EC2AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EC2AccessDeniedException = exports.EC2AccessDeniedException || (exports.EC2AccessDeniedException = {}));
var EC2ThrottledException;
(function (EC2ThrottledException) {
    /**
     * @internal
     */
    EC2ThrottledException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EC2ThrottledException = exports.EC2ThrottledException || (exports.EC2ThrottledException = {}));
var EC2UnexpectedException;
(function (EC2UnexpectedException) {
    /**
     * @internal
     */
    EC2UnexpectedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EC2UnexpectedException = exports.EC2UnexpectedException || (exports.EC2UnexpectedException = {}));
var EFSIOException;
(function (EFSIOException) {
    /**
     * @internal
     */
    EFSIOException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EFSIOException = exports.EFSIOException || (exports.EFSIOException = {}));
var EFSMountConnectivityException;
(function (EFSMountConnectivityException) {
    /**
     * @internal
     */
    EFSMountConnectivityException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EFSMountConnectivityException = exports.EFSMountConnectivityException || (exports.EFSMountConnectivityException = {}));
var EFSMountFailureException;
(function (EFSMountFailureException) {
    /**
     * @internal
     */
    EFSMountFailureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EFSMountFailureException = exports.EFSMountFailureException || (exports.EFSMountFailureException = {}));
var EFSMountTimeoutException;
(function (EFSMountTimeoutException) {
    /**
     * @internal
     */
    EFSMountTimeoutException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EFSMountTimeoutException = exports.EFSMountTimeoutException || (exports.EFSMountTimeoutException = {}));
var ENILimitReachedException;
(function (ENILimitReachedException) {
    /**
     * @internal
     */
    ENILimitReachedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ENILimitReachedException = exports.ENILimitReachedException || (exports.ENILimitReachedException = {}));
var InvalidRequestContentException;
(function (InvalidRequestContentException) {
    /**
     * @internal
     */
    InvalidRequestContentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestContentException = exports.InvalidRequestContentException || (exports.InvalidRequestContentException = {}));
var InvalidRuntimeException;
(function (InvalidRuntimeException) {
    /**
     * @internal
     */
    InvalidRuntimeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRuntimeException = exports.InvalidRuntimeException || (exports.InvalidRuntimeException = {}));
var InvalidSecurityGroupIDException;
(function (InvalidSecurityGroupIDException) {
    /**
     * @internal
     */
    InvalidSecurityGroupIDException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSecurityGroupIDException = exports.InvalidSecurityGroupIDException || (exports.InvalidSecurityGroupIDException = {}));
var InvalidSubnetIDException;
(function (InvalidSubnetIDException) {
    /**
     * @internal
     */
    InvalidSubnetIDException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidSubnetIDException = exports.InvalidSubnetIDException || (exports.InvalidSubnetIDException = {}));
var InvalidZipFileException;
(function (InvalidZipFileException) {
    /**
     * @internal
     */
    InvalidZipFileException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidZipFileException = exports.InvalidZipFileException || (exports.InvalidZipFileException = {}));
var InvocationType;
(function (InvocationType) {
    InvocationType["DryRun"] = "DryRun";
    InvocationType["Event"] = "Event";
    InvocationType["RequestResponse"] = "RequestResponse";
})(InvocationType = exports.InvocationType || (exports.InvocationType = {}));
var LogType;
(function (LogType) {
    LogType["None"] = "None";
    LogType["Tail"] = "Tail";
})(LogType = exports.LogType || (exports.LogType = {}));
var InvocationRequest;
(function (InvocationRequest) {
    /**
     * @internal
     */
    InvocationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Payload && { Payload: smithy_client_1.SENSITIVE_STRING }),
    });
})(InvocationRequest = exports.InvocationRequest || (exports.InvocationRequest = {}));
var InvocationResponse;
(function (InvocationResponse) {
    /**
     * @internal
     */
    InvocationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Payload && { Payload: smithy_client_1.SENSITIVE_STRING }),
    });
})(InvocationResponse = exports.InvocationResponse || (exports.InvocationResponse = {}));
var KMSAccessDeniedException;
(function (KMSAccessDeniedException) {
    /**
     * @internal
     */
    KMSAccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSAccessDeniedException = exports.KMSAccessDeniedException || (exports.KMSAccessDeniedException = {}));
var KMSDisabledException;
(function (KMSDisabledException) {
    /**
     * @internal
     */
    KMSDisabledException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSDisabledException = exports.KMSDisabledException || (exports.KMSDisabledException = {}));
var KMSInvalidStateException;
(function (KMSInvalidStateException) {
    /**
     * @internal
     */
    KMSInvalidStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSInvalidStateException = exports.KMSInvalidStateException || (exports.KMSInvalidStateException = {}));
var KMSNotFoundException;
(function (KMSNotFoundException) {
    /**
     * @internal
     */
    KMSNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KMSNotFoundException = exports.KMSNotFoundException || (exports.KMSNotFoundException = {}));
var RequestTooLargeException;
(function (RequestTooLargeException) {
    /**
     * @internal
     */
    RequestTooLargeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestTooLargeException = exports.RequestTooLargeException || (exports.RequestTooLargeException = {}));
var ResourceNotReadyException;
(function (ResourceNotReadyException) {
    /**
     * @internal
     */
    ResourceNotReadyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotReadyException = exports.ResourceNotReadyException || (exports.ResourceNotReadyException = {}));
var SubnetIPAddressLimitReachedException;
(function (SubnetIPAddressLimitReachedException) {
    /**
     * @internal
     */
    SubnetIPAddressLimitReachedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubnetIPAddressLimitReachedException = exports.SubnetIPAddressLimitReachedException || (exports.SubnetIPAddressLimitReachedException = {}));
var UnsupportedMediaTypeException;
(function (UnsupportedMediaTypeException) {
    /**
     * @internal
     */
    UnsupportedMediaTypeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedMediaTypeException = exports.UnsupportedMediaTypeException || (exports.UnsupportedMediaTypeException = {}));
var InvokeAsyncRequest;
(function (InvokeAsyncRequest) {
    /**
     * @internal
     */
    InvokeAsyncRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvokeAsyncRequest = exports.InvokeAsyncRequest || (exports.InvokeAsyncRequest = {}));
var InvokeAsyncResponse;
(function (InvokeAsyncResponse) {
    /**
     * @internal
     */
    InvokeAsyncResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvokeAsyncResponse = exports.InvokeAsyncResponse || (exports.InvokeAsyncResponse = {}));
var ListAliasesRequest;
(function (ListAliasesRequest) {
    /**
     * @internal
     */
    ListAliasesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAliasesRequest = exports.ListAliasesRequest || (exports.ListAliasesRequest = {}));
var ListAliasesResponse;
(function (ListAliasesResponse) {
    /**
     * @internal
     */
    ListAliasesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAliasesResponse = exports.ListAliasesResponse || (exports.ListAliasesResponse = {}));
var ListCodeSigningConfigsRequest;
(function (ListCodeSigningConfigsRequest) {
    /**
     * @internal
     */
    ListCodeSigningConfigsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCodeSigningConfigsRequest = exports.ListCodeSigningConfigsRequest || (exports.ListCodeSigningConfigsRequest = {}));
var ListCodeSigningConfigsResponse;
(function (ListCodeSigningConfigsResponse) {
    /**
     * @internal
     */
    ListCodeSigningConfigsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCodeSigningConfigsResponse = exports.ListCodeSigningConfigsResponse || (exports.ListCodeSigningConfigsResponse = {}));
var ListEventSourceMappingsRequest;
(function (ListEventSourceMappingsRequest) {
    /**
     * @internal
     */
    ListEventSourceMappingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEventSourceMappingsRequest = exports.ListEventSourceMappingsRequest || (exports.ListEventSourceMappingsRequest = {}));
var ListEventSourceMappingsResponse;
(function (ListEventSourceMappingsResponse) {
    /**
     * @internal
     */
    ListEventSourceMappingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEventSourceMappingsResponse = exports.ListEventSourceMappingsResponse || (exports.ListEventSourceMappingsResponse = {}));
var ListFunctionEventInvokeConfigsRequest;
(function (ListFunctionEventInvokeConfigsRequest) {
    /**
     * @internal
     */
    ListFunctionEventInvokeConfigsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFunctionEventInvokeConfigsRequest = exports.ListFunctionEventInvokeConfigsRequest || (exports.ListFunctionEventInvokeConfigsRequest = {}));
var ListFunctionEventInvokeConfigsResponse;
(function (ListFunctionEventInvokeConfigsResponse) {
    /**
     * @internal
     */
    ListFunctionEventInvokeConfigsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFunctionEventInvokeConfigsResponse = exports.ListFunctionEventInvokeConfigsResponse || (exports.ListFunctionEventInvokeConfigsResponse = {}));
var FunctionVersion;
(function (FunctionVersion) {
    FunctionVersion["ALL"] = "ALL";
})(FunctionVersion = exports.FunctionVersion || (exports.FunctionVersion = {}));
var ListFunctionsRequest;
(function (ListFunctionsRequest) {
    /**
     * @internal
     */
    ListFunctionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFunctionsRequest = exports.ListFunctionsRequest || (exports.ListFunctionsRequest = {}));
var ListFunctionsResponse;
(function (ListFunctionsResponse) {
    /**
     * @internal
     */
    ListFunctionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Functions && { Functions: obj.Functions.map((item) => FunctionConfiguration.filterSensitiveLog(item)) }),
    });
})(ListFunctionsResponse = exports.ListFunctionsResponse || (exports.ListFunctionsResponse = {}));
var ListFunctionsByCodeSigningConfigRequest;
(function (ListFunctionsByCodeSigningConfigRequest) {
    /**
     * @internal
     */
    ListFunctionsByCodeSigningConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFunctionsByCodeSigningConfigRequest = exports.ListFunctionsByCodeSigningConfigRequest || (exports.ListFunctionsByCodeSigningConfigRequest = {}));
var ListFunctionsByCodeSigningConfigResponse;
(function (ListFunctionsByCodeSigningConfigResponse) {
    /**
     * @internal
     */
    ListFunctionsByCodeSigningConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFunctionsByCodeSigningConfigResponse = exports.ListFunctionsByCodeSigningConfigResponse || (exports.ListFunctionsByCodeSigningConfigResponse = {}));
var ListLayersRequest;
(function (ListLayersRequest) {
    /**
     * @internal
     */
    ListLayersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLayersRequest = exports.ListLayersRequest || (exports.ListLayersRequest = {}));
var LayerVersionsListItem;
(function (LayerVersionsListItem) {
    /**
     * @internal
     */
    LayerVersionsListItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LayerVersionsListItem = exports.LayerVersionsListItem || (exports.LayerVersionsListItem = {}));
var LayersListItem;
(function (LayersListItem) {
    /**
     * @internal
     */
    LayersListItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LayersListItem = exports.LayersListItem || (exports.LayersListItem = {}));
var ListLayersResponse;
(function (ListLayersResponse) {
    /**
     * @internal
     */
    ListLayersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLayersResponse = exports.ListLayersResponse || (exports.ListLayersResponse = {}));
var ListLayerVersionsRequest;
(function (ListLayerVersionsRequest) {
    /**
     * @internal
     */
    ListLayerVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLayerVersionsRequest = exports.ListLayerVersionsRequest || (exports.ListLayerVersionsRequest = {}));
var ListLayerVersionsResponse;
(function (ListLayerVersionsResponse) {
    /**
     * @internal
     */
    ListLayerVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLayerVersionsResponse = exports.ListLayerVersionsResponse || (exports.ListLayerVersionsResponse = {}));
var ListProvisionedConcurrencyConfigsRequest;
(function (ListProvisionedConcurrencyConfigsRequest) {
    /**
     * @internal
     */
    ListProvisionedConcurrencyConfigsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProvisionedConcurrencyConfigsRequest = exports.ListProvisionedConcurrencyConfigsRequest || (exports.ListProvisionedConcurrencyConfigsRequest = {}));
var ProvisionedConcurrencyConfigListItem;
(function (ProvisionedConcurrencyConfigListItem) {
    /**
     * @internal
     */
    ProvisionedConcurrencyConfigListItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisionedConcurrencyConfigListItem = exports.ProvisionedConcurrencyConfigListItem || (exports.ProvisionedConcurrencyConfigListItem = {}));
var ListProvisionedConcurrencyConfigsResponse;
(function (ListProvisionedConcurrencyConfigsResponse) {
    /**
     * @internal
     */
    ListProvisionedConcurrencyConfigsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProvisionedConcurrencyConfigsResponse = exports.ListProvisionedConcurrencyConfigsResponse || (exports.ListProvisionedConcurrencyConfigsResponse = {}));
var ListTagsRequest;
(function (ListTagsRequest) {
    /**
     * @internal
     */
    ListTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsRequest = exports.ListTagsRequest || (exports.ListTagsRequest = {}));
var ListTagsResponse;
(function (ListTagsResponse) {
    /**
     * @internal
     */
    ListTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsResponse = exports.ListTagsResponse || (exports.ListTagsResponse = {}));
var ListVersionsByFunctionRequest;
(function (ListVersionsByFunctionRequest) {
    /**
     * @internal
     */
    ListVersionsByFunctionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListVersionsByFunctionRequest = exports.ListVersionsByFunctionRequest || (exports.ListVersionsByFunctionRequest = {}));
var ListVersionsByFunctionResponse;
(function (ListVersionsByFunctionResponse) {
    /**
     * @internal
     */
    ListVersionsByFunctionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Versions && { Versions: obj.Versions.map((item) => FunctionConfiguration.filterSensitiveLog(item)) }),
    });
})(ListVersionsByFunctionResponse = exports.ListVersionsByFunctionResponse || (exports.ListVersionsByFunctionResponse = {}));
var LayerVersionContentInput;
(function (LayerVersionContentInput) {
    /**
     * @internal
     */
    LayerVersionContentInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ZipFile && { ZipFile: smithy_client_1.SENSITIVE_STRING }),
    });
})(LayerVersionContentInput = exports.LayerVersionContentInput || (exports.LayerVersionContentInput = {}));
var PublishLayerVersionRequest;
(function (PublishLayerVersionRequest) {
    /**
     * @internal
     */
    PublishLayerVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Content && { Content: LayerVersionContentInput.filterSensitiveLog(obj.Content) }),
    });
})(PublishLayerVersionRequest = exports.PublishLayerVersionRequest || (exports.PublishLayerVersionRequest = {}));
var PublishLayerVersionResponse;
(function (PublishLayerVersionResponse) {
    /**
     * @internal
     */
    PublishLayerVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PublishLayerVersionResponse = exports.PublishLayerVersionResponse || (exports.PublishLayerVersionResponse = {}));
var PublishVersionRequest;
(function (PublishVersionRequest) {
    /**
     * @internal
     */
    PublishVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PublishVersionRequest = exports.PublishVersionRequest || (exports.PublishVersionRequest = {}));
var PutFunctionCodeSigningConfigRequest;
(function (PutFunctionCodeSigningConfigRequest) {
    /**
     * @internal
     */
    PutFunctionCodeSigningConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutFunctionCodeSigningConfigRequest = exports.PutFunctionCodeSigningConfigRequest || (exports.PutFunctionCodeSigningConfigRequest = {}));
var PutFunctionCodeSigningConfigResponse;
(function (PutFunctionCodeSigningConfigResponse) {
    /**
     * @internal
     */
    PutFunctionCodeSigningConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutFunctionCodeSigningConfigResponse = exports.PutFunctionCodeSigningConfigResponse || (exports.PutFunctionCodeSigningConfigResponse = {}));
var PutFunctionConcurrencyRequest;
(function (PutFunctionConcurrencyRequest) {
    /**
     * @internal
     */
    PutFunctionConcurrencyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutFunctionConcurrencyRequest = exports.PutFunctionConcurrencyRequest || (exports.PutFunctionConcurrencyRequest = {}));
var PutFunctionEventInvokeConfigRequest;
(function (PutFunctionEventInvokeConfigRequest) {
    /**
     * @internal
     */
    PutFunctionEventInvokeConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutFunctionEventInvokeConfigRequest = exports.PutFunctionEventInvokeConfigRequest || (exports.PutFunctionEventInvokeConfigRequest = {}));
var PutProvisionedConcurrencyConfigRequest;
(function (PutProvisionedConcurrencyConfigRequest) {
    /**
     * @internal
     */
    PutProvisionedConcurrencyConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutProvisionedConcurrencyConfigRequest = exports.PutProvisionedConcurrencyConfigRequest || (exports.PutProvisionedConcurrencyConfigRequest = {}));
var PutProvisionedConcurrencyConfigResponse;
(function (PutProvisionedConcurrencyConfigResponse) {
    /**
     * @internal
     */
    PutProvisionedConcurrencyConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutProvisionedConcurrencyConfigResponse = exports.PutProvisionedConcurrencyConfigResponse || (exports.PutProvisionedConcurrencyConfigResponse = {}));
var RemoveLayerVersionPermissionRequest;
(function (RemoveLayerVersionPermissionRequest) {
    /**
     * @internal
     */
    RemoveLayerVersionPermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveLayerVersionPermissionRequest = exports.RemoveLayerVersionPermissionRequest || (exports.RemoveLayerVersionPermissionRequest = {}));
var RemovePermissionRequest;
(function (RemovePermissionRequest) {
    /**
     * @internal
     */
    RemovePermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemovePermissionRequest = exports.RemovePermissionRequest || (exports.RemovePermissionRequest = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UpdateAliasRequest;
(function (UpdateAliasRequest) {
    /**
     * @internal
     */
    UpdateAliasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAliasRequest = exports.UpdateAliasRequest || (exports.UpdateAliasRequest = {}));
var UpdateCodeSigningConfigRequest;
(function (UpdateCodeSigningConfigRequest) {
    /**
     * @internal
     */
    UpdateCodeSigningConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCodeSigningConfigRequest = exports.UpdateCodeSigningConfigRequest || (exports.UpdateCodeSigningConfigRequest = {}));
var UpdateCodeSigningConfigResponse;
(function (UpdateCodeSigningConfigResponse) {
    /**
     * @internal
     */
    UpdateCodeSigningConfigResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCodeSigningConfigResponse = exports.UpdateCodeSigningConfigResponse || (exports.UpdateCodeSigningConfigResponse = {}));
var UpdateEventSourceMappingRequest;
(function (UpdateEventSourceMappingRequest) {
    /**
     * @internal
     */
    UpdateEventSourceMappingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateEventSourceMappingRequest = exports.UpdateEventSourceMappingRequest || (exports.UpdateEventSourceMappingRequest = {}));
var UpdateFunctionCodeRequest;
(function (UpdateFunctionCodeRequest) {
    /**
     * @internal
     */
    UpdateFunctionCodeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ZipFile && { ZipFile: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateFunctionCodeRequest = exports.UpdateFunctionCodeRequest || (exports.UpdateFunctionCodeRequest = {}));
var UpdateFunctionConfigurationRequest;
(function (UpdateFunctionConfigurationRequest) {
    /**
     * @internal
     */
    UpdateFunctionConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Environment && { Environment: Environment.filterSensitiveLog(obj.Environment) }),
    });
})(UpdateFunctionConfigurationRequest = exports.UpdateFunctionConfigurationRequest || (exports.UpdateFunctionConfigurationRequest = {}));
var UpdateFunctionEventInvokeConfigRequest;
(function (UpdateFunctionEventInvokeConfigRequest) {
    /**
     * @internal
     */
    UpdateFunctionEventInvokeConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateFunctionEventInvokeConfigRequest = exports.UpdateFunctionEventInvokeConfigRequest || (exports.UpdateFunctionEventInvokeConfigRequest = {}));
//# sourceMappingURL=models_0.js.map