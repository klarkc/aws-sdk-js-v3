"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LambdaThrottledException = exports.InvalidLambdaFunctionOutputException = exports.UnsubscribeFromDatasetResponse = exports.UnsubscribeFromDatasetRequest = exports.SubscribeToDatasetResponse = exports.SubscribeToDatasetRequest = exports.SetIdentityPoolConfigurationResponse = exports.SetIdentityPoolConfigurationRequest = exports.ConcurrentModificationException = exports.SetCognitoEventsRequest = exports.RegisterDeviceResponse = exports.RegisterDeviceRequest = exports.InvalidConfigurationException = exports.ListRecordsResponse = exports._Record = exports.ListRecordsRequest = exports.ListIdentityPoolUsageResponse = exports.ListIdentityPoolUsageRequest = exports.ListDatasetsResponse = exports.ListDatasetsRequest = exports.GetIdentityPoolConfigurationResponse = exports.PushSync = exports.CognitoStreams = exports.GetIdentityPoolConfigurationRequest = exports.GetCognitoEventsResponse = exports.GetCognitoEventsRequest = exports.GetBulkPublishDetailsResponse = exports.BulkPublishStatus = exports.GetBulkPublishDetailsRequest = exports.DescribeIdentityUsageResponse = exports.IdentityUsage = exports.DescribeIdentityUsageRequest = exports.DescribeIdentityPoolUsageResponse = exports.IdentityPoolUsage = exports.DescribeIdentityPoolUsageRequest = exports.DescribeDatasetResponse = exports.DescribeDatasetRequest = exports.TooManyRequestsException = exports.ResourceConflictException = exports.DeleteDatasetResponse = exports.Dataset = exports.DeleteDatasetRequest = exports.ResourceNotFoundException = exports.NotAuthorizedException = exports.InvalidParameterException = exports.InternalErrorException = exports.DuplicateRequestException = exports.BulkPublishResponse = exports.BulkPublishRequest = exports.AlreadyStreamedException = void 0;
exports.UpdateRecordsResponse = exports.UpdateRecordsRequest = exports.RecordPatch = exports.LimitExceededException = void 0;
var AlreadyStreamedException;
(function (AlreadyStreamedException) {
    /**
     * @internal
     */
    AlreadyStreamedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlreadyStreamedException = exports.AlreadyStreamedException || (exports.AlreadyStreamedException = {}));
var BulkPublishRequest;
(function (BulkPublishRequest) {
    /**
     * @internal
     */
    BulkPublishRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BulkPublishRequest = exports.BulkPublishRequest || (exports.BulkPublishRequest = {}));
var BulkPublishResponse;
(function (BulkPublishResponse) {
    /**
     * @internal
     */
    BulkPublishResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BulkPublishResponse = exports.BulkPublishResponse || (exports.BulkPublishResponse = {}));
var DuplicateRequestException;
(function (DuplicateRequestException) {
    /**
     * @internal
     */
    DuplicateRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DuplicateRequestException = exports.DuplicateRequestException || (exports.DuplicateRequestException = {}));
var InternalErrorException;
(function (InternalErrorException) {
    /**
     * @internal
     */
    InternalErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalErrorException = exports.InternalErrorException || (exports.InternalErrorException = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var NotAuthorizedException;
(function (NotAuthorizedException) {
    /**
     * @internal
     */
    NotAuthorizedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotAuthorizedException = exports.NotAuthorizedException || (exports.NotAuthorizedException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var DeleteDatasetRequest;
(function (DeleteDatasetRequest) {
    /**
     * @internal
     */
    DeleteDatasetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDatasetRequest = exports.DeleteDatasetRequest || (exports.DeleteDatasetRequest = {}));
var Dataset;
(function (Dataset) {
    /**
     * @internal
     */
    Dataset.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Dataset = exports.Dataset || (exports.Dataset = {}));
var DeleteDatasetResponse;
(function (DeleteDatasetResponse) {
    /**
     * @internal
     */
    DeleteDatasetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDatasetResponse = exports.DeleteDatasetResponse || (exports.DeleteDatasetResponse = {}));
var ResourceConflictException;
(function (ResourceConflictException) {
    /**
     * @internal
     */
    ResourceConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceConflictException = exports.ResourceConflictException || (exports.ResourceConflictException = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var DescribeDatasetRequest;
(function (DescribeDatasetRequest) {
    /**
     * @internal
     */
    DescribeDatasetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDatasetRequest = exports.DescribeDatasetRequest || (exports.DescribeDatasetRequest = {}));
var DescribeDatasetResponse;
(function (DescribeDatasetResponse) {
    /**
     * @internal
     */
    DescribeDatasetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDatasetResponse = exports.DescribeDatasetResponse || (exports.DescribeDatasetResponse = {}));
var DescribeIdentityPoolUsageRequest;
(function (DescribeIdentityPoolUsageRequest) {
    /**
     * @internal
     */
    DescribeIdentityPoolUsageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIdentityPoolUsageRequest = exports.DescribeIdentityPoolUsageRequest || (exports.DescribeIdentityPoolUsageRequest = {}));
var IdentityPoolUsage;
(function (IdentityPoolUsage) {
    /**
     * @internal
     */
    IdentityPoolUsage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdentityPoolUsage = exports.IdentityPoolUsage || (exports.IdentityPoolUsage = {}));
var DescribeIdentityPoolUsageResponse;
(function (DescribeIdentityPoolUsageResponse) {
    /**
     * @internal
     */
    DescribeIdentityPoolUsageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIdentityPoolUsageResponse = exports.DescribeIdentityPoolUsageResponse || (exports.DescribeIdentityPoolUsageResponse = {}));
var DescribeIdentityUsageRequest;
(function (DescribeIdentityUsageRequest) {
    /**
     * @internal
     */
    DescribeIdentityUsageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIdentityUsageRequest = exports.DescribeIdentityUsageRequest || (exports.DescribeIdentityUsageRequest = {}));
var IdentityUsage;
(function (IdentityUsage) {
    /**
     * @internal
     */
    IdentityUsage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdentityUsage = exports.IdentityUsage || (exports.IdentityUsage = {}));
var DescribeIdentityUsageResponse;
(function (DescribeIdentityUsageResponse) {
    /**
     * @internal
     */
    DescribeIdentityUsageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeIdentityUsageResponse = exports.DescribeIdentityUsageResponse || (exports.DescribeIdentityUsageResponse = {}));
var GetBulkPublishDetailsRequest;
(function (GetBulkPublishDetailsRequest) {
    /**
     * @internal
     */
    GetBulkPublishDetailsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBulkPublishDetailsRequest = exports.GetBulkPublishDetailsRequest || (exports.GetBulkPublishDetailsRequest = {}));
var BulkPublishStatus;
(function (BulkPublishStatus) {
    BulkPublishStatus["FAILED"] = "FAILED";
    BulkPublishStatus["IN_PROGRESS"] = "IN_PROGRESS";
    BulkPublishStatus["NOT_STARTED"] = "NOT_STARTED";
    BulkPublishStatus["SUCCEEDED"] = "SUCCEEDED";
})(BulkPublishStatus = exports.BulkPublishStatus || (exports.BulkPublishStatus = {}));
var GetBulkPublishDetailsResponse;
(function (GetBulkPublishDetailsResponse) {
    /**
     * @internal
     */
    GetBulkPublishDetailsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetBulkPublishDetailsResponse = exports.GetBulkPublishDetailsResponse || (exports.GetBulkPublishDetailsResponse = {}));
var GetCognitoEventsRequest;
(function (GetCognitoEventsRequest) {
    /**
     * @internal
     */
    GetCognitoEventsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCognitoEventsRequest = exports.GetCognitoEventsRequest || (exports.GetCognitoEventsRequest = {}));
var GetCognitoEventsResponse;
(function (GetCognitoEventsResponse) {
    /**
     * @internal
     */
    GetCognitoEventsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCognitoEventsResponse = exports.GetCognitoEventsResponse || (exports.GetCognitoEventsResponse = {}));
var GetIdentityPoolConfigurationRequest;
(function (GetIdentityPoolConfigurationRequest) {
    /**
     * @internal
     */
    GetIdentityPoolConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIdentityPoolConfigurationRequest = exports.GetIdentityPoolConfigurationRequest || (exports.GetIdentityPoolConfigurationRequest = {}));
var CognitoStreams;
(function (CognitoStreams) {
    /**
     * @internal
     */
    CognitoStreams.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CognitoStreams = exports.CognitoStreams || (exports.CognitoStreams = {}));
var PushSync;
(function (PushSync) {
    /**
     * @internal
     */
    PushSync.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PushSync = exports.PushSync || (exports.PushSync = {}));
var GetIdentityPoolConfigurationResponse;
(function (GetIdentityPoolConfigurationResponse) {
    /**
     * @internal
     */
    GetIdentityPoolConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIdentityPoolConfigurationResponse = exports.GetIdentityPoolConfigurationResponse || (exports.GetIdentityPoolConfigurationResponse = {}));
var ListDatasetsRequest;
(function (ListDatasetsRequest) {
    /**
     * @internal
     */
    ListDatasetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDatasetsRequest = exports.ListDatasetsRequest || (exports.ListDatasetsRequest = {}));
var ListDatasetsResponse;
(function (ListDatasetsResponse) {
    /**
     * @internal
     */
    ListDatasetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDatasetsResponse = exports.ListDatasetsResponse || (exports.ListDatasetsResponse = {}));
var ListIdentityPoolUsageRequest;
(function (ListIdentityPoolUsageRequest) {
    /**
     * @internal
     */
    ListIdentityPoolUsageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIdentityPoolUsageRequest = exports.ListIdentityPoolUsageRequest || (exports.ListIdentityPoolUsageRequest = {}));
var ListIdentityPoolUsageResponse;
(function (ListIdentityPoolUsageResponse) {
    /**
     * @internal
     */
    ListIdentityPoolUsageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIdentityPoolUsageResponse = exports.ListIdentityPoolUsageResponse || (exports.ListIdentityPoolUsageResponse = {}));
var ListRecordsRequest;
(function (ListRecordsRequest) {
    /**
     * @internal
     */
    ListRecordsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRecordsRequest = exports.ListRecordsRequest || (exports.ListRecordsRequest = {}));
var _Record;
(function (_Record) {
    /**
     * @internal
     */
    _Record.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(_Record = exports._Record || (exports._Record = {}));
var ListRecordsResponse;
(function (ListRecordsResponse) {
    /**
     * @internal
     */
    ListRecordsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRecordsResponse = exports.ListRecordsResponse || (exports.ListRecordsResponse = {}));
var InvalidConfigurationException;
(function (InvalidConfigurationException) {
    /**
     * @internal
     */
    InvalidConfigurationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidConfigurationException = exports.InvalidConfigurationException || (exports.InvalidConfigurationException = {}));
var RegisterDeviceRequest;
(function (RegisterDeviceRequest) {
    /**
     * @internal
     */
    RegisterDeviceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterDeviceRequest = exports.RegisterDeviceRequest || (exports.RegisterDeviceRequest = {}));
var RegisterDeviceResponse;
(function (RegisterDeviceResponse) {
    /**
     * @internal
     */
    RegisterDeviceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterDeviceResponse = exports.RegisterDeviceResponse || (exports.RegisterDeviceResponse = {}));
var SetCognitoEventsRequest;
(function (SetCognitoEventsRequest) {
    /**
     * @internal
     */
    SetCognitoEventsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetCognitoEventsRequest = exports.SetCognitoEventsRequest || (exports.SetCognitoEventsRequest = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var SetIdentityPoolConfigurationRequest;
(function (SetIdentityPoolConfigurationRequest) {
    /**
     * @internal
     */
    SetIdentityPoolConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetIdentityPoolConfigurationRequest = exports.SetIdentityPoolConfigurationRequest || (exports.SetIdentityPoolConfigurationRequest = {}));
var SetIdentityPoolConfigurationResponse;
(function (SetIdentityPoolConfigurationResponse) {
    /**
     * @internal
     */
    SetIdentityPoolConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetIdentityPoolConfigurationResponse = exports.SetIdentityPoolConfigurationResponse || (exports.SetIdentityPoolConfigurationResponse = {}));
var SubscribeToDatasetRequest;
(function (SubscribeToDatasetRequest) {
    /**
     * @internal
     */
    SubscribeToDatasetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubscribeToDatasetRequest = exports.SubscribeToDatasetRequest || (exports.SubscribeToDatasetRequest = {}));
var SubscribeToDatasetResponse;
(function (SubscribeToDatasetResponse) {
    /**
     * @internal
     */
    SubscribeToDatasetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubscribeToDatasetResponse = exports.SubscribeToDatasetResponse || (exports.SubscribeToDatasetResponse = {}));
var UnsubscribeFromDatasetRequest;
(function (UnsubscribeFromDatasetRequest) {
    /**
     * @internal
     */
    UnsubscribeFromDatasetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsubscribeFromDatasetRequest = exports.UnsubscribeFromDatasetRequest || (exports.UnsubscribeFromDatasetRequest = {}));
var UnsubscribeFromDatasetResponse;
(function (UnsubscribeFromDatasetResponse) {
    /**
     * @internal
     */
    UnsubscribeFromDatasetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsubscribeFromDatasetResponse = exports.UnsubscribeFromDatasetResponse || (exports.UnsubscribeFromDatasetResponse = {}));
var InvalidLambdaFunctionOutputException;
(function (InvalidLambdaFunctionOutputException) {
    /**
     * @internal
     */
    InvalidLambdaFunctionOutputException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidLambdaFunctionOutputException = exports.InvalidLambdaFunctionOutputException || (exports.InvalidLambdaFunctionOutputException = {}));
var LambdaThrottledException;
(function (LambdaThrottledException) {
    /**
     * @internal
     */
    LambdaThrottledException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaThrottledException = exports.LambdaThrottledException || (exports.LambdaThrottledException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var RecordPatch;
(function (RecordPatch) {
    /**
     * @internal
     */
    RecordPatch.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecordPatch = exports.RecordPatch || (exports.RecordPatch = {}));
var UpdateRecordsRequest;
(function (UpdateRecordsRequest) {
    /**
     * @internal
     */
    UpdateRecordsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRecordsRequest = exports.UpdateRecordsRequest || (exports.UpdateRecordsRequest = {}));
var UpdateRecordsResponse;
(function (UpdateRecordsResponse) {
    /**
     * @internal
     */
    UpdateRecordsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRecordsResponse = exports.UpdateRecordsResponse || (exports.UpdateRecordsResponse = {}));
//# sourceMappingURL=models_0.js.map